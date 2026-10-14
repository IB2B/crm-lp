import {
  MEETING_MINUTES,
  PLAN_FIELD_KEY,
  bookingSchema,
  fieldErrors,
  planTag,
  type BookingResponse,
} from "@/lib/booking"
import {
  GhlError,
  addAppointmentNote,
  addContactTags,
  createAppointment,
  getContactCustomFieldId,
  getFreeSlots,
  ghlBookingConfig,
  upsertContact,
} from "@/lib/ghl"
import { clientIp, rateLimit } from "@/lib/rate-limit"

const HOUR = 60 * 60 * 1000

function reply(body: BookingResponse, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } })
}

/** Is this exact start time still in the calendar's free slots? */
async function slotStillFree(config: NonNullable<ReturnType<typeof ghlBookingConfig>>, startMs: number, timezone: string) {
  // Look a few hours around the slot; compare instants, not strings (offsets can differ).
  const slots = await getFreeSlots(config, new Date(startMs - 12 * HOUR), new Date(startMs + 12 * HOUR), timezone)
  return slots.some((s) => Date.parse(s) === startMs)
}

// POST /api/booking
// Validates the form, re-checks the slot, upserts the contact (with the plan_interest field and tags)
// and creates a confirmed appointment on GHL_CALENDAR_ID. The visitor's message goes into an
// appointment note.
export async function POST(request: Request) {
  const config = ghlBookingConfig()
  if (!config) return reply({ ok: false, code: "unavailable" }, 503)

  let raw: unknown
  try {
    raw = await request.json()
  } catch {
    return reply({ ok: false, code: "invalid" }, 400)
  }

  const parsed = bookingSchema.safeParse(raw)
  if (!parsed.success) return reply({ ok: false, code: "invalid", fields: fieldErrors(parsed.error) }, 400)
  const data = parsed.data

  // Honeypot filled in: a bot. Answer like a success so it doesn't retry, but do nothing.
  if (data.website) {
    console.warn("[booking] honeypot filled, ignored")
    const end = new Date(Date.parse(data.slot) + MEETING_MINUTES * 60_000).toISOString()
    return reply({ ok: true, start: new Date(data.slot).toISOString(), end })
  }

  if (!rateLimit(`booking:${clientIp(request)}`, 5, HOUR)) {
    return reply({ ok: false, code: "rate_limited" }, 429)
  }

  const startMs = Date.parse(data.slot)
  if (startMs <= Date.now()) return reply({ ok: false, code: "slot_taken" }, 409)
  const start = new Date(startMs).toISOString()
  const end = new Date(startMs + MEETING_MINUTES * 60_000).toISOString()

  try {
    if (!(await slotStillFree(config, startMs, data.timezone))) {
      return reply({ ok: false, code: "slot_taken" }, 409)
    }

    // The plan_interest field ID: from GHL_PLAN_FIELD_ID if set, otherwise looked up by key.
    // If it can't be found (e.g. the token lacks the locations/customFields.readonly scope), the booking
    // still goes through and the plan is kept in the plan-… tag.
    const planFieldId =
      process.env.GHL_PLAN_FIELD_ID ||
      (await getContactCustomFieldId(config, PLAN_FIELD_KEY).catch((e) => {
        console.warn("[booking] plan_interest lookup failed:", e instanceof GhlError ? `${e.message} ${e.body}` : e)
        return null
      }))
    if (!planFieldId) console.warn(`[booking] GHL custom field "${PLAN_FIELD_KEY}" not found; plan saved as a tag only`)

    const contact = await upsertContact(config, {
      firstName: data.firstName,
      lastName: data.lastName,
      companyName: data.company,
      email: data.email,
      phone: data.phone,
      timezone: data.timezone,
      customFields: planFieldId ? [{ id: planFieldId, field_value: data.plan }] : undefined,
    })

    const tags = ["website-booking", planTag(data.plan)]
    if (data.consent) tags.push("marketing-consent")
    await addContactTags(config, contact.id, tags)

    let appointment
    try {
      appointment = await createAppointment(config, {
        contactId: contact.id,
        startTime: start,
        endTime: end,
        title: `TORCH call – ${data.plan} – ${data.firstName} ${data.lastName}`,
      })
    } catch (e) {
      // GHL validates the slot too: if someone booked it in the last seconds, it refuses with 4xx.
      if (e instanceof GhlError && e.status >= 400 && e.status < 500 && /slot|available|book/i.test(e.body)) {
        console.warn("[booking] slot refused by GHL:", e.body)
        return reply({ ok: false, code: "slot_taken" }, 409)
      }
      throw e
    }

    // The note is a nice-to-have: if it fails, the booking still stands.
    if (data.message) {
      await addAppointmentNote(config, appointment.id, data.message).catch((e) =>
        console.error("[booking] note failed:", e instanceof GhlError ? `${e.message} ${e.body}` : e)
      )
    }

    return reply({ ok: true, start, end })
  } catch (e) {
    console.error("[booking]", e instanceof GhlError ? `${e.message} ${e.body}` : e)
    return reply({ ok: false, code: "failed" }, 502)
  }
}

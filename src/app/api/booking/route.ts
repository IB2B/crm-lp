import { checkBotId } from "botid/server"

import {
  MEETING_MINUTES,
  PLAN_FIELD_KEY,
  bookingSchema,
  fieldErrors,
  planTag,
  type BookingData,
  type BookingResponse,
} from "@/lib/booking"
import {
  GhlError,
  addAppointmentNote,
  addContactTags,
  createAppointment,
  findExistingContact,
  getContactCustomFieldId,
  getFreeSlots,
  ghlBookingConfig,
  upsertContact,
} from "@/lib/ghl"
import { clientIp, rateLimit } from "@/lib/rate-limit"
import { isJson, isSameSite } from "@/lib/request-guard"

const HOUR = 60 * 60 * 1000

function reply(body: BookingResponse, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } })
}

/** For a contact that already exists: what was typed in the form, kept in the note instead of on the contact. */
function formDetails(data: BookingData) {
  return [
    "Booked on the website with an email or phone that matches this contact. Details typed in the form (not saved to the contact):",
    `Name: ${data.firstName} ${data.lastName}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Plan: ${data.plan}`,
  ].join("\n")
}

/** Is this exact start time still in the calendar's free slots? */
async function slotStillFree(config: NonNullable<ReturnType<typeof ghlBookingConfig>>, startMs: number, timezone: string) {
  // Look a few hours around the slot; compare instants, not strings (offsets can differ).
  const slots = await getFreeSlots(config, new Date(startMs - 12 * HOUR), new Date(startMs + 12 * HOUR), timezone)
  return slots.some((s) => Date.parse(s) === startMs)
}

// POST /api/booking
// Validates the form, re-checks the slot, finds or creates the contact (a new one gets the
// plan_interest field), adds the tags and creates a confirmed appointment on GHL_CALENDAR_ID.
// The visitor's message goes into an appointment note.
export async function POST(request: Request) {
  const config = ghlBookingConfig()
  if (!config) return reply({ ok: false, code: "unavailable" }, 503)

  // Only our own booking page may post here (see src/lib/request-guard.ts), and not bots (Vercel BotID).
  if (!isSameSite(request) || !isJson(request)) {
    console.warn("[booking] cross-site or non-JSON request rejected")
    return reply({ ok: false, code: "failed" }, 403)
  }
  if ((await checkBotId()).isBot) {
    console.warn("[booking] BotID flagged a bot, rejected")
    return reply({ ok: false, code: "failed" }, 403)
  }

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
    console.warn("[booking] rate limited")
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

    // Anyone can type any email or phone here, so an existing contact is never updated from the form:
    // the booking goes on that contact as it is, and the typed details go into the appointment note.
    const existingId = await findExistingContact(config, { email: data.email, phone: data.phone })
    let contactId = existingId
    if (!contactId) {
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
        source: "TORCH booking page",
        customFields: planFieldId ? [{ id: planFieldId, field_value: data.plan }] : undefined,
      })
      contactId = contact.id
    }

    const tags = ["website-booking", planTag(data.plan)]
    if (data.consent) tags.push("marketing-consent")
    await addContactTags(config, contactId, tags)

    let appointment
    try {
      appointment = await createAppointment(config, {
        contactId,
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
    const note = existingId ? [formDetails(data), data.message].filter(Boolean).join("\n\n") : data.message
    if (note) {
      await addAppointmentNote(config, appointment.id, note).catch((e) =>
        console.error("[booking] note failed:", e instanceof GhlError ? `${e.message} ${e.body}` : e)
      )
    }

    return reply({ ok: true, start, end })
  } catch (e) {
    console.error("[booking]", e instanceof GhlError ? `${e.message} ${e.body}` : e)
    return reply({ ok: false, code: "failed" }, 502)
  }
}

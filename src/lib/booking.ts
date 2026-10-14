// Booking rules shared by the booking page (browser) and /api/booking (server):
// plan options, meeting length, validation schema and error codes.
import { z } from "zod"

import { isValidEmail } from "@/lib/email"
import { isLocale, locales } from "@/i18n/config"

/** Length of a booking call, in minutes (matches the GHL calendar's slot length). */
export const MEETING_MINUTES = 30
/** How far ahead visitors can book. GHL's free-slots API allows at most 31 days per request. */
export const BOOKING_DAYS = 30

/**
 * Values of the GHL contact custom field "plan_interest". They must match the field's options in
 * GoHighLevel exactly, so never translate these; the page translates the labels instead.
 */
export const PLAN_OPTIONS = ["Starter", "Growth", "Agency (white-label)", "Not sure yet"] as const
export type PlanOption = (typeof PLAN_OPTIONS)[number]

/** ?plan=starter|growth|agency in the URL preselects the matching option. */
export const PLAN_FROM_QUERY: Record<string, PlanOption> = {
  starter: "Starter",
  growth: "Growth",
  agency: "Agency (white-label)",
}

/** GHL custom field key for the plan dropdown. */
export const PLAN_FIELD_KEY = "plan_interest"

/** "Agency (white-label)" → "plan-agency-white-label". */
export function planTag(plan: PlanOption): string {
  return `plan-${plan.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`
}

/** True for a timezone the runtime knows, e.g. "Europe/Rome". */
export function isValidTimeZone(value: unknown): value is string {
  if (typeof value !== "string" || value.length > 64) return false
  try {
    new Intl.DateTimeFormat("en", { timeZone: value })
    return true
  } catch {
    return false
  }
}

/**
 * International phone number: "+", country code, then digits (E.164: 8 to 15 digits in total).
 * Spaces, dashes, dots and brackets are removed first.
 */
export function normalizePhone(value: string): string {
  return value.replace(/[\s\-.()]/g, "")
}
export function isValidPhone(value: unknown): value is string {
  return typeof value === "string" && /^\+[1-9]\d{7,14}$/.test(normalizePhone(value))
}

/** Every reason a booking can fail; the page shows a translated message for each. */
export type BookingErrorCode =
  | "invalid"
  | "slot_taken"
  | "rate_limited"
  | "unavailable"
  | "failed"

/** Field-level problems the form can show next to a field. */
export type BookingFieldError = "required" | "invalid" | "too_long"

const text = (max: number) =>
  z
    .string({ error: "required" })
    .trim()
    .min(1, { error: "required" })
    .max(max, { error: "too_long" })

export const bookingSchema = z.object({
  firstName: text(60),
  lastName: text(60),
  company: text(100),
  email: z
    .string({ error: "required" })
    .trim()
    .toLowerCase()
    .min(1, { error: "required" })
    .refine(isValidEmail, { error: "invalid" }),
  phone: z
    .string({ error: "required" })
    .trim()
    .min(1, { error: "required" })
    .refine(isValidPhone, { error: "invalid" })
    .transform(normalizePhone),
  plan: z.enum(PLAN_OPTIONS, { error: "required" }),
  message: z.string().trim().max(2000, { error: "too_long" }).optional().default(""),
  consent: z.boolean().optional().default(false),
  /** Slot start as an ISO date string (any offset). */
  slot: z
    .string({ error: "required" })
    .refine((v) => !Number.isNaN(Date.parse(v)), { error: "invalid" }),
  timezone: z.string().refine(isValidTimeZone, { error: "invalid" }),
  lang: z.string().refine(isLocale, { error: "invalid" }).optional().default(locales[0]),
  /** Honeypot: hidden from people, bots fill it in. Must stay empty. */
  website: z.string().optional().default(""),
})

export type BookingInput = z.input<typeof bookingSchema>
export type BookingData = z.output<typeof bookingSchema>

/** Zod issues → { field: code } (first problem per field). */
export function fieldErrors(error: z.ZodError): Partial<Record<keyof BookingData, BookingFieldError>> {
  const out: Partial<Record<keyof BookingData, BookingFieldError>> = {}
  for (const issue of error.issues) {
    const field = issue.path[0] as keyof BookingData | undefined
    if (!field || out[field]) continue
    const code = issue.message as BookingFieldError
    out[field] = code === "required" || code === "too_long" ? code : "invalid"
  }
  return out
}

/** Response of POST /api/booking. */
export type BookingResponse =
  | { ok: true; start: string; end: string }
  | { ok: false; code: BookingErrorCode; fields?: Partial<Record<keyof BookingData, BookingFieldError>> }

/** Response of GET /api/booking/slots. */
export type SlotsResponse = { ok: true; slots: string[] } | { ok: false; code: BookingErrorCode }

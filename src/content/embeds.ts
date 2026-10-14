// GoHighLevel and contact links. Leads must go into GHL, not a custom backend.

import { bookingPath } from "@/content/site"
import { localizeHref, type Locale } from "@/i18n/config"

/**
 * Link to the booking page in the current language, e.g. "/it/book" or "/it/book?plan=agency".
 * Every "Book a call" button uses it; `plan` preselects the plan in the form.
 */
export function bookingHref(lang: Locale, plan?: "starter" | "growth" | "agency"): string {
  const path = localizeHref(lang, bookingPath)
  return plan ? `${path}?plan=${plan}` : path
}

/** Phone / WhatsApp: +39 339 5622 204 */
export const phoneDisplay = "+39 339 5622 204"
export const phoneLink = "tel:+393395622204"
export const whatsappLink = "https://wa.me/393395622204"

/** The language the hero demo video (Wistia) is recorded in. "Watch the demo" only shows on that page. */
export const demoVideoLocale: Locale = "it"

// GoHighLevel and contact links. Leads must go into GHL, not a custom backend.

import { bookingCalendarSrc } from "@/content/site"

// The booking link itself lives in src/content/site.ts; re-exported here for existing imports.
export { bookingCalendarSrc }

/** Spread onto an <a> to open the booking page in a new tab. */
export const bookingLinkProps = {
  href: bookingCalendarSrc,
  target: "_blank",
  rel: "noopener noreferrer",
} as const

/** Phone / WhatsApp: +39 339 5622 204 */
export const phoneDisplay = "+39 339 5622 204"
export const phoneLink = "tel:+393395622204"
export const whatsappLink = "https://wa.me/393395622204"

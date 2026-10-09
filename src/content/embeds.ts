// GoHighLevel and contact links. Leads must go into GHL, not a custom backend.

/** GHL booking page, opened by every "Book a free setup call" button. */
export const bookingCalendarSrc = "https://api.leadconnectorhq.com/widget/booking/xulJqZlg7Upe9bX3rnKt"

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

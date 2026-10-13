// Company details, legal links and social links shown in the footer (source: intelligentb2b.com).

export const company = {
  name: "Intelligent B2B",
  legalName: "Intelligent B2B Group SRL" as string | null,
  vat: "RO51222966" as string | null, // Romanian VAT number, so labelled "VAT"
  /** Romanian Trade Register number (J40/…). Shown next to the VAT number once filled in. */
  tradeRegister: null as string | null, // TODO(ib2b): paste the J40/... number
  address: "Aleea Avrig, Nr. 3, Sector 2, 021851 Bucharest, Romania" as string | null,
  email: "support@intelligentb2b.com" as string | null,
  /** For "Become a partner" and agency questions. */
  salesEmail: "sales@intelligentb2b.com",
}

// Legal pages on this site (src/app/[lang]/terms, privacy, cookie-policy, dpa); labels come from the dictionaries.
export const legalLinks: { label: string; href: string | null }[] = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "DPA", href: "/dpa" },
]

/** Public URL of the site, used for share images and metadata. TODO(ib2b): set the real domain. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://crm.intelligentb2b.com"

/** The section also hides itself while src/content/testimonials.ts is empty. */
export const showTestimonials = true

// Links left null are hidden in the footer. TODO(ib2b): add Facebook.
export const socialLinks: { label: string; href: string | null }[] = [
  { label: "Instagram", href: "https://www.instagram.com/torchcrm/" },
  { label: "Facebook", href: null },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/intelligent-b2b-group-srl/" },
  { label: "TikTok", href: "https://www.tiktok.com/@torchcrm" },
  { label: "YouTube", href: "https://www.youtube.com/@Intelligentb2b" },
  { label: "X", href: "https://x.com/torchcrm" },
  { label: "WhatsApp", href: "https://wa.me/393395622204" },
]

/**
 * TORCH booking calendar (GoHighLevel, permanent link). Every "Book a call", "Book a free
 * setup call" and "Video call" button opens it, and so do plan buttons without a checkout link.
 */
export const bookingCalendarSrc = "https://api.leadconnectorhq.com/widget/booking/G0rSuqw8F7nD13Jn91DH"

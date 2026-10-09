// Company details, legal links and social links shown in the footer (source: intelligentb2b.com).

export const company = {
  name: "Intelligent B2B",
  legalName: "Intelligent B2B Group SRL" as string | null,
  vat: "RO51222966" as string | null, // Romanian VAT number, so labelled "VAT"
  address: "Aleea Avrig, Nr. 3, Sector 2, 021851 Bucharest, Romania" as string | null,
  email: "support@intelligentb2b.com" as string | null,
  /** For "Become a partner" and agency questions. */
  salesEmail: "sales@intelligentb2b.com",
}

// Points to the legal pages on intelligentb2b.com for now.
export const legalLinks: { label: string; href: string | null }[] = [
  { label: "Terms", href: "https://intelligentb2b.com/termini-e-condizioni" },
  { label: "Privacy Policy", href: "https://intelligentb2b.com/informativa-sulla-privacy" },
  { label: "Cookie Policy", href: "https://intelligentb2b.com/cookie-policy-eu/" },
]

/** Public URL of the site, used for share images and metadata. TODO(ib2b): set the real domain. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

/** The section also hides itself while src/content/testimonials.ts is empty. */
export const showTestimonials = true

// Links left null show a red "missing link" dot. TODO(ib2b): add Instagram, Facebook, TikTok and YouTube.
export const socialLinks: { label: string; href: string | null }[] = [
  { label: "Instagram", href: null },
  { label: "Facebook", href: null },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/intelligent-b2b-group-srl/" },
  { label: "TikTok", href: null },
  { label: "YouTube", href: null },
  { label: "WhatsApp", href: "https://wa.me/393395622204" },
]

/**
 * Newsletter signups go into GoHighLevel (no custom backend).
 * Paste a GHL "Inbound Webhook" URL from Automation → Workflows → trigger "Inbound Webhook".
 */
export const newsletterWebhook: string | null = null

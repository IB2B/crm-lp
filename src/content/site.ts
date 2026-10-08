// Company details, legal links and social links shown in the footer.
// TODO(ib2b): fill in the real values. Leave a value null to show a clear placeholder.

export const company = {
  name: "Intelligent B2B",
  legalName: null as string | null, // e.g. "Intelligent B2B S.R.L."
  vat: null as string | null, // P.IVA
  address: null as string | null,
  email: "support@intelligentb2b.com" as string | null,
}

// Placeholder pages exist at these paths. TODO(ib2b): replace their content with the real legal texts.
export const legalLinks: { label: string; href: string | null }[] = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
]

/** Public URL of the site, used for share images and metadata. TODO(ib2b): set the real domain. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

/** Hidden until there are 3 real client quotes (with permission). */
export const showTestimonials = false

export const socialLinks: { label: string; href: string | null }[] = [
  { label: "Instagram", href: null },
  { label: "Facebook", href: null },
  { label: "LinkedIn", href: null },
  { label: "TikTok", href: null },
  { label: "YouTube", href: null },
  { label: "WhatsApp", href: null },
]

/**
 * Newsletter signups go into GoHighLevel (no custom backend).
 * Paste a GHL "Inbound Webhook" URL from Automation → Workflows → trigger "Inbound Webhook".
 */
export const newsletterWebhook: string | null = null

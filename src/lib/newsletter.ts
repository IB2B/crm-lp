// Newsletter signups go straight into GoHighLevel as a tagged contact (no custom database).
// The token and location ID come from .env.local locally and from the host's environment
// variables in production. Only import this from server code (the API route and the footer):
// without a NEXT_PUBLIC_ prefix, Next.js never sends these variables to the browser.

export const NEWSLETTER_TAG = "newsletter-torch ai"
export const NEWSLETTER_SOURCE = "TORCH landing page"

export function newsletterConfig() {
  const token = process.env.GHL_PRIVATE_TOKEN
  const locationId = process.env.GHL_LOCATION_ID
  return token && locationId ? { token, locationId } : null
}

/** True when both GoHighLevel variables are set, so the footer can show the form. */
export function newsletterEnabled() {
  return newsletterConfig() !== null
}

import { isValidEmail } from "@/lib/email"
import { NEWSLETTER_SOURCE, NEWSLETTER_TAG, newsletterConfig } from "@/lib/newsletter"

const GHL_UPSERT_URL = "https://services.leadconnectorhq.com/contacts/upsert"

function error(message: string, status: number) {
  return Response.json({ ok: false, error: message }, { status })
}

// POST { email, consent } → creates or updates the contact in GoHighLevel with the newsletter tag.
// Only the email, tag and source are sent. Nothing else about the visitor.
export async function POST(request: Request) {
  const config = newsletterConfig()
  if (!config) return error("The newsletter isn't available right now.", 503)

  let body: { email?: unknown; consent?: unknown }
  try {
    body = await request.json()
  } catch {
    return error("Please enter your email address.", 400)
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : body.email
  if (!isValidEmail(email)) return error("Please enter a valid email address.", 400)
  if (body.consent !== true) return error("Please tick the box to agree to receive the newsletter.", 400)

  try {
    const res = await fetch(GHL_UPSERT_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.token}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        locationId: config.locationId,
        email,
        tags: [NEWSLETTER_TAG],
        source: NEWSLETTER_SOURCE,
      }),
      signal: AbortSignal.timeout(10_000),
    })

    if (!res.ok) {
      // Logged on the server only; the visitor gets a plain message.
      console.error(`[newsletter] GoHighLevel upsert failed: ${res.status} ${await res.text().catch(() => "")}`)
      return error("We couldn't sign you up right now. Please try again in a moment.", 502)
    }

    return Response.json({ ok: true })
  } catch (e) {
    console.error("[newsletter] GoHighLevel request error:", e)
    return error("We couldn't sign you up right now. Please try again in a moment.", 502)
  }
}

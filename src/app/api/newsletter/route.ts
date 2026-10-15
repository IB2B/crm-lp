import { checkBotId } from "botid/server"

import { isValidEmail } from "@/lib/email"
import { GhlError, addContactTags, findExistingContact, upsertContact } from "@/lib/ghl"
import { NEWSLETTER_SOURCE, NEWSLETTER_TAG, newsletterConfig } from "@/lib/newsletter"
import { clientIp, rateLimit } from "@/lib/rate-limit"
import { isJson, isSameSite } from "@/lib/request-guard"

const HOUR = 60 * 60 * 1000

/** Stable reasons the form translates; `error` stays as an English fallback. */
export type NewsletterErrorCode = "invalid_email" | "no_consent" | "unavailable" | "failed" | "bad_request"

function error(code: NewsletterErrorCode, message: string, status: number) {
  return Response.json({ ok: false, code, error: message }, { status })
}

// POST { email, consent } → adds the newsletter tag to the contact in GoHighLevel, creating the contact
// first if there is none. Only the email, tag and source are sent. Nothing else about the visitor.
// Anyone can type any email here, so an existing contact only gets the tag added: nothing on it changes.
export async function POST(request: Request) {
  const config = newsletterConfig()
  if (!config) return error("unavailable", "The newsletter isn't available right now.", 503)

  // Only our own pages may post here (see src/lib/request-guard.ts), and not bots (Vercel BotID).
  if (!isSameSite(request) || !isJson(request)) {
    console.warn("[newsletter] cross-site or non-JSON request rejected")
    return error("failed", "We couldn't sign you up right now. Please try again in a moment.", 403)
  }
  if ((await checkBotId()).isBot) {
    console.warn("[newsletter] BotID flagged a bot, rejected")
    return error("failed", "We couldn't sign you up right now. Please try again in a moment.", 403)
  }

  let body: { email?: unknown; consent?: unknown }
  try {
    body = await request.json()
  } catch {
    return error("bad_request", "Please enter your email address.", 400)
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : body.email
  if (!isValidEmail(email)) return error("invalid_email", "Please enter a valid email address.", 400)
  if (body.consent !== true) return error("no_consent", "Please tick the box to agree to receive the newsletter.", 400)

  if (!rateLimit(`newsletter:${clientIp(request)}`, 5, HOUR)) {
    console.warn("[newsletter] rate limited")
    return error("failed", "Too many sign-ups from your connection. Please try again later.", 429)
  }

  try {
    const existingId = await findExistingContact(config, { email })
    const contactId = existingId ?? (await upsertContact(config, { email, source: NEWSLETTER_SOURCE })).id
    await addContactTags(config, contactId, [NEWSLETTER_TAG])
    return Response.json({ ok: true })
  } catch (e) {
    // Logged on the server only; the visitor gets a plain message.
    console.error("[newsletter] GoHighLevel request failed:", e instanceof GhlError ? `${e.message} ${e.body}` : e)
    return error("failed", "We couldn't sign you up right now. Please try again in a moment.", 502)
  }
}

"use client"

import { useId, useState } from "react"
import { ArrowRight, Check } from "lucide-react"

import type { NewsletterErrorCode } from "@/app/api/newsletter/route"
import { localizeHref, type Locale } from "@/i18n/config"
import type { ChromeDict } from "@/i18n/dictionaries/chrome"
import { isValidEmail } from "@/lib/email"

type Status = "idle" | "sending" | "done" | "error"
type ErrorKey = keyof ChromeDict["newsletter"]["errors"]

// Footer signup. Posts to /api/newsletter, which adds the contact to GoHighLevel on the server.
// The footer only renders this when the GoHighLevel variables are set.
// Text comes from src/i18n/dictionaries/chrome.ts (newsletter); the API answers with a `code`.
export function NewsletterForm({ t, lang }: { t: ChromeDict["newsletter"]; lang: Locale }) {
  const id = useId()
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<ErrorKey | null>(null)

  function fail(key: ErrorKey) {
    setStatus("error")
    setError(key)
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = String(data.get("email") ?? "").trim()
    const consent = data.get("consent") === "on"

    if (!isValidEmail(email)) return fail("invalid_email")
    if (!consent) return fail("no_consent")

    setStatus("sending")
    setError(null)
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent }),
      })
      const result = (await res.json().catch(() => null)) as
        | { ok?: boolean; code?: NewsletterErrorCode }
        | null
      if (res.ok && result?.ok) {
        setStatus("done")
      } else {
        fail(result?.code && result.code in t.errors ? result.code : "failed")
      }
    } catch {
      fail("network")
    }
  }

  if (status === "done") {
    return (
      <p
        className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm text-paper-foreground ring-1 ring-black/5"
        role="status"
      >
        <Check className="size-4 text-brand" aria-hidden="true" />
        {t.done}
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-md">
      <label htmlFor={id} className="sr-only">
        {t.emailLabel}
      </label>
      <div className="flex items-center gap-2 rounded-xl bg-white p-1.5 text-paper-foreground ring-1 ring-black/5">
        <input
          id={id}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t.placeholder}
          aria-invalid={status === "error" || undefined}
          aria-describedby={`${id}-message`}
          className="h-10 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-paper-foreground/50"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex h-10 shrink-0 cursor-pointer items-center gap-1.5 rounded-lg bg-brand px-4 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? t.sending : t.subscribe}
          <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
        </button>
      </div>

      <label className="mt-3 flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 size-4 shrink-0 cursor-pointer accent-[var(--brand)]"
        />
        <span>
          {t.consentBefore}{" "}
          <a href={localizeHref(lang, "/privacy")} className="underline underline-offset-4 hover:text-foreground">
            {t.privacyLink}
          </a>
          {t.consentAfter}
        </span>
      </label>

      <p
        id={`${id}-message`}
        role={status === "error" ? "alert" : undefined}
        className="mt-2 min-h-4 text-xs font-medium text-red-600"
      >
        {status === "error" && error ? t.errors[error] : null}
      </p>
    </form>
  )
}

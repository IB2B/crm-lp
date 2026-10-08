"use client"

import { useId, useState } from "react"
import { ArrowRight, Check } from "lucide-react"

import { newsletterWebhook } from "@/content/site"

type Status = "idle" | "sending" | "done" | "error"

export function NewsletterForm() {
  const id = useId()
  const [status, setStatus] = useState<Status>("idle")
  const connected = Boolean(newsletterWebhook)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!newsletterWebhook) return
    const email = new FormData(e.currentTarget).get("email")
    setStatus("sending")
    try {
      const params = Object.fromEntries(new URLSearchParams(window.location.search))
      const res = await fetch(newsletterWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "landing-footer-newsletter", ...params }),
      })
      setStatus(res.ok ? "done" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "done") {
    return (
      <p className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm text-paper-foreground ring-1 ring-black/5" role="status">
        <Check className="size-4 text-brand" aria-hidden="true" />
        Thanks! You&apos;re on the list.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md">
      <label htmlFor={id} className="sr-only">
        Your email
      </label>
      <div className="flex items-center gap-2 rounded-xl bg-white p-1.5 text-paper-foreground ring-1 ring-black/5">
        <input
          id={id}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@business.com"
          className="h-10 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-paper-foreground/50"
        />
        <button
          type="submit"
          disabled={!connected || status === "sending"}
          className="flex h-10 shrink-0 cursor-pointer items-center gap-1.5 rounded-lg bg-brand px-4 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Subscribe"}
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
      <p className="mt-2 text-xs text-muted-foreground" role={status === "error" ? "alert" : undefined}>
        {status === "error"
          ? "Something went wrong. Please try again."
          : connected
            ? "No spam. Unsubscribe anytime."
            : "Placeholder: connect the GHL webhook in src/content/site.ts"}
      </p>
    </form>
  )
}

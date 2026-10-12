"use client"

import { useId, useState } from "react"
import { ArrowRight, Check } from "lucide-react"

import { isValidEmail } from "@/lib/email"

type Status = "idle" | "sending" | "done" | "error"

// Footer signup. Posts to /api/newsletter, which adds the contact to GoHighLevel on the server.
// The footer only renders this when the GoHighLevel variables are set.
export function NewsletterForm() {
  const id = useId()
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = String(data.get("email") ?? "").trim()
    const consent = data.get("consent") === "on"

    if (!isValidEmail(email)) {
      setStatus("error")
      setMessage("Please enter a valid email address.")
      return
    }
    if (!consent) {
      setStatus("error")
      setMessage("Please tick the box to agree to receive the newsletter.")
      return
    }

    setStatus("sending")
    setMessage("")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent }),
      })
      const result = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null
      if (res.ok && result?.ok) {
        setStatus("done")
      } else {
        setStatus("error")
        setMessage(result?.error ?? "We couldn't sign you up right now. Please try again in a moment.")
      }
    } catch {
      setStatus("error")
      setMessage("Couldn't reach the server. Check your connection and try again.")
    }
  }

  if (status === "done") {
    return (
      <p
        className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm text-paper-foreground ring-1 ring-black/5"
        role="status"
      >
        <Check className="size-4 text-brand" aria-hidden="true" />
        Thanks, you&apos;re in!
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-md">
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
          aria-invalid={status === "error" || undefined}
          aria-describedby={`${id}-message`}
          className="h-10 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-paper-foreground/50"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex h-10 shrink-0 cursor-pointer items-center gap-1.5 rounded-lg bg-brand px-4 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Subscribe"}
          <ArrowRight className="size-4" aria-hidden="true" />
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
          I agree to receive the TORCH newsletter. I can unsubscribe anytime. See our{" "}
          <a href="/privacy" className="underline underline-offset-4 hover:text-foreground">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      <p
        id={`${id}-message`}
        role={status === "error" ? "alert" : undefined}
        className="mt-2 min-h-4 text-xs font-medium text-red-600"
      >
        {status === "error" ? message : null}
      </p>
    </form>
  )
}

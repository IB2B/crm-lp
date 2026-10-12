"use client"

import { legalLinks } from "@/content/site"
import { setConsent, useConsent } from "@/lib/consent"

const cookiePolicy = legalLinks.find((l) => l.label === "Cookie Policy")?.href

// Slim dark bar until the visitor decides. "No thanks" is a real button next to "Allow" (GDPR).
export function CookieBanner() {
  const consent = useConsent()
  if (consent !== "pending") return null

  function decline() {
    setConsent("declined")
    // The pixel was loaded by an earlier "Allow": reload so it is gone right away.
    if ("fbq" in window) window.location.reload()
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie choice"
      className="dark fixed inset-x-3 bottom-3 z-50 animate-in duration-500 fade-in slide-in-from-bottom-4 motion-reduce:animate-none sm:inset-x-auto sm:start-5 sm:bottom-5"
    >
      <div className="flex flex-col gap-3 rounded-2xl bg-background py-3 ps-5 pe-3 text-foreground shadow-2xl shadow-black/30 sm:flex-row sm:items-center sm:gap-6 sm:rounded-full">
        <p className="text-sm text-foreground/80">
          Mind if we see which ads bring you here?{" "}
          {cookiePolicy ? (
            <a
              href={cookiePolicy}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-foreground/50 underline underline-offset-4 hover:text-foreground"
            >
              Cookie policy
            </a>
          ) : null}
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={decline}
            className="h-10 flex-1 cursor-pointer rounded-full px-4 text-sm text-foreground/80 ring-1 ring-foreground/20 transition-colors hover:text-foreground hover:ring-foreground/40 sm:flex-none"
          >
            No thanks
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="h-10 flex-1 cursor-pointer rounded-full bg-brand px-5 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90 sm:flex-none"
          >
            Allow
          </button>
        </div>
      </div>
    </div>
  )
}

/** Footer link that brings the bar back so visitors can change their choice. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={() => setConsent("pending")} className={className}>
      Cookie settings
    </button>
  )
}

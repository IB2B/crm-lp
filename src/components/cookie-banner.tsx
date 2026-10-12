"use client"

import { useEffect, useRef, useState } from "react"

import { legalLinks } from "@/content/site"
import { setConsent, useConsent } from "@/lib/consent"
import { cn } from "@/lib/utils"

const cookiePolicy = legalLinks.find((l) => l.label === "Cookie Policy")?.href

// True while the page section under the bar is dark (dark or warm charcoal sections).
function useOverDarkSection(ref: React.RefObject<HTMLElement | null>, active: boolean) {
  const [overDark, setOverDark] = useState(false)

  useEffect(() => {
    if (!active) return
    let frame = 0
    const check = () => {
      frame = 0
      const bar = ref.current
      if (!bar) return
      const box = bar.getBoundingClientRect()
      const under = document
        .elementsFromPoint(box.left + box.width / 2, box.top + box.height / 2)
        .find((el) => !bar.contains(el))
      setOverDark(Boolean(under?.closest(".dark, .warm")))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }
    check()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
    }
  }, [ref, active])

  return overDark
}

// Slim bar until the visitor decides. "No thanks" is a real button next to "Allow" (GDPR).
// It flips colour against the page: light over dark sections, dark over light ones.
export function CookieBanner() {
  const consent = useConsent()
  const ref = useRef<HTMLDivElement>(null)
  const overDark = useOverDarkSection(ref, consent === "pending")
  if (consent !== "pending") return null

  function decline() {
    setConsent("declined")
    // The pixel was loaded by an earlier "Allow": reload so it is gone right away.
    if ("fbq" in window) window.location.reload()
  }

  return (
    <div
      ref={ref}
      role="dialog"
      aria-label="Cookie choice"
      className={cn(overDark ? "" : "dark", "fixed inset-x-3 bottom-3 z-50 animate-in duration-500 fade-in slide-in-from-bottom-4 motion-reduce:animate-none sm:inset-x-auto sm:start-5 sm:bottom-5")}
    >
      <div className="flex flex-col gap-3 rounded-2xl bg-background py-3 ps-5 pe-3 text-foreground shadow-2xl shadow-black/30 transition-colors duration-300 sm:flex-row sm:items-center sm:gap-6 sm:rounded-full">
        <p className="text-sm text-foreground/80">
          We use cookies to improve your experience and measure our ads.{" "}
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

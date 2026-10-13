"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { bookingCalendarSrc } from "@/content/embeds"
import { cn } from "@/lib/utils"
import { fmt, type Locale } from "@/i18n/config"
import type { PricingDict } from "@/i18n/dictionaries/pricing"
import {
  allCheckoutLinksSet,
  euro,
  plans,
  trialDays,
  yearlyFreeMonths,
  type Billing,
} from "@/content/pricing"
import { withTracking } from "@/lib/tracking"

function ToConfirm({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "rounded-full border border-dashed px-2 py-0.5 text-[11px] font-medium text-muted-foreground",
        className
      )}
    >
      {label}
    </span>
  )
}

// Real product screens that peek up from the bottom of the panel (same files as the product tour).
// Alt texts come from the dictionary (screenAlts), keyed the same way.
const peekScreens = [
  { key: "inbox", src: "/platform/inbox.webp" },
  { key: "calendar", src: "/platform/calendar.webp" },
  { key: "reviews", src: "/platform/reviews.webp" },
] as const

// Everything shared, in one warm charcoal panel (same colour as the Starter card):
// a light headline, four plain groups, and a strip of real product screens along the bottom.
// When the panel scrolls into view it plays once: headline lines slide up, "everything" gets
// underlined, the divider sweeps across, the groups fade up, then the screens rise from the edge.
// Without JavaScript or with reduced motion everything simply shows in place.
const ease = "ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"

function IncludedInEveryPlan({ t }: { t: PricingDict }) {
  const ref = useRef<HTMLDivElement>(null)
  // null = not measured yet (render in place), false = waiting below the fold, true = playing
  const [shown, setShown] = useState<boolean | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const io = new IntersectionObserver(
      ([entry]) => {
        setShown(entry.isIntersecting ? true : (prev) => (prev ? true : false))
        if (entry.isIntersecting) io.disconnect()
      },
      { rootMargin: "0px 0px -25% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const hidden = shown === false
  const delay = (ms: number) => ({ transitionDelay: shown ? `${ms}ms` : "0ms" })

  return (
    <div ref={ref} className="warm mt-20 overflow-hidden rounded-3xl bg-background text-foreground lg:mt-24">
      <div className="px-6 pt-12 sm:px-10 lg:px-14 lg:pt-16">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <h3 className="text-4xl font-light tracking-tight sm:text-5xl">
            {t.includedTitleLines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <span
                  className={cn("block transition-transform duration-1000", ease, hidden && "translate-y-full")}
                  style={delay(i * 120)}
                >
                  {line}
                  {i === 1 ? (
                    <>
                      {" "}
                      <span className="relative text-brand">
                        {t.includedTitleEmphasis}
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full rtl:origin-right bg-brand transition-transform duration-700",
                            ease,
                            hidden ? "scale-x-0" : "scale-x-100"
                          )}
                          style={delay(700)}
                        />
                      </span>
                      {t.includedTitleEnd}
                    </>
                  ) : null}
                </span>
              </span>
            ))}
          </h3>
          <p
            className={cn(
              "max-w-sm text-base leading-relaxed text-pretty text-muted-foreground transition-[opacity,translate] duration-700",
              ease,
              hidden && "translate-y-3 opacity-0"
            )}
            style={delay(300)}
          >
            {t.includedIntro}
          </p>
        </div>

        <div
          aria-hidden="true"
          className={cn("mt-12 h-px origin-left bg-border rtl:origin-right transition-transform duration-1000", ease, hidden && "scale-x-0")}
          style={delay(400)}
        />

        <div className="grid gap-x-10 gap-y-10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.includedGroups.map(({ group, items }, col) => (
            <div
              key={group}
              className={cn("transition-[opacity,translate] duration-700", ease, hidden && "translate-y-4 opacity-0")}
              style={delay(550 + col * 90)}
            >
              <h4 className="text-base font-medium">{group}</h4>
              <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted-foreground">
                {items.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* pt-3 leaves room for the hover lift inside the cropped strip */}
      <div className="mt-11 grid h-27 grid-cols-2 items-start gap-4 overflow-hidden px-6 pt-3 sm:h-31 sm:grid-cols-3 sm:px-10 lg:h-43 lg:px-14">
        {peekScreens.map(({ key, src }, i) => (
          <div
            key={src}
            className={cn(
              "transition-transform duration-1000",
              ease,
              i !== 1 && "sm:mt-6",
              i === 2 && "hidden sm:block",
              hidden && "translate-y-full"
            )}
            style={delay(900 + (i === 1 ? 0 : 140))}
          >
            <div className="overflow-hidden rounded-t-xl border border-b-0 bg-card shadow-2xl shadow-black/40 transition-transform duration-300 ease-out hover:-translate-y-3 motion-reduce:transition-none">
              <Image
                src={src}
                alt={t.screenAlts[key]}
                width={1470}
                height={827}
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 33vw, 50vw"
                className="block h-auto w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Text comes from src/i18n/dictionaries/pricing.ts; numbers and links from src/content/pricing.ts.
export function PricingSection({ t }: { t: PricingDict; lang: Locale }) {
  const [billing, setBilling] = useState<Billing>("monthly")

  const perMonth = (monthly: number | null) =>
    monthly === null
      ? null
      : billing === "monthly"
        ? monthly
        : (monthly * (12 - yearlyFreeMonths)) / 12

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-16 bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground">{t.eyebrow}</p>
            <h2
              id="pricing-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              {t.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              {t.intro}
            </p>
          </div>

          <div
            role="radiogroup"
            aria-label={t.billingLabel}
            className="inline-flex rounded-full border bg-background p-1"
          >
            {(["monthly", "yearly"] as const).map((b) => (
              <button
                key={b}
                type="button"
                role="radio"
                aria-checked={billing === b}
                onClick={() => setBilling(b)}
                className={cn(
                  "flex h-10 cursor-pointer items-center gap-2 rounded-full px-5 text-sm font-medium transition-colors",
                  billing === b ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {b === "monthly" ? t.monthly : t.yearly}
                {b === "yearly" ? (
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[11px]",
                      billing === b ? "bg-brand text-brand-foreground" : "bg-brand/15 text-foreground"
                    )}
                  >
                    {fmt(t.monthsFree, { n: yearlyFreeMonths })}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:mt-16 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = perMonth(plan.monthly)
            const link = plan.checkout[billing]
            const text = t.plans[plan.id]
            return (
              <div
                key={plan.id}
                className={cn(
                  "relative flex flex-col rounded-3xl p-6 sm:p-8",
                  plan.popular
                    ? "warm bg-background text-foreground shadow-2xl shadow-black/20 lg:-my-4 lg:py-12"
                    : "border bg-background"
                )}
              >
                {plan.popular ? (
                  <span className="absolute -top-4 end-6 rotate-6 rounded-xl bg-brand px-3 py-1.5 text-xs font-bold tracking-wide text-brand-foreground uppercase shadow-lg">
                    {t.mostPopular}
                  </span>
                ) : null}

                <h3 className="text-xl font-medium">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground lg:min-h-10">{text.tagline}</p>

                <p className="mt-8 flex items-baseline gap-1">
                  <span className="text-5xl font-light tracking-tight tabular-nums">{euro(price)}</span>
                  <span className="text-muted-foreground">{t.perMonth}</span>
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  {billing === "yearly" && plan.monthly !== null ? (
                    <span className="tabular-nums">
                      {fmt(t.billedYearlyTotal, { price: euro(plan.monthly * (12 - yearlyFreeMonths)) })}
                    </span>
                  ) : (
                    <span>{billing === "monthly" ? t.billedMonthly : t.billedYearly}</span>
                  )}
                  {allCheckoutLinksSet ? null : <ToConfirm label={t.toConfirm} />}
                </div>

                <Button
                  size="xl"
                  variant={plan.popular ? "default" : "outline"}
                  nativeButton={false}
                  render={
                    <a
                      // Without a checkout link, the button opens the booking calendar.
                      href={link ?? bookingCalendarSrc}
                      {...(link ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                      data-plan={plan.id}
                      data-billing={billing}
                      onClick={(e) => {
                        if (!link) return
                        e.preventDefault()
                        window.location.assign(withTracking(link))
                      }}
                    />
                  }
                  // Longer translations (e.g. French) wrap onto two lines instead of widening the card.
                  className="mt-8 h-auto min-h-12 w-full py-3 text-center whitespace-normal"
                >
                  {fmt(t.startTrial, { n: trialDays })}
                  <ArrowRight data-icon="inline-end" className="rtl:-scale-x-100" />
                </Button>

                <div className="mt-8 border-t pt-6">
                  <p className="text-sm font-medium">{t.planIncludes}</p>
                  <ul className="mt-4 space-y-3 text-sm">
                    {text.highlights.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <IncludedInEveryPlan t={t} />

        <p className="mt-10 text-center text-sm text-muted-foreground">
          {allCheckoutLinksSet ? "" : `${t.placeholderNote} `}
          {t.usageNote}
        </p>
      </div>
    </section>
  )
}

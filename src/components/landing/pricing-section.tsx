"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  allCheckoutLinksSet,
  euro,
  includedInEveryPlan,
  plans,
  trialDays,
  yearlyFreeMonths,
  type Billing,
} from "@/content/pricing"
import { withTracking } from "@/lib/tracking"

function ToConfirm({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "rounded-full border border-dashed px-2 py-0.5 text-[11px] font-medium text-muted-foreground",
        className
      )}
    >
      To confirm
    </span>
  )
}

export function PricingSection() {
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
            <p className="text-sm font-medium text-muted-foreground">Pricing</p>
            <h2
              id="pricing-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              Simple plans. Setup included.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              No contracts. Cancel anytime. Every plan is set up for you by our team.
            </p>
          </div>

          <div
            role="radiogroup"
            aria-label="Billing period"
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
                {b === "monthly" ? "Monthly" : "Yearly"}
                {b === "yearly" ? (
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[11px]",
                      billing === b ? "bg-brand text-brand-foreground" : "bg-brand/15 text-foreground"
                    )}
                  >
                    {yearlyFreeMonths} months free
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:mt-16 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = perMonth(plan.monthly)
            const link = plan.checkout[billing]
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
                    Most popular
                  </span>
                ) : null}

                <h3 className="text-xl font-medium">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground lg:min-h-10">{plan.tagline}</p>

                <p className="mt-8 flex items-baseline gap-1">
                  <span className="text-5xl font-light tracking-tight tabular-nums">{euro(price)}</span>
                  <span className="text-muted-foreground">/month + IVA</span>
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  {billing === "yearly" && plan.monthly !== null ? (
                    <span className="tabular-nums">
                      {euro(plan.monthly * (12 - yearlyFreeMonths))} + IVA billed yearly
                    </span>
                  ) : (
                    <span>{billing === "monthly" ? "Billed monthly" : "Billed yearly"}</span>
                  )}
                  {allCheckoutLinksSet ? null : (
                    <ToConfirm />
                  )}
                </div>

                <Button
                  size="xl"
                  variant={plan.popular ? "default" : "outline"}
                  nativeButton={false}
                  render={
                    <a
                      // Without a checkout link, the button opens the booking calendar.
                      href={link ?? "#book-call"}
                      data-plan={plan.id}
                      data-billing={billing}
                      onClick={(e) => {
                        if (!link) return
                        e.preventDefault()
                        window.location.assign(withTracking(link))
                      }}
                    />
                  }
                  className="mt-8 w-full"
                >
                  Start my {trialDays}-day free trial
                  <ArrowRight data-icon="inline-end" />
                </Button>

                <div className="mt-8 border-t pt-6">
                  <p className="text-sm font-medium">Everything included, plus:</p>
                  <ul className="mt-4 space-y-3 text-sm">
                    {plan.highlights.map((f) => (
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

        <div className="mt-16 rounded-3xl bg-paper p-6 text-paper-foreground sm:p-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <h3 className="text-2xl font-semibold tracking-tight">Every plan includes every feature.</h3>
            <p className="max-w-sm text-sm leading-relaxed text-paper-foreground/70">
              Plans only differ by locations and how much our team does for you.
            </p>
          </div>
          <div className="mt-8 grid gap-8 border-t border-paper-foreground/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {includedInEveryPlan.map(({ group, items }) => (
              <div key={group}>
                <p className="text-sm font-semibold">{group}</p>
                <ul className="mt-3 space-y-2 text-sm text-paper-foreground/75">
                  {items.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          {allCheckoutLinksSet ? "" : "Prices and plan contents are placeholders until confirmed. "}
          SMS, call and AI usage may be billed separately.
        </p>
      </div>
    </section>
  )
}

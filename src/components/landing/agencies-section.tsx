"use client"

import { useId, useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { company } from "@/content/site"
import { fmt, type Locale } from "@/i18n/config"
import type { AgenciesDict } from "@/i18n/dictionaries/agencies"

// Text comes from src/i18n/dictionaries/agencies.ts.

const euro = (value: number) => `€${value.toLocaleString("en")}`

function Slider({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string
  value: number
  display: string
  min: number
  max: number
  step: number
  onChange: (v: number) => void
}) {
  const id = useId()
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm text-paper-foreground/70">
          {label}
        </label>
        <span className="text-xl font-semibold tabular-nums">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer accent-brand"
      />
    </div>
  )
}

function EarningsCalculator({ t }: { t: AgenciesDict["calculator"] }) {
  const [clients, setClients] = useState(10)
  const [price, setPrice] = useState(197)
  const monthly = clients * price

  return (
    <div className="rounded-3xl bg-paper p-6 text-paper-foreground shadow-2xl shadow-black/40 sm:p-8">
      <p className="text-sm font-semibold tracking-[0.15em] uppercase">{t.title}</p>

      <div className="mt-6 space-y-6">
        <Slider
          label={t.clients}
          value={clients}
          display={String(clients)}
          min={1}
          max={100}
          step={1}
          onChange={setClients}
        />
        <Slider
          label={t.price}
          value={price}
          display={euro(price)}
          min={50}
          max={500}
          step={1}
          onChange={setPrice}
        />
      </div>

      <div className="mt-8 border-t border-dashed border-paper-foreground/25 pt-6" aria-live="polite">
        <p className="text-sm text-paper-foreground/70">{t.youBill}</p>
        <p className="mt-1 text-5xl font-light tracking-tight tabular-nums sm:text-6xl">
          {euro(monthly)}
          <span className="text-lg text-paper-foreground/60">{t.perMonth}</span>
        </p>
        <p className="mt-2 text-base font-medium tabular-nums">{fmt(t.perYear, { amount: euro(monthly * 12) })}</p>
      </div>

      {/* TODO(ib2b): add the partner price per client to show profit. */}
      <p className="mt-6 text-xs text-paper-foreground/60">
        {t.partnerPrice}{" "}
        <span className="rounded-full border border-dashed border-paper-foreground/30 px-1.5 py-0.5">
          {t.toConfirm}
        </span>
      </p>
    </div>
  )
}

export function AgenciesSection({ t }: { t: AgenciesDict; lang: Locale }) {
  return (
    <section
      id="agencies"
      aria-labelledby="agencies-title"
      className="dark scroll-mt-16 bg-background py-20 text-foreground lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{t.eyebrow}</p>
            <h2
              id="agencies-title"
              className="mt-3 text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl"
            >
              {t.titleBefore}{" "}
              <span className="relative inline-block text-foreground/35">
                TORCH
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[-4%] top-1/2 h-1 -translate-y-1/2 -rotate-6 rounded-full bg-brand"
                />
              </span>{" "}
              {t.titleAfter}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              {t.intro}
            </p>

            <ul className="mt-8 flex flex-wrap gap-2 text-sm">
              {t.perks.map((perk) => (
                <li key={perk} className="rounded-full border border-foreground/15 px-3 py-1 text-foreground/80">
                  {perk}
                </li>
              ))}
            </ul>

            <Button
              size="xl"
              nativeButton={false}
              render={<a href={`mailto:${company.salesEmail}?subject=${encodeURIComponent(t.emailSubject)}`} />}
              className="mt-10 w-full sm:w-auto"
            >
              {t.cta}
              <ArrowRight data-icon="inline-end" className="rtl:-scale-x-100" />
            </Button>

            <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
              {t.steps.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  {i > 0 ? <ArrowRight className="size-3.5 rtl:-scale-x-100" aria-hidden="true" /> : null}
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <EarningsCalculator t={t.calculator} />
        </div>

      </div>
    </section>
  )
}

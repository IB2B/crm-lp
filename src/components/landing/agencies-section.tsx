"use client"

import { useId, useState } from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const steps = ["Book a call", "We brand it", "You sell, we support"]

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

function EarningsCalculator() {
  const [clients, setClients] = useState(10)
  const [price, setPrice] = useState(197)
  const monthly = clients * price

  return (
    <div className="rounded-3xl bg-paper p-6 text-paper-foreground shadow-2xl shadow-black/40 sm:p-8">
      <p className="text-sm font-semibold tracking-[0.15em] uppercase">Your earnings</p>

      <div className="mt-6 space-y-6">
        <Slider
          label="How many clients?"
          value={clients}
          display={String(clients)}
          min={1}
          max={100}
          step={1}
          onChange={setClients}
        />
        <Slider
          label="What you charge each client / month"
          value={price}
          display={euro(price)}
          min={50}
          max={500}
          step={1}
          onChange={setPrice}
        />
      </div>

      <div className="mt-8 border-t border-dashed border-paper-foreground/25 pt-6" aria-live="polite">
        <p className="text-sm text-paper-foreground/70">You bill your clients</p>
        <p className="mt-1 text-5xl font-light tracking-tight tabular-nums sm:text-6xl">
          {euro(monthly)}
          <span className="text-lg text-paper-foreground/60">/month</span>
        </p>
        <p className="mt-2 text-base font-medium tabular-nums">{euro(monthly * 12)} a year</p>
      </div>

      {/* TODO(ib2b): add the partner price per client to show profit. */}
      <p className="mt-6 text-xs text-paper-foreground/60">
        Your partner price per client is shared on the call{" "}
        <span className="rounded-full border border-dashed border-paper-foreground/30 px-1.5 py-0.5">
          to confirm
        </span>
      </p>
    </div>
  )
}

export function AgenciesSection() {
  return (
    <section
      id="agencies"
      aria-labelledby="agencies-title"
      className="dark scroll-mt-16 bg-background py-20 text-foreground lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium text-muted-foreground">For agencies</p>
            <h2
              id="agencies-title"
              className="mt-3 text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl"
            >
              Sell{" "}
              <span className="relative inline-block text-foreground/35">
                TORCH
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[-4%] top-1/2 h-1 -translate-y-1/2 -rotate-6 rounded-full bg-brand"
                />
              </span>{" "}
              your own CRM.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              Give your clients a complete CRM with your logo and your prices.
              You keep the clients and the monthly revenue. We do the setup and
              support behind the scenes.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2 text-sm">
              {["Your logo", "Your domain", "Your prices", "Your clients"].map((t) => (
                <li key={t} className="rounded-full border border-foreground/15 px-3 py-1 text-foreground/80">
                  {t}
                </li>
              ))}
            </ul>

            <Button
              size="xl"
              nativeButton={false}
              render={<a href="#become-partner" />}
              className="mt-10 w-full sm:w-auto"
            >
              Become a partner
              <ArrowRight data-icon="inline-end" />
            </Button>

            <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
              {steps.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  {i > 0 ? <ArrowRight className="size-3.5" aria-hidden="true" /> : null}
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <EarningsCalculator />
        </div>

      </div>
    </section>
  )
}

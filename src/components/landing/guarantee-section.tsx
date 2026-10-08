import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { trialDays } from "@/content/pricing"

// TODO(ib2b): confirm the guarantee length and wording.
const guaranteeDays = 30

const points = [
  `${trialDays}-day free trial`,
  `Money back within ${guaranteeDays} days`,
  "No contracts. Cancel anytime.",
]

function Seal() {
  const label = `MONEY-BACK GUARANTEE · ${guaranteeDays} DAYS · `
  return (
    <div aria-hidden="true" className="relative size-56 shrink-0 sm:size-64">
      <svg
        viewBox="0 0 200 200"
        className="size-full animate-[spin_30s_linear_infinite] text-foreground motion-reduce:animate-none"
      >
        <defs>
          <path id="seal-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeOpacity="0.15" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeOpacity="0.15" />
        <text className="fill-current text-[14px] font-semibold">
          {/* Circumference of r=78 is ~490, so the label wraps the full circle once. */}
          <textPath href="#seal-circle" textLength="486" lengthAdjust="spacing">
            {label}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-6xl leading-none font-light tracking-tight text-brand tabular-nums">
          {guaranteeDays}
        </span>
        <span className="mt-1 text-xs font-semibold tracking-[0.2em] uppercase">days</span>
      </div>
    </div>
  )
}

export function GuaranteeSection() {
  return (
    <section aria-labelledby="guarantee-title" className="py-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-20">
        <Seal />

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-medium text-muted-foreground">Our guarantee</p>
            <span className="rounded-full border border-dashed px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
              Wording to confirm
            </span>
          </div>
          <h2
            id="guarantee-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Try it. If it&apos;s not for you, get your money back.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Start with a {trialDays}-day free trial. If TORCH isn&apos;t right for
            your business in the first {guaranteeDays} days, tell us and we refund
            you. No questions, no hassle.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Check className="size-4 text-brand" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>

          <Button
            size="xl"
            nativeButton={false}
            render={<a href="#pricing" />}
            className="mt-8 w-full sm:w-auto"
          >
            Start my free trial
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  )
}

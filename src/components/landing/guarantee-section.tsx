import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { trialDays } from "@/content/pricing"
import { fmt, type Locale } from "@/i18n/config"
import type { GuaranteeDict } from "@/i18n/dictionaries/guarantee"

// Text comes from src/i18n/dictionaries/guarantee.ts.
function Seal({ t }: { t: GuaranteeDict }) {
  const label = fmt(t.seal, { n: trialDays })
  return (
    <div aria-hidden="true" dir="ltr" className="relative size-56 shrink-0 sm:size-64">
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
          {trialDays}
        </span>
        <span className="mt-1 text-xs font-semibold tracking-[0.2em] uppercase">{t.days}</span>
      </div>
    </div>
  )
}

export function GuaranteeSection({ t }: { t: GuaranteeDict; lang: Locale }) {
  return (
    <section aria-labelledby="guarantee-title" className="py-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-20">
        <Seal t={t} />

        <div>
          <p className="text-sm font-medium text-muted-foreground">{t.eyebrow}</p>
          <h2
            id="guarantee-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {fmt(t.title, { n: trialDays })}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {fmt(t.text, { n: trialDays })}
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {t.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Check className="size-4 text-brand" aria-hidden="true" />
                {fmt(p, { n: trialDays })}
              </li>
            ))}
          </ul>

          <Button
            size="xl"
            nativeButton={false}
            render={<a href="#pricing" />}
            className="mt-8 w-full sm:w-auto"
          >
            {t.cta}
            <ArrowRight data-icon="inline-end" className="rtl:-scale-x-100" />
          </Button>
        </div>
      </div>
    </section>
  )
}

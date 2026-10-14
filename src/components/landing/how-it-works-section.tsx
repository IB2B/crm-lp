import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { bookingHref } from "@/content/embeds"
import type { Locale } from "@/i18n/config"
import type { HowItWorksDict } from "@/i18n/dictionaries/howItWorks"

// TODO(ib2b): confirm the "live in 7 days" timeline (from torch-build-spec.md).
// Text comes from src/i18n/dictionaries/howItWorks.ts.

// Colours for the three steps, in order: your day, our days, go-live day.
const stepStyles = [
  {
    card: "bg-paper text-paper-foreground",
    when: "text-paper-foreground/60",
    body: "text-paper-foreground/70",
  },
  {
    card: "border border-white/10 bg-white/[0.03]",
    when: "text-muted-foreground",
    body: "text-muted-foreground",
  },
  {
    card: "bg-brand text-brand-foreground",
    when: "text-brand-foreground/85",
    body: "text-brand-foreground/85",
  },
]

export function HowItWorksSection({ t, lang }: { t: HowItWorksDict; lang: Locale }) {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="dark scroll-mt-16 bg-background py-20 text-foreground lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground">{t.eyebrow}</p>
          <h2
            id="how-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {t.title}
          </h2>
        </div>

        {/* Your first week as one bar: your part is a single day, ours is the long middle */}
        <ol className="mt-12 grid gap-3 md:grid-cols-3 lg:mt-16">
          {t.steps.map((step, i) => {
            const style = stepStyles[i] ?? stepStyles[1]
            return (
              <li key={step.title} className={`flex flex-col rounded-2xl p-6 ${style.card}`}>
                <p className={`text-sm font-medium ${style.when}`}>{step.when}</p>
                <h3 className="mt-auto pt-10 text-2xl font-medium tracking-tight">{step.title}</h3>
                <p className={`mt-2 text-base leading-relaxed text-pretty ${style.body}`}>{step.body}</p>
              </li>
            )
          })}
        </ol>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-medium">{t.outro}</p>
          <Button
            size="xl"
            nativeButton={false}
            render={<a href={bookingHref(lang)} />}
            className="w-full sm:w-auto"
          >
            {t.cta}
            <ArrowRight data-icon="inline-end" className="rtl:-scale-x-100" />
          </Button>
        </div>
      </div>
    </section>
  )
}

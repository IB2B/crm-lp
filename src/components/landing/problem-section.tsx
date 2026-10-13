import { ArrowRight } from "lucide-react"

import { ProblemOutro } from "@/components/landing/problem-outro"
import { Button } from "@/components/ui/button"
import { bookingLinkProps } from "@/content/embeds"
import type { Locale } from "@/i18n/config"
import type { ProblemDict } from "@/i18n/dictionaries/problem"

// Text comes from src/i18n/dictionaries/problem.ts.
export function ProblemSection({ t }: { t: ProblemDict; lang: Locale }) {
  return (
    <section aria-labelledby="problem-title" className="py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-30 lg:self-start">
          <h2
            id="problem-title"
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {t.title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {t.intro}
          </p>
          <Button
            size="xl"
            nativeButton={false}
            render={<a {...bookingLinkProps} />}
            className="mt-8 w-full sm:w-auto"
          >
            {t.cta}
            <ArrowRight data-icon="inline-end" className="rtl:-scale-x-100" />
          </Button>
        </div>

        <ul className="list-none border-t">
          {t.moments.map((moment, i) => (
            <li key={moment.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b py-7 sm:py-8">
              <span className="pt-1 text-sm text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-xl font-medium tracking-tight text-balance sm:text-2xl">
                  {moment.title}
                </p>
                <p className="mt-2 text-base leading-relaxed text-pretty text-muted-foreground">
                  {moment.body}
                </p>
              </div>
            </li>
          ))}

          <li className="pt-10 sm:pt-12">
            <ProblemOutro lead={t.outroLead} rest={t.outroRest} />
          </li>
        </ul>
      </div>
    </section>
  )
}

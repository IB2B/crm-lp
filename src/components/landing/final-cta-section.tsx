import { ArrowRight, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { bookingCalendarSrc, phoneDisplay, phoneLink, whatsappLink } from "@/content/embeds"
import { trialDays } from "@/content/pricing"
import { company } from "@/content/site"
import { fmt, type Locale } from "@/i18n/config"
import type { FinalCtaDict } from "@/i18n/dictionaries/finalCta"

// Text comes from src/i18n/dictionaries/finalCta.ts.
export function FinalCtaSection({ t }: { t: FinalCtaDict; lang: Locale }) {
  // Ways to reach a person (links live in src/content/embeds.ts and site.ts).
  // `value` (phone number, email) is shown left to right, even on Arabic pages.
  const contactRows: { label: string; value?: string | null; href: string }[] = [
    { label: t.bookCall, href: bookingCalendarSrc },
    { label: t.whatsapp, href: whatsappLink },
    { label: t.callPrefix, value: phoneDisplay, href: phoneLink },
    { label: t.emailPrefix, value: company.email, href: `mailto:${company.email}` },
  ]
  const { languages } = t

  return (
    <section
      id="book-call"
      aria-labelledby="final-cta-title"
      className="scroll-mt-24 bg-paper p-2 sm:p-3"
    >
      {/* Dark rounded card inside a cream frame. Editorial layout so it doesn't repeat the hero. */}
      <div className="dark relative overflow-hidden bg-background py-20 text-foreground lg:py-28" style={{ borderRadius: 28 }}>
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2
            id="final-cta-title"
            className="max-w-5xl text-5xl leading-[0.95] font-light tracking-tighter text-balance sm:text-7xl rtl:tracking-normal lg:text-8xl"
          >
            {t.titleLead} <span className="inline-block origin-bottom animate-ring text-brand motion-reduce:animate-none">{t.titleRing}</span>
          </h2>

          <div className="mt-16 grid gap-12 border-t border-foreground/10 pt-10 md:grid-cols-2 md:gap-16 lg:mt-24">
            <div>
              <p className="text-sm text-muted-foreground">{t.trialEyebrow}</p>
              <p className="mt-3 max-w-md text-xl leading-snug text-pretty sm:text-2xl">
                {fmt(t.trialBody, { n: trialDays })}
              </p>
              <Button size="xl" className="mt-8" nativeButton={false} render={<a href="#pricing" />}>
                {t.trialCta}
                <ArrowRight data-icon="inline-end" className="rtl:-scale-x-100" />
              </Button>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">{t.talkEyebrow}</p>
              <p className="mt-3 max-w-md text-xl leading-snug text-pretty sm:text-2xl">
                {t.speakLead}{" "}
                {languages.map((l, i) => (
                  <span key={l}>
                    <bdi>{l}</bdi>
                    {i < languages.length - 2 ? t.listSeparator : i === languages.length - 2 ? t.listAnd : t.listEnd}
                  </span>
                ))}
              </p>
              <ul className="mt-6 border-t border-foreground/10">
                {contactRows.map((row) => (
                  <li key={row.label}>
                    <a
                      href={row.href}
                      {...(row.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex min-h-12 items-center justify-between gap-4 border-b border-foreground/10 py-3 transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      <span>
                        {row.label}
                        {row.value ? (
                          <>
                            {" "}
                            <bdi dir="ltr">{row.value}</bdi>
                          </>
                        ) : null}
                      </span>
                      <ArrowUpRight
                        className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

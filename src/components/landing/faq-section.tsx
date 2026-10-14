"use client"

import { CalendarDays, MessageCircle, Plus } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { bookingHref, whatsappLink } from "@/content/embeds"
import { company } from "@/content/site"
import { trialDays } from "@/content/pricing"
import { fmt, type Locale } from "@/i18n/config"
import type { FaqDict } from "@/i18n/dictionaries/faq"

// Text comes from src/i18n/dictionaries/faq.ts.
export function FaqSection({ t, lang }: { t: FaqDict; lang: Locale }) {
  const languages = t.languages

  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-16 bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-medium text-muted-foreground">{t.eyebrow}</p>
          <h2
            id="faq-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {t.title}
          </h2>

          <p className="mt-4 max-w-sm text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {t.stillUnsure}{" "}
            {languages.map((l, i) => (
              <span key={l}>
                <bdi className="text-foreground">{l}</bdi>
                {i < languages.length - 2 ? t.listSeparator : i === languages.length - 2 ? t.listOr : t.listEnd}
              </span>
            ))}
          </p>

          {company.email ? (
            <p className="mt-3 text-sm text-muted-foreground">
              {t.emailUs}{" "}
              <a href={`mailto:${company.email}`} className="font-medium text-foreground underline underline-offset-4">
                <bdi>{company.email}</bdi>
              </a>
            </p>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button size="xl" nativeButton={false} render={<a href={bookingHref(lang)} />}>
              <CalendarDays data-icon="inline-start" />
              {t.bookCall}
            </Button>
            <Button
              size="xl"
              variant="outline"
              nativeButton={false}
              render={<a href={whatsappLink} target="_blank" rel="noopener noreferrer" />}
              className="bg-background"
            >
              <MessageCircle data-icon="inline-start" />
              {t.whatsapp}
            </Button>
          </div>
        </div>

        <Accordion className="border-t">
          {t.items.map((item, i) => (
            <AccordionItem
              key={i}
              value={String(i)}
              className="border-b transition-colors data-open:bg-background"
            >
              <AccordionTrigger className="group/faq items-center gap-5 rounded-none px-2 py-6 text-start text-lg font-medium hover:no-underline sm:px-4 sm:text-xl **:data-[slot=accordion-trigger-icon]:hidden">
                <span className="w-7 shrink-0 text-sm font-normal text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{item.q}</span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border bg-background transition-all duration-300 group-aria-expanded/faq:rotate-45 group-aria-expanded/faq:border-brand group-aria-expanded/faq:bg-brand group-aria-expanded/faq:text-brand-foreground">
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="ps-[3.25rem] pe-14 pb-6 text-base leading-relaxed text-muted-foreground sm:ps-[4.25rem]">
                <p className="max-w-2xl">{fmt(item.a, { n: trialDays })}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

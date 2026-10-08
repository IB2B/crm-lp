"use client"

import { CalendarDays, MessageCircle, Plus } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { whatsappLink } from "@/content/embeds"
import { company } from "@/content/site"
import { trialDays } from "@/content/pricing"

// TODO(ib2b): review all answers. The GDPR and GoHighLevel answers need legal/brand approval.
const faqs = [
  {
    q: "How long does the setup take?",
    a: "Most businesses are live in about a week. After a short call, our team connects your channels, imports your contacts and sets up your messages. You don't have to do anything technical.",
  },
  {
    q: "Is there a contract?",
    a: `No. You pay monthly or yearly and can cancel anytime. You also start with a ${trialDays}-day free trial.`,
  },
  {
    q: "Can you move my contacts and data?",
    a: "Yes. Send us your contacts from Excel, Google Contacts, your phone or your old CRM, and we import them for you.",
  },
  {
    q: "Does it work with WhatsApp?",
    a: "Yes. We connect your WhatsApp Business number, so you can read and answer WhatsApp messages in TORCH together with your calls, texts, emails and social messages. WhatsApp's own message fees may apply.",
  },
  {
    q: "Which languages do you support?",
    a: "Our team helps you in Italian, English, French and Arabic. Your automatic messages can be written in any language your customers speak.",
  },
  {
    q: "Is my data safe? Is TORCH GDPR compliant?",
    a: "Yes. Your data is stored on secure servers, and you can export or delete it anytime. We follow GDPR and can sign a data processing agreement (DPA) with you on request.",
  },
  {
    q: "What happens if I cancel?",
    a: "You keep access until the end of the period you paid for, and you can export your contacts first. If you cancel in the first 30 days, you get your money back.",
  },
  {
    q: "How is TORCH different from GoHighLevel?",
    a: "TORCH is built on GoHighLevel, one of the most complete CRM platforms in the world. The difference is the service: we set everything up for you, connect WhatsApp, write your messages, train your team and support you in your language. With the software alone, you do all of that yourself.",
  },
]

const languages = ["Italiano", "English", "Français", "العربية"]

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-16 bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-medium text-muted-foreground">FAQ</p>
          <h2
            id="faq-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Questions? We have answers.
          </h2>

          <p className="mt-4 max-w-sm text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Still not sure? Talk to a real person from our team, in{" "}
            {languages.map((l, i) => (
              <span key={l}>
                <span className="text-foreground">{l}</span>
                {i < languages.length - 2 ? ", " : i === languages.length - 2 ? " or " : "."}
              </span>
            ))}
          </p>

          {company.email ? (
            <p className="mt-3 text-sm text-muted-foreground">
              Or email us at{" "}
              <a href={`mailto:${company.email}`} className="font-medium text-foreground underline underline-offset-4">
                {company.email}
              </a>
            </p>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button size="xl" nativeButton={false} render={<a href="#book-call" />}>
              <CalendarDays data-icon="inline-start" />
              Book a free call
            </Button>
            <Button
              size="xl"
              variant="outline"
              nativeButton={false}
              // TODO(ib2b): set whatsappLink in src/content/embeds.ts
              render={<a href={whatsappLink ?? "#book-call"} />}
              className="bg-background"
            >
              <MessageCircle data-icon="inline-start" />
              WhatsApp us
            </Button>
          </div>
        </div>

        <Accordion className="border-t">
          {faqs.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={item.q}
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
                <p className="max-w-2xl">{item.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

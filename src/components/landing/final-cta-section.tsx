import { ArrowRight, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { bookingCalendarSrc, phoneDisplay, phoneLink, whatsappLink } from "@/content/embeds"
import { trialDays } from "@/content/pricing"
import { company } from "@/content/site"

// Ways to reach a person (links live in src/content/embeds.ts and site.ts).
const contactRows = [
  { label: "Book a free setup call", href: bookingCalendarSrc },
  { label: "Message us on WhatsApp", href: whatsappLink },
  { label: `Call ${phoneDisplay}`, href: phoneLink },
  { label: `Email ${company.email}`, href: `mailto:${company.email}` },
]

export function FinalCtaSection() {
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
            className="max-w-5xl text-5xl leading-[0.95] font-light tracking-tighter text-balance sm:text-7xl lg:text-8xl"
          >
            Your next customer is about to <span className="inline-block origin-bottom animate-ring text-brand motion-reduce:animate-none">call.</span>
          </h2>

          <div className="mt-16 grid gap-12 border-t border-foreground/10 pt-10 md:grid-cols-2 md:gap-16 lg:mt-24">
            <div>
              <p className="text-sm text-muted-foreground">Try it yourself</p>
              <p className="mt-3 max-w-md text-xl leading-snug text-pretty sm:text-2xl">
                {trialDays} days free. We set everything up, you just use it. No contract.
              </p>
              <Button size="xl" className="mt-8" nativeButton={false} render={<a href="#pricing" />}>
                Start my free trial
                <ArrowRight data-icon="inline-end" />
              </Button>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Rather talk to a person?</p>
              <p className="mt-3 max-w-md text-xl leading-snug text-pretty sm:text-2xl">
                We speak English, Italiano, Français and <bdi lang="ar">العربية</bdi>.
              </p>
              <ul className="mt-6 border-t border-foreground/10">
                {contactRows.map((row) => (
                  <li key={row.label}>
                    <a
                      href={row.href}
                      {...(row.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex min-h-12 items-center justify-between gap-4 border-b border-foreground/10 py-3 transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    >
                      {row.label}
                      <ArrowUpRight
                        className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand motion-reduce:transition-none"
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

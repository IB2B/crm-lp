import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { bookingLinkProps } from "@/content/embeds"

// TODO(ib2b): confirm the "live in 7 days" timeline (from torch-build-spec.md).

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="dark scroll-mt-16 bg-background py-20 text-foreground lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground">How it works</p>
          <h2
            id="how-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Live in a week. We do the hard part.
          </h2>
        </div>

        {/* Your first week as one bar: your part is a single day, ours is the long middle */}
        <ol className="mt-12 grid gap-3 md:grid-cols-3 lg:mt-16">
          <li className="flex flex-col rounded-2xl bg-paper p-6 text-paper-foreground">
            <p className="text-sm font-medium text-paper-foreground/60">Day 1 · You</p>
            <h3 className="mt-auto pt-10 text-2xl font-medium tracking-tight">Book a free call</h3>
            <p className="mt-2 text-base leading-relaxed text-pretty text-paper-foreground/70">
              A short chat about your business. No tech talk.
            </p>
          </li>

          <li className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm font-medium text-muted-foreground">Days 2–6 · Our team</p>
            <h3 className="mt-auto pt-10 text-2xl font-medium tracking-tight">We set it all up</h3>
            <p className="mt-2 text-base leading-relaxed text-pretty text-muted-foreground">
              WhatsApp, calendar, contacts and follow-ups. Our team does everything.
            </p>
          </li>

          <li className="flex flex-col rounded-2xl bg-brand p-6 text-brand-foreground">
            <p className="text-sm font-medium text-brand-foreground/85">Day 7 · Live</p>
            <h3 className="mt-auto pt-10 text-2xl font-medium tracking-tight">You get more customers</h3>
            <p className="mt-2 text-base leading-relaxed text-pretty text-brand-foreground/85">
              Answer everyone from one simple app, on your phone or computer.
            </p>
          </li>
        </ol>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-medium">Your part takes one call. We handle the rest.</p>
          <Button
            size="xl"
            nativeButton={false}
            render={<a {...bookingLinkProps} />}
            className="w-full sm:w-auto"
          >
            Book a free setup call
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  )
}

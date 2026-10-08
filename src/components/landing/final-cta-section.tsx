import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GhlEmbed } from "@/components/landing/ghl-embed"
import { bookingCalendarSrc } from "@/content/embeds"
import { trialDays } from "@/content/pricing"

const promises = [`${trialDays}-day free trial`, "Setup included", "No contracts", "Support in 4 languages"]

export function FinalCtaSection() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="bg-paper p-2 sm:p-3"
    >
      {/* Dark rounded card inside a cream frame, same as the hero */}
      <div className="dark relative overflow-hidden bg-background py-20 text-foreground lg:py-28" style={{ borderRadius: 28 }}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <Image
            src="/brand/torch-mark.png"
            alt=""
            width={64}
            height={64}
            className="size-14 rounded-2xl bg-white/5 p-2"
          />
          <h2
            id="final-cta-title"
            className="mt-8 text-4xl leading-[1.05] font-light tracking-tight text-balance sm:text-5xl"
          >
            Turn every call into a customer.
            <span className="mt-2 block text-foreground/45">Your setup is on us.</span>
          </h2>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {promises.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Check className="size-4 text-brand" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Button
              size="xl"
              nativeButton={false}
              render={<a href="#pricing" />}
            >
              Start my free trial
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button size="xl" variant="outline" nativeButton={false} render={<a href="#book-call" />}>
              Book a free setup call
            </Button>
          </div>
        </div>

        <div id="book-call" className="mx-auto mt-20 max-w-4xl scroll-mt-24 border-t pt-14">
          <h3 className="text-center text-xl font-medium sm:text-2xl">
            Pick a time for your free setup call
          </h3>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            A short chat with our team. No tech talk.
          </p>
          <div className="mt-8">
            <GhlEmbed src={bookingCalendarSrc} title="Booking calendar" minHeight={420} />
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

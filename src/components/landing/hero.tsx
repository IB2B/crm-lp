import Image from "next/image"
import { ArrowRight, CalendarDays } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroDashboard } from "@/components/landing/hero-dashboard"

// TODO(ib2b): placeholder portraits. Replace with real team photos in /public/team.
const team = [
  { src: "https://randomuser.me/api/portraits/men/32.jpg" },
  { src: "https://randomuser.me/api/portraits/women/44.jpg" },
  { src: "https://randomuser.me/api/portraits/men/75.jpg" },
  { src: "https://randomuser.me/api/portraits/women/68.jpg" },
]

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      data-hero
      className="bg-paper px-2 pb-2 sm:px-3 sm:pb-3"
    >
      {/* Dark rounded card inside a cream frame, like the reference */}
      <div className="dark relative overflow-hidden bg-background text-foreground" style={{ borderRadius: 28 }}>
      <div className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6 sm:pt-20 lg:pt-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground sm:flex-row">
            <div className="flex -space-x-2">
              {team.map((member) => (
                <Image
                  key={member.src}
                  src={member.src}
                  alt=""
                  width={32}
                  height={32}
                  loading="eager"
                  className="size-8 rounded-full object-cover ring-2 ring-background"
                />
              ))}
            </div>
            <span aria-hidden="true" className="hidden h-4 w-px bg-border sm:block" />
            <span>Set up by a real team, not a ticket queue</span>
          </div>

          <h1
            id="hero-title"
            className="mt-6 text-4xl font-light tracking-tight text-balance sm:text-5xl"
          >
            <span className="block">Never miss a customer again.</span>
            <span className="block text-muted-foreground">We build it. You close the deals.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            TORCH answers missed calls, replies to every message and books
            appointments while you work. Our team sets it all up for you.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button size="xl" nativeButton={false} render={<a href="#pricing" />}>
              Start my free trial
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              nativeButton={false}
              render={<a href="#book-call" />}
            >
              <CalendarDays data-icon="inline-start" />
              Book a free setup call
            </Button>
          </div>
        </div>

        <div className="relative mt-12 pb-16 md:min-h-[32rem] lg:pb-24">
          <HeroDashboard />
        </div>
      </div>
      </div>
    </section>
  )
}

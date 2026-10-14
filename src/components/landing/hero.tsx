import Image from "next/image"
import { ArrowRight, CalendarDays } from "lucide-react"

import { Button } from "@/components/ui/button"
import { bookingHref, demoVideoLocale } from "@/content/embeds"
import { DemoVideoButton } from "@/components/landing/demo-video"
import { HeroDashboard } from "@/components/landing/hero-dashboard"
import type { Locale } from "@/i18n/config"
import type { HeroDict } from "@/i18n/dictionaries/hero"

// TODO(ib2b): placeholder portraits. Replace with real team photos in /public/team.
const team = [
  { src: "https://randomuser.me/api/portraits/men/32.jpg" },
  { src: "https://randomuser.me/api/portraits/women/44.jpg" },
  { src: "https://randomuser.me/api/portraits/men/75.jpg" },
  { src: "https://randomuser.me/api/portraits/women/68.jpg" },
]

// Entrance runs as one sequence (ms): team 0, headline words 150-470, second line 550, text 700,
// buttons 850, underline 1000, connector 1100, cards 1300+ (see hero-dashboard.tsx).
// Split so each word can rise in on its own. The highlighted word also gets a drawn underline.
// Text comes from src/i18n/dictionaries/hero.ts.
export function Hero({ t, lang }: { t: HeroDict; lang: Locale }) {
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
          <div className="flex animate-word-in flex-col items-center gap-3 text-sm text-muted-foreground motion-reduce:animate-none sm:flex-row">
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
            <span>{t.teamBadge}</span>
          </div>

          <h1
            id="hero-title"
            className="mt-6 text-4xl font-light tracking-tight text-balance sm:text-5xl"
          >
            <span className="block">
              {t.headlineWords.map((word, i) => (
                <span
                  key={i}
                  className="inline-block animate-word-in motion-reduce:animate-none"
                  style={{ animationDelay: `${150 + i * 80}ms` }}
                >
                  {i === t.headlineHighlight ? (
                    <span className="relative inline-block">
                      {word}
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-1 h-[3px] origin-left animate-draw-line rtl:origin-right rounded-full bg-brand motion-reduce:animate-none"
                        style={{ animationDelay: "1000ms" }}
                      />
                    </span>
                  ) : (
                    word
                  )}
                </span>
              )).flatMap((el, i) => (i ? [" ", el] : [el]))}
            </span>
            <span
              className="block animate-word-in text-muted-foreground motion-reduce:animate-none"
              style={{ animationDelay: "550ms" }}
            >
              {t.headlineSecond}
            </span>
          </h1>

          <p
            className="mt-5 max-w-xl animate-word-in text-base leading-relaxed text-pretty text-muted-foreground motion-reduce:animate-none sm:text-lg"
            style={{ animationDelay: "700ms" }}
          >
            {t.intro}
          </p>

          <div
            className="mt-8 flex w-full animate-word-in flex-col gap-3 motion-reduce:animate-none sm:w-auto sm:flex-row"
            style={{ animationDelay: "850ms" }}
          >
            <Button size="xl" nativeButton={false} render={<a href="#pricing" />}>
              {t.trialCta}
              <ArrowRight data-icon="inline-end" className="rtl:-scale-x-100" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              nativeButton={false}
              render={<a href={bookingHref(lang)} />}
            >
              <CalendarDays data-icon="inline-start" />
              {t.bookCta}
            </Button>
            {/* The demo video is recorded in Italian, so it only shows on the Italian page. */}
            {lang === demoVideoLocale ? <DemoVideoButton t={t.demo} /> : null}
          </div>
        </div>

        <div className="relative mt-12 pb-16 md:min-h-[32rem] lg:pb-24">
          <HeroDashboard t={t.dashboard} lang={lang} />
        </div>
      </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import {
  BarChart3,
  Bot,
  CalendarCog,
  CalendarDays,
  Globe,
  KanbanSquare,
  Megaphone,
  MessageSquare,
  PhoneCall,
  Share2,
  Star,
  Workflow,
  Zap,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { ScreenshotShowcase } from "@/components/landing/inside-torch/screenshot-showcase"
import type { Locale } from "@/i18n/config"
import type { InsideTorchDict } from "@/i18n/dictionaries/insideTorch"

// Every tab shows a real TORCH screenshot.
// Text (label, caption, benefit, alt) comes from src/i18n/dictionaries/insideTorch.ts, in the same order.
type Item = {
  value: string
  icon: typeof Star
  showcase: { src: string; width: number; height: number }
}

const items: Item[] = [
  {
    value: "inbox",
    icon: MessageSquare,
    // PREVIEW: real account screenshot; personal data replaced with grey placeholder bars.
    // TODO(ib2b): replace with a demo sub-account screenshot (TORCH logo, fake contacts).
    showcase: {
      src: "/platform/inbox.webp?v=5",
      width: 1470,
      height: 827,
    },
  },
  {
    value: "pipeline",
    icon: KanbanSquare,
    // Real screenshot, lead names, phones and companies replaced with placeholder bars.
    showcase: {
      src: "/platform/pipeline.webp?v=2",
      width: 1468,
      height: 828,
    },
  },
  {
    value: "marketing",
    icon: Megaphone,
    // Real screenshot (sample data, banner removed).
    // TODO(ib2b): retake from the demo sub-account with the TORCH logo.
    showcase: {
      src: "/platform/marketing.webp?v=4",
      width: 1471,
      height: 826,
    },
  },
  {
    value: "campaign-results",
    icon: BarChart3,
    // Real screenshot of one campaign's report; workspace and campaign names replaced.
    showcase: {
      src: "/platform/campaign-results.webp?v=1",
      width: 1468,
      height: 827,
    },
  },
  {
    value: "social",
    icon: Share2,
    // Real screenshot. TODO(ib2b): retake with the TORCH logo.
    showcase: {
      src: "/platform/social.webp?v=4",
      width: 1472,
      height: 827,
    },
  },
  {
    value: "ai-agent",
    icon: Bot,
    // Real screenshot, workspace and test agent names replaced.
    showcase: {
      src: "/platform/ai-agents.webp?v=5",
      width: 1469,
      height: 827,
    },
  },
  {
    value: "voice-ai",
    icon: PhoneCall,
    // Real screenshot, workspace and test agent names replaced.
    showcase: {
      src: "/platform/voice-ai.webp?v=1",
      width: 1469,
      height: 828,
    },
  },
  {
    value: "calendar",
    icon: CalendarDays,
    // Real screenshot, team names replaced with placeholder bars; sample bookings drawn in.
    showcase: {
      src: "/platform/calendar.webp?v=6",
      width: 1473,
      height: 828,
    },
  },
  {
    value: "calendars",
    icon: CalendarCog,
    // Real screenshot, workspace and calendar names replaced.
    showcase: {
      src: "/platform/calendars.webp?v=1",
      width: 1471,
      height: 828,
    },
  },
  {
    value: "sites",
    icon: Globe,
    // Real screenshot (template library). TODO(ib2b): retake with the TORCH logo.
    showcase: {
      src: "/platform/sites.webp?v=3",
      width: 1268,
      height: 777,
    },
  },
  {
    value: "reviews",
    icon: Star,
    // Real screenshot, account name replaced with placeholder bars. TODO(ib2b): retake from the demo sub-account.
    showcase: {
      src: "/platform/reviews.webp?v=5",
      width: 1469,
      height: 826,
    },
  },
  {
    value: "automations",
    icon: Zap,
    // Real screenshot, client names replaced with placeholder bars. TODO(ib2b): retake from the demo sub-account.
    showcase: {
      src: "/platform/automations.webp?v=5",
      width: 1468,
      height: 823,
    },
  },  {
    value: "workflow",
    icon: Workflow,
    // Real screenshot, workflow name and form IDs replaced, warning dots removed.
    showcase: {
      src: "/platform/workflow.webp?v=1",
      width: 1473,
      height: 829,
    },
  },
]

export function InsideTorchSection({ t }: { t: InsideTorchDict; lang: Locale }) {
  // Scroll story: the feature in the middle of the screen is "active" and the sticky screen follows it.
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index))
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    )
    stepRefs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="features" aria-labelledby="inside-title" className="scroll-mt-16 overflow-x-clip py-20 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground">{t.eyebrow}</p>
          <h2
            id="inside-title"
            className="mt-3 text-4xl leading-[1.05] font-light tracking-tight text-balance sm:text-5xl"
          >
            {t.titleLead} <span className="text-foreground/45">{t.titleRest}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {t.intro}
          </p>
        </div>

        <div className="mt-12 lg:mt-4 lg:grid lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-12">
          {/* Left: one feature per step, with a progress rail. On phones each step carries its own screen. */}
          <ol className="relative lg:ps-10">
            <span aria-hidden="true" className="absolute inset-y-[30vh] start-[0.3125rem] hidden w-px bg-border lg:block">
              <span
                className="block size-full origin-top bg-brand transition-transform duration-500 motion-reduce:transition-none"
                style={{ transform: `scaleY(${active / (items.length - 1)})` }}
              />
            </span>
            {items.map((item, i) => {
              const Icon = item.icon
              const text = t.items[i]
              const shot = { ...item.showcase, alt: text.alt, enlargeLabel: t.enlarge, closeLabel: t.close }
              const isActive = i === active
              return (
                <li
                  key={item.value}
                  ref={(el) => {
                    stepRefs.current[i] = el
                  }}
                  data-index={i}
                  className="relative border-t py-10 first:border-t-0 lg:flex lg:min-h-[60vh] lg:flex-col lg:justify-center lg:border-t-0 lg:py-0"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute top-1/2 -start-10 hidden -translate-y-1/2 rounded-full transition-all duration-500 motion-reduce:transition-none lg:block",
                      isActive
                        ? "size-[0.6875rem] -ms-px bg-brand ring-4 ring-brand/15"
                        : i < active
                          ? "ms-px size-2 bg-brand"
                          : "ms-px size-2 bg-border"
                    )}
                  />
                  <div
                    className={cn(
                      "transition-opacity duration-500 motion-reduce:transition-none",
                      isActive ? "lg:opacity-100" : "lg:opacity-25"
                    )}
                  >
                    <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Icon className="size-4 text-brand" aria-hidden="true" />
                      <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      <span aria-hidden="true">·</span>
                      {text.label}
                    </p>
                    <p className="mt-4 text-2xl leading-snug font-light tracking-tight text-balance sm:text-3xl lg:text-2xl xl:text-3xl">
                      {text.caption}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground">
                      {text.benefit}
                    </p>
                  </div>
                  <div className="mt-6 lg:hidden">
                    <div className="rounded-[22px] bg-paper p-3">
                      <div className="aspect-[16/9]">
                        <ScreenshotShowcase {...shot} />
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>

          {/* Right (desktop): the screen sticks while the text scrolls past, and swaps with a soft fade */}
          <div className="hidden lg:block">
            <div className="sticky top-[max(5rem,calc(50vh-18rem))]">
              {/* Cream panel hugging the screen, so the whole screenshot shows. It grows into the spare
                  space on the right on wide windows and never gets taller than the window. */}
              <div className="w-[calc(100%_+_max(0px,(100vw_-_72rem)/2)_-_1rem)] max-w-[calc((100vh_-_8rem)*16/9)] rounded-[28px] bg-paper p-3 xl:p-4">
                <div className="relative aspect-[16/9]">
                  {items.map((item, i) => (
                    <div
                      key={item.value}
                      aria-hidden={i !== active}
                      inert={i !== active}
                      className={cn(
                        "absolute inset-0 origin-top-left rtl:origin-top-right transition-[opacity,translate,scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                        i === active ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-[0.97] opacity-0"
                      )}
                    >
                      <ScreenshotShowcase
                        {...item.showcase}
                        alt={t.items[i].alt}
                        enlargeLabel={t.enlarge}
                        closeLabel={t.close}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex max-w-xl items-center gap-3 text-sm text-muted-foreground">
                <span className="tabular-nums">
                  {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-border">
                  <span
                    className="block h-full origin-left rtl:origin-right bg-brand transition-transform duration-500 motion-reduce:transition-none"
                    style={{ transform: `scaleX(${(active + 1) / items.length})` }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          {t.alsoIncluded}
        </p>
      </div>
    </section>
  )
}

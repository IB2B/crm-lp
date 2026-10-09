"use client"

import { useEffect, useRef, useState } from "react"
import {
  Bot,
  CalendarDays,
  Globe,
  KanbanSquare,
  Megaphone,
  MessageSquare,
  Share2,
  Star,
  Zap,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { ScreenshotShowcase } from "@/components/landing/inside-torch/screenshot-showcase"

// Every tab shows a real TORCH screenshot.
type Item = {
  value: string
  label: string
  icon: typeof Star
  caption: string
  /** What it means for the owner, in plain words. */
  benefit: string
  showcase: { src: string; width: number; height: number; alt: string }
}

const items: Item[] = [
  {
    value: "inbox",
    label: "Inbox",
    icon: MessageSquare,
    caption: "WhatsApp, Instagram, Facebook, texts and email in one inbox.",
    benefit: "No more jumping between apps. Your whole team sees every message, so nobody gets left without a reply.",
    // PREVIEW: real account screenshot; personal data replaced with grey placeholder bars.
    // TODO(ib2b): replace with a demo sub-account screenshot (TORCH logo, fake contacts).
    showcase: {
      src: "/platform/inbox.webp?v=4",
      width: 1470,
      height: 827,
      alt: "TORCH conversations inbox with a team inbox list, an open conversation and contact details",
    },
  },
  {
    value: "pipeline",
    label: "Pipeline",
    icon: KanbanSquare,
    caption: "See every customer and where they are, from first message to paid.",
    benefit: "Know who's ready to buy, who needs a nudge and who's waiting on you.",
    // Real screenshot, lead names, phones and companies replaced with placeholder bars.
    showcase: {
      src: "/platform/pipeline.webp?v=1",
      width: 1468,
      height: 828,
      alt: "TORCH pipeline board with lead cards organised by stage",
    },
  },
  {
    value: "marketing",
    label: "Marketing campaigns",
    icon: Megaphone,
    caption: "Send offers and news by email, SMS and WhatsApp, and see who opens and clicks.",
    benefit: "Bring past customers back with a quick message, without hiring an agency.",
    // Real screenshot (sample data, banner removed).
    // TODO(ib2b): retake from the demo sub-account with the TORCH logo.
    showcase: {
      src: "/platform/marketing.webp?v=3",
      width: 1471,
      height: 826,
      alt: "TORCH email marketing statistics showing delivered, opened, clicked and ordered",
    },
  },
  {
    value: "social",
    label: "Social media planner",
    icon: Share2,
    caption: "Connect Facebook, Instagram, TikTok, LinkedIn, Google and more, then post everywhere at once.",
    benefit: "Plan a week of posts in one sitting and let TORCH publish them on time.",
    // Real screenshot. TODO(ib2b): retake with the TORCH logo.
    showcase: {
      src: "/platform/social.webp?v=3",
      width: 1472,
      height: 827,
      alt: "TORCH social planner showing Facebook, Instagram, LinkedIn, TikTok, YouTube, Pinterest, Threads, Bluesky and Google Business",
    },
  },
  {
    value: "ai-agent",
    label: "AI assistant",
    icon: Bot,
    caption: "Create AI agents that answer your customers and book visits, day and night.",
    benefit: "Customers get an answer at 11pm on a Sunday, and you wake up to bookings.",
    // Real screenshot.
    showcase: {
      src: "/platform/ai-agents.webp?v=3",
      width: 1474,
      height: 830,
      alt: "TORCH Conversation AI agents dashboard",
    },
  },
  {
    value: "calendar",
    label: "Booking & reminders",
    icon: CalendarDays,
    caption: "Every booking in one calendar, with reminders sent for you.",
    benefit: "Fewer no-shows, because everyone gets a reminder before their visit.",
    // Real screenshot, team names replaced with placeholder bars.
    showcase: {
      src: "/platform/calendar.webp?v=4",
      width: 1473,
      height: 828,
      alt: "TORCH calendar week view with team filters",
    },
  },
  {
    value: "sites",
    label: "Websites & funnels",
    icon: Globe,
    caption: "Start from ready-made templates for your business. We set up your pages for you.",
    benefit: "A page that looks good on phones and sends every enquiry straight to your inbox.",
    // Real screenshot (template library). TODO(ib2b): retake with the TORCH logo.
    showcase: {
      src: "/platform/sites.webp?v=3",
      width: 1268,
      height: 777,
      alt: "TORCH funnel template library with ready-made templates by industry",
    },
  },
  {
    value: "reviews",
    label: "Reviews",
    icon: Star,
    caption: "See your rating and every new review, and send review requests in one click.",
    benefit: "More happy customers leave a review, because you ask at the right moment.",
    // Real screenshot, account name replaced with placeholder bars. TODO(ib2b): retake from the demo sub-account.
    showcase: {
      src: "/platform/reviews.webp?v=4",
      width: 1469,
      height: 826,
      alt: "TORCH reputation overview with average rating, total reviews and charts",
    },
  },
  {
    value: "automations",
    label: "Automations",
    icon: Zap,
    caption: "Ready-made workflows for bookings, follow-ups and campaigns. We build them for you.",
    benefit: "The follow-ups you never have time for happen on their own.",
    // Real screenshot, client names replaced with placeholder bars. TODO(ib2b): retake from the demo sub-account.
    showcase: {
      src: "/platform/automations.webp?v=4",
      width: 1468,
      height: 823,
      alt: "TORCH list of automation workflows with their status and number of contacts",
    },
  },
]

// Shown as one line so the list stays short.
const alsoIncluded = [
  "payments & invoices",
  "a mobile app",
  "reports",
]

export function InsideTorchSection() {
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
          <p className="text-sm font-medium text-muted-foreground">Inside TORCH</p>
          <h2
            id="inside-title"
            className="mt-3 text-4xl leading-[1.05] font-light tracking-tight text-balance sm:text-5xl"
          >
            Everything you need, <span className="text-foreground/45">in one app.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            All your tools work together, on your computer and your phone.
            We set them all up before you log in for the first time.
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
                      {item.label}
                    </p>
                    <p className="mt-4 text-2xl leading-snug font-light tracking-tight text-balance sm:text-3xl lg:text-2xl xl:text-3xl">
                      {item.caption}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground">
                      {item.benefit}
                    </p>
                  </div>
                  <div className="mt-6 lg:hidden">
                    <div className="rounded-[22px] bg-paper p-3">
                      <div className="aspect-[16/9]">
                        <ScreenshotShowcase {...item.showcase} />
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
                        "absolute inset-0 origin-top-left transition-[opacity,translate,scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                        i === active ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-[0.97] opacity-0"
                      )}
                    >
                      <ScreenshotShowcase {...item.showcase} />
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
                    className="block h-full origin-left bg-brand transition-transform duration-500 motion-reduce:transition-none"
                    style={{ transform: `scaleX(${(active + 1) / items.length})` }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Also included: {alsoIncluded.join(", ")}.
        </p>
      </div>
    </section>
  )
}

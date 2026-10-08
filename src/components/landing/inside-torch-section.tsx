"use client"

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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScreenshotShowcase } from "@/components/landing/inside-torch/screenshot-showcase"

// Every tab shows a real TORCH screenshot.
type Item = {
  value: string
  label: string
  icon: typeof Star
  caption: string
  showcase: { src: string; width: number; height: number; alt: string }
}

const items: Item[] = [
  {
    value: "inbox",
    label: "Inbox",
    icon: MessageSquare,
    caption: "WhatsApp, Instagram, Facebook, texts and email in one inbox.",
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
  return (
    <section
      id="features"
      aria-labelledby="inside-title"
      className="scroll-mt-16 bg-muted/40 py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground">Inside TORCH</p>
          <h2
            id="inside-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Everything you need, in one app.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            All your tools work together, on your computer and your phone.
            We set them all up before you log in for the first time.
          </p>
        </div>

        <Tabs defaultValue="inbox" className="mt-10 gap-6 lg:mt-12">
          <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0 group-data-horizontal/tabs:h-auto">
            {items.map(({ value, label, icon: Icon }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="h-10 flex-none gap-2 rounded-full border border-foreground/15 bg-background px-4 text-sm text-foreground shadow-xs hover:border-brand/50 hover:bg-brand/5 data-active:border-brand data-active:bg-brand! data-active:text-brand-foreground! data-active:shadow-md data-active:shadow-brand/25 [&_svg]:text-muted-foreground hover:[&_svg]:text-brand data-active:[&_svg]:text-brand-foreground dark:data-active:text-brand-foreground!"
              >
                <Icon className="size-4 shrink-0" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {items.map((item) => (
            <TabsContent
              key={item.value}
              value={item.value}
              className="animate-in fade-in duration-300 motion-reduce:animate-none"
            >
              <p className="mb-4 text-sm text-muted-foreground">{item.caption}</p>
              <ScreenshotShowcase {...item.showcase} />
            </TabsContent>
          ))}

          <p className="text-sm text-muted-foreground">
            Also included: {alsoIncluded.join(", ")}.
          </p>
        </Tabs>
      </div>
    </section>
  )
}

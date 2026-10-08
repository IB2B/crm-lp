"use client"

import Image from "next/image"
import {
  BellRing,
  CalendarCheck,
  CalendarClock,
  Clock,
  FileText,
  Inbox,
  MessageCircle,
  MessagesSquare,
  PhoneMissed,
  RotateCcw,
  Smartphone,
  Star,
  ThumbsUp,
  Users,
} from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type Tab = {
  value: string
  label: string
  title: string
  text: string
  points: { icon: typeof Inbox; title: string; text: string }[]
  photo: { src: string; alt: string }
  Overlay: () => React.ReactElement
}

/* ---------- Overlay cards on the photo (illustrative content) ---------- */

function OverlayCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-background/95 p-4 text-foreground shadow-2xl shadow-black/20 backdrop-blur">
      {children}
    </div>
  )
}

function InboxOverlay() {
  const messages = [
    { name: "Sarah R.", text: "Do you have time on Thursday?", channel: "WhatsApp" },
    { name: "Marco B.", text: "How much is a first visit?", channel: "Instagram" },
    { name: "Lena F.", text: "Thanks, see you soon!", channel: "Text" },
  ]
  return (
    <OverlayCard>
      <p className="text-xs font-medium text-muted-foreground">All messages</p>
      <ul className="mt-2 divide-y">
        {messages.map((m, i) => (
          <li key={m.name} className="flex items-center gap-3 py-2">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-semibold">
              {m.name.split(" ").map((p) => p[0]).join("")}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{m.name}</p>
              <p className="truncate text-xs text-muted-foreground">{m.text}</p>
            </div>
            <span
              className={cn(
                "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium",
                i === 0 ? "bg-brand text-brand-foreground" : "bg-muted"
              )}
            >
              {m.channel}
            </span>
          </li>
        ))}
      </ul>
    </OverlayCard>
  )
}

function FollowUpsOverlay() {
  const days = [
    { day: "Mon", value: 30 },
    { day: "Tue", value: 55 },
    { day: "Wed", value: 80, active: true },
    { day: "Thu", value: 95 },
    { day: "Fri", value: 70 },
    { day: "Sat", value: 45 },
    { day: "Sun", value: 40 },
  ]
  return (
    <OverlayCard>
      <p className="text-xs font-medium text-muted-foreground">Follow-ups sent for you</p>
      <div className="relative mt-3 flex h-28 items-end gap-2">
        {days.map((d) => (
          <div key={d.day} className="relative flex flex-1 flex-col items-center gap-1.5">
            {d.active ? (
              <span className="absolute -top-1 end-full z-10 me-1.5 rounded-full bg-brand px-2 py-0.5 text-[10px] font-medium whitespace-nowrap text-brand-foreground">
                24 sent
              </span>
            ) : null}
            <div className="flex h-24 w-full items-end">
              <div
                className={cn("w-full rounded-md", d.active ? "bg-foreground" : "bg-foreground/10")}
                style={{ height: `${d.value}%` }}
              />
            </div>
            <span className="text-[10px] text-muted-foreground">{d.day}</span>
          </div>
        ))}
      </div>
    </OverlayCard>
  )
}

function BookingOverlay() {
  const slots = [
    { time: "9:00", name: "Sarah R.", what: "Consultation" },
    { time: "11:00", name: "Marco B.", what: "Treatment" },
    { time: "14:30", name: "New booking", what: "First visit", isNew: true },
  ]
  return (
    <OverlayCard>
      <p className="text-xs font-medium text-muted-foreground">Thursday</p>
      <ul className="mt-2 flex flex-col gap-1.5">
        {slots.map((s) => (
          <li
            key={s.time}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm",
              s.isNew ? "bg-brand/15" : "bg-muted"
            )}
          >
            <span className="w-10 text-xs text-muted-foreground tabular-nums">{s.time}</span>
            <span className="flex-1 truncate">
              <span className="font-medium">{s.name}</span>
              <span className="text-muted-foreground"> · {s.what}</span>
            </span>
            {s.isNew ? <CalendarCheck className="size-4 text-brand" /> : null}
          </li>
        ))}
      </ul>
    </OverlayCard>
  )
}

function ReviewsOverlay() {
  return (
    <OverlayCard>
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-muted-foreground">New Google review</p>
        <span className="text-[10px] text-muted-foreground">Just now</span>
      </div>
      <div className="mt-2 flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="size-4 fill-brand text-brand" />
        ))}
      </div>
      <p className="mt-2 text-sm">
        &ldquo;So easy to book, and they even texted me a reminder. Lovely
        team!&rdquo;
      </p>
    </OverlayCard>
  )
}

/* ---------- Content ---------- */

const tabs: Tab[] = [
  {
    value: "inbox",
    label: "Inbox",
    title: "Every message in one place",
    text: "WhatsApp, Instagram, Facebook, texts and email all land in one inbox. Nothing gets lost.",
    points: [
      { icon: MessageCircle, title: "WhatsApp first", text: "Reply to customers where they already are." },
      { icon: MessagesSquare, title: "All channels", text: "Social, texts and email side by side." },
      { icon: Users, title: "Share with your team", text: "Everyone sees who answered what." },
      { icon: Smartphone, title: "Reply from your phone", text: "Answer from the app, wherever you are." },
    ],
    photo: {
      src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?fit=crop&crop=faces,entropy&w=1000&h=1250",
      alt: "Salon receptionist replying to messages on a tablet",
    },
    Overlay: InboxOverlay,
  },
  {
    value: "follow-ups",
    label: "Follow-ups",
    title: "Follow-ups that happen on their own",
    text: "Missed a call? TORCH texts back. Sent a quote? TORCH checks in. You don't have to remember.",
    points: [
      { icon: PhoneMissed, title: "Missed-call text back", text: "Every caller gets a reply in seconds." },
      { icon: FileText, title: "Quote follow-ups", text: "A friendly nudge before they go cold." },
      { icon: BellRing, title: "Reminders", text: "Customers get a text before their visit." },
      { icon: RotateCcw, title: "Win back customers", text: "Bring old customers back with one message." },
    ],
    photo: {
      src: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?fit=crop&crop=faces,entropy&w=1000&h=1250",
      alt: "Café owner working at the counter",
    },
    Overlay: FollowUpsOverlay,
  },
  {
    value: "booking",
    label: "Booking",
    title: "A calendar that fills itself",
    text: "Customers pick a time and book online, day or night. TORCH confirms and reminds them for you.",
    points: [
      { icon: CalendarCheck, title: "Online booking", text: "A booking link for your site and socials." },
      { icon: BellRing, title: "Text reminders", text: "Fewer people forget their visit." },
      { icon: CalendarClock, title: "Easy changes", text: "Customers can move a visit themselves." },
      { icon: Clock, title: "Your hours, your rules", text: "Only open the times that suit you." },
    ],
    photo: {
      src: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?fit=crop&crop=faces,entropy&w=1000&h=1250",
      alt: "Customer checking in at a reception desk",
    },
    Overlay: BookingOverlay,
  },
  {
    value: "reviews",
    label: "Reviews",
    title: "More 5-star reviews on Google",
    text: "After each visit, TORCH asks happy customers for a review. More reviews, more new customers.",
    points: [
      { icon: Star, title: "Automatic requests", text: "Sent at the right moment, every time." },
      { icon: ThumbsUp, title: "Happy customers first", text: "Hear about problems before Google does." },
      { icon: MessageCircle, title: "Reply in one place", text: "Answer reviews without logging in anywhere." },
      { icon: Inbox, title: "All reviews together", text: "See every new review as it comes in." },
    ],
    photo: {
      src: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?fit=crop&crop=faces,entropy&w=1000&h=1250",
      alt: "Smiling business owner in her shop",
    },
    Overlay: ReviewsOverlay,
  },
]

/* ---------- Section ---------- */

export function PlatformSection() {
  return (
    <section aria-labelledby="platform-title" className="bg-paper py-20 text-paper-foreground lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-16">
          <h2
            id="platform-title"
            className="text-3xl leading-tight font-light tracking-tight text-balance sm:text-4xl"
          >
            Everything your business needs, set up for you
          </h2>
          <p className="max-w-md text-base leading-relaxed text-pretty text-paper-foreground/70 lg:justify-self-end">
            One simple app for messages, follow-ups, bookings and reviews. Our
            team sets it up. You just use it.
          </p>
        </div>

        <Tabs defaultValue="inbox" className="mt-12 gap-10 lg:mt-16">
          <TabsList className="grid w-full grid-cols-4 rounded-full bg-paper-foreground p-1 group-data-horizontal/tabs:h-11 sm:inline-grid sm:w-fit">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="h-full rounded-full border-0 px-2 text-xs text-white/70 hover:text-white data-active:bg-brand data-active:text-brand-foreground data-active:shadow-none sm:px-5 sm:text-sm dark:text-white/70"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map(({ value, title, text, points, photo, Overlay }) => (
            <TabsContent
              key={value}
              value={value}
              className="grid animate-in gap-10 fade-in duration-300 motion-reduce:animate-none lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
            >
              <div className="flex flex-col">
                <h3 className="text-4xl leading-[1.1] font-light tracking-tight text-balance sm:text-5xl">
                  {title}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-pretty text-paper-foreground/70">
                  {text}
                </p>

                <ul className="mt-auto grid gap-x-8 gap-y-6 pt-10 sm:grid-cols-2">
                  {points.map(({ icon: Icon, title: pointTitle, text: pointText }) => (
                    <li key={pointTitle} className="flex gap-3">
                      <Icon className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-medium">{pointTitle}</p>
                        <p className="mt-0.5 text-sm text-paper-foreground/60">{pointText}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[4/3] lg:aspect-[4/5]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                  <Overlay />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

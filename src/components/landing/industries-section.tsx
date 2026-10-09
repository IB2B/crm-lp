"use client"

import {
  Building2,
  Handshake,
  Megaphone,
  Plane,
  Scissors,
  Smile,
  UtensilsCrossed,
} from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const industries = [
// Ordered by importance for TORCH (fit and value per customer).
  {
    value: "dentists",
    label: "Dentists",
    icon: Smile,
    title: "Fewer empty chairs.",
    text: "TORCH reminds patients the day before and asks for a Google review after each visit.",
    message: "Hi Marco, see you tomorrow at 10:00 for your check-up. Reply YES to confirm.",
  },
  {
    value: "beauty",
    label: "Beauty salons",
    icon: Scissors,
    title: "Clients who keep coming back.",
    text: "Clients book online day or night, and TORCH reminds them when it's time for their next visit.",
    message: "Hi Sara, it's been 6 weeks since your last cut. Want to book your next appointment?",
  },
  {
    value: "real-estate",
    label: "Real estate",
    icon: Building2,
    title: "Answer every enquiry first.",
    text: "Every property enquiry gets a WhatsApp reply in seconds, and viewings go straight into your calendar.",
    message: "Hi Luca, thanks for your interest in the flat on Via Roma. Would Thursday at 18:00 work for a viewing?",
  },
  {
    value: "restaurants",
    label: "Restaurants",
    icon: UtensilsCrossed,
    title: "Full tables, fewer no-shows.",
    text: "Guests book a table online and get a reminder. Regulars hear about your new menu and events.",
    message: "Hi Anna, your table for 4 is booked for Saturday at 20:30. See you then!",
  },
  {
    value: "travel",
    label: "Travel agencies",
    icon: Plane,
    title: "Quotes that turn into trips.",
    text: "Every quote gets a friendly follow-up, so travellers don't book somewhere else.",
    message: "Hi Paolo, did you get a chance to look at your Greece quote? Happy to answer any questions.",
  },
  {
    value: "marketing-agencies",
    label: "Marketing agencies",
    icon: Megaphone,
    title: "Every ad lead gets a reply.",
    text: "Leads from your clients' ads get an answer in seconds, and your clients can see what happened to every one.",
    message: "Hi Giulia, thanks for your request from our Facebook ad. When's a good time for a quick call?",
  },
  {
    value: "sales-agencies",
    label: "Sales agencies",
    icon: Handshake,
    title: "No deal left waiting.",
    text: "New leads get a reply straight away, and TORCH reminds your team to follow up until the deal is closed.",
    message: "Hi Davide, just checking in on the offer we sent on Tuesday. Any questions before you decide?",
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" aria-labelledby="industries-title" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Industries</p>
            <h2
              id="industries-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              Made for businesses like yours.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg lg:justify-self-end">
            We set TORCH up for the way your business works, with the messages
            your customers need.
          </p>
        </div>

        <Tabs defaultValue="dentists" className="mt-10 gap-8 lg:mt-12">
          <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0 group-data-horizontal/tabs:h-auto">
            {industries.map(({ value, label, icon: Icon }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="h-10 flex-none gap-2 rounded-full border border-foreground/15 bg-background px-4 text-sm text-foreground shadow-xs hover:border-brand/50 hover:bg-brand/5 data-active:border-brand data-active:bg-brand! data-active:text-brand-foreground! data-active:shadow-md data-active:shadow-brand/25 [&_svg]:text-muted-foreground hover:[&_svg]:text-brand data-active:[&_svg]:text-brand-foreground"
              >
                <Icon className="size-4 shrink-0" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {industries.map((item) => (
            <TabsContent
              key={item.value}
              value={item.value}
              className="grid animate-in items-center gap-8 fade-in duration-300 motion-reduce:animate-none lg:grid-cols-2 lg:gap-16"
            >
              <div>
                <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                <h3 className="mt-2 text-4xl leading-tight font-light tracking-tight text-balance sm:text-5xl">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                  {item.text}
                </p>

              </div>

              <div className="rounded-3xl bg-muted/60 p-6 sm:p-10">
                <p className="text-sm font-medium text-muted-foreground">
                  What your customers get
                </p>
                <div className="mt-4 rounded-2xl rounded-ss-md bg-background px-5 py-4 shadow-sm">
                  <p className="text-lg leading-relaxed">{item.message}</p>
                  <p className="mt-2 text-end text-xs text-muted-foreground">WhatsApp · sent by TORCH</p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

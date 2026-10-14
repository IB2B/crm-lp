"use client"

import {
  Briefcase,
  Building2,
  Check,
  Dumbbell,
  Megaphone,
  Plane,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { fmt, type Locale } from "@/i18n/config"
import type { IndustriesDict } from "@/i18n/dictionaries/industries"

// Icons by industry; the text comes from src/i18n/dictionaries/industries.ts.
const icons: Record<string, LucideIcon> = {
  "marketing-agencies": Megaphone,
  "sales-agencies": Target,
  coaches: Briefcase,
  dentists: Stethoscope,
  "med-spas": Sparkles,
  "real-estate": Building2,
  insurance: ShieldCheck,
  "home-services": Wrench,
  law: Scale,
  gyms: Dumbbell,
  restaurants: UtensilsCrossed,
  travel: Plane,
}

// Sample sub-accounts for the agency mockup (made-up businesses).
const clients = [
  { name: "Bella Dental", place: "Milano" },
  { name: "Studio Forma", place: "Torino" },
  { name: "Casa Verde Immobiliare", place: "Roma" },
]
// The client that "just signed up": slides in last, highlighted.
const newClient = { name: "Pizzeria Da Gino", place: "Napoli" }

const initials = (name: string) => name.split(" ").slice(0, 2).map((w) => w[0]).join("")

const triggerClass =
  "h-9 flex-none gap-2 rounded-full border border-foreground/15 bg-background px-3.5 text-sm text-foreground hover:border-brand/50 hover:bg-brand/5 data-active:border-brand data-active:bg-brand! data-active:text-brand-foreground! [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground hover:[&_svg]:text-brand data-active:[&_svg]:text-brand-foreground"

// Phones: each group is one row that scrolls sideways. Larger screens: the row wraps if needed.
const rowClass =
  "-mx-4 mt-2.5 flex flex-nowrap gap-2 overflow-x-auto px-4 py-0.5 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"

// Soft background behind the mockup card: light grey, a faint dot pattern that fades out,
// and an orange glow. The card itself stays a plain shadcn Card.
function CardBackdrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl bg-muted/60 p-4 sm:p-6">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 [background-image:radial-gradient(var(--color-foreground)_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute -end-10 -top-10 size-56 animate-glow-drift rounded-full bg-brand/25 blur-3xl motion-reduce:animate-none" />
        <div className="absolute -bottom-16 -start-12 size-48 animate-glow-drift rounded-full bg-brand/10 blur-3xl [animation-delay:-4.5s] [animation-direction:alternate-reverse] motion-reduce:animate-none" />
      </div>
      {children}
    </div>
  )
}

export function IndustriesSection({ t }: { t: IndustriesDict; lang: Locale }) {
  const groups = [
    { key: "agencies", label: t.groupAgencies },
    { key: "local", label: t.groupLocal },
  ]

  return (
    <section id="industries" aria-labelledby="industries-title" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{t.eyebrow}</p>
            <h2
              id="industries-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              {t.title}
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg lg:justify-self-end">
            {t.intro}
          </p>
        </div>

        <Tabs
          defaultValue="marketing-agencies"
          className="mt-10 gap-12 lg:mt-12"
        >
          <TabsList className="flex h-auto w-full flex-col items-stretch justify-start gap-5 bg-transparent p-0 group-data-horizontal/tabs:h-auto">
            {groups.map((group) => (
              <div key={group.key}>
                <p className="text-sm font-medium text-muted-foreground">{group.label}</p>
                <div className={rowClass}>
                  {t.items
                    .filter((item) => item.group === group.key)
                    .map(({ value, label }) => {
                      const Icon = icons[value] ?? Sparkles
                      return (
                        <TabsTrigger key={value} value={value} className={triggerClass}>
                          <Icon />
                          {label}
                        </TabsTrigger>
                      )
                    })}
                </div>
              </div>
            ))}
          </TabsList>

          {t.items.map((item) => (
            <TabsContent
              key={item.value}
              value={item.value}
              className="grid animate-in items-start gap-8 fade-in duration-300 motion-reduce:animate-none lg:grid-cols-2 lg:gap-12"
            >
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">{item.title}</h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-pretty text-muted-foreground">{item.text}</p>
              </div>

              <CardBackdrop>
                {item.message ? (
                  <Card className="animate-in duration-500 fade-in slide-in-from-bottom-3 motion-reduce:animate-none">
                    <CardHeader>
                      <CardTitle>{t.customersGet}</CardTitle>
                      <CardDescription>{t.sentBy}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="rounded-lg bg-muted px-4 py-3 text-base leading-relaxed">{item.message}</p>
                    </CardContent>
                  </Card>
                ) : (
                  // Agencies: the client accounts they manage, instead of a customer message.
                  <Card className="animate-in duration-500 fade-in slide-in-from-bottom-3 motion-reduce:animate-none">
                    <CardHeader>
                      <CardTitle>{t.clientsHeading}</CardTitle>
                      <CardDescription>{fmt(t.clientAccounts, { n: clients.length + 1 })}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="divide-y">
                        {[...clients, newClient].map((c, i) => {
                          const isNew = c === newClient
                          return (
                            <li
                              key={c.name}
                              className="flex animate-in items-center gap-3 py-2.5 fade-in slide-in-from-bottom-1 fill-mode-both first:pt-0 last:pb-0 motion-reduce:animate-none"
                              // One after another; the new client comes last, after a short pause.
                              style={{ animationDelay: `${200 + i * 120 + (isNew ? 300 : 0)}ms`, animationDuration: "400ms" }}
                            >
                              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                                {initials(c.name)}
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block truncate font-medium">{c.name}</span>
                                <span className="block text-xs text-muted-foreground">{c.place}</span>
                              </span>
                              {isNew ? (
                                <Badge className="bg-brand text-brand-foreground">
                                  <Check aria-hidden="true" />
                                  {t.newClient}
                                </Badge>
                              ) : (
                                <Badge variant="secondary">{t.clientActive}</Badge>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </CardBackdrop>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

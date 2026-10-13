"use client"

import {
  ArrowRight,
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

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Locale } from "@/i18n/config"
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

const triggerClass =
  "h-9 flex-none gap-2 rounded-full border border-foreground/15 bg-background px-3.5 text-sm text-foreground hover:border-brand/50 hover:bg-brand/5 data-active:border-brand data-active:bg-brand! data-active:text-brand-foreground! [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground hover:[&_svg]:text-brand data-active:[&_svg]:text-brand-foreground"

// Phones: each group is one row that scrolls sideways. Larger screens: the row wraps if needed.
const rowClass =
  "-mx-4 mt-2.5 flex flex-nowrap gap-2 overflow-x-auto px-4 py-0.5 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"

// Behind the mockup card: a faint dot pattern that fades out, and a soft orange glow.
function PanelBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 [background-image:radial-gradient(var(--color-foreground)_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -end-10 -top-10 size-56 rounded-full bg-brand/25 blur-3xl" />
      <div className="absolute -bottom-16 -start-12 size-48 rounded-full bg-brand/10 blur-3xl" />
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
              className="grid animate-in items-center gap-8 fade-in duration-300 motion-reduce:animate-none lg:min-h-[22rem] lg:grid-cols-2 lg:gap-16"
            >
              <div>
                <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                <h3 className="mt-2 text-4xl leading-tight font-light tracking-tight text-balance sm:text-5xl">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                  {item.text}
                </p>
                {item.message ? null : (
                  <Button size="xl" nativeButton={false} render={<a href="#agencies" />} className="mt-8 w-full sm:w-auto">
                    {t.partnerCta}
                    <ArrowRight data-icon="inline-end" className="rtl:-scale-x-100" />
                  </Button>
                )}
              </div>

              {item.message ? (
                <div className="relative isolate overflow-hidden rounded-3xl bg-muted/60 p-6 sm:p-10">
                  <PanelBackdrop />
                  <p className="text-sm font-medium text-muted-foreground">{t.customersGet}</p>
                  <div className="mt-4 rounded-2xl rounded-ss-md bg-background px-5 py-4 shadow-sm">
                    <p className="text-lg leading-relaxed">{item.message}</p>
                    <p className="mt-2 text-end text-xs text-muted-foreground">{t.sentBy}</p>
                  </div>
                </div>
              ) : (
                // Agencies: a client list with sub-accounts instead of a customer message.
                <div className="relative isolate overflow-hidden rounded-3xl bg-muted/60 p-6 sm:p-10">
                  <PanelBackdrop />
                  <p className="text-sm font-medium text-muted-foreground">{t.clientsHeading}</p>
                  <ul className="mt-4 divide-y rounded-2xl bg-background shadow-sm">
                    {clients.map((c) => (
                      <li key={c.name} className="flex items-center gap-3 px-5 py-3.5">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-semibold">
                          {c.name.split(" ").slice(0, 2).map((w) => w[0]).join("")}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-base font-medium">{c.name}</span>
                          <span className="block text-sm text-muted-foreground">{c.place}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1.5 text-sm font-medium shadow-xs">
                    <Check className="size-4 text-brand" aria-hidden="true" />
                    {t.newClient}
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

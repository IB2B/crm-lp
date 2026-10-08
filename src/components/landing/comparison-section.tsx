import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { euro, referencePlan } from "@/content/pricing"

// Typical entry-plan prices (EUR/month) of popular tools, October 2026.
// Double-check before going live.
const tools = [
  { name: "Website builder", example: "Wix", price: 29 },
  { name: "Funnel builder", example: "ClickFunnels", price: 97 },
  { name: "Online booking & reminders", example: "Calendly, Booksy", price: 25 },
  { name: "WhatsApp & SMS tool", example: "WATI-type tools", price: 49 },
  { name: "Email marketing & mailing", example: "Mailchimp", price: 20 },
  { name: "Automations", example: "Zapier", price: 20 },
  { name: "Review requests", example: "Review tools", price: 49 },
  { name: "CRM & contacts", example: "HubSpot, Pipedrive", price: 25 },
  { name: "Social media planner", example: "Hootsuite", price: 99 },
  { name: "AI chat assistant", example: "Chatbot tools", price: 39 },
  { name: "Forms & surveys", example: "Typeform", price: 25 },
  { name: "Call tracking", example: "CallRail", price: 45 },
  { name: "Invoices & payments", example: "Invoicing tools", price: 15 },
]

// One-time cost to hire someone to build and connect everything.
const setupCost = 500

// The TORCH price comes from the shared pricing file (most popular plan).
const torchPrice = referencePlan.monthly ?? 0

const toolsTotal = tools.reduce((sum, t) => sum + t.price, 0)
const savings = toolsTotal - torchPrice


export function ComparisonSection() {
  return (
    <section aria-labelledby="compare-title" className="overflow-hidden bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground">Without TORCH vs with TORCH</p>
          <h2
            id="compare-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            One plan instead of {tools.length} apps.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Most businesses pay for separate apps that don&apos;t talk to each
            other, then pay someone to set them up. TORCH replaces all of it, setup included.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-12">
          {/* Without: a long paper receipt */}
          <div className="lg:-rotate-1">
            <div className="bg-paper px-6 pt-8 pb-12 font-mono text-paper-foreground shadow-xl shadow-black/10 [mask:conic-gradient(from_-45deg_at_bottom,#0000,#000_1deg_89deg,#0000_90deg)_50%/20px_100%] sm:px-8">
              <div className="text-center">
                <p className="text-sm font-semibold tracking-[0.2em] uppercase">Without TORCH</p>
                <p className="mt-1 text-xs text-paper-foreground/60">
                  {tools.length} apps · {tools.length} bills · {tools.length} logins
                </p>
              </div>

              <div className="my-6 border-t border-dashed border-paper-foreground/30" />

              <ul className="space-y-3 text-sm">
                {tools.map((tool) => (
                  <li key={tool.name} className="flex items-baseline gap-3">
                    <span className="min-w-0">
                      {tool.name}
                      <span className="block text-[11px] text-paper-foreground/50">{tool.example}</span>
                    </span>
                    <span aria-hidden="true" className="flex-1 translate-y-[-4px] border-b border-dotted border-paper-foreground/30" />
                    <span className="tabular-nums">{euro(tool.price)}</span>
                  </li>
                ))}
              </ul>

              <div className="my-6 border-t border-dashed border-paper-foreground/30" />

              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold uppercase">Total / month</span>
                <span className="text-3xl font-semibold tabular-nums">{euro(toolsTotal)}</span>
              </div>
              <div className="mt-3 flex items-baseline justify-between text-sm">
                <span>
                  + Setup by a freelancer
                  <span className="block text-[11px] text-paper-foreground/50">one-time</span>
                </span>
                <span className="font-semibold tabular-nums">from {euro(setupCost)}</span>
              </div>
              <p className="mt-6 text-center text-[11px] text-paper-foreground/50">
                Typical entry prices of popular tools, October 2026
              </p>
            </div>
          </div>

          {/* With: one plan */}
          <div className="warm relative rounded-3xl bg-background p-6 text-foreground shadow-2xl shadow-black/20 sm:p-10 lg:sticky lg:top-28 lg:mt-10">
            <div
              aria-hidden="true"
              className="absolute -top-5 end-6 rotate-6 rounded-xl border-2 border-brand bg-brand px-4 py-2 text-center text-brand-foreground shadow-lg"
            >
              <p className="text-[11px] font-semibold uppercase">You save</p>
              <p className="text-2xl leading-none font-bold tabular-nums">
                {euro(savings)}
                <span className="text-sm font-semibold">/mo</span>
              </p>
            </div>

            <p className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">With TORCH</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="text-6xl font-light tracking-tight tabular-nums">{euro(torchPrice)}</span>
              <span className="text-lg text-muted-foreground">/month + IVA</span>
            </p>
            <p className="mt-2 inline-block rounded-full border border-dashed border-foreground/20 px-2.5 py-0.5 text-[11px] text-muted-foreground">
              Price to confirm
            </p>

            <p className="mt-6 text-lg">
              Everything on the left, in one app.{" "}
              <span className="text-muted-foreground">Set up for you, no contracts.</span>
            </p>

            <ul className="mt-6 grid gap-x-6 gap-y-2.5 text-sm sm:grid-cols-2">
              {tools.map((tool) => (
                <li key={tool.name} className="flex items-center gap-2">
                  <Check className="size-4 shrink-0 text-brand" aria-hidden="true" />
                  {tool.name}
                </li>
              ))}
              <li className="flex items-center gap-2 font-medium">
                <Check className="size-4 shrink-0 text-brand" aria-hidden="true" />
                Setup by our team: €0
              </li>
            </ul>

            <Button
              size="xl"
              nativeButton={false}
              render={<a href="#pricing" />}
              className="mt-8 w-full sm:w-auto"
            >
              See the plans
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

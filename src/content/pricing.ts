// Single source of truth for TORCH prices (EUR / month) and checkout links.
// Prices are + IVA. They match the GHL plans (Standard→Starter, Professionale→Growth, Premium→Agency).
// Every plan includes every feature; plans differ only by workspaces and service level.
// Yearly = 10× monthly (2 months free).

export type Billing = "monthly" | "yearly"

export type Plan = {
  id: string
  name: string
  tagline: string
  monthly: number | null
  popular?: boolean
  /** What makes this plan different (workspaces and service level). */
  highlights: string[]
  /** GoHighLevel checkout links. Paste them here; null shows the "To confirm" state. */
  checkout: Record<Billing, string | null>
}

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For one business that wants every tool, set up for them.",
    monthly: 97,
    popular: true,
    highlights: ["1 business workspace", "Setup by our team"],
    checkout: {
      monthly: "https://buy.stripe.com/5kQ14p9fZgvugRu4Z36c00s",
      yearly: null, // [PASTE LINK] Starter yearly
    },
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For growing businesses with more than one location.",
    monthly: 197,
    highlights: [
      "Up to 5 locations",
      "Setup by our team",
      "1 hour a week with a dedicated consultant",
    ],
    checkout: {
      monthly: null, // [PASTE LINK] Growth monthly
      yearly: null, // [PASTE LINK] Growth yearly
    },
  },
  {
    id: "agency",
    name: "Agency",
    tagline: "For agencies that sell TORCH under their own brand.",
    monthly: 397,
    highlights: [
      "Unlimited workspaces",
      "Your own brand: logo and domain",
      "We build your full setup",
      "We train your clients",
    ],
    checkout: {
      monthly: null, // [PASTE LINK] Agency monthly
      yearly: null, // [PASTE LINK] Agency yearly
    },
  },
]

/** Everything included in every plan. */
export const includedInEveryPlan = [
  {
    group: "Messages",
    items: ["One inbox for WhatsApp, SMS, email and social", "Missed-call text back", "AI assistant"],
  },
  {
    group: "Bookings",
    items: ["Online booking & reminders", "Pipeline to track every customer", "Review requests"],
  },
  {
    group: "Marketing",
    items: ["Email, SMS & WhatsApp campaigns", "Social media planner", "Website & funnel builder"],
  },
  {
    group: "Your team",
    items: ["Automations built for you", "Unlimited contacts and users", "iOS & Android app", "Support in Italian, English, French and Arabic"],
  },
]

/**
 * Old "Unlimited" plan link (€297) from crm.intelligentb2b.com.
 * Kept for reference only. Do NOT use it for Agency: the price is wrong.
 */
export const oldUnlimited = "https://buy.stripe.com/dRmfZj1Nx4MMgRu3UZ6c00t"

/** Yearly billing: pay for 10 months, get 12. */
export const yearlyFreeMonths = 2

/** Free trial length shown on the buttons. */
export const trialDays = 14

/** True once every plan has both checkout links. Hides the "To confirm" badges. */
export const allCheckoutLinksSet = plans.every((p) => p.checkout.monthly && p.checkout.yearly)

/**
 * The "TORCH price" in the comparison section: the cheapest plan,
 * because every plan includes all the tools listed there.
 */
export const referencePlan = plans.reduce((min, p) =>
  (p.monthly ?? Infinity) < (min.monthly ?? Infinity) ? p : min
)

export const euro = (value: number | null) =>
  value === null ? "€ —" : `€${Math.round(value).toLocaleString("en")}`

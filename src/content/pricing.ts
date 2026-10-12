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
  /** What makes this plan different (3 lines, so the cards stay even). Shared features live in includedInEveryPlan. */
  highlights: string[]
  /** GoHighLevel checkout links. Paste them here; null shows the "To confirm" state. */
  checkout: Record<Billing, string | null>
}

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Every tool to win more customers, set up for you.",
    monthly: 97,
    popular: true,
    highlights: [
      "Up to 3 businesses or locations",
      "Full setup by our team",
      "Chat support from our team",
    ],
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
      "Up to 5 businesses or locations",
      "Full setup by our team",
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
      "Unlimited businesses and locations",
      "Your own brand: logo and domain",
      "We build and train your clients",
    ],
    checkout: {
      monthly: null, // [PASTE LINK] Agency monthly
      yearly: null, // [PASTE LINK] Agency yearly
    },
  },
]

/** Everything included in every plan, shown once under the plan cards. */
export const includedInEveryPlan = [
  {
    group: "Win more leads",
    items: ["All the tools to capture more leads", "Missed-call text back", "AI assistant that replies for you"],
  },
  {
    group: "Turn them into customers",
    items: ["Nurture leads into customers", "One inbox for WhatsApp, SMS, email and social", "Review requests"],
  },
  {
    group: "Bookings and marketing",
    items: ["Online booking and reminders", "Pipeline and social calendar", "Email, SMS and WhatsApp campaigns"],
  },
  {
    group: "Your business",
    items: ["Full website builder", "Unlimited contacts and users", "iOS and Android mobile app", "Support in Italian, English, French and Arabic"],
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

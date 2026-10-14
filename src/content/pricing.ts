// Single source of truth for TORCH prices (EUR / month) and checkout links.
// Prices are + IVA. They match the GHL plans (Standard→Starter, Professionale→Growth, Premium→Agency).
// Every plan includes every feature; plans differ only by workspaces and service level.
// Yearly = 10× monthly (2 months free).

export type Billing = "monthly" | "yearly"

export type PlanId = "starter" | "growth" | "agency"

// Plan taglines, highlights and the "included in every plan" list are text, so they live in
// src/i18n/dictionaries/pricing.ts, keyed by plan id. Plan names stay here: they are brand names, the same in every language.
export type Plan = {
  id: PlanId
  name: string
  monthly: number | null
  popular?: boolean
  /** GoHighLevel checkout links. Paste them here; while null, the button opens the booking calendar. */
  checkout: Record<Billing, string | null>
}

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    monthly: 97,
    popular: true,
    checkout: {
      monthly: "https://buy.stripe.com/5kQ14p9fZgvugRu4Z36c00s",
      yearly: null, // [PASTE LINK] Starter yearly
    },
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 197,
    checkout: {
      monthly: null, // [PASTE LINK] Growth monthly
      yearly: null, // [PASTE LINK] Growth yearly
    },
  },
  {
    id: "agency",
    name: "Agency",
    monthly: 297,
    checkout: {
      monthly: null, // [PASTE LINK] Agency monthly
      yearly: null, // [PASTE LINK] Agency yearly
    },
  },
]

/**
 * Old "Unlimited" plan link (€297) from crm.intelligentb2b.com.
 * Kept for reference only. Agency is now €297 too, but this link sells the old Unlimited plan:
 * only use it for Agency once someone confirms it's the right Stripe product.
 * (Today the Agency button books a partner call instead.)
 */
export const oldUnlimited = "https://buy.stripe.com/dRmfZj1Nx4MMgRu3UZ6c00t"

/** Yearly billing: pay for 10 months, get 12. */
export const yearlyFreeMonths = 2

/** Free trial length shown on the buttons. */
export const trialDays = 14

/**
 * The "TORCH price" in the comparison section: the cheapest plan,
 * because every plan includes all the tools listed there.
 */
export const referencePlan = plans.reduce((min, p) =>
  (p.monthly ?? Infinity) < (min.monthly ?? Infinity) ? p : min
)

export const euro = (value: number | null) =>
  value === null ? "€ —" : `€${Math.round(value).toLocaleString("en")}`

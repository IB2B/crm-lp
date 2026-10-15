// Single source of truth for TORCH prices (EUR) and checkout links. Change them here only.
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
  /** € per month, billed monthly. */
  monthly: number | null
  /** € per year, billed yearly. The card shows it divided by 12, with the yearly total underneath. */
  yearly: number | null
  popular?: boolean
  /** Stripe checkout links, opened in the same tab. While null, the button opens the booking page instead. */
  checkout: Record<Billing, string | null>
}

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    monthly: 97,
    yearly: 970,
    popular: true,
    checkout: {
      monthly: "https://buy.stripe.com/cNi4gBak3gvugRubnr6c00z",
      yearly: "https://buy.stripe.com/3cIeVfdwf4MMbxaajn6c00A",
    },
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 197,
    yearly: 1970,
    checkout: {
      monthly: "https://buy.stripe.com/cNi7sN3VF0ww7gU3UZ6c00B",
      yearly: "https://buy.stripe.com/4gM5kF9fZ4MM0Sw9fj6c00C",
    },
  },
  {
    id: "agency",
    name: "Agency",
    monthly: 297,
    yearly: 2970,
    // Agency is sold on a call: its button always books a partner call (/book?plan=agency).
    checkout: {
      monthly: null,
      yearly: null,
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

/** Yearly billing: pay for 10 months, get 12. Shown as the badge on the Yearly toggle. */
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

import type { Locale } from "@/i18n/config"
import { agencies } from "@/i18n/dictionaries/agencies"
import { apps } from "@/i18n/dictionaries/apps"
import { chrome } from "@/i18n/dictionaries/chrome"
import { common } from "@/i18n/dictionaries/common"
import { comparison } from "@/i18n/dictionaries/comparison"
import { faq } from "@/i18n/dictionaries/faq"
import { finalCta } from "@/i18n/dictionaries/finalCta"
import { guarantee } from "@/i18n/dictionaries/guarantee"
import { hero } from "@/i18n/dictionaries/hero"
import { howItWorks } from "@/i18n/dictionaries/howItWorks"
import { industries } from "@/i18n/dictionaries/industries"
import { insideTorch } from "@/i18n/dictionaries/insideTorch"
import { pricing } from "@/i18n/dictionaries/pricing"
import { problem } from "@/i18n/dictionaries/problem"
import { testimonials } from "@/i18n/dictionaries/testimonials"

// All landing page text for one language. Each section file holds all four languages;
// only the requested one is passed to components, so the browser never loads the others.
// Server-side only: call it from pages and layouts, then pass each section its slice as `t`.
export function getDictionary(locale: Locale) {
  return {
    common: common[locale],
    chrome: chrome[locale],
    hero: hero[locale],
    insideTorch: insideTorch[locale],
    problem: problem[locale],
    apps: apps[locale],
    howItWorks: howItWorks[locale],
    industries: industries[locale],
    comparison: comparison[locale],
    agencies: agencies[locale],
    testimonials: testimonials[locale],
    pricing: pricing[locale],
    guarantee: guarantee[locale],
    faq: faq[locale],
    finalCta: finalCta[locale],
  }
}

export type Dictionary = ReturnType<typeof getDictionary>

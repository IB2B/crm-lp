import type { Locale } from "@/i18n/config"

// "What our clients say": only the section's own labels. The quotes in src/content/testimonials.ts
// are real client words and are shown as written, never translated.
const en = {
  eyebrow: "Testimonials",
  title: "What our clients say.",
  moreQuotes: "More client quotes",
}

export type TestimonialsDict = typeof en

const it: TestimonialsDict = {
  eyebrow: "Testimonianze",
  title: "Cosa dicono i nostri clienti.",
  moreQuotes: "Altre parole dei nostri clienti",
}

const fr: TestimonialsDict = {
  eyebrow: "Témoignages",
  title: "Ce que disent nos clients.",
  moreQuotes: "Plus d'avis de nos clients",
}

const ar: TestimonialsDict = {
  eyebrow: "آراء العملاء",
  title: "ماذا يقول عملاؤنا.",
  moreQuotes: "المزيد من آراء عملائنا",
}

export const testimonials: Record<Locale, TestimonialsDict> = { en, it, fr, ar }

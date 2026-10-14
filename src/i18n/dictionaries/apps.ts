import type { Locale } from "@/i18n/config"

// "Works with the apps you already use". App names stay in the component and are never translated.
const en = {
  title: "Works with the apps you already use",
  intro: "Connect WhatsApp, Instagram, Google, Stripe and more.",
  introStrong: "We set it all up for you.",
}

export type AppsDict = typeof en

const it: AppsDict = {
  title: "Funziona con le app che usi già",
  intro: "Collega WhatsApp, Instagram, Google, Stripe e molto altro.",
  introStrong: "Configuriamo tutto noi per te.",
}

const fr: AppsDict = {
  title: "Fonctionne avec les applis que vous utilisez déjà",
  intro: "Connectez WhatsApp, Instagram, Google, Stripe et bien d'autres.",
  introStrong: "Nous configurons tout pour vous.",
}

const ar: AppsDict = {
  title: "يعمل مع التطبيقات التي تستخدمها بالفعل",
  intro: "اربط واتساب وإنستغرام وGoogle وStripe وغيرها.",
  introStrong: "ونحن نجهّز كل شيء لك.",
}

export const apps: Record<Locale, AppsDict> = { en, it, fr, ar }

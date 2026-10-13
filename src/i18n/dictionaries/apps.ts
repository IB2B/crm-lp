import type { Locale } from "@/i18n/config"

// "Works with the apps you already use". App names stay in the component and are never translated.
const en = {
  title: "Works with the apps you already use",
}

export type AppsDict = typeof en

const it: AppsDict = {
  title: "Funziona con le app che usi già",
}

const fr: AppsDict = {
  title: "Fonctionne avec les applis que vous utilisez déjà",
}

const ar: AppsDict = {
  title: "يعمل مع التطبيقات التي تستخدمها بالفعل",
}

export const apps: Record<Locale, AppsDict> = { en, it, fr, ar }

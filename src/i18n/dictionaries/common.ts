import type { Locale } from "@/i18n/config"

// Page title and description for search engines and link previews.
const en = {
  meta: {
    title: "TORCH | WhatsApp CRM for Small Businesses, Set Up for You",
    description:
      "Never miss a customer again. TORCH texts back missed calls, answers WhatsApp and books appointments while you work, and our team sets everything up for you.",
  },
}

export type CommonDict = typeof en

const it: CommonDict = {
  meta: {
    title: "TORCH | CRM con WhatsApp per PMI, configurato per te",
    description:
      "Non perdere più clienti. TORCH risponde a chiamate perse e WhatsApp e fissa appuntamenti mentre lavori. Configuriamo tutto noi.",
  },
}

const fr: CommonDict = {
  meta: {
    title: "TORCH | CRM WhatsApp pour PME, configuré pour vous",
    description:
      "Ne perdez plus aucun client. TORCH répond aux appels manqués et à WhatsApp, et prend vos rendez-vous. Nous configurons tout pour vous.",
  },
}

const ar: CommonDict = {
  meta: {
    title: "TORCH | نظام CRM مع واتساب للشركات الصغيرة",
    description:
      "لا تخسر أي عميل بعد اليوم. يرد TORCH برسالة نصية على المكالمات الفائتة، ويجيب على واتساب، ويحجز المواعيد بينما تعمل. وفريقنا يجهّز لك كل شيء.",
  },
}

export const common: Record<Locale, CommonDict> = { en, it, fr, ar }

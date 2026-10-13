import type { Locale } from "@/i18n/config"

// Page title and description for search engines and link previews.
const en = {
  meta: {
    title: "TORCH by Intelligent B2B | Never miss a customer again",
    description:
      "Never miss a customer again. TORCH texts back missed calls, answers WhatsApp and books appointments while you work, and our team sets everything up for you.",
  },
}

export type CommonDict = typeof en

const it: CommonDict = {
  meta: {
    title: "TORCH by Intelligent B2B | Non perdere mai più un cliente",
    description:
      "Non perdere mai più un cliente. TORCH risponde con un SMS alle chiamate perse, risponde su WhatsApp e fissa gli appuntamenti mentre lavori. Il nostro team configura tutto per te.",
  },
}

const fr: CommonDict = {
  meta: {
    title: "TORCH by Intelligent B2B | Ne perdez plus jamais un client",
    description:
      "Ne perdez plus jamais un client. TORCH répond par SMS aux appels manqués, répond sur WhatsApp et prend les rendez-vous pendant que vous travaillez. Notre équipe s'occupe de toute la mise en place.",
  },
}

const ar: CommonDict = {
  meta: {
    title: "TORCH من Intelligent B2B | لا تخسر أي عميل بعد اليوم",
    description:
      "لا تخسر أي عميل بعد اليوم. يرد TORCH برسالة نصية على المكالمات الفائتة، ويجيب على واتساب، ويحجز المواعيد بينما تعمل. وفريقنا يجهّز لك كل شيء.",
  },
}

export const common: Record<Locale, CommonDict> = { en, it, fr, ar }

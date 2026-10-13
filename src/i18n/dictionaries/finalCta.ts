import type { Locale } from "@/i18n/config"

// Closing call to action. {n} is the free trial length (trialDays in src/content/pricing.ts).
const en = {
  // "Your next customer is about to call." The last word rings.
  titleLead: "Your next customer is about to",
  titleRing: "call.",
  trialEyebrow: "Try it yourself",
  trialBody: "{n} days free. We set everything up, you just use it. No contract.",
  trialCta: "Start my free trial",
  talkEyebrow: "Rather talk to a person?",
  // "We speak English, Italiano, Français and العربية."
  speakLead: "We speak",
  languages: ["English", "Italiano", "Français", "العربية"],
  listSeparator: ", ",
  listAnd: " and ",
  listEnd: ".",
  bookCall: "Book a free setup call",
  whatsapp: "Message us on WhatsApp",
  // Followed by the phone number / email address.
  callPrefix: "Call",
  emailPrefix: "Email",
}

export type FinalCtaDict = typeof en

const it: FinalCtaDict = {
  titleLead: "Il tuo prossimo cliente sta per",
  titleRing: "chiamare.",
  trialEyebrow: "Provalo tu stesso",
  trialBody: "{n} giorni gratis. Configuriamo tutto noi, tu devi solo usarlo. Nessun contratto.",
  trialCta: "Inizia la prova gratuita",
  talkEyebrow: "Preferisci parlare con una persona?",
  speakLead: "Parliamo",
  languages: ["English", "Italiano", "Français", "العربية"],
  listSeparator: ", ",
  listAnd: " e ",
  listEnd: ".",
  bookCall: "Prenota una chiamata gratuita",
  whatsapp: "Scrivici su WhatsApp",
  callPrefix: "Chiama il",
  emailPrefix: "Scrivi a",
}

const fr: FinalCtaDict = {
  titleLead: "Votre prochain client va bientôt",
  titleRing: "appeler.",
  trialEyebrow: "Essayez par vous-même",
  trialBody: "{n} jours gratuits. Nous installons tout, vous n'avez qu'à l'utiliser. Sans engagement.",
  trialCta: "Commencer mon essai gratuit",
  talkEyebrow: "Vous préférez parler à quelqu'un ?",
  speakLead: "Nous parlons",
  languages: ["English", "Italiano", "Français", "العربية"],
  listSeparator: ", ",
  listAnd: " et ",
  listEnd: ".",
  bookCall: "Réserver un appel de mise en place gratuit",
  whatsapp: "Écrivez-nous sur WhatsApp",
  callPrefix: "Appelez le",
  emailPrefix: "Écrivez à",
}

const ar: FinalCtaDict = {
  titleLead: "عميلك القادم على وشك",
  titleRing: "الاتصال.",
  trialEyebrow: "جرّبه بنفسك",
  trialBody: "{n} يومًا مجانًا. نحن نجهّز كل شيء، وأنت تستخدمه فقط. بلا عقد.",
  trialCta: "ابدأ تجربتي المجانية",
  talkEyebrow: "تفضّل التحدث مع شخص؟",
  speakLead: "نتحدث",
  languages: ["الإنجليزية", "الإيطالية", "الفرنسية", "العربية"],
  listSeparator: "، ",
  listAnd: " و",
  listEnd: ".",
  bookCall: "احجز مكالمة إعداد مجانية",
  whatsapp: "راسلنا على واتساب",
  callPrefix: "اتصل على",
  emailPrefix: "راسلنا على",
}

export const finalCta: Record<Locale, FinalCtaDict> = { en, it, fr, ar }

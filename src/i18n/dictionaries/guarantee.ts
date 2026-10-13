import type { Locale } from "@/i18n/config"

// Free-trial promise under the pricing. {n} is the trial length (trialDays in src/content/pricing.ts).
// No refund promise here: the Terms say payments are not refunded, so the trial is the way to decide.
const en = {
  eyebrow: "Try it first",
  title: "Try it for {n} days. Then decide.",
  text: "Use TORCH with your real customers for {n} days before you pay anything. There's no contract, so if it's not right for you, you simply don't continue.",
  points: ["{n}-day free trial", "No contracts", "Cancel anytime"],
  seal: "FREE TRIAL · {n} DAYS · ",
  days: "days",
  cta: "Start my free trial",
}

export type GuaranteeDict = typeof en

const it: GuaranteeDict = {
  eyebrow: "Prima provalo",
  title: "Provalo per {n} giorni. Poi decidi.",
  text: "Usa TORCH con i tuoi clienti veri per {n} giorni prima di pagare qualsiasi cosa. Non c'è nessun contratto: se non fa per te, semplicemente non continui.",
  points: ["{n} giorni di prova gratuita", "Nessun contratto", "Disdici quando vuoi"],
  seal: "PROVA GRATUITA · {n} GIORNI · ",
  days: "giorni",
  cta: "Inizia la prova gratuita",
}

const fr: GuaranteeDict = {
  eyebrow: "Essayez d'abord",
  title: "Essayez-le {n} jours. Ensuite, décidez.",
  text: "Utilisez TORCH avec vos vrais clients pendant {n} jours avant de payer quoi que ce soit. Sans engagement : si ce n'est pas pour vous, vous ne continuez pas, tout simplement.",
  points: ["{n} jours d'essai gratuit", "Sans engagement", "Résiliable à tout moment"],
  seal: "ESSAI GRATUIT · {n} JOURS · ",
  days: "jours",
  cta: "Commencer mon essai gratuit",
}

const ar: GuaranteeDict = {
  eyebrow: "جرّبه أولًا",
  title: "جرّبه لمدة {n} يومًا، ثم قرّر.",
  text: "استخدم TORCH مع عملائك الحقيقيين لمدة {n} يومًا قبل أن تدفع أي شيء. لا يوجد عقد، فإذا لم يناسبك، ببساطة لا تكمل.",
  points: ["تجربة مجانية لمدة {n} يومًا", "بلا عقود", "إلغاء في أي وقت"],
  seal: "FREE TRIAL · {n} DAYS · ",
  days: "يومًا",
  cta: "ابدأ تجربتي المجانية",
}

export const guarantee: Record<Locale, GuaranteeDict> = { en, it, fr, ar }

// TODO(ib2b): translations need review by a native speaker and the lawyer, like the English.
import type { Locale } from "@/i18n/config"

/** Shared words on every legal page (Terms, Privacy Policy, Cookie Policy, DPA). */
export type LegalUi = {
  backHome: string
  lastUpdated: string
  /** Date of the latest legal texts. Update it in every language whenever a legal text changes. */
  updatedDate: string
  draft: string
  questions: string
  writeTo: string
  vat: string
  tradeRegister: string
  navLabel: string
  /** "by Intelligent B2B" next to the logo. */
  by: string
  nav: { terms: string; privacy: string; cookies: string; dpa: string }
}

export const legalUi: Record<Locale, LegalUi> = {
  en: {
    backHome: "Back to home",
    lastUpdated: "Last updated:",
    updatedDate: "12 October 2026",
    draft: "Draft – to be reviewed by a lawyer",
    questions: "Questions?",
    writeTo: "Write to us at",
    vat: "VAT",
    tradeRegister: "Trade Register",
    navLabel: "Legal",
    by: "by",
    nav: { terms: "Terms", privacy: "Privacy Policy", cookies: "Cookie Policy", dpa: "DPA" },
  },
  it: {
    backHome: "Torna alla home",
    lastUpdated: "Ultimo aggiornamento:",
    updatedDate: "12 ottobre 2026",
    draft: "Bozza – da far verificare a un avvocato",
    questions: "Domande?",
    writeTo: "Scriveteci a",
    vat: "Partita IVA",
    tradeRegister: "Registro delle imprese",
    navLabel: "Note legali",
    by: "di",
    nav: { terms: "Termini", privacy: "Informativa sulla privacy", cookies: "Cookie Policy", dpa: "DPA" },
  },
  fr: {
    backHome: "Retour à l’accueil",
    lastUpdated: "Dernière mise à jour :",
    updatedDate: "12 octobre 2026",
    draft: "Brouillon – à faire relire par un avocat",
    questions: "Des questions ?",
    writeTo: "Écrivez-nous à",
    vat: "TVA",
    tradeRegister: "Registre du commerce",
    navLabel: "Mentions légales",
    by: "par",
    nav: {
      terms: "Conditions",
      privacy: "Politique de confidentialité",
      cookies: "Politique cookies",
      dpa: "DPA",
    },
  },
  ar: {
    backHome: "العودة إلى الرئيسية",
    lastUpdated: "آخر تحديث:",
    updatedDate: "12 أكتوبر 2026",
    draft: "مسودة – تحتاج إلى مراجعة محامٍ",
    questions: "لديك أسئلة؟",
    writeTo: "راسلنا على",
    vat: "رقم ضريبة القيمة المضافة",
    tradeRegister: "السجل التجاري",
    navLabel: "الصفحات القانونية",
    by: "من",
    nav: {
      terms: "الشروط",
      privacy: "سياسة الخصوصية",
      cookies: "سياسة ملفات تعريف الارتباط",
      dpa: "اتفاقية معالجة البيانات",
    },
  },
}

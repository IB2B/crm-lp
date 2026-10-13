import type { Locale } from "@/i18n/config"

// "For agencies": white-label pitch and the earnings calculator.
// The title reads "Sell [TORCH, struck through] your own CRM", so it is split around the brand.
const en = {
  eyebrow: "For agencies",
  titleBefore: "Sell",
  titleAfter: "your own CRM.",
  intro:
    "Give your clients a complete CRM with your logo and your prices. You keep the clients and the monthly revenue. We do the setup and support behind the scenes.",
  perks: ["Your logo", "Your domain", "Your prices", "Your clients"],
  cta: "Become a partner",
  emailSubject: "Become a TORCH partner",
  steps: ["Book a call", "We brand it", "You sell, we support"],
  calculator: {
    title: "Your earnings",
    clients: "How many clients?",
    price: "What you charge each client / month",
    youBill: "You bill your clients",
    perMonth: "/month",
    perYear: "{amount} a year",
    partnerPrice: "Your partner price per client is shared on the call",
    toConfirm: "to confirm",
  },
}

export type AgenciesDict = typeof en

const it: AgenciesDict = {
  eyebrow: "Per le agenzie",
  titleBefore: "Vendi",
  titleAfter: "il tuo CRM.",
  intro:
    "Offri ai tuoi clienti un CRM completo con il tuo logo e i tuoi prezzi. I clienti e gli incassi mensili restano tuoi. Noi pensiamo a configurazione e assistenza dietro le quinte.",
  perks: ["Il tuo logo", "Il tuo dominio", "I tuoi prezzi", "I tuoi clienti"],
  cta: "Diventa partner",
  emailSubject: "Voglio diventare partner TORCH",
  steps: ["Prenota una chiamata", "Lo personalizziamo con il tuo marchio", "Tu vendi, noi ti supportiamo"],
  calculator: {
    title: "I tuoi guadagni",
    clients: "Quanti clienti?",
    price: "Quanto fai pagare a ogni cliente / mese",
    youBill: "Fatturi ai tuoi clienti",
    perMonth: "/mese",
    perYear: "{amount} all'anno",
    partnerPrice: "Il tuo prezzo partner per cliente te lo comunichiamo in chiamata",
    toConfirm: "da confermare",
  },
}

const fr: AgenciesDict = {
  eyebrow: "Pour les agences",
  titleBefore: "Vendez",
  titleAfter: "votre propre CRM.",
  intro:
    "Offrez à vos clients un CRM complet avec votre logo et vos prix. Les clients et les revenus mensuels restent à vous. Nous gérons l'installation et le support en coulisses.",
  perks: ["Votre logo", "Votre domaine", "Vos prix", "Vos clients"],
  cta: "Devenir partenaire",
  emailSubject: "Devenir partenaire TORCH",
  steps: ["Réservez un appel", "Nous l'habillons à votre marque", "Vous vendez, nous vous accompagnons"],
  calculator: {
    title: "Vos revenus",
    clients: "Combien de clients ?",
    price: "Ce que vous facturez à chaque client / mois",
    youBill: "Vous facturez à vos clients",
    perMonth: "/mois",
    perYear: "{amount} par an",
    partnerPrice: "Votre prix partenaire par client vous est communiqué lors de l'appel",
    toConfirm: "à confirmer",
  },
}

const ar: AgenciesDict = {
  eyebrow: "للوكالات",
  titleBefore: "بِع",
  titleAfter: "نظام CRM باسمك.",
  intro:
    "قدّم لعملائك نظام CRM متكاملًا بشعارك وأسعارك. يبقى العملاء والدخل الشهري لك، ونحن نتولى التجهيز والدعم من خلف الكواليس.",
  perks: ["شعارك", "نطاقك", "أسعارك", "عملاؤك"],
  cta: "كن شريكًا",
  emailSubject: "أريد أن أصبح شريكًا في TORCH",
  steps: ["احجز مكالمة", "نضع علامتك التجارية عليه", "أنت تبيع ونحن ندعمك"],
  calculator: {
    title: "أرباحك",
    clients: "كم عدد العملاء؟",
    price: "ما تتقاضاه من كل عميل / شهريًا",
    youBill: "ما تحصّله من عملائك",
    perMonth: "/شهريًا",
    perYear: "{amount} سنويًا",
    partnerPrice: "نشاركك سعر الشريك لكل عميل خلال المكالمة",
    toConfirm: "قيد التأكيد",
  },
}

export const agencies: Record<Locale, AgenciesDict> = { en, it, fr, ar }

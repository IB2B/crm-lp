import type { Locale } from "@/i18n/config"

// Pricing section. Numbers, checkout links and plan names live in src/content/pricing.ts;
// the text for each plan is keyed by the same plan id (starter / growth / agency).
const en = {
  eyebrow: "Pricing",
  title: "Simple plans. Setup included.",
  intro: "No contracts. Cancel anytime. Every plan is set up for you by our team.",
  billingLabel: "Billing period",
  monthly: "Monthly",
  yearly: "Yearly",
  monthsFree: "{n} months free",
  mostPopular: "Most popular",
  perMonth: "/month + IVA",
  billedYearlyTotal: "{price} + IVA billed yearly",
  billedMonthly: "Billed monthly",
  billedYearly: "Billed yearly",
  toConfirm: "To confirm",
  startTrial: "Start my {n}-day free trial",
  planIncludes: "This plan includes",
  plans: {
    starter: {
      tagline: "Every tool to win more customers, set up for you.",
      highlights: ["Up to 3 businesses or locations", "Full setup by our team", "Chat support from our team"],
    },
    growth: {
      tagline: "For growing businesses with more than one location.",
      highlights: [
        "Up to 5 businesses or locations",
        "Full setup by our team",
        "1 hour a week with a dedicated consultant",
      ],
    },
    agency: {
      tagline: "For agencies that sell TORCH under their own brand.",
      highlights: [
        "Unlimited businesses and locations",
        "Your own brand: logo and domain",
        "We build and train your clients",
      ],
    },
  },
  // "Every plan comes / with everything." Two lines, then the underlined word, then the ending.
  includedTitleLines: ["Every plan comes", "with"],
  includedTitleEmphasis: "everything",
  includedTitleEnd: ".",
  includedIntro:
    "All the tools are in every plan. Plans only differ by locations and how much our team does for you.",
  includedGroups: [
    {
      group: "Win more leads",
      items: ["All the tools to capture more leads", "Missed-call text back", "AI assistant that replies for you"],
    },
    {
      group: "Turn them into customers",
      items: ["Nurture leads into customers", "One inbox for WhatsApp, SMS, email and social", "Review requests"],
    },
    {
      group: "Bookings and marketing",
      items: ["Online booking and reminders", "Pipeline and social calendar", "Email, SMS and WhatsApp campaigns"],
    },
    {
      group: "Your business",
      items: [
        "Full website builder",
        "Unlimited contacts and users",
        "iOS and Android mobile app",
        "Support in Italian, English, French and Arabic",
      ],
    },
  ],
  screenAlts: {
    inbox: "TORCH inbox with WhatsApp, SMS and email conversations",
    calendar: "TORCH booking calendar",
    reviews: "TORCH review requests",
  },
  placeholderNote: "Prices and plan contents are placeholders until confirmed.",
  usageNote: "SMS, call and AI usage may be billed separately.",
}

export type PricingDict = typeof en

const it: PricingDict = {
  eyebrow: "Prezzi",
  title: "Piani semplici. Configurazione inclusa.",
  intro: "Nessun contratto. Disdici quando vuoi. Ogni piano lo configura per te il nostro team.",
  billingLabel: "Periodo di fatturazione",
  monthly: "Mensile",
  yearly: "Annuale",
  monthsFree: "{n} mesi gratis",
  mostPopular: "Il più scelto",
  perMonth: "/mese + IVA",
  billedYearlyTotal: "{price} + IVA fatturati ogni anno",
  billedMonthly: "Fatturato ogni mese",
  billedYearly: "Fatturato ogni anno",
  toConfirm: "Da confermare",
  startTrial: "Inizia la prova gratuita di {n} giorni",
  planIncludes: "Questo piano include",
  plans: {
    starter: {
      tagline: "Tutti gli strumenti per avere più clienti, configurati per te.",
      highlights: ["Fino a 3 attività o sedi", "Configurazione completa dal nostro team", "Supporto in chat dal nostro team"],
    },
    growth: {
      tagline: "Per attività in crescita con più di una sede.",
      highlights: [
        "Fino a 5 attività o sedi",
        "Configurazione completa dal nostro team",
        "1 ora a settimana con un consulente dedicato",
      ],
    },
    agency: {
      tagline: "Per le agenzie che vendono TORCH con il proprio marchio.",
      highlights: [
        "Attività e sedi illimitate",
        "Il tuo marchio: logo e dominio",
        "Configuriamo e formiamo i tuoi clienti",
      ],
    },
  },
  includedTitleLines: ["Ogni piano", "include"],
  includedTitleEmphasis: "tutto",
  includedTitleEnd: ".",
  includedIntro:
    "Tutti gli strumenti sono in ogni piano. I piani cambiano solo per numero di sedi e per quanto fa il nostro team per te.",
  includedGroups: [
    {
      group: "Più contatti",
      items: [
        "Tutti gli strumenti per raccogliere più contatti",
        "SMS automatico dopo una chiamata persa",
        "Assistente AI che risponde per te",
      ],
    },
    {
      group: "Trasformali in clienti",
      items: [
        "Segui i contatti fino a farli diventare clienti",
        "Un'unica casella per WhatsApp, SMS, email e social",
        "Richieste di recensioni",
      ],
    },
    {
      group: "Prenotazioni e marketing",
      items: [
        "Prenotazioni online e promemoria",
        "Pipeline e calendario social",
        "Campagne via email, SMS e WhatsApp",
      ],
    },
    {
      group: "La tua attività",
      items: [
        "Creazione completa del sito web",
        "Contatti e utenti illimitati",
        "App per iOS e Android",
        "Assistenza in italiano, inglese, francese e arabo",
      ],
    },
  ],
  screenAlts: {
    inbox: "Casella di TORCH con conversazioni WhatsApp, SMS ed email",
    calendar: "Calendario delle prenotazioni di TORCH",
    reviews: "Richieste di recensioni in TORCH",
  },
  placeholderNote: "Prezzi e contenuti dei piani sono provvisori fino alla conferma.",
  usageNote: "L'uso di SMS, chiamate e AI può essere fatturato a parte.",
}

const fr: PricingDict = {
  eyebrow: "Tarifs",
  title: "Des formules simples. Mise en place incluse.",
  intro: "Sans engagement. Résiliable à tout moment. Notre équipe installe chaque formule pour vous.",
  billingLabel: "Période de facturation",
  monthly: "Mensuel",
  yearly: "Annuel",
  monthsFree: "{n} mois offerts",
  mostPopular: "Le plus choisi",
  perMonth: "/mois + TVA",
  billedYearlyTotal: "{price} + TVA facturés à l'année",
  billedMonthly: "Facturé chaque mois",
  billedYearly: "Facturé chaque année",
  toConfirm: "À confirmer",
  startTrial: "Commencer mon essai gratuit de {n} jours",
  planIncludes: "Cette formule comprend",
  plans: {
    starter: {
      tagline: "Tous les outils pour gagner plus de clients, installés pour vous.",
      highlights: [
        "Jusqu'à 3 entreprises ou établissements",
        "Mise en place complète par notre équipe",
        "Support par chat de notre équipe",
      ],
    },
    growth: {
      tagline: "Pour les entreprises en croissance avec plusieurs établissements.",
      highlights: [
        "Jusqu'à 5 entreprises ou établissements",
        "Mise en place complète par notre équipe",
        "1 heure par semaine avec un conseiller dédié",
      ],
    },
    agency: {
      tagline: "Pour les agences qui vendent TORCH sous leur propre marque.",
      highlights: [
        "Entreprises et établissements illimités",
        "Votre propre marque : logo et domaine",
        "Nous installons et formons vos clients",
      ],
    },
  },
  includedTitleLines: ["Chaque formule", "comprend"],
  includedTitleEmphasis: "tout",
  includedTitleEnd: ".",
  includedIntro:
    "Tous les outils sont dans chaque formule. Elles ne diffèrent que par le nombre d'établissements et ce que notre équipe fait pour vous.",
  includedGroups: [
    {
      group: "Plus de prospects",
      items: [
        "Tous les outils pour attirer plus de prospects",
        "SMS automatique après un appel manqué",
        "Assistant IA qui répond pour vous",
      ],
    },
    {
      group: "Transformez-les en clients",
      items: [
        "Accompagnez vos prospects jusqu'à l'achat",
        "Une seule boîte pour WhatsApp, SMS, e-mail et réseaux sociaux",
        "Demandes d'avis",
      ],
    },
    {
      group: "Réservations et marketing",
      items: [
        "Réservation en ligne et rappels",
        "Pipeline et calendrier des réseaux sociaux",
        "Campagnes par e-mail, SMS et WhatsApp",
      ],
    },
    {
      group: "Votre entreprise",
      items: [
        "Création de site web complète",
        "Contacts et utilisateurs illimités",
        "Application mobile iOS et Android",
        "Support en italien, anglais, français et arabe",
      ],
    },
  ],
  screenAlts: {
    inbox: "Boîte de réception TORCH avec des conversations WhatsApp, SMS et e-mail",
    calendar: "Calendrier de réservation TORCH",
    reviews: "Demandes d'avis dans TORCH",
  },
  placeholderNote: "Les prix et le contenu des formules sont provisoires jusqu'à confirmation.",
  usageNote: "L'utilisation des SMS, des appels et de l'IA peut être facturée en plus.",
}

const ar: PricingDict = {
  eyebrow: "الأسعار",
  title: "خطط بسيطة. والإعداد مشمول.",
  intro: "بلا عقود. يمكنك الإلغاء في أي وقت. فريقنا يجهّز لك كل خطة.",
  billingLabel: "فترة الفوترة",
  monthly: "شهري",
  yearly: "سنوي",
  // Arabic counts two as a dual ("شهران"), so no {n} here. Update it if yearlyFreeMonths changes.
  monthsFree: "شهران مجانًا",
  mostPopular: "الأكثر اختيارًا",
  perMonth: "/شهريًا + ضريبة القيمة المضافة",
  billedYearlyTotal: "{price} + ضريبة القيمة المضافة، تُدفع سنويًا",
  billedMonthly: "الدفع شهريًا",
  billedYearly: "الدفع سنويًا",
  toConfirm: "قيد التأكيد",
  startTrial: "ابدأ تجربتي المجانية لمدة {n} يومًا",
  planIncludes: "تشمل هذه الخطة",
  plans: {
    starter: {
      tagline: "كل الأدوات لكسب عملاء أكثر، ونحن نجهّزها لك.",
      highlights: ["حتى 3 أنشطة تجارية أو فروع", "إعداد كامل من فريقنا", "دعم عبر الدردشة من فريقنا"],
    },
    growth: {
      tagline: "للأنشطة التجارية النامية التي لديها أكثر من فرع.",
      highlights: ["حتى 5 أنشطة تجارية أو فروع", "إعداد كامل من فريقنا", "ساعة أسبوعيًا مع مستشار مخصص"],
    },
    agency: {
      tagline: "للوكالات التي تبيع TORCH باسمها التجاري الخاص.",
      highlights: [
        "أنشطة تجارية وفروع بلا حدود",
        "علامتك التجارية الخاصة: الشعار والنطاق",
        "نحن نجهّز عملاءك وندرّبهم",
      ],
    },
  },
  includedTitleLines: ["كل خطة", "تشمل"],
  includedTitleEmphasis: "كل شيء",
  includedTitleEnd: ".",
  includedIntro: "كل الأدوات موجودة في كل خطة. الفرق فقط في عدد الفروع ومقدار ما يقوم به فريقنا من أجلك.",
  includedGroups: [
    {
      group: "عملاء محتملون أكثر",
      items: [
        "كل الأدوات لجذب عملاء محتملين أكثر",
        "رسالة نصية تلقائية بعد كل مكالمة فائتة",
        "مساعد ذكي يرد بالنيابة عنك",
      ],
    },
    {
      group: "حوّلهم إلى عملاء",
      items: [
        "تابع العملاء المحتملين حتى يصبحوا عملاء",
        "صندوق واحد لواتساب والرسائل النصية والبريد ووسائل التواصل",
        "طلبات التقييم",
      ],
    },
    {
      group: "الحجوزات والتسويق",
      items: ["الحجز عبر الإنترنت والتذكيرات", "مسار المبيعات وتقويم النشر", "حملات عبر البريد والرسائل النصية وواتساب"],
    },
    {
      group: "نشاطك التجاري",
      items: [
        "أداة كاملة لبناء موقعك الإلكتروني",
        "جهات اتصال ومستخدمون بلا حدود",
        "تطبيق جوال لـ iOS وAndroid",
        "دعم بالإيطالية والإنجليزية والفرنسية والعربية",
      ],
    },
  ],
  screenAlts: {
    inbox: "صندوق الوارد في TORCH مع محادثات واتساب والرسائل النصية والبريد",
    calendar: "تقويم الحجوزات في TORCH",
    reviews: "طلبات التقييم في TORCH",
  },
  placeholderNote: "الأسعار ومحتوى الخطط مؤقتة حتى يتم تأكيدها.",
  usageNote: "قد تُحتسب الرسائل النصية والمكالمات واستخدام الذكاء الاصطناعي بشكل منفصل.",
}

export const pricing: Record<Locale, PricingDict> = { en, it, fr, ar }

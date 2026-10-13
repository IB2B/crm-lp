import type { Locale } from "@/i18n/config"

// Header, mobile menu, language switcher, footer, newsletter form and cookie bar.
// Placeholders in {braces} are filled with fmt() from src/i18n/config.ts.
const en = {
  nav: {
    label: "Main",
    features: "Features",
    howItWorks: "How it works",
    pricing: "Pricing",
    faq: "FAQ",
  },
  header: {
    skipToContent: "Skip to content",
    logoHome: "TORCH by Intelligent B2B, home",
    bookCall: "Book a call",
    startTrial: "Start my free trial",
  },
  mobileMenu: {
    open: "Open menu",
    close: "Close menu",
    title: "Menu",
    navLabel: "Mobile",
    bookSetupCall: "Book a free setup call",
    startTrial: "Start my free trial",
  },
  languageSwitcher: {
    label: "Language",
    change: "Change language",
  },
  footer: {
    /** Followed by the four language names, e.g. "…with support in Italiano, English, Français and العربية." */
    tagline:
      "The CRM we set up for you. Calls, WhatsApp, bookings and reviews in one app, with support in",
    socialTitle: "Social media",
    columns: {
      product: {
        title: "Product",
        features: "Features",
        howItWorks: "How it works",
        industries: "Industries",
        pricing: "Pricing",
      },
      company: {
        title: "Company",
        agencies: "For agencies",
        bookCall: "Book a call",
        faq: "FAQ",
      },
      support: {
        title: "Support",
        whatsapp: "WhatsApp",
        callUs: "Call us",
        emailUs: "Email us",
        videoCall: "Video call",
      },
    },
    rights: "© {year} TORCH by {company}. All rights reserved.",
    vat: "VAT",
    tradeRegister: "Trade Register",
    legalLabel: "Legal",
  },
  newsletter: {
    title: "Subscribe to our newsletter",
    intro: "Simple tips to win more customers, once a month.",
    emailLabel: "Your email",
    placeholder: "you@business.com",
    subscribe: "Subscribe",
    sending: "Sending…",
    done: "Thanks, you're in!",
    consentBefore: "I agree to receive the TORCH newsletter. I can unsubscribe anytime. See our",
    privacyLink: "Privacy Policy",
    consentAfter: ".",
    errors: {
      invalid_email: "Please enter a valid email address.",
      no_consent: "Please tick the box to agree to receive the newsletter.",
      unavailable: "The newsletter isn't available right now.",
      failed: "We couldn't sign you up right now. Please try again in a moment.",
      bad_request: "Please enter your email address.",
      network: "Couldn't reach the server. Check your connection and try again.",
    },
  },
  cookieBanner: {
    label: "Cookie choice",
    text: "We use cookies to improve your experience and measure our ads.",
    policyLink: "Cookie policy",
    decline: "No thanks",
    accept: "Allow",
    settings: "Cookie settings",
  },
  legalLinks: {
    terms: "Terms",
    privacy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
    dpa: "DPA",
  },
}

export type ChromeDict = typeof en

const it: ChromeDict = {
  nav: {
    label: "Principale",
    features: "Funzionalità",
    howItWorks: "Come funziona",
    pricing: "Prezzi",
    faq: "FAQ",
  },
  header: {
    skipToContent: "Vai al contenuto",
    logoHome: "TORCH by Intelligent B2B, home page",
    bookCall: "Prenota una chiamata",
    startTrial: "Prova gratis",
  },
  mobileMenu: {
    open: "Apri il menu",
    close: "Chiudi il menu",
    title: "Menu",
    navLabel: "Mobile",
    bookSetupCall: "Prenota una chiamata gratuita",
    startTrial: "Inizia la prova gratuita",
  },
  languageSwitcher: {
    label: "Lingua",
    change: "Cambia lingua",
  },
  footer: {
    tagline:
      "Il CRM che configuriamo noi per te. Chiamate, WhatsApp, prenotazioni e recensioni in un'unica app, con assistenza in",
    socialTitle: "Social media",
    columns: {
      product: {
        title: "Prodotto",
        features: "Funzionalità",
        howItWorks: "Come funziona",
        industries: "Settori",
        pricing: "Prezzi",
      },
      company: {
        title: "Azienda",
        agencies: "Per le agenzie",
        bookCall: "Prenota una chiamata",
        faq: "FAQ",
      },
      support: {
        title: "Assistenza",
        whatsapp: "WhatsApp",
        callUs: "Chiamaci",
        emailUs: "Scrivici",
        videoCall: "Videochiamata",
      },
    },
    rights: "© {year} TORCH di {company}. Tutti i diritti riservati.",
    vat: "P. IVA",
    tradeRegister: "Registro delle imprese",
    legalLabel: "Note legali",
  },
  newsletter: {
    title: "Iscriviti alla nostra newsletter",
    intro: "Consigli semplici per trovare più clienti, una volta al mese.",
    emailLabel: "La tua email",
    placeholder: "tu@tuaattivita.it",
    subscribe: "Iscriviti",
    sending: "Invio…",
    done: "Grazie, sei iscritto!",
    consentBefore:
      "Accetto di ricevere la newsletter di TORCH. Posso annullare l'iscrizione quando voglio. Leggi la nostra",
    privacyLink: "Informativa sulla privacy",
    consentAfter: ".",
    errors: {
      invalid_email: "Inserisci un indirizzo email valido.",
      no_consent: "Spunta la casella per accettare di ricevere la newsletter.",
      unavailable: "La newsletter non è disponibile in questo momento.",
      failed: "Non siamo riusciti a iscriverti. Riprova tra un attimo.",
      bad_request: "Inserisci il tuo indirizzo email.",
      network: "Impossibile raggiungere il server. Controlla la connessione e riprova.",
    },
  },
  cookieBanner: {
    label: "Scelta dei cookie",
    text: "Usiamo i cookie per migliorare la tua esperienza e misurare i nostri annunci.",
    policyLink: "Informativa sui cookie",
    decline: "No, grazie",
    accept: "Consenti",
    settings: "Impostazioni cookie",
  },
  legalLinks: {
    terms: "Termini",
    privacy: "Informativa sulla privacy",
    cookiePolicy: "Informativa sui cookie",
    dpa: "DPA",
  },
}

const fr: ChromeDict = {
  nav: {
    label: "Principal",
    features: "Fonctionnalités",
    howItWorks: "Comment ça marche",
    pricing: "Tarifs",
    faq: "FAQ",
  },
  header: {
    skipToContent: "Aller au contenu",
    logoHome: "TORCH by Intelligent B2B, page d'accueil",
    bookCall: "Réserver un appel",
    startTrial: "Essai gratuit",
  },
  mobileMenu: {
    open: "Ouvrir le menu",
    close: "Fermer le menu",
    title: "Menu",
    navLabel: "Mobile",
    bookSetupCall: "Réserver un appel gratuit",
    startTrial: "Commencer mon essai gratuit",
  },
  languageSwitcher: {
    label: "Langue",
    change: "Changer de langue",
  },
  footer: {
    tagline:
      "Le CRM que nous configurons pour vous. Appels, WhatsApp, réservations et avis dans une seule application, avec une assistance en",
    socialTitle: "Réseaux sociaux",
    columns: {
      product: {
        title: "Produit",
        features: "Fonctionnalités",
        howItWorks: "Comment ça marche",
        industries: "Secteurs",
        pricing: "Tarifs",
      },
      company: {
        title: "Entreprise",
        agencies: "Pour les agences",
        bookCall: "Réserver un appel",
        faq: "FAQ",
      },
      support: {
        title: "Assistance",
        whatsapp: "WhatsApp",
        callUs: "Nous appeler",
        emailUs: "Nous écrire",
        videoCall: "Appel vidéo",
      },
    },
    rights: "© {year} TORCH par {company}. Tous droits réservés.",
    vat: "TVA",
    tradeRegister: "Registre du commerce",
    legalLabel: "Mentions légales",
  },
  newsletter: {
    title: "Abonnez-vous à notre newsletter",
    intro: "Des conseils simples pour gagner plus de clients, une fois par mois.",
    emailLabel: "Votre e-mail",
    placeholder: "vous@entreprise.fr",
    subscribe: "S'abonner",
    sending: "Envoi…",
    done: "Merci, c'est fait !",
    consentBefore:
      "J'accepte de recevoir la newsletter TORCH. Je peux me désabonner à tout moment. Voir notre",
    privacyLink: "Politique de confidentialité",
    consentAfter: ".",
    errors: {
      invalid_email: "Veuillez saisir une adresse e-mail valide.",
      no_consent: "Veuillez cocher la case pour accepter de recevoir la newsletter.",
      unavailable: "La newsletter n'est pas disponible pour le moment.",
      failed: "Nous n'avons pas pu vous inscrire. Veuillez réessayer dans un instant.",
      bad_request: "Veuillez saisir votre adresse e-mail.",
      network: "Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.",
    },
  },
  cookieBanner: {
    label: "Choix des cookies",
    text: "Nous utilisons des cookies pour améliorer votre expérience et mesurer nos publicités.",
    policyLink: "Politique de cookies",
    decline: "Non merci",
    accept: "Autoriser",
    settings: "Paramètres des cookies",
  },
  legalLinks: {
    terms: "Conditions",
    privacy: "Politique de confidentialité",
    cookiePolicy: "Politique de cookies",
    dpa: "DPA",
  },
}

const ar: ChromeDict = {
  nav: {
    label: "الرئيسية",
    features: "المزايا",
    howItWorks: "كيف يعمل",
    pricing: "الأسعار",
    faq: "الأسئلة الشائعة",
  },
  header: {
    skipToContent: "انتقل إلى المحتوى",
    logoHome: "TORCH من Intelligent B2B، الصفحة الرئيسية",
    bookCall: "احجز مكالمة",
    startTrial: "ابدأ تجربتي المجانية",
  },
  mobileMenu: {
    open: "افتح القائمة",
    close: "أغلق القائمة",
    title: "القائمة",
    navLabel: "قائمة الجوال",
    bookSetupCall: "احجز مكالمة إعداد مجانية",
    startTrial: "ابدأ تجربتي المجانية",
  },
  languageSwitcher: {
    label: "اللغة",
    change: "تغيير اللغة",
  },
  footer: {
    tagline:
      "نظام CRM نجهّزه لك بالكامل. المكالمات وWhatsApp والحجوزات والتقييمات في تطبيق واحد، مع دعم باللغات",
    socialTitle: "وسائل التواصل الاجتماعي",
    columns: {
      product: {
        title: "المنتج",
        features: "المزايا",
        howItWorks: "كيف يعمل",
        industries: "القطاعات",
        pricing: "الأسعار",
      },
      company: {
        title: "الشركة",
        agencies: "للوكالات",
        bookCall: "احجز مكالمة",
        faq: "الأسئلة الشائعة",
      },
      support: {
        title: "الدعم",
        whatsapp: "WhatsApp",
        callUs: "اتصل بنا",
        emailUs: "راسلنا",
        videoCall: "مكالمة فيديو",
      },
    },
    rights: "© {year} TORCH من {company}. جميع الحقوق محفوظة.",
    vat: "الرقم الضريبي",
    tradeRegister: "السجل التجاري",
    legalLabel: "المعلومات القانونية",
  },
  newsletter: {
    title: "اشترك في نشرتنا البريدية",
    intro: "نصائح بسيطة لكسب المزيد من العملاء، مرة واحدة في الشهر.",
    emailLabel: "بريدك الإلكتروني",
    placeholder: "you@business.com",
    subscribe: "اشترك",
    sending: "جارٍ الإرسال…",
    done: "شكرًا، تم اشتراكك!",
    consentBefore:
      "أوافق على تلقي النشرة البريدية من TORCH، ويمكنني إلغاء الاشتراك في أي وقت. اطّلع على",
    privacyLink: "سياسة الخصوصية",
    consentAfter: ".",
    errors: {
      invalid_email: "يرجى إدخال بريد إلكتروني صحيح.",
      no_consent: "يرجى تحديد المربع للموافقة على تلقي النشرة البريدية.",
      unavailable: "النشرة البريدية غير متاحة حاليًا.",
      failed: "تعذّر تسجيلك الآن. يرجى المحاولة مرة أخرى بعد قليل.",
      bad_request: "يرجى إدخال بريدك الإلكتروني.",
      network: "تعذّر الاتصال بالخادم. تحقّق من اتصالك وحاول مرة أخرى.",
    },
  },
  cookieBanner: {
    label: "اختيار ملفات تعريف الارتباط",
    text: "نستخدم ملفات تعريف الارتباط لتحسين تجربتك وقياس أداء إعلاناتنا.",
    policyLink: "سياسة ملفات تعريف الارتباط",
    decline: "لا، شكرًا",
    accept: "السماح",
    settings: "إعدادات ملفات تعريف الارتباط",
  },
  legalLinks: {
    terms: "الشروط",
    privacy: "سياسة الخصوصية",
    cookiePolicy: "سياسة ملفات تعريف الارتباط",
    dpa: "اتفاقية معالجة البيانات",
  },
}

export const chrome: Record<Locale, ChromeDict> = { en, it, fr, ar }

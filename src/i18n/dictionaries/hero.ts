import type { Locale } from "@/i18n/config"

// Hero: headline, buttons, demo video modal and the mock dashboard under it.
// headlineWords rise in one by one; the word at headlineHighlight gets the drawn underline.
const en = {
  teamBadge: "Set up by a real team, not a ticket queue",
  headlineWords: ["Never", "miss", "a", "customer", "again."],
  headlineHighlight: 3,
  headlineSecond: "We build it. You close the deals.",
  intro:
    "TORCH answers missed calls, replies to every message and books appointments while you work. Our team sets it all up for you.",
  trialCta: "Start my free trial",
  bookCta: "Book a free setup call",
  demo: {
    button: "Watch the demo",
    title: "TORCH demo video",
    close: "Close",
  },
  dashboard: {
    caption: "Example TORCH dashboard: leads captured, calls answered, and bookings in the pipeline.",
    leadPerformance: "Lead performance",
    leadsCaptured: "Leads captured this month",
    funnel: ["Captured", "Replied", "Booked", "Showed", "Reviewed"],
    avgReply: "Average reply time",
    underOneMin: "Under 1 min",
    appointmentsBooked: "{n} appointments booked",
    last30Days: "Last 30 days",
    callsAnswered: "Calls answered",
    speedMetrics: ["Missed calls answered", "Replies sent", "Appointments booked"],
    pipeline: "Pipeline",
    pipelineBars: ["Booked", "Paid"],
    recentBookings: "Recent bookings",
    services: ["Cleaning", "Whitening", "Check-up"],
  },
}

export type HeroDict = typeof en

const it: HeroDict = {
  teamBadge: "Configurato da un vero team, non da un sistema di ticket",
  headlineWords: ["Mai", "più", "un", "cliente", "perso."],
  headlineHighlight: 3,
  headlineSecond: "Noi lo costruiamo. Tu chiudi i contratti.",
  intro:
    "TORCH risponde alle chiamate perse, replica a ogni messaggio e fissa appuntamenti mentre lavori. Il nostro team configura tutto per te.",
  trialCta: "Inizia la prova gratuita",
  bookCta: "Prenota una chiamata gratuita",
  demo: {
    button: "Guarda la demo",
    title: "Video demo di TORCH",
    close: "Chiudi",
  },
  dashboard: {
    caption: "Esempio di dashboard TORCH: contatti acquisiti, chiamate risposte e prenotazioni in corso.",
    leadPerformance: "Andamento contatti",
    leadsCaptured: "Contatti acquisiti questo mese",
    funnel: ["Acquisiti", "Risposti", "Prenotati", "Presenti", "Recensiti"],
    avgReply: "Tempo medio di risposta",
    underOneMin: "Meno di 1 min",
    appointmentsBooked: "{n} appuntamenti prenotati",
    last30Days: "Ultimi 30 giorni",
    callsAnswered: "Chiamate risposte",
    speedMetrics: ["Chiamate perse richiamate", "Risposte inviate", "Appuntamenti prenotati"],
    pipeline: "Pipeline",
    pipelineBars: ["Prenotati", "Pagati"],
    recentBookings: "Prenotazioni recenti",
    services: ["Pulizia", "Sbiancamento", "Controllo"],
  },
}

const fr: HeroDict = {
  teamBadge: "Installé par une vraie équipe, pas par un service de tickets",
  headlineWords: ["Plus", "jamais", "un", "client", "perdu."],
  headlineHighlight: 3,
  headlineSecond: "Nous le construisons. Vous concluez les ventes.",
  intro:
    "TORCH répond aux appels manqués et à chaque message, et prend les rendez-vous pendant que vous travaillez. Notre équipe installe tout pour vous.",
  trialCta: "Commencer mon essai gratuit",
  bookCta: "Réserver un appel gratuit",
  demo: {
    button: "Voir la démo",
    title: "Vidéo de démonstration TORCH",
    close: "Fermer",
  },
  dashboard: {
    caption: "Exemple de tableau de bord TORCH : prospects captés, appels répondus et réservations en cours.",
    leadPerformance: "Performance des prospects",
    leadsCaptured: "Prospects captés ce mois-ci",
    funnel: ["Captés", "Répondus", "Réservés", "Venus", "Avis"],
    avgReply: "Délai moyen de réponse",
    underOneMin: "Moins d'1 min",
    appointmentsBooked: "{n} rendez-vous pris",
    last30Days: "30 derniers jours",
    callsAnswered: "Appels répondus",
    speedMetrics: ["Appels manqués traités", "Réponses envoyées", "Rendez-vous pris"],
    pipeline: "Pipeline",
    pipelineBars: ["Réservés", "Payés"],
    recentBookings: "Réservations récentes",
    services: ["Détartrage", "Blanchiment", "Contrôle"],
  },
}

const ar: HeroDict = {
  teamBadge: "يجهّزه لك فريق حقيقي، لا نظام تذاكر",
  headlineWords: ["لا", "تفوّت", "أي", "عميل", "بعد", "اليوم."],
  headlineHighlight: 3,
  headlineSecond: "نحن نبنيه، وأنت تُتمّ الصفقات.",
  intro:
    "يردّ TORCH على المكالمات الفائتة وعلى كل رسالة، ويحجز المواعيد وأنت تعمل. فريقنا يجهّز كل شيء لك.",
  trialCta: "ابدأ تجربتي المجانية",
  bookCta: "احجز مكالمة إعداد مجانية",
  demo: {
    button: "شاهد العرض التوضيحي",
    title: "فيديو العرض التوضيحي لـ TORCH",
    close: "إغلاق",
  },
  dashboard: {
    caption: "مثال على لوحة تحكم TORCH: العملاء المحتملون، والمكالمات التي تم الرد عليها، والحجوزات الجارية.",
    leadPerformance: "أداء العملاء المحتملين",
    leadsCaptured: "عملاء محتملون هذا الشهر",
    funnel: ["جدد", "تم الرد", "حجزوا", "حضروا", "قيّموا"],
    avgReply: "متوسط وقت الرد",
    underOneMin: "أقل من دقيقة",
    appointmentsBooked: "{n} موعدًا محجوزًا",
    last30Days: "آخر 30 يومًا",
    callsAnswered: "مكالمات تم الرد عليها",
    speedMetrics: ["مكالمات فائتة تم الرد عليها", "ردود مُرسلة", "مواعيد محجوزة"],
    pipeline: "مسار المبيعات",
    pipelineBars: ["محجوز", "مدفوع"],
    recentBookings: "أحدث الحجوزات",
    services: ["تنظيف", "تبييض", "فحص"],
  },
}

export const hero: Record<Locale, HeroDict> = { en, it, fr, ar }

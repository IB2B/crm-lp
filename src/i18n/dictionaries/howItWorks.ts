import type { Locale } from "@/i18n/config"

// TODO(ib2b): confirm the "live in 7 days" timeline (from torch-build-spec.md).
// Three steps in order: your call (day 1), our setup (days 2-6), live (day 7).
const en = {
  eyebrow: "How it works",
  title: "Live in a week. We do the hard part.",
  steps: [
    {
      when: "Day 1 · You",
      title: "Book a free call",
      body: "A short chat about your business. No tech talk.",
    },
    {
      when: "Days 2–6 · Our team",
      title: "We set it all up",
      body: "WhatsApp, calendar, contacts and follow-ups. Our team does everything.",
    },
    {
      when: "Day 7 · Live",
      title: "You get more customers",
      body: "Answer everyone from one simple app, on your phone or computer.",
    },
  ],
  outro: "Your part takes one call. We handle the rest.",
  cta: "Book a free setup call",
}

export type HowItWorksDict = typeof en

const it: HowItWorksDict = {
  eyebrow: "Come funziona",
  title: "Pronto in una settimana. Il difficile lo facciamo noi.",
  steps: [
    {
      when: "Giorno 1 · Tu",
      title: "Prenota una chiamata gratuita",
      body: "Una breve chiacchierata sulla tua attività. Niente parole tecniche.",
    },
    {
      when: "Giorni 2–6 · Il nostro team",
      title: "Configuriamo tutto noi",
      body: "WhatsApp, calendario, contatti e ricontatti. Il nostro team fa tutto.",
    },
    {
      when: "Giorno 7 · Operativo",
      title: "Arrivano più clienti",
      body: "Rispondi a tutti da un'unica app semplice, sul telefono o sul computer.",
    },
  ],
  outro: "A te basta una chiamata. Al resto pensiamo noi.",
  cta: "Prenota una chiamata gratuita",
}

const fr: HowItWorksDict = {
  eyebrow: "Comment ça marche",
  title: "Prêt en une semaine. Nous faisons le plus dur.",
  steps: [
    {
      when: "Jour 1 · Vous",
      title: "Réservez un appel gratuit",
      body: "Un court échange sur votre activité. Sans jargon technique.",
    },
    {
      when: "Jours 2–6 · Notre équipe",
      title: "Nous installons tout",
      body: "WhatsApp, agenda, contacts et relances. Notre équipe s'occupe de tout.",
    },
    {
      when: "Jour 7 · En ligne",
      title: "Vous gagnez plus de clients",
      body: "Répondez à tout le monde depuis une seule appli simple, sur téléphone ou ordinateur.",
    },
  ],
  outro: "Votre part tient en un appel. Nous gérons le reste.",
  cta: "Réserver un appel gratuit",
}

const ar: HowItWorksDict = {
  eyebrow: "كيف يعمل",
  title: "جاهز خلال أسبوع. ونحن نتولى الجزء الصعب.",
  steps: [
    {
      when: "اليوم 1 · أنت",
      title: "احجز مكالمة مجانية",
      body: "محادثة قصيرة عن نشاطك التجاري، دون أي كلام تقني.",
    },
    {
      when: "الأيام 2–6 · فريقنا",
      title: "نجهّز كل شيء",
      body: "واتساب والتقويم وجهات الاتصال والمتابعات. فريقنا يتولى كل شيء.",
    },
    {
      when: "اليوم 7 · انطلاق",
      title: "يأتيك عملاء أكثر",
      body: "ردّ على الجميع من تطبيق واحد بسيط، على هاتفك أو الكمبيوتر.",
    },
  ],
  outro: "دورك مكالمة واحدة فقط. ونحن نتولى الباقي.",
  cta: "احجز مكالمة إعداد مجانية",
}

export const howItWorks: Record<Locale, HowItWorksDict> = { en, it, fr, ar }

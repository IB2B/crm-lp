import type { Locale } from "@/i18n/config"

// "Sound familiar?": everyday moments a busy owner recognises. Plain words, no jargon.
const en = {
  title: "Sound familiar?",
  intro:
    "Running a business is busy. Things slip through the cracks. It's not your fault, but it costs you customers every week.",
  cta: "Book a free setup call",
  moments: [
    {
      title: "You're with a customer. The phone rings.",
      body: "You call back an hour later. They've already booked somewhere else.",
    },
    {
      title: "Messages pile up in five different apps.",
      body: "WhatsApp, Instagram, SMS, email. Some people never hear back.",
    },
    {
      title: "Quotes go out. Nobody follows up.",
      body: "They were ready to say yes. They just needed a nudge.",
    },
    {
      title: "Happy customers. Zero reviews.",
      body: "They loved you. Nobody asked at the right moment.",
    },
    {
      title: "Booked for 3pm. Never showed up.",
      body: "An empty slot you can't fill. One reminder would have saved it.",
    },
    {
      title: "A message at 10pm. A reply at 9am.",
      body: "By then, they've gone with whoever answered first.",
    },
    {
      title: "Past customers drift away.",
      body: "They'd come back. You just never gave them a reason.",
    },
    {
      title: "Five apps. Five bills. None of them talk.",
      body: "A calendar here, a CRM there, WhatsApp somewhere else.",
    },
  ],
  outroLead: "TORCH takes care of all of it.",
  outroRest: "And we set it up for you, so you never have to touch the tech.",
}

export type ProblemDict = typeof en

const it: ProblemDict = {
  title: "Ti suona familiare?",
  intro:
    "Gestire un'attività è impegnativo. Qualcosa sfugge sempre. Non è colpa tua, ma ogni settimana ti costa dei clienti.",
  cta: "Prenota una chiamata gratuita",
  moments: [
    {
      title: "Sei con un cliente. Squilla il telefono.",
      body: "Richiami un'ora dopo. Hanno già prenotato altrove.",
    },
    {
      title: "I messaggi si accumulano in cinque app diverse.",
      body: "WhatsApp, Instagram, SMS, email. Qualcuno non riceve mai risposta.",
    },
    {
      title: "I preventivi partono. Nessuno ricontatta.",
      body: "Erano pronti a dire sì. Serviva solo una spinta.",
    },
    {
      title: "Clienti felici. Zero recensioni.",
      body: "Ti hanno adorato. Nessuno gliel'ha chiesto al momento giusto.",
    },
    {
      title: "Prenotato per le 15. Mai arrivato.",
      body: "Un posto vuoto che non riesci a riempire. Bastava un promemoria.",
    },
    {
      title: "Un messaggio alle 22. Una risposta alle 9.",
      body: "Ormai sono andati da chi ha risposto per primo.",
    },
    {
      title: "I vecchi clienti si allontanano.",
      body: "Tornerebbero. Solo che non gli hai mai dato un motivo.",
    },
    {
      title: "Cinque app. Cinque bollette. Nessuna parla con le altre.",
      body: "Un calendario qui, un CRM là, WhatsApp da un'altra parte.",
    },
  ],
  outroLead: "TORCH pensa a tutto questo.",
  outroRest: "E lo configuriamo noi per te, così non devi mai toccare la parte tecnica.",
}

const fr: ProblemDict = {
  title: "Ça vous parle ?",
  intro:
    "Gérer une entreprise, c'est prenant. Des choses passent à la trappe. Ce n'est pas votre faute, mais cela vous coûte des clients chaque semaine.",
  cta: "Réserver un appel gratuit",
  moments: [
    {
      title: "Vous êtes avec un client. Le téléphone sonne.",
      body: "Vous rappelez une heure plus tard. Il a déjà réservé ailleurs.",
    },
    {
      title: "Les messages s'accumulent dans cinq applis.",
      body: "WhatsApp, Instagram, SMS, e-mail. Certains n'ont jamais de réponse.",
    },
    {
      title: "Les devis partent. Personne ne relance.",
      body: "Ils étaient prêts à dire oui. Il leur fallait juste un petit rappel.",
    },
    {
      title: "Des clients ravis. Zéro avis.",
      body: "Ils vous ont adoré. Personne ne leur a demandé au bon moment.",
    },
    {
      title: "Réservé pour 15 h. Jamais venu.",
      body: "Un créneau vide impossible à remplir. Un rappel l'aurait sauvé.",
    },
    {
      title: "Un message à 22 h. Une réponse à 9 h.",
      body: "Entre-temps, il est allé chez celui qui a répondu en premier.",
    },
    {
      title: "Les anciens clients s'éloignent.",
      body: "Ils reviendraient. Vous ne leur avez juste jamais donné de raison.",
    },
    {
      title: "Cinq applis. Cinq factures. Aucune ne se parle.",
      body: "Un agenda ici, un CRM là, WhatsApp ailleurs.",
    },
  ],
  outroLead: "TORCH s'occupe de tout cela.",
  outroRest: "Et nous l'installons pour vous, vous n'avez jamais à toucher à la technique.",
}

const ar: ProblemDict = {
  title: "هل يبدو هذا مألوفًا؟",
  intro: "إدارة عمل تجاري مرهقة، وبعض الأمور تفلت منك. ليس ذنبك، لكنها تكلّفك عملاء كل أسبوع.",
  cta: "احجز مكالمة إعداد مجانية",
  moments: [
    {
      title: "أنت مع أحد العملاء، والهاتف يرن.",
      body: "تعاود الاتصال بعد ساعة، فتجد أنه حجز في مكان آخر.",
    },
    {
      title: "الرسائل تتراكم في خمسة تطبيقات مختلفة.",
      body: "واتساب، إنستغرام، رسائل نصية، بريد إلكتروني. بعض الناس لا يتلقون ردًا أبدًا.",
    },
    {
      title: "عروض الأسعار تُرسل، ولا أحد يتابع.",
      body: "كانوا مستعدين للموافقة، كانوا يحتاجون فقط إلى تذكير بسيط.",
    },
    {
      title: "عملاء سعداء، وصفر تقييمات.",
      body: "أحبوا خدمتك، لكن لم يطلب منهم أحد في الوقت المناسب.",
    },
    {
      title: "موعد في الثالثة عصرًا، ولم يحضر.",
      body: "موعد فارغ لا يمكنك ملؤه. كان تذكير واحد سيكفي.",
    },
    {
      title: "رسالة في العاشرة ليلًا، ورد في التاسعة صباحًا.",
      body: "في ذلك الوقت، يكون قد ذهب إلى من رد أولًا.",
    },
    {
      title: "العملاء السابقون يبتعدون.",
      body: "كانوا سيعودون، لكنك لم تمنحهم سببًا لذلك.",
    },
    {
      title: "خمسة تطبيقات، خمس فواتير، ولا تواصل بينها.",
      body: "تقويم هنا، ونظام CRM هناك، وواتساب في مكان آخر.",
    },
  ],
  outroLead: "يتولى TORCH كل ذلك.",
  outroRest: "ونحن نجهّزه لك، فلا تحتاج أبدًا إلى التعامل مع الجانب التقني.",
}

export const problem: Record<Locale, ProblemDict> = { en, it, fr, ar }

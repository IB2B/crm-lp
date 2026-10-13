import type { Locale } from "@/i18n/config"

// FAQ. {n} in an answer is the free trial length (trialDays in src/content/pricing.ts).
// TODO(ib2b): review all answers. The GDPR and GoHighLevel answers need legal/brand approval.
const en = {
  eyebrow: "FAQ",
  title: "Questions? We have answers.",
  // "Still not sure? Talk to a real person from our team, in Italiano, English, Français or العربية."
  stillUnsure: "Still not sure? Talk to a real person from our team, in",
  languages: ["Italiano", "English", "Français", "العربية"],
  listSeparator: ", ",
  listOr: " or ",
  listEnd: ".",
  emailUs: "Or email us at",
  bookCall: "Book a free call",
  whatsapp: "WhatsApp us",
  items: [
    {
      q: "How long does the setup take?",
      a: "Most businesses are live in about a week. After a short call, our team connects your channels, imports your contacts and sets up your messages. You don't have to do anything technical.",
    },
    {
      q: "Is there a contract?",
      a: "No. You pay monthly or yearly and can cancel anytime. You also start with a {n}-day free trial.",
    },
    {
      q: "Can you move my contacts and data?",
      a: "Yes. Send us your contacts from Excel, Google Contacts, your phone or your old CRM, and we import them for you.",
    },
    {
      q: "Does it work with WhatsApp?",
      a: "Yes. We connect your WhatsApp Business number, so you can read and answer WhatsApp messages in TORCH together with your calls, texts, emails and social messages. WhatsApp's own message fees may apply.",
    },
    {
      q: "Which languages do you support?",
      a: "Our team helps you in Italian, English, French and Arabic. Your automatic messages can be written in any language your customers speak.",
    },
    {
      q: "Is my data safe? Is TORCH GDPR compliant?",
      a: "Yes. Your data is stored on secure servers, and you can export or delete it anytime. We follow GDPR, and our data processing agreement (DPA) covers the customer data you keep in TORCH.",
    },
    {
      q: "What happens if I cancel?",
      a: "You keep access until the end of the period you paid for, and you can export your data for 30 days after that. Payments are not refunded, so use the free trial to decide.",
    },
    {
      q: "How is TORCH different from GoHighLevel?",
      a: "TORCH is built on GoHighLevel, one of the most complete CRM platforms in the world. The difference is the service: we set everything up for you, connect WhatsApp, write your messages, train your team and support you in your language. With the software alone, you do all of that yourself.",
    },
  ],
}

export type FaqDict = typeof en

const it: FaqDict = {
  eyebrow: "Domande frequenti",
  title: "Hai domande? Abbiamo le risposte.",
  stillUnsure: "Hai ancora dubbi? Parla con una persona vera del nostro team, in",
  languages: ["italiano", "inglese", "francese", "arabo"],
  listSeparator: ", ",
  listOr: " o ",
  listEnd: ".",
  emailUs: "Oppure scrivici a",
  bookCall: "Prenota una chiamata gratuita",
  whatsapp: "Scrivici su WhatsApp",
  items: [
    {
      q: "Quanto tempo richiede la configurazione?",
      a: "La maggior parte delle attività è operativa in circa una settimana. Dopo una breve chiamata, il nostro team collega i tuoi canali, importa i tuoi contatti e prepara i tuoi messaggi. Non devi fare niente di tecnico.",
    },
    {
      q: "C'è un contratto?",
      a: "No. Paghi ogni mese o ogni anno e puoi disdire quando vuoi. In più inizi con una prova gratuita di {n} giorni.",
    },
    {
      q: "Potete trasferire i miei contatti e i miei dati?",
      a: "Sì. Mandaci i tuoi contatti da Excel, Google Contatti, dal telefono o dal tuo vecchio CRM, e li importiamo noi per te.",
    },
    {
      q: "Funziona con WhatsApp?",
      a: "Sì. Colleghiamo il tuo numero WhatsApp Business, così puoi leggere e rispondere ai messaggi WhatsApp in TORCH insieme a chiamate, SMS, email e messaggi social. Possono applicarsi le tariffe dei messaggi di WhatsApp.",
    },
    {
      q: "Quali lingue supportate?",
      a: "Il nostro team ti aiuta in italiano, inglese, francese e arabo. I tuoi messaggi automatici possono essere scritti in qualsiasi lingua parlino i tuoi clienti.",
    },
    {
      q: "I miei dati sono al sicuro? TORCH rispetta il GDPR?",
      a: "Sì. I tuoi dati sono conservati su server sicuri e puoi esportarli o cancellarli quando vuoi. Rispettiamo il GDPR, e il nostro accordo sul trattamento dei dati (DPA) copre i dati dei clienti che conservi in TORCH.",
    },
    {
      q: "Cosa succede se disdico?",
      a: "Mantieni l'accesso fino alla fine del periodo che hai pagato e puoi esportare i tuoi dati per i 30 giorni successivi. I pagamenti non vengono rimborsati, quindi usa la prova gratuita per decidere.",
    },
    {
      q: "In cosa TORCH è diverso da GoHighLevel?",
      a: "TORCH è costruito su GoHighLevel, una delle piattaforme CRM più complete al mondo. La differenza è il servizio: configuriamo tutto per te, colleghiamo WhatsApp, scriviamo i tuoi messaggi, formiamo il tuo team e ti assistiamo nella tua lingua. Con il solo software, tutto questo lo fai da solo.",
    },
  ],
}

const fr: FaqDict = {
  eyebrow: "FAQ",
  title: "Des questions ? Nous avons les réponses.",
  stillUnsure: "Encore un doute ? Parlez à une vraie personne de notre équipe, en",
  languages: ["italien", "anglais", "français", "arabe"],
  listSeparator: ", ",
  listOr: " ou ",
  listEnd: ".",
  emailUs: "Ou écrivez-nous à",
  bookCall: "Réserver un appel gratuit",
  whatsapp: "Écrivez-nous sur WhatsApp",
  items: [
    {
      q: "Combien de temps prend la mise en place ?",
      a: "La plupart des entreprises sont opérationnelles en une semaine environ. Après un court appel, notre équipe connecte vos canaux, importe vos contacts et prépare vos messages. Vous n'avez rien de technique à faire.",
    },
    {
      q: "Y a-t-il un engagement ?",
      a: "Non. Vous payez au mois ou à l'année et pouvez résilier à tout moment. Vous commencez aussi par un essai gratuit de {n} jours.",
    },
    {
      q: "Pouvez-vous transférer mes contacts et mes données ?",
      a: "Oui. Envoyez-nous vos contacts depuis Excel, Google Contacts, votre téléphone ou votre ancien CRM, et nous les importons pour vous.",
    },
    {
      q: "Est-ce que ça fonctionne avec WhatsApp ?",
      a: "Oui. Nous connectons votre numéro WhatsApp Business, pour que vous puissiez lire et répondre aux messages WhatsApp dans TORCH, avec vos appels, SMS, e-mails et messages des réseaux sociaux. Les frais de messages propres à WhatsApp peuvent s'appliquer.",
    },
    {
      q: "Quelles langues parlez-vous ?",
      a: "Notre équipe vous aide en italien, anglais, français et arabe. Vos messages automatiques peuvent être rédigés dans toutes les langues que parlent vos clients.",
    },
    {
      q: "Mes données sont-elles en sécurité ? TORCH est-il conforme au RGPD ?",
      a: "Oui. Vos données sont stockées sur des serveurs sécurisés, et vous pouvez les exporter ou les supprimer à tout moment. Nous respectons le RGPD, et notre accord de traitement des données (DPA) couvre les données clients que vous conservez dans TORCH.",
    },
    {
      q: "Que se passe-t-il si je résilie ?",
      a: "Vous gardez l'accès jusqu'à la fin de la période payée, et vous pouvez exporter vos données pendant les 30 jours suivants. Les paiements ne sont pas remboursés, alors profitez de l'essai gratuit pour décider.",
    },
    {
      q: "En quoi TORCH est-il différent de GoHighLevel ?",
      a: "TORCH repose sur GoHighLevel, l'une des plateformes CRM les plus complètes au monde. La différence, c'est le service : nous installons tout pour vous, connectons WhatsApp, rédigeons vos messages, formons votre équipe et vous accompagnons dans votre langue. Avec le logiciel seul, vous faites tout cela vous-même.",
    },
  ],
}

const ar: FaqDict = {
  eyebrow: "الأسئلة الشائعة",
  title: "لديك أسئلة؟ لدينا الإجابات.",
  stillUnsure: "ما زلت مترددًا؟ تحدّث مع شخص حقيقي من فريقنا، باللغة",
  languages: ["الإيطالية", "الإنجليزية", "الفرنسية", "العربية"],
  listSeparator: "، ",
  listOr: " أو ",
  listEnd: ".",
  emailUs: "أو راسلنا على",
  bookCall: "احجز مكالمة مجانية",
  whatsapp: "راسلنا على واتساب",
  items: [
    {
      q: "كم يستغرق الإعداد؟",
      a: "معظم الأنشطة التجارية تبدأ العمل خلال أسبوع تقريبًا. بعد مكالمة قصيرة، يربط فريقنا قنواتك، ويستورد جهات اتصالك، ويجهّز رسائلك. لن تحتاج إلى فعل أي شيء تقني.",
    },
    {
      q: "هل هناك عقد؟",
      a: "لا. تدفع شهريًا أو سنويًا ويمكنك الإلغاء في أي وقت. كما تبدأ بتجربة مجانية لمدة {n} يومًا.",
    },
    {
      q: "هل يمكنكم نقل جهات اتصالي وبياناتي؟",
      a: "نعم. أرسل إلينا جهات اتصالك من Excel أو جهات اتصال Google أو هاتفك أو نظام CRM القديم، ونحن نستوردها لك.",
    },
    {
      q: "هل يعمل مع واتساب؟",
      a: "نعم. نربط رقم WhatsApp Business الخاص بك، لتقرأ رسائل واتساب وترد عليها داخل TORCH مع مكالماتك ورسائلك النصية وبريدك ورسائل وسائل التواصل. قد تُطبَّق رسوم الرسائل الخاصة بواتساب.",
    },
    {
      q: "ما اللغات التي تدعمونها؟",
      a: "يساعدك فريقنا بالإيطالية والإنجليزية والفرنسية والعربية. ويمكن كتابة رسائلك التلقائية بأي لغة يتحدثها عملاؤك.",
    },
    {
      q: "هل بياناتي آمنة؟ هل TORCH متوافق مع اللائحة العامة لحماية البيانات (GDPR)؟",
      a: "نعم. تُحفظ بياناتك على خوادم آمنة، ويمكنك تصديرها أو حذفها في أي وقت. نحن نلتزم باللائحة العامة لحماية البيانات، واتفاقية معالجة البيانات (DPA) لدينا تغطي بيانات العملاء التي تحفظها في TORCH.",
    },
    {
      q: "ماذا يحدث إذا ألغيت الاشتراك؟",
      a: "يبقى لديك وصول حتى نهاية الفترة التي دفعت مقابلها، ويمكنك تصدير بياناتك خلال 30 يومًا بعد ذلك. المبالغ المدفوعة لا تُسترد، لذا استفد من التجربة المجانية لتقرر.",
    },
    {
      q: "ما الفرق بين TORCH وGoHighLevel؟",
      a: "TORCH مبني على GoHighLevel، وهي من أكثر منصات CRM اكتمالًا في العالم. الفرق هو الخدمة: نحن نجهّز كل شيء لك، ونربط واتساب، ونكتب رسائلك، وندرّب فريقك، وندعمك بلغتك. مع البرنامج وحده، عليك أن تفعل كل ذلك بنفسك.",
    },
  ],
}

export const faq: Record<Locale, FaqDict> = { en, it, fr, ar }

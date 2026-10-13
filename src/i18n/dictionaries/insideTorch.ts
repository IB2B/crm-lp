import type { Locale } from "@/i18n/config"

// "Inside TORCH": one entry per feature, in the same order as the screenshots in
// src/components/landing/inside-torch-section.tsx (inbox, pipeline, marketing, campaign results, social,
// AI assistant, voice AI, calendar, calendars list, sites, reviews, automations, workflow builder).
const en = {
  eyebrow: "Inside TORCH",
  titleLead: "Everything you need,",
  titleRest: "in one app.",
  intro:
    "All your tools work together, on your computer and your phone. We set them all up before you log in for the first time.",
  items: [
    {
      label: "Inbox",
      caption: "WhatsApp, Instagram, Facebook, texts and email in one inbox.",
      benefit:
        "No more jumping between apps. Your whole team sees every message, so nobody gets left without a reply.",
      alt: "TORCH conversations inbox with a team inbox list, an open conversation and contact details",
    },
    {
      label: "Pipeline",
      caption: "See every customer and where they are, from first message to paid.",
      benefit: "Know who's ready to buy, who needs a nudge and who's waiting on you.",
      alt: "TORCH pipeline board with lead cards organised by stage",
    },
    {
      label: "Marketing campaigns",
      caption: "Send offers and news by email, SMS and WhatsApp, and see who opens and clicks.",
      benefit: "Bring past customers back with a quick message, without hiring an agency.",
      alt: "TORCH email marketing statistics showing delivered, opened, clicked and ordered",
    },
    {
      label: "Campaign results",
      caption: "See how each campaign did: delivered, opened, clicked and unsubscribed.",
      benefit: "Know which offers bring customers back, and send more of what works.",
      alt: "TORCH email campaign report with delivered, opened, clicked and bounce rates and a daily engagement chart",
    },
    {
      label: "Social media planner",
      caption:
        "Connect Facebook, Instagram, TikTok, LinkedIn, Google and more, then post everywhere at once.",
      benefit: "Plan a week of posts in one sitting and let TORCH publish them on time.",
      alt: "TORCH social planner showing Facebook, Instagram, LinkedIn, TikTok, YouTube, Pinterest, Threads, Bluesky and Google Business",
    },
    {
      label: "AI assistant",
      caption: "Create AI agents that answer your customers and book visits, day and night.",
      benefit: "Customers get an answer at 11pm on a Sunday, and you wake up to bookings.",
      alt: "TORCH list of AI chat agents with their channels: WhatsApp, Instagram, Facebook, SMS and live chat",
    },
    {
      label: "Voice AI",
      caption: "An AI receptionist that answers your phone, takes messages and books visits.",
      benefit: "No more missed calls while you work. Every caller gets an answer, even after hours.",
      alt: "TORCH list of voice AI agents: reception line, after-hours calls and booking line",
    },
    {
      label: "Booking & reminders",
      caption: "Every booking in one calendar, with reminders sent for you.",
      benefit: "Fewer no-shows, because everyone gets a reminder before their visit.",
      alt: "TORCH calendar week view full of booked appointments",
    },
    {
      label: "Calendars & services",
      caption: "A calendar for each service, room or team member, each with its own hours.",
      benefit: "Customers only see times that really work for you, so nothing gets double-booked.",
      alt: "TORCH list of booking calendars: free consultation, first visit, follow-up visit, treatment and more",
    },
    {
      label: "Websites & funnels",
      caption: "Start from ready-made templates for your business. We set up your pages for you.",
      benefit: "A page that looks good on phones and sends every enquiry straight to your inbox.",
      alt: "TORCH funnel template library with ready-made templates by industry",
    },
    {
      label: "Reviews",
      caption: "See your rating and every new review, and send review requests in one click.",
      benefit: "More happy customers leave a review, because you ask at the right moment.",
      alt: "TORCH reputation overview with average rating, total reviews and charts",
    },
    {
      label: "Automations",
      caption: "Ready-made workflows for bookings, follow-ups and campaigns. We build them for you.",
      benefit: "The follow-ups you never have time for happen on their own.",
      alt: "TORCH list of automation workflows with their status and number of contacts",
    },
    {
      label: "Workflow builder",
      caption: "Drag and drop each step: a new lead comes in, it gets a reply, lands in your pipeline and your team is told.",
      benefit: "You can see exactly what happens to every lead, and we build the first workflows for you.",
      alt: "TORCH workflow builder: a Facebook lead form trigger, then create opportunity, notify the team and wait",
    },
  ],
  alsoIncluded: "Also included: payments & invoices, a mobile app, reports.",
  enlarge: "Click to enlarge",
  close: "Close",
}

export type InsideTorchDict = typeof en

const it: InsideTorchDict = {
  eyebrow: "Dentro TORCH",
  titleLead: "Tutto quello che ti serve,",
  titleRest: "in un'unica app.",
  intro:
    "Tutti i tuoi strumenti lavorano insieme, sul computer e sul telefono. Li configuriamo noi prima che tu acceda per la prima volta.",
  items: [
    {
      label: "Messaggi",
      caption: "WhatsApp, Instagram, Facebook, SMS ed email in un'unica casella.",
      benefit:
        "Basta saltare da un'app all'altra. Tutto il tuo team vede ogni messaggio, così nessuno resta senza risposta.",
      alt: "Casella delle conversazioni di TORCH con l'elenco del team, una conversazione aperta e i dettagli del contatto",
    },
    {
      label: "Pipeline",
      caption: "Vedi ogni cliente e a che punto è, dal primo messaggio al pagamento.",
      benefit: "Sai chi è pronto a comprare, chi ha bisogno di una spinta e chi aspetta te.",
      alt: "Bacheca pipeline di TORCH con le schede dei contatti organizzate per fase",
    },
    {
      label: "Campagne marketing",
      caption: "Invia offerte e novità via email, SMS e WhatsApp, e vedi chi apre e clicca.",
      benefit: "Fai tornare i vecchi clienti con un messaggio veloce, senza pagare un'agenzia.",
      alt: "Statistiche email marketing di TORCH con consegnate, aperte, cliccate e ordini",
    },
    {
      label: "Risultati delle campagne",
      caption: "Guarda com'è andata ogni campagna: consegnate, aperte, cliccate e disiscrizioni.",
      benefit: "Scopri quali offerte fanno tornare i clienti e manda di più ciò che funziona.",
      alt: "Report di una campagna email TORCH con tassi di consegna, apertura, clic e rimbalzo e un grafico giornaliero",
    },
    {
      label: "Social media",
      caption:
        "Collega Facebook, Instagram, TikTok, LinkedIn, Google e altri, poi pubblica ovunque in un colpo solo.",
      benefit: "Prepara i post di una settimana in una volta sola e TORCH li pubblica all'ora giusta.",
      alt: "Pianificatore social di TORCH con Facebook, Instagram, LinkedIn, TikTok, YouTube, Pinterest, Threads, Bluesky e Google Business",
    },
    {
      label: "Assistente AI",
      caption: "Crea assistenti AI che rispondono ai clienti e fissano appuntamenti, giorno e notte.",
      benefit: "I clienti ricevono una risposta alle 23 di domenica, e tu ti svegli con nuove prenotazioni.",
      alt: "Elenco degli assistenti AI di TORCH con i loro canali: WhatsApp, Instagram, Facebook, SMS e live chat",
    },
    {
      label: "Voice AI",
      caption: "Una receptionist AI che risponde al telefono, prende messaggi e fissa appuntamenti.",
      benefit: "Nessuna chiamata persa mentre lavori. Chi chiama riceve sempre una risposta, anche fuori orario.",
      alt: "Elenco degli agenti vocali AI di TORCH: centralino, chiamate fuori orario e linea prenotazioni",
    },
    {
      label: "Prenotazioni e promemoria",
      caption: "Tutte le prenotazioni in un unico calendario, con i promemoria inviati per te.",
      benefit: "Meno appuntamenti saltati, perché tutti ricevono un promemoria prima della visita.",
      alt: "Calendario settimanale di TORCH pieno di appuntamenti prenotati",
    },
    {
      label: "Calendari e servizi",
      caption: "Un calendario per ogni servizio, sala o persona del team, ognuno con i suoi orari.",
      benefit: "I clienti vedono solo gli orari che vanno davvero bene per te, così niente doppie prenotazioni.",
      alt: "Elenco dei calendari di prenotazione di TORCH: consulenza gratuita, prima visita, controllo, trattamento e altri",
    },
    {
      label: "Siti e funnel",
      caption: "Parti da modelli pronti per la tua attività. Le pagine le prepariamo noi.",
      benefit: "Una pagina che si vede bene sul telefono e manda ogni richiesta dritta nella tua casella.",
      alt: "Libreria di modelli funnel di TORCH con modelli pronti per settore",
    },
    {
      label: "Recensioni",
      caption: "Vedi il tuo punteggio e ogni nuova recensione, e chiedi recensioni con un clic.",
      benefit: "Più clienti soddisfatti lasciano una recensione, perché la chiedi al momento giusto.",
      alt: "Panoramica della reputazione di TORCH con valutazione media, totale recensioni e grafici",
    },
    {
      label: "Automazioni",
      caption: "Flussi pronti per prenotazioni, ricontatti e campagne. Li creiamo noi per te.",
      benefit: "I ricontatti per cui non hai mai tempo partono da soli.",
      alt: "Elenco dei flussi automatici di TORCH con stato e numero di contatti",
    },
    {
      label: "Editor dei flussi",
      caption: "Ogni passaggio con il drag and drop: arriva un nuovo contatto, riceve una risposta, entra nella pipeline e il team viene avvisato.",
      benefit: "Vedi esattamente cosa succede a ogni contatto, e i primi flussi li costruiamo noi per te.",
      alt: "Editor dei flussi di TORCH: trigger da modulo lead di Facebook, poi crea opportunità, avvisa il team e attendi",
    },
  ],
  alsoIncluded: "Inclusi anche: pagamenti e fatture, un'app mobile, report.",
  enlarge: "Clicca per ingrandire",
  close: "Chiudi",
}

const fr: InsideTorchDict = {
  eyebrow: "Dans TORCH",
  titleLead: "Tout ce qu'il vous faut,",
  titleRest: "dans une seule app.",
  intro:
    "Tous vos outils fonctionnent ensemble, sur ordinateur et sur téléphone. Nous les installons avant votre première connexion.",
  items: [
    {
      label: "Messagerie",
      caption: "WhatsApp, Instagram, Facebook, SMS et e-mails dans une seule boîte.",
      benefit:
        "Fini les allers-retours entre les applis. Toute votre équipe voit chaque message, personne ne reste sans réponse.",
      alt: "Boîte de conversations TORCH avec la liste de l'équipe, une conversation ouverte et la fiche du contact",
    },
    {
      label: "Pipeline",
      caption: "Voyez chaque client et où il en est, du premier message au paiement.",
      benefit: "Sachez qui est prêt à acheter, qui a besoin d'une relance et qui vous attend.",
      alt: "Tableau pipeline TORCH avec les fiches prospects classées par étape",
    },
    {
      label: "Campagnes marketing",
      caption: "Envoyez offres et nouvelles par e-mail, SMS et WhatsApp, et voyez qui ouvre et clique.",
      benefit: "Faites revenir vos anciens clients avec un simple message, sans payer d'agence.",
      alt: "Statistiques d'e-mailing TORCH : délivrés, ouverts, cliqués et commandes",
    },
    {
      label: "Résultats des campagnes",
      caption: "Voyez comment chaque campagne s'est passée : distribués, ouverts, cliqués et désabonnements.",
      benefit: "Sachez quelles offres font revenir vos clients, et envoyez plus de ce qui marche.",
      alt: "Rapport de campagne e-mail TORCH avec taux de distribution, d'ouverture, de clics et de rebond, et un graphique par jour",
    },
    {
      label: "Réseaux sociaux",
      caption:
        "Connectez Facebook, Instagram, TikTok, LinkedIn, Google et plus, puis publiez partout en une fois.",
      benefit: "Préparez une semaine de posts en une fois, TORCH les publie à l'heure prévue.",
      alt: "Planificateur social TORCH avec Facebook, Instagram, LinkedIn, TikTok, YouTube, Pinterest, Threads, Bluesky et Google Business",
    },
    {
      label: "Assistant IA",
      caption: "Créez des assistants IA qui répondent à vos clients et prennent des rendez-vous, jour et nuit.",
      benefit: "Vos clients ont une réponse à 23 h un dimanche, et vous vous réveillez avec des réservations.",
      alt: "Liste des assistants IA de TORCH avec leurs canaux : WhatsApp, Instagram, Facebook, SMS et chat en direct",
    },
    {
      label: "IA vocale",
      caption: "Une réceptionniste IA qui répond au téléphone, prend les messages et réserve les rendez-vous.",
      benefit: "Plus d'appels manqués pendant que vous travaillez. Chaque appelant obtient une réponse, même en dehors des horaires.",
      alt: "Liste des agents vocaux IA de TORCH : accueil, appels hors horaires et ligne de réservation",
    },
    {
      label: "Réservations et rappels",
      caption: "Tous vos rendez-vous dans un seul agenda, avec des rappels envoyés pour vous.",
      benefit: "Moins de rendez-vous manqués, car chacun reçoit un rappel avant sa visite.",
      alt: "Agenda TORCH en vue semaine rempli de rendez-vous réservés",
    },
    {
      label: "Agendas et services",
      caption: "Un agenda par service, salle ou membre de l'équipe, chacun avec ses horaires.",
      benefit: "Vos clients ne voient que les créneaux qui vous conviennent vraiment, sans double réservation.",
      alt: "Liste des agendas de réservation TORCH : consultation gratuite, première visite, suivi, soin et plus",
    },
    {
      label: "Sites et tunnels",
      caption: "Partez de modèles prêts pour votre activité. Nous créons vos pages pour vous.",
      benefit: "Une page belle sur mobile qui envoie chaque demande directement dans votre boîte.",
      alt: "Bibliothèque de modèles de tunnels TORCH, classés par secteur",
    },
    {
      label: "Avis",
      caption: "Voyez votre note et chaque nouvel avis, et demandez des avis en un clic.",
      benefit: "Plus de clients satisfaits laissent un avis, car vous demandez au bon moment.",
      alt: "Vue d'ensemble de la réputation TORCH avec note moyenne, nombre d'avis et graphiques",
    },
    {
      label: "Automatisations",
      caption: "Des scénarios prêts pour les réservations, relances et campagnes. Nous les créons pour vous.",
      benefit: "Les relances que vous n'avez jamais le temps de faire se font toutes seules.",
      alt: "Liste des scénarios automatiques TORCH avec leur statut et leur nombre de contacts",
    },
    {
      label: "Éditeur de scénarios",
      caption: "Chaque étape en glisser-déposer : un prospect arrive, reçoit une réponse, entre dans votre pipeline et votre équipe est prévenue.",
      benefit: "Vous voyez exactement ce qui arrive à chaque prospect, et nous construisons les premiers scénarios pour vous.",
      alt: "Éditeur de scénarios TORCH : déclencheur formulaire Facebook, puis création d'opportunité, alerte à l'équipe et attente",
    },
  ],
  alsoIncluded: "Également inclus : paiements et factures, une appli mobile, des rapports.",
  enlarge: "Cliquer pour agrandir",
  close: "Fermer",
}

const ar: InsideTorchDict = {
  eyebrow: "داخل TORCH",
  titleLead: "كل ما تحتاجه،",
  titleRest: "في تطبيق واحد.",
  intro:
    "كل أدواتك تعمل معًا، على الكمبيوتر والهاتف. نجهّزها كلها لك قبل أن تسجّل الدخول لأول مرة.",
  items: [
    {
      label: "صندوق الرسائل",
      caption: "واتساب وإنستغرام وفيسبوك والرسائل النصية والبريد في صندوق واحد.",
      benefit: "لا مزيد من التنقل بين التطبيقات. فريقك كله يرى كل رسالة، فلا يبقى أحد بلا رد.",
      alt: "صندوق محادثات TORCH مع قائمة الفريق ومحادثة مفتوحة وبيانات جهة الاتصال",
    },
    {
      label: "مسار العملاء",
      caption: "شاهد كل عميل وأين وصل، من أول رسالة حتى الدفع.",
      benefit: "اعرف من هو جاهز للشراء، ومن يحتاج إلى تذكير، ومن ينتظر ردك.",
      alt: "لوحة مسار العملاء في TORCH مع بطاقات العملاء مرتبة حسب المرحلة",
    },
    {
      label: "الحملات التسويقية",
      caption: "أرسل العروض والأخبار عبر البريد والرسائل النصية وواتساب، واعرف من فتحها ونقر عليها.",
      benefit: "أعد عملاءك السابقين برسالة سريعة، دون الحاجة إلى وكالة.",
      alt: "إحصاءات التسويق بالبريد في TORCH: المرسلة والمفتوحة والمنقورة والطلبات",
    },
    {
      label: "نتائج الحملات",
      caption: "اعرف أداء كل حملة: الرسائل المسلّمة والمفتوحة والنقرات وإلغاء الاشتراك.",
      benefit: "اعرف أي العروض تعيد عملاءك، وأرسل المزيد مما ينجح.",
      alt: "تقرير حملة بريد إلكتروني في TORCH يعرض نسب التسليم والفتح والنقر والارتداد ورسمًا بيانيًا يوميًا",
    },
    {
      label: "مخطط وسائل التواصل",
      caption: "اربط فيسبوك وإنستغرام وتيك توك ولينكدإن وGoogle وغيرها، ثم انشر في كل مكان دفعة واحدة.",
      benefit: "جهّز منشورات أسبوع كامل في جلسة واحدة، ودع TORCH ينشرها في وقتها.",
      alt: "مخطط وسائل التواصل في TORCH مع فيسبوك وإنستغرام ولينكدإن وتيك توك ويوتيوب وبنترست وThreads وBluesky وGoogle Business",
    },
    {
      label: "المساعد الذكي",
      caption: "أنشئ مساعدين أذكياء يردّون على عملائك ويحجزون المواعيد، ليلًا ونهارًا.",
      benefit: "يحصل عملاؤك على رد في الحادية عشرة ليلًا يوم الأحد، وتستيقظ على حجوزات جديدة.",
      alt: "قائمة المساعدين الأذكياء في TORCH مع قنواتهم: واتساب وإنستغرام وفيسبوك والرسائل النصية والدردشة المباشرة",
    },
    {
      label: "المساعد الصوتي الذكي",
      caption: "موظف استقبال ذكي يرد على هاتفك ويأخذ الرسائل ويحجز المواعيد.",
      benefit: "لا مكالمات فائتة أثناء عملك. كل متصل يحصل على رد، حتى خارج أوقات العمل.",
      alt: "قائمة المساعدين الصوتيين في TORCH: خط الاستقبال، ومكالمات ما بعد الدوام، وخط الحجز",
    },
    {
      label: "الحجوزات والتذكيرات",
      caption: "كل الحجوزات في تقويم واحد، مع تذكيرات تُرسل نيابةً عنك.",
      benefit: "مواعيد فائتة أقل، لأن كل عميل يتلقى تذكيرًا قبل موعده.",
      alt: "تقويم TORCH بعرض أسبوعي مليء بالمواعيد المحجوزة",
    },
    {
      label: "التقاويم والخدمات",
      caption: "تقويم لكل خدمة أو غرفة أو عضو في الفريق، ولكل منها مواعيده الخاصة.",
      benefit: "لا يرى العملاء إلا الأوقات التي تناسبك فعلًا، فلا يحدث حجز مزدوج.",
      alt: "قائمة تقاويم الحجز في TORCH: استشارة مجانية، زيارة أولى، زيارة متابعة، جلسة علاج والمزيد",
    },
    {
      label: "المواقع والصفحات",
      caption: "ابدأ من قوالب جاهزة لنشاطك. ونحن نجهّز صفحاتك لك.",
      benefit: "صفحة تبدو رائعة على الهاتف وترسل كل استفسار مباشرة إلى صندوقك.",
      alt: "مكتبة قوالب الصفحات في TORCH مع قوالب جاهزة حسب القطاع",
    },
    {
      label: "التقييمات",
      caption: "شاهد تقييمك وكل مراجعة جديدة، واطلب التقييمات بنقرة واحدة.",
      benefit: "عدد أكبر من العملاء الراضين يتركون تقييمًا، لأنك تطلبه في الوقت المناسب.",
      alt: "نظرة عامة على السمعة في TORCH مع متوسط التقييم وعدد المراجعات والرسوم البيانية",
    },
    {
      label: "الأتمتة",
      caption: "مسارات جاهزة للحجوزات والمتابعات والحملات. نحن نبنيها لك.",
      benefit: "المتابعات التي لا تجد لها وقتًا أبدًا تتم من تلقاء نفسها.",
      alt: "قائمة مسارات الأتمتة في TORCH مع حالتها وعدد جهات الاتصال",
    },
    {
      label: "منشئ سير العمل",
      caption: "كل خطوة بالسحب والإفلات: يصل عميل محتمل جديد، فيتلقى ردًا، ويدخل مسار المبيعات، ويُبلَّغ فريقك.",
      benefit: "ترى بالضبط ما يحدث لكل عميل محتمل، ونحن نبني لك أول مسارات العمل.",
      alt: "منشئ سير العمل في TORCH: مُشغّل من نموذج عملاء فيسبوك، ثم إنشاء فرصة، وتنبيه الفريق، والانتظار",
    },
  ],
  alsoIncluded: "يشمل أيضًا: المدفوعات والفواتير، وتطبيق للهاتف، والتقارير.",
  enlarge: "انقر للتكبير",
  close: "إغلاق",
}

export const insideTorch: Record<Locale, InsideTorchDict> = { en, it, fr, ar }

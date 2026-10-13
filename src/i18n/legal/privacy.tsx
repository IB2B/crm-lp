// TODO(ib2b): translations need review by a native speaker and the lawyer, like the English.
// TODO(ib2b): have a lawyer or DPO review this text before launch, and confirm each provider
// below against the real TORCH setup (especially the phone/SMS, email and hosting providers).
import type { LegalContent } from "@/components/legal-page"
import { company } from "@/content/site"
import { localizeHref, type Locale } from "@/i18n/config"

type Provider = { name: string; use: string }

// Every provider that may receive personal data. Keep in line with the DPA (src/i18n/legal/dpa.tsx).
const providers: Record<Locale, Provider[]> = {
  en: [
    {
      name: "GoHighLevel (LeadConnector)",
      use: "The platform TORCH runs on: contacts, conversations, bookings, websites and automations.",
    },
    { name: "OpenAI, through GoHighLevel", use: "Powers the AI assistant that replies to messages, when you turn it on." },
    { name: "Twilio (LeadConnector Phone)", use: "Phone calls, missed-call text back and SMS." },
    { name: "Meta (WhatsApp Business)", use: "Sending and receiving WhatsApp messages." },
    { name: "Google", use: "Calendar sync and Google Meet links for booked calls." },
    { name: "Mailgun (LeadConnector Email)", use: "Sending emails and email campaigns from TORCH." },
    { name: "Our email provider", use: "Our own inbox, when you write to us." },
    { name: "Stripe", use: "Payments and subscriptions. Card details are handled by Stripe only." },
    { name: "Meta (Facebook and Instagram)", use: "Ad measurement on this website, only if you allow cookies." },
    { name: "Wistia", use: "Playing our demo video, when you open it." },
    { name: "Our website hosting provider", use: "Serving this website." },
  ],
  it: [
    {
      name: "GoHighLevel (LeadConnector)",
      use: "La piattaforma su cui funziona TORCH: contatti, conversazioni, prenotazioni, siti web e automazioni.",
    },
    {
      name: "OpenAI, tramite GoHighLevel",
      use: "Alimenta l’assistente IA che risponde ai messaggi, quando lo attiva.",
    },
    { name: "Twilio (LeadConnector Phone)", use: "Chiamate, SMS automatico dopo una chiamata persa e SMS." },
    { name: "Meta (WhatsApp Business)", use: "Invio e ricezione di messaggi WhatsApp." },
    { name: "Google", use: "Sincronizzazione del calendario e link Google Meet per le chiamate prenotate." },
    { name: "Mailgun (LeadConnector Email)", use: "Invio di email e campagne email da TORCH." },
    { name: "Il nostro fornitore di posta elettronica", use: "La nostra casella email, quando ci scrive." },
    { name: "Stripe", use: "Pagamenti e abbonamenti. I dati della carta sono gestiti solo da Stripe." },
    {
      name: "Meta (Facebook e Instagram)",
      use: "Misurazione degli annunci su questo sito, solo se accetta i cookie.",
    },
    { name: "Wistia", use: "Riproduzione del nostro video demo, quando lo apre." },
    { name: "Il nostro fornitore di hosting", use: "Pubblicazione di questo sito." },
  ],
  fr: [
    {
      name: "GoHighLevel (LeadConnector)",
      use: "La plateforme sur laquelle fonctionne TORCH : contacts, conversations, rendez-vous, sites web et automatisations.",
    },
    {
      name: "OpenAI, via GoHighLevel",
      use: "Fait fonctionner l’assistant IA qui répond aux messages, lorsque vous l’activez.",
    },
    { name: "Twilio (LeadConnector Phone)", use: "Appels téléphoniques, SMS automatique après un appel manqué et SMS." },
    { name: "Meta (WhatsApp Business)", use: "Envoi et réception de messages WhatsApp." },
    { name: "Google", use: "Synchronisation de l’agenda et liens Google Meet pour les appels réservés." },
    { name: "Mailgun (LeadConnector Email)", use: "Envoi d’e-mails et de campagnes e-mail depuis TORCH." },
    { name: "Notre fournisseur de messagerie", use: "Notre propre boîte mail, lorsque vous nous écrivez." },
    {
      name: "Stripe",
      use: "Paiements et abonnements. Les données de carte sont traitées uniquement par Stripe.",
    },
    {
      name: "Meta (Facebook et Instagram)",
      use: "Mesure des publicités sur ce site, uniquement si vous acceptez les cookies.",
    },
    { name: "Wistia", use: "Lecture de notre vidéo de démonstration, lorsque vous l’ouvrez." },
    { name: "Notre hébergeur web", use: "Mise en ligne de ce site." },
  ],
  ar: [
    {
      name: "GoHighLevel (LeadConnector)",
      use: "المنصة التي تعمل عليها TORCH: جهات الاتصال والمحادثات والحجوزات والمواقع الإلكترونية والأتمتة.",
    },
    { name: "OpenAI، عبر GoHighLevel", use: "يشغّل مساعد الذكاء الاصطناعي الذي يرد على الرسائل، عندما تفعّله." },
    {
      name: "Twilio (LeadConnector Phone)",
      use: "المكالمات الهاتفية، والرد برسالة نصية على المكالمات الفائتة، والرسائل النصية القصيرة.",
    },
    { name: "Meta (WhatsApp Business)", use: "إرسال رسائل WhatsApp واستقبالها." },
    { name: "Google", use: "مزامنة التقويم وروابط Google Meet للمكالمات المحجوزة." },
    { name: "Mailgun (LeadConnector Email)", use: "إرسال رسائل البريد الإلكتروني وحملات البريد من TORCH." },
    { name: "مزود البريد الإلكتروني لدينا", use: "صندوق بريدنا الخاص، عندما تراسلنا." },
    { name: "Stripe", use: "المدفوعات والاشتراكات. تتولى Stripe وحدها التعامل مع بيانات البطاقة." },
    { name: "Meta (Facebook وInstagram)", use: "قياس أداء الإعلانات على هذا الموقع، فقط إذا سمحت بملفات تعريف الارتباط." },
    { name: "Wistia", use: "تشغيل الفيديو التوضيحي، عندما تفتحه." },
    { name: "مزود استضافة موقعنا", use: "تشغيل هذا الموقع وعرضه." },
  ],
}

const strong = "font-medium text-foreground"
const mail = <a href={`mailto:${company.email}`} dir="ltr">{company.email}</a>

function providerList(locale: Locale) {
  return (
    <ul>
      {providers[locale].map((p) => (
        <li key={p.name}>
          <strong className={strong}>{p.name}:</strong> {p.use}
        </li>
      ))}
    </ul>
  )
}

export const privacy: Record<Locale, LegalContent> = {
  en: {
    metaTitle: "Privacy Policy | TORCH by Intelligent B2B",
    metaDescription: "How TORCH by Intelligent B2B collects, uses and protects your personal data.",
    title: "Privacy Policy",
    intro: (
      <p>
        This policy explains what personal data we collect when you use the TORCH website or service, why we
        collect it, and the choices you have.
      </p>
    ),
    sections: [
      {
        title: "Who is responsible for your data",
        body: (
          <p>
            The data controller is {company.legalName}, {company.address}, VAT {company.vat}
            {company.tradeRegister ? `, Trade Register ${company.tradeRegister}` : ""}. For anything about your
            data, write to {mail}.
          </p>
        ),
      },
      {
        title: "Data we process for our clients",
        body: (
          <p>
            Businesses that use TORCH keep their own customers&apos; data in it, such as contacts and conversations.
            For that data, our clients are the controller and we process it on their behalf, under our{" "}
            <a href={localizeHref("en", "/dpa")}>Data Processing Agreement</a>. If you are a customer of one of our
            clients, please contact that business about your data.
          </p>
        ),
      },
      {
        title: "What data we collect",
        body: (
          <ul>
            <li>
              <strong className={strong}>When you book a call:</strong> your name, email, phone number, business
              name and anything you write in the booking form.
            </li>
            <li>
              <strong className={strong}>When you subscribe:</strong> your name, business and billing details. Card
              details are handled by Stripe and never reach us.
            </li>
            <li>
              <strong className={strong}>When you sign up for our newsletter:</strong> your email address.
            </li>
            <li>
              <strong className={strong}>When you contact us</strong> by email, phone or WhatsApp: your contact
              details and the messages you send.
            </li>
            <li>
              <strong className={strong}>When you browse this site:</strong> technical data such as your IP address
              and browser, and, only if you allow it, cookies that show which of our ads brought you here. See the{" "}
              <a href={localizeHref("en", "/cookie-policy")}>Cookie Policy</a>.
            </li>
          </ul>
        ),
      },
      {
        title: "Why we use it",
        body: (
          <ul>
            <li>To reply to you, run your setup call and provide the TORCH service (contract).</li>
            <li>To bill you and keep accounting records (legal obligation).</li>
            <li>To send you our newsletter, if you signed up (consent).</li>
            <li>To measure which of our ads work, if you allowed cookies (consent).</li>
            <li>To keep the website and service secure and working well (legitimate interest).</li>
          </ul>
        ),
      },
      {
        title: "Who we share it with",
        body: (
          <>
            <p>
              We never sell your data. We only share it with providers that help us run the website and the service:
            </p>
            {providerList("en")}
            <p>We may also share data with public authorities when the law requires it.</p>
          </>
        ),
      },
      {
        title: "Transfers outside the EU",
        body: (
          <p>
            Some of these providers are based in the United States. When data leaves the European Union, we rely on
            the safeguards the GDPR allows, such as the EU-US Data Privacy Framework or the European
            Commission&apos;s standard contractual clauses.
          </p>
        ),
      },
      {
        title: "How long we keep it",
        body: (
          <ul>
            <li>Booking and contact requests: up to 2 years after our last contact, unless you become a customer.</li>
            <li>Customer and billing data: for as long as you are a customer, then as long as tax law requires.</li>
            <li>Newsletter: until you unsubscribe.</li>
            <li>Cookies: see the Cookie Policy.</li>
          </ul>
        ),
      },
      {
        title: "Your rights",
        body: (
          <>
            <p>Under the GDPR you can ask us to:</p>
            <ul>
              <li>show you the data we have about you;</li>
              <li>correct or delete it;</li>
              <li>limit how we use it, or stop using it;</li>
              <li>give it to you in a portable format;</li>
              <li>withdraw your consent at any time, for example by unsubscribing or changing your cookie choice.</li>
            </ul>
            <p>
              Write to {mail} and we will reply within one month. You can also complain to a data protection
              authority: Romania&apos;s ANSPDCP, Italy&apos;s Garante per la protezione dei dati personali, or the
              authority in the country where you live.
            </p>
          </>
        ),
      },
      {
        title: "Security",
        body: (
          <p>
            We protect your data with technical and organisational measures, such as encrypted connections and
            access limited to the people who need it.
          </p>
        ),
      },
      {
        title: "Changes to this policy",
        body: <p>We may update this policy. The date at the top shows the latest version.</p>,
      },
    ],
  },

  it: {
    metaTitle: "Informativa sulla privacy | TORCH by Intelligent B2B",
    metaDescription: "Come TORCH di Intelligent B2B raccoglie, usa e protegge i Suoi dati personali.",
    title: "Informativa sulla privacy",
    intro: (
      <p>
        Questa informativa spiega quali dati personali raccogliamo quando usa il sito o il servizio TORCH, perché
        li raccogliamo e quali scelte ha a disposizione.
      </p>
    ),
    sections: [
      {
        title: "Chi è responsabile dei Suoi dati",
        body: (
          <p>
            Il titolare del trattamento è {company.legalName}, {company.address}, Partita IVA {company.vat}
            {company.tradeRegister ? `, Registro delle imprese ${company.tradeRegister}` : ""}. Per qualsiasi
            questione sui Suoi dati, scriva a {mail}.
          </p>
        ),
      },
      {
        title: "Dati che trattiamo per i nostri clienti",
        body: (
          <p>
            Le aziende che usano TORCH vi conservano i dati dei propri clienti, come contatti e conversazioni. Per
            questi dati, i nostri clienti sono titolari del trattamento e noi li trattiamo per loro conto, in base al
            nostro <a href={localizeHref("it", "/dpa")}>Accordo sul trattamento dei dati</a>. Se è cliente di uno dei
            nostri clienti, si rivolga a quell’azienda per i Suoi dati.
          </p>
        ),
      },
      {
        title: "Quali dati raccogliamo",
        body: (
          <ul>
            <li>
              <strong className={strong}>Quando prenota una chiamata:</strong> nome, email, numero di telefono, nome
              dell’attività e tutto ciò che scrive nel modulo di prenotazione.
            </li>
            <li>
              <strong className={strong}>Quando si abbona:</strong> nome, dati dell’attività e di fatturazione. I
              dati della carta sono gestiti da Stripe e non arrivano mai a noi.
            </li>
            <li>
              <strong className={strong}>Quando si iscrive alla nostra newsletter:</strong> il Suo indirizzo email.
            </li>
            <li>
              <strong className={strong}>Quando ci contatta</strong> via email, telefono o WhatsApp: i Suoi dati di
              contatto e i messaggi che invia.
            </li>
            <li>
              <strong className={strong}>Quando naviga su questo sito:</strong> dati tecnici come indirizzo IP e
              browser e, solo se lo consente, cookie che mostrano quale nostro annuncio L’ha portata qui. Veda la{" "}
              <a href={localizeHref("it", "/cookie-policy")}>Cookie Policy</a>.
            </li>
          </ul>
        ),
      },
      {
        title: "Perché li usiamo",
        body: (
          <ul>
            <li>Per risponderLe, svolgere la chiamata di configurazione e fornire il servizio TORCH (contratto).</li>
            <li>Per fatturare e tenere la contabilità (obbligo di legge).</li>
            <li>Per inviarLe la newsletter, se si è iscritto (consenso).</li>
            <li>Per misurare quali nostri annunci funzionano, se ha accettato i cookie (consenso).</li>
            <li>Per mantenere il sito e il servizio sicuri e funzionanti (legittimo interesse).</li>
          </ul>
        ),
      },
      {
        title: "Con chi li condividiamo",
        body: (
          <>
            <p>
              Non vendiamo mai i Suoi dati. Li condividiamo solo con i fornitori che ci aiutano a gestire il sito e
              il servizio:
            </p>
            {providerList("it")}
            <p>Possiamo inoltre condividere dati con le autorità pubbliche quando la legge lo richiede.</p>
          </>
        ),
      },
      {
        title: "Trasferimenti fuori dall’UE",
        body: (
          <p>
            Alcuni di questi fornitori hanno sede negli Stati Uniti. Quando i dati escono dall’Unione europea, ci
            basiamo sulle garanzie previste dal GDPR, come l’EU-US Data Privacy Framework o le clausole contrattuali
            tipo della Commissione europea.
          </p>
        ),
      },
      {
        title: "Per quanto tempo li conserviamo",
        body: (
          <ul>
            <li>
              Richieste di prenotazione e di contatto: fino a 2 anni dopo l’ultimo contatto, a meno che non diventi
              cliente.
            </li>
            <li>
              Dati dei clienti e di fatturazione: finché è cliente, poi per il tempo richiesto dalla normativa
              fiscale.
            </li>
            <li>Newsletter: fino a quando non si disiscrive.</li>
            <li>Cookie: veda la Cookie Policy.</li>
          </ul>
        ),
      },
      {
        title: "I Suoi diritti",
        body: (
          <>
            <p>In base al GDPR può chiederci di:</p>
            <ul>
              <li>mostrarLe i dati che abbiamo su di Lei;</li>
              <li>correggerli o cancellarli;</li>
              <li>limitarne l’uso o smettere di usarli;</li>
              <li>fornirglieli in un formato portabile;</li>
              <li>
                revocare il consenso in qualsiasi momento, ad esempio disiscrivendosi o cambiando la scelta sui
                cookie.
              </li>
            </ul>
            <p>
              Scriva a {mail} e Le risponderemo entro un mese. Può anche presentare reclamo a un’autorità per la
              protezione dei dati: l’ANSPDCP in Romania, il Garante per la protezione dei dati personali in Italia o
              l’autorità del Paese in cui vive.
            </p>
          </>
        ),
      },
      {
        title: "Sicurezza",
        body: (
          <p>
            Proteggiamo i Suoi dati con misure tecniche e organizzative, come connessioni cifrate e accesso limitato
            alle persone che ne hanno bisogno.
          </p>
        ),
      },
      {
        title: "Modifiche a questa informativa",
        body: <p>Possiamo aggiornare questa informativa. La data in alto indica la versione più recente.</p>,
      },
    ],
  },

  fr: {
    metaTitle: "Politique de confidentialité | TORCH by Intelligent B2B",
    metaDescription: "Comment TORCH par Intelligent B2B collecte, utilise et protège vos données personnelles.",
    title: "Politique de confidentialité",
    intro: (
      <p>
        Cette politique explique quelles données personnelles nous collectons lorsque vous utilisez le site ou le
        service TORCH, pourquoi nous les collectons et les choix dont vous disposez.
      </p>
    ),
    sections: [
      {
        title: "Qui est responsable de vos données",
        body: (
          <p>
            Le responsable du traitement est {company.legalName}, {company.address}, TVA {company.vat}
            {company.tradeRegister ? `, Registre du commerce ${company.tradeRegister}` : ""}. Pour toute question
            sur vos données, écrivez à {mail}.
          </p>
        ),
      },
      {
        title: "Données que nous traitons pour nos clients",
        body: (
          <p>
            Les entreprises qui utilisent TORCH y conservent les données de leurs propres clients, comme des
            contacts et des conversations. Pour ces données, nos clients sont responsables du traitement et nous les
            traitons pour leur compte, dans le cadre de notre{" "}
            <a href={localizeHref("fr", "/dpa")}>Accord de traitement des données</a>. Si vous êtes client de l’un de
            nos clients, veuillez contacter cette entreprise au sujet de vos données.
          </p>
        ),
      },
      {
        title: "Les données que nous collectons",
        body: (
          <ul>
            <li>
              <strong className={strong}>Lorsque vous réservez un appel :</strong> votre nom, votre e-mail, votre
              numéro de téléphone, le nom de votre entreprise et tout ce que vous écrivez dans le formulaire de
              réservation.
            </li>
            <li>
              <strong className={strong}>Lorsque vous vous abonnez :</strong> votre nom, les informations de votre
              entreprise et de facturation. Les données de carte sont traitées par Stripe et ne nous parviennent
              jamais.
            </li>
            <li>
              <strong className={strong}>Lorsque vous vous inscrivez à notre newsletter :</strong> votre adresse
              e-mail.
            </li>
            <li>
              <strong className={strong}>Lorsque vous nous contactez</strong> par e-mail, téléphone ou WhatsApp : vos
              coordonnées et les messages que vous envoyez.
            </li>
            <li>
              <strong className={strong}>Lorsque vous naviguez sur ce site :</strong> des données techniques comme
              votre adresse IP et votre navigateur et, uniquement si vous l’acceptez, des cookies qui indiquent
              laquelle de nos publicités vous a amené ici. Voir la{" "}
              <a href={localizeHref("fr", "/cookie-policy")}>Politique cookies</a>.
            </li>
          </ul>
        ),
      },
      {
        title: "Pourquoi nous les utilisons",
        body: (
          <ul>
            <li>Pour vous répondre, mener votre appel de configuration et fournir le service TORCH (contrat).</li>
            <li>Pour vous facturer et tenir notre comptabilité (obligation légale).</li>
            <li>Pour vous envoyer notre newsletter, si vous vous êtes inscrit (consentement).</li>
            <li>Pour mesurer lesquelles de nos publicités fonctionnent, si vous avez accepté les cookies (consentement).</li>
            <li>Pour garder le site et le service sécurisés et en bon état de fonctionnement (intérêt légitime).</li>
          </ul>
        ),
      },
      {
        title: "Avec qui nous les partageons",
        body: (
          <>
            <p>
              Nous ne vendons jamais vos données. Nous les partageons uniquement avec les prestataires qui nous aident
              à faire fonctionner le site et le service :
            </p>
            {providerList("fr")}
            <p>Nous pouvons aussi partager des données avec les autorités publiques lorsque la loi l’exige.</p>
          </>
        ),
      },
      {
        title: "Transferts hors de l’UE",
        body: (
          <p>
            Certains de ces prestataires sont établis aux États-Unis. Lorsque des données quittent l’Union
            européenne, nous nous appuyons sur les garanties prévues par le RGPD, comme le EU-US Data Privacy
            Framework ou les clauses contractuelles types de la Commission européenne.
          </p>
        ),
      },
      {
        title: "Durée de conservation",
        body: (
          <ul>
            <li>
              Demandes de réservation et de contact : jusqu’à 2 ans après notre dernier contact, sauf si vous devenez
              client.
            </li>
            <li>
              Données clients et de facturation : tant que vous êtes client, puis aussi longtemps que la loi fiscale
              l’exige.
            </li>
            <li>Newsletter : jusqu’à votre désinscription.</li>
            <li>Cookies : voir la Politique cookies.</li>
          </ul>
        ),
      },
      {
        title: "Vos droits",
        body: (
          <>
            <p>En vertu du RGPD, vous pouvez nous demander de :</p>
            <ul>
              <li>vous montrer les données que nous détenons sur vous ;</li>
              <li>les corriger ou les supprimer ;</li>
              <li>limiter leur utilisation, ou cesser de les utiliser ;</li>
              <li>vous les remettre dans un format portable ;</li>
              <li>
                retirer votre consentement à tout moment, par exemple en vous désinscrivant ou en modifiant votre
                choix concernant les cookies.
              </li>
            </ul>
            <p>
              Écrivez à {mail} et nous vous répondrons dans un délai d’un mois. Vous pouvez aussi déposer une plainte
              auprès d’une autorité de protection des données : l’ANSPDCP en Roumanie, le Garante per la protezione
              dei dati personali en Italie, ou l’autorité du pays où vous vivez.
            </p>
          </>
        ),
      },
      {
        title: "Sécurité",
        body: (
          <p>
            Nous protégeons vos données par des mesures techniques et organisationnelles, comme des connexions
            chiffrées et un accès limité aux personnes qui en ont besoin.
          </p>
        ),
      },
      {
        title: "Modifications de cette politique",
        body: (
          <p>
            Nous pouvons mettre à jour cette politique. La date en haut de la page indique la dernière version.
          </p>
        ),
      },
    ],
  },

  ar: {
    metaTitle: "سياسة الخصوصية | TORCH by Intelligent B2B",
    metaDescription: "كيف تجمع TORCH من Intelligent B2B بياناتك الشخصية وتستخدمها وتحميها.",
    title: "سياسة الخصوصية",
    intro: (
      <p>
        توضح هذه السياسة البيانات الشخصية التي نجمعها عند استخدامك لموقع TORCH أو خدمتها، وسبب جمعها، والخيارات
        المتاحة لك.
      </p>
    ),
    sections: [
      {
        title: "المسؤول عن بياناتك",
        body: (
          <p>
            المتحكم في البيانات هو {company.legalName}، {company.address}، رقم ضريبة القيمة المضافة {company.vat}
            {company.tradeRegister ? `، السجل التجاري ${company.tradeRegister}` : ""}. لأي أمر يتعلق ببياناتك،
            راسلنا على {mail}.
          </p>
        ),
      },
      {
        title: "البيانات التي نعالجها لصالح عملائنا",
        body: (
          <p>
            تحفظ الشركات التي تستخدم TORCH بيانات عملائها فيها، مثل جهات الاتصال والمحادثات. بالنسبة لهذه
            البيانات، يكون عملاؤنا هم المتحكمين فيها ونحن نعالجها نيابةً عنهم، وفقًا{" "}
            <a href={localizeHref("ar", "/dpa")}>لاتفاقية معالجة البيانات</a> الخاصة بنا. إذا كنت عميلًا لدى أحد
            عملائنا، فيُرجى التواصل مع تلك الشركة بشأن بياناتك.
          </p>
        ),
      },
      {
        title: "البيانات التي نجمعها",
        body: (
          <ul>
            <li>
              <strong className={strong}>عند حجز مكالمة:</strong> اسمك وبريدك الإلكتروني ورقم هاتفك واسم نشاطك
              التجاري وأي شيء تكتبه في نموذج الحجز.
            </li>
            <li>
              <strong className={strong}>عند الاشتراك:</strong> اسمك وبيانات نشاطك التجاري وبيانات الفوترة. تتولى
              Stripe التعامل مع بيانات البطاقة ولا تصل إلينا أبدًا.
            </li>
            <li>
              <strong className={strong}>عند الاشتراك في نشرتنا الإخبارية:</strong> عنوان بريدك الإلكتروني.
            </li>
            <li>
              <strong className={strong}>عند التواصل معنا</strong> عبر البريد الإلكتروني أو الهاتف أو WhatsApp:
              بيانات الاتصال الخاصة بك والرسائل التي ترسلها.
            </li>
            <li>
              <strong className={strong}>عند تصفح هذا الموقع:</strong> بيانات تقنية مثل عنوان IP والمتصفح، وفقط إذا
              سمحت بذلك، ملفات تعريف الارتباط التي تبيّن أيًّا من إعلاناتنا أوصلك إلى هنا. راجع{" "}
              <a href={localizeHref("ar", "/cookie-policy")}>سياسة ملفات تعريف الارتباط</a>.
            </li>
          </ul>
        ),
      },
      {
        title: "لماذا نستخدمها",
        body: (
          <ul>
            <li>للرد عليك، وإجراء مكالمة الإعداد، وتقديم خدمة TORCH (العقد).</li>
            <li>لإصدار الفواتير والاحتفاظ بالسجلات المحاسبية (التزام قانوني).</li>
            <li>لإرسال نشرتنا الإخبارية إليك، إذا اشتركت فيها (الموافقة).</li>
            <li>لقياس أيّ إعلاناتنا ينجح، إذا سمحت بملفات تعريف الارتباط (الموافقة).</li>
            <li>للحفاظ على أمان الموقع والخدمة وحسن عملهما (المصلحة المشروعة).</li>
          </ul>
        ),
      },
      {
        title: "مع من نشاركها",
        body: (
          <>
            <p>لا نبيع بياناتك أبدًا. ولا نشاركها إلا مع المزودين الذين يساعدوننا في تشغيل الموقع والخدمة:</p>
            {providerList("ar")}
            <p>وقد نشارك البيانات أيضًا مع السلطات العامة عندما يقتضي القانون ذلك.</p>
          </>
        ),
      },
      {
        title: "النقل خارج الاتحاد الأوروبي",
        body: (
          <p>
            يقع مقر بعض هؤلاء المزودين في الولايات المتحدة. عندما تُنقل البيانات خارج الاتحاد الأوروبي، نعتمد على
            الضمانات التي تسمح بها اللائحة العامة لحماية البيانات (GDPR)، مثل إطار خصوصية البيانات بين الاتحاد
            الأوروبي والولايات المتحدة (EU-US Data Privacy Framework) أو البنود التعاقدية النموذجية الصادرة عن
            المفوضية الأوروبية.
          </p>
        ),
      },
      {
        title: "مدة الاحتفاظ بها",
        body: (
          <ul>
            <li>طلبات الحجز والتواصل: حتى سنتين بعد آخر تواصل بيننا، ما لم تصبح عميلًا.</li>
            <li>بيانات العملاء والفوترة: طوال مدة كونك عميلًا، ثم للمدة التي يفرضها قانون الضرائب.</li>
            <li>النشرة الإخبارية: إلى أن تلغي اشتراكك.</li>
            <li>ملفات تعريف الارتباط: راجع سياسة ملفات تعريف الارتباط.</li>
          </ul>
        ),
      },
      {
        title: "حقوقك",
        body: (
          <>
            <p>بموجب اللائحة العامة لحماية البيانات (GDPR) يمكنك أن تطلب منا:</p>
            <ul>
              <li>أن نُطلعك على البيانات التي نحتفظ بها عنك؛</li>
              <li>تصحيحها أو حذفها؛</li>
              <li>تقييد طريقة استخدامنا لها، أو التوقف عن استخدامها؛</li>
              <li>تسليمها إليك بصيغة قابلة للنقل؛</li>
              <li>سحب موافقتك في أي وقت، مثلًا بإلغاء الاشتراك أو تغيير اختيارك بشأن ملفات تعريف الارتباط.</li>
            </ul>
            <p>
              راسلنا على {mail} وسنرد عليك خلال شهر واحد. ويمكنك أيضًا تقديم شكوى إلى سلطة حماية البيانات: هيئة
              ANSPDCP في رومانيا، أو هيئة Garante per la protezione dei dati personali في إيطاليا، أو السلطة المختصة في
              البلد الذي تعيش فيه.
            </p>
          </>
        ),
      },
      {
        title: "الأمان",
        body: (
          <p>
            نحمي بياناتك بتدابير تقنية وتنظيمية، مثل الاتصالات المشفرة وحصر الوصول في الأشخاص الذين يحتاجون إليه.
          </p>
        ),
      },
      {
        title: "تغييرات هذه السياسة",
        body: <p>يجوز لنا تحديث هذه السياسة. يبيّن التاريخ في أعلى الصفحة أحدث نسخة.</p>,
      },
    ],
  },
}

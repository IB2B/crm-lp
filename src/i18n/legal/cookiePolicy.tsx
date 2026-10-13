// TODO(ib2b): translations need review by a native speaker and the lawyer, like the English.
// TODO(ib2b): have a lawyer or DPO review this text before launch. Keep the table in line with
// what the site really loads (src/components/analytics, src/components/landing/demo-video.tsx).
import type { LegalContent } from "@/components/legal-page"
import { CookieSettingsButton } from "@/components/cookie-banner"
import { localizeHref, type Locale } from "@/i18n/config"

type CookieRow = { name: string; provider: string; purpose: string; duration: string; type: string }
type TableHead = { name: string; provider: string; purpose: string; duration: string; type: string }

const cookies: Record<Locale, CookieRow[]> = {
  en: [
    {
      name: "torch-cookie-consent",
      provider: "TORCH",
      purpose: "Remembers whether you allowed or refused cookies, so we don't ask again.",
      duration: "Until you clear it",
      type: "Necessary",
    },
    {
      name: "_fbp",
      provider: "Meta",
      purpose: "Shows which of our Facebook and Instagram ads brought you here.",
      duration: "3 months",
      type: "Marketing",
    },
    { name: "fr", provider: "Meta", purpose: "Used by Meta to measure and improve ads.", duration: "3 months", type: "Marketing" },
  ],
  it: [
    {
      name: "torch-cookie-consent",
      provider: "TORCH",
      purpose: "Ricorda se ha accettato o rifiutato i cookie, così non glielo chiediamo di nuovo.",
      duration: "Finché non lo cancella",
      type: "Necessario",
    },
    {
      name: "_fbp",
      provider: "Meta",
      purpose: "Mostra quale nostro annuncio su Facebook o Instagram L’ha portata qui.",
      duration: "3 mesi",
      type: "Marketing",
    },
    {
      name: "fr",
      provider: "Meta",
      purpose: "Usato da Meta per misurare e migliorare gli annunci.",
      duration: "3 mesi",
      type: "Marketing",
    },
  ],
  fr: [
    {
      name: "torch-cookie-consent",
      provider: "TORCH",
      purpose: "Retient si vous avez accepté ou refusé les cookies, pour ne pas vous le redemander.",
      duration: "Jusqu’à ce que vous l’effaciez",
      type: "Nécessaire",
    },
    {
      name: "_fbp",
      provider: "Meta",
      purpose: "Indique laquelle de nos publicités Facebook et Instagram vous a amené ici.",
      duration: "3 mois",
      type: "Marketing",
    },
    {
      name: "fr",
      provider: "Meta",
      purpose: "Utilisé par Meta pour mesurer et améliorer les publicités.",
      duration: "3 mois",
      type: "Marketing",
    },
  ],
  ar: [
    {
      name: "torch-cookie-consent",
      provider: "TORCH",
      purpose: "يتذكر ما إذا كنت قد سمحت بملفات تعريف الارتباط أو رفضتها، حتى لا نسألك مرة أخرى.",
      duration: "إلى أن تحذفه",
      type: "ضروري",
    },
    {
      name: "_fbp",
      provider: "Meta",
      purpose: "يبيّن أيًّا من إعلاناتنا على Facebook وInstagram أوصلك إلى هنا.",
      duration: "3 أشهر",
      type: "تسويقي",
    },
    {
      name: "fr",
      provider: "Meta",
      purpose: "تستخدمه Meta لقياس الإعلانات وتحسينها.",
      duration: "3 أشهر",
      type: "تسويقي",
    },
  ],
}

const heads: Record<Locale, TableHead> = {
  en: { name: "Name", provider: "Provider", purpose: "Purpose", duration: "Kept for", type: "Type" },
  it: { name: "Nome", provider: "Fornitore", purpose: "Scopo", duration: "Durata", type: "Tipo" },
  fr: { name: "Nom", provider: "Fournisseur", purpose: "Finalité", duration: "Durée", type: "Type" },
  ar: { name: "الاسم", provider: "المزود", purpose: "الغرض", duration: "مدة الاحتفاظ", type: "النوع" },
}

/** Label for the "Cookie settings" button in each language. */
const cookieSettingsLabel: Record<Locale, string> = {
  en: "Cookie settings",
  it: "Impostazioni cookie",
  fr: "Paramètres des cookies",
  ar: "إعدادات ملفات تعريف الارتباط",
}

function cookieTable(locale: Locale) {
  const h = heads[locale]
  return (
    <div className="-mx-1 overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-start text-sm">
        <thead>
          <tr className="border-b text-foreground">
            <th className="py-2 pe-4 text-start font-medium">{h.name}</th>
            <th className="py-2 pe-4 text-start font-medium">{h.provider}</th>
            <th className="py-2 pe-4 text-start font-medium">{h.purpose}</th>
            <th className="py-2 pe-4 text-start font-medium">{h.duration}</th>
            <th className="py-2 text-start font-medium">{h.type}</th>
          </tr>
        </thead>
        <tbody>
          {cookies[locale].map((c) => (
            <tr key={c.name} className="border-b align-top">
              <td className="py-2.5 pe-4 font-mono text-xs text-foreground" dir="ltr">
                {c.name}
              </td>
              <td className="py-2.5 pe-4">{c.provider}</td>
              <td className="py-2.5 pe-4">{c.purpose}</td>
              <td className="py-2.5 pe-4 whitespace-nowrap">{c.duration}</td>
              <td className="py-2.5">{c.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const buttonClass =
  "inline-flex h-10 cursor-pointer items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"

function settingsButton(locale: Locale) {
  return <CookieSettingsButton className={buttonClass} label={cookieSettingsLabel[locale]} />
}

const code = (name: string) => (
  <code className="font-mono text-xs" dir="ltr">
    {name}
  </code>
)

export const cookiePolicy: Record<Locale, LegalContent> = {
  en: {
    metaTitle: "Cookie Policy | TORCH by Intelligent B2B",
    metaDescription: "Which cookies the TORCH website uses and how to change your choice.",
    title: "Cookie Policy",
    intro: (
      <p>This page explains which cookies the TORCH website uses, why, and how you can change your choice.</p>
    ),
    sections: [
      {
        title: "What cookies are",
        body: (
          <p>
            Cookies are small files a website stores in your browser. Some are needed for the site to work. Others
            help a business understand its visitors, and these need your permission.
          </p>
        ),
      },
      {
        title: "The cookies we use",
        body: (
          <>
            <p>
              Marketing cookies are only set after you click &quot;Allow&quot;. If you click &quot;No thanks&quot;,
              none are set.
            </p>
            {cookieTable("en")}
            <p>
              {code("torch-cookie-consent")} is stored in your browser&apos;s local storage rather than as a cookie,
              and never leaves your device.
            </p>
          </>
        ),
      },
      {
        title: "Demo video and booking calendar",
        body: (
          <p>
            Our demo video is played by Wistia, and only loads when you click &quot;Watch the demo&quot;. Our booking
            calendar is run by GoHighLevel (LeadConnector) and opens on their site. These providers may use their
            own cookies, as described in their own policies.
          </p>
        ),
      },
      {
        title: "Changing your choice",
        body: (
          <>
            <p>
              You can change your mind at any time. Use the button below, or the &quot;Cookie settings&quot; link at
              the bottom of every page, to bring back the cookie choice.
            </p>
            {settingsButton("en")}
            <p>You can also delete or block cookies in your browser settings.</p>
          </>
        ),
      },
      {
        title: "More information",
        body: (
          <p>
            To learn how we handle personal data, read our{" "}
            <a href={localizeHref("en", "/privacy")}>Privacy Policy</a>.
          </p>
        ),
      },
    ],
  },

  it: {
    metaTitle: "Cookie Policy | TORCH by Intelligent B2B",
    metaDescription: "Quali cookie usa il sito TORCH e come cambiare la Sua scelta.",
    title: "Cookie Policy",
    intro: (
      <p>Questa pagina spiega quali cookie usa il sito TORCH, perché, e come può cambiare la Sua scelta.</p>
    ),
    sections: [
      {
        title: "Cosa sono i cookie",
        body: (
          <p>
            I cookie sono piccoli file che un sito salva nel Suo browser. Alcuni sono necessari per il funzionamento
            del sito. Altri aiutano un’azienda a capire i propri visitatori, e questi richiedono il Suo consenso.
          </p>
        ),
      },
      {
        title: "I cookie che usiamo",
        body: (
          <>
            <p>
              I cookie di marketing vengono impostati solo dopo che ha cliccato «Accetta». Se clicca «No, grazie», non
              ne viene impostato nessuno.
            </p>
            {cookieTable("it")}
            <p>
              {code("torch-cookie-consent")} è salvato nella memoria locale (local storage) del Suo browser e non come
              cookie, e non lascia mai il Suo dispositivo.
            </p>
          </>
        ),
      },
      {
        title: "Video demo e calendario di prenotazione",
        body: (
          <p>
            Il nostro video demo è riprodotto da Wistia e si carica solo quando clicca «Guarda la demo». Il nostro
            calendario di prenotazione è gestito da GoHighLevel (LeadConnector) e si apre sul loro sito. Questi
            fornitori possono usare i propri cookie, come descritto nelle loro informative.
          </p>
        ),
      },
      {
        title: "Cambiare la Sua scelta",
        body: (
          <>
            <p>
              Può cambiare idea in qualsiasi momento. Usi il pulsante qui sotto, o il link «Impostazioni cookie» in
              fondo a ogni pagina, per far ricomparire la scelta sui cookie.
            </p>
            {settingsButton("it")}
            <p>Può anche cancellare o bloccare i cookie nelle impostazioni del Suo browser.</p>
          </>
        ),
      },
      {
        title: "Ulteriori informazioni",
        body: (
          <p>
            Per sapere come trattiamo i dati personali, legga la nostra{" "}
            <a href={localizeHref("it", "/privacy")}>Privacy Policy</a>.
          </p>
        ),
      },
    ],
  },

  fr: {
    metaTitle: "Politique cookies | TORCH by Intelligent B2B",
    metaDescription: "Les cookies utilisés par le site TORCH et comment modifier votre choix.",
    title: "Politique cookies",
    intro: (
      <p>
        Cette page explique quels cookies le site TORCH utilise, pourquoi, et comment vous pouvez modifier votre
        choix.
      </p>
    ),
    sections: [
      {
        title: "Qu’est-ce qu’un cookie",
        body: (
          <p>
            Les cookies sont de petits fichiers qu’un site enregistre dans votre navigateur. Certains sont
            nécessaires au fonctionnement du site. D’autres aident une entreprise à comprendre ses visiteurs, et
            ceux-là nécessitent votre accord.
          </p>
        ),
      },
      {
        title: "Les cookies que nous utilisons",
        body: (
          <>
            <p>
              Les cookies marketing ne sont déposés qu’après avoir cliqué sur « Accepter ». Si vous cliquez sur « Non
              merci », aucun n’est déposé.
            </p>
            {cookieTable("fr")}
            <p>
              {code("torch-cookie-consent")} est enregistré dans le stockage local de votre navigateur plutôt que sous
              forme de cookie, et ne quitte jamais votre appareil.
            </p>
          </>
        ),
      },
      {
        title: "Vidéo de démonstration et agenda de réservation",
        body: (
          <p>
            Notre vidéo de démonstration est lue par Wistia et ne se charge que lorsque vous cliquez sur « Voir la
            démo ». Notre agenda de réservation est géré par GoHighLevel (LeadConnector) et s’ouvre sur leur site.
            Ces prestataires peuvent utiliser leurs propres cookies, comme décrit dans leurs propres politiques.
          </p>
        ),
      },
      {
        title: "Modifier votre choix",
        body: (
          <>
            <p>
              Vous pouvez changer d’avis à tout moment. Utilisez le bouton ci-dessous, ou le lien « Paramètres des
              cookies » en bas de chaque page, pour faire réapparaître le choix des cookies.
            </p>
            {settingsButton("fr")}
            <p>Vous pouvez aussi supprimer ou bloquer les cookies dans les paramètres de votre navigateur.</p>
          </>
        ),
      },
      {
        title: "Plus d’informations",
        body: (
          <p>
            Pour savoir comment nous traitons les données personnelles, lisez notre{" "}
            <a href={localizeHref("fr", "/privacy")}>Politique de confidentialité</a>.
          </p>
        ),
      },
    ],
  },

  ar: {
    metaTitle: "سياسة ملفات تعريف الارتباط | TORCH by Intelligent B2B",
    metaDescription: "ملفات تعريف الارتباط التي يستخدمها موقع TORCH وكيفية تغيير اختيارك.",
    title: "سياسة ملفات تعريف الارتباط",
    intro: (
      <p>
        توضح هذه الصفحة ملفات تعريف الارتباط (الكوكيز) التي يستخدمها موقع TORCH، وسبب استخدامها، وكيف يمكنك تغيير
        اختيارك.
      </p>
    ),
    sections: [
      {
        title: "ما هي ملفات تعريف الارتباط",
        body: (
          <p>
            ملفات تعريف الارتباط ملفات صغيرة يحفظها الموقع في متصفحك. بعضها ضروري لعمل الموقع. وبعضها الآخر يساعد
            الشركة على فهم زوارها، وهذه تحتاج إلى موافقتك.
          </p>
        ),
      },
      {
        title: "ملفات تعريف الارتباط التي نستخدمها",
        body: (
          <>
            <p>
              لا تُضبط ملفات تعريف الارتباط التسويقية إلا بعد أن تنقر على «السماح». وإذا نقرت على «لا، شكرًا»، فلن
              يُضبط أي منها.
            </p>
            {cookieTable("ar")}
            <p>
              يُحفظ {code("torch-cookie-consent")} في التخزين المحلي لمتصفحك وليس كملف تعريف ارتباط، ولا يغادر جهازك
              أبدًا.
            </p>
          </>
        ),
      },
      {
        title: "الفيديو التوضيحي وتقويم الحجز",
        body: (
          <p>
            يُشغَّل الفيديو التوضيحي عبر Wistia، ولا يُحمَّل إلا عندما تنقر على «شاهد العرض». ويُدار تقويم الحجز لدينا
            بواسطة GoHighLevel (LeadConnector) ويُفتح على موقعهم. قد يستخدم هؤلاء المزودون ملفات تعريف الارتباط
            الخاصة بهم، كما هو موضح في سياساتهم.
          </p>
        ),
      },
      {
        title: "تغيير اختيارك",
        body: (
          <>
            <p>
              يمكنك تغيير رأيك في أي وقت. استخدم الزر أدناه، أو رابط «إعدادات ملفات تعريف الارتباط» أسفل كل صفحة،
              لإظهار خيار ملفات تعريف الارتباط من جديد.
            </p>
            {settingsButton("ar")}
            <p>ويمكنك أيضًا حذف ملفات تعريف الارتباط أو حظرها من إعدادات متصفحك.</p>
          </>
        ),
      },
      {
        title: "مزيد من المعلومات",
        body: (
          <p>
            لمعرفة كيف نتعامل مع البيانات الشخصية، اقرأ{" "}
            <a href={localizeHref("ar", "/privacy")}>سياسة الخصوصية</a> الخاصة بنا.
          </p>
        ),
      },
    ],
  },
}

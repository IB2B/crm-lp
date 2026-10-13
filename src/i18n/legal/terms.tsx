// TODO(ib2b): translations need review by a native speaker and the lawyer, like the English.
// TODO(ib2b): have a lawyer review this text before launch.
import type { LegalContent } from "@/components/legal-page"
import { company } from "@/content/site"
import { trialDays } from "@/content/pricing"
import { localizeHref, type Locale } from "@/i18n/config"

export const terms: Record<Locale, LegalContent> = {
  en: {
    metaTitle: "Terms and Conditions | TORCH by Intelligent B2B",
    metaDescription: "The terms for using the TORCH website and subscribing to TORCH.",
    title: "Terms and Conditions",
    intro: (
      <p>
        These terms explain how TORCH works when you use this website or subscribe to a plan. Please read them
        before you start a free trial.
      </p>
    ),
    sections: [
      {
        title: "Who we are",
        body: (
          <p>
            TORCH is a service of {company.legalName}, {company.address}, VAT {company.vat}
            {company.tradeRegister ? `, Trade Register ${company.tradeRegister}` : ""} (&quot;we&quot;,
            &quot;us&quot;). These terms apply to this website and to every TORCH subscription.
          </p>
        ),
      },
      {
        title: "Business customers only",
        body: (
          <p>
            TORCH is for business customers only, not consumers. By subscribing, you confirm that you are acting
            for your business, trade or profession.
          </p>
        ),
      },
      {
        title: "The service",
        body: (
          <>
            <p>
              TORCH is a customer management platform for businesses. It includes tools to capture leads, reply to
              messages, book appointments, send campaigns, request reviews and build websites. Our team sets up
              your account for you.
            </p>
            <p>
              TORCH is built on software from third-party providers. We may improve, change or replace features
              over time, as long as the service you pay for keeps working as described.
            </p>
          </>
        ),
      },
      {
        title: "Free trial",
        body: (
          <p>
            New customers can try TORCH free for {trialDays} days. We email you a reminder 3 days before your free
            trial ends. If you cancel before the trial ends, you pay nothing. If you don&apos;t cancel, your chosen
            plan starts when the trial ends and is billed as described below.
          </p>
        ),
      },
      {
        title: "Prices and payment",
        body: (
          <ul>
            <li>Prices are shown in euro and exclude VAT (IVA), which is added where it applies.</li>
            <li>Plans are billed monthly or yearly, in advance, through our payment provider (Stripe).</li>
            <li>
              SMS, phone calls, WhatsApp messages and AI usage may be billed separately, based on how much you use.
            </li>
            <li>If a payment fails, we may pause your account until it is settled.</li>
            <li>We will tell you at least 30 days before any price change for your plan.</li>
          </ul>
        ),
      },
      {
        title: "Cancelling and refunds",
        body: (
          <>
            <p>
              There is no long-term contract. You can cancel any time by writing to {company.email}. Your plan stays
              active until the end of the period you already paid for, and is not renewed after that.
            </p>
            <p>
              We do not offer refunds, including for monthly or yearly periods that have already started. Use the
              free trial to decide whether TORCH is right for your business.
            </p>
            <p>After you cancel, you can export your data for 30 days. Then we delete it.</p>
          </>
        ),
      },
      {
        title: "Your account and your data",
        body: (
          <>
            <p>
              You are responsible for your account, your logins and what your team does with them. Your contacts,
              messages and other content stay yours. We only use them to run the service for you.
            </p>
            <p>
              When you use TORCH to contact your own customers, you are responsible for having their permission and
              for following the rules that apply to your messages, including privacy and marketing laws.
            </p>
          </>
        ),
      },
      {
        title: "Reselling TORCH (Agency plan)",
        body: (
          <>
            <p>
              On the Agency plan you can offer TORCH to your own clients under your own brand. When you do, you are
              responsible for:
            </p>
            <ul>
              <li>your clients and your agreements with them, including your prices and billing;</li>
              <li>supporting your clients. We support you, the agency, not your clients directly;</li>
              <li>
                your clients&apos; data, including having the right to process it and signing your own data
                processing agreements with them;
              </li>
              <li>making sure your clients follow these terms.</li>
            </ul>
          </>
        ),
      },
      {
        title: "Fair use",
        body: (
          <>
            <p>You agree not to use TORCH to:</p>
            <ul>
              <li>send spam or messages people did not agree to receive;</li>
              <li>break the law or the rules of WhatsApp, Meta, Google or other connected platforms;</li>
              <li>harm, copy or try to break into the service or other customers&apos; accounts.</li>
            </ul>
            <p>We may suspend accounts that do this, after telling you why whenever we can.</p>
          </>
        ),
      },
      {
        title: "Data Processing Agreement",
        body: (
          <p>
            When you keep your own customers&apos; personal data in TORCH, we process it on your behalf, as your
            processor. Our <a href={localizeHref("en", "/dpa")}>Data Processing Agreement</a> is part of these terms
            and explains how we handle that data.
          </p>
        ),
      },
      {
        title: "Availability and liability",
        body: (
          <>
            <p>
              We work to keep TORCH available and running well, but we cannot promise it will never be interrupted,
              for example during maintenance or problems at a provider.
            </p>
            <p>
              As far as the law allows, we are not liable for indirect losses such as lost profit or lost business,
              and our total liability is limited to what you paid us in the 12 months before the problem.
            </p>
          </>
        ),
      },
      {
        title: "Changes to these terms",
        body: (
          <p>
            We may update these terms. The date at the top shows the latest version. For important changes, we will
            tell active customers by email before they take effect.
          </p>
        ),
      },
      {
        title: "Law and disputes",
        body: (
          <p>
            These terms are governed by Romanian law. If we cannot solve a disagreement together, it will be handled
            by the competent courts of Bucharest, Romania.
          </p>
        ),
      },
    ],
  },

  it: {
    metaTitle: "Termini e condizioni | TORCH by Intelligent B2B",
    metaDescription: "Le condizioni per usare il sito TORCH e per abbonarsi a TORCH.",
    title: "Termini e condizioni",
    intro: (
      <p>
        Questi termini spiegano come funziona TORCH quando usa questo sito o si abbona a un piano. La preghiamo di
        leggerli prima di iniziare la prova gratuita.
      </p>
    ),
    sections: [
      {
        title: "Chi siamo",
        body: (
          <p>
            TORCH è un servizio di {company.legalName}, {company.address}, Partita IVA {company.vat}
            {company.tradeRegister ? `, Registro delle imprese ${company.tradeRegister}` : ""} («noi»). Questi
            termini si applicano a questo sito e a ogni abbonamento TORCH.
          </p>
        ),
      },
      {
        title: "Solo clienti business",
        body: (
          <p>
            TORCH è riservato ai clienti business, non ai consumatori. Abbonandosi, conferma di agire per la Sua
            impresa, attività commerciale o professione.
          </p>
        ),
      },
      {
        title: "Il servizio",
        body: (
          <>
            <p>
              TORCH è una piattaforma di gestione clienti per le aziende. Include strumenti per acquisire contatti,
              rispondere ai messaggi, fissare appuntamenti, inviare campagne, chiedere recensioni e creare siti web.
              Il nostro team configura l’account per Lei.
            </p>
            <p>
              TORCH è basato su software di fornitori terzi. Possiamo migliorare, modificare o sostituire le
              funzioni nel tempo, purché il servizio che paga continui a funzionare come descritto.
            </p>
          </>
        ),
      },
      {
        title: "Prova gratuita",
        body: (
          <p>
            I nuovi clienti possono provare TORCH gratis per {trialDays} giorni. Le inviamo un promemoria via email
            3 giorni prima della fine della prova gratuita. Se disdice prima della fine della prova, non paga nulla.
            Se non disdice, il piano scelto parte alla fine della prova e viene fatturato come descritto qui sotto.
          </p>
        ),
      },
      {
        title: "Prezzi e pagamento",
        body: (
          <ul>
            <li>I prezzi sono indicati in euro e non includono l’IVA, che viene aggiunta dove si applica.</li>
            <li>
              I piani sono fatturati mensilmente o annualmente, in anticipo, tramite il nostro fornitore di
              pagamenti (Stripe).
            </li>
            <li>
              SMS, chiamate, messaggi WhatsApp e uso dell’IA possono essere fatturati a parte, in base al consumo.
            </li>
            <li>Se un pagamento non va a buon fine, possiamo sospendere l’account finché non viene saldato.</li>
            <li>La avviseremo almeno 30 giorni prima di qualsiasi variazione di prezzo del Suo piano.</li>
          </ul>
        ),
      },
      {
        title: "Disdetta e rimborsi",
        body: (
          <>
            <p>
              Non c’è alcun contratto a lungo termine. Può disdire in qualsiasi momento scrivendo a {company.email}.
              Il piano resta attivo fino alla fine del periodo già pagato e poi non viene rinnovato.
            </p>
            <p>
              Non offriamo rimborsi, nemmeno per periodi mensili o annuali già iniziati. Usi la prova gratuita per
              decidere se TORCH è adatto alla Sua attività.
            </p>
            <p>Dopo la disdetta, può esportare i Suoi dati per 30 giorni. Dopodiché li cancelliamo.</p>
          </>
        ),
      },
      {
        title: "Il Suo account e i Suoi dati",
        body: (
          <>
            <p>
              È responsabile del Suo account, delle credenziali di accesso e di ciò che il Suo team fa con esse. I
              Suoi contatti, messaggi e altri contenuti restano Suoi. Li usiamo solo per fornirLe il servizio.
            </p>
            <p>
              Quando usa TORCH per contattare i Suoi clienti, è responsabile di avere il loro consenso e di
              rispettare le regole che si applicano ai Suoi messaggi, comprese le leggi su privacy e marketing.
            </p>
          </>
        ),
      },
      {
        title: "Rivendere TORCH (piano Agency)",
        body: (
          <>
            <p>
              Con il piano Agency può offrire TORCH ai Suoi clienti con il Suo marchio. In questo caso è
              responsabile:
            </p>
            <ul>
              <li>dei Suoi clienti e degli accordi con loro, compresi i Suoi prezzi e la fatturazione;</li>
              <li>dell’assistenza ai Suoi clienti. Noi assistiamo Lei, l’agenzia, non direttamente i Suoi clienti;</li>
              <li>
                dei dati dei Suoi clienti, compreso il diritto di trattarli e la firma dei Suoi accordi sul
                trattamento dei dati con loro;
              </li>
              <li>di assicurarsi che i Suoi clienti rispettino questi termini.</li>
            </ul>
          </>
        ),
      },
      {
        title: "Uso corretto",
        body: (
          <>
            <p>Si impegna a non usare TORCH per:</p>
            <ul>
              <li>inviare spam o messaggi che le persone non hanno accettato di ricevere;</li>
              <li>violare la legge o le regole di WhatsApp, Meta, Google o di altre piattaforme collegate;</li>
              <li>danneggiare, copiare o tentare di violare il servizio o gli account di altri clienti.</li>
            </ul>
            <p>
              Possiamo sospendere gli account che lo fanno, spiegandone il motivo ogni volta che è possibile.
            </p>
          </>
        ),
      },
      {
        title: "Accordo sul trattamento dei dati",
        body: (
          <p>
            Quando conserva in TORCH i dati personali dei Suoi clienti, li trattiamo per Suo conto, come Suo
            responsabile del trattamento. Il nostro{" "}
            <a href={localizeHref("it", "/dpa")}>Accordo sul trattamento dei dati</a> fa parte di questi termini e
            spiega come gestiamo quei dati.
          </p>
        ),
      },
      {
        title: "Disponibilità e responsabilità",
        body: (
          <>
            <p>
              Ci impegniamo a mantenere TORCH disponibile e funzionante, ma non possiamo garantire che non venga mai
              interrotto, ad esempio durante la manutenzione o per problemi di un fornitore.
            </p>
            <p>
              Nei limiti consentiti dalla legge, non rispondiamo di perdite indirette come mancati profitti o perdita
              di affari, e la nostra responsabilità complessiva è limitata a quanto ci ha pagato nei 12 mesi
              precedenti il problema.
            </p>
          </>
        ),
      },
      {
        title: "Modifiche a questi termini",
        body: (
          <p>
            Possiamo aggiornare questi termini. La data in alto indica la versione più recente. Per le modifiche
            importanti, avviseremo i clienti attivi via email prima che entrino in vigore.
          </p>
        ),
      },
      {
        title: "Legge applicabile e controversie",
        body: (
          <p>
            Questi termini sono regolati dalla legge rumena. Se non riusciamo a risolvere insieme un disaccordo,
            sarà gestito dai tribunali competenti di Bucarest, Romania.
          </p>
        ),
      },
    ],
  },

  fr: {
    metaTitle: "Conditions générales | TORCH by Intelligent B2B",
    metaDescription: "Les conditions d’utilisation du site TORCH et d’abonnement à TORCH.",
    title: "Conditions générales",
    intro: (
      <p>
        Ces conditions expliquent comment fonctionne TORCH lorsque vous utilisez ce site ou souscrivez à une
        formule. Merci de les lire avant de commencer votre essai gratuit.
      </p>
    ),
    sections: [
      {
        title: "Qui sommes-nous",
        body: (
          <p>
            TORCH est un service de {company.legalName}, {company.address}, TVA {company.vat}
            {company.tradeRegister ? `, Registre du commerce ${company.tradeRegister}` : ""} (« nous »). Ces
            conditions s’appliquent à ce site et à chaque abonnement TORCH.
          </p>
        ),
      },
      {
        title: "Réservé aux professionnels",
        body: (
          <p>
            TORCH est réservé aux clients professionnels, pas aux consommateurs. En vous abonnant, vous confirmez
            agir pour les besoins de votre entreprise, de votre commerce ou de votre profession.
          </p>
        ),
      },
      {
        title: "Le service",
        body: (
          <>
            <p>
              TORCH est une plateforme de gestion de la relation client pour les entreprises. Elle comprend des
              outils pour capter des prospects, répondre aux messages, prendre des rendez-vous, envoyer des
              campagnes, demander des avis et créer des sites web. Notre équipe configure votre compte pour vous.
            </p>
            <p>
              TORCH repose sur des logiciels de fournisseurs tiers. Nous pouvons améliorer, modifier ou remplacer
              des fonctionnalités au fil du temps, tant que le service que vous payez continue de fonctionner comme
              décrit.
            </p>
          </>
        ),
      },
      {
        title: "Essai gratuit",
        body: (
          <p>
            Les nouveaux clients peuvent essayer TORCH gratuitement pendant {trialDays} jours. Nous vous envoyons un
            rappel par e-mail 3 jours avant la fin de votre essai gratuit. Si vous résiliez avant la fin de
            l’essai, vous ne payez rien. Si vous ne résiliez pas, la formule choisie démarre à la fin de l’essai et
            est facturée comme décrit ci-dessous.
          </p>
        ),
      },
      {
        title: "Prix et paiement",
        body: (
          <ul>
            <li>Les prix sont indiqués en euros, hors TVA, qui est ajoutée lorsqu’elle s’applique.</li>
            <li>
              Les formules sont facturées mensuellement ou annuellement, à l’avance, via notre prestataire de
              paiement (Stripe).
            </li>
            <li>
              Les SMS, appels téléphoniques, messages WhatsApp et l’utilisation de l’IA peuvent être facturés à
              part, selon votre consommation.
            </li>
            <li>Si un paiement échoue, nous pouvons suspendre votre compte jusqu’à sa régularisation.</li>
            <li>Nous vous prévenons au moins 30 jours avant toute modification du prix de votre formule.</li>
          </ul>
        ),
      },
      {
        title: "Résiliation et remboursements",
        body: (
          <>
            <p>
              Il n’y a pas d’engagement de longue durée. Vous pouvez résilier à tout moment en écrivant à{" "}
              {company.email}. Votre formule reste active jusqu’à la fin de la période déjà payée et n’est pas
              renouvelée ensuite.
            </p>
            <p>
              Nous ne proposons pas de remboursement, y compris pour les périodes mensuelles ou annuelles déjà
              commencées. Profitez de l’essai gratuit pour décider si TORCH convient à votre entreprise.
            </p>
            <p>Après la résiliation, vous pouvez exporter vos données pendant 30 jours. Ensuite, nous les supprimons.</p>
          </>
        ),
      },
      {
        title: "Votre compte et vos données",
        body: (
          <>
            <p>
              Vous êtes responsable de votre compte, de vos identifiants et de l’usage qu’en fait votre équipe. Vos
              contacts, messages et autres contenus restent les vôtres. Nous ne les utilisons que pour vous fournir
              le service.
            </p>
            <p>
              Lorsque vous utilisez TORCH pour contacter vos propres clients, vous êtes responsable d’avoir leur
              accord et de respecter les règles qui s’appliquent à vos messages, y compris les lois sur la
              protection des données et le marketing.
            </p>
          </>
        ),
      },
      {
        title: "Revendre TORCH (formule Agency)",
        body: (
          <>
            <p>
              Avec la formule Agency, vous pouvez proposer TORCH à vos propres clients sous votre propre marque.
              Dans ce cas, vous êtes responsable :
            </p>
            <ul>
              <li>de vos clients et de vos accords avec eux, y compris vos prix et votre facturation ;</li>
              <li>de l’assistance à vos clients. Nous vous assistons, vous l’agence, pas directement vos clients ;</li>
              <li>
                des données de vos clients, y compris du droit de les traiter et de la signature de vos propres
                accords de traitement des données avec eux ;
              </li>
              <li>de veiller à ce que vos clients respectent ces conditions.</li>
            </ul>
          </>
        ),
      },
      {
        title: "Utilisation loyale",
        body: (
          <>
            <p>Vous vous engagez à ne pas utiliser TORCH pour :</p>
            <ul>
              <li>envoyer du spam ou des messages que les destinataires n’ont pas accepté de recevoir ;</li>
              <li>
                enfreindre la loi ou les règles de WhatsApp, Meta, Google ou d’autres plateformes connectées ;
              </li>
              <li>nuire au service, le copier ou tenter de s’introduire dans le service ou les comptes d’autres clients.</li>
            </ul>
            <p>
              Nous pouvons suspendre les comptes qui le font, en vous expliquant pourquoi chaque fois que c’est
              possible.
            </p>
          </>
        ),
      },
      {
        title: "Accord de traitement des données",
        body: (
          <p>
            Lorsque vous conservez dans TORCH les données personnelles de vos propres clients, nous les traitons
            pour votre compte, en tant que sous-traitant. Notre{" "}
            <a href={localizeHref("fr", "/dpa")}>Accord de traitement des données</a> fait partie de ces conditions
            et explique comment nous traitons ces données.
          </p>
        ),
      },
      {
        title: "Disponibilité et responsabilité",
        body: (
          <>
            <p>
              Nous faisons en sorte que TORCH reste disponible et fonctionne bien, mais nous ne pouvons pas promettre
              qu’il ne sera jamais interrompu, par exemple pendant une maintenance ou en cas de problème chez un
              fournisseur.
            </p>
            <p>
              Dans la mesure permise par la loi, nous ne sommes pas responsables des pertes indirectes, comme un
              manque à gagner ou une perte d’activité, et notre responsabilité totale est limitée à ce que vous nous
              avez payé au cours des 12 mois précédant le problème.
            </p>
          </>
        ),
      },
      {
        title: "Modifications de ces conditions",
        body: (
          <p>
            Nous pouvons mettre à jour ces conditions. La date en haut de la page indique la dernière version. Pour
            les changements importants, nous prévenons les clients actifs par e-mail avant leur entrée en vigueur.
          </p>
        ),
      },
      {
        title: "Droit applicable et litiges",
        body: (
          <p>
            Ces conditions sont régies par le droit roumain. Si nous ne parvenons pas à résoudre un désaccord
            ensemble, il sera porté devant les tribunaux compétents de Bucarest, en Roumanie.
          </p>
        ),
      },
    ],
  },

  ar: {
    metaTitle: "الشروط والأحكام | TORCH by Intelligent B2B",
    metaDescription: "شروط استخدام موقع TORCH والاشتراك في TORCH.",
    title: "الشروط والأحكام",
    intro: (
      <p>
        توضح هذه الشروط كيف تعمل TORCH عند استخدامك لهذا الموقع أو اشتراكك في إحدى الباقات. يُرجى قراءتها قبل
        بدء الفترة التجريبية المجانية.
      </p>
    ),
    sections: [
      {
        title: "من نحن",
        body: (
          <p>
            TORCH خدمة تقدمها شركة {company.legalName}، {company.address}، رقم ضريبة القيمة المضافة {company.vat}
            {company.tradeRegister ? `، السجل التجاري ${company.tradeRegister}` : ""} («نحن»). تسري هذه الشروط على
            هذا الموقع وعلى كل اشتراك في TORCH.
          </p>
        ),
      },
      {
        title: "للعملاء من الشركات فقط",
        body: (
          <p>
            TORCH مخصصة للعملاء من الشركات فقط، وليست للمستهلكين. باشتراكك، تؤكد أنك تتصرف لصالح عملك أو تجارتك أو
            مهنتك.
          </p>
        ),
      },
      {
        title: "الخدمة",
        body: (
          <>
            <p>
              TORCH منصة لإدارة العملاء مخصصة للشركات. تتضمن أدوات لجذب العملاء المحتملين، والرد على الرسائل، وحجز
              المواعيد، وإرسال الحملات، وطلب التقييمات، وإنشاء المواقع الإلكترونية. ويتولى فريقنا إعداد حسابك نيابةً
              عنك.
            </p>
            <p>
              TORCH مبنية على برمجيات من مزودين خارجيين. يجوز لنا تحسين الميزات أو تغييرها أو استبدالها مع مرور
              الوقت، ما دامت الخدمة التي تدفع مقابلها تستمر في العمل كما هو موصوف.
            </p>
          </>
        ),
      },
      {
        title: "الفترة التجريبية المجانية",
        body: (
          <p>
            يمكن للعملاء الجدد تجربة TORCH مجانًا لمدة {trialDays} يومًا. نرسل إليك تذكيرًا بالبريد الإلكتروني قبل 3
            أيام من انتهاء الفترة التجريبية المجانية. إذا ألغيت قبل انتهاء الفترة التجريبية، فلن تدفع شيئًا. وإذا لم
            تُلغِ، تبدأ الباقة التي اخترتها عند انتهاء الفترة التجريبية ويُحتسب سعرها كما هو موضح أدناه.
          </p>
        ),
      },
      {
        title: "الأسعار والدفع",
        body: (
          <ul>
            <li>تُعرض الأسعار باليورو ولا تشمل ضريبة القيمة المضافة، التي تُضاف حيثما تنطبق.</li>
            <li>تُدفع الباقات شهريًا أو سنويًا، مقدمًا، عبر مزود الدفع لدينا (Stripe).</li>
            <li>
              قد تُحتسب الرسائل النصية القصيرة والمكالمات الهاتفية ورسائل WhatsApp واستخدام الذكاء الاصطناعي بشكل
              منفصل، حسب حجم استخدامك.
            </li>
            <li>إذا فشلت عملية دفع، يجوز لنا إيقاف حسابك مؤقتًا إلى أن تتم تسويتها.</li>
            <li>سنخبرك قبل 30 يومًا على الأقل من أي تغيير في سعر باقتك.</li>
          </ul>
        ),
      },
      {
        title: "الإلغاء والاسترداد",
        body: (
          <>
            <p>
              لا يوجد عقد طويل الأمد. يمكنك الإلغاء في أي وقت بمراسلتنا على {company.email}. تبقى باقتك فعّالة حتى
              نهاية الفترة التي دفعت ثمنها بالفعل، ولا تُجدَّد بعد ذلك.
            </p>
            <p>
              لا نقدم أي استرداد للمبالغ، بما في ذلك عن الفترات الشهرية أو السنوية التي بدأت بالفعل. استفد من
              الفترة التجريبية المجانية لتقرر ما إذا كانت TORCH مناسبة لعملك.
            </p>
            <p>بعد الإلغاء، يمكنك تصدير بياناتك لمدة 30 يومًا. ثم نحذفها.</p>
          </>
        ),
      },
      {
        title: "حسابك وبياناتك",
        body: (
          <>
            <p>
              أنت مسؤول عن حسابك وبيانات الدخول الخاصة بك وعمّا يفعله فريقك بها. تبقى جهات الاتصال والرسائل وسائر
              المحتوى ملكًا لك. ولا نستخدمها إلا لتشغيل الخدمة لك.
            </p>
            <p>
              عندما تستخدم TORCH للتواصل مع عملائك، تكون مسؤولًا عن الحصول على موافقتهم وعن الالتزام بالقواعد التي
              تنطبق على رسائلك، بما في ذلك قوانين الخصوصية والتسويق.
            </p>
          </>
        ),
      },
      {
        title: "إعادة بيع TORCH (باقة Agency)",
        body: (
          <>
            <p>
              في باقة Agency يمكنك تقديم TORCH لعملائك تحت علامتك التجارية الخاصة. وفي هذه الحالة تكون مسؤولًا عن:
            </p>
            <ul>
              <li>عملائك واتفاقاتك معهم، بما في ذلك أسعارك وفوترتك؛</li>
              <li>دعم عملائك. نحن ندعمك أنت، الوكالة، وليس عملاءك مباشرةً؛</li>
              <li>بيانات عملائك، بما في ذلك امتلاك الحق في معالجتها وتوقيع اتفاقيات معالجة البيانات الخاصة بك معهم؛</li>
              <li>التأكد من التزام عملائك بهذه الشروط.</li>
            </ul>
          </>
        ),
      },
      {
        title: "الاستخدام العادل",
        body: (
          <>
            <p>توافق على عدم استخدام TORCH من أجل:</p>
            <ul>
              <li>إرسال رسائل مزعجة أو رسائل لم يوافق الأشخاص على تلقيها؛</li>
              <li>مخالفة القانون أو قواعد WhatsApp أو Meta أو Google أو غيرها من المنصات المرتبطة؛</li>
              <li>الإضرار بالخدمة أو نسخها أو محاولة اختراقها أو اختراق حسابات عملاء آخرين.</li>
            </ul>
            <p>يجوز لنا إيقاف الحسابات التي تفعل ذلك، مع إخبارك بالسبب كلما أمكن.</p>
          </>
        ),
      },
      {
        title: "اتفاقية معالجة البيانات",
        body: (
          <p>
            عندما تحفظ البيانات الشخصية لعملائك في TORCH، فإننا نعالجها نيابةً عنك، بصفتنا معالجًا للبيانات لصالحك.
            تُعد <a href={localizeHref("ar", "/dpa")}>اتفاقية معالجة البيانات</a> الخاصة بنا جزءًا من هذه الشروط،
            وتوضح كيف نتعامل مع تلك البيانات.
          </p>
        ),
      },
      {
        title: "التوفر والمسؤولية",
        body: (
          <>
            <p>
              نعمل على إبقاء TORCH متاحة وتعمل بشكل جيد، لكن لا يمكننا أن نعد بأنها لن تتوقف أبدًا، مثلًا أثناء
              الصيانة أو عند حدوث مشكلات لدى أحد المزودين.
            </p>
            <p>
              في الحدود التي يسمح بها القانون، لسنا مسؤولين عن الخسائر غير المباشرة مثل خسارة الأرباح أو خسارة
              الأعمال، وتقتصر مسؤوليتنا الإجمالية على ما دفعته لنا خلال الأشهر الـ12 السابقة للمشكلة.
            </p>
          </>
        ),
      },
      {
        title: "تغييرات هذه الشروط",
        body: (
          <p>
            يجوز لنا تحديث هذه الشروط. يبيّن التاريخ في أعلى الصفحة أحدث نسخة. وفي حالة التغييرات المهمة، سنُعلم
            العملاء النشطين بالبريد الإلكتروني قبل سريانها.
          </p>
        ),
      },
      {
        title: "القانون والنزاعات",
        body: (
          <p>
            تخضع هذه الشروط للقانون الروماني. وإذا لم نتمكن من حل خلاف بيننا، فستنظر فيه المحاكم المختصة في
            بوخارست، رومانيا.
          </p>
        ),
      },
    ],
  },
}

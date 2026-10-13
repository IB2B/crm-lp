// TODO(ib2b): translations need review by a native speaker and the lawyer, like the English.
// DRAFT placeholder. Still missing for a final DPA: the SCCs annex, a security-measures annex and
// legal review. TODO(ib2b): replace with the final DPA reviewed by a lawyer, then remove
// `draft` in src/app/[lang]/dpa/page.tsx and the noindex. Keep the sub-processor list in line with
// src/i18n/legal/privacy.tsx.
import type { LegalContent } from "@/components/legal-page"
import { company } from "@/content/site"
import { localizeHref, type Locale } from "@/i18n/config"

export const dpa: Record<Locale, LegalContent> = {
  en: {
    metaTitle: "Data Processing Agreement | TORCH by Intelligent B2B",
    metaDescription: "Draft Data Processing Agreement for TORCH customers.",
    title: "Data Processing Agreement",
    intro: (
      <p>
        This is a draft of the Data Processing Agreement (DPA) between TORCH and its customers, under Article 28 of
        the GDPR. The final version will be published here. To sign a DPA now, write to {company.email}.
      </p>
    ),
    sections: [
      {
        title: "Parties and roles",
        body: (
          <p>
            This agreement is between the TORCH customer (the &quot;controller&quot;) and {company.legalName} (the
            &quot;processor&quot;). It covers the personal data the customer keeps in TORCH about its own contacts
            and customers.
          </p>
        ),
      },
      {
        title: "How long it lasts",
        body: (
          <p>
            This agreement starts when the customer subscribes to TORCH and lasts as long as we process personal
            data for them, including the 30 days after cancelling when the customer can still export it.
          </p>
        ),
      },
      {
        title: "What we process and why",
        body: (
          <p>
            We process the customer&apos;s data only to provide TORCH, and only on the customer&apos;s documented
            instructions.
          </p>
        ),
      },
      {
        title: "Types of data and people covered",
        body: (
          <>
            <p>People whose data may be processed:</p>
            <ul>
              <li>the customer&apos;s leads, clients and patients;</li>
              <li>the customer&apos;s staff and users of their TORCH account.</li>
            </ul>
            <p>Types of data:</p>
            <ul>
              <li>names and contact details (phone, email, address);</li>
              <li>conversations by WhatsApp, SMS, email, social media and phone call recordings;</li>
              <li>bookings, notes, pipeline stages, reviews and payment records.</li>
            </ul>
            <p>
              TORCH is not designed for special categories of data, such as health data. Customers who store them
              are responsible for having a legal basis to do so.
            </p>
          </>
        ),
      },
      {
        title: "Our obligations",
        body: (
          <ul>
            <li>Keep the data confidential, and limit access to people who need it.</li>
            <li>
              Make sure our staff and contractors who can access the data are bound by a duty of confidentiality.
            </li>
            <li>Protect it with appropriate technical and organisational security measures.</li>
            <li>Help the customer answer requests from the people whose data it is.</li>
            <li>Tell the customer without undue delay if we become aware of a personal data breach.</li>
          </ul>
        ),
      },
      {
        title: "Sub-processors",
        body: (
          <p>
            We use the providers listed in our <a href={localizeHref("en", "/privacy")}>Privacy Policy</a>. We will
            tell customers before adding or replacing one, so they can object.
          </p>
        ),
      },
      {
        title: "Transfers outside the EU",
        body: (
          <p>
            Where data leaves the European Union, we rely on the EU-US Data Privacy Framework or the European
            Commission&apos;s standard contractual clauses (SCCs). The SCCs will be attached to the final version of
            this agreement.
          </p>
        ),
      },
      {
        title: "End of the agreement",
        body: (
          <p>
            After the customer cancels, they can export their data for 30 days. Then we delete it, unless the law
            requires us to keep it.
          </p>
        ),
      },
      {
        title: "Audits",
        body: (
          <p>On request, we give customers the information they need to check that we follow this agreement.</p>
        ),
      },
    ],
  },

  it: {
    metaTitle: "Accordo sul trattamento dei dati | TORCH by Intelligent B2B",
    metaDescription: "Bozza dell’Accordo sul trattamento dei dati per i clienti TORCH.",
    title: "Accordo sul trattamento dei dati",
    intro: (
      <p>
        Questa è una bozza dell’Accordo sul trattamento dei dati (DPA) tra TORCH e i suoi clienti, ai sensi
        dell’articolo 28 del GDPR. La versione definitiva sarà pubblicata qui. Per firmare subito un DPA, scriva a{" "}
        {company.email}.
      </p>
    ),
    sections: [
      {
        title: "Parti e ruoli",
        body: (
          <p>
            Questo accordo è stipulato tra il cliente TORCH (il «titolare del trattamento») e {company.legalName}{" "}
            (il «responsabile del trattamento»). Riguarda i dati personali che il cliente conserva in TORCH sui
            propri contatti e clienti.
          </p>
        ),
      },
      {
        title: "Durata",
        body: (
          <p>
            Questo accordo inizia quando il cliente si abbona a TORCH e dura finché trattiamo dati personali per suo
            conto, compresi i 30 giorni successivi alla disdetta durante i quali il cliente può ancora esportarli.
          </p>
        ),
      },
      {
        title: "Cosa trattiamo e perché",
        body: (
          <p>
            Trattiamo i dati del cliente solo per fornire TORCH, e solo su istruzioni documentate del cliente.
          </p>
        ),
      },
      {
        title: "Tipi di dati e persone interessate",
        body: (
          <>
            <p>Persone i cui dati possono essere trattati:</p>
            <ul>
              <li>i potenziali clienti, i clienti e i pazienti del cliente;</li>
              <li>il personale del cliente e gli utenti del suo account TORCH.</li>
            </ul>
            <p>Tipi di dati:</p>
            <ul>
              <li>nomi e dati di contatto (telefono, email, indirizzo);</li>
              <li>conversazioni via WhatsApp, SMS, email, social media e registrazioni delle chiamate;</li>
              <li>prenotazioni, note, fasi della pipeline, recensioni e registrazioni dei pagamenti.</li>
            </ul>
            <p>
              TORCH non è progettato per categorie particolari di dati, come i dati sanitari. I clienti che li
              conservano sono responsabili di avere una base giuridica per farlo.
            </p>
          </>
        ),
      },
      {
        title: "I nostri obblighi",
        body: (
          <ul>
            <li>Mantenere i dati riservati e limitarne l’accesso alle persone che ne hanno bisogno.</li>
            <li>
              Assicurarci che il nostro personale e i collaboratori che possono accedere ai dati siano vincolati da
              un obbligo di riservatezza.
            </li>
            <li>Proteggerli con misure di sicurezza tecniche e organizzative adeguate.</li>
            <li>Aiutare il cliente a rispondere alle richieste delle persone a cui i dati si riferiscono.</li>
            <li>
              Informare il cliente senza ingiustificato ritardo se veniamo a conoscenza di una violazione dei dati
              personali.
            </li>
          </ul>
        ),
      },
      {
        title: "Sub-responsabili",
        body: (
          <p>
            Ci avvaliamo dei fornitori elencati nella nostra{" "}
            <a href={localizeHref("it", "/privacy")}>Privacy Policy</a>. Informeremo i clienti prima di aggiungerne o
            sostituirne uno, così che possano opporsi.
          </p>
        ),
      },
      {
        title: "Trasferimenti fuori dall’UE",
        body: (
          <p>
            Quando i dati escono dall’Unione europea, ci basiamo sull’EU-US Data Privacy Framework o sulle clausole
            contrattuali tipo (SCC) della Commissione europea. Le SCC saranno allegate alla versione definitiva di
            questo accordo.
          </p>
        ),
      },
      {
        title: "Fine dell’accordo",
        body: (
          <p>
            Dopo la disdetta, il cliente può esportare i propri dati per 30 giorni. Dopodiché li cancelliamo, a meno
            che la legge non ci imponga di conservarli.
          </p>
        ),
      },
      {
        title: "Verifiche",
        body: (
          <p>
            Su richiesta, forniamo ai clienti le informazioni necessarie per verificare che rispettiamo questo
            accordo.
          </p>
        ),
      },
    ],
  },

  fr: {
    metaTitle: "Accord de traitement des données | TORCH by Intelligent B2B",
    metaDescription: "Projet d’accord de traitement des données pour les clients TORCH.",
    title: "Accord de traitement des données",
    intro: (
      <p>
        Ceci est un projet de l’Accord de traitement des données (DPA) entre TORCH et ses clients, conformément à
        l’article 28 du RGPD. La version définitive sera publiée ici. Pour signer un DPA dès maintenant, écrivez à{" "}
        {company.email}.
      </p>
    ),
    sections: [
      {
        title: "Parties et rôles",
        body: (
          <p>
            Cet accord est conclu entre le client TORCH (le « responsable du traitement ») et {company.legalName}{" "}
            (le « sous-traitant »). Il couvre les données personnelles que le client conserve dans TORCH sur ses
            propres contacts et clients.
          </p>
        ),
      },
      {
        title: "Durée",
        body: (
          <p>
            Cet accord commence lorsque le client s’abonne à TORCH et dure tant que nous traitons des données
            personnelles pour son compte, y compris les 30 jours suivant la résiliation pendant lesquels le client
            peut encore les exporter.
          </p>
        ),
      },
      {
        title: "Ce que nous traitons et pourquoi",
        body: (
          <p>
            Nous traitons les données du client uniquement pour fournir TORCH, et uniquement sur instructions
            documentées du client.
          </p>
        ),
      },
      {
        title: "Types de données et personnes concernées",
        body: (
          <>
            <p>Personnes dont les données peuvent être traitées :</p>
            <ul>
              <li>les prospects, clients et patients du client ;</li>
              <li>le personnel du client et les utilisateurs de son compte TORCH.</li>
            </ul>
            <p>Types de données :</p>
            <ul>
              <li>noms et coordonnées (téléphone, e-mail, adresse) ;</li>
              <li>
                conversations par WhatsApp, SMS, e-mail, réseaux sociaux et enregistrements d’appels téléphoniques ;
              </li>
              <li>rendez-vous, notes, étapes du pipeline, avis et historiques de paiement.</li>
            </ul>
            <p>
              TORCH n’est pas conçu pour les catégories particulières de données, comme les données de santé. Les
              clients qui en conservent sont responsables de disposer d’une base légale pour le faire.
            </p>
          </>
        ),
      },
      {
        title: "Nos obligations",
        body: (
          <ul>
            <li>Garder les données confidentielles et en limiter l’accès aux personnes qui en ont besoin.</li>
            <li>
              Veiller à ce que nos employés et prestataires ayant accès aux données soient soumis à une obligation de
              confidentialité.
            </li>
            <li>Les protéger par des mesures de sécurité techniques et organisationnelles appropriées.</li>
            <li>Aider le client à répondre aux demandes des personnes concernées par les données.</li>
            <li>
              Informer le client dans les meilleurs délais si nous avons connaissance d’une violation de données
              personnelles.
            </li>
          </ul>
        ),
      },
      {
        title: "Sous-traitants ultérieurs",
        body: (
          <p>
            Nous faisons appel aux prestataires listés dans notre{" "}
            <a href={localizeHref("fr", "/privacy")}>Politique de confidentialité</a>. Nous informerons les clients
            avant d’en ajouter ou d’en remplacer un, afin qu’ils puissent s’y opposer.
          </p>
        ),
      },
      {
        title: "Transferts hors de l’UE",
        body: (
          <p>
            Lorsque des données quittent l’Union européenne, nous nous appuyons sur le EU-US Data Privacy Framework
            ou sur les clauses contractuelles types (CCT) de la Commission européenne. Les CCT seront jointes à la
            version définitive de cet accord.
          </p>
        ),
      },
      {
        title: "Fin de l’accord",
        body: (
          <p>
            Après la résiliation, le client peut exporter ses données pendant 30 jours. Ensuite, nous les supprimons,
            sauf si la loi nous oblige à les conserver.
          </p>
        ),
      },
      {
        title: "Audits",
        body: (
          <p>
            Sur demande, nous fournissons aux clients les informations nécessaires pour vérifier que nous respectons
            cet accord.
          </p>
        ),
      },
    ],
  },

  ar: {
    metaTitle: "اتفاقية معالجة البيانات | TORCH by Intelligent B2B",
    metaDescription: "مسودة اتفاقية معالجة البيانات لعملاء TORCH.",
    title: "اتفاقية معالجة البيانات",
    intro: (
      <p>
        هذه مسودة اتفاقية معالجة البيانات (DPA) بين TORCH وعملائها، وفقًا للمادة 28 من اللائحة العامة لحماية
        البيانات (GDPR). وستُنشر النسخة النهائية هنا. لتوقيع اتفاقية معالجة بيانات الآن، راسلنا على {company.email}.
      </p>
    ),
    sections: [
      {
        title: "الأطراف والأدوار",
        body: (
          <p>
            هذه الاتفاقية مبرمة بين عميل TORCH («المتحكم في البيانات») و{company.legalName} («معالج البيانات»).
            وتشمل البيانات الشخصية التي يحفظها العميل في TORCH عن جهات اتصاله وعملائه.
          </p>
        ),
      },
      {
        title: "مدة الاتفاقية",
        body: (
          <p>
            تبدأ هذه الاتفاقية عندما يشترك العميل في TORCH وتستمر طوال مدة معالجتنا للبيانات الشخصية لصالحه، بما في
            ذلك الأيام الـ30 التي تلي الإلغاء والتي يظل بإمكان العميل خلالها تصدير بياناته.
          </p>
        ),
      },
      {
        title: "ما نعالجه ولماذا",
        body: <p>نعالج بيانات العميل فقط لتقديم TORCH، وفقط بناءً على تعليمات العميل الموثقة.</p>,
      },
      {
        title: "أنواع البيانات والأشخاص المعنيون",
        body: (
          <>
            <p>الأشخاص الذين قد تُعالج بياناتهم:</p>
            <ul>
              <li>العملاء المحتملون للعميل وعملاؤه ومرضاه؛</li>
              <li>موظفو العميل ومستخدمو حسابه في TORCH.</li>
            </ul>
            <p>أنواع البيانات:</p>
            <ul>
              <li>الأسماء وبيانات الاتصال (الهاتف، البريد الإلكتروني، العنوان)؛</li>
              <li>
                المحادثات عبر WhatsApp والرسائل النصية القصيرة والبريد الإلكتروني ووسائل التواصل الاجتماعي، وتسجيلات
                المكالمات الهاتفية؛
              </li>
              <li>الحجوزات والملاحظات ومراحل مسار المبيعات والتقييمات وسجلات الدفع.</li>
            </ul>
            <p>
              TORCH غير مصممة للفئات الخاصة من البيانات، مثل البيانات الصحية. والعملاء الذين يحفظونها مسؤولون عن
              امتلاك أساس قانوني لذلك.
            </p>
          </>
        ),
      },
      {
        title: "التزاماتنا",
        body: (
          <ul>
            <li>الحفاظ على سرية البيانات، وحصر الوصول إليها في الأشخاص الذين يحتاجون إليها.</li>
            <li>التأكد من أن موظفينا والمتعاقدين معنا الذين يمكنهم الوصول إلى البيانات ملزمون بواجب السرية.</li>
            <li>حمايتها بتدابير أمنية تقنية وتنظيمية مناسبة.</li>
            <li>مساعدة العميل في الرد على طلبات الأشخاص الذين تخصهم البيانات.</li>
            <li>إبلاغ العميل دون تأخير غير مبرر إذا علمنا بحدوث خرق للبيانات الشخصية.</li>
          </ul>
        ),
      },
      {
        title: "المعالجون الفرعيون",
        body: (
          <p>
            نستعين بالمزودين المذكورين في <a href={localizeHref("ar", "/privacy")}>سياسة الخصوصية</a> الخاصة بنا.
            وسنُعلم العملاء قبل إضافة أي مزود أو استبداله، حتى يتمكنوا من الاعتراض.
          </p>
        ),
      },
      {
        title: "النقل خارج الاتحاد الأوروبي",
        body: (
          <p>
            عندما تُنقل البيانات خارج الاتحاد الأوروبي، نعتمد على إطار خصوصية البيانات بين الاتحاد الأوروبي والولايات
            المتحدة (EU-US Data Privacy Framework) أو على البنود التعاقدية النموذجية (SCCs) الصادرة عن المفوضية
            الأوروبية. وستُرفق البنود التعاقدية النموذجية بالنسخة النهائية من هذه الاتفاقية.
          </p>
        ),
      },
      {
        title: "انتهاء الاتفاقية",
        body: (
          <p>
            بعد أن يلغي العميل اشتراكه، يمكنه تصدير بياناته لمدة 30 يومًا. ثم نحذفها، ما لم يُلزمنا القانون بالاحتفاظ
            بها.
          </p>
        ),
      },
      {
        title: "التدقيق",
        body: <p>عند الطلب، نقدم للعملاء المعلومات التي يحتاجونها للتحقق من التزامنا بهذه الاتفاقية.</p>,
      },
    ],
  },
}

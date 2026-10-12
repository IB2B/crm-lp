import type { Metadata } from "next"

import { LegalPage, type LegalSection } from "@/components/legal-page"
import { company } from "@/content/site"

// DRAFT placeholder. Still missing for a final DPA: the SCCs annex, a security-measures annex and
// legal review. TODO(ib2b): replace with the final DPA reviewed by a lawyer, then remove
// `draft` below and the noindex. Keep the sub-processor list in line with src/app/privacy/page.tsx.
export const metadata: Metadata = {
  title: "Data Processing Agreement | TORCH by Intelligent B2B",
  description: "Draft Data Processing Agreement for TORCH customers.",
  robots: { index: false },
}

const sections: LegalSection[] = [
  {
    title: "Parties and roles",
    body: (
      <p>
        This agreement is between the TORCH customer (the &quot;controller&quot;) and {company.legalName} (the
        &quot;processor&quot;). It covers the personal data the customer keeps in TORCH about its own contacts and
        customers.
      </p>
    ),
  },
  {
    title: "How long it lasts",
    body: (
      <p>
        This agreement starts when the customer subscribes to TORCH and lasts as long as we process personal data
        for them, including the 30 days after cancelling when the customer can still export it.
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
          TORCH is not designed for special categories of data, such as health data. Customers who store them are
          responsible for having a legal basis to do so.
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
        We use the providers listed in our <a href="/privacy">Privacy Policy</a>. We will tell customers before
        adding or replacing one, so they can object.
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
      <p>
        On request, we give customers the information they need to check that we follow this agreement.
      </p>
    ),
  },
]

export default function Page() {
  return (
    <LegalPage
      title="Data Processing Agreement"
      draft
      intro={
        <p>
          This is a draft of the Data Processing Agreement (DPA) between TORCH and its customers, under Article 28
          of the GDPR. The final version will be published here. To sign a DPA now, write to {company.email}.
        </p>
      }
      sections={sections}
    />
  )
}

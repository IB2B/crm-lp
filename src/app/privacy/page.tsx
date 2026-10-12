import type { Metadata } from "next"

import { LegalPage, type LegalSection } from "@/components/legal-page"
import { company } from "@/content/site"

// TODO(ib2b): have a lawyer or DPO review this text before launch, and confirm each provider
// below against the real TORCH setup (especially the phone/SMS, email and hosting providers).
export const metadata: Metadata = {
  title: "Privacy Policy | TORCH by Intelligent B2B",
  description: "How TORCH by Intelligent B2B collects, uses and protects your personal data.",
}

// Every provider that may receive personal data. Keep in line with the DPA (src/app/dpa/page.tsx).
const providers = [
  {
    name: "GoHighLevel (LeadConnector)",
    use: "The platform TORCH runs on: contacts, conversations, bookings, websites and automations.",
  },
  {
    name: "OpenAI, through GoHighLevel",
    use: "Powers the AI assistant that replies to messages, when you turn it on.",
  },
  {
    name: "Twilio (LeadConnector Phone)",
    use: "Phone calls, missed-call text back and SMS.",
  },
  { name: "Meta (WhatsApp Business)", use: "Sending and receiving WhatsApp messages." },
  { name: "Google", use: "Calendar sync and Google Meet links for booked calls." },
  { name: "Mailgun (LeadConnector Email)", use: "Sending emails and email campaigns from TORCH." },
  { name: "Our email provider", use: "Our own inbox, when you write to us." },
  { name: "Stripe", use: "Payments and subscriptions. Card details are handled by Stripe only." },
  { name: "Meta (Facebook and Instagram)", use: "Ad measurement on this website, only if you allow cookies." },
  { name: "Wistia", use: "Playing our demo video, when you open it." },
  { name: "Our website hosting provider", use: "Serving this website." },
]

const sections: LegalSection[] = [
  {
    title: "Who is responsible for your data",
    body: (
      <p>
        The data controller is {company.legalName}, {company.address}, VAT {company.vat}
        {company.tradeRegister ? `, Trade Register ${company.tradeRegister}` : ""}. For anything about your data,
        write to <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    ),
  },
  {
    title: "Data we process for our clients",
    body: (
      <p>
        Businesses that use TORCH keep their own customers&apos; data in it, such as contacts and conversations.
        For that data, our clients are the controller and we process it on their behalf, under our{" "}
        <a href="/dpa">Data Processing Agreement</a>. If you are a customer of one of our clients, please contact
        that business about your data.
      </p>
    ),
  },
  {
    title: "What data we collect",
    body: (
      <ul>
        <li>
          <strong className="font-medium text-foreground">When you book a call:</strong> your name, email, phone
          number, business name and anything you write in the booking form.
        </li>
        <li>
          <strong className="font-medium text-foreground">When you subscribe:</strong> your name, business and
          billing details. Card details are handled by Stripe and never reach us.
        </li>
        <li>
          <strong className="font-medium text-foreground">When you sign up for our newsletter:</strong> your email
          address.
        </li>
        <li>
          <strong className="font-medium text-foreground">When you contact us</strong> by email, phone or
          WhatsApp: your contact details and the messages you send.
        </li>
        <li>
          <strong className="font-medium text-foreground">When you browse this site:</strong> technical data such
          as your IP address and browser, and, only if you allow it, cookies that show which of our ads brought you
          here. See the <a href="/cookie-policy">Cookie Policy</a>.
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
        <p>We never sell your data. We only share it with providers that help us run the website and the service:</p>
        <ul>
          {providers.map((p) => (
            <li key={p.name}>
              <strong className="font-medium text-foreground">{p.name}:</strong> {p.use}
            </li>
          ))}
        </ul>
        <p>
          We may also share data with public authorities when the law requires it.
        </p>
      </>
    ),
  },
  {
    title: "Transfers outside the EU",
    body: (
      <p>
        Some of these providers are based in the United States. When data leaves the European Union, we rely on
        the safeguards the GDPR allows, such as the EU-US Data Privacy Framework or the European Commission&apos;s
        standard contractual clauses.
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
          Write to <a href={`mailto:${company.email}`}>{company.email}</a> and we will reply within one month. You
          can also complain to a data protection authority: Romania&apos;s ANSPDCP, Italy&apos;s Garante per la
          protezione dei dati personali, or the authority in the country where you live.
        </p>
      </>
    ),
  },
  {
    title: "Security",
    body: (
      <p>
        We protect your data with technical and organisational measures, such as encrypted connections and access
        limited to the people who need it.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    body: (
      <p>We may update this policy. The date at the top shows the latest version.</p>
    ),
  },
]

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={
        <p>
          This policy explains what personal data we collect when you use the TORCH website or service, why we
          collect it, and the choices you have.
        </p>
      }
      sections={sections}
    />
  )
}

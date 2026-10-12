import type { Metadata } from "next"

import { LegalPage, type LegalSection } from "@/components/legal-page"
import { company } from "@/content/site"
import { trialDays } from "@/content/pricing"

// TODO(ib2b): have a lawyer review this text before launch.
export const metadata: Metadata = {
  title: "Terms and Conditions | TORCH by Intelligent B2B",
  description: "The terms for using the TORCH website and subscribing to TORCH.",
}

const sections: LegalSection[] = [
  {
    title: "Who we are",
    body: (
      <p>
        TORCH is a service of {company.legalName}, {company.address}, VAT {company.vat}
        {company.tradeRegister ? `, Trade Register ${company.tradeRegister}` : ""} (&quot;we&quot;, &quot;us&quot;).
        These terms apply to this website and to every TORCH subscription.
      </p>
    ),
  },
  {
    title: "Business customers only",
    body: (
      <p>
        TORCH is for business customers only, not consumers. By subscribing, you confirm that you are acting for
        your business, trade or profession.
      </p>
    ),
  },
  {
    title: "The service",
    body: (
      <>
        <p>
          TORCH is a customer management platform for businesses. It includes tools to capture leads, reply to
          messages, book appointments, send campaigns, request reviews and build websites. Our team sets up your
          account for you.
        </p>
        <p>
          TORCH is built on software from third-party providers. We may improve, change or replace features over
          time, as long as the service you pay for keeps working as described.
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
          We do not offer refunds, including for monthly or yearly periods that have already started. Use the free
          trial to decide whether TORCH is right for your business.
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
        processor. Our <a href="/dpa">Data Processing Agreement</a> is part of these terms and explains how we
        handle that data.
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
        These terms are governed by Romanian law. If we cannot solve a disagreement together, it will be handled by
        the competent courts of Bucharest, Romania.
      </p>
    ),
  },
]

export default function Page() {
  return (
    <LegalPage
      title="Terms and Conditions"
      intro={
        <p>
          These terms explain how TORCH works when you use this website or subscribe to a plan. Please read them
          before you start a free trial.
        </p>
      }
      sections={sections}
    />
  )
}

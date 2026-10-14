import { phoneDisplay } from "@/content/embeds"
import { plans, trialDays } from "@/content/pricing"
import { company, siteUrl } from "@/content/site"
import { fmt, type Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n"

// JSON-LD for search engines on the home page, in the page's language.
// Everything is built from the same data the page shows (prices, FAQ), so it can't drift.
// No ratings or reviews: we only describe what is visible on the page.
export function HomeStructuredData({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const home = `${siteUrl}/${lang}`
  const { description } = dict.common.meta

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "TORCH by Intelligent B2B",
    url: home,
    logo: `${siteUrl}/brand/torch-mark.png`,
    email: company.email ?? undefined,
    telephone: phoneDisplay,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: company.email ?? undefined,
      telephone: phoneDisplay,
      availableLanguage: ["Italian", "English", "French", "Arabic"],
    },
    // TODO(ib2b): add the official social profile links (Facebook, Instagram, LinkedIn…).
    sameAs: [] as string[],
  }

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TORCH",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: home,
    inLanguage: lang,
    description,
    publisher: { "@id": `${siteUrl}/#organization` },
    offers: plans
      .filter((p) => p.monthly !== null)
      .map((p) => ({
        "@type": "Offer",
        name: p.name,
        url: `${home}#pricing`,
        price: p.monthly,
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: p.monthly,
          priceCurrency: "EUR",
          unitText: "MONTH",
          // Prices on the page are before VAT.
          valueAddedTaxIncluded: false,
        },
      })),
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: fmt(item.a, { n: trialDays }) },
    })),
  }

  return (
    <>
      {[organization, software, faq].map((data) => (
        <script
          key={data["@type"]}
          type="application/ld+json"
          // Escape "<" so the JSON can never close the script tag early.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  )
}

import { notFound } from "next/navigation";

import { AgenciesSection } from "@/components/landing/agencies-section";
import { AppsSection } from "@/components/landing/apps-section";
import { ComparisonSection } from "@/components/landing/comparison-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { GuaranteeSection } from "@/components/landing/guarantee-section";
import { Hero } from "@/components/landing/hero";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { IndustriesSection } from "@/components/landing/industries-section";
import { InsideTorchSection } from "@/components/landing/inside-torch-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { HomeStructuredData } from "@/components/structured-data";
import { showTestimonials } from "@/content/site";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

// Every section gets only its own text (`t`) for this language, plus `lang` for links and formatting.
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <HomeStructuredData lang={lang} dict={dict} />
      <SiteHeader t={dict.chrome} lang={lang} />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Hero t={dict.hero} lang={lang} />
        <ProblemSection t={dict.problem} lang={lang} />
        <InsideTorchSection t={dict.insideTorch} lang={lang} />
        <AppsSection t={dict.apps} lang={lang} />
        <HowItWorksSection t={dict.howItWorks} lang={lang} />
        <IndustriesSection t={dict.industries} lang={lang} />
        <ComparisonSection t={dict.comparison} lang={lang} />
        <AgenciesSection t={dict.agencies} lang={lang} />
        {showTestimonials ? <TestimonialsSection t={dict.testimonials} lang={lang} /> : null}
        <PricingSection t={dict.pricing} lang={lang} />
        <GuaranteeSection t={dict.guarantee} lang={lang} />
        <FaqSection t={dict.faq} lang={lang} />
        <FinalCtaSection t={dict.finalCta} lang={lang} />
      </main>
      <SiteFooter t={dict.chrome} lang={lang} />
    </>
  );
}

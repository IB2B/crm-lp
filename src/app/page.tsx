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
import { PlatformSection } from "@/components/landing/platform-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { showTestimonials } from "@/content/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <PlatformSection />
        <ProblemSection />
        <InsideTorchSection />
        <AppsSection />
        <HowItWorksSection />
        <IndustriesSection />
        <ComparisonSection />
        <AgenciesSection />
        {showTestimonials ? <TestimonialsSection /> : null}
        <PricingSection />
        <GuaranteeSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

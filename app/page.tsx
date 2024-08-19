import PageWrapper from "@/components/Container/PageWrapper";
import { AccordionComponent } from "@/components/homepage/accordion-component";
import AnimatedLogoCloud from "@/components/homepage/animated-logo-cloud";
import Hero from "@/components/homepage/hero";
import Feature from "@/components/homepage/feature-1";
import FeatureCTA from "@/components/homepage/feature-cta";
import { Button } from "@/components/ui/button";
import Footer from "@/components/homepage/footer";
import CTA from "@/components/homepage/cta-1";

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center items-center w-full mt-[1rem] p-3">
        <Hero />
      </div>
      <FeatureCTA />
      <CTA />
      <AccordionComponent />
      <Footer />
    </PageWrapper>
  );
}

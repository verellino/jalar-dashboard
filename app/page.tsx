import PageWrapper from "@/components/Container/PageWrapper";
import { AccordionComponent } from "@/components/LandingPage/AccordionComponent";
import AnimatedLogoCloud from "@/components/LandingPage/AnimatedLogoCloud";
import BlogSample from "@/components/LandingPage/BlogSamples";
import HeroSection from "@/components/LandingPage/HeroSection";
import MarketingCards from "@/components/LandingPage/MarketingCards";
import PricingPage from "@/components/LandingPage/Pricing";
import SideBySide from "@/components/LandingPage/SideBySide";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center items-center w-full mt-[1rem] p-3">
        <HeroSection />
        <div className="w-[80%] py-[4rem] dark:hidden">
          <AnimatedLogoCloud />
        </div>
      </div>
    </PageWrapper>
  );
}

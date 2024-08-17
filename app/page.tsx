import PageWrapper from "@/components/Container/PageWrapper";
import AnimatedLogoCloud from "@/components/homepage/animated-logo-cloud";
import HeroSection from "@/components/LandingPage/HeroSection";
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

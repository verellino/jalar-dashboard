// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";

// Asset imports
import screenPrint from "@/public/screenprint-1.jpg";

const Hero = () => {
  return (
    <Container className="">
      <div>
        <Button asChild className="mb-6 w-fit" size={"sm"} variant={"outline"}>
          <Link className="not-prose" href="https://9d8.dev">
            Lorem ipsum dolor sit amet <ArrowRight className="w-4" />
          </Link>
        </Button>
        <h1 className="text-4xl">
          <Balancer>Jalar Dashboard</Balancer>
        </h1>
        <h3 className="text-muted-foreground mb-4">
          <Balancer>
            Everything you need to run your business like Escobar. An admin
            dashboard that features your orders, finance, inventory and
            scheduling to manage all your processes in one simple and effective
            dashboard.
          </Balancer>
        </h3>
        <Link
          className="not-prose text-orange-600 hover:opacity-80"
          href="#feature"
        >
          Get to know all our features <ArrowRight className="w-4 inline" />
        </Link>
        <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[420px] md:rounded-xl">
          <Image
            className="h-full w-full object-cover object-center"
            src={screenPrint}
            width={1920}
            height={1080}
            alt="hero image"
            placeholder="blur"
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;

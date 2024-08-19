import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/jalar-logo-w.png";

export default function Footer() {
  return (
    <footer className="w-full p-10 border-t">
      <div>
        <div className="grid gap-6">
          <div className="grid gap-6">
            <Link href="/">
              <h3 className="sr-only">Jalar Dashboard</h3>
              <Image
                src={Logo}
                alt="Jalar"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 light:invert"
              ></Image>
            </Link>
            <p>
              Jalar Dashboard is an all in one solution to run your business as
              smooth as the cartels.
            </p>
            <div className="mb-6 flex flex-col gap-4 text-sm text-muted-foreground underline underline-offset-4 md:mb-0 md:flex-row">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </div>
            <p className="text-muted-foreground">
              © Jalar . All rights reserved. 2024-present.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

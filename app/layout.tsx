import Provider from "@/app/provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import AuthWrapper from "@/components/wrapper/auth-wrapper";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://verellino.id"),
  title: {
    default: "Jalar Dashboard",
    template: `%s | Jalar Dashboard`,
  },
  description:
    "Everything you need to quickly build your SaaS giving you time to focus on what really matters",
  openGraph: {
    description:
      "Everything you need to quickly build your SaaS giving you time to focus on what really matters",
    images: [
      "https://utfs.io/f/8a428f85-ae83-4ca7-9237-6f8b65411293-eun6ii.png",
    ],
    url: "https://verellino.id/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jalar Dashboard",
    description:
      "Everything you need to quickly build your SaaS giving you time to focus on what really matters.",
    siteId: "",
    creator: "@verellino",
    creatorId: "",
    images: [
      "https://utfs.io/f/8a428f85-ae83-4ca7-9237-6f8b65411293-eun6ii.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthWrapper>
      <html lang="en" suppressHydrationWarning>
        <head></head>
        <body className={GeistSans.className}>
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </Provider>
          <Analytics />
        </body>
      </html>
    </AuthWrapper>
  );
}

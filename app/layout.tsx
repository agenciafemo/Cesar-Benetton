import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { doctorProfile, siteUrl } from "@/config/seo";

const pageTitle =
  "Dr. César Benetton | Ortopedista de Pé e Tornozelo em Criciúma";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: doctorProfile.description,
  applicationName: siteConfig.name,
  authors: [{ name: doctorProfile.name, url: siteUrl }],
  creator: doctorProfile.name,
  publisher: doctorProfile.name,
  category: "Saúde",
  keywords: [
    "ortopedista Criciúma",
    "ortopedista pé e tornozelo",
    "cirurgião pé e tornozelo",
    "traumatologista Criciúma",
    "joanete",
    "fascite plantar",
    "entorse de tornozelo",
    "Dr. César Benetton",
  ],
  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/" },
  },
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: siteConfig.name,
    title: pageTitle,
    description: doctorProfile.description,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: doctorProfile.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#021533" },
    { media: "(prefers-color-scheme: dark)", color: "#021533" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <body
        className={clsx("min-h-screen bg-gray-light font-sans antialiased")}
      >
        <StructuredData />
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="lg:pt-16">{children}</main>
            <SiteFooter />
          </div>
          <FloatingWhatsapp />
        </Providers>
      </body>
    </html>
  );
}

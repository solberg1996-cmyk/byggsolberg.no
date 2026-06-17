import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { rootMetadata, localBusinessJsonLd } from "@/lib/seo";

// Display – redaksjonell serif med karakter
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

// Brødtekst/UI – humanistisk grotesk, nordisk og lesbar
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${fraunces.variable} ${hanken.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-20 lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}

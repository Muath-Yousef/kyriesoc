import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import NavClient from "@/components/NavClient";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "SOC Root — Enterprise Cybersecurity & Managed SOC",
    template: "%s — SOC Root",
  },
  description:
    "Military-grade automated cybersecurity platform for businesses internationally. Continuous pentesting, SIEM monitoring, NCA ECC 2.0 compliance, and security awareness training — at SMB prices.",
  keywords: [
    "cybersecurity UAE", "cybersecurity Jordan", "NCA ECC compliance",
    "penetration testing", "vulnerability assessment", "SIEM monitoring",
    "SOC as a service", "ISO 27001", "GRC consulting", "security awareness training",
  ],
  authors: [{ name: "Muath Yousef", url: "https://socroot.com/about" }],
  creator: "SOC Root",
  metadataBase: new URL("https://socroot.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://socroot.com",
    siteName: "SOC Root",
    title: "SOC Root — Enterprise Cybersecurity & Managed SOC",
    description:
      "Automated cybersecurity — continuous pentesting, compliance monitoring, and expert analysis. We hack you before they do.",
    images: [
      {
        url: "https://socroot.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SOC Root Cybersecurity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOC Root — Enterprise Cybersecurity & Managed SOC",
    description: "Automated pentesting, SIEM, and compliance monitoring at SMB prices.",
    creator: "@RootSoc",
    images: ["https://socroot.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "socroot-search-console-verification",
  },
  alternates: {
    canonical: "https://socroot.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="bg-[#0c0c0c] text-[#f5f5f4] font-sans antialiased min-h-screen">
        <StructuredData />
        <Analytics />
        {/* Navigation — client component handles mobile menu */}
        <NavClient />

        <main className="pt-[72px] relative z-10">{children}</main>

        <Footer />

        
        {/* Cookie / Privacy Banner */}
        <CookieBanner />
      </body>
    </html>
  );
}

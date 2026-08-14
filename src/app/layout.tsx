import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import NavClient from "@/components/NavClient";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "SOCRoot — Evidence-Driven Security Engineering",
    template: "%s — SOC Root",
  },
  description:
    "A pre-production cybersecurity initiative developing automatable subscription services with measurable, evidence-backed value for smaller organizations.",
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
    title: "SOCRoot — Evidence-Driven Security Engineering",
    description:
      "Pre-production subscription services for evidence-centered security workflows and human-controlled automation.",
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
    title: "SOCRoot — Evidence-Driven Security Engineering",
    description: "Pre-production cybersecurity subscription services with evidence workflows and human-controlled automation.",
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
        {/* Navigation — client component handles mobile menu */}
        <NavClient />

        <main className="pt-[72px] relative z-10">{children}</main>

        <Footer />

        
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import NavClient from "@/components/NavClient";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "SOC Root — Enterprise Cybersecurity for UAE & Jordan",
    template: "%s — SOC Root",
  },
  description:
    "Military-grade automated cybersecurity platform for businesses in the UAE and Jordan. Continuous pentesting, SIEM monitoring, NCA ECC 2.0 compliance, and security awareness training — at SMB prices.",
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
    title: "SOC Root — Enterprise Cybersecurity for UAE & Jordan",
    description:
      "Automated cybersecurity — continuous pentesting, NCA ECC compliance, SIEM monitoring. We hack you before they do.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOC Root — Enterprise Cybersecurity for UAE & Jordan",
    description: "Automated pentesting, SIEM, and NCA ECC compliance at SMB prices.",
    creator: "@RootSoc",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="bg-[#0c0c0c] text-[#f5f5f4] font-sans antialiased min-h-screen">
        {/* Navigation — client component handles mobile menu */}
        <NavClient />

        <main className="pt-[72px] relative z-10">{children}</main>

        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}

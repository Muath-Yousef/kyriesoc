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
  title: "SOC Root | Enterprise Cybersecurity",
  description:
    "Military-grade cybersecurity for businesses internationally. Continuous pentesting, SIEM monitoring, NCA ECC compliance — at SMB prices.",
  keywords: "cybersecurity, SOC, SIEM, pentesting, NCA ECC, ISO 27001",
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

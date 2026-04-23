import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import NavClient from "@/components/NavClient";

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

        {/* Footer */}
        <footer className="relative z-10 border-t border-emerald-500/10 py-16 mt-24">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0c0c0c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </span>
                  <span className="font-bold text-lg">
                    <span className="text-emerald-400">SOC</span>
                    <span className="text-white"> Root</span>
                  </span>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                  Democratizing enterprise-grade cybersecurity for businesses internationally. Powered by automation, expert analysis, and open-source intelligence.
                </p>
                <div className="flex gap-4 mt-6">
                  <span className="text-xs font-mono text-neutral-600 bg-white/5 px-3 py-1.5 rounded border border-white/5">NCA ECC 2.0</span>
                  <span className="text-xs font-mono text-neutral-600 bg-white/5 px-3 py-1.5 rounded border border-white/5">ISO 27001</span>
                </div>
              </div>

              {/* Services */}
              <div>
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-5">Services</p>
                <ul className="space-y-3">
                  {["Threat Scanning", "Managed SOC", "Compliance", "Training"].map((s) => (
                    <li key={s}>
                      <a href="/services" className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors">{s}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-5">Company</p>
                <ul className="space-y-3">
                  {[
                    { label: "About", href: "/about" },
                    { label: "Contact", href: "/contact" },
                    { label: "Portal", href: "/portal/login" },
                    { label: "Responsible Disclosure Policy", href: "/security.txt" },
                    { label: "NCA ECC 2.0 Docs", href: "/compliance/nca-ecc" },
                    { label: "ISO 27001", href: "/compliance/iso-27001" },
                  ].map((s) => (
                    <li key={s.label}>
                      <a href={s.href} className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors">{s.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="border-t border-white/5 pt-10 mt-4 mb-8">
              <p className="text-center text-xs font-mono text-neutral-600 uppercase tracking-widest mb-6">Compliance &amp; Trust</p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: "📋", label: "NCA ECC 2.0", sub: "Aligned", href: "/compliance/nca-ecc" },
                  { icon: "🛡️", label: "ISO 27001", sub: "Framework", href: "/compliance/iso-27001" },
                  { icon: "🔒", label: "TLS Encrypted", sub: "All Comms", href: null },
                  { icon: "🔍", label: "Specialist Review", sub: "Every Report", href: null },
                  { icon: "🚫", label: "Data Privacy", sub: "Never Sold", href: null },
                  { icon: "⚡", label: "24hr Turnaround", sub: "Max Delivery", href: null },
                ].map((badge) => (
                  badge.href
                    ? <a key={badge.label} href={badge.href} className="flex flex-col items-center gap-1 px-4 py-3 bg-white/[0.03] border border-white/5 rounded-xl hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all min-w-[90px]">
                        <span className="text-xl">{badge.icon}</span>
                        <span className="text-xs font-bold text-neutral-300">{badge.label}</span>
                        <span className="text-[10px] text-neutral-600">{badge.sub}</span>
                      </a>
                    : <div key={badge.label} className="flex flex-col items-center gap-1 px-4 py-3 bg-white/[0.03] border border-white/5 rounded-xl min-w-[90px]">
                        <span className="text-xl">{badge.icon}</span>
                        <span className="text-xs font-bold text-neutral-300">{badge.label}</span>
                        <span className="text-[10px] text-neutral-600">{badge.sub}</span>
                      </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
              <p>© 2026 SOC Root — All rights reserved.</p>
              <p>Engineered by <span className="text-emerald-500">Muath Yousef</span> · Serving businesses internationally</p>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}

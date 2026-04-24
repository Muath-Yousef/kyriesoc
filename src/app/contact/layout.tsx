import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SOC Root — 24/7 Security Team",
  description: "Reach the SOC Root security team directly. WhatsApp, email, or Telegram. Active security incidents responded to immediately. Serving UAE, Jordan, and KSA.",
  keywords: "contact SOC Root, cybersecurity help UAE, security consultant Jordan, report vulnerability, emergency incident response",
  openGraph: {
    title: "Contact SOC Root — 24/7 Security Team",
    description: "Security emergency? General inquiry? Our team responds within 24 hours — or immediately via WhatsApp for active incidents.",
    url: "https://socroot.com/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Plans & Pricing — SOC Root",
  description: "Enterprise cybersecurity plans from $190/year. Starter, Guard, Governance, and Premium tiers with NCA ECC compliance, Wazuh SIEM, and dedicated analyst options.",
  keywords: "cybersecurity pricing, NCA ECC compliance, penetration testing cost, SIEM monitoring price, SOC plans UAE Jordan",
  openGraph: {
    title: "Security Plans & Pricing — SOC Root",
    description: "Vulnerability scanning, compliance mapping, SIEM monitoring — starting at $190. No hidden fees.",
    url: "https://socroot.com/services",
    type: "website",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

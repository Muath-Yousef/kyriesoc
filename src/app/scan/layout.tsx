import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free External Security Scan — SOC Root",
  description: "Get a free external vulnerability and reconnaissance scan for your business domain. Requires business email verification. NCA ECC aligned findings report included.",
  keywords: "free vulnerability scan, free penetration test, domain security check, external recon, SOC Root scan UAE Jordan",
  openGraph: {
    title: "Free External Security Scan — SOC Root",
    description: "One free scan per company. Powered by Nuclei, Subfinder, and AI triage. Get your free vulnerability report in under 45 minutes.",
    url: "https://socroot.com/scan",
    type: "website",
  },
};

export default function ScanLayout({ children }: { children: React.ReactNode }) {
  return children;
}

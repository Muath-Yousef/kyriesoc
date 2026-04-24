import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SOC Root — Cybersecurity Engineering Team",
  description: "Meet the team behind SOC Root. Founded by an offensive security engineer with 4+ years in penetration testing and SOAR automation, serving UAE, Jordan, and KSA markets.",
  keywords: "SOC Root about, cybersecurity company UAE Jordan, offensive security engineer, NCA ECC consultant, SIEM automation",
  openGraph: {
    title: "About SOC Root — Cybersecurity Engineering Team",
    description: "Built by security practitioners, not marketers. Learn how SOC Root delivers enterprise-grade defense at SMB prices across the Middle East.",
    url: "https://socroot.com/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

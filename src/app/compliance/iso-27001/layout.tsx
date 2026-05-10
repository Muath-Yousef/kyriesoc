import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ISO 27001 Compliance | SOC Root",
  description: "Achieve and maintain ISO 27001 certification. Comprehensive ISMS development, gap analysis, and auditor-ready security operations.",
  openGraph: {
    title: "ISO 27001 Compliance | SOC Root",
    description: "Practical path to ISO 27001 certification with gap assessment, SIEM monitoring, and auditor-ready documentation.",
    url: "https://socroot.com/compliance/iso-27001",
    siteName: "SOC Root",
    type: "website",
  },
};

export default function Iso27001Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NCA ECC 2.0 Compliance | SOC Root",
  description: "Ensure your organization in Saudi Arabia meets all 23 Essential Cybersecurity Controls (ECC). Gap analysis, remediation, and continuous monitoring.",
  openGraph: {
    title: "NCA ECC 2.0 Compliance | SOC Root",
    description: "Continuous NCA ECC compliance monitoring with automated gap analysis and audit-ready documentation for Saudi organizations.",
    url: "https://socroot.com/compliance/nca-ecc",
    siteName: "SOC Root",
    type: "website",
  },
};

export default function NcaEccLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

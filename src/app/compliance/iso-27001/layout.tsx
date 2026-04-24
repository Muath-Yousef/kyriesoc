import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ISO 27001 Compliance | SOC Root",
  description: "Achieve and maintain ISO 27001 certification. Comprehensive ISMS development, gap analysis, and auditor-ready security operations.",
};

export default function Iso27001Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

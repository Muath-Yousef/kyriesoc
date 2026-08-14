import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ISO 27001 Readiness Reference | SOCRoot",
  description: "Educational ISO 27001 readiness content and evidence-organization guidance; not certification, legal advice, or auditor attestation.",
  openGraph: {
    title: "ISO 27001 Readiness Reference | SOCRoot",
    description: "A practical overview of evidence and readiness concepts with explicit limits on certification claims.",
    url: "https://socroot.com/compliance/iso-27001",
    siteName: "SOC Root",
    type: "website",
  },
};

export default function Iso27001Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

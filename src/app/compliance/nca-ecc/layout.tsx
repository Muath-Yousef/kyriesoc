import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NCA ECC Readiness Reference | SOCRoot",
  description: "An educational readiness reference for discussing ECC control objectives and evidence gaps; not certification or auditor attestation.",
  openGraph: {
    title: "NCA ECC Readiness Reference | SOCRoot",
    description: "A simplified control-and-evidence discussion tool with explicit limits on compliance claims.",
    url: "https://socroot.com/compliance/nca-ecc",
    siteName: "SOC Root",
    type: "website",
  },
};

export default function NcaEccLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

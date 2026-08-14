import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Tracks & Scope — SOCRoot",
  description: "Pre-production cybersecurity capability tracks with explicit authorization, evidence, human-control, and rollback requirements.",
  keywords: "cybersecurity engineering, NCA ECC readiness, evidence workflow, human-controlled automation, SOC architecture",
  openGraph: {
    title: "Capability Tracks & Scope — SOCRoot",
    description: "Review bounded assessment, SOC workflow, readiness, and training tracks without unsupported SLA or certification claims.",
    url: "https://socroot.com/services",
    type: "website",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

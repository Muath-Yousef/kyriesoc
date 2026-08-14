import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authorized Review Intake | SOCRoot",
  description: "Prepare ownership evidence, boundaries, exclusions, safety controls, and reporting expectations for a bounded security review.",
  keywords: "authorized security review, assessment scope, evidence handling, safe security testing",
  openGraph: {
    title: "Authorized Review Intake | SOCRoot",
    description: "A pre-production scoping checklist; this public page does not launch a scan or promise a report.",
    url: "https://socroot.com/scan",
    type: "website",
  },
};

export default function ScanLayout({ children }: { children: React.ReactNode }) {
  return children;
}

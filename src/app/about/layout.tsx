import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SOCRoot — Cybersecurity Subscription Initiative",
  description: "How Mu'ath Yousef is validating SOCRoot as an independent cybersecurity subscription initiative, alongside the separate open-source Project Synapse graduation project.",
  keywords: "SOC Root about, cybersecurity company UAE Jordan, offensive security engineer, NCA ECC consultant, SIEM automation",
  openGraph: {
    title: "About SOCRoot — Cybersecurity Engineering Initiative",
    description: "Review SOCRoot's commercial thesis, maturity, safety principles, and boundary from Project Synapse.",
    url: "https://socroot.com/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

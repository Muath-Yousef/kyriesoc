import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SOCRoot — Cybersecurity Engineering Initiative",
  description: "How Mu'ath Yousef's Project Synapse evolved into SOCRoot, a pre-production cybersecurity engineering initiative focused on evidence, SOC workflows, and safe automation.",
  keywords: "SOC Root about, cybersecurity company UAE Jordan, offensive security engineer, NCA ECC consultant, SIEM automation",
  openGraph: {
    title: "About SOCRoot — Cybersecurity Engineering Initiative",
    description: "Review the origin, maturity, principles, and public repository boundaries behind SOCRoot.",
    url: "https://socroot.com/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

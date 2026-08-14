import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Review Questions | SOCRoot",
  description: "Evidence-oriented questions for discussing security ownership, identity, assets, detection, response, recovery, suppliers, and learning.",
  keywords: "cybersecurity checklist, security evidence, security review questions, control ownership",
  openGraph: {
    title: "Security Review Questions | SOCRoot",
    description: "A conversation aid, not a posture score, audit, penetration test, or compliance determination.",
    url: "https://socroot.com/resources/security-guide",
    type: "article",
  },
};

export default function SecurityGuideLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Security Posture Checklist — Free Assessment",
  description: "Answer 10 questions to assess your organization's cybersecurity posture. Get an instant score and personalized recommendations from SOC Root's security engineers.",
  keywords: "cybersecurity checklist, security posture assessment, NCA ECC audit, business security UAE Jordan, free security audit",
  openGraph: {
    title: "Business Security Posture Checklist — SOC Root",
    description: "10 questions. Instant score. Find out how exposed your business is to cyber threats — for free.",
    url: "https://socroot.com/resources/security-guide",
    type: "article",
  },
};

export default function SecurityGuideLayout({ children }: { children: React.ReactNode }) {
  return children;
}

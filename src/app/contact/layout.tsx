import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SOCRoot — Scope an Engineering Conversation",
  description: "Contact SOCRoot about authorized assessment work, architecture collaboration, or a bounded pre-production pilot.",
  keywords: "contact SOC Root, cybersecurity help UAE, security consultant Jordan, report vulnerability, emergency incident response",
  openGraph: {
    title: "Contact SOCRoot — Scope an Engineering Conversation",
    description: "Start with authorization, scope, evidence requirements, and operational constraints.",
    url: "https://socroot.com/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

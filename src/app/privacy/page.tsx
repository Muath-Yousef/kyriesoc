import Link from "next/link";

export const metadata = {
  title: "Privacy Notice | SOCRoot",
  description: "A plain-language privacy notice for the SOCRoot pre-production portfolio.",
};

const SECTIONS = [
  {
    title: "Current scope",
    body: "SOCRoot is a pre-production engineering portfolio, not an active client portal. The public site does not accept payments, create customer accounts, or initiate vulnerability scans.",
  },
  {
    title: "Information you choose to provide",
    body: "If you contact Muath Yousef, the message and contact details you provide may be used to respond and to maintain a reasonable record of the conversation. Do not send passwords, secrets, production datasets, vulnerability evidence, or personal data that is not necessary for an initial discussion.",
  },
  {
    title: "Website data",
    body: "This repository does not embed a third-party analytics script or advertising tracker. The hosting provider may still process ordinary request metadata, such as an IP address, user agent, timestamp, and requested path, for delivery, reliability, and abuse prevention under its own terms.",
  },
  {
    title: "Security review data",
    body: "No security target or assessment evidence should be submitted until written authorization, scope, retention, access, and deletion rules have been agreed. Raw client data must not be sent to an external AI service by default.",
  },
  {
    title: "Requests and changes",
    body: "You may ask for correction or deletion of information you previously supplied by using the contact page. This notice will be revised before any production account, order, telemetry, newsletter, or assessment workflow is enabled.",
  },
];

export default function PrivacyNotice() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-teal-400">Plain-language notice</p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight">Privacy</h1>
        <p className="mb-12 text-sm text-neutral-500">Last reviewed: 14 August 2026 · Applies to the public pre-production portfolio</p>
        <div className="space-y-9">
          {SECTIONS.map((section) => (
            <section key={section.title} className="border-t border-white/5 pt-7">
              <h2 className="mb-3 text-xl font-bold text-white">{section.title}</h2>
              <p className="leading-relaxed text-neutral-400">{section.body}</p>
            </section>
          ))}
        </div>
        <div className="angular-cut mt-12 border border-teal-500/20 bg-teal-500/5 p-6">
          <p className="mb-4 text-sm text-neutral-300">Questions or a data request?</p>
          <Link href="/contact" className="text-sm font-bold text-teal-400 hover:text-teal-300">Use the contact page →</Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Use Terms | SOCRoot",
  description: "Terms for using the public SOCRoot pre-production portfolio and reference materials.",
};

const TERMS = [
  {
    title: "Portfolio status",
    body: "This website documents engineering work in progress. It does not represent a production managed service, active SOC, accredited certification body, compliance auditor, or online store.",
  },
  {
    title: "No service commitment",
    body: "Public descriptions, validation targets, sample workflows, and synthetic reports are not an SLA, warranty, quote, or guarantee. Any real engagement would require a separate written scope, authorization, deliverables, schedule, price, and data-handling agreement.",
  },
  {
    title: "Authorized security activity only",
    body: "Do not use these materials to test a system without the owner’s explicit permission. A valid scope must define targets, exclusions, techniques, rate limits, contacts, evidence handling, and stop conditions.",
  },
  {
    title: "Reference material",
    body: "Framework references and readiness checklists are educational aids. They do not certify compliance with NCA ECC, ISO 27001, PDPL, GDPR, or any other legal or regulatory requirement.",
  },
  {
    title: "Samples and limitations",
    body: "Named scenarios and assessment artifacts are synthetic unless clearly identified otherwise. Software and documentation are provided under the licenses published in their respective repositories and may contain defects or incomplete controls.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-teal-400">Public portfolio</p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight">Use terms</h1>
        <p className="mb-12 text-sm text-neutral-500">Last reviewed: 14 August 2026</p>
        <div className="space-y-9">
          {TERMS.map((term, index) => (
            <section key={term.title} className="border-t border-white/5 pt-7">
              <h2 className="mb-3 text-xl font-bold text-white">{index + 1}. {term.title}</h2>
              <p className="leading-relaxed text-neutral-400">{term.body}</p>
            </section>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/privacy" className="text-sm font-bold text-teal-400 hover:text-teal-300">Privacy notice</Link>
          <Link href="/security" className="text-sm font-bold text-teal-400 hover:text-teal-300">Security policy</Link>
          <Link href="/contact" className="text-sm font-bold text-teal-400 hover:text-teal-300">Contact</Link>
        </div>
      </div>
    </div>
  );
}

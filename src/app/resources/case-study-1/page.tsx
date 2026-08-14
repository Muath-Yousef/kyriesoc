import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Synthetic Fintech Security Scenario — SOCRoot",
  description: "A clearly labeled synthetic scenario used to explain a safe exposure-assessment and evidence workflow. It is not a customer case study.",
};

const STEPS = [
  {
    title: "1. Authorization and scope",
    desc: "The fictional organization defines approved domains, cloud accounts, exclusions, testing windows, data-handling rules, and named decision owners.",
  },
  {
    title: "2. Passive discovery",
    desc: "The workflow uses public certificate and DNS sources to build a candidate inventory. Every asset remains untrusted until ownership is confirmed.",
  },
  {
    title: "3. Controlled validation",
    desc: "Approved endpoints are checked with rate limits and safe templates. Scanner output is not treated as a finding until the evidence is reviewed.",
  },
  {
    title: "4. Human triage",
    desc: "An operator records confidence, impact, uncertainty, and reproduction steps. Sensitive actions are proposed in dry-run mode only.",
  },
  {
    title: "5. Remediation evidence",
    desc: "The fictional team applies an approved fix, retests it, captures before-and-after evidence, and records rollback considerations.",
  },
];

export default function SyntheticScenario() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/resources" className="text-sm text-neutral-500 hover:text-teal-400 transition-colors">
          ← Back to resources
        </Link>

        <header className="mt-10 mb-14">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-[10px] font-mono text-amber-300 border border-amber-500/25 bg-amber-500/[0.04] px-2 py-1 uppercase tracking-widest">
              Synthetic scenario
            </span>
            <span className="text-[10px] font-mono text-neutral-500 border border-white/10 px-2 py-1 uppercase tracking-widest">
              No customer data
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Fintech exposure assessment: a safe workflow walkthrough
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            This fictional scenario explains how SOCRoot is intended to structure authorization, discovery, triage, remediation, and evidence. It does not describe a real client, deployment, finding count, turnaround time, or compliance outcome.
          </p>
        </header>

        <section className="border border-amber-500/20 bg-amber-500/[0.04] p-7 mb-12">
          <h2 className="text-xl font-bold text-white mb-3">Scenario boundary</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            The fictional organization operates a cloud-hosted payment application and wants to understand accidental external exposure. Names, domains, infrastructure details, findings, and outcomes are deliberately omitted so the article cannot be mistaken for customer evidence.
          </p>
        </section>

        <section className="mb-14">
          <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Workflow</p>
          <h2 className="text-3xl font-extrabold mb-7">From authorization to evidence</h2>
          <div className="space-y-5">
            {STEPS.map((step) => (
              <article key={step.title} className="p-6 border border-white/8 bg-white/[0.02]">
                <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-14">
          <article className="p-7 border border-white/8 bg-white/[0.02]">
            <h2 className="text-xl font-bold text-white mb-4">What this demonstrates</h2>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>• explicit authorization and asset ownership;</li>
              <li>• evidence provenance and human review;</li>
              <li>• dry-run-first response design;</li>
              <li>• retesting and rollback documentation.</li>
            </ul>
          </article>
          <article className="p-7 border border-white/8 bg-white/[0.02]">
            <h2 className="text-xl font-bold text-white mb-4">What this does not prove</h2>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>• a real customer engagement;</li>
              <li>• a production deployment or SLA;</li>
              <li>• regulatory compliance or certification;</li>
              <li>• autonomous exploitation or remediation.</li>
            </ul>
          </article>
        </section>

        <section className="text-center border-t border-white/5 pt-12">
          <h2 className="text-2xl font-extrabold mb-4">Review the public architecture</h2>
          <p className="text-neutral-500 mb-7">
            The Project Synapse repository documents the broader system boundaries, maturity, and safety principles behind this workflow.
          </p>
          <a href="https://github.com/Muath-Yousef/project-synapse" className="inline-block bg-teal-500 hover:bg-teal-400 text-black font-bold px-7 py-3 transition-colors">
            Open Project Synapse
          </a>
        </section>
      </div>
    </div>
  );
}

"use client";

import { use } from "react";
import Link from "next/link";
import DynamicBackground from "@/components/DynamicBackground";

const PLAN_DATA = {
  starter: {
    name: "Starter scope",
    status: "Reference engagement design",
    summary: "A small, authorized exposure-assessment scope intended to establish an evidence-backed baseline.",
    outcomes: ["Confirmed authorization and asset list", "Prioritized findings", "Reproduction evidence", "Remediation guidance"],
    exclusions: ["Continuous monitoring", "Unattended exploitation", "Production uptime commitment", "Regulatory certification"],
  },
  guard: {
    name: "Guard pilot",
    status: "Pre-production pilot design",
    summary: "A bounded SOC workflow pilot using approved or synthetic telemetry to validate alert handling and evidence capture.",
    outcomes: ["Telemetry and alert-flow map", "Triage decision record", "Human approval path", "Dry-run response evidence"],
    exclusions: ["Public 24/7 coverage claim", "Guaranteed response time", "Unattended remediation", "Live client deployment without validation"],
  },
  governance: {
    name: "Governance readiness",
    status: "Advisory mapping design",
    summary: "A structured mapping between available technical evidence and selected control objectives to support readiness planning.",
    outcomes: ["Evidence inventory", "Control mapping", "Gap register", "Prioritized improvement plan"],
    exclusions: ["Certification", "Legal opinion", "Auditor attestation", "Claim of full compliance"],
  },
  premium: {
    name: "Integrated validation track",
    status: "Future scoped design",
    summary: "A possible combination of architecture review, SOC workflow validation, and governance evidence after prerequisite gates are met.",
    outcomes: ["Written responsibility boundaries", "Integration test plan", "Safety and rollback controls", "Operational evidence package"],
    exclusions: ["Dedicated 24/7 analyst claim", "15-minute SLA", "Quarterly pentesting promise", "Nation-state protection claim"],
  },
};

const REQUIRED_GATES = [
  "Asset ownership and written authorization are confirmed.",
  "Scope, exclusions, and data-handling rules are documented.",
  "The environment is safe to test and has a rollback path.",
  "Sensitive response actions remain human-controlled.",
  "Maturity and success criteria are agreed before work begins.",
];

export default function PlanPage({ params }: { params: Promise<{ planId: string }> }) {
  const { planId } = use(params);
  const plan = PLAN_DATA[planId as keyof typeof PLAN_DATA];

  if (!plan) {
    return <div className="min-h-screen pt-32 text-center text-white">Plan not found</div>;
  }

  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      <DynamicBackground />
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <header className="text-center mb-14">
          <span className="inline-block font-mono text-[10px] text-amber-300 uppercase tracking-widest border border-amber-500/20 bg-amber-500/[0.04] px-3 py-1.5 mb-6">
            {plan.status}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5">{plan.name}</h1>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto">{plan.summary}</p>
        </header>

        <section className="border border-amber-500/20 bg-amber-500/[0.04] p-6 md:p-8 mb-10">
          <h2 className="font-bold text-white mb-3">No public offer or SLA is created by this page.</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            This is an engineering reference for scoping and validation. Pricing, availability, service levels, staffing, and production commitments require a separate written agreement supported by current operational evidence.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <section className="p-7 border border-white/8 bg-white/[0.02]">
            <h2 className="text-xl font-bold text-white mb-5">Intended outcomes</h2>
            <ul className="space-y-4">
              {plan.outcomes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-neutral-400">
                  <span className="text-teal-500">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="p-7 border border-white/8 bg-white/[0.02]">
            <h2 className="text-xl font-bold text-white mb-5">Explicit exclusions</h2>
            <ul className="space-y-4">
              {plan.exclusions.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-neutral-400">
                  <span className="text-red-400">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="p-7 md:p-9 border border-white/8 bg-black/20 mb-12">
          <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Prerequisites</p>
          <h2 className="text-3xl font-extrabold mb-6">Validation gates</h2>
          <div className="divide-y divide-white/5">
            {REQUIRED_GATES.map((gate, index) => (
              <div key={gate} className="grid grid-cols-[44px_1fr] gap-4 py-4 text-sm text-neutral-400">
                <span className="font-mono text-teal-500/70">{String(index + 1).padStart(2, "0")}</span>
                <span>{gate}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <p className="text-neutral-500 mb-7">Have an authorized, bounded use case that matches these gates?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-teal-500 hover:bg-teal-400 text-black font-bold px-7 py-3 transition-colors">
              Discuss the scope
            </Link>
            <Link href="/services" className="border border-white/10 hover:border-teal-500/30 px-7 py-3 text-neutral-300 transition-colors">
              Compare capability tracks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Validation Targets — SOC Root",
  description: "Pre-production service targets, validation gates, and the evidence required before SOC Root can publish a contractual SLA.",
};

const TARGETS = [
  {
    name: "Availability",
    current: "No public uptime guarantee",
    evidence: "Measured production deployment, external monitoring, incident records, maintenance process, and recovery tests.",
  },
  {
    name: "Response time",
    current: "Agreed per authorized scope",
    evidence: "Staffing coverage, paging tests, severity definitions, escalation ownership, and a sustained measurement period.",
  },
  {
    name: "Remediation",
    current: "Dry-run and human approval",
    evidence: "Integration tests, policy enforcement, rollback validation, audit logs, and client-specific authorization.",
  },
  {
    name: "Reporting",
    current: "Deliverables defined before work",
    evidence: "Scope, evidence requirements, review criteria, data-retention rules, and acceptance sign-off.",
  },
];

const SEVERITY = [
  ["Critical", "Active exploitation or material impact requiring immediate human assessment."],
  ["High", "A validated weakness with serious impact or a credible path to exploitation."],
  ["Medium", "A confirmed weakness with constrained impact, prerequisites, or mitigating controls."],
  ["Low / informational", "A hardening opportunity, observation, or defense-in-depth recommendation."],
];

export default function ServiceTargets() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <header className="mb-14 max-w-3xl">
          <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Pre-production policy</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Service validation <span className="text-teal-400">targets</span>
          </h1>
          <p className="text-neutral-400 leading-relaxed">
            SOCRoot does not currently publish a contractual uptime or response-time SLA. This page records the evidence gates that must be satisfied before a service commitment can be represented as proven.
          </p>
        </header>

        <section className="border border-amber-500/20 bg-amber-500/[0.04] p-6 md:p-8 mb-12">
          <h2 className="font-bold text-white mb-3">Why the old guarantee language was removed</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            A 99.9% uptime claim, fixed response windows, or 24/7 coverage requires deployed monitoring, measured history, staffing, escalation ownership, and contractual terms. Architecture and prototype code alone do not prove those conditions.
          </p>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-5">
            {TARGETS.map((target) => (
              <article key={target.name} className="p-7 border border-white/8 bg-white/[0.02] angular-cut bg-noise glass-dark">
                <p className="font-mono text-[10px] text-teal-400 uppercase tracking-widest mb-3">{target.name}</p>
                <h2 className="text-xl font-bold text-white mb-3">{target.current}</h2>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  <strong className="text-neutral-300">Required evidence:</strong> {target.evidence}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Common language</p>
          <h2 className="text-3xl font-extrabold mb-7">Severity classification</h2>
          <div className="divide-y divide-white/5 border-y border-white/5">
            {SEVERITY.map(([name, description]) => (
              <div key={name} className="grid md:grid-cols-[180px_1fr] gap-4 py-5">
                <h3 className="font-bold text-white">{name}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-600 mt-5">
            Classification does not create a response-time guarantee. A response window is defined only in a written engagement with verified coverage.
          </p>
        </section>

        <section className="text-center border-t border-white/5 pt-12">
          <h2 className="text-3xl font-extrabold mb-4">Need a scoped service target?</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto mb-7">
            Start by defining the environment, severity model, coverage hours, evidence, escalation ownership, and rollback responsibilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-teal-500 hover:bg-teal-400 text-black font-bold px-7 py-3 transition-colors">
              Discuss a scope
            </Link>
            <Link href="/services" className="border border-white/10 hover:border-teal-500/30 px-7 py-3 text-neutral-300 transition-colors">
              Capability tracks
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

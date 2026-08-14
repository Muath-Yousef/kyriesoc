"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const TRACKS = [
  {
    name: "Authorized exposure assessment",
    status: "Scoped engagement design",
    desc: "A bounded review of approved external assets with explicit ownership, exclusions, evidence handling, and acceptance criteria.",
    outputs: ["Scope and authorization record", "Prioritized findings", "Reproduction evidence", "Remediation guidance"],
  },
  {
    name: "SOC workflow prototype",
    status: "Pre-production validation",
    desc: "A lab or pilot workflow connecting alerts, enrichment, human approval, response proposals, and an evidence trail.",
    outputs: ["Synthetic or approved telemetry", "Triage decision record", "Dry-run response", "Operator and rollback notes"],
  },
  {
    name: "Architecture and control mapping",
    status: "Advisory / readiness support",
    desc: "A structured comparison between current technical evidence and selected security-control objectives. It is not certification or legal assurance.",
    outputs: ["Current-state assumptions", "Evidence-to-control mapping", "Gap register", "Prioritized next steps"],
  },
  {
    name: "Security awareness material",
    status: "Educational content",
    desc: "Practical training content and exercises that can support an organization’s program but do not constitute an accredited certification.",
    outputs: ["Learning modules", "Scenario exercises", "Knowledge checks", "Completion record"],
  },
];

const GATES = [
  "Written authorization and target ownership",
  "Defined scope, exclusions, and data-handling rules",
  "Synthetic data unless real data is explicitly approved",
  "SOAR_DRY_RUN=true for demonstrations and pilots",
  "Human approval for sensitive actions",
  "Documented verification and rollback steps",
];

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Capability tracks</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Defined work, <span className="text-teal-400">without invented guarantees.</span>
          </h1>
          <p className="text-neutral-400 leading-relaxed">
            SOCRoot is in pre-production validation. The tracks below describe work that can be scoped and evaluated; they are not a public managed-SOC SLA, an unattended remediation promise, or a claim of regulatory certification.
          </p>
        </header>

        <div className="max-w-4xl mx-auto mb-16 border border-amber-500/20 bg-amber-500/[0.04] p-6">
          <p className="font-mono text-xs text-amber-300 uppercase tracking-widest mb-2">Status notice</p>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Pricing, response times, uptime commitments, and production coverage are agreed only in a written, scoped engagement after technical and operational validation. This page intentionally publishes no default SLA or checkout flow.
          </p>
        </div>

        <section className="grid md:grid-cols-2 gap-6 mb-20">
          {TRACKS.map((track, index) => (
            <motion.article
              key={track.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              className="p-7 border border-white/8 bg-white/[0.02] angular-cut bg-noise glass-dark"
            >
              <span className="font-mono text-[10px] text-teal-400 uppercase tracking-widest border border-teal-500/20 px-2 py-1">
                {track.status}
              </span>
              <h2 className="text-2xl font-bold text-white mt-5 mb-3">{track.name}</h2>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6">{track.desc}</p>
              <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">Typical outputs</h3>
              <ul className="space-y-3">
                {track.outputs.map((output) => (
                  <li key={output} className="flex gap-3 text-sm text-neutral-400">
                    <span className="text-teal-500">✓</span>
                    <span>{output}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </section>

        <section className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start mb-20">
          <div>
            <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Engagement gates</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Safety is part of the deliverable.</h2>
            <p className="text-neutral-500 leading-relaxed">
              Work should stop when authorization, evidence handling, or rollback conditions are unclear. These gates are not optional process overhead; they define whether the work is professionally defensible.
            </p>
          </div>
          <div className="divide-y divide-white/5 border-y border-white/5">
            {GATES.map((gate, index) => (
              <div key={gate} className="grid grid-cols-[44px_1fr] gap-4 py-5 items-center">
                <span className="font-mono text-teal-500/70">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm text-neutral-300">{gate}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto border border-white/8 bg-white/[0.02] p-8 md:p-10 text-center">
          <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Next step</p>
          <h2 className="text-3xl font-extrabold mb-4">Start with a written scope, not a checkout.</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto mb-8">
            Describe the asset owner, the decision you need to support, the environment, and the evidence you expect. SOCRoot will not accept work that lacks authorization or requires unsupported production guarantees.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-teal-500 hover:bg-teal-400 text-black font-bold px-7 py-3 transition-colors">
              Discuss a scope
            </Link>
            <a href="https://github.com/Muath-Yousef/project-synapse" className="border border-white/10 hover:border-teal-500/30 px-7 py-3 text-neutral-300 transition-colors">
              Review the architecture
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

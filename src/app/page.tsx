"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import DynamicBackground from "@/components/DynamicBackground";

const STATUS = [
  { value: "Pre-production", label: "Current maturity" },
  { value: "HITL", label: "Sensitive actions" },
  { value: "Dry-run", label: "Default response mode" },
  { value: "Public", label: "Architecture documentation" },
];

const CAPABILITIES = [
  {
    tag: "DISCOVERY",
    title: "Authorized attack-surface discovery",
    desc: "Passive discovery and scoped scanning patterns for assets whose ownership and authorization are explicitly documented.",
  },
  {
    tag: "TRIAGE",
    title: "Evidence-centered alert triage",
    desc: "A workflow for enriching findings, reducing noise, recording decisions, and keeping the original evidence traceable.",
  },
  {
    tag: "HITL",
    title: "Human-controlled response",
    desc: "Sensitive remediation is proposed in dry-run mode and requires an operator decision, an audit record, and a rollback path.",
  },
  {
    tag: "SIEM",
    title: "Security telemetry integration",
    desc: "Engineering work around Wazuh, case management, and alert transport, with production claims gated by deployment evidence.",
  },
  {
    tag: "EVIDENCE",
    title: "Audit-friendly reporting",
    desc: "Structured findings, remediation context, and decision evidence designed to make technical work reviewable by operators and stakeholders.",
  },
  {
    tag: "ARCHITECTURE",
    title: "Modular system boundaries",
    desc: "A documented separation between the public architecture, control plane, SOC runtime, and product website.",
  },
];

const WORKFLOW = [
  {
    phase: "01",
    title: "Scope",
    desc: "Confirm authorization, asset ownership, exclusions, data-handling rules, and success criteria before any security activity.",
  },
  {
    phase: "02",
    title: "Observe",
    desc: "Collect security signals through approved sources while preserving timestamps, provenance, and client boundaries.",
  },
  {
    phase: "03",
    title: "Triage",
    desc: "Enrich and prioritize findings, flag uncertainty, and route high-impact decisions to a human operator.",
  },
  {
    phase: "04",
    title: "Act and evidence",
    desc: "Apply only approved actions, verify the result, capture evidence, and retain a documented rollback path.",
  },
];

const SYNTHETIC_LOGS = [
  "[DEMO] Synthetic alert received from an isolated lab source.",
  "[TRIAGE] Evidence linked; confidence and uncertainty recorded.",
  "[POLICY] RFC1918/CDN address detected: automatic blocking denied.",
  "[HITL] Sensitive action queued for explicit operator approval.",
  "[DRY-RUN] Proposed response validated without changing a live system.",
  "[EVIDENCE] Decision, outcome, and rollback notes stored for review.",
];

const REPOSITORIES = [
  {
    title: "Project Synapse",
    label: "Public architecture",
    href: "https://github.com/Muath-Yousef/project-synapse",
    desc: "System boundaries, maturity, engineering principles, and roadmap.",
  },
  {
    title: "SOCRoot Control Plane",
    label: "Private engineering",
    href: "https://github.com/Muath-Yousef/project-synapse#repository-role",
    desc: "Portals, RBAC, client state, evidence workflows, and observability. Private during Git-history review.",
  },
  {
    title: "SOCRoot SOC Runtime",
    label: "Private engineering",
    href: "https://github.com/Muath-Yousef/project-synapse#repository-role",
    desc: "Alert ingestion, triage, orchestration, HITL, and evidence capture. Private during Git-history review.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" as const },
  }),
};

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <DynamicBackground />

      <section className="relative min-h-[calc(100vh-72px)] flex items-center">
        <div className="container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-teal-500/30 bg-teal-500/5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="font-mono text-[11px] text-teal-300 uppercase tracking-[0.22em]">
                  Engineering initiative · pre-production validation
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.55 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.04] mb-6"
              >
                Security operations built for
                <span className="text-teal-400"> evidence and control.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.5 }}
                className="text-lg text-neutral-400 leading-relaxed max-w-2xl mb-10"
              >
                SOCRoot is an evolving cybersecurity engineering initiative that grew from Project Synapse. It explores how SIEM, SOAR, case management, observability, and AI-assisted analysis can support smaller organizations without hiding maturity, risk, or operational limits.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="https://github.com/Muath-Yousef/project-synapse"
                  className="bg-teal-500 hover:bg-teal-400 text-black font-bold px-8 py-4 transition-all text-sm uppercase tracking-wider angular-cut"
                >
                  Review the architecture
                </a>
                <Link
                  href="/about"
                  className="border border-white/10 hover:border-teal-500/40 text-neutral-300 hover:text-white font-medium px-8 py-4 rounded-lg transition-all text-sm"
                >
                  Maturity and principles →
                </Link>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/5">
                {STATUS.map((item) => (
                  <div key={item.label}>
                    <p className="text-lg md:text-xl font-extrabold text-white">{item.value}</p>
                    <p className="text-xs text-neutral-500 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-2xl border border-teal-500/15 bg-black/65 backdrop-blur-xl overflow-hidden">
                <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-neutral-500">synthetic-lab@socroot:~$</span>
                  <span className="font-mono text-[10px] text-amber-400 uppercase tracking-widest">Demonstration only</span>
                </div>
                <div className="p-6 font-mono text-xs space-y-4 min-h-[330px] flex flex-col justify-center">
                  {SYNTHETIC_LOGS.map((line, index) => (
                    <motion.div
                      key={line}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                      className="flex gap-3"
                    >
                      <span className="text-teal-500">›</span>
                      <span className={line.includes("denied") ? "text-amber-300" : "text-neutral-400"}>{line}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-28 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Architecture tracks</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Capabilities with explicit boundaries</h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              These are engineering tracks under validation—not claims of an unattended, production-grade managed SOC.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {CAPABILITIES.map((cap, index) => (
              <motion.article
                key={cap.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 border border-white/5 bg-white/[0.02] hover:border-teal-500/25 transition-colors angular-cut bg-noise glass-dark"
              >
                <span className="text-[10px] font-mono text-teal-400 border border-teal-500/20 px-2 py-1 tracking-widest">{cap.tag}</span>
                <h3 className="font-bold text-white text-lg mt-5 mb-2">{cap.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{cap.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Operating model</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">A controlled path from signal to evidence</h2>
          </div>
          <div className="space-y-5">
            {WORKFLOW.map((step, index) => (
              <motion.div
                key={step.phase}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="grid sm:grid-cols-[80px_1fr] gap-5 p-6 border border-white/5 bg-white/[0.02]"
              >
                <span className="font-mono text-2xl font-black text-teal-500/60">{step.phase}</span>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Open engineering record</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Inspect the work, not just the claims</h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              The public record separates architecture, implementation responsibilities, and maturity so each claim can be reviewed in context.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {REPOSITORIES.map((repo, index) => (
              <motion.a
                key={repo.href}
                href={repo.href}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="block p-7 border border-white/8 bg-white/[0.02] hover:border-teal-500/30 hover:bg-white/[0.04] transition-all"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-teal-400">{repo.label}</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">{repo.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{repo.desc}</p>
                <span className="inline-block mt-6 text-sm text-teal-400">Open public documentation →</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 border-t border-white/5 bg-teal-500/[0.03]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Interested in the engineering approach?</h2>
          <p className="text-neutral-400 leading-relaxed mb-8">
            Review the architecture and limitations first. For collaboration or a carefully scoped, authorized assessment, start with a written conversation about scope and evidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/Muath-Yousef/project-synapse" className="bg-teal-500 hover:bg-teal-400 text-black font-bold px-7 py-3 transition-colors">
              Architecture repository
            </a>
            <Link href="/contact" className="border border-white/10 hover:border-teal-500/40 text-neutral-300 px-7 py-3 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

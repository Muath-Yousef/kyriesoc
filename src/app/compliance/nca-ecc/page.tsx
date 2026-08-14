"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DynamicBackground from "@/components/DynamicBackground";
import NcaChecklist from "@/components/NcaChecklist";
import { Building2, Shield, RefreshCw, Handshake } from "lucide-react";

const STATS = [
  { value: "5", label: "high-level ECC domains to understand" },
  { value: "Readiness", label: "the purpose of this educational tool" },
  { value: "No", label: "certification or auditor attestation" },
];

export default function NcaEccPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f5f5f5] pt-32 pb-24 relative overflow-hidden">
      <DynamicBackground />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            NCA ECC — READINESS REFERENCE
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Understand the evidence behind
            <span className="text-teal-400"> ECC readiness.</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
            This educational page helps teams discuss selected Essential Cybersecurity Controls and identify evidence gaps. It is not a complete legal interpretation, certification, or auditor assessment.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-4 mb-16"
        >
          {STATS.map((s, i) => (
            <div key={i} className="p-5 bg-white/[0.02] border border-white/5 rounded-none text-center angular-cut bg-noise glass-dark">
              <div className="text-3xl font-black text-teal-400 mb-1">{s.value}</div>
              <div className="text-xs text-neutral-500">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="space-y-16">

          {/* Section 1 — What is ECC */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-2xl font-bold text-teal-400 mb-4">What Is ECC and Why It Matters</h2>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-none text-neutral-300 leading-relaxed text-sm space-y-3 angular-cut bg-noise glass-dark">
              <p>
                The <strong className="text-white">Essential Cybersecurity Controls (ECC-1:2018)</strong> define a cybersecurity baseline published by the NCA for relevant organizations in Saudi Arabia. A gap may create regulatory and business risk, but applicability and compliance require qualified review.
              </p>
              <p>
                A readiness review should connect each relevant control objective to current, reviewable evidence. SOCRoot can help structure that mapping, but it does not claim continuous measurement of every control or certify compliance.
              </p>
            </div>
          </motion.section>

          {/* Section 2 — Core Domains */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}>
            <h2 className="text-2xl font-bold mb-4">All 5 ECC Domains Covered</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Cybersecurity Governance",
                  desc: "Policy frameworks, risk ownership, roles and accountability — the foundation everything else is built on.",
                  Icon: Building2
                },
                {
                  title: "Cybersecurity Defense",
                  desc: "Endpoint protection, vulnerability management, network segmentation, and continuous external scanning.",
                  Icon: Shield
                },
                {
                  title: "Cybersecurity Resilience",
                  desc: "Incident response plans, business continuity, disaster recovery, and backup integrity testing.",
                  Icon: RefreshCw
                },
                {
                  title: "Third-Party Cybersecurity",
                  desc: "Vendor risk assessments, contractual cybersecurity requirements, and securing supply chains.",
                  Icon: Handshake
                },
              ].map((domain, i) => (
                <div key={i} className="p-5 bg-white/[0.02] border border-white/5 rounded-none angular-cut bg-noise glass-dark">
                  <domain.Icon className="w-7 h-7 text-teal-400 mb-3" />
                  <h3 className="font-bold text-teal-400 mb-2">{domain.title}</h3>
                  <p className="text-sm text-neutral-400">{domain.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 3 — Interactive Checklist */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Self-Assessment Checklist</h2>
              <p className="text-sm text-neutral-500">Use this simplified checklist as a conversation starter. Its score is educational and must not be represented as an ECC compliance result.</p>
            </div>
            <NcaChecklist />
          </motion.section>

          {/* Section 4 — Our Methodology */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
            <h2 className="text-2xl font-bold mb-4">A responsible readiness workflow</h2>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-none angular-cut bg-noise glass-dark">
              <ul className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Initial Gap Analysis",
                    desc: "Agree the applicable control objectives, scope, evidence sources, owners, and exclusions before rating readiness."
                  },
                  {
                    step: "2",
                    title: "Remediation Roadmap",
                    desc: "Record current evidence, missing evidence, uncertainty, and the operational impact of each gap."
                  },
                  {
                    step: "3",
                    title: "Prioritized Improvement Work",
                    desc: "Translate validated gaps into prioritized technical and governance work with accountable owners."
                  },
                  {
                    step: "4",
                    title: "Evidence Package",
                    desc: "Retest improvements and organize evidence for internal review or an independent qualified assessor."
                  }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-neutral-800 text-teal-400 font-bold flex items-center justify-center shrink-0">{item.step}</div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-neutral-400 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center bg-teal-500/10 border border-teal-500/20 p-10 rounded-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              EDUCATIONAL READINESS SUPPORT
            </div>
            <h3 className="text-2xl font-bold mb-3">Start with scope and evidence</h3>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
              A useful readiness conversation begins with applicable obligations, asset ownership, evidence sources, and the decision the review needs to support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scan"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black px-8 py-4 rounded-none font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] angular-cut"
              >
                Prepare Review Scope
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <Link
                href="/plans/governance"
                className="inline-flex items-center gap-2 border border-white/10 hover:border-teal-500/30 px-8 py-4 rounded-xl font-bold transition-all text-neutral-300"
              >
                Review Governance Scope
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

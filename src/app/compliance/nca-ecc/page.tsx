"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DynamicBackground from "@/components/DynamicBackground";
import NcaChecklist from "@/components/NcaChecklist";

const STATS = [
  { value: "76%", label: "of Saudi orgs had at least one ECC gap in 2024" },
  { value: "4.5M", label: "SAR — average cost of a data breach in the region" },
  { value: "23", label: "ECC controls mapped continuously by SOC Root" },
];

export default function NcaEccPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f5f5f5] pt-32 pb-24 relative overflow-hidden">
      <DynamicBackground />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            NCA ECC 2.0 — COMPLIANCE
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Are You{" "}
            <span className="text-emerald-400">Truly Compliant</span> with<br />
            Saudi Arabia's ECC?
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
            The National Cybersecurity Authority's Essential Cybersecurity Controls (ECC-1:2018) are a mandatory baseline for every organization operating in the Kingdom. Most believe they're compliant. Most are wrong.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-4 mb-16"
        >
          {STATS.map((s, i) => (
            <div key={i} className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl text-center">
              <div className="text-3xl font-black text-emerald-400 mb-1">{s.value}</div>
              <div className="text-xs text-neutral-500">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="space-y-16">

          {/* Section 1 — What is ECC */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">What Is ECC and Why It Matters</h2>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-neutral-300 leading-relaxed text-sm space-y-3">
              <p>
                The <strong className="text-white">Essential Cybersecurity Controls (ECC-1:2018)</strong> define the minimum security baseline required by the NCA for all government and critical infrastructure organizations in Saudi Arabia. Non-compliance isn't just a regulatory risk — it's a direct business risk.
              </p>
              <p>
                A single unaddressed gap in your Governance or Defense domain can result in a breach that costs millions in remediation, reputational damage, and potential regulatory action. SOC Root maps every one of your active controls against the full ECC framework in real time — so you're never caught off guard.
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
                  icon: "🏛️"
                },
                {
                  title: "Cybersecurity Defense",
                  desc: "Endpoint protection, vulnerability management, network segmentation, and continuous external scanning.",
                  icon: "🛡️"
                },
                {
                  title: "Cybersecurity Resilience",
                  desc: "Incident response plans, business continuity, disaster recovery, and backup integrity testing.",
                  icon: "🔄"
                },
                {
                  title: "Third-Party Cybersecurity",
                  desc: "Vendor risk assessments, contractual cybersecurity requirements, and securing supply chains.",
                  icon: "🤝"
                },
              ].map((domain, i) => (
                <div key={i} className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <div className="text-2xl mb-3">{domain.icon}</div>
                  <h3 className="font-bold text-emerald-400 mb-2">{domain.title}</h3>
                  <p className="text-sm text-neutral-400">{domain.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 3 — Interactive Checklist */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Self-Assessment Checklist</h2>
              <p className="text-sm text-neutral-500">Check each control your organization has implemented. Get an instant compliance score and see where your critical gaps are.</p>
            </div>
            <NcaChecklist />
          </motion.section>

          {/* Section 4 — Our Methodology */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
            <h2 className="text-2xl font-bold mb-4">How SOC Root Closes the Gaps</h2>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <ul className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Initial Gap Analysis",
                    desc: "We map your existing infrastructure against all 23 ECC controls and produce a prioritized gap report within 48 hours."
                  },
                  {
                    step: "2",
                    title: "Remediation Roadmap",
                    desc: "Critical gaps get immediate action plans. We don't hand you a list and walk away — our engineers guide implementation."
                  },
                  {
                    step: "3",
                    title: "Continuous Posture Monitoring",
                    desc: "Our SIEM continuously measures your compliance state. Any drift from an implemented control triggers an immediate alert."
                  },
                  {
                    step: "4",
                    title: "Audit-Ready Documentation",
                    desc: "When the NCA or an auditor comes knocking, your compliance evidence is ready: dashboards, logs, reports, and control attestations."
                  }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-neutral-800 text-emerald-400 font-bold flex items-center justify-center shrink-0">{item.step}</div>
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
            className="mt-8 text-center bg-emerald-500/10 border border-emerald-500/20 p-10 rounded-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              NO COMMITMENT REQUIRED
            </div>
            <h3 className="text-2xl font-bold mb-3">Know Your True ECC Posture</h3>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
              Start with a free external vulnerability scan. We'll map the findings to your specific ECC gaps and deliver a prioritized action plan — at no cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scan"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              >
                Start Free Assessment
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <Link
                href="/plans/governance"
                className="inline-flex items-center gap-2 border border-white/10 hover:border-emerald-500/30 px-8 py-4 rounded-xl font-bold transition-all text-neutral-300"
              >
                View Governance Plan
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

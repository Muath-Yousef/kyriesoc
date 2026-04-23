"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DynamicBackground from "@/components/DynamicBackground";

export default function NcaEccPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f5f5f5] pt-32 pb-24 relative overflow-hidden">
      <DynamicBackground />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            COMPLIANCE FRAMEWORKS
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            NCA ECC
            <span className="block text-xl md:text-2xl font-normal text-neutral-400 mt-4">Essential Cybersecurity Controls</span>
          </h1>
        </motion.div>

        <div className="space-y-12">
          {/* Section 1 */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">Alignment with NCA Standards</h2>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-neutral-300 leading-relaxed text-sm">
              <p>The Essential Cybersecurity Controls (ECC-1:2018) developed by the National Cybersecurity Authority (NCA) define the minimum cybersecurity requirements for organizations. SOC Root fully integrates continuous compliance mapping natively into our monitoring architecture.</p>
            </div>
          </motion.section>

          {/* Section 2 */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-2xl font-bold mb-4">Core ECC Domains We Cover</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Cybersecurity Governance", desc: "Formulating policies, procedures, and organizational structures for security." },
                { title: "Cybersecurity Defense", desc: "Securing endpoints, networks, and cloud infrastructures." },
                { title: "Cybersecurity Resilience", desc: "Incident management, business continuity, and disaster recovery." },
                { title: "Third-Party Cybersecurity", desc: "Managing supply chain risks and cloud computing security." }
              ].map((domain, i) => (
                <div key={i} className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <h3 className="font-bold text-emerald-400 mb-2">{domain.title}</h3>
                  <p className="text-sm text-neutral-400">{domain.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 3 */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h2 className="text-2xl font-bold mb-4">Our Methodology</h2>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 text-emerald-400 font-bold flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h4 className="font-bold">Initial Gap Analysis</h4>
                    <p className="text-neutral-400 text-sm">Mapping your existing infrastructure to all ECC controls.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 text-emerald-400 font-bold flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h4 className="font-bold">Remediation Roadmap</h4>
                    <p className="text-neutral-400 text-sm">Prioritized action items to resolve critical gaps first.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 text-emerald-400 font-bold flex items-center justify-center shrink-0">3</div>
                  <div>
                    <h4 className="font-bold">Continuous Posture Maintenance</h4>
                    <p className="text-neutral-400 text-sm">Using our SIEM to ensure controls remain effective over time.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-16 text-center bg-emerald-500/10 border border-emerald-500/20 p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Meet ECC Standards?</h3>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Start with a comprehensive vulnerability scan to identify initial weaknesses.</p>
            <Link href="/scan" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              Initiate Free Assessment
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DynamicBackground from "@/components/DynamicBackground";

export default function Iso27001Page() {
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
            ISO 27001
            <span className="block text-xl md:text-2xl font-normal text-neutral-400 mt-4">Practical Path to Certification</span>
          </h1>
        </motion.div>

        <div className="space-y-12">
          {/* Section 1 */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">What ISO 27001 Certification Means</h2>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-neutral-300 leading-relaxed text-sm">
              <p>ISO 27001 is the internationally recognized gold standard for Information Security Management Systems (ISMS). For your business, achieving this certification goes beyond IT security; it demonstrates to vendors, partners, and clients that you have mature governance over their sensitive data.</p>
            </div>
          </motion.section>

          {/* Section 2 */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-2xl font-bold mb-4">The Key Control Domains</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Information Security Policies", desc: "Written guidelines dictating how physical and digital assets are managed." },
                { title: "Access Control", desc: "Ensuring employees only have access to the data necessary for their role." },
                { title: "Operations Security", desc: "Configuration, backup, and malware protection controls." },
                { title: "Communications Security", desc: "Network security and secure information transfer." }
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
            <h2 className="text-2xl font-bold mb-4">Timeline to Certification</h2>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 text-emerald-400 font-bold flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h4 className="font-bold">Gap Assessment (Weeks 1-2)</h4>
                    <p className="text-neutral-400 text-sm">Identifying current posture verses the ISO standard.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 text-emerald-400 font-bold flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h4 className="font-bold">Implementation (Months 2-4)</h4>
                    <p className="text-neutral-400 text-sm">Deploying controls, SIEM monitoring, and training.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 text-emerald-400 font-bold flex items-center justify-center shrink-0">3</div>
                  <div>
                    <h4 className="font-bold">Internal Audit & Review (Month 5)</h4>
                    <p className="text-neutral-400 text-sm">Simulated audit to ensure preparedness.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-16 text-center bg-emerald-500/10 border border-emerald-500/20 p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">Book Your ISO 27001 Readiness Assessment</h3>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Start your journey to certification by scheduling a readiness assessment.</p>
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

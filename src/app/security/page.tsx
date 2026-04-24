"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DynamicBackground from "@/components/DynamicBackground";

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f5f5f5] pt-32 pb-24 relative overflow-hidden">
      <DynamicBackground />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            VULNERABILITY DISCLOSURE
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Security Policy
            <span className="block text-xl md:text-2xl font-normal text-neutral-400 mt-4">We take security seriously. Here is how we handle disclosures.</span>
          </h1>
        </motion.div>

        <div className="space-y-12">
          {/* Section 1 */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="text-2xl font-bold text-teal-400 mb-4">Reporting a Vulnerability</h2>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-none text-neutral-300 leading-relaxed text-sm angular-cut bg-noise glass-dark">
              <p className="mb-4">
                If you believe you have found a security vulnerability in SOC Root's platform or infrastructure, please report it to us immediately. We investigate all legitimate reports and do our best to quickly fix the problem.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-neutral-400">
                <li>Submit your report via our <Link href="/contact" className="text-teal-400 hover:underline">Contact Page</Link>.</li>
                <li>Do not disclose the vulnerability publicly until we have had a chance to remediate it.</li>
                <li>Provide clear, reproducible steps or a proof of concept (PoC).</li>
              </ul>
            </div>
          </motion.section>

          {/* Section 2 */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-none angular-cut bg-noise glass-dark">
                <h3 className="font-bold text-teal-400 mb-2">Fast Response</h3>
                <p className="text-sm text-neutral-400">We aim to acknowledge receipt of vulnerability reports within 24 hours.</p>
              </div>
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-none angular-cut bg-noise glass-dark">
                <h3 className="font-bold text-teal-400 mb-2">Safe Harbor</h3>
                <p className="text-sm text-neutral-400">We will not pursue legal action against researchers who follow this policy in good faith.</p>
              </div>
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-none angular-cut bg-noise glass-dark">
                <h3 className="font-bold text-teal-400 mb-2">Transparency</h3>
                <p className="text-sm text-neutral-400">We will keep you informed of the progress as we investigate and mitigate the issue.</p>
              </div>
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-none angular-cut bg-noise glass-dark">
                <h3 className="font-bold text-teal-400 mb-2">Remediation</h3>
                <p className="text-sm text-neutral-400">We prioritize fixing confirmed vulnerabilities based on severity and impact.</p>
              </div>
            </div>
          </motion.section>

          {/* Section 3 */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h2 className="text-2xl font-bold mb-4">Out of Scope</h2>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-none angular-cut bg-noise glass-dark">
              <p className="text-sm text-neutral-400 mb-4">The following activities are strictly prohibited and out of scope:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-400">
                <li>Denial of Service (DoS) or Distributed Denial of Service (DDoS) attacks.</li>
                <li>Physical testing of our facilities or hardware.</li>
                <li>Social engineering (e.g., phishing, vishing) against our employees, contractors, or customers.</li>
                <li>Exfiltrating, destroying, or modifying data that does not belong to you.</li>
                <li>Automated scanning with tools that generate extensive traffic.</li>
              </ul>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-16 text-center bg-teal-500/10 border border-teal-500/20 p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">Submit a Report</h3>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Found something? Let us know securely and directly.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black px-8 py-4 rounded-none font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] angular-cut">
              Contact Security Team
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

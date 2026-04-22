"use client";

import { motion } from "framer-motion";

const TECH = ["React / Next.js", "Wazuh SIEM", "Cloudflare WAF", "Python Orchestration", "Nuclei", "Docker"];

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] mb-4">About</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            About <span className="text-emerald-400">SOC Root</span>
          </h1>
          <p className="text-neutral-400">Democratizing enterprise-grade cybersecurity for emerging markets in the Middle East.</p>
        </div>

        {/* Mission + Founder */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-24 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-extrabold mb-5">Our Mission</h2>
            <p className="text-neutral-400 mb-5 leading-relaxed">
              Most businesses in Jordan and the UAE are exposed to advanced cyber threats simply because enterprise-grade defense systems are priced out of their reach.
            </p>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              SOC Root was built to solve this. By leveraging automation, AI-assisted analysis, and open-source intelligence matrices, we deliver the power of a fully staffed Security Operations Center at a fraction of the cost.
            </p>
            <div className="flex flex-wrap gap-2">
              {TECH.map((t) => (
                <span key={t} className="text-xs font-mono text-emerald-400 border border-emerald-500/25 bg-emerald-500/5 px-3 py-1.5 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-emerald-500/15 to-transparent pointer-events-none" />
              <div className="relative border border-white/8 bg-white/[0.02] p-10 rounded-2xl text-center backdrop-blur-xl">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 mx-auto mb-5 flex items-center justify-center text-black font-extrabold text-2xl">
                  MY
                </div>
                <h3 className="text-2xl font-extrabold mb-1">Muath Yousef</h3>
                <p className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-4">Founder & Lead Engineer</p>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6 max-w-xs mx-auto">
                  With a background in offensive security and infrastructure automation, Muath engineered the Synapse SOC Engine — the autonomous core that powers SOC Root.
                </p>
                <div className="flex justify-center gap-3 flex-wrap">
                  {["AWS Certified", "AI Specialist", "Pentester"].map((badge) => (
                    <span key={badge} className="text-xs font-mono text-neutral-500 border border-white/8 bg-black/30 px-3 py-1 rounded-md">
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <a href="https://muath-yousef.github.io/portfolio-site/" target="_blank" rel="noopener noreferrer"
                    className="text-sm text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                    View Full Portfolio →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] mb-4">Principles</p>
            <h2 className="text-3xl font-extrabold">Why SOC Root?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Automation-First", desc: "Every process — from recon to remediation — is automated, reducing human error and response time to near zero." },
              { title: "Transparent Reporting", desc: "No black boxes. Every finding is documented with severity scores, reproduction steps, and recommended fixes." },
              { title: "Aligned with Local Law", desc: "Fully compliant with NCA ECC 2.0 and Saudi PDPL — designed for the regulatory landscape of the region." },
            ].map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="border border-white/8 bg-white/[0.02] p-6 rounded-2xl">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mb-5">
                  <span className="text-emerald-500 text-sm font-bold">{i + 1}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{v.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

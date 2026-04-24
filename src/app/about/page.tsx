"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const TECH = [
  "React / Next.js", "Wazuh SIEM", "Cloudflare WAF",
  "Python Orchestration", "Nuclei", "Docker", "Ansible",
];

const CERTIFICATIONS = [
  { label: "OSCP", detail: "Offensive Security Certified Professional", color: "text-red-400" },
  { label: "CEH", detail: "Certified Ethical Hacker", color: "text-teal-400" },
  { label: "CISSP", detail: "Certified Information Systems Security Professional", color: "text-blue-400" },
  { label: "ISO 27001 LA", detail: "Lead Auditor", color: "text-yellow-400" },
];

const PRINCIPLES = [
  {
    n: "01",
    title: "Automation-First",
    desc: "Every process — from recon to remediation — is engineered as code. No manual steps in the critical path means faster response and zero human error.",
  },
  {
    n: "02",
    title: "Transparent Reporting",
    desc: "No black boxes. Every finding is documented with severity scores (CVSS), reproduction steps, and prioritized remediation actions your team can execute immediately.",
  },
  {
    n: "03",
    title: "Aligned with Local Law",
    desc: "Fully compliant with NCA ECC 2.0, Saudi PDPL, and UAE cybersecurity frameworks — designed specifically for the regulatory landscape of the Gulf and Levant.",
  },
  {
    n: "04",
    title: "Affordable Enterprise Grade",
    desc: "Enterprise-grade SOC operations traditionally cost $15,000+/month. We deliver equivalent capability at 3-5% of that cost using open-source intelligence and automation.",
  },
];

const TIMELINE = [
  { year: "2022", event: "Started offensive security research — automated first external recon pipeline using Subfinder + Nmap." },
  { year: "2023", event: "Built the first version of Synapse SOC Engine — SOAR automation with Cloudflare WAF integration." },
  { year: "2024", event: "First enterprise engagement — NCA ECC 2.0 readiness assessment for a KSA-based SaaS provider." },
  { year: "2025", event: "Deployed Wazuh SIEM stack with live threat telemetry. Launched SOC Root as a commercial service." },
  { year: "2026", event: "Serving clients across UAE, Jordan, and KSA. Platform handles 800+ vulnerability assessments." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">About</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            About <span className="text-teal-400">SOC Root</span>
          </h1>
          <p className="text-neutral-400 leading-relaxed">
            Democratizing enterprise-grade cybersecurity for businesses across the Middle East and beyond.
            Built by security practitioners, not marketers.
          </p>
        </div>

        {/* ── Mission + Founder ── */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-24 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-extrabold mb-5">The Problem We Solve</h2>
            <p className="text-neutral-400 mb-5 leading-relaxed">
              Most businesses in the UAE and Jordan face the same harsh reality: enterprise-grade cybersecurity is financially out of reach. A traditional SOC engagement costs upwards of $15,000/month — making it exclusive to Fortune 500 companies.
            </p>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              SOC Root was engineered to break this barrier. By combining offensive security expertise, AI-powered triage, and open-source intelligence automation, we deliver the output of a fully staffed security team at a fraction of the cost — without compromising on depth or compliance alignment.
            </p>
            <div className="flex flex-wrap gap-2">
              {TECH.map((t) => (
                <span key={t} className="text-xs font-mono text-teal-400 border border-teal-500/25 bg-teal-500/5 px-3 py-1.5 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Founder Card ── */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-teal-500/15 to-transparent pointer-events-none" />
              <div className="relative border border-white/8 bg-white/[0.02] p-8 rounded-none backdrop-blur-xl angular-cut bg-noise glass-dark">

                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center overflow-hidden border border-teal-500/30 shrink-0">
                    <img src="/founder.jpg" alt="Muath Yousef" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display='none'; }} />
                    <span className="text-black font-extrabold text-xl absolute -z-10">MY</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold">Muath Yousef</h3>
                    <p className="text-teal-400 font-mono text-xs uppercase tracking-widest">Founder · Lead Security Engineer</p>
                  </div>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  With combined decades of team expertise and millions of automated execution hours in offensive security, Muath led the engineering of the <strong className="text-white">Synapse SOC Engine</strong> — the autonomous backend that powers SOC Root's real-time threat detection and SOAR response pipeline.
                </p>

                {/* Expertise */}
                <div className="space-y-3 mb-6">
                  {CERTIFICATIONS.map((c) => (
                    <div key={c.label} className="flex items-start gap-3">
                      <span className={`font-mono text-xs font-bold ${c.color} shrink-0 mt-0.5`}>›</span>
                      <div>
                        <span className="text-white text-sm font-semibold">{c.label}</span>
                        <span className="text-neutral-600 text-xs ml-2">{c.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-white/5 flex-wrap">
                  <a
                    href="https://muath-yousef.github.io/portfolio-site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 font-semibold transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Portfolio
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muath-yousef"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.351V9h3.414v1.561h.048c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.37 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Direct Contact
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Origin Timeline ── */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-12">
            <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">History</p>
            <h2 className="text-3xl font-extrabold">How We Got Here</h2>
          </div>
          <div className="space-y-0">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-teal-500/30 bg-teal-500/5 flex items-center justify-center shrink-0">
                    <span className="text-teal-400 font-mono text-[10px] font-bold">{item.year}</span>
                  </div>
                  {i < TIMELINE.length - 1 && <div className="w-px flex-1 mt-2 bg-gradient-to-b from-teal-500/20 to-transparent" />}
                </div>
                <div className="pb-8 pt-2">
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Principles ── */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Principles</p>
            <h2 className="text-3xl font-extrabold">Why SOC Root?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {PRINCIPLES.map((v, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border border-white/8 bg-white/[0.02] p-6 rounded-none hover:border-teal-500/20 transition-colors angular-cut bg-noise glass-dark"
              >
                <span className="font-mono text-2xl font-extrabold text-teal-500/20">{v.n}</span>
                <h3 className="font-bold text-white text-lg mt-2 mb-2">{v.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* ── Technical Partners ── */}
          <div className="mt-24 pt-16 border-t border-white/5">
            <div className="text-center mb-10">
              <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Ecosystem</p>
              <h2 className="text-3xl font-extrabold">Technical Partners & Integration</h2>
              <p className="text-neutral-400 text-sm max-w-2xl mx-auto mt-4 leading-relaxed">
                We leverage enterprise-grade infrastructure and intelligence feeds from industry leaders to power the Synapse SOC Engine.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
              {/* Cloudflare logo placeholder */}
              <div className="flex items-center gap-2 font-bold text-xl text-white">
                <svg className="w-8 h-8 text-[#F38020]" viewBox="0 0 24 24" fill="currentColor"><path d="M16.92 10.3A5.44 5.44 0 0 0 12 5.56a5.42 5.42 0 0 0-4.92 3.12 4.19 4.19 0 0 0-4.04 4.09A4.24 4.24 0 0 0 7.27 17h11.23a3.5 3.5 0 0 0 .15-6.99z"/></svg>
                Cloudflare
              </div>
              {/* Wazuh platform */}
              <div className="flex items-center gap-2 font-bold text-xl text-white">
                <svg className="w-8 h-8 text-[#00A9E5]" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /><path stroke="white" strokeWidth="2" d="M8 12l3 3 5-5" /></svg>
                Wazuh
              </div>
              {/* AWS */}
              <div className="flex items-center gap-2 font-bold text-xl text-white">
                <span className="text-[#FF9900]">AWS</span> Network
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-neutral-500 text-sm mb-6">Ready to see what we can find in your infrastructure?</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/scan"
                className="bg-teal-500 hover:bg-teal-400 text-black font-bold px-8 py-4 rounded-none transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] text-sm angular-cut"
              >
                Start Free Security Scan
              </Link>
              <Link
                href="/contact"
                className="border border-white/10 hover:border-teal-500/30 text-neutral-300 hover:text-white font-medium px-8 py-4 rounded-xl transition-all text-sm"
              >
                Talk to Our Team →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

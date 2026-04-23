"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import DynamicBackground from "@/components/DynamicBackground";

const CAPABILITIES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: "Continuous Subdomain Discovery",
    desc: "Passive intelligence gathering across WHOIS, DNS logs, and certificate transparency streams. Attack surface mapped in real-time.",
    tag: "RECON",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Automated Penetration Testing",
    desc: "Nuclei-driven vulnerability scanning simulating real-world attacker methodologies against every exposed endpoint.",
    tag: "PENTEST",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 12 2.1 9.1" /><path d="m12 2 3.6 7.2" />
      </svg>
    ),
    title: "Expert Triage & Analysis",
    desc: "Advanced detection methodology evaluates raw findings, eliminating false positives instantly and prioritizing critical CVEs.",
    tag: "AI",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "SOAR Automated Remediation",
    desc: "API layer communicates with Cloudflare WAF and IAM policies to null-route threats before they escalate.",
    tag: "SOAR",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2" /><path d="M8 21h8m-4-4v4" />
      </svg>
    ),
    title: "24/7 SIEM Monitoring",
    desc: "Wazuh-powered security information and event management with Telegram real-time alerting to your team.",
    tag: "SIEM",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "Security Awareness Training",
    desc: "3-chapter employee cybersecurity course with quizzes and verifiable certificates. NCA ECC staff-training aligned.",
    tag: "TRAINING",
  },
];

const TECH_STACK = {
  "Offensive": ["Nuclei", "Subfinder", "Amass", "Nmap", "Burp Suite"],
  "Defensive": ["Wazuh SIEM", "Cloudflare WAF", "SOAR Engine", "TheHive"],
  "Compliance": ["NCA ECC 2.0", "ISO 27001", "PDPL", "CIS Controls"],
  "Automation": ["Python", "Docker", "Ansible", "GitHub Actions"],
};

const STATS = [
  { value: "847", label: "Vulnerabilities assessed this year" },
  { value: "12", label: "Critical findings resolved" },
  { value: "24", label: "Hour max report turnaround" },
  { value: "NCA ECC", label: "Compliant Framework" },
];

const TIMELINE = [
  { phase: "Phase 1", title: "External Recon", desc: "Subdomain enumeration, port scanning, and attack surface mapping across your entire digital footprint." },
  { phase: "Phase 2", title: "Vulnerability Assessment", desc: "Nuclei templates identify CVEs, misconfigurations, and exposed credentials across all discovered endpoints." },
  { phase: "Phase 3", title: "LLM Triage", desc: "AI model filters noise, ranks threats by severity, and prepares a structured incident report." },
  { phase: "Phase 4", title: "SOAR Remediation", desc: "Automated response — WAF rules, IP blocklists, and access policy updates executed without human delay." },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const } }),
};

export default function Home() {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    const logs = [
      "[RECON] Discovered 14 new subdomains for target scope.",
      "[NUCLEI] CVE-2024-1234 HIGH detected on api.target.com:443",
      "[LLM] False-positive filtered — CVE-2023-5678 benign in this context.",
      "[SOAR] Cloudflare WAF rule #7821 deployed. Threat null-routed.",
      "[SIEM] Brute-force cluster from 185.220.x.x blocked at perimeter.",
      "[NCA-ECC] Compliance score: 94.8% — no critical gaps detected.",
      "[SOAR] Auto-remediation policy #441 executed successfully.",
    ];
    let i = 0;
    const interval = setInterval(() => {
      setTerminalLines((prev) => [...prev.slice(-5), logs[i % logs.length]]);
      i++;
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <DynamicBackground />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-center">
        <div className="container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-[0.25em]">Defensive Posture · Active</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
              >
                We Hack You<br />
                <span className="text-emerald-400">Before They Do.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg text-neutral-400 leading-relaxed max-w-xl mb-10"
              >
                SOC Root is a military-grade automated cybersecurity platform. We continuously map, exploit, and harden your digital perimeter — fully aligned with NCA ECC and ISO 27001 compliance standards.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a href="/scan" className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded-lg transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center gap-2 text-sm uppercase tracking-wider">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  Start Free Scan
                </a>
                <a href="/services" className="border border-white/10 hover:border-emerald-500/40 text-neutral-300 hover:text-white font-medium px-8 py-4 rounded-lg transition-all text-sm">
                  View Services →
                </a>
              </motion.div>
              
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6">
                 <a href="/sample-report.pdf" target="_blank" className="text-emerald-400 text-sm hover:underline flex items-center gap-2 font-mono">
                   View a sample assessment report →
                 </a>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/5"
              >
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="text-xl md:text-2xl font-extrabold text-white">{s.value}</p>
                    <p className="text-xs text-neutral-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Terminal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-emerald-500/20 to-transparent pointer-events-none" />
                <div className="relative rounded-2xl border border-emerald-500/15 bg-black/60 backdrop-blur-xl overflow-hidden">
                  {/* Terminal header */}
                  <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-neutral-500">root@soc-orchestrator:~#</span>
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse" />
                    </div>
                  </div>
                  {/* Terminal body */}
                  <div className="p-5 font-mono text-xs space-y-2.5 min-h-[280px] flex flex-col justify-end">
                    {terminalLines.map((line, idx) => (
                      <motion.div
                        key={line + idx}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex gap-2"
                      >
                        <span className="text-emerald-500 shrink-0">›</span>
                        <span className={
                          line.includes("HIGH") || line.includes("blocked") || line.includes("Brute")
                            ? "text-red-400"
                            : line.includes("SOAR") || line.includes("deployed") || line.includes("executed")
                            ? "text-emerald-400"
                            : "text-neutral-400"
                        }>
                          {line}
                        </span>
                      </motion.div>
                    ))}
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-emerald-500">›</span>
                      <span className="w-2 h-3.5 bg-emerald-500/80 animate-pulse rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES GRID ─── */}
      <section className="relative py-28 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] mb-4">Architecture</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Full Spectrum Defense Engine</h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">Six integrated security layers working continuously to eliminate exposure before attackers can exploit it.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-emerald-500/25 hover:bg-white/[0.04] transition-all"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg border border-white/5 bg-black/60 flex items-center justify-center text-emerald-500 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all">
                    {cap.icon}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-600 border border-white/5 px-2 py-0.5 rounded tracking-widest">
                    {cap.tag}
                  </span>
                </div>
                <h3 className="font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS (timeline) ─── */}
      <section className="relative py-28 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] mb-4">Process</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">How SOC Root Works</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {TIMELINE.map((step, i) => (
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
                  <div className="w-10 h-10 rounded-full border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <span className="text-emerald-400 font-mono text-xs font-bold">{i + 1}</span>
                  </div>
                  {i < TIMELINE.length - 1 && <div className="w-px flex-1 mt-2 bg-gradient-to-b from-emerald-500/30 to-transparent" />}
                </div>
                <div className="pb-8">
                  <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">{step.phase}</span>
                  <h3 className="font-bold text-white text-lg mt-1 mb-2">{step.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="relative py-28 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] mb-4">Stack</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Tools & Technologies</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {Object.entries(TECH_STACK).map(([category, tools]) => (
              <div key={category}>
                <p className="text-xs font-mono text-neutral-600 uppercase tracking-widest mb-4">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <span key={t} className="text-xs font-mono text-neutral-400 border border-white/5 bg-white/[0.03] px-3 py-1.5 rounded-md hover:border-emerald-500/20 hover:text-emerald-400 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DUAL CTA ─── */}
      <section className="relative py-28 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Scan CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 overflow-hidden group hover:border-emerald-500/40 transition-all"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all" />
              <div className="relative">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest border border-emerald-500/30 px-2.5 py-1 rounded-full">Free Trial</span>
                <h3 className="text-2xl font-extrabold text-white mt-4 mb-3">Start Your Free Security Scan</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">One free external reconnaissance and vulnerability scan per company. Requires business email verification.</p>
                <a href="/scan" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] text-sm">
                  Initialize Scan →
                </a>
              </div>
            </motion.div>

            {/* Training CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden group hover:border-white/15 transition-all"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all" />
              <div className="relative">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest border border-white/10 px-2.5 py-1 rounded-full">Awareness Training</span>
                <h3 className="text-2xl font-extrabold text-white mt-4 mb-3">Train Your Team Against Threats</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">3-chapter security awareness course for employees. 100% pass-rate quizzes and verifiable completion certificates.</p>
                <a href="/training" className="inline-flex items-center gap-2 border border-white/10 hover:border-white/25 text-neutral-300 hover:text-white font-medium px-6 py-3 rounded-lg transition-all text-sm">
                  Start Training →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

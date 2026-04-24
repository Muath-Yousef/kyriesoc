import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Resources & Guides — SOC Root",
  description: "Free cybersecurity guides, checklists, and assessments for business owners and IT teams in the UAE and Jordan. NCA ECC aligned content.",
};

const RESOURCES = [
  {
    href: "/resources/security-guide",
    tag: "Interactive",
    title: "Business Security Posture Checklist",
    desc: "10 questions to assess your organization's security posture. Get an instant score and personalized recommendations.",
    readTime: "5 min",
    date: "Apr 2026",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    href: "/compliance/nca-ecc",
    tag: "Compliance",
    title: "NCA ECC 2.0 Overview & Control Mapping",
    desc: "A practical breakdown of the 29 NCA ECC 2.0 domains, what each requires, and how SOC Root maps to each control.",
    readTime: "8 min",
    date: "Mar 2026",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const COMING_SOON = [
  "How Attackers Enumerate Your Subdomains (And How to Stop Them)",
  "NCA ECC vs ISO 27001: Which Standard Does Your Business Need?",
  "Post-Incident Checklist: 12 Steps After a Data Breach",
  "Setting Up Wazuh SIEM: A Practical Guide for SMBs",
];

export default function ResourcesIndex() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] mb-4">Resources</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Security <span className="text-emerald-400">Intelligence</span>
          </h1>
          <p className="text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Practical guides and tools for business owners and IT teams. No marketing fluff — just actionable security knowledge.
          </p>
        </div>

        {/* Published Resources */}
        <div className="space-y-5 mb-16">
          {RESOURCES.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="group flex gap-5 p-6 border border-white/8 bg-white/[0.02] rounded-2xl hover:border-emerald-500/25 hover:bg-white/[0.04] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                {r.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono text-emerald-500 border border-emerald-500/25 bg-emerald-500/5 px-2 py-0.5 rounded uppercase tracking-widest">
                    {r.tag}
                  </span>
                  <span className="text-neutral-700 text-xs font-mono">{r.readTime} read</span>
                  <span className="text-neutral-700 text-xs font-mono">· {r.date}</span>
                </div>
                <h2 className="font-bold text-white group-hover:text-emerald-400 transition-colors mb-1">{r.title}</h2>
                <p className="text-neutral-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
              <svg className="w-5 h-5 text-neutral-700 group-hover:text-emerald-500 transition-colors shrink-0 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="border border-white/5 bg-white/[0.01] rounded-2xl p-8">
          <p className="font-mono text-xs text-neutral-600 uppercase tracking-[0.3em] mb-6">Coming Soon</p>
          <div className="space-y-3">
            {COMING_SOON.map((title) => (
              <div key={title} className="flex items-start gap-3 text-sm text-neutral-600">
                <span className="text-neutral-800 mt-1">›</span>
                {title}
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-white/5">
            <p className="text-neutral-600 text-sm mb-4">Get notified when new guides are published:</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-mono transition-colors"
            >
              Subscribe to Security Intelligence →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

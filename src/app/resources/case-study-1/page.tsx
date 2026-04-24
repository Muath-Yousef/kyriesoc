import type { Metadata } from "next";
import Link from "next/link";
import { CheckSquare, ShieldAlert, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Study: Securing a UAE Fintech Infrastructure — SOC Root",
  description: "An anonymized case study showing how SOC Root discovered and remediated critical AWS misconfigurations for a UAE-based Fintech startup within 48 hours.",
};

export default function CaseStudy1() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        
        {/* Navigation */}
        <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-mono text-teal-400 hover:text-teal-300 mb-12">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Resources
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="flex gap-3 mb-6">
            <span className="text-[10px] font-mono text-teal-500 border border-teal-500/25 bg-teal-500/5 px-2 py-1 rounded uppercase tracking-widest">
              Case Study
            </span>
            <span className="text-[10px] font-mono text-neutral-500 border border-white/10 bg-white/5 px-2 py-1 rounded uppercase tracking-widest">
              Fintech
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Securing a UAE Fintech: From Critical AWS Exposure to NCA Compliant
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            How SOC Root's automated intelligence pipeline identified exposed S3 buckets and IAM misconfigurations for a high-growth financial platform within 48 hours.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-neutral-300 leading-relaxed">
          
          <section className="bg-white/[0.02] border border-white/5 p-8 rounded-none angular-cut bg-noise glass-dark">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-500" />
              The Challenge
            </h2>
            <p className="mb-4">
              A UAE-based fintech startup handling sensitive payment gateway data approached SOC Root prior to a mandated NCA ECC 2.0 readiness audit. They had rapidly scaled their AWS infrastructure but lacked continuous visibility into their attack surface.
            </p>
            <p>
              Traditional penetration testing quotes were prohibitively expensive and estimated to take 3-4 weeks. The client needed actionable intelligence immediately to satisfy regulatory constraints.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Synapse Engine Approach</h2>
            <p className="mb-6">
              Instead of a manual, time-consuming review, we deployed the Synapse SOC Engine which autonomously maps and exploits external infrastructure.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3 items-start">
                <Cpu className="w-5 h-5 text-teal-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block mb-1">Continuous Subdomain Discovery</strong>
                  <span className="text-neutral-400 text-sm">Passive intelligence gathering revealed 12 staging subdomains that were not documented by the engineering team.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Cpu className="w-5 h-5 text-teal-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block mb-1">Automated Pentesting via Nuclei</strong>
                  <span className="text-neutral-400 text-sm">Targeted scans identified a critical misconfiguration in an API staging endpoint exposing unauthenticated AWS S3 buckets.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Cpu className="w-5 h-5 text-teal-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block mb-1">LLM Driven Triage</strong>
                  <span className="text-neutral-400 text-sm">The engine generated a remediation plan instantly, filtering out 40+ false positives and prioritizing the IAM exposure.</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-teal-500/5 border border-teal-500/20 p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-teal-500" />
              The Outcome
            </h2>
            <p className="mb-4">
              Within 48 hours of engagement, the client received a fully transparent incident report detailing exact reproduction steps. Using the prioritized remediation actions, their engineering team secured the S3 buckets and updated Cloudflare WAF rules, effectively null-routing the threat surface.
            </p>
            <div className="grid md:grid-cols-3 gap-4 pt-4 mt-6 border-t border-teal-500/20 text-center">
              <div>
                <p className="text-2xl font-black text-white">48<span className="text-sm font-medium text-teal-500">hr</span></p>
                <p className="text-xs text-neutral-400 mt-1 uppercase tracking-widest">Turnaround</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">3</p>
                <p className="text-xs text-neutral-400 mt-1 uppercase tracking-widest">Critical Fixes</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">100%</p>
                <p className="text-xs text-neutral-400 mt-1 uppercase tracking-widest">NCA Compliance Target</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

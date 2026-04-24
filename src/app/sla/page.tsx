import { ShieldAlert, Zap, Clock, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Level Agreement (SLA) — SOC Root",
  description: "SOC Root's Service Level Agreement covering response times, severity classifications, and service availability for our automated cybersecurity solutions.",
};

const SEVERITY_LEVELS = [
  {
    level: "Critical (P0)",
    desc: "Active exploitation, mass data exfiltration, or complete loss of critical infrastructure.",
    time: "< 1 Hour",
    color: "text-red-500",
    bg: "bg-red-500/10 border-red-500/20",
  },
  {
    level: "High (P1)",
    desc: "Severe vulnerability exposing internal network, high probability of exploitation.",
    time: "< 4 Hours",
    color: "text-orange-500",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    level: "Medium (P2)",
    desc: "Misconfiguration or vulnerability with limited impact or high complexity to exploit.",
    time: "< 24 Hours",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10 border-yellow-500/20",
  },
  {
    level: "Low (P3)",
    desc: "Informational findings, best practice deviations, or defense-in-depth suggestions.",
    time: "< 48 Hours",
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
];

export default function SLA() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Service Level <span className="text-teal-400">Agreement</span>
          </h1>
          <p className="text-neutral-400 max-w-xl leading-relaxed">
            Standard metrics, turnaround times, and incident response guarantees for SOC Root clients. No ambiguity.
          </p>
        </div>

        {/* Uptime Guarantee */}
        <section className="mb-16 border border-white/5 bg-white/[0.02] p-8 rounded-none angular-cut bg-noise glass-dark">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Platform Availability</h2>
              <p className="text-teal-400 font-mono text-sm tracking-widest mt-1">99.9% Uptime Guarantee</p>
            </div>
          </div>
          <p className="text-neutral-400 leading-relaxed max-w-2xl">
            The Synapse SOC Engine, Client Portal, and API endpoints are guaranteed to have a 99.9% monthly uptime. Planned maintenance windows are communicated 7 days in advance and operate solely outside of Gulf Standard Time (GST) business hours.
          </p>
        </section>

        {/* Severity Classifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-teal-500" />
            Incident Severity & Response
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {SEVERITY_LEVELS.map((s) => (
              <div key={s.level} className={`p-6 rounded-2xl border ${s.bg}`}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`font-bold text-lg ${s.color}`}>{s.level}</h3>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/40 border border-white/10 shrink-0">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="text-xs font-mono font-bold text-white tracking-wider">{s.time}</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SOC Operations */}
        <section className="border-t border-white/5 pt-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-teal-500" />
            Service Turnarounds
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4 p-5 rounded-none border border-white/5 bg-white/[0.01] angular-cut bg-noise glass-dark">
              <span className="font-mono text-teal-500 text-sm w-32 shrink-0">Vulnerability Scans</span>
              <p className="text-sm text-neutral-400">Reports delivered within <strong className="text-white">24 hours</strong> of scan completion. Executive summary included.</p>
            </div>
            <div className="flex gap-4 p-5 rounded-none border border-white/5 bg-white/[0.01] angular-cut bg-noise glass-dark">
              <span className="font-mono text-teal-500 text-sm w-32 shrink-0">Compliance Audits</span>
              <p className="text-sm text-neutral-400">NCA ECC 2.0 readiness assessments finalized within <strong className="text-white">3-5 business days</strong> of asset mapping.</p>
            </div>
            <div className="flex gap-4 p-5 rounded-none border border-white/5 bg-white/[0.01] angular-cut bg-noise glass-dark">
              <span className="font-mono text-teal-500 text-sm w-32 shrink-0">SOAR Orchestration</span>
              <p className="text-sm text-neutral-400">Automated workflows initiated within <strong className="text-white">60 seconds</strong> of critical alert validation by the LLM engine.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CheckItem {
  id: string;
  domain: string;
  control: string;
  desc: string;
  risk: "critical" | "high" | "medium";
}

const NCA_CONTROLS: CheckItem[] = [
  // Governance
  { id: "gov-1", domain: "Governance", control: "Cybersecurity Policy", desc: "A formal cybersecurity policy approved by senior management and communicated to all staff.", risk: "critical" },
  { id: "gov-2", domain: "Governance", control: "Roles & Responsibilities", desc: "Assigned cybersecurity roles with documented responsibilities for all relevant personnel.", risk: "high" },
  { id: "gov-3", domain: "Governance", control: "Risk Management", desc: "Ongoing risk assessments conducted with results documented and tracked.", risk: "critical" },

  // Defense
  { id: "def-1", domain: "Defense", control: "Asset Inventory", desc: "All hardware and software assets catalogued and classified by criticality.", risk: "critical" },
  { id: "def-2", domain: "Defense", control: "Vulnerability Management", desc: "Regular scanning and patching of systems within defined SLAs.", risk: "critical" },
  { id: "def-3", domain: "Defense", control: "Network Security", desc: "Firewalls, segmentation, and IDS/IPS deployed on the perimeter.", risk: "high" },
  { id: "def-4", domain: "Defense", control: "Email & Web Filtering", desc: "Anti-spam, phishing protection, and URL filtering active on mail and browsers.", risk: "high" },
  { id: "def-5", domain: "Defense", control: "Endpoint Protection", desc: "EDR/AV deployed and updated on all endpoints.", risk: "critical" },
  { id: "def-6", domain: "Defense", control: "Privileged Access Management", desc: "PAM controls limit and audit privileged account usage.", risk: "high" },
  { id: "def-7", domain: "Defense", control: "Encryption", desc: "Data encrypted at rest and in transit using approved algorithms.", risk: "high" },

  // Resilience
  { id: "res-1", domain: "Resilience", control: "Incident Response Plan", desc: "Documented IRP tested at least annually; team trained and on-call.", risk: "critical" },
  { id: "res-2", domain: "Resilience", control: "Business Continuity", desc: "BCP and DRP tested with defined RTOs and RPOs.", risk: "high" },
  { id: "res-3", domain: "Resilience", control: "Backup & Recovery", desc: "Regular backups tested, offline copies maintained, restoration verified.", risk: "critical" },

  // Third Party
  { id: "tp-1", domain: "Third-Party", control: "Vendor Risk Assessment", desc: "Third-party suppliers assessed for cybersecurity posture before engagement.", risk: "high" },
  { id: "tp-2", domain: "Third-Party", control: "Contractual Requirements", desc: "Cybersecurity clauses embedded in all vendor contracts.", risk: "medium" },
  { id: "tp-3", domain: "Third-Party", control: "Cloud Security", desc: "Cloud services configured with shared responsibility model in mind.", risk: "high" },
];

const RISK_COLORS = {
  critical: { badge: "bg-red-500/15 text-red-400 border-red-500/30", dot: "bg-red-500" },
  high: { badge: "bg-orange-500/15 text-orange-400 border-orange-500/30", dot: "bg-orange-500" },
  medium: { badge: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30", dot: "bg-yellow-500" },
};

const DOMAINS = ["All", "Governance", "Defense", "Resilience", "Third-Party"];

export default function NcaChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const filtered = filter === "All" ? NCA_CONTROLS : NCA_CONTROLS.filter(c => c.domain === filter);
  const score = Math.round((checked.size / NCA_CONTROLS.length) * 100);
  const criticalMissing = NCA_CONTROLS.filter(c => c.risk === "critical" && !checked.has(c.id)).length;

  const scoreColor = score >= 80 ? "text-emerald-400" : score >= 50 ? "text-yellow-400" : "text-red-400";
  const barColor = score >= 80 ? "bg-emerald-500" : score >= 50 ? "bg-yellow-500" : "bg-red-500";

  return (
    <div className="space-y-6">
      {/* Score Board */}
      <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">ECC Compliance Score</p>
            <p className={`text-5xl font-black ${scoreColor}`}>{score}<span className="text-xl text-neutral-500">%</span></p>
          </div>
          <div className="text-right">
            <p className="text-xs text-neutral-500 mb-1">{checked.size} / {NCA_CONTROLS.length} controls</p>
            {criticalMissing > 0 && (
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                {criticalMissing} critical gaps
              </span>
            )}
            {criticalMissing === 0 && checked.size > 0 && (
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                ✓ No critical gaps
              </span>
            )}
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${barColor}`}
            initial={{ width: 0 }}
            animate={{ width: `${score}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <p className="text-xs text-neutral-600 mt-3">
          {score === 0 && "Start checking controls to measure your compliance posture."}
          {score > 0 && score < 50 && "🔴 High risk — significant gaps across critical controls."}
          {score >= 50 && score < 80 && "🟡 Moderate risk — key controls missing. Action required."}
          {score >= 80 && score < 100 && "🟢 Good posture — fine-tune remaining controls."}
          {score === 100 && "✅ Full control coverage — maintain and document regularly."}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {DOMAINS.map(d => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
              filter === d
                ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                : "border-white/5 text-neutral-500 hover:text-white hover:border-white/15"
            }`}
          >
            {d}
          </button>
        ))}
        {checked.size > 0 && (
          <button
            onClick={() => setChecked(new Set())}
            className="ml-auto px-4 py-1.5 rounded-lg text-xs font-mono border border-red-500/20 text-red-400 hover:bg-red-500/10 transition-all"
          >
            Reset
          </button>
        )}
      </div>

      {/* Controls List */}
      <div className="space-y-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => {
            const isChecked = checked.has(item.id);
            const isExpanded = expandedId === item.id;
            const colors = RISK_COLORS[item.risk];

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className={`border rounded-xl transition-all duration-200 ${
                  isChecked
                    ? "border-emerald-500/20 bg-emerald-500/5"
                    : "border-white/5 bg-white/[0.02] hover:border-white/10"
                }`}
              >
                <div
                  className="flex items-center gap-4 p-4 cursor-pointer select-none"
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                >
                  {/* Checkbox */}
                  <button
                    onClick={(e) => { e.stopPropagation(); toggle(item.id); }}
                    className={`w-5 h-5 shrink-0 rounded border-2 flex items-center justify-center transition-all ${
                      isChecked
                        ? "border-emerald-500 bg-emerald-500"
                        : "border-white/20 hover:border-emerald-500/60"
                    }`}
                    aria-label={`Toggle ${item.control}`}
                  >
                    {isChecked && (
                      <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`font-bold text-sm ${isChecked ? "line-through text-neutral-500" : "text-white"}`}>
                        {item.control}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${colors.badge}`}>
                        {item.risk}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-600">{item.domain}</span>
                    </div>
                  </div>

                  <svg
                    className={`w-4 h-4 text-neutral-600 shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pl-13 border-t border-white/5 pt-3">
                        <p className="text-sm text-neutral-400 leading-relaxed ml-9">{item.desc}</p>
                        {!isChecked && (
                          <button
                            onClick={(e) => { e.stopPropagation(); toggle(item.id); }}
                            className="mt-3 ml-9 text-xs font-mono text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded hover:bg-emerald-500/10 transition-all"
                          >
                            Mark as implemented →
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* CTA if gaps remain */}
      {criticalMissing > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-6 bg-red-500/5 border border-red-500/15 rounded-2xl text-center"
        >
          <p className="text-red-400 font-bold mb-2">
            {criticalMissing} critical control{criticalMissing > 1 ? "s" : ""} not implemented
          </p>
          <p className="text-neutral-400 text-sm mb-4">
            SOC Root can close these gaps within 14 days. Schedule a free assessment.
          </p>
          <a
            href="/scan"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3 rounded-xl text-sm transition-all"
          >
            Get Free Gap Analysis
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </motion.div>
      )}
    </div>
  );
}

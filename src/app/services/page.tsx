"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 190,
    period: "year",
    desc: "One-time deep vulnerability assessment for small businesses.",
    features: ["External Web Scanning", "Email Security Check", "SSL & DNS Verification", "PDF Summary Report"],
    popular: false,
  },
  {
    id: "guard",
    name: "Guard",
    price: 160,
    period: "month",
    desc: "Continuous monitoring for small web apps and startups.",
    features: ["Monthly Deep Scanning", "Continuous Uptime Tracking", "Basic Web Application Firewall", "Bi-Weekly Reports"],
    popular: false,
  },
  {
    id: "governance",
    name: "Governance",
    price: 210,
    period: "month",
    desc: "Full NCA ECC 2.0 alignment and compliance mapping.",
    features: ["Policy Review & Setup", "Compliance Readiness Scoring", "Staff Awareness Portal", "Priority Support"],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: 340,
    period: "month",
    desc: "24/7 Threat Detection, SIEM, and Incident Response.",
    features: ["Endpoint Agent (Wazuh)", "Active Incident Response", "Telegram Real-time Alerts", "Dedicated Analyst"],
    popular: false,
  },
];

const DISCOUNTS: Record<string, number> = { LAUNCH20: 20, PARTNER30: 30, PILOT50: 50 };

export default function Services() {
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [discountMsg, setDiscountMsg] = useState("");

  function applyCode() {
    const d = DISCOUNTS[code.toUpperCase()];
    if (d) {
      setDiscount(d);
      setDiscountMsg(`✓ ${d}% discount applied`);
    } else {
      setDiscount(0);
      setDiscountMsg("Invalid or expired code.");
    }
    setTimeout(() => setDiscountMsg(""), 4000);
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 fade-in group">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Security That <span className="text-emerald-400">Scales With You</span>
          </h1>
          <p className="text-neutral-400">Enterprise-grade capabilities scaled efficiently for businesses internationally. No hidden fees.</p>
        </div>

        {/* Discount code */}
        <div className="max-w-md mx-auto mb-14 p-5 border border-white/8 bg-white/[0.02] rounded-2xl backdrop-blur-md">
          <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">Referral / Promo Code</label>
          <div className="flex gap-2">
            <input type="text" placeholder="Enter code..." className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-emerald-500/60 transition-colors text-white placeholder-neutral-600 text-sm"
              value={code} onChange={(e) => setCode(e.target.value)} onKeyDown={(e) => e.key === "Enter" && applyCode()} />
            <button onClick={applyCode} className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
              Apply
            </button>
          </div>
          {discountMsg && (
            <p className={`text-xs mt-3 ${discount > 0 ? "text-emerald-400" : "text-red-400"}`}>{discountMsg}</p>
          )}
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {PLANS.map((plan, i) => {
            const finalPrice = discount > 0 ? Math.round(plan.price * (1 - discount / 100)) : plan.price;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className={`relative flex flex-col rounded-2xl p-7 border transition-all ${
                  plan.popular
                    ? "border-emerald-500/40 bg-emerald-500/5 shadow-[0_0_40px_rgba(16,185,129,0.08)]"
                    : "border-white/8 bg-white/[0.02] hover:border-white/15"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-neutral-500 mb-5 min-h-[40px]">{plan.desc}</p>

                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-white">${finalPrice}</span>
                    <span className="text-neutral-600 mb-1 text-sm">/ {plan.period}</span>
                  </div>
                  {discount > 0 && (
                    <p className="text-xs text-neutral-600 line-through mt-1">${plan.price} regular</p>
                  )}
                </div>

                <ul className="flex-1 space-y-3 mb-7">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-neutral-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href={`/plans/${plan.id}`} className={`w-full py-3 rounded-xl text-center text-sm font-bold transition-all block ${
                  plan.popular
                    ? "bg-emerald-500 hover:bg-emerald-400 text-black hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    : "bg-white/8 hover:bg-white/15 text-white border border-white/10"
                }`}>
                  Get Started
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* ── Comparison Table ── */}
        <div className="max-w-5xl mx-auto mb-20 overflow-x-auto">
          <div className="text-center mb-10">
            <p className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] mb-3">Compare</p>
            <h2 className="text-2xl font-extrabold">Feature Comparison</h2>
          </div>
          <table className="w-full text-sm border-separate border-spacing-0 min-w-[640px]">
            <thead>
              <tr>
                <th className="text-left text-neutral-500 font-mono text-xs uppercase tracking-widest pb-4 pr-4">Feature</th>
                {["Starter", "Guard", "Governance", "Premium"].map((p) => (
                  <th key={p} className={`text-center pb-4 px-2 font-bold text-sm ${p === "Governance" ? "text-emerald-400" : "text-neutral-300"}`}>
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "External Domain Scanning", vals: [true, true, true, true] },
                { feature: "SSL / DNS / Email Security", vals: [true, true, true, true] },
                { feature: "PDF Vulnerability Report", vals: [true, true, true, true] },
                { feature: "Continuous Monthly Scanning", vals: [false, true, true, true] },
                { feature: "Uptime Monitoring", vals: [false, true, true, true] },
                { feature: "Basic Web Application Firewall", vals: [false, true, true, true] },
                { feature: "NCA ECC 2.0 Compliance Map", vals: [false, false, true, true] },
                { feature: "Policy Review & Gap Analysis", vals: [false, false, true, true] },
                { feature: "Staff Awareness Training Portal", vals: [false, false, true, true] },
                { feature: "Wazuh SIEM (Endpoint Agent)", vals: [false, false, false, true] },
                { feature: "Active Incident Response", vals: [false, false, false, true] },
                { feature: "Telegram Real-time Alerts", vals: [false, false, false, true] },
                { feature: "Dedicated Security Analyst", vals: [false, false, false, true] },
              ].map(({ feature, vals }) => (
                <tr key={feature} className="border-t border-white/5">
                  <td className="py-3 pr-4 text-neutral-400">{feature}</td>
                  {vals.map((v, i) => (
                    <td key={i} className={`text-center py-3 px-2 ${i === 2 ? "bg-emerald-500/5" : ""}`}>
                      {v ? (
                        <span className="text-emerald-400">
                          <svg className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-neutral-700">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── FAQ ── */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-10">
            <p className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] mb-3">FAQ</p>
            <h2 className="text-2xl font-extrabold">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What is the difference between Guard and Premium?",
                a: "Guard provides automated scanning and uptime monitoring — ideal for startups protecting a web app. Premium adds a Wazuh SIEM agent on your infrastructure, active incident response, and a dedicated analyst for hands-on threat management.",
              },
              {
                q: "Is the Starter plan a one-time payment or subscription?",
                a: "Starter is a one-time engagement: $190 for a deep vulnerability assessment. You receive a comprehensive PDF report — no recurring charges. Guard, Governance, and Premium are monthly subscriptions.",
              },
              {
                q: "Do you require access to our internal systems?",
                a: "For external scanning (Starter, Guard), no internal access is needed — we operate from the outside in, like a real attacker would. For SIEM monitoring (Premium), we deploy a lightweight Wazuh agent on your servers.",
              },
              {
                q: "Can you help us pass an NCA ECC audit?",
                a: "Yes. Our Governance plan is specifically designed for NCA ECC 2.0 readiness. We deliver a gap analysis against all 29 domains, prioritized remediation steps, and documentation your team can present to regulators.",
              },
              {
                q: "Is payment available via bank transfer?",
                a: "Yes. We accept international bank transfer (SWIFT/IBAN via Wise Business) for annual plans and enterprise engagements. Contact us at socroot@outlook.com for bank details.",
              },
              {
                q: "How long does the free scan take?",
                a: "The free external scan typically takes 15-45 minutes depending on domain size. You will receive an email notification when your report is ready to view via the portal.",
              },
            ].map(({ q, a }, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group border border-white/8 bg-white/[0.02] rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-sm text-neutral-200 hover:text-white transition-colors">
                  {q}
                  <svg className="w-4 h-4 text-emerald-500 shrink-0 ml-4 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-neutral-500 leading-relaxed border-t border-white/5 pt-4">
                  {a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>

        {/* ── Payment Methods ── */}
        <div className="max-w-3xl mx-auto border border-white/8 bg-white/[0.02] rounded-2xl p-10 text-center">
          <h3 className="text-xl font-bold mb-2">Secure Payment Methods</h3>
          <p className="text-neutral-500 text-sm mb-8">
            All transactions are confirmed via email. Bank transfer available for enterprise contracts.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: "₿", label: "Binance Pay", color: "text-yellow-400" },
              { icon: "PP", label: "PayPal", color: "text-blue-400" },
              { icon: "🏦", label: "Bank Transfer (SWIFT)", color: "text-emerald-400" },
              { icon: "W", label: "Wise Business", color: "text-teal-400" },
            ].map(({ icon, label, color }) => (
              <div key={label} className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/8 bg-black/40 text-sm">
                <span className={`font-bold ${color}`}>{icon}</span>
                <span className="font-medium text-neutral-300">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-neutral-700 text-xs mt-6 font-mono">
            For SWIFT/IBAN details: <a href="mailto:socroot@outlook.com?subject=Payment%20Inquiry" className="text-emerald-500 hover:underline">socroot@outlook.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

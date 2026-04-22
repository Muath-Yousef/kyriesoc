"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const PLANS = [
  {
    name: "Starter Scan",
    price: 190,
    period: "year",
    desc: "One-time deep vulnerability assessment for small businesses.",
    features: ["External Web Scanning", "Email Security Check", "SSL & DNS Verification", "PDF Summary Report"],
    popular: false,
  },
  {
    name: "Guard",
    price: 160,
    period: "month",
    desc: "Continuous monitoring for small web apps and startups.",
    features: ["Monthly Deep Scanning", "Continuous Uptime Tracking", "Basic Web Application Firewall", "Bi-Weekly Reports"],
    popular: false,
  },
  {
    name: "Governance",
    price: 210,
    period: "month",
    desc: "Full NCA ECC 2.0 alignment and compliance mapping.",
    features: ["Policy Review & Setup", "Compliance Readiness Scoring", "Staff Awareness Portal", "Priority Support"],
    popular: true,
  },
  {
    name: "Premium SOC",
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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] mb-4">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Transparent <span className="text-emerald-400">Security Pricing</span>
          </h1>
          <p className="text-neutral-400">Enterprise-grade capabilities scaled efficiently for Jordan & UAE businesses. No hidden fees.</p>
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

                <a href="/contact" className={`w-full py-3 rounded-xl text-center text-sm font-bold transition-all ${
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

        {/* Payment methods */}
        <div className="max-w-3xl mx-auto border border-white/8 bg-white/[0.02] rounded-2xl p-10 text-center">
          <h3 className="text-xl font-bold mb-3">Secure Payment Methods</h3>
          <p className="text-neutral-500 text-sm mb-8">Once your architectural review is complete, settle your invoice through our preferred payment gateways.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl border border-white/8 bg-black/40 text-sm">
              <span className="text-yellow-400 font-bold">₿</span>
              <span className="font-medium">Binance Pay</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl border border-white/8 bg-black/40 text-sm">
              <span className="text-blue-400 font-bold">PP</span>
              <span className="font-medium">PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

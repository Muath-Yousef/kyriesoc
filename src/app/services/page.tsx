"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { plans } from "@/data/pricing";
import { FeatureComparison } from "@/components/FeatureComparison";
import { FAQAccordion } from "@/components/FAQAccordion";

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
            Security That <span className="text-teal-400">Scales With You</span>
          </h1>
          <p className="text-neutral-400">Enterprise-grade capabilities scaled efficiently for businesses internationally. No hidden fees.</p>
        </div>

        {/* Discount code */}
        <div className="max-w-md mx-auto mb-14 p-5 border border-white/8 bg-white/[0.02] rounded-none backdrop-blur-md angular-cut bg-noise glass-dark">
          <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">Referral / Promo Code</label>
          <div className="flex gap-2">
            <input type="text" placeholder="Enter code..." className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-teal-500/60 transition-colors text-white placeholder-neutral-600 text-sm"
              value={code} onChange={(e) => setCode(e.target.value)} onKeyDown={(e) => e.key === "Enter" && applyCode()} />
            <button onClick={applyCode} className="bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 border border-teal-500/30 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
              Apply
            </button>
          </div>
          {discountMsg && (
            <p className={`text-xs mt-3 ${discount > 0 ? "text-teal-400" : "text-red-400"}`}>{discountMsg}</p>
          )}
        </div>

        {/* Plans grid */}
        <div id="pricing" className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20 scroll-mt-24">
          {plans.map((plan, i) => {
            const rawPrice = parseInt(plan.price.replace(/[^0-9]/g, ''));
            const finalPrice = discount > 0 && !isNaN(rawPrice) ? Math.round(rawPrice * (1 - discount / 100)) : null;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className={`relative flex flex-col rounded-2xl p-7 border transition-all ${
                  plan.highlighted
                    ? "border-teal-500/40 bg-teal-500/5 shadow-[0_0_40px_rgba(16,185,129,0.08)]"
                    : "border-white/8 bg-white/[0.02] hover:border-white/15"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-black text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-neutral-500 mb-5 min-h-[40px]">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-white">
                      {finalPrice !== null ? `$${finalPrice}` : plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                       <span className="text-neutral-600 mb-1 text-sm">/ {plan.billingPeriod}</span>
                    )}
                  </div>
                  {discount > 0 && !isNaN(rawPrice) && plan.price !== "Custom" && (
                    <p className="text-xs text-neutral-600 line-through mt-1">{plan.price} regular</p>
                  )}
                </div>

                <ul className="flex-1 space-y-3 mb-7">
                  {plan.features.filter(f => f.included).map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-neutral-400">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>{f.name}</span>
                    </li>
                  ))}
                </ul>

                <a href={plan.ctaLink} className={`w-full py-3 rounded-xl text-center text-sm font-bold transition-all block ${
                  plan.highlighted
                    ? "bg-teal-500 hover:bg-teal-400 text-black hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    : "bg-white/8 hover:bg-white/15 text-white border border-white/10"
                }`}>
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* ── Comparison Table ── */}
        <FeatureComparison />

        {/* ── FAQ ── */}
        <FAQAccordion />

        {/* ── Payment Methods ── */}
        <div className="max-w-3xl mx-auto border border-white/8 bg-white/[0.02] rounded-none p-10 text-center angular-cut bg-noise glass-dark">
          <h3 className="text-xl font-bold mb-2">Secure Payment Methods</h3>
          <p className="text-neutral-500 text-sm mb-8">
            All transactions are confirmed via email. Bank transfer available for enterprise contracts.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: "₿", label: "Binance Pay", color: "text-yellow-400" },
              { icon: "PP", label: "PayPal", color: "text-blue-400" },
              { icon: "🏦", label: "Bank Transfer (SWIFT)", color: "text-teal-400" },
              { icon: "W", label: "Wise Business", color: "text-teal-400" },
            ].map(({ icon, label, color }) => (
              <div key={label} className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/8 bg-black/40 text-sm">
                <span className={`font-bold ${color}`}>{icon}</span>
                <span className="font-medium text-neutral-300">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-neutral-700 text-xs mt-6 font-mono">
            For SWIFT/IBAN details: <a href="/contact" className="text-teal-500 hover:underline">Contact Sales Support</a>
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Bitcoin, CreditCard } from "lucide-react";

export default function Services() {
  const [discountCode, setDiscountCode] = useState("");
  const [activeDiscount, setActiveDiscount] = useState(0);
  const [notification, setNotification] = useState("");

  const plans = [
    {
      name: "Starter Scan",
      price: 190,
      period: "year",
      desc: "One-time deep vulnerability assessment.",
      features: ["External Web Scanning", "Email Security Check", "SSL & DNS Verification", "PDF Summary Report"],
      popular: false
    },
    {
      name: "Guard",
      price: 160,
      period: "month",
      desc: "Continuous monitoring for small web apps.",
      features: ["Monthly Deep Scanning", "Continuous Uptime Tracking", "Basic Web Application Firewall", "Bi-Weekly Reports"],
      popular: false
    },
    {
      name: "Governance",
      price: 210,
      period: "month",
      desc: "Full NCA ECC 2.0 alignment mapping.",
      features: ["Policy Review & Setup", "Compliance Readiness Scoring", "Staff Awareness Portal", "Priority Support"],
      popular: true
    },
    {
      name: "Premium SOC",
      price: 340,
      period: "month",
      desc: "24/7 Threat Detection and Response.",
      features: ["Endpoint Agent (Wazuh)", "Active Incident Response", "Telegram Real-time Alerts", "Dedicated Analyst"],
      popular: false
    }
  ];

  const handleApplyDiscount = () => {
    const code = discountCode.toUpperCase();
    if (code === "LAUNCH20") {
      setActiveDiscount(20);
      setNotification("20% Launch Discount Applied!");
    } else if (code === "PARTNER30") {
      setActiveDiscount(30);
      setNotification("30% Partner Discount Applied!");
    } else if (code === "PILOT50") {
      setActiveDiscount(50);
      setNotification("50% Pilot Discount Applied!");
    } else {
      setActiveDiscount(0);
      setNotification("Invalid or expired code.");
    }
    
    // Clear notification after 3 seconds
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent <span className="text-[#00f0ff]">Security Pricing</span></h1>
        <p className="text-gray-400 text-lg">Enterprise-grade capabilities scaled and priced efficiently for Jordan & UAE businesses. Select a plan below or request a custom architectural review.</p>
      </div>

      <div className="max-w-md mx-auto mb-16 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
        <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wide">Have a referral or promo code?</label>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Enter code..." 
            className="flex-1 bg-black/50 border border-white/10 rounded px-4 py-2 outline-none focus:border-[#00f0ff] transition-colors"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <button 
            onClick={handleApplyDiscount}
            className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded font-medium transition-colors"
          >
            Apply
          </button>
        </div>
        {notification && (
          <p className={`text-xs mt-3 ${activeDiscount > 0 ? "text-emerald-400" : "text-red-400"}`}>
            {notification}
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {plans.map((plan, i) => {
          const finalPrice = activeDiscount > 0 
            ? (plan.price * (1 - activeDiscount / 100)).toFixed(0) 
            : plan.price;

          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl border ${plan.popular ? 'border-[#00f0ff] shadow-[0_0_30px_rgba(0,240,255,0.15)] bg-gradient-to-b from-[#00f0ff]/5 to-transparent' : 'border-white/10 bg-white/[0.02]'} backdrop-blur-md flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00f0ff] text-black text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{plan.desc}</p>
              
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-white tracking-tight">${finalPrice}</span>
                  <span className="text-gray-500 mb-1">/ {plan.period}</span>
                </div>
                {activeDiscount > 0 && (
                  <div className="text-sm text-[#00f0ff] line-through opacity-50 mt-1">${plan.price} / {plan.period} regular</div>
                )}
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="/contact" className={`w-full py-3 rounded text-center font-medium transition-colors ${plan.popular ? 'bg-[#00f0ff] text-black hover:bg-[#00d0e0]' : 'bg-white/10 hover:bg-white/20'}`}>
                Get Started
              </a>
            </motion.div>
          )
        })}
      </div>

      <div className="max-w-4xl mx-auto p-8 rounded-2xl border border-white/5 bg-gradient-to-tr from-white/[0.02] to-amber-400/[0.02] text-center">
        <h3 className="text-2xl font-bold mb-4">Secure Payment Methods</h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Skip the friction. Once your architectural review is complete, your invoice can be settled instantly utilizing our preferred global payment gateways.</p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-3 px-6 py-3 rounded-lg border border-white/10 bg-black/50">
            <Bitcoin className="w-6 h-6 text-[#F3BA2F]" />
            <span className="font-semibold">Binance Pay</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-lg border border-white/10 bg-black/50">
            <CreditCard className="w-6 h-6 text-[#0079C1]" />
            <span className="font-semibold">PayPal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

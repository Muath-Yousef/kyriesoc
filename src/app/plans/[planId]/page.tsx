"use client";

import { useState, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DynamicBackground from "@/components/DynamicBackground";

const PLAN_DATA = {
  starter: {
    name: "Starter",
    tagline: "Essential external defense",
    monthlyPrice: null,
    annualPrice: 190,
    annualSavings: 0,
    protectsFrom: ["Website defacement", "Domain hijacking", "Basic vulnerability exploitation"],
    features: [
      { name: "Continuous External Scanning", desc: "We constantly check your public assets for known vulnerabilities." },
      { name: "Monthly Security Report", desc: "A specialist-reviewed summary of what we found and how to fix it." }
    ],
    compliance: null
  },
  guard: {
    name: "Guard",
    tagline: "Active internal & external defense",
    monthlyPrice: 160,
    annualPrice: 1600,
    annualSavings: 320,
    protectsFrom: ["Email impersonation", "Website defacement", "Data theft", "Malware infections"],
    features: [
      { name: "Everything in Starter", desc: "All the continuous external monitoring features." },
      { name: "SIEM Log Monitoring", desc: "We aggregate and analyze logs from your systems to spot hidden threats." },
      { name: "Incident Response", desc: "Our analysts investigate alerts and provide immediate remediation steps." }
    ],
    compliance: null
  },
  governance: {
    name: "Governance",
    tagline: "Complete risk and compliance management",
    monthlyPrice: 210,
    annualPrice: 2100,
    annualSavings: 420,
    protectsFrom: ["Regulatory fines", "Data breaches", "Targeted phishing campaigns"],
    features: [
      { name: "Everything in Guard", desc: "Full SIEM and incident response coverage." },
      { name: "Compliance Mapping", desc: "Continuous state monitoring against regulatory frameworks." },
      { name: "Employee Training", desc: "Certified security awareness training for your staff." }
    ],
    compliance: ["NCA ECC 2.0 controls covered", "Your organization will be prepared for regulatory audits"]
  },
  premium: {
    name: "Premium",
    tagline: "Uncompromised security for high-risk environments",
    monthlyPrice: 340,
    annualPrice: 3400,
    annualSavings: 680,
    protectsFrom: ["Advanced Persistent Threats", "Supply chain attacks", "Zero-day exploitation"],
    features: [
      { name: "Everything in Governance", desc: "Complete risk, compliance, and active defense." },
      { name: "Deep Penetration Testing", desc: "Quarterly advanced manual penetration testing by certified experts." },
      { name: "24/7 Dedicated Analyst", desc: "Direct access to our security team whenever you need them." }
    ],
    compliance: ["NCA ECC 2.0 controls covered", "ISO 27001 domains addressed", "Your organization will be prepared for regulatory audits"]
  }
};

type PaymentMethod = "binance_trc20" | "bank_transfer" | "cliq" | "paypal";

export default function PlanPage({ params }: { params: Promise<{ planId: string }> }) {
  const { planId } = use(params);
  const plan = PLAN_DATA[planId as keyof typeof PLAN_DATA];
  
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"monthly"|"annual">("annual");
  const [method, setMethod] = useState<PaymentMethod | "">("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [orderInfo, setOrderInfo] = useState<any>(null);

  if (!plan) return <div className="text-white text-center pt-32 h-screen bg-[#0c0c0c]">Plan not found</div>;

  const handleCreateOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await fetch("https://api.socroot.com/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId, company, email, payment_method: method, billing_cycle: billingCycle })
      });
      const data = await resp.json();
      if (data.success) {
        setOrderInfo(data);
      } else {
        alert(data.message || "Order failed");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to connect to order system.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f5f5f5] pt-32 pb-24 relative overflow-hidden">
      <DynamicBackground />
      <div className="container mx-auto px-6 relative z-10 max-w-4xl space-y-16">
        
        {/* Section 1 - Hero */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4">{plan.name} <span className="text-emerald-400">Plan</span></h1>
          <p className="text-xl text-neutral-400 mb-8">{plan.tagline}</p>
          <div className="flex justify-center items-end gap-2 mb-8">
            <span className="text-4xl font-bold">${billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice || plan.annualPrice}</span>
            <span className="text-neutral-500 mb-1">/ {billingCycle === "annual" ? "year" : "month"}</span>
          </div>
          {plan.monthlyPrice && (
            <div className="flex justify-center gap-4 mb-8">
              <button 
                onClick={() => setBillingCycle("monthly")} 
                className={`px-4 py-2 rounded font-bold text-sm transition-all ${billingCycle === "monthly" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"}`}
              >Monthly</button>
              <button 
                onClick={() => setBillingCycle("annual")} 
                className={`px-4 py-2 rounded font-bold text-sm transition-all ${billingCycle === "annual" ? "bg-white/10 text-emerald-400" : "text-neutral-500 hover:text-emerald-400"}`}
              >Annually (Save ${plan.annualSavings})</button>
            </div>
          )}
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button onClick={() => setShowModal(true)} className="bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              Get Started Now
            </button>
            <Link href="/contact" className="border border-white/10 hover:border-emerald-500/30 px-8 py-4 rounded-xl font-bold transition-all text-neutral-300">
              Schedule a call
            </Link>
          </div>
        </div>

        {/* Section 2 - What This Protects You From */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-emerald-400 border-b border-white/10 pb-2">Protects You From</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {plan.protectsFrom.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/[0.02] border border-white/5 p-4 rounded-xl text-neutral-300">
                <span className="text-red-400">🛡️</span> {item}
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 - What's Included */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-emerald-400 border-b border-white/10 pb-2">What's Included</h2>
          <div className="space-y-4">
            {plan.features.map((f, i) => (
              <div key={i} className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-bold flex items-center gap-2 mb-1"><span className="text-emerald-500">✓</span> {f.name}</h3>
                <p className="text-sm text-neutral-400 pl-6">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 - Our Commitment */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-emerald-400 border-b border-white/10 pb-2">Our Mutual Commitment</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-neutral-300">
            <div className="p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
              <h3 className="font-bold text-emerald-400 mb-3">What SOC Root Will Do</h3>
              <ul className="space-y-2 list-disc pl-4">
                <li>Deploy continuous monitoring swiftly.</li>
                <li>Ensure specialist review of zero-day exploits.</li>
                <li>Never share your business data.</li>
              </ul>
            </div>
            <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/5">
              <h3 className="font-bold mb-3">What You Will Do</h3>
              <ul className="space-y-2 list-disc pl-4">
                <li>Provide authorized access.</li>
                <li>Act on severity-critical recommendations.</li>
                <li>Communicate infrastructure changes.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 - How It Works */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-emerald-400 border-b border-white/10 pb-2">How It Works</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {["Sign up & Assess", "Deploy Protections", "Monthly Reports", "Annual Review"].map((step, i) => (
              <div key={i} className="flex-1 text-center p-4 bg-white/[0.02] rounded-2xl border border-white/5">
                <div className="w-8 h-8 rounded-full bg-neutral-800 text-emerald-400 font-bold mx-auto mb-2 flex items-center justify-center">{i+1}</div>
                <div className="text-sm font-bold text-neutral-300">{step}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 - Compliance */}
        {plan.compliance && (
          <section>
            <h2 className="text-2xl font-bold mb-6 text-emerald-400 border-b border-white/10 pb-2">Compliance Coverage</h2>
            <ul className="space-y-3">
              {plan.compliance.map((c, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-300"><span className="text-emerald-500">📋</span> {c}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Section 8 - FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-emerald-400 border-b border-white/10 pb-2">FAQ</h2>
          <div className="space-y-4">
            <details className="bg-white/[0.02] border border-white/5 p-4 rounded-xl cursor-pointer">
              <summary className="font-bold">Do I need technical knowledge to use this service?</summary>
              <p className="mt-2 text-sm text-neutral-400">No. We handle the technical complexities and provide reports written in plain business language.</p>
            </details>
            <details className="bg-white/[0.02] border border-white/5 p-4 rounded-xl cursor-pointer">
              <summary className="font-bold">What happens if there's an incident at 3am?</summary>
              <p className="mt-2 text-sm text-neutral-400">Depending on your plan, our automated response engines block the threat immediately, and our analysts investigate the root cause.</p>
            </details>
            <details className="bg-white/[0.02] border border-white/5 p-4 rounded-xl cursor-pointer">
              <summary className="font-bold">Who has access to my company's data?</summary>
              <p className="mt-2 text-sm text-neutral-400">Only authorized Tier 2 analysts. Your data is encrypted and completely isolated.</p>
            </details>
            <details className="bg-white/[0.02] border border-white/5 p-4 rounded-xl cursor-pointer">
              <summary className="font-bold">How long until I see results?</summary>
              <p className="mt-2 text-sm text-neutral-400">Your first comprehensive assessment report is usually delivered within 48 to 72 hours of onboarding.</p>
            </details>
          </div>
        </section>

      </div>

      {/* Payment Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-[#111] border border-white/10 rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-neutral-500 hover:text-white cursor-pointer">✕</button>
              
              {!orderInfo ? (
                <>
                  <h3 className="text-2xl font-bold mb-2">Complete Your Purchase</h3>
                  <p className="text-neutral-400 text-sm mb-6">Plan: {plan.name} ({billingCycle}) — ${billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice}</p>
                  
                  <form onSubmit={handleCreateOrder} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-500 mb-1">Company Name</label>
                      <input type="text" required value={company} onChange={e => setCompany(e.target.value)} className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-500 mb-1">Contact Email</label>
                      <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-500 mb-2">Payment Method</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button type="button" onClick={() => setMethod("binance_trc20")} className={`p-3 border rounded-xl text-xs font-bold transition-all ${method==="binance_trc20" ? "border-emerald-500 bg-emerald-500/10 text-emerald-400":"border-white/10 text-neutral-400 hover:border-white/30"}`}>Crypto (USDT/USDC)</button>
                        <button type="button" onClick={() => setMethod("bank_transfer")} className={`p-3 border rounded-xl text-xs font-bold transition-all ${method==="bank_transfer" ? "border-emerald-500 bg-emerald-500/10 text-emerald-400":"border-white/10 text-neutral-400 hover:border-white/30"}`}>Bank Transfer</button>
                        <button type="button" onClick={() => setMethod("cliq")} className={`p-3 border rounded-xl text-xs font-bold transition-all ${method==="cliq" ? "border-emerald-500 bg-emerald-500/10 text-emerald-400":"border-white/10 text-neutral-400 hover:border-white/30"}`}>CliQ (Arab Bank)</button>
                        <button type="button" onClick={() => setMethod("paypal")} className={`p-3 border rounded-xl text-xs font-bold transition-all ${method==="paypal" ? "border-emerald-500 bg-emerald-500/10 text-emerald-400":"border-white/10 text-neutral-400 hover:border-white/30"}`}>PayPal</button>
                      </div>
                    </div>
                    <button disabled={loading || !method} className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl transition-all mt-4">
                      {loading ? "Generating Order..." : "Proceed to Payment Details"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
                  <h3 className="text-xl font-bold text-white">Order Generated</h3>
                  <p className="text-neutral-400 text-sm">Your Order ID is: <span className="text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded">{orderInfo.order_id}</span></p>
                  
                  <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/5 text-left space-y-3 my-6">
                    <p className="text-xs text-neutral-500 uppercase tracking-widest font-mono border-b border-white/5 pb-2 mb-2">{orderInfo.payment_details?.label || "Payment Instructions"}</p>
                    <p className="text-sm text-white">{orderInfo.payment_details?.instructions}</p>
                    
                    {orderInfo.payment_details?.address && (
                      <div className="mt-2">
                        <span className="text-xs text-neutral-500 block mb-1">Network: {orderInfo.payment_details.network}</span>
                        <code className="text-emerald-400 bg-black p-2 rounded block break-all text-sm">{orderInfo.payment_details.address}</code>
                      </div>
                    )}
                    {orderInfo.payment_details?.iban && (
                      <div className="mt-2">
                        <span className="text-xs text-neutral-500 block mb-1">Account: {orderInfo.payment_details.account_name}</span>
                        <code className="text-emerald-400 bg-black p-2 rounded block break-all text-sm">{orderInfo.payment_details.iban}</code>
                      </div>
                    )}
                    {orderInfo.payment_details?.alias && (
                      <div className="mt-2">
                        <span className="text-xs text-neutral-500 block mb-1">CliQ Alias:</span>
                        <code className="text-emerald-400 bg-black p-2 rounded block text-xl text-center tracking-widest">{orderInfo.payment_details.alias}</code>
                      </div>
                    )}
                    {orderInfo.payment_details?.link && (
                      <div className="mt-2 flex justify-center">
                        <a href={orderInfo.payment_details.link} target="_blank" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded transition-colors text-sm">Pay via PayPal</a>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-xs text-neutral-500">Please complete the payment to activate your service. Our team will verify the payment within 1 hour.</p>
                  <button onClick={() => setShowModal(false)} className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl transition-all text-sm font-bold">
                    I've completed the payment →
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

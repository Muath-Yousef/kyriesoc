"use client";

import { useState, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DynamicBackground from "@/components/DynamicBackground";

const PLAN_DATA = {
  starter: {
    name: "Starter",
    tagline: "Your first line of external defense — deployed in 24 hours",
    monthlyPrice: null,
    annualPrice: 190,
    annualSavings: 0,
    protectsFrom: [
      "Website defacement & domain hijacking",
      "Known vulnerability exploitation",
      "Exposed credentials & misconfigured servers"
    ],
    features: [
      {
        name: "Continuous External Attack Surface Scanning",
        desc: "We run automated scans against your public-facing assets 24/7, detecting new vulnerabilities as they're published — not weeks later when attackers find them first."
      },
      {
        name: "Monthly Specialist-Reviewed Report",
        desc: "Not just raw scanner output. A human analyst reviews findings, removes false positives, and gives you a ranked action list written in plain business language — no technical degree required."
      },
      {
        name: "Free Onboarding Security Assessment",
        desc: "Your engagement starts with a comprehensive baseline scan so we know exactly what we're protecting from day one."
      }
    ],
    compliance: null
  },
  guard: {
    name: "Guard",
    tagline: "Active defense inside and outside your perimeter",
    monthlyPrice: 160,
    annualPrice: 1600,
    annualSavings: 320,
    protectsFrom: [
      "Email impersonation & phishing campaigns",
      "Insider threats & compromised credentials",
      "Malware, ransomware & lateral movement",
      "Data exfiltration & unauthorized access"
    ],
    features: [
      {
        name: "Everything in Starter",
        desc: "All continuous external monitoring, monthly reports, and baseline assessment."
      },
      {
        name: "SIEM Log Aggregation & Correlation",
        desc: "We ingest logs from your firewalls, servers, and cloud services into our SIEM engine. Suspicious patterns that would go unnoticed for months get flagged within minutes."
      },
      {
        name: "Analyst-Backed Incident Response",
        desc: "When we detect a real threat, an analyst investigates it — not a bot. You receive a root cause analysis and concrete remediation steps, not a vague alert."
      },
      {
        name: "Email & Domain Threat Intelligence",
        desc: "Monitoring for spoofed domains, phishing kits targeting your brand, and dark web mentions of your credentials."
      }
    ],
    compliance: null
  },
  governance: {
    name: "Governance",
    tagline: "Full risk, compliance, and regulatory readiness",
    monthlyPrice: 210,
    annualPrice: 2100,
    annualSavings: 420,
    protectsFrom: [
      "NCA ECC regulatory penalties",
      "Audit failures & license risk",
      "Targeted spear-phishing on executives",
      "Data breaches with legal liability"
    ],
    features: [
      {
        name: "Everything in Guard",
        desc: "Full SIEM monitoring, incident response, and email threat intelligence."
      },
      {
        name: "NCA ECC 2.0 Compliance Mapping",
        desc: "We continuously measure your posture against all 23 ECC controls and generate audit-ready evidence packs. When the regulator visits, you're ready."
      },
      {
        name: "Certified Security Awareness Training",
        desc: "Your employees are your biggest attack surface. Monthly phishing simulations and security training keep them sharp — and keep you compliant with ECC training requirements."
      },
      {
        name: "Quarterly Executive Risk Briefing",
        desc: "A structured 60-minute session with your C-suite, translating technical risk into board-level business language and ROI context."
      }
    ],
    compliance: [
      "23 NCA ECC 2.0 controls actively monitored",
      "Audit-ready evidence packs generated monthly",
      "Prepared for NCA assessments and regulatory inquiries"
    ]
  },
  premium: {
    name: "Premium",
    tagline: "Uncompromising protection for high-value, high-risk environments",
    monthlyPrice: 340,
    annualPrice: 3400,
    annualSavings: 680,
    protectsFrom: [
      "Advanced Persistent Threats (APT groups)",
      "Supply chain & third-party compromises",
      "Zero-day exploitation",
      "Nation-state level intrusion campaigns"
    ],
    features: [
      {
        name: "Everything in Governance",
        desc: "Complete NCA ECC compliance, SIEM, IR, training, and executive briefings."
      },
      {
        name: "Quarterly Manual Penetration Testing",
        desc: "Certified ethical hackers simulate real attack scenarios against your infrastructure every quarter. Not automated scans — actual manual exploitation attempts with a full report and remediation walkthrough."
      },
      {
        name: "24/7 Dedicated Senior Analyst",
        desc: "A named security analyst assigned exclusively to your account. Direct encrypted channel, guaranteed 15-minute response SLA, and priority escalation on all findings."
      },
      {
        name: "ISO 27001 & NCA ECC Dual-Track Compliance",
        desc: "Full alignment with both frameworks simultaneously — giving you the strongest possible compliance posture for enterprise contracts and international partners."
      }
    ],
    compliance: [
      "23 NCA ECC 2.0 controls actively monitored",
      "ISO 27001 Annex A domains addressed",
      "Dual-framework audit-ready evidence packs",
      "Prepared for NCA, SAMA, and international regulatory audits"
    ]
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
                  <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Order Generated Successfully</h3>
                  <p className="text-neutral-400 text-sm">Save your Order ID — you'll need it to track your service status.</p>

                  {/* Order ID with Copy Button */}
                  <div className="flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                    <div className="flex-1 text-left">
                      <p className="text-xs text-neutral-500 mb-1">Your Order ID</p>
                      <p className="text-emerald-400 font-mono font-bold text-lg tracking-wider">{orderInfo.order_id}</p>
                    </div>
                    <button
                      onClick={() => navigator.clipboard?.writeText(orderInfo.order_id)}
                      className="p-2 rounded-lg hover:bg-emerald-500/10 text-neutral-500 hover:text-emerald-400 transition-all"
                      title="Copy Order ID"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    </button>
                  </div>

                  {/* Payment Instructions */}                  
                  <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/5 text-left space-y-3 my-2">
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

                  <p className="text-xs text-neutral-500">Our team verifies payments within 1 hour. You'll receive a confirmation on WhatsApp or email.</p>
                  
                  <div className="flex flex-col gap-2 pt-1">
                    <a
                      href={`/portal/order-status?id=${orderInfo.order_id}`}
                      className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 rounded-xl transition-all text-sm flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                      Track My Order
                    </a>
                    <button onClick={() => setShowModal(false)} className="w-full bg-white/5 hover:bg-white/10 text-neutral-400 py-3 rounded-xl transition-all text-sm">
                      I've completed the payment → Close
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

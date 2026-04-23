"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Step = "gate" | "register" | "verify" | "scan" | "success" | "blocked";

export default function FreeScan() {
  const [step, setStep] = useState<Step>("gate");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [codeError, setCodeError] = useState("");
  const [domain, setDomain] = useState("");
  const [target, setTarget] = useState("");
  const [scanError, setScanError] = useState("");

  // Mock verification code — in production this would be sent via email
  const MOCK_CODE = "SOC-2026";

  function getDomain(e: string) {
    return e.split("@")[1]?.toLowerCase() ?? "";
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setEmailError("");
    const d = getDomain(email);
    if (!d || !email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    
    try {
      const resp = await fetch("https://api.socroot.com/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await resp.json();
      if (!data.success) {
        setEmailError(data.message || "Failed to send code.");
        return;
      }
      setDomain(d);
      setStep("verify");
    } catch (err) {
      setEmailError("Network error. Please try again later.");
    }
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    setCodeError("");
    try {
      const resp = await fetch("https://api.socroot.com/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: verifyCode.trim() })
      });
      const data = await resp.json();
      if (!data.success) {
        setCodeError(data.message || "Invalid code.");
        return;
      }
      setStep("scan");
    } catch (err) {
      setCodeError("Network error. Please try again later.");
    }
  }

  async function handleScan(e: React.FormEvent) {
    e.preventDefault();
    setScanError("");
    if (!target.trim()) {
      setScanError("Please enter a target domain or IP.");
      return;
    }
    try {
      const resp = await fetch("https://api.socroot.com/api/scan-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
           company_name: target, 
           domain: target, 
           contact_name: email.split("@")[0] || "Security Lead", 
           email: email, 
           newsletter: true 
        })
      });
      const data = await resp.json();
      if (!data.success) {
        setScanError(data.message || "Scan queueing failed.");
        return;
      }
      setStep("success");
    } catch (err) {
      setScanError("Network error. Please try again later.");
    }
  }


  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-2xl">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] mb-4">Free Security Assessment</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            External Vulnerability <span className="text-emerald-400">Scan</span>
          </h1>
          <p className="text-neutral-400 max-w-lg mx-auto">
            One free scan per company. Requires business email verification. We perform a non-intrusive external reconnaissance and deliver a PDF report within 24 hours.
          </p>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {(["gate","register","verify","scan"] as Step[]).map((s, i) => {
            const stepIndex = ["gate","register","verify","scan"].indexOf(step);
            const isActive = step === s;
            const isDone = stepIndex > i;
            return (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                  isActive ? "bg-emerald-500 text-black" :
                  isDone ? "bg-emerald-500/30 text-emerald-400 border border-emerald-500/40" :
                  "bg-white/5 text-neutral-600 border border-white/5"
                }`}>
                  {isDone ? "✓" : i + 1}
                </div>
                {i < 3 && <div className={`w-12 h-px ${isDone ? "bg-emerald-500/40" : "bg-white/5"}`} />}
              </div>
            );
          })}
        </div>

        <AnimatePresence mode="wait">

          {/* ── GATE: info ── */}
          {step === "gate" && (
            <motion.div key="gate" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>
              <div className="roundd-2xl border border-white/8 bg-white/[0.02] p-8 rounded-2xl mb-6">
                <h2 className="text-xl font-bold mb-5">Before You Begin</h2>
                <ul className="space-y-4">
                  {[
                    { icon: "✦", text: "One free scan per company domain — shared across all employees." },
                    { icon: "✦", text: "We send a 6-character verification code to your email." },
                    { icon: "✦", text: "Scan is non-intrusive. No sensitive data is collected." },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-neutral-400">
                      <span className="text-emerald-500 shrink-0 mt-0.5">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={() => setStep("register")} className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-4 rounded-xl transition-all hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] text-sm uppercase tracking-wider">
                Continue →
              </button>
            </motion.div>
          )}

          {/* ── REGISTER: company email ── */}
          {step === "register" && (
            <motion.div key="register" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>
              <div className="border border-white/8 bg-white/[0.02] p-8 rounded-2xl">
                <h2 className="text-xl font-bold mb-2">Enter Your Company Email</h2>
                <p className="text-sm text-neutral-500 mb-6">We&apos;ll send a verification code to confirm your organization.</p>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Business Email</label>
                    <input
                      type="email"
                      required
                      placeholder="you@yourcompany.com"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors text-white placeholder-neutral-600"
                    />
                    {emailError && <p className="text-red-400 text-xs mt-2">{emailError}</p>}
                  </div>
                  <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3.5 rounded-xl transition-all text-sm">
                    Send Verification Code
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {/* ── VERIFY: code ── */}
          {step === "verify" && (
            <motion.div key="verify" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>
              <div className="border border-white/8 bg-white/[0.02] p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-2">Check Your Email</h2>
                <p className="text-sm text-neutral-500 mb-6">We sent a verification code to <span className="text-white font-medium">{email}</span>. Enter it below to continue.</p>
                <form onSubmit={handleVerify} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Verification Code</label>
                    <input
                      type="text"
                      required
                      placeholder="SOC-XXXX"
                      value={verifyCode}
                      onChange={(e) => { setVerifyCode(e.target.value); setCodeError(""); }}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors text-white placeholder-neutral-600 font-mono tracking-widest text-center text-lg"
                    />
                    {codeError && <p className="text-red-400 text-xs mt-2 text-center">{codeError}</p>}
                  </div>
                  <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3.5 rounded-xl transition-all text-sm">
                    Verify & Proceed
                  </button>
                </form>
                <p className="text-center text-xs text-neutral-600 mt-4">Didn&apos;t receive it? Check spam or <button onClick={() => setStep("register")} className="text-emerald-500 hover:underline">re-enter your email</button>.</p>
              </div>
            </motion.div>
          )}

          {/* ── SCAN form ── */}
          {step === "scan" && (
            <motion.div key="scan" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>
              <div className="border border-emerald-500/20 bg-emerald-500/5 p-8 rounded-2xl">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Verified: {domain}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Initialize Your Scan</h2>
                <p className="text-sm text-neutral-500 mb-6">Enter your target domain or IP. This is your organization&apos;s one-time free scan.</p>
                <form onSubmit={handleScan} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Target Domain / IP</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., yourcompany.com"
                      value={target}
                      onChange={(e) => { setTarget(e.target.value); setScanError(""); }}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors text-white placeholder-neutral-600"
                    />
                    {scanError && <p className="text-red-400 text-xs mt-2">{scanError}</p>}
                  </div>
                  <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-4 rounded-xl transition-all hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] text-sm uppercase tracking-wider">
                    Launch External Scan
                  </button>
                </form>
                <p className="text-center text-xs text-neutral-600 mt-5">
                  🔒 100% non-intrusive · No data exfiltration · Results in 24h
                </p>
              </div>
            </motion.div>
          )}

          {/* ── SUCCESS ── */}
          {step === "success" && (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
              <div className="border border-emerald-500/25 bg-emerald-500/5 p-10 rounded-2xl text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mx-auto mb-6">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-extrabold text-white mb-3">Scan Queued Successfully</h2>
                <p className="text-neutral-400 mb-6 max-w-sm mx-auto text-sm leading-relaxed">
                  Your external assessment for <span className="text-white font-semibold">{target}</span> is queued. You&apos;ll receive a full vulnerability PDF report at <span className="text-emerald-400">{email}</span> within 24 hours.
                </p>
                <a href="/" className="inline-block text-sm text-neutral-500 hover:text-white transition-colors">← Return to Homepage</a>
              </div>
            </motion.div>
          )}

          {/* ── BLOCKED: already used ── */}
          {step === "blocked" && (
            <motion.div key="blocked" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
              <div className="border border-yellow-500/25 bg-yellow-500/5 p-10 rounded-2xl text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-extrabold text-white mb-3">Free Trial Already Used</h2>
                <p className="text-neutral-400 mb-6 max-w-sm mx-auto text-sm leading-relaxed">
                  Your organization (<span className="text-yellow-400 font-mono">{domain}</span>) has already used its one-time free scan. Upgrade to a paid plan to continue protecting your infrastructure.
                </p>
                <a href="/services" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-3 rounded-xl transition-all text-sm">
                  View Service Plans
                </a>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}

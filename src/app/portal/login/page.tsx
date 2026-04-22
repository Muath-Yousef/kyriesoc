"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LoginPortal() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [verifyStep, setVerifyStep] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");

  const MOCK_CODE = "SOC-2026";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (tab === "register") {
      if (!name.trim()) { setError("Please enter your full name."); return; }
      if (!email.includes("@") || !email.includes(".")) { setError("Please enter a valid email."); return; }
      if (password.length < 6) { setError("Password must be at least 6 characters."); return; }
      // Send verification
      setVerifyStep(true);
      return;
    }

    // Login
    const saved = localStorage.getItem("soc_user");
    if (!saved) {
      setError("No account found. Please register first.");
      return;
    }
    const user = JSON.parse(saved);
    if (user.email !== email || user.password !== password) {
      setError("Invalid credentials.");
      return;
    }
    localStorage.setItem("soc_auth", "true");
    localStorage.setItem("soc_auth_email", user.email);
    localStorage.setItem("soc_auth_name", user.name);
    window.location.href = "/";
  }

  function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    if (verifyCode.trim().toUpperCase() !== MOCK_CODE) {
      setError("Invalid verification code. Hint: SOC-2026");
      return;
    }
    // Save account
    localStorage.setItem("soc_user", JSON.stringify({ name, email, password }));
    localStorage.setItem("soc_auth", "true");
    localStorage.setItem("soc_auth_email", email);
    localStorage.setItem("soc_auth_name", name);
    localStorage.setItem("soc_verified", "true");
    window.location.href = "/training";
  }

  return (
    <div className="min-h-[calc(100vh-72px)] flex items-center justify-center py-20 px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mx-auto mb-4">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">SOC Root Portal</h1>
          <p className="text-neutral-500 text-sm mt-1">Create an account or sign in to access training and services.</p>
        </div>

        {/* Verify email step */}
        {verifyStep ? (
          <div className="border border-white/8 bg-white/[0.02] rounded-2xl p-7 backdrop-blur-xl">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <h2 className="text-lg font-bold mb-2">Verify Your Email</h2>
            <p className="text-sm text-neutral-500 mb-5">We sent a code to <span className="text-white font-medium">{email}</span></p>
            <form onSubmit={handleVerify} className="space-y-4">
              <input type="text" required placeholder="SOC-XXXX"
                value={verifyCode} onChange={(e) => { setVerifyCode(e.target.value); setError(""); }}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors text-white font-mono tracking-widest text-center text-lg placeholder-neutral-600" />
              {error && <p className="text-red-400 text-xs text-center">{error}</p>}
              <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3.5 rounded-xl transition-all text-sm">
                Verify & Create Account
              </button>
            </form>
            <p className="text-center text-xs text-neutral-600 mt-4">
              <button onClick={() => { setVerifyStep(false); setError(""); }} className="text-emerald-500 hover:underline">← Back</button>
            </p>
          </div>
        ) : (
          <>
            {/* Tab switcher */}
            <div className="flex bg-white/5 border border-white/8 rounded-xl p-1 mb-6">
              {(["login", "register"] as const).map((t) => (
                <button key={t} onClick={() => { setTab(t); setError(""); }}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all capitalize ${
                    tab === t ? "bg-emerald-500 text-black font-bold shadow" : "text-neutral-500 hover:text-neutral-300"
                  }`}>
                  {t === "login" ? "Sign In" : "Register"}
                </button>
              ))}
            </div>

            <div className="border border-white/8 bg-white/[0.02] rounded-2xl p-7 backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                {tab === "register" && (
                  <div>
                    <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" required placeholder="Your full name (for certificates)" value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors text-white placeholder-neutral-600 text-sm" />
                  </div>
                )}
                <div>
                  <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" required placeholder="any@email.com" value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors text-white placeholder-neutral-600 text-sm" />
                  {tab === "register" && (
                    <p className="text-[10px] text-neutral-600 mt-1.5">Any email accepted · Your name and email will appear on your training certificate</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Password</label>
                  <input type="password" required placeholder="••••••••••••" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors text-white placeholder-neutral-600 font-mono text-sm" />
                </div>

                {error && <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 px-3 py-2.5 rounded-lg">{error}</p>}

                {tab === "login" && (
                  <div className="flex items-center justify-between text-xs mt-1">
                    <label className="flex items-center gap-2 text-neutral-500 cursor-pointer hover:text-neutral-300 transition-colors">
                      <input type="checkbox" className="accent-emerald-500" /> Enable 2FA
                    </label>
                    <a href="#" className="text-emerald-500 hover:text-emerald-400 transition-colors">Lost access?</a>
                  </div>
                )}

                <button type="submit" className="w-full mt-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3.5 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] text-sm">
                  {tab === "login" ? "Sign In" : "Continue to Email Verification →"}
                </button>
              </form>

              <div className="mt-6 pt-5 border-t border-white/5 text-center">
                <p className="text-xs text-neutral-600 flex items-center justify-center gap-1.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  All sessions are encrypted and monitored.
                </p>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function LoginPortal() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [verifyStep, setVerifyStep] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");
  const [forgotMode, setForgotMode] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (tab === "register") {
      if (!name.trim()) { setError("Please enter your full name."); setLoading(false); return; }
      if (!email.includes("@") || !email.includes(".")) { setError("Please enter a valid email."); setLoading(false); return; }
      if (password.length < 6) { setError("Password must be at least 6 characters."); setLoading(false); return; }

      try {
        const resp = await fetch("https://api.socroot.com/api/send-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email })
        });
        const data = await resp.json();
        if (!data.success) {
          setError(data.message || "Failed to send verification code.");
          setLoading(false);
          return;
        }
        setVerifyStep(true);
      } catch {
        setError("Network error. Please try again later.");
      }
      setLoading(false);
      return;
    }

    // Login
    const saved = localStorage.getItem("soc_user");
    if (!saved) {
      setError("No account found. Please register first.");
      setLoading(false);
      return;
    }
    const user = JSON.parse(saved);
    if (user.email !== email || user.password !== password) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }
    localStorage.setItem("soc_auth", "true");
    localStorage.setItem("soc_auth_email", user.email);
    localStorage.setItem("soc_auth_name", user.name);
    window.location.href = "/";
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await fetch("https://api.socroot.com/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: verifyCode.trim() })
      });
      const data = await resp.json();
      if (!data.success) {
        setError(data.message || "Invalid verification code.");
        setLoading(false);
        return;
      }

      localStorage.setItem("soc_user", JSON.stringify({ name, email, password }));
      localStorage.setItem("soc_auth", "true");
      localStorage.setItem("soc_auth_email", email);
      localStorage.setItem("soc_auth_name", name);
      localStorage.setItem("soc_verified", "true");

      // Optionally subscribe to newsletter silently
      fetch("https://api.socroot.com/api/subscribe-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name })
      }).catch(() => {});

      window.location.href = "/training";
    } catch {
      setError("Network error. Please try again later.");
    }
    setLoading(false);
  }

  function handleOAuthLogin(provider: "google" | "github") {
    // Store intent, redirect to API
    window.location.href = `https://api.socroot.com/api/oauth/${provider}`;
  }

  async function handleForgotPassword(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email.includes("@")) {
      setError("Please enter your email address first.");
      return;
    }
    setLoading(true);
    try {
      const resp = await fetch("https://api.socroot.com/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await resp.json();
      if (data.success) {
        setForgotSent(true);
      } else {
        setError(data.message || "Unable to process request.");
      }
    } catch {
      // Show success anyway to avoid email enumeration
      setForgotSent(true);
    }
    setLoading(false);
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

        {/* ── Forgot Password Mode ── */}
        {forgotMode ? (
          <div className="border border-white/8 bg-white/[0.02] rounded-2xl p-7 backdrop-blur-xl">
            {forgotSent ? (
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h2 className="text-lg font-bold mb-2">Check Your Email</h2>
                <p className="text-sm text-neutral-500 mb-6">
                  If an account exists for <span className="text-white font-medium">{email}</span>,
                  you will receive a password reset link within 5 minutes.
                </p>
                <button onClick={() => { setForgotMode(false); setForgotSent(false); setError(""); }}
                  className="text-emerald-500 hover:underline text-sm">← Back to Sign In
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <h2 className="text-lg font-bold mb-1">Reset Password</h2>
                <p className="text-sm text-neutral-500 mb-4">Enter your email and we&apos;ll send a password reset link.</p>
                <div>
                  <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" required placeholder="your@email.com" value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors text-white placeholder-neutral-600 text-sm" />
                </div>
                {error && <p className="text-red-400 text-xs">{error}</p>}
                <button type="submit" disabled={loading}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-black font-bold py-3.5 rounded-xl transition-all text-sm">
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
                <div className="text-center">
                  <button type="button" onClick={() => { setForgotMode(false); setError(""); }}
                    className="text-neutral-500 hover:text-neutral-300 text-xs transition-colors">← Back to Sign In
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : verifyStep ? (
          /* ── Email Verification Step ── */
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
              <button type="submit" disabled={loading}
                className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-black font-bold py-3.5 rounded-xl transition-all text-sm">
                {loading ? "Verifying..." : "Verify & Create Account"}
              </button>
            </form>
            <p className="text-center text-xs text-neutral-600 mt-4">
              <button onClick={() => { setVerifyStep(false); setError(""); }} className="text-emerald-500 hover:underline">← Back</button>
            </p>
          </div>
        ) : (
          <>
            {/* ── Tab Switcher ── */}
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

              {/* ── Social Login Buttons ── */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => handleOAuthLogin("google")}
                  className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 transition-all text-sm font-medium text-neutral-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A11.96 11.96 0 001 12c0 1.94.46 3.77 1.18 5.42l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>

                <button
                  onClick={() => handleOAuthLogin("github")}
                  className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 transition-all text-sm font-medium text-neutral-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Continue with GitHub
                </button>
              </div>

              {/* ── Divider ── */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-white/8" />
                <span className="text-xs text-neutral-600 font-mono uppercase">or use email</span>
                <div className="flex-1 h-px bg-white/8" />
              </div>

              {/* ── Email Form ── */}
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
                      <input type="checkbox" className="accent-emerald-500" /> Remember me
                    </label>
                    <button type="button" onClick={() => { setForgotMode(true); setError(""); }}
                      className="text-emerald-500 hover:text-emerald-400 transition-colors">Forgot password?
                    </button>
                  </div>
                )}

                <button type="submit" disabled={loading}
                  className="w-full mt-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-black font-bold py-3.5 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] text-sm">
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"/>
                      </svg>
                      Processing...
                    </span>
                  ) : tab === "login" ? "Sign In" : "Continue to Email Verification →"}
                </button>
              </form>

              {/* ── Terms & Privacy ── */}
              <div className="mt-6 pt-5 border-t border-white/5 text-center space-y-2">
                <p className="text-[10px] text-neutral-700">
                  By signing in, you agree to our{" "}
                  <Link href="/terms" className="text-neutral-500 hover:text-neutral-400 underline underline-offset-2">Terms of Service</Link>
                  {" "}and{" "}
                  <Link href="/privacy" className="text-neutral-500 hover:text-neutral-400 underline underline-offset-2">Privacy Policy</Link>
                </p>
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

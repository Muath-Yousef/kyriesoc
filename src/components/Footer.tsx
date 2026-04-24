"use client";

import { useState } from "react";
import Link from "next/link";

const SERVICES = ["Threat Scanning", "Managed SOC", "Compliance", "Training"];
const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Track Order", href: "/portal/order-status" },
  { label: "Portal", href: "/portal/login" },
  { label: "NCA ECC 2.0 Docs", href: "/compliance/nca-ecc" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Security Policy", href: "/.well-known/security.txt" },
];
const TRUST_BADGES = [
  { icon: "📋", label: "NCA ECC 2.0", sub: "Aligned", href: "/compliance/nca-ecc" },
  { icon: "🛡️", label: "ISO 27001", sub: "Framework", href: "/compliance/iso-27001" },
  { icon: "🔒", label: "TLS Encrypted", sub: "All Comms", href: null },
  { icon: "🔍", label: "Expert Review", sub: "Every Report", href: null },
  { icon: "🚫", label: "Data Privacy", sub: "Never Sold", href: null },
  { icon: "⚡", label: "24hr Turnaround", sub: "Max Delivery", href: null },
];

export default function Footer() {
  const [nsEmail, setNsEmail] = useState("");
  const [nsName, setNsName] = useState("");
  const [nsState, setNsState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [nsMsg, setNsMsg] = useState("");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!nsEmail.includes("@")) return;
    setNsState("loading");
    try {
      const res = await fetch("https://api.socroot.com/api/subscribe-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: nsEmail, name: nsName || "Subscriber" }),
      });
      const data = await res.json();
      if (data.success) {
        setNsState("success");
        setNsMsg(data.message || "You're subscribed!");
        setNsEmail("");
        setNsName("");
      } else {
        setNsState("error");
        setNsMsg(data.message || "Something went wrong.");
      }
    } catch {
      setNsState("error");
      setNsMsg("Network error. Please try again.");
    }
  }

  return (
    <footer className="relative z-10 border-t border-emerald-500/10 py-16 mt-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand + Newsletter */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0c0c0c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              <span className="font-bold text-lg">
                <span className="text-emerald-400">SOC</span>
                <span className="text-white"> Root</span>
              </span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm mb-5">
              Enterprise-grade cybersecurity for businesses internationally. Powered by automation, expert analysis, and open-source intelligence.
            </p>
            <div className="flex gap-3 mb-8">
              <span className="text-xs font-mono text-neutral-600 bg-white/5 px-3 py-1.5 rounded border border-white/5">NCA ECC 2.0</span>
              <span className="text-xs font-mono text-neutral-600 bg-white/5 px-3 py-1.5 rounded border border-white/5">ISO 27001</span>
            </div>

            {/* Newsletter */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">Security Intelligence Updates</p>
              {nsState === "success" ? (
                <div className="flex items-center gap-2 text-emerald-400 text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  {nsMsg}
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <input
                    type="text"
                    value={nsName}
                    onChange={e => setNsName(e.target.value)}
                    placeholder="Your name (optional)"
                    className="w-full bg-black/50 border border-white/8 rounded-lg px-3 py-2 text-sm text-neutral-300 placeholder-neutral-700 outline-none focus:border-emerald-500/40 transition-colors"
                  />
                  <div className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={nsEmail}
                      onChange={e => { setNsEmail(e.target.value); setNsState("idle"); }}
                      placeholder="Work email"
                      className="flex-1 bg-black/50 border border-white/8 rounded-lg px-3 py-2 text-sm text-neutral-300 placeholder-neutral-700 outline-none focus:border-emerald-500/40 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={nsState === "loading"}
                      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-black font-bold text-xs rounded-lg transition-all whitespace-nowrap"
                    >
                      {nsState === "loading" ? (
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"/>
                        </svg>
                      ) : "Subscribe"}
                    </button>
                  </div>
                  {nsState === "error" && (
                    <p className="text-red-400 text-xs">{nsMsg}</p>
                  )}
                  <p className="text-neutral-700 text-[11px]">No spam. Unsubscribe anytime.</p>
                </form>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-5">Services</p>
            <ul className="space-y-3">
              {SERVICES.map(s => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-5">Company</p>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/5 pt-10 mt-4 mb-8">
          <p className="text-center text-xs font-mono text-neutral-600 uppercase tracking-widest mb-6">Compliance &amp; Trust</p>
          <div className="flex flex-wrap justify-center gap-4">
            {TRUST_BADGES.map(badge =>
              badge.href ? (
                <Link key={badge.label} href={badge.href} className="flex flex-col items-center gap-1 px-4 py-3 bg-white/[0.03] border border-white/5 rounded-xl hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all min-w-[90px]">
                  <span className="text-xl">{badge.icon}</span>
                  <span className="text-xs font-bold text-neutral-300">{badge.label}</span>
                  <span className="text-[10px] text-neutral-600">{badge.sub}</span>
                </Link>
              ) : (
                <div key={badge.label} className="flex flex-col items-center gap-1 px-4 py-3 bg-white/[0.03] border border-white/5 rounded-xl min-w-[90px]">
                  <span className="text-xl">{badge.icon}</span>
                  <span className="text-xs font-bold text-neutral-300">{badge.label}</span>
                  <span className="text-[10px] text-neutral-600">{badge.sub}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
          <p>© 2026 SOC Root — All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/privacy" className="hover:text-neutral-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-neutral-400 transition-colors">Terms of Service</Link>
            <span>Engineered by <span className="text-emerald-500">Muath Yousef</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

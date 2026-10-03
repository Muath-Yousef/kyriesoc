"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SOCROOT_API } from "../../../lib/apiBase";

type Step = "intro" | "form" | "done" | "error";

const CHECKS = [
  {
    title: "Identity & Admin Plane",
    items: ["Global Administrator count & hygiene", "Security defaults / Conditional Access baseline"],
  },
  {
    title: "Authentication",
    items: ["Legacy authentication exposure", "MFA coverage signals"],
  },
  {
    title: "Apps & Data",
    items: ["High-risk OAuth consent grants", "External mailbox forwarding rules", "External sharing posture"],
  },
  {
    title: "Management & Audit",
    items: ["Intune enrollment & compliance", "Unified audit log status", "Microsoft Secure Score trend"],
  },
];

export default function M365Hardening() {
  const [step, setStep] = useState<Step>("intro");
  const [form, setForm] = useState({ company: "", contact: "", email: "", domain: "" });
  const [err, setErr] = useState("");
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const resp = await fetch(`${SOCROOT_API}/api/m365-intake`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_name: form.company,
          contact_name: form.contact,
          email: form.email,
          tenant_domain: form.domain,
        }),
      });
      const data = await resp.json();
      if (!data.success) {
        setErr(data.message || "Submission failed.");
        setStep("error");
        return;
      }
      setStep("done");
    } catch {
      try {
        if (typeof window !== "undefined") {
          const queue = JSON.parse(localStorage.getItem("socroot_intake_queue") || "[]");
          queue.push({ ...form, timestamp: new Date().toISOString() });
          localStorage.setItem("socroot_intake_queue", JSON.stringify(queue));
        }
      } catch {}
      setStep("done");
    }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em]">
              Productized Security Assessment
            </span>
            <span className="bg-teal-500/10 text-teal-300 border border-teal-500/30 px-2.5 py-0.5 text-xs font-bold rounded-full">
              $500 Pilot / SAR 1,875 Flat
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Microsoft 365 &amp; Entra ID <span className="text-teal-400">Hardening Review</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            A read-only security baseline audit of your M365 tenant: identity hygiene, admin plane,
            legacy authentication exposure, high-risk OAuth grants, external forwarding, and
            unified audit logging — mapped to CIS M365 and NCA ECC controls. Delivered within 48 hours
            with an executive report, remediation punch-list, and complimentary delta verification.
          </p>
          <p className="text-sm text-neutral-500 mt-4 flex items-center gap-4">
            <a
              href="/sample-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline font-semibold"
            >
              View Sample Assessment PDF →
            </a>
            <span>·</span>
            <a
              href="/methodology"
              className="text-teal-400 hover:underline font-semibold"
            >
              Assessment Methodology →
            </a>
          </p>
        </motion.div>

        {step === "intro" && (
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {CHECKS.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                className="border border-white/8 bg-white/[0.02] p-6 rounded-none angular-cut glass-dark">
                <h3 className="text-teal-400 font-semibold mb-3">{c.title}</h3>
                <ul className="space-y-2">
                  {c.items.map((it) => (
                    <li key={it} className="text-sm text-neutral-400 flex gap-2">
                      <span className="text-teal-500">✦</span>{it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <div className="md:col-span-2 mt-4 border border-teal-500/20 bg-teal-500/[0.04] p-5 rounded-lg text-sm text-neutral-400">
              🔒 <b className="text-neutral-200">Strictly read-only.</b> We request view-only Graph API
              permissions with your explicit admin consent. We never change your tenant during
              the assessment.
            </div>
            <button onClick={() => setStep("form")}
              className="md:col-span-2 w-full bg-teal-500 hover:bg-teal-400 text-black font-bold py-4 rounded-none transition-all hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] text-sm uppercase tracking-wider angular-cut">
              Request Your Baseline Assessment →
            </button>
          </div>
        )}

        {step === "form" && (
          <form onSubmit={submit} className="mt-12 border border-white/8 bg-white/[0.02] p-8 rounded-none angular-cut glass-dark space-y-5">
            {[
              { k: "company", label: "Company Name", ph: "Acme Ltd", type: "text", req: true },
              { k: "contact", label: "Contact Name", ph: "Jane Smith", type: "text", req: true },
              { k: "email", label: "Business Email", ph: "jane@acme.com", type: "email", req: true },
              { k: "domain", label: "Primary Tenant Domain", ph: "acme.onmicrosoft.com or acme.com", type: "text", req: false },
            ].map((f) => (
              <div key={f.k}>
                <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">{f.label}</label>
                <input type={f.type} required={f.req} placeholder={f.ph} value={form[f.k as keyof typeof form]}
                  onChange={set(f.k)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-teal-500/60 transition-colors text-white placeholder-neutral-600 text-sm" />
              </div>
            ))}
            <button type="submit"
              className="w-full bg-teal-500 hover:bg-teal-400 text-black font-bold py-3.5 rounded-none transition-all text-sm angular-cut">
              Submit Assessment Request
            </button>
            <p className="text-center text-xs text-neutral-600">
              You will receive an onboarding email with the read-only app-consent steps.
            </p>
          </form>
        )}

        {step === "done" && (
          <div className="mt-12 border border-teal-500/25 bg-teal-500/5 p-10 rounded-2xl text-center">
            <h2 className="text-2xl font-extrabold text-white mb-3">Request Received</h2>
            <p className="text-neutral-400 max-w-lg mx-auto text-sm leading-relaxed">
              Our team will email you the onboarding pack: the read-only app registration guide
              and your assessment schedule. Reports are typically delivered within 48 hours of
              consent completion.
            </p>
          </div>
        )}

        {step === "error" && (
          <div className="mt-12 border border-red-500/25 bg-red-500/5 p-10 rounded-2xl text-center">
            <h2 className="text-xl font-bold text-red-300 mb-2">Something went wrong</h2>
            <p className="text-neutral-400 text-sm">{err}</p>
            <button onClick={() => setStep("form")} className="mt-4 text-teal-400 hover:underline text-sm">
              ← Back to form
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Script from "next/script";
import Link from "next/link";
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
  const [form, setForm] = useState({ company: "", contact: "", email: "", domain: "", paymentPreference: "wire" });
  const [err, setErr] = useState("");
  const [tapReady, setTapReady] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function triggerTapCheckout() {
    if (typeof window !== "undefined" && (window as unknown as { goSell?: unknown }).goSell) {
      try {
        const goSell = (window as unknown as { goSell: { config: (cfg: unknown) => void; openLightBox: () => void } }).goSell;
        goSell.config({
          gateway: {
            publicKey: "pk_test_IMBxgRYhjL70aUEkOQnzKi6f",
            language: "en",
            contactInfo: true,
            supportedCurrencies: "all",
            supportedPaymentMethods: ["MADA", "APPLE_PAY", "VISA", "MASTERCARD", "AMERICAN_EXPRESS"],
            notifications: {
              emails: ["billing@socroot.com"],
              sms: false,
            },
            callback: (response: { status?: string }) => {
              if (response && response.status === "CAPTURED") {
                window.location.href = "/services/m365-hardening/success";
              }
            },
          },
          customer: {
            first_name: form.contact || "Enterprise",
            last_name: "Customer",
            email: form.email || "security-lead@company.com",
            phone: {
              country_code: "966",
              number: "500000000",
            },
          },
          order: {
            amount: 500.0,
            currency: "USD",
            items: [
              {
                id: 1,
                name: "Microsoft 365 Baseline Security Assessment",
                description: "22 CIS & NCA ECC Controls Audit and Hardening Punch-List",
                quantity: "1",
                amount_per_unit: "500.00",
              },
            ],
          },
          transaction: {
            mode: "charge",
            charge: {
              saveCard: false,
              threeDSecure: true,
              description: "SOCRoot M365 Baseline Security Review ($500 Pilot / SAR 1,875)",
              statement_descriptor: "SOCROOT M365",
              redirect: "https://socroot.com/services/m365-hardening/success",
              post: "https://socroot.com/api/webhooks/tap",
            },
          },
        });
        goSell.openLightBox();
      } catch (e) {
        console.error("Tap openLightBox error:", e);
        setStep("form");
      }
    } else {
      setStep("form");
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (form.paymentPreference === "card") {
      triggerTapCheckout();
      return;
    }

    try {
      const resp = await fetch(`${SOCROOT_API}/api/m365-intake`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_name: form.company,
          contact_name: form.contact,
          email: form.email,
          tenant_domain: form.domain,
          payment_rail: form.paymentPreference,
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
    <>
      <Script
        src="https://secure.gosell.io/js/sdk/tap.min.js"
        strategy="afterInteractive"
        onLoad={() => setTapReady(true)}
      />

      <div className="min-h-screen py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em]">
                Productized Security Assessment
              </span>
              <span className="bg-teal-500/10 text-teal-300 border border-teal-500/30 px-2.5 py-0.5 text-xs font-bold rounded-full">
                $500 Pilot / SAR 1,875 Flat
              </span>
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-semibold rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Mada, Apple Pay &amp; Wire Ready
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Microsoft 365 &amp; Entra ID <span className="text-teal-400">Hardening Review</span>
            </h1>

            <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
              A read-only security baseline audit of your M365 tenant: identity hygiene, admin plane,
              legacy authentication exposure, high-risk OAuth grants, external forwarding, and
              unified audit logging — mapped deterministically to CIS M365 v3.0 and NCA ECC controls. Delivered within 48 hours
              with an executive report, remediation punch-list, and complimentary delta verification.
            </p>

            <div className="text-sm text-neutral-500 mt-4 flex flex-wrap items-center gap-4">
              <a
                href="/sample-report.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline font-semibold"
              >
                View Interactive Demo Report ↗
              </a>
              <span>·</span>
              <a
                href="/sample-report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white hover:underline"
              >
                Sample Report PDF ↓
              </a>
              <span>·</span>
              <Link href="/resources/case-study-1" className="text-amber-400 hover:underline font-semibold">
                Case Study: 17 Gaps in 30 Min →
              </Link>
              <span>·</span>
              <Link href="/methodology" className="text-neutral-400 hover:text-white hover:underline">
                Methodology →
              </Link>
            </div>
          </motion.div>

          {step === "intro" && (
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {CHECKS.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="border border-white/8 bg-white/[0.02] p-6 rounded-none angular-cut glass-dark"
                >
                  <h3 className="text-teal-400 font-semibold mb-3">{c.title}</h3>
                  <ul className="space-y-2">
                    {c.items.map((it) => (
                      <li key={it} className="text-sm text-neutral-400 flex gap-2">
                        <span className="text-teal-500">✦</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              <div className="md:col-span-2 border border-teal-500/20 bg-teal-500/[0.04] p-5 rounded-lg text-sm text-neutral-300">
                🔒 <b className="text-white">Strictly Read-Only Guarantee:</b> We evaluate strictly via view-only
                Microsoft Graph API scopes. Governed by formal bilateral Rules of Engagement (RoE) &amp; Mutual NDA. Zero writes, zero agent installation, zero credential retention.
              </div>

              {/* Detailed Service Scope & Boundaries Matrix */}
              <div className="md:col-span-2 border border-white/10 bg-black/40 p-6 space-y-4 angular-cut">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>📋</span> Service Scope &amp; Technical Boundaries Matrix
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-neutral-400 font-mono">
                        <th className="py-2.5 pr-4 w-44">Dimension</th>
                        <th className="py-2.5 pr-4">Specification &amp; Client Safeguards</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-neutral-300">
                      <tr>
                        <td className="py-2.5 pr-4 font-semibold text-teal-400">Supported Products</td>
                        <td className="py-2.5 pr-4">Microsoft Entra ID (Azure AD), Exchange Online, SharePoint/OneDrive, Intune</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-semibold text-teal-400">Required Tenant Licenses</td>
                        <td className="py-2.5 pr-4">Microsoft 365 Business Premium, E3, E5, or standalone Entra ID P1/P2</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-semibold text-teal-400">Access Method &amp; Scopes</td>
                        <td className="py-2.5 pr-4">Temporary client-owned App Registration restricted to read-only scopes: <code className="text-neutral-300">Policy.Read.All</code>, <code className="text-neutral-300">Directory.Read.All</code>, <code className="text-neutral-300">Reports.Read.All</code>, <code className="text-neutral-300">AuditLog.Read.All</code></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-semibold text-emerald-400">Collected Data</td>
                        <td className="py-2.5 pr-4">Tenant configuration metadata, security policies, and administrative role assignments only</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-semibold text-red-400">Strictly Excluded Data</td>
                        <td className="py-2.5 pr-4">Mailbox body/attachment content, OneDrive/SharePoint files, and Teams chat messages are <b>100% excluded and uncollected</b></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-semibold text-teal-400">Service Boundaries</td>
                        <td className="py-2.5 pr-4">Point-in-time configuration baseline assessment. <b>Not an intrusive penetration test; not an ongoing 24/7 managed SOC</b></td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-semibold text-teal-400">Retention &amp; Offboarding</td>
                        <td className="py-2.5 pr-4">Technical evidence purged 30 days post-delivery. Client receives step-by-step runbook to delete the temporary App Registration immediately after extraction</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-semibold text-teal-400">Complimentary Retest</td>
                        <td className="py-2.5 pr-4">One free delta re-test within 30 days to verify that remediated controls have successfully transitioned to PASS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Dual-Rail Commercial Actions */}
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-4 mt-2">
                <button
                  type="button"
                  onClick={() => triggerTapCheckout()}
                  className="w-full bg-teal-500 hover:bg-teal-400 text-black font-bold py-4 px-6 rounded-none transition-all hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] text-sm uppercase tracking-wider angular-cut flex flex-col items-center justify-center gap-1"
                >
                  <span>Fast-Track Card Checkout →</span>
                  <span className="text-[11px] font-normal normal-case opacity-90">
                    Mada, Apple Pay, Visa, Mastercard ($500 / SAR 1,875)
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setForm((f) => ({ ...f, paymentPreference: "wire" }));
                    setStep("form");
                  }}
                  className="w-full border border-teal-500/40 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 font-bold py-4 px-6 rounded-none transition-all text-sm uppercase tracking-wider angular-cut flex flex-col items-center justify-center gap-1"
                >
                  <span>Request Corporate SOW &amp; Wire Invoice →</span>
                  <span className="text-[11px] font-normal normal-case text-neutral-400">
                    Official Net 30 Invoice with SWIFT / IBAN Details
                  </span>
                </button>
              </div>
            </div>
          )}

          {step === "form" && (
            <form
              onSubmit={submit}
              className="mt-12 border border-white/8 bg-white/[0.02] p-8 rounded-none angular-cut glass-dark space-y-5"
            >
              <div className="border-b border-white/10 pb-4 mb-2">
                <h3 className="text-lg font-bold text-white">Assessment Intake &amp; Invoicing Details</h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Provide your organization details to receive the tailored Statement of Work (SOW), Rules of Engagement, and commercial invoice.
                </p>
              </div>

              {[
                { k: "company", label: "Company / Organization Name", ph: "Acme FinTech Ltd", type: "text", req: true },
                { k: "contact", label: "Authorized Contact / CISO Name", ph: "Fahad Al-Mutairi", type: "text", req: true },
                { k: "email", label: "Corporate Email", ph: "security@acmefintech.sa", type: "email", req: true },
                { k: "domain", label: "Primary Tenant Domain", ph: "acmefintech.sa or acme.onmicrosoft.com", type: "text", req: true },
              ].map((f) => (
                <div key={f.k}>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    required={f.req}
                    placeholder={f.ph}
                    value={form[f.k as keyof typeof form]}
                    onChange={set(f.k)}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-teal-500/60 transition-colors text-white placeholder-neutral-600 text-sm"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">
                  Settlement &amp; Invoicing Preference
                </label>
                <select
                  value={form.paymentPreference}
                  onChange={set("paymentPreference")}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-teal-500/60 transition-colors text-white text-sm"
                >
                  <option value="wire">Corporate Bank Wire Transfer (SWIFT / Jordan Ahli Bank - Net 30)</option>
                  <option value="card">Fast-Track Card Checkout via Tap (Mada / Apple Pay / Visa / MC)</option>
                  <option value="cliq">Local Jordan Payments (CliQ: SOCROOT - Jordan Entities Only)</option>
                </select>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-teal-500 hover:bg-teal-400 text-black font-bold py-3.5 rounded-none transition-all text-sm angular-cut"
                >
                  {form.paymentPreference === "card" ? "Proceed to Card Checkout ($500) →" : "Generate SOW & Issue Wire Invoice →"}
                </button>
                <button
                  type="button"
                  onClick={() => setStep("intro")}
                  className="border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white px-5 py-3.5 text-sm transition-colors"
                >
                  Back
                </button>
              </div>

              <p className="text-center text-xs text-neutral-500">
                You will receive the onboarding guide, sample report, and formal invoice with Jordan Ahli Bank routing details.
              </p>
            </form>
          )}

          {step === "done" && (
            <div className="mt-12 border border-teal-500/25 bg-teal-500/5 p-10 rounded-2xl text-center">
              <h2 className="text-2xl font-extrabold text-white mb-3">Assessment Intake Confirmed</h2>
              <p className="text-neutral-400 max-w-lg mx-auto text-sm leading-relaxed mb-6">
                Your request has been received. Our operations desk will issue your tailored Statement of Work (SOW),
                official Commercial Invoice (with Jordan Ahli Bank SWIFT/IBAN instructions), and bilateral Rules of Engagement.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/sample-report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 text-black font-bold px-5 py-2.5 rounded-lg text-sm"
                >
                  View Sample Executive Report PDF →
                </a>
                <button
                  onClick={() => setStep("intro")}
                  className="border border-white/20 text-white font-medium px-5 py-2.5 rounded-lg text-sm"
                >
                  Return to Service Overview
                </button>
              </div>
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
    </>
  );
}

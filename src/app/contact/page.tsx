"use client";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

const CHANNELS = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "General Inquiries",
    value: "socroot@outlook.com",
    href: "mailto:socroot@outlook.com",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Technical Support",
    value: "support.socroot@gmail.com",
    href: "mailto:support.socroot@gmail.com",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.522 5.855L.057 23.886 6.304 22.4A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.714.974 1.001-3.614-.235-.374A9.818 9.818 0 1112 21.818z"/>
      </svg>
    ),
    title: "WhatsApp (Fastest Response)",
    value: "+962 777 545 115",
    href: "https://wa.me/962777545115",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
    title: "Telegram",
    value: "@RootSoc",
    href: "https://t.me/RootSoc",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errMsg, setErrMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry / Quote",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("loading");
    setErrMsg("");

    try {
      const res = await fetch("https://api.socroot.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setFormState("success");
      } else {
        setErrMsg(data.message || "Failed to send message. Please try WhatsApp instead.");
        setFormState("error");
      }
    } catch {
      // Fallback: still notify via Telegram on client-side failure, guide user to WhatsApp
      setErrMsg("Network error. Please contact us directly via WhatsApp at +962 777 545 115.");
      setFormState("error");
    }
  }

  const inputBase =
    "w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors text-white placeholder-neutral-600 text-sm";

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Contact <span className="text-emerald-400">SOC Root</span>
          </h1>
          <p className="text-neutral-400">
            Ready to secure your enterprise? Reach our 24/7 analysis team directly or submit a request below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* ── Contact Form ── */}
          <div className="border border-white/8 bg-white/[0.02] p-8 rounded-2xl">
            <h2 className="text-xl font-bold mb-6">Send a Secure Message</h2>

            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Message Received</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                    Your message has been transmitted securely. Our team will respond within <span className="text-emerald-400 font-semibold">24 hours</span>.
                  </p>
                </div>
                <a
                  href="https://wa.me/962777545115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-mono"
                >
                  Need immediate help? WhatsApp us →
                </a>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
                    Name / Organization
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ciso@company.com"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
                    Subject / Incident Priority
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputBase}
                  >
                    <option>General Inquiry / Quote</option>
                    <option>Active Security Incident (High Priority)</option>
                    <option>Compliance Consultation</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
                    Details
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your situation, domain, or security concern..."
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {formState === "error" && (
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-red-500/5 border border-red-500/20">
                    <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-red-400 text-xs leading-relaxed">{errMsg}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-black font-bold py-3.5 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] text-sm flex items-center justify-center gap-2"
                >
                  {formState === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                      </svg>
                      Transmitting Securely...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Initialize Secure Transmission
                    </>
                  )}
                </button>

                <p className="text-neutral-700 text-[11px] text-center">
                  Transmitted over TLS 1.3 · Stored encrypted · Max 24hr response
                </p>
              </form>
            )}
          </div>

          {/* ── Direct Channels + Info ── */}
          <div className="space-y-5">
            <div className="border border-white/8 bg-white/[0.02] p-7 rounded-2xl">
              <h3 className="text-lg font-bold text-emerald-400 mb-6">Direct Channels</h3>
              <ul className="space-y-5">
                {CHANNELS.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-white group-hover:text-emerald-400 transition-colors">
                          {item.title}
                        </p>
                        <p className="text-neutral-500 text-sm mt-0.5 font-mono">{item.value}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Operating Hours */}
            <div className="border border-white/8 bg-white/[0.02] p-6 rounded-2xl">
              <h3 className="text-base font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Availability
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "WhatsApp / Telegram", value: "24/7 — typically < 2hr response" },
                  { label: "Email Response", value: "Within 24 hours (business days)" },
                  { label: "Active Incidents", value: "Immediate escalation available" },
                  { label: "Timezone", value: "GST +4 (UAE) / AST +3 (Jordan)" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-4">
                    <span className="text-neutral-500">{label}</span>
                    <span className="text-neutral-300 text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PGP — real key or nothing */}
            <div className="border border-white/8 bg-white/[0.02] p-6 rounded-2xl">
              <h3 className="text-base font-bold mb-2">Encrypted Disclosure</h3>
              <p className="text-neutral-500 text-sm mb-4 leading-relaxed">
                Disclosing a vulnerability or active breach? Reach us via WhatsApp or email — we follow responsible disclosure best practices per our{" "}
                <a href="/.well-known/security.txt" className="text-emerald-400 hover:underline">
                  security.txt
                </a>.
              </p>
              <a
                href="/.well-known/security.txt"
                className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors border border-emerald-500/20 px-3 py-2 rounded-lg"
              >
                View security.txt →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

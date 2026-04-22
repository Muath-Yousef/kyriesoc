"use client";

export default function Contact() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Contact <span className="text-emerald-400">SOC Root</span>
          </h1>
          <p className="text-neutral-400">Ready to secure your enterprise? Reach our 24/7 analysis team directly or submit a request below.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <div className="border border-white/8 bg-white/[0.02] p-8 rounded-2xl">
            <h2 className="text-xl font-bold mb-6">Send a Secure Message</h2>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Message sent securely over TLS."); }}>
              <div>
                <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Name / Organization</label>
                <input type="text" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors text-white placeholder-neutral-600" />
              </div>
              <div>
                <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors text-white placeholder-neutral-600" />
              </div>
              <div>
                <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Subject / Incident Priority</label>
                <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors text-neutral-300">
                  <option>General Inquiry / Quote</option>
                  <option>Active Security Incident (High Priority)</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Details</label>
                <textarea required rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors text-white resize-none" />
              </div>
              <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3.5 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] text-sm">
                Initialize Secure Transmission
              </button>
            </form>
          </div>

          {/* Direct channels */}
          <div className="space-y-5">
            <div className="border border-white/8 bg-white/[0.02] p-7 rounded-2xl">
              <h3 className="text-lg font-bold text-emerald-400 mb-6">Direct Channels</h3>
              <ul className="space-y-6">
                {[
                  { icon: "✉", title: "Security Operations Center", value: "soc@socroot.com" },
                  { icon: "☎", title: "Emergency Incident Hotline (Jordan)", value: "+962 7 9876 5432" },
                  { icon: "☎", title: "Emergency Incident Hotline (UAE)", value: "+971 50 123 4567" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white">{item.title}</p>
                      <p className="text-neutral-500 text-sm mt-0.5">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/8 bg-white/[0.02] p-7 rounded-2xl">
              <h3 className="text-lg font-bold mb-3">PGP Encryption</h3>
              <p className="text-neutral-500 text-sm mb-4 leading-relaxed">
                If you are disclosing sensitive vulnerabilities or an active breach, please encrypt communications using our public key.
              </p>
              <div className="bg-black/60 p-4 rounded-xl border border-white/5 overflow-x-auto">
                <pre className="text-xs font-mono text-neutral-600 whitespace-pre-wrap">
{`-----BEGIN PGP PUBLIC KEY BLOCK-----
mQINBGEy... [truncated]
...GjK+E=
-----END PGP PUBLIC KEY BLOCK-----`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

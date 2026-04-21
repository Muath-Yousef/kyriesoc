"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-24 min-h-screen">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Contact <span className="text-[#00f0ff]">SOC Root</span></h1>
        <p className="text-gray-400">Ready to secure your enterprise? Reach out to our 24/7 analysis team directly or submit a request below.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-6">Send a secure message</h2>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Message sent securely over TLS."); }}>
            <div>
              <label className="block text-xs font-mono text-gray-400 uppercase mb-2">Name / Organization</label>
              <input type="text" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#00f0ff]" />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-400 uppercase mb-2">Email Address</label>
              <input type="email" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#00f0ff]" />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-400 uppercase mb-2">Subject / Incident Priority</label>
              <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#00f0ff] text-gray-300">
                <option>General Inquiry / Quote</option>
                <option>Active Security Incident (High Priority)</option>
                <option>Partnership</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-400 uppercase mb-2">Details</label>
              <textarea required rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#00f0ff]"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#00f0ff] text-black font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all">
              Initialize Secure Transmission
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6 text-[#00f0ff]">Direct Channels</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold">Security Operations Center</p>
                  <p className="text-gray-400 text-sm">soc@socroot.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold">Emergency Incident Hotline</p>
                  <p className="text-gray-400 text-sm">+962 7 9876 5432 (Jordan)</p>
                  <p className="text-gray-400 text-sm">+971 50 123 4567 (UAE)</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
            <h3 className="text-xl font-bold mb-4 text-amber-400">PGP Encryption</h3>
            <p className="text-gray-400 text-sm mb-4">If you are disclosing sensitive vulnerabilities or an active breach, please encrypt communications utilizing our public key.</p>
            <div className="bg-black/50 p-4 rounded border border-white/10 overflow-x-auto">
              <pre className="text-xs font-mono text-gray-500">
                -----BEGIN PGP PUBLIC KEY BLOCK-----
                <br/>mQINBGEy...<br/>...GjK+E=
                <br/>-----END PGP PUBLIC KEY BLOCK-----
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Search } from "lucide-react";

export default function FreeScan() {
  return (
    <div className="container mx-auto px-6 py-24 min-h-screen">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a <span className="text-[#00f0ff]">Free Security Scan</span></h1>
        <p className="text-gray-400">Enter your domain or IP below. Our engine will perform a non-intrusive external reconnaissance and vulnerability assessment, delivering a PDF report in 24 hours.</p>
      </div>

      <div className="max-w-xl mx-auto p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-12">
        <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Scan request initiated! You will hear from us within 24 hours."); }}>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-mono text-gray-400 uppercase tracking-widest">Target Domain / IP</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="text" 
                placeholder="e.g., yourcompany.com" 
                required
                className="w-full bg-black/50 border border-white/10 rounded-lg pl-12 pr-4 py-3 outline-none focus:border-[#00f0ff] transition-colors text-white"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-mono text-gray-400 uppercase tracking-widest">Business Email</label>
            <input 
              type="email" 
              placeholder="you@yourcompany.com" 
              required
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#00f0ff] transition-colors text-white"
            />
          </div>

          <button type="submit" className="w-full mt-4 bg-[#00f0ff] text-black font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-2">
            <Shield className="w-5 h-5" /> Initialize External Scan
          </button>
        </form>
        
        <p className="text-xs text-gray-500 mt-6 text-center flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" /> 100% Non-intrusive. No sensitive data is extracted.
        </p>
      </div>
    </div>
  )
}

"use client";

import { motion } from "framer-motion";
import { Lock, ShieldAlert, Fingerprint } from "lucide-react";
import { useState } from "react";

export default function LoginPortal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Connection to authentication node B established. Awaiting backend integration.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#05050A]">
      {/* Visual cyber decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f0ff]/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl shadow-2xl"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00f0ff]">
            <Fingerprint className="w-8 h-8" />
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Client Portal Access</h1>
          <p className="text-gray-400 text-sm">Secure terminal for SOC Root enterprise clients.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-mono text-gray-400 uppercase mb-2">Corporate Identity</label>
            <div className="relative">
              <input 
                type="email" 
                required
                placeholder="client@organization.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#00f0ff] transition-colors text-white"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-mono text-gray-400 uppercase mb-2">Authorization Key</label>
            <div className="relative">
              <input 
                type="password" 
                required
                placeholder="••••••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#00f0ff] transition-colors text-white font-mono"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs mt-2">
            <label className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-white">
              <input type="checkbox" className="accent-[#00f0ff]" /> Require 2FA
            </label>
            <a href="#" className="text-[#00f0ff] hover:underline">Lost access?</a>
          </div>

          <button type="submit" className="w-full mt-6 bg-[#00f0ff] text-black font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> Authenticate Session
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-gray-500 font-mono flex items-center justify-center gap-1">
            <ShieldAlert className="w-3 h-3 text-red-400" /> Unauthorized access is strictly logged and reported.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

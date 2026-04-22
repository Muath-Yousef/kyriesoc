"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Mail, Activity, Eye, Terminal, Lock, LockOpen, Server, Globe2 } from "lucide-react";
import AmbientAudio from "@/components/AmbientAudio";
import DynamicBackground from "@/components/DynamicBackground";

export default function Home() {
  const [systemActive, setSystemActive] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  // Simulated live threat logs
  useEffect(() => {
    if (!systemActive) return;

    const logs = [
      "[SYS] Initializing SOC Root Neural Engine...",
      "[NCA_ECC] Compliance metrics synchronized.",
      "[WAF] Blocking brute-force attack from 192.168.44.112",
      "[SIEM] Analyzing anomalous payload on port 443",
      "[DNS] Safelisting *.asas4edu.net domains",
      "[SOAR] Auto-remediation policy #441 executed successfully.",
      "[WAF] Null-routing malicious traffic cluster..."
    ];

    let i = 0;
    const interval = setInterval(() => {
      setTerminalLines(prev => [...prev.slice(-4), logs[i % logs.length]]);
      i++;
    }, 2500);

    return () => clearInterval(interval);
  }, [systemActive]);

  return (
    <div className="flex flex-col min-h-screen bg-[#05050A] text-gray-200 overflow-x-hidden selection:bg-[#00f0ff]/30">
      <AmbientAudio isActive={systemActive} />
      <DynamicBackground />

      <AnimatePresence>
        {!systemActive && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#05050A] backdrop-blur-3xl"
          >
            <div className="text-center">
              <Lock className="w-16 h-16 text-[#00f0ff] mx-auto mb-6 animate-pulse opacity-80" />
              <h1 className="text-2xl font-mono tracking-widest text-white mb-8 border-b border-white/10 pb-4">UNAUTHORIZED ACCESS RESTRICTED</h1>
              <button 
                onClick={() => setSystemActive(true)}
                className="group relative px-8 py-4 bg-transparent font-mono text-[#00f0ff] uppercase tracking-[0.2em] transition-all hover:text-black overflow-hidden border border-[#00f0ff]/40"
              >
                <span className="absolute inset-0 bg-[#00f0ff] w-full h-full -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
                <span className="relative z-10 font-bold">Initialize System Context</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content protected by System state */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: systemActive ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 w-full"
      >
        {/* Navigation Mock (if any) */}
        <header className="absolute top-0 w-full p-6 border-b border-white/5 glass z-50 flex justify-between items-center">
             <div className="flex items-center gap-3">
                 <Shield className="w-8 h-8 text-[#00f0ff]" />
                 <span className="font-bold text-xl tracking-widest text-white">SOC ROOT</span>
             </div>
             <nav className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest text-gray-400">
                 <a href="/scan" className="hover:text-[#00f0ff] transition-colors">Threat Scan</a>
                 <a href="/services" className="hover:text-[#00f0ff] transition-colors">Services</a>
                 <a href="/about" className="hover:text-[#00f0ff] transition-colors">Intel</a>
                 <a href="/contact" className="hover:text-[#00f0ff] transition-colors">Comm</a>
             </nav>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left: Copy */}
                <div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full glass border-[#00f0ff]/30 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                      <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span>
                      <span className="font-mono text-[10px] md:text-xs text-[#00f0ff] uppercase tracking-[0.3em] font-bold">Defensive Posture: Active</span>
                    </div>
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white"
                  >
                    We Hack You <br />
                    <span className="bg-gradient-to-r from-[#00f0ff] to-amber-400 bg-clip-text text-transparent">
                      Before They Do.
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
                  >
                    SOC Root is a military-grade automated cybersecurity platform. We continuously map, exploit, and harden your digital perimeter. Fully aligned with NCA ECC and ISO 27001 compliance standards.
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    className="flex flex-wrap gap-4"
                  >
                    <a href="/scan" className="bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/50 px-8 py-4 rounded font-mono uppercase tracking-widest text-sm hover:bg-[#00f0ff] hover:text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2">
                        <Terminal className="w-4 h-4" /> Initiate Scan
                    </a>
                  </motion.div>
                </div>

                {/* Right: Live Terminal Mock */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="hidden lg:block relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff]/30 to-amber-400/20 rounded-xl blur-lg opacity-50 animate-pulse"></div>
                    <div className="relative glass-dark rounded-xl border border-white/10 overflow-hidden flex flex-col h-80 shadow-2xl">
                        {/* Terminal Header */}
                        <div className="bg-black/80 px-4 py-2 border-b border-white/5 flex items-center justify-between">
                            <span className="font-mono text-xs text-gray-500">root@soc-orchestrator:~#</span>
                            <div className="flex gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
                            </div>
                        </div>
                        {/* Terminal Body */}
                        <div className="p-4 font-mono text-sm flex-1 flex flex-col justify-end">
                            {terminalLines.map((line, idx) => (
                                <motion.div 
                                    key={line + idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="mb-2"
                                >
                                    <span className="text-[#00f0ff] mr-2">&gt;</span>
                                    <span className={line.includes("Blocking") || line.includes("routing") ? "text-amber-400" : "text-gray-300"}>
                                        {line}
                                    </span>
                                </motion.div>
                            ))}
                            <div className="mt-2 flex items-center">
                                <span className="text-[#00f0ff] mr-2">&gt;</span>
                                <span className="w-2 h-4 bg-[#00f0ff] animate-pulse"></span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
          </div>
        </section>

        {/* Global Protection Section */}
        <section className="py-32 relative border-t border-white/5 bg-black/40">
           <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="font-mono text-[#00f0ff] mb-4 text-xs tracking-[0.3em] uppercase">Architecture</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Full Spectrum Defense Engine</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                 {[
                  { title: "Continuous Subdomain Discovery", desc: "Passive intelligence gathering across WHOIS, DNS logs, and cert transparency.", icon: <Globe2 className="w-6 h-6 text-[#00f0ff]" /> },
                  { title: "Automated Penetration Testing", desc: "Nuclei-driven vulnerability scanning simulating real-world attacker methodologies.", icon: <Shield className="w-6 h-6 text-[#00f0ff]" /> },
                  { title: "LLM Triage & Analysis", desc: "Machine learning model evaluates raw findings, eliminating false positives instantly.", icon: <Server className="w-6 h-6 text-[#00f0ff]" /> },
                  { title: "SOAR Automated Remediation", desc: "API layer communicates with Cloudflare WAF and IAM policies to null-route threats.", icon: <Activity className="w-6 h-6 text-[#00f0ff]" /> },
                 ].map((mod, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="glass p-6 rounded-xl border-white/5 hover:border-[#00f0ff]/30 transition-all group"
                    >
                        <div className="w-12 h-12 bg-black rounded-lg border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#00f0ff]/10 group-hover:border-[#00f0ff]/30 transition-colors shadow-inner">
                            {mod.icon}
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{mod.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{mod.desc}</p>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

      </motion.div>
    </div>
  );
}

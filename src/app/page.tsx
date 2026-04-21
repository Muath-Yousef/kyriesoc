"use client";

import { motion } from "framer-motion";
import { Shield, Mail, Activity, Eye } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#00f0ff]/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/5 backdrop-blur-md">
                <span className="font-mono text-xs text-[#00f0ff] uppercase tracking-widest">Version 2.0 Access Granted</span>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
            >
              Protect Your Business <br />
              <span className="bg-gradient-to-r from-[#00f0ff] to-amber-400 bg-clip-text text-transparent">
                Before Attackers Find It
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
            >
              Automated cybersecurity for Jordan & UAE businesses. Enterprise-grade managed security at SMB prices, constantly monitored by our AI engine.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="/scan" className="bg-[#00f0ff] text-black px-8 py-4 rounded font-bold hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all">
                Get Your Free Scan →
              </a>
              <a href="/services" className="px-8 py-4 rounded font-bold border border-white/10 hover:border-white/30 hover:bg-white/5 transition-colors">
                View Packages
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none"></div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 border-y border-white/5 bg-[#05050A]/50 backdrop-blur-md relative z-10 w-full overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-sm font-mono text-gray-500 uppercase tracking-widest">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse"></span> NCA ECC 2.0 Aligned</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse"></span> ISO 27001 Referenced</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse"></span> AI-Powered Analysis</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 relative w-full border-b border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-mono text-[#00f0ff] mb-4 text-sm tracking-[0.2em] uppercase">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Security Built for Business</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Vulnerability Scans", desc: "External and internal scanning using military-grade engines.", icon: <Shield className="w-6 h-6 text-[#00f0ff]" /> },
              { title: "Email Security", desc: "SPF, DMARC, and DKIM enforcement against spear-phishing.", icon: <Mail className="w-6 h-6 text-[#00f0ff]" /> },
              { title: "SOC Monitoring", desc: "24/7 SIEM threat detection with automated incident response.", icon: <Activity className="w-6 h-6 text-[#00f0ff]" /> },
              { title: "Cloudflare WAF", desc: "Automated edge blocks for malicious IP addresses instantly.", icon: <Eye className="w-6 h-6 text-[#00f0ff]" /> },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00f0ff]/30 hover:bg-white/[0.04] transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#00f0ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

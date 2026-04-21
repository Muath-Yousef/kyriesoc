"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-24 min-h-screen">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-[#00f0ff]">SOC Root</span></h1>
        <p className="text-gray-400">Democratizing enterprise-grade cybersecurity for emerging markets in the Middle East.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Most businesses in Jordan and the UAE are exposed to advanced cyber threats simply because enterprise-grade defense systems are priced out of their reach. 
            SOC Root was built to solve this. By leveraging automation, AI-assisted analysis, and open-source intelligence matrices, we deliver the power of a 
            fully staffed Security Operations Center at a fraction of the cost.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-1.5 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20 text-xs font-mono">React / Next.js</span>
            <span className="px-4 py-1.5 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20 text-xs font-mono">Wazuh SIEM</span>
            <span className="px-4 py-1.5 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20 text-xs font-mono">Cloudflare WAF</span>
            <span className="px-4 py-1.5 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20 text-xs font-mono">Python Orchestration</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00f0ff]/20 to-amber-400/20 rounded-2xl blur-xl pointer-events-none"></div>
          <div className="relative bg-black/50 border border-white/10 p-12 rounded-2xl backdrop-blur-xl text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00f0ff] to-amber-400 mx-auto mb-6 flex items-center justify-center text-black font-bold text-3xl">
              MY
            </div>
            <h3 className="text-2xl font-bold mb-1">Muath Yousef</h3>
            <p className="text-[#00f0ff] font-mono text-sm mb-4 uppercase tracking-widest">Founder & Lead Engineer</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              With a background in offensive security and infrastructure automation, Muath engineered the Synapse SOC Engine—the autonomous core that powers SOC Root.
            </p>
            <a href="https://muath-yousef.github.io/portfolio-site/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline text-sm font-bold">
              View Portfolio →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

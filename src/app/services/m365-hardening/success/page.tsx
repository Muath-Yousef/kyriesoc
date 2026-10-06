"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen py-24 flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="border border-teal-500/30 bg-teal-500/[0.04] p-10 md:p-12 rounded-2xl glass-dark text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 text-3xl mb-6 border border-teal-500/40">
            ✓
          </div>

          <span className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] block mb-2">
            Payment &amp; Intake Confirmed
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Microsoft 365 Baseline Assessment Scheduled
          </h1>

          <p className="text-neutral-400 max-w-xl mx-auto text-base leading-relaxed mb-8">
            Thank you for confirming your assessment. Your order has been registered, and your dedicated
            onboarding specialist is preparing your read-only tenant intake pack.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="p-4 border border-white/10 bg-black/40 rounded-xl">
              <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono block mb-1">
                Amount Paid
              </span>
              <span className="text-lg font-bold text-teal-300">
                $500.00 USD <span className="text-xs text-neutral-400">(SAR 1,875)</span>
              </span>
            </div>
            <div className="p-4 border border-white/10 bg-black/40 rounded-xl">
              <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono block mb-1">
                Turnaround SLA
              </span>
              <span className="text-lg font-bold text-white">Under 48 Hours</span>
            </div>
            <div className="p-4 border border-white/10 bg-black/40 rounded-xl">
              <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono block mb-1">
                Audit Stance
              </span>
              <span className="text-lg font-bold text-teal-400">100% Read-Only</span>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/sample-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-black font-bold px-6 py-3 rounded-lg text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              View Sample Executive Report PDF →
            </a>
            <Link
              href="/methodology"
              className="w-full sm:w-auto border border-white/20 hover:border-teal-400 text-white font-medium px-6 py-3 rounded-lg text-sm transition-all"
            >
              Read CIS &amp; NCA Methodology
            </Link>
          </div>

          <p className="text-xs text-neutral-500 mt-8">
            Need urgent assistance or direct invoicing? Contact our operations desk at{" "}
            <a href="mailto:billing@socroot.com" className="text-teal-400 hover:underline">
              billing@socroot.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

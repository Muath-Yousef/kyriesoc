"use client";

import { motion } from "framer-motion";
import { faqs } from "@/data/faq";

export function FAQAccordion() {
  return (
    <div className="max-w-3xl mx-auto mb-20">
      <div className="text-center mb-10">
        <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-3">FAQ</p>
        <h2 className="text-2xl font-extrabold">Common Questions</h2>
      </div>
      <div className="space-y-4">
        {faqs.map(({ question, answer }, i) => (
          <motion.details
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group border border-white/8 bg-white/[0.02] rounded-none overflow-hidden angular-cut bg-noise glass-dark"
          >
            <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-sm text-neutral-200 hover:text-white transition-colors">
              {question}
              <svg className="w-4 h-4 text-teal-500 shrink-0 ml-4 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </summary>
            <div className="px-6 pb-5 text-sm text-neutral-500 leading-relaxed border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.details>
        ))}
      </div>
    </div>
  );
}

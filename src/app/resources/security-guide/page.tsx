"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import DynamicBackground from "@/components/DynamicBackground";

export default function SecurityGuidePage() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});

  const questions = [
    "Do you enforce Multi-Factor Authentication (MFA) on all company accounts?",
    "Do you conduct continuous vulnerability scanning across your external assets?",
    "Is sensitive company data encrypted both in transit and at rest?",
    "Do you have a centralized SIEM to aggregate security logs?",
    "Are employees required to take verified security awareness training?",
    "Do you maintain reliable, off-site, immutable backups of core databases?",
    "Has a specialist-reviewed penetration test been performed in the last 12 months?",
    "Do you run regular phishing simulation campaigns?",
    "Are former employee accounts immediately deactivated upon departure?",
    "Is there a formal Incident Response plan in place?"
  ];

  const handleAnswer = (index: number, answer: boolean) => {
    setAnswers(prev => ({ ...prev, [index]: answer }));
  };

  const calculateScore = () => {
    const answeredCount = Object.keys(answers).length;
    if (answeredCount < questions.length) return null;
    const yesCount = Object.values(answers).filter(a => a).length;
    return Math.round((yesCount / questions.length) * 100);
  };

  const score = calculateScore();

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f5f5f5] pt-32 pb-24 relative overflow-hidden">
      <DynamicBackground />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            RESOURCES
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            The Business Owner's Security Checklist
            <span className="block text-xl md:text-2xl font-normal text-neutral-400 mt-4">Questions to Ask Your IT Team</span>
          </h1>
        </motion.div>

        <div className="space-y-6">
          {questions.map((q, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <span className="text-base font-medium">{q}</span>
              <div className="flex gap-2 shrink-0">
                <button 
                  onClick={() => handleAnswer(i, true)}
                  className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${answers[i] === true ? 'bg-emerald-500 text-black' : 'bg-white/5 text-neutral-400 hover:bg-white/10'}`}
                >
                  Yes
                </button>
                <button 
                  onClick={() => handleAnswer(i, false)}
                  className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${answers[i] === false ? 'bg-red-500 text-white' : 'bg-white/5 text-neutral-400 hover:bg-white/10'}`}
                >
                  No
                </button>
              </div>
            </motion.div>
          ))}

          {score !== null && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-16 p-8 rounded-3xl bg-white/[0.02] border border-white/10 text-center">
              <h2 className="text-2xl font-bold mb-4">Your Posture Score: <span className={score > 75 ? 'text-emerald-400' : score > 50 ? 'text-yellow-400' : 'text-red-400'}>{score}%</span></h2>
              
              {score < 50 && <p className="text-neutral-400 mb-8">Your organization has critical gaps. The lack of standard defense layers exposes you directly to ransomware and data breaches. Priority action is required.</p>}
              {score >= 50 && score <= 75 && <p className="text-neutral-400 mb-8">You're on the right track, but significant vulnerabilities remain. Attackers commonly exploit the controls you are currently missing.</p>}
              {score > 75 && <p className="text-neutral-400 mb-8">Strong posture. Let's maintain it professionally with continuous deep-level penetration testing.</p>}
              
              <Link href="/scan" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                Book a Free Assessment
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </motion.div>
          )}

          {score === null && (
             <div className="text-center text-sm font-mono text-neutral-500 mt-8">
               Answer all {questions.length} questions to see your posture score.
             </div>
          )}
        </div>
      </div>
    </main>
  );
}

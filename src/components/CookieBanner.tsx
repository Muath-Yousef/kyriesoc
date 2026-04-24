"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already acknowledged
    const ack = localStorage.getItem("socroot_privacy_ack");
    if (!ack) {
      setIsVisible(true);
    }
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem("socroot_privacy_ack", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-[100] animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="bg-black/90 backdrop-blur-xl border border-teal-500/20 rounded-xl p-5 shadow-2xl shadow-teal-500/5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2 text-white font-bold">
            <ShieldCheck className="w-5 h-5 text-teal-500" />
            Zero Tracking Cookies
          </div>
          <button 
            onClick={handleAcknowledge}
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-neutral-400 leading-relaxed mb-4">
          SOC Root uses privacy-first, anonymized analytics (Plausible). We do not use third-party tracking cookies or sell personal data. 
          Read our <a href="/privacy" className="text-teal-400 hover:underline">Privacy Policy</a> to learn how we comply with UAE PDPL and Jordan legislation.
        </p>
        <button
          onClick={handleAcknowledge}
          className="w-full bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border border-teal-500/30 font-bold px-4 py-2 rounded-lg text-xs transition-colors"
        >
          Acknowledge & Continue
        </button>
      </div>
    </div>
  );
}

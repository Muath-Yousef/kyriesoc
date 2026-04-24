import { motion } from "framer-motion";
import { Landmark, Truck, Cloud, Shield, ShoppingCart, Activity } from "lucide-react";

const INDUSTRIES = [
  { name: "Banking & Finance", icon: Landmark },
  { name: "Healthcare", icon: Activity },
  { name: "Logistics", icon: Truck },
  { name: "Government", icon: Shield },
  { name: "SaaS Platforms", icon: Cloud },
  { name: "E-Commerce", icon: ShoppingCart },
];

export default function ClientLogos() {
  return (
    <div className="py-12 border-y border-white/5 bg-white/[0.01] angular-cut bg-noise glass-dark">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-8">
          Securing Critical Infrastructure Across Industries
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div 
                key={i} 
                className="flex items-center gap-3 text-neutral-400 hover:text-teal-400 transition-colors grayscale hover:grayscale-0"
              >
                <Icon className="w-6 h-6" />
                <span className="font-bold text-sm tracking-wide">{ind.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

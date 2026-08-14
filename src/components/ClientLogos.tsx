import { Activity, Cloud, Landmark, Shield, ShoppingCart, Truck } from "lucide-react";

const CONTEXTS = [
  { name: "Finance", icon: Landmark },
  { name: "Healthcare", icon: Activity },
  { name: "Logistics", icon: Truck },
  { name: "Public sector", icon: Shield },
  { name: "SaaS", icon: Cloud },
  { name: "E-commerce", icon: ShoppingCart },
];

export default function ClientLogos() {
  return (
    <div className="py-12 border-y border-white/5 bg-white/[0.01] angular-cut bg-noise glass-dark">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">
          Example operating contexts
        </p>
        <p className="text-xs text-neutral-600 mb-8">
          These labels describe architecture use cases, not customer or deployment claims.
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
          {CONTEXTS.map(({ name, icon: Icon }) => (
            <div key={name} className="flex items-center gap-3 text-neutral-400">
              <Icon className="w-6 h-6" />
              <span className="font-bold text-sm tracking-wide">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

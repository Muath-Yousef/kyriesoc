import { CheckCircle2 } from "lucide-react";
import { plans } from "@/data/pricing";

export function FeatureComparison() {
  const comparisonRows = [
    { feature: "Initial Vulnerability Scan", keys: ["starter", "guard", "governance", "premium"] },
    { feature: "Basic Architecture Review", keys: ["starter", "guard", "governance", "premium"] },
    { feature: "Security Recommendations", keys: ["starter", "guard", "governance", "premium"] },
    { feature: "Continuous Monitoring", keys: ["guard", "governance", "premium"] },
    { feature: "NCA ECC Compliance Mapping", keys: ["governance", "premium"] },
    { feature: "Dedicated Security Analyst", keys: ["governance", "premium"] },
    { feature: "Incident Response Support", keys: ["premium"] },
  ];

  return (
    <div className="max-w-5xl mx-auto mb-20 overflow-x-auto">
      <div className="text-center mb-10">
        <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-3">Compare</p>
        <h2 className="text-2xl font-extrabold">Feature Comparison</h2>
      </div>
      <table className="w-full text-sm border-separate border-spacing-0 min-w-[640px]">
        <thead>
          <tr>
            <th className="text-left text-neutral-500 font-mono text-xs uppercase tracking-widest pb-4 pr-4">Feature</th>
            {plans.map((p) => (
              <th key={p.id} className={`text-center pb-4 px-2 font-bold text-sm ${p.name === "Governance" ? "text-teal-400" : "text-neutral-300"}`}>
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map(({ feature, keys }) => (
            <tr key={feature} className="border-t border-white/5">
              <td className="py-3 pr-4 text-neutral-400">{feature}</td>
              {plans.map((p, i) => {
                const included = keys.includes(p.id);
                return (
                  <td key={p.id} className={`text-center py-3 px-2 ${i === 2 ? "bg-teal-500/5" : ""}`}>
                    {included ? (
                      <span className="text-teal-400">
                        <svg className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : (
                      <span className="text-neutral-700">—</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

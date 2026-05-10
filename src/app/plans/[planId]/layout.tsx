import { Metadata } from 'next';

export async function generateStaticParams() {
  return [
    { planId: 'starter' },
    { planId: 'guard' },
    { planId: 'governance' },
    { planId: 'premium' },
  ]
}

const PLAN_META: Record<string, { title: string, desc: string }> = {
  starter: { title: "Starter Plan", desc: "Deploy continuous vulnerability scanning in 24 hours. One-time engagement with specialist-reviewed reports and security recommendations." },
  guard: { title: "Guard Plan", desc: "Active defense with 24/7 SIEM log correlation, analyst-backed incident response, and email threat intelligence starting at $160/month." },
  governance: { title: "Governance Plan", desc: "Full NCA ECC 2.0 compliance mapping, quarterly executive risk briefings, and certified security awareness training." },
  premium: { title: "Premium Plan", desc: "Enterprise SOC operations with quarterly penetration testing, dedicated senior analyst, and dual-track ISO 27001 + NCA ECC compliance." }
};

export async function generateMetadata({ params }: { params: Promise<{ planId: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const plan = PLAN_META[resolvedParams.planId];
  
  if (!plan) return { title: "Plan Not Found | SOC Root" };
  
  return {
    title: `${plan.title} | SOC Root Security Plans`,
    description: plan.desc,
    openGraph: {
      title: `${plan.title} | SOC Root`,
      description: plan.desc,
      url: `https://socroot.com/plans/${resolvedParams.planId}`,
      siteName: "SOC Root",
      type: "website",
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

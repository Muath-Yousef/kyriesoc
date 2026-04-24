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
  starter: { title: "Starter Plan", desc: "Your first line of external defense — deployed in 24 hours." },
  guard: { title: "Guard Plan", desc: "Active defense inside and outside your perimeter." },
  governance: { title: "Governance Plan", desc: "Full risk, compliance, and regulatory readiness for NCA ECC." },
  premium: { title: "Premium Plan", desc: "Uncompromising protection for high-value, high-risk environments." }
};

export async function generateMetadata({ params }: { params: Promise<{ planId: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const plan = PLAN_META[resolvedParams.planId];
  
  if (!plan) return { title: "Plan Not Found" };
  
  return {
    title: `${plan.title} | SOC Root Security Plans`,
    description: plan.desc,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

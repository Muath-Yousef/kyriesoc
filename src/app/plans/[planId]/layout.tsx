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
  starter: { title: "Starter Scope", desc: "A reference design for a small, authorized exposure assessment with defined evidence and exclusions." },
  guard: { title: "Guard Pilot", desc: "A pre-production SOC workflow pilot focused on approved telemetry, triage, HITL, and dry-run evidence." },
  governance: { title: "Governance Readiness", desc: "Advisory evidence-to-control mapping that does not claim certification, attestation, or legal assurance." },
  premium: { title: "Integrated Validation Track", desc: "A future scoped design gated by integration tests, monitoring, safety controls, and operational evidence." }
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

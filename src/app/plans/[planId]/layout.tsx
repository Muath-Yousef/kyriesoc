export async function generateStaticParams() {
  return [
    { planId: 'starter' },
    { planId: 'guard' },
    { planId: 'governance' },
    { planId: 'premium' },
  ]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

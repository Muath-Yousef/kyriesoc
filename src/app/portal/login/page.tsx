import Link from "next/link";

export const metadata = {
  title: "Portal Status | SOCRoot",
  description: "Current availability of the SOCRoot identity portal prototype.",
};

export default function PortalLoginPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto max-w-2xl px-6 text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-teal-400">Pre-production</p>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight">Client authentication is not deployed</h1>
        <p className="mb-8 leading-relaxed text-neutral-400">
          Account registration and sign-in are intentionally disabled on the public portfolio. This prevents a prototype interface from being mistaken for a production identity system.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/about" className="bg-teal-500 px-5 py-3 text-sm font-bold text-black hover:bg-teal-400">View maturity statement</Link>
          <Link href="/security" className="border border-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/5">Security policy</Link>
        </div>
      </div>
    </div>
  );
}

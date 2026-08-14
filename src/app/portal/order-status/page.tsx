import Link from "next/link";

export const metadata = {
  title: "Order Portal Status | SOCRoot",
  description: "Current availability of the SOCRoot order-tracking prototype.",
};

export default function OrderStatusPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto max-w-2xl px-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-teal-400">Prototype status</p>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight">Order tracking is not active</h1>
        <div className="angular-cut space-y-4 border border-white/10 bg-white/[0.02] p-8 text-neutral-400">
          <p>SOCRoot is currently a pre-production engineering initiative. This public site does not accept orders, payments, or service subscriptions.</p>
          <p>No order identifier entered here is processed or stored. A production portal would require tested authentication, documented retention controls, and a published support process before launch.</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/resources" className="bg-teal-500 px-5 py-3 text-sm font-bold text-black hover:bg-teal-400">Review public evidence</Link>
            <Link href="/contact" className="border border-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/5">Discuss a bounded review</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

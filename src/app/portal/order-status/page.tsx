"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DynamicBackground from "@/components/DynamicBackground";

type OrderStatus = "pending_payment" | "paid" | "active" | "cancelled" | "refunded";

interface OrderData {
  order_id: string;
  plan: string;
  amount: number;
  currency: string;
  status: OrderStatus;
  created_at: number;
}

const STATUS_CONFIG: Record<OrderStatus, { label: string; color: string; bg: string; border: string; icon: string; desc: string }> = {
  pending_payment: {
    label: "Awaiting Payment",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    icon: "⏳",
    desc: "We're waiting to receive your payment. Once confirmed, your service will be activated within 1 hour.",
  },
  paid: {
    label: "Payment Confirmed",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    icon: "✓",
    desc: "Your payment has been received and verified. Our team is currently setting up your security monitoring environment.",
  },
  active: {
    label: "Service Active",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    icon: "🛡️",
    desc: "Your SOC Root protection is live and monitoring your assets. Check your email for onboarding details.",
  },
  cancelled: {
    label: "Cancelled",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    icon: "✕",
    desc: "This order has been cancelled. Contact us on WhatsApp if this is unexpected.",
  },
  refunded: {
    label: "Refunded",
    color: "text-neutral-400",
    bg: "bg-neutral-500/10",
    border: "border-neutral-500/20",
    icon: "↩",
    desc: "A refund has been issued for this order. Allow 3–5 business days for processing.",
  },
};

const PLAN_NAMES: Record<string, string> = {
  starter: "Starter",
  guard: "Guard",
  governance: "Governance",
  premium: "Premium",
};

const STEPS: { key: OrderStatus; label: string }[] = [
  { key: "pending_payment", label: "Order Placed" },
  { key: "paid", label: "Payment Verified" },
  { key: "active", label: "Service Active" },
];

function getStepIndex(status: OrderStatus): number {
  const idx = STEPS.findIndex((s) => s.key === status);
  return idx === -1 ? 0 : idx;
}

function OrderStatusContent() {
  const searchParams = useSearchParams();
  const [orderId, setOrderId] = useState(searchParams.get("id") ?? "");
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<OrderData | null>(null);
  const [error, setError] = useState("");

  // Auto-lookup if id is in URL
  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      setOrderId(id);
      fetchOrder(id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchOrder(id: string) {
    const normalized = id.trim().toUpperCase();
    if (!normalized.startsWith("SR-")) return;
    setLoading(true);
    setError("");
    try {
      const resp = await fetch(`https://api.socroot.com/api/order-status/${normalized}`);
      const data = await resp.json();
      if (!data.success) {
        setError(data.error || "Order not found. Please check your Order ID.");
        return;
      }
      setOrder(data as OrderData);
    } catch {
      setError("Network error. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    setOrder(null);
    await fetchOrder(orderId);
  }

  const statusCfg = order ? STATUS_CONFIG[order.status] ?? STATUS_CONFIG.pending_payment : null;
  const stepIdx = order ? getStepIndex(order.status) : -1;
  const dateStr = order ? new Date(order.created_at * 1000).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric"
  }) : "";

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f5f5f5] pt-32 pb-24 relative overflow-hidden">
      <DynamicBackground />

      <div className="container mx-auto px-6 relative z-10 max-w-xl">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            ORDER TRACKING
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">Track Your Order</h1>
          <p className="text-neutral-400 text-sm">Enter your Order ID to check the status of your SOC Root subscription.</p>
        </motion.div>

        {/* Search Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <form onSubmit={handleCheck} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 mb-6">
            <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
              Order ID
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={orderId}
                onChange={(e) => { setOrderId(e.target.value); setError(""); }}
                placeholder="SR-202604-XXXXXXXX"
                className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white font-mono placeholder-neutral-700 outline-none focus:border-emerald-500/60 transition-colors"
                spellCheck={false}
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={loading || !orderId.trim()}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed text-black font-bold rounded-xl transition-all text-sm"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                    </svg>
                    Checking
                  </span>
                ) : "Check"}
              </button>
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="mt-3 text-sm text-red-400 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /></svg>
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <p className="text-xs text-neutral-600 mt-3">
              Your Order ID was sent in your confirmation message. Format: <span className="font-mono text-neutral-500">SR-YYYYMM-XXXXXXXX</span>
            </p>
          </form>
        </motion.div>

        {/* Result Card */}
        <AnimatePresence>
          {order && statusCfg && (
            <motion.div
              key={order.order_id}
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {/* Status Banner */}
              <div className={`p-6 rounded-2xl border ${statusCfg.bg} ${statusCfg.border}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${statusCfg.bg} border ${statusCfg.border}`}>
                    {statusCfg.icon}
                  </div>
                  <div>
                    <p className={`text-lg font-bold ${statusCfg.color}`}>{statusCfg.label}</p>
                    <p className="text-xs font-mono text-neutral-500">{order.order_id}</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">{statusCfg.desc}</p>
              </div>

              {/* Progress Steps — only for non-cancelled */}
              {order.status !== "cancelled" && order.status !== "refunded" && (
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                  <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-5">Progress</p>
                  <div className="flex items-center">
                    {STEPS.map((step, i) => {
                      const done = i <= stepIdx;
                      const active = i === stepIdx;
                      return (
                        <div key={step.key} className="flex items-center flex-1 last:flex-none">
                          <div className="flex flex-col items-center gap-1.5">
                            <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${
                              done
                                ? "border-emerald-500 bg-emerald-500 text-black"
                                : "border-white/15 text-neutral-600"
                            } ${active ? "ring-2 ring-emerald-500/30 ring-offset-2 ring-offset-[#0c0c0c]" : ""}`}>
                              {done ? (
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              ) : i + 1}
                            </div>
                            <span className={`text-[10px] font-mono whitespace-nowrap ${done ? "text-neutral-300" : "text-neutral-600"}`}>
                              {step.label}
                            </span>
                          </div>
                          {i < STEPS.length - 1 && (
                            <div className={`flex-1 h-0.5 mx-2 mb-4 rounded ${i < stepIdx ? "bg-emerald-500" : "bg-white/5"}`} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Order Details */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-3">
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4">Order Details</p>
                {[
                  { label: "Plan", value: PLAN_NAMES[order.plan] ?? order.plan },
                  { label: "Amount", value: `$${order.amount.toLocaleString()} ${order.currency}` },
                  { label: "Placed On", value: dateStr },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                    <span className="text-neutral-500">{label}</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>

              {/* Support CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/962777545115?text=Hello%2C%20I%20need%20help%20with%20my%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-white/10 hover:border-emerald-500/30 text-neutral-300 hover:text-white px-4 py-3 rounded-xl transition-all text-sm font-medium"
                >
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.527 5.845L.057 23.943l6.256-1.44A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-5.002-1.374l-.36-.213-3.713.855.869-3.62-.235-.373A9.8 9.8 0 012.182 12C2.182 6.56 6.56 2.182 12 2.182S21.818 6.56 21.818 12 17.44 21.818 12 21.818z"/>
                  </svg>
                  WhatsApp Support
                </a>
                <button
                  onClick={() => { setOrder(null); setOrderId(""); }}
                  className="flex-1 text-neutral-500 hover:text-white border border-white/5 hover:border-white/15 px-4 py-3 rounded-xl transition-all text-sm"
                >
                  Check Another Order
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Help */}
        {!order && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-center mt-8">
            <p className="text-xs text-neutral-600">
              {"Can't find your order? "}
              <a
                href="https://wa.me/962777545115?text=I%20can%27t%20find%20my%20order%20ID"
                target="_blank"
                className="text-emerald-500 hover:text-emerald-400 transition-colors"
              >
                Contact us on WhatsApp
              </a>
            </p>
            <div className="mt-6">
              <Link href="/plans/guard" className="text-xs text-neutral-700 hover:text-neutral-500 transition-colors">
                Don't have an order yet? View our plans →
              </Link>
            </div>
          </motion.div>
        )}

      </div>
    </main>
  );
}

export default function OrderStatusPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#0c0c0c] flex items-center justify-center">
        <div className="text-neutral-500 text-sm font-mono animate-pulse">Loading...</div>
      </main>
    }>
      <OrderStatusContent />
    </Suspense>
  );
}

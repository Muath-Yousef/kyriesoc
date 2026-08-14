import Link from "next/link";

export const metadata = {
  title: "Training Prototype | SOCRoot",
  description: "Status of the SOCRoot awareness-training prototype.",
};

export default function TrainingPortalPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto max-w-3xl px-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-teal-400">Learning prototype</p>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight">Awareness content, not certification</h1>
        <div className="angular-cut space-y-5 border border-white/10 bg-white/[0.02] p-8 text-neutral-400">
          <p>The planned modules cover foundational security hygiene, threat recognition, incident reporting, and governance awareness.</p>
          <p>The public prototype does not issue an accredited certificate, verify identity, track organizational completion, or prove compliance with NCA ECC, ISO 27001, or any other framework.</p>
          <p>Any future learning record would need documented assessment criteria, identity controls, retention rules, and an explicit statement of what the record does and does not demonstrate.</p>
          <div className="flex flex-wrap gap-4 pt-3">
            <Link href="/training" className="bg-teal-500 px-5 py-3 text-sm font-bold text-black hover:bg-teal-400">Review the curriculum outline</Link>
            <Link href="/resources" className="border border-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/5">Browse evidence</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

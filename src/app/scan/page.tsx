import Link from "next/link";

export const metadata = {
  title: "Authorized Review Intake | SOCRoot",
  description: "Scope a bounded, authorized security review with explicit safety controls.",
};

const REQUIRED_SCOPE = [
  "Written confirmation that the requester owns or is authorized to test each target",
  "Exact domains, IP ranges, exclusions, maintenance windows, and points of contact",
  "Approved techniques, rate limits, data-handling rules, and stop conditions",
  "A reporting path that separates observations, evidence, risk, and remediation",
];

export default function ReviewIntakePage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto max-w-3xl px-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-teal-400">Authorized scope only</p>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight">Prepare a bounded security review</h1>
        <p className="mb-10 text-lg leading-relaxed text-neutral-400">
          The public site does not launch scans or promise automated reports. Use this checklist to prepare an authorized review before any technical activity begins.
        </p>
        <ol className="mb-10 space-y-4">
          {REQUIRED_SCOPE.map((item, index) => (
            <li key={item} className="angular-cut flex gap-4 border border-white/10 bg-white/[0.02] p-5 text-neutral-300">
              <span className="font-mono text-teal-400">0{index + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="bg-teal-500 px-5 py-3 text-sm font-bold text-black hover:bg-teal-400">Discuss scope</Link>
          <a href="/sample-report.pdf" className="border border-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/5">Open synthetic report sample</a>
        </div>
      </div>
    </div>
  );
}

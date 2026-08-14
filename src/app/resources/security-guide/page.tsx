import Link from "next/link";

export const metadata = {
  title: "Security Review Questions | SOCRoot",
  description: "Evidence-oriented questions for a small organization reviewing its security posture.",
};

const QUESTIONS = [
  ["Ownership", "Who owns each critical system, dataset, security control, and escalation decision?"],
  ["Identity", "Can we show that privileged access is limited, reviewed, and protected with strong authentication?"],
  ["Assets", "Do we maintain a current inventory with business criticality, owner, exposure, and lifecycle state?"],
  ["Detection", "Which events are logged, who reviews them, and what evidence proves that the review occurs?"],
  ["Response", "Are containment actions rehearsed, human-approved, reversible, and protected by explicit stop conditions?"],
  ["Recovery", "When were backups last restored in a test, and what did that test actually demonstrate?"],
  ["Suppliers", "Which third parties receive data or access, and how are those dependencies reviewed?"],
  ["Learning", "Which incidents, exercises, and control failures have produced a documented change?"],
];

export default function SecurityGuidePage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto max-w-4xl px-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-teal-400">Evidence guide</p>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">Questions that reveal more than a posture score</h1>
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-neutral-400">
          This checklist is a conversation aid, not an assessment, penetration test, risk rating, or compliance determination. Good answers point to current evidence, named owners, and tested procedures.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {QUESTIONS.map(([label, question], index) => (
            <article key={label} className="angular-cut border border-white/10 bg-white/[0.02] p-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-teal-400">{label}</span>
                <span className="font-mono text-xs text-neutral-700">0{index + 1}</span>
              </div>
              <p className="leading-relaxed text-neutral-300">{question}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/sample-report.pdf" className="bg-teal-500 px-5 py-3 text-sm font-bold text-black hover:bg-teal-400">Open synthetic report sample</a>
          <Link href="/scan" className="border border-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/5">Prepare an authorized scope</Link>
        </div>
      </div>
    </div>
  );
}

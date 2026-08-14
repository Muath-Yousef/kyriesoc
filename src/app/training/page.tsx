import Link from "next/link";
import { BookOpen, ChevronRight, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Security Awareness Curriculum | SOCRoot",
  description: "A pre-production outline for practical security-awareness content; not an accredited certification or compliance claim.",
};

const MODULES = [
  {
    number: "01",
    title: "Security hygiene",
    topics: ["Password managers and MFA", "Device and remote-work safety", "Data classification basics"],
  },
  {
    number: "02",
    title: "Threat recognition",
    topics: ["Phishing and social engineering", "Business email compromise", "Incident reporting"],
  },
  {
    number: "03",
    title: "Governance awareness",
    topics: ["Policy responsibilities", "Evidence and escalation", "Framework concepts without certification claims"],
  },
];

export default function TrainingLanding() {
  return (
    <div className="min-h-screen pb-20 pt-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-teal-400">
            <ShieldAlert className="h-4 w-4" /> Pre-production curriculum
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">Security awareness with honest boundaries</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
            A practical content outline for security hygiene, threat recognition, and reporting. It is not an accredited certificate, a deployed learning platform, or evidence of regulatory compliance.
          </p>
          <Link href="/portal/training" className="angular-cut inline-flex items-center bg-teal-500 px-7 py-4 text-sm font-bold text-black hover:bg-teal-400">
            Read the prototype status <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="mx-auto mb-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {MODULES.map((module) => (
            <article key={module.number} className="angular-cut flex h-full flex-col border border-white/10 bg-white/[0.02] p-8">
              <div className="mb-6 flex items-center justify-between">
                <BookOpen className="h-6 w-6 text-teal-400" />
                <span className="font-mono text-xs text-neutral-600">MODULE {module.number}</span>
              </div>
              <h2 className="mb-5 text-xl font-bold">{module.title}</h2>
              <ul className="space-y-3 text-sm text-neutral-400">
                {module.topics.map((topic) => <li key={topic} className="flex gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />{topic}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-4xl border border-teal-500/20 bg-teal-500/5 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold">What would make it production-ready?</h2>
          <p className="mb-6 text-neutral-400">Reviewed learning objectives, verified assessments, accessible delivery, identity controls, retention rules, and an evidence-backed statement of outcomes.</p>
          <Link href="/contact" className="text-sm font-bold text-teal-400 hover:text-teal-300">Discuss a bounded pilot →</Link>
        </div>
      </div>
    </div>
  );
}

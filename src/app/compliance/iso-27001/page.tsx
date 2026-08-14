import Link from "next/link";

export default function Iso27001Page() {
  const evidenceAreas = [
    ["Context and scope", "Define the organization, interested parties, ISMS boundaries, dependencies, and exclusions."],
    ["Risk method", "Document how information-security risks are identified, evaluated, treated, accepted, and reviewed."],
    ["Control rationale", "Maintain an evidence-backed Statement of Applicability rather than treating every control as automatically applicable."],
    ["Operational evidence", "Retain reviewable records for access, incidents, suppliers, changes, continuity, learning, and corrective action."],
    ["Independent assurance", "Use qualified legal, certification, and audit professionals where formal interpretation or attestation is required."],
  ];

  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto max-w-4xl px-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-teal-400">Framework reference</p>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">ISO/IEC 27001 readiness starts with evidence</h1>
        <p className="mb-4 max-w-3xl text-lg leading-relaxed text-neutral-400">
          ISO/IEC 27001 specifies requirements for an information security management system. Certification is performed by an accredited certification body, not by this website or its readiness materials.
        </p>
        <p className="mb-12 max-w-3xl leading-relaxed text-neutral-500">
          The notes below are an educational structure for discussing readiness. Applicability, legal obligations, audit scope, duration, and certification outcomes depend on the organization and qualified independent review.
        </p>

        <div className="space-y-4">
          {evidenceAreas.map(([title, description], index) => (
            <section key={title} className="angular-cut flex gap-5 border border-white/10 bg-white/[0.02] p-6">
              <span className="font-mono text-sm text-teal-400">0{index + 1}</span>
              <div>
                <h2 className="mb-2 text-lg font-bold text-white">{title}</h2>
                <p className="leading-relaxed text-neutral-400">{description}</p>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 border border-amber-500/20 bg-amber-500/[0.04] p-7">
          <h2 className="mb-3 text-xl font-bold text-white">No fixed certification timeline is claimed</h2>
          <p className="mb-6 text-neutral-400">A credible plan follows a scoped gap review and depends on management commitment, system complexity, current evidence, remediation work, internal audit, management review, and the certification body’s process.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/scan" className="bg-teal-500 px-5 py-3 text-sm font-bold text-black hover:bg-teal-400">Prepare a review scope</Link>
            <Link href="/resources" className="border border-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/5">Review public evidence</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

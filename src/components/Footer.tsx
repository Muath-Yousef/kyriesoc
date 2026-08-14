import Link from "next/link";
import { Ban, CheckSquare, Search, Shield } from "lucide-react";

const CAPABILITY_LINKS = [
  { label: "Assessment workflow", href: "/services" },
  { label: "SOC architecture", href: "/services" },
  { label: "Readiness mapping", href: "/services" },
  { label: "Awareness content", href: "/training" },
];

const PROJECT_LINKS = [
  { label: "About", href: "/about" },
  { label: "Evidence library", href: "/resources" },
  { label: "NCA ECC reference", href: "/compliance/nca-ecc" },
  { label: "ISO 27001 reference", href: "/compliance/iso-27001" },
  { label: "Validation targets", href: "/sla" },
  { label: "Privacy notice", href: "/privacy" },
  { label: "Use terms", href: "/terms" },
  { label: "Security policy", href: "/security" },
];

const PRINCIPLES = [
  { icon: CheckSquare, label: "Dry run", detail: "Default mode" },
  { icon: Search, label: "Human review", detail: "Before action" },
  { icon: Ban, label: "Safety rules", detail: "Explicit scope" },
  { icon: Shield, label: "Evidence", detail: "Before claims" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-teal-500/10 py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="mb-14 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0c0c0c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              <span className="text-lg font-bold"><span className="text-teal-400">SOC</span><span className="text-white">Root</span></span>
            </div>
            <p className="mb-5 max-w-md text-sm leading-relaxed text-neutral-500">
              A pre-production cybersecurity engineering initiative by Muath Yousef, focused on evidence-driven SOC workflows and human-controlled automation.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a href="https://github.com/Muath-Yousef" target="_blank" rel="noreferrer" className="text-teal-400 hover:text-teal-300">GitHub</a>
              <a href="https://www.linkedin.com/in/muath-ysf" target="_blank" rel="noreferrer" className="text-teal-400 hover:text-teal-300">LinkedIn</a>
              <Link href="/contact" className="text-teal-400 hover:text-teal-300">Contact</Link>
            </div>
          </div>

          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-neutral-500">Capabilities</p>
            <ul className="space-y-3">
              {CAPABILITY_LINKS.map((item) => <li key={item.label}><Link href={item.href} className="text-sm text-neutral-400 transition-colors hover:text-teal-400">{item.label}</Link></li>)}
            </ul>
          </div>

          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-neutral-500">Project</p>
            <ul className="space-y-3">
              {PROJECT_LINKS.map((item) => <li key={item.label}><Link href={item.href} className="text-sm text-neutral-400 transition-colors hover:text-teal-400">{item.label}</Link></li>)}
            </ul>
          </div>
        </div>

        <div className="mb-8 border-t border-white/5 pt-10">
          <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-neutral-600">Published operating principles</p>
          <div className="flex flex-wrap justify-center gap-4">
            {PRINCIPLES.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="angular-cut flex min-w-[120px] flex-col items-center gap-1 border border-white/5 bg-white/[0.03] px-4 py-3">
                <Icon className="mb-1 h-5 w-5 text-teal-500" />
                <span className="text-xs font-bold text-neutral-300">{label}</span>
                <span className="text-[10px] text-neutral-600">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-neutral-600 md:flex-row">
          <div className="text-center md:text-left">
            <p>© 2026 SOCRoot.</p>
            <p>Capabilities and service commitments require written scope, evidence, and validation.</p>
          </div>
          <span>Engineered by <span className="text-teal-500">Muath Yousef</span></span>
        </div>
      </div>
    </footer>
  );
}

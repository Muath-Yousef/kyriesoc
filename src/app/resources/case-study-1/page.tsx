import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demonstration Assessment: 17 M365 Security Gaps — SOCRoot",
  description: "A demonstration baseline audit walkthrough based on a representative M365 tenant environment, illustrating 17 common identity, OAuth, and access configuration gaps.",
};

const FINDINGS_BREAKDOWN = [
  {
    category: "Identity & Privileged Admin Hygiene",
    count: "5 Gaps Identified",
    badge: "CRITICAL",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/30",
    items: [
      {
        title: "Global Administrator Sprawl (7 Active GAs)",
        desc: "Best practices require 2 to 4 emergency break-glass admins. In this representative environment, 7 users held permanent Global Admin rights on daily productivity mailboxes without Privileged Identity Management (PIM).",
        impact: "A single compromised mailbox or phishing click grants tenant-wide control.",
      },
      {
        title: "Privileged Accounts Without Phishing-Resistant MFA",
        desc: "2 Global Admin accounts relied solely on SMS/push notifications with no Conditional Access enforcement or FIDO2 hardware tokens.",
        impact: "Vulnerable to MFA fatigue (push bombing) and session hijack.",
      },
      {
        title: "Missing Emergency Break-Glass Account Architecture",
        desc: "No dedicated, excluded, cloud-only break-glass account pair configured with monitoring alerts.",
        impact: "Risk of complete administrative lockout during Conditional Access misconfiguration.",
      },
      {
        title: "Stale Disabled Accounts Retaining Active Licenses",
        desc: "Multiple offboarded employee accounts remained licensed and unrevoked in Entra ID.",
        impact: "Active attack surface and ongoing SaaS licensing waste.",
      },
      {
        title: "Unmonitored External Guest User Directory Permissions",
        desc: "External guest accounts possessed default directory read permissions without access review policies.",
        impact: "Information leakage regarding internal tenant structure, users, and groups.",
      },
    ],
  },
  {
    category: "Authentication & Access Boundaries",
    count: "4 Gaps Identified",
    badge: "HIGH",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    items: [
      {
        title: "Legacy Authentication Protocols Active (POP3 / IMAP / SMTP)",
        desc: "Basic authentication remained enabled on Exchange Online mailboxes, completely bypassing multi-factor authentication policies.",
        impact: "Subject to credential stuffing and automated brute-force attacks.",
      },
      {
        title: "Conditional Access Running in 'Report-Only' Mode",
        desc: "Key CA policies (MFA for all cloud apps, blocking risky sign-ins) had been configured months earlier but left in Report-Only mode without active enforcement.",
        impact: "False sense of security; zero runtime blocking of unauthorized or anomalous sign-ins.",
      },
      {
        title: "No Device Health / Intune Compliance Enforced",
        desc: "Employees accessed corporate SharePoint and mail from unmanaged personal devices without Intune enrollment or minimum OS patch verification.",
        impact: "Data exfiltration onto unencrypted, compromised home devices.",
      },
      {
        title: "Inconsistent Passwordless & SSPR Posture",
        desc: "Self-Service Password Reset (SSPR) was unconfigured, forcing manual helpdesk password resets without strong identity re-verification.",
        impact: "Helpdesk social engineering vulnerability.",
      },
    ],
  },
  {
    category: "OAuth Apps & Data Exfiltration",
    count: "5 Gaps Identified",
    badge: "CRITICAL",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/30",
    items: [
      {
        title: "Unrestricted Tenant-Wide User Consent to Third-Party Apps",
        desc: "Any user in the organization was permitted to grant third-party OAuth applications access to read their profile and mail data.",
        impact: "Prime vector for illicit OAuth consent phishing (Consent Grant attacks).",
      },
      {
        title: "High-Risk Multi-Tenant OAuth Grants Active",
        desc: "Two marketing integrations held permanent tenant-wide `Mail.ReadWrite` and `Files.ReadWrite.All` application permissions without justification.",
        impact: "Third-party vendor breach would yield full access to all company emails and files.",
      },
      {
        title: "SharePoint & OneDrive Anonymous 'Anyone' Links Permitted",
        desc: "External sharing settings allowed creation of unauthenticated, anonymous links without password protection.",
        impact: "Confidential spreadsheets shared externally were indexable and forwardable without restriction.",
      },
      {
        title: "External Sharing Links Configured Without Expiration Dates",
        desc: "Shared links remained valid indefinitely across historical repositories.",
        impact: "Perpetual unauthorized access by former contractors and third parties.",
      },
      {
        title: "External Mailbox Forwarding Rules Permitted",
        desc: "Remote domain settings permitted users to configure automatic forwarding rules to personal addresses.",
        impact: "Hidden data exfiltration vector frequently exploited in Business Email Compromise (BEC).",
      },
    ],
  },
  {
    category: "Audit Logging & Threat Telemetry",
    count: "3 Gaps Identified",
    badge: "MEDIUM",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    items: [
      {
        title: "Unified Audit Log (UAL) Disabled on Legacy Mailboxes",
        desc: "Audit recording was not comprehensively enabled across all Exchange Online mailboxes.",
        impact: "Zero forensic capability to determine accessed files or stolen emails in an incident.",
      },
      {
        title: "Admin & Mailbox Auditing Actions Omitted",
        desc: "Key mailbox actions (`SendAs`, `SendOnBehalf`, `HardDelete`) were omitted from standard telemetry ingestion.",
        impact: "Inability to prove message tampering or unauthorized delegate sending.",
      },
      {
        title: "Microsoft Secure Score Unmonitored (Simulated Score: 38%)",
        desc: "No periodic review or SLA tied to tenant posture score; posture had degraded over time.",
        impact: "Cumulative drift away from CIS Microsoft 365 Foundations Benchmark and NCA ECC.",
      },
    ],
  },
];

export default function DemonstrationScenarioM365() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/resources" className="text-sm text-neutral-500 hover:text-teal-400 transition-colors">
          ← Back to resources
        </Link>

        {/* Case Study Header */}
        <header className="mt-10 mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[10px] font-mono text-amber-300 border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 uppercase tracking-widest font-bold">
              Demonstration Assessment
            </span>
            <span className="text-[10px] font-mono text-teal-400 border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 uppercase tracking-widest font-semibold">
              Representative M365 Tenant
            </span>
            <span className="text-[10px] font-mono text-neutral-400 border border-white/10 px-2.5 py-1 uppercase tracking-widest">
              Zero Customer Data
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white leading-tight">
            Demonstration Assessment: <span className="text-teal-400">17 Common M365 Security Gaps</span> in a Representative Environment
          </h1>

          <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl">
            A technical demonstration illustrating how SOCRoot&apos;s read-only audit engine evaluates tenant posture across 
            identity hygiene, admin plane controls, OAuth application consent, and audit telemetry against CIS Microsoft 365 v3.0 and NCA ECC benchmarks.
          </p>
        </header>

        {/* Mandatory Transparency Disclaimer */}
        <div className="border border-amber-500/30 bg-amber-500/[0.06] p-6 mb-12 angular-cut">
          <div className="flex items-start gap-3">
            <span className="text-amber-400 text-lg font-bold">⚠️</span>
            <div className="space-y-1">
              <h2 className="text-sm font-bold text-amber-300 uppercase tracking-wider">Demonstration Notice</h2>
              <p className="text-xs text-neutral-300 leading-relaxed">
                This demonstration uses a <b>representative test environment</b> and <b>does not describe a paying customer engagement or real client data</b>. 
                All scenarios, metrics, and findings are designed solely to demonstrate the deterministic detection capability of SOCRoot&apos;s 22 CIS &amp; NCA ECC baseline checks.
              </p>
            </div>
          </div>
        </div>

        {/* Executive Scorecard */}
        <div className="grid sm:grid-cols-4 gap-4 p-6 border border-white/10 bg-white/[0.02] mb-14 angular-cut glass-dark">
          <div className="border-r border-white/10 pr-4 last:border-none">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Baseline Posture</p>
            <p className="text-3xl font-extrabold text-red-400 mt-1">38%</p>
            <p className="text-[11px] text-neutral-500 mt-0.5">High Exposure / Grade F</p>
          </div>
          <div className="border-r border-white/10 pr-4 last:border-none">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Telemetry Collection</p>
            <p className="text-3xl font-extrabold text-teal-400 mt-1">&lt; 30 Min</p>
            <p className="text-[11px] text-neutral-500 mt-0.5">Read-Only Graph API</p>
          </div>
          <div className="border-r border-white/10 pr-4 last:border-none">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Evaluated Controls</p>
            <p className="text-3xl font-extrabold text-amber-400 mt-1">22</p>
            <p className="text-[11px] text-neutral-500 mt-0.5">CIS &amp; NCA ECC Controls</p>
          </div>
          <div>
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Target Posture</p>
            <p className="text-3xl font-extrabold text-emerald-400 mt-1">81%+</p>
            <p className="text-[11px] text-neutral-500 mt-0.5">Post-Remediation Target</p>
          </div>
        </div>

        {/* Background & Context */}
        <section className="mb-14 space-y-4">
          <h2 className="text-2xl font-extrabold text-white">Scenario Context: Common Configuration Drift in Scaling Cloud Tenants</h2>
          <p className="text-neutral-400 leading-relaxed text-sm">
            As organizations scale their cloud footprint from initial setup into dozens or hundreds of employees, configuration drift occurs silently:
            temporary admin roles become permanent, users connect third-party productivity apps with expansive permissions, and legacy protocols
            remain active in the background.
          </p>
          <p className="text-neutral-400 leading-relaxed text-sm">
            SOCRoot&apos;s productized baseline audit is engineered to evaluate these exact exposures without installing agents, 
            modifying tenant configuration, or interrupting business operations.
          </p>
        </section>

        {/* The 17 Gaps Detailed */}
        <section className="mb-14">
          <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-3">Representative Audit Findings</p>
          <h2 className="text-3xl font-extrabold text-white mb-8">The 17 Misconfigurations Examined</h2>

          <div className="space-y-8">
            {FINDINGS_BREAKDOWN.map((group) => (
              <div key={group.category} className="border border-white/10 bg-white/[0.02] p-6 rounded-none angular-cut">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{group.category}</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">{group.count}</p>
                  </div>
                  <span className={`text-[10px] font-mono px-2.5 py-1 border font-bold uppercase tracking-widest ${group.badgeColor}`}>
                    {group.badge}
                  </span>
                </div>

                <div className="space-y-5">
                  {group.items.map((item, idx) => (
                    <div key={item.title} className="p-4 border border-white/5 bg-black/40">
                      <div className="flex items-start gap-2.5">
                        <span className="font-mono text-xs text-teal-400 font-bold mt-0.5">#{idx + 1}</span>
                        <div className="space-y-1.5 flex-1">
                          <h4 className="text-sm font-bold text-neutral-200">{item.title}</h4>
                          <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                          <div className="text-[11px] text-amber-300/90 font-mono bg-amber-500/10 border-l-2 border-amber-400 px-2.5 py-1 mt-2">
                            <b>Security Impact:</b> {item.impact}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Remediation & Impact */}
        <section className="mb-14 border border-teal-500/20 bg-teal-500/[0.03] p-8 angular-cut">
          <h2 className="text-2xl font-extrabold text-white mb-4">The Standard Technical Remediation Blueprint</h2>
          <p className="text-neutral-300 text-sm leading-relaxed mb-6">
            Every audit delivers a prioritized, human-actionable technical punch-list designed for internal IT teams to execute 
            without breaking daily business communication:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 bg-black/60 border border-white/10">
              <span className="text-teal-400 font-bold text-lg block mb-1">1. Admin Lockdown</span>
              <p className="text-xs text-neutral-400">
                Limit Global Admins to 2–4 dedicated cloud-only accounts, configure break-glass monitoring, and mandate phishing-resistant MFA.
              </p>
            </div>
            <div className="p-4 bg-black/60 border border-white/10">
              <span className="text-teal-400 font-bold text-lg block mb-1">2. Protocol Defense</span>
              <p className="text-xs text-neutral-400">
                Disable POP3/IMAP/SMTP basic auth tenant-wide, restrict user OAuth consent, and set mandatory expiration for external sharing links.
              </p>
            </div>
            <div className="p-4 bg-black/60 border border-white/10">
              <span className="text-teal-400 font-bold text-lg block mb-1">3. Delta Verification</span>
              <p className="text-xs text-neutral-400">
                Perform a complimentary 30-day delta re-test to verify that remediated controls have successfully transitioned to PASS.
              </p>
            </div>
          </div>
        </section>

        {/* Dual Actions: Demo Report & Book Assessment */}
        <section className="border-t border-white/10 pt-12 text-center">
          <span className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] block mb-3">
            Productized Assessment Offering
          </span>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Benchmark Your M365 Security Posture
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm mb-8 leading-relaxed">
            Receive a formal 22-control assessment, prioritized remediation punch-list, and executive board report for your organization. 
            Fixed price. Strictly read-only. Delivered within 48 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services/m365-hardening"
              className="bg-teal-500 hover:bg-teal-400 text-black font-bold px-8 py-4 transition-all text-sm uppercase tracking-wider angular-cut shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Book Assessment — $500 Flat (SAR 1,875) →
            </Link>

            <a
              href="/sample-report.html"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-teal-500/40 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 font-bold px-7 py-4 transition-all text-sm uppercase tracking-wider angular-cut"
            >
              View Interactive Demo Report ↗
            </a>

            <a
              href="/sample-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/15 hover:border-white/40 text-neutral-300 font-medium px-6 py-4 transition-all text-sm"
            >
              Download PDF Sample ↓
            </a>
          </div>

          <p className="text-[11px] text-neutral-500 mt-5">
            Supported payment rails: Mada, Apple Pay, Visa, Mastercard, or Corporate Net 30 Wire Invoice (SWIFT/IBAN).
          </p>
        </section>
      </div>
    </div>
  );
}

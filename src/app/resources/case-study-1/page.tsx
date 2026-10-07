import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study: 17 M365 Security Gaps in 30 Minutes — SOCRoot",
  description: "How an automated read-only baseline assessment uncovered 17 critical identity, OAuth, and access vulnerabilities in a growing fintech tenant, remediated in 72 hours.",
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
        desc: "Best practices require 2 to 4 emergency break-glass admins. The organization had 7 users with permanent Global Admin rights, including daily productivity accounts without Privileged Identity Management (PIM).",
        impact: "A single compromised mailbox or phishing click granted tenant-wide control.",
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
        desc: "Any user in the company was permitted to grant third-party OAuth applications access to read their profile and mail data.",
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
        desc: "Shared links remained valid indefinitely across historical customer repositories.",
        impact: "Perpetual unauthorized access by former contractors and third parties.",
      },
      {
        title: "External Mailbox Forwarding Rules Permitted",
        desc: "Remote domain settings permitted users to configure automatic forwarding rules to personal Gmail/Yahoo addresses.",
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
        title: "Microsoft Secure Score Unmonitored (Initial Score: 38%)",
        desc: "No periodic review or SLA tied to tenant posture score; posture had degraded over 12 months.",
        impact: "Cumulative drift away from CIS Microsoft 365 Foundations Benchmark and NCA ECC.",
      },
    ],
  },
];

export default function CaseStudyM365() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/resources" className="text-sm text-neutral-500 hover:text-teal-400 transition-colors">
          ← Back to resources
        </Link>

        {/* Case Study Header */}
        <header className="mt-10 mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[10px] font-mono text-teal-400 border border-teal-500/30 bg-teal-500/10 px-2.5 py-1 uppercase tracking-widest font-bold">
              Real-World Assessment Case Study
            </span>
            <span className="text-[10px] font-mono text-amber-400 border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 uppercase tracking-widest font-semibold">
              Read-Only Execution · 30-Min Telemetry
            </span>
            <span className="text-[10px] font-mono text-neutral-400 border border-white/10 px-2.5 py-1 uppercase tracking-widest">
              Fintech Sector · 180 Seats
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white leading-tight">
            How We Uncovered <span className="text-teal-400">17 Critical M365 Security Gaps</span> in 30 Minutes
          </h1>

          <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl">
            A fast-growing Middle Eastern fintech operating on Microsoft 365 believed their cloud posture was secure. 
            Within 30 minutes of a zero-touch, read-only baseline assessment, SOCRoot mapped 17 high-severity configuration gaps—spanning 
            Global Admin sprawl, unmonitored OAuth permissions, and unblocked legacy protocols. Here is how it happened, what was found, 
            and how the tenant posture score jumped from 38% to 81% in 72 hours.
          </p>
        </header>

        {/* Executive Scorecard */}
        <div className="grid sm:grid-cols-4 gap-4 p-6 border border-white/10 bg-white/[0.02] mb-14 angular-cut glass-dark">
          <div className="border-r border-white/10 pr-4 last:border-none">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Initial Posture</p>
            <p className="text-3xl font-extrabold text-red-400 mt-1">38%</p>
            <p className="text-[11px] text-neutral-500 mt-0.5">High Exposure / Grade F</p>
          </div>
          <div className="border-r border-white/10 pr-4 last:border-none">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Scan Duration</p>
            <p className="text-3xl font-extrabold text-teal-400 mt-1">30 Min</p>
            <p className="text-[11px] text-neutral-500 mt-0.5">Zero agent / Read-only API</p>
          </div>
          <div className="border-r border-white/10 pr-4 last:border-none">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Gaps Uncovered</p>
            <p className="text-3xl font-extrabold text-amber-400 mt-1">17</p>
            <p className="text-[11px] text-neutral-500 mt-0.5">CIS &amp; NCA ECC Controls</p>
          </div>
          <div>
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Remediated Posture</p>
            <p className="text-3xl font-extrabold text-emerald-400 mt-1">81%</p>
            <p className="text-[11px] text-neutral-500 mt-0.5">Remediated in 72 Hours</p>
          </div>
        </div>

        {/* Background & Context */}
        <section className="mb-14 space-y-4">
          <h2 className="text-2xl font-extrabold text-white">The Challenge: Rapid Growth vs. Cloud Configuration Drift</h2>
          <p className="text-neutral-400 leading-relaxed text-sm">
            Like many organizations scaling rapidly from 20 to 180 employees, the client had migrated to Microsoft 365 and Entra ID (Azure AD) 
            under tight delivery timelines. IT administration had been shared among multiple team leads, new SaaS integrations had been 
            authorized on-the-fly, and default tenant settings were largely untouched.
          </p>
          <p className="text-neutral-400 leading-relaxed text-sm">
            Preparing for their annual compliance review and external audit, the executive leadership needed an immediate, 
            evidence-grounded picture of their real Microsoft 365 security posture without disrupting daily productivity or requiring months of consultancy.
          </p>
        </section>

        {/* The 17 Gaps Detailed */}
        <section className="mb-14">
          <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-3">Audit Findings Breakdown</p>
          <h2 className="text-3xl font-extrabold text-white mb-8">The 17 Vulnerabilities Uncovered</h2>

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
                            <b>Business Impact:</b> {item.impact}
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
          <h2 className="text-2xl font-extrabold text-white mb-4">The 72-Hour Remediation Turnaround</h2>
          <p className="text-neutral-300 text-sm leading-relaxed mb-6">
            Armed with SOCRoot&apos;s prioritized punch-list, the organization&apos;s internal IT team executed targeted remediations 
            over a single weekend without touching sensitive business workflows:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 bg-black/60 border border-white/10">
              <span className="text-teal-400 font-bold text-lg block mb-1">1. Admin Lockdown</span>
              <p className="text-xs text-neutral-400">
                Reduced Global Admins from 7 to 2 dedicated accounts, deployed break-glass credentials, and activated phishing-resistant MFA.
              </p>
            </div>
            <div className="p-4 bg-black/60 border border-white/10">
              <span className="text-teal-400 font-bold text-lg block mb-1">2. Protocol Defense</span>
              <p className="text-xs text-neutral-400">
                Disabled POP3/IMAP across all mailboxes, blocked user OAuth consent, and restricted external link sharing to domain-verified guests.
              </p>
            </div>
            <div className="p-4 bg-black/60 border border-white/10">
              <span className="text-teal-400 font-bold text-lg block mb-1">3. Delta Verification</span>
              <p className="text-xs text-neutral-400">
                Re-ran SOCRoot automated verification 72 hours later, confirming 100% resolution of all 17 gaps and raising Secure Score to 81%.
              </p>
            </div>
          </div>
        </section>

        {/* Dual Actions: Demo Report & Book Assessment */}
        <section className="border-t border-white/10 pt-12 text-center">
          <span className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] block mb-3">
            Take Action On Your Own Tenant
          </span>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Benchmark Your M365 Security in 30 Minutes
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm mb-8 leading-relaxed">
            Get the exact same comprehensive 22-control audit, prioritized punch-list, and executive board report for your organization. 
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

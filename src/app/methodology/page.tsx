import { ClipboardList, Database, Eye, FileCheck2, KeyRound, ScrollText, ShieldCheck, Wrench } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assessment Methodology — SOC Root",
  description:
    "How SOC Root's M365 & Entra ID Hardening assessment works end-to-end: what is collected, how it is analyzed, what is and is not tested, and how to verify the results.",
};

const STAGES = [
  {
    icon: ScrollText,
    title: "1. Scope & Authorization",
    body: "You provide the customer_id, tenant_domain, and sign a written consent for read-only access. We document what is in scope, what is not, and the deadline for delivery. No work proceeds without an explicit consent record.",
  },
  {
    icon: KeyRound,
    title: "2. App Registration (read-only)",
    body: "A one-time setup in your Entra admin center: an App Registration with the scopes User.Read.All, Directory.Read.All, Policy.Read.All, Reports.Read.All, AuditLog.Read.All, DeviceManagement.Read.All. Admin consent is granted to the app — not to SOC Root. SOC Root never receives tenant-wide admin credentials.",
  },
  {
    icon: Database,
    title: "3. Deterministic Collection",
    body: "The audit engine calls Microsoft Graph read-only endpoints (organization, users, conditionalAccess, oauth2PermissionGrants, auditLogs/signIn, security/secureScores, deviceManagement). Each call is logged with run_id, timestamp, and a content hash. We never write, modify, or delete anything in your tenant.",
  },
  {
    icon: Eye,
    title: "4. Analysis (deterministic)",
    body: "Each of the 25 baseline controls is checked against the snapshot. Findings are PASS, FAIL, WARN, or NOT_APPLICABLE. A control marked NOT_APPLICABLE is one where the data was not collectable (e.g. Intune disabled) — it is not a pass-by-default. A coverage % is reported honestly.",
  },
  {
    icon: ShieldCheck,
    title: "5. Independent QA",
    body: "A 10-check deterministic QA gate runs before delivery: schema, score consistency, finding counts, remediation text, N/A disclosure, secret leakage scan, customer identity, score/grade validity, evidence references, and brand consistency. Delivery is BLOCKED on any failure.",
  },
  {
    icon: FileCheck2,
    title: "6. Customer-Readable Manifest",
    body: "Every audit produces a small `manifest.json` next to the report and annex. It contains: run_id, engagement_id, engine version, config version, score, grade, coverage %, and SHA-256 hashes of the annex and HTML. You (or your auditor) can hash the annex yourself and confirm it matches the manifest.",
  },
];

const PRINCIPLES = [
  {
    icon: ClipboardList,
    title: "What we collect",
    body: "Read-only Microsoft Graph endpoints listed in the App Registration step above. No screenshots, no third-party data, no browsing history.",
  },
  {
    icon: Eye,
    title: "What we do NOT collect",
    body: "Mail content, files, chat messages, user passwords, MFA seeds, conditional access raw values beyond state, audit log bodies. The collector explicitly does not call those endpoints.",
  },
  {
    icon: Wrench,
    title: "What we do NOT modify",
    body: "Anything. The V1 contract is read-only. capability_executor hard-blocks destructive capabilities. The deliverable manifest always reports destructive_operations=false.",
  },
  {
    icon: ShieldCheck,
    title: "What is deterministic",
    body: "Collection, control checks, score calculation, severity classification, QA gate, manifest hash binding — all are deterministic code. LLM is not used in the M365 path. llm_used in the manifest is always false.",
  },
];

const SAMPLE = {
  client_id: "acme-demo",
  score: 67,
  grade: "D",
  coverage_percent: 92.0,
  findings_total: 25,
  findings_pass: 10,
  findings_fail: 12,
  findings_warn: 1,
  findings_na: 2,
  by_severity_fail: { critical: 1, high: 5, medium: 6 },
};

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f5f5f5] pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            ASSESSMENT METHODOLOGY
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            How this assessment works
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl">
            A customer-readable explanation of what we collect, what
            we check, what is and is not tested, and how you can
            independently verify the result.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-teal-400 mb-6">
            The 6 stages of every assessment
          </h2>
          <ol className="space-y-6">
            {STAGES.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="p-6 bg-white/[0.02] border border-white/5 angular-cut"
              >
                <div className="flex items-start gap-4">
                  <Icon className="w-6 h-6 text-teal-400 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-teal-400 mb-6">
            What goes in and out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PRINCIPLES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="p-5 bg-white/[0.02] border border-white/5 angular-cut"
              >
                <Icon className="w-5 h-5 text-teal-400 mb-3" />
                <h3 className="text-base font-semibold mb-2">{title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-teal-400 mb-4">
            What a manifest looks like
          </h2>
          <p className="text-neutral-300 mb-4 text-sm">
            A small JSON file, one per audit, written next to the
            report and annex. The customer can hash the annex file
            themselves and confirm it matches
            <code className="px-1 bg-white/5 rounded">manifest.annex_sha256</code>.
          </p>
          <pre className="p-5 bg-black/40 border border-white/10 text-xs font-mono text-neutral-300 overflow-x-auto angular-cut">
{`{
  "run_id": "20260831_101530_a4f2",
  "engagement_id": "eng_acme-demo_2026Q3_v1",
  "client_id": "${SAMPLE.client_id}",
  "engine_version": "1.0",
  "config_version": "v1",
  "input_hash": "8a4f2b...c1d3",
  "annex_sha256": "b3a7f2c1...e9d4",
  "html_sha256":  "7c8b9a01...2f5e",
  "controls_total": 25,
  "controls_assessed": 23,
  "coverage_percent": ${SAMPLE.coverage_percent},
  "findings_count": ${SAMPLE.findings_total},
  "by_severity_fail": ${JSON.stringify(SAMPLE.by_severity_fail)},
  "score": ${SAMPLE.score},
  "grade": "${SAMPLE.grade}",
  "llm_used": false,
  "destructive_operations": false,
  "assessment_timestamp": "2026-08-31T10:15:30+00:00"
}`}
          </pre>
          <p className="text-neutral-400 text-sm mt-3">
            A coverage_percent of 92.0 means 23 of 25 controls
            were actually assessable. The remaining 2 were
            <code className="px-1 bg-white/5 rounded">NOT_APPLICABLE</code>{" "}
            — for example, an Intune control when the tenant has no
            Intune subscription. NOT_APPLICABLE is not a pass.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-teal-400 mb-4">
            Limitations
          </h2>
          <p className="text-neutral-300 mb-4">
            An assessment is a point-in-time snapshot. It does not
            monitor, alert, or remediate. It does not cover every
            M365 control surface (the V1 baseline is 25 controls;
            Intune deep-dive, Purview/DLP, and Azure infrastructure
            are out of scope and require separate engagements).
          </p>
          <p className="text-neutral-300">
            The score reflects what the audit could verify from
            the data it was able to collect. A control that cannot
            be assessed because the customer's App Registration
            does not have admin consent for that endpoint is
            reported as{" "}
            <code className="px-1 bg-white/5 rounded">NOT_APPLICABLE</code>,
            not as a pass.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-teal-400 mb-4">
            Verify a result yourself
          </h2>
          <ol className="list-decimal pl-6 text-neutral-300 space-y-2 text-sm">
            <li>
              Open the <code className="px-1 bg-white/5 rounded">manifest.json</code>{" "}
              file in your delivery.
            </li>
            <li>
              Hash the <code className="px-1 bg-white/5 rounded">*_m365_annex_*.json</code>{" "}
              file with <code className="px-1 bg-white/5 rounded">sha256sum</code>{" "}
              on your machine.
            </li>
            <li>
              Compare to{" "}
              <code className="px-1 bg-white/5 rounded">manifest.annex_sha256</code>.
              They must match.
            </li>
            <li>
              Cross-check{" "}
              <code className="px-1 bg-white/5 rounded">manifest.engagement_id</code>{" "}
              against your task contract.
            </li>
            <li>
              Cross-check{" "}
              <code className="px-1 bg-white/5 rounded">manifest.destructive_operations</code>{" "}
              is <code className="px-1 bg-white/5 rounded">false</code>.
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Privacy Policy — SOC Root",
  description: "SOC Root's privacy policy covering data collection, processing, and your rights under UAE PDPL and GDPR.",
};

const SECTIONS = [
  {
    title: "1. Who We Are",
    content: `SOC Root ("we", "us", "our") is a cybersecurity services provider operating internationally with a primary focus on the UAE and Jordan markets. We offer managed security services, vulnerability assessments, compliance consulting, and security awareness training.

For privacy inquiries, contact us at: socroot@outlook.com`,
  },
  {
    title: "2. Data We Collect",
    content: `We collect the following categories of data:

**Contact & Identity Data:** Name, email address, company name, and phone number — collected when you submit a form, create an order, or contact us.

**Technical Data:** IP address, browser type, and domain names — collected automatically for security scanning and operational purposes.

**Service Data:** Domains, scan results, and vulnerability reports — collected as part of delivering our cybersecurity services to you.

**Communication Data:** Messages, emails, and support requests — retained to ensure quality and continuity of service.`,
  },
  {
    title: "3. How We Use Your Data",
    content: `We use your data to:
- Deliver contracted cybersecurity services and reports
- Send order confirmations, status updates, and invoices
- Respond to inquiries and provide technical support
- Send security intelligence updates (only with your consent via newsletter subscription)
- Comply with legal obligations under UAE, Jordanian, and international law
- Improve our services through aggregated, anonymized analysis

We do NOT sell your data to third parties. We do NOT use your data for advertising purposes.`,
  },
  {
    title: "4. Data Storage & Security",
    content: `All personal data is:
- Encrypted at rest using AES-256 (Fernet)
- Transmitted exclusively over TLS 1.3
- Stored on servers hosted in the EU (Hetzner Cloud, Germany)
- Access-controlled with role-based permissions and admin token authentication

Scan results and reports are retained for 12 months after service completion, then permanently deleted.`,
  },
  {
    title: "5. Your Rights",
    content: `Depending on your jurisdiction, you have the right to:

- **Access:** Request a copy of all personal data we hold about you
- **Correction:** Update inaccurate or incomplete data
- **Deletion:** Request erasure of your personal data ("Right to be Forgotten")
- **Restriction:** Limit how we process your data
- **Portability:** Receive your data in a machine-readable format
- **Objection:** Object to processing based on legitimate interests

To exercise any of these rights, contact: socroot@outlook.com with subject "Privacy Request — [Your Name]". We respond within 30 days.`,
  },
  {
    title: "6. Cookies",
    content: `SOC Root does not use advertising or tracking cookies. We use only:

- **Essential cookies:** Session management for the client portal
- **No third-party analytics:** We do not embed Google Analytics, Meta Pixel, or equivalent tracking

You can disable cookies in your browser settings without affecting core website functionality.`,
  },
  {
    title: "7. Third-Party Services",
    content: `We use the following sub-processors:

| Service | Purpose | Data Shared |
|---------|---------|-------------|
| Hetzner Cloud (DE) | Server infrastructure | IP, logs |
| Cloudflare Pages | Static site hosting & CDN | IP, request metadata |
| Outlook / SMTP | Email delivery | Email address |
| Telegram Bot API | Admin notifications | None (admin use only) |

All sub-processors are contractually bound to equivalent data protection standards.`,
  },
  {
    title: "8. Legal Basis",
    content: `We process personal data under the following legal bases:
- **Contract performance:** When data is necessary to deliver services you have ordered
- **Legitimate interest:** For security monitoring and fraud prevention
- **Consent:** For newsletter subscriptions (withdrawable at any time)
- **Legal obligation:** When required by UAE Federal Decree-Law No. 45/2021 (PDPL) or applicable law`,
  },
  {
    title: "9. International Transfers & Data Residency",
    content: `Our primary servers are located in Germany (EU). 

For clients in the UAE (under Federal Decree-Law No. 45 of 2021 on Personal Data Protection) and Jordan (under Personal Data Protection Law No. 24 of 2023), any cross-border transfers are conducted subject to explicit consent and stringent contractual safeguards. We prioritize data residency where mandated by sector-specific regulations (such as critical infrastructure or financial institutions under NCA/CBUAE guidelines) by leveraging localized, sovereign cloud deployments upon request.`,
  },
  {
    title: "10. Policy Updates",
    content: `We may update this policy to reflect regulatory changes or service updates. The "Last Updated" date at the top of this page will reflect any changes. We will notify active clients via email for material changes. Continued use of our services after policy updates constitutes acceptance.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Legal</p>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-600">
            <span>Last Updated: April 2026</span>
            <span className="text-neutral-700">·</span>
            <span>Effective: April 2026</span>
            <span className="text-neutral-700">·</span>
            <span>PDPL · GDPR-aligned</span>
          </div>
          <div className="mt-6 p-5 rounded-xl bg-teal-500/5 border border-teal-500/20">
            <p className="text-sm text-neutral-400 leading-relaxed">
              <strong className="text-teal-400">Summary:</strong> We collect only what we need to deliver our services. We encrypt everything. We never sell your data. You can request deletion at any time by emailing{" "}
              <a href="/contact" className="text-teal-400 underline underline-offset-2">
                socroot@outlook.com
              </a>.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.title} className="border-t border-white/5 pt-8">
              <h2 className="text-lg font-bold text-white mb-4">{section.title}</h2>
              <div className="prose prose-invert prose-sm max-w-none">
                {section.content.split("\n").map((line, i) => {
                  if (!line.trim()) return <br key={i} />;
                  if (line.startsWith("- "))
                    return (
                      <li key={i} className="text-neutral-400 leading-relaxed ml-4">
                        <span dangerouslySetInnerHTML={{ __html: line.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>") }} />
                      </li>
                    );
                  if (line.startsWith("|"))
                    return (
                      <p key={i} className="text-neutral-600 font-mono text-xs">
                        {line}
                      </p>
                    );
                  return (
                    <p key={i} className="text-neutral-400 leading-relaxed">
                      <span dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>") }} />
                    </p>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 p-8 rounded-none border border-white/8 bg-white/[0.02] text-center angular-cut bg-noise glass-dark">
          <h3 className="font-bold text-white mb-2">Privacy Questions?</h3>
          <p className="text-neutral-500 text-sm mb-5">
            We take your privacy seriously. Contact our data protection point of contact directly.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black font-bold px-6 py-3 rounded-none text-sm transition-all angular-cut"
          >
            Contact Data Controller →
          </a>
        </div>

      </div>
    </div>
  );
}

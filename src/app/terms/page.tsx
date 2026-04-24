export const metadata = {
  title: "Terms of Service — SOC Root",
  description: "SOC Root terms of service governing use of cybersecurity services, client obligations, liability, and dispute resolution.",
};

export default function Terms() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-3xl">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] mb-4">Legal</p>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Terms of Service</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-600">
            <span>Last Updated: April 2026</span>
            <span className="text-neutral-700">·</span>
            <span>Governing Law: Jordan / UAE</span>
          </div>
          <div className="mt-6 p-5 rounded-xl bg-white/[0.02] border border-white/8">
            <p className="text-sm text-neutral-400 leading-relaxed">
              By subscribing to or using any SOC Root service, you agree to the following terms. Please read them carefully. If you disagree with any part, do not proceed with the service.
            </p>
          </div>
        </div>

        <div className="space-y-10">

          {/* 1 */}
          <section className="border-t border-white/5 pt-8">
            <h2 className="text-lg font-bold text-white mb-4">1. Definitions</h2>
            <div className="space-y-2 text-neutral-400 text-sm leading-relaxed">
              <p><strong className="text-white">"Services"</strong> refers to all cybersecurity products, vulnerability assessments, compliance consulting, SIEM monitoring, and training delivered by SOC Root.</p>
              <p><strong className="text-white">"Client"</strong> refers to the individual or legal entity that has engaged SOC Root for services.</p>
              <p><strong className="text-white">"Authorized Scope"</strong> refers to the specific domains, IP ranges, and systems explicitly listed in the service agreement for testing or monitoring.</p>
              <p><strong className="text-white">"Confidential Information"</strong> includes all scan results, vulnerability reports, system data, and communications exchanged during the engagement.</p>
            </div>
          </section>

          {/* 2 */}
          <section className="border-t border-white/5 pt-8">
            <h2 className="text-lg font-bold text-white mb-4">2. Service Authorization</h2>
            <div className="space-y-3 text-neutral-400 text-sm leading-relaxed">
              <p>By engaging SOC Root's vulnerability scanning, penetration testing, or monitoring services for a domain or system, the Client warrants and represents that:</p>
              <ul className="space-y-2 ml-4 list-none">
                {[
                  "They are the legal owner or authorized administrator of all in-scope systems",
                  "They have obtained all necessary legal authorizations for security testing",
                  "The engagement does not violate any third-party agreements or applicable laws",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1 shrink-0">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/15 mt-4">
                <p className="text-red-400 text-xs leading-relaxed">
                  <strong>Important:</strong> SOC Root will not perform security testing on systems without explicit written authorization. Any attempt to use our platform to test unauthorized targets will result in immediate service termination without refund and may be reported to relevant authorities.
                </p>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section className="border-t border-white/5 pt-8">
            <h2 className="text-lg font-bold text-white mb-4">3. Payment & Refund Policy</h2>
            <div className="space-y-3 text-neutral-400 text-sm leading-relaxed">
              <p>All services are billed as stated on the selected plan:</p>
              <ul className="space-y-2 ml-4">
                {[
                  "Starter Plan: One-time payment, due before service delivery",
                  "Guard, Governance, Premium Plans: Monthly subscription, billed at the start of each cycle",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1 shrink-0">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3"><strong className="text-white">Refund Policy:</strong> Refunds may be requested within 7 days of service activation if no substantive work has commenced. Once a scan or report has been delivered, services are non-refundable. Disputes must be raised in writing to socroot@outlook.com.</p>
              <p><strong className="text-white">Cancellation:</strong> Monthly subscriptions may be cancelled with 14 days written notice. No pro-rated refunds for partial months.</p>
            </div>
          </section>

          {/* 4 */}
          <section className="border-t border-white/5 pt-8">
            <h2 className="text-lg font-bold text-white mb-4">4. Confidentiality</h2>
            <div className="space-y-3 text-neutral-400 text-sm leading-relaxed">
              <p>SOC Root treats all scan results, vulnerability findings, and client system data as strictly confidential. We commit to:</p>
              <ul className="space-y-2 ml-4">
                {[
                  "Not disclosing client data to any third party without explicit written consent",
                  "Retaining scan data for no longer than 12 months post-engagement",
                  "Encrypting all stored sensitive data using AES-256",
                  "Providing a signed NDA upon request for enterprise engagements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1 shrink-0">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5 */}
          <section className="border-t border-white/5 pt-8">
            <h2 className="text-lg font-bold text-white mb-4">5. Limitation of Liability</h2>
            <div className="space-y-3 text-neutral-400 text-sm leading-relaxed">
              <p>SOC Root's vulnerability assessments identify known risks based on available intelligence and scanning templates at the time of testing. We do not guarantee that all vulnerabilities will be identified, as the threat landscape evolves continuously.</p>
              <p>SOC Root's total cumulative liability, regardless of the nature of the claim, shall not exceed the total fees paid by the Client in the 3 months preceding the claim.</p>
              <p>SOC Root shall not be liable for: indirect, incidental, or consequential damages; loss of profits or data; or damages arising from system downtime caused by security testing within the authorized scope.</p>
            </div>
          </section>

          {/* 6 */}
          <section className="border-t border-white/5 pt-8">
            <h2 className="text-lg font-bold text-white mb-4">6. Intellectual Property</h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              All vulnerability reports, assessments, and methodologies delivered to the Client are licensed exclusively for the Client's use. SOC Root retains intellectual property rights over all tools, scanning templates, automation scripts, and platform infrastructure. Reports may not be resold or redistributed without written permission.
            </p>
          </section>

          {/* 7 */}
          <section className="border-t border-white/5 pt-8">
            <h2 className="text-lg font-bold text-white mb-4">7. Acceptable Use</h2>
            <div className="space-y-2 text-neutral-400 text-sm leading-relaxed">
              <p>Clients agree not to:</p>
              <ul className="space-y-2 ml-4">
                {[
                  "Use SOC Root services to target systems they do not own or lack authorization to test",
                  "Attempt to reverse-engineer, scrape, or misuse the SOC Root platform or API",
                  "Circumvent rate limits, authentication, or security controls of the service",
                  "Use SOC Root reports to facilitate attacks on third parties",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1 shrink-0">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 8 */}
          <section className="border-t border-white/5 pt-8">
            <h2 className="text-lg font-bold text-white mb-4">8. Governing Law & Dispute Resolution</h2>
            <div className="space-y-3 text-neutral-400 text-sm leading-relaxed">
              <p>These Terms are governed by the laws of the Hashemite Kingdom of Jordan. For UAE-based clients, applicable UAE Federal laws shall apply concurrently where jurisdiction requires.</p>
              <p>In the event of a dispute, parties agree to attempt good-faith resolution within 30 days. If unresolved, disputes shall be submitted to binding arbitration under the rules of the relevant jurisdiction's commercial arbitration body.</p>
            </div>
          </section>

          {/* 9 */}
          <section className="border-t border-white/5 pt-8">
            <h2 className="text-lg font-bold text-white mb-4">9. Modifications</h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              SOC Root reserves the right to modify these Terms at any time. Active clients will be notified via email at least 14 days before material changes take effect. Continued use of services after the effective date constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* 10 */}
          <section className="border-t border-white/5 pt-8">
            <h2 className="text-lg font-bold text-white mb-4">10. Contact</h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              For any questions regarding these Terms, contact:{" "}
              <a href="/contact" className="text-emerald-400 hover:underline">
                socroot@outlook.com
              </a>{" "}
              with subject line "Terms Inquiry".
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-neutral-600 text-xs font-mono">
            SOC Root · Terms of Service · Version 1.0 · April 2026
          </p>
          <div className="flex gap-4 text-xs">
            <a href="/privacy" className="text-emerald-500 hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="/security" className="text-neutral-600 hover:text-neutral-400 transition-colors">Security Policy</a>
          </div>
        </div>

      </div>
    </div>
  );
}

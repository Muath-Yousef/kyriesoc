# SOC Root — Project Constitution

**Created**: 2026-04-24
**Status**: Active

## Article I: Design Identity — Industrial, Minimalist, Premium

All visual decisions MUST adhere to a **Premium · Minimalist · Industrial** aesthetic. This means:
- Dark theme (`#0c0c0c` base) with muted teal/steel-green accents — NOT consumer-grade emerald
- Angular, sharp UI elements over rounded/soft ones
- Monospace typography for technical elements; Inter for body text
- Subtle metallic textures and noise overlays where appropriate
- No emoji in professional-facing UI elements (navigation, footer, badges)
- Every component must feel like it belongs in a corporate security operations center

## Article II: Trust-First Development

Every page, component, and interaction MUST be evaluated through the lens of: *"Would a UAE/Jordan-based CISO trust this?"*
- Physical addresses (UAE + Jordan) must be visible
- Professional certifications must be displayed
- Anonymous testimonials must be attributed or clearly marked
- All legal/compliance pages must exist and be complete
- Missing content pages (stubs) are NEVER acceptable in production

## Article III: Security Walks The Talk

As a cybersecurity company, the website's own security posture is the first product demo:
- Full security headers suite (HSTS, CSP, X-Frame-Options, etc.) — NON-NEGOTIABLE
- CORS must be restrictive, not wildcarded
- All forms must use CSRF protection
- TLS 1.3 minimum
- No exposed development artifacts in production

## Article IV: Content Completeness Mandate

No page may exist in the navigation or sitemap that lacks its full intended content:
- Every nav link must lead to a complete, content-rich page
- Pricing must be transparently displayed with actual currency amounts
- Feature comparison tables must have data
- FAQ sections must have Q&A content
- "Coming Soon" stubs are acceptable only if styled intentionally and timestamped

## Article V: SEO & Discoverability

Every page MUST have:
- Unique `<title>` tag (not duplicating homepage)
- Unique meta description
- Canonical URL
- Structured data (JSON-LD) where applicable
- Open Graph image for social sharing
- Proper heading hierarchy (single H1, semantic H2-H6)

## Article VI: Regional Market Alignment

The website serves UAE, Jordan, and KSA markets. This requires:
- Arabic language support (at minimum, a landing page)
- AED/JOD/SAR currency references alongside USD
- UAE and Jordanian phone numbers
- Business registration and VAT details
- Compliance with UAE PDPL, Saudi NCA ECC, and GDPR equivalents

## Article VII: Simplicity Over Cleverness

- No over-engineered abstractions
- Prefer static generation (Next.js SSG) over dynamic rendering where possible
- Minimum external dependencies
- Configuration-driven content where feasible (pricing, features, FAQs)

## Article VIII: Accessibility & Performance

- WCAG 2.1 AA compliance minimum
- All interactive elements must be keyboard navigable
- Lighthouse Performance score ≥ 90
- Largest Contentful Paint ≤ 2.5s
- No layout shifts (CLS ≤ 0.1)

## Article IX: Iterative Deployment

- Changes must be deployable in isolated increments
- Each phase must be independently verifiable
- Feature branches per spec, merged only after validation
- No partial implementations in production

# Feature Specification: Security Hardening

**Feature Branch**: `001-security-hardening`
**Created**: 2026-04-24
**Status**: Draft
**Input**: Audit finding — zero security headers detected on socroot.com. CORS policy is wildcard. A cybersecurity company must lead by example.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Security-Aware Visitor Checks Headers (Priority: P1)

A technically-minded CISO visits socroot.com and runs SecurityHeaders.com or DevTools to verify the company practices what it preaches. They see a full suite of security headers, confirming professional posture.

**Why this priority**: This is the single highest-impact credibility issue. A cybersecurity firm with F-grade security headers is a dealbreaker for every technically aware prospect.

**Independent Test**: Open DevTools → Network → check response headers for HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.

**Acceptance Scenarios**:

1. **Given** a visitor loads any page, **When** they inspect HTTP response headers, **Then** all 7 security headers are present and correctly configured.
2. **Given** SecurityHeaders.com scans socroot.com, **When** the scan completes, **Then** the site scores A or A+.

---

### User Story 2 - CORS Policy Tightened (Priority: P2)

The current `Access-Control-Allow-Origin: *` is replaced with specific allowed origins.

**Why this priority**: Wildcard CORS on a cybersecurity website contradicts defense-in-depth principles.

**Independent Test**: `curl -sI https://socroot.com` shows restrictive CORS or no CORS header (static site doesn't need CORS).

**Acceptance Scenarios**:

1. **Given** any HTTP request, **When** response headers are inspected, **Then** `Access-Control-Allow-Origin` either lists specific origins or is absent.

---

### Edge Cases

- CSP must not block Next.js inline scripts or Cloudflare email protection
- HSTS preload requires proper submission to the HSTS preload list
- Verify headers don't break any existing functionality (WhatsApp button, Telegram links)

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST return `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` on all responses
- **FR-002**: System MUST return `X-Frame-Options: DENY`
- **FR-003**: System MUST return `X-Content-Type-Options: nosniff`
- **FR-004**: System MUST return `Content-Security-Policy` with restrictive but functional policy
- **FR-005**: System MUST return `Referrer-Policy: strict-origin-when-cross-origin`
- **FR-006**: System MUST return `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- **FR-007**: System MUST NOT return wildcard CORS (`Access-Control-Allow-Origin: *`)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: SecurityHeaders.com scan returns grade A or higher
- **SC-002**: All 7 security headers present on every page response
- **SC-003**: No functional regression — all pages render correctly after headers deployed

## Assumptions

- Site is hosted on Cloudflare Pages with GitHub Pages origin
- Headers can be configured via `_headers` file or `next.config.ts`
- CSP `unsafe-inline` may be required for Next.js without nonce-based implementation

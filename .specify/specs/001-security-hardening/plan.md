# Implementation Plan: Security Hardening

**Feature**: 001-security-hardening
**Tech Stack**: Next.js (Static Export) + Cloudflare Pages + `_headers` file
**Prerequisites**: Access to Cloudflare Pages project or `public/_headers` in repo

## Implementation Strategy

### Approach: Cloudflare Pages `_headers` File

Since the site is deployed on Cloudflare Pages with static export, the most reliable method is a `_headers` file in the `public/` directory. This gets picked up by Cloudflare Pages automatically.

### File: `public/_headers`

```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 0
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://wa.me https://t.me
```

### CORS Remediation

Remove or restrict `Access-Control-Allow-Origin: *`. For a static site, this header is unnecessary. If Cloudflare is injecting it, configure via Page Rules or `_headers`:

```
/*
  ! Access-Control-Allow-Origin
```

### Also update `next.config.ts`

Add security headers as a secondary defense layer in Next.js configuration:

```typescript
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];
```

## Verification Plan

1. Deploy to Cloudflare Pages
2. Run `curl -sI https://socroot.com` and verify all headers present
3. Submit to securityheaders.com and screenshot A+ result
4. Navigate all pages to ensure nothing broke (especially WhatsApp button, forms, external links)

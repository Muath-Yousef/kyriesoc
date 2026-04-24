# Tasks: Security Hardening

**Input**: Design documents from `/specs/001-security-hardening/`
**Prerequisites**: plan.md (required), spec.md (required)

## Phase 1: Setup

- [ ] T001 Verify current header state with `curl -sI https://socroot.com`
- [ ] T002 Document existing `public/_headers` file (if any)

## Phase 2: Implementation

- [ ] T003 [P] Create `public/_headers` file with full security headers suite
- [ ] T004 [P] Update `next.config.ts` to add security headers array as secondary defense
- [ ] T005 Remove or override wildcard CORS header via `_headers` negation rule

**Checkpoint**: All security header files in place locally

## Phase 3: Validation

- [ ] T006 Build locally with `npm run build` and verify no build errors
- [ ] T007 Deploy to Cloudflare Pages (push to branch / merge)
- [ ] T008 Run `curl -sI https://socroot.com` and verify all 7 headers present
- [ ] T009 Submit to securityheaders.com and capture score
- [ ] T010 Navigate all pages (home, services, contact, scan, plans/*) to verify no functional regression

**Checkpoint**: SecurityHeaders.com grade ≥ A

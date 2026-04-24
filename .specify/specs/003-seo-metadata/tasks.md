# Tasks: SEO & Metadata Remediation

**Input**: Audit findings — duplicate meta titles/descriptions, no canonical URLs, no structured data, no OG image, no analytics

## Phase 1: Per-Page Metadata Fix

- [ ] T001 [P] Fix `src/app/training/page.tsx` — add unique generateMetadata()
- [ ] T002 [P] Fix `src/app/plans/[planId]/page.tsx` — add dynamic generateMetadata() per plan
- [ ] T003 [P] Fix `src/app/compliance/nca-ecc/page.tsx` — add unique metadata
- [ ] T004 [P] Fix `src/app/compliance/iso-27001/page.tsx` — add unique metadata
- [ ] T005 [P] Add canonical URL to layout.tsx root metadata (alternates.canonical)

**Checkpoint**: Every page has unique title + description

## Phase 2: Structured Data & OG

- [ ] T006 Create JSON-LD structured data component `src/components/StructuredData.tsx` (Organization + ProfessionalService schema)
- [ ] T007 Add StructuredData component to root layout
- [ ] T008 Generate OG image (1200x630px) and add as `public/og-image.png`
- [ ] T009 Add `og:image` to root metadata in `src/app/layout.tsx`
- [ ] T010 [P] Add `og:image` per-page overrides where needed

**Checkpoint**: Rich previews work on Twitter/LinkedIn/WhatsApp shares

## Phase 3: Analytics & Verification

- [ ] T011 Create Google Analytics 4 / Plausible script component
- [ ] T012 Add analytics component to root layout (respecting cookie consent)
- [ ] T013 Add Google Search Console verification meta tag
- [ ] T014 Verify sitemap.xml includes all new pages and correct priorities
- [ ] T015 Style the default Next.js 404 page to match site design in `src/app/not-found.tsx`

**Checkpoint**: Analytics collecting data, Search Console verified, 404 page styled

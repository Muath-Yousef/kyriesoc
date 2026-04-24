# Tasks: Content Completion & Pricing Transparency

**Input**: Design documents from `/specs/002-content-completion/`
**Prerequisites**: spec.md (required)

## Phase 1: Data Models

- [ ] T001 [P] Create pricing data file `src/data/pricing.ts` with plan names, prices, features, billing periods
- [ ] T002 [P] Create FAQ data file `src/data/faq.ts` with 8 Q&A pairs for the services page
- [ ] T003 [P] Create training data file `src/data/training.ts` with 3 chapters, descriptions, topics, durations

## Phase 2: User Story 1 — Pricing Transparency (P1)

- [ ] T004 [US1] Add price display to each pricing card in `src/app/services/page.tsx`
- [ ] T005 [US1] Implement feature comparison table component in `src/components/FeatureComparison.tsx`
- [ ] T006 [US1] Implement FAQ accordion component in `src/components/FAQAccordion.tsx`
- [ ] T007 [US1] Wire FeatureComparison and FAQAccordion into services page

**Checkpoint**: /services shows prices, comparison table, and FAQ — all functional

## Phase 3: User Story 2 — Training Page (P2)

- [ ] T008 [US2] Rebuild `src/app/training/page.tsx` with full training content
- [ ] T009 [US2] Create training hero section with course overview
- [ ] T010 [US2] Create 3 chapter cards with descriptions and topic lists
- [ ] T011 [US2] Add training benefits section and enrollment CTA
- [ ] T012 [US2] Add SEO metadata (unique title and description for /training)

**Checkpoint**: /training has full content — no more empty page

## Phase 4: User Story 3 — Newsletter & Polish (P3)

- [ ] T013 [US3] Add newsletter email input and submit button to `src/components/Footer.tsx`
- [ ] T014 [US3] Implement client-side email validation and success state
- [ ] T015 [P] Remove all emoji from navigation (`📋`, `🔑`) and footer badges (`📋`, `🛡️`) — replace with SVG icons
- [ ] T016 Verify all "Get Started" buttons correctly link to their /plans/ pages

**Checkpoint**: Footer newsletter functional, emoji removed, all nav links verified

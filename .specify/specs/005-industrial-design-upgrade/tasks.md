# Tasks: Industrial Design Upgrade

**Input**: Audit findings — design feels "SaaS startup" not "industrial security". Need angular elements, muted teal palette, metallic textures, glassmorphism.

## Phase 1: Color Palette Shift

- [ ] T001 Update `src/app/globals.css` — shift primary accent from emerald (#10b981) to steel-teal (#0d9488 / #0f766e)
- [ ] T002 [P] Add CSS custom properties for metallic grays (--steel-100 through --steel-900)
- [ ] T003 [P] Add subtle noise/grain overlay CSS utility class (.bg-noise)
- [ ] T004 Update all component files using emerald green to reference new teal variables

**Checkpoint**: Color palette shifted across entire site

## Phase 2: Angular & Industrial Elements

- [ ] T005 Replace rounded corners (border-radius) with sharp/angular corners across cards and buttons
- [ ] T006 [P] Add angular clip-path or beveled corner CSS for key cards (pricing, architecture, process)
- [ ] T007 [P] Create subtle brushed-steel texture for card backgrounds
- [ ] T008 Update button styles — angular edges, no rounded pills, industrial hover states

**Checkpoint**: Visual language shifted from "soft SaaS" to "industrial ops"

## Phase 3: Premium Polish

- [ ] T009 Add glassmorphism (backdrop-blur, frosted borders) to card components
- [ ] T010 [P] Implement scroll-triggered staggered reveal animations (IntersectionObserver)
- [ ] T011 [P] Add counter animation for homepage stats (847+, 24hr, 100%)
- [ ] T012 Add subtle parallax effect on hero background grid
- [ ] T013 Add loading skeleton states for interactive elements (scan form, contact form)
- [ ] T014 Polish page transitions between routes

**Checkpoint**: Site feels premium and state-of-the-art

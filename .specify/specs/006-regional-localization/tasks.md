# Tasks: Regional Localization (UAE/Jordan)

**Input**: Audit findings — English-only site targeting Arabic-speaking markets. No Arabic content, no AED/JOD pricing, no hreflang.

## Phase 1: Foundation

- [ ] T001 Add RTL stylesheet support — create `src/app/globals-rtl.css` with direction-aware utilities
- [ ] T002 Create i18n content structure (`src/data/i18n/ar.ts` and `src/data/i18n/en.ts`)
- [ ] T003 Create language toggle component `src/components/LanguageToggle.tsx`
- [ ] T004 Add language toggle to navigation bar

**Checkpoint**: Language switching infrastructure in place

## Phase 2: Arabic Content

- [ ] T005 Translate homepage hero section to Arabic
- [ ] T006 [P] Translate navigation labels to Arabic
- [ ] T007 [P] Translate footer to Arabic
- [ ] T008 Create Arabic version of the About page (even if abbreviated)
- [ ] T009 Create Arabic version of the Contact page

**Checkpoint**: Homepage, nav, and key pages available in Arabic

## Phase 3: Regional Currency & Legal

- [ ] T010 Add AED/JOD equivalent prices alongside USD on pricing cards
- [ ] T011 [P] Add `hreflang` tags to root layout for `en` and `ar` variants
- [ ] T012 [P] Add `Content-Language` response header
- [ ] T013 Update Privacy Policy to reference UAE Federal Decree Law No. 45
- [ ] T014 Add Saudi PDPL and UAE DPL references to compliance pages

**Checkpoint**: Full regional market alignment — linguistic, monetary, and legal

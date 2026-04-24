# Tasks: Global Cleansing & Optimization

**Input**: User request to remove UAE/Jordan site-wide phone numbers, enforce USD-only pricing, and defer Arabic localization.

## Phase 1: Contact Clensing

- [x] T001 Remove UAE and Jordan phone numbers from `Footer.tsx`
- [x] T002 Remove UAE and Jordan phone numbers and locations' 'Tel' lines from `contact/page.tsx`
- [x] T003 Remove WhatsApp channel listing (uses Jordan number) and update fallback error messages
- [x] T004 Standardize contact fallbacks to Telegram and Email

## Phase 2: Metadata & Internationalization

- [x] T005 Strip regional phone numbers and localized 'areaServed' from `StructuredData.tsx`
- [ ] T006 Audit meta descriptions in `layout.tsx` and specific pages to ensure they don't over-promise regional availability where it might conflict with the new minimal localized profile.
- [ ] T007 Verify USD-only pricing consistency across all plan details (`src/data/pricing.ts`).

## Phase 3: Regional Deferment

- [ ] T008 Cleanup any leftover i18n logic placeholders that might have been partially implemented.
- [ ] T009 Document the decision to defer Arabic and Regional Currency support in the project history.

**Checkpoint**: Site is now globally compliant with the "No Regional Contact/Currency" constraint.

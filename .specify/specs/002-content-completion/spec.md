# Feature Specification: Content Completion & Pricing Transparency

**Feature Branch**: `002-content-completion`
**Created**: 2026-04-24
**Status**: Draft
**Input**: Audit findings — training page is empty, pricing cards show no prices, feature comparison table has no data, FAQ section has no content.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Prospect Sees Transparent Pricing (Priority: P1)

A business owner visits /services to evaluate SOC Root's pricing. They see clear dollar amounts on each plan card, can compare features in a table, and make an informed decision without needing to contact sales.

**Why this priority**: Pricing transparency is the #1 conversion lever. Hidden pricing drives away 67% of B2B prospects according to industry research.

**Independent Test**: Navigate to /services → verify 4 pricing cards each display a price in USD → verify feature comparison table renders with check/cross marks → verify FAQ accordion has 6+ Q&A pairs.

**Acceptance Scenarios**:

1. **Given** a visitor opens /services, **When** they see pricing cards, **Then** each card displays a price (e.g., "$190", "$490/mo", "$990/mo", "Custom")
2. **Given** a visitor scrolls to Feature Comparison, **When** the table renders, **Then** all rows have ✓/✗ marks for each plan
3. **Given** a visitor clicks an FAQ item, **When** the accordion expands, **Then** a complete answer is displayed

---

### User Story 2 - Employee Accesses Training Portal (Priority: P2)

A visitor clicks "Training" in the main nav and lands on a fully built training page showcasing the 3-chapter security awareness course, with curriculum preview, course benefits, and enrollment CTA.

**Why this priority**: The training page is linked in 4 locations (nav, hero, CTA section, footer) — all leading to an empty page. This erodes trust instantly.

**Independent Test**: Navigate to /training → verify page content exists between nav and footer → verify curriculum sections visible → verify CTA buttons work.

**Acceptance Scenarios**:

1. **Given** a visitor clicks Training in nav, **When** the page loads, **Then** they see course title, 3 chapter descriptions, benefits, and enrollment CTA
2. **Given** a visitor clicks "Start Training" CTA, **When** they click, **Then** they are directed to the portal login page

---

### User Story 3 - Newsletter Subscription (Priority: P3)

Visitors can enter their email in the footer's newsletter signup and submit it successfully.

**Why this priority**: The footer mentions "Security Intelligence Updates" but has no visible input field or form functionality.

**Independent Test**: Scroll to footer → verify email input and submit button visible → submit test email → verify confirmation.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls to footer, **When** they see the newsletter section, **Then** an email input field and subscribe button are visible
2. **Given** a visitor enters an email and clicks subscribe, **When** the form submits, **Then** a success confirmation is shown

---

### Edge Cases

- Pricing display must handle both one-time and recurring plans differently
- "Custom" pricing for enterprise plans should show "Contact Sales" instead of a number
- FAQ accordion state should work without JavaScript for SSG

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Each pricing card on /services MUST display a clear price amount in USD
- **FR-002**: Feature comparison table on /services MUST render with data for all 4 plans
- **FR-003**: FAQ section on /services MUST contain at least 6 Q&A pairs with accordion behavior
- **FR-004**: Training page (/training) MUST display full course content: title, 3 chapters, description, benefits, CTA
- **FR-005**: Footer newsletter section MUST include a functional email input and submit button
- **FR-006**: All "Get Started" buttons on pricing cards MUST link to their respective /plans/ pages

### Key Entities

- **PricingPlan**: { name, price, currency, billing_period, features[], cta_link, highlighted }
- **FAQItem**: { question, answer, order }
- **TrainingChapter**: { number, title, description, topics[], duration }

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All 4 pricing cards display prices with no "undefined" or blank amounts
- **SC-002**: Feature comparison table has ≥ 12 feature rows with check/cross data
- **SC-003**: FAQ section has ≥ 6 interactive Q&A items
- **SC-004**: Training page has ≥ 500 words of content (not just nav + footer)
- **SC-005**: Newsletter form renders with email validation

## Assumptions

- Pricing data will be hardcoded in component or content file (no CMS yet)
- Newsletter form can initially just show a success state without backend integration (Mailchimp/SendGrid integration deferred)
- Training content aligns with the existing "3-chapter NCA ECC aligned" description from the homepage

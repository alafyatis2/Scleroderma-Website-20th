# Scleroderma Website — Submissions Page Figma Spec
**Source:** Figma file "Scleroderma Website" — Frame: `Desktop - 33` (node 200:1558)
**Canvas size:** 1445px wide × ~3684px tall (desktop breakpoint; Contact section starts at y=3226px, ends at 3684px)
**Purpose:** Exact build spec for handing off to a developer / Claude Design. Every color, font, spacing value, radius, and layout rule below is pulled directly from the Figma file — build to these values precisely. This page shares its design system with the site's homepage and Programme page (see companion specs `scleroderma-website-figma-spec.md` and `scleroderma-programme-page-figma-spec.md`) — token names below match those files where the same tokens are reused.

---

## 1. Design Tokens

### 1.1 Color Palette

| Token | Hex | Usage on this page |
|---|---|---|
| `Orange/00` (cream/bg) | `#FAF5F1` | Page background (this page is a **light** page throughout, unlike the dark hero of Home/Programme), Contact section text/dividers (Contact section is dark here) |
| `Orange/0` (card bg) | `#FFE4D0` | Stat cards (Submission Opens/Closes/Notifications), Award A/B cards |
| `Orange/1` | `#FFC9A4` | Contact section labels (GENERAL/SUBMISSIONS/VENUE) — Contact on this page matches the **dark** homepage variant |
| **`Orange/2` (NEW token)** | **`#F17B4C`** | Active nav link ("Submissions"), "Example" label text + 2px border on the abstract-format example card |
| `Orange/3` (primary accent) | `#C94714` | Page title "Submissions" / "Travel Awards", section dividers, sub-headings ("Submit an Abstract", "Abstract Guidelines", etc.), Register button bg, stat card labels, award eyebrow labels ("AWARD A"/"AWARD B"), award dollar amounts, Award card borders |
| `Blue/3` (primary text/dark) | `#1F4357` | Body copy, nav inactive links, stat card values, list text, award card headings/body, Contact section bg |
| Muted blue (italic annotations) | `#49697C` | Italic supporting text (e.g. "7-minute talk, followed by 3 minutes for questions", poster size notes, award disbursement fine print) |
| Muted blue (light, punctuation) | `#5E92AF` | Trailing period after italic annotation text (micro-detail — single character styled separately in source) |

### 1.2 Typography
**Font family (all text):** `Host Grotesk`

| Style name | Weight | Size | Line height | Letter spacing | Used for |
|---|---|---|---|---|---|
| Header 2 | ExtraBold (800) | 48px | 1.15 | 0 | Page titles "Submissions", "Travel Awards", "Contact" |
| Header 4 | ExtraBold (800) | 24px | 1.0 | 0 | Sub-section headings: "Submit an Abstract", "Abstract Guidelines", "Oral and Poster Presentations", "Travel Awards for Young Investigators" |
| Header 5 | ExtraBold (800) | 16px | 1.0 | 0 | Stat card labels ("Submission Opens:"), stat values, "Format" heading, "Oral Presentation"/"Poster Presentation" sub-heads, "Example" label, award card titles (24px variant used for "SCTC Workshop Travel Awards" — see note below) |
| Header 4 (award title) | ExtraBold (800) | 24px | 1.0 | 0 | Award card titles: "SCTC Workshop Travel Awards", "Kao Family Foundation: SCTC Young Investigator Travel Awards" |
| Label / eyebrow | Bold (700) | 16px | 1.0 | 5.12px, UPPERCASE | "AWARD A" / "AWARD B" eyebrows, Contact column labels |
| Body | Regular (400) | 16px | 1.5 | 0 | All paragraph copy, list items |
| Body Bold (inline emphasis) | ExtraBold (800) | 16px | 1.5 | 0 | Inline bolded terms within body/list copy (e.g. "**1 page,**", "**English**", "**500 words**", "**UPPER CASE**", "**Arial 11-point font**") — use `<strong>`/inline bold spans, not separate paragraphs |
| Body Italic | Regular Italic | 16px | 1.5 | 0 | Supporting/clarifying notes in muted blue `#49697C` (e.g. presentation timing, poster dimensions, award disbursement details) |
| Footnote | Regular (400) | 12px | 1.0 | 0 | Award card fine-print under dollar amount (e.g. "towards Registration and Travel") |
| Award amount | ExtraBold (800) | 16px | normal | 0 | Dollar figures ("$1,500 USD", "$7,500 USD") in `#C94714` |
| Contact label | Bold (700) | 16px | 1.0 | 5.12px, UPPERCASE | GENERAL / SUBMISSIONS / VENUE |

**Notes:**
- The abstract example card mixes bold section labels ("Background:", "Materials and methods:", "Results:", "Conclusions:") with regular body text and one **underlined** author name ("A.B. James") — replicate the underline exactly (`text-decoration: underline`, `decoration-from-font`).
- List items throughout this page use **inline bold spans** for key terms rather than separate bold lines — build these as rich text / mixed-weight inline runs, not as separate typography components.

### 1.3 Spacing & Layout Scale
Same scale as Home/Programme: `4px, 8px, 12px, 20px, 23px, 24px, 32px, 40px, 80px, 120px`.

- Page content padding: **120px** left/right, **80px** top, **120px** bottom on the main content block.
- Content max-width: **1200px** (divider/heading rows use 1197–1205px), inner text columns constrained to **795px**.
- Vertical rhythm between major content blocks (Submit an Abstract → stat cards → Abstract Guidelines → Example card → Oral/Poster → Travel Awards): **40px** gap.
- Gap between heading and divider rule within each section: **32px**.
- Gap between sub-heading and body copy within a block: **12px**.

### 1.4 Border Radius
| Radius | Usage |
|---|---|
| 2px (bar height) / 8px (bar radius) | Divider rules under "Submissions"/"Travel Awards"/"Contact" headings |
| 8px | Award dollar-amount callout boxes |
| 12px | Stat cards, Example card outer container, Example card inner (left) panel, Award A/B cards |
| 100px (pill) | Register button |

### 1.5 Effects / Borders
- **Example card outer wrapper:** `2px solid #F17B4C` border, radius 12px, padding 23px — contains the example abstract panel + format rules panel side by side.
- **Award callout box:** `2px solid #C94714` border, radius 8px, padding 20px, fixed width 227px — holds the dollar amount + fine print.
- No blur/glass effects on this page (unlike Home/Programme hero sections) — this is a fully light, flat page with no photo background.

---

## 2. Global Structure

This page is a **light, single-background page** (no hero photo) followed by the shared dark Contact footer:

1. **Main content block** (bg `#FAF5F1`, height ~3226px) — nav bar, then four stacked content sections:
   - Submissions header + "Submit an Abstract"
   - Key dates stat cards
   - "Abstract Guidelines"
   - Abstract format example + "Oral and Poster Presentations"
   - "Travel Awards" header + two award cards
2. **Section 6 — Contact** (dark variant, bg `#1F4357`, height 458px) — identical to the homepage's dark Contact section.

---

## 3. Section-by-Section Breakdown

### 3.1 Navigation Bar
- **Layout:** flex row, `justify-content: space-between`, `align-items: center`, width 1200px.
- **Left:** circular pinwheel/logo mark, 54×54px.
- **Right:** flex row, gap 40px:
  - Nav links group: flex row, gap 48px, SemiBold 16px:
    - Home — `#1F4357`
    - Programme — `#1F4357`
    - **Submissions — `#F17B4C` (active state — current page)**
    - Venue — `#1F4357`
    - FAQ — `#1F4357`
  - Register button: pill, bg `#C94714`, text `#FAF5F1`, padding `8px 24px`, radius 100px, SemiBold 16px.
  - **Note:** this page's nav uses dark text on a light background (since there's no photo hero) — different color mapping from Home/Programme's light-on-dark nav, but same structure/spacing.

### 3.2 Page Header: "Submissions"
- **Container:** flex column, gap 32px, right-aligned (`items-end`), width 1197px.
- **Title:** "Submissions" — Header 2, `#C94714`.
- **Divider rule:** 2px height, `#C94714`, width 1197px, radius 8px.

### 3.3 "Submit an Abstract"
- **Container:** width 795px, flex column, gap 12px:
  - Sub-heading: "Submit an Abstract" — Header 4 (24px ExtraBold), `#C94714`.
  - Body paragraph: Regular 16px, `#1F4357`, line-height 1.5 — invitation copy.
  - Contact line: ExtraBold 16px, `#1F4357` — "Submit Abstracts to: " (label) + "Millie.Williams@ucl.ac.uk" (same weight, treat email as a mailto link at build time).

### 3.4 Key Dates — Stat Cards
- **Layout:** flex row, gap 12px, width 795px, 3 equal-width cards (`flex: 1 0 0`).
- Each card: bg `#FFE4D0`, padding 32px, radius 12px, flex column, gap 12px:
  - Label: ExtraBold 16px, `#C94714` (e.g. "Submission Opens:", "Submission Closes:", "Acceptance Notifications:").
  - Value: ExtraBold 16px, `#1F4357` (e.g. "Feb. 14, 2025", "June 15, 2025", "June 30, 2025").
- **Note:** structurally identical to the homepage's "overview-stats" component, but 2-line label/value pairs instead of number+label+description triplets — treat as a variant of the same stat-card component.

### 3.5 "Abstract Guidelines"
- **Container:** width 795px, flex column, gap 12px:
  - Sub-heading: "Abstract Guidelines" — Header 4, `#C94714`.
  - **Bulleted list** (disc markers, 24px indent, Regular 16px `#1F4357`, line-height 1.5, no gap between items):
    1. Abstracts should report original investigations; case reports will not be accepted.
    2. Abstracts will be reviewed by the Abstract Selection Committee.
    3. Abstract author will receive an email notification of abstract acceptance (oral and poster presentations) at the end of June.
    4. For oral presentations, the abstract author will be asked to give a 10 minute presentation (7-minute talk followed by 3 minutes for Q&A).
    5. Poster size and instructions will be included in the acceptance email (and can be found below).
    6. Please provide the name of presenter and address for correspondence (including affiliation, email and contact number) in the email.
    7. Two workshop travel awards are available to fellows and junior faculty with the highest ranked abstracts. See Workshop Travel Awards for Young Investigators below.

### 3.6 Abstract Format Example Card
- **Outer wrapper:** full width (795px content column), border `2px solid #F17B4C`, radius 12px, padding 23px, flex row, gap 20px, centered content.
- **Left panel — Example abstract** (bg `#FFE4D0`, padding 32px, radius 12px, width 788px, flex column, gap 24px, centered):
  - "Example" label — ExtraBold 16px, `#F17B4C`.
  - **Mock abstract body** (Regular 16px `#1F4357`, line-height 1.5, mixed inline weights):
    - Title (all caps, ExtraBold): "STUDYING THE PATHOGENESIS OF SYSTEMIC SCLEROSIS"
    - Author line: "A.B. James" (**underlined**), followed by regular-weight ", C. Bloggs, D. Another & E.F. Final"
    - Affiliation line (regular): "Institution/University, Department/Division, Centre/Laboratory, Address, State/County, City, Area/Post code, Country"
    - Blank line
    - "**Background:**" (bold label) + body paragraph (Systemic Sclerosis definition text)
    - Blank line
    - "**Materials and methods:**" (bold label, empty body — placeholder for author content)
    - "**Results:**" (bold label, empty body)
    - "**Conclusions:**" (bold label, empty body)
- **Right panel — Format rules** (flex column, gap 12px, `flex: 1 0 0`, text `#1F4357`):
  - "Format" — Header 5 style (ExtraBold 16px).
  - **Bulleted list** (disc markers, Regular 16px, line-height 1.5, inline bold emphasis on key terms):
    1. **1 page,** A4 size.
    2. Must be submitted in **English**.
    3. Must not exceed **500 words** (text in background to conclusions). See format example below.
    4. Word count does not include: title, author name, author affiliations, acknowledgments (including working group) or abstract number.
    5. Title must not exceed **25 words** and should be in **UPPER CASE**.
    6. Must be sent in a Microsoft Word document; Text should be **Arial 11-point font** only (please type in Arial do not convert afterwards).
    7. Underline contributing author.

### 3.7 "Oral and Poster Presentations"
- **Container:** width 795px, flex column, gap 40px:
  - **Heading block** (gap 12px): "Oral and Poster Presentations" — Header 4, `#C94714`; body paragraph, Regular 16px `#1F4357` — acceptance notification timing copy.
  - **Two-column row** (flex row, gap 20px, 2 equal columns, each `flex: 1 0 0`, gap 12px):
    - **Oral Presentation** column:
      - Sub-head: ExtraBold 16px, `#1F4357`.
      - Body: Regular 16px `#1F4357`, line-height 1.5 — "Abstract author will be invited to give a 10-minute presentation during the meeting."
      - Italic annotation: "7-minute talk, followed by 3 minutes for questions" in `#49697C` 16px italic, trailing period in `#5E92AF`.
    - **Poster Presentation** column:
      - Sub-head: ExtraBold 16px, `#1F4357`.
      - Body: Regular 16px `#1F4357` — "Abstract author will be invited to provide a poster of their abstract for viewing/presentation during the meeting."
      - Italic annotation block, `#49697C` 16px italic: "Poster Size: 1m x 1m" / "Poster board: 1m x 1m" / "Mounting fixtures will be available." (3 lines, `<br>` separated, not separate paragraphs).

### 3.8 "Travel Awards" Section
- **Header block** (width 1205px, flex column, gap 32px, right-aligned):
  - Title: "Travel Awards" — Header 2, `#C94714`.
  - Divider rule: 2px, `#C94714`, width 1197px, radius 8px.
- **Intro sub-block** (width 795px, flex column, gap 12px):
  - Sub-heading: "Travel Awards for Young Investigators" — Header 4, `#C94714`.
  - Body paragraph: Regular 16px, `#1F4357` — award overview/instructions copy.
  - Contact line: ExtraBold 16px `#1F4357` — "A supporting letter, verifying status from your programme director, must be sent to " + "Millie.Williams@ucl.ac.uk " (mailto link) + "before your application is confirmed".
- **Award cards row** (flex row, gap 20px, 2 equal columns, each `flex: 1 0 0`):
  - **Award A card** (bg `#FFE4D0`, padding 40px, radius 12px, flex column, gap 24px):
    - **Top row** (flex row, gap 32px):
      - Left (flex `1 0 0`, gap 12px):
        - Eyebrow: "AWARD A" — Bold 16px, `#C94714`, uppercase, tracked 5.12px.
        - Title: "SCTC Workshop Travel Awards" — Header 4 (24px ExtraBold), `#1F4357`.
        - Body: Regular 16px `#1F4357` — "Five (5) awards will be given to eligible applicants with highly scored abstracts for participating in the 19th International Workshop on Scleroderma Research in Cambridge, England (July 2025)."
      - Right — **amount callout box** (border `2px solid #C94714`, radius 8px, padding 20px, fixed width 227px):
        - Amount: ExtraBold 16px, `#C94714` — "$1,500 USD"
        - Fine print: Regular 12px, `#49697C` — "towards Registration and Travel"
    - **Eligibility block** (full width):
      - "**Eligible applicants are:**" (bold label) + bulleted list (disc): Postgraduate and medical students / Clinical and basic science research fellows / Early career investigators.
      - "**Additional eligibility criteria:**" (bold label) + numbered list (1–3): first/presenting author requirement; one author per abstract; one awardee per institution.
  - **Award B card** — identical structure:
    - Eyebrow: "AWARD B" — same styling.
    - Title: "Kao Family Foundation: SCTC Young Investigator Travel Awards" — Header 4.
    - Body: "Up to Ten (10) awards will be given to eligible applicants with highly scored abstracts for participating in the 19th International Workshop on Scleroderma Research in Cambridge, England (July 2025) and the American College of Rheumatology Annual Convergence Meeting in Chicago, USA (October 2025)."
    - Amount callout: "$7,500 USD" + fine print (longer, `#49697C` 12px): "Awards will be disbursed by the SCTC with $2,500 given prior to the International Workshop on Scleroderma Research meeting and $5,000 prior to the American College of Rheumatology Annual Convergence Meeting in 2025."
    - Eligibility list: Clinical Fellows / Junior faculty (1st–2nd year of practice) / PhD students / Postdoctoral researchers (1st–2nd year post-PhD).
    - Additional criteria (numbered, 1–4): first/presenting author; one author per abstract; one awardee per institution; **applicants may only be selected for this award once** (extra 4th rule not present on Award A).

### 3.9 Section 6 — Contact (dark variant)
- **Background:** `#1F4357` (matches homepage's dark Contact section — **not** the light variant used on the Programme page).
- **Outer padding:** 120px all sides. Flex column, gap 40px, left-aligned. Height 458px.
- **Heading:** "Contact" — Header 2, `#FAF5F1`.
- **Divider rule:** 2px, `#FAF5F1`, full width.
- **Contact info row:** flex row, `justify-content: space-between`, width 1137px:
  - **GENERAL** column: label Bold 16px `#FFC9A4` uppercase tracked 5.12px + email Regular 16px `#FAF5F1`.
  - **SUBMISSIONS** column: identical pattern.
  - **VENUE** column: label + two-line address, Regular 16px `#FAF5F1`: "Boston Marriot" / "110 Hunington Ave. Boston, MA".

---

## 4. Components Summary (for reuse against Home/Programme specs)

| Component | Same as other pages? | Notes |
|---|---|---|
| Nav bar | ⚠️ Same structure, different color mapping | Dark text on light bg here (vs. light text on dark bg for Home/Programme's photo hero); introduces new active-state color `#F17B4C` |
| Section heading + divider | ✅ Identical pattern | Title + 2px rule, reused for "Submissions," "Travel Awards" |
| Stat card | ⚠️ Variant of homepage's stat-card | Label/value pair instead of number/label/description triplet — same bg/padding/radius |
| Contact section | ✅ Identical (dark variant) | Matches homepage's Contact exactly — confirms dark variant is the "default," light variant on Programme page is the outlier |
| Register button | ✅ Identical | Pill, `#C94714` bg / `#FAF5F1` text here (vs. `#FFC9A4`/`#1F4357` on Home/Programme) — button component should support a color prop |
| Award/CTA card | ⚠️ New pattern | Similar bg/radius/padding to homepage's "Attend the workshop" CTA cards but with an added bordered callout box and rich list content — treat as its own component, not a strict reuse |

---

## 5. Assets Referenced
- Logo mark: circular pinwheel icon, 54×54px, top-left of nav — identical asset reused from Home/Programme.
- No photographic imagery on this page — fully flat/light design.

---

## 6. Build Notes for Claude Design
1. **New color token to add to the shared palette:** `Orange/2` `#F17B4C` — used for active-nav-link state and the example-card accent border/label. Add this alongside the existing Orange/00–Orange/3 scale.
2. **Nav bar needs a light/dark theme prop.** This page's nav sits on a light background with dark text and a dark-bg Register button, while Home/Programme's nav sits on a photo with light text and a light-bg Register button. Build one Nav component with a `theme` variant rather than duplicating markup.
3. **Rich/inline-formatted text is heavy on this page** — bold terms inside list items and paragraphs, italic muted-color annotations, and one underlined name. Use a rich-text renderer or structured content model (e.g. markdown-lite with `**bold**`, `*italic*`, `_underline_` support) rather than hardcoding each span, since this content will likely be edited by non-developers (event organizers) over time.
4. **Contact section on this page matches the homepage's dark variant exactly** — reuse that component as-is; do not use the light variant built for the Programme page.
5. The **abstract format example card** is dense reference content (a filled-in mock abstract). Confirm with content owners whether this should remain static copy or become a downloadable template — currently it's inline text only.
6. Award callout boxes have a **fixed width of 227px** regardless of card width — keep this fixed rather than making it responsive/proportional, per the source file.
7. Note the **eligibility criteria list length differs** between Award A (3 items) and Award B (4 items) — don't assume symmetry when building the repeating award-card component; make the list length dynamic.

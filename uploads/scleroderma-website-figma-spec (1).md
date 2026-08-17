# Scleroderma Website — Figma Design Spec
**Source:** Figma file "Scleroderma Website" — Frame: `Desktop - 28` (node 190:72)
**Canvas size:** 1445px wide × 4617px tall (desktop breakpoint)
**Purpose:** Exact build spec for handing off to a developer / Claude Design. Every color, font, spacing value, radius, and layout rule below is pulled directly from the Figma file — build to these values precisely.

---

## 1. Design Tokens

### 1.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `Orange/00` (cream/bg) | `#FAF5F1` | Page background, light text on dark sections, dividers on dark sections |
| `Orange/0` (card bg) | `#FFE4D0` | Card backgrounds (stat cards, CTA cards, committee cards, "Organizing Committee" section bg) |
| `Orange/1` | `#FFC9A4` | Badge backgrounds ("Co-chair" pill), nav "Home" active link, time labels on dark cards, contact section labels, hero date/location pill text |
| `Orange/3` (primary accent) | `#C94714` | Section headings ("About", "Organizing Committee"), stat numbers, divider rules, eyebrow labels ("EXPERIENCE"/"CONTRIBUTE"), primary buttons bg |
| `Blue/0` | `#C6DFEF` | Small "location" tag text on programme cards (e.g. "Boston", "London") |
| `Blue/3` (primary text/dark) | `#1F4357` | Body text on light sections, headings on cards, Contact section background, nav pill text on hero button |
| Overlay dark (hero) | `rgba(19,44,60,0.9)` → `rgba(23,52,70,0.7)` | Diagonal gradient overlay on hero photo, 109.57° angle |
| Overlay dark (programme) | `rgba(31,67,87,0.8)` | Flat overlay on Programme section background photo |
| Glass card fill | `rgba(250,245,241,0.1)` | Programme schedule card background (with `backdrop-blur: 25px`) |
| Glass card border | `#FAF5F1` | 2px solid border on the programme schedule card |
| Pill chip fill (translucent) | `rgba(250,245,241,0.2)` | "Session 1 / Interstitial Lung Disease" tab chips inside programme card |
| Hero date/location pill overlay | `#384951` (blend mode: overlay) | Background of the two hero pills, mixed with underlying photo |
| Hero pill text | `#FAEDE3` | Text inside the two hero date/location pills |

### 1.2 Typography

**Font family (all text):** `Host Grotesk`

| Style name | Weight | Size | Line height | Letter spacing | Used for |
|---|---|---|---|---|---|
| Header 1 (hero) | ExtraBold (800) | 120px | 1.0 (normal) | 0 | "Scleroderma" / "Research" hero title |
| Header 1b (hero eyebrow line) | ExtraBold (800) | 32px | 1.0 (normal) | 0 | "20th International Workshop on" |
| Header 2 | ExtraBold (800) | 48px | 1.15 | 0 | Section titles: "About", "Programme", "Organizing Committee", "Contact" |
| Header 3 | ExtraBold (800) | 32px | 1.0 | 0 | Card titles: "Attend the workshop", "Submit an Abstract" |
| Header 5 | ExtraBold (800) | 16px | 1.0 | 0 | Stat card labels ("Scientific Exchange"), schedule item titles, committee names |
| Label / eyebrow | Bold (700) | 16px | 1.0 | **5.12px**, UPPERCASE | "EXPERIENCE", "CONTRIBUTE", nav "Register" (no letterspacing on nav actually — see note), time labels ("11:30"), contact column labels ("GENERAL", "SUBMISSIONS", "VENUE"), hero pills ("26-30 JULY, 2027", "BOSTON, MA") |
| Button Text | SemiBold (600) | 16px | 1.0 | 0 | All button labels |
| Body | Regular (400) | 16px | 1.5 | 0 | Paragraph copy throughout |
| Footnote | Regular (400) | 12px | 1.0 (varies) | 0 | Stat card descriptions, speaker names, small card body copy |
| Micro | Regular (400) | 10px | 1.0 | 0 | Committee member affiliation lines (4-across cards) |

**Notes:**
- Stat numbers ("5 Days", "300+", "40+") use ExtraBold 32px in `#C94714`.
- Nav links use SemiBold 16px, normal case, no letterspacing — visually distinct from the uppercase/tracked "eyebrow" label style.

### 1.3 Spacing & Layout Scale
Consistent spacing tokens observed across the file:
- `4px, 8px, 12px, 20px, 24px, 28px, 32px, 40px, 64px, 80px, 120px`

Section outer padding (all main content sections): **120px** on all sides (top/right/bottom/left), except the Splash/hero section which uses **120px top / 80px left-right** for the nav bar specifically.

Page horizontal content max-width: **1200px** (centered container), with a 1445px full-bleed canvas (sections extend edge-to-edge with background color, inner content constrained to 1200/1205px).

### 1.4 Border Radius
| Radius | Usage |
|---|---|
| 2px (thin bar) | Divider rules under section headings |
| 12px | Cards (stat cards, CTA cards, programme schedule card, committee cards, image containers) |
| 20px | Tab-chip group wrapper (Session pills) |
| 30px | Day-selector tab background |
| 100px (pill) | All buttons, hero date/location pills |

### 1.5 Effects
- **Backdrop blur:** 25px on the programme schedule glass card.
- **Gradient overlay (hero):** linear-gradient at 109.57°, from `rgba(19,44,60,0.9)` at 2.36% to `rgba(23,52,70,0.7)` at 94.34%, over the hero photograph.
- **Flat overlay (programme section):** `rgba(31,67,87,0.8)` solid over background photo.
- **Blend mode:** `mix-blend-mode: overlay` used on the two hero pills' `#384951` fill so it tints the photo underneath.

---

## 2. Global Structure

The page is a single vertically-stacked layout (CSS Grid, 1 column / 5 rows) with distinct full-width sections, in this order:

1. **Section 1 — Splash / Hero** (height 857px, photo background)
2. **Section 2 — About** (background `#FAF5F1`)
3. **Section 3 — Programme** (photo background with dark overlay)
4. **Section 4 — Organizing Committee** (background `#FFE4D0`)
5. **Section 6 — Contact** (background `#1F4357`, dark footer-style section)

*(Note: the Figma file's internal naming skips "Section 5" — that's expected, not a build error.)*

Global nav bar and hero headline/pills are absolutely positioned on top of Section 1.

---

## 3. Section-by-Section Breakdown

### 3.1 Navigation Bar (sits inside Splash section)
- **Position:** absolute, top 80px, horizontally centered within 1200px content area (120px side margins).
- **Layout:** flex row, `justify-content: space-between`, `align-items: center`, full 1200px width.
- **Left:** circular pinwheel/logo mark, 54×54px.
- **Right:** flex row, gap 40px, align-center, containing:
  - Nav links group: flex row, gap 48px, font SemiBold 16px:
    - Home (color `#FFC9A4` — active state)
    - Programme (color `#FAF5F1`)
    - Submissions (color `#FAF5F1`)
    - Venue (color `#FAF5F1`)
    - FAQ (color `#FAF5F1`)
  - Register button: pill, bg `#FFC9A4`, text `#1F4357`, padding `8px 24px`, radius 100px, SemiBold 16px, label "Register".

### 3.2 Hero Content (Section 1: Splash)
- **Background:** full-bleed photo (Boston skyline), `object-fit: cover`, extends beyond frame bounds (-7px/-62px offset, 1453×1234px) for parallax-style overflow crop. Gradient overlay applied on top (see 1.5).
- **Content block position:** absolute, left 113px, top 255px, width 803px, flex column, gap 64px.
  - **Eyebrow line:** "20th International Workshop on" — ExtraBold 32px, `#FAF5F1`, in a small padded wrapper (`px: 8px`).
  - **Title:** two-line stacked heading, ExtraBold 120px, `#FAF5F1`, gap 48px between lines:
    - "Scleroderma"
    - "Research"
  - **Pills row:** flex row, gap 20px:
    - Pill 1: "26-30 JULY, 2027" — padding `12px 24px`, radius 100px, bg `#384951` @ overlay blend, text `#FAEDE3`, Bold 16px, uppercase, letter-spacing 5.12px.
    - Pill 2: "BOSTON, MA" — same styling.
- **Section height:** 857px total.

### 3.3 Section 2 — About
- **Background:** `#FAF5F1`. Outer padding: 120px all sides. Inner content: flex column, gap 80px, items aligned to the right edge (content itself is left-aligned text but the whole block is right-justified within — replicate exact alignment from the file: `items-end` on the outer wrapper, `items-start`/`items-end` per sub-block as noted).
- **Heading block** (gap 32px, width 1205px):
  1. "About" — Header 2 style, `#C94714`.
  2. Divider rule — 2px height, `#C94714`, width 1197px, radius 8px.
  3. **Right-aligned content column**, width 795px, gap 40px:
     - **Overview stats row** (`overview-stats`): flex row, gap 12px, height 200px, 3 equal-width cards (257px each, `flex: 1 0 0`):
       - Each card: bg `#FFE4D0`, padding 32px, radius 12px, flex column, gap 12px.
         - Stat number: ExtraBold 32px, `#C94714` (e.g. "5 Days", "300+", "40+").
         - Sub-block, gap 8px:
           - Stat label: ExtraBold 16px, `#1F4357` (e.g. "Scientific Exchange", "Global Delegates", "Travel Grants").
           - Stat description: Regular 12px, `#1F4357` (2–3 line descriptive copy).
     - **Intro paragraph:** Regular 16px, `#1F4357`, line-height 1.5, full width — workshop overview copy.
     - **Feature image:** 795×391px, radius 12px, `object-fit: cover` (conference/auditorium photo), slight vertical crop offset in source.
     - **Second paragraph block:** two stacked paragraphs, Regular 16px, `#1F4357`, line-height 1.5, no gap between the two `<p>`s (use `margin-bottom: 0` on first).
- **CTA cards row** (width 1200px, flex row, gap 12px, radius 12px, `overflow: hidden` on the group so the two cards' corners combine into one rounded rect):
  - **Card A — "Attend the workshop"**: bg `#FFE4D0`, padding 40px, flex `1 0 0`, flex column gap 24px:
    - Eyebrow: "EXPERIENCE" — Bold 16px, `#C94714`, uppercase, letter-spacing 5.12px.
    - Title: "Attend the workshop" — ExtraBold 32px, `#1F4357`.
    - Body: Regular 16px, `#1F4357`, line-height 1.5 (registration deadline copy).
    - Button: pill, bg `#C94714`, text `#FFE4D0`, SemiBold 16px, padding `8px 24px`, radius 100px, label "Button" (placeholder — should read e.g. "Register").
  - **Card B — "Submit an Abstract"**: identical structure/styling, bg `#FFE4D0`, eyebrow "CONTRIBUTE", title "Submit an Abstract", same body copy pattern, same button styling.

### 3.4 Section 3 — Programme
- **Background:** full-bleed photo, `object-fit: cover`, with flat overlay `rgba(31,67,87,0.8)` on top. Outer padding 120px, content flex column gap 32px, right-aligned container (`items-end`).
- **Heading block:**
  1. "Programme" — Header 2, `#FAF5F1`.
  2. Divider rule — 2px, `#FAF5F1`, width 1197px, radius 8px.
- **Schedule widget** (width 795px, height 500px, radius 12px, `overflow: hidden`, flex column gap 12px):
  - **Day tabs row:** flex row, gap 4px, 5 equal segments (`July 26`–`July 30`):
    - Active tab ("July 26"): bg `#FAF5F1`, radius 30px, text `#1F4357`, ExtraBold 16px, padding `12px 10px`, centered.
    - Inactive tabs: no background, text `#FAF5F1`, ExtraBold 16px, padding `12px 10px`, centered.
  - **Glass schedule card:** flex `1`, height 443px, padding 32px, radius 12px, gap 28px, flex column, bg `rgba(250,245,241,0.1)`, `backdrop-blur: 25px`, border `2px solid #FAF5F1`.
    - **Session header chip group** (repeats per session, e.g. "Session 1" / "Session 2"): flex row, gap 2px, radius 20px, `overflow: hidden`:
      - Left chip: bg `rgba(250,245,241,0.2)`, padding `8px 20px`, radius `12px 0 0 12px`, text "Session 1", ExtraBold 16px `#FAF5F1`.
      - Right chip (flex-fill): bg `rgba(250,245,241,0.2)`, padding `8px 20px`, radius `0 12px 12px 0`, text "Interstitial Lung Disease", ExtraBold 16px `#FAF5F1`.
    - **Sub-session title:** ExtraBold 16px, `#FAF5F1` (e.g. "Cell Based Therapies Part 1 | Emerging immune cell Therapies").
    - **Speaker tag row:** flex row gap 8px; each speaker = name (Regular 12px `#FAF5F1`) + location chip (flex gap 4px: small vector icon 12×9.12px + location label Bold 12px `#C6DFEF`).
    - **Schedule rows** (repeats, flex row gap 32px, align items start):
      - Time label: width 70px, text-align right, uppercase, letter-spacing 5.12px, `#FFC9A4`, weight varies **Bold or SemiBold 16px** depending on emphasis (first item of a block is SemiBold, subsequent are Bold — replicate as shown).
      - Content column (flex `1`, gap 8px): talk title (Regular 16px `#FAF5F1`, line-height 1.5) + optional speaker/location tag row (same pattern as above, 12px).
    - This day-1 card contains 2 sessions (Session 1, Session 2) each with 3 schedule rows — replicate the repeating pattern for other days' content via tab switching (interactive tab state; only Day 1 content is shown in this design).
- **Footer link:** "See Full Programme" — ExtraBold 16px, `#FAF5F1`, right-aligned under the widget.

### 3.5 Section 4 — Organizing Committee
- **Background:** `#FFE4D0`. Outer padding 120px, content centered (`items-center`, `justify-center`), inner block width 1200px, flex column gap 32px, right-aligned (`items-end`).
- **Heading block:**
  1. "Organizing Committee" — Header 2, `#C94714`.
  2. Divider rule — 2px, `#C94714`, width 1197px, radius 8px.
- **Committee grid** (flex column, gap 8px, radius 12px, `overflow: hidden`, right-aligned):
  - **Row 1 — Co-chairs** (flex row, gap 8px, 2 equal columns):
    - Each card: bg `#FFE4D0`, padding 20px, radius 12px, flex column gap 12px:
      - Name row: flex row gap 12px, align-center — Name (ExtraBold 16px `#1F4357`) + "Co-chair" badge (pill, bg `#FFC9A4`, padding `4px 12px`, radius 30px, text Bold 12px `#1F4357`).
      - Bio: Regular 12px, `#1F4357`, full width.
  - **Rows 2–4 — Committee members**, 4-across grid (flex row gap 8px, 4 equal columns per row, 3 rows total = 12 member cards):
    - Each card: bg `#FFE4D0`, padding 12px, radius 12px, flex column gap 4px:
      - Name: ExtraBold 16px, `#1F4357`.
      - Affiliation: Regular 10px, `#1F4357`.
    - *(Note: Figma source repeats placeholder content "Carol Feghali-Bostwick, PhD" across most cells — treat as placeholder/lorem data; wire real committee member data at build time.)*

### 3.6 Section 6 — Contact (footer)
- **Background:** `#1F4357` (dark). Outer padding 120px, flex column gap 40px, left-aligned.
- **Heading:** "Contact" — Header 2, `#FAF5F1`, contained in a 386px-wide block.
- **Divider rule:** 2px height, `#FAF5F1`, full width (no radius specified here — straight edge).
- **Contact info row:** flex row, `justify-content: space-between`, width 1137px:
  - **GENERAL** column (gap 12px): label Bold 16px `#FFC9A4` uppercase tracked 5.12px + email Regular 16px `#FAF5F1` line-height 1.5.
  - **SUBMISSIONS** column: identical pattern, same email address.
  - **VENUE** column: label same style + two-line address block (Regular 16px `#FAF5F1`, line-height 1.5): "Boston Marriot" / "110 Hunington Ave. Boston, MA".

---

## 4. Components Summary (for reusable component build)

| Component | Variants | Key styles |
|---|---|---|
| **Button (pill)** | Primary (dark bg `#C94714` / light text `#FFE4D0`), Secondary/light (bg `#FFC9A4` / text `#1F4357`) | radius 100px, padding `8px 24px`, SemiBold 16px |
| **Stat Card** | 3-up in About section | bg `#FFE4D0`, radius 12px, padding 32px, big number + label + description |
| **CTA Card** | 2-up (Attend / Submit) | bg `#FFE4D0`, padding 40px, eyebrow + H3 + body + button |
| **Badge/Pill tag** | "Co-chair" tag, location tags | small rounded pill, Bold/Regular 12px |
| **Committee Card** | Chair (2-up, larger) / Member (4-up, compact) | bg `#FFE4D0`, radius 12px |
| **Day Tab** | Active / Inactive | radius 30px active pill vs plain text |
| **Schedule Row** | Time + title (+ optional speaker tag) | 70px time column + flexible content column |
| **Nav Link** | Active (`#FFC9A4`) / Inactive (`#FAF5F1`) | SemiBold 16px |
| **Section Divider Rule** | Light-on-dark / Dark-on-light | 2px bar, radius 8px (except footer, no radius) |

---

## 5. Assets Referenced
- Hero background photo: Boston skyline (full-bleed, cropped/overflowing).
- About section feature photo: conference/auditorium interior with flags.
- Programme section background photo: city skyline (used with dark overlay).
- Location-tag vector icon (small pin/marker, ~9×12px), used in speaker/location tags.
- Logo mark: circular pinwheel icon, 54×54px, top-left of nav.

*(All images should be sourced as high-resolution originals for production — Figma-exported assets are temporary/expiring links and are for reference only.)*

---

## 6. Build Notes for Claude Design
1. Treat **Host Grotesk** as the sole typeface (weights needed: Regular 400, SemiBold 600, Bold 700, ExtraBold 800). Load via Google Fonts or self-hosted equivalent if Host Grotesk isn't available — do not substitute a visually different font.
2. All section padding is **120px** — keep this consistent even when adapting to responsive breakpoints (scale down proportionally on tablet/mobile, e.g. 64px/32px).
3. Maintain the **1200px max content width**, centered, across all sections for content alignment consistency.
4. Replicate the **letter-spacing 5.12px + uppercase** treatment exactly on all "eyebrow"/label text (EXPERIENCE, CONTRIBUTE, GENERAL, SUBMISSIONS, VENUE, time stamps, hero date/location pills) — this is a distinct, repeated micro-pattern throughout the design and central to its visual identity.
5. The Programme section's day-tab bar should be built as an interactive tab component (5 tabs, only "July 26" content is provided in the source — other days will need real content wired in later, reuse the same card structure).
6. Preserve exact color pairings per section (don't mix, e.g., don't apply `#C94714` heading style to the dark Programme/Contact sections — those use `#FAF5F1` headings).
7. Buttons currently show placeholder label "Button" in two CTA cards in Figma — replace with real copy ("Register", "Submit Abstract", etc.) at build time.
8. Organizing Committee grid has placeholder/duplicate names in the source file — replace with real committee roster data; keep the grid structure (1 row of 2 large chair cards + 3 rows of 4 compact member cards) intact.

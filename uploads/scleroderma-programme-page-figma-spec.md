# Scleroderma Website — Programme Page Figma Spec
**Source:** Figma file "Scleroderma Website" — Frame: `Desktop - 34` (node 200:1882)
**Canvas size:** 1445px wide × 2248px tall (desktop breakpoint)
**Purpose:** Exact build spec for handing off to a developer / Claude Design. Every color, font, spacing value, radius, and layout rule below is pulled directly from the Figma file — build to these values precisely. This page shares its design system with the site's homepage (see companion spec `scleroderma-website-figma-spec.md`) — token names below match that file where the same tokens are reused.

---

## 1. Design Tokens

### 1.1 Color Palette

| Token | Hex | Usage on this page |
|---|---|---|
| `Orange/00` (cream/bg) | `#FAF5F1` | Page/body wrapper bg, all light text on the dark hero/programme block (nav links, "Programme" heading, divider, intro copy, schedule text, "Download PDF" link) |
| `Orange/0` (card bg) | `#FFE4D0` | Contact section background (this page's Contact variant is **light**, unlike the homepage's dark Contact section) |
| `Orange/1` | `#FFC9A4` | Active nav link ("Programme"), active day-tab bg is `#FAF5F1` — but `#FFC9A4` is used for time-stamp labels in the schedule ("11:30", "12:30" etc.) |
| `Orange/3` (primary accent) | `#C94714` | Contact section labels ("GENERAL", "SUBMISSIONS", "VENUE") — note: on this page's light Contact variant, labels use `#C94714`, not `#FFC9A4` as on the homepage's dark Contact section |
| `Blue/0` | `#C6DFEF` | Location tag text on schedule rows (e.g. "Boston", "London", "Houston") |
| `Blue/3` (primary text/dark) | `#1F4357` | Active day-tab text, Contact heading + body copy + divider bg (this page's Contact section uses dark text on light bg — inverse of homepage) |
| Overlay dark (hero/programme background) | `rgba(31,67,87,0.8)` → `rgba(31,67,87,0.95)` | Diagonal gradient overlay on the full-page background photo, **-79.81° angle**, from 1.8% to 92.6% |
| Glass card fill | `rgba(250,245,241,0.1)` | Schedule detail card background (with `backdrop-blur: 25px`) |
| Glass card border | `#FAF5F1` | 2px solid border on the schedule detail card |
| Pill chip fill (translucent) | `rgba(250,245,241,0.2)` | "Session 1 / Interstitial Lung Disease" tab chips inside the schedule card |

### 1.2 Typography
**Font family (all text):** `Host Grotesk`

| Style name | Weight | Size | Line height | Letter spacing | Used for |
|---|---|---|---|---|---|
| Header 2 | ExtraBold (800) | 48px | 1.15 | 0 | Page title "Programme"; "Contact" section title |
| Header 4 | ExtraBold (800) | 24px | 1.0 | 0 | Sub-heading "5-day Research Meeting" |
| Header 5 | ExtraBold (800) | 16px | 1.0 | 0 | "Highlights" label, schedule item titles, day-tab labels, "Download a PDF of the Programme" link, session chip text |
| Label / eyebrow | Bold (700) | 16px | 1.0 | 5.12px, UPPERCASE | Time labels ("11:30" etc.), Contact column labels ("GENERAL", "SUBMISSIONS", "VENUE") |
| Body | Regular (400) | 16px | 1.5 | 0 | Meeting date/location line, "Highlights" paragraph copy, schedule talk titles, Contact email/address copy |
| Footnote | Regular (400) | 12px | 1.0 | 0 | Speaker names, location tags on schedule rows |

**Notes:**
- Time labels alternate weight exactly as on the homepage Programme section: the **first** time slot in a session block is SemiBold, subsequent slots are Bold — replicate this pattern.
- "Download a PDF of the Programme" link is ExtraBold 16px, `#FAF5F1`, underlined (`text-decoration: underline`, `decoration-from-font`), centered.

### 1.3 Spacing & Layout Scale
Same scale as homepage: `4px, 8px, 12px, 20px, 24px, 28px, 32px, 40px, 48px, 80px, 120px`.

- Page content padding: **120px** left/right, **80px** top, **120px** bottom on the main hero/programme block.
- Content max-width: **1200px**, centered.
- Schedule widget width: **795px** (matches homepage Programme widget), but taller here — full detail card height **792px** (vs 443px preview on homepage) since this page shows the complete day's schedule rather than a teaser.

### 1.4 Border Radius
| Radius | Usage |
|---|---|
| 2px | Divider rule under "Programme" heading (radius 8px on the bar itself) |
| 12px | Schedule day-tab wrapper, glass detail card, session chip group corners |
| 20px | Session chip group wrapper (outer) |
| 30px | Active day-tab pill |
| 100px (pill) | Nav "Register" button |

### 1.5 Effects
- **Backdrop blur:** 25px on the schedule glass card.
- **Gradient overlay (page background):** linear-gradient at **-79.81°**, `rgba(31,67,87,0.8)` at 1.8% → `rgba(31,67,87,0.95)` at 92.6%, laid over a full-bleed background photo (same Boston/campus building photography style as homepage).
- **Underline decoration:** "Download a PDF of the Programme" uses `text-underline-position: from-font`, `text-decoration-style: solid`.

---

## 2. Global Structure

This page is two stacked full-width sections:

1. **Hero + Programme block** (height 1790px) — nav bar, page title, intro copy, and the full interactive schedule widget, all sitting on one continuous dark photo background with gradient overlay.
2. **Section 6 — Contact** (height 458px) — light variant (`#FFE4D0` bg), reused from the site's shared Contact component but with the light color mapping described in §1.1.

---

## 3. Section-by-Section Breakdown

### 3.1 Navigation Bar
- **Layout:** flex row, `justify-content: space-between`, `align-items: center`, width 1200px, sits inside the top of the hero block (padding: 80px top, 120px sides on the parent).
- **Left:** circular pinwheel/logo mark, 54×54px.
- **Right:** flex row, gap 40px:
  - Nav links group: flex row, gap 48px, SemiBold 16px:
    - Home — `#FAF5F1`
    - **Programme — `#FFC9A4` (active state — this is the current page)**
    - Submissions — `#FAF5F1`
    - Venue — `#FAF5F1`
    - FAQ — `#FAF5F1`
  - Register button: pill, bg `#FFC9A4`, text `#1F4357`, padding `8px 24px`, radius 100px, SemiBold 16px.

### 3.2 Page Header + Intro
- **Container:** flex column, gap 32px, right-aligned (`items-end`), full width, sits below the nav with its own top gap (80px total from nav per the 80px section gap value).
- **Title:** "Programme" — Header 2 style, `#FAF5F1`.
- **Divider rule:** 2px height, `#FAF5F1`, width 1197px, radius 8px.
- **Intro content block** (width 795px, flex column, gap 48px, left-aligned text within the right-aligned outer wrapper):
  1. **Meeting summary sub-block** (gap 12px):
     - "5-day Research Meeting" — Header 4, `#FAF5F1`.
     - Date/location line — Body style, `#FAF5F1`: "Saturday 26 to Wednesday 30th July 2025 at St. John's College, Cambridge, UK." *(Note: this copy conflicts with the homepage hero's "26-30 July 2027 / Boston, MA" — flag for content reconciliation before launch.)*
  2. **Highlights sub-block** (gap 12px):
     - "Highlights" — Header 5, `#FAF5F1`.
     - Two-paragraph body copy, Regular 16px, `#FAF5F1`, line-height 1.5, first paragraph `margin-bottom: 0`:
       - Intro sentence: "The Scientific Programme includes fundamental research and translational themes that focus on:"
       - Long comma-separated list of topic areas (cell therapies, ILD, GI disease, fibroblast biology, omics, etc.) — render as a single flowing paragraph exactly as authored, not a bulleted list.

### 3.3 Schedule Widget (full detail view)
- **Container:** flex column, gap 40px, full width, sits below the intro block.
- **Day-tab + card group** (flex column, gap 12px, height 853px total, radius 12px, `overflow: hidden`):
  - **Day tabs row:** flex row, gap 4px, 5 equal segments (July 26–30):
    - Active tab ("July 26"): bg `#FAF5F1`, radius 30px, text `#1F4357`, ExtraBold 16px, padding `12px 10px`, centered.
    - Inactive tabs: no background, text `#FAF5F1`, ExtraBold 16px, padding `12px 10px`, centered.
  - **Glass detail card:** height 792px, padding 32px, radius 12px, gap 28px, flex column, bg `rgba(250,245,241,0.1)`, `backdrop-blur: 25px`, border `2px solid #FAF5F1`. This is the **expanded/full** version of the homepage's teaser card — same visual language, more content:
    - **Session 1 header chip** ("Session 1" / "Interstitial Lung Disease") — same two-chip pattern as homepage (left chip radius `12px 0 0 12px`, right chip fills remaining width, radius `0 12px 12px 0`, both bg `rgba(250,245,241,0.2)`, ExtraBold 16px `#FAF5F1`).
    - **Sub-session title:** "Cell Based Therapies Part 1 | Emerging immune cell Therapies" — ExtraBold 16px `#FAF5F1`.
    - **Speaker tag row:** names (Regular 12px `#FAF5F1`) + location chips (vector pin icon 12×9.12px + Bold 12px `#C6DFEF` label), comma-style flex row gap 8px between speaker groups, gap 4px within each speaker's name+location pairing.
    - **Schedule rows** (repeating, gap 32px per row, 70px right-aligned uppercase tracked time column + flexible content column with gap 8px for title + optional speaker/location tag):
      - 11:30 — Introduction *(no speaker tag)*
      - 12:30 — Identification of key fibrogenic signalling nodes in pulmonary fibrosis — Rachel Chambers 📍 London
      - 1:30 — Cancer-associated fibroblasts control of the tumour environment — Sara Zanivan 📍 Boston
    - **Sub-session title 2:** "Cell Based Therapies Part 2 | Emerging immune cell Therapies" (no chip header — plain title row).
      - 12:30 — Identification of key fibrogenic signalling nodes in pulmonary fibrosis — Rachel Chambers 📍 London
      - 1:30 — Cancer-associated fibroblasts control of the tumour environment — Sara Zanivan 📍 London
    - **Session 2 header chip** ("Session 2" / "Interstitial Lung Disease") — same pattern as Session 1.
    - **Sub-session title:** "Cell Based Therapies Part 1 | Emerging immune cell Therapies" — Maureen Mayes 📍 Boston, Maria Trojanoska 📍 Houston.
      - 2:45 — The role of T cells in tumor immunity — Alex Johnson 📍 London
      - 3:15 — Exploring the microbiome's influence on cancer treatment — Emily Tran 📍 London
      - 4:00 — Advancements in genetic therapies for breast cancer — Michael Lee 📍 London
    - This card is a **scrollable/expanded full-day agenda** — significantly longer than the homepage's 3-row teaser. Build as a vertically stacked list; consider internal scroll or natural page-length growth depending on final content volume per day.
  - **"Download a PDF of the Programme" link:** centered, full width, padding `12px 10px`, ExtraBold 16px, `#FAF5F1`, underlined.

### 3.4 Section 6 — Contact (light variant)
- **Background:** `#FFE4D0` (differs from homepage's dark `#1F4357` Contact section — this page uses the light/card color instead).
- **Outer padding:** 120px all sides. Flex column, gap 40px, left-aligned. Height 458px.
- **Heading:** "Contact" — Header 2 style, but text color **`#1F4357`** (dark — inverse of homepage's `#FAF5F1`).
- **Divider rule:** 2px height, bg **`#1F4357`** (dark bar on light bg — inverse of homepage), full width, no radius.
- **Contact info row:** flex row, `justify-content: space-between`, width 1137px:
  - **GENERAL** column (gap 12px): label Bold 16px **`#C94714`** uppercase tracked 5.12px + email Regular 16px **`#1F4357`** line-height 1.5.
  - **SUBMISSIONS** column: identical pattern.
  - **VENUE** column: label same style + two-line address (Regular 16px `#1F4357`, line-height 1.5): "Boston Marriot" / "110 Hunington Ave. Boston, MA".

> ⚠️ **Design consistency flag:** This page's Contact section is a color-inverted variant of the homepage's Contact section (light bg / dark text vs. dark bg / light text, and orange labels instead of peach labels). Confirm with design whether this is an intentional two-variant component or a one-off inconsistency to fix before build.

---

## 4. Components Summary (for reuse against the homepage spec)

| Component | Same as homepage? | Notes |
|---|---|---|
| Nav bar | ✅ Identical structure | "Programme" is the active link here (peach `#FFC9A4`) instead of "Home" |
| Day-tab bar | ✅ Identical | Reused exactly — active/inactive tab styling matches |
| Session header chip | ✅ Identical | Same two-chip radius/fill pattern |
| Schedule row | ✅ Identical | Same 70px time column + content column pattern |
| Glass schedule card | ⚠️ Same styling, different height | 792px full card here vs. 443px teaser on homepage — same visual treatment, more content |
| Contact section | ❌ Color-inverted variant | See flag above — build as a themeable variant (light/dark props) rather than a hardcoded duplicate |
| Register button | ✅ Identical | Pill, `#FFC9A4` bg, `#1F4357` text |

---

## 5. Assets Referenced
- Full-page background photo: campus/city building exterior (photographic, cropped full-bleed, with dark diagonal gradient overlay at -79.81°).
- Location-tag vector icon (small pin/marker, ~9×12px) — identical asset reused from homepage.
- Logo mark: circular pinwheel icon, 54×54px, top-left of nav — identical asset reused from homepage.

*(All images should be sourced as high-resolution originals for production — Figma-exported asset links are temporary/expiring and for reference only.)*

---

## 6. Build Notes for Claude Design
1. Reuse the **Nav bar**, **Day-tab bar**, **Session chip**, and **Schedule row** components exactly as built for the homepage — only the active nav state and card content/height differ on this page.
2. Build the **Contact section as a variant/prop-driven component** (`theme: 'dark' | 'light'`) rather than two separate hardcoded components, since the only differences are background color, heading/divider/text color, and label color (`#FFC9A4`→dark bg vs `#C94714`→light bg).
3. Flag the **date/location copy mismatch** between this page ("Saturday 26–30 July 2025, St. John's College, Cambridge, UK") and the homepage hero ("26-30 July 2027, Boston, MA") for content owner review before shipping — likely leftover draft copy from an earlier event year/venue.
4. The full-day schedule card is considerably taller (792px) than the homepage teaser (443px) — confirm whether this should scroll internally within the card or simply extend page length naturally (current spec assumes natural page-length growth, matching the Figma layout which does not clip content).
5. Preserve the exact **letter-spacing 5.12px + uppercase** treatment on all label/eyebrow text (time stamps, Contact column labels) — consistent with the homepage's micro-pattern.
6. "Download a PDF of the Programme" should link to an actual PDF asset at build time — currently a text-only underlined link in the source.

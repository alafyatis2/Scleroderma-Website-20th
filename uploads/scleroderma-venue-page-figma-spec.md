# Scleroderma Website — Venue Page Figma Spec
**Source:** Figma file "Scleroderma Website" — Frame: `Desktop - 29` (node 191:616)
**Canvas size:** 1445px wide × ~3513px tall (desktop breakpoint; Contact section starts at y=3055px, ends at 3513px)
**Purpose:** Exact build spec for handing off to a developer / Claude Design. Every color, font, spacing value, radius, and layout rule below is pulled directly from the Figma file — build to these values precisely. This page shares its design system with the site's Home, Programme, and Submissions pages (see companion specs) — token names below match those files where the same tokens are reused.

---

## 1. Design Tokens

### 1.1 Color Palette

| Token | Hex | Usage on this page |
|---|---|---|
| `Orange/00` (cream/bg) | `#FAF5F1` | Hero block text on photo background, "Things to do" section wrapper bg (implicit page bg), Contact section text/dividers |
| `Orange/1` | `#FFC9A4` | Active nav link ("Venue"), Register button bg, Contact section labels (GENERAL/SUBMISSIONS/VENUE) |
| `Orange/3` (primary accent) | `#C94714` | "Things to do in Boston" heading |
| `Blue/3` (primary text/dark) | `#1F4357` | Register button text, "Things to do" body copy + item titles, Contact section bg |
| Overlay dark (hero photo) | `rgba(31,67,87,0.8)` → `rgba(31,67,87,0.95)` | Diagonal gradient overlay on hero photo background, **111.77° angle**, from 0.69% to 96.12% |

### 1.2 Typography
**Font family (all text):** `Host Grotesk`

| Style name | Weight | Size | Line height | Letter spacing | Used for |
|---|---|---|---|---|---|
| Header 2 | ExtraBold (800) | 48px | 1.15 | 0 | Page title "Venue"; "Contact" section title |
| Header 4 | ExtraBold (800) | 24px | 1.0 | 0 | "George Sherman Union" (venue name), "Things to do in Boston" heading |
| Header 5 | ExtraBold (800) | 16px | 1.0 | 0 | "Transportation" / "Accommodation" sub-headings, "MBTA Map" link, place-card titles (Fenway, Newbury Street, Harvard Square, North End) |
| Label / eyebrow | Bold (700) | 16px | 1.0 | 5.12px, UPPERCASE | Contact column labels (GENERAL/SUBMISSIONS/VENUE) |
| Button Text | SemiBold (600) | 16px | 1.0 | 0 | "Register" button |
| Body | Regular (400) | 16px | 1.5 | 0 | Venue address/description, transportation copy, accommodation list, place-card descriptions, Contact email/address copy |

**Notes:**
- "MBTA Map" is styled as an underlined ExtraBold 16px link (`text-decoration: underline`, `decoration-from-font`).
- The venue description block has three stacked text pieces separated by an empty paragraph line (address → blank → long description) — replicate as separate `<p>` blocks with the middle one collapsing to a spacer, not literal empty-paragraph markup.
- Accommodation content is two lines within a single paragraph (`<br>` separated, not two `<p>` tags), each listing a hotel name + address + drive/walk time in parentheses.

### 1.3 Spacing & Layout Scale
Same scale as other pages: `4px, 12px, 32px, 40px, 48px, 80px, 120px`.

- Hero block outer padding: **120px** left/right, **80px** top, **120px** bottom.
- Hero content column width: **795px** (matches other pages' inner text column width).
- "Things to do" section: positioned at **left 120px, top 1069px**, width **1205px** (i.e. same 120px margins as hero, computed absolutely rather than flowing — replicate with standard document flow + 120px section padding in production, not absolute positioning).
- Gap between hero sub-blocks (venue info / transportation / accommodation): **48px**.
- Gap between "Things to do" heading and first place row: **48px**.
- Gap between each place row (image + text pair): **40px**... *(actually the outer "Things to do" wrapper gap is 48px between children; each image+text row's internal gap is 40px — see structure below)*.
- Image dimensions: **798×400px**, radius 12px, for every place-card photo.
- Contact section: standard **120px** padding, gap 40px — identical to other pages' Contact block.

### 1.4 Border Radius
| Radius | Usage |
|---|---|
| 2px (bar height) / 8px (bar radius) | Divider rule under "Venue" heading |
| 12px | Place-card images (Fenway, Newbury Street, Harvard Square, North End) |
| 100px (pill) | Register button |

### 1.5 Effects
- **Gradient overlay (hero):** linear-gradient at **111.77°**, `rgba(31,67,87,0.8)` at 0.69% → `rgba(31,67,87,0.95)` at 96.12%, over a full-bleed street/campus photo background.
- No blur/glass effects on this page — hero is a flat photo+overlay, "Things to do" section is a flat light section with plain image cards.
- Some place-card images use **cropped/zoomed positioning** rather than simple `object-fit: cover` (e.g. Newbury Street image is scaled to 271.05% height with negative top offset; North End image scaled to 131.94% height) — these are manual crop adjustments in Figma. In production, use `object-fit: cover` with `object-position` tuned per image, or re-crop the source images directly, rather than replicating exact percentage transforms.

---

## 2. Global Structure

This page has three stacked sections:

1. **Hero block** (height ~989px, full-bleed photo background with dark gradient overlay) — nav bar + "Venue" title + venue info (address, description, transportation, accommodation).
2. **"Things to do in Boston"** (light section, `#FAF5F1`-toned background, no distinct section wrapper color — flows directly below hero) — heading + 4 alternating image/text rows.
3. **Section 6 — Contact** (dark variant, bg `#1F4357`, height 458px) — identical to the Home and Submissions pages' dark Contact section.

---

## 3. Section-by-Section Breakdown

### 3.1 Navigation Bar
- **Layout:** flex row, `justify-content: space-between`, `align-items: center`, width 1200px, sits inside hero top (padding 80px top / 120px sides on parent).
- **Left:** circular pinwheel/logo mark, 54×54px.
- **Right:** flex row, gap 40px:
  - Nav links group: flex row, gap 48px, SemiBold 16px:
    - Home — `#FAF5F1`
    - Programme — `#FAF5F1`
    - Submissions — `#FAF5F1`
    - **Venue — `#FFC9A4` (active state — current page)**
    - FAQ — `#FAF5F1`
  - Register button: pill, bg `#FFC9A4`, text `#1F4357`, padding `8px 24px`, radius 100px, SemiBold 16px.
  - **Note:** color mapping matches Home/Programme's light-on-dark nav pattern (this page has a photo hero, unlike Submissions).

### 3.2 Page Header + Venue Info (Hero)
- **Container:** flex column, gap 32px, right-aligned (`items-end`), full width.
- **Title:** "Venue" — Header 2, `#FAF5F1`.
- **Divider rule:** 2px height, `#FAF5F1`, width 1197px, radius 8px.
- **Info column** (width 795px, flex column, gap 48px, left-aligned text within right-aligned outer wrapper):
  1. **Venue identity block** (gap 12px):
     - "George Sherman Union" — Header 4, `#FAF5F1`.
     - Address + description, Regular 16px `#FAF5F1`, line-height 1.5, as 2 stacked text blocks with a visual gap between them (address line, then a spacer, then the long descriptive paragraph):
       - "775 Commonwealth Ave, Boston, MA 02215"
       - (spacer)
       - "The George Sherman Union (GSU) is Boston University's central student hub..." (full descriptive paragraph about the building, its history, and location).
  2. **Transportation block** (gap 12px):
     - "Transportation" — Header 5, `#FAF5F1`.
     - Body paragraph, Regular 16px `#FAF5F1` — MBTA Green Line B accessibility + parking note.
     - "MBTA Map" — ExtraBold 16px `#FAF5F1`, underlined link (build as an actual link to the MBTA map resource).
  3. **Accommodation block** (gap 12px):
     - "Accommodation" — Header 5, `#FAF5F1`.
     - Body, Regular 16px `#FAF5F1`, line-height 1.5, two lines (`<br>` separated within one paragraph):
       - "Hyatt Regency Boston / Cambridge (10 min drive, 20 min walk)"
       - "Beacon Inn, 1087 Beacon St, Brookline, MA 02446 (8 min drive, 15 min walk)"

### 3.3 "Things to do in Boston"
- **Container:** flex column, gap 48px, width 1205px (120px side margins from page edge).
- **Heading block** (gap 12px):
  - "Things to do in Boston" — Header 4, `#C94714`.
  - Body paragraph: Regular 16px, `#1F4357`, line-height 1.5 — general Boston overview copy (Fenway Park, Charles River Esplanade, Harvard Square mention).
- **Four alternating image/text rows**, each: flex row, gap 40px, `align-items: center`, full width. Image is always **798×400px, radius 12px**; text column is `flex: 1 0 0`, gap 12px. Rows alternate image-left/text-right and text-left/image-right:
  1. **Fenway** (image left, text right):
     - Image: Fenway Park exterior photo (signage), `object-fit: cover`.
     - Title: "Fenway" — Header 5, `#1F4357`.
     - Body: Regular 16px `#1F4357` — Red Sox game + Lucky Strike copy.
  2. **Newbury Street** (text left, image right — text column uses `items-end`/right-aligned text block per source, i.e. text is right-justified toward the image):
     - Title: "Newbury Street" — Header 5, `#1F4357`.
     - Body: Regular 16px `#1F4357` — shopping + Owl's Nest beer garden copy.
     - Image: Newbury Street streetscape photo, custom crop (scaled ~271% height, shifted top -158%) — replicate visually via `object-fit: cover` + tuned `object-position`, don't hardcode the raw Figma transform values.
  3. **Harvard Square** (image left, text right):
     - Image: Harvard University building/columns photo, `object-fit: cover`.
     - Title: "Harvard Square" — Header 5, `#1F4357`.
     - Body: Regular 16px `#1F4357` — Harvard Yard, Felipe's, BerryLine, Charles River, The Sinclair/Club Passim copy.
  4. **North End** (text left, image right):
     - Title: "North End" — Header 5, `#1F4357`.
     - Body: Regular 16px `#1F4357` — Euno/Regina's pizza, Bova's Bakery, Ghosts & Gravestones tour copy.
     - Image: North End street-at-night photo, custom crop (scaled ~132% height, shifted top -16%) — same note as Newbury Street re: production cropping approach.

### 3.4 Section 6 — Contact (dark variant)
- **Background:** `#1F4357` — matches Home and Submissions pages' dark Contact section exactly.
- **Outer padding:** 120px all sides. Flex column, gap 40px, left-aligned. Height 458px.
- **Heading:** "Contact" — Header 2, `#FAF5F1`.
- **Divider rule:** 2px, `#FAF5F1`, full width.
- **Contact info row:** flex row, `justify-content: space-between`, width 1137px:
  - **GENERAL** column: label Bold 16px `#FFC9A4` uppercase tracked 5.12px + email Regular 16px `#FAF5F1`.
  - **SUBMISSIONS** column: identical pattern.
  - **VENUE** column: label + two-line address, Regular 16px `#FAF5F1`: "Boston Marriot" / "110 Hunington Ave. Boston, MA".

---

## 4. Components Summary (for reuse against other page specs)

| Component | Same as other pages? | Notes |
|---|---|---|
| Nav bar | ✅ Identical to Home/Programme | Light-on-dark theme (photo hero present); "Venue" is the active link here |
| Section heading + divider | ✅ Identical pattern | "Venue" title + 2px rule |
| Contact section | ✅ Identical (dark variant) | Matches Home and Submissions exactly |
| Register button | ✅ Identical | `#FFC9A4` bg / `#1F4357` text, same as Home/Programme |
| **Place card (image + text row)** | 🆕 New component | Alternating image-left/image-right layout, 798×400px image + flexible text column, gap 40px — this is the first appearance of this pattern across the site; build as a reusable `MediaTextRow` component with a `reverse` prop for alternating sides |

---

## 5. Assets Referenced
- Hero background photo: Boston street/campus scene (full-bleed, with dark diagonal gradient overlay at 111.77°).
- Fenway Park photo (signage/exterior).
- Newbury Street photo (streetscape, brownstones).
- Harvard Square photo (university building with columns, greenery).
- North End photo (street scene at night, string lights/restaurants).
- Logo mark: circular pinwheel icon, 54×54px, top-left of nav — identical asset reused from other pages.

*(All images should be sourced as high-resolution originals for production — Figma-exported asset links are temporary/expiring and for reference only. The four "Things to do" photos in particular should be re-exported/re-cropped cleanly rather than relying on the transform-based cropping used in the Figma source.)*

---

## 6. Build Notes for Claude Design
1. **New reusable component on this page:** the alternating image/text "place card" row (`MediaTextRow`) — 798×400px rounded image + flexible text column, alternating sides down the page with 40px gap between image and text, 48px gap between rows. This pattern doesn't appear on Home, Programme, or Submissions — build it as its own component since it may be reused on future pages (e.g. FAQ or an expanded Venue page).
2. **Fix ad-hoc image crops properly.** Two of the four "Things to do" images (Newbury Street, North End) use manual scale/offset transforms in the Figma source to achieve a crop. Don't port these raw percentage values into CSS — instead, either re-export pre-cropped images at 798×400px, or use `object-fit: cover` with a sensible `object-position` (e.g. `center 30%`) tuned by eye against the final asset.
3. The **venue description block** has a visually blank line between the address and the long paragraph — implement this as normal paragraph spacing (e.g. `margin-bottom` on the address line), not as an empty `<p>` element.
4. **"MBTA Map"** should be wired to an actual outbound link (MBTA's official system map) at build time — currently styled as underlined text only in the source.
5. Contact section on this page matches Home/Submissions' dark variant — reuse that component as-is.
6. This page has **no stat cards, CTA cards, or interactive widgets** — it's the simplest page in the set structurally (hero info dump + repeating media/text rows + Contact), so build time should be comparatively low once the `MediaTextRow` component exists.

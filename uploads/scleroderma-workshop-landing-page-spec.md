# Scleroderma Research Workshop — Landing Page Spec

Source of truth: [Figma design](https://www.figma.com/design/V4bo3qDVsryMtr7OljbKMI/Scleroderma-Website?node-id=161-1272) (frame "Desktop - 20").

A single-page marketing site for the **20th International Workshop on Scleroderma Research**, a biennial 5-day academic conference. Tone: clinical/scientific but warm — terracotta and navy on a warm cream background, generous whitespace, large confident type.

---

## 1. Design Tokens

### Colors
| Name | Hex | Usage |
|---|---|---|
| Orange/0 | `#FFE8D7` | About/Programme/Participate section background |
| Orange/1 | `#FFC9A4` | Accent text (eyebrows/labels), stat card borders, dividers, "Contribute" card bg, register button bg |
| Orange/00 | `#FAF5F1` | Off-white text on dark backgrounds, light button bg |
| Orange/3 | `#C94714` | Primary accent — section headings, CTA buttons, stat numbers |
| Blue/3 | `#1F4357` | Footer background, dark body text, register button text |
| Hero overlay | `#173446` | Hero gradient overlay (90%→50% opacity, 105° diagonal) |
| White | `#FFFFFF` | Page background |

### Typography
Font family: **Host Grotesk** throughout.

| Style | Weight | Size | Tracking/Line-height |
|---|---|---|---|
| Header 1 (section titles: "About", "Programme", "Participate", "Contact") | ExtraBold (800) | 64px | normal |
| Hero title ("Scleroderma Research") | ExtraBold (800) | 120px | normal, tight line spacing (~48px gap between two lines) |
| Hero eyebrow ("20th International Workshop on") | ExtraBold (800) | 32px | normal |
| Header 3 (card titles like "Attend the workshop") | ExtraBold (800) | 32px | normal |
| Header 5 (stat numbers, card sub-titles) | ExtraBold (800) | 16px | normal |
| Label - small (eyebrows: DATES, LOCATION, EXPERIENCE, CONTRIBUTE, GENERAL...) | SemiBold (600) | 16px | uppercase, 5.12px letter-spacing |
| Button text | SemiBold (600) | 16px | normal |
| Body | Regular (400) | 16px | 1.5 line-height |
| Footnote | Regular (400) | 12px | normal |
| Stat number | ExtraBold (800) | 32px | color `#C94714` |

Page width: 1440px desktop container, content padding 120px left/right in main sections, hero content starts at ~108–123px.

---

## 2. Page Structure (top to bottom)

### 2.1 Header / Nav (sticky over hero, transparent)
- Left: small circular logo mark (pinwheel/flower icon, ~40px), white/cream.
- Right: horizontal nav links — **Home, Programme, Submissions, Attend, FAQ** (white text, 16px SemiBold, 48px gaps).
- Far right: pill **"Register"** button — background `#FFC9A4`, text `#1F4357`, fully rounded (999px), padding 8px/24px.

### 2.2 Hero Section
- Full-bleed background photo of a city skyline (Boston) at dusk/dawn, covers full hero height (~900px).
- Dark diagonal gradient overlay: `linear-gradient(105deg, rgba(23,52,70,0.9) 6%, rgba(23,52,70,0.5) 130%)` — darkest at top-left, fading toward bottom-right.
- Content (left-aligned, ~800px wide, vertically centered in upper-mid hero):
  - Eyebrow line: "20th International Workshop on" (32px ExtraBold, cream `#FAF5F1`)
  - Giant title, two stacked lines: **"Scleroderma"** / **"Research"** (120px ExtraBold, cream)
- Thin horizontal divider (semi-transparent cream, 4px tall, rounded) near bottom of hero.
- Below the divider, a 3-column info row (evenly spaced, left-aligned labels):
  1. **DATES** → "26 – 30 July, 2027"
  2. **LOCATION** → "Boston, MA"
  3. **ABSTRACTS CLOSE** → "June 30, 2027"
  - Each: small uppercase eyebrow label in `#FFC9A4` (SemiBold, tracked, subtle text-shadow) above a bold cream value line.

### 2.3 About Section
Background: `#FFE8D7`. Generous 120px padding all around, 80px vertical gaps between blocks.

Layout: two-column row — big heading on the left (fixed ~386px column), content on the right (~795px column).

- **Heading:** "About" (64px ExtraBold, `#C94714`)
- **Right column, top to bottom:**
  1. **3 stat cards** in a row, equal width, each: 4px `#FFC9A4` border, 12px rounded corners, 32px padding, gap 16px between elements:
     - Card 1: **"5 Days"** (32px ExtraBold `#C94714`) / "Scientific Exchange" (16px ExtraBold, navy) / "An intensive curriculum featuring expert-led keynote sessions and short presentations." (12px regular)
     - Card 2: **"300+"** / "Global Delegates" / "Connecting clinicians, basic scientists, biotech leaders, and pharmaceutical delegates."
     - Card 3: **"40+"** / "Travel Grants" / "Dedicated support and abstract presentation awards for emerging early-career investigators."
  2. **Body paragraph** (16px regular, navy `#1F4357`, 1.5 line-height):
     > The International Workshop on Scleroderma Research is a biennial, 5-day meeting dedicated to basic and translational research in systemic sclerosis (SSc). Founded in 1990, it has grown into the largest international meeting focused on SSc pathogenic mechanisms, bringing together more than 200 researchers and experts from academia, biotechnology, and pharmaceutical organizations worldwide.
  3. **Full-width photo**, 391px tall, 12px rounded corners (city skyline image — reuse a Boston-style photo).
  4. **Two closing paragraphs** (16px regular navy):
     > The Workshop will explore key areas of SSc research, including vascular and fibroblast biology, genetics, immunology, clinical trials, and complications such as pulmonary fibrosis and pulmonary arterial hypertension.
     >
     > The program will feature expert-led sessions, keynote presentations, and selected abstracts from emerging investigators, with travel awards available for top-scoring submissions.

- **Divider:** thick 4px `#FFC9A4` rounded bar spanning the content width, separating About from Programme.

### 2.4 Programme Section
Same two-column pattern (still inside the `#FFE8D7` background block, 80px gap after About's divider).

- **Heading:** "Programme" (64px ExtraBold, `#C94714`)
- **Right column:**
  1. **Feature image**, 391px tall, 12px rounded corners — photo with a dark diagonal gradient overlay (`linear-gradient(153deg, rgba(26,64,85,0.6) 13%, rgba(28,64,86,0.06) 74%)`), fallback gradient background `#1a3f55 → #999`.
  2. Body text: "The workshop focuses on basic and translational research related to the pathophysiology of scleroderma and includes 'hot topics' in biomedicine in related areas of research." (16px regular, navy)
  3. CTA button: **"View programme"** — solid `#C94714` background, cream text, pill shape, 8px/24px padding.

- **Divider:** thin 2px `#FFC9A4` bar, full width.

### 2.5 Participate Section
Same two-column pattern.

- **Heading:** "Participate" (64px ExtraBold, `#C94714`), left column.
- **Right column:** two stacked full-width cards (12px rounded corners, 32px/40px padding, 24px internal gap, 12px gap between the two cards):
  1. **Dark card** — background `#C94714`, text cream:
     - Eyebrow: "EXPERIENCE" (tracked uppercase, `#FFC9A4`)
     - Title: "Attend the workshop" (32px ExtraBold, cream)
     - Body: "Register for the 19th International Workshop on Scleroderma Research by 30 June. See information on categories, registration fees and more." (cream)
     - Button: cream pill button, navy text, label "Button" (placeholder — replace with e.g. "Register")
  2. **Light card** — background `rgba(255,201,164,0.5)` (translucent `#FFC9A4`), text navy:
     - Eyebrow: "CONTRIBUTE" (`#C94714`)
     - Title: "Submit an Abstract" (32px ExtraBold, navy)
     - Body: same registration/abstract copy, navy text
     - Button: solid `#C94714` pill button, cream text, label "Button" (placeholder — replace with e.g. "Submit")

### 2.6 Footer / Contact
Background: `#1F4357` (navy), full-bleed, 120px padding, 40px vertical gap.

- **Heading:** "Contact" (64px ExtraBold, cream `#FAF5F1`)
- Divider: thin 2px semi-transparent cream line, full width.
- **3-column info row** (space-between):
  1. **GENERAL** (tracked uppercase eyebrow, `#FFC9A4`) → "abstracts@sclerodermaworkshop.org" (white, regular)
  2. **SUBMISSIONS** → "abstracts@sclerodermaworkshop.org"
  3. **VENUE** → "Boston Marriott" / "110 Huntington Ave. Boston, MA" (two lines, white)

---

## 3. Assets Needed
- Hero background: wide cityscape/skyline photo (Boston), warm dusk tone, covers full hero at an angle (design shows it slightly rotated/oversized).
- About section photo: city skyline, landscape orientation, 795×391 approx ratio.
- Programme section photo: campus/venue or nature-adjacent photo with dark teal gradient overlay applied.
- Small circular logo mark (pinwheel/flower icon) for nav — placeholder acceptable if brand asset unavailable.

## 4. Interaction / Responsive Notes (not fully specified in Figma — use best judgment)
- This frame is a fixed 1440px desktop layout. Build responsively: stack the two-column heading/content sections into single columns on tablet/mobile, and stack stat cards and nav links accordingly.
- Nav should collapse to a hamburger menu on mobile.
- All buttons are pill-shaped (fully rounded), consistent across the page — treat as a single reusable "Button" component with light/dark variants (per Figma component "Button - light mode").
- Replace generic "Button" labels in the Participate cards with real CTA text ("Register", "Submit Abstract") since these appear to be unfinished placeholder text in the source design.

## 5. Section Order Summary
1. Header/Nav (overlaid on hero)
2. Hero (title + dates/location/deadline strip)
3. About (intro + 3 stats + photo + copy)
4. Programme (photo + copy + CTA)
5. Participate (Attend card + Submit Abstract card)
6. Footer/Contact (General / Submissions / Venue)

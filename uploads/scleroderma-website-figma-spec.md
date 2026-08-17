# Scleroderma Research Workshop Website — AI Build Specification

Source Figma file: `Scleroderma Website`  
Source node: `Desktop - 23` (`180:53`)  
Reference canvas width: **1440 px**  
Primary typeface: **Host Grotesk**

This document is intended as a high-fidelity implementation brief for an AI coding agent. Reproduce the visual hierarchy, spacing, color system, imagery, content structure, and component relationships described below. Treat the Figma layout as the visual source of truth while implementing responsively rather than hard-coding the entire page with absolute positioning.

---

## 1. Overall visual direction

The site is a contemporary scientific-conference landing page with a warm editorial palette and large, confident typography.

The design combines:

- dark desaturated blue
- warm cream
- coral/orange
- pale peach
- large photographic sections with dark blue overlays
- bold Host Grotesk headings
- highly rounded pills/buttons
- rounded content cards
- generous 120 px desktop section padding
- a consistent two-column desktop section structure:
  - **left rail:** section heading, approximately 386 px wide
  - **right content column:** approximately 790–795 px wide
  - gap between columns: approximately 16 px

The page should feel clean, modern, scientific, and editorial rather than corporate or clinical.

---

## 2. Design tokens

### Colors

```css
--blue-dark: #1F4357;
--blue-light: #5E92AF;

--orange-dark: #C94714;
--orange-mid: #F17B4C;
--peach: #FFC9A4;
--cream: #FAF5F1;

--white: #FFFFFF;
```

### Additional transparent colors

```css
--cream-50: rgba(250, 245, 241, 0.5);
--cream-85: rgba(250, 245, 241, 0.85);
```

### Hero image overlay

Approximate gradient:

```css
linear-gradient(
  108.6deg,
  rgba(19, 44, 60, 0.90) 2%,
  rgba(23, 52, 70, 0.70) 94%
)
```

### Participate image overlay

Approximate gradient:

```css
linear-gradient(
  230deg,
  rgba(31, 67, 87, 0.95) 0%,
  rgba(73, 105, 124, 0.57) 92%
)
```

---

## 3. Typography

Use **Host Grotesk** throughout.

Recommended font-face weights:

- Regular — 400
- SemiBold — 600
- Bold — 700
- ExtraBold — 800

### Hero title

```css
font-family: "Host Grotesk";
font-weight: 800;
font-size: 120px;
line-height: 1;
color: #FAF5F1;
```

Desktop line breaks are intentional:

```text
Scleroderma
Research
```

### Hero eyebrow/title line

```css
font-weight: 800;
font-size: 32px;
line-height: 1;
color: #FAF5F1;
```

Text:

```text
20th International Workshop on
```

### Major section heading

```css
font-weight: 800;
font-size: 48px;
line-height: 1.15;
color: #C94714;
```

White variant is used over dark photography and in the footer.

### Card heading

```css
font-weight: 800;
font-size: 32px;
line-height: 1;
```

### Small heading

```css
font-weight: 800;
font-size: 16px;
line-height: 1;
```

### Body

```css
font-weight: 400;
font-size: 16px;
line-height: 1.5;
color: #1F4357;
```

### Footnote / metadata

```css
font-weight: 400;
font-size: 12px;
line-height: 1;
```

### Uppercase labels

```css
font-weight: 600;
font-size: 16px;
line-height: 1;
letter-spacing: 5.12px;
text-transform: uppercase;
```

Primary label color is `#FFC9A4` over dark backgrounds and `#C94714` over light backgrounds.

---

## 4. Global layout

Desktop reference layout:

```text
Page width: 1440 px
Primary horizontal padding: 120 px
Usable content width: 1200 px
```

Most content sections use:

```css
padding: 120px;
```

Primary two-column section layout:

```css
display: grid;
grid-template-columns: 386px minmax(0, 795px);
gap: 16px;
align-items: start;
```

Do not implement the entire page with absolute positioning. Use normal document flow and responsive grid/flex layouts while retaining the measured dimensions and proportions.

---

# 5. Page structure

Page order:

1. Hero
2. About
3. Participate
4. Programme
5. Organizing Committee
6. Contact

---

# 6. Hero

## Size

Desktop hero height: **900 px**

Full width.

## Background

Use the Boston skyline/city photograph from Figma as a full-bleed background image with `object-fit: cover`.

Figma asset reference at extraction time:

```text
https://www.figma.com/api/mcp/asset/09c3f5d5-c391-4ca4-b53c-a0a22a652bf5.png
```

Because Figma MCP URLs expire, download and store the image locally in the project rather than relying on the URL permanently.

Apply the dark-blue gradient overlay described in the token section.

## Navigation

Desktop position:

```text
Top: 75 px
Left/right content boundary: approximately 120 px
Width: 1200 px
```

Layout:

```text
[Logo]                                [Home Programme Submissions Attend FAQ] [Register]
```

### Logo

Small abstract circular/pinwheel mark.

Approximate size:

```text
54 × 54 px
```

Figma SVG asset:

```text
https://www.figma.com/api/mcp/asset/8f28df2b-14aa-4a4e-8885-15a3ccedbc29.svg
```

### Nav links

- Home
- Programme
- Submissions
- Attend
- FAQ

Style:

```css
font-size: 16px;
font-weight: 600;
color: #FAF5F1;
gap: 48px;
```

### Register button

Pill button:

```css
background: #FFC9A4;
color: #1F4357;
border-radius: 999px;
padding: 8px 24px;
font-size: 16px;
font-weight: 600;
```

Text:

```text
Register
```

## Hero title block

Approximate desktop position:

```text
Left: 108 px
Top: 288 px
```

Content:

```text
20th International Workshop on

Scleroderma
Research
```

Spacing between the smaller line and large title:

```text
40 px
```

Large title is roughly 120 px and should occupy a major portion of the hero.

## Divider

Horizontal translucent cream divider:

```css
height: 4px;
border-radius: 8px;
background: rgba(250,245,241,0.5);
```

Desktop:

```text
Left: 123 px
Width: 1197 px
Top: 682 px
```

## Event information row

Placed below divider.

Three columns:

### Column 1

Label:

```text
DATES
```

Value:

```text
26 - 30 July, 2027
```

### Column 2

Label:

```text
LOCATION
```

Value:

```text
Boston, MA
```

### Column 3

Label:

```text
ABSTRACTS CLOSE
```

Value:

```text
June 30, 2027
```

Labels use pale peach uppercase tracked text.

Values use:

```css
font-size: 16px;
font-weight: 800;
color: white;
```

The row occupies approximately 766 px and is not stretched across the entire screen.

---

# 7. About section

Background:

```css
background: #FAF5F1;
```

Desktop section padding:

```text
120 px
```

Two-column layout.

## Left column

Heading:

```text
About
```

Color:

```text
#C94714
```

## Right column

Approximate width:

```text
795 px
```

Vertical content order:

1. three stat cards
2. paragraph
3. large image
4. two-paragraph body copy

Primary vertical gap:

```text
48 px
```

## Stats row

Three equal-width cards.

Gap:

```text
20 px
```

Each card:

```css
background: #FAF5F1;
border: 4px solid #FFC9A4;
border-radius: 12px;
padding: 32px;
```

Approximate row height:

```text
200 px
```

### Stat 1

Large value:

```text
5 Days
```

Small heading:

```text
Scientific Exchange
```

Description:

```text
An intensive curriculum featuring expert-led keynote sessions and short presentations.
```

### Stat 2

Large value:

```text
300+
```

Small heading:

```text
Global Delegates
```

Description:

```text
Connecting clinicians, basic scientists, biotech leaders, and pharmaceutical delegates.
```

### Stat 3

Large value:

```text
40+
```

Small heading:

```text
Travel Grants
```

Description:

```text
Dedicated support and abstract presentation awards for emerging early-career investigators.
```

Stat numbers:

```css
font-size: 32px;
font-weight: 800;
color: #C94714;
```

Descriptions:

```css
font-size: 12px;
color: #1F4357;
```

## About paragraph 1

```text
The International Workshop on Scleroderma Research is a biennial, 5-day meeting dedicated to basic and translational research in systemic sclerosis (SSc). Founded in 1990, it has grown into the largest international meeting focused on SSc pathogenic mechanisms, bringing together more than 200 researchers and experts from academia, biotechnology, and pharmaceutical organizations worldwide.
```

## About image

Approximate:

```text
795 × 391 px
border-radius: 12 px
```

Figma asset:

```text
https://www.figma.com/api/mcp/asset/de3d2c23-f2df-4795-b126-6da85deeeb50.png
```

Use `object-fit: cover`.

## About paragraph 2

```text
The Workshop will explore key areas of SSc research, including vascular and fibroblast biology, genetics, immunology, clinical trials, and complications such as pulmonary fibrosis and pulmonary arterial hypertension.

The program will feature expert-led sessions, keynote presentations, and selected abstracts from emerging investigators, with travel awards available for top-scoring submissions.
```

---

# 8. Participate section

Full-width photographic section.

Desktop section begins after About and has approximately **565 px** overall visual height in the Figma composition.

Use auditorium/conference photograph as background.

Figma asset:

```text
https://www.figma.com/api/mcp/asset/df87b717-3b06-4e9e-9061-859bbfd8c709.png
```

Apply the dark-blue gradient overlay.

Padding:

```text
120 px
```

Two-column structure.

## Left column

Heading:

```text
Participate
```

Color:

```text
#FAF5F1
```

## Right content

Two equal-width cards side-by-side with **4 px gap**.

Outer wrapper has:

```css
border-radius: 12px;
overflow: hidden;
```

Each card:

```css
background: rgba(250,245,241,0.85);
padding: 40px;
```

### Card 1

Eyebrow:

```text
EXPERIENCE
```

Heading:

```text
Attend the workshop
```

Body:

```text
Register for the 19th International Workshop on Scleroderma Research by 30 June. See information on categories, registration fees and more.
```

CTA button in Figma currently uses placeholder text:

```text
Button
```

Implementation should likely use a meaningful action label if product copy is later provided, but preserve the Figma content if fidelity is the priority.

### Card 2

Eyebrow:

```text
CONTRIBUTE
```

Heading:

```text
Submit an Abstract
```

Body:

```text
Register for the 19th International Workshop on Scleroderma Research by 30 June. See information on categories, registration fees and more.
```

CTA:

```text
Button
```

### Participate CTA styling

```css
background: #C94714;
color: #FAF5F1;
border-radius: 999px;
padding: 8px 24px;
font-size: 16px;
font-weight: 600;
```

---

# 9. Programme section

Background:

```css
#FAF5F1
```

Desktop approximate section height:

```text
816 px
```

Padding:

```text
120 px
```

Two-column structure.

## Left column

Heading:

```text
Programme
```

## Right programme widget

Width approximately:

```text
791 px
```

### Day tab bar

Background:

```text
#C94714
```

Top border radius:

```text
12 px
```

Padding:

```text
12 px
```

Five equally sized tabs:

- July 26
- July 27
- July 28
- July 29
- July 30

Each tab uses:

```css
font-size: 16px;
font-weight: 600;
color: #FAF5F1;
text-align: center;
padding: 10px;
```

The Figma screenshot does not show an obvious active tab treatment; use equal tabs unless interactive states are defined elsewhere.

### Programme panel

```css
background: #FAF5F1;
border: 4px solid #C94714;
border-top: 0;
border-radius: 0 0 12px 12px;
padding: 32px;
height: 499px;
overflow-y: auto;
overflow-x: hidden;
```

Internal vertical gap:

```text
28 px
```

### Session banner

Dark-blue segmented pill/header:

```css
background: #1F4357;
color: #FAF5F1;
font-size: 16px;
font-weight: 800;
```

Left segment:

```text
Session 1
```

Right segment:

```text
Interstitial Lung Disease
```

Rounded outer ends.

Use approximately 2 px gap between the two visual segments.

### Session topic heading

```text
Cell Based Therapies Part 1 | Emerging immune cell Therapies
```

Style:

```css
font-size: 16px;
font-weight: 800;
color: #1F4357;
```

Below it, speaker/chair metadata appears in 12 px type.

Example:

```text
Maureen Mayes   [location icon] Boston
Maria Trojanoska   [location icon] Houston
```

Location text uses:

```css
font-size: 12px;
font-weight: 700;
color: #5E92AF;
```

Location pin SVG asset:

```text
https://www.figma.com/api/mcp/asset/944b5ecb-815b-45b1-8f13-5c4673169550.svg
```

### Schedule row pattern

Each timed programme row uses a two-column inner layout:

```text
[time ~70 px]   [event content]
```

Gap:

```text
32 px
```

Time:

```css
width: 70px;
font-size: 16px;
font-weight: 600;
letter-spacing: 5.12px;
text-transform: uppercase;
text-align: right;
color: #C94714;
```

Event title:

```css
font-size: 16px;
font-weight: 400;
line-height: 1.5;
color: #1F4357;
```

Speaker name:

```css
font-size: 12px;
font-weight: 400;
color: #1F4357;
```

Location uses the location pin + blue-light location text.

### Visible example programme content

```text
11:30
Introduction

12:30
Identification of key fibrogenic signalling nodes in pulmonary fibrosis
Rachel Chambers
London

1:30
Cancer-associated fibroblasts control of the tumour environment
Sara Zanivan
Boston
```

Subheading:

```text
Cell Based Therapies Part 2 | Emerging immune cell Therapies
```

Repeated rows:

```text
12:30
Identification of key fibrogenic signalling nodes in pulmonary fibrosis
Rachel Chambers
London

1:30
Cancer-associated fibroblasts control of the tumour environment
Sara Zanivan
London
```

Second session banner:

```text
Session 2
Interstitial Lung Disease
```

Rows include:

```text
2:45
The role of T cells in tumor immunity
Alex Johnson
London

3:15
Exploring the microbiome's influence on cancer treatment
Emily Tran
London

4:00
Advancements in genetic therapies for breast cancer
Michael Lee
London
```

Because the programme box scrolls vertically, additional programme content may exist outside the screenshot. The implementation should treat programme data as structured data rather than hard-coded markup.

Recommended data model:

```ts
type ProgrammeDay = {
  date: string;
  sessions: {
    number: string;
    title: string;
    groups: {
      heading?: string;
      chairs?: {
        name: string;
        location?: string;
      }[];
      talks: {
        time: string;
        title: string;
        speaker?: string;
        location?: string;
      }[];
    }[];
  }[];
};
```

---

# 10. Organizing Committee section

Background:

```text
#FFC9A4
```

Padding:

```text
120 px
```

Two-column layout.

## Left

Heading:

```text
Organizing Committee
```

Color:

```text
#C94714
```

## Right

A dense grid of orange cards.

Primary card color:

```text
#C94714
```

Card text:

```text
#FAF5F1
```

Border radius:

```text
12 px
```

Grid gaps:

```text
8 px
```

### Co-chair cards

First row contains two large cards.

Padding:

```text
20 px
```

Heading:

```css
font-size: 16px;
font-weight: 800;
```

Body:

```css
font-size: 12px;
font-weight: 400;
line-height: 1;
```

Role badge:

```css
background: #F17B4C;
color: #FAF5F1;
border-radius: 30px;
padding: 4px 12px;
font-size: 12px;
font-weight: 700;
```

#### Co-chair 1

```text
Prof. Dame Carol Black, GBE
```

Badge:

```text
Co-chair
```

Description:

```text
Chair, The British Library; Expert Adviser on Health and Work to NHS England and Public Health England; Chairperson, Think Ahead, the UK government’s training programme for Mental Health Social Workers; Chairperson, the RSSB’s Health and Wellbeing Policy Group; UK.
```

#### Co-chair 2

```text
Dr Robert Lafyatis, MD
```

Badge:

```text
Co-chair
```

Description:

```text
Thomas A. Medsger Endowed Professor of Scleroderma Research and Director of the Scleroderma Program, University of Pittsburgh School of Medicine, USA.
```

### Standard committee member cards

Three columns per row.

Padding:

```text
12 px
```

Name:

```css
font-size: 16px;
font-weight: 800;
```

Affiliation:

```css
font-size: 10px;
font-weight: 400;
```

Visible examples:

```text
David Abraham, PhD
University College London, UK

Christopher Denton, MD, PhD
University College London, UK

Carol Feghali-Bostwick, PhD
Medical University of South Carolina, USA
```

The source Figma currently repeats these three example cards several times. Preserve repeated content if reproducing the mockup exactly, but ideally implement this area from committee data so names can be replaced later.

Recommended data structure:

```ts
type CommitteeMember = {
  name: string;
  affiliation: string;
  role?: "Co-chair" | string;
  biography?: string;
  featured?: boolean;
};
```

---

# 11. Contact section

Background:

```text
#1F4357
```

Padding:

```text
120 px
```

Approximate top-level content:

1. Contact heading
2. horizontal divider
3. three contact columns

## Heading

```text
Contact
```

Style:

```css
font-size: 48px;
font-weight: 800;
color: #FAF5F1;
```

## Divider

```css
height: 2px;
background: rgba(250,245,241,0.5);
width: 100%;
```

Spacing around heading and divider is approximately 40 px.

## Contact details row

Three columns distributed horizontally.

### General

Label:

```text
GENERAL
```

Value:

```text
abstracts@sclerodermaworkshop.org
```

### Submissions

Label:

```text
SUBMISSIONS
```

Value:

```text
abstracts@sclerodermaworkshop.org
```

### Venue

Label:

```text
VENUE
```

Address:

```text
Boston Marriot
110 Hunington Ave. Boston, MA
```

Note: the Figma spelling is currently **“Marriot”** and **“Hunington”**. Do not silently correct copy if strict visual/content fidelity is required. If this is a production build, flag these for editorial review.

Contact labels:

```css
font-size: 16px;
font-weight: 600;
letter-spacing: 5.12px;
color: #FFC9A4;
text-transform: uppercase;
```

Values:

```css
font-size: 16px;
font-weight: 400;
line-height: 1.5;
color: white;
```

---

# 12. Reusable components

An AI agent should preferably create reusable components instead of one monolithic page.

Suggested component architecture:

```text
Page
├── Hero
│   ├── Header
│   │   ├── Logo
│   │   ├── Nav
│   │   └── PillButton
│   └── EventMeta
├── SectionLayout
│   ├── SectionHeading
│   └── SectionContent
├── AboutSection
│   └── StatCard
├── ParticipateSection
│   └── ParticipateCard
├── ProgrammeSection
│   ├── ProgrammeTabs
│   ├── ProgrammeDay
│   ├── SessionHeader
│   ├── ProgrammeItem
│   └── LocationMeta
├── CommitteeSection
│   ├── FeaturedCommitteeCard
│   └── CommitteeCard
└── ContactSection
```

Recommended base button component:

```ts
type ButtonVariant = "peach" | "orange";
```

Peach:

```css
background: #FFC9A4;
color: #1F4357;
```

Orange:

```css
background: #C94714;
color: #FAF5F1;
```

Both:

```css
border-radius: 999px;
padding: 8px 24px;
font-size: 16px;
font-weight: 600;
```

---

# 13. Responsive behavior

The Figma source provided is a desktop composition, so mobile behavior must be inferred carefully.

The implementation should remain visually faithful while adapting structurally.

## Suggested breakpoints

```text
Desktop: >= 1200 px
Tablet: 768–1199 px
Mobile: < 768 px
```

## Desktop

Maintain:

```text
120 px side padding
386 px section heading column
~795 px content column
16 px main column gap
```

## Tablet

Suggested:

```text
48–64 px horizontal padding
section heading column: 30–35%
content column: remaining width
hero title: 72–88 px
```

Stats may remain three columns while enough space exists.

Committee member cards can move to two columns.

## Mobile

Suggested:

```text
24 px horizontal padding
48–72 px vertical section padding
single-column sections
```

Recommended transformations:

- navigation collapses into a mobile menu
- hero height becomes content-driven, approximately 720–820 px
- hero title scales to approximately 56–72 px
- event metadata stacks vertically or becomes a 2-column grid
- section heading appears above content rather than beside it
- stat cards stack vertically
- Participate cards stack vertically
- programme tabs become horizontally scrollable
- programme panel remains internally scrollable only if necessary
- committee grid becomes one column
- contact columns stack vertically

Avoid shrinking desktop card contents to unreadably small sizes.

---

# 14. Interaction expectations

The Figma primarily defines visual design, but likely web behaviors are:

## Header

- nav links scroll/navigate to corresponding sections/pages
- Register button routes to registration flow
- mobile nav becomes collapsible

## Programme

Tabs should be interactive:

```text
July 26
July 27
July 28
July 29
July 30
```

Selecting a tab changes the programme data shown below.

The programme body should support vertical scrolling if its content exceeds the fixed visual panel height.

## Participate

Cards contain CTA buttons linking to:

- workshop attendance / registration
- abstract submission

## Contact

Email addresses should use `mailto:` links.

---

# 15. Accessibility

Implementation should preserve visual fidelity while meeting accessibility requirements.

Use:

- semantic `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- one primary page `<h1>`
- section headings as `<h2>`
- meaningful button/link labels
- keyboard-accessible programme tabs
- visible focus states
- adequate target sizes
- alt text for meaningful imagery
- decorative photography may use empty alt text if it provides no additional semantic information
- proper `aria-selected`, `role="tablist"`, `role="tab"`, and `role="tabpanel"` for programme tabs

Do not flatten text into images.

---

# 16. Asset inventory

Download the Figma-exported assets and store them locally before production deployment because MCP asset URLs are temporary.

### Hero image

```text
https://www.figma.com/api/mcp/asset/09c3f5d5-c391-4ca4-b53c-a0a22a652bf5.png
```

### About image

```text
https://www.figma.com/api/mcp/asset/de3d2c23-f2df-4795-b126-6da85deeeb50.png
```

### Participate background image

```text
https://www.figma.com/api/mcp/asset/df87b717-3b06-4e9e-9061-859bbfd8c709.png
```

### Logo SVG

```text
https://www.figma.com/api/mcp/asset/8f28df2b-14aa-4a4e-8885-15a3ccedbc29.svg
```

### Location icon SVG

```text
https://www.figma.com/api/mcp/asset/944b5ecb-815b-45b1-8f13-5c4673169550.svg
```

---

# 17. Fidelity priorities

If implementation tradeoffs are necessary, prioritize them in this order:

1. typography and type scale
2. color palette
3. section spacing and overall proportions
4. hero composition
5. large imagery and overlays
6. two-column section structure
7. programme styling
8. card radii/borders
9. micro-spacing
10. exact absolute coordinates

The final implementation should visually resemble the Figma screenshot at first glance rather than merely containing the same text.

---

# 18. Important implementation notes for an AI coding agent

- Do not recreate the Figma's absolute-coordinate structure literally.
- Use semantic document flow.
- Build reusable components.
- Preserve the desktop measurements as layout targets.
- Use CSS grid/flexbox and responsive breakpoints.
- Store repeated programme and committee content as structured data.
- Use Host Grotesk and correct weights.
- Download exact image and SVG assets rather than redrawing them.
- Keep the cream background slightly warm; do not substitute pure white.
- Keep coral/orange saturated and warm.
- Section heading alignment and the repeated 386 px left rail are major visual signatures of the design.
- The 12 px rounded corners recur throughout cards, imagery, programme containers, and content groups.
- Primary CTAs are very rounded pills.
- Uppercase tracked labels are a strong recurring brand pattern.

---

# 19. Desktop visual summary

```text
┌──────────────────────────────────────────────────────────────┐
│ HERO — Boston image + dark blue overlay                     │
│                                                              │
│ logo                              nav            register     │
│                                                              │
│ 20th International Workshop on                              │
│ Scleroderma                                                  │
│ Research                                                     │
│                                                              │
│ ───────────────────────────────────────────────────────────  │
│ DATES                LOCATION              ABSTRACTS CLOSE   │
│ 26–30 July 2027      Boston, MA            June 30, 2027     │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ ABOUT            [stat] [stat] [stat]                       │
│                  body copy                                  │
│                  large city image                           │
│                  body copy                                  │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ PARTICIPATE      [Attend card] [Submit card]                │
│ dark photo background                                       │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ PROGRAMME        [date tabs]                                 │
│                  [scrolling programme panel]                 │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ ORGANIZING       [co-chair] [co-chair]                      │
│ COMMITTEE        [member] [member] [member]                 │
│ peach bg         [member] [member] [member]                 │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ CONTACT                                                      │
│ ───────────────────────────────────────────────────────────  │
│ GENERAL             SUBMISSIONS             VENUE            │
│ email               email                   address          │
└──────────────────────────────────────────────────────────────┘
```

---

# 20. Source dimensions from Figma

Key desktop dimensions extracted from the selected node:

```text
Canvas width: 1440 px

Hero:
height: 900 px

Hero nav:
left: 120 px
width: 1200 px
top: 75 px

Hero title:
left: ~108 px
top: ~288 px
large title: 120 px

Hero divider:
left: 123 px
width: 1197 px
height: 4 px

Main section padding:
120 px

Section heading rail:
386 px

About content:
795 px

Programme content:
791 px

About image:
795 × 391 px

Programme panel:
height: 499 px

Typical card radius:
12 px

Button radius:
100 px / fully pill-shaped
```

---

This specification captures the selected Figma desktop design and should be used as the visual/build contract for an AI implementation agent.

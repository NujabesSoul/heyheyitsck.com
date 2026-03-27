# CLAUDE.md — heyheyitsck.com v2

## Who You're Building For

CK (Erick Allas) is a 33-year-old Renaissance Craftsman living in Edison, New Jersey. Filipino-American, first-generation, NJIT graduate. By day he's a Customer Support Specialist at Cresta (AI platform). By night he's reading Seneca, building self-hosted Linux infrastructure, learning classical drawing from plaster casts, and 3D printing things for his apartment. He has a quiet Christian faith, a wife named Holly, 350+ books across 50+ domains (collected, not all read — he's honest about that), and two YouTube channels.

He calls his approach "Renaissance thinking for the AI age." Not because he's trying to be Leonardo da Vinci. Because he genuinely believes the best ideas come from connecting things that aren't supposed to be connected.

This site is his home on the internet. It needs to feel like him — not like a template, not like AI wrote it, not like a LinkedIn profile with better fonts.

---

## Technical Stack

- **Framework:** Hugo (static site generator)
- **Hosting:** GitHub Pages (repo: `github.com/NujabesSoul/heyheyitsck.com`)
- **CSS:** Separate stylesheet(s). NOT inline, NOT in `<style>` blocks in HTML. The v1 had everything in one file and that's a maintenance nightmare. Separate your concerns.
- **JavaScript:** Minimal. Separate file(s) where needed. No heavy frameworks.
- **Fonts:** Google Fonts — Crimson Pro (headings), EB Garamond (body), JetBrains Mono (code/technical elements)
- **Deployment:** `git push` to main branch triggers GitHub Pages build
- **Dev environment:** CK uses VSCode on EndeavourOS (Arch-based Linux). `hugo server` for local preview.

### Hugo Setup Notes

- Install: `sudo pacman -S hugo`
- Use Hugo's content management for the blog/writing section — markdown files in `content/writing/`
- Create a blog post template (archetype) at `archetypes/writing.md` so CK can run `hugo new writing/my-post.md` and get a pre-filled frontmatter template
- The blog workflow should be Obsidian-compatible: CK may draft posts in his Obsidian vault and copy them to the Hugo content directory. Keep frontmatter simple and standard.
- GitHub Pages deployment via GitHub Actions (Hugo build action)

---

## Site Architecture

### Hybrid Structure: Condensed Landing + Deep Pages + Blog

The landing page (`/`) gives the full picture at a glance — every section condensed to its essence with a "read more" path to a dedicated page. Visitors who just want to scroll get the overview. Visitors who want depth can click through.

**Landing Page Sections (condensed):**

1. **Hero** — "Hey! Hey! It's CK." with subtitle and tagline
2. **About** — 2-3 paragraphs max. The honest version. Link to full about page.
3. **Currently** — Live "what I'm working on" cards (3-4 active projects) + latest YouTube embed. This replaces the old "Workshop" section. Keep it dynamic-feeling.
4. **The Renaissance Catalog** — Domain cards condensed. Link to full Renaissance page with 52 Skills tracker and reading list.
5. **The Scriptorium** — Three-layer cards (Manuscript, Brain, Web). Brief. Link to dedicated page if needed, or keep on landing page if it fits naturally.
6. **Writing** — Latest 2-3 blog posts with titles and dates. Link to full writing archive.
7. **Connect** — Email, LinkedIn, YouTube, Instagram, GitHub

**Dedicated Pages:**

- `/about/` — Full about with career (current role prominent, older roles brief with expandable or minimal treatment), education, skills
- `/renaissance/` — Full Renaissance Catalog with all 8 domains, 52 Skills tracker, reading lists (currently reading + read this year)
- `/writing/` — Blog archive. Individual posts at `/writing/post-slug/`
- `/career/` — Optional dedicated career page linked from About. Full timeline for people who want the detail.

**Navigation:** Clean top nav with: Home, About, Renaissance, Writing, Connect. Mobile hamburger menu.

---

## The Vellumere Color System

This is CK's custom Dark Academia palette, used across all his devices and tools. Use these exact values.

### Foundation

```
--deepest:    #1C1C1C   /* midnight study - primary background */
--charcoal:   #282828   /* fireplace soot - secondary surfaces */
--mahogany:   #3A2F2F   /* mahogany desk - borders, cards */
```

### Parchment & Paper

```
--cream:      #F5E6D3   /* old manuscript - primary text */
--parchment:  #E8D5C4   /* candlelit paper - secondary text */
--ivory:      #FFF8F0   /* fresh vellum - headings, emphasis */
```

### Accents

```
--burgundy:   #6B2C2C   /* wine-red curtains */
--russet:     #CD5C5C   /* red panda fur */
--auburn:     #BC544B   /* warm auburn - primary accent, dividers */
--forest:     #2F4538   /* deep forest ink */
--sage:       #4A5F4F   /* aged green leather */
--moss:       #5C6F5C   /* oxidized brass - success/active states */
--honey:      #C9A961   /* candlelight glow - links, highlights */
--brass:      #D4AF37   /* desk fixtures - hover states */
--slate:      #708090   /* charcoal sticks - muted text, dates */
--steel:      #536878   /* quill nib */
```

### Usage Rules

- **Backgrounds:** deepest (#1C1C1C) primary, charcoal (#282828) for cards/surfaces
- **Text:** cream (#F5E6D3) primary, parchment (#E8D5C4) secondary, slate (#708090) for dates/metadata
- **Headings:** ivory (#FFF8F0)
- **Links:** honey (#C9A961), hover to brass (#D4AF37)
- **Accents/dividers:** auburn (#BC544B)
- **Active/success indicators:** moss (#5C6F5C)
- **Borders:** mahogany (#3A2F2F)

### Texture

Add a subtle noise/grain overlay on the body (very low opacity, ~0.03). This gives the site a tactile, paper-like quality. The v1 had this and it works. Keep it.

---

## Voice & Copy Guidelines

### CK's actual voice

CK sounds like a late-night conversation with a friend who reads too much. He's conversational, sometimes mid-thought, honest about what he doesn't know, and occasionally funny in a self-aware way — not in a "written joke" way. He's the guy who says "I collected 350 books across 50 domains" and immediately adds "collected, not all read. I'm honest about that."

### What to preserve from v1

The About section copy is genuinely good. Lines like "I'm not a productivity influencer. I'm not optimizing my morning routine" and "spent years thinking that was a problem, and eventually realized it was the whole point" are CK's real voice. Keep the spirit of this writing.

### What to fix from v1

The v1 copy is *almost* right but reads slightly too polished in places — like a well-trained model writing *about* someone interesting rather than that person actually talking. Specific fixes:

- **Vary sentence structure more.** V1 falls into a pattern of "Statement. But counterpoint." Break that up.
- **Allow imperfect phrasing.** Not grammatical errors, but the kind of sentence a real person would write — slightly longer than necessary in one place, unexpectedly short in another. A parenthetical aside. A sentence fragment for emphasis.
- **Don't over-explain.** The Scriptorium description in v1 says "Named after the medieval writing rooms where monks preserved and created knowledge." CK wouldn't explain that — his audience either knows or can look it up. Trust the reader.
- **Faith is subtle.** The v1 line "On Sunday, I'm probably in a pew somewhere" is perfect — present but not performative. Keep that exact energy. Don't expand it.

### Anti-patterns (what reads as "AI wrote this")

- Every section having identical structure (header → italic subtitle → divider → prose → cards)
- Perfectly balanced sentence lengths throughout
- Card grids where every card has the exact same format and word count
- Overly clean transitions between ideas
- Motivational-poster epigraphs unless they genuinely mean something to CK (the Sennett quote and Ecclesiastes quote are real — keep those)
- Starting multiple sections with "I" or "The"

---

## Design Direction

### The feel

**Leather-bound journal that belongs to a specific person.** Not a generic Dark Academia template. Not a portfolio site with moody colors. This should feel like you found CK's actual notebook — there's personality in the margins, the organization has a logic that's clearly his, and the content is dense in an inviting way rather than an overwhelming way.

### What makes it CK specifically

- The Henry Mercer reference (a man who built a castle by hand to preserve disappearing crafts)
- The Filipino-American first-gen thread woven naturally
- The mix of high and low culture (Seneca AND Old School RuneScape, classical drawing AND 3D printing)
- Honest self-assessment ("collected, not all read")
- The Scriptorium as an original intellectual creation, not an adaptation
- Faith present but never loud
- The "Renaissance Craftsman" framing — not "Renaissance Man" which sounds dilettante

### Layout principles

- **Break the grid.** V1's biggest sin is every section using the same card grid. Mix full-width prose sections with asymmetric layouts, pull quotes, photo placements that interrupt the text flow naturally.
- **Visual variety between sections.** The About section should feel different from the Renaissance Catalog which should feel different from the Writing section. Different doesn't mean inconsistent — the palette and typography unify everything, but the layout should vary.
- **Whitespace is your friend.** Let sections breathe. Not every pixel needs content.
- **Photos will be real.** CK is shooting workspace photos this week. Design photo placements into the layout: the Studiolo workspace (4-monitor EndeavourOS setup), Scholar's Manuscript notebooks, the Bambu P2S printer, bookshelves. Use tasteful placeholder styling for now (solid color blocks with the Vellumere palette, maybe a subtle icon or text like "photo: workspace" in slate) that CK can swap with real images.

### Typography

- **Crimson Pro** — Headings, nav, UI elements. The structured voice.
- **EB Garamond** — Body text, prose, blog posts. The literary voice.
- **JetBrains Mono** — Code snippets, metadata, dates, technical labels. The maker voice.
- Use font weight and size variation for hierarchy, not just color. Thin weight Crimson Pro for large display text, semibold for section headers.
- Body at 18px, line-height 1.7. Generous reading experience.

### Responsive

- Mobile-first responsive design
- Hamburger menu on mobile
- Cards stack to single column
- Hero text scales down gracefully
- Blog posts should be very readable on mobile (this is where most reading happens)

---

## Content Inventory

### From v1 (migrate and improve)

**Hero:**
- "Hey! Hey! It's CK."
- Subtitle: "AI Platform Specialist. Renaissance Craftsman. Building intellectual sovereignty in the AI age."
- Tagline: "New Jersey · Renaissance Thinking for the AI Age"

**About section copy:** Mostly keep. Tighten where needed. The stats row (350+ books, 50+ domains, 52 skills, 8 devices) can stay but maybe integrate more naturally rather than a sterile stat block.

**Career:**
- Current: Customer Support Specialist, Cresta (May 2023 – Present)
- Previous: Autodesk (two stints), Imajion, Automattic, Cedonix
- Education: B.S. Information Technology, NJIT, May 2016
- On the landing page: only current role, brief. Full timeline on /about/ or /career/ page.
- Older roles should be mentioned but minimal — company name, title, dates. People can click through for descriptions.

**Renaissance Catalog domains:**
1. AI & Knowledge Systems (Core)
2. Self-Hosted Infrastructure (Core)
3. Photography & Videography (Core)
4. Making & Fabrication (Core)
5. Classical Drawing (Active Study)
6. Philosophy & Literature (Ongoing)
7. Gaming & Challenge Runs (Creative Outlet)
8. Faith & Theology (Foundation — keep subtle)

**52 Skills tracker:**
- Skills 1-13: Completed (Filmmaking, Front-End Dev, Sketching, Blender, Reading, Japanese, Notes, Meditation, Typing, Pixel Art, Animation, Cars, Lockpicking)
- Skills 14-17: In Progress (PC Building, Linux, Homelab, AI/Claude)
- Skills 18-21: Upcoming (3D Printing, Arduino, Soldering, Cast Drawing)
- Key line: "The number is the goal. Not the timeline."

**Scriptorium:**
- Layer I: Scholar's Manuscript (analog notebooks)
- Layer II: Scholar's Brain (AI collaboration — Claude + Gemini)
- Layer III: Scholar's Web (Obsidian vault, 500+ notes)
- Ecclesiastes 3:1 epigraph

**YouTube channels:**
- It's CK: Face channel, three tracks (Philosophy/thinking, Skills/doing, Systems/building)
- Vellumere: Faceless gaming/challenge content (Coming Soon)

**Contact links:** Email, LinkedIn, YouTube (@ckallas), Instagram (@heyheyck), GitHub (NujabesSoul)

### New content for v2

**Latest YouTube embed:** Auto-pull the most recent video from the @ckallas channel. Client-side JavaScript fetch from YouTube RSS/API is fine. Show thumbnail, title, and a "Watch on YouTube" link. If API is complex, a manual embed that CK updates is acceptable as v1.

**"Currently working on" section:** 3-4 cards showing active projects with status indicators. This should be easy to update — ideally a data file (JSON or TOML in Hugo's `data/` directory) that CK edits when projects change.

**Writing/blog section:** Hugo content type. Each post is a markdown file with frontmatter:
```yaml
---
title: "Post Title"
date: 2026-03-26
description: "Brief description"
tags: ["book-review", "philosophy"]
---
```

Create an archetype at `archetypes/writing.md` with this template pre-filled.

Blog post page should be clean, readable, generous margins. EB Garamond body text. The kind of page you'd want to read a long essay on.

---

## Photo Placement Plan

CK is shooting photos this week. Design these spots into the layout with placeholder blocks:

1. **Hero or About:** A photo of CK or his workspace. Could be a moody shot of the Studiolo (4-monitor setup with warm lighting) or the Scholar's Manuscript notebooks.
2. **Renaissance/Making section:** The Bambu P2S printer, or a 3D-printed object.
3. **Renaissance/Drawing section:** A cast drawing in progress, or the drawing setup.
4. **About or Scriptorium:** The bookshelf, or a close-up of the Kokuyo notebook system.

Photos should have a slight warm treatment (not filter-heavy, just consistent with the Vellumere palette). Consider CSS filters: slight warmth, subtle desaturation to make them feel cohesive.

Placeholder design: Use a mahogany (#3A2F2F) block with a thin auburn (#BC544B) border and slate text indicating what photo goes there (e.g., "workspace photo"). This way CK can see exactly where to drop images.

---

## File Structure

```
heyheyitsck.com/
├── CLAUDE.md
├── config.toml (or hugo.toml)
├── content/
│   ├── _index.md              # Landing page
│   ├── about.md               # Full about page
│   ├── renaissance.md         # Full Renaissance Catalog
│   ├── career.md              # Full career timeline (optional dedicated page)
│   └── writing/
│       ├── _index.md          # Writing archive page
│       └── first-post.md      # Sample blog post to demonstrate the template
├── archetypes/
│   └── writing.md             # Blog post template
├── data/
│   └── projects.json          # Active projects data (for "Currently" section)
├── layouts/
│   ├── _default/
│   │   ├── baseof.html        # Base template
│   │   ├── single.html        # Single page template
│   │   └── list.html          # List template (for writing archive)
│   ├── index.html             # Landing page template
│   ├── partials/
│   │   ├── head.html
│   │   ├── nav.html
│   │   ├── footer.html
│   │   ├── hero.html
│   │   └── projects.html      # Currently working on partial
│   └── writing/
│       ├── single.html        # Blog post template
│       └── list.html          # Writing archive template
├── static/
│   ├── css/
│   │   └── style.css          # ALL styles here. Separated. Not inline.
│   ├── js/
│   │   └── main.js            # Scroll animations, mobile menu, YouTube fetch
│   ├── images/                # Photos go here
│   └── CNAME                  # GitHub Pages custom domain
└── .github/
    └── workflows/
        └── hugo.yml           # GitHub Actions deploy workflow
```

---

## Hugo Configuration

```toml
baseURL = "https://heyheyitsck.com"
languageCode = "en-us"
title = "It's CK — Renaissance Craftsman"

[params]
  description = "Renaissance thinking for the AI age."
  author = "CK"
  tagline = "Learning things, building things, and trying to stay human in an increasingly automated world."

[markup.goldmark.renderer]
  unsafe = true  # Allow raw HTML in markdown if needed

[taxonomies]
  tag = "tags"
```

---

## What NOT to Build

- No dark mode toggle. The site IS dark mode. That's the Vellumere aesthetic.
- No analytics or tracking scripts. CK values digital sovereignty.
- No cookie banners. No third-party scripts beyond Google Fonts and YouTube embed.
- No comments system on blog posts (for now). If CK wants it later, Giscus (GitHub-based) is the move.
- No complex JavaScript frameworks. Vanilla JS only.
- No loading screens or heavy animations. Subtle scroll-triggered fade-ins are fine (the v1 had good ones). No parallax, no hero video backgrounds, no particle effects.
- No "productivity influencer" energy in any copy.

---

## Deployment

1. Hugo builds to `public/` directory
2. GitHub Actions workflow triggers on push to main
3. Action runs `hugo --minify`
4. Deploys `public/` to GitHub Pages
5. CNAME file in `static/` for custom domain

### GitHub Actions Workflow

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.145.0
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb
          sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v5
      - name: Build with Hugo
        run: hugo --minify --baseURL "${{ steps.pages.outputs.base_url }}/"
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Sample Blog Post (for demonstrating the template)

Create a sample post at `content/writing/hello-world.md`:

```markdown
---
title: "Why I Built This Site by Hand"
date: 2026-03-27
description: "On personal websites, intellectual sovereignty, and why I didn't just use Squarespace."
tags: ["meta", "systems"]
draft: true
---

There's something about building your own website that feels like building your own bookshelf. You could buy one from IKEA. It would work fine. It would hold your books. But you wouldn't look at it and think, "I made that."

This site runs on Hugo, deploys from a GitHub repo, and costs me nothing beyond the domain name. No monthly subscription. No CMS login. No themes marketplace. Just markdown files, a little HTML templating, and a color palette I've been refining across every device I own for the past year.

Is it overkill? Probably. But the Scriptorium was never about efficiency. It was about ownership.

More on that soon.
```

---

## Final Checklist Before Shipping

- [ ] All CSS is in separate file(s), not inline
- [ ] All JS is in separate file(s), not inline
- [ ] Mobile responsive (test at 375px, 768px, 1024px, 1440px)
- [ ] Nav works on mobile (hamburger menu)
- [ ] Blog post template renders correctly with sample post
- [ ] Photo placeholder spots are clearly marked
- [ ] `hugo server` runs without errors
- [ ] GitHub Actions workflow is included
- [ ] CNAME file is in static/ directory
- [ ] Fonts load correctly (Crimson Pro, EB Garamond, JetBrains Mono)
- [ ] No section looks identical to another section in layout
- [ ] Copy doesn't read like a template — it sounds like CK
- [ ] Epigraphs are only from sources that genuinely matter (Sennett, Ecclesiastes)
- [ ] Faith is present but subtle
- [ ] "Currently working on" section uses data file for easy updates
- [ ] Writing archetype exists for new blog posts
- [ ] Site title and meta descriptions are set

---

## Code Style — Write Like a Human, Not a Machine

This site should read like a person built it. Not just the copy — the code itself. If someone opens the CSS or a Hugo template, it should feel like CK sat down and wrote it, not like it was generated. Here's what that means:

### Variable Names Tell Stories

```css
/* BAD — what an AI names things */
--color-primary: #1C1C1C;
--color-secondary: #282828;
--color-accent-1: #BC544B;
--color-text-main: #F5E6D3;

/* GOOD — what CK would name things */
--deepest: #1C1C1C;
--charcoal: #282828;
--auburn: #BC544B;
--cream: #F5E6D3;
```

The color names in the Vellumere system aren't arbitrary — they're evocative. `--honey` tells you more than `--accent-warning-light` ever will. Use the names from the color system section above. Same principle applies to spacing, breakpoints, anything that gets a variable.

### Comments Explain WHY, Not WHAT

```css
/* BAD — describes what the code does (I can read the code) */
/* Sets the font size to 18px */
body { font-size: 18px; }

/* GOOD — explains the decision */
/* 18px body feels right for long-form reading on EB Garamond.
   Tested 16 and it felt cramped at this line-height. */
body { font-size: 18px; }
```

```html
<!-- BAD -->
<!-- Hero section -->
<section class="hero">

<!-- GOOD -->
<!-- The greeting is the first thing anyone sees. Keep it warm. -->
<section class="hero">
```

```js
// BAD
// Check if mobile
if (window.innerWidth < 768) {

// GOOD
// Hamburger menu only kicks in below tablet width
if (window.innerWidth < 768) {
```

### Don't Over-Comment

Not every line needs a comment. If the code is clear, let it breathe. Comment the non-obvious: why you chose a specific approach, what a magic number means, where a value came from, edge cases you're handling. Skip the obvious.

### Class Names Should Be Readable English

```html
<!-- BAD — BEM-heavy, robotic -->
<div class="section__card--active">
<div class="hero__content-wrapper">

<!-- GOOD — reads like a sentence -->
<div class="card active">
<div class="hero-content">
```

Keep class names short, descriptive, and human. `.role-title` over `.career-section__role-item__title`. `.skill-tag` over `.renaissance-catalog__skills-tracker__tag--completed`.

### Function Names Are Verbs That Make Sense

```js
// BAD
function handleClick() {}
function processData() {}
function updateUI() {}

// GOOD
function toggleMobileMenu() {}
function loadLatestVideo() {}
function highlightActiveNavLink() {}
```

### File Organization Should Be Intuitive

If someone opens the `static/css/` directory, they should immediately understand the structure. If there's one CSS file, organize it with clear section headers:

```css
/* ========================================
   FOUNDATION — reset, variables, base
   ======================================== */

/* ========================================
   TYPOGRAPHY — fonts, sizes, prose
   ======================================== */

/* ========================================
   NAVIGATION
   ======================================== */

/* ========================================
   HERO
   ======================================== */
```

These headers are for the human reading the file six months from now. That human is CK.

### Hugo Templates Should Be Readable

```html
<!-- BAD — dense, no breathing room -->
{{range .Pages}}{{if eq .Section "writing"}}<article><h2>{{.Title}}</h2><time>{{.Date.Format "January 2, 2006"}}</time></article>{{end}}{{end}}

<!-- GOOD — formatted for a human -->
{{ range .Pages }}
  {{ if eq .Section "writing" }}
    <article>
      <h2>{{ .Title }}</h2>
      <time>{{ .Date.Format "January 2, 2006" }}</time>
    </article>
  {{ end }}
{{ end }}
```

### The Test

Before finalizing any file, ask: "If CK opens this in VSCode six months from now at midnight, will he understand what's happening and why?" If the answer is no, add a comment or rename something.
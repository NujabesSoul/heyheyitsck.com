# heyheyitsck.com

Personal website for CK. Built with Hugo, deployed to GitHub Pages.

## Run locally

```bash
hugo server -D
```

The `-D` flag includes draft posts. Open `http://localhost:1313`.

## Create a new blog post

```bash
hugo new writing/my-post-slug.md
```

This uses the archetype at `archetypes/writing.md` to generate frontmatter. Posts are created as drafts by default — set `draft: false` when ready to publish.

## Where things live

```
content/
  _index.md              Landing page (frontmatter only — sections are in partials)
  about.md               /about/ page
  career.md              /career/ page
  renaissance.md         /renaissance/ page — domains, 52 Skills tracker, reading lists
  connect.md             /connect/ page
  writing/
    _index.md            Writing archive page
    hello-world.md       Sample post (draft)

data/
  projects.json          "Currently working on" section — edit this to update projects

layouts/
  index.html             Landing page — assembles section partials
  partials/              Each landing page section is its own partial
  writing/               Blog-specific templates (list + single post)
  _default/              Base templates (baseof, single, list)

static/
  css/style.css          All styles in one file, organized by section
  js/main.js             Scroll animations, hamburger menu, nav highlighting
  images/                Photos go here
  CNAME                  Custom domain config
```

## Update "Currently working on" projects

Edit `data/projects.json`. Each project has:

```json
{
  "name": "Project Name",
  "type": "Category",
  "status": "active",
  "description": "One or two sentences."
}
```

Status options: `active` (green dot, shown in main grid), `queued` (gold dot, compact "Up next" row), `waiting` (gray dot).

## Update reading lists

Reading lists live directly in two files:

- `content/about.md` — in the "What I'm Reading" section
- `content/renaissance.md` — in the "Reading" section at the bottom

Edit the `<div class="book-item">` blocks. Both pages have their own copy, so update both if the lists should match.

## Add real photos

1. Drop the image into `static/images/` (e.g., `static/images/workspace.jpg`)
2. Find the `photo-placeholder` div in the relevant file and replace it with an `<img>` tag:

```html
<!-- Before -->
<div class="photo-placeholder">photo: studiolo workspace</div>

<!-- After -->
<img src="/images/workspace.jpg" alt="The Studiolo — four monitors, warm lighting">
```

Photo placeholders are in:
- `layouts/partials/hero.html` — headshot (circular)
- `layouts/partials/about-preview.html` — workspace photo
- `content/about.md` — bookshelf/notebook photo
- `content/renaissance.md` — two placeholders (3D printer, workspace)

## Deploy

Push to `main`. GitHub Actions builds and deploys automatically.

```bash
git add -A
git commit -m "your message"
git push
```

The workflow is in `.github/workflows/hugo.yml`. It runs `hugo --minify` and deploys to GitHub Pages.

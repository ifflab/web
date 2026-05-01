# IFFLab website

Sources for [ifflab.xyz](https://ifflab.xyz). Built with
[Hugo](https://gohugo.io) and [Tailwind CSS](https://tailwindcss.com),
deployed via GitHub Actions to GitHub Pages.

---

## Adding content (no local setup needed)

Every page is a markdown file. You can edit directly in GitHub's web UI —
the site redeploys within a couple of minutes of a commit to `main`.

### Add a news post

1. On GitHub, go to `content/news/` and click **Add file → Create new file**.
2. Name the path `content/news/YYYY-MM-DD-short-slug/index.md`
   (the folder makes it a "page bundle" — any image you drop alongside can
   be referenced from the markdown).
3. Paste this as the content and edit:

    ```yaml
    ---
    title: "Your headline"
    date: 2026-05-01
    summary: "One sentence that appears in the news list."
    cover: ""           # e.g. "cover.jpg" — upload the image into the same folder
    draft: false
    ---

    Body in markdown.
    ```

4. Commit. Done.

### Add a person

1. On GitHub, go to `content/people/` and create a folder named
   `first-last/` with an `index.md` inside.
2. Paste:

    ```yaml
    ---
    title: "Full Name"
    role: "PhD student"        # PI, Postdoc, PhD student, MSc student, Visitor
    photo: ""                  # e.g. "photo.jpg"
    email: ""
    orcid: ""
    website: ""
    weight: 50                 # lower = appears earlier in the grid
    alumnus: false             # set to true to move them to the Alumni section
    ---

    Short bio in markdown.
    ```

3. Upload a `photo.jpg` into the same folder.
4. Commit.

### Add a publication

Edit `data/publications.yaml` and add a block at the top:

```yaml
- title: "Paper title"
  authors: "A. Author, B. Author"
  venue: "Journal name"
  year: 2026
  doi: "10.xxxx/yyyy"      # any of: doi, arxiv, pdf, code, url
  arxiv: "2604.12345"
```

### Add a research line

Create `content/research/some-topic.md`:

```yaml
---
title: "Research line name"
summary: "One or two sentences for the research index page."
weight: 10      # lower = appears earlier
---

Body in markdown.
```

---

## Local development

You only need **one** tool on your machine: [mise](https://mise.jdx.dev).
It reads `.mise.toml` and installs the exact pinned versions of Hugo and
Tailwind CSS used in CI. No Go, no Node, no conda.

```bash
# One-time, per machine
curl https://mise.run | sh
echo 'eval "$(~/.local/bin/mise activate bash)"' >> ~/.bashrc  # or zshrc

# In the repo
mise install                     # installs Hugo + tailwindcss CLI
hugo server -D --navigateToChanged
# → http://localhost:1313
```

Hugo rebuilds in ~200 ms. Edits to templates or content are live-reloaded
in the browser automatically.

### Pinned versions

See `.mise.toml`. To bump, edit the version string and run `mise install`.
The same file is read by CI, so pinning is the single source of truth.

---

## Project layout

```
.mise.toml              tool pins (Hugo, Tailwind)
hugo.toml               site config (title, menus, baseURL)
archetypes/             templates for `hugo new`
content/                your markdown lives here
  _index.md             home page body
  news/                 one folder per post
  people/               one folder per person
  research/             one markdown file per topic
  publications/         (list rendered from data/publications.yaml)
  contact.md
data/
  publications.yaml     edit to add papers
layouts/                custom HTML templates (the "theme")
  _default/             generic single + list
  partials/             head / header / footer / cards
  news/                 news list + single
  people/               people grid + profile
  research/             research index
  publications/         data-driven publications list
  index.html            home page
assets/
  css/main.css          Tailwind entry + custom tokens
  js/theme-toggle.js    dark-mode toggle button
static/
  CNAME                 holds `ifflab.xyz`
  logo.svg              placeholder logo
```

All templates live in `layouts/`. There is no external theme — nothing to
`git submodule update`, nothing to fight with upstream.

---

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and deploys
to GitHub Pages via the official `actions/deploy-pages` path.

### First-time GitHub setup

1. Create the repo `ifflab/web` and push `main`.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. At your DNS provider, add these **A records** for the apex `ifflab.xyz`:

   | Type | Name        | Value             |
   |------|-------------|-------------------|
   | A    | `@`         | `185.199.108.153` |
   | A    | `@`         | `185.199.109.153` |
   | A    | `@`         | `185.199.110.153` |
   | A    | `@`         | `185.199.111.153` |

   Optionally add matching AAAA records for IPv6 (see
   [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).

4. After the first successful deploy, go back to **Settings → Pages** and
   tick **Enforce HTTPS** once the certificate has provisioned (usually
   within an hour).

`static/CNAME` already contains `ifflab.xyz`; Hugo copies it to `public/`
at build time, and GitHub Pages honours it.

---

## Dark / light mode

Automatic by default: uses `prefers-color-scheme` from the visitor's OS.
The toggle button in the header lets a visitor override, and the choice
is saved in `localStorage`. A tiny inline script in `<head>` applies the
class before the first paint so there is no "flash of wrong theme".

To change theme colours, edit `assets/css/main.css` — the
`--color-brand-*` custom properties in the `@theme` block are the single
source of truth for the accent colour.

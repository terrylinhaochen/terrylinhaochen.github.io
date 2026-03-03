# SEO implementation notes (2026-03-02)

## Scope completed

### 1) Linked `llms`/`qa` assets from crawlable HTML
- Updated `layouts/partials/footer.html` to include persistent crawlable links in footer:
  - `archived/` (converted to relative Hugo URL helper)
  - `llms.txt`
  - `qa/README.md` (QA index)

This ensures machine-readable assets are discoverable from regular indexable pages, not only by direct URL guesswork.

### 2) Head-level discoverability hints
- Updated `layouts/partials/head.html` to add:
  - `<link rel="alternate" type="text/plain" ... href="/llms.txt">`
  - `<link rel="alternate" type="application/x-ndjson" ... href="/qa/agent-faq.jsonl">`

These are lightweight hints for crawlers/tooling without introducing heavy template changes.

### 3) Canonical consistency hardening
- Removed the duplicate canonical declaration in `head.html`.
- Canonical remains centralized in `layouts/partials/seo.html` as:
  - `<link rel="canonical" href="{{ .Permalink }}">`

Result: one canonical source per page template path, reducing duplicate head tag noise.

### 4) Relative-link consistency
- Replaced hardcoded absolute root link in footer (`/archived/`) with Hugo-relative helper:
  - `{{ "archived/" | relLangURL }}`
- Used Hugo URL helpers for new footer links as well.

### 5) Sitemap support for machine-readable endpoints
- Updated `layouts/sitemap.xml` to include explicit `<url>` entries for:
  - `llms.txt`
  - `qa/README.md`
  - `qa/agent-faq.jsonl`

This provides an additional crawl path beyond internal links.

## Build + validation
- Ran `hugo` successfully.
- Verified generated `docs/` outputs include updates:
  - footer links to `llms.txt` and `qa/README.md`
  - head `<link rel="alternate">` entries
  - single canonical tag on tested page
  - sitemap entries for the new machine-readable endpoints

## Next suggested steps
1. Add a small `content/qa.md` landing page (HTML) that summarizes QA corpus and links each topic markdown file for better human + crawler UX.
2. Add `lastmod` automation for static QA/LLMS artifacts if frequent updates are expected.
3. Optionally add a short `robots.txt` comment block documenting `llms.txt` and QA endpoints for maintainers.
4. Consider pruning duplicate/overlapping meta tags across `seo.html` + other schema partials over time to reduce head bloat.

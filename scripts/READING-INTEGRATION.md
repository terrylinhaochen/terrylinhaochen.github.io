# Reading integration with Answer with Books

The Hugo reading catalog remains the source of Terry's personal reading history. `data/books.yaml` and `data/readwise_books.json` are unchanged; visitor requests never enter Past Reads automatically.

## What is shared

- The real Answer with Books `AddBookDialog`, book matching, PDF extraction, image OCR, email validation and confirmation handler. The export route is `src/pages/embed/book-upload.astro` in the AWB web repo.
- The existing focused reader, with this site's 31-book payload and return links.
- Four existing editorial digests and covers. Twenty-seven short, source-linked orientations are in `data/reading_guides.json` and `data/shelf_reading_guides.json`; these are not full-text books or Terry's personal notes. Original generated artwork and prompts are stored locally, with live HTML titles overlaid for legibility.

## Rebuild the shared export

1. In the AWB web repo, run `npm run build:local`.
2. From this repo, run `node scripts/import-answer-with-books.mjs /path/to/answerwithbooks/web`.
3. Run Hugo normally. The committed `static/reading/` and `static/reading-app/` exports allow GitHub Pages builds without an AWB checkout or build-time API keys.

The import validates that each currently included past read and shelf book has a guide; a newly synced Readwise title must be reviewed and added to `data/reading_guides.json` before a subsequent import. No Readwise highlights or private notes are ingested. Existing personal notes are passed through separately.

## Verify locally

Run `hugo --destination /tmp/chenterry-reading-preview --baseURL http://127.0.0.1:1313/`, then serve that directory on port 1313. Run `node scripts/test-reading-integration.mjs /path/to/answerwithbooks/web`. The test uses Playwright from the AWB repo and an installed Chrome; set `READING_TEST_URL` to override the preview URL.

The browser test checks all 31 cards, covers and detail routes, including 20 unread-status checks; all 31 focus-reader return paths and matching for all 20 shelf titles; personalization prompt copying; required email; one-character Chinese title matching; actual PDF extraction and image OCR; mobile overflow and local asset errors. Supabase responses are mocked to test submission and local persistence without creating production requests.

## Data and privacy

Uploads are parsed in the browser. Unknown matches can query Open Library. Confirmation sends book metadata and the required email to the existing AWB `book_requests` service using its public browser client and existing row-level security. No service-role key is bundled, and raw files are not stored. The resulting request and local browser additions are separate from Terry's public history. Existing-book confirmations link directly to a guide; new-book requests require editorial processing before a digest is ready. The copied personalization prompt is a user-controlled handoff, not an integrated LLM endpoint.

## Publishing

The existing Hugo GitHub Actions workflow builds and deploys on pushes to main. This change does not alter that workflow. Preview builds use a temporary destination to avoid changing tracked `docs/` output or publishing unrelated local drafts.

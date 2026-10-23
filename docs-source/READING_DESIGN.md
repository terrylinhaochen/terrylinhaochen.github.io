# Reading shelf design

The personal shelf uses Answer with Books' `BookJacket` composition: illustrated art above a cream title/author panel, a cloth spine, paper edges, and a tilted cover inside a muted gallery well. Hugo renders it through `layouts/partials/reading-cover.html`; both shelf cards and individual reading pages use that partial. The shared jacket CSS is copied verbatim from AWB. The Hugo card grid uses four columns on desktop, three on tablet, and two on mobile; reduced motion and dark mode are supported.

All 31 titles and local reading-guide links stay unchanged. Five titles have matching AWB cover assets: The Mom Test, The Design of Everyday Things, The Crowd, Thinking, Fast and Slow, and The Wisdom of Crowds. The other 26 keep their existing title-specific illustrations inside the same new jacket. These are not claims that those titles have full AWB digests or newly generated artwork.

To update covers and styling from a verified AWB website checkout:

```sh
node scripts/sync-reading-design.mjs /path/to/answerwithbooks/web
hugo --destination /tmp/chenterry-reading-build
```

`data/reading_cover_assets.json` records the source commit, asset URLs and SHA-256 values, plus every retained illustration. Cover overrides live separately from the editorial importer so refreshing editorial content cannot silently restore old cover choices. This sync does not run generation, replace content, or import the full application. Review changes to AWB jacket markup against the Hugo partial when its structure changes.

The personal site's older upload, personalizer and speed-reader integration remains separate from AWB's current managed/BYOA processing flows. This visual update does not migrate those features.

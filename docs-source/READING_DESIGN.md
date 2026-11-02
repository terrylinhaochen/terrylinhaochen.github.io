# Reading shelf design

The personal shelf uses Answer with Books' `BookJacket` composition: illustrated art above a cream title/author panel, a cloth spine, paper edges, and a tilted cover inside a muted gallery well. Hugo renders it through `layouts/partials/reading-cover.html`; both shelf cards and individual reading pages use that partial. The shared jacket CSS is copied verbatim from AWB. The Hugo card grid uses four columns on desktop, three on tablet, and two on mobile; reduced motion and dark mode are supported.

All 31 titles and local reading-guide links stay unchanged. Five titles have matching AWB cover assets: The Mom Test, The Design of Everyday Things, The Crowd, Thinking, Fast and Slow, and The Wisdom of Crowds. Thirteen illustrations were regenerated in November 2026 using the same visual references; the remaining thirteen retain their earlier illustrations. These covers do not imply that the titles have full AWB digests.

To update covers and styling from a verified AWB website checkout:

```sh
node scripts/sync-reading-design.mjs /path/to/answerwithbooks/web
hugo --destination /tmp/chenterry-reading-build
```

`data/reading_cover_assets.json` records the source commit, asset URLs and SHA-256 values, plus every retained illustration. Cover overrides live separately from the editorial importer so refreshing editorial content cannot silently restore old cover choices. This sync does not run generation, replace content, or import the full application. Review changes to AWB jacket markup against the Hugo partial when its structure changes.

## Generate a matching illustration

Use the built-in image generation tool, one illustration per book. The November prompts, reference paths, output paths, and hashes are recorded in `data/reading_cover_generation_202611.json`. Use `static/images/reading-covers/awb/the-mom-test.jpg` and `static/images/reading-covers/awb/the-design-of-everyday-things.jpg` as visual references. Keep the illustration text-free: one bold object, a warm cream outline, a dark edge, simple cel shading, and a solid saturated background. Place the object in the upper portion of a portrait 2:3 canvas; Hugo supplies the title and author panel.

Save new assets in a dated directory under `static/images/reading-covers/`, preserving the previous originals. Add their paths to `data/reading_cover_overrides.json`. The shared partial resolves the library cover first, then the AWB asset mapping, then these manual overrides. The AWB sync and editorial importer do not overwrite the manual override file. The `series` value adds a CSS class for generation-specific framing; the November series shifts the illustration upward slightly to fit the jacket's art panel.

Run `hugo --cleanDestinationDir`, then inspect the expanded shelf and individual book pages in the local preview at desktop and mobile sizes. Check that every replacement loads, the object fits above the cream panel, and long titles remain legible. Keep publication separate from generation and preview approval.

The personal site's older upload, personalizer and speed-reader integration remains separate from AWB's current managed/BYOA processing flows. This visual update does not migrate those features.

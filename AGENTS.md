# AGENTS.md — Blog Writing & Editing Requirements

This file defines how agents should draft, revise, and maintain writing in this repo.

## Goal
Produce writing that is useful for decision-making, not generic content output.

## House Style (Every-style, adapted)
- Write in full paragraphs by default; avoid list-heavy structure unless format requires it.
- Keep tone direct, precise, and grounded.
- Prefer concrete claims over abstract language.
- Use active voice and short-to-medium sentence length.
- Avoid performative hype, filler adjectives, and obvious AI phrasing.
- Prioritize clarity over cleverness.

## Quality Bar
Every post should answer four questions clearly:
1. What is the claim?
2. What evidence supports it?
3. What changed relative to prior view?
4. What should the reader do with this insight?

## Evidence Standard
- Claims about future direction (6–12 months) must tie to observable signals.
- Distinguish between observation, interpretation, and recommendation.
- If evidence is weak, state uncertainty explicitly.

## Structure Requirements
- Opening: state problem/tension in first 120 words.
- Body: develop argument with causal logic, not bullet accumulation.
- Closing: provide a practical implication or decision frame.
- Keep paragraphs cohesive (single idea per paragraph).

## Revision Rules
- When updating an existing post, optimize current version for usefulness.
- Preserve major thesis changes via changelog/frontmatter note when practical.
- Remove stale sections rather than appending contradictory fragments.

## CrowdListen-Specific Requirements
- Emphasize signal → interpretation → execution flow.
- Keep product language operational (what changes in workflow), not just conceptual.
- Tie agent workflows to intent preservation and decision quality.

## Do Not
- Do not leave outline placeholders in published posts.
- Do not default to bullet-point dumps for core thesis sections.
- Do not keep redundant sections that repeat the same claim.

## Agent-Discovery Files (`llms.txt`, `llms-full.txt`)
- `static/llms.txt` must stay concise and act only as a router (entry points + topic map).
- `static/llms-full.txt` is the authoritative long index for agents and should contain:
  - key thesis posts,
  - CrowdListen posts,
  - foundational posts.
- Every listed item should have exactly one-line context + canonical URL on `https://chenterry.com/...`.
- When adding/removing key posts, update both files in the same change.
- After edits, run `hugo` and verify generated outputs exist at `docs/llms.txt` and `docs/llms-full.txt`.

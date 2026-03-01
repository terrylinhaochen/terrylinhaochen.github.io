---
title: "Agentic Engineering: How One Developer Ships Like a Team"
date: 2026-02-28
author: Terry Chen
tags: ["Posts"]
categories: ai
description: "I spent a day researching how Peter Steinberger ships hundreds of commits a day alone. What I found forced me to confront something uncomfortable: I've been using AI agents wrong the whole time."
keywords: ["agentic engineering", "Peter Steinberger", "OpenClaw", "Claude Code", "Codex CLI", "AI agents", "developer workflow", "agent economy", "vibe coding", "spec-driven development", "Two-Context Technique", "CrowdListen"]
---

I've been spending hundreds of dollars a month on OpenClaw and wondering if I was getting the most out of it. That question led me down a rabbit hole: how does Peter Steinberger, the person who *built* OpenClaw, actually work?

What I found was 8,471 commits across 48 repositories in 72 days. Alone. Not with a team. Not with contractors. With agents.

That number forced me to ask a harder question: if I'm using the same tools and getting a fraction of that output, what am I doing differently?

The answer was simpler and more uncomfortable than I expected.

---

## The Three Stages

**Three years ago** I was managing a team of twelve engineers. I wrote zero code. My job was to think about the product, write the specs, and hand them to people who would figure out how. Engineers resolved the ambiguity — they read the spec, find the gaps, push back on the parts that don't make sense.

**Two years ago** I went back to building by myself. Writing specs and code — the whole stack. The bottleneck became my own implementation capacity. I could only move as fast as I could type. This also allowed me to experiment with early coding agents and get an early sense of where agents are goig.

Then AI coding assistants got good enough to matter. I started using Claude and Codex constantly. I shipped 10-20 commits a day, doing what required weeks in hours. For a long time I told myself I was working at a higher level. But when I looked honestly at how I was using these tools, I realized: **I was still in Stage 2. Just with faster autocomplete.**

Database migration I knew the shape of → asked Claude for the syntax.  
React component I knew the structure of → asked Claude to type it.  
Production bug I'd already diagnosed → asked Claude to find the line.

In every case I had done the thinking. I handed the agents certainty and kept the ambiguity for myself. That's not a team. That's a very fast junior developer.

---

## What Steinberger Actually Does

When I dug into his workflow — six blog posts in full, GitHub commit history via API, his 23.5KB AGENTS.md file, podcast transcripts, public gists — the picture that emerged was nothing like what I expected.

The commits aren't from Steinberger typing. They're from agents executing against specs so complete they don't need to ask clarifying questions.

### Voice first, always

He uses **WisprFlow** — holds `Fn`, talks, releases. Long, rambling, incoherent thoughts. He doesn't craft prompts. He thinks out loud and lets the transcription handle it. The shift matters: carefully written prompts optimize for precision, voice prompts optimize for *reasoning*. Agents respond better to reasoning.

### The spec is the work

The voice dump goes into **Google AI Studio** — Gemini with a one-million-token context window. Gemini turns rambling into a structured **Software Design Document** (SDD). Not bullets. A 500-line specification covering architecture, data model, edge cases, failure modes, what not to build, and why.

Why Gemini for planning? Because it won't artificially shorten the output. You ask for a comprehensive spec and get a comprehensive spec. Other models trim. When planning, verbose is better.

He also uses **repo2txt** to convert any reference codebase into a single markdown file, feeds it to Gemini, and asks: *"Which edge cases are implemented here that I didn't think of?"* The existing solution becomes input to the spec.

### The Two-Context Technique

Once he has a first draft, he opens a **fresh, separate Gemini context** — no shared history — pastes the spec, and prompts:

> *"Take this SDD apart. Give me 20 points that are underspecified, weird, or inconsistent."*

The fresh context critiques without mercy. He copies those twenty points back to the **original context** — which holds the full history of how decisions were made — and resolves them. Three to five rounds. The critiques get increasingly niche. That's the signal: the spec is bulletproof.

The result goes into `docs/spec.md`.

### The prompt

He opens his agent, types:

> *"Build spec.md"*

And leaves for two to four hours.

The commits that land — `feat: add OAuth callback handler`, `fix: session not persisting on logout`, `test: add middleware tests` — are the agent committing each logical unit of work as it finishes. Run several parallel sessions on non-overlapping areas of the codebase. The commit count is a byproduct. Not the goal.

---

## The Tools (And Why He Keeps Changing Them)

What makes his approach interesting is that he's been through four distinct phases in about eighteen months. The workflow principles stay constant; the specific tools evolve. That evolution is worth understanding.

**Phase 1 (early 2025):** Gemini for specs + Claude Code for implementation. Established the core loop.

**Phase 2 (mid-2025):** Cursor with two parallel windows. Used multiple models — Gemini 2.5 Pro as the workhorse, o3 as what he called the "Dark Knight" (expensive, reserved for the hardest bugs), and Claude Opus for complex tasks. On Opus: *"Very capable, but prone to 'vision quests' — deviating from the original task if it hits a snag."*

**Phase 3 (late 2025):** Back to Ghostty + Claude Code. Removed all MCPs. *"Less is more."* Ran four Claude instances side by side on a 40" ultrawide monitor sized specifically to fit four terminals and a browser without moving windows.

**Phase 4 (2026, current):** Fully switched to **Codex CLI**, running 3–8 instances in a 3×3 terminal grid. When asked why he left Claude Code after championing it:

> *"I used to love Claude Code, these days I can't stand it anymore. It's the language, the 'absolutely right's, the '100% production ready' messages while tests fail — I just can't anymore. Codex is more like the introverted engineer that chugs along and just gets stuff done."*

Specific advantages he cites: ~230k usable context vs Claude's 156k, message queuing (pre-queue multiple tasks and it works through them), written in Rust (no freezes), and it reads the codebase eagerly before starting rather than diving straight in.

**The tools that have stayed constant across all phases:**

- **WisprFlow** — voice input for all prompts
- **Poltergeist** — build watcher he built and open-sourced; auto-rebuilds on file save so agents always test fresh code. *"In agentic engineering, loop iteration speed is everything."*
- **VibeTunnel** — tunnels your terminal to the browser, check on agents from your phone
- **CLIs over MCPs** — one line per tool in AGENTS.md, no MCP servers. *"If you add MCPs, you just pollute the context. Claude sometimes would go off spinning up Playwright unasked when it could simply read the code."*

---

## The AGENTS.md Is the Product

His AGENTS.md is 23.5KB. That's not a quick-start note. It's an operating manual.

It includes a custom `scripts/committer` tool that scopes git staging precisely — agents commit only the files they actually touched. A `sync` shorthand: one word = commit + pull rebase + push. Explicit multi-agent safety rules (never use `git reset --hard` on another agent's work, never delete files to silence type errors, always `git status` before committing). A dedicated `.agents/skills/PR_WORKFLOW.md` that defines the full PR triage → review → rebase → merge pipeline.

The result: community contributors submit PRs written with Claude Code. His landing agents review and merge them. The entire contribution pipeline — from feature request to merged commit — is AI-native end to end. His AGENTS.md teaches other people's agents how to contribute to his project correctly.

His `CLAUDE.md`, by the way, is 9 bytes. It just contains `AGENTS.md`. Claude Code reads `CLAUDE.md` by convention; it redirects to the full instruction set. Tool-agnostic by design.

---

## Blast Radius

The mental model he uses to decide how many agents to run and how closely to watch them:

**Blast radius** = the surface area of files and modules a change will touch.

Small blast radius (two or three isolated files): run four agents in parallel, each on a different area, collect commits when they're done.

Large blast radius (a shared module half the codebase imports): one agent, close watch. If it takes longer than expected, press Escape:

> *"I just hit escape and ask 'what's the status' to get a status update and then either help the model find the right direction, abort, or continue. Don't be afraid of stopping models mid-way — file changes are atomic and they are really good at picking up where they stopped."*

Before anything ambiguous, he uses an uncertainty probe: *"Give me a few options before making changes."* Gauge scope before committing to an approach.

This is product management skill, not engineering skill. Which changes run in parallel, which get serialized, when to intervene — these are the same judgments you'd apply to a team. The execution surface changed. The underlying thinking didn't.

---

## The Realization

The skills I built managing an engineering team are exactly the skills I need to manage agents.

Write clear specs. Assess blast radius. Notice when something is drifting and correct before it compounds. Review output, catch the subtle issues, make the architectural calls.

What changed:
- Cost of a hire is ~$200/month instead of a salary
- Feedback loop is hours instead of weeks  
- Specs need to be better — agents can't ask clarifying questions the way humans can
- Blast radius calculations matter more — agents don't have intuitions about shared systems

What didn't change:
- Spec quality determines output quality
- Technical debt accumulates if you don't actively manage it
- The hardest problems are still design problems: dependencies, data models, forward-thinking architecture

Steinberger's framing for the distinction between his approach and "vibe coding":

> *"Vibe coding is prompting without thinking, hoping the model figures it out. Agentic engineering is deliberately guiding capable agents toward outcomes you've thought through."*

And then, honestly:

> *"I do agentic engineering, and then maybe after 3:00 AM I switch to vibe coding, and then I regret it. You should have just gone to sleep."*

---

## What I'm Changing

**Specs before sessions.** Anything more than a two-liner gets a spec first. Ambiguity resolved before implementation starts.

**Two-Context Technique for planning.** Paste rough plan into a fresh session, ask for ten ways it goes wrong. The critique is unsentimental. Fix the issues. Then build.

**`plan only` before every non-trivial session.** Review the plan. Steer if needed. Then: "build it." One correction at plan stage saves ten corrections mid-implementation.

**Agents commit atomically.** In AGENTS.md: *"Commit after each logical unit of work."* The commit history becomes a readable log and a recovery surface.

**Blast radius assessment before every session.** Frontend component: low blast radius, two parallel sessions. Backend changes touching shared modules: one session, I'm watching.

**Tests immediately after features, same context, separate prompt.** The agent has full context of what it built. This is the only time tests are cheap and actually find real bugs.

**Escape → "what's the status."** Mid-task check-in instead of waiting for completion.

---

## The Part Nobody Warns You About

When the bottleneck was implementation capacity, I stopped when I ran out of capacity. Physical constraint.

When the bottleneck shifts to spec quality, the constraint is cognitive. Cognitive limits are harder to notice than physical ones.

The agent economy doesn't make you more productive automatically. It makes you more *capable*, which creates more rope. A vibe-coded session at 2am can cost a full day of cleanup.

The discipline is: when you can't write a good spec, stop. Spec quality is the rate-limiting step. When it degrades, everything downstream degrades with it.

---

## Start Here

```
□ Install Ghostty (or any stable terminal with good split-pane support)
□ Install WisprFlow — dictate prompts, stop typing them
□ Install Claude Code or Codex CLI
□ Install gh, vercel, psql — services with CLIs, no MCPs
□ Install Poltergeist — brew tap steipete/tap && brew install poltergeist

□ Next feature: write a rough spec in Google AI Studio first
□ Two-Context Technique: paste spec into fresh window → "20 inconsistencies"
□ Fix them. Save as docs/spec.md.
□ Prompt: "plan only: build docs/spec.md" → review → "build it"
□ After: "add tests for what we just built" (same session, separate prompt)
□ Commit atomically. Ship.
```

---

Steinberger joined OpenAI in early 2026 to work on bringing agents to everyone. OpenClaw — which grew to 180,000+ GitHub stars and PR numbers in the thirty-thousands — moved to an independent foundation and stayed open source.

The shift from managing twelve humans to managing twelve agents preserves more than I expected. Same judgment, same spec discipline, same instinct for when something drifts. What changes is the cost of a hire, the speed of the feedback loop, and the minimum viable quality of a spec.

Get the spec right. The rest follows.

---

*I'm building [CrowdListen](https://crowdlisten.com) — audience research powered by AI. I also just launched a way to [connect your AI agent to CrowdListen](https://crowdlisten.com/agents) directly — your agent can run real audience analyses on your behalf.*

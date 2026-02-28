---
title: "8,471 Commits in 72 Days: How OpenClaw's Creator Works Alone at Team Scale — and What It's Changing About How I Build"
date: 2026-02-28
author: Terry Chen
tags: ["Posts"]
categories: ai
description: "I spent a day researching how Peter Steinberger (creator of OpenClaw) ships hundreds of commits a day by himself. What I found forced me to rethink everything about how I work with AI agents — and the difference between using agents as tools versus managing them like a team."
keywords: ["agentic engineering", "Peter Steinberger", "OpenClaw", "Claude Code", "AI agents", "developer workflow", "agent economy", "vibe coding", "spec-driven development", "Two-Context Technique", "CrowdListen"]
---

I've been spending hundreds of dollars a month on OpenClaw — the AI agent platform — and wondering if I was getting the most out of it. That question led me down a rabbit hole: how does Peter Steinberger, the person who *built* OpenClaw, actually work?

What I found was 8,471 commits across 48 repositories in 72 days. Alone. Not with a team. Not with contractors. With agents.

That number broke my mental model for what's possible, and it forced me to ask a harder question: if I'm using the same tools and getting a fraction of that output, what am I doing differently?

The answer turned out to be simpler and more uncomfortable than I expected.

---

## Three Eras of How I've Worked

To explain why this hit me the way it did, I need to back up.

**Three years ago**, I was managing a team of twelve engineers. I wrote zero code. My job was to think about the product — what to build, why, for whom — write the specs, and hand them to people who would figure out how. The engineers were good at resolving ambiguity. They'd read the spec, find the gaps, ask questions, push back on the parts that didn't make sense. The thing that got built was almost always better than what I'd written down, because smart people had reasoned through it.

**Two years ago**, I stepped back into an individual contributor role and started building CrowdListen largely by myself. I was writing specs and code — the whole stack. Slower in some ways than having a team, but faster in others because I didn't need to translate ideas across minds. The bottleneck was my own implementation capacity.

Then AI coding assistants got good enough to matter. I started using Claude constantly. And for a long time, I told myself I was working differently — more efficiently, at a higher level. But when I actually looked at how I was using Claude, I realized something: **I was still doing Stage 2. Just with faster autocomplete.**

I had a database migration I knew the shape of. I asked Claude for the syntax.

I had a React component I knew the structure of. I asked Claude to type it.

I had a production bug I'd already diagnosed. I asked Claude to find the specific line.

In every case, I had done the thinking. I handed Claude the certainty and kept the ambiguity for myself.

That's not a team. That's a very fast junior developer. And it's a completely different thing from what Steinberger is doing.

---

## What Steinberger Actually Does

When I dug into his workflow — reading six blog posts in full, pulling his GitHub commit history through the API, reading his 23.5KB AGENTS.md file, tracking down his public gists and podcast appearances — the picture that emerged was nothing like what I expected.

The commits aren't from Steinberger typing. They're from agents executing, autonomously, against specs so complete that the agents don't need to ask clarifying questions.

Here's the workflow, start to finish.

### Step 1: Brain dump via voice

He uses **WisprFlow** — holds the `Fn` key on his Mac, talks, releases. Long, rambling, incoherent thoughts. He doesn't craft prompts. He thinks out loud. WisprFlow transcribes. The model corrects for intent.

This is the first thing I want to steal. I've been spending time carefully writing prompts, and he's spending time *thinking* and letting the transcription handle the rest.

### Step 2: Spec generation in Gemini

The voice dump goes into **Google AI Studio** — Gemini with a one-million-token context window. Gemini turns the rambling into a structured **Software Design Document (SDD)**. Not a sketch. A 500-line comprehensive specification covering architecture, data model, edge cases, failure modes, what not to build, why.

Why Gemini for this and not Claude? Because Gemini in AI Studio won't artificially shorten the output. You ask for a comprehensive spec and you get a comprehensive spec. Other models are more aggressive about brevity, which is the opposite of what you want when planning.

He also uses **repo2txt** (repo2txt.simplebasedomain.com) to convert any reference GitHub repo into a single markdown file — selects only source files and docs, skips tests and images — and drags that into the Gemini conversation. Then asks: *"Which edge cases are implemented here that I didn't think of?"* The existing solution becomes input to the spec.

### Step 3: The Two-Context Technique

This is his signature move, and it's the most underrated thing in his entire workflow.

Once he has a solid first draft spec, he opens a **fresh, separate Gemini context** — no shared history — pastes the spec, and prompts:

> *"Take this SDD apart. Give me 20 points that are underspecified, weird, or inconsistent."*

The fresh context has no attachment to the decisions that produced the spec. It critiques without mercy.

He copies those twenty points back to the **original context** — which has the full history of how the spec was developed — and resolves each one. Then repeats: fresh context critiques, original context improves. Three to five rounds. Until the critiques become increasingly niche. That's the signal: the spec is bulletproof.

The result goes into `docs/spec.md` in the repository.

### Step 4: "Build spec.md"

He opens Claude Code, types two words, and leaves.

> *"Build spec.md"*

Two to four hours later, he reviews the result. The spec contained everything the agent needed. No clarifying questions required. The commits that land — `feat: add OAuth callback handler`, `fix: session not persisting on logout`, `test: add middleware tests` — are the agent committing each logical unit of work as it finishes.

Four parallel sessions, each covering a different non-overlapping area of the codebase. Do the math: four agents, two hours each, committing atomically at each step. That's where the commit count comes from.

---

## The Tools That Make It Work

The workflow is the insight. But the specific tools matter too, and the choices are deliberate.

**Ghostty** — his terminal of choice. He runs four instances in split panes on a Dell UltraSharp U4025QW (40 inches, 3840×1620 resolution — sized specifically so four Claude instances and a browser fit without moving windows). VS Code's terminal freezes when pasting large text. Ghostty doesn't.

**WisprFlow** — voice-to-text for all prompts. Hold `Fn`, talk, release. The transcription does semantic cleanup. Long, rambling prompts outperform short, carefully crafted ones because they carry *reasoning*, not just commands.

**Poltergeist** — a build watcher he built and open-sourced. It monitors your project for file changes and auto-rebuilds — Swift, TypeScript, Go, Rust, anything. The problem it solves: agents would sometimes forget to rebuild before testing, and then debug problems that were already fixed. Poltergeist eliminates the failure mode entirely. *"In agentic engineering, loop iteration speed is everything."*

**VibeTunnel** — a Mac app that exposes your terminal to the browser via a web tunnel. Check on agents from your phone. Queue the next task while you're away from your desk. The agents don't wait for you to sit back down.

**CLIs over MCPs** — he removed all his Model Context Protocol servers. His reasoning:

> *"I don't use any MCPs... Keeping your context as clean as possible is important. If you add MCPs, you just pollute the context. Claude sometimes would go off spinning up Playwright unasked when it could simply read the code — which is faster and pollutes the context less."*

Instead: one line per tool in CLAUDE.md. `"Logs: vercel cli or axiom. Database: psql — source .env first."` The agent tries something, fails, reads the help text, learns the interface, continues. No MCP needed.

**AGENTS.md at 23.5KB** — his central agent instruction document. Not a quick-start. An operating manual. It covers commit conventions (`scripts/committer` — a custom atomic-commit tool that scopes staging precisely), multi-agent safety rules (what agents must do when they suspect another agent is working in the same area), a `sync` shorthand (one word = commit + pull rebase + push), and a dedicated PR landing workflow in `.agents/skills/PR_WORKFLOW.md`. The community sends PRs written by Claude Code; his landing agents review and merge them. The entire pipeline is AI-native end to end.

---

## The Blast Radius Mental Model

The framework he uses to decide how many agents to run and how closely to watch them:

**Blast radius** = the surface area of files and modules a given change will touch.

Before starting any session, he has a rough intuition: is this a small bomb (two or three isolated files) or a Fat Man (a shared module half the codebase imports)?

Small blast radius: run four agents in parallel. Each takes an isolated area. Collect commits when they're done.

Large blast radius: one agent, close watch. If it takes longer than expected: press Escape, ask *"what's the status,"* then steer, abort, or continue. Don't let drift compound.

> *"If you throw multiple large bombs, it'll be impossible to do isolated commits, much harder to reset if something goes wrong."*

He also uses an uncertainty probe before every session: *"Give me a few options before making changes"* — to gauge scope before committing to an approach.

This is product management skill, not engineering skill. It's the same judgment you'd use to decide which changes belong in the same sprint versus which ones need to be serialized. The execution surface changed. The underlying thinking didn't.

---

## What "Agentic Engineering" Actually Means

Steinberger is precise about the distinction between what he does and what he calls "vibe coding":

> *"Vibe coding is prompting without thinking, hoping the model figures it out. Agentic engineering is deliberately guiding capable agents toward outcomes you've thought through."*

And then, with characteristic self-awareness:

> *"I do agentic engineering, and then maybe after 3:00 AM I switch to vibe coding, and then I regret it. You should have just gone to sleep."*

The difference isn't the tool. It's whether the ambiguity got resolved *before* the agent touched the codebase.

When he hands Claude a bulletproof spec, he's not asking the agent to reason through design questions mid-implementation. Those questions were answered in the Gemini planning phase, with a tool purpose-built for that kind of thinking. Claude's job is execution — and Claude is excellent at execution when the execution surface is well-defined.

When I hand Claude a vague prompt and expect it to figure out the architecture, I'm using the wrong tool for the planning phase and then blaming the execution for the results.

---

## The Skills Are The Same

The realization that hit me hardest: **the skills I built managing twelve engineers are exactly the skills I need to manage twelve agents.**

Write clear specs. Think about blast radius (which changes can happen in parallel, which need to be serialized). Notice when something is drifting from the plan and correct early. Review the output, catch the subtle issues, make the architectural calls.

What changed:
- The cost of a hire is now ~$250/month instead of a salary
- The feedback loop is hours instead of weeks
- The spec needs to be better, because agents can't ask clarifying questions the way humans can
- The blast radius calculation matters more, because agents don't have intuitions about shared codebases

What didn't change:
- The quality of the thinking that goes into the spec determines the quality of what gets built
- You have to watch for drift
- Technical debt accumulates if you don't actively manage it — *"Claude often makes a mess but it's equally great in refactoring and cleaning up. Important to do both."*
- The hardest problems are still design problems: picking the right dependencies, data model, forward-thinking architecture

He calls himself an architect and reviewer. Agents do implementation. That's Stage 3.

---

## How I'm Working Differently Now

Here's what changed in my workflow after spending a day researching his.

**Specs before sessions.** I've been opening Claude Code the moment I have an idea. From now on, anything more than a two-liner gets a spec first. Even rough bullets dictated into a notes app. Ambiguity resolved before implementation starts.

**Two-Context Technique for my own planning.** I paste my rough plan into a fresh Claude session — separate context, no history — and ask for ten ways it could go wrong. The critique comes back unsentimental. I bring those back to my main planning context and address them. Better specs, less wasted implementation time.

**`plan only ultrathink` before every non-trivial session.** This phrase tells Claude to think through the approach without writing code yet. I review the plan. Steer if needed. Then: "build it." One correction at the plan stage is worth ten corrections mid-implementation.

**Agents commit atomically, not me.** In my AGENTS.md: *"Commit after each logical unit of work with a conventional commit message."* The commit history becomes a readable log. Natural recovery points if something goes sideways.

**Blast radius before every session.** Frontend component: low blast radius, run two sessions in parallel. Agent backend changes: high blast radius, one session, I'm watching.

**Tests immediately after features, same context, separate prompt.** While the agent still has full context of what it just built: *"add tests for what we just built."* The agent knows the edge cases. This is the only time writing tests is cheap and actually catches real bugs.

**Escape → "what's the status."** Mid-task check-in instead of waiting for completion. If the estimate was off, steer now.

---

## The Part Nobody Warns You About

When the bottleneck was my own implementation capacity, I stopped working when I ran out of capacity. The constraint was physical.

When the bottleneck shifts to spec quality — to how well you can articulate what you want — the constraint is cognitive. And cognitive limits are harder to notice than physical ones.

A vibe-coded session at 2am that makes a mess of a shared module can cost a full day of cleanup. Steinberger warns about this directly:

> *"The new rate limits will go into effect and that'll definitely suck. Guess I'll just pay up. No perfect alternative for now."*

And more importantly:

> *"Just One More Prompt"* — the title of an essay he wrote about the pull of this work. The feedback loops are fast enough that it's genuinely hard to stop. One session ends well. You think of the next thing. You start another.

The agent economy doesn't automatically make you more productive. It makes you more *capable*, which creates more rope. The discipline is: when you can't write a good spec, stop. Spec quality is the rate-limiting step. When it degrades, everything downstream degrades with it.

---

## The Quick-Start Checklist

If you want to start moving from Stage 2 (agents as tools) to Stage 3 (agents as a team):

```
□ Install Ghostty — ghostty.org
□ Install WisprFlow — wisprflow.ai (dictate prompts, stop typing them)
□ Install Claude Code — npm install -g @anthropic-ai/claude-code
□ Install gh, vercel, psql CLIs (services with CLIs — no MCPs needed)
□ Install Poltergeist — brew tap steipete/tap && brew install poltergeist

□ Next feature: write a rough spec in Google AI Studio before opening a terminal
□ Apply Two-Context Technique: paste spec into fresh window, "give me 20 inconsistencies"
□ Fix those, save as docs/spec.md
□ Open Claude Code: "plan only ultrathink: build docs/spec.md"
□ Review the plan. Then: "build it."
□ After the feature: "add tests for what we just built" (same session, separate prompt)
□ Commit atomically. Ship.
```

---

## Where This Is Going

Steinberger is now at OpenAI, working on agents. OpenClaw — which has 180,000+ GitHub stars and PR numbers in the thirty-thousands — moved to an independent foundation. The community of contributors submits PRs written by Claude Code, following his AGENTS.md conventions; his landing agents review and merge them.

That's a fully AI-native contribution pipeline. Not just using AI to build software, but using AI to run the software development organization itself.

I'm not there. But I can see it from here.

The shift from managing twelve humans to managing twelve agents preserves more than I expected — the same judgment, the same spec discipline, the same instinct for when something is drifting. What it changes is the speed of the feedback loop, the cost of a hire, and the minimum viable quality of a spec.

Get the spec right. The rest follows.

---

*I'm building [CrowdListen](https://crowdlisten.com) — consumer insights and audience research powered by AI. If you're curious about how AI agents fit into research workflows, or want to try running an audience analysis, the tool is live. I'm also enrolling AI agents in the [CrowdListen Research Partner Network](https://crowdlisten.com/learn.md) — more on that below.*

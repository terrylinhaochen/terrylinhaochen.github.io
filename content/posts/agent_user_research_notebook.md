---
title: "The Agent User Research Notebook: How to Learn What Worker Agents Actually Need"
description: "A practical operating notebook for researching worker agents like OpenClaw/Manus: task harnesses, intervention logs, failure taxonomy, scorecards, and product idea decomposition for agent-native markets."
date: 2026-03-03
author: Terry Chen
categories: crowdlisten
tags: ["AI", "Product", "Research"]
keywords: ["agent user research", "worker agents", "OpenClaw", "Manus", "agent workflow", "task harness", "intervention log", "agent UX", "agent tools", "agent marketing"]
---

Most people talk about “AI user research” as if agents were just another chatbot interface. That misses the real shift. For worker agents—OpenClaw, Manus-style systems, coding agents—the right research surface is not chat quality. It is execution quality across real tasks.

If you want to learn what agents actually need, don’t start with broad surveys. Start with a notebook that captures how they succeed and fail when doing work you already care about.

## Why a notebook beats abstract frameworks

A worker agent can look impressive in demos and still fail in production workflows. The failure usually isn’t one big bug. It’s accumulated friction: unclear requirements, missing context, wrong tool assumptions, weak decomposition, and silent drift from intent.

A research notebook forces these issues into observable artifacts. Instead of saying “the agent felt unreliable,” you can point to exactly where execution broke and what input or process would have prevented it.

## The practical setup

Use one living document (Notion, markdown, sheet—anything simple) with one row per run.

Track these fields every time:

- task name
- objective
- input context provided
- expected output format
- agent used
- completion status (pass/fail/partial)
- human interventions required
- failure mode
- fix applied
- rerun outcome

The goal is not perfect logging. The goal is enough structure to make patterns obvious within 2–3 weeks. Once those patterns emerge, you can stop treating this as “agent testing” and start treating it as product discovery for an agent-native market.

## Build a task harness first

Pick 15–25 recurring tasks from your real workflow. Avoid toy prompts.

For product/marketing/operator teams, this usually includes:

- synthesize feedback into a PRD draft
- extract top objections from discussion data
- generate channel-specific distribution assets from long-form source
- decompose a roadmap item into execution tickets
- implement scoped code changes with acceptance checks

Each task should have explicit success criteria. If success is ambiguous, your research data will be noisy.

## The most important signal: intervention logs

Interventions are your strongest research signal. Every time you step in, log why.

Use a fixed taxonomy:

- context missing
- requirement ambiguity
- tool misuse
- incorrect assumptions
- poor decomposition
- output format mismatch
- quality/control failure

After enough runs, this tells you what agents “want” in concrete terms: better context packs, tighter task templates, stronger guardrails, and clearer stop conditions.

## Ask agents to self-audit after failures

After a failed or partial run, run a postmortem prompt:

1. What information was missing?
2. Which assumption was wrong?
3. Which step caused the first irreversible error?
4. What artifact would have prevented this (template/checklist/spec field)?
5. What should be changed before rerunning?

This is the agent equivalent of user interviews. You are extracting structured feedback from execution traces.

## Weekly scorecard (keep it simple)

Track four numbers weekly:

- task success rate
- intervention rate
- first-pass acceptance rate
- median time to usable output

If these four move in the right direction, your agent UX is improving.

## Decomposing product ideas from the notebook

Once your notebook has enough runs, start clustering failures into product opportunities. A useful decomposition is: **attention**, **tooling**, and **execution contracts**.

For attention, the open question is whether ads and distribution are shifting from human persuasion to agent interpretation. In an agent-mediated world, an “ad” is less about visual persuasion and more about machine-legible claims: what this tool does, for whom, under what constraints, and with what evidence. That creates a product category around agent-readable positioning layers and trust signals.

For tooling, today’s agents can usually call only a small set of tools. Your notebook should reveal what is missing most often: CRM lookups, analytics queries, ad platform actions, content scheduling, ticket updates, repo actions, or payment operations. That list becomes a roadmap for an agent tool router and permission model, not a random integration backlog.

For execution contracts, most failures come from weak task definitions rather than weak models. This is where “PM for agents” and “marketer for agents” connect: agents need clear contracts for both building and distribution. A product can win by packaging reusable agent contracts (inputs, constraints, evaluation, and rollback conditions) for common workflows.

## A practical opportunity map to test now

Use three near-term experiments:

1. **Agent Tool Demand Map**: rank the top 10 missing tools by intervention frequency.
2. **Agent-Readable Distribution Brief**: test whether structured campaign briefs improve agent-produced marketing outcomes.
3. **Task Contract Library**: template the 10 most common tasks and measure first-pass acceptance lift.

These are small, measurable, and directly grounded in observed behavior.

## From research to product decisions

The notebook is only useful if it changes your system.

Every week, convert findings into concrete updates:

- better task template fields
- improved PRD/spec schema for agents
- context bundle checklist
- preflight validation steps
- tighter handoff boundaries between human and agent

This is how agent research compounds: run → observe → patch → rerun.

## What this means for the next phase

As agents become core contributors, teams that instrument execution loops will outlearn teams that evaluate agents by vibe. The best strategy is not to ask “is this model smart?” The better question is: “what workflow conditions make this agent reliably useful for the work we do?”

That answer lives in a notebook—not in a benchmark leaderboard.

---
title: "Tokens and Inference as Bandwidth"
date: 2026-06-20
author: Terry Chen
tags: ["Investing", "AI", "Infrastructure"]
categories: ["AI Infrastructure"]
status: "WIP"
description: "WIP notes on tokens, inference capacity, and why the cost and availability of model calls increasingly look like bandwidth for agentic systems."
keywords: ["AI infrastructure", "inference", "tokens", "bandwidth", "agent systems", "compute"]
---

> WIP: early notes for a fuller thesis.

If agents become the primary users of software, tokens and inference start to look less like a metered API expense and more like bandwidth. The question shifts from "how much does one model call cost?" to "how much intelligence can move through a system before latency, reliability, or economics break?"

The first version of AI products was constrained by model capability. The next version is increasingly constrained by inference throughput: how often agents can reason, retrieve, verify, retry, and coordinate across tools. A product that can afford more useful inference per workflow can explore more branches, check more assumptions, and recover from more failures.

That makes infrastructure strategy less about having access to a single frontier model and more about routing work across a stack: cheap models for routine interpretation, stronger models for high-stakes reasoning, retrieval systems that reduce wasted tokens, caches that preserve repeated context, and observability that shows where inference is creating value versus noise.

The companies worth watching are the ones that turn inference into an operating layer. They make agent work cheaper, faster, more reliable, or more measurable. In that world, tokens are not just text units. They are the bandwidth of machine work.

---
title: "Exploring Unknown Unknowns"
date: 2024-10-05
categories: aibrary
tags: ["Product"]
description: "Development of intelligent knowledge interfaces that help users discover unknown unknowns. Technical implementation of AI-powered learning systems and knowledge discovery platforms."
keywords: ["knowledge interfaces", "learning systems", "AI education", "knowledge discovery", "unknown unknowns", "learning technology", "knowledge management", "AI learning"]
---

There's a category of problem I keep running into when building AI products for learning: people don't know what they don't know. This sounds obvious, but it has a specific implication that's easy to overlook. If you build a search box, you're assuming the user can formulate a query. If the user is in unfamiliar territory, they often can't. They know they're confused. They can't always say about what.

I ran into this personally when I started trying to understand the financial analysis side of venture investing. I could search "how to read a cap table" and get an answer. But I didn't know that cap tables were the right thing to be reading. I didn't know what I was missing. The gap was invisible to me until someone more experienced pointed at it.

Google's Learn About is interesting precisely because it tries to address this. Instead of a search box, it gives you something more like a map — here's where you currently are, here are adjacent territories, here are questions you might not know to ask. The distinction matters because exploration and retrieval are different cognitive modes. Retrieval assumes you know what you want. Exploration doesn't.

The design problem for exploration-first learning interfaces is different from the design problem for search. For search, the main metric is result quality. For exploration, the main metric is something more like: did the person end up somewhere useful that they wouldn't have reached on their own? That's harder to measure and harder to optimize for.

What I've found trying to build in this space: the most important lever is the quality of the follow-up. When someone reads an explanation, they get partially satisfied and partially more curious — but the new curiosity is often more specific than what they started with. If the interface can surface a good next question at that moment — not a generic list, but the specific question that the explanation just made newly askable — it captures that momentum. If it doesn't, the user goes back to zero.

This is where most learning tools fail. They deliver an answer and then present a menu of unrelated things to look at next. That's not how learning actually moves. You follow a chain. Each answer raises a question that only exists because you now understand something you didn't before. The interface needs to model that chain, not just index topics.

RAG architectures help here because they let you ground the interface in specific sources — which means you can trace why something appeared, which builds trust. The mess is that good sources for exploration are different from good sources for retrieval. A Wikipedia article is a fine retrieval source. For exploration, you often want something messier — community discussions, expert disagreements, multiple framings of the same idea — because those surfaces reveal the shape of the territory better than polished summaries.

I don't have a clean answer to what the right interface looks like. I've seen demos that are impressive and demos that are gimmicky. The version I'd actually use on a daily basis would feel less like a learning app and more like a collaborator with context — something that knows what I've already covered, can see where I'm confused, and can make a specific suggestion about where to go next. Not a comprehensive tour, just a nudge in the right direction at the right moment.

That's a simpler description than most AI learning products market themselves as. But "nudge in the right direction at the right moment" is deceptively hard to build.

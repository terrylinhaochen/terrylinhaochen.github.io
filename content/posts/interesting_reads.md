---
title: "Interesting Reads"
description: "Curated collection of compelling articles and insights on AI agents, entrepreneurship, and product development. Features analysis of breakthrough AI tools and emerging trends."
date: 2025-04-01
author: Terry Chen
tags: ["Entrepreneurship", "Product"]
---

Here's a list of articles that I founding interesting. I've attached the original article / transcript for easy refernece as well.

# Gary Tan on Manus: The New General-Purpose AI Agent
Video URL: https://www.youtube.com/watch?v=JOYSDqJdiro

Usable AI agents are finally here from deep research platforms out of OpenAI and Google to similar tools from XAI and DeepSeek. Joining the competition now is Manus, a brand new agentic AI platform that has taken the world by storm.

"Today we're launching an early preview of Manus, the first general AI agent."

When Manus officially launched, the hype around it immediately took off. A Chinese startup unveiling a new AI agent that some are calling "China's next DeepSeek moment," with people calling it "the most impressive AI tool they've ever tried" and "the most sophisticated computer-using AI."

Unlike some of its predecessors, Manus wasn't just another specialized chatbot. It promised to be a true general-purpose AI agent. With invitations rare and access limited, the question remains: has Manus truly revolutionized the AI agent landscape?

## How Manus Works

Behind all the excitement around Manus is something genuinely innovative: a multi-agent AI system that can seemingly complete all sorts of tasks from travel planning and financial analysis to searching over dozens of files or doing industry research.

Rather than relying on one big neural network, Manus works more like an executive overseeing a team of sub-agents, coordinating and guiding their every move across a shared action space. It takes in your prompt as input and gets to work figuring out what it needs to do.

Instead of tackling your task in one go, Manus employs a sophisticated approach. A planner agent first comes up with a master plan to follow, breaking things down into manageable subtasks. This way Manus knows precisely what needs to be done before executing and can hand off these tasks to other sub-agents. These sub-agents are like Manus's own in-house experts - they share the same context but each has its own delineated domain from knowledge or memory to execution.

Manus can call upon an extensive suite of 29 different integrated tools, whether they're automating web navigation, securely running code, or pulling important information from files. Manus' sub-agents intelligently decide which tools to use.

Finally, when each subtask is complete, the executor agent combines the outputs together into a final synthesized output for the user.

## Technical Details

Under the hood, Manus is powered by a sophisticated dynamic task decomposition algorithm. This is what enables it to autonomously break down complex instructions into clear execution paths.

To ensure stability even after dozens of rounds of reasoning and tool use, the Manus team developed an original technique called "chain of thought injection," enabling agents to actively reflect and update plans.

At its core, Manus makes use of Anthropic's Claude 3.7 Sonnet. Manus also features robust cross-platform execution capabilities thanks to its seamless integration with open-source tools like YC company Browser.js for advanced website interaction and startup E2B's secure cloud sandbox environment.

## Capabilities and Performance

What can Manus actually accomplish? Impressively, it can take on a wide range of real-world tasks. These include creating travel itineraries, performing detailed financial analyses, developing educational content, compiling structured databases, comparing insurance policies, sourcing suppliers, and assisting with high-quality presentations.

To truly measure Manus' capabilities, we can look at Gaia, a benchmark designed to challenge AI agents on reasoning, multimodal handling, web browsing, and tool proficiency. Humans typically score about 92% on this benchmark, while OpenAI's Deep Research scored about 74% at its best. Manus smashed the state-of-the-art on Gaia, scoring 86.5%, just a few points shy of the average human.

## The "Wrapper" Debate

Despite impressive benchmark performance, Manus has reignited a broader conversation about the nature of AI startups at the application layer: "wrappers."

Some have dismissed Manus as merely a wrapper, since it stitches together existing foundational models and various tool calls. But this dismissal overlooks an important reality: most successful AI products today could also qualify as wrappers by this logic.

Cursor and Warp, for example, integrate existing LLMs alongside external APIs and developer-focused tooling such as real-time code analysis and debugging utilities. Domain-specific agents like Harvey combine foundational models with legal-specific tool integrations, case law retrieval, compliance checks, and document analysis.

Clearly, many useful applications do fit the wrapper mold, and for many developers, it makes sense to go this route. As Manus co-founder Yizhow Peak G told us himself, "From day one they decided to work orthogonally to model development, wanting to be excited rather than threatened by each new model release."

What distinguishes successful wrappers from their less effective counterparts is typically a bunch of things: intuitive UI, proprietary evals, much more careful fine-tuning of foundational models, and thoughtfully designed multi-agent architectures.

## Strengths and Limitations

Manus itself illustrates these trade-offs really well:

### Strengths:

Its multi-agent orchestration helps deliver significantly lower per-task costs (around $2 a task compared to integrated competitors like OpenAI's Deep Research). It offers greater transparency and user control, letting users directly inspect, customize, or replace individual sub-agents and tool integrations. Additionally, it provides a degree of flexibility centralized platforms rarely match.

One of the coolest things Manus figured out was actually exposing the file system so you could see exactly what the agents were doing. Chat GPT requires you to reprompt, and it's opaque what's happening when it's thinking. Manus is a glimpse into the future of Chat GPT desktop operating directly on your computer, and it will be cool to see how much more control you'll get when it's happening there instead of a browser.

### Limitations:

Coordination across specialized agents becomes increasingly difficult as tasks scale or complexity grows. Its current advantages (UX refinements, targeted fine-tuning, thoughtful integrations) are vulnerable to competitors just coming along and doing that as well.

These strengths and weaknesses are generally shared by wrappers. They allow rapid deployment, iteration, and specialized UX at lower upfront cost. However, they're vulnerable to disruption such as API pricing changes or provider policy shifts, which can quickly erase any cost benefits.

## The Future of AI Products

Ultimately, the critical challenge isn't deciding whether wrappers are viable but identifying genuinely sustainable differentiation for your product.

For founders, this might mean investing early in proprietary evals that are expensive or time-consuming to replicate, embedding workflows deeply into specific user routines to increase switching costs, and identifying integrations with platforms or data sets competitors can't easily access.

In the end, success in AI doesn't hinge on reinventing the wheel but rather on who can stitch together the existing models into a product users genuinely love.
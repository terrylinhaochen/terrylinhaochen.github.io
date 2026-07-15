---
title: "When to Own Your Harness"
date: 2026-07-14
author: Terry Chen
categories: posts
tags: ["AI", "Product", "Agents"]
description: "When an agent workflow deserves its own managed interface, and when it is better left inside a general-purpose harness like Claude Code or Codex."
keywords: ["agent harness", "agent UI", "Claude Code", "Codex", "AI product", "workflow design", "Granola"]
---

For the real engineers reading this, nearly every recurring task can now become some combination of a skill, a cron job, and a prompt inside an existing harness. Give Claude Code or Codex the right instructions, tools, and context, and a surprising amount of software starts to look like a thin wrapper around work the harness could already perform.

That creates an uncomfortable question for anyone building an AI product: when should you create your own agent interface, and when should you delegate the experience to a general-purpose harness that is already improving underneath you?

The technical answer is increasingly permissive. More and more workflows *can* run inside Claude Code or Codex. But technical possibility is the wrong standard. A skill is not automatically a product, and a cron job is not automatically an experience. As AI-pilled as we become, most people still do not want to read unrendered Markdown, manage context files, or interpret a stream of terminal output. A clean interface, a simple interaction, and a guided path still have real value.

The real question is whether you can own enough of the job to make that experience meaningfully better.

## The value of a closed loop

Granola is a good example of a workflow that deserves its own managed interface. The job begins with a meeting and ends with a useful set of notes. The product can capture the relevant context, perform the work, render the result cleanly, and leave the user with something ready to read and share. The user does not have to decide which tool to call, where to store the transcript, how to structure the output, or what format the final artifact should take.

The model is only one part of that value. The product earns its place by enclosing the entire job.

When a workflow has a recognizable beginning and end, the interface can do more than make AI approachable. It can remove decisions. It can choose sensible defaults, gather context automatically, constrain the interaction, and present the result in the form the user actually wants. This is where a managed experience becomes more than a wrapper. The experience itself is doing work.

This matters because expertise is not only knowing how to produce an answer. It is knowing what information to ask for, which steps should happen in which order, what a good result looks like, and how to help someone recover when the obvious path breaks. A focused product can encode that judgment into the interaction. The user benefits from the expertise without needing to understand the harness underneath it.

## Where managed interfaces break down

The opposite is true when the workflow refuses to stay enclosed.

Debugging is the clearest example. A task may begin with an error message, move into a terminal, branch into application logs, require reading code, continue in a browser, and end with a deployment or a conversation in another tool. The right next step changes as new information appears. The useful part of the experience is precisely its ability to move across boundaries.

A managed interface often feels helpful at the beginning of this kind of work and restrictive by the end. It can produce an initial diagnosis, but then the user has to open the terminal. It can suggest a change, but then the user has to move into the repository to inspect it. It can generate an artifact, but then the artifact must be exported into another application before the real work continues.

Every unclosed thread weakens the reason for the managed interface to exist. If users repeatedly leave your product to complete the highest-value part of the job, you are not really owning the workflow. You are adding another stop to it.

This is where a general-purpose harness has a structural advantage. Claude Code and Codex are useful not because they provide the most polished surface for every task, but because they can follow the work wherever it goes. They can inspect files, run commands, use external tools, revise a plan, and adapt when the task turns out to be different from the one initially described. For open-ended work, flexibility is not a missing product decision. It is the product.

## Experience still matters

Engineers can underestimate the value of the experience layer because they are unusually willing to assemble their own workflows. If the result is correct, a developer may tolerate Markdown, configuration, and a few manual handoffs. Most users will not, nor should they have to.

A dedicated interface can turn an ambiguous capability into a legible job. It can show users what is possible, guide them toward the right inputs, render intermediate states, and make the next action obvious. Those things are easy to dismiss as polish, but they often determine whether the underlying intelligence is usable at all.

The mistake is assuming that a friendlier first interaction is enough. The interface has to reduce the total effort required to reach the outcome. If it saves five minutes of prompting but creates ten minutes of exporting, reformatting, and cleanup, the user has not gained a better experience. They have received a nicer-looking detour.

The best agent products therefore do not simply hide the harness. They make the harness unnecessary for a specific job. The user can enter with an intention and leave with the job completed, without needing to understand the machinery in between.

## Measure the completed value

The simplest way to evaluate whether a workflow deserves its own product is to measure the value of one completed interaction, then multiply it by frequency.

Start with the amount of time or effort saved from the moment the user begins until the work is actually finished. Include context gathering, application switching, formatting, correction, and the uncertainty of deciding what to do next. Then multiply that value by the number of times the workflow occurs in a day and across a week.

If an interaction saves ten minutes and happens four times a day, the product is returning more than three hours every week. At that point the value proposition is already clear, especially when the work is frustrating, business-critical, or performed by an expensive team.

But the completion boundary has to be honest. Saving ten minutes during generation does not count if the output creates eight minutes of downstream cleanup. The value is not the speed of the model call. It is the difference between the old path and the new path all the way to the finished outcome.

That is ultimately when it makes sense to own the harness. Own it when the job has a clear boundary, when the interaction can encode meaningful expertise, and when the user can reach the outcome without opening three other tools. Delegate to an existing harness when the path is inherently variable, when the important work happens across systems, or when your interface cannot close the threads it opens.

The dividing line is not whether the task can be turned into a skill. Almost everything can. The dividing line is whether the experience can complete the job.

Own the harness when the guided experience is the value. Use the existing harness when flexibility is the value.

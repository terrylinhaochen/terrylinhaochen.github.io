---
title: "Essence of Creativity: AI-Generated Content and the Future of Creative Work"
date: 2024-08-25
author: Terry Chen
tags: ["Observations", "Entrepreneurship", "Product", "AI", "Creativity"]
description: "Exploring the intersection of AI-generated content and human creativity. Analysis of creative workflows, multimodal interactions, and the future of content creation in the AI era."
keywords: ["AI creativity", "content generation", "creative workflows", "multimodal AI", "content understanding", "AI-generated content", "creative technology", "content creation"]
---

This week, I wanted to organize my thoughts about AI-generated content (AIGC) and creativity-related products from the past few months. Rather than focusing solely on my own projects, I'd like to explore the foundational aspects of AI product design, interspersing examples from my recent work. First, I want to emphasize that technology is merely a tool intended to better serve business needs. If it doesn't significantly improve efficiency, traditional methods may be more appropriate. Second, despite the many imaginative possibilities of current technology, applications should ultimately be guided by user needs. Finally, AI technologies and markets evolve rapidly, making predictions difficult to validate, but exploring content understanding and generation remains an intriguing challenge.

## What Constitutes Creative Work?

Let's discuss what kind of creativity AI can enable, establishing the capability boundaries of AI applications. Is it creative to "take screenshots of someone else's video and caption them with other people's comments on your own account"? Though this involves some editing rather than direct reposting, it's difficult to call this creative work. Simple copying only accelerates content diffusion within an ecosystem while reducing the excess returns of original creation, as economist Schumpeter noted.

I believe creativity is more about choosing a unique perspective. Content with contrast or conflict naturally captures our attention, but thoughtful, empathetic content is equally creative. From an ecosystem perspective, creativity can be divided into production and diffusion – the former generating new content, the latter deriving from or spreading existing content.

As for AI's value in this process, generative AI as a probabilistic model struggles to produce content with fresh perspectives. However, it can help us efficiently understand massive amounts of information and generate insights (perspectives). As multimodal AI capabilities (text, image, video) improve, content reproduction costs will rapidly decrease, making products that help users find new inspiration increasingly valuable. Through such creative assistance, we can achieve two main effects:

1. Inspiration acquisition: Accelerating original content production
2. Content derivation: Accelerating the diffusion of quality creative work

## Content Understanding for Enhanced Generation

How can we make language models produce outputs that meet our expectations? This challenging question can be further divided into: (1) we don't know what our ideal output looks like, and (2) we know what we want, but the language model doesn't understand us. Most people are trying to solve the latter problem (through model alignment, prompting, few-shot learning, RAG, fine-tuning, memory and caching methods). However, the approaches in this space are increasingly similar, with many solutions being open-sourced, which is why many generative products deliver roughly comparable results. The real differentiation lies in how to adapt engineering and data processing to specific business scenarios.

Returning to the first problem - "I don't know what output I want" - this stems more from a lack of content understanding. Good script writing requires more than just hooks, USPs, and CTAs; it needs a clear angle: content that resonates with the audience, is appropriate for the context, and achieves its purpose. Some products are creating brand kits or audience profiles to guide more specific content generation through manually defined style rules or user personas. While these types of configurations will likely become common, finding ways to connect insight data with generation without manual setup could be a breakthrough.

## Understanding User Needs

Looking at the creative ecosystem, each creative area (ad aggregation, competitor tracking, brand insights, performance analysis, content generation) has 3-4 companies with minimal data or interaction differences. Data products tend to be traditional, while AI products often rely on simple language model adjustments. A potential differentiator would be acquiring more granular data and creating smoother interactions. Connecting upstream and downstream tasks (complete creative production process with participation/adjustment at each stage) could be an ideal product form.

If we calculate product value as "user value = new experience - old experience - replacement cost," we find that most products built on foundational language models (old experience) with fine-tuning or prompting adjustments (incremental new experience) deliver very limited incremental value. From an interaction perspective, users still need to input personalized prompts, and outputs almost always require multiple rounds of editing before use. The question becomes: how do we increase incremental value?

## User-Friendly Workflows

Currently, creators mostly call upon individual capabilities or data, but single capabilities are insufficient for full-process script/video generation. Building workflows can help users connect various AI capabilities, reducing friction between tool switches.

The concept of "workflows, not skills" addresses user needs: many users currently need 5-10 AI capabilities to complete their creative work, with most capabilities being disconnected and requiring frequent switching. By establishing a clear workflow, users can more efficiently call upon relevant tools to complete their creative work.

I previously had a misconception that simply connecting capabilities constitutes a workflow, but deeper design is needed. What we consider Language UI is actually Prompt UI, which differs from true language interaction by missing the context and shared understanding present in human-to-human communication. Introducing these elements through features like detailed follow-up questions and future cross-container reference relationships could enhance user experience. Current prompting is likely a transitional form; eventually, we should eliminate the need for context-specific prompts by enabling LLMs to understand context and generate appropriate guidance.

## Multimodal Interaction and Content Ecosystem

Finally, let's discuss modality. Given the characteristics of different modalities (text - easily editable, images - non-linear, video - linear), different scenarios should use different modalities. The same user may need different interactions in different contexts.

Switching between modal forms (long/short/mixed) and modal types (text/image/audio/video) will become easier, essentially providing the same content with applicability across different scenarios. Users aren't just people; they're collections of needs. For instance, I might read text at the office due to setting constraints, watch videos while waiting in line with nothing to do, and listen to audio while driving or commuting. The same content may need three modalities (text/video/audio) connected based on the scenario. This could be further refined - people accelerate reading or listening for higher information intake. Finding ways to adapt the same content to different scenarios without increasing creation costs is another interesting challenge.

## Case Study: Voice Synthesis

Take voice synthesis as an example. From a technical perspective, this technology is already quite mature, yet the first application that comes to mind might be phone scams. Other applications include David Attenborough's wildlife narration in open-source projects or OpenAI's GPT-4o launch event simulating Samantha's voice (originally Scarlett Johansson) from the movie "Her." However, I believe short video creators are truly making the best use of this technology.

I recently saw a high-quality derivative work based on "In the Name of the People" (a 2017 Chinese TV drama). The creator (called "Yi Tou Jue Lv") made remarkably deep portrayals of character psychology and inner monologues. Only after reading the comments did I learn that the creator used voice synthesis combined with their understanding of the characters to create this derivative work. Looking through this creator's content, I found they cleverly used the original footage but replaced the narration with autobiographical scripts using AI-synthesized voices, making their work deeper and satisfying more viewer perspectives than their peers – essentially creating a new creative genre.

## Contrasting Audio & Text

It's fascinating how differently our brains process audio and text. When we read, we're essentially interacting with a graphical user interface - scanning, jumping between sections, processing information at our own pace. We've evolved sophisticated tools for text: highlighting, bookmarking, section headers, and search functions. Yet despite these advantages, text may at times feel less engaging than a good conversation. Speaking, in contrast, is inherently linear and social. There's something about the human voice that keeps us present - the subtle shifts in tone, the natural pauses, the back-and-forth rhythm. It's why we can stay engaged in a podcast while walking (and multitask), yet reading typically demands our full attention.

This contrast reveals something deeper about how we process information. Text excels at conveying complex ideas - we can revisit difficult passages, cross-reference concepts, and process at our own speed. Audio shines in maintaining engagement and conveying emotion, even if the content itself is relatively simple. Perhaps the future lies not in choosing between these mediums, but in finding ways to combine their strengths. Imagine an interface that preserves the natural flow of conversation while adding the structural advantages of text - where you could navigate both temporally and conceptually, maintaining both engagement and comprehension.

## Conclusion

As Roland Barthes suggested with "The Death of the Author," once an author creates a work, the interpretation rights transfer to the readers. Video platforms feature various edited compilations, summaries, and analyses of film and television works. With improvements in constrained generative AI (voice synthesis, anime IP unification, future realistic character generation), we may see numerous derivative works based on original IPs, approaching professional quality and satisfying different interpretations and imaginations about the original work. These perspectives might all exist in the original work, but each short video offers a different angle, providing users with unique experiences. There remains much content that people want to see but isn't yet available on platforms. Another interpretation of creativity could be how to push the supply curve outward to meet the demand curve at a new equilibrium point, better satisfying user needs.

## Final Thoughts

While generative AI effects are evolving rapidly, human nature changes slowly. The innovation opportunities brought by technology are often overestimated in the short term but underestimated in the long term. Making probabilistic models creative is challenging yet fascinating work, it's probably something I will continue working on.
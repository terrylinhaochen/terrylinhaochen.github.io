---
title: "Improving & Scaling LLMs for Coaching"
date: 2023-06-15
categories: research
tags: ["Technology", "Research"]
---

# Situated Practice Systems: Improving and Scaling Coaching through LLMs
**Authors: Terry Chen, Allyson Lee**

## Abstract
Effective coaching in project-based learning environments is critical for developing students' self-regulation skills, yet scaling high-quality coaching remains a challenge. This paper presents an LLM-enhanced coaching system designed to support project-based learning by helping connect peers struggling with the same regulation gap, and to help coaches by identifying regulation gaps and generating tailored practice suggestions. Our system integrates vector-based semantic matching with LLM-generated regulation gap categorizations for Context Assessment Plan (CAP) notes. Results demonstrate that our system effectively retrieves relevant coaching cases, reducing the cognitive burden on mentors while maintaining high-quality, context-aware feedback.

## Introduction
Training college students to tackle complex, open-ended innovation work requires developing strong regulation skills for self-directed work. Coaches guide the development of these regulation skills, helping students develop cognitive, motivational, emotional, and strategic behaviors needed to problem solve and reach desired outcomes. However, coaches face significant challenges in providing personalized guidance to multiple student teams.

Existing AI-based project management tools help track tasks but fail to capture nuanced ways students approach their work. Large Language Models (LLMs) show promise in analyzing text-based interactions and generating structured feedback, but their application to coaching remains underexplored.

To address these issues, we propose utilizing LLMs to develop and integrate three key technical innovations. First, **Peer Connections** facilitate connections between students with similar challenges. Second, **Coaching Reflections** help coaches analyze patterns and improve their practice through identifying regulation gaps. Finally, **Practice Suggestions** adapt similar cases to new situations.

## The Regulation Skills Codebook
Our system is built around a novel codebook consisting of regulation gap definitions and examples gathered across learning science literature. The codebook categorizes student regulation gaps in a tiered approach:

### Tier 1 Categories

Our codebook includes three primary categories. **Cognitive** skills relate to approaching problems with unknown answers. **Metacognitive** skills involve planning, help-seeking, collaboration, and reflection. **Emotional** aspects cover dispositions toward self and learning that affect motivation.

### Tier 2 Categories (Examples)

The tier 2 categories provide more specific regulation gaps. These include representing problem and solution spaces, assessing risks, and critical thinking and argumentation. Additionally, they cover forming feasible plans, planning effective iterations, addressing fears and anxieties, and embracing challenges and learning.

## System Architecture
Our system combines semantic similarity search with LLM-based analysis in a retrieval-augmented generation approach. The process begins when student regulation notes are pre-processed with metadata on tier 1 and tier 2 regulation gaps. These notes are then encoded into text embeddings, after which a vector database retrieves the most similar historical cases. Finally, an LLM (Deepseek) generates structured responses including diagnosis of potential regulation gaps, practice suggestions targeted to these gaps, and references to similar historical cases.

This grounds LLM suggestions in actual coaching experiences rather than generic advice, improving the relevance and actionability of recommendations.

## Similarity Methods for Regulation Gap Analysis
We developed and tested three approaches to match students with similar regulation challenges:

The **Baseline Semantic Approach** uses vector embeddings to find similar cases based on textual similarity. The **Weighted Semantic Similarity** approach separates and weights regulation gap description (0.7) from contextual information (0.3). Our **Hybrid LLM-Codebook Approach** combines semantic matching with LLM-generated metadata using our regulation codebook.

The hybrid approach proved most effective, assigning the highest weight (0.5) to tier 2 categories and lower weights to tier 1 categories (0.1) and text content (0.2 each for gap text and context).

## Evaluation and Results
We evaluated each model against the same three notes, analyzing the top 5 returned similar notes. The semantic matching performed well when addressing cognitive and metacognitive gaps with repetitive terminology but struggled with emotional regulation gaps. The LLM-codebook approach showed promise in accurately identifying regulation gaps but was computationally intensive. The hybrid model consistently and efficiently identified notes with the same regulation gap while maintaining contextual similarity.

## Discussion and Future Work
Our system effectively bridges the gap between human expertise and AI capabilities in coaching contexts. Key takeaways include **Hybrid AI-Driven Case Retrieval**, where combining LLM-driven metadata tagging with traditional semantic matching enables precision in retrieving relevant coaching cases, and **Structured Codebooks for Domain-Specific AI**, where our tiered classification system grounds LLM-based reasoning in expert-validated pedagogical frameworks.

Future work will focus on several areas of improvement. We plan to improve clarity of writing in notes and collect more data through alternative sources. Additionally, we aim to develop sub-categorized codebooks with specific examples and reasoning chains. Finally, we will explore more sophisticated reasoning methods like external knowledge bases or memory systems.

This research contributes to the broader field of AI-enhanced education and human-AI collaboration, offering insights into how AI can augment expert-driven mentoring in complex, open-ended learning settings.
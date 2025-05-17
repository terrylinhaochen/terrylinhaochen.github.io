---
title: "LLM Memory Consolidation and Augmentation"
date: 2025-03-10
categories: research
tags: ["Technology", "Research"]
---
**Authors: Terry Chen, Kaiwen Che, Matthew Song**

## Abstract
Despite advances in large language model (LLM) capability, their fundamental limitation of not being able to store context over long-lived interactions persists. In this paper, a novel human-inspired three-tiered memory architecture is presented that addresses these limitations through biomimetic design principles rooted in cognitive science. Our approach aligns the human working memory with the LLM context window, episodic memory with vector stores of experience-based knowledge, and semantic memory with structured knowledge triplets. 

In comparison to traditional retrieval-augmented generation (RAG) techniques that store verbatim conversation segments, our system employs strategic memory consolidation procedures, abstracting key information into structured forms. Performance testing on the GoodAI Long-Term Memory benchmark demonstrates significant improvements in performance, with our memory-augmented GPT-4o achieving scores of up to 6.9/11 over the baseline 4.6/11. Additional testing across multi-agent domains demonstrates enhanced persistence and updating capacity of information.

## Introduction
State-of-the-art large language models (LLMs) possess remarkable natural language comprehension and generation. However, their architecture imposes tight constraints on memory retention and contextual comprehension during long-term interaction. Most existing LLMs operate within fixed context windows, typically ranging from 32,000 to 128,000 tokens, which impose inherent constraints on long-term conversation and complex reasoning tasks that span multiple turns.

The Baddeley and Hitch (1974, 2000) model of working memory provides a robust theoretical account of human information processing. The model presents memory as a multi-component system with central executive control of information flow, an episodic buffer of assembling memories into temporary experiences, a phonological loop of controlling verbal content, and a visuospatial sketchpad of controlling visual and spatial information.

Current approaches to increasing LLM memory capacity heavily rely on embedding-based retrieval-augmented generation (RAG). While the approach can deliver rapid access to previous data, it suffers greatly from issues like vector explosion, the unsustainable proliferation of embeddings as conversation history grows, lack of semantic structure in stored shreds, and difficulties in maintaining relations among relevant facts.

This work introduces a novel biomimetic approach to LLM memory extension that more accurately models the cognitive architecture of humans, with a three-tiered memory system distinguishing between immediate context, episodic memories, and semantic facts.

## System Architecture
Our memory improvement system utilizes a three-layer architecture inspired by human cognition:

![Three-Tiered Memory Architecture](/images/projects/human-inspired-llm-memory/memory-architecture.png)

### Working Memory (LLM Context Window)
We divide the context window into two distinct segments:
- **Multi-Round Conversation History (MCH)**: Stores current conversation context, maintaining flow up to a defined token limit.
- **Retrieval Memory Buffer (RMB)**: Provides dedicated space for injecting remembered memories from long-term storage, maintaining a balance of short-term and long-term remembered data.

### Long-Term Memory Store
Implemented as a vector database storing two forms of memory:
- **Semantic Memory**: Stores factual knowledge gained from conversations as subject-predicate-object triples with optional contextual referencing.
- **Episodic Memory**: Stores complete interaction episodes by a formal schema with contextual initialization, reasoning operations, actions taken, and outcomes observed.

### Memory Processes
There are specialized components for:
- **Memory Consolidation**: Operations for capturing and formalizing memories when conversation history reaches token thresholds.
- **Retrieval Mechanisms**: Multi-step operations that determine context adequacy before retrieving from external memory stores.

## Memory Schema Implementation

### Semantic Memory Triple
We implemented the semantic memory schema as a structured class:

```python
class SematicMemory(BaseModel):
    """Store all new facts, preferences, and relationships as triples."""
    subject: str
    predicate: str
    object: str
    context: str | None = None
```

### Episodic Memory Schema
Our episodic memory implementation stores experiential information with temporal context:

```python
class EpisodicMemory(BaseModel):
    """Write the episode from the perspective of the agent within it."""
    observation: str = Field(..., description="The context and setup - what happened")
    thoughts: str = Field(
        ...,
        description="Internal reasoning process and observations of the agent"
    )
    action: str = Field(
        ...,
        description="What was done, how, and in what format."
    )
    result: str = Field(
        ...,
        description="Outcome and retrospective."
    )
```

## Memory Consolidation Process
The foundation of our strategy lies in sophisticated memory consolidation mechanisms that convert raw conversational information into structured memory representations:

### Semantic Memory Extraction
Our semantic memory schema makes use of subject-predicate-object triples that eliminate episodic detail without sacrificing core relationships. Implementation follows several guiding principles:
- Prioritization of high-frequency accessed information
- Merging of redundant knowledge into a single representation
- Upgrading existing triples whenever new contradicting data exist
- Adding contextual linking to render situationally responsive retrieval

### Episodic Memory Extraction
Episodic memory stores full interactions in an ordered schema consisting of four main components:
- **Observation**: Stores contextual setup and what transpired
- **Thoughts**: Stores internal reasoning processes and deliberations
- **Action**: Stores particular interventions and methodologies used
- **Result**: Stores outcome and subsequent analysis

## Evaluation Results
GoodAI LTM benchmark results indicated radically better performance with our memory augmentation approach:

| Configuration | Score | Performance |
|---------------|-------|-------------|
| Baseline GPT-4o | 4.6/11 | 41.8% |
| GPT-4o + Semantic Memory | 6.8/11 | 61.8% |
| GPT-4o + Episodic Memory | 6.9/11 | 62.7% |
| GPT-4o + Semantic & Episodic Memory | 6.0/11 | 54.5% |

These results reflect a general 20-percentage-point improvement in memory performance by our augmentation method. The differential performance aligns with the corresponding functional roles these types of memory serve in human cognition, wherein semantic memory enables fact recall and episodic memory enables experiential reasoning.

## Discussion and Future Work
Our research provides empirical evidence for cognitive-inspired LLM memory enhancement methods. The witnessed performance improvements with three-tier memory architecture show that human memory systems offer valuable design concepts for overcoming inherent limitations in current AI designs.

The unexpected finding was the slightly worse performance of integrated memory systems compared to single implementations. This suggests complex interaction effects, which may mirror interference phenomena observed in human memory systems, where various forms of memory sometimes vie for mental resources.

Future research directions include:
- **Multi-agent Memory Dynamics**: How memory transfers between agents and how social dynamics influence memory consolidation
- **Advanced Retrieval Strategies**: Exploring spatially organized memory architectures and hierarchical memory organization
- **Optimization of Consolidation Thresholds**: Investigating dynamic thresholds that adapt based on conversation characteristics

## Conclusion
This paper presents a novel biomimetic approach to enhancing LLM memory that addresses intrinsic limitations in current architectures. By embracing a three-level memory structure inspired by human cognitive processes, we demonstrate significant improvements in information retention, update, and context recall.

As LLMs advance towards more general intelligence capabilities, structured memory systems will play a larger role in enabling coherent long-term interactions, homogeneous knowledge states, and contextually appropriate information access. Our research contributes both pragmatic approaches for deploying this aspect of AI progress and theoretical frameworks to continue advancing this critical component of AI work. 
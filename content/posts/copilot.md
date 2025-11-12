---
title: "Multi-modal Creative Ad Generation"
date: 2024-05-20
categories: tiktok
projectURL: https://ads.tiktok.com/business/copilot/standalone
tags: ["Product"]
company: "tiktok"
description: "Development of TikTok Symphony Assistant - an AI-powered creative tool for generating ad scripts and video content. Agentic workflows and interface optimization for automated creative generation."
keywords: ["TikTok Symphony", "AI advertising", "creative generation", "ad scripts", "video ads", "agentic workflows", "creative automation", "TikTok ads"]
aliases: ["/projects/copilot/"]
---
The advertising industry's AI tools problem isn't about generation quality—it's about workflow integration. Most creative AI products today offer impressive individual capabilities but fail catastrophically when creators try to chain them together into actual work processes. A typical ad campaign might require juggling five to ten different AI tools for concept development, script writing, visual generation, voice synthesis, and editing, with creators constantly context-switching between platforms that don't understand each other. The result? AI tools that promise ten-fold efficiency but deliver ten-fold frustration instead.

During my internship building TikTok Symphony Assistant, I learned why the future of creative AI isn't about better models, but about better agent workflows that understand how creativity actually happens. The challenge isn't technical—it's cultural and systemic. Professional creators need to feel like they're directing the AI, not being replaced by it. This means building systems where AI handles the tedious execution while creators focus on strategy, brand voice, and creative direction. The goal is augmentation that preserves creative agency rather than automation that eliminates it.

The TikTok Symphony Assistant represents a significant step toward solving this integration problem, leveraging sophisticated agentic workflows to streamline creative processes from ideation through execution. Rather than offering another standalone tool, Symphony Assistant demonstrates how AI can enhance existing creative workflows by understanding the context and continuity that professional campaigns require. The platform is accessible at https://ads.tiktok.com/business/copilot/standalone and serves as a practical case study for how agent-based systems can transform traditional advertising workflows.

Credits: TikTok Creative Team


# Building Agentic Workflows

## From LLMs to Agents

Leading AI companies now recognize that the transition from large language models to agent-based systems represents a fundamental shift in how we approach complex creative tasks. Traditional LLMs excel at generating individual pieces of content but struggle with the multi-step coordination that professional creative work demands. Agent systems solve this by introducing AI that can break down complex creative briefs, plan multi-step campaigns, and automatically route tasks to specialized tools while maintaining context throughout the entire process.

The key insight driving this evolution is that large language models deliver not just tools, but actual work results at specific stages of creative processes. Rather than asking creators to become prompt engineers, effective agent systems understand creative workflows and can execute specific roles within them. Application deployment becomes a matter of providing models with specific contexts and clear behavioral standards that align with professional creative workflows. The understanding and reasoning capabilities of LLMs can be applied to various creative scenarios, but success requires packaging general capabilities as abilities needed for specific positions or processes, overlaying domain expertise with general intelligence.

However, the promise of ten-fold efficiency gains remains largely unfulfilled because most AI tools still require creators to adapt their workflows rather than the AI adapting to how creative work actually happens. These workflows aren't merely a presentation of parallel capabilities running in isolation, but rather seamless integrations where creators can jump in at any step to provide feedback, make adjustments, or take creative control. The real challenge isn't building smarter AI—it's building AI that preserves creative agency while eliminating the tedious, repetitive tasks that consume most creators' time.

To understand what effective creative AI workflows look like in practice, let's examine Typeface—a billion-dollar startup that's closest to solving this integration problem. Their approach reveals both the promise and the remaining challenges in building AI that actually enhances creative work rather than replacing it.


The fundamental insight that drove our approach at TikTok was recognizing that successful AI applications require a workflow perspective that considers the entire creative process rather than optimizing individual tasks in isolation. Instead of asking "How can AI help with script writing?" we asked "How can AI understand the complete journey from creative brief to final campaign delivery?" This shift in thinking leads to very different product decisions. Rather than building another chatbot that generates scripts, we focused on building an intelligent coordinator that understands how scripts fit into broader campaigns, how they need to align with brand guidelines, and how they connect to visual concepts and distribution strategies.

The key questions that guided our Symphony Assistant development were practical and workflow-centered: What parts of daily creative workflows can be effectively enhanced by AI without disrupting the creative process? If AI systems need to process enterprise creative data, what value does this data provide at different stages of the creative business? Where does AI assistance sit most naturally in the creative value chain? In current creative operational models, which specific handoffs and transitions could be most effectively streamlined with intelligent automation? These questions helped us move beyond generic AI capabilities toward purpose-built creative intelligence.

## Industry Consensus: Task-Specific Models and Architecture Evolution

Leading AI companies have converged on several key architectural approaches that directly informed our work on TikTok Symphony Assistant. Companies like Anthropic, A12Labs, and others now prioritize task-specific models and Mixture of Experts (MoE) architectures that represent a significant evolution from general-purpose language models. This shift reflects the recognition that creative workflows benefit more from specialized intelligence than from generalized capability.

Think of Mixture of Experts like a creative agency where different specialists handle different aspects of a campaign. Instead of one generalist AI doing everything poorly, you have separate 'experts' for script writing, visual concepts, brand voice consistency, and audience targeting—all coordinated by an intelligent router that knows which expert to consult for each task. This approach dramatically improves both the quality of individual outputs and the coherence of the overall campaign, while reducing the computational resources required compared to scaling a single massive model.

For creative applications like Symphony Assistant, MoE architecture enables the system to develop deep expertise in different aspects of content creation while maintaining overall campaign coherence. Rather than asking a general-purpose model to switch context constantly between writing scripts and understanding visual concepts, we route different creative challenges to models specifically trained for those domains.

Our implementation assigns input creative data to different expert networks based on the creative challenge type. Each expert returns specialized outputs optimized for their domain—audience-appropriate script writing, brand-compliant visual concepts, or platform-specific content adaptations. The final output emerges as a coordinated combination that ensures both specialization and coherence throughout campaign development.

The key innovation lies in organizing expert networks around actual creative roles rather than technical divisions. For Symphony Assistant, we created experts that mirror how creative teams organize: audience psychology and messaging strategy, brand voice and tone consistency, platform-specific content requirements, and visual-text integration. This approach required training each expert on carefully curated datasets representing high-quality examples of their creative specialty, allowing deep domain expertise rather than shallow general competency.

### Long Context Windows Enable Sophisticated Routing

The development of longer context windows, exemplified by Gemini 1.5's one million token capacity, has fundamentally changed what's possible in creative AI applications. Extended context windows solve one of the most persistent problems in creative work: maintaining consistency and coherence across complex, multi-faceted campaigns. Jeff Dean's presentation at the Gemini 1.5 Hackathon at AGI House highlighted how these extended context windows enable more sophisticated in-context learning and more effective Mixture of Experts architectures, allowing AI systems to understand not just individual creative tasks but the broader strategic context that informs every creative decision.

For creative applications like Symphony Assistant, longer context windows mean the system can maintain awareness of entire creative briefs, comprehensive brand guidelines, detailed audience research, and complete campaign contexts throughout the generation process. This eliminates the frustrating experience of AI systems that "forget" crucial brand requirements or campaign objectives partway through content creation. Instead of forcing creators to constantly re-specify context, the system maintains a persistent understanding of the creative project's goals, constraints, and requirements across every interaction.

### Practical Implementation of AI Routing Systems

Real-world implementations of intelligent routing concepts can be seen in platforms like Writesonic, which uses GPT Router for intelligent model selection during content generation. The GPT Router system demonstrates how smooth coordination of multiple specialized models—including OpenAI's GPT series, Anthropic's Claude, Microsoft's Azure models, and image generation models like DALL-E and Stable Diffusion—can dramatically speed up responses while ensuring reliability and consistency across different types of creative tasks.

This approach directly influenced our architecture decisions for Symphony Assistant, where different creative challenges benefit from different specialized models and different computational approaches. Script writing might route to a model optimized for conversational language and narrative structure, while visual concept development routes to models that understand visual composition and brand aesthetics. Platform optimization for TikTok versus LinkedIn requires entirely different understanding of audience behavior and content format requirements, so these tasks benefit from specialists trained on platform-specific data and success patterns.



## How Agents Can Help Creators Achieve 10x Efficiency

The advertising and marketing industry represents one of the most promising applications for AI-driven workflow automation. Currently, creators typically juggle eight to ten different AI tools to produce a complete video campaign. This fragmented approach creates significant friction and context-switching overhead that negates many of the efficiency benefits AI should provide.

A typical video creation workflow demonstrates this challenge perfectly. Creators start with concept design in Midjourney, move to script and storyboard development in ChatGPT, generate visual assets using multiple image generation platforms, create video content through services like Runway or Pika, add dialogue and narration via Eleven Labs, incorporate sound effects and music from platforms like SUNO, enhance video quality through Topaz Video, and finally handle subtitles and editing in CapCut or similar tools. Each transition requires re-establishing context and manually ensuring consistency across platforms.

## Improving Agent User Experience

Effective creative AI systems must address four fundamental user experience challenges that consistently emerge in professional creative workflows.

**Personalized Memory & Style Customization** becomes essential because adjusting generation style through prompts before each generation is both time-consuming and unpredictable. Professional creators need comprehensive generation rules that ensure consistent output quality without repeated manual adjustments. Typeface's Brand Kit exemplifies this approach by allowing creators to establish persistent brand guidelines that inform every generation.

**Rewind & Edit** functionality addresses the reality that agent chaining accuracy decreases progressively through multi-step workflows. Human-in-the-loop processes allow creators to regenerate or fine-tune content at each step, ensuring final generation quality meets professional standards. Typeface's Projects feature demonstrates this principle by including Magic Prompt assistance and seamless regeneration capabilities.

**Choose from Variations** recognizes that creators require options to make informed decisions about their content. Traditional generation processes force users to refresh entirely when dissatisfied with outputs, creating inefficiency. Providing multiple variations in single generations significantly improves user experience and creative flexibility.

**Workflows, Not Skills** addresses the core problem that creators currently need five to ten disconnected AI capabilities to complete advertising video creation. Most tools require frequent platform switching and context re-establishment. Effective creative AI systems present all capabilities at appropriate workflow stages, enabling efficient tool invocation without breaking creative flow.

## Typeface: Blueprint for Integrated Creative AI

Typeface serves as the closest current example of effective creative AI workflow integration, having raised $165 million to reach a $1 billion valuation by solving the fundamental coordination problem in creative AI tools.

The platform demonstrates successful implementation of the four essential user experience principles. Their **Brand Kit** system allows creators to establish comprehensive brand guidelines including image styles, color palettes, and brand voice analysis. The **Projects** interface provides a Google Doc-like experience where creators can seamlessly invoke different AI capabilities without losing context. Their **Template Library** offers workflow-specific starting points that understand creative intent rather than just generating generic content.

Most significantly, Typeface's **integration strategy** eliminates cross-platform collaboration friction through native connections with Microsoft Dynamics 365, Salesforce Marketing, Google BigQuery, Google Workspace, and Microsoft Teams. This approach recognizes that effective creative AI must work within existing professional workflows rather than requiring creators to adopt entirely new platforms.

## Summary

The evolution of AI-powered creative tools reveals a clear trajectory from isolated capabilities toward integrated workflow solutions. Current marketing-focused products successfully integrate multiple stages of the creation process, providing workflow-like experiences that reduce cross-platform collaboration friction through strategic external integrations. However, the most successful implementations go beyond simply chaining various capabilities together—they require thoughtful GUI process specifications that understand how creative work actually happens.

The key insight from analyzing platforms like Typeface, Symphony Assistant, and similar tools is that workflows must be designed around creative intent rather than technical capability. Effective creative AI systems understand the relationships between different creative decisions, maintain context across complex campaigns, and preserve creative agency while automating repetitive tasks. The future of creative AI lies not in building more powerful individual models, but in building more intelligent coordination systems that understand how different types of creative intelligence need to work together to produce professional-quality campaigns.

---

## Added Nov 11th: Case Study of Pomelli - Progress and Limitations in Brand Kit Creation

![Pomelli Landing Page](/images/posts/copilot/pomelli-landing-page.png)
*Pomelli's landing page showcases a visually appealing interface for generating on-brand content, positioned as "Google Labs" experimental project for business content creation.*

Pomelli represents a good step forward in creating a brand kit framework for creative content generation, demonstrating several advances in user experience design for AI-powered marketing tools. However, the platform reveals key limitations that highlight ongoing challenges in the space: lacking context awareness and an overfocus on generalization at the expense of domain-specific optimization.

![Pomelli Campaign Interface](/images/posts/copilot/pomelli-campaign-interface.png)
*The campaign creation interface emphasizes simplicity with a central prompt area and "Suggest Ideas" functionality, but the disclaimer "Pomelli can make mistakes, so double-check it" reveals underlying reliability concerns.*

### Strengths: Brand Identity Framework

Pomelli's most significant contribution lies in its systematic approach to brand identity capture and application. The platform successfully implements several key principles we identified in our analysis of effective creative AI tools:

**Personalized Memory & Style Customization**: Like Typeface's Brand Kit, Pomelli allows users to establish comprehensive brand guidelines that persist across content generation sessions. This addresses the fundamental user frustration of having to re-specify brand requirements for each creative task.

**Workflow Integration**: The platform demonstrates understanding that effective creative AI tools must integrate seamlessly into existing creative processes rather than requiring users to adapt their workflows to the tool's limitations.

![Pomelli Business DNA Setup](/images/posts/copilot/pomelli-business-dna-setup.png)
*The "Business DNA" setup process captures comprehensive brand information including logos, fonts, color palettes, taglines, and brand values, demonstrating a systematic approach to brand identity integration.*

Despite these strengths, Pomelli doesn't seem to support consistent generation of poster content. [Section to be continued]

The evolution from tools like Typeface through Pomelli to platforms like Symphony Assistant demonstrates the rapid maturation of creative AI, but also reveals that the most significant challenges lie not in generating content, but in generating the *right* content for specific contexts, audiences, and objectives.
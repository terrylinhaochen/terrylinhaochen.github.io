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

## From Google Next to Baidu Create: Lessons in AI Product Development

Google's Cloud Next conference from April 9-11 provided valuable insights into the current state of AI product development, with announcements including Google Vids, enhanced Gemini capabilities, Vertex AI updates, and various productivity integrations. The conference highlighted both the promise and the challenges facing AI-powered creative tools in the current market.

From a consumer product perspective, despite Google's extensive product announcements, many offerings appeared relatively superficial in their implementation. Products like Google Vids and Workspace AI integrations, while technically impressive, often fell short of delivering truly transformative user experiences. The Sales Agent demonstrations revealed awkward workflow integrations similar to Amazon's Rufus shopping assistant—technically functional but requiring users to adapt their natural behavior patterns to accommodate the AI's limitations. This suggests that even the largest tech companies still struggle with creating natural, efficient AI-human collaboration patterns that feel intuitive rather than forced.

From a business product perspective, Google showcased numerous agent applications built on Gemini and Vertex AI, emphasizing their powerful functionality and technical capabilities. However, the presentations consistently glossed over the practical difficulties of actual deployment and adoption in real business environments. Currently, both large technology companies and traditional businesses face significant challenges in implementing truly effective workflows that deliver on AI's promise of dramatically improved productivity. The gap between demo-quality AI and production-ready systems remains substantial, particularly when it comes to maintaining quality standards and handling edge cases that emerge in real-world usage.

The fundamental insight that drove our approach at TikTok was recognizing that successful AI applications require a workflow perspective that considers the entire creative process rather than optimizing individual tasks in isolation. Instead of asking "How can AI help with script writing?" we asked "How can AI understand the complete journey from creative brief to final campaign delivery?" This shift in thinking leads to very different product decisions. Rather than building another chatbot that generates scripts, we focused on building an intelligent coordinator that understands how scripts fit into broader campaigns, how they need to align with brand guidelines, and how they connect to visual concepts and distribution strategies.

The key questions that guided our Symphony Assistant development were practical and workflow-centered: What parts of daily creative workflows can be effectively enhanced by AI without disrupting the creative process? If AI systems need to process enterprise creative data, what value does this data provide at different stages of the creative business? Where does AI assistance sit most naturally in the creative value chain? In current creative operational models, which specific handoffs and transitions could be most effectively streamlined with intelligent automation? These questions helped us move beyond generic AI capabilities toward purpose-built creative intelligence.

## Industry Consensus: Task-Specific Models and Architecture Evolution

Leading AI companies have converged on several key architectural approaches that directly informed our work on TikTok Symphony Assistant. Companies like Anthropic, A12Labs, and others now prioritize task-specific models and Mixture of Experts (MoE) architectures that represent a significant evolution from general-purpose language models. This shift reflects the recognition that creative workflows benefit more from specialized intelligence than from generalized capability.

Think of Mixture of Experts like a creative agency where different specialists handle different aspects of a campaign. Instead of one generalist AI doing everything poorly, you have separate 'experts' for script writing, visual concepts, brand voice consistency, and audience targeting—all coordinated by an intelligent router that knows which expert to consult for each task. This approach dramatically improves both the quality of individual outputs and the coherence of the overall campaign, while reducing the computational resources required compared to scaling a single massive model.

Companies now apply MoE architecture across natural language processing, computer vision, speech recognition, and other fields relevant to creative content generation because it solves the fundamental trade-off between specialization and efficiency. For creative applications like Symphony Assistant, this means the system can develop deep expertise in different aspects of content creation while maintaining overall campaign coherence and brand consistency. Rather than asking a general-purpose model to switch context constantly between writing scripts and understanding visual concepts, we can route different types of creative challenges to models that have been specifically trained for those domains.

In our implementation for Symphony Assistant, input creative data gets intelligently assigned to different expert networks based on the type of creative challenge being addressed. Each expert returns specialized output structures optimized for their particular domain, whether that's audience-appropriate script writing, brand-compliant visual concepts, or platform-specific content adaptations. The final creative output emerges as a coordinated combination of all expert network outputs, ensuring both specialization and coherence throughout the campaign development process.

The core innovation of MoE architecture lies in its ability to break down large, complex creative tasks into multiple smaller, more manageable subtasks, with different expert networks handling different aspects of content creation. For advertising creative generation, this might mean separate experts for script writing, visual concept development, audience targeting, and brand voice consistency. This approach dramatically improves model flexibility and scalability while reducing overall parameters and computational requirements, enhancing both efficiency and creative output quality.

Implementing an effective MoE architecture for creative applications requires a systematic approach that goes beyond traditional machine learning workflows. The process begins by defining expert networks that align with actual creative roles and responsibilities rather than arbitrary technical divisions. For Symphony Assistant, this meant creating experts that mirror how creative teams actually organize their work: one expert focused on audience psychology and messaging strategy, another specialized in brand voice and tone consistency, a third optimized for platform-specific content requirements, and a fourth dedicated to visual-text integration and cross-modal coherence.

The training process for these expert networks requires carefully curated datasets that represent high-quality examples of each creative specialty. Rather than using generic training data, we invested significant effort in building training sets that captured the nuances of professional creative work, including examples of successful brand campaigns, audience-tested messaging, and platform-optimized content. Each expert network gets trained on data specifically relevant to its domain, allowing it to develop deep expertise rather than shallow competency across multiple areas.

Data allocation during both training and inference becomes a critical design decision that affects the entire system's effectiveness. For creative applications, the routing mechanism must understand not just the technical characteristics of the input (text vs. image vs. video) but also the creative intent and context. Our implementation uses a combination of task-based routing (is this a script writing task or a visual concept task?) and context-based routing (what stage of the campaign development process are we in?) to ensure that creative challenges reach the most appropriate expert network.

The final output synthesis represents one of the most sophisticated aspects of the MoE architecture for creative work. Rather than simply averaging or weighting different expert outputs, effective creative AI systems need to understand the relationships and dependencies between different creative elements. Scripts must align with visual concepts, both must reflect brand guidelines, and everything must be optimized for the target platform and audience. Our approach uses a coordination layer that understands these creative relationships and ensures that the combined output maintains coherence across all dimensions of the creative challenge.

Model training for the complete MoE architecture requires an iterative approach that balances expert specialization with overall system coherence. We use a combination of end-to-end training to ensure the experts learn to work together effectively and targeted expert training to maintain each specialist's depth of capability. The key insight is that creative MoE systems need to be trained on complete creative workflows, not just isolated tasks, to understand how different types of creative intelligence need to coordinate in practice.

### Long Context Windows Enable Sophisticated Routing

The development of longer context windows, exemplified by Gemini 1.5's one million token capacity, has fundamentally changed what's possible in creative AI applications. Extended context windows solve one of the most persistent problems in creative work: maintaining consistency and coherence across complex, multi-faceted campaigns. Jeff Dean's presentation at the Gemini 1.5 Hackathon at AGI House highlighted how these extended context windows enable more sophisticated in-context learning and more effective Mixture of Experts architectures, allowing AI systems to understand not just individual creative tasks but the broader strategic context that informs every creative decision.

For creative applications like Symphony Assistant, longer context windows mean the system can maintain awareness of entire creative briefs, comprehensive brand guidelines, detailed audience research, and complete campaign contexts throughout the generation process. This eliminates the frustrating experience of AI systems that "forget" crucial brand requirements or campaign objectives partway through content creation. Instead of forcing creators to constantly re-specify context, the system maintains a persistent understanding of the creative project's goals, constraints, and requirements across every interaction.

### Practical Implementation of AI Routing Systems

Real-world implementations of intelligent routing concepts can be seen in platforms like Writesonic, which uses GPT Router for intelligent model selection during content generation. The GPT Router system demonstrates how smooth coordination of multiple specialized models—including OpenAI's GPT series, Anthropic's Claude, Microsoft's Azure models, and image generation models like DALL-E and Stable Diffusion—can dramatically speed up responses while ensuring reliability and consistency across different types of creative tasks.

This approach directly influenced our architecture decisions for Symphony Assistant, where different creative challenges benefit from different specialized models and different computational approaches. Script writing might route to a model optimized for conversational language and narrative structure, while visual concept development routes to models that understand visual composition and brand aesthetics. Platform optimization for TikTok versus LinkedIn requires entirely different understanding of audience behavior and content format requirements, so these tasks benefit from specialists trained on platform-specific data and success patterns.

```python
from gpt_router.client import GPTRouterClient
from gpt_router.models import ModelGenerationRequest, GenerationParams
from gpt_router.enums import ModelsEnum, ProvidersEnum

client = GPTRouterClient(base_url='your_base_url', api_key='your_api_key')

messages = [
    {"role": "user", "content": "Write me a short poem"},
]
prompt_params = GenerationParams(messages=messages)
claude2_request = ModelGenerationRequest(
    model_name=ModelsEnum.CLAUDE_INSTANT_12,
    provider_name=ProvidersEnum.ANTHROPIC.value,
    order=1,
    prompt_params=prompt_params,
)

response = client.generate(ordered_generation_requests=[claude2_request])
print(response.choices[0].text)
```

## 1.2 Non-Consensus: Scenarios, Market, Differentiation

Content that is still not determined:

What constitutes a reasonable workflow remains to be determined. Some scenarios, like Amazon Rufus shopping guidance (where users need to converse before selecting products), differ significantly from existing user workflows and fail to provide efficiency improvements. -Verge

Many companies conducting needs validation are choosing customer profiles too similar to themselves or their friends, so the authenticity of these needs remains questionable. Additionally, existing AI product business models are trending toward price wars at the foundational level, with unclear differentiation at the application layer. -Google Ventures

## How Agents Can Help Creators Achieve 10x Efficiency

### 2.1 Agent Application Cases

#### AutoGPT
AutoGPT represents the vision of accessible AI for everyone, to use and build upon. Their mission is to provide tools so users can focus on what matters.
https://github.com/Significant-Gravitas/AutoGPT

#### GPT Researcher
A GPT-based autonomous agent that conducts comprehensive online research on any given topic.
https://github.com/assafelovic/gpt-researcher

The advertising and marketing industry is one of the business sectors where AIGC is most widely applied. AI products are available for various stages, from initial market analysis to brainstorming, personalized guidance, ad copywriting, and video production. These products aim to reduce content production costs and accelerate creative implementation. However, most current products offer only single or partial functions and cannot complete the entire video creation process from scratch.

### Workflow Building - Video Creation Example

Concept Design: Midjourney
Script + Storyboard: ChatGPT
AI Image Generation: Midjourney, Stable Diffusion, D3
AI Video: Runway, Pika, Pixverse, Morph Studio
Dialogue + Narration: Eleven Labs, Ruisheng
Sound Effects + Music: SUNO, UDIO, AUDIOGEN
Video Enhancement: Topaz Video
Subtitles + Editing: CapCut, JianYing

### 2.2 Improving Agent User Experience

#### Personalized Memory & Style Customization
User Need: Adjusting generation style through prompts before each generation is time-consuming and unpredictable. A comprehensive set of generation rules can help ensure that generated content consistently meets user needs, avoiding repeated adjustments.
Example: Typeface Brand Kit

#### Rewind & Edit
User Need: From a probability perspective, the accuracy of Agent Chaining decreases progressively. Setting up human-in-the-loop processes allows users to regenerate or fine-tune after each step, helping ensure final generation quality.
Example: Typeface Projects (also includes Magic Prompt to assist with prompt generation)

#### Choose from Variations
User Need: Users want options. In existing generation processes, if users are dissatisfied with generated content, they need to refresh the generation, which is inefficient. Providing multiple options in a single generation can improve user experience.
Example: Typeface Image Generator (also supports favoriting)

#### Workflows, Not Skills
User Need: Currently, some users need to use 5-10 AI capabilities to complete advertising video creation. Most capabilities are disconnected, requiring frequent switching. By establishing a clear workflow, users can more efficiently invoke relevant tools to complete their creation.
Example: Typeface Workflow (all capabilities presented at the appropriate stages)

### Typeface - Product Reference from Former Adobe CTO

https://www.typeface.ai

Typeface was founded in May 2022, based in San Francisco. In February 2023, it received $65 million in Series A funding from Lightspeed Venture Partners, GV, Menlo Ventures, and M12. In July 2023, it completed a $100 million Series B round led by Salesforce Ventures, with Lightspeed Venture Partners, Madrona, GV (Google Ventures), Menlo Ventures, and M12 (Microsoft's venture fund) participating. To date, Typeface has raised a total of $165 million, with a post-investment valuation of $1 billion. (Product positioning: 10x content factory)

### 3.1 Performance Data - 40,000 Monthly Active Users, 4:59 Average Usage Time

### 3.2 Feature Breakdown - Customized Content Generation for Brands

Multiple Agent calls centered around the core document editing experience.

When users log into the Typeface homepage, they see four core functions in the left toolbar (Projects, Templates, Brands, Audience). The main page shows corresponding workflow options (Create a product shot, generate some text, etc.). The Getting Started Guide at the bottom of the main page provides guidance videos for certain use cases (Set up brand kit, repurpose videos into text) to help users understand how to invoke various capabilities.

#### Features:

##### Brands
When users click to enter the Brands page, they can set up multiple Brand generation rules, divided into 3 items:
- Image Styles: Users can upload existing images for subsequent generation style adjustment.
- Color Palettes: Users can upload brand color palettes to standardize generated image colors.
- Brand Voice: Users can directly upload existing brand introductions/Blog URLs or copy a 500-1000 word passage. Typeface analyzes the content and formulates a series of brand values and tones, finally combining them with user-set hard rules to ensure each generation conforms to the brand image.

##### Projects
When users click to enter the Projects page, they see a Google Doc-like interface storing multiple projects. Each project opens to a main document page with a resizable input bar at the bottom. Clicking the input bar presents options:
- Create a new image
- Create a product shot
- Generate text
- Create from template

Additionally, users can select Refine to adjust generation language and tone (fixed options).

##### Create an Image
After clicking Create an image, users enter the image editing page with six integrated functions on the left: "Add, select, extend, lighting, color, effects, adobe express." Users can generate and adjust images directly and favorite preferred generations.

##### Create a Product Shot
The difference from Create an image is that Product shot includes specific products, while image isn't necessarily product-related.

##### Generate Text
After clicking Generate text, users enter a prompt input field. Clicking the settings icon in the upper right allows setting Target Audience and Brand Kit. After generation, users can further adjust the prompt for a second generation, and selected content appears in the Project docs.

##### Templates
Typeface offers various generation templates. Users can search and select from the Template library, which adjusts the input box according to the content template, like TikTok Script.

##### Audiences
When generating content, users can select user profiles and set Age Range, Gender, Interest or preference, and Spending behavior (with fixed options).

##### Integrations
These integrations allow users to create in their familiar workspaces, avoiding the friction of cross-platform collaboration.

https://www.typeface.ai/product/integrations

###### Microsoft Dynamics 365
Integration allows marketers to generate personalized content directly within Dynamics 365 Customer Insights, enhancing productivity and return on investment.

###### Salesforce Marketing
Users can generate multiple personalized creatives for audience-targeted campaigns, support scaling tailored content, and create variations for different target audiences.

###### Google BigQuery
Users can define audience segments with customer intelligence from BigQuery's data from ads, sales, customers, and products to generate a complete suite of custom content for every audience and channel in minutes.

###### Google Workspace
Users can streamline content workflows from their favorite apps and access content drafts within Google Drive, refine, rework, or write from scratch, and share with other stakeholders for quick approvals.

###### Microsoft Teams
Create content in Teams using Typeface's templates and repurpose materials or create new content. Make quick edits, such as improve writing, shorten text, change tone, and more, all within the Teams chat environment.

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

### Limitations: Context and Generalization Challenges

Despite these strengths, Pomelli exhibits two critical limitations that reflect broader challenges in the creative AI space:

#### 1. Lacking Context Awareness

The platform struggles with contextual understanding that goes beyond basic brand guidelines. While it can apply visual brand elements consistently, it fails to maintain deeper contextual awareness about:
- **Campaign Continuity**: Understanding how individual pieces of content fit within broader marketing campaigns
- **Audience Context**: Adapting content based on specific audience segments and their engagement patterns
- **Platform Optimization**: Tailoring content for different social media platforms beyond superficial formatting changes
- **Performance Learning**: Incorporating feedback from content performance to improve future generations

#### 2. Overfocus on Generalization

Pomelli's attempt to serve all types of businesses and creative needs leads to a "jack of all trades, master of none" approach:
- **Generic Templates**: While offering various content types, the templates lack the depth and sophistication needed for specific industries or use cases
- **Surface-Level Customization**: Brand application remains primarily visual rather than incorporating deeper brand voice, messaging strategy, or industry-specific best practices
- **Limited Specialization**: The platform doesn't offer the kind of domain-specific expertise that would make it invaluable for particular industry verticals

### Implications for Creative AI Development

Pomelli's case illustrates the tension between accessibility and effectiveness in creative AI tools. While the platform successfully democratizes access to branded content creation, it highlights the ongoing challenge of building AI systems that can deliver truly professional-grade creative output.

The platform's limitations suggest that the next generation of creative AI tools will likely need to choose between:
1. **Specialized Depth**: Building domain-specific expertise for particular industries or creative disciplines
2. **Contextual Intelligence**: Developing sophisticated understanding of creative context, campaign objectives, and performance optimization
3. **Collaborative Integration**: Seamlessly integrating with existing creative workflows and professional tools

### Looking Forward: Lessons for Symphony Assistant and Beyond

Pomelli's approach validates several design principles we implemented in TikTok Symphony Assistant while highlighting areas for continued innovation:

**Validated Approaches**:
- Brand kit frameworks are essential for professional creative AI adoption
- Simple, intuitive interfaces can mask complex AI capabilities effectively
- Visual brand consistency is a solved problem that users expect as baseline functionality

**Innovation Opportunities**:
- Context-aware content generation that understands campaign objectives and audience dynamics
- Performance-driven optimization that learns from content effectiveness
- Industry-specific creative intelligence that provides genuine professional value
- Deeper integration with creative workflows and professional tools

The evolution from tools like Typeface through Pomelli to platforms like Symphony Assistant demonstrates the rapid maturation of creative AI, but also reveals that the most significant challenges lie not in generating content, but in generating the *right* content for specific contexts, audiences, and objectives.
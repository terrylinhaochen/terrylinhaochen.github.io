---
title: "TikTok Symphony Assistant - AI Creative Ad Generation"
date: 2024-05-20
categories: advertising-technology
projectURL: https://ads.tiktok.com/business/copilot/standalone
tags: ["Product"]
description: "Development of TikTok Symphony Assistant - an AI-powered creative tool for generating ad scripts and video content. Agentic workflows and interface optimization for automated creative generation."
keywords: ["TikTok Symphony", "AI advertising", "creative generation", "ad scripts", "video ads", "agentic workflows", "creative automation", "TikTok ads"]
---
Leverage generative AI capabilities for creative script ideation and video ad creation. (Worked on agentic workflows and interface optimization)
https://ads.tiktok.com/business/copilot/standalone?locale=en&deviceType=pc

Credits: TikTok Creative Team


# Building Agentic Workflows

## From LLMs to Agents

The transition from LLMs to Agents has become a consensus in the AI community, representing an improvement in complex task execution capabilities. However, helping users fully utilize Agent capabilities to achieve tenfold efficiency gains requires careful workflow design. These workflows aren't merely a presentation of parallel capabilities, but seamless integrations with human-in-the-loop quality assurance. This document uses Typeface as a reference to explain why a clear primary workflow is necessary, as well as design approaches for functional extensions.

## From Google Next to Baidu Create

Google held its Google Cloud Next conference from April 9-11, announcing products like Google Vids, Gemini, Vertex AI, and related updates.

From a consumer product perspective, despite Google releasing many products, they were relatively superficial (Google Vids, Workspace AI, etc.). Examples like their Sales Agent demonstration were awkward in workflow, similar to Amazon Rufus. However, the enhanced data insight capabilities enabled by long context windows are becoming a confirmed trend.

From a business product perspective, while Google showcased many Agent applications built on Gemini and Vertex AI and emphasized their powerful functionality, they glossed over the difficulties of actual deployment. Currently, both large tech companies and traditional businesses face challenges in implementing truly effective workflows.

LLMs deliver not just tools, but work results at specific stages of a process. Application deployment can be viewed as providing models with specific contexts and clear behavioral standards. The understanding and reasoning capabilities of LLMs can be applied to various scenarios; packaging general capabilities as abilities needed for specific positions or processes involves overlaying domain expertise with general intelligence.

We should look beyond ChatBot and Agent dimensions to view applications from a Workflow perspective. What parts of daily workflows can be taken over by LLMs? If large models need to process certain enterprise data, what value does this data provide in the business? Where does it sit in the value chain? In the current operational model, which links could be replaced with large models?

## 1.1 Consensus: Task Specific, MoE, Agents, Routing

Content that has reached consensus:

Most companies (A12Labs, Anthropic, etc.) are now developing Task Specific models and Mixture of Experts architectures. The MoE architecture has been widely applied in natural language processing, computer vision, speech recognition, and other fields. It can improve model flexibility and scalability while reducing parameters and computational requirements, thereby enhancing model efficiency and generalization ability (Mixture of Experts Explained).

The MoE (Mixture of Experts) architecture is a deep learning model structure composed of multiple expert networks, each responsible for handling specific tasks or datasets. In an MoE architecture, input data is assigned to different expert networks for processing, each returning an output structure, with the final output being a weighted sum of all expert network outputs.

The core idea of MoE architecture is to break down a large, complex task into multiple smaller, simpler tasks, with different expert networks handling different tasks. This improves model flexibility and scalability while reducing parameters and computational requirements, enhancing efficiency and generalization capability.

Implementing an MoE architecture typically requires the following steps:

1. Define expert networks: First, define multiple expert networks, each responsible for handling specific tasks or datasets. These expert networks can be different deep learning models such as CNNs, RNNs, etc.

2. Train expert networks: Use labeled training data to train each expert network to obtain weights and parameters.

3. Allocate data: During training, input data needs to be allocated to different expert networks for processing. Data allocation methods can be random, task-based, data-based, etc.

4. Summarize results: Weight and sum the output results of each expert network to get the final output.

5. Train the model: Use labeled training data to train the entire MoE architecture to obtain final model weights and parameters.

### Longer Context Window -> LLM Routing

At the Gemini 1.5 Hackathon at AGI House, Jeff Dean noted the significant aspects of Gemini 1.5: 1 Million context window, which opens up new capabilities with in-context learning, and the MoE (Mixture of Experts) architecture.

### AI Routing Uses

Writesonic (https://writesonic.com) uses GPT Router for LLM Routing during AI Model Selection.

GPT Router (https://github.com/Writesonic/GPTRouter) allows smooth management of multiple LLMs (OpenAI, Anthropic, Azure) and Image Models (Dall-E, SDXL), speeds up responses, and ensures non-stop reliability.

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
Workflows are not just about having various capabilities in the creation process, but also about chaining them together with appropriate GUI process specifications. Current marketing-focused products mostly integrate multiple stages of the creation process, providing workflow-like experiences for users, and reducing cross-platform collaboration friction through external integrations.
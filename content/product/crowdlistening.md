---
title: "From Raw Social Data to Real Research"
date: 2025-09-15
categories: crowdlisten
projectURL: crowdlisten.com
tags: ["Entrepreneurship", "Product"]
company: "crowdlisten"
description: "Transform large-scale social conversations into actionable insights. Understand crowd sentiment, track emerging opinions, and identify key narratives."
keywords: ["social listening", "brand listening", "market analysis", "tiktok", "journalism","reporting", "user experience"]
images: ["/projects/crowdlisten/featured.jpg"]
aliases: ["/projects/crowdlisten/"]
version: "1.1"
changelog:
  - version: "1.1"
    date: "2025-10-25"
    changes: "Updated Title"
---

## Inspiring insights, amplifying voices. (crowdlisten.com)

![Webpage](/images/posts/crowdlistening/webpage.png)

## From Content Aggregation to Original Research

Crowdlistening transforms large-scale social conversations into actionable insight by integrating llm reasoning with extensive model context protocol(MCP) capabilities. While being able to quantatively analyze large volumes of data is already an interesting task, our focus is not just on content analysis at scale, but rather conducting original research directly from raw social data, generating insights that haven't yet appeared in established reporting.

Deep research features provide professional-looking research reports, yet the contents are far from original, as they're drawn from articles already indexable on the internet and paraphrased with LLMs. However, much of the internet's data exists in unstructured formats - TikTok videos, comments, and metadata, for example. Too much content is generated every day for there to be existing articles written about it all, and when such articles are published, they're often already outdated. When you consider multimodal data, metadata, and connections between data points, these are precisely the types of information that could yield genuinely interesting and useful insights.

I've been thinking about this problem while working at TikTok, enabling better social listening through more fine-grained insights extracted using multi-modal/LLM-based approaches. In October, I started developing early conceptions of Crowdlistening, focusing on multi-modal content understanding for TikTok videos. Although deep research features like GPT Researcher and Stanford Oval Storm existed, it wasn't intuitive to integrate unstructured data processing capabilities into their workflows. 

I paused Crowdlistening in Winter Quarter due to other commitments, but during this time, Anthropic released the Model Context Protocol (MCP). I've recently gotten back on track following progress in this field, and I believe this presents an interesting avenue for product innovation - deep research features are significantly enhanced by the growing ecosystem of MCP servers (the same agentic workflows perform much better given they rely on APIs, whose capabilities have improved over recent months).

What I'm particularly interested in exploring and building with Crowdlistening is the ability to extract actionable insights from large volumes of unstructured or semi-structured data, forming linkages, and perhaps even testing hypotheses to enable effective research at scale. We started with TikTok data as a prototype ground given my familiarity with the medium, but I could quickly see this covering any type of unstructured data available on the web.

## The Insight Paradox

![Insight Paradox](/images/posts/crowdlistening/insight_paradox.png)

Brands today face a fundamental paradox: they need broad insights from vast amounts of social data, yet require the detailed understanding typically only available through limited case studies. Current solutions offer either abstracted metrics that require tedious manual interpretation, expensive and limited content screening that can't scale, or surface-level sentiment analysis that misses nuanced opinions. Crowdlistening bridges this gap by combining the scale of algorithmic analysis with the depth of human-like comprehension. This addresses the first challenge identified in "Essence of Creativity" - helping users understand massive amounts of information and generate meaningful insights when they "don't know what output they want."

## Technical Architecture: Multi-Modal by Design

The rationale behind Crowdlistening's multi-modal technical architecture stems from the fundamental challenge of extracting truly valuable insights from the vast and varied landscape of online conversations. Traditional methods often fall short because they either focus on structured data or analyze individual modalities (text, video, audio) in isolation. This approach misses the rich context and nuanced understanding that arises from the interplay between different forms of content and engagement. For example, a viral TikTok video's impact is not solely determined by its visual content but also by its accompanying audio, captions, user comments, and engagement metrics like likes and shares.

![Analysis Page](/images/posts/crowdlistening/analysis_page.png)

Crowdlistening's design directly tackles this limitation by integrating embedding-based topic modeling and LLM deep research capabilities to process and understand this multi-faceted data. Embedding-based topic modeling efficiently identifies key themes across massive datasets, while the LLM's deep reasoning capabilities can then analyze these themes within the context of various modalities. 

This dual approach allows for a layered analysis, examining both the primary content and the subsequent engagement it generates. By processing video, audio, text, and engagement metrics in a unified system, Crowdlistening can generate insights that reflect not just what is being said, but how it's being said, the surrounding context, and the audience's multifaceted response. This comprehensive understanding is crucial for overcoming the "insight paradox" and delivering truly actionable intelligence that goes beyond surface-level sentiment or abstracted metrics. Ultimately, this multi-modal design is essential for achieving the core goal of Crowdlistening: to conduct original research directly from raw social data and uncover emerging trends and nuanced opinions that would be invisible to single-mode analysis systems.

## Detailed Analysis Capabilities

The platform provides granular breakdowns of content performance and audience reactions. As shown in our analysis results page, users can explore specific themes, track sentiment over time, and identify the most engaging content types. This helps brands understand not just what is being said, but why certain content resonates with their audience.

![Analysis Results](/images/posts/crowdlistening/analysis_results.png)

The opinion analysis feature goes beyond simple positive/negative sentiment to categorize specific viewpoints and concerns. This allows brands to understand the nuanced perspectives their audience holds, helping them craft more targeted and effective messaging.

![Opinion Analysis](/images/posts/crowdlistening/opinion_analysis.png)

## The MCP Advantage: Accessible Functional Calls

![Claude MCP Entrance](/images/posts/crowdlistening/claude_client.png)

We have integrated Model Context Protocols (MCPs) - an emerging standard that simplifies how LLMs interact with specialized tools and data sources. Rather than simple API calls, MCPs provide structured interfaces for LLMs to access specialized capabilities while maintaining context awareness throughout the analysis process.

![Claude MCP Process](/images/posts/crowdlistening/claude_mcp_process.png)

As shown here, when a user submits a research question, the system dynamically determines which analytical capabilities to deploy. The Claude interface serves as the orchestration layer, identifying relevant MCP tools to activate and calling them sequentially:

1. First gathering baseline information through web search
2. Then performing targeted data collection via specialized TikTok MCP tools
3. Following with multi-layered analysis of videos and comments
4. Finally synthesizing everything into coherent, actionable insights

This MCP-driven approach creates a dramatic efficiency improvement, reducing complex social media analysis from weeks to minutes while maintaining remarkable analytical depth.

## Case Study - Trump Tariffs

To demonstrate Crowdlistening's capabilities, we conducted a comprehensive analysis of public sentiment regarding Trump's tariff policies. This serves as an excellent test case due to its complexity, polarizing nature, and economic impact.

When a user inputs the query about Trump's tariff policies, our system activates the appropriate MCP tools in sequence. First, it gathers factual background information on the policies themselves, as shown below:

![Research Background](/images/posts/crowdlistening/trump_background.png)

This background research provides context on what the current tariff policies are, including the 10% baseline tariff on all imports that took effect in April 2025, plus the higher "reciprocal" tariffs on countries with which the US has trade deficits (34% for China, 20% for the EU, and 24% for Japan).

Next, the system analyzes public opinion on these policies by examining social media content. The analysis reveals highly polarized reactions, categorized into three main perspectives:

![Public Opinion](/images/posts/crowdlistening/public_opinion.png)

The sentiment analysis dashboard shows that opinions on Trump's tariff policies are distributed as 38% supportive, 42% critical, and 20% neutral or mixed. This visualization helps brands and researchers quickly understand the overall public response landscape.

![Trump Sentiment](/images/posts/crowdlistening/trump_sentiment.png)

One of the most valuable outputs is our projected economic impact analysis. This data visualization clearly presents the concrete financial implications of these policies across multiple domains:

![Economic Impact](/images/posts/crowdlistening/economic_impact.png)

The analysis shows an estimated $1,300 annual cost increase per US household, a projected 0.8% reduction in long-run US GDP, significant auto price increases ($3,000 for US vehicles, $6,000 for imports), and warnings about market volatility.

Beyond simple pro/con sentiment, our opinion analysis feature categorizes specific viewpoints with remarkable granularity. For instance, when examining comments on related content, we can identify nuanced perspectives and their prevalence:

![Trump Comments](/images/posts/crowdlistening/comment_analysis.png)

This example shows how our system can identify several different comment themes, including positive views of content creators (37.5%), appreciation for intelligent discussion (25%), and concerns about media echo chambers (12.5%). This level of nuanced understanding would be impossible through traditional keyword or basic sentiment analysis.

## Validation and Impact

Our solution has been validated through interviews with major brands like L'Oreal, confirming we drastically cut the time and cost of social media analysis. Crowdlistening enables:

- Rapid response to emerging trends
- Deep understanding of consumer sentiment across demographics
- Identification of microtrends before they become mainstream
- Competitive intelligence at unprecedented scale

## The Future of MCP-Driven Research

We believe Model Context Protocols represent the future of specialized LLM applications. As shown in our implementation, MCPs provide a structured way for language models to interact with specialized tools and data sources while maintaining context awareness throughout the analysis process.

This approach is likely to become standard in LLM application development given how effectively it bridges the gap between general-purpose AI and domain-specific functionality. We anticipate seeing more MCP clients (interaction surfaces like Claude's interface) emerge as this paradigm gains traction.

For social media analysis specifically, this approach creates a fascinating dynamic where AI-driven insights can actually lead structured reporting in terms of timeliness and depth. By processing and analyzing unstructured social data at scale, we can identify emerging trends and public sentiment shifts before they're covered in traditional reporting.

## On Social Intelligence

Crowdlistening represents the next evolution in social listening tools - moving beyond counting mentions to truly understanding conversations at scale. By transforming social media chatter into structured insights, we're helping brands make more informed decisions faster than ever before.

As noted in "Essence of Creativity," the real value in AI-powered tools comes not just from generating content, but from helping users find new perspectives and insights. Our platform serves as both an inspiration acquisition tool (accelerating original content production) and a content understanding tool (helping brands better comprehend their audience). By connecting insight data with generation capabilities, we're creating the kind of breakthrough product that bridges the gap between understanding and action.

---

Credits: This project was developed in collaboration with Madison Bratley, whose expertise in journalism and social media analysis was instrumental in conceptualizing how this technology could transform research methodologies. Additional contributions from Violet Liu in providing valuable usability feedback for our early prototype. I would also like to acknowledge Zhengjin, Cathy, Roy, Ruiwan, Qiping, Tongming and other members on the Creative team at TikTok, who I've discussed early conceptions of this idea with.

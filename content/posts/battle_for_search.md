---
title: "The Battle for Search: Defining the 10x Infrastructure Layer for an Agentic Future"
date: 2025-11-18
author: Terry Chen
tags: ["Investing"]
categories: ["AI Application & Value Creation Layer"]

description: "Analyzing the competitive landscape and market opportunity for AI-native search infrastructure as we transition from human-centric to agent-centric web consumption."
keywords: ["AI search", "agent infrastructure", "Perplexity", "Exa AI", "Parallel Webs", "OpenAI", "programmatic web", "search competition"]
---

## The Open Web's Second User

The open web is a miracle. Anyone can publish, learn, and collaborate. It's the closest thing to humanity's living memory. This open ecosystem fueled today's AI breakthroughs.

Right now, as you read this, AIs are silently crawling through millions of web pages, processing more information in minutes than most humans consume in months. This isn't the future—it's happening today, and it's about to accelerate exponentially.

But here's the problem: the entire web was designed for humans clicking links at human speed. When AIs need to process thousands of sources simultaneously, analyze complex data relationships, and generate insights in real-time, our current infrastructure breaks down completely.

**The companies that solve this infrastructure mismatch won't just capture market share—they'll control how intelligence itself accesses human knowledge. This is the battle that will determine whether the open web evolves or fractures.**

## The Market Opportunity: Infrastructure for Agents

The transition from human-centric to agent-centric web consumption represents one of the largest infrastructure shifts since the birth of the internet. The opportunity extends beyond search improvement to creating the foundational layer that enables autonomous agents to reason, research, and act at scale.

### Current Market Players

The competitive landscape reveals four distinct strategic approaches to AI-native search infrastructure. Perplexity AI has carved out the consumer market by pioneering conversational search with real-time web access, creating a bridge between traditional search and AI-native interfaces through human-readable answers with source attribution. Meanwhile, Exa AI is building the technical foundation for AI consumption, developing semantic retrieval systems that index content by meaning rather than keywords—a fundamental shift from optimizing for human clicks to serving AI reasoning tasks.

The most ambitious vision comes from Parallel Webs, which seeks to create the "Programmatic Web" where AIs declare their requirements and the system determines fulfillment automatically, extending beyond search to encompass computation, reasoning, and verifiable provenance in an open market system. OpenAI represents the integration play, weaving search capabilities directly into the AI reasoning loop through SearchGPT and web browsing, making web access feel like extended memory rather than a separate function.

These approaches reveal the fundamental strategic question facing the market: whether AI search will evolve existing paradigms or require completely new infrastructure designed from first principles for machine consumption.

### The 10x Infrastructure Challenge

Traditional search infrastructure optimized for human consumption creates fundamental mismatches for AI agents. Humans need fast results, while AIs can trade time for comprehensive analysis. HTML and CSS were designed for visual rendering, but agents require structured data for reasoning. The scale disparity grows stark: humans browse dozens of pages, while AIs might process thousands simultaneously. Additionally, AIs need verifiable provenance rather than the trust signals humans rely on.

### The Content Understanding Problem

Beyond infrastructure lies an even deeper challenge: teaching machines to understand content the way humans do, while serving entirely different information needs. The complexity becomes apparent when examining how human queries contain multiple layers of meaning that current systems struggle to decompose.

Consider the deceptively simple search "best laptop for programming." Humans understand this as a request for product recommendations filtered by use case, performance benchmarks specific to development tasks, price-to-value analysis within implicit budget constraints, compatibility with development environments, and reliability considerations for professional use. Current AI search systems typically return surface-level product lists rather than the comprehensive decision frameworks humans actually need.

Context sensitivity compounds this challenge dramatically. The same query terms can indicate vastly different intents depending on context—"Python performance" might refer to programming language optimization, snake behavior analysis, or Monty Python comedy reviews. "Scaling issues" could mean business growth challenges, software architecture problems, or literal measurement difficulties. AI systems must develop sophisticated disambiguation capabilities that go far beyond keyword matching to understand semantic relationships and contextual clues.

Temporal relevance adds another layer of complexity that traditional search largely ignores. AI agents need to understand not just what information is accurate, but when it's applicable. Technology recommendations become obsolete within months, regulatory information varies by jurisdiction and changes frequently, and scientific research builds incrementally with newer studies potentially invalidating older conclusions. This temporal understanding requires AI systems to maintain dynamic knowledge graphs that track the evolution of information over time.

Perhaps most challenging is the shift toward multimodal content consumption. Modern information increasingly combines text, images, videos, and interactive elements in ways that traditional text processing cannot handle. Product reviews now embed comparison charts and video demonstrations alongside written analysis, while technical documentation includes code samples, architectural diagrams, and interactive tutorials. AI search systems must extract meaning across these modalities while preserving the complex relationships between different content types—a challenge that requires fundamental advances in cross-modal understanding rather than incremental improvements to existing approaches.

## Technical Foundations: Relevance Models and Intent Classification

Understanding how AI search systems actually work requires examining the sophisticated machine learning architectures underlying modern search relevance. The transition from keyword-based retrieval to semantic understanding represents one of the most significant technical advances in information retrieval.

### Evolution of Relevance Models

**Classical Approaches**: Traditional search relied heavily on term frequency-inverse document frequency (TF-IDF) and BM25, which measure relevance based on statistical word occurrence patterns. BM25 leverages term frequency and inverse document frequency to rank documents effectively, achieving strong performance through its intuitive probabilistic foundations. Despite being decades old, BM25 remains a cornerstone of traditional information retrieval systems due to its simplicity and inherent interpretability.

**Dense Retrieval Revolution**: Modern AI search systems increasingly employ dense retrieval models that represent text as compact numerical vectors (embeddings) capturing semantic meaning. Unlike keyword matching or sparse statistical methods, dense retrieval uses neural networks to encode sentences, paragraphs, or documents into high-dimensional vector spaces where semantic similarity translates to geometric proximity.

**Dense Passage Retrieval (DPR)** represents a foundational approach, using bi-encoders with separate neural networks for queries and documents. DPR summarizes entire documents in single token embeddings, enabling fast semantic matching but potentially losing granular detail.

**ColBERT (Contextualized Late Interaction over BERT)** advances this approach by maintaining token-level embeddings for both queries and documents. Rather than compressing everything into single vectors, ColBERT preserves fine-grained semantic information, then performs "late interaction" by comparing query tokens with document tokens. This architecture achieves up to 26% improvement in Mean Average Precision on MSMARCO passage ranking datasets while maintaining computational efficiency comparable to single-vector approaches.

**Hybrid Integration**: Recent research reveals that state-of-the-art neural models don't replace classical approaches but enhance them. Cross-encoder variants of models like MiniLM employ semantic variants of BM25, using transformer attention heads to compute soft term frequency while controlling for term saturation and document length effects. This suggests neural models leverage the same fundamental mechanisms as BM25 while adding semantic understanding capabilities.

### Learning to Rank Architectures

AI search systems employ sophisticated Learning to Rank (LTR) approaches that fall into three categories, each with distinct advantages for different use cases:

**Pointwise Ranking** treats relevance scoring as a regression or classification problem, predicting individual document relevance scores. While conceptually simple and compatible with standard machine learning algorithms, pointwise approaches optimize for score accuracy rather than relative ranking quality, potentially compromising ordering performance.

**Pairwise Ranking** focuses on relative document ordering by comparing document pairs and optimizing for correct pairwise preferences. Popular algorithms like RankNet, LambdaRank, and LambdaMART employ pairwise approaches because predicting relative order aligns more closely with ranking objectives than absolute score prediction. However, computational complexity scales quadratically with document count, and pairwise methods may produce globally inconsistent rankings.

**Listwise Ranking** directly optimizes entire document lists, enabling metric-driven loss functions that incorporate ranking evaluation measures. This approach can learn complex item relationships and dependencies within result lists, making it particularly effective for query-dependent ranking where document relevance varies significantly based on search context. The computational expense and large labeled data requirements limit listwise adoption to resource-rich environments.

### Intent Classification and Query Understanding

Modern AI search systems must decompose natural language queries into structured intent representations—a process requiring sophisticated natural language understanding capabilities.

**Intent Complexity Decomposition**: When users search "best laptop for programming," they're actually expressing multiple layered intents: product recommendations filtered by use case, performance benchmarks for development tasks, price-to-value analysis within budget constraints, compatibility requirements, and reliability considerations. Advanced intent classification systems use transformer-based models like BERT to achieve 89% combined test accuracy compared to 66% with traditional approaches.

**Contextual Disambiguation**: The same query terms can indicate vastly different intents depending on context. "Python performance" might refer to programming language optimization, snake behavior analysis, or comedy reviews. Intent classification systems must resolve these ambiguities using contextual embeddings that capture semantic relationships beyond surface-level keyword matching.

**Query Enhancement Pipeline**: Modern query understanding involves several sequential processing steps. Spell-checking corrects common typos ("Pythn" → "Python"), entity extraction identifies proper nouns and structured data ("iPhone 15," "New York"), and query expansion adds semantically related terms using embedding models or knowledge graphs. This preprocessing transforms raw user input into structured representations suitable for semantic matching.

**Multilingual and Multimodal Extensions**: Advanced systems like Google's MUM (Multitask Unified Model) extend intent understanding beyond text to images, video, and audio content while supporting multilingual queries. These capabilities enable AI agents to understand and respond to complex, multimodal information requests that traditional keyword-based systems cannot process.

### Implications for AI-Native Search

These technical foundations reveal why building effective AI search infrastructure presents such significant challenges. Companies must master not just individual techniques but their complex interactions: how dense retrieval models integrate with learning-to-rank systems, how intent classification informs query expansion, and how multimodal understanding scales across languages and content types.

The technical complexity explains the performance gaps visible in current benchmarks. Systems that successfully integrate these components—like Parallel AI's superior performance on complex research tasks—demonstrate meaningful architectural advantages over approaches that excel in only single dimensions. However, the rapid pace of advancement in each technical area suggests these advantages may prove temporary as competitors master similar integration challenges.

## The Vision: A Programmatic Web

Tomorrow's dominant architecture will abandon adaptation for complete infrastructure reimagining:

### Unified Data, Compute, Reasoning
Instead of returning static documents, search results become executable environments. When an AI needs to analyze market trends, it doesn't just get links to reports—it gets the data, analytical tools, and computation needed to run custom analyses. For instance, when researching "renewable energy ROI by region," instead of receiving static PDFs, an AI would access live datasets, financial models, and analytical tools to generate custom investment analyses with verified calculations.

### Declarative Interfaces
Today's AIs must reverse-engineer what they need from human-oriented search results. Tomorrow's infrastructure will understand intent directly. Instead of searching "renewable energy adoption rates 2024" and parsing through marketing pages, AIs will declare: "I need verified renewable energy deployment data by country and technology type, with confidence intervals and methodology documentation." The infrastructure translates intent to execution automatically.

### Transparent Attribution
Built so every source and insight is tracked and credited. Contributions become measurable and transparent. This creates economic incentives for high-quality data contribution rather than the current attention-based economy.

### Open, Value-Based Markets
Incentivized so participants earn based on value they add. Staying open wins, not due to virtue, but because it's economically superior. Data providers get compensated for quality and usage, not just eyeballs.

This infrastructure transformation is already creating a competitive battlefield, with distinct players pursuing fundamentally different strategies.

## Market Competition Analysis

The current market reveals significant funding competition, with both Parallel AI and Exa AI achieving similar valuations around $700-740M despite different strategic approaches. Parallel AI has raised $130M+ focused on comprehensive agent infrastructure, while Exa AI has secured $107M+ targeting AI-native search specialization.

Performance benchmarks demonstrate meaningful differentiation, with Parallel AI showing 4.1x better accuracy on OpenAI's BrowseComp benchmark and superior cost efficiency across multiple testing scenarios. However, these technical advantages may prove temporary as the market evolves toward either platform dominance or commodity competition (detailed metrics available in Appendix A).

## Competitive Dynamics

Technical superiority alone won't determine winners; network effects and market positioning drive the real competition:

**The Infrastructure Play**: Parallel Webs is building comprehensive agent infrastructure, achieving superior performance benchmarks while offering cost-effective solutions for enterprise workflows.

**The Search Specialization Play**: Exa AI focuses on perfecting AI-native search with semantic understanding, targeting developers building AI applications.

**The Integration Play**: Companies like OpenAI are betting that seamless integration with AI reasoning will win, making search invisible but essential.

**The Experience Play**: Perplexity is proving that AI-enhanced search can create superior user experiences, building brand loyalty in the transition period.

The competitive landscape reveals a deeper strategic question: will AI search infrastructure become the next dominant platform category, or will it follow the path of cloud computing toward commoditization?

Early indicators suggest both outcomes are possible. Current performance gaps show meaningful differentiation, but cloud infrastructure's evolution warns us that technical advantages often prove temporary. Winners in commodity markets succeed through scale, integration, and operational excellence—not just superior algorithms.

This timeline pressure intensifies the current battle. Technical leaders like Parallel AI must build platform effects and ecosystem lock-in before their performance advantages erode. Meanwhile, integrated players like OpenAI may ultimately win through distribution, even if their pure search capabilities lag.

## Global Market Fragmentation: The China Factor

But this battle isn't happening in a vacuum. The vision of universal AI search infrastructure faces a harsh reality: the global web is fragmenting along geographical and platform lines, with China representing the most dramatic example of an alternative model.

### China's Alternative Web Architecture

China's information ecosystem operates on different principles than the open web:

**Platform-Centric Content**: Instead of distributed websites, content concentrates on super-platforms:
- **WeChat Official Accounts**: Professional and media content lives within WeChat's ecosystem
- **Xiaohongshu (Little Red Book)**: Product discovery and lifestyle content in a closed platform
- **Douyin/TikTok**: Short-form content dominates attention and discovery
- **Toutiao (ByteDance)**: News and information aggregation within proprietary algorithms

### Case Study: TikTok and Xiaohongshu as Search Destinations

The shift away from traditional web search is most visible in how younger consumers discover and research products. **More than half of people now prefer to research products on video and social platforms over traditional browsers**—a fundamental change that challenges the entire premise of web-based AI search infrastructure.

#### TikTok: Video-First Search Monetization

TikTok exemplifies how platform-centric search creates new economic models entirely separate from the open web:

**Search Behavior Patterns**:
- **57% of TikTok users** actively utilize the platform's search functionality
- **23% search within 30 seconds** of opening the app
- **58% discover new brands** on the platform, 1.5x higher than other platforms

**Search as Revenue Surface**: TikTok has transformed search from an information retrieval tool into a sophisticated advertising platform through:

- **Automatic Search Placement**: Ads seamlessly integrated into search results using existing In-Feed creative
- **Search Ads Campaign**: Keyword-based targeting specifically for search results pages  
- **Predictive Search Monetization**: Algorithm-driven keyword suggestions that can be monetized (as shown in targeting interfaces with monthly search volumes for "card games" reaching 9K searches)

This represents a complete inversion of traditional search economics. Instead of serving neutral results with separate ad placements, the search experience itself becomes the primary monetization surface.

#### Xiaohongshu: AI-Enhanced Visual Discovery

Xiaohongshu represents the most sophisticated example of AI-native search within a closed platform ecosystem, demonstrating how platforms are building their own AI search capabilities independent of web infrastructure:

**Native AI Search Integration**: Xiaohongshu has deployed "点点" (DiànDiǎn), an AI search assistant that provides:
- **Lifestyle Service Integration**: AI-powered travel, entertainment, and lifestyle recommendations
- **Conversational Search**: Natural language queries like "长沙一日游推荐" (Changsha one-day trip recommendations) generate comprehensive, contextual responses
- **Multi-Modal Understanding**: The AI processes text queries, images, and user context to deliver personalized recommendations

**Predictive Search Architecture**: The platform's search suggestions demonstrate sophisticated understanding of user intent:
- Autocompleted queries range from specific locations ("长沙网红打卡地方推荐") to experiential searches ("长沙好玩的地方推荐一日游")
- Search suggestions include temporal elements, showing the platform understands context like seasons, events, and trending topics
- Each query connects to both user-generated content and commercial opportunities seamlessly

**Visual-First Information Architecture**: Unlike text-based search engines, Xiaohongshu's search creates fundamentally different data relationships:
- **Image-Centric Results**: Search results prioritize visual content over text descriptions
- **Creator-Commerce Integration**: Search results blend user experiences, product recommendations, and purchase opportunities in unified visual layouts
- **Cultural Context Embedding**: AI understands cultural nuances, local preferences, and social signals that traditional web crawling cannot capture

**Platform-Specific AI Advantages**: Xiaohongshu's closed ecosystem enables AI capabilities that external search providers cannot replicate:
- **Behavioral Data Integration**: AI learns from user interactions, saves, purchases, and engagement patterns within the platform
- **Real-Time Content Understanding**: Fresh, culturally relevant content is immediately available to AI systems without crawling delays
- **Economic Alignment**: AI recommendations optimize for platform engagement and monetization rather than neutral information retrieval

### Implications for AI Search Infrastructure

These platform-centric models create several challenges for companies building universal AI search infrastructure:

**Content Access Barriers**: The most valuable and current information increasingly lives behind platform APIs with restrictive access policies. AI agents may struggle to access the content that humans actually consume for decision-making.

**Monetization Competition**: Platforms like TikTok generate revenue directly from search interactions, creating economic incentives to keep users within their ecosystem rather than directing them to external information sources.

**User Behavior Divergence**: As search behavior shifts toward visual, social, and algorithm-curated discovery, traditional text-based search infrastructure becomes less relevant to actual human information consumption patterns.

**Economic Model Mismatch**: Platform-centric search monetizes attention and engagement within closed loops, while web-based AI search infrastructure depends on open content access and attribution—fundamentally incompatible economic models.

### Implications for Global AI Infrastructure

**Baidu's Positioning**: Baidu's AI search efforts (Ernie Bot, integrated search) may dominate Chinese markets not through superior technology, but through platform partnerships and regulatory alignment. Western AI search providers face structural disadvantages in accessing Chinese content platforms.

**Regional Infrastructure Requirements**: The fragmented global landscape suggests that AI search infrastructure may need to be regionally specialized rather than globally uniform. This could favor:
- **Local Champions**: Companies like Baidu in China, or potential regional players in Europe/India
- **Platform Partnerships**: Direct integrations with dominant local platforms
- **Regulatory Compliance**: Infrastructure designed around local data sovereignty requirements

**The Western Assumption Risk**: Current AI search development assumes the Western open web model is universal. But if major markets operate through closed platforms, purely web-based AI search may capture only a fraction of global information consumption.

## The Stakes

The goal transcends web preservation. The opportunity lies in unlocking what comes next: AIs solving complex problems, accelerating discovery, creating things we can't yet imagine.

The choice is binary: we build the open web for its second user, or it fractures beyond repair. Victory here extends beyond market dominance to controlling how intelligence accesses and processes human knowledge.

As agents become our primary interface to information, the infrastructure serving them becomes the most critical layer in the knowledge economy. The question isn't whether this transition will happen, but who will build the rails for humanity's next chapter.

At stake is nothing less than the future of how intelligence—both human and artificial—discovers, processes, and acts on information. The battle for search is really the battle for the cognitive infrastructure of tomorrow.

---

## Appendix A: Market Data and Performance Analysis

### Pricing Comparison

| Feature | Parallel AI | Exa AI |
|---------|-------------|---------|
| **Free Tier** | 20,000 requests | $10 credits |
| **Search API** | $0.004 - $0.009 per request | $5 per 1K requests (1-25 results) |
| **Premium Search** | - | $25 per 1K requests (26-100 results) |
| **Task API (Deep Research)** | $0.005 - $2.40 per request | Not available |
| **Chat API** | $0.005 per request | Not available |
| **Monthly Plans** | Pay-per-use only | Core: $49/month (8K credits)<br>Pro: $449/month (100K credits) |
| **Enterprise** | Custom pricing + volume discounts | Custom pricing |
| **Rate Limits** | Search: 600 req/min<br>Task: 2,000 req/min | Not specified |
| **Startup Credits** | Up to $5K for qualified startups | Standard free credits only |

### Funding and Valuation

| Company | Total Funding | Latest Round | Valuation | Key Investors |
|---------|--------------|--------------|-----------|---------------|
| **Parallel AI** | $130M+ | Series A: $100M (Nov 2024) | $740M | Kleiner Perkins, Index Ventures, Khosla Ventures, First Round |
| **Exa AI** | $107M+ | Series B: $85M (Sep 2024) | $700M | Benchmark, Lightspeed, NVIDIA (NVentures), Y Combinator |

### Performance Benchmarks

| Benchmark | Parallel AI | Exa AI | Key Difference |
|-----------|-------------|---------|----------------|
| **BrowseComp (OpenAI)** | 58% accuracy | 14% accuracy | 4.1x better accuracy |
| **WISER Benchmark** | 81% accuracy @ $42 CPM | 48% accuracy @ $107 CPM | 1.7x accuracy, 2.5x cost efficiency |
| **BrowseComp Subset** | 58% accuracy @ $156 CPM | 29% accuracy @ $233 CPM | 2x accuracy, 1.5x cost efficiency |
| **Enterprise Deep Research** | 48% accuracy | 14% accuracy | 3.4x better performance |

*CPM = Cost Per Million requests  
*Source: Company benchmark reports and public performance data, November 2024

### Technology Positioning

| Aspect | Parallel AI | Exa AI |
|--------|-------------|---------|
| **Core Focus** | Programmatic web infrastructure for agents | Semantic search engine for AI |
| **Search Approach** | Multi-modal: search + deep research + reasoning | Neural link prediction and embeddings |
| **Target Market** | Enterprise AI agents and automation | Researchers and AI developers |
| **Differentiation** | End-to-end agent workflow platform | Purpose-built AI-native search |
| **Performance** | Superior on complex research tasks | Strong on semantic understanding |
| **Cost Model** | Predictable per-request pricing | Credit-based with monthly tiers |
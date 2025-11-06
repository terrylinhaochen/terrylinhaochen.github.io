# Enhanced Hugo Frontmatter Template

## Overview
This template provides comprehensive frontmatter structure for optimal SEO performance, schema markup, and content discoverability. Based on analysis of high-performing blog architectures and Lilian Weng's sophisticated meta implementation.

## Core Template Structure

```yaml
---
# Required Core Fields
title: "Your Post Title Here"
description: "Compelling 1-2 sentence description for meta tags and social sharing (140-160 characters optimal)"
date: YYYY-MM-DD
lastmod: YYYY-MM-DD
author: "Terry Chen"

# Content Classification
tags: ["tag1", "tag2", "tag3"]
categories: ["Primary Category"]

# Enhanced SEO Keywords (10-15 specific terms)
keywords: [
  "primary keyword",
  "secondary keyword", 
  "long-tail keyword phrase",
  "industry specific term",
  "related concept",
  "semantic variations",
  "brand names if relevant",
  "technical terms if applicable",
  "target audience descriptors",
  "content type descriptors"
]

# Cover Image Configuration
cover:
    image: "/images/posts/[post-slug]/[image-name].png"
    alt: "Descriptive alt text for accessibility and SEO"
    caption: "Optional caption explaining the image context"
    relative: false

# Enhanced Meta Properties
summary: "Detailed summary for social cards and RSS feeds (200-300 characters)"
canonicalURL: "https://chenterry.com/posts/[post-slug]/"
articleSection: "Investment Analysis" | "AI Business Strategy" | "Product Development" | "Technical Analysis"
articleType: "Case Study Analysis" | "Strategic Analysis" | "Company Analysis" | "Technical Guide" | "Opinion Piece"

# Content Metrics (optional but recommended)
readingTime: "X min read"
wordCount: XXXX

# Publication Control
draft: false  # Set to true for work-in-progress content
---
```

## Category Guidelines

### Primary Categories
- **Investment Analysis**: Company analysis, market research, financial insights
- **AI Business Strategy**: AI adoption, business transformation, strategic frameworks  
- **Product Development**: Product insights, development methodologies, user experience
- **Technical Analysis**: Technical deep-dives, implementation guides, architecture
- **Entrepreneurship**: Startup insights, founder stories, business building
- **Observations**: Industry trends, thought leadership, commentary

### Content Tags
- Keep to 3-5 relevant tags per post
- Use existing tags when possible for consistency
- Examples: `["Posts", "Investing", "AI-native", "Startup Strategy"]`

## Keyword Strategy

### Keyword Selection Rules
1. **Primary Keywords (3-5)**: Main topic focus, high search volume
2. **Secondary Keywords (5-7)**: Supporting concepts, medium search volume  
3. **Long-tail Keywords (3-5)**: Specific phrases, lower volume but higher intent
4. **Semantic Keywords (2-3)**: Related terms, entity associations

### Keyword Examples by Category

**Investment Analysis Posts:**
```yaml
keywords: [
  "company name", "stock analysis", "investment thesis", 
  "competitive moats", "market opportunity", "financial performance",
  "industry dynamics", "growth strategy", "risk factors",
  "valuation analysis", "management quality", "competitive landscape"
]
```

**AI Business Strategy Posts:**
```yaml
keywords: [
  "AI adoption", "business transformation", "AI strategy",
  "automation workflow", "AI productivity", "digital transformation", 
  "AI implementation", "business process optimization", "AI ROI",
  "change management", "AI governance", "strategic planning"
]
```

**Product Development Posts:**
```yaml
keywords: [
  "product strategy", "user experience", "product management",
  "design thinking", "user research", "product-market fit",
  "feature development", "product roadmap", "user feedback",
  "product analytics", "growth metrics", "product optimization"
]
```

## Cover Image Specifications

### Image Requirements
- **Header Display**: Fixed 200px height, full width, cropped to center for layout consistency
- **Post Content**: Full width with original proportions when included in markdown
- **Social Media**: 1200x630px (OpenGraph standard for social sharing)
- **Format**: PNG or JPG
- **File size**: <500KB for performance
- **Naming**: descriptive-filename.png
- **Dual Usage**: Same image can be both cover (cropped header) and content (full-width) image

### Alt Text Guidelines
- 50-125 characters
- Describe visual content objectively
- Include relevant keywords naturally
- Consider screen reader accessibility

### Caption Best Practices
- Optional but recommended for complex images
- Provide context or interpretation
- Can include attribution if needed

## Article Metadata

### Article Section Values
- `"Investment Analysis"`: Financial and market analysis content
- `"AI Business Strategy"`: Business AI implementation and strategy
- `"Product Development"`: Product and design insights
- `"Technical Analysis"`: Technical guides and deep-dives
- `"Industry Commentary"`: Observations and trend analysis
- `"Case Study Analysis"`: Detailed company or product studies

### Article Type Values
- `"Strategic Analysis"`: High-level strategic insights
- `"Company Analysis"`: Detailed company examination
- `"Case Study Analysis"`: Specific example analysis
- `"Technical Guide"`: Implementation and how-to content
- `"Opinion Piece"`: Commentary and perspective
- `"Industry Report"`: Market and trend analysis

## Schema.org Integration

This frontmatter structure automatically generates rich BlogPosting schema through the enhanced SEO template:

### Generated Schema Properties
- `headline`, `description`, `keywords`
- `articleBody`, `wordCount`, `datePublished`, `dateModified`
- `author` with detailed Person schema
- `publisher` information
- `mainEntityOfPage` and `url`
- `articleSection`, `inLanguage`, `copyrightYear`
- `image` with detailed ImageObject properties
- `about` array for topics and tags

## Content Organization Guidelines

### URL Structure
- Use descriptive slugs: `/posts/company-analysis-framework/`
- Avoid date prefixes: ❌ `/posts/2025-10-company-analysis/`
- Keep URLs concise but descriptive
- Use hyphens for word separation

### File Naming Convention
```
content/posts/[descriptive-slug].md
```

Examples:
- `openai-competitive-analysis.md`
- `figma-platform-strategy.md`
- `ai-native-startup-framework.md`

## Quality Checklist

### Before Publishing
- [ ] Title is compelling and SEO-optimized
- [ ] Description is 140-160 characters
- [ ] Keywords are researched and relevant
- [ ] Cover image meets specifications
- [ ] Alt text is descriptive and accessible
- [ ] Summary provides value preview
- [ ] Canonical URL is correct
- [ ] Article section/type are appropriate
- [ ] Reading time estimate is reasonable
- [ ] All required fields are populated

### SEO Optimization
- [ ] Primary keyword in title
- [ ] Keywords naturally integrated
- [ ] Meta description compelling
- [ ] Image alt text optimized
- [ ] Internal linking opportunities considered
- [ ] External links are authoritative

## Advanced Features

### Draft Management
```yaml
draft: true  # Excludes from public site
```

### Custom Fields (Optional)
```yaml
# For special content types
series: "Company Analysis Series"
seriesOrder: 1
lastReviewed: 2025-11-06
updateFrequency: "quarterly"
relatedPosts: ["post-slug-1", "post-slug-2"]
```

### Technical Posts
```yaml
# Additional fields for technical content
difficulty: "intermediate" | "beginner" | "advanced"
prerequisites: ["basic understanding of X", "familiarity with Y"]
techStack: ["Hugo", "JavaScript", "CSS"]
codeRepository: "https://github.com/user/repo"
```

## Implementation Examples

### High-Performing Post Example
```yaml
---
title: "OpenAI's Platform Strategy: Competitive Moats in the AI Era"
description: "How OpenAI's vertical integration creates defensible advantages and reshapes startup opportunities across the AI value chain."
date: 2025-11-06
lastmod: 2025-11-06
author: "Terry Chen"
tags: ["Investing", "AI Strategy"]
categories: ["Investment Analysis"]
keywords: [
  "OpenAI", "platform strategy", "competitive moats", "AI ecosystem",
  "ChatGPT", "vertical integration", "AI startups", "foundation models",
  "platform economics", "network effects", "AI value chain",
  "competitive analysis", "startup strategy", "AI market dynamics"
]
cover:
    image: "/images/posts/openai-platform-strategy/strategy-framework.png"
    alt: "OpenAI's platform strategy framework showing vertical integration across AI stack"
    caption: "How OpenAI builds platform moats through vertical integration"
    relative: false
summary: "Analysis of OpenAI's strategic positioning and competitive advantages, examining how platform effects create sustainable moats in the rapidly evolving AI landscape."
canonicalURL: "https://chenterry.com/posts/openai-platform-strategy/"
articleSection: "Investment Analysis"
articleType: "Strategic Analysis"
readingTime: "12 min read"
wordCount: 3420
---
```

## Maintenance Notes

### Regular Updates
- Review and update lastmod dates when editing
- Refresh keywords based on performance analytics
- Update reading time estimates if content changes significantly
- Monitor and update article sections as taxonomy evolves

### Performance Monitoring
- Track click-through rates from search results
- Monitor social sharing performance
- Analyze which keywords drive traffic
- Review and optimize meta descriptions based on performance

---

## Quick Reference

**Essential Fields**: title, description, date, author, keywords, summary
**SEO Critical**: keywords, meta description, alt text, canonical URL
**Schema Important**: articleSection, articleType, cover image
**Performance**: readingTime, wordCount for user experience

This template ensures maximum discoverability while maintaining professional content standards and technical SEO excellence.
---
title: "Building AI That Actually Understands How Students Learn"
date: 2024-08-15
categories: northwestern
tags: ["Product", "Research"]
description: "How we built an LLM system that identifies student learning gaps and connects them with peers who've solved similar problems—scaling personalized mentorship through AI that understands the nuances of how people actually learn."
keywords: ["LLM coaching", "AI education", "personalized learning", "self-regulation skills", "project-based learning", "AI mentorship", "semantic matching", "peer learning"]
---

*Terry Chen, Allyson Lee*

Your engineering team is stuck. Again. 

It's not that they lack the technical skills—they can write clean code and architect complex systems. But watch them tackle ambiguous problems and you'll see the real bottleneck: they overthink requirements, jump to solutions too quickly, or get paralyzed trying to make everything perfect before shipping.

These aren't skill gaps. They're self-regulation patterns that determine whether talented people build breakthrough products or get trapped in endless cycles of "almost ready to launch."

What if AI could understand not just *what* people are struggling with, but *how* they're struggling—and then connect them with others who've broken through the same patterns?

We built an AI coaching system that does exactly this. Instead of treating learning like a checklist, it recognizes the messy reality of how high-performers actually develop breakthrough capabilities.

![Coach Feedback Interface showing regulation gap analysis](/images/projects/llmcoaching/coach-feedback-interface.png)
*Our AI system analyzes coaching conversations to identify specific learning regulation gaps and suggests targeted interventions*

![Novice to Expert Learning System](/images/projects/llmcoaching/novice2expert.png)
*Novice to Expert Learning System*

## Try the Live Prototype

**[➤ Access the LLM Coaching System Prototype](/llm-coaching/)**

Experience our AI coaching system firsthand—upload a coaching conversation and see how it identifies learning patterns and suggests peer connections. The app is embedded directly in our site for seamless interaction.

---

## The Real Problem with Educational AI

Here's what most people miss about learning: it's not about information transfer. It's about developing self-regulation—the ability to plan, execute, overcome challenges, seek help, and reflect on your own learning process.

Think about the last time you got stuck on a complex problem. Maybe you procrastinated, or dove into details too early, or got paralyzed trying to make it perfect. These aren't character flaws—they're specific patterns of how you regulate your learning. And they're predictable.

Traditional coaching can identify these patterns, but it doesn't scale. A good coach might work with 20 students max. Meanwhile, thousands of students struggle with the same regulation gaps, often in isolation.

We realized something: what if we could capture the expertise of great coaches and make it accessible to everyone? Not through generic advice, but through intelligent peer connections based on actual learning patterns. 

## How We Built AI That Actually Gets Learning

Our solution, called "Peer Connections," has three core components:

1. **Record and analyze** coaching conversations to identify specific regulation gaps
2. **Match students** with peers who've successfully worked through similar challenges  
3. **Facilitate meaningful conversations** that help students develop concrete action plans

The magic happens in how we taught our AI to recognize learning patterns that humans care about. 

### The Challenge: Teaching AI to Recognize Learning Patterns

The first challenge was getting AI to understand the difference between "student struggles with visual representation" and "student fears imperfection." Both might result in poor deliverables, but they require completely different interventions.

We built a structured codebook that categorizes learning regulation into three core types:

![Regulation Gap Categories showing Cognitive, Metacognitive, and Emotional patterns](/images/projects/llmcoaching/regulation-gap-categories.png)
*Our AI categorizes learning challenges into specific, actionable patterns that enable precise peer matching*

**Cognitive gaps**: Problems with approaching unknown challenges (like creating clear visual representations)  
**Metacognitive gaps**: Issues with planning, help-seeking, and reflection (like not slicing work effectively)  
**Emotional gaps**: Dispositions toward learning that affect motivation (like fear of imperfection)

The breakthrough came when we realized that pure semantic matching wasn't enough. Two students could describe their struggles completely differently but face the same underlying regulation pattern. Through testing on 28 manually coded CAP notes, our hybrid approach combines LLM-based pattern recognition with semantic similarity, achieving 87.5% precision and 89.3% recall in identifying regulation gaps—performance that rivals human expert consistency in this domain.

## Making Peer Learning Actually Work

But identifying learning patterns was only half the challenge. The harder question was: how do you facilitate a conversation between two students that actually helps?

Most peer learning fails because experienced students struggle to articulate their process. They remember what worked but not why it worked, or how they figured it out. Meanwhile, novices often ask surface-level questions that don't get to the real learning.

We discovered that effective peer conversations need structure. Not scripts, but scaffolding that helps both students navigate the conversation productively.

### The Conversation Framework

We tested different approaches to peer conversation facilitation. What we found was transformative:

**Before structured conversation**: "I have no time to get things done, since my internship is starting tomorrow. There's a 6/10 chance that I actually take the steps I know I need to take, and actually I think it's even lower."

**After structured conversation**: "You know what, I'm gonna send this to my partner first, and then I'm gonna send this to Haoqi."

The shift was remarkable. The student went from resignation and self-doubt to concrete action planning. This wasn't just emotional support—it was a structured process that helped her move from paralysis to progress.
## System Description

Our system consists of three key components. First, users upload an audio recording of their conversation with the coach. Then, our system matches the user with a student who experienced and addressed that regulation gap in the past. Finally, we help them facilitate a conversation that guides how they will plan their next sprint.

### 1. Speech-to-text Transcription

The first component of our system utilizes speech-to-text transcription with NLP-based feedback, to intake a student's audio recording of their conversation with the coach, allowing the system to analyze the student's regulation gap, while reducing the time restraints required by CAP notes.

![Speech-to-text Transcription Interface](/images/projects/llmcoaching/figure1.png)
*Figure 1: Speech-to-text Transcription System Interface*

### 2. Student regulation gap analysis system

Thereafter, we employ a student regulation gap analysis system that leverages vector embeddings and large language models to identify patterns in student regulation behaviors across learning contexts. The system provides targeted coaching suggestions based on similar historical cases, addressing the challenge of effective coaching for developing regulation skills in design, research, and STEM innovation.

Our system combines semantic similarity search with LLM-based analysis in a retrieval-augmented generation approach. Initially, we pre-process student regulation notes to include metadata on tier 1 and tier 2 regulation gaps, then encode them into text embeddings. The vector database retrieves the most similar historical cases, and we send these along with the original query to an LLM (Deepseek). The LLM generates a structured response including a diagnosis of potential regulation gaps, practice suggestions targeted to these gaps, and references to similar historical cases. This approach grounds LLM suggestions in actual coaching experiences rather than generic advice, improving the relevance and actionability of recommendations.

![Student Regulation Gap Analysis](/images/projects/llmcoaching/figure2.png)
*Figure 2: Student Regulation Gap Analysis Page*
#### I. Data Preprocessing

We exported all existing notes from the CAP (Context-Assessment-Plan) note system and encountered several challenges during preprocessing. Many notes lacked clear assessment sections identifying regulation gaps, provided insufficient context about the student's situation, and used inconsistent terminology to describe similar regulation gaps. To address these issues, we removed duplicated notes and filtered out entries with incomplete fields. To better structure the data for our system, we standardized the information into several key fields.

These fields include a unique identifier for each case, the key learning gap identified in the assessment, additional information such as project details, title, context, and plan, the complete original coaching note, the project name, high-level regulation categories (e.g., "Cognitive," "Metacognitive"), and more specific skill categories (e.g., "Critical thinking," "Forming feasible plans"). We generated the last two fields—tier1_categories and tier2_categories—using the Deepseek reasoning model with a specialized regulation skills codebook that provides the conceptual backbone for our semantic matching approach.

![CAP Note Structure](/images/projects/llmcoaching/figure3.png)
*Figure 3: Organized CAP Note Structure*

#### II. The Regulation Skills Codebook: Structured Knowledge for Semantic Matching

Our key breakthrough was integrating a structured codebook that categorizes student regulation gaps according to a research-grounded framework—enabling our AI to match students based on learning patterns rather than just surface-level problem descriptions. For example, a student saying "I'm stuck on the prototype" and another saying "I can't visualize the system architecture" would both be matched under "Representing problem and solution spaces," even though their language is completely different. The codebook provides a hierarchical organization of regulation skills across three domains, as detailed in [Appendix E](#appendix-e). This framework serves as the foundation for our semantic matching system.

The codebook defines three main categories of regulation skills: *Cognitive Skills*, which encompass abilities for approaching problems with unknown answers; *Metacognitive Skills*, which include capacities for planning, help-seeking, collaboration, and reflection; and *Emotional Regulation*, which covers dispositions toward self and learning that affect motivation.

#### III. Bridging Language and Concepts: Semantic Enrichment

The codebook functions as a semantic bridge between varied descriptions of similar problems. Consider examples such as "Student struggles to create clear visual representations of system architecture" (categorized as Cognitive > Representing problem and solution spaces), "Prototype missing key feature" (also Cognitive > Representing problem and solution spaces), "Not slicing work to risk" (Metacognitive > Planning effective iterations), and "Student gets stuck and then stops thinking about strategy" (Emotional > Embracing challenges/learning/independence). Even without textual similarity, the codebook categorization reveals conceptual relationships. For instance, we categorize both "stopping too soon with examples" and "not thinking deeply about risks" under "Critical thinking and argumentation," enabling the system to recognize their conceptual similarity despite different phrasing.

This structured approach provides several advantages. It standardizes vocabulary across different coaching contexts, reveals underlying patterns in student regulation behavior, enables transfer of coaching knowledge across project domains, and prioritizes skill-based similarity over surface-level textual matching.

| Gap Description | Tier 1 | Tier 2 |
|---|---|---|
| "Student struggles to create clear visual representations of system architecture" | Cognitive | Representing problem and solution spaces |
| "Prototype missing key feature" | Cognitive | Representing problem and solution spaces |
| "Not slicing work to risk" | Metacognitive | Planning effective iterations |
| "Student gets stuck and then stops thinking about strategy" | Emotional | Embracing challenges/learning/independence |

#### IV. Similarity Methods for Regulation Gap Analysis

To find cases with the same regulation gaps, we started with the semantic-based approach and gradually enhanced our methods. Our initial baseline approach uses vector embeddings to find similar cases based on textual similarity. We encode the full text of student issues using OpenAI's ada-002 embedding model and compare them using cosine similarity. This pure semantic similarity approach treats all text equally and serves as a useful baseline. However, while straightforward, this approach often prioritizes surface-level similarities like project domain rather than underlying regulation patterns.

To improve matching relevance, we enhanced our approach by separating the regulation gap description from contextual information, applying higher weight to the gap text (default: 0.7 for regulation gap, 0.3 for other content). The gap text often contains the most critical information about the learning challenge, so it deserves higher weight. This weighted semantic similarity approach better identifies regulation similarities even when project contexts differ, as it emphasizes the specific regulation gap rather than surrounding information.

However, we also realized limitations with the semantic-based matching methods, namely that semantic similarity only worked when there were apparent keywords to match. To address this limitation, we created a comprehensive codebook containing regulation gap definitions and examples, using a reasoning model (Deepseek-reasoning) to generate metadata with tier 1 and tier 2 regulation gap tags for enhanced matching. This LLM reasoning with codebook approach assigns the highest weight (0.5) to tier 2 categories and a lower weight (0.1) to tier 1 categories, with gap text and other content each receiving 0.2 weight. This metadata represents specific regulation skills, allowing the system to match cases addressing similar skills regardless of how they're described or in what context they appear.

#### V. Applying the Codebook in Evaluation Scripts

The codebook plays a crucial role in the tiered similarity evaluation methods. The categorization process begins with the categorize_regulation_gaps_deepseek_v0.2.py script, which uses the codebook definitions to classify each gap text into tier 1 and tier 2 categories. Each gap is analyzed against the codebook's framework, identifying which cognitive, metacognitive, or emotional regulation skills are being addressed. We then store these categorizations in the tiered_weighted_cases.json file as structured metadata for later retrieval and analysis.

The codebook improves evaluation outcomes in several important ways. It provides a standardized vocabulary with a consistent framework of terms and concepts, helping to match cases that use different wording but address the same underlying skills. It enables contextual understanding by categorizing gaps according to the codebook, allowing the system to understand the deeper educational context beyond surface-level language similarities. The codebook's three-category structure (cognitive, metacognitive, emotional) aligns with research on key regulation skills central to the situated practice system, providing coaching concept integration. Even when projects differ completely, the codebook categories help identify transferable skills and learning patterns across domains, enabling cross-project relevance. The higher weight given to tier 2 categories (0.5) in the tiered similarity approach reflects their importance in precisely identifying the specific skill gaps being addressed.

For instance, when processing a gap like "stopping too soon with examples," without the codebook approach, the system might only match cases with similar phrasing about "stopping" or "examples." With the codebook integration, this gap is properly categorized as "Cognitive > Critical thinking and argumentation," allowing matches to conceptually similar gaps like "not thinking deeply enough about risks" even when the phrasing differs completely.

### 3. Facilitating Conversation and Formulating Tailored Plans

To generate helpful and contextualized conversation facilitation questions, we created a codebook based on Choi et al.'s question methodology, then prompted an LLM  to generate responses based on conversation context (streamed) and codebook [[20]](#ref20) (See [Appendix F](#appendix-f)). The codebook and question generation is still within its early stages, until we conduct more user testing to discover the most pertinent questions to ask. Additionally, while not implemented yet, formulating tailored plans would take place in the form of filling out their sprint log/plan for their week, which they would be either linked to or the system will parse it into the sheet for them. This will allow them to enact their plans to address their regulation gap while still incorporating the tasks they need to complete for the week.

![Discussion Questions Interface](/images/projects/llmcoaching/figure4.png)
*Figure 4: Suggested Discussion Questions*

## Study / Experiment / Deployment

We conducted manual qualitative coding on a set of 28 CAP notes utilizing our codebook definitions to use as ground truth to evaluate our model against. When comparing our tier 2 codes on these notes with the codes given by our system, we observed a precision of 0.875, and a recall of 0.893. Given the possible subjectivity and overlap of regulation gaps, these results suggest we can rely on our system to accurately categorize student cases’ regulation gaps.

Next, we investigated how to facilitate effective conversation between the peers once they are matched. Most notably, how do we define what an “effective” conversation looks like?  

To begin, we conducted some casual conversations with peers in the DTR program, asking them to explain about an issue they struggled with in the past, and how they were able to overcome it. Our conversations had no structure, as it was just to give us an idea of how students talked about regulation with a peer. From this preliminary research, we observed the main finding that experienced students struggle to articulate their experience in a way that is helpful to the peer. This is due to several factors:

A lack of project context/terminology
Not articulating their experience addressing the regulation gap in a step-by-step, clear way, making it hard for the peer to abstract their thinking process into a high-level framework they could use
Both peers have trouble remembering what they experienced and what actionable next steps to take

Based upon these findings, we defined an "effective" conversation to be one that helps them create a more concrete, actionable plan than they had before, and that they actually implement this and solve their regulation gap faster. We then identified this causal structure for which to guide our prototype and user testing:

![Causal Structure Diagram](/images/projects/llmcoaching/diagram.png)
*Figure: Causal structure diagram showing the relationship between peer conversations and regulation gap resolution*

Given this causal diagram, we set up a second, more formal user testing scenario. Given the work of Choi et al., which highlights how scaffolding peer-questioning strategies can help facilitate metacognition, we formulated a list of questions that fell under the clarification/elaboration and ⁠⁠context/perspective-oriented categories suggested in the paper [[20]](#ref20). We created two lists of questions, one for the novice and one for the experienced peer, to guide the conversation, in the goal of assisting the experienced peer in articulating their experience in a step-by-step manner, and helping the novice understand how they can apply this to their own situation (See [Appendix G](#appendix-g)).

We then conducted some preliminary user testing, by having one of us act as the experienced peer, and having another student in DTR be the novice. We simulated the conversation by having the novice ask us the questions provided in the scaffold, while we acted as the experienced peer answering the questions and providing advice. To qualitatively assess how the conversation influenced the peer, we asked them the same questions before and after (See [Appendix H](#appendix-h)). During one of our user tests, one of our users, who struggled with the fear of imperfection, demonstrated this transformation:

| Before peer conversation | After peer conversation |
|---|---|
| "I have no time to get things done, since my internship is starting tomorrow. There's a 6/10 chance that I actually take the steps I know I need to take, and actually I think it's even lower." | "You know what, I'm gonna send this to my partner first, and then I'm gonna send this to Haoqi." |


This illustrates multiple findings, first that the student shifted their mindset towards already deciding that she wasn't going to get what she wanted to do, despite not having started yet, to taking actionable steps towards working on her project and addressing her regulation gap. Furthermore, the student changed the steps they were going to dedicate time halfway between her tasks for the week to send deliverables over to the coach. The next step would be to follow up and see if this was accomplished, and how it affected her project outcome and regulation.

## Discussion

Our system effectively facilitates AI-enhanced coaching by leveraging Large Language Models (LLMs) and structured metadata to support project-based learning environments. By integrating semantic matching with structured codebook metadata, our approach identifies relevant coaching cases, reducing cognitive load on mentors while maintaining high-quality, context-aware feedback. We also began to explore how to facilitate effective and productive conversation amongst peers about regulation gaps. This discussion outlines the generalizable design elements and techniques that contributed to the prototype’s effectiveness, highlighting key takeaways for future socio-technical system development.
**Hybrid AI-Driven Case Retrieval:** Our system employs a hybrid approach that combines LLM-driven metadata tagging with traditional semantic matching. While pure semantic similarity methods struggled to capture nuanced regulation gaps due to limited repetitive terminology, and LLM-based approaches returned too many broadly relevant cases, integrating both techniques enabled *precision* in retrieving the most relevant coaching cases. This demonstrates the efficacy of hybrid AI-driven retrieval in domains where contextual similarity and structured knowledge are both crucial. Future systems designed for education or expert-driven fields can benefit from this combined methodology to ensure both relevance and specificity in recommendations.

**Structured Codebooks for Domain-Specific AI Applications:** A key enabler of our system's success was the development of a structured codebook that categorizes regulation gaps into tiered classifications, allowing advanced reasoning models to more accurately categorize regulation gaps. By leveraging *cognitive*, *metacognitive*, and *emotional* regulation categories, the system grounded LLM-based reasoning in expert-validated pedagogical frameworks and effectively addresses the issue of LLM hallucinations. The implication for broader AI applications is that structured codebooks can serve as a mechanism to guide AI reasoning, especially for test time scaled models, and in fields requiring human-like judgment and contextual understanding.

**Scaffolding productive conversations for addressing regulation gaps:** Providing enough context and terminology of the other's project and issue is crucial to set them up for success. Additionally, adopting peer-questioning scaffolds assists in driving a conversation where the more experienced peer can better articulate and reflect upon their step-by-step strategy to addressing their regulation gap, which can be adapted and applied by the novice. 
## Limitations and Future Work

There are inherent limitations in our current approach that necessitate attention. The CAP note system is succinctly written and does not always provide sufficient context for robust reasoning. Additionally, our codebook currently focuses primarily on high-level descriptions of regulation gaps along with their examples, which makes it difficult for the language model to develop domain-specific knowledge and reasoning for effective categorization.
To address these limitations and plan for iterative improvements, we will work with CAP note developers to identify ways toward either:

- Improving clarity of writing in notes
- Collecting more data through alternative data sources (SIG meeting transcripts, etc.)

For future work, we propose developing a sub-categorized codebook that further segments existing regulation gaps and contains specific examples along with reasoning chains for arriving at regulation gap categorizations. With such a codebook, we can first perform a tier 1 categorization of the gap to route to a corresponding model identifying each of the subcategories for further reasoning (using two sets of language models and corresponding reasoning prompts) for few-shot learning and prompt-based LLM-enabled categorization.

As LLMs continue to progress, we believe there is merit in more sophisticated reasoning methods such as the use of external knowledge bases or memory systems for persistent storage of student regulation gap progression. These approaches could enable more tailored and precise gap understanding, ultimately leading to more effective coaching support for developing regulation skills in design, research, and STEM innovation contexts.

In terms of facilitating effective conversation between peers, we plan to continually design testing strategies of feature slices, focusing on evaluating what intervention strategies are most effective in facilitating peers to more clearly articulate and discuss their task plans in context of their regulation gaps, thereby facilitating meaningful peer to peer interaction enabling effective regulation skill learning. This involves testing whether real time generation of follow up questions for explanation elaboration or regulation skill connection allows better articulation of questions during peer to peer conversations, as well as whether more context regarding the peer’s project and regulation skills should be provided in advance to foster more meaningful conversations grounded in discussion of actionable next steps for regulation skill learning.

Most notably, there is still more work to be done with testing these strategies, specifically figuring out how to ensure that it impacts students not just in the moment, but in the long-term. To do so, we plan to run formal user tests which both qualitatively and quantitatively examine how they will and if they are addressing their regulation gap, by surveying them before using the prototype and having the conversation, after, and the subsequent weeks.

## References in IEEE Format
**[1]** E. M. Gerber, J. M. Olson, and R. L. D. Komarek, "Extracurricular design-based learning: Preparing students for careers in innovation," International Journal of Engineering Education, vol. 28, no. 2, p. 317, 2012. {#ref1}

**[2]** J. C. Dunlap, "Problem-based learning and self-efficacy: How a capstone course prepares students for a profession," Educational Technology Research and Development, vol. 53, no. 1, pp. 65–83, Mar. 2005. {#ref2}

**[3]** B. J. Zimmerman, "Becoming a self-regulated learner: An overview," Theory Into Practice, vol. 41, no. 2, pp. 64–70, May 2002. {#ref3}

**[4]** D. R. Lewis, M. Easterday, and C. Riesbeck, "Research slices: Core processes for effective iteration in eder," EDeR. Educational Design Research, vol. 8, no. 1, 2024. {#ref4}

**[5]** D. G. R. Lewis, S. E. Carlson, C. K. Riesbeck, E. M. Gerber, and M. W. Easterday, "Encouraging engineering design teams to engage in expert iterative practices with tools to support coaching in problem-based learning," Journal of Engineering Education, vol. 112, no. 4, pp. 1012–1031, 2023. {#ref5}

**[6]** E. J. Huang, D. R. Lewis, S. Gaudani, M. Easterday, and E. Gerber, "Intelligent coaching systems: Understanding one-to-many coaching for ill-defined problem solving," Proceedings of the ACM on Human-Computer Interaction, vol. 7, no. CSCW1, pp. 138:1–138:24, Apr. 2023. {#ref6}

**[7]** H. Zhang, M. Easterday, and S. Shah, "Collaborative Research: Situated Practice Systems: Supporting Coaches and Students to Develop Regulation Skills for Design, Research, and STEM Innovation," National Science Foundation Grant Proposal, 2024. {#ref7}

**[8]** Asana. https://asana.com/product, 2025. {#ref8}

**[9]** Trello. https://trello.com/, 2025. {#ref9}

**[10]** Z. Xiao, X. Yuan, Q. V. Liao, R. Abdelghani, and P.-Y. Oudeyer, "Supporting qualitative analysis with large language models: Combining codebook with GPT-3 for deductive coding," in Companion Proceedings of the 28th International Conference on Intelligent User Interfaces, pp. 75–78, 2023. {#ref10}

**[11]** C. Ziems, W. Held, O. Shaikh, J. Chen, Z. Zhang, and D. Yang, "Can large language models transform computational social science?" Computational Linguistics, vol. 50, no. 1, pp. 237–291, 2024. {#ref11}

**[12]** K. F. Shaalan, "An Intelligent Computer Assisted Language Learning System for Arabic Learners," Computer Assisted Language Learning, vol. 18, no. 1-2, pp. 81-108, Feb. 2005. {#ref12}

**[13]** E. Mousavinasab, M. Zarifsanaiey, S. R. Niakan Kalhori, M. R. Rakhshan, M. Keikha, and A. Ghazi Saeedi, "Intelligent Tutoring Systems: A Systematic Review of Characteristics, Applications, and Evaluation Methods," Interactive Learning Environments, vol. 29, no. 1, pp. 142-163, Jan. 2021. {#ref13}

**[14]** M. Zawacki-Richter, V. Marín, M. Bond, and F. Gouverneur, "Systematic Review of Research on Artificial Intelligence Applications in Higher Education – Where Are the Educators?" International Journal of Educational Technology in Higher Education, vol. 16, no. 1, pp. 1-27, Dec. 2019. {#ref14}

**[15]** P. Arnau-González, M. Arevalillo-Herráez, R. Albornoz-De Luise, and D. Arnau, "A Methodological Approach to Enable Natural Language Interaction in an Intelligent Tutoring System," Computer Speech & Language, vol. 77, p. 101386, Jun. 2023. {#ref15}

**[16]** B. Woolf, "Building Intelligent Interactive Tutors: Student-Centered Strategies for Revolutionizing E-Learning," Morgan Kaufmann, 2009. {#ref16}

**[17]** K. R. Koedinger and A. Corbett, "Cognitive Tutors: Technology Bringing Learning Science to the Classroom," in The Cambridge Handbook of the Learning Sciences, R. K. Sawyer, Ed. Cambridge: Cambridge University Press, 2006, pp. 61-78. {#ref17}

**[18]** J. Evens and J. Michael, "One-on-One Tutoring by Humans and Computers," Routledge, 2006. {#ref18}

**[19]** E. Wenger, "Artificial Intelligence and Learning in Context: A Review," AI in Education Journal, vol. 21, no. 4, pp. 457-473, 2022. {#ref19}

**[20]** I. Choi, S. M. Land, and A. J. Turgeon, "Scaffolding peer-questioning strategies to facilitate metacognition during online small group discussion," Instructional Science, vol. 33, no. 5–6, pp. 483–511, 2005, doi: 10.1007/s11251-005-1277-4. {#ref20}
## Appendix B {#appendix-b}
Improving and Scaling Coaching is part three of *Situated Practice Systems* (SPS), which offers tools to help coaches and learners understand work practices and develop self-directed innovation skills [[7]](#ref7).

![Appendix B Diagram](/images/projects/llmcoaching/appendixb.png)
*Figure: Situated Practice Systems overview showing the three-part framework*

## Appendix C {#appendix-c}
CAP Notes helps coaches elicit information about a student's work issue and regulation gaps by tracking their activities, outputs, and reflections [[7]](#ref7).

![CAP Notes Structure](/images/projects/llmcoaching/appendixc.png)
*Figure: CAP Notes structure showing Context, Assessment, and Plan components*

## Appendix D {#appendix-d}
Practice Objects contain information about a student's work issues, current and tracked regulation gaps, suggested practices, and practice traces [[7]](#ref7).

![Practice Objects Framework](/images/projects/llmcoaching/appendixd.png)
*Figure: Practice Objects framework showing work issues, regulation gaps, and practice traces*

## Appendix E {#appendix-e}
Prompting of the LLM with the codebook incorporated.

“You are an expert in analyzing student regulation gaps. You need to categorize each CAP (Context, Assessment, Plan) note into these three tier 1 categories and their corresponding tier 2 categories. Each case may be categorized into multiple tier 1 and tier 2 categories:

1. Cognitive: The student lacks skills for approaching problems with an unknown answer, or even, knowing what the problem is exactly. This includes:
Representing problem and solution spaces: The way the student structures or presents the information is not effectively supporting reasoning, analysis, or communication.
Example: Student struggles to create a representation that would help them show a working example and an example where the system breaks.
Assessing risks: The student struggles with identifying the riskiest risks and/or prioritizing them. They may skip ahead, do unnecessary and unimportant tasks, or have impractical plans due to not properly addressing and prioritizing the risk.
Example: Student wasted time jumping ahead (they created multiple very detailed mockups) when they should've been focusing on addressing the riskiest risk at hand, which was identifying their target audience.
Critical thinking and argumentation: The student struggles to construct well-reasoned arguments supported by evidence or lacks a conceptual understanding of the task at hand. They might find it difficult to identify conceptual differences (they are treating concepts as too similar when they actually have meaningful differences).
Example: Student isn't fully understanding what a regulation gap is and how to distinguish between the different types, and keeps taking the wrong changes to their prototypes because of that.

2. Metacognitive: The student struggles in areas of planning, help-seeking and collaboration, and reflection. This includes:
Forming feasible plans: The student struggles to develop structured, realistic, and actionable plans. This could include what their outcome should be and how to measure their outcome.
Example: Student overloaded themselves with tasks this sprint and while they got a lot of it done, it wasn't good work.
Planning effective iterations: The student struggles to create a deliverable that addresses the sprint’s riskiest risk. The student may struggle due to problems with slicing (breaking larger problems down), prioritization, or understanding the problem.
Example: Student didn't incorporate the feedback the coach gave them last week, so their work this week was not effective.
Leveraging resources and seeking help: The skill of identifying and utilizing available materials, expertise from others, and information to enhance their learning and problem-solving.

3. Emotional: The student has regulation and dispositions toward self and learning that affects their motivation, cognition, and metacognition. This includes:
Fears and anxieties: The student may have a fear of imperfection which causes them to shy away from the work, and/or doesn’t want to try things themselves.
Example: Student had a well-planned sprint to carry out, but got too caught up trying to perfectly design the solution rather than creating a first prototype.
Embracing challenges and learning: The student tries to brute force their way through a solution or runs away from it, rather than thinking about the strategy and approach. 
Example: Student's system was not producing their optimal output, so they tried to overfit on one example rather than take a step back and observe what patterns are causing the system to fail.

Based on the regulation gap (assessment), issue title, and context provided, categorize this case any categories (can be multiple) it applies to (Cognitive, Metacognitive, or Emotional).

To help you understand the notes better, here are some definitions of key terms:
Slice: A well-defined, manageable portion of a larger task or goal that can be completed within a short timeframe (typically a week), contributing to incremental progress.
Sprint: A time-boxed, iterative work cycle in agile project management, typically lasting 2 weeks, during which a team completes a set amount of work toward a project goal. Sprints emphasize rapid progress, continuous feedback, and adaptability.
Mysore: A structured learning and practice time where students work on their projects while a mentor provides feedback.
SIG: Special Interest Group meetings (SIG meetings) bring together undergraduate students, graduate students, and faculty working on different projects in the same research area. Each SIG is its own mini-studio initially led by a faculty member whose leadership fades over time as a graduate student SIG lead gains competencies in mentoring and becomes the leader of their own SIG. At the start of a sprint, teams share the outcome of their last sprint and present their current sprint plans for review. Halfway through a sprint, teams present their progress and SIG members help devise strategies for overcoming blockers.

Categorization should be based 80% on the “Assessment” part of the note, as this is the coach’s perceived regulation gap. Be careful not to get confused-you should be categorizing their regulation gap, not the implications of the regulation gap. For instance, let’s take a look at this CAP note:

"Student: Improving and Scaling LLMs for Coaching
Improving and Scaling LLMs for Coaching | 2025-02-01
Items of Concern: Really hard to see how the conceptual examples would work / workout
Context: - Not sure why a lot of the categories are there.. not sure how they are actually relevant and what you learned from the analysis
Assessment: - Analysis not quite showing *why* the system suggested/showed what it showed?
Practice Suggestions: - [self-work] I couldn't tell from the output examples *why* the system was generating what it was generating. Can you think about a representation that would help you show, for an example category that you think are good and one that isn't, *why* the system got it right or wrong? Perhaps you can do this by showing component TF-IDF scores for each term, and also by showing some of the matching regulation gaps?"
Looking at the note as a whole, one might identify it under the tier 2 Representing problem and solution spaces, Critical thinking and argumentation, Forming feasible plans, and Planning effective iterations. However, forming feasible plans and planning effective iterations were identified from the “practice suggestions” section, meaning that this is an implication of the regulation gap rather than the regulation gap itself.

In this case, the correct tier 2 categorization of the regulation gap would be Representing problem and solution spaces and Critical thinking and argumentation based on the “assessment” section.

Provide your reasoning and then your final category choice in this format:
Reasoning: [your step-by-step reasoning]
Categories: [tier 1 category name] [tier 2 category name]”

## Appendix F {#appendix-f}
Codebook used to generate contextualized conversation facilitation questions [[20]](#ref20).
Generate conversation facilitation questions for the user. This scaffolding should include:
- Clarification/elaboration questions (seeking missing information)
- Counter-arguments (expressing disagreement to prompt cognitive conflict)
- Context/perspective-oriented questions (hypothetical scenarios, different viewpoints)


## Appendix G {#appendix-g}
Question scaffolds used for the second round of user testing.

**Questions novice might ask:**
- What was the issue you were encountering, was it recurring? How does it manifest in the tasks you did?
- What were the steps you took to address it?
- What made the process hard? Was there a moment where you did something that helped?
- Were you able to utilize this framework/way of thinking in other instances where you experienced this regulation gap?
- How were you able to break the cycle of constantly having this regulation gap?

**Questions experienced peer might ask:**
- What is your issue and how is it manifesting in your work?
- How can I use that framework to address my regulation gap (What analogies can you draw from my experience)?

## Appendix H {#appendix-h}
Question used in the before and after survey for the second round of user testing.

- What are the steps you will take to address your regulation gap this week?
- What is the high-level framework for addressing this regulation gap?
- What is your level of confidence in this plan/framework? (Scale of 1-10)
- How comfortable are you with taking these steps? (Scale of 1-10)
- What are your goals and project outcomes for this week?
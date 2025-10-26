---
title: "Improving and Scaling Coaching through LLMs"
date: 2024-08-15
categories: northwestern
tags: ["Product", "Research"]
company: "ouraca"
description: "LLM-enhanced coaching system for project-based learning that scales personalized mentorship through AI. Research on semantic matching, regulation gap identification, and automated coaching suggestions."
keywords: ["LLM coaching", "AI education", "personalized learning", "self-regulation skills", "project-based learning", "AI mentorship", "semantic matching"]
---
*Terry Chen, Allyson Lee*

## Abstract
Effective coaching in project-based learning environments is critical for developing students’ self-regulation skills, yet scaling high-quality coaching remains a challenge. Coaches struggle to track students' progress across multiple teams and projects, making it difficult to provide targeted feedback and adapt recommendations based on evolving student needs. Existing AI-based project management tools facilitate task tracking but fail to capture the nuanced ways students approach their work. Large Language Models (LLMs) have shown promise in analyzing text-based interactions and generating structured feedback, but their application to coaching remains underexplored.

This paper presents an LLM-enhanced coaching system designed to support project-based learning by helping connect peers struggling with a regulation gap to a peer who has addressed it in the past, and extracting personalized step-by-step frameworks for them to follow. Our system allows the user to record their conversation with a coach, then integrates our novel codebook, which includes regulation gap and key term definitions gathered across learning science literature, with the LLM to generate the user’s regulation gap. Utilizing the codebook and semantic matching, the system pairs one student who is currently facing that regulation gap and the other having addressed it in the past. This quarter, we explored how to facilitate conversations that will allow the novice to gain a new understanding of how to address their regulation gap, and created a tailored plan that keeps them accountable towards achieving it. 

By utilizing LLMs throughout this system, this work advances AI-driven coaching methodologies, providing a scalable, adaptable solution for improving self-regulated learning in project-based environments. Our findings contribute to the broader field of AI-enhanced education and human-AI collaboration, offering insights into how AI can augment expert-driven mentoring in complex, open-ended learning settings.

![Novice to Expert Learning System](/images/projects/llmcoaching/novice2expert.png)
*Novice to Expert Learning System*

---

## 🚀 Try the Live Prototype

**[➤ Access the LLM Coaching System Prototype](https://llmcoaching.streamlit.app/)**

Experience our LLM-enhanced coaching system firsthand through this interactive prototype.

---

## Introduction
Training college students to tackle complex, open-ended innovation work in a variety of fields such as design, entrepreneurship, and research is integral to preparing them for implementing innovative solutions upon graduation [[1]](#ref1). Project-based learning environments provide a stepping stone for preparing students to tackle complex, open-ended problems in design and research [[2]](#ref2), yet are insufficient in helping them develop the needed regulation skills to self-direct innovation work [[3]](#ref3). Previous research has found that college students who effectively regulate their learning have stronger problem solving skills, allowing them to succeed in innovation work [[4]](#ref4), [[5]](#ref5). Coaches help guide the development of these regulation skills, helping them develop cognitive, motivational, emotional, and strategic behaviors needed to problem solve and reach their desired outcomes [[3]](#ref3). This includes assessing risks, help-seeking, understanding one’s fears and anxieties, dealing with failure, and more. 

Effective coaching requires understanding students' work practices, identifying gaps in their problem-solving approaches, and suggesting targeted improvements. However, coaches face significant challenges in providing personalized guidance to multiple student teams. It is difficult for coaches to assess the effectiveness of their coaching, which can result in neglected alternative practice strategies or regulation gaps. Additionally, this process of recognizing and recording students’ regulation gaps and subsequent practice strategies is time consuming, resulting in coaches becoming increasingly overwhelmed as the number of student teams grows [[6]](#ref6). 

Existing AI-based project management tools like Asana and Trello help coaches track tasks and feedback through functions such as goal setting, scheduling, task monitoring, reflections, and visualizing workflows [[8]](#ref8), [[9]](#ref9). However, these tools do not capture the nuanced ways students approach their work or help coaches provide targeted, context-based guidance. Recent advances in Large Language Models (LLMs) have shown promise in analyzing text-based interactions and generating outputs based on multi-step reasoning, but their application to educational coaching through contextual suggestions remains unexplored. LLMs can assist in understanding unstructured input to provide feedback to coaches by analyzing student practices, identifying recurring issues, and formulating practice suggestions based on similar cases. They can automate the generation of tailored practice strategies, thus reducing the cognitive load on coaches while ensuring consistent quality of feedback [[7]](#ref7). Furthermore, LLMs can bridge the gap between coaching sessions by delivering scaffolds and feedback to students, fostering continuous improvement in regulation skills. 

To address these issues, we propose utilizing LLMs to develop and integrate the web application: Peer Connections, which pairs one student who is currently facing that regulation gap and the other having addressed it in the past, helps them to facilitate effective conversation which builds upon their understanding of the regulation gap and how to address it, then assist them creating a tailored plan that keeps them accountable towards achieving it. 

To achieve this, we used a knowledge base of historical coaching cases documented through the *Context Assessment Plan* (CAP) notes from Northwestern's *Design, Technology, and Research* (DTR) Program (See [Appendix C](#appendix-c)). The core idea behind these solutions is creating a system model that identifies similar notes by regulation gaps and also contextual similarity. By doing so, we can match people with similar problems for Peer Connections, as well as identify similar contextually similar cases to the one inputted and return commonly found regulation gaps and practice suggestions to achieve the Coaching Reflections and Practice Suggestions applications. We tested three different systems. First, we tested basic semantic matching using word embeddings, evaluating one version that took in the whole note, and another that weighted the semantic similarity of the regulation gap as 70%, and the rest of the note as the remaining 30%. Next, we tested the matching of notes using LLMs. We created a novel codebook consisting of tier 1 and tier 2 tags to categorize each note (See [Appendix E](#appendix-e)). The codebook was created using a taxonomy of regulation skills and corresponding practice suggestions gathered across learning science literature [[10]](#ref10), [[11]](#ref11). It also features definitions for key terms often used in the CAP notes, such as “canvas”, “slice”, “design argument”, “sprint”, and more. Utilizing prompting techniques such as few-shot learning, we utilized the LLM to identify the tier 1 and tier 2 categories of all the notes, and matched notes on the basis of having the most similar tags. Lastly, we tested a hybrid of these two systems, utilizing the LLM to incorporate the tier 1 and tier 2 tags of each as metadata to our notes, then using semantic matching to identify the most similar cases.

To evaluate the effectiveness of these systems, we ran each model with the same three notes, and evaluated the k=5 returned similar notes. We utilized our codebook as a rubric to manually identify the tier 1 and tier 2 regulation gaps of each returned note. If the returned note had the same regulation gap as the original note, then we marked it as correct. We found that the semantic matching had significant errors when addressing emotional regulation gaps, since the terms used are often less repetitive than that used when identifying cognitive and metacognitive gaps. While the codebook prompted the LLM model showed promise in accurately identifying the regulation gaps of models, it required that we input all the notes, causing longer processing times and at times exceeding model context window. Our last model, which is a hybrid of LLMs using the codebook and semantic matching, was able to consistently and efficiently identify notes that had the same regulation gap, as well as were contextually similar. This indicates that while some changes still need to be made, we have established a working baseline model to achieve our goal of matching similar notes.

This quarter, we explored how to facilitate conversations that will allow the novice to gain a new understanding of how to address their regulation gap, and how to create actionable plans to hold them accountable towards doing it.

This paper makes the following contributions:
1. We created a codebook consisting of regulation gap definitions and examples, drawing upon work gathered across learning science literature. Unlike existing educational taxonomies, this codebook provides structured categorization of regulation gaps through tiers 1 and 2. It synthesizes research self-regulation, scaffolding, and instructional coaching that can be utilized across a variety of use cases, such as AI-driven classification.

2. We utilized LLMs and semantic matching to create a metadata-based note-matching system to match students with similar regulation gaps, and provide coaches with regulation gaps and practice suggestions given the issue and context of their students.

3. We provided an empirical comparison of word embedding similarity, LLM-generated metadata, and a combined system for note retrieval, underscoring the need for a codebook.

4. We define what facilitating effective conversations between a novice peer and an experienced peer would look like, and begin to explore ways towards facilitating such conversations.

This paper proceeds as follows. First, we introduce related work about AI-based coaching, Intelligent Tutoring Systems, LLMs in education, and structured coaching documentation. Then, we describe and justify our system designs, followed by our evaluation and the results of each model we tested, our preliminary user testing and results, culminating in final words about our limitations and future directions for the project.

## Related Work

Effective coaching in project-based learning environments requires identifying students' self-regulation gaps, providing targeted feedback, and facilitating continuous improvement. Research has explored AI-driven coaching, self-regulated learning, and human-AI collaboration in education. However, existing approaches struggle to provide scalable, context-specific coaching support. Our work builds upon these research areas by integrating Large Language Model (LLM)-based analysis with structured cognitive models to enhance coaching efficacy.

Intelligent Tutoring Systems (ITS) have been extensively studied for delivering automated feedback in structured learning domains such as mathematics and programming. These systems employ artificial intelligence techniques to provide personalized and adaptive instruction, modeling students' psychological states, prior knowledge, skills, and preferences [[12]](#ref12). ITS have been widely applied in computer science education, medical training, and mathematics learning, demonstrating their ability to provide structured, task-level feedback [[13]](#ref13). However, while ITS excel in well-defined domains with clear problem-solving steps, they often struggle in contexts where strategies are not easily codified, such as research coaching and innovation work. AI-driven coaching systems that extend beyond traditional ITS have been developed to support open-ended learning tasks, such as entrepreneurship coaching, where metacognitive processes like problem articulation, risk assessment, and strategic planning are essential [[14]](#ref14). Our approach builds on these advancements by integrating LLM-driven semantic matching with structured coaching documentation, ensuring that feedback is personalized and context-aware.

Large language models have shown promise in augmenting human expertise across various domains, including education and coaching. LLMs can generate reflective prompts, assist with problem diagnosis, and provide personalized guidance based on historical data [[15]](#ref15). However, a major challenge in applying LLMs to coaching is ensuring reliability, as these models are prone to hallucinations, lack domain specificity, and struggle with contextual reasoning [[16]](#ref16). Recent research has sought to mitigate these challenges by grounding LLM outputs in structured cognitive models that encode domain knowledge, allowing AI-generated feedback to align more closely with expert coaching strategies [[17]](#ref17). Our system builds on this approach by combining LLM-driven semantic matching with structured metadata for coaching notes, ensuring that generated suggestions are not only relevant but also informed by prior cases.

Structured reflection tools, such as Context Assessment Plan (CAP) notes, have been widely used to document coaching insights and track student progress over time [[18]](#ref18). Prior research has shown that these tools enhance coaching effectiveness by making students' learning processes more visible to mentors, facilitating more targeted and data-driven feedback. However, manually analyzing CAP notes is time-intensive and cognitively demanding, limiting the extent to which insights can be effectively leveraged across multiple coaching sessions. Existing efforts to automate aspects of coaching documentation have primarily focused on extracting key themes or summarizing student progress but have not fully addressed the challenge of identifying recurring regulation gaps and providing tailored recommendations at scale [[19]](#ref19). Our work builds upon CAP notes by automating similarity analysis using LLMs to identify common regulation challenges and retrieve relevant past cases that align with a student's current needs. This approach reduces the cognitive burden on coaches while ensuring that recommendations are grounded in expert-validated coaching strategies, making feedback more actionable and contextually relevant.

When having a conversation with a peer, there has also been some discourse about how to scaffold peer-questioning strategies to facilitate metacognition. The research suggests scaffolding questions that include: clarification/elaboration questions, counter-arguments, and context/perspective-oriented questions [[20]](#ref20). However, the most significant gap in this research was that there was no statistically significant improvement in quality of the peer-generated questions, which they attribute to two possible reasons "(a) the scaffolds themselves may have been ineffective in supporting students to have better questioning skills; and (b) students may have needed additional training or modeling on how to use the provided scaffolds" [[20]](#ref20). Thus, leaving space to explore different methods towards facilitating effective questioning, prompting, and conversation.

By synthesizing research on AI-based coaching, ITS, LLMs in education, and structured coaching documentation, our work introduces a hybrid LLM-coaching system that enhances scalability, adaptability, and feedback quality in project-based learning environments. Unlike prior work that focuses on either structured tutoring or broad AI-driven feedback generation, our system integrates LLM-driven semantic matching with structured cognitive models to provide adaptive, context-aware coaching support. In doing so, we extend the capabilities of AI-driven coaching by dynamically retrieving and adapting practice suggestions from historical coaching cases. We also aim to facilitate better conversations between peers, in order to allow them to address their regulation gap faster. By addressing these limitations in existing research, our work contributes to the broader field of AI-enhanced education and human-AI collaboration, demonstrating a scalable approach to improving coaching efficacy in complex, project-based learning environments.
## System Description

Our system consists of three key components. First, users will be able to upload an audio recording of their conversation with the coach. Then, the user will be matched with a student who had experienced and addressed that regulation gap in the past through our student regulation gap analysis system. Lastly, our system will assist them in facilitating a conversation that guides how they will plan their next sprint.

### 1. Speech-to-text Transcription

The first component of our system utilizes speech-to-text transcription with NLP-based feedback, to intake a student's audio recording of their conversation with the coach, allowing the system to analyze the student's regulation gap, while reducing the time restraints required by CAP notes.

![Speech-to-text Transcription Interface](/images/projects/llmcoaching/figure1.png)
*Figure 1: Speech-to-text Transcription System Interface*

### 2. Student regulation gap analysis system

Thereafter, we employ a student regulation gap analysis system that leverages vector embeddings and large language models to identify patterns in student regulation behaviors across learning contexts. The system provides targeted coaching suggestions based on similar historical cases, addressing the challenge of effective coaching for developing regulation skills in design, research, and STEM innovation.

Our system combines semantic similarity search with LLM-based analysis in a retrieval-augmented generation approach. Initially, student regulation notes are pre-processed without a reasoning model to include metadata on tier 1 and tier 2 regulation gaps, then encoded into text embeddings. The vector database retrieves the most similar historical cases, which are then sent along with the original query to an LLM (Deepseek). The LLM generates a structured response including a diagnosis of potential regulation gaps, practice suggestions targeted to these gaps, and references to similar historical cases. This approach grounds LLM suggestions in actual coaching experiences rather than generic advice, improving the relevance and actionability of recommendations.

![Student Regulation Gap Analysis](/images/projects/llmcoaching/figure2.png)
*Figure 2: Student Regulation Gap Analysis Page*
#### I. Data Preprocessing

We exported all existing notes from the CAP (Context-Assessment-Plan) note system and encountered several challenges during preprocessing. Many notes lacked clear assessment sections identifying regulation gaps, provided insufficient context about the student's situation, and used inconsistent terminology to describe similar regulation gaps. To address these issues, we removed duplicated notes and filtered out entries with incomplete fields. To better structure the data for our system, we standardized the information into several key fields.

These fields include a unique identifier for each case, the key learning gap identified in the assessment, additional information such as project details, title, context, and plan, the complete original coaching note, the project name, high-level regulation categories (e.g., "Cognitive," "Metacognitive"), and more specific skill categories (e.g., "Critical thinking," "Forming feasible plans"). The last two fields—tier1_categories and tier2_categories—were generated using the Deepseek reasoning model with a specialized regulation skills codebook that provides the conceptual backbone for our semantic matching approach.

![CAP Note Structure](/images/projects/llmcoaching/figure3.png)
*Figure 3: Organized CAP Note Structure*


#### II. The Regulation Skills Codebook: Structured Knowledge for Semantic Matching

The core innovation of our system is the integration of a structured codebook that categorizes student regulation gaps according to a research-grounded framework. The codebook provides a hierarchical organization of regulation skills across three domains, as detailed in [Appendix E](#appendix-e). This framework serves as the foundation for our semantic matching system.

The codebook defines three main categories of regulation skills: *Cognitive Skills*, which encompass abilities for approaching problems with unknown answers; *Metacognitive Skills*, which include capacities for planning, help-seeking, collaboration, and reflection; and *Emotional Regulation*, which covers dispositions toward self and learning that affect motivation.

#### III. Bridging Language and Concepts: Semantic Enrichment

The codebook functions as a semantic bridge between varied descriptions of similar problems. Consider examples such as "Student struggles to create clear visual representations of system architecture" (categorized as Cognitive > Representing problem and solution spaces), "Prototype missing key feature" (also Cognitive > Representing problem and solution spaces), "Not slicing work to risk" (Metacognitive > Planning effective iterations), and "Student gets stuck and then stops thinking about strategy" (Emotional > Embracing challenges/learning/independence). Even without textual similarity, the codebook categorization reveals conceptual relationships. For instance, "stopping too soon with examples" and "not thinking deeply about risks" would both be categorized under "Critical thinking and argumentation," enabling the system to recognize their conceptual similarity despite different phrasing.

This structured approach provides several advantages. It standardizes vocabulary across different coaching contexts, reveals underlying patterns in student regulation behavior, enables transfer of coaching knowledge across project domains, and prioritizes skill-based similarity over surface-level textual matching.

| Gap Description | Tier 1 | Tier 2 |
|---|---|---|
| "Student struggles to create clear visual representations of system architecture" | Cognitive | Representing problem and solution spaces |
| "Prototype missing key feature" | Cognitive | Representing problem and solution spaces |
| "Not slicing work to risk" | Metacognitive | Planning effective iterations |
| "Jiayi gets stuck and then stops thinking about strategy" | Emotional | Embracing challenges/learning/independence |

#### IV. Similarity Methods for Regulation Gap Analysis

To find cases with the same regulation gaps, we started with the semantic-based approach and gradually enhanced our methods. Our initial baseline approach uses vector embeddings to find similar cases based on textual similarity. We encode the full text of student issues using OpenAI's ada-002 embedding model and compare them using cosine similarity. This pure semantic similarity approach treats all text equally and serves as a useful baseline. However, while straightforward, this approach often prioritizes surface-level similarities like project domain rather than underlying regulation patterns.

To improve matching relevance, we enhanced our approach by separating the regulation gap description from contextual information, applying higher weight to the gap text (default: 0.7 for regulation gap, 0.3 for other content). The gap text often contains the most critical information about the learning challenge, so it deserves higher weight. This weighted semantic similarity approach better identifies regulation similarities even when project contexts differ, as it emphasizes the specific regulation gap rather than surrounding information.

However, we also realized limitations with the semantic-based matching methods, namely that semantic similarity only worked when there were apparent keywords to match. To address this limitation, we created a comprehensive codebook containing regulation gap definitions and examples, using a reasoning model (Deepseek-reasoning) to generate metadata with tier 1 and tier 2 regulation gap tags for enhanced matching. This LLM reasoning with codebook approach assigns the highest weight (0.5) to tier 2 categories and a lower weight (0.1) to tier 1 categories, with gap text and other content each receiving 0.2 weight. This metadata represents specific regulation skills, allowing the system to match cases addressing similar skills regardless of how they're described or in what context they appear.

#### V. Applying the Codebook in Evaluation Scripts

The codebook plays a crucial role in the tiered similarity evaluation methods. The categorization process begins with the categorize_regulation_gaps_deepseek_v0.2.py script, which uses the codebook definitions to classify each gap text into tier 1 and tier 2 categories. Each gap is analyzed against the codebook's framework, identifying which cognitive, metacognitive, or emotional regulation skills are being addressed. These categorizations are then stored in the tiered_weighted_cases.json file as structured metadata for later retrieval and analysis.

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
Example: Jacob struggles to create a representation that would help him show a working example and an example where the system breaks.
Assessing risks: The student struggles with identifying the riskiest risks and/or prioritizing them. They may skip ahead, do unnecessary and unimportant tasks, or have impractical plans due to not properly addressing and prioritizing the risk.
Example: John wasted time jumping ahead (he created multiple very detailed mockups) when he should’ve been focusing on addressing the riskiest risk at hand, which was identifying his target audience.
Critical thinking and argumentation: The student struggles to construct well-reasoned arguments supported by evidence or lacks a conceptual understanding of the task at hand. They might find it difficult to identify conceptual differences (they are treating concepts as too similar when they actually have meaningful differences).
Example: Eloise isn’t fully understanding what a regulation gap is and how to distinguish between the different types, and keeps taking the wrong changes to her prototypes because of that.

2. Metacognitive: The student struggles in areas of planning, help-seeking and collaboration, and reflection. This includes:
Forming feasible plans: The student struggles to develop structured, realistic, and actionable plans. This could include what their outcome should be and how to measure their outcome.
Example: Penelope overloaded herself with tasks this sprint and while she got a lot of it done, it wasn’t good work.
Planning effective iterations: The student struggles to create a deliverable that addresses the sprint’s riskiest risk. The student may struggle due to problems with slicing (breaking larger problems down), prioritization, or understanding the problem.
Example: David didn’t incorporate the feedback the coach gave him last week, so his work this week was not effective.
Leveraging resources and seeking help: The skill of identifying and utilizing available materials, expertise from others, and information to enhance their learning and problem-solving.

3. Emotional: The student has regulation and dispositions toward self and learning that affects their motivation, cognition, and metacognition. This includes:
Fears and anxieties: The student may have a fear of imperfection which causes them to shy away from the work, and/or doesn’t want to try things themselves.
Example: Jennifer had a well-planned sprint to carry out, but got too caught up trying to perfectly design the solution rather than creating a first prototype.
Embracing challenges and learning: The student tries to brute force their way through a solution or runs away from it, rather than thinking about the strategy and approach. 
Example: Riley's system was not producing her optimal output, so she tried to overfit on one example rather than take a step back and observe what patterns are causing the system to fail.

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
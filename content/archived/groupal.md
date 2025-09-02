---
title: "Realtime Conversational Learning Aid"
description: "AI-powered study group assistant that analyzes real-time conversations, detects misconceptions, and facilitates deeper learning through Socratic questioning and contextual knowledge retrieval."
date: 2024-11-10
categories: research
tags: ["Research"]
---
Advised by Prof. Kristian Hammond. Developed LLM product that analyzes real-time audio conversations, detects relevancy and misconceptions, and provides targeted Socratic questions and material suggestions through RAG.

Groupal aims to help students work together more effectively and build a deeper understanding in study sessions. The project’s goal is to create a virtual learning assistant that listens to real-time student discussions, detects misconceptions, and facilitates discussions through Socratic questioning techniques and relevant background knowledge retrieval. 

Our approach is centered around understanding effective study group learning for educational purposes.
Understanding Learning Barriers: Traditional Q&A systems often provide direct answers, which may limit deeper understanding. Groupal emphasizes learning through inquiry, leveraging Socratic questioning techniques proven to improve knowledge retention and critical thinking.

Decomposing the Problem: Groupal integrates real-time speech processing, intent routing, and contextual retrieval of relevant background information to support learning. The frontend-backend pipeline connects key components such as document parsing, relevance checks, and question generation that adapts according to the flow of group discussions.
Real-Time Interaction: Groupal listens to student discussions in real time, converts speech to text, identifies misconceptions, and generates insightful socratic questions. The system retrieves relevant content through a RAG process to supplement the discussion effectively.

Groupal provides a comprehensive set of features to enhance the effectiveness of collaborative study sessions. Through real-time speech analysis, Groupal transcribes live group discussions into text, identifies misconceptions, and stores them for further review. It detects potential misconceptions in the discussion and generates Socratic-style questions when relevant to encourage further discussions among students. With its background knowledge retrieval capability, Groupal accesses relevant materials through a RAG process, retrieving the top 3 documents from a vector database, and using a Socratic Questioning Model to generate and output the socratic question, giving students immediate access to supporting information and guidance during their sessions. The platform allows users to upload documents, form or join study groups, and explore relevant content in real time, creating a well-organized and interactive learning experience. Groupal ensures discussions remain focused and productive by providing adaptive and context-aware guidance.

Credits: Tina Liu, Yihang Du, Doohwan Kim.

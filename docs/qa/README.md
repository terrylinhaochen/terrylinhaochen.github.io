# Agent FAQ Corpus (QA Scaffolding)

This directory contains retrieval-oriented FAQ data for agent workflows.

Files
- agent-faq.jsonl: JSONL records for RAG retrieval.

Schema per line
- id: string stable ID
- topic: string category
- question_variants: array of alternate phrasings
- answer: canonical answer text
- canonical_url: grounding URL
- updated_at: YYYY-MM-DD refresh date

Topic coverage
- content_understanding
- social_listening
- pm_for_agents
- marketer_for_agents
- distribution_workflows
- crowdlisten_thesis_posts

Update workflow
1) Review source posts and canonical URLs.
2) Add or revise one intent per record with 2 to 4 question variants.
3) Keep IDs stable; update updated_at on changed records.
4) Validate JSONL and spot-check duplicates/conflicts.
5) Run a retrieval sanity check with representative queries.

Validation example
Run python JSON parse over each line and assert required keys exist.

Note
These files are under qa, not static, so no Hugo build is required for exposure.

# Khan Academy Khanmigo

**Captured:** 2026-05-03
**Vendor:** Khan Academy (with Microsoft / OpenAI)
**Sources:**
- https://www.khanmigo.ai/pricing
- https://www.khanmigo.ai/
- https://www.kidsaitools.com/en/articles/khanmigo-review-parents-complete-2026
- https://www.aimodelsrank.com/reviews/khan-academy-khanmigo
- https://aiflowreview.com/khanmigo-ai-review-2025/
- https://www.myengineeringbuddy.com/blog/khanmigo-reviews-alternatives-pricing-offerings/

## What it is

GPT-4-class Socratic tutor wrapped around the existing Khan Academy curriculum. Distinctive: it refuses to give answers directly. Instead it asks guiding questions, restates the student's reasoning back, and gives small hints. Same-tab integration with the K-12 lesson player so the AI knows what problem the student is on.

Two products:
- Khanmigo for Learners ($4/mo individual, $9/mo family).
- Khanmigo for Teachers (free since 2024 thanks to Microsoft funding; $25/mo if not eligible). Lesson planning, rubric drafting, differentiated worksheet generation, parent-update drafting.

## Maturity

Production. Public since 2023; multilingual rollout through 2024-2025 (Spanish in Latin America early 2025, Hindi in India late 2024, multiple European languages). Microsoft Azure provides compute; an Azure-hosted small math model ("Phi-3" derivative) was trained jointly to handle arithmetic where GPT-4 was historically unreliable.

## Capability story

Pre-AI: a kid stuck on a Khan Academy problem had a hint button and a video. No conversation. A 1:1 human tutor cost $40-100/hr in the US.

With Khanmigo: the same kid gets infinite-patience back-and-forth at $4/mo. The Socratic constraint is the unhobbling: Khan Academy's pedagogy team built guardrails so the AI does not just solve the problem and rob the student of the productive struggle.

## Limits

- Reviewers note Khanmigo will sometimes accept incorrect reasoning if the student is confident, or hallucinate intermediate steps in algebra.
- Depth ceiling: works well for K-12, less so for AP/college calculus where errors compound.
- Requires internet and an account; not available in some countries due to OpenAI access restrictions.
- Parent reviewers note kids will try to jailbreak it for direct answers; sometimes succeed.

## Individual-empowerment angle

A motivated student in a rural area or low-income household gets a passable 1:1 tutor for the price of one Starbucks drink per month. Teachers in under-resourced schools get a lesson-planning assistant that previously required a curriculum coach. Quantitatively: Khan Academy estimates 1M+ students using Khanmigo by mid-2025.

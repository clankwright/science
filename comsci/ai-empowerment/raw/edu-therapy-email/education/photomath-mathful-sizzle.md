# Photomath, Mathful, Sizzle and the photo-math-solver category

**Captured:** 2026-05-03
**Sources:**
- https://mathful.com/
- https://notegpt.io/photo-math
- https://apps.apple.com/us/app/photo-math-ai-homework-helper/id6473621954
- https://heyorai.com/tool/mathful-ai-photo-math-solver/
- https://bornbyai.com/ai-apps-for-learning-mathematics/
- https://ai-tutor.ai/blog/best-math-ai-apps/
- https://www.androidcentral.com/apps-software/google-unveils-photomath-app

## What they are

Phone-camera apps where you point at a math problem (printed or handwritten) and get step-by-step solution. The 2024-2025 wave layered LLM explanations on top of the older OCR + symbolic-solver pipeline.

- **Photomath**: oldest (2014), 100M+ downloads. Acquired by Google in 2022; rebuilt as a default Android math feature 2024. Algebraic, calculus, trig, statistics. Animated step explanations.
- **Mathful**: newer entrant (2023), positions as photo solver + chat tutor. Free tier with limits, premium ~$10-20/mo.
- **Sizzle**: founded by ex-Khan Academy lead Jerome Pesenti's group (2023), focuses on conversational follow-up after an initial photo solve. Rebranded multiple times.

## Capability story

Pre-AI (and pre-2024): Photomath would show steps but could not answer "why is this step legal?" or "explain it like I am dumber." The newer apps use GPT-class models to provide the natural-language coaching layer that older symbolic CAS systems lacked.

The unhobbling: combining mature CV/OCR (recognizing handwritten LaTeX is still hard but mostly solved) with LLM explanation. Either alone is less useful.

## Limits

- Routinely cited "homework cheating" risk; teachers complain that students photograph the problem, copy the answer, never engage with steps.
- Hallucination on harder problems: confident wrong steps in upper-level calculus and proofs.
- Handwriting recognition fails on messy notation, especially fractions and limits.
- Free tiers are heavily ad-laden.

## Individual-empowerment angle

For a student whose parents cannot help with algebra, photo math is the difference between "stuck for hours" and "5 minutes plus a guided explanation." Whether this is education or anti-education depends on whether the student engages with the steps. The honest tradeoff: same tool, different use cases by motivation.

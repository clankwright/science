# ChatGPT Study Mode and Claude Learning Mode

**Captured:** 2026-05-03
**Vendors:** OpenAI, Anthropic, Google
**Sources:**
- https://techcrunch.com/2025/07/29/openai-launches-study-mode-in-chatgpt/
- https://winbuzzer.com/2025/08/14/anthropic-launches-learning-modes-for-claude-catching-up-with-chatgpt-and-google-gemini-xcxwbn/
- https://www.tomsguide.com/ai/claudes-new-learning-modes-take-on-chatgpts-study-mode-heres-what-they-do
- https://www.tomsguide.com/ai/i-tested-chatgpt-5-study-mode-vs-claude-learning-mode-with-7-prompts-heres-the-winner
- https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2025/08/07/understanding-value-learning-fuels-chatgpts
- https://www.datastudios.org/post/anthropic-introduces-learning-modes-in-claude-to-rival-chatgpt-and-gemini

## Timeline

- April 2025: Anthropic launches Claude for Education with a Socratic Learning Mode.
- July 29 2025: OpenAI launches Study Mode in ChatGPT (Free, Plus, Pro, Edu).
- Early August 2025: Google launches Guided Learning in Gemini.
- August 14 2025: Anthropic ships Learning Mode to all consumer Claude.ai users.

## What changed

Each is a system-prompt-plus-style toggle that flips the chatbot from "answer the question" to "act like a tutor": ask probing questions first, surface what the user already knows, give hints rather than solutions, end with a self-test.

ChatGPT Study Mode also pulls from prior chat history (memory feature) to personalize follow-ups. Claude Learning Mode is a style selector applied per-conversation; less personalized, more consistent. Gemini Guided Learning emphasizes step-by-step scaffolding with quizzes.

## Capability story

Pre-AI: a college student stuck on a topic googled it, watched YouTube, posted to r/learnmath. None of those involve back-and-forth. Free 1:1 academic help was limited to the TA in office hours twice a week.

The ChatGPT base model has been a tutor since 2023 if you knew how to prompt it. The 2025 launches are the unhobbling for non-prompt-engineers: a single click puts the model in tutor mode. The "any topic, infinite Socratic patience" pattern is now default-on for hundreds of millions of users.

## Evidence

- Tom's Guide head-to-head (Sep 2025): ChatGPT-5 Study Mode rated more proactive at probing; Claude rated more accurate on technical material. No independent RCT.
- A 2025 *Journal of Computer Assisted Learning* meta-analysis found generative AI tutoring has medium positive effect (g~0.5) on learning outcomes in blended settings, but the effect drops to negligible (g=0.08) over semester-length interventions, plausibly due to novelty wearing off.

## Limits

- Models will still hallucinate citations, dates, algebraic steps.
- Long-horizon learning (semester course) shows weak effects vs. short interventions.
- No way for the AI to verify the student's claimed background; if the student says "I already know calc" when they don't, the tutoring breaks.
- Memory features create privacy and consistency concerns when ChatGPT remembers wrong things about you.

## Individual-empowerment angle

The threshold to get expert-level Socratic instruction on any topic at any hour is now a $20/mo subscription, or free at lower volume. This is the broadest education unhobbling of the wave: not a vertical product, just a default mode of every frontier chatbot. An adult re-skilling into ML, a high schooler self-studying number theory, a curious retiree learning Python all get the same access.

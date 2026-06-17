---
id: personalized-education
title: "Personalized education"
kind: capability
year_first_practical: 2024
last_verified: 2026-05-03
---

# Personalized education

> **Summary:** AI tutors, study modes, and language-learning roleplay that deliver Socratic-style 1:1 instruction at $0-20/mo, addressing Bloom's "2-sigma problem" (expert tutoring beats classroom by 2 SD; nobody could scale it). 2025 meta-analyses converge on g~0.5 medium positive effect for short interventions; long-term (semester+) effects collapse to g~0.08 plausibly from novelty decay. Production for short interventions and homework help; the long-horizon evidence is still pending.

**Sources:** [[raw/edu-therapy-email/education/khanmigo.md]], [[raw/edu-therapy-email/education/synthesis-tutor.md]], [[raw/edu-therapy-email/education/duolingo-max.md]], [[raw/edu-therapy-email/education/chatgpt-claude-study-modes.md]], [[raw/edu-therapy-email/education/photomath-mathful-sizzle.md]], [[raw/edu-therapy-email/education/ai-tutoring-evidence.md]]

---

## What changed

Pre-AI baseline: 1:1 tutoring at $40-100/hr, rationed by money and geography; classroom-only delivery for the vast majority. Khan Academy proved free video at scale was a partial substitute (one-to-many) but per-learner adaptivity was missing.

The unhobbling came from:

1. Frontier LLMs strong enough to hold a Socratic dialog over a topic without giving away answers.
2. Long-context conversation memory: a tutor that remembers what you struggled with last session.
3. Voice mode (Synthesis, Duolingo, ChatGPT Voice) closing literacy and pronunciation gaps that text-only could not.
4. Single-click "Study Mode" / "Learning Mode" / "Guided Learning" in ChatGPT, Claude, Gemini (all launched July-August 2025), shipping the unhobbling to existing 100M+ user bases overnight.
5. Curriculum-grounded tutors (Khanmigo) that constrain the tutor to a specific course and pedagogy.

## Notable tools

| Tool | Vendor | Distinctive trait | Cost |
|---|---|---|---|
| [Khanmigo](../tools/khanmigo.md) | Khan Academy | Socratic-constrained on Khan curriculum; ~1M students | $4/mo learner; free for teachers |
| [ChatGPT Study Mode / Claude Learning Mode / Gemini Guided Learning](../tools/study-modes-chatgpt-claude-gemini.md) | various | Single-click toggle on existing chat subscriptions | Bundled with Plus tiers |
| [Synthesis Tutor](../tools/synthesis-tutor.md) | Synthesis School | Voice-first K-5 math; manipulative-based pedagogy | $119/yr |
| [Duolingo Max](../tools/duolingo-max.md) | Duolingo | Roleplay (open-ended L2 conversation), Explain My Answer | $168/yr |
| Photomath / Mathful / Sizzle | various | Photo-OCR + LLM explanation | Free with subs |
| Coursera Coach | Coursera | Course-bundled tutor | Bundled with Coursera Plus |

## Maturity and limits

Production for homework help, language conversation practice, concept explanation, and short Socratic interventions. Production for K-12 math (Khanmigo, Synthesis) and language learning (Duolingo Max). Production for college-level study assistance in established subjects.

Evidence vs. hype:

- Ma et al. 2025 (npj Science of Learning) and adjacent meta-analyses converge on g~0.5 (medium positive effect) for generative-AI tutoring in short interventions.
- AI feedback matches human written feedback (41 studies, n=4,813, no significant difference).
- Critical caveat: long-term (semester+) effect collapses to g=0.08, plausibly novelty decay.
- No RCT yet of frontier-model tutoring at scale over a full school year as of May 2026.

Other limits:

- Depth ceiling without expert verification at advanced levels (graduate study, research math, professional licensure).
- Photomath-style "snap a picture, get the answer" tools are educationally counterproductive without a study-mode constraint; useful for verification, not learning.
- Tutoring does not replace the social/motivational side of school for younger learners.

## Individual empowerment

A kid in a remote area gets infinite 1:1 tutoring on the topic that confuses them. An adult learner picks up a new domain (statistics, a programming language, a foreign language) at the pace they can sustain. A working professional reskills (cloud certifications, SQL, ML basics) without paying for a bootcamp. A high-school student gets the equivalent of a private tutor for $0-4/mo, addressing the Bloom 2-sigma gap that has defined education research for 40 years.

Realistic expected value for an individual: 0.3-0.5 SD improvement on short-horizon learning outcomes. For long-horizon outcomes (semester GPA, certification pass rates), evidence is still pending; treat current marketing claims as undertested.

## See also

- [Personal knowledge management](personal-knowledge-management.md): adjacent category for adult research workflows.
- [AI therapy and companions](ai-therapy-and-companions.md): related but with the safety caveats education does not (yet) carry.
- [Shortlist](../analysis/shortlist.md)

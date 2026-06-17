---
id: what-an-individual-can-now-do
title: "What an individual can now do that they could not in 2022"
kind: analysis
date: 2026-05-03
---

# What an individual can now do that they could not in 2022

> **Summary:** Concrete side-by-side substitutions: what required money, time, or specialized skill in 2022, and what costs and skills it now takes in May 2026. Drawn from the capability pages; ordered from largest substitution to smallest. The aggregate: a single person without a team can now do work that previously required a small organization or a specialist hire, for an order of magnitude less money and at minutes-to-hours latency.

**Sources:** synthesis across all capability pages and `raw/`.

---

## Software

| Then (2022) | Now (May 2026) |
|---|---|
| Hire a developer for $5-50k over weeks to ship a custom internal tool | Prompt [Lovable](../tools/lovable.md) or [Bolt.new](../tools/bolt-new.md) for $20-25/mo, ship in an afternoon |
| 4-12 hours per multi-file refactor in a 100k LOC codebase | 30-90 minutes via [Cursor](../tools/cursor.md) or [Claude Code](../tools/claude-code.md), reviewing diffs |
| Selenium scripts that broke on every UI change, or RPA tools at $1,500-5,000/seat | $0.05-1 per task via [Playwright MCP](../tools/playwright-mcp.md) or [ChatGPT Agent](../tools/chatgpt-agent.md) |
| Triage GitHub issues by hand in a side project | Delegate to GitHub Copilot Coding Agent or [Devin](../tools/devin.md) |

## Knowledge work

| Then | Now |
|---|---|
| Hire a research analyst for $1-10k or spend a day researching a question yourself | $20/mo [Perplexity Pro](../tools/perplexity.md) Deep Research, 5-30 minutes per cited report |
| Maintain a personal wiki by hand, or live with note-dumps that nobody synthesizes | [Karpathy LLM-wiki pattern](../tools/karpathy-llm-wiki-pattern.md) on plain markdown via [Claude Code](../tools/claude-code.md), or upload sources to [NotebookLM](../tools/notebooklm.md) (free) |
| Read every meeting transcript to find the action item | [Granola](../tools/granola.md) ($14-18/mo) captures and structures meeting notes; downstream LLMs answer questions |
| Spend 1-3 hours/day on inbox triage; pay $50-80k/yr for an EA below executive scale | [Superhuman](../tools/superhuman.md) at $33-40/mo, or DIY Gmail MCP + Claude |

## Creative production

| Then | Now |
|---|---|
| Hire a designer at $50-500/asset for marketing visuals | [Midjourney](../tools/midjourney.md) at $10-120/mo for unlimited assets |
| Hire a videographer at thousands per minute, plus an editor | [Veo 3](../tools/veo.md) at $0.10-0.40/sec for short-form B-roll with synced audio |
| Hire a composer at $500-5,000/track | [Suno](../tools/suno.md) at $0.012-0.016/song |
| Hire a voice actor at hundreds per minute, or use stiff TTS like Polly | [ElevenLabs](../tools/elevenlabs.md) at $5-22/mo for cloning + multilingual + agents |
| Hire a dubbing studio at $100-500/finished-minute for one language | [HeyGen](../tools/heygen.md) at $29/mo for 175+ languages with lip-sync preserved |
| Pay an on-camera presenter or be on camera yourself for explainer videos | [HeyGen](../tools/heygen.md) or [Synthesia](../tools/synthesia.md) talking-head avatars from a typed script |

## Personal services previously gated by money

| Then | Now |
|---|---|
| Pay a lawyer $150-500/hr to read a contract or lease | Frontier LLM in 5 minutes for first-pass review (still call the lawyer for action). See [personal legal AI](../capabilities/personal-legal-ai.md) |
| Pay a doctor for a second opinion or accept the first one | Frontier LLM (or, via your doctor, [OpenEvidence](../tools/openevidence.md)) for synthesis of recent literature. See [personal medical AI](../capabilities/personal-medical-ai.md) |
| Pay a CPA $300-2,000 for personal tax prep | [TurboTax + Intuit Assist](../tools/turbotax-intuit-assist.md), or Claude/ChatGPT for concept explanation + DIY |
| 1% AUM ($1k+/yr per $100k) for a financial advisor | [Wealthfront](../tools/wealthfront.md) / [Betterment](../tools/betterment.md) at 0.25% AUM, or [Origin](../tools/origin-financial.md) at $99/yr flat |
| Pay $40-100/hr for a tutor, or do without | [Khanmigo](../tools/khanmigo.md) at $4/mo, or free [study modes](../tools/study-modes-chatgpt-claude-gemini.md) on existing chat subscriptions |
| Wait 6-18 months on NHS for CBT, or pay $150-250/session privately | [Wysa](../tools/wysa.md) at $75/yr (NHS-deployed; FDA Breakthrough Device) |

## Newly possible (no clean 2022 baseline)

| Capability | What it enables |
|---|---|
| Voice cloning from <30 seconds of audio | Personal-voice TTS for any text; preserving a loved one's voice; multilingual self-dubbing |
| 24/7 conversational AI on any topic | Pair-programming, study partner, journaling partner, brainstorming foil, language conversation practice |
| Source-grounded RAG over personal corpus | "Everything I have ever read about X" answered in 30 seconds with citations |
| Real-time low-latency voice agents | A solo founder's "AI receptionist" answering inbound calls; phone-call automations |
| Live talking-head avatars in real-time meetings | Camera-shy presenter mode; multilingual real-time dubbing of video calls (early) |

## What is still not on this list

The unhobbling does not extend uniformly. As of May 2026, an individual still cannot:

- Skip a licensed lawyer for litigation, immigration, criminal defense, or custody disputes.
- Skip a doctor for diagnosis, prescriptions, or any irreversible medical decision.
- Generate provably original IP-clean music for commercial release (Sony v. Udio pending).
- Run an autonomous trading system that beats indexing net of fees and taxes (Barber-Odean unchanged).
- Run a fully autonomous job application pipeline that maintains callback rates (recruiter-side filtering catches volume blasters).
- Trust an AI companion app for emotional support of a vulnerable user (documented harms).
- Ship a paid SaaS handling third-party data via vibe coding without security review.

The pattern: AI substitutes for paid professionals on tasks where the consequence of being wrong is recoverable. It does not yet substitute on tasks where the consequence is irreversible. See [unhobbling thesis](unhobbling-thesis.md) for the substitution-vs-reversibility framing.

## See also

- [Shortlist](shortlist.md): ranked recommendations.
- [Unhobbling thesis](unhobbling-thesis.md): the framing.

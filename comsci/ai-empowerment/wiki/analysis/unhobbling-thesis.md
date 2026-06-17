---
id: unhobbling-thesis
title: "The unhobbling thesis"
kind: analysis
date: 2026-05-03
---

# The unhobbling thesis

> **Summary:** "Unhobbling" follows Aschenbrenner's usage: removing constraints that hid an underlying capability, e.g., letting a model use tools, browse, run code, or plan multi-step. An unhobbling AI application is one where the technology shifts a task from "I cannot do this" or "I would have to hire someone" to "I can do this myself in an afternoon." This wiki rates capability categories on that single axis. The strongest 2024-2026 categories are not the ones with the flashiest demos but the ones that durably substitute for a paid professional an individual previously could not afford.

**Sources:** synthesis across all of `raw/`. The category-specific evidence lives in each `capabilities/` page.

## The substitution frame

Pre-frontier-LLM, an individual without a team or budget had a fixed menu:

- Hire the professional ($150-500/hr for lawyer, doctor, accountant, designer, voice actor, research analyst, executive assistant).
- Learn the craft (months to years of skill acquisition).
- Do without.

Each entry on the menu was rationed by money or time. The 2024-2026 wave moves a meaningful subset of professional-services tasks onto a fourth row:

- Run an AI tool ($0-50/mo subscription, results in minutes to hours).

The unhobbling thesis is that the most important AI applications for individuals are the ones that move tasks from rows 1-3 onto row 4. The unhobbling lens deflates the "ChatGPT can write a poem" demos and elevates the workflows that change the household budget for professional services.

## What did the unhobbling

Five technical moves underlie nearly every category in this wiki:

1. **Tool use and function calling** (general by mid-2024). Models stopped being chat boxes and started being agents that invoke `bash`, `edit_file`, `browse`, `query_db`. Without this, [agentic coding](../capabilities/agentic-coding.md), [browser-use agents](../capabilities/browser-use.md), and [autonomous research](../capabilities/autonomous-research.md) do not exist as categories.
2. **Long context** (1M tokens by Gemini 1.5 in early 2024, Claude 200k-1M through 2024-2026). A whole codebase, a personal corpus, or a long PDF fits in one prompt, sidestepping vector-RAG brittleness for personal-scale work. Load-bearing for [PKM](../capabilities/personal-knowledge-management.md) and [autonomous-research](../capabilities/autonomous-research.md).
3. **RL on long-horizon traces.** SWE-bench Verified went from single digits in 2023 to 85-94% in May 2026 because the post-training shifted from per-token correctness to whole-task reward. Same shift powered Cursor Composer 2 and Devin.
4. **Vision over screenshots.** UI-TARS, ShowUI, OS-Atlas, and the frontier multimodal models read rendered pages like a human reads them, ignoring underlying class names. This made [browser-use](../capabilities/browser-use.md) work where Selenium had been losing the anti-bot war since ~2020.
5. **Diffusion + flow-matching scaling laws.** Image, video, audio generation crossed perceptual thresholds (photoreal images by FLUX/Imagen 4 in 2024-2025; video with synced audio by Veo 3 in May 2025; song-quality music by Suno v3 in March 2024). See [generative image](../capabilities/generative-image.md), [generative video](../capabilities/generative-video.md), [generative music](../capabilities/generative-music.md), [voice cloning](../capabilities/voice-cloning-and-voice-agents.md).

## Where unhobbling actually lands

Sorted by the size of the gap closed for an individual:

| Pre-AI baseline | New floor (2026) | Capability |
|---|---|---|
| Hire dev: $5-50k, weeks | $20-200/mo, hours | [agentic coding](../capabilities/agentic-coding.md), [code-free apps](../capabilities/code-free-app-building.md) |
| Hire research analyst: $1-10k or several days | $20/mo, 5-30 min | [autonomous research](../capabilities/autonomous-research.md) |
| Hire designer/illustrator/composer/videographer/voice actor: $50-5,000/asset | $0.01-3/asset, $20-100/mo bundle | [generative image](../capabilities/generative-image.md), [video](../capabilities/generative-video.md), [music](../capabilities/generative-music.md), [voice](../capabilities/voice-cloning-and-voice-agents.md) |
| Hire EA: $50-80k/yr | $20-40/mo + DIY MCP | [email + inbox](../capabilities/email-and-inbox-management.md) |
| Hire tutor: $40-100/hr | $0-20/mo | [personalized education](../capabilities/personalized-education.md) |
| Pay paralegal/CPA for first-pass review | Frontier LLM subscription | [personal legal AI](../capabilities/personal-legal-ai.md), [tax/financial AI](../capabilities/personal-tax-and-financial-ai.md) |
| Hire RPA contractor or write Selenium | $0.05-1/task | [browser-use agents](../capabilities/browser-use.md) |
| Pay $200-500/wk for therapist (or wait 6-18 mo on NHS) | $0-15/mo | [AI therapy and companions](../capabilities/ai-therapy-and-companions.md) (with caveats) |
| Maintain personal wiki by hand or live with note-dumps | Long-context LLM + markdown | [personal knowledge management](../capabilities/personal-knowledge-management.md) |

## Where the unhobbling fails

The thesis is honest about its asymmetry. Capabilities marketed as unhobbling that actually are not, because the human is still load-bearing on the consequential decision:

- **Volume job-application bots.** Recruiter-side ATS filters increasingly catch them, callback rates have collapsed, and LinkedIn TOS bans are routine. The durable AI win in job search is [autofill + tailored cover letters](../capabilities/automated-job-application.md), not blast volume.
- **AI signal subscriptions and "AI-generated portfolios".** Barber-Odean's structural finding (most retail loses regardless of bot vs human) is unchanged because markets are zero-sum minus fees. The durable AI win in personal finance is robo-advisor tax-loss harvesting and direct indexing. See [autonomous trading](../capabilities/autonomous-trading.md).
- **Companion AIs marketed as therapy.** Wrongful-death lawsuits (Sewell Setzer III, Adam Raine), FTC complaints against Replika, Stanford 2025 study eliciting self-harm encouragement from Character.AI / Nomi / Replika. Clinical CBT chatbots ([Wysa](../tools/wysa.md), Woebot's pre-shutdown lineage) have real evidence; companions do not. See [AI therapy and companions](../capabilities/ai-therapy-and-companions.md).
- **"AI lawyer" / "AI doctor" branding for autonomous high-stakes action.** The DoNotPay FTC settlement (Feb 2025, $193k) is the marketing-claims floor. Mata v. Avianca and successor sanctions establish that hallucinated citations are not a solved problem. The durable individual win is informed first-pass review with a human professional retained for irreversible action. See [personal legal AI](../capabilities/personal-legal-ai.md), [personal medical AI](../capabilities/personal-medical-ai.md).
- **Vibe-coded production SaaS handling other people's data.** Lovable's own May 2025 PII leak (~10% of sampled apps), Veracode 2025 longitudinal study (capability up, security flat), CodeRabbit Dec 2025 (AI-coauthored PRs: 1.7x more major issues, 2.74x more security vulns). For internal tools, MVPs, and prototypes the new constraint is fine; for paid SaaS handling other people's data it is not. See [code-free app building](../capabilities/code-free-app-building.md).

## The two-axis test

Every entry in this wiki is rated on two axes the unhobbling thesis cares about:

1. **Substitution magnitude.** How much paid-professional-equivalent work does this capability now substitute for, per dollar of subscription?
2. **Reversibility of failure.** When the AI is wrong, how recoverable is the consequence? "Wrong cover letter" is recoverable; "wrong dosage" or "wrong tax filing" or "voice clone used in vishing scam" is not.

The shortlist at [analysis/shortlist.md](shortlist.md) is constructed by ranking on (1) and filtering out anything that requires the user to stake (2) on the AI's autonomous output without a human-in-loop checkpoint at the consequential step.

## See also

- [Shortlist](shortlist.md) — the ranked recommendations
- [What an individual can now do](what-an-individual-can-now-do.md) — concrete substitutions, side-by-side

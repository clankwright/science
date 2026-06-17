# Open-weight LLM state, May 2026

## What it is
The current landscape of open-weight LLMs you can download, run, fine-tune, and deploy under permissive or quasi-permissive licenses. Five frontier-class drops in the last 30 days alone: Meta Llama 4 (Scout + Maverick), Alibaba Qwen 3.5, DeepSeek V4 (Pro + Flash), Google Gemma 4, Mistral Medium 3.5.

## Specific unlocks
- Run a model on your hardware with benchmark scores within ~8 months of closed-frontier (NIST CAISI assessment of DeepSeek V4 Pro).
- Fine-tune Llama 4 / Qwen 3 on proprietary data without ever sending it to a vendor; weights and dataset never leave your network.
- Self-host a 128B model on 4 GPUs (Mistral Medium 3.5) at marginal cost-per-token an order of magnitude below frontier API prices.
- Use Apache 2.0 licensed Qwen 3-235B in a commercial product without a per-token fee or a vendor TOS that can be changed unilaterally.
- Run abliterated or "uncensored" community fine-tunes (Dolphin 3.0, Hermes, abliterated variants of Qwen / Gemma / Llama) for use cases that any cloud refuses.

## The headliners
| Model | Size / Activated | License | Headline benchmark |
|---|---|---|---|
| DeepSeek V4 Pro | MoE, ~600B / ~37B activated | DeepSeek Open | 87.5 MMLU-Pro, 90.1 GPQA Diamond, 80.6 SWE-bench Verified, 99.4 AIME 2026 |
| Qwen 3-235B-A22B | MoE 235B / 22B | Apache 2.0 | Top broad-benchmark coverage; multilingual leader |
| Qwen 3 Coder 480B-A35B | MoE 480B / 35B | Apache 2.0 | Frontier open-weight coding agent |
| Qwen 3 Coder-Next 80B-A3B | MoE 80B / 3B | Apache 2.0 | Released Feb 2026 specifically for local agentic coding |
| Llama 4 Scout / Maverick | MoE | Llama 4 license (custom) | Native multimodal, very long context |
| Mistral Medium 3.5 | 128B dense | MRL (research) + paid commercial | 77.6% SWE-bench Verified; 256K context; replaces Devstral 2 + Magistral |
| Mistral Small 4 | ~24B dense | Apache 2.0 | Single high-end GPU; coding parity with Claude Haiku 3.5 |
| Gemma 4 / Gemma 3 27B | Dense | Gemma terms | 128K context, 140+ languages, single-GPU, multimodal vision (4B+) |
| Phi-4 / Phi-4-mini | 14B / 3.8B | MIT | Strong reasoning at small size |

## Frontier-competitive vs gap (May 2026)
**Competitive or leading:**
- Math reasoning (DeepSeek V4: 99.4 AIME 2026, on par with Opus 4.7 / GPT-5.5 reasoning)
- Coding short-horizon (Qwen 3 Coder, DeepSeek V4 within a few percentage points of Claude Sonnet 4.6 on SWE-bench Verified)
- Multilingual (Qwen 3 dominates non-English; Gemma 3 covers 140+ languages)
- Long-context retrieval (Llama 4 + Mistral Medium 3.5 at 256K-1M)

**Still gappy:**
- Long-horizon agentic coding (multi-hour autonomous loops): Claude Opus 4.7 and GPT-5.5 still meaningfully ahead.
- Tool-use reliability under adversarial conditions.
- Genuinely novel scientific reasoning (the closed labs have a few months of private RL data advantage).
- Multimodal video understanding (Gemini 3 leads; open weights are catching up via Qwen-VL and Llama 4 vision).

## Pre-AI baseline
2023: Llama 1 leak, then Llama 2 release, set the template. Open weights were "GPT-3.5 class minus polish." 2024: Llama 3.1 405B was the first plausibly frontier-comparable open release. 2025-2026: open weights now routinely beat year-old closed models on standard benchmarks.

## Hardware / cost
Sweet spots:
- 8-13B (Llama 3.1 8B, Qwen 3 8B, Mistral 7B, Gemma 3 12B): consumer GPU, single 16 GB card.
- 27-32B (Qwen 3 32B, Gemma 3 27B, Mistral Small 4): single 24 GB card or 32 GB Mac.
- 70B (Llama 3.3 70B, abliterated 70B): 64 GB Mac or 2x 24 GB GPUs.
- MoE 200B+ activated 22-37B (Qwen 3-235B, DeepSeek V4): 128 GB+ unified memory or 2x H100. The activated-params trick means inference cost matches a 22-37B dense model.

## Maturity
Frontier-competitive on individual benchmarks; meaningfully behind closed models on multi-turn agentic flow, real-world tool-use under stress, and the long tail of edge cases. For 80% of practical use cases, an open-weight model in the 30-70B class is now sufficient.

## Sources
- https://magazine.sebastianraschka.com/p/a-dream-of-spring-for-open-weight
- https://www.vellum.ai/open-llm-leaderboard
- https://onyx.app/self-hosted-llm-leaderboard
- https://www.buildfastwithai.com/blogs/best-ai-models-may-2026-leaderboard
- https://github.com/QwenLM/Qwen3-Coder
- https://qwenlm.github.io/blog/qwen3/
- https://deepmind.google/models/gemma/gemma-4/
- https://mistral.ai/news/mistral-small-4
- https://nerdleveltech.com/mistral-medium-3-5-open-weight-128b-frontier-coder

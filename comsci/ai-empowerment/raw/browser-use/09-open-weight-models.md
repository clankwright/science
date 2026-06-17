# Open-Weight Computer-Use Models: UI-TARS, OS-Atlas, ShowUI

**Source date:** verified 2026-05-03
**URLs:**
- https://github.com/bytedance/UI-TARS
- https://github.com/bytedance/UI-TARS-desktop
- https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B
- https://arxiv.org/html/2501.12326v1
- https://arxiv.org/html/2509.02544v1
- https://venturebeat.com/ai/bytedances-ui-tars-can-take-over-your-computer-outperforms-gpt-4o-and-claude
- https://a2a-mcp.org/blog/what-is-ui-tars

## Why this matters

Frontier closed models (Claude Computer Use, OpenAI CUA, Gemini for Mariner) cost $0.05–$1+ per task and require sending screenshots of arbitrary UIs (banking dashboards, email, internal tools) to a third-party API. Open-weight models trained specifically for screen-reading and action grounding remove both costs: marginal cost is electricity, data stays on the machine.

## UI-TARS (ByteDance)

- Released Jan 2025; UI-TARS-2 paper Sep 2025; 1.5-7B weights public on Hugging Face
- License: Apache 2.0
- Sizes: 2B, 7B, 72B; 1.5-7B is the practical default for desktop GPUs
- Trained end-to-end on perception → reasoning → action over screenshots
- Benchmarks (UI-TARS-2):
  - OSWorld 47.5 (UI-TARS-1.5 was 24.6 / 22.7 vs Claude's 22.0 / 14.9 in early 2025 comparisons)
  - Online-Mind2Web 88.2
  - WindowsAgentArena 50.6
  - AndroidWorld 73.3
  - VisualWebBench (72B) 82.8% > GPT-4o 78.5% > Claude 3.5 78.2%
- Companion product: **UI-TARS Desktop**, an Electron app that pairs the model with a local executor; one of the few "download an open-source app, give it your computer" experiences in this space

## OS-Atlas

- HKUST/SJTU research group, late 2024
- Open-weight foundation action model for GUI agents
- Coordinate-grounding specialist; often used as the perception backbone in larger agent stacks rather than as a standalone product

## ShowUI

- NUS Show Lab, 2024
- 2B-class vision-language-action model for GUI; emphasizes efficient token usage on UI screenshots (interleaved visual streaming)
- Comparable role to OS-Atlas: a building block, not an end product

## Cost

- All free at the weight level
- 7B class runs on a single 24GB GPU (RTX 4090, used 3090) at usable latency for browser tasks
- 72B class needs a multi-GPU rig or a hosted inference provider (~$0.50–$2/hour)

## Maturity

- Research to beta. UI-TARS is the most production-ready of the three, with an actively maintained desktop app and 2026 GA-quality model releases.
- Reliability still trails frontier closed models on hard OSWorld tasks (UI-TARS-2 47.5 vs Claude Opus 4.7 72.5) but closes fast and is good enough for many narrow workflows.

## Distinctive trait

Privacy and unit economics. The only category where an individual can run an unrestricted browser/desktop agent against private data (banking, medical, employer accounts) without trusting a frontier API. ByteDance's continued investment (UI-TARS-2 RL paper, ongoing weight releases) keeps the open-weight tier within ~one generation of the closed frontier.

## Individual-empowerment angle

For a hobbyist with a gaming GPU or an M-series Mac, "agent runs locally, no per-task cost, no API key, no data leaves the box" goes from impossible (2024) to an evening's setup (2026). UI-TARS Desktop is the closest thing to a one-click installer in this space.

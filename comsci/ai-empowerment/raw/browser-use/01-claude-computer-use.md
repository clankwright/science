# Anthropic Claude Computer Use

**Source date:** verified 2026-05-03
**URLs:**
- https://medium.com/@hideyuda/10-2024-anthropic-release-summary-new-claude-model-and-screen-operation-computer-use-6a912e4e1707
- https://www.axios.com/2024/10/24/bots-ai-anthropic-claude-computer-use
- https://thenewstack.io/claude-computer-use/
- https://tokenmix.ai/blog/claude-computer-use-api-2026
- https://platform.claude.com/docs/en/about-claude/pricing
- https://cloud.google.com/blog/products/ai-machine-learning/upgraded-claude-3-5-sonnet-with-computer-use-on-vertex-ai

## What it is

Anthropic's first-party API capability that lets Claude generate keyboard and mouse actions against a desktop screenshot. The model sees the screen, decides on `click(x,y)`, `type("...")`, `key("Return")`, etc., and the calling code executes them in a sandboxed VM. Initially shipped Oct 22, 2024 with Claude 3.5 Sonnet (the "new" version). Successively refined through Sonnet 3.6, 4, 4.5, 4.6, and Opus 4.7.

## Vendor / Access

- Vendor: Anthropic
- Access: standard Claude API; no special signup. Tools `computer_20241022`, `bash_20241022`, `text_editor_20241022` (later versions exist).
- Reference Docker container provided for the executor (Anthropic's `anthropic-quickstarts/computer-use-demo`).
- Available on Anthropic API, AWS Bedrock, Google Vertex AI.
- Still labeled "beta" as of May 2026 despite production-grade reliability on narrow tasks.

## Cost

No premium for computer use; pays standard token rates of whichever Claude model. Q2 2026:
- Haiku 4.5: $1 / $5 per MTok in/out
- Sonnet 4.6: $3 / $15
- Opus 4.7: $15 / $75 (some sources cite $5/$25 for Opus 4.6; 4.7 raised premium tier)

A typical 30-step browser task with Sonnet runs $0.05–$0.30 depending on screenshot detail and history retention. Image tokens dominate; aggressive screenshot cropping helps.

## Maturity

- Beta label retained, but Anthropic uses it internally and reports 94% accuracy on insurance form-filling.
- OSWorld trajectory: <15% (Oct 2024 launch) → 38% (late 2025, Sonnet 3.5 new) → 72.5% (Q1 2026, Opus 4.7). Human baseline 87%.
- Reliability: ~75% on well-defined tasks, 50-60% on flaky UIs.

## Distinctive trait

First production frontier model with computer-use as a tool primitive. Sets the API conventions that competitors largely copied. Not browser-only: drives full desktop, file system, terminal. Pairs naturally with Claude Code for "agent that can both write code and operate the GUI it produced."

## Individual-empowerment angle

Free-tier Claude users do not get computer use directly. API users with a $5 deposit can run it from day one. Reference Docker container makes "give Claude a Linux desktop and a goal" a one-command exercise. Strongest fit for technical users who want to script personal automations against legacy GUIs.

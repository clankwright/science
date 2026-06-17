# Continue.dev, Cline, Aider with local backends

## What it is
The three open-source coding assistants that work credibly with local LLM backends in 2026. Continue.dev is a Cursor-style VS Code / JetBrains extension; Cline is an autonomous in-IDE agent (file edits, shell, browser) running in VS Code (and as of 2026, JetBrains, Cursor, Windsurf, Zed, Neovim, plus a preview CLI); Aider is a terminal-native pair programmer with strong git integration. All three speak OpenAI-compatible APIs, so any of them can point at Ollama, LM Studio, vLLM, or SGLang.

## Specific unlocks
- Code with a 30B coder model on your laptop and never leak proprietary source to a vendor. Defense, healthcare, legal, and finance teams in regulated industries actually use this in production in 2026.
- Run Cline's Plan/Act split entirely locally: the model proposes a plan with no file edits, you approve, then it transitions to Act for the writes. Local Qwen 3 Coder 30B handles the Plan stage credibly.
- Use Aider with Qwen 3 Coder 30B on a 24 GB GPU as your nightly diff-and-commit driver. The commit-per-edit pattern survives bad model output trivially.
- Pair Continue.dev (autocomplete + chat in IDE) with a local 7-13B for fast in-line completion and a local 30-70B for chat / refactor.
- Connect Cline to a local model and let it operate on a codebase inside an airgapped VM that has zero internet egress.
- Self-host the whole stack on a Mac Studio M3 Ultra and have your team's coding assistant inside the office firewall, with logs you control.

## Reality check on quality
Independent reviewers and Augment Code's 2026 comparison agree: Continue + a 70B-class local model is the production-tested combo for compliance-grade local coding. Aider's Architect mode realistically still needs a frontier (Sonnet 4.6 / Opus 4.7) model to be useful at multi-file refactors. Cline running on Qwen 3 Coder 30B handles bounded tasks (a single function, a clear bugfix) competently; long-horizon autonomous loops still go off the rails compared to closed-frontier models more often.

## Pre-AI baseline
Coding assistance pre-Copilot (2021): IDE autocomplete based on language servers and project symbol tables, no semantic completion. Pre-LLM refactors: hand-write or use heavyweight refactoring engines (IntelliJ for Java). Code review: human only.

## Hardware / cost
- **Inline autocomplete only:** 16 GB VRAM with Qwen 2.5 Coder 7B or Codestral 22B Q4 gives sub-second responses.
- **Chat + edit:** 24 GB VRAM (3090 / 4090) with Qwen 3 Coder 30B is the sweet spot.
- **Long-horizon autonomous:** 64 GB+ unified memory with a 70B-class coder (Qwen 3 Coder 480B's 30B-A3B variant fits if you have headroom).
- **Team server:** Mac Studio M3 Ultra 192 GB or 2x H100 running vLLM + Qwen 3 Coder 480B for the whole team.
All three tools are free, open-source. Continue.dev offers a paid hub but the core works free.

## Maturity
Production-ready for: in-IDE autocomplete, single-file edits, code review, doc generation, test scaffolding.

Breaks / weak: multi-hour autonomous coding loops where Claude Code / Codex now shine; tool-call sequencing under failure recovery; very large refactors across many files. Local models also hit context-window walls earlier in long sessions because consumer VRAM caps KV cache.

## Sources
- https://github.com/cline/cline
- https://docs.continue.dev/guides/ollama-guide
- https://www.augmentcode.com/tools/continue-vs-aider-vs-cline-private-ai-coding-assistants-for-regulated-teams
- https://nimbalyst.com/blog/best-local-first-ai-coding-tools-2026/
- https://codersera.com/blog/ai-coding-agents-complete-guide-2026/
- https://www.mindstudio.ai/blog/best-open-source-llms-agentic-coding-2026
- https://dev.to/sienna/qwen3-coder-next-the-complete-2026-guide-to-running-powerful-ai-coding-agents-locally-1k95

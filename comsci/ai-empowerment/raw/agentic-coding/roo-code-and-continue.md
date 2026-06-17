# Roo Code and Continue.dev

**Compiled:** 2026-05-03

## Roo Code (formerly Roo Cline)

### Vendor & Access

- **Vendor:** Roo Code Inc. (community-led).
- **Access:** Open source. VS Code extension. Free; Pro/Team plans add Roo Cloud features (sync, hosted agents at $5/hour for background tasks).
- **License:** Apache 2.0 (inherited from Cline fork).

### Year First Public

- Forked from Cline late 2024 / early 2025 to move faster on advanced features.

### Maturity

Production. 22K+ GitHub stars, 1.2M+ installs as of February 2026.

### Distinct Features

- **Custom Modes:** the headline feature. User defines specialized AI personas (Architect, Code, Ask, Debug, Orchestrator) with tailored instructions and scoped tool permissions. Each mode can restrict which tools the agent can use, preventing accidental file changes during planning.
- **Granular auto-approve:** per-tool, per-mode auto-approve for power users.
- **Diff-based editing:** more polished diff view than Cline.
- **Native Ollama / LM Studio providers:** runs DeepSeek R1, Qwen3-Coder, Llama, etc. locally without external proxies.
- **Cloud agents:** hosted background tasks for $5/hour.

### Edge over Cline

For power users who want strict mode discipline (planning agent that physically cannot edit files; debug agent that cannot push), Roo Code's custom modes are the cleanest implementation in the category.

---

## Continue.dev

### Vendor & Access

- **Vendor:** Continue (open-source company).
- **Access:** Open source. VS Code and JetBrains extensions, plus a CLI.
- **License:** Apache 2.0.
- **Cost:** Extension free; user pays LLM provider.

### Year First Public

- Released 2023 as a Copilot alternative; agent mode added 2024-2025.

### Maturity

Production. Different positioning from Cline / Roo: pitched at "quality control for your software factory" with source-controlled AI checks enforceable in CI.

### Distinct Features

- Four modes: **Agent** (large codebase changes), **Chat** (in-editor help), **Edit** (quick modifications), **Autocomplete** (real-time suggestions).
- **Source-controlled AI configs:** YAML configs checked into the repo, so a team's AI policy (which models, which prompts, which tools) is version-controlled rather than per-developer.
- **Custom AI agents:** user can define agents in config.
- Multi-model: OpenAI, Anthropic, Azure, local models via Ollama.
- CLI version enables CI enforcement.

### Edge

The "AI policy in source control + CI checks" angle is unique among the open-source extensions. Continue is the closest thing to a team-discipline tool in this category, where Cline and Roo are individual-power tools.

## Sources

- https://github.com/RooCodeInc/Roo-Code
- https://roocode.com/
- https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline
- https://www.qodo.ai/blog/roo-code-vs-cline/
- https://www.morphllm.com/comparisons/roo-code-vs-cline
- https://4sysops.com/archives/cline-vs-roo-code-which-vs-code-extension-is-better-for-the-ai-augmented-it-pro/
- https://www.continue.dev/
- https://github.com/continuedev/continue
- https://marketplace.visualstudio.com/items?itemName=Continue.continue
- https://docs.continue.dev/

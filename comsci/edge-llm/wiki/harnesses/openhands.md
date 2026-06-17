# OpenHands (local-model support, May 2026)

> **Summary:** OpenHands (All Hands AI). The May 2026 update adds first-class local-model management to the open-source agentic harness: saved reusable LLM profiles, a /model command and inline switcher, sub-agent delegation via TaskToolSet, and an inline critic/verification display. Crucially, for models lacking native function calling it serializes tools into a structured prompt and regex-parses responses, a fallback tool-use path that props up weak local models.

**Sources:** [raw/openhands.md](../../raw/openhands.md)

---

## What changed (May 2026)

- Local GUI: saved reusable LLM profiles + /model command + inline profile switcher (published May 20 2026).
- Sub-agent delegation via TaskToolSet; inline critic/verification display, which helps small-model reliability.
- Docs (May 21 2026) recommend Qwen3.6-35B-A3B as the first local model, served via [LM Studio / Ollama](../runtimes/ollama-and-friends.md) / [vLLM](../runtimes/vllm.md) / SGLang.
- Prompt-serialization tool-call fallback with regex parsing for models without native function calling.

## Relevance to 4 GB VRAM target

Tool-call format conformance is the dominant failure mode at SLM scale (see [harness comparison](../analysis/harness-comparison.md)). OpenHands's prompt-serialization fallback plus inline critic loop is the practical fix for small quantized models that fail native function-calling, letting a 4 GB-class model drive a real agentic loop where strict-schema harnesses would break. It joins [aider](aider.md) and [Cline/Continue/Goose](cline-continue-goose.md) as a local-friendly alternative to the target [Claude Code](claude-code.md).

## See Also

- [aider](aider.md), [Cline / Continue / Goose](cline-continue-goose.md), [Claude Code](claude-code.md)
- [Harness comparison](../analysis/harness-comparison.md)
- [Ollama / LM Studio / ExLlamaV2 / MLX](../runtimes/ollama-and-friends.md)

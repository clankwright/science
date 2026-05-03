# Long Context via Filesystem (Not Attention)

> **Summary:** A March 2026 paper argues the agentic-coding bet is structural, not bandwidth-limited: small-model + competent harness + filesystem tools beats large-model + 1M-token attention by 17.3% average across long-context reasoning, RAG, and open-domain QA over corpora up to 3T tokens. This validates the entire 4 GB-VRAM thesis. The harness IS the long-context system; the model does not need to be.

**Sources:** [raw/long-context-coding-agents.md](../../raw/long-context-coding-agents.md), [raw/longcodebench.md](../../raw/longcodebench.md)

---

## The thesis

Off-the-shelf frontier coding agents, given filesystem tools (`read`, `grep`, `glob`, `sed`), externalize long-context processing from attention into explicit file-system manipulation. Result: they beat published long-context SOTA by 17.3% average on long-context reasoning, RAG, and open-domain QA over corpora up to 3T tokens.

The natural rebuttal is "frontier coders already see the corpus in context." That is wrong. The paper is explicit that the agent is fetching slices on demand, the same way [Claude Code](../harnesses/claude-code.md) and [aider](../harnesses/aider.md) do.

## Why this matters at 4 GB

The 4 GB envelope cannot host any model with a useful 128K-token attention window: see [four-gb-budget-math.md](four-gb-budget-math.md). KV cache scales linearly with context and dominates VRAM beyond 32K even on GQA-aggressive small models.

If filesystem tools provide effectively unbounded context, the small-model deployment can stop chasing long-context architectural tricks and instead invest the same VRAM budget in:

- Larger weights (jump from Q4 to Q5_K_M).
- Better speculative decoding ([EAGLE-3](../techniques/eagle-3.md), [DEER](../techniques/deer-diffusion-draft.md)).
- Test-time scaling ([FastTTS](../techniques/fasttts.md)).
- KV-aware multi-agent scaffolds ([PolyKV](../techniques/polykv.md)).

This is a strict win: better quality at the same VRAM, with no degradation on long-context tasks.

## What this changes about the wiki's recommendations

| Decision | Old default | New default |
|---|---|---|
| Effective context target | 32K-128K via aggressive KV compression | 16K-32K native, unbounded via filesystem |
| KV-compression aggressiveness | StructKV 50% + KIVI 2-bit | StructKV 50% only (or none) at 16K |
| Architectural priority | SSM hybrids ([Mamba-3](../architectures/mamba-ssm-hybrids.md), [LFM2](../models/lfm2.md)) | Lower priority; dense GQA-heavy attention is fine |
| Harness priority | Equal to model choice | **Harness is the long-context system**; first-class concern |

## Cross-validation: LongCodeBench

[LongCodeBench](../benchmarks/longcodebench.md) (May 2025): Claude 3.5 Sonnet drops from 29% to 3% on LongSWE-Bench going 32K to 256K. Long-context degradation is severe even for frontier models. This is the empirical case for *not* relying on long-context attention at any model scale.

## Related architectural work

- **MiMo-V2.5-Pro**: 6:1 sliding-window-to-global ratio, ~7x KV reduction at long context. The architectural-tricks path remains live but is now competing against a tools-based path that is simpler.
- **Recursive Language Models (RLM)**: treat input as external Python REPL environment, recursively call self over snippets. Same intuition as filesystem-tool agents: externalize the context-processing.

## Implications for solo-dev contribution

[contribution-roadmap.md](contribution-roadmap.md) Path 1 (agentic SFT) and Path 2 (eval suite) both directly benefit. The eval suite should specifically include long-context-via-filesystem tasks, which are not covered by SWE-Bench Verified.

A new contribution path emerges: **harness-side filesystem-tool optimization**. Caching `grep` results, prefix-caching system-prompt-plus-tool-definitions, smart `read` chunk sizing. The leverage is harness-resident and orthogonal to model training, so it scales across every small-model release.

## Open questions

- Does the result hold for true *novel* repositories the model has never seen, or is it partially a memorization effect? The paper's 3T-token corpora include public code; small models may not benefit equivalently.
- What is the latency cost of the filesystem-tool round trips on a single-laptop deployment? Each `grep` is a tool-call round-trip plus prefill.
- Does prefix caching ([vLLM](../runtimes/vllm.md)) compose cleanly with filesystem-tool patterns?

## See Also

- [Four-GB Budget Math](four-gb-budget-math.md)
- [Quant vs Capability Frontier](quant-vs-capability-frontier.md)
- [Harness Comparison](harness-comparison.md)
- [LongCodeBench](../benchmarks/longcodebench.md)
- [PolyKV](../techniques/polykv.md)

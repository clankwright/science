# LongCodeBench

> **Summary:** May 2025 (arXiv:2505.07897), v2 within window. Coding benchmark at 32K, 64K, 128K, 256K, 512K, and 1M context. **Critical finding: Claude 3.5 Sonnet drops from 29% to 3% on LongSWE-Bench going 32K to 256K.** Long-context degradation is severe even for frontier models; hits small models harder. Useful for honest claims about effective context inside the 4 GB budget.

**Sources:** [raw/longcodebench.md](../../raw/longcodebench.md)

---

## What it measures

Coding tasks (bug fixes, feature additions) at progressively longer contexts. Two task families: LongSWE-Bench (real GitHub-style tasks padded to N tokens) and synthetic long-context probes.

## The 29%-to-3% cliff

Claude 3.5 Sonnet:
- 32K context: 29%
- 256K context: 3%

That is not graceful degradation; that is a phase transition. Frontier-class models lose almost all coding capability past their training-time effective-context window.

## Implication for 4 GB

Two competing readings:

**Reading 1**: Long-context is broken for everyone, so don't optimize for it.

**Reading 2**: Long-context is broken for everyone, so route around it. This is the [Long Context via Filesystem](../analysis/long-context-via-filesystem.md) thesis: filesystem tools beat long-context attention by 17.3% even at 3T-token corpora.

The 4 GB-class wiki adopts Reading 2. Optimize for 16K-32K native context plus filesystem tools, not for stuffing more tokens through KV-compressed attention.

## What this means for KV-compression work

[KIVI](../techniques/kivi.md), [DASH-KV](../techniques/dash-kv.md), [StructKV](../techniques/structkv.md), [Self-Indexing KVCache](../techniques/self-indexing-kv.md), [Expected Attention](../techniques/expected-attention.md), [PolyKV](../techniques/polykv.md): all useful for 4 GB, but should be evaluated at 16K-32K context, not at 128K+. The model's underlying long-context behavior is too poor to evaluate the compression cleanly past that point.

## See Also

- [Long Context via Filesystem](../analysis/long-context-via-filesystem.md)
- [SWE-Bench Verified](swe-bench.md)
- [Aider Polyglot](aider-polyglot.md)
- [LiveCodeBench](livecodebench.md)

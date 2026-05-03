# PolyKV: Shared Asymmetrically-Compressed KV Cache for Multi-Agent Scaffolds

> **Summary:** April 2026 (arXiv:2604.24971). One compressed KV cache, shared across multiple agent personas, with asymmetric compression (K at int8, V at TurboQuant 3-bit). Reclaims VRAM that would otherwise duplicate the system prompt and tool definitions per agent. Direct multiplier on effective context inside the 4 GB budget for agentic-coding scaffolds (planner + executor + reviewer).

**Sources:** [raw/polykv.md](../../raw/polykv.md)

---

## The problem

Agentic-coding harnesses increasingly run multi-persona scaffolds: one agent plans, another writes code, a third reviews. Each persona keeps its own KV cache because the prompts diverge. But the common prefix (system prompt, tool definitions, repo overview) is identical across personas. Standard prefix caching ([vLLM](../runtimes/vllm.md)) handles this within one persona's stream, not across personas.

On a 4 GB GPU, three personas each holding a 16K-token prefix wastes ~3x the prefix's KV memory.

## What PolyKV does

Single compressed KV cache pool, shared across personas. K stored at int8, V stored at TurboQuant 3-bit. Asymmetric quant reflects the well-known asymmetry: K is more sensitive to quantization than V.

The shared pool means the prefix is paid for once. Each persona's persona-specific suffix is appended cheaply.

## VRAM math at 4 GB

For a 4 GB-class deployment running a 3-persona scaffold with a 16K-token shared prefix:

| Configuration | KV cost (rough) |
|---|---|
| Three independent FP16 KV caches | 3 × 1.0 GB = 3.0 GB |
| Three independent KIVI-2bit caches | 3 × 0.25 GB = 0.75 GB |
| **Single PolyKV pool, shared prefix** | 1 × 0.4 GB (asymmetric K8/V3) ≈ 0.4 GB |

PolyKV is the only configuration that hosts a 3-persona scaffold with substantial weights budget remaining at 4 GB.

## Implementation maturity

April 2026 paper. No major runtime has integrated yet. [vLLM](../runtimes/vllm.md) is the natural host given its existing prefix-caching infrastructure.

## When NOT to use PolyKV

Single-persona deployments. The asymmetric-compression piece still helps (KIVI-style benefits) but the cross-agent sharing is irrelevant.

## Pairs with

- [Long Context via Filesystem](../analysis/long-context-via-filesystem.md): both reduce the demand on attention.
- [FastTTS](fasttts.md): TTS-style verification implicitly involves multiple model passes; sharing KV across them is the same idea.
- [Expected Attention](expected-attention.md): on top of the asymmetric quant, drop low-importance entries from the shared pool.

## See Also

- [Expected Attention](expected-attention.md)
- [KIVI](kivi.md)
- [DASH-KV](dash-kv.md)
- [Long Context via Filesystem](../analysis/long-context-via-filesystem.md)
- [Harness Comparison](../analysis/harness-comparison.md)

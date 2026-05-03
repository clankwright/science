# Expected Attention (KV Cache Compression)

> **Summary:** October 2025 (arXiv:2510.00636). Training-free KV cache compression that estimates KV importance by predicting how future queries will attend, in closed form via activation distributions. Works in both prefill and decode. Beats SOTA baselines without retraining the model. Implementation lives in NVIDIA's [KVPress](https://github.com/NVIDIA/kvpress) library.

**Sources:** [raw/expected-attention-kv.md](../../raw/expected-attention-kv.md)

---

## Why training-free is the load-bearing word

Most KV-compression methods ([KIVI](kivi.md) variants with calibration data, learned token selection) require either calibration or fine-tuning. For a solo dev applying compression to a model they downloaded yesterday, those costs dominate. Expected Attention is closed-form: derive importance scores from the activation distributions the model already produces, no training.

## How it works

Estimate the distribution of future queries from current activations. Compute, in closed form, the expected attention each KV entry will receive under that distribution. Drop the lowest-expected-attention entries. The estimator works in both prefill (one-shot decision over the whole prompt) and decode (rolling decision per new token).

## 4 GB use cases

- **Prefill compression**: drop irrelevant prompt tokens before decode begins. Frees KV slots for the long generation typical of agentic-coding loops.
- **Decode compression**: keep the cache bounded over a 32K-token agent session.

Both compose with [PolyKV](polykv.md) (cross-agent sharing) and [DASH-KV](dash-kv.md) (asymptotic O(N) attention).

## KVPress: NVIDIA's evaluation library

KVPress (https://github.com/NVIDIA/kvpress) implements 20+ KV cache compression methods including Expected Attention, with consistent benchmarking. Saves the solo dev from re-implementing each baseline. The right starting point for anyone designing a 4 GB-envelope eval suite ([harness-eval-suite-design.md](../analysis/harness-eval-suite-design.md)).

## See Also

- [KIVI](kivi.md)
- [DASH-KV](dash-kv.md)
- [StructKV](structkv.md)
- [PolyKV](polykv.md)
- [Self-Indexing KVCache](self-indexing-kv.md)

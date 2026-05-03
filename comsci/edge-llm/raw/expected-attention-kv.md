# Expected Attention: KV Cache Compression by Estimating Attention from Future Queries

**Source:** arXiv:2510.00636 (https://arxiv.org/abs/2510.00636)
**Date:** October 2025

## Core claim

Training-free KV cache compression. Estimates KV importance by predicting how future queries will attend, in closed form via activation distributions. Works in both prefill and decode. Beats SOTA baselines.

## Relevance to 4 GB edge target

Training-free is the load-bearing word for solo devs without compute budget for re-training. Drop-in next to KIVI / DASH-KV / StructKV in the KV-compression stack.

## Pairs with

- KVPress (NVIDIA library) implements 20+ KV cache methods including this one with consistent benchmarking.

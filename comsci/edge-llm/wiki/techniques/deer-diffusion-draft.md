# DEER: Diffusion-Based Drafter for Speculative Decoding

> **Summary:** December 2025 (arXiv:2512.15176). Replaces the autoregressive drafter in speculative decoding with a diffusion drafter that generates entire draft sequences in one denoising pass. **Acceptance lengths up to 32 tokens vs ~10 for [EAGLE-3](eagle-3.md).** 3x acceptance length means roughly 3x effective decode speed for the same target model. If the diffusion drafter VRAM footprint is comparable to EAGLE-3, this is a drop-in win at 4 GB.

**Sources:** [raw/deer-diffusion-draft.md](../../raw/deer-diffusion-draft.md)

---

## How it differs from EAGLE-3

EAGLE-3 drafts autoregressively: draft token N+1, then N+2, etc., with a small head reusing the target's hidden states. Acceptance length tops out around 10 tokens because each draft step compounds errors.

DEER drafts the entire sequence in one shot via diffusion denoising. The draft is constructed jointly, not greedily, so error compounding is bounded by the number of denoising steps, not the sequence length. Result: acceptance lengths up to 32 tokens.

## Effective decode speedup

If the target model's per-token cost is fixed and acceptance length is L, the effective speedup over no-spec-decoding is roughly L / (1 + drafter-cost-fraction). EAGLE-3 with L≈10 achieves ~3-4x in practice. DEER with L≈32 should achieve ~8-10x at the same drafter overhead, IF the diffusion drafter is not radically more expensive than EAGLE-3's small head.

The paper's published acceptance numbers should be cross-checked against this back-of-envelope.

## Open questions for 4 GB deployment

- VRAM footprint of the diffusion drafter relative to EAGLE-3's single-layer head. Diffusion models are typically larger; this could swing the trade.
- Behavior on coding-distribution drafts. Acceptance lengths typically lower for code than chat (more low-entropy positions but also more constrained valid continuations). The 32-token claim may not hold for code.
- Training cost vs EAGLE-3. Solo-dev contribution path: train a DEER drafter for [Phi-4-mini](../models/phi-4-mini.md) or [Qwen3-Coder-Next](../models/qwen3-coder-next.md).

## Position vs other 2026 spec-decoding work

| Method | Source | Headline |
|---|---|---|
| EAGLE-3 | NeurIPS 2025 | Practitioner default; ~10-token acceptance |
| **DEER** | Dec 2025 | Diffusion drafter; up to 32-token acceptance |
| [VSD](vsd-variational-spec.md) | Feb 2026 | Variational training; +9.6% over EAGLE-3 |
| [Saguaro/SSD](saguaro-ssd.md) | ICLR 2026 | SD scheduling; vLLM/SGLang ref impl |
| [DDTree](ddtree.md) | Apr 2026 | Block-diffusion draft trees |
| [Steering Drafters](#) | Nov 2025 | Inference-time drafter steering, no retrain |

## See Also

- [EAGLE-3](eagle-3.md)
- [VSD](vsd-variational-spec.md)
- [DDTree](ddtree.md)
- [Spec Decoding at 4 GB](../analysis/spec-decoding-at-4gb.md)
- [Saguaro/SSD](saguaro-ssd.md)

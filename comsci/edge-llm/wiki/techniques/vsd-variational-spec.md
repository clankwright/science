# Variational Speculative Decoding (VSD)

> **Summary:** February 2026 (arXiv:2602.05774). Reformulates draft training as variational inference over latent proposals, maximizing marginal probability of target acceptance. **+9.6% over [EAGLE-3](eagle-3.md), +7.9% over ViSpec.** Drop-in EAGLE-3 replacement at the same drafter footprint; direct VRAM-efficient improvement at 4 GB.

**Sources:** [raw/vsd-variational-spec.md](../../raw/vsd-variational-spec.md)

---

## What changes

EAGLE-3 trains the drafter to mimic the target's next-token distribution. VSD reframes the objective: maximize the marginal probability that the drafter's output is accepted by the target's verification step. The variational formulation introduces a latent proposal distribution that the drafter samples from, optimized via variational inference.

The practical effect is that the drafter is trained for the metric that actually matters (acceptance rate) rather than a proxy (next-token KL).

## Numbers

- +9.6% improvement over EAGLE-3 (acceptance / speedup; paper's headline metric).
- +7.9% improvement over ViSpec.

## Why this matters at 4 GB

Drop-in replacement. Same drafter architecture, same VRAM footprint, better acceptance. Compounds with [DEER](deer-diffusion-draft.md) (different drafter architecture entirely) and [Saguaro/SSD](saguaro-ssd.md) (different scheduling).

## Position in 2026 spec-decoding stack

| Component | Role |
|---|---|
| EAGLE-3 | The 2025 practitioner default for the drafter architecture |
| **VSD** | Better training objective for that drafter |
| DEER | A different (diffusion) drafter architecture |
| Saguaro/SSD | Better scheduling around any drafter |
| MoE-Spec | Verification budgeting under MoE targets |

VSD and Saguaro compose: better-trained drafter plus better scheduling.

## Open questions

- VSD-trained Phi-4-mini drafters do not yet exist publicly.
- Behavior on coding distribution (lower entropy than chat).

## See Also

- [EAGLE-3](eagle-3.md)
- [DEER](deer-diffusion-draft.md)
- [Saguaro/SSD](saguaro-ssd.md)
- [Spec Decoding at 4 GB](../analysis/spec-decoding-at-4gb.md)

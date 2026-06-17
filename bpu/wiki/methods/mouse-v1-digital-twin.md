# Probing Latent Representations in Mouse V1 Digital Twins

> **Summary:** Digital twins of mouse primary visual cortex (V1) predict neural activity from naturalistic video. This work moves past held-out prediction accuracy to probe what the models internally represent. Models with near-identical accuracy diverge sharply in their latent representations; the most predictive models show flatter eigenspectra (higher-dimensional codes) that match biological V1. A representational-quality lens for the digital-twin and brain-foundation-model line.

**Sources:** [[raw/lima_mouse_v1_twin_2026.md]] (arXiv:2605.23122)

---

## Approach

The study compares digital twins trained on identical data but with different
visual-encoder architectures, probing representations at three levels:

- **Linear decodability:** visual probes for orientation, contrast, and motion.
- **Latent-unit tuning:** whether hidden units tune to canonical visual
  features.
- **Population geometry:** the eigenspectrum of hidden-layer population activity.

Data are naturalistic videos recorded from freely moving mice. The approach
complements [MICrONS](../entities/microns.md)-based digital twins built from
combined structural and functional cortical data.

## Key findings

- Models with near-identical neural-response prediction accuracy can encode very
  different internal representations.
- Better neural-response prediction correlates with stronger probe accuracy.
- Highly predictive models display flatter hidden-population eigenspectra, i.e.
  higher-dimensional representations that match mouse V1 signatures.

## Significance

The brain-foundation-model wave ([Large Connectome Model](large-connectome-model.md),
[zebrafish SBM](zebrafish-foundation-model.md)) is usually scored on held-out
prediction accuracy alone. This is the first critical evaluation showing that
prediction accuracy underdetermines representation: two twins can match on
accuracy yet differ in whether they reproduce V1's coding geometry. It supplies a
quality bar for connectome-derived and data-driven cortical models, relevant to
the [connectome-constrained DMN](connectome-constrained-dmn.md) program (which
validates models against measured tuning) and to claims that biological structure
yields biological computation
([connectome-inspired architectures](../concepts/connectome-inspired-architectures.md)).

## See Also

- [Sensing Whole-Brain Zebrafish Foundation Model](zebrafish-foundation-model.md)
- [Large Connectome Model](large-connectome-model.md)
- [MICrONS](../entities/microns.md)
- [Connectome-Constrained DMNs](connectome-constrained-dmn.md)

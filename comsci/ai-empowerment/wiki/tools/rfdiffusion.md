---
id: rfdiffusion
title: "RFdiffusion"
kind: tool
vendor: Baker Lab (University of Washington)
access: open source
maturity: research / production for design
cost_tier: free (GPU required)
year_first_public: 2023
last_verified: 2026-05-04
---

# RFdiffusion

> **Summary:** Open-source generative protein design via diffusion models. RFdiffusion3 (December 2025) designs functional enzymes from prompts at catalytic proficiencies comparable to natural enzymes. Runnable on consumer GPUs. The most powerful open dual-use AI tool publicly available; the Bloomfield et al. (Science 2024) DNA-synthesis-screening evasion paper demonstrated the dual-use risk is real and unresolved.

**Sources:** [[raw/amateur-science/protein-design-and-rfdiffusion.md]]

## What it does

Generates novel protein backbones conditioned on a target binding partner, a target structural motif, or a desired symmetry. Pair with ProteinMPNN to assign sequences to the generated backbones, then with AlphaFold/Boltz to validate predicted structures. RFdiffusion3 added support for designing functional enzymes that catalyze specific reactions.

## Access and cost

Open source on GitHub. Runs on a 24GB+ GPU. Free, but biosecurity-screening services for ordering synthesized DNA may flag designs.

## Distinctive trait

It crosses the line from "predict what nature made" into "design something nature didn't." For amateurs, it remains research-grade in real use; the Baker lab and a small number of academic groups produce most of the published functional designs. Synthesizing and testing a designed protein still requires lab access.

## Limits

- Functional enzyme design at amateur scale is largely demos; expect months of optimization for any specific function.
- DNA-synthesis providers screen orders against known hazardous sequences; novel designs sometimes pass screening that should fail (Bloomfield et al., Science 2024).
- Wet-lab validation is the bottleneck; without it, a designed sequence is just a hypothesis.
- Dual-use: the same workflow that designs a beneficial enzyme can in principle design a harmful one. Treat with the seriousness this warrants.

## See also

- [Amateur scientific computing](../capabilities/amateur-scientific-computing.md)
- [Boltz](boltz.md): for validating designed structures.
- [OpenTrons](opentrons.md): bench automation for testing designs (with major safety caveats).

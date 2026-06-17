---
id: lean-and-mathlib
title: "Lean 4 and Mathlib"
kind: tool
vendor: Lean FRO; Mathlib community; Lean Copilot from CMU
access: open source
maturity: production
cost_tier: free
year_first_public: Lean 2013; Lean 4 2021
last_verified: 2026-05-04
---

# Lean 4 and Mathlib

> **Summary:** Open-source dependent type theory proof assistant plus its formal mathematics library. Lean Copilot integrates LLM tactic suggestions natively via FFI, raising automated proof step rate to 74.2% (vs. ~40% for prior aesop). With AlphaProof (DeepMind, IMO 2024 silver), Math Inc Gauss, and Kimina/HILBERT (99% on miniF2F), formal proof work that previously required a research mathematician is now amateur-tractable.

**Sources:** [[raw/amateur-science/lean-and-formal-math.md]]

## What it does

Lean 4 lets you state mathematical claims as types and check proofs as type-checked terms. Mathlib is the continually growing library of formalized mathematics (analysis, algebra, topology, number theory). Lean Copilot suggests tactics (proof steps) using a fine-tuned LLM, reducing the manual tactic-search burden.

## Access and cost

Free. Install via elan; works on Mac, Linux, Windows. VS Code extension is the standard editor. Lean Copilot is open-source.

## Distinctive trait

Terence Tao's public Lean projects (PFR conjecture formalization, the Equational Theories Project) demonstrated that real mathematicians can formalize active research using Lean. Lean Copilot's FFI integration means LLM suggestions appear in-editor, not as a chat sidecar. miniF2F benchmark moved from sub-50% to 99% in three years; the productivity floor for amateur formal math has risen by an order of magnitude.

## Limits

- Steep learning curve; weeks of investment before useful work.
- Mathlib coverage is uneven; some classical results still unformalized.
- Lean Copilot suggestion latency varies with model backend.
- Formalization of an existing informal proof typically takes 5-50x the original proof's length.

## See also

- [Amateur scientific computing](../capabilities/amateur-scientific-computing.md)
- AlphaProof, Math Inc Gauss, Kimina/HILBERT: complementary frontier-lab math models.

# Liquid AI

> **Summary:** Liquid AI is an AI company founded by Ramin Hasani, Mathias Lechner, and collaborators from MIT CSAIL. It commercializes liquid neural networks and related brain-inspired architectures, building on Liquid Time-Constant Networks research. The company's core differentiator is compact, interpretable neural networks inspired by C. elegans nervous system dynamics.

**Sources:** general knowledge

---

## Overview

Liquid AI was founded circa 2023 to bring brain-inspired neural network architectures from academic research into production. The company raised significant venture funding and is headquartered in the Boston area, drawing on its founders' research at MIT CSAIL, IST Austria, and TU Wien.

## Core Technology

The company's technology stack builds on several interconnected research contributions:

- **[Liquid Time-Constant Networks](../methods/liquid-neural-networks.md) (LTCs):** Continuous-time recurrent networks with input-dependent, varying time constants. Hidden state dynamics are governed by ODEs inspired by the biophysics of non-spiking neurons in [C. elegans](c-elegans.md).
- **[Neural Circuit Policies](../methods/neural-circuit-policies.md) (NCPs):** Control agents derived from the C. elegans tap-withdrawal circuit, achieving RL task performance comparable to deep networks with orders of magnitude fewer parameters.
- **Closed-form Continuous-depth Networks (CfCs):** Analytical approximations of LTC dynamics that eliminate the need for numerical ODE solvers, enabling faster inference.

The unifying principle: biological neural circuits, particularly those of small organisms, encode efficient computational strategies that can be extracted and deployed in artificial systems.

## Founders

- **[Ramin Hasani](ramin-hasani.md):** Co-inventor of LTCs and NCPs; researcher at MIT CSAIL
- **Mathias Lechner:** Co-inventor of NCPs and LTCs; researcher at IST Austria and MIT
- **Daniela Rus:** Director of MIT CSAIL; advisor and co-founder
- **Radu Grosu:** Professor at TU Wien; early collaborator on the C. elegans circuit policy work

## Product Direction

Liquid AI targets domains where compact model size, interpretability, and real-time performance are critical:

- **Robotics and autonomous systems:** Small, efficient controllers for resource-constrained platforms
- **Edge computing:** Models that run on embedded hardware without cloud connectivity
- **Explainable AI:** Networks whose internal dynamics can be inspected and understood at the individual neuron level

The company's approach contrasts with the dominant scaling paradigm in AI: rather than increasing parameter counts, Liquid AI focuses on architectures that achieve strong performance with minimal parameters by leveraging biologically derived structural priors.

## See Also

- [Liquid Time-Constant Networks](../methods/liquid-neural-networks.md)
- [Closed-Form Continuous-Time Networks](../methods/closed-form-continuous-time.md)
- [Liquid-S4](../methods/liquid-s4.md)
- [Liquid Foundation Models (LFM2)](../methods/liquid-foundation-models.md)
- [Neural Circuit Policies](../methods/neural-circuit-policies.md)
- [C. elegans](c-elegans.md)
- [Ramin Hasani](ramin-hasani.md)
- [Biological Processing Units](../methods/biological-processing-units.md)

# Closed-Form Continuous-Time Neural Networks (CfC)

> **Summary:** CfC networks derive a closed-form approximation of Liquid Time-Constant dynamics, eliminating the need for numerical ODE solvers. By solving the interaction between neurons and synapses (the building blocks of LTCs) in closed form, CfC achieves 1 to 5 orders of magnitude faster training and inference compared to ODE-based counterparts while maintaining strong performance on time-series tasks. Since time appears explicitly in the solution, no complex numerical integration is required.

**Sources:** [[raw/hasani_cfc_2021.md]]

---

## Core Idea

LTC networks require numerical ODE solvers at every forward pass, creating a computational bottleneck that limits scalability. CfC sidesteps this entirely:

- **Closed-form solution:** the interaction between neurons and synapses is solved analytically rather than numerically
- **Explicit time dependence:** time appears directly in the solution, preserving the continuous-time semantics of LTCs without solver overhead
- **Drop-in replacement:** CfC can substitute for LTC layers in existing architectures with minimal modification

## Performance

- **Speed:** 1 to 5 orders of magnitude faster in training and inference versus ODE-based continuous-time networks
- **Scalability:** scales remarkably well compared to other deep learning instances, unlike ODE-based continuous networks whose solver costs grow with stiffness and sequence length

## Applications

CfC demonstrates strong performance across time-series domains:

- Autonomous driving
- Action recognition
- Power systems forecasting

## Relation to LTC and Liquid AI

CfC is the direct follow-up to [Liquid Neural Networks](liquid-neural-networks.md). The original LTC formulation established biologically inspired continuous-time dynamics; CfC made them practical at scale by removing the ODE solver bottleneck. CfC is the core technology behind Liquid AI's commercial products, enabling deployment in latency-sensitive and resource-constrained settings.

## Authors

Ramin Hasani, Mathias Lechner, Alexander Amini, Lucas Liebenwein, Aaron Ray, Christoph Tschaikowski, Gerald Teschl, Daniela Rus (MIT / IST Austria). arXiv:2106.13898; Nature Machine Intelligence, 2022.

## See Also

- [Liquid Neural Networks](liquid-neural-networks.md)
- [Liquid-S4](liquid-s4.md)
- [Liquid Foundation Models (LFM2)](liquid-foundation-models.md)
- [Neural Circuit Policies](neural-circuit-policies.md)
- [Brain-Inspired Transformer Efficiency](../concepts/brain-inspired-transformer-efficiency.md)
- [Biological Processing Units](biological-processing-units.md)
- [Liquid AI](../entities/liquid-ai.md)

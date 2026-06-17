# Drosophila Connectome on Loihi 2

> **Summary:** The first biologically realistic whole-brain connectome simulated on neuromorphic hardware. The full [FlyWire](../entities/flywire-consortium.md) connectome (140K neurons, 50M synapses condensed to 15M) is mapped onto 12 Intel Loihi 2 chips using a simplified LIF neuron model. The system achieves orders of magnitude speedup over conventional numerical simulation, with performance advantages increasing as activity becomes sparser, a natural characteristic of biological neural networks.

**Sources:** [[raw/wang_loihi2_2025.md]]

---

## Implementation

The simulation maps the entire adult [*Drosophila*](../entities/drosophila.md) brain onto neuromorphic silicon:

- **Scale:** 140,000 neurons, approximately 50 million synapses condensed to 15 million after aggregation
- **Hardware:** 12 Intel Loihi 2 chips
- **Neuron model:** simplified leaky integrate-and-fire (LIF) with refractory period
- **Translation layer:** STACS simulator used as an intermediate step for converting connectome data to Loihi-compatible format
- **Numerical representation:** fixed-point arithmetic with weight quantization to match hardware constraints

## Challenges

Biological neural networks present specific difficulties for hardware mapping:

- **Sparse, recurrent, irregular connectivity:** biological wiring patterns are poorly suited to conventional computing architectures optimized for regular, dense operations
- **Extreme fan-in/fan-out:** some neurons receive or send connections to thousands of partners, exceeding per-core memory limits on neuromorphic chips
- **Weight precision:** biological synaptic weights span a wide dynamic range that must be compressed to fixed-point representations

## Performance

- Orders of magnitude faster than numerical simulation on conventional hardware
- Performance advantage increases with sparser activity patterns
- Since biological networks operate in a sparse activity regime, neuromorphic hardware is particularly well-matched to connectome-scale simulation

## Significance

This work validates neuromorphic platforms as enabling technology for connectome-scale models. Running a complete brain connectome on dedicated hardware, rather than simulating it on GPUs or CPUs, opens a path toward real-time or faster-than-real-time whole-brain emulation. The results demonstrate that neuromorphic chips can handle the irregular, sparse connectivity characteristic of biological networks, not just the regular architectures typical of conventional deep learning.

## Authors

William H. Wang, Brad H. Theilman, William M. Rothganger, Michael P. Severa, Craig M. Vineyard, James B. Aimone (Sandia National Laboratories). arXiv:2508.16792, 2025.

## See Also

- [FlyGM: Whole-Brain Connectome for Embodied Locomotion](flygm-whole-brain-locomotion.md)
- [Drosophila Computational Brain Model](drosophila-computational-brain.md)
- [Biological Processing Units](biological-processing-units.md)
- [Drosophila VNC Connectome](drosophila-vnc-connectome.md)
- [BrainTrace SNN Training](braintrace-snn.md)

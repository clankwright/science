# Nematode Connectome Neural Networks (NCNNs)

> **Summary:** NCNNs transform the [*C. elegans*](../entities/c-elegans.md) connectome adjacency matrix into connection graphs that are encapsulated as "connectome blocks" for CNN convolutional layers. This represents the first implementation of applying a biological connectome directly to convolutional neural network architectures. The approach achieves competitive accuracy on standard benchmarks (CIFAR-10, CIFAR-100, MNIST, ImageNet) with fewer parameters than conventional CNNs.

**Sources:** (Su et al., Applied Soft Computing, 2023, DOI: 10.1016/j.asoc.2023.110992)

---

## Method

The NCNN pipeline has four stages:

1. **Obtain adjacency matrix:** extract the *C. elegans* neuron connectome as a weighted adjacency matrix representing synaptic connections between neuron pairs
2. **Transform into connection graphs:** convert the adjacency matrix into structured connection graphs encoding the wiring topology
3. **Build connectome blocks:** encapsulate connection graphs as modular "connectome blocks" that replace or augment standard convolutional kernels
4. **Integrate into CNN architecture:** insert connectome blocks into convolutional layers, allowing the biological wiring pattern to govern feature extraction

The connectome block acts as a structured sparse filter whose connectivity reflects the actual neural wiring of *C. elegans*, rather than the fully connected or uniformly sparse patterns typical of conventional convolutions.

## Results

NCNNs achieve competitive accuracy across multiple benchmarks while using fewer parameters than standard CNN architectures:

- **CIFAR-10**
- **CIFAR-100**
- **MNIST**
- **ImageNet**

The parameter reduction comes from the sparse, structured connectivity imposed by the connectome topology.

## Key Advantages

- **Biological plausibility:** connectivity patterns derived from a real organism's nervous system
- **Neural plasticity:** the connectome block structure permits flexible adaptation during training
- **Robustness:** biologically inspired sparse connectivity provides resilience to perturbations
- **Reduced computational complexity:** fewer parameters and sparser operations compared to fully connected convolutional layers

## Significance

NCNNs extend the connectome-as-architecture paradigm from fully connected and recurrent networks into the convolutional domain. While [DCNs](deep-connectomics-networks.md) and [BPUs](biological-processing-units.md) use connectome wiring for layer-level or recurrent connectivity, NCNNs apply biological topology directly within convolutional filters. This broadens the design space for connectome-inspired architectures.

## Code Availability

Source code is publicly available on GitHub.

## Authors

Dan Su, Liangming Chen, Xiaohao Du, Mei Liu, Long Jin. Applied Soft Computing, 2023.

## See Also

- [Deep Connectomics Networks](deep-connectomics-networks.md)
- [Biological Processing Units](biological-processing-units.md)
- [Neural Circuit Policies](neural-circuit-policies.md)
- [Connectome-Constrained Deep Mechanistic Networks](connectome-constrained-dmn.md)
- [C. elegans Olfactory Circuit ANN](celegans-olfactory-circuit-ann.md)

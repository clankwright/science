# **Brain network science modelling of sparse neural networks enables Transformers and LLMs to perform as fully connected** 

**Yingtao Zhang**[1] _[,]_[2] **, Diego Cerretti**[1] _[,]_[2] **, Jialin Zhao**[1] _[,]_[2] **, Ziheng Liao**[1] _[,]_[2] **, Wenjing Wu**[1] _[,]_[2] **Umberto Michieli**[4] _[,]_[5] **& Carlo Vittorio Cannistraci**[1] _[,]_[2] _[,]_[3] _[∗]_ 

1Center for Complex Network Intelligence (CCNI) _†_ 

2Dept. of Computer Science & Technology, 3School of Biomedical Engineering, Tsinghua University 

4University of Padova, 5Canva Research 

## **Abstract** 

This study aims to enlarge our current knowledge on the application of braininspired network science principles for training artificial neural networks (ANNs) with sparse connectivity. Dynamic sparse training (DST) emulates the synaptic turnover of real brain networks, reducing the computational demands of training and inference in ANNs. However, existing DST methods face difficulties in maintaining peak performance at high connectivity sparsity levels. The CannistraciHebb training (CHT) is a brain-inspired method that is used in DST for growing synaptic connectivity in sparse neural networks. CHT leverages a gradient-free, topology-driven link regrowth mechanism, which has been shown to achieve ultrasparse (1% connectivity or lower) advantage across various tasks compared to fully connected networks. Yet, CHT suffers two main drawbacks: (i) its time complexity is _O_ ( _N · d_[3] )- N node network size, d node degree - hence it can be efficiently applied only to ultra-sparse networks. (ii) it rigidly selects top link prediction scores, which is inappropriate for the early training epochs, when the network topology presents many unreliable connections. Here, we design the first brain-inspired network model - termed bipartite receptive field (BRF) - to initialize the connectivity of sparse artificial neural networks. Then, we propose a matrix multiplication GPU-friendly approximation of the CH link predictor, which reduces the computational complexity to _O_ ( _N_[3] ), enabling a fast implementation of link prediction in large-scale models. Moreover, we introduce the Cannistraci-Hebb training soft rule (CHTs), which adopts a flexible strategy for sampling connections in both link removal and regrowth, balancing the exploration and exploitation of network topology. Additionally, we propose a sigmoid-based gradual density decay strategy, leading to an advanced framework referred to as CHTss. Empirical results show that BRF offers performance advantages over previous network science models. Using 1% of connections, CHTs outperforms fully connected networks in MLP architectures on visual classification tasks, compressing some networks to less than 30% of the nodes. Using 5% of the connections, CHTss outperforms fully connected networks in two Transformer-based machine translation tasks. Finally, with only 30% of the connections, both CHTs and CHTss achieve superior performance over other dynamic sparse training methods, and perform on par with—or even surpass—their fully connected counterparts in language modeling across various sparsity levels within the LLaMA model family. 

> _∗_ Corresponding author: `kalokagathos.agon@gmail.com` 

> _†_ Research Center in Tsinghua Laboratory of Brain and Intelligence (THBI), Department of Psychological and Cognitive Sciences. 

39th Conference on Neural Information Processing Systems (NeurIPS 2025). 

The code is available at: `https://github.com/biomedical-cybernetics/ Cannistraci-Hebb-Training-Soft-Rule-` . 

## **1 Introduction** 

Artificial neural networks (ANNs) have led to significant advances in various fields such as natural language processing, computer vision, and deep reinforcement learning. The most common ANNs consist of several fully connected (FC) layers, which account for a large portion of the total parameters in recent large language models [1, 2]. This dense connectivity poses major challenges during the model training and deployment phases. In contrast, neural networks in the brain inherently exhibit sparse connectivity [3, 4]. This natural design in the brain exploits sparsity, suggesting a model in which the number of connections does not scale quadratically with the number of neurons. This could alleviate computational constraints, enabling more scalable network architectures. 

Dynamic sparse training (DST) [5, 6, 7, 8, 9] has emerged as a promising approach to reduce computational and memory overhead of training deep neural networks while maintaining or even improving model performance. DST is also biologically inspired: it draws an analogy to synaptic turnover [10] in the brain, a fundamental neurobiological process in which synapses are continuously formed, strengthened, weakened, and eliminated over time. This dynamic rewiring enables the brain to adapt, learn, and store memories efficiently while preserving the overall stability of the network. Similarly, in DST, connections are dynamically pruned and regrown throughout training, allowing the network to adapt its connectivity structure in response to learning signals while maintaining a fixed sparsity level. 

Apart from some detailed distinctions, the primary innovation in this field centers on the development of the regrowth criterion. A notable advancement is the gradient-free regrowth method introduced by Cannistraci-Hebb training (CHT) [9]. This method is inspired by epitopological learning—literally meaning ‘new topology’—and is rooted in brain-inspired network science theory [11, 12, 13, 14, 15]. Epitopological learning explores how learning can be implemented on complex networks by changing the shape of their connectivity structure (epitopological plasticity). CHT has demonstrated remarkable advantages in training ultra-sparse ANNs with connectivity levels of 1% or lower, often outperforming fully connected networks in various tasks. However, despite these advances, CHT encounters two major challenges: 1) During dynamic sparse training, its rigid link selection mechanism can lead to _epitopological local minima_ where the sets of removed links and regrown links exhibit significant overlap, severely impedes the exploration of optimal network topologies. 2) The time complexity of the CHT regrowth method, Cannistraci-Hebb 3 on Length 3 paths (CH3-L3p), is _O_ ( _N · d_[3] ), where _N_ represents the number of nodes in the network and _d_ is the average degree. A length 3 path is a walk of three consecutive links. As the network becomes denser, the time complexity approaches _O_ ( _N_[4] ), rendering it impractical for large-scale and higher-density models. 

In this article, we present the **C** annistraci- **H** ebb **T** raining **s** oft rule (CHTs), which introduces several key innovations: 1) To address the issue of epitopological local minima, CHTs employs a multinomial distribution to sample link scores from removal and regrowth metrics, enabling more flexible and effective exploration of network topologies. 2) CHTs incorporates novel substitution node-based link prediction mechanisms, reducing the computational time complexity to _O_ ( _N_[3] ). This improvement makes CHTs scalable to large-scale models with higher network density. 3) CHTs initializes the sparse topologies for bipartite networks with the brain-like receptive field, demonstrating superior performance compared to the traditional Erd˝os–Rényi [5], bipartite small world, and bipartite scalefree model [9]. Additionally, we propose a sigmoid gradual density decay strategy, which, when integrated with CHTs, forms an enhanced framework termed CHTss. This combined approach further optimizes the training process for sparse neural networks. 

To evaluate the effectiveness of the **C** annistraci- **H** ebb **T** raining **s** oft rule with **s** igmoid density decay (CHTss), we conduct extensive experiments across multiple architectures and tasks. Firstly, to assess the basic concept of CHTs, we employ MLPs on benchmark datasets, including MNIST [16], EMNIST [17], and Fashion MNIST [18]. The results show that CHTs performs better than fully connected networks with only 1% of the connections (99% sparsity) in MLPs. Further, to evaluate the end-to-end approach CHTss, we utilize Transformers [19] on machine translation datasets such as Multi30k en-de [20], IWSLT14 en-de [21], and WMT17 en-de [22]. From the experimental results, CHTss surpasses fully connected Transformers while using only 5% of the connections 

2 

**==> picture [397 x 203] intentionally omitted <==**

Figure 1: **Illustration of the CHTs process.** One training iteration follows the steps of (a1) _→_ (b1) _→_ (c1) _→_ (c2) _→_ (d1) _→_ (e). (a1) Network initialization with each of the sandwich layers (bipartite networks connecting layers’ input nodes to their output nodes) being a bipartite receptive field (BRF) network. (a2) BRF network representation with _r_ = 0. (b1) Link removal process. (b2) Formula for determining which links to remove. (c1) Removal of inactive neurons caused by link removal. (c2) Adjust and remove incomplete links caused by inactive neuron removal. (d1) Regrowth of links according to the CH2-L3 node-based soft rule. (d2) Detailed illustration of the CH2-L3 node-based soft rule. (e) Finished state of the network after one iteration. The next iteration repeats the steps (b1) - (e) from this finished state. _A_[˜] indicates the removal set of the iteration and _A[∗]_ is the regrown set. 

on Multi30k and IWSLT, and achieves performance comparable to fully connected LLaMA-60M and LLaMA-130M models on OpenWebText language modeling tasks. Moreover, with 30% of the connections, CHTs even outperforms the fully connected LLaMA-1B counterpart. These findings underscore the potential of CHTs and CHTss in enabling highly efficient and effective large-scale sparse neural network training. 

## **2 Related Work** 

## **2.1 Dynamic sparse training** 

Dynamic sparse training is a subset of sparse training methodologies. Unlike static sparse training methods (also known as pruning at initialization) [23, 24, 25, 26], dynamic sparse training allows for the evolution of network topology during the training process. The pioneering method in this field is Sparse Evolutionary Training (SET) [5], which removes links based on the magnitude of their weights and regrows new links randomly. Subsequent developments have sought to refine and expand upon this concept of dynamic topological evolution. One such advancement was proposed by DeepR [27], a method that adjusts network connections based on stochastic gradient updates combined with a Bayesian-inspired update rule. Another significant contribution is RigL [7], which leverages the gradient information of non-existing links to guide the regrowth of new connections during training. MEST [8] utilizes both gradient and weight magnitude information to selectively remove and randomly regrow new links, analogously to SET. In addition, it introduces an EM&S strategy that allows the model to train at a higher density and gradually converge to the target sparsity. The Top-KAST [6] method maintains constant sparsity throughout training by selecting the top _K_ parameters based on parameter magnitude at each training step and applying gradients to a broader subset _B_ , where _B ⊃ A_ . To avoid settling on a suboptimal sparse subset, Top-KAST also introduces an auxiliary exploration loss that encourages ongoing adaptation of the mask. Additionally, sRigL [28] adapts the principles of RigL to semi-structured sparsity, facilitating the training of vision models from scratch with actual speed-ups during training phases. Despite these advancements, the stateof-the-art method remains RigL-based, yet it is not fully sparse in backpropagation, necessitating 

3 

the computation of gradients for non-existing links. Addressing this limitation, Zhang et al. [9] propose CHT, a dynamic sparse training methodology that adopts a gradient-free regrowth strategy that relies solely on topological information (network shape intelligence), achieving an ultra-sparse configuration that surpasses fully connected networks in some tasks. Some extra related works of DST are provided in Appendix M. 

## **2.2 Cannistraci-Hebb Theory and Network Shape Intelligence** 

As the SOTA gradient-free link regrown method, CHT [9] originates from a brain-inspired network science theory. Drawn from neurobiology, Hebbian learning was introduced in 1949 [29] and can be summarized in the axiom: “neurons that fire together wire together.” This could be interpreted in two ways: changing the synaptic weights (weight plasticity) and changing the shape of synaptic connectivity [11, 12, 13, 14, 15]. The latter is also called _epitopological plasticity_ [11] because plasticity means “to change shape,” and _epitopological_ means “via a new topology.” _Epitopological Learning_ (EL) [12, 13, 14] is derived from this second interpretation of Hebbian learning and studies how to implement learning on networks by changing the shape of their connectivity structure. One way to implement EL is via link prediction, which predicts the existence and likelihood of each nonobserved link in a network. CH3-L3 is one of the best-performing and most robust network automata, belonging to the Cannistraci-Hebb (CH) theory [30], which can automatically evolve the network topology starting from a given structure. The rationale is that, in any complex network with local-community organization, the cohort of nodes tends to be co-activated (fire together) and to learn by forming new connections between them (wire together) because they are topologically isolated in the same local community [30]. This minimization of the external links induces a topological isolation of the local community, which is equivalent to forming a barrier around it. The external barrier is fundamental to maintaining and reinforcing the signaling in the local community, inducing the formation of new links that participate in epitopological learning and plasticity. 

## **3 Cannistraci-Hebb training soft rule with sigmoid gradual density decay** 

## **3.1 Soft removal and regrowth.** 

**Definition 1. Epitopological local minima.** In the context of dynamic sparse training methods, we define an epitopological local minima (ELM) as a state where the sets of removed links and regrown links exhibit a significant overlap. 

Let _At_ be the set of existing links in the network at the training step _t_ . Let _A_[˜] _t_ be the set of removal links and _A[∗] t_[be the set of regrown links.][The overlap set between removed and regrown links at] step _t_ can be quantified as _Ot_ = _A_[˜] _t ∩ A[∗] t_[.][An ELM occurs if the size of] _[ O][t]_[at step] _[ t]_[ is significantly] large compared to the size of _A[∗] t_[, indicating a high probability of the same links being removed and] regrown repeatedly throughout the subsequent training steps. This can be formally represented as _|Ot|_[This definition is] _|A[∗] t[|][≥][θ]_[, where] _[ θ]_[ is a predefined threshold close to 1, indicating strong overlap.] essential for the understanding of CHT, as evidenced by the article [9] indicating that the overlap rate between removed and regrown links becomes significantly high within just a few epochs, leading to rapid topological convergence towards the ELM. Previously, CHT implemented a topological early stop strategy to avoid predicting the same links iteratively. However, it will stop the topological exploration very fast and potentially trap the model within the ELM. 

In this article, we adopt a probabilistic approach where the regrowth process is modeled as sampling from a _{_ 0 _,_ 1 _}_ multinomial distribution, with probabilities determined by link prediction scores, thereby introducing a "soft sampling" mechanism. Under this formulation, each mask value is not rigidly dictated by the link prediction score; instead, low-score links can still be selected with lower probability, facilitating escape from epitopological local minima (ELM). 

To demonstrate that soft sampling effectively balances exploration and exploitation, we evaluate its behavior in Figure 3, which presents the impact of varying softness levels during training of LLaMA-60M for 5000 steps under 90% sparsity. We compare the in-time over-parameterization (ITOP) rate [31], which quantifies the cumulative proportion of links activated throughout training. As shown, deterministic regrowth leads to rapid topological convergence after approximately 1000 

4 

steps, indicating that it becomes trapped in an ELM without further exploration. Random regrowth, while capable of escaping ELMs by introducing new connections, fails to exploit the underlying topological structure effectively. In contrast, soft regrowth achieves a balance by both exploiting the current topology and exploring new link combinations probabilistically. This balance enables a more appropriate exploration of the connectivity space, ultimately leading to superior performance, as evidenced by the results. 

**Link removal alternating from weight magnitude and relative importance.** We illustrate the link removal part of CHTs in Figure 1b1) and b2). We employ two methods, Weight Magnitude (WM) _|_ **W** _|_ and Relative Importance (RI) [32], to remove the connections during dynamic sparse training. Given an input node _i_ and an output node _j_ connected with weight _Wij_ , we define the relative importance _RIij_ as: 

**==> picture [259 x 25] intentionally omitted <==**

As illustrated in Equation 1, RI assesses connections by normalizing the absolute weight of links that share the same input or output neurons. This method does not require calibration data and can perform comparably to the baseline post-training pruning methods like sparsegpt [33] and wanda [34]. Generally, WM and RI are straightforward, effective, and quick to implement in DST for link removal, but give different directions for network percolation. WM prioritizes links with higher weight magnitudes, leading to rapid network percolation, whereas RI inherently values links connected to lower-degree nodes, thus maintaining a higher active neuron post-percolation (ANP) rate. The ANP rate is the ratio of the number of active neurons after training over the original number of neurons before training. These methods are equally valid but cater to different scenarios. For instance, using RI significantly improves results on the Fashion MNIST dataset compared to WM, whereas WM performs better on the MNIST and EMNIST datasets. 

**Soft link removal.** In the early stages of training, both WM and RI are not reliable due to the model’s underdevelopment. Therefore, rather than strictly selecting top values based on WM and RI, we also sample links from a multinomial distribution using an importance score calculated by the removal metrics. The final formula for link removal is defined in Equation 2. 

**==> picture [323 x 29] intentionally omitted <==**

Here, _α_ determines the removal strategy, shifting from weight magnitude ( _α_ = 1) to relative importance ( _α_ = 0). In all experiments, we only evaluate these two _α_ values. _δ_ adjusts the softness of the sampling process. As training progresses and weights become more reliable, we adaptively increase _δ_ from 0.5 to 0.75 to refine the sampling strategy and improve model performance. These settings are constant for all the experiments in this article. 

**Node-based link regrowth.** Another significant challenge for CHT lies in the time complexity of link prediction. In the original CHT framework [9], the path-based CH3-L3p metric is employed for link regrowth, as discussed in Appendix C. However, this method incurs a high computational cost due to the need to compute and store all length-three paths, resulting in a time complexity of _O_ ( _N · d_[3] ), where _N_ is the number of nodes and _d_ is the network’s average degree. This complexity is prohibitive for large models with numerous nodes and higher-density layers. 

To address this issue, we introduce a more efficient, node-based paradigm that eliminates the reliance on length-three paths between seed nodes. Instead, this approach focuses on the 

**==> picture [198 x 112] intentionally omitted <==**

Figure 2: **One-time Link Prediction Runtime Performance Evaluation** of node-based and pathbased methods across varying densities and network sizes. In (a), the network size is fixed at 1024 × 1024, while in (b), the density is fixed at 5%. 

5 

common neighbors of seed nodes. The node-based version of CH3-L3p, denoted as CH2-L3n, also depends on the internal local community links (iLCL, the links between the common neighbors [30]) to enhance the expressiveness of the formula. This variant is formulated as: 

**==> picture [257 x 27] intentionally omitted <==**

Here, _u_ and _v_ denote the seed nodes, while _z_ is the common neighbor on the L3 path [30], a walk of three consecutive links that connects _u_ to _v_ via two of those intermediate nodes. The terms _di[∗] z[de][∗] z_ represent the number of internal local community links (iLCL) and external local community links (eLCL) of node _i_ , with a default increment of 1 to prevent division by zero. The detailed explanation of iLCL and eLCL can be found in Appendix C. The pseudocode is provided in the supplementary material. The new node-based variant, CH2-L3n, reduces the computational complexity to _O_ ( _N_[3] ) and enables efficient matrix-based computations on GPUs. We evaluate the one-time link prediction runtime performance of both CH3-L3p and CH2-L3n across different network sizes and sparsity levels, as illustrated in Figure 2. The red and green lines depict the actual runtime for the path-based and node-based methods, respectively. The results reveal that the node-based version achieves significantly faster runtime performance compared to the path-based methods. Furthermore, the node-based method demonstrates consistently stable runtime across diverse network sizes and density levels, making it an ideal link prediction as the CH theory-based link regrowth component of CHTs in dynamic sparse training for large-scale models. 

## **3.2 Bipartite receptive field network modeling.** 

In this article, we propose the Bipartite Receptive Field (BRF) network model, a novel sparse topological initialization method capable of generating brain-network-like receptive field connectivity. The principal topological initialization approaches for dynamic sparse training are grounded in network science theory, where three basic generative models for monopartite sparse artificial complex networks are the Erd˝os-Rényi (ER) model [35], the Watts-Strogatz (WS) model [36], and the BarabásiAlbert (BA) model [37], which are not brain-inspired. Since the standard WS and BA models are not directly designed for bipartite networks, they were recently extended [9] into their bipartite counterparts and term as Bipartite Small-World (BSW) and Bipartite Scale-Free (BSF), respectively. BSW generally outperforms BSF for dynamic sparse training (see Appendix D). 

During BSW initialization, each output node is connected to its spatially nearest input nodes. This spatially local connectivity pattern aligns with the concept of receptive fields observed in biological neural systems, where neurons respond selectively to localized regions of input space. However, the rewiring process of BSW does not follow brain mechanisms: it simply deletes a set of links from the closer input nodes to rewire them uniformly at random anywhere on the input layer. Conversely, the random allocation of connectivity in brain network topologies is guided by the spatial distance of the neurons [38, 39]. Unlike the BSW model that introduces random connectivity by a rewiring process, which cannot control the extent of spatial-dependent randomness injected in the topology, the BRF model directly generates a connectivity with a customized level of spatial-dependent randomness using a parameter _r ∈_ [0 _,_ 1]. A low value of _r_ results in links that are densely clustered around the diagonal, while a higher value of _r_ leads to less clustered connectivity patterns, which tend to be uniformly at random only for _r_ = 1. Specifically, a bipartite adjacency matrix with links near the diagonal indicates that adjacent nodes from the two layers are linked, whereas links far from the diagonal correspond to more distant node pairs. The mathematical formula and implementation are detailed in Appendix D. 

Furthermore, the degree distribution of the BSW model is fixed to the same value for all the nodes at the same layer before rewiring, whereas after rewiring, the degree distribution is not conserved, and the more links it rewires, the more it will be similar to the ER model. Instead, the BRF model has the important property to conserve the degree distribution of the output layer, which ensures that it maintains a designed receptive field connectivity. This means that an initialization setting of the BRF model is the output degree distribution, which in this study we consider fixed or uniformly at random, as shown in Appendix D. We also conduct a sensitivity test of the influence of _r_ in Figure 7a). It should be noted that when _r_ = 0, the network is equivalent to the BSW with _β_ = 0, and when _r_ = 1, the network becomes an ER network. The examples of the adjacency matrices of BSF, BSW, and BRF are shown in Figure 5. 

6 

## **3.3 Sigmoid Gradual Density Decay** 

As demonstrated in GraNet [40] and MEST _EM_ & _S_ [8], incorporating a density decrease strategy can significantly improve the performance of dynamic sparse training. In MEST _EM_ & _S_ , the density is reduced discretely at predefined epochs. In GraNet, the network evolution process consists of three steps: pruning, link removal, and link regrowth. The method first prunes the network to reduce the density, followed by removing and regrowing an equivalent number of links under the updated density. The density decrease in GraNet follows the same approach as Gradual Magnitude Pruning (GMP) [41], which adheres to a cubic function. 

However, this density decay scheduler exhibits a sharp decline in the initial stages of training, which risks pruning a substantial fraction of weights before the model has sufficiently learned. To enable a smoother decay during the pruning stage, we propose a sigmoid-based gradual density decrease strategy, defined as: 

**==> picture [288 x 32] intentionally omitted <==**

where _t ∈{t_ 0 _, t_ 0 + ∆ _t, . . . , t_ 0 + _n_ ∆ _t}_ , _si_ is the initial sparsity, _sf_ is the target sparsity, _t_ 0 is the starting epoch of gradual pruning, _tf_ is the end epoch of gradual pruning, and ∆ _t_ is the pruning frequency. _k_ controls the curvature of the decrease. We set _k_ =6 for all the experiments in this article. This strategy ensures a smoother initial pruning phase, allowing the model to warm up and stabilize before undergoing significant pruning, thereby enhancing training stability and performance. We explain how to adjust the training FLOPs of sigmoid density decay to the same as cubic decay in Appendix I. 

In addition to refining the decay function, we replace the weight magnitude criterion used in the original GMP and GraNet processes with relative importance (RI). This adjustment is motivated by prior work [32], which has shown that RI provides a significant performance advantage over weight magnitude, particularly when pruning models initialized with high density. 

## **4 Experiments** 

## **4.1 Experimental Setup** 

We evaluate the performance of CHTs using MLPs for image classification tasks on the MNIST [16], Fashion MNIST [18], EMNIST [17], and CIFAR10 [42] datasets. To further validate our approach, we apply the sigmoid gradual density decay strategy to Transformers for machine translation tasks on the Multi30k en-de [20], IWSLT14 en-de [21], and WMT17 en-de [22] datasets. Additionally, we conduct language modeling experiments using the OpenWebText dataset [43] and evaluate zero-shot performance on the GLUE [44] and SuperGLUE [45] benchmark with LLaMA-60M, 130M, and 1B models [1]. For MLP training, we sparsify all layers except the final layer, as ultra-sparsity in the output layer may lead to disconnected neurons, and the connections in the final layer are relatively minor compared to the previous layers. For Transformers and LLaMA models, we apply dynamic sparse training (DST) to all linear layers, excluding the embedding and final generator layer. Detailed hyperparameter settings for each experiment are provided in Tables 4, 5, and 6. We also conduct a series of ablation and sensitivity tests on the components proposed in this article for CHTs and CHTss in Appendix H. 

Table 1: Performance comparison of different sparsity dynamic sparse training methods on the CIFAR10 dataset trained on an MLP at 99% sparsity. The density decay of GMP, GraNet, and CHTss starts with a sparsity of 50%. ACC represents accuracy, and ANP denotes the active neuron percolation rate, indicating the final size of the network. The lowest anp rate and the best dynamic sparse training method are highlighted in bold, and performances surpassing the fully connected model are marked with “*". The results present a standard error taken over three seeds of the experiments. 

||Method<br>FC|ACC (%)<br>62.85_±_0.16|Comparison to FC ANP<br>–<br>–|Comparison to FC ANP<br>–<br>–|
|---|---|---|---|---|
||CHTs|**69.97**_±_**0.06***|**+11.33%**|**54%**|
||CHT<br>RigL<br>SET|59.10_±_0.06<br>63.90_±_0.19*<br>62.70_±_0.11|-5.97%<br>+1.67%<br>-0.24%|96%<br>59%<br>100%|
||CHTss|**71.29**_±_**0.14***|**+13.43%**|63%|
||GraNet|69.31_±_0.17*|+10.28%|**61%**|
||GMP|65.11_±_0.11*|+3.60%|75%|



7 

Table 2: Performance comparison on machine translation tasks of Multi30k, IWSLT, and WMT with varying final sparsity levels. The scores indicate BLEU scores, which is the higher the better. CHTs (GMP) represents CHTs with GMP’s density decay strategy. Bold values denote the best performance among fixed sparsity DST methods or density decay DST methods. The performances that surpass the fully connected model are marked with “*". The density decay of GMP, GraNet, and CHTss starts with a sparsity of 50%. The scores are averaged over three seeds ± their standard error. 

|Method|Multi30k<br>95%<br>90%|IWSLT<br>95%<br>90%|WMT<br>95%<br>90%|
|---|---|---|---|
|FC|31.38 ± 0.38|24.48 ± 0.30|25.22|
|SET<br>RigL<br>CHT<br>CHTs|28.99 ± 0.28<br>29.73 ± 0.10<br>29.94 ± 0.27<br>30.26 ± 0.34<br>27.79<br>28.38<br>28.94 ± 0.57<br>29.81 ± 0.37|18.53 ± 0.05<br>20.13 ± 0.08 <br>20.53 ± 0.21<br>21.52 ± 0.15 <br>18.59<br>19.91<br>21.15 ± 0.10<br>21.92 ± 0.17|20.19 ± 0.12 21.52 ± 0.28<br> 20.71 ± 0.21 22.22 ± 0.10<br>19.03<br>21.08<br> 20.94 ± 0.63 22.40 ± 0.06|
|MEST_EM_&_S_<br>GMP<br>GraNet<br>CHTss|28.89± 0.26<br>30.04 ± 0.52<br>30.51 ± 0.82<br>30.49 ± 0.40<br>31.31 ± 0.31<br>31.62 ± 0.48*<br>**32.03 ± 0.29* 32.86 ± 0.16* **|19.56 ± 0.10<br>21.05 ± 0.21 <br>22.76 ± 0.82<br>22.82 ± 0.53 <br>22.53 ± 0.12<br>22.43 ± 0.09 <br> **24.51 ± 0.02* 24.31 ± 0.04 **|20.70 ± 0.07 22.22 ± 0.10<br> 22.47 ± 0.10 23.37 ± 0.08<br> 22.51 ± 0.21 23.46 ± 0.09<br> **23.73 ± 0.43 24.61 ± 0.14**|



**Baseline Methods.** We compare our method with the baseline approaches in the literature. We divide the dynamic sparse training (DST) methods into two categories: fixed sparsity DST and density decay DST. For the fixed sparsity DST, we compare CHTs with the SET [5], RigL [7], and CHT [9], and for the density decay DST methods, we compare CHTss with MEST _EM_ & _S_ [8], GMP [41], and GraNet [40]. We explain the detailed implementations and the reason we split GMP as a type of DST method in Appendix G. 

## **4.2 MLP for image classification** 

**Main results.** In the MLP evaluation, we aim to assess the fundamental capacity of DST methods to train the fully connected module, which is common across many ANNs. The sparse topological initialization of CHT and CHTs is CSTI [9] since the input bipartite layer can directly receive information from the input pixels. Table 7 displays the performance of DST methods compared to their fully connected counterparts across three basic datasets of MNIST, Fashion MNIST, and EMNIST. The DST methods are tested at 99% sparsity. As shown in Table 7, both of the two regrowth methods of CHTs outperform the other fixed sparsity DST methods. Notably, the path-based CH3-L3p outperforms the fully connected one in all the datasets. The node-based CH2-L3n also achieves comparable performance on these basic datasets. However, considering the running time of CH3-L3p is unacceptable, especially in large scale models, in the rest of the experiments of this article, we only use CH2-L3n as the representative method to regrow new links. Table 1 presents a comparison of fixed-sparsity dynamic sparse training (DST) methods against the fully connected (FC) baseline. Notably, CHTs outperforms all other DST methods and achieve an 11% improvement in accuracy over the fully connected model. In addition, we present the active neuron post-percolation rate (ANP) for each method in Table 7 and Table 1. It is evident that CHTs adaptively percolates the network more effectively while retaining performance. 

## **4.3 Transformer on Machine Translation** 

We assess the Transformer’s performance on a classic machine translation task across three datasets. We take the best performance of the model on the validation set and report the BLEU on the test set. Beam search, with a beam size of 2, is employed to optimize the evaluation process. In our evaluation, CHTs and CHTss configure the topology of each layer using the BRF model, employ a weight magnitude soft link removal technique, and regrow new links using CH2-L3n-soft. Additionally, we apply an adjusted network percolation technique to the Transformer, as detailed in Appendix F. The findings, presented in Table 2, demonstrate that 1) CHTs surpasses other fixed density DST methods on all the sparsity scenarios except for Multi30K. 2) Incorporating the sigmoid density decrease, CHTss outperforms even the fully connected ones with only 5% density on Multi30K and IWSLT. 

8 

Table 3: **Validation perplexity of different dynamic sparse training (DST) methods on OpenWebText using LLaMA-60M, LLaMA-130M, and LLaMA-1B across varying sparsity levels.** Bold values denote the best performance among fixed sparsity DST methods or density decay DST methods. Lower perplexity corresponds to better model performance. GMP, GraNet, and CHTss are run with an initial sparsity of _si_ = 0 _._ 5. The test of CHT over LLaMA-1B is missing due to its excessive runtime. The performances that surpass the fully connected model are marked with “*". 

|Method|LLaMA-60M|LLaMA-130M|LLaMA-1B|
|---|---|---|---|
|||||
||70%<br>80%<br>90%<br>95%|70%<br>80%<br>90%<br>95%|70%|
|||||
|FC|26.56|19.27|14.62|
|||||
|SET<br>RigL<br>CHT<br>CHTs|31.77<br>30.69<br>35.26<br>39.70<br>39.96<br>41.33<br>45.34<br>51.49<br>31.02<br>32.99<br>35.01<br>41.87<br>**28.12**<br>**29.84**<br>**33.03**<br>**36.47**|20.82<br>22.02<br>24.73<br>28.37<br>25.85<br>66.35<br>37.18<br>49.39<br>21.02<br>22.82<br>26.27<br>30.01<br>**20.10**<br>**21.33**<br>**23.71**<br>**26.45**|16.37<br>149.17<br>–<br>**14.53***|
|||||
|MEST<br>GMP<br>GraNet<br>CHTss|28.26<br>29.94<br>33.60<br>37.87<br>29.22<br>30.59<br>33.68<br>39.00<br>30.55<br>31.51<br>33.76<br>39.98<br>**27.62**<br>**29.00**<br>**31.42**<br>**35.10**|21.32<br>22.21<br>24.98<br>27.96<br>20.49<br>22.28<br>23.61<br>27.16<br>22.84<br>29.03<br>26.81<br>61.31<br>**19.85**<br>**20.70**<br>**22.51**<br>**25.07**|60.36<br>31.76<br>79.44<br>**15.41**|



## **4.4 Natural Language Generation** 

**Language modeling.** We utilize the LLaMA model family [1] across 60M, 130M, and 1B architecture as the baseline for our language generation experiments. We follow the experiment setup from [46] detailed in Table 6. To ensure that the FLOPs are the same for all the density decrease methods, for CHTss, we implement a half-step strategy for the density decay steps to make sure the sparsity across the training steps is the same as GMP and GraNet. Table 3 shows the validation perplexity results of each algorithm across different density levels on LLaMA-60M and LLaMA-130M. CHTs stably outperforms SET, CHT, and RigL, while CHTss are constantly better than GraNet and GMP. At 70% sparsity, CHTss is already able to perform comparably to the fully connected model. It is important to note that RigL and GraNet exhibit subpar performance in this evaluation due to the use of bfloat16 precision in this configuration. This lower precision adversely impacts gradient accuracy, particularly in the early stages of training. Since both RigL and GraNet rely on gradient information to regrow new links, the imprecise gradients lead to regrowing the wrong links, thereby hindering their performance. To further validate this observation, we conduct additional experiments under FP32 precision, presented in Table 10. The results confirm that RigL and GraNet perform significantly better under high-precision training, although they still fall behind CHTs and CHTss. Importantly, industry trends are increasingly moving toward low-precision training and inference to improve efficiency [47, 48]. In this context, CHTs and CHTss demonstrate greater robustness compared to RigL and GraNet, making them better aligned with practical deployment needs under reduced-precision settings. 

## **5 Conclusion and Discussion** 

We advance current knowledge in brain-inspired dynamic sparse training, proposing the CannistraciHebb Training soft rule with sigmoid gradual density decay (CHTss). First, we introduce a matrix multiplication mathematical formula for GPU-friendly approximation of the CH link predictor. This significantly reduces the computational complexity of CHT and speeds up the running time, enabling the implementation of CHTs in large-scale models. Second, we propose a Cannistraci-Hebb training soft rule (CHTs), which innovatively utilizes a soft sampling rule for both removal and regrowth links, striking a balance for epitopological exploration and exploitation. Third, we propose the Bipartite Receptive Field (BRF) model to initialize the sparse network topology in a brain-inspired manner, enabling the network to preferentially capture spatially closer features. Finally, in transformer-based models, we integrate CHTs with a sigmoid gradual density decay strategy (CHTss). Empirically, CHTs demonstrate a remarkable ability to achieve ultra-sparse configurations—up to 99% sparsity in MLPs for image classification—surpassing fully connected networks. Notably, the regrowth process under CHTs does not rely on gradients. With the sigmoid gradual density decay, CHTss surpasses 

9 

the fully connected Transformer using only 5% density and achieves comparable language modeling performance. Moreover, CHTs and CHTss achieve language modeling performance comparable to the fully connected LLaMA-60M and LLaMA-130M models, while CHTs even surpasses the fully connected LLaMA-1B counterpart. We describe the limitations of this study and future works in Appendix A. 

## **Acknowledgements** 

This work was supported by the Zhou Yahui Chair Professorship award of Tsinghua University (to CVC), the National High-Level Talent Program of the Ministry of Science and Technology of China (grant number 20241710001, to CVC). 

## **References** 

- [1] Hugo Touvron, Thibaut Lavril, Gautier Izacard, Xavier Martinet, Marie-Anne Lachaux, Timothée Lacroix, Baptiste Rozière, Naman Goyal, Eric Hambro, Faisal Azhar, et al. Llama: Open and efficient foundation language models. _arXiv preprint arXiv:2302.13971_ , 2023. 

- [2] Susan Zhang, Stephen Roller, Naman Goyal, Mikel Artetxe, Moya Chen, Shuohui Chen, Christopher Dewan, Mona Diab, Xian Li, Xi Victoria Lin, et al. Opt: Open pre-trained transformer language models. _arXiv preprint arXiv:2205.01068_ , 2022. 

- [3] David A Drachman. Do we have brain to spare?, 2005. 

- [4] Christopher A Walsh. Peter huttenlocher (1931–2013). _Nature_ , 502(7470):172–172, 2013. 

- [5] Decebal Constantin Mocanu, Elena Mocanu, Peter Stone, Phuong H Nguyen, Madeleine Gibescu, and Antonio Liotta. Scalable training of artificial neural networks with adaptive sparse connectivity inspired by network science. _Nature communications_ , 9(1):1–12, 2018. 

- [6] Siddhant Jayakumar, Razvan Pascanu, Jack Rae, Simon Osindero, and Erich Elsen. Top-kast: Top-k always sparse training. _Advances in Neural Information Processing Systems_ , 33:20744– 20754, 2020. 

- [7] Utku Evci, Trevor Gale, Jacob Menick, Pablo Samuel Castro, and Erich Elsen. Rigging the lottery: Making all tickets winners. In _Proceedings of the 37th International Conference on Machine Learning, ICML 2020, 13-18 July 2020, Virtual Event_ , volume 119 of _Proceedings of Machine Learning Research_ , pages 2943–2952. PMLR, 2020. 

- [8] Geng Yuan, Xiaolong Ma, Wei Niu, Zhengang Li, Zhenglun Kong, Ning Liu, Yifan Gong, Zheng Zhan, Chaoyang He, Qing Jin, et al. Mest: Accurate and fast memory-economic sparse training framework on the edge. _Advances in Neural Information Processing Systems_ , 34:20838–20850, 2021. 

- [9] Yingtao Zhang, Jialin Zhao, Wenjing Wu, Alessandro Muscoloni, and Carlo Vittorio Cannistraci. Epitopological learning and cannistraci-hebb network shape intelligence brain-inspired theory for ultra-sparse advantage in deep learning. In _The Twelfth International Conference on Learning Representations_ , 2024. 

- [10] Anthony Holtmaat and Karel Svoboda. Experience-dependent structural synaptic plasticity in the mammalian brain. _Nature Reviews Neuroscience_ , 10(9):647–658, 2009. 

- [11] Carlo Vittorio Cannistraci, Gregorio Alanis-Lobato, and Timothy Ravasi. From link-prediction in brain connectomes and protein interactomes to the local-community-paradigm in complex networks. _Scientific reports_ , 3(1):1613, 2013. 

- [12] Simone Daminelli, Josephine Maria Thomas, Claudio Durán, and Carlo Vittorio Cannistraci. Common neighbours and the local-community-paradigm for topological link prediction in bipartite networks. _New Journal of Physics_ , 17(11):113037, nov 2015. 

10 

- [13] Claudio Durán, Simone Daminelli, Josephine M Thomas, V Joachim Haupt, Michael Schroeder, and Carlo Vittorio Cannistraci. Pioneering topological methods for network-based drug–target prediction by exploiting a brain-network self-organization theory. _Briefings in Bioinformatics_ , 19(6):1183–1202, 04 2017. 

- [14] Carlo Vittorio Cannistraci. Modelling self-organization in complex networks via a braininspired network automata theory improves link reliability in protein interactomes. _Sci Rep_ , 8(1):2045–2322, 10 2018. 

- [15] Vaibhav et al Narula. Can local-community-paradigm and epitopological learning enhance our understanding of how local brain connectivity is able to process, learn and memorize chronic pain? _Applied network science_ , 2(1), 2017. 

- [16] Yann LeCun, Léon Bottou, Yoshua Bengio, and Patrick Haffner. Gradient-based learning applied to document recognition. _Proc. IEEE_ , 86(11):2278–2324, 1998. 

- [17] Gregory Cohen, Saeed Afshar, Jonathan Tapson, and Andre Van Schaik. Emnist: Extending mnist to handwritten letters. In _2017 international joint conference on neural networks (IJCNN)_ , pages 2921–2926. IEEE, 2017. 

- [18] Han Xiao, Kashif Rasul, and Roland Vollgraf. Fashion-mnist: a novel image dataset for benchmarking machine learning algorithms. _arXiv preprint arXiv:1708.07747_ , 2017. 

- [19] Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Łukasz Kaiser, and Illia Polosukhin. Attention is all you need. _Advances in neural information processing systems_ , 30, 2017. 

- [20] Desmond Elliott, Stella Frank, Khalil Sima’an, and Lucia Specia. Multi30k: Multilingual english-german image descriptions. In _Proceedings of the 5th Workshop on Vision and Language_ , pages 70–74. Association for Computational Linguistics, 2016. 

- [21] Mauro Cettolo, Jan Niehues, Sebastian Stüker, Luisa Bentivogli, and Marcello Federico. Report on the 11th IWSLT evaluation campaign. In Marcello Federico, Sebastian Stüker, and François Yvon, editors, _Proceedings of the 11th International Workshop on Spoken Language Translation: Evaluation Campaign_ , pages 2–17, Lake Tahoe, California, December 4-5 2014. 

- [22] Ondˇrej Bojar, Rajen Chatterjee, Christian Federmann, Yvette Graham, Barry Haddow, Shujian Huang, Matthias Huck, Philipp Koehn, Qun Liu, Varvara Logacheva, et al. Findings of the 2017 conference on machine translation (wmt17). Association for Computational Linguistics, 2017. 

- [23] Ameya Prabhu, Girish Varma, and Anoop Namboodiri. Deep expander networks: Efficient deep networks from graph theory. In _Proceedings of the European Conference on Computer Vision (ECCV)_ , pages 20–35, 2018. 

- [24] Namhoon Lee, Thalaiyasingam Ajanthan, and Philip H. S. Torr. Snip: single-shot network pruning based on connection sensitivity. In _7th International Conference on Learning Representations, ICLR 2019, New Orleans, LA, USA, May 6-9, 2019_ . OpenReview.net, 2019. 

- [25] Tri Dao, Beidi Chen, Nimit S Sohoni, Arjun Desai, Michael Poli, Jessica Grogan, Alexander Liu, Aniruddh Rao, Atri Rudra, and Christopher Ré. Monarch: Expressive structured matrices for efficient and accurate training. In _International Conference on Machine Learning_ , pages 4690–4721. PMLR, 2022. 

- [26] James Stewart, Umberto Michieli, and Mete Ozay. Data-free model pruning at initialization via expanders. In _Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition_ , pages 4518–4523, 2023. 

- [27] Guillaume Bellec, David Kappel, Wolfgang Maass, and Robert Legenstein. Deep rewiring: Training very sparse deep networks. _arXiv preprint arXiv:1711.05136_ , 2017. 

- [28] Mike Lasby, Anna Golubeva, Utku Evci, Mihai Nica, and Yani Ioannou. Dynamic sparse training with structured sparsity. _arXiv preprint arXiv:2305.02299_ , 2023. 

- [29] Donald Hebb. The organization of behavior. emphnew york, 1949. 

11 

- [30] Alessandro Muscoloni, Umberto Michieli, Yingtao Zhang, and Carlo Vittorio Cannistraci. Adaptive network automata modelling of complex networks. _Preprints_ , May 2022. 

- [31] Shiwei Liu, Lu Yin, Decebal Constantin Mocanu, and Mykola Pechenizkiy. Do we actually need dense over-parameterization? in-time over-parameterization in sparse training. In _International Conference on Machine Learning_ , pages 6989–7000. PMLR, 2021. 

- [32] Yingtao Zhang, Haoli Bai, Haokun Lin, Jialin Zhao, Lu Hou, and Carlo Vittorio Cannistraci. Plug-and-play: An efficient post-training pruning method for large language models. In _The Twelfth International Conference on Learning Representations_ , 2024. 

- [33] Elias Frantar and Dan Alistarh. Massive language models can be accurately pruned in one-shot. _arXiv preprint arXiv:2301.00774_ , 2023. 

- [34] Mingjie Sun, Zhuang Liu, Anna Bair, and J Zico Kolter. A simple and effective pruning approach for large language models. _arXiv preprint arXiv:2306.11695_ , 2023. 

- [35] Paul Erd˝os and Alfréd Rényi. On the evolution of random graphs. _Publication of the Mathematical Institute of the Hungarian Academy of Sciences_ , 5:17–60, 1960. 

- [36] Duncan J Watts and Steven H Strogatz. Collective dynamics of ’small-world’ networks. _Nature_ , 393(6684):440–442, 1998. 

- [37] Albert-László Barabási and Réka Albert. Emergence of scaling in random networks. _science_ , 286(5439):509–512, 1999. 

- [38] Maria Ercsey-Ravasz, Nikola T Markov, Christophe Lamy, David C Van Essen, Kenneth Knoblauch, Zoltán Toroczkai, and Henry Kennedy. A predictive network model of cerebral cortical connectivity based on a distance rule. _Neuron_ , 80(1):184–197, 2013. 

- [39] Danielle S Bassett and Edward Bullmore. Small-world brain networks. _The Neuroscientist_ , 12(6):512–523, 2006. 

- [40] Shiwei Liu, Tianlong Chen, Xiaohan Chen, Zahra Atashgahi, Lu Yin, Huanyu Kou, Li Shen, Mykola Pechenizkiy, Zhangyang Wang, and Decebal Constantin Mocanu. Sparse training via boosting pruning plasticity with neuroregeneration. _Advances in Neural Information Processing Systems_ , 34:9908–9922, 2021. 

- [41] Michael Zhu and Suyog Gupta. To prune, or not to prune: exploring the efficacy of pruning for model compression, 2017. 

- [42] Alex Krizhevsky. Learning multiple layers of features from tiny images. pages 32–33, 2009. 

- [43] Aaron Gokaslan and Vanya Cohen. Openwebtext corpus. `http://Skylion007.github.io/ OpenWebTextCorpus` , 2019. 

- [44] Alex Wang, Amanpreet Singh, Julian Michael, Felix Hill, Omer Levy, and Samuel R. Bowman. Glue: A multi-task benchmark and analysis platform for natural language understanding, 2019. 

- [45] Alex Wang, Yada Pruksachatkun, Nikita Nangia, Amanpreet Singh, Julian Michael, Felix Hill, Omer Levy, and Samuel R. Bowman. Superglue: A stickier benchmark for general-purpose language understanding systems, 2020. 

- [46] Jiawei Zhao, Zhenyu Zhang, Beidi Chen, Zhangyang Wang, Anima Anandkumar, and Yuandong Tian. Galore: Memory-efficient llm training by gradient low-rank projection, 2024. 

- [47] Pengle Zhang, Jia Wei, Jintao Zhang, Jun Zhu, and Jianfei Chen. Accurate int8 training through dynamic block-level fallback. _arXiv preprint arXiv:2503.08040_ , 2025. 

- [48] Haokun Lin, Haobo Xu, Yichen Wu, Jingzhi Cui, Yingtao Zhang, Linzhan Mou, Linqi Song, Zhenan Sun, and Ying Wei. Duquant: Distributing outliers via dual transformation makes stronger quantized llms. _Advances in Neural Information Processing Systems_ , 37:87766–87800, 2024. 

12 

- [49] Vithursan Thangarasa, Abhay Gupta, William Marshall, Tianda Li, Kevin Leong, Dennis DeCoste, Sean Lie, and Shreyas Saxena. Spdf: Sparse pre-training and dense fine-tuning for large language models. In _Uncertainty in Artificial Intelligence_ , pages 2134–2146. PMLR, 2023. 

- [50] Mark Kurtz, Justin Kopinsky, Rati Gelashvili, Alexander Matveev, John Carr, Michael Goin, William Leiserson, Sage Moore, Bill Nell, Nir Shavit, and Dan Alistarh. Inducing and exploiting activation sparsity for fast inference on deep neural networks. In Hal Daumé III and Aarti Singh, editors, _Proceedings of the 37th International Conference on Machine Learning_ , volume 119 of _Proceedings of Machine Learning Research_ , pages 5533–5543, Virtual, 13–18 Jul 2020. PMLR. 

- [51] P ERDdS and A R&wi. On random graphs i. _Publ. math. debrecen_ , 6(290-297):18, 1959. 

- [52] Ming Li, Run-Ran Liu, Linyuan Lü, Mao-Bin Hu, Shuqi Xu, and Yi-Cheng Zhang. Percolation on complex networks: Theory and application. _Physics Reports_ , 907:1–68, 2021. 

- [53] Hugo Touvron, Louis Martin, Kevin Stone, Peter Albert, Amjad Almahairi, Yasmine Babaei, Nikolay Bashlykov, Soumya Batra, Prajjwal Bhargava, Shruti Bhosale, et al. Llama 2: Open foundation and fine-tuned chat models. _arXiv preprint arXiv:2307.09288_ , 2023. 

- [54] Song Han, Jeff Pool, John Tran, and William Dally. Learning both weights and connections for efficient neural network. _Advances in neural information processing systems_ , 28, 2015. 

- [55] Aleksandra I. Nowak, Bram Grooten, Decebal Constantin Mocanu, and Jacek Tabor. Fantastic weights and how to find them: Where to prune in dynamic sparse training, 2023. 

- [56] Leo Gao, Jonathan Tow, Baber Abbasi, Stella Biderman, Sid Black, Anthony DiPofi, Charles Foster, Laurence Golding, Jeffrey Hsu, Alain Le Noac’h, Haonan Li, Kyle McDonell, Niklas Muennighoff, Chris Ociepa, Jason Phang, Laria Reynolds, Hailey Schoelkopf, Aviya Skowron, Lintang Sutawika, Eric Tang, Anish Thite, Ben Wang, Kevin Wang, and Andy Zou. The language model evaluation harness, 07 2024. 

- [57] Jie Ji, Gen Li, Lu Yin, Minghai Qin, Geng Yuan, Linke Guo, Shiwei Liu, and Xiaolong Ma. Advancing dynamic sparse training by exploring optimization opportunities. In _Proceedings of the 41st International Conference on Machine Learning_ , volume 235 of _Proceedings of Machine Learning Research_ , pages 21606–21619. PMLR, 2024. 

- [58] Alexandra Peste, Eugenia Iofinova, Adrian Vladu, and Dan Alistarh. Ac/dc: Alternating compressed/decompressed training of deep neural networks. _arXiv preprint arXiv:2106.12379_ , 2021. 

- [59] Jonathan Schwarz, Siddhant M. Jayakumar, Razvan Pascanu, Peter E. Latham, and Yee Whye Teh. Powerpropagation: A sparsity inducing weight reparameterisation. _arXiv preprint arXiv:2110.00296_ , 2021. 

- [60] Jie Ji, Gen Li, Jingjing Fu, Fatemeh Afghah, Linke Guo, Xiaoyong Yuan, and Xiaolong Ma. A single-step, sharpness-aware minimization is all you need to achieve efficient and accurate sparse training. In _Advances in Neural Information Processing Systems_ , 2024. 

- [61] Shiwei Liu, Tianlong Chen, Xiaohan Chen, Xuxi Chen, Qiao Xiao, Boqian Wu, Tommi Kärkkäinen, Mykola Pechenizkiy, Decebal Mocanu, and Zhangyang Wang. More convnets in the 2020s: Scaling up kernels beyond 51×51 using sparsity. _arXiv preprint arXiv:2207.03620_ , 2022. 

- [62] Lu Yin, Gen Li, Meng Fang, Li Shen, Tianjin Huang, Zhangyang Wang, Vlado Menkovski, Xiaolong Ma, Mykola Pechenizkiy, and Shiwei Liu. Dynamic sparsity is channel-level sparsity learner. In _Advances in Neural Information Processing Systems_ , 2023. 

- [63] Gen Li, Lu Yin, Jie Ji, Wei Niu, Minghai Qin, Bin Ren, Linke Guo, Shiwei Liu, and Xiaolong Ma. Neurrev: Train better sparse neural network practically via neuron revitalization. In _International Conference on Learning Representations_ , 2024. 

13 

## **NeurIPS Paper Checklist** 

## 1. **Claims** 

Question: Do the main claims made in the abstract and introduction accurately reflect the paper’s contributions and scope? 

Answer: [Yes] 

Justification: We mentioned all of our innovations and the contributions in the abstract and introduction. 

Guidelines: 

   - The answer NA means that the abstract and introduction do not include the claims made in the paper. 

   - The abstract and/or introduction should clearly state the claims made, including the contributions made in the paper and important assumptions and limitations. A No or NA answer to this question will not be perceived well by the reviewers. 

   - The claims made should match theoretical and experimental results, and reflect how much the results can be expected to generalize to other settings. 

   - It is fine to include aspirational goals as motivation as long as it is clear that these goals are not attained by the paper. 

2. **Limitations** 

Question: Does the paper discuss the limitations of the work performed by the authors? Answer: [Yes] 

Justification: Limitation is discussed in Appendix A. 

Guidelines: 

- The answer NA means that the paper has no limitation while the answer No means that the paper has limitations, but those are not discussed in the paper. 

- The authors are encouraged to create a separate "Limitations" section in their paper. 

- The paper should point out any strong assumptions and how robust the results are to violations of these assumptions (e.g., independence assumptions, noiseless settings, model well-specification, asymptotic approximations only holding locally). The authors should reflect on how these assumptions might be violated in practice and what the implications would be. 

- The authors should reflect on the scope of the claims made, e.g., if the approach was only tested on a few datasets or with a few runs. In general, empirical results often depend on implicit assumptions, which should be articulated. 

- The authors should reflect on the factors that influence the performance of the approach. For example, a facial recognition algorithm may perform poorly when image resolution is low or images are taken in low lighting. Or a speech-to-text system might not be used reliably to provide closed captions for online lectures because it fails to handle technical jargon. 

- The authors should discuss the computational efficiency of the proposed algorithms and how they scale with dataset size. 

- If applicable, the authors should discuss possible limitations of their approach to address problems of privacy and fairness. 

- While the authors might fear that complete honesty about limitations might be used by reviewers as grounds for rejection, a worse outcome might be that reviewers discover limitations that aren’t acknowledged in the paper. The authors should use their best judgment and recognize that individual actions in favor of transparency play an important role in developing norms that preserve the integrity of the community. Reviewers will be specifically instructed to not penalize honesty concerning limitations. 

## 3. **Theory assumptions and proofs** 

Question: For each theoretical result, does the paper provide the full set of assumptions and a complete (and correct) proof? 

Answer: [NA] 

14 

Justification: The paper does not include theoretical results. Guidelines: 

- The answer NA means that the paper does not include theoretical results. 

- All the theorems, formulas, and proofs in the paper should be numbered and crossreferenced. 

- All assumptions should be clearly stated or referenced in the statement of any theorems. 

- The proofs can either appear in the main paper or the supplemental material, but if they appear in the supplemental material, the authors are encouraged to provide a short proof sketch to provide intuition. 

- Inversely, any informal proof provided in the core of the paper should be complemented by formal proofs provided in appendix or supplemental material. 

- Theorems and Lemmas that the proof relies upon should be properly referenced. 

## 4. **Experimental result reproducibility** 

Question: Does the paper fully disclose all the information needed to reproduce the main experimental results of the paper to the extent that it affects the main claims and/or conclusions of the paper (regardless of whether the code and data are provided or not)? 

Answer: [Yes] 

Justification: This paper contains all the information to reproduce. The codes are available in the Supplementary Information. 

Guidelines: 

- The answer NA means that the paper does not include experiments. 

- If the paper includes experiments, a No answer to this question will not be perceived well by the reviewers: Making the paper reproducible is important, regardless of whether the code and data are provided or not. 

- If the contribution is a dataset and/or model, the authors should describe the steps taken to make their results reproducible or verifiable. 

- Depending on the contribution, reproducibility can be accomplished in various ways. For example, if the contribution is a novel architecture, describing the architecture fully might suffice, or if the contribution is a specific model and empirical evaluation, it may be necessary to either make it possible for others to replicate the model with the same dataset, or provide access to the model. In general. releasing code and data is often one good way to accomplish this, but reproducibility can also be provided via detailed instructions for how to replicate the results, access to a hosted model (e.g., in the case of a large language model), releasing of a model checkpoint, or other means that are appropriate to the research performed. 

- While NeurIPS does not require releasing code, the conference does require all submissions to provide some reasonable avenue for reproducibility, which may depend on the nature of the contribution. For example 

- (a) If the contribution is primarily a new algorithm, the paper should make it clear how to reproduce that algorithm. 

- (b) If the contribution is primarily a new model architecture, the paper should describe the architecture clearly and fully. 

- (c) If the contribution is a new model (e.g., a large language model), then there should either be a way to access this model for reproducing the results or a way to reproduce the model (e.g., with an open-source dataset or instructions for how to construct the dataset). 

- (d) We recognize that reproducibility may be tricky in some cases, in which case authors are welcome to describe the particular way they provide for reproducibility. In the case of closed-source models, it may be that access to the model is limited in some way (e.g., to registered users), but it should be possible for other researchers to have some path to reproducing or verifying the results. 

## 5. **Open access to data and code** 

Question: Does the paper provide open access to the data and code, with sufficient instructions to faithfully reproduce the main experimental results, as described in supplemental material? 

15 

Answer: [Yes] 

Justification: The codes and instructions are available in the Supplementary Information. Guidelines: 

- The answer NA means that paper does not include experiments requiring code. 

- Please see the NeurIPS code and data submission guidelines ( `https://nips.cc/ public/guides/CodeSubmissionPolicy` ) for more details. 

- While we encourage the release of code and data, we understand that this might not be possible, so “No” is an acceptable answer. Papers cannot be rejected simply for not including code, unless this is central to the contribution (e.g., for a new open-source benchmark). 

- The instructions should contain the exact command and environment needed to run to reproduce the results. See the NeurIPS code and data submission guidelines ( `https: //nips.cc/public/guides/CodeSubmissionPolicy` ) for more details. 

- The authors should provide instructions on data access and preparation, including how to access the raw data, preprocessed data, intermediate data, and generated data, etc. 

- The authors should provide scripts to reproduce all experimental results for the new proposed method and baselines. If only a subset of experiments are reproducible, they should state which ones are omitted from the script and why. 

- At submission time, to preserve anonymity, the authors should release anonymized versions (if applicable). 

- Providing as much information as possible in supplemental material (appended to the paper) is recommended, but including URLs to data and code is permitted. 

## 6. **Experimental setting/details** 

Question: Does the paper specify all the training and test details (e.g., data splits, hyperparameters, how they were chosen, type of optimizer, etc.) necessary to understand the results? 

Answer: [Yes] 

Justification: This paper contains all the information to reproduce. Guidelines: 

- The answer NA means that the paper does not include experiments. 

- The experimental setting should be presented in the core of the paper to a level of detail that is necessary to appreciate the results and make sense of them. 

- The full details can be provided either with the code, in appendix, or as supplemental material. 

## 7. **Experiment statistical significance** 

Question: Does the paper report error bars suitably and correctly defined or other appropriate information about the statistical significance of the experiments? 

Answer: [Yes] 

Justification: In the results of MLP, we include the standard error of the 3-seeds runs for each method. For the larger models, because of the resource limitation, we cannot run three seeds before submission. We will include three seeds results during revision period. Guidelines: 

- The answer NA means that the paper does not include experiments. 

- The authors should answer "Yes" if the results are accompanied by error bars, confidence intervals, or statistical significance tests, at least for the experiments that support the main claims of the paper. 

- The factors of variability that the error bars are capturing should be clearly stated (for example, train/test split, initialization, random drawing of some parameter, or overall run with given experimental conditions). 

- The method for calculating the error bars should be explained (closed form formula, call to a library function, bootstrap, etc.) 

- The assumptions made should be given (e.g., Normally distributed errors). 

16 

- It should be clear whether the error bar is the standard deviation or the standard error of the mean. 

- It is OK to report 1-sigma error bars, but one should state it. The authors should preferably report a 2-sigma error bar than state that they have a 96% CI, if the hypothesis of Normality of errors is not verified. 

- For asymmetric distributions, the authors should be careful not to show in tables or figures symmetric error bars that would yield results that are out of range (e.g. negative error rates). 

- If error bars are reported in tables or plots, The authors should explain in the text how they were calculated and reference the corresponding figures or tables in the text. 

## 8. **Experiments compute resources** 

Question: For each experiment, does the paper provide sufficient information on the computer resources (type of compute workers, memory, time of execution) needed to reproduce the experiments? 

Answer: [Yes] 

Justification: We include the computation resources requirements in the Appendix N. Guidelines: 

- The answer NA means that the paper does not include experiments. 

- The paper should indicate the type of compute workers CPU or GPU, internal cluster, or cloud provider, including relevant memory and storage. 

- The paper should provide the amount of compute required for each of the individual experimental runs as well as estimate the total compute. 

- The paper should disclose whether the full research project required more compute than the experiments reported in the paper (e.g., preliminary or failed experiments that didn’t make it into the paper). 

## 9. **Code of ethics** 

Question: Does the research conducted in the paper conform, in every respect, with the NeurIPS Code of Ethics `https://neurips.cc/public/EthicsGuidelines` ? 

Answer: [Yes] 

Justification: This research adheres to the NeurIPS Code of Ethics. 

Guidelines: 

- The answer NA means that the authors have not reviewed the NeurIPS Code of Ethics. 

- If the authors answer No, they should explain the special circumstances that require a deviation from the Code of Ethics. 

- The authors should make sure to preserve anonymity (e.g., if there is a special consideration due to laws or regulations in their jurisdiction). 

## 10. **Broader impacts** 

Question: Does the paper discuss both potential positive societal impacts and negative societal impacts of the work performed? 

Answer: [Yes] 

Justification: We discussed broader impacts in Appendix B. 

Guidelines: 

- The answer NA means that there is no societal impact of the work performed. 

- If the authors answer NA or No, they should explain why their work has no societal impact or why the paper does not address societal impact. 

- Examples of negative societal impacts include potential malicious or unintended uses (e.g., disinformation, generating fake profiles, surveillance), fairness considerations (e.g., deployment of technologies that could make decisions that unfairly impact specific groups), privacy considerations, and security considerations. 

17 

- The conference expects that many papers will be foundational research and not tied to particular applications, let alone deployments. However, if there is a direct path to any negative applications, the authors should point it out. For example, it is legitimate to point out that an improvement in the quality of generative models could be used to generate deepfakes for disinformation. On the other hand, it is not needed to point out that a generic algorithm for optimizing neural networks could enable people to train models that generate Deepfakes faster. 

- The authors should consider possible harms that could arise when the technology is being used as intended and functioning correctly, harms that could arise when the technology is being used as intended but gives incorrect results, and harms following from (intentional or unintentional) misuse of the technology. 

- If there are negative societal impacts, the authors could also discuss possible mitigation strategies (e.g., gated release of models, providing defenses in addition to attacks, mechanisms for monitoring misuse, mechanisms to monitor how a system learns from feedback over time, improving the efficiency and accessibility of ML). 

## 11. **Safeguards** 

Question: Does the paper describe safeguards that have been put in place for responsible release of data or models that have a high risk for misuse (e.g., pretrained language models, image generators, or scraped datasets)? 

Answer: [NA] 

Justification: No risk for misuse. 

Guidelines: 

- The answer NA means that the paper poses no such risks. 

- Released models that have a high risk for misuse or dual-use should be released with necessary safeguards to allow for controlled use of the model, for example by requiring that users adhere to usage guidelines or restrictions to access the model or implementing safety filters. 

- Datasets that have been scraped from the Internet could pose safety risks. The authors should describe how they avoided releasing unsafe images. 

- We recognize that providing effective safeguards is challenging, and many papers do not require this, but we encourage authors to take this into account and make a best faith effort. 

## 12. **Licenses for existing assets** 

Question: Are the creators or original owners of assets (e.g., code, data, models), used in the paper, properly credited and are the license and terms of use explicitly mentioned and properly respected? 

Answer: [Yes] 

Justification: Assets used in the paper are properly credited. 

Guidelines: 

- The answer NA means that the paper does not use existing assets. 

- The authors should cite the original paper that produced the code package or dataset. 

- The authors should state which version of the asset is used and, if possible, include a URL. 

- The name of the license (e.g., CC-BY 4.0) should be included for each asset. 

- For scraped data from a particular source (e.g., website), the copyright and terms of service of that source should be provided. 

- If assets are released, the license, copyright information, and terms of use in the package should be provided. For popular datasets, `paperswithcode.com/datasets` has curated licenses for some datasets. Their licensing guide can help determine the license of a dataset. 

- For existing datasets that are re-packaged, both the original license and the license of the derived asset (if it has changed) should be provided. 

18 

- If this information is not available online, the authors are encouraged to reach out to the asset’s creators. 

## 13. **New assets** 

Question: Are new assets introduced in the paper well documented and is the documentation provided alongside the assets? 

Answer: [NA] 

Justification: The paper does not release new assets. 

Guidelines: 

- The answer NA means that the paper does not release new assets. 

- Researchers should communicate the details of the dataset/code/model as part of their submissions via structured templates. This includes details about training, license, limitations, etc. 

- The paper should discuss whether and how consent was obtained from people whose asset is used. 

- At submission time, remember to anonymize your assets (if applicable). You can either create an anonymized URL or include an anonymized zip file. 

## 14. **Crowdsourcing and research with human subjects** 

Question: For crowdsourcing experiments and research with human subjects, does the paper include the full text of instructions given to participants and screenshots, if applicable, as well as details about compensation (if any)? 

Answer: [NA] 

Justification: the paper does not involve crowdsourcing nor research with human subjects. Guidelines: 

   - The answer NA means that the paper does not involve crowdsourcing nor research with human subjects. 

   - Including this information in the supplemental material is fine, but if the main contribution of the paper involves human subjects, then as much detail as possible should be included in the main paper. 

   - According to the NeurIPS Code of Ethics, workers involved in data collection, curation, or other labor should be paid at least the minimum wage in the country of the data collector. 

15. **Institutional review board (IRB) approvals or equivalent for research with human subjects** 

Question: Does the paper describe potential risks incurred by study participants, whether such risks were disclosed to the subjects, and whether Institutional Review Board (IRB) approvals (or an equivalent approval/review based on the requirements of your country or institution) were obtained? 

Answer: [NA] 

Justification: the paper does not involve crowdsourcing nor research with human subjects. Guidelines: 

- The answer NA means that the paper does not involve crowdsourcing nor research with human subjects. 

- Depending on the country in which research is conducted, IRB approval (or equivalent) may be required for any human subjects research. If you obtained IRB approval, you should clearly state this in the paper. 

- We recognize that the procedures for this may vary significantly between institutions and locations, and we expect authors to adhere to the NeurIPS Code of Ethics and the guidelines for their institution. 

- For initial submissions, do not include any information that would break anonymity (if applicable), such as the institution conducting the review. 

## 16. **Declaration of LLM usage** 

19 

Question: Does the paper describe the usage of LLMs if it is an important, original, or non-standard component of the core methods in this research? Note that if the LLM is used only for writing, editing, or formatting purposes and does not impact the core methodology, scientific rigorousness, or originality of the research, declaration is not required. Answer: [NA] 

Justification: the core method development in this research does not involve LLMs as any important, original, or non-standard components. 

Guidelines: 

- The answer NA means that the core method development in this research does not involve LLMs as any important, original, or non-standard components. 

- Please refer to our LLM policy ( `https://neurips.cc/Conferences/2025/LLM` ) for what should or should not be described. 

20 

Table 4: **Hyperparameters of MLP on Image Classification Tasks.** 

|4: **Hyperparameters of ML**|**P on Image Classifcation T**|
|---|---|
|**Hyper-parameter**|**MLP**|
|||
|Hidden Dimension<br># Hidden layers<br>Batch Size<br>Training Epochs<br>LR Decay Method<br>Start Learning Rate<br>End Learning Rate<br>_ζ_ (fraction of removal)<br>Update Interval (for DST)<br>Momentum<br>Weight decay|1568 (3072 for CIFAR10)<br>3<br>32<br>100<br>Linear<br>0.025<br>2.5e_−_4<br>0.3<br>1 epoch<br>0.9<br>5e_−_4|



Table 5: **Hyperparameters of Transformer on Machine Translation Tasks.** `inoam` refers to a learning rate scheduler that incorporates iterative warm-up phases, specifically designed for dynamic sparse training (DST) methods. The purpose is to allow newly regrown connections to accumulate momentum, preventing potential harm to the training process. For the fully connected (FC) baseline, only the standard `noam` scheduler is used. 

|tandard`noam`scheduler is used.||||
|---|---|---|---|
|**Hyper-parameter**|**Multi30k**|**IWSLT14**|**WMT17**|
|||||
|Embedding Dimension<br>Feed-forward Dimension<br>Batch Size<br>Training Steps<br>Dropout<br>Attention Dropout<br>Max Gradient Norm<br>Warmup Steps<br>Learning rate Decay Method<br>Iterative warmup steps<br>Label Smoothing<br>Layer Number<br>Head Number<br>Learning Rate<br>_ζ_ (fraction of removal)<br>Update Interval (for DST)|512<br>1024<br>1024 tokens<br>5000<br>0.1<br>0.1<br>0<br>1000<br>inoam<br>20<br>0.1<br>6<br>8<br>0.25<br>0.3<br>100 steps|512<br>2048<br>10240 tokens<br>20000<br>0.1<br>0.1<br>0<br>6000<br>inoam<br>20<br>0.1<br>6<br>8<br>2<br>0.3<br>100 steps|512<br>2048<br>12000 tokens<br>80000<br>0.1<br>0.1<br>0<br>8000<br>inoam<br>20<br>0.1<br>6<br>8<br>2<br>0.3<br>100 steps|



## **A Limitations and Future Work** 

A potential limitation of this work is that the hardware required to accelerate sparse training with unstructured sparsity has not yet become widely adopted. Consequently, this article does not present a direct comparison of training speeds with those of fully connected networks. However, several leading companies [49, 50] have already released devices that support unstructured sparsity in training. 

For future work, we aim to develop methods for automatically determining the temperature for soft sampling at each epoch, guided by the topological features of each layer. This could enable each layer to learn its specific topological rules autonomously. Additionally, we plan to test CHTs and CHTss in larger LLMs such as LLaMA-7b to evaluate the performance in scenarios with denser layers. 

## **B Broader Impact** 

In this work, we introduce a novel methodology for dynamic sparse training aimed at enhancing the efficiency of AI model training. This advancement holds potential societal benefits by increasing interest in more efficient AI practices. However, the widespread availability of advanced artificial 

21 

Table 6: **Hyperparameters of LLaMA-60M, LLaMA-130M, and LLaMA-1B on OpenWebText.** `inoam` refers to a learning rate scheduler that incorporates iterative warm-up phases, specifically designed for dynamic sparse training (DST) methods. The purpose is to allow newly regrown connections to accumulate momentum, preventing potential harm to the training process. For the fully connected (FC) baseline, only the standard `noam` scheduler is used. 

|**Hyper-parameter**|**LLaMA-60M**|**LLaMA-130M**|**LLaMA-1B**|
|---|---|---|---|
|Embedding Dimension|512|768|2048|
|Feed-forward Dimension|1376|2048|5461|
|Global Batch Size|512|512|512|
|Sequence Length|256|256|256|
|Training Steps|10000|30000|100000|
|Learning Rate|3e-3 (1e-3 for FC)|3e-3 (1e-3 for FC)|3e-3 (4e-4 for FC)|
|Warmup Steps|1000|10000|10000|
|Learning rate Decay Method|inoam|inoam|inoam|
|Iterative warmup steps|20|20|20|
|Optimizer|Adam|Adam|Adam|
|Layer Number|8|12|24|
|Head Number|8|12|32|
|_ζ_ (fraction of removal)|0.1|0.1|0.1|
|Update Interval (for DST)|100 steps|100 steps|100 steps|



Table 7: Performance comparison of different dynamic sparse training methods on MNIST, Fashion MNIST (FMNIST), and EMNIST datasets trained on MLP at 99% sparsity. ACC represents accuracy, and ANP denotes the active neuron percolation rate, indicating the final size of the network. Accuracies present a standard error taken over three seeds. The best dynamic sparse training method for each dataset is highlighted in bold, and the performances that surpass the fully connected model are marked with “*". 

|Method|MNIST<br>ACC (%)<br>ANP|FMNIST<br>ACC (%)<br>ANP|EMNIST<br>ACC (%)<br>ANP|
|---|---|---|---|
|FC|98.78_±_0.02<br>–|90.88_±_0.02<br>–|87.13_±_0.04<br>–|
|CHTsp<br>CHTsn<br>CHT<br>RigL<br>SET|**98.81**_±_**0.04***<br>20%<br>98.76_±_0.05<br>27%<br>98.48_±_0.04<br>29%<br>98.61_±_0.01<br>29%<br>98.14_±_0.02<br>100%|**90.93**_±_**0.03***<br>89%<br>90.67_±_0.05<br>73%<br>88.70_±_0.07<br>30%<br>89.91_±_0.07<br>55%<br>89.00_±_0.09<br>100%|87.61_±_0.07*<br>24%<br>**87.82**_±_**0.04***<br>28%<br>86.35_±_0.08<br>21%<br>86.94_±_0.08<br>28%<br>86.31_±_0.08<br>100%|
|CHTssn<br>GraNet<br>GMP|**98.83**_±_**0.02***<br>32%<br>98.81_±_0.00*<br>35%<br>98.62_±_0.03<br>58 %|**90.81**_±_**0.11**<br>40%<br>89.98_±_0.06<br>53%<br>90.29_±_0.19<br>69%|**87.52**_±_**0.04***<br>35 %<br>86.94_±_0.03<br>45%<br>86.93_±_0.09<br>75 %|



> p Refers to the regrowth method CH3_L3p. 

> n Refers to the regrowth method CH2_L3n. 

neural networks, particularly large language models (LLMs), also presents risks of misuse. It is essential to carefully consider and manage these factors to maximize benefits and minimize risks. 

## **C Cannistraci-Hebb epitopological rationale** 

The original CHT framework leverages the Cannistraci-Hebb link predictor on Length 3 paths (CH3L3p) metric for link regrowth. Given two seed nodes _u_ and _v_ in a network, this metric assigns a score 

**==> picture [283 x 27] intentionally omitted <==**

22 

Table 8: Perplexity (PPL) results across different sparsities (0.7, 0.8, 0.9, 0.95) for CHTs and CHTss under different regrowth strategies (Fixed and Uniform) and _r_ settings on LLaMA60M. 

|Sparsity|**Fixed**<br>_r_ = 0_._0<br>_r_ = 0_._1<br>_r_ = 0_._2<br>_r_ = 0_._3|**Uniform**<br>_r_ = 0_._0<br>_r_ = 0_._1<br>_r_ = 0_._2<br>_r_ = 0_._3|
|---|---|---|
|**CHTs**<br>70%<br>80%<br>90%<br>95%|28.16<br>28.39<br>28.25<br>28.32<br>30.22<br>**29.84**<br>30.04<br>30.03<br>33.32<br>33.37<br>**33.03**<br>33.77<br>37.29<br>37.51<br>37.24<br>37.46|30.11<br>**28.12**<br>28.43<br>28.56<br>30.19<br>29.86<br>30.23<br>30.06<br>33.45<br>33.36<br>33.88<br>33.72<br>37.23<br>**36.47**<br>37.33<br>37.67|
|**CHTss**<br>70%<br>80%<br>90%<br>95%|**27.62**<br>30.05<br>27.82<br>28.43<br>**29.00**<br>**29.00**<br>29.66<br>32.91<br>31.51<br>31.67<br>31.65<br>31.59<br>38.66<br>35.31<br>36.24<br>37.50|**27.62**<br>27.74<br>27.74<br>27.68<br>29.49<br>29.69<br>29.09<br>29.24<br>31.66<br>32.61<br>31.68<br>**31.42**<br>42.20<br>37.40<br>35.36<br>**35.10**|



Table 9: Perplexity (PPL) results across different sparsities (0.7, 0.8, 0.9, 0.95) for CHTs and CHTss under different regrowth strategies (Fixed and Uniform) and _r_ settings on LLaMA-130M. 

|Sparsity|**Fixed**<br>_r_ = 0_._0<br>_r_ = 0_._1<br>_r_ = 0_._2<br>_r_ = 0_._3|**Uniform**<br>_r_ = 0_._0<br>_r_ = 0_._1<br>_r_ = 0_._2<br>_r_ = 0_._3|
|---|---|---|
|**CHTs**<br>70%<br>80%<br>90%<br>95%|20.24<br>20.16<br>**20.10**<br>20.25<br>**21.33**<br>21.37<br>21.36<br>21.48<br>23.72<br>23.76<br>23.76<br>23.94<br>28.05<br>**26.45**<br>26.90<br>26.91|20.62<br>20.18<br>20.15<br>20.20<br>21.34<br>21.40<br>21.40<br>22.49<br>23.74<br>23.73<br>**23.71**<br>24.99<br>26.78<br>27.97<br>29.05<br>27.10|
|**CHTss**<br>70%<br>80%<br>90%<br>95%|20.63<br>19.88<br>19.93<br>**19.85**<br>20.71<br>22.60<br>20.86<br>**20.70**<br>22.58<br>22.72<br>22.61<br>**22.51**<br>25.28<br>25.12<br>25.20<br>25.12|21.43<br>19.90<br>20.93<br>19.94<br>20.73<br>20.74<br>20.72<br>20.82<br>22.53<br>22.59<br>22.60<br>23.12<br>**25.07**<br>25.15<br>25.23<br>25.12|



Here, _u_ and _v_ denote the seed nodes, while _z_ 1 and _z_ 2 are common neighbors on the L3 path [30], a walk of three consecutive links that connects _u_ to _v_ via those two intermediate nodes. The term _de[∗] i_ represents the number of external local community links (eLCL) of node _i_ , with a default increment of 1 to prevent division by zero. Path-based link prediction has demonstrated its effectiveness on both real-world networks [30] and artificial neural networks [9]. However, this method incurs a high computational cost due to the need to compute and store all length-three paths, resulting in a time complexity of _O_ ( _N · d_[3] ), where _N_ is the number of nodes and _d_ is the network’s average degree. This complexity is prohibitive for large models with numerous nodes and higher-density layers. To 

**==> picture [397 x 148] intentionally omitted <==**

Figure 3: Comparison of link regrowth strategies in CHTs using a LLaMA-60M model trained on OpenWebText for 5000 steps. The left plot shows validation perplexity (lower is better), while the right plot reports the in-time over-parameterization (ITOP) rate, which measures the cumulative proportion of links activated during training. Results are presented for three strategies: Soft, Random, and Deterministic regrowth. 

23 

**==> picture [396 x 283] intentionally omitted <==**

Figure 4: **Cannistraci-Hebb epitopological rationale.** [30] The figure illustrates an explanatory example of topological link prediction using the Cannistraci-Hebb epitopological rationale based on either L2 or L3 paths. The two black nodes represent the seed nodes whose unobserved interaction is to be assigned a likelihood score. White nodes denote the common neighbours (CNs) of the seed nodes at either L2 or L3 distance. Together, the set of CNs and the internal local community links (iLCL) constitute the local community. Different link types are color-coded: green for nLCLs, red for external local community links (eLCLs), and white for iLCLs. The L2 (path length 2) and L3 (path length 3) paths associated with the illustrated communities are highlighted. Notably, in artificial neural networks (ANNs), linear layers correspond to bipartite networks, which inherently support only L3 path predictions, as shown in Figure 1. 

address this issue, we introduce a more efficient, node-based paradigm that eliminates the reliance on length-three paths between seed nodes. Instead, this approach focuses on the common neighbors of seed nodes. The node-based version of CH3-L3p, denoted as CH2-L3n, is defined as follows: 

**==> picture [257 x 27] intentionally omitted <==**

Here, _u_ and _v_ denote the seed nodes, while _z_ is the common neighbor on the L3 path [30], a walk of three consecutive links that connects _u_ to _v_ via two of those intermediate nodes. The terms _di[∗] z[de][∗] z_ represent the number of internal local community links (iLCLs) and external local community links (eLCLs) of node _i_ , with a default increment of 1 to prevent division by zero. Internal local community links (iLCLs) are those that connect nodes belonging to the same local community. Contrarily, external local community links (eLCLs) connect nodes belonging to different communities. Figure 4 gives a visual representation of L2 and L3 paths between two seed nodes _u_ and _v_ , defining their local community. 

## **D Sparse topological initialization** 

**Correlated sparse topological initialization.** Correlated Sparse Topological Initialization (CSTI) is a physics-informed topological initialization. CSTI generates the adjacency matrix by computing the Pearson correlation between each input feature across the calibration dataset and then selects 

24 

the predetermined number of links, calculated based on the desired sparsity level, as the existing connections. CSTI performs remarkably better when the layer can directly receive input information. However, for layers that cannot receive inputs directly, it cannot capture the correlations from the start since the model is initialized randomly, as in the case of the Transformer. Therefore, in this article, we aim to address this issue by investigating different network models to initialize the topology, to improve the performance for cases where CSTI cannot be directly applied. 

**Bipartite scale-free model.** In artificial neural networks (ANNs), fully connected networks are inherently bipartite. This article explores initializing bipartite networks using models from network science. The Bipartite Scale-Free (BSF) [9] network model extends the concept of scale-freeness to bipartite structures, making them suitable for dynamic sparse training. Initially, the BSF model generates a monopartite Barabási-Albert (BA) model [37], a well-established method for creating scale-free networks in which the degree distribution follows a power law ( _γ_ =2.76 in Figure 5). Following the creation of the BA model, the BSF approach removes any connections between nodes of the same type (neuron in the same layer) and rewires these connections to nodes of the opposite type (neuron in the opposite layer). This rewiring is done while maintaining the degree of each node constant to preserve the power-law exponent _γ_ . 

**Bipartite small-world model.** The Bipartite Small-World (BSW) network model [9] is designed to incorporate small-world properties and a high clustering coefficient into bipartite networks. Initially, the model constructs a regular ring lattice and assigns two distinct types of nodes to it. Each node is connected by an equal number of links to the nearest nodes of the opposite type, fostering high clustering but lacking the small-world property. Similar to the Watts-Strogatz model (WS) [36], the BSW model introduces a rewiring parameter, _β_ , which represents the percentage of links randomly removed and then rewired within the network. At _β_ = 1, the model transitions into an **Erd˝os-Rényi model** [51], exhibiting small-world properties but without a high clustering coefficient, which is popular as the topological initialization of the other dynamic sparse training methods [5, 7, 8]. 

**Bipartite receptive field model.** The Bipartite Receptive Field (BRF) model is a random network generation technique designed to mimic the receptive field phenomenon in the brain networks. The process involves adding links to the adjacency matrix of the bipartite network, with the connectivity structured around the main diagonal according to a parameter _r ∈_ [0 _,_ 1]. A low value of _r_ results in links that are primarily clustered around the diagonal, while a higher value of _r_ leads to a more random connectivity pattern. Specifically, a bipartite adjacency matrix with links near the diagonal indicates that adjacent nodes from the two layers are linked, whereas links far from the diagonal correspond to more distant node pairs. Mathematically, consider an _N × M_ bipartite adjacency matrix _Mi,ji_ =1 _,...,M,j_ =1 _,...,N_ , where _M_ represents the input size and _N_ represents the output size. Each entry of the matrix _mi,j_ is set to 1 if input node _i_ is connected to output node _j_ , and 0 otherwise. A scoring function _Si,j_ is assigned to each connection in the adjacency matrix based on its distance to the main diagonal. This score is given by: 

**==> picture [225 x 18] intentionally omitted <==**

## where 

**==> picture [299 x 12] intentionally omitted <==**

is the distance between the input and output neurons. Therefore, _Si,j_ represents the distance from the diagonal, raised to the power of[1] _[−] r[r]_[.][The parameter] _[ r]_[controls how structured or random the] adjacency matrix is. As _r →_ 0, the scoring function becomes more deterministic, with high scores assigned to entries near the diagonal and low scores to entries farther away. Conversely, as _r →_ 1, all scores _Si,j_ become more uniform, leading to a more random, less structured adjacency matrix. The next step is to determine the degree distribution for the output nodes. This can either be fixed, assigning the same degree to all output nodes, or uniform, where the degrees are randomly sampled from a uniform distribution. Hence, we propose two variations of the BRF model: the Bipartite Receptive Field with fixed sampling (BRFf), in which the degrees of output nodes are fixed, and the Bipartite Receptive Field with uniform sampling (BRFu), where the degrees of the output nodes follow a uniform distribution. This represents an additional enhancement to the WS scheme, which offers no way to control how connections are allocated among the output nodes. In conclusion, to run the BRF model, the user should input an output degree distribution and a spatial dependent distance randomness. 

25 

**==> picture [397 x 262] intentionally omitted <==**

**----- Start of picture text -----**<br>
Bipartite Small-World network model<br>Regular network (𝛽= 0) 𝛽= 0.25 𝛽= 0.5 𝛽= 0.75 Erdős−Rényi network (𝛽= 1)<br>Bipartite Scale-Free  Bipartite Receptive Field - Fixed Sampling<br>network model<br>Powerlaw (𝛾= 2.76) Regular network (r = 0) r = 0.25 r = 0.5 r = 0.75 r = 1<br>Existing links<br>Non-existing links Bipartite Receptive Field - Uniform Sampling<br>Regular network (r = 0) r = 0.25 r = 0.5 r = 0.75 r = 1<br>**----- End of picture text -----**<br>


Figure 5: **The adjacency matrix** of the Bipartite Scale-Free (BSF) network model compared to those of the Bipartite Small-World (BSW) network, the Bipartite Receptive Field with fixed sampling (BRF _f_ ), and the Bipartite Receptive field with uniform sampling (BRF _u_ ) as parameters _β_ and _r_ vary between 0 and 1. a) The BSF model inherently forms a scale-free network characterized by a power-law distribution with _γ_ = 2 _._ 76. b) As _β_ changes from 0 to 1, the network exhibits reduced clustering. It is important to note that when _β_ = 0, the BSW model does not qualify as a small-world network. c) As _r_ increases towards 1, the adjacency matrix becomes more random, while sampling the output neurons’ degrees from a fixed or uniform distribution. 

## **E Equal Partition and Neuron Resorting to enhance bipartite scale-free network initialization** 

As indicated in SET and CHT [5, 9], trained sparse models typically converge to a scale-free network. This suggests that initiating the network with a scale-free structure might initially enhance performance. However, starting directly with a Bipartite Scale-Free model (BSF, power-law exponent _γ_ = 2 _._ 76) does not yield effective results. Upon deeper examination, two potential reasons emerge: 

- The BSF model generates hub nodes randomly. However, this random assignment of hub nodes to less significant inputs leads to a less effective initialization, which is particularly detrimental in CHT, which merely utilizes the topology information to regrow new links. 

- As demonstrated in CHT, in the final network, the hub nodes of one layer’s output should correspond to the input layer of the subsequent layer, which means the hub nodes should have a high degree on both sides of the layer. However, the BSF model’s random selection disrupts this correspondence, significantly reducing the number of Credit Assignment Paths (CAP) [9] in the model. CAP is defined as the chain of transformation from input to output, which counts the number of links that go through the hub nodes in the middle layers. 

To address these issues, we propose two solutions: 

- Equal Partitioning of the First Layer: We begin by generating a BSF model, then rewire the connections from the input layer to the first hidden layer. While keeping the out-degrees of the output neurons fixed, we randomly sample new connections to the input neurons until each of the input neurons’ in-degrees reaches the input layer’s average in-degree. This 

26 

**==> picture [397 x 122] intentionally omitted <==**

**----- Start of picture text -----**<br>
a)  b)<br>**----- End of picture text -----**<br>


Figure 6: **The ablation test** of the _β_ of the bipartite small world (BSW) model and the removal methods in CHTs. a) evaluates the influence of the rewiring rate _β_ on the model performance when initialized with the BSW model. b) assesses the influence of link removal selecting from the weight magnitude (WM), weight magnitude soft (WM-soft), relative importance (RI), and relative importance soft (RI-soft). We utilize the win rate of the compared factors under the same setting across each realization of 3 seeds for all experiment combinations on MLP. The factor with the highest win rate is highlighted in orange. 

**==> picture [396 x 142] intentionally omitted <==**

**----- Start of picture text -----**<br>
a) b)<br>**----- End of picture text -----**<br>


Figure 7: **The ablation test of** the parameter _r_ in the bipartite receptive field (BRF) model and the removal methods in CHTs using the BRF initialization technique. a) evaluates the influence of the parameter _r_ on the model performance when initialized with the BRF model. b) assesses the influence of link removal in the CHTs model with BRF initialization. We utilize the win rate of the compared factors under the same setting across each realization of 3 seeds for all experiment combinations on MLP. The factor with the highest win rate is highlighted in orange. 

approach ensures all input neurons are assigned equal importance while maintaining the power-law degree distribution of output neurons. 

- Resorting Middle Layer Neurons: Given the mismatch in hub nodes between consecutive layers, we suggest permuting the neurons between the output of one layer and the input of the next, based on their degree. A higher degree in an output neuron increases the likelihood of connecting to a high-degree input neuron in the subsequent layer, thus enhancing the number of CAPs. 

As illustrated in Figure 8, while the two techniques enhance the performance of the BSF initialization, they remain inferior to the BSW initialization. As noted in the main text, achieving scale-freeness is more effective when the model is allowed to learn and adapt dynamically rather than being directly initialized as a predefined structure. 

## **F Network percolation and extension to Transformer.** 

We have adapted network percolation [52, 9] to suit the architecture of the Transformer after link removal. The core idea is to identify inactive neurons, which are characterized by having no 

27 

**==> picture [396 x 120] intentionally omitted <==**

**----- Start of picture text -----**<br>
a) b)<br>BRF<br>EMNIST<br>Fashion_MNIST<br>MNIST<br>**----- End of picture text -----**<br>


Figure 8: **The Performance** of the bipartite scale-free model and two enhanced techniques. a) shows the win rate of the Bipartite Scale-Free network model (BSF) with the different techniques. _EP_ stands for equal partition of the first layer, and _Resort_ refers to reordering the neurons based on their degree. b) assesses the comparison between Correlated Sparse Topological Initialization (CSTI), the Bipartite Scale-Free (BSF) model with the best solution from a), and the Bipartite Small-World (BSW) model with _β_ = 0 _._ 25. 

connections on either one or both sides within a layer of neurons. Such neurons disrupt the flow of information during forward propagation or backpropagation. In addition, Layer-wise computation of the CH link prediction score further implies that neurons without connections on one side are unlikely to form connections in the future. Therefore, network percolation becomes essential to optimize the use of remaining links. 

As shown in Figure 1, network percolation encompasses two primary processes: c1) inactive neuron removal to remove the neurons that lack connections on one or both sides; c2) incomplete path adjustment to remove the incomplete paths where links connect to the inactive neurons after c1). Typically applied in simpler continuous layers like those in an MLP, network percolation requires modification for more complex structures. For example, within the Transformer’s self-attention module, the outputs of the query and key layers undergo a dot product operation. It necessitates percolation in these layers to examine the activity of the neurons in both output layers at the same position. Similar interventions are necessary in the up_proj and gate_proj layers of the MLP module in the LLaMA model family [1, 53]. 

## **G Baseline Methods** 

## **G.1 Fixed Density Dynamic Sparse Training Methods** 

**SET** [5]: Removes connections based on weight magnitude and randomly regrows new links. 

**RigL** [7]: Removes connections based on weight magnitude and regrows links using gradient information, gradually reducing the proportion of updated connections over time. 

**CHT** [9]: A state-of-the-art (SOTA) gradient-free method that removes links with weight magnitude and regrows links based on CH3-L3 scores. CHT is often applied with early stopping to mitigate its computational complexity when working with large models. 

## **G.2 Gradual Density Decrease Dynamic Sparse Training Methods** 

**GMP** [54, 41]: Prunes the network with weight magnitude and gradually decreases the density based on Equation 10. Although originally a pruning method, GMP is treated as a dynamic sparse training method in their implementation [41], as it stores historical weights and allows pruned weights to reappear during training, since, during training, the pruning threshold might change. 

**MEST** _EM_ & _S_ [8]: Implements a two-stage density decrease strategy as described in the original work. It removes links based on the combination of weight magnitude and 0.01*gradient and regrows new links randomly. 

28 

**GraNet** [40]: Gradually decreases density using Equation 10. Similar to RigL, GraNet removes links based on the weight magnitude and regrows new links with the gradient of the existing links. 

Table 10: Float32 Precision Comparison on LLaMA-130M. Bold values denote the best performance among DST methods. Lower perplexity corresponds to better model performance. _si_ represents the initial sparsity for DST methods employing a density decay strategy. 

|Method|Sparsity<br>70%<br>80%|
|---|---|
|FC|17.07|
|RigL<br>CHTs<br>GraNet (_si_ = 0_._5)<br>CHTss (_si_ = 0_._5)|18.34<br>19.64<br>17.99<br>19.25<br>17.92<br>18.79<br>**17.76**<br>**18.69**|



## **H Ablation and Sensitivity Tests** 

**An overall ablation test** To fully assess each component’s effectiveness, we conduct several ablation and sensitivity tests that help us understand how to select a sparse topological initialization and identify the best link removal and regrowth methods. We first made a global test for all the components in Table 11, which shows the effectiveness of each element introduced by this article. The node-based and path-based link regrowth methods have comparable performance, but the node-based versions are much faster. 

**Sparse topological initialization.** For sparse topological initialization, we compare BRF, BSW, BSF, and CSTI [9] across three image classification datasets, as shown in Figure 8b. The results indicate that when the inputs can directly access task-relevant information, CSTI consistently achieves the best performance. In general, BRF and BSW perform similarly under these conditions, but outperform the BSF initialization. 

To further validate our findings, we evaluate BRF and BSW network initializations on machine translation tasks using Transformer models. Figure 9 and Figure 10 present the performance comparisons between BSW and BRF on the Multi30k and IWSLT datasets, while Figure 11 shows the win-rate analysis. These comparisons demonstrate that BRF consistently outperforms BSW across most cases. Additionally, Figure 7a analyzes the impact of the receptive field range _r_ on BRF initialization for MNIST, Fashion MNIST, and EMNIST tasks using MLPs, with results indicating that _r_ = 0 _._ 25 yields the best performance. 

Building on this prior knowledge, we further evaluate BRF on LLaMA-60M and LLaMA-130M models, testing _r_ values in the range [0 _,_ 0 _._ 3] and comparing two different degree distributions. The results, shown in Table 8 and Table 9, indicate that on LLaMA models, the choice of _r_ and distribution has limited impact. While _r_ = 0 _._ 1 wins slightly more often, the improvements remain marginal. Finally, Table 3 reports the best performance combinations of _r_ and degree distributions derived from these evaluations. 

**Link removal.** We first conduct a simple evaluation of the link removal methods introduced in this article when changing the _α_ and _δ_ inside Figure 1b2) on Figure 6b) and Figure 7b). The removal methods are selected from Weight Magnitude (WM), Weight Magnitude soft (WMs), Relative Importance (RI), and Relative Importance soft (RIs). For WM we fix the hyperparameters _α_ = 1 and _δ_ = 1; for RI we fix the hyperparameters _α_ = 0 and _δ_ = 0 _._ 5; for WMs we fix _α_ = 1 and we let _δ_ increase linearly from 0 _._ 5 to 0 _._ 9; for RIs we fix _α_ = 0 and let _δ_ increase linearly from 0 _._ 5 to 0 _._ 9. From the results, it can be observed that WMs performs the best in most cases. We compare these methods with those in [55] in Table 12 on two machine translation tasks. The results indicate that using WMs as a link removal method generally outperforms the alternatives. 

We also evaluate how to define the softness in WMs. During sampling, we have a hyperparameter to decide the temperature of the scores that convert to the probability of being removed. We perform a test using a linear decay solution, since, generally, the weights in the model become more reliable as 

29 

Table 11: Ablation results of Transformer on Multi30K and IWSLT datasets at 90% sparsity. The scores indicate BLEU scores, the higher the better. Bold values denote the best performance among DST methods. 

|**Variant**|**Multi30K**<br>(90% sparsity)|**IWSLT**<br>(90% sparsity)|
|---|---|---|
|a. CHT|28.38|19.91|
|b. CHTss<br>without node-based implementation|32.68 (2.42 hours)|**24.82**(18 hours)|
|c. CHTss<br>without soft sampling|28.92|21.88|
|d. CHTss<br>without sigmoid decay (= CHTs)|30.35|21.60|
|e. CHTss<br>(full model)|**32.79**(0.25 hours)|24.57 (1.5 hours)|



Table 12: Performance comparison of CHTs and CHTss at 90% sparsity across different removal methods. The tested dataset is Multi30K, and the reported metric is BLEU, which is the higher the better. 

|**Remove Method**|**CHTs**|**CHTss**|
|---|---|---|
||||
|set<br>wm<br>wm_soft<br>ri<br>ri_soft<br>MEST<br>snip<br>sensitivity<br>Rsensitivity|28.82<br>28.17<br>**30.35**<br>28.91<br>27.86<br>28.70<br>28.23<br>29.02<br>28.18|25.76<br>31.15<br>**32.79**<br>32.20<br>31.86<br>32.07<br>31.66<br>29.73<br>30.67|



training progresses. Figure 12 shows the variation in BLEU scores as we change the starting and ending values of the _δ_ parameter in the soft weight magnitude removal method on transformer models. Recalling that we define the temperature by _T_ = 1 _−_ 1 _δ_[, we observe that for a simple benchmark like] Multi30k, a high starting temperature produces better performance. This is motivated by the fact that loss decreases very fast through epochs, meaning that weights are learned quickly, and we can deterministically remove weights with high reliability. In more complex datasets, like IWSLT, low starting temperatures are preferred. This is because during the early stages of training, weights are learned slowly, meaning that a deterministic removal can be less reliable. To be more consistent, we select a start _δ_ = 0 _._ 5 and end _δ_ = 0 _._ 9 for all the tasks in the main article. 

**Density Decay Strategy.** To further demonstrate the benefit of the density decay strategy, we conduct an ablation study comparing the sigmoid-based density decay strategy with a cubic-based density decay strategy. We evaluate the performance on the LLaMA-60M model using the C4 dataset and report the perplexity. We show the number of density decay steps and a comparison between the cubic density decay that GraNet [40] and GMP [41] introduced and our proposed sigmoid density decay strategy. The results in the Table 13 show that the sigmoid-based decay consistently achieves lower PPL than the cubic-based decay in all the density decay steps, and both strategies outperform the baseline fixed sparsity (CHTs). These results confirm the motivation for introducing the sigmoid density decay strategy. The table below shows the PPL of CHTss with the two density decay strategies over different density decay steps. 

**Curvature of the Density Decay.** In CHTss, the parameter _k_ dictates the pruning schedule’s shape: lower _k_ values yield a smoother decay, while higher values create a sharper curve. We varied _k_ in 2, 4, 6, 8, 10 on LLaMA60M at 70% and 95% sparsity, using perplexity as the evaluation metric. Results on Table 14 show that overly sharp decay curves (larger _k_ ) cause instability. In the article, we used _k_ = 6 for all experiments. 

30 

Table 13: Comparison of **CHTss** variants (Sigmoid- vs. Cubic-based) under different density decay steps. Baseline (CHTs) achieves 35.59. Lower values indicate better performance. 

|**Density Decay Steps**|1000<br>2000<br>3000<br>4000<br>5000<br>6000<br>7000<br>8000<br>9000|
|---|---|
|||
|**CHTss (Sigmoid-based)**<br>**CHTss (Cubic-based)**|35.20<br>35.19<br>35.24<br>34.63<br>34.68<br>34.63<br>34.46<br>34.50<br>34.39<br>35.23<br>35.21<br>35.29<br>35.03<br>34.96<br>39.23<br>34.96<br>34.79<br>34.94|



Table 14: Perplexity comparison of LLaMA60M under different initial sparsity and _k_ values at 70% and 95% sparsity levels. Lower is better. 

|itylevels. Lower is better.||
|---|---|
|**LLaMA60M (70% sparsity)**|_k_=2_._0<br>_k_=4_._0<br>_k_=6_._0<br>_k_=8_._0<br>_k_=10_._0|
|||
|0.1<br>**27.61**<br>27.74<br>27.74<br>27.82<br>29.79<br>0.2<br>**27.60**<br>28.81<br>27.81<br>29.82<br>34.05<br>0.3<br>27.66<br>27.67<br>27.78<br>27.59<br>**27.58**<br>0.4<br>27.93<br>27.82<br>27.78<br>27.73<br>**27.71**<br>0.5<br>28.05<br>27.82<br>**27.62**<br>27.83<br>28.13||
|||
|**LLaMA60M (95% sparsity)**|_k_=2_._0<br>_k_=4_._0<br>_k_=6_._0<br>_k_=8_._0<br>_k_=10_._0|
|||
|0.1<br>0.2<br>0.3<br>0.4<br>0.5|37.00<br>36.02<br>**35.86**<br>36.42<br>36.59<br>36.83<br>36.08<br>**35.42**<br>38.39<br>35.87<br>36.67<br>**35.30**<br>35.53<br>35.67<br>35.78<br>35.71<br>35.48<br>**35.42**<br>35.44<br>35.63<br>36.76<br>35.70<br>**35.59**<br>35.72<br>36.05|



**Removal Fraction** _ζ_ **.** This parameter determines the proportion of existing connections that are pruned during each pruning-regrowth cycle. It directly controls the amount of structural change introduced to the network at each step. In our sensitivity analysis on Table 15, we evaluated a range of _ζ_ values (0.1, 0.2, 0.3, 0.4, 0.5) to assess their effect on the convergence and final performance of the CHTs model. The tests were performed on MLPs (CIFAR-10) at 90%, 95%, and 99% sparsities. Results are averaged over three seeds. When the sparsity is lower, we need a lower _ζ_ to keep the model trained more stably, and when the sparsity is higher, a higher _ζ_ is required to encourage the topological exploration. In all experiments involving MLP and Transformer, we use a _ζ_ of 0.3, and for LLaMA models, we use 0.1 for all the experiments. 

**CHTs vs. CHTss.** In most experiments, CHTss (with the sigmod density decay schedule) consistently outperforms CHTs. There are, however, a few counter-examples (e.g., LLaMA-1B at 70% target sparsity on OpenWebText) where CHTs slightly surpasses CHTss. To understand this outlier behavior, we first note that in the LLaMA-1B OpenWebText run the schedule only decreased density from 50% to 30%—a small change relative to the fixed 50% baseline—yielding very similar perplexities (14.66 vs. 15.15). When we extended the schedule to a much lower final density 5%, the advantage of CHTss became clear: CHTss reached 16.51 PPL versus 18.93 for CHTs. This aligns with our ITOP analysis: at 30% density, over 90% of candidate links appear during the evolution of both methods, but at 5% density CHTs touches only _∼_ 20% of links while CHTss still explores _∼_ 90%. In other words, density–decay confers a broader search over plausible connections precisely where search matters most—at high sparsity. We further corroborated this with a cross-scale study on six LLaMA sizes (20M( _→_ )1B) at 70%, 90% , and 95% sparsity on Table 16: averaged validation perplexity differences are not significant at 70% (Wilcoxon (p=0.688)), but become significant in favor of CHTss at 90% and 95% (p=0.031 for both). Taken together, these results indicate that occasional wins of CHTs arise in regimes where the decay is shallow and the effective search space is already well covered; they do not suggest that the sigmoid density–decay strategy fails on larger models or particular tasks. Rather, its benefit scales with the target sparsity: the more aggressive the final sparsity, the more CHTss helps by exposing and testing a larger set of candidate links during training. 

31 

**==> picture [397 x 160] intentionally omitted <==**

Figure 9: Top average BLEU for WS (grey) and BRF initialization methods on the Multi30k translation dataset of CHTs (left) and CHTss (right, with sigmoid decay) at different sparsity levels. Error bars denote the standard error across three seeds. 

**==> picture [396 x 162] intentionally omitted <==**

Figure 10: Top average BLEU for WS (grey) and BRF initialization methods on the IWSLT translation dataset of CHTs (left) and CHTss (right, with sigmoid decay) at different sparsity levels. Error bars denote the standard error across two seeds. 

**==> picture [198 x 149] intentionally omitted <==**

Figure 11: Win rates of BRF against WS over CHTs and CHTss models on different datasets (Multi30k and IWSLT) and different sparsities (0.9 and 0.95 for IWSLT and 0.7, 0.8, 0.9, 0.95 for Multi30k). 

32 

Table 15: Test accuracy (%) on CIFAR-10 under varying sparsity ratios and _ζ_ values. Mean _±_ standard deviation over multiple runs. Bold indicates best per column. 

|n over|multiple runs. Bold indicates bestper column.|
|---|---|
|_ζ_|**CIFAR-10 (90%)**<br>**CIFAR-10 (95%)**<br>**CIFAR-10 (99%)**|
|||
|0.1<br>0.2<br>0.3<br>0.4<br>0.5|**68.73**_±_**0.27**<br>69.28_±_0.08<br>63.45_±_0.04<br>68.63_±_0.10<br>**69.78**_±_**0.09**<br>67.30_±_0.21<br>68.47_±_0.10<br>69.37_±_0.10<br>**68.08**_±_**0.02**<br>67.90_±_0.10<br>69.01_±_0.08<br>67.83_±_0.19<br>67.47_±_0.14<br>68.56_±_0.15<br>67.24_±_0.14|



Table 16: CHTs vs. CHTss across sparsity levels (validation perplexity; lower is better). 

|**Sparsity**|**Mean CHTs**_↓_|**Mean CHTss**_↓_|_p_**-value**|**Signifcance**|
|---|---|---|---|---|
|0.70|23.81|23.88|0.688|Not signifcant|
|0.90|28.47|26.51|0.031|Signifcant|
|0.95|31.89|29.19|0.031|Signifcant|



## **I Integral of Sigmoid Density Decay and Cubic Density Decay** 

In this section, we show the formula for the proposed Sigmoid Density Decay and the Cubic decay implemented in GraNet [40] and GMP [54]. 

For the Cubic function, it is formulated as: 

**==> picture [274 x 27] intentionally omitted <==**

where _t ∈{t_ 0 _, t_ 0 + ∆ _t, . . . , t_ 0 + _n_ ∆ _t}_ , _si_ is the initial sparsity, _sf_ is the target sparsity, _t_ 0 is the starting epoch of gradual pruning, _tf_ is the end epoch of gradual pruning, and ∆ _t_ is the pruning frequency. 

Since our work focuses on MLP, Transformer, and LLMs, where FLOPs are linearly related to the density of the linear layers, the FLOPs of the whole training process are linearly related to the integral of the density function across the training time. The integral of the cubic decay function from _t_ 0 to _tf_ 

**==> picture [396 x 200] intentionally omitted <==**

**----- Start of picture text -----**<br>
End δ End δ<br>Start δ Start δ<br>**----- End of picture text -----**<br>


Figure 12: **Investigating the level of randomness in link removal strategies.** Top BLEU scores of the transformer model using CHTs with weight magnitude soft removal strategy, as the initial and final values of _δ_ take values in _{_ 0 _._ 1 _,_ 0 _._ 25 _,_ 0 _._ 5 _,_ 0 _._ 75 _,_ 0 _._ 8 _}_ . 

33 

is: 

**==> picture [265 x 51] intentionally omitted <==**

For the sigmoid decrease, the integral is: 

**==> picture [281 x 69] intentionally omitted <==**

To maintain consistency in the computational cost (FLOPs) during training compared to the cubic decay strategy, we reduce the number of steps in the sigmoid-based gradual density decrease by half. 

## **J Historical weights** 

Inspired by GMP [54, 41], we incorporate historical weights into our CHTs and CHTss implementation. During training, we maintain a historical weight matrix that records previously learned weights throughout the training process. When CHTs and CHTss predict new links, we initialize them using their corresponding historical weights - specifically, the values they held before being pruned. In this way, CHTs and CHTss enable weight recovery with preserved memory, allowing the model to retain valuable prior information. 

## **K Pseudo code of node-based CH link predictor** 

We present the pseudocode for the node-based CH2-L3 regrowth method in Algorithm 1, which comprises three main steps. 

**Step 1:** We compute the sets of path length-2 (L2) neighbors from nodes _U_ to _U_ and from _V_ to _V_ . The computational complexity of this step is 

**==> picture [112 x 11] intentionally omitted <==**

where _⟨dmdn⟩_ denotes the average product of degrees _dm_ and _dn_ across all relevant node pairs. In the case of an ultra-sparse network (e.g., with average degree close to 1), this simplifies to _O_ ( _m_ + _n_ ). 

**Step 2:** We treat each destination node along the _UU_ and _V V_ paths as a potential common neighbor and compute the CH2-L3 score according to Equation (3) in the main text. This step has a time complexity of 

**==> picture [56 x 12] intentionally omitted <==**

**Step 3:** We aggregate the CH2-L3 scores across all hop-3 nodes. This step requires 

**==> picture [100 x 11] intentionally omitted <==**

time. Under the ultra-sparse assumption, this further reduces to _O_ ( _mn_ + _nm_ ). 

Combining all steps, the overall time complexity of the node-based CH2-L3 regrowth procedure is 

**==> picture [104 x 11] intentionally omitted <==**

Since all operations can be implemented in a matrix-wise manner leveraging GPU acceleration assuming all matrices as dense, the total time complexity becomes 

**==> picture [70 x 12] intentionally omitted <==**

34 

**Algorithm 1** CH2–L3n 

**Require:** Binary bipartite adjacency matrix _AUV ∈{_ 0 _,_ 1 _}[m][×][n] ▷U_ –to– _V_ edges **Ensure:** Score matrix _S ∈_ R _[m][×][n]_ with _S_ [ _i, j_ ] _>_ 0 only if _AUV_ [ _i, j_ ] = 0 1: **function** CH2-L3N( _AUV_ ) 2: _AV U ← A[⊤] UV ▷V → U_ edges 3: _dU ←_ row-sum( _AUV_ ) 4: _dV ←_ row-sum( _AV U_ ) _▷_ **Step 1:** two–step paths inside each partition 5: _UU ← AUV AV U ▷U → V → U_ 6: _V V ← AV U AUV ▷V → U → V ▷_ **Step 2:** CH2-L3n preparatory scores 7: _init eUU ←_ 0 _m×m, eV V ←_ 0 _n×n_ 8: **for** _i ←_ 1 **to** _m_ **do** 9: **for** _j ←_ 1 **to** _m_ **s.t.** _j_ = _i_ **and** _UU_ [ _i, j_ ] _>_ 0 **do** 10: _ext ← dU_ [ _j_ ] _− UU_ [ _i, j_ ] _−_ 1 _[j]_[]][ + 1] 11: _eUU_ [ _i, j_ ] _←[UU]_[[] _[i][,] ▷_ # According to Equation (3) _ext_ + 1 12: **end for** 13: **end for** 14: **for** _a ←_ 1 **to** _n_ **do** 15: **for** _b ←_ 1 **to** _n_ **s.t.** _b ̸_ = _a_ **and** _V V_ [ _a, b_ ] _>_ 0 **do** 16: _ext ← dV_ [ _b_ ] _− V V_ [ _a, b_ ] _−_ 1[[] _[a][,][ b]_[]][ + 1] 17: _eV V_ [ _a, b_ ] _←[V V] ▷_ # According to Equation (3) _ext_ + 1 18: **end for** 19: **end for** _▷_ **Step 3:** final CH2–L3n scores 20: _init S ←_ 0 _m×n_ 21: **for** _i ←_ 1 **to** _m_ **do** 22: **for** _a ←_ 1 **to** _n_ **s.t.** _AUV_ [ _i, a_ ] = 0 **do** _m_ 23: _SUV ←_ � _eUU_ [ _i, j_ ] _AUV_ [ _j, a_ ] _j_ =1 _n_ 24: _SV U ←_ � _eV V_ [ _a, b_ ] _AV U_ [ _b, i_ ] _b_ =1 25: _S_ [ _i, a_ ] _← SUV_ + _SV U_ 26: **end for** 27: **end for** 28: **return** _S_ 29: **end function** 

## **L Extra results of LLaMA1b** 

**Language modeling.** We present a comparison of CHTs, CHTss, and fully connected network on language modeling tasks using the LLaMA-1B model on Table 17. The results clearly demonstrate that CHTs outperform the fully connected (FC) baseline at 70%, even at a high sparsity of 95%, CHTss achieves a perplexity of 16.51, which is remarkably close to the FC baseline. 

**Zero-shot performance.** We compare CHTs, CHTss, and a fully connected (FC) network on zero-shot benchmarks, as summarized in Table 20. At 90% and 95% sparsity, CHTs often surpasses the FC baseline, suggesting improved generalization to unseen data. At 70% sparsity, CHTs is comparable to FC, whereas at higher sparsity (90–95%) it can exceed FC in accuracy. This pattern appears at odds with perplexity trends, so we provide additional analysis for readers evaluating pretrained models on GLUE/SuperGLUE in a zero-shot setting. 

A key confound is label imbalance in several tasks: some datasets contain markedly skewed positive/negative distributions. In practice, we observed that models sometimes emit nearly the same 

35 

Table 17: **Validation perplexity of different dynamic sparse training (DST) methods on OpenWebText using LLaMA-1B across varying sparsity levels.** . Lower perplexity corresponds to better model performance. The performances that surpass the fully connected model are marked with “*". 

|**Sparsity**|**0.7**|**0.9**|**0.95**|
|---|---|---|---|
|FC||14.62||
|CHTs|14.53*|17.14|18.93|
|CHTss|15.15|15.62|16.51|



Table 18: Label imbalance in selected GLUE/SuperGLUE tasks (positive vs. negative counts and proportions). 

|**Dataset**|**Pos (count, %)**|**Neg (count, %)**|
|---|---|---|
|CoLA|721 (69.13%)|322 (30.87%)|
|MRPC|279 (68.38%)|129 (31.62%)|
|QQP|14,885 (36.82%)|25,545 (63.18%)|
|BoolQ|2,033 (62.17%)|1,237 (37.83%)|



label for most inputs, yielding deceptively strong _accuracy_ if that label matches the dataset majority class. Table 18 reports the class ratios for representative tasks. 

To mitigate this issue, we report Matthews correlation coefficient (MCC) instead of accuracy. MCC is robust to class imbalance and better reflects the quality of binary predictions. Table 19 shows averaged MCC over GLUE/SuperGLUE under multiple sparsity regimes. 

The 70% sparse models (MCC 0 _._ 028 for CHTs; 0 _._ 033 for CHTss) are on par with the dense FC baseline (MCC 0 _._ 031), but MCC declines as sparsity increases; at 95% sparsity, negative MCC indicates predictions are anticorrelated with ground truth (worse than random). We attribute part of this degradation to compute-limited pretraining budgets (e.g., up to 8.9B tokens for LLaMA-1B in our runs), which are insufficient to reach the regime where zero-shot performance is reliable at extreme sparsity. _Recommendation:_ for zero-shot evaluation on imbalanced datasets, prefer MCC (or similarly balanced metrics) over raw accuracy, especially when comparing across sparsity levels and training budgets. 

## **M Extra Related Works** 

More recently, BiDST has elegantly reframed DST as a bi-level optimization problem to co-optimize the weights and the sparsity mask simultaneously [57]. Other methods improve the training dynamics itself, such as AC/DC, which alternates between sparse and dense phases [58], or Powerpropagation, which introduces a sparsity-inducing weight reparameterization [59]. To enhance generalization in the often-chaotic loss landscape of sparse models, S2-SAM provides an efficient, plug-and-play sharpness-aware optimizer [60]. Another thrust of research adapts DST for specific architectural or hardware advantages. For example, SLaK utilizes dynamic sparsity to enable massive, highperformance kernels in CNNs [61]. CHASE provides a practical method to translate unstructured dynamic sparsity into hardware-friendly, channel-level sparsity [62]. Addressing network health, NEURREV proposes a mechanism to revitalize “dormant neurons” that can emerge during training [63]. 

## **N Experiments compute resources** 

All experiments were conducted on NVIDIA A100 80GB GPUs. MLP and Transformer models were trained using a single GPU, while LLaMA models were trained using eight GPUs in parallel. 

36 

Table 19: Average MCC on zero-shot GLUE/SuperGLUE. FC denotes the dense fully connected model. 

|model.||||||||
|---|---|---|---|---|---|---|---|
|**Metric**|FC|70% CHTs|70% CHTss|90% CHTs|90% CHTss|95% CHTs|95% CHTss|
|AVG MCC|0.031|0.028|0.033|0.031|0.022|_−_0_._003|_−_0_._007|



Table 20: Zero-shot evaluation of LLaMA-1B across GLUE and SuperGLUE. ACC scores are shown. Values are mean ± sd over 5 seeds (lm-eval [56]). Red values indicate the top scores over models and sparsities for a benchmark. 

|Dataset<br>FC|70 % sparsity<br>CHTs<br>CHTss|90 % sparsity<br>CHTs<br>CHTss|95 % sparsity<br>CHTs<br>CHTss|
|---|---|---|---|
|CoLA<br>40.27 ± 1.52<br>MNLI<br>32.89 ± 0.47<br>MRPC<br>39.95 ± 2.43<br>QNLI<br>49.95 ± 0.68<br>QQP<br>47.94 ± 0.25<br>RTE<br>47.29 ± 3.01<br>SST-2<br>65.71 ± 1.61<br>WNLI<br>50.70 ± 5.98<br>Hellaswag<br>28.98 ± 0.45<br>Boolq<br>41.07 ± 0.86<br>CB<br>48.21 ± 6.74<br>Copa<br>65.00 ± 4.79|38.83 ± 1.51<br>44.20 ± 1.54<br>32.77 ± 0.47<br>32.65 ± 0.47<br>40.44 ± 2.43<br>36.03 ± 2.38<br>50.96 ± 0.68<br>49.70 ± 0.68<br>43.40 ± 0.25<br>49.12 ± 0.25<br>46.93 ± 3.00<br>55.96 ± 2.99<br>52.98 ± 1.69<br>49.66 ± 1.69<br>49.30 ± 5.98<br>47.89 ± 5.97<br>28.75 ± 0.45<br>28.70 ± 0.45<br>50.89 ± 0.87<br>48.62 ± 0.87<br>50.00 ± 6.74<br>50.00 ± 6.74<br>62.00 ± 4.88<br>64.00 ± 4.82|50.53 ± 1.55<br>67.88 ± 1.45<br>32.83 ± 0.47<br>32.73 ± 0.47<br>66.42 ± 2.34<br>38.48 ± 2.41<br>50.36 ± 0.68<br>49.79 ± 0.68<br>50.57 ± 0.25<br>48.22 ± 0.25<br>46.57 ± 3.00<br>52.71 ± 3.01<br>49.08 ± 1.69<br>53.21 ± 1.69<br>56.34 ± 5.93<br>50.70 ± 5.98<br>27.57 ± 0.45<br>28.13 ± 0.45<br>44.59 ± 0.87<br>47.46 ± 0.87<br>50.00 ± 6.74<br>50.00 ± 6.74<br>66.00 ± 4.76<br>63.00 ± 4.85|68.84 ± 1.43<br>31.83 ± 1.44<br>32.91 ± 0.47<br>32.68 ± 0.47<br>67.65 ± 2.32<br>46.81 ± 2.47<br>49.26 ± 0.68<br>51.42 ± 0.68<br>36.92 ± 0.24<br>41.70 ± 0.25<br>52.35 ± 3.01<br>49.46 ± 3.01<br>54.59 ± 1.69<br>49.08 ± 1.69<br>50.70 ± 5.98<br>40.85 ± 5.88<br>27.57 ± 0.45<br>27.53 ± 0.45<br>55.38 ± 0.87<br>52.14 ± 0.87<br>37.50 ± 6.53<br>48.21 ± 6.74<br>60.00 ± 4.92<br>60.00 ± 4.92|
|**Average**<br>46.50|45.60<br>46.38|49.24<br>48.53|49.47<br>44.31|



37 


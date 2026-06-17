# **Biological Processing Units: Leveraging an Insect Connectome to Pioneer Biofidelic Neural Architectures** 

Siyu Yu[1] _[,]_[2] _[,⋆]_[[0009] _[−]_[0001] _[−]_[1459] _[−]_[2567]] , Zihan Qin[1] _[,⋆]_[[0009] _[−]_[0000] _[−]_[8261] _[−]_[5786]] , Tingshan Liu[1] _[,⋆]_[[0000] _[−]_[0003] _[−]_[0232] _[−]_[2495]] , Beiya Xu[1[0009] _[−]_[0002] _[−]_[1462] _[−]_[3850]] , R. Jacob Vogelstein[3[0000] _[−]_[0001] _[−]_[8159] _[−]_[9577]] , Jason Brown[2] , and Joshua T. Vogelstein[1] _[,]_[2[0000] _[−]_[0003] _[−]_[2487] _[−]_[6237]] 

> 1 Johns Hopkins University, Baltimore MD 21218, USA 

> 2 Pomegranate Intelligence, Baltimore MD 21218, USA 

> 3 Catalio Capital Management, New York NY 10010, USA `{syu80, zqin16, tliu68, bxu41, jovo}@jhu.edu jason@pomintel.com rjv@cataliocapital.com` 

**Abstract.** The complete connectome of the _Drosophila_ larva brain offers a unique opportunity to investigate whether biologically evolved circuits can support artificial intelligence. We convert this wiring diagram into a Biological Processing Unit (BPU)—a fixed recurrent network derived directly from synaptic connectivity. Despite its modest size (3,000 neurons and 65,000 weights between them), the unmodified BPU achieves 98% accuracy on MNIST and 58% on CIFAR-10, surpassing size-matched MLPs. Scaling the BPU via structured connectome expansions further improves CIFAR-10 performance, while modality-specific ablations reveal the uneven contributions of different sensory subsystems. On the ChessBench dataset, a lightweight GNN-BPU model trained on only 10,000 games achieves 60% move accuracy, nearly 10x better than any size transformer. Moreover, CNN-BPU models with _∼_ 2M parameters outperform parameter-matched Transformers, and with a depth-6 minimax search at inference, reach 91.7% accuracy, exceeding even a 9Mparameter Transformer baseline. These results demonstrate the potential of biofidelic neural architectures to support complex cognitive tasks and motivate scaling to larger and more intelligent connectomes in future work. 

**Keywords:** biological inspired AI · biological connectome · chess. 

## **1 Introduction** 

The recent completion of the entire _Drosophila_ larval connectome, comprising approximately 3000 neurons and 65,000 weights between them, provides a rare opportunity to examine a fully natural-optimized neural circuit [1]. In contrast 

> _⋆_ Equal contribution 

2 Yu _et al._ 

to large-scale artificial models that often require extensive computation and tuning, biological systems like _Drosophila_ achieve complex behaviors with minimal resources. This suggests that a complete biological connectome may serve as a biological lottery ticket [2, 3]: a compact, evolutionarily selected circuit capable of supporting a broad range of cognitive functions. 

Previous studies [4–6] have leveraged partial connectome structures from adult _Drosophila_ [7] to guide neural network design, demonstrating the promise of biologically inspired architectures. However, such approaches may miss critical dynamics and functional motifs present only in the complete connectome. With the full larval connectome now available, we hypothesize that a fully intact biological neural circuit can inform the design of efficient and generalizable artificial systems, as it embodies solutions to many of the same computational challenges neural networks aim to address. To test this, we directly employ the complete connectome without altering its structure or synaptic weights, assessing whether it can support diverse cognitive tasks without task-specific adaptation. 

Here we directly leverage the complete _Drosophila_ larval connectome to develop Biological Processing Units (BPUs). We evaluate BPU on two categories of tasks: sensory processing (MNIST, CIFAR-10) [4] and decision-making (chess puzzles) [8]. These tasks are chosen to reflect fundamental cognitive functions—perception, memory, and planning—that are intrinsic to both artificial and biological agents. By including peripheral sensors alongside the central BPU circuit, we test whether the BPU can support generalized cognition under realistic biological constraints. Finally, to understand how far this advantage can scale, we introduce a directed, signed degree–corrected Stochastic Block Model (DCSBM) that lets us expand the larval connectome up to 5× while faithfully preserving its block-level wiring statistics and synaptic polarity. 

The BPU achieves competitive performance across all tasks, matching or surpassing baseline models with similar parameter counts. These results support the idea that intact biological connectomes can serve as effective, reusable substrates for intelligent computation. 

## **2 Methods** 

## **2.1 BPU architecture** 

We embed the entire larval _Drosophila_ connectome as a fixed-weight recurrent core. The synaptic weights are directly taken from the connectome and remain unchanged during training. Only the input and output projections are optimized via gradient descent. Over a fixed number of unrolled steps, activity propagates through the reservoir. The trainable projections map inputs to internal dynamics and decode them into task-relevant outputs. 

As illustrated in Figure 1, the BPU utilizes the axon-to-dendrite connectivity adjacency matrix derived from electron microscopy reconstructions [4]. We assign directional polarity (excitatory or inhibitory) to each connection by multiplying synaptic counts with neurotransmitter-based annotations [9]. The 

Biological Processing Units 3 

**==> picture [347 x 102] intentionally omitted <==**

**----- Start of picture text -----**<br>
A B C<br>Internal<br>Inputs Outputs<br>…<br>O<br>…<br>Sensory Motor<br>**----- End of picture text -----**<br>


**Fig. 1. Biological Processing Unit (BPU) architecture based on the larval** _**Drosophila**_ **connectome. (A)** Raw axon-to-dendrite adjacency matrix representing synaptic connectivity. **(B)** Signed connectivity matrix after applying neurotransmitterderived polarities and partitioning neurons into sensory, internal, and output pools. **(C)** Schematic of the BPU: inputs project to sensory neurons, activity propagates through the fixed recurrent core, and outputs are read from designated output neurons. In (B) and (C), blue denotes excitatory connections and red denotes inhibitory ones. 

neurons are partitioned into three functionally distinct pools based on anatomical annotations, while retaining all neurons within the recurrent computational core: 

- Sensory ( _N_ = 430): neurons responsible for encoding external stimuli; 

- Output ( _N_ = 218): descending neurons projecting to motor circuits (DNSEZ) and ring gland neurons (RGN) targeting neuroendocrine structures; 

- Internal neurons ( _N_ = 2304): all other neurons 

The BPU’s recurrent dynamics evolve according to: 

**==> picture [283 x 45] intentionally omitted <==**

Here, _f_ ( _·_ ) denotes a nonlinear activation function (typically ReLU), and W _xy_ represent fixed, connectome-derived synaptic weight matrices. To preserve biological plausibility, we constrain the temporal depth of recurrent processing (i.e., the number of time steps _T_ ) to match the characteristic synaptic propagation path length observed in the _Drosophila_ sensory pathways. 

## **2.2 Connectome expansion via a directed, signed DCSBM** 

To explore how scale influences performance, we stochastically enlarge the larval connectome using a directed, signed degree–corrected stochastic block model (DCSBM) [10, 11]. Let _W ∈_ R _[N]_[0] _[×][N]_[0] denote the signed adjacency of the empirical core and _zi ∈{_ 0 _,_ 1 _,_ 2 _}_ its sensory/internal/output labels. We fit a DCSBM with separate out- and in-strengths _θi_[out] _, θi_[in][,][block–pair][weight][densities] _[ω][gh]_[(Eq.][2)] and sign probabilities _pgh_ (Eq. 3). 

4 Yu _et al._ 

**==> picture [250 x 29] intentionally omitted <==**

**==> picture [249 x 25] intentionally omitted <==**

To obtain a target size _N_ = _F N_ 0 (expansion factor _F ∈{_ 1 _,_ 2 _, ...,_ 5 _}_ ) we first bootstrap paired in- and out-degrees ( _θ_[out] _, θ_[in] ) from core neurons within the same block and then rescale the two vectors so that[�] _θ_[out] =[�] _θ_[in] . Then we draw block labels by the empirical proportion 

**==> picture [105 x 11] intentionally omitted <==**

For every ordered node pair ( _u, v_ ), we sample a Poisson edge count 

**==> picture [120 x 13] intentionally omitted <==**

and assign its polarity by a Bernoulli draw with probability _pzuzv_ . Finally, the original _N_ 0 _× N_ 0 sub-matrix is restored exactly so all experiments remain anchored in the real connectome. 

## **2.3 Baseline for image classification** 

To adapt standard image datasets for the BPU architecture, we flatten each image and project it into the BPU’s sensory neuron subspace. The MNIST input (784 dimensions) and the CIFAR-10 input (3,072 dimensions) are linearly mapped to match the size of the sensory input. The resulting vector serves as the external input E( _t_ ) in _t_ = 0, as defined in Equation 1. 

To isolate architectural effects, we use a two-hidden-layer MLP in which only the input-to-first-hidden and second-hidden-to-output mappings are trainable, together matching exactly the BPU projection parameter count, while the intermediate hidden-to-hidden transform remains a fixed untrained random projection. Activations (ReLU) and optimization mirror BPU settings. 

## **2.4 BPU for Chess Puzzle Solving** 

For the chess task, we evaluate the BPU using _puzzle accuracy_ , the percentage of puzzles where the predicted move sequence exactly matches the full ground-truth solution. Each puzzle is drawn from a curated Lichess dataset [12], annotated with Elo difficulty ratings ranging from 399 to 2867 and complete solution sequences. 

We use the ChessBench dataset [4], which provides 10 _×_ 10[6] board positions sourced from Lichess.org games. Each state is encoded using the ForsythEdwards Notation (FEN) [13], and annotated using Stockfish 16 under 50 ms per board constraints. The state value labels reflect the estimated win probabilities 

Biological Processing Units 

5 

between 0% and 100%. To convert FEN strings into fixed-size neural inputs for the BPU, we implement two encoding pipelines: 

**GNN-based encoder.** We represent each FEN position as a 65-node directed graph: the 64 board squares plus a central “hub”. Square nodes carry a 12-dimensional one-hot piece indicator, while the hub stores 22 global features (castling rights, en passant location, and scaled half- and full-move clocks), resulting in 34-dimensional feature vectors for all nodes. Edges comprise (i) all potential moves for both sides and (ii) bidirectional links between each square and the hub. Each edge is annotated with a 7-bit attribute indicating legality, capture, defense, promotion, side, forward/backward direction, and local vs. global connection. 

We first project all node and edge features into R[128] via learnable linear layers. The graph is then fed through two consecutive GINEConv layers [14], updating each node feature vector by aggregating its neighbors and edge attributes. Global average and max pooling of node features yield a 256-dimensional embedding, which is passed to the fixed-weight recurrent BPU. 

**CNN-based encoder.** To match the parameter count of Transformer models in ChessBench [8], we tokenize FEN into a [24 _,_ 8 _,_ 8] tensor comprising 22 semantic channels (12 piece types, side-to-move, castling rights, en passant, move counters, promotion indicators) and 2 spatial coordinate channels. The tensor is processed by a six-layer convolutional encoder: a two-layer convolutional stem 3 _×_ 3 followed by six residual blocks with alternating Squeeze-and-Excitation (SE) modules and stochastic depth. Global average pooling yields a 256-dimensional embedding. The embedding is passed to the fixed-weight recurrent BPU, with only the input and output projections trainable. 

We evaluate three variants: GNN, CNN, and CNN enhanced with a minimax search and alpha-beta pruning during inference [15–18], which refines move selection without increasing model capacity. The precision of the puzzle is measured under the training budgets of the games _{_ 10[4] , 10[5] , 10[6] _}_ , benchmarked against previous results from ChessBench [4]. Final evaluation is performed on 10,000 curated Lichess puzzles, each with full solution sequences and Elo scores. 

## **3 Results** 

## **3.1 Image Classification** 

Figure 2A summarizes test accuracies on MNIST and CIFAR-10 for two untrainable architectures: the full-connectome BPU and a two-layer MLP baseline with matched projection parameters. On MNIST, the full-connectome reservoir peaks at 98% test accuracy, compared to 97% for the MLP. On the more challenging CIFAR-10 task, the full reservoir reaches 58% while the MLP achieves 52%. These performance gaps persist across small to full training set sizes. 

To probe whether additional fly-like circuitry can push performance further, we expanded the connectome with the signed DCSBM generator and froze the resulting recurrent weights. Figure 2B shows that CIFAR-10 accuracy grows 

6 Yu _et al._ 

**==> picture [347 x 102] intentionally omitted <==**

**----- Start of picture text -----**<br>
A B<br>**----- End of picture text -----**<br>


**Fig. 2. (A)** Test accuracy on MNIST and CIFAR-10 for the original connectomederived BPU. **(B)** CIFAR-10 test accuracy as a function of expansion factor for expanded BPUs via DCSBM. Shaded bands indicate average over five runs and are compared to a size-matched 2-layer MLP baseline. 

monotonically with expansion factor: a 2 _×_ graph already surpasses the original BPU, and performance continues to climb, remaining consistently above the sizematched MLP baseline. Thus, scaling the biological prior yields clear benefits without any extra training of the recurrent matrix. 

Figure 3 shows an ablation study that evaluates the contribution of different sensory modalities to image classification. Performance does not scale directly with neuron count, e.g., the respiratory group (26 neurons) outperforms the larger sight-related group (29 neurons) when trained with a small training sample size, highlighting the role of functional specificity. This may reflect evolved relevance of certain modalities, or alternatively, developmental limitations of the 6-hour-old larva[1], where some circuits may be immature. 

**==> picture [243 x 111] intentionally omitted <==**

**Fig. 3.** Test accuracy on MNIST and CIFAR-10 with modality-restricted reservoirs. Parentheses indicate (number of neurons / time steps) for each sensory subset. 

Biological Processing Units 

7 

**==> picture [201 x 114] intentionally omitted <==**

**Fig. 4.** Puzzle-solving accuracy (%) with GNN–BPU model and ChessBench reference models of multiple sizes. Despite having only 232 _,_ 912 trainable parameters, the GNN–BPU converges even with small dataset size and achieves competitive or superior accuracy to the baselines. 

## **3.2 Chess Puzzle Solving** 

We evaluated our GNN–BPU model, which contains only 232,912 trainable parameters, on the ChessBench dataset [8] under multiple training budgets. As illustrated in Figure 4, the model attains accuracies of 59%, 61%, and 63% when trained on 10[4] , 10[5] , and 10[6] games, respectively. Remarkably, the GNN–BPU performs strongly with even smaller datasets. It also consistently surpasses the smallest reference model from Ruoss et al. [8], despite that baseline still having more parameters—and remains competitive with substantially larger models. These results underscore the effectiveness of our biologically inspired reservoir architecture for data-efficient strategic reasoning. 

**==> picture [361 x 145] intentionally omitted <==**

**Fig. 5.** Bars show the percentage of puzzles solved correctly within each Elo bin. The legend indicates model type, parameter count, and overall accuracy. At equal scale ( _∼_ 2M), CNN–BPU outperforms the Transformer baseline. With search, CNN–BPU surpasses even a 9M-parameter Transformer. 

8 Yu _et al._ 

To further assess scalability, we investigate whether the BPU remains competitive at the same parameter scale as Transformer baselines. As shown in Figure 5, the CNN–BPU model with _∼_ 2M parameters outperforms the Transformer of equivalent size. When equipped with a minimax search of depth 6 and alpha–beta pruning at inference, CNN–BPU achieves 91.71% puzzle accuracy, surpassing even the 9M-parameter Transformer baseline. 

To ensure a fair comparison, we reimplement the 2M-parameter Transformer using the open-source code from [8], and directly evaluate the official pretrained 9M-parameter checkpoint. All models are assessed using puzzle accuracy across Elo bins, as shown in Figure 5. 

## **4 Discussion** 

Our results demonstrate that the complete _Drosophila_ larval connectome, without any structural modification, can serve as an efficent neural substrate for complex tasks such as image recognition and chess puzzle solving. This suggests that even circuits evolved for simpler behaviors possess a significant latent computational capacity. 

To clearly isolate this intrinsic capacity, we intentionally avoided any structural rewiring or synaptic tuning. While this approach highlights the connectome’s inherent capabilities, performance could likely be enhanced. Future work could explore refining the connectome with task-specific adaptations, such as structure-aware rescaling or constrained plasticity mechanisms [19, 20], without losing its biological inductive priors. 

Another important direction for future research is understanding how different parts of the connectome contribute to task performance. Our ablation studies focused on sensory neuron types, but functional specialization may depend on richer circuit motifs, such as feedback loops [21], recurrent clusters, or region-specific pathways that cannot be captured by simple type-based removal. Elucidating the causal roles of these substructures remains an important open question. 

Finally, the connectome used here is from a larva only a few hours posthatching. While it provides a complete, compact testbed, its behavioral repertoire is limited. As more comprehensive adult or cross-species connectomes become available, it will be crucial to evaluate whether the same principles scale to larger and more cognitively capable brains, such as the adult _Drosophila_ [22], and eventually the human connectome. The ultimate goal—though ambitious—is clear: leveraging detailed connectomic data, starting from the simplest complete brain structures, to build increasingly intelligent and capable AI. 

**Acknowledgments** We acknowledge support from the National Science Foundation (Grant No.,20-540). We also thank Yuxin Bai for insightful feedback and suggestions. 

Biological Processing Units 

9 

## **References** 

1. Michael Winding, Benjamin D Pedigo, Christopher L Barnes, Heather G Patsolic, Youngser Park, Tom Kazimiers, Akira Fushiki, Ingrid V Andrade, Avinash Khandelwal, Javier Valdes-Aleman, et al. The connectome of an insect brain. _Science_ , 379(6636):eadd9330, 2023. 

2. Jonathan Frankle and Michael Carbin. The lottery ticket hypothesis: Finding sparse, trainable neural networks, 2019. 

3. Ramin Hasani, Mathias Lechner, Alexander Amini, Daniela Rus, and Radu Grosu. A natural lottery ticket winner: Reinforcement learning with ordinary neural circuits. In Hal Daumé III and Aarti Singh, editors, _Proceedings of the 37th International Conference on Machine Learning_ , volume 119 of _Proceedings of Machine Learning Research_ , pages 4082–4093. PMLR, 13–18 Jul 2020. 

4. Juho K Lappalainen, Fabian D Tschopp, Sai Prakhya, et al. Connectomeconstrained networks predict neural activity across the fly visual system. _Nature_ , 634:1132–1140, 2024. 

5. Lei Wang, Xiaohui Zhang, Qian Li, et al. Incorporating neuro-inspired adaptability for continual learning in artificial intelligence. _Nature Machine Intelligence_ , 5:1356– 1368, 2023. 

6. Yuchen Liang, Chaitanya K. Ryali, Benjamin Hoover, Leopold Grinberg, Saket Navlakha, Mohammed J. Zaki, and Dmitry Krotov. Can a fruit fly learn word embeddings?, 2021. 

7. Zhihao Zheng, Jason S Lauritzen, Eric Perlman, Craig G Robinson, Matthew Nichols, Daniel Milkie, Oriol Torrens, Jackson Price, Conrad B Fisher, Nick Sharifi, Sarah A Calle-Schuler, Lenka Kmecova, Iman J Ali, Benjamin Karsh, Emily T Trautman, John A Bogovic, Philipp Hanslovsky, Gregory S X E Jefferis, Michael Kazhdan, Khaled Khairy, Stephan Saalfeld, Richard D Fetter, and Davi D Bock. A complete electron microscopy volume of the brain of adult drosophila melanogaster. _Cell_ , 174(3):730–743.e22, 2018. 

8. Anian Ruoss, Grégoire Delétang, Sourabh Medapati, Jordi Grau-Moya, Li Kevin Wenliang, Elliot Catt, John Reid, Cannada A. Lewis, Joel Veness, and Tim Genewein. Amortized planning with large-scale transformers: A case study on chess. _arXiv preprint arXiv:2402.04494_ , 2024. 

9. Qingyang Wang, Albert Cardona, Marta Zlatic, Joshua T Vogelstein, and Carey E Priebe. Why do we have so many excitatory neurons? _bioRxiv_ , pages 2024–09, 2024. 

10. Brian Karrer and Mark EJ Newman. Stochastic blockmodels and community structure in networks. _Physical Review E—Statistical, Nonlinear, and Soft Matter Physics_ , 83(1):016107, 2011. 

11. Chao Gao, Zongming Ma, Anderson Y Zhang, and Harrison H Zhou. Community detection in degree-corrected block models. _The Annals of Statistics_ , 2018. 

12. Nicholas Carlini. Playing chess with large language models, 2023. 

13. SJ Edwards, SD Forsyth, J Stanback, and A Saremba. Standard portable game notation specification and implementation guide. 1994. _URL https://ia902908. us. archive. org/26/items/pgn-standard-1994-03-12/PGN standard_ , pages 03–12, 1994. 

14. PyTorch Geometric Development Team. torch_geometric.nn.conv.GINEConv — pytorch geometric 2.5.1 documentation, 2024. 

15. Claude E. Shannon. Programming a computer for playing chess. _Philosophical Magazine_ , 41:256–275, 1950. Introduced the Minimax algorithm in chess. 

10 Yu _et al._ 

16. Atharva Gundawar, Yuchao Li, and Dimitri Bertsekas. Superior computer chess with model predictive control, reinforcement learning, and rollout, 2024. 

17. Donald E. Knuth and Ronald W. Moore. An analysis of alpha-beta pruning. _Artificial Intelligence_ , 6(4):293–326, 1975. 

18. Samuel H Fuller, John G Gaschnig, JJ Gillogly, et al. _Analysis of the alpha-beta pruning algorithm_ . Department of Computer Science, Carnegie-Mellon University, 1973. 

19. Benjamin D Pedigo, Mike Powell, Eric W Bridgeford, Michael Winding, Carey E Priebe, and Joshua T Vogelstein. Generative network modeling reveals quantitative definitions of bilateral symmetry exhibited by a whole insect brain connectome. _Elife_ , 12:e83739, 2023. 

20. Alfred Geroldinger and M. Azeem Khadam. On the arithmetic of monoids of ideals, 2021. 

21. A. Vishwanathan, A. Sood, J. Wu, et al. Predicting modular functions and neural coding of behavior from a synaptic wiring diagram. _Nature Neuroscience_ , 27:2443– 2454, 2024. 

22. P. K. Shiu, G. R. Sterne, N. Spiller, et al. A drosophila computational brain model reveals sensorimotor processing. _Nature_ , 634:210–219, 2024. 


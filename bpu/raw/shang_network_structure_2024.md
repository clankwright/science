# Network Structure Governs Drosophila Brain Functionality 

Xiaoyu Zhang[1] , Pengcheng Yang[1] , Jiawei Feng[1] , Kang Wen[1] , Qiang Luo[2] , Wei Lin[2] , and Xin Lu[∗][1] 

> 1College of Systems Engineering, National University of Defense Technology, Changsha 410073, China 

> 2Research Institute of Intelligent Complex Systems, Fudan University, Shanghai 200433, China 

## **Abstract** 

How intelligence emerges from living beings has been a fundamental question in neuroscience. However, it remains largely unanswered due to the complex neuronal dynamics and intricate connections between neurons in real neural systems. To address this challenge, we leveraged the largest available adult Drosophila connectome data set, and constructed a comprehensive computational framework based on simplified neuronal activation mechanisms to simulate the observed activation behavior within the connectome. The results revealed that even with rudimentary neuronal activation mechanisms, models grounded in real neural network structures can generate activation patterns strikingly similar to those observed in the actual brain. A significant discovery was the consistency of activation patterns across various neuronal dynamic models. This consistency, achieved with the same network structure, underscores the pivotal role of network topology in neural information processing. These results challenge the prevailing view that solely relies on neuron count or complex individual neuron dynamics. Further analysis demonstrated a near-complete separation of the visual and olfactory systems at the network level. Moreover, we found that the network distance, rather than spatial distance, is the primary determinant of activation patterns. Additionally, our experiments revealed that a reconnect rate of at least 1‰ was sufficient to disrupt the previously observed activation patterns. We also observed synergistic effects between the brain hemispheres: Even with unilateral input stimuli, visual-related neurons in both hemispheres were activated, highlighting the importance of interhemispheric communication. These findings emphasize the crucial role of network structure in neural activation and offer novel insights into the fundamental principles governing brain functionality. 

Keywords: brain network, network communication model, drosophila connectome, activation pattern 

## **1 Introduction** 

The neural systems of intelligent beings maintain continuously dynamical communication [1]. This process gives rise to macroscopic emergence across the entire neural system. Such communication fosters the emergence of intelligence in all intelligent life forms. Consequently, comprehending and replicating this process has become an indispensable avenue for unraveling biological intelligence and realizing artificial intelligence [2]. 

Neural systems are often modeled as interconnected networks [3], with neurons engaging in constant communication via synapses within the network’s topology. To elucidate the relationship between the network itself and its dynamics in a neural network, various models have been developed, spanning from the cellular level to the whole brain. For example, neuronal dynamic models like Leaky Integrate-and-Fire (LIF) model [4] are designed to describe the electrical activity and dynamic behavior of neurons [5]. These models are characterized by the following features: they typically use a set of differential equations to describe the electrophysiological behavior of neurons and usually contain a set of parameters that need to be measured experimentally or estimated. On a larger scale, a vast array of isolated neuronal dynamics, ranging from several to millions, are interconnected and parameter-optimized to simulate the local or global dynamics of the brain [6]. Due to the requirements of commonly used algorithms like backpropagation on network structures, these methods typically do not fully adhere to the structures of real neural networks. Another category of network-based methods applies propagation models on complex networks to neural networks, thereby describing information propagation and emergent mechanisms within neural networks. These methods are collectively referred to as brain network communication models. Such approaches typically involve substantial simplification of neuron models, resulting in fewer parameters, but also leading to the loss of some electrophysiological details of neurons [7]. These two seemingly opposing approaches illustrate that it remains unresolved whether the activation mechanisms of 

> ∗Corresponding author: xin.lu.lab@outlook.com 

1 

neurons or the connectivity between neurons play the more dominant role. This question is fundamental to understanding how intelligence emerges from neural systems. 

Additionally, in recent years, as an innovative way to modify intelligence, artificial neural networks (ANNs) have achieved significant advancements in numerous fields. [8]. Despite these achievements, the structure of ANNs does not strictly mimic the actual neural network structure of biological brains. This discrepancy raises questions about the hypothesis that the inherent structure of a network is crucial for intelligence. Furthermore, the scaling law in the field of machine learning posits that the more parameters an ANN has, the greater the degree of emergent intelligence it can exhibit [9]. These theory hints that the quantity of neurons (parameters) might be a more significant factor in the development of intelligence than the precise arrangement of these neurons in a network, suggesting that the specific network structures found in biological systems may not be essential for the emergence of intelligence. 

The observation of neural network structures is crucial for interpreting intelligence from a network perspective. Current neuroimaging techniques, such as Magnetic Resonance Imaging (MRI) and functional MRI (fMRI), offer non-invasive exploration but lack the spatial resolution necessary to resolve individual neurons and synapses. However, these measurement methods face challenges in obtaining information about the positions and connectivity of neurons in the nervous system, making it difficult to understand the nervous system at the neuron-synapse level [10]. Employing electron microscopy (EM) and deep learning techniques for automated neuron reconstruction, brain atlases of a range of animals, including Drosophila larvae [11], have been mapped. A recent study [12] published an adult Drosophila connectome data set, comprising nearly 130,000 neurons and 50,000,000 synapses, with details of neuronal network structure at unforeseen resolution. With full proofreading of the central brain and approximately 80% completion of the optic lobesis presented, the data represents the largest whole-brain connectome of an adult Drosophila to date and provides an unprecedented opportunity for comprehensive network analysis and topological characterization of the Drosophila brain. 

Building on the outlined challenges and opportunities, this study utilized the aforementioned Drosophila connectome data set [12] to examine the importance of neuronal network’s structure in simulating brain activation patterns. We constructed a large-scale network communication model framework based on simple mechanisms to simulate activation behavior observed in the connectome. Initially, we established a network representation of the connectome. We then developed a large-scale network communication model where neurons activate upon receiving sufficient stimuli and transmit signals to other neurons. This iterative process generated a global activation pattern. Our analysis employed threshold and sigmoid models as baselines, with a LIF model for comparison. We proposed an evaluation criterion based on the ratio of actual to expected neuron activations. 

Additionally, we developed a 3D network visualization tool (see Appendix F), using HTML5’s Canvas and Three.js based on WebGL technology. This software enables real-time observation of each neuron’s communication process in three dimensional space. 

## **2 Results** 

## **2.1 Structural Properties of Drosophila Connectome** 

The structure of the Drosophila connectome is presented in Fig. 1(a). Visually, the shape of most of the functional regions of the brain appears to be physically similar. From Fig. 1(b) we can see that the degree, i.e., the number of connections to the nodes in the network, exhibits a long-tail distribution, implying that while a large number of neurons possess few synapses, a small number of neurons contains a large number of synapses. For example, more than 20% of the nodes have a degree greater than 50, while only 0.3% of the nodes have a degree greater than 500. This is consistent with previous research on functional brain networks [13]. To investigate whether the two hemispheres’ network structures are similar in network statistic properties, we conducted a comprehensive network analysis on the two hemispheres. We calculated the degree, clustering coefficient, and eigenvector centrality distribution for every node in each hemisphere. According to Fig. 1(c)-(e), these statistical indicators for both hemispheres are extremely similar, indicating that the brain exhibits strong symmetry in network structure. 

Also, we plotted the correlation curves between degree and cell length, cell surface area, and cell size (Fig. 1(f)). The significance coefficients _R_ are 0.85 ( _p_ = 0 _._ 00), 0.86 ( _p_ = 0 _._ 00), 0.80 ( _p_ = 0 _._ 00), respectively. The results indicate that the degree is logarithmically linearly correlated with these characteristics. This logarithmic relationship reveals a fundamental principle in the organization of neural networks in the brain. 

## **2.2 Activation Patterns under Different Type of Stimuli** 

In this section, we investigate the impact of different activation mechanisms on network activation patterns by utilizing various network activation mechanisms and observing the changes in activation rates across different areas of the network. Simultaneously, we examine the effect of global perturbations in network structure on activation patterns by altering the network architecture. The optic and visual ~~p~~ rojection area are related to 

2 

**==> picture [434 x 218] intentionally omitted <==**

(a) 

**==> picture [146 x 100] intentionally omitted <==**

**==> picture [97 x 97] intentionally omitted <==**

**==> picture [97 x 97] intentionally omitted <==**

**==> picture [97 x 97] intentionally omitted <==**

**==> picture [482 x 145] intentionally omitted <==**

**----- Start of picture text -----**<br>
(b) (c) (d) (e)<br>(f)<br>**----- End of picture text -----**<br>


Figure 1: Visualization and statistic properties of Drosophila connectome data set. (a) is a visualization of Drosophila connectome. The different colors represent different functional regions. (b) shows the degree distribution of the network. (c), (d) and (e) plot the distribution of degree, clustering coefficient, and eigenvector centrality in each hemisphere, respectively. (f) represents the correlation between degree distribution and neuron characteristics. We use nodes to represent neurons’ cell bodies and use edges to represent the synapses when calculated statistic properties. 

vision. ALLN, ALIN, ALON and ALPN are related to olfaction. Other supplemental messages of related neurons are presented in Appendix B. 

Fig. 2 illustrates the activation patterns of the large-scale network communication model (LSNC) using threshold, sigmoid, and LIF activation mechanisms. We also evaluated the model’s performance after introducing perturbations. For a detailed description of these models, please refer to Appendix A.2. 

From left subgraphs of Fig. 2 (a) and (b), it can be observed that the network model generates quasi-real activation patterns under specific stimuli: It is evident that visual (olfactory) stimuli result the most significant activation on visual (olfactory) neurons such as optic and visual projection neurons (ALLN, ALIN, ALPN, ALON neurons) while activating other neuron types minimally. 

Our findings indicate that different activation mechanisms can yield comparable activation patterns. In response to visual stimuli, all three models displayed notable activation in visual-related areas, whereas other 

3 

areas exhibited minimal activation (left subgraphs of Fig. 2 (a), (c), and (e)). The optic area, for instance, recorded activation rates of 36.39%, 4.69%, and 9.69%. Under olfactory stimuli, the network also exhibits similar activation patterns in olfactory-related areas, with average activation rates of 94.07%, 78.01%, and 69.75%, respectively (left subgraphs of Fig. 2 (b), (d) and (f)). This suggests that the connectivity between neurons is more critical than the activation mechanisms of individual neurons. 

However, in the perturbed models (right subgraphs of Fig. 2 (a)-(f)), the original quasi-real activation patterns disappear. No significant differences in activation regions were observed across all activation modes and types of stimuli. For instance, in the model with threshold activation mechanism, the maximum difference of all areas in the activation ratios under visual stimuli was only 3.162%, and the range of regional activation ratios versus the average activation ratio was only 6.32% (right subgraph of Fig. 2(a)), which indicates that the heterogeneity between different regions completely disappears. Additionally, in the sigmoid and LIF models, no significant activation was observed in any area. 

Despite variations in activation rates among the three models, the substantial disparity between the activation ratios of relevant and irrelevant areas suggests the emergence of comparable quasi-real activation patterns across all models. 

**==> picture [199 x 100] intentionally omitted <==**

**==> picture [200 x 100] intentionally omitted <==**

**==> picture [447 x 263] intentionally omitted <==**

**----- Start of picture text -----**<br>
(a) threshold, visual (b) threshold, olfactory<br>(c) sigmoid, visual (d) sigmoid, olfactory<br>(e) LIF, visual (f) LIF, olfactory<br>**----- End of picture text -----**<br>


Figure 2: Comparative test of intrinsic neurons’ activation. For disturbing model, we conduct 5 repeated experiments and take the average and standard deviation. The dotted lines represent average activate rate in brain. In disturbing model, we set reconnect rate _p_ = 20% and _σ_ = 0.8. 

## **2.3 Separation of Visual and Olfactory Related Areas** 

To further investigate the causes of the above observed dynamic pattern that is independent of neuron models, we calculated the synapse count (number of connections) between various regions of the visual and olfactory systems and visualized the results as a heat map (Fig. 3(a)). The findings reveal a significant segregation between the visual and olfactory areas. Specifically, within the visual and olfactory areas, there are 13,309,161 and 882,170 synapses, respectively. However, only 1,837 synapses exist between these two areas. These interconnecting synapses constitute only approximately 0.0138% and 0.208% of the total synapses within the visual and olfactory areas, respectively. 

4 

**==> picture [227 x 200] intentionally omitted <==**

**==> picture [256 x 199] intentionally omitted <==**

**==> picture [261 x 11] intentionally omitted <==**

**----- Start of picture text -----**<br>
(a) (b)<br>**----- End of picture text -----**<br>


Figure 3: Heatmap and schematic diagram illustrating the connections between areas related to vision and olfaction. (a) presents the heatmap, while (b) shows the schematic diagram of the connection relationships. 

Fig. 3(b) represents the schematic diagram of the connection relationships in the neuronal visual and olfactory systems. We use nodes to represent functional areas and use edges to represent synapses between areas. The thickness of edges represents the number of connections. This diagram indicates that the number of connections within regions is significantly greater than the number of inter-regional connections. 

These indicate that the network structure between these two functional systems is almost entirely separate. 

## **2.4 Distances between Input and Activation Areas** 

To further investigate whether this separation phenomenon is caused by greater spatial distance, we calculated the average network distance and spatial distance between different areas of the brain network. The results are presented in Tab. 1. 

The analysis of Tab. 1 showcases that spatial distances among neurons do not straightforwardly translate to ease of activation. While visual input neurons across all intrinsic areas exhibit similar average spatial distances, quasi-real activation patterns manifest predominantly in specific neural types (optic and visual ~~p~~ rojection). Conversely, the average network distances between input neurons and target neurons is notably smaller compared to irrelevant neurons. Specifically, visual input neurons exhibit network distances to optic and visual ~~p~~ rojection neurons as 5.7018 and 5.7432, respectively, while distances to neurons irrelevant to olfactory (ALLN, ALIN, ALON, and ALPN) are measured at 6.6442, 6.2350, 6.1506, and 6.5380, respectively. This demonstrates that neurons corresponding to visual inputs maintain a generally closer network distance relative to unrelated neurons. Furthermore, neurons associated with olfactory inputs maintain network distances approximately half that of unrelated neurons. These observations suggest that the network distance between input neurons and their specific activation areas is more significant than spatial distance, underscoring the importance of network structure over spatial structure in defining the quasi-real activation patterns of brain networks. 

Table 1: Spatial and network distance between input areas and functional areas. 

|Input type|Distance type|optic<br>visual<br>~~p~~rojection<br>ALLN<br>ALON<br>ALPN<br>ALIN|
|---|---|---|
|Visual input|Spatial distance (nm)|365012<br>354725<br>351919<br>346925<br>348517<br>348901|
||Network distance (edge)|**5**_._**7018**<br>**5**_._**7432**<br>6_._6442<br>6_._1506<br>6_._5380<br>6_._2350|
|Olfactory input|Spatial distance (nm)|302690<br>251144<br>110827<br>123179<br>115089<br>173345|
||Network distance (edge)|5_._7967<br>5_._1706<br>**3**_._**4458**<br>**3**_._**6312**<br>**3**_._**6820**<br>**3**_._**3845**|



## **3 Discussion** 

Our study, which utilized a large-scale network communication model derived from the Drosophila connectome, highlights the crucial importance of neural network architecture in generating brain-like activation patterns. 

5 

We first analyzed the structure of the Drosophila brain network, including the basic statistical properties and the symmetry of the network. An interesting phenomenon observed is the correlation between neuronal degree and geometric size: Fig. 1(f) demonstrates that the number of synapses formed by a neuron (represented by degree) increases logarithmically, rather than linearly, with respect to its surface area, volume, or length. These characteristics of the brain can be explained by the Weber-Fechner’s law: for any sensory pattern, the perceived intensity is a logarithmic function of the physical intensity. Specifically, the size, length, and area changes can only cause a logarithmic change in the number of synapses the neuron has. These results suggest that although synaptic plasticity lead to a continuous increase in the number of synapses between neurons and other cells, this logarithmic relationship makes it difficult for the number of synapses formed by a neuron to increase indefinitely. This may account for the overall power-law distribution observed in Fig. 1(f). 

To examine the impact of neuronal activation mechanisms on the generation of realistic network patterns, we simulated three activation mechanisms for specific inputs. Fig. 2 suggests that, the real network structure is more critical than activation mechanisms in generating quasi-real activation patterns. The brain’s unique network structure plays a crucial role in this realistic activation mechanism, aligning with studies on complex systems where the organization and interaction structure among individuals, rather than individual capabilities, determine emergent phenomena [14]. 

To elucidate the influence of network structure on function, we analyzed the topology of the network (Fig. 3 and Tab. 1). These results collectively suggest that network architecture, rather than spatial structure or activation mechanisms, is the primary determinant of the Drosophila connectome’s ability to generate quasi-real activation patterns, owing to its unique connectivity profile. 

To test the impact of network perturbation ratio on its functionality, we calculated activation patterns with different reconnect rates (Appendix S5). These results indicate that the formation of realistic activation patterns is highly sensitive to changes in network structure, with even minor perturbations capable of disrupting this network configuration. This indirectly substantiates that the authentic network structure is crucial for the formation of genuine activation patterns. Additionally, it highlights that complex functions (such as vision) are more susceptible to network disturbances. Conversely, Fig. S4 shows that the network retains its original performance under a region-based attack. One explanation for these findings is that random rewiring thoroughly alters the network topology, potentially disrupting original functional modules and pathways, which leads to disordered information transmission paths and significantly impacts activation patterns. Additionally, because rewiring is global and random, it induces unpredictable perturbations that undermine redundancy and fault tolerance mechanisms, rendering the network more sensitive to such global disturbances. In contrast, the reason the network’s dynamic properties remain relatively stable after the deletion of nodes within a specific region is that this perturbation is localized and has a minor impact on the global topology. Moreover, random rewiring may affect critical nodes or key pathways within the network, leading to significant functional impairment of the overall network. However, regional node deletion, if involving non-critical nodes and edges, may not significantly impact the network’s functionality, allowing it to maintain normal activation patterns. 

To evaluate the impact of the observed network structural symmetry (Fig. 1(a), (c), (d), and (e)), we input visual signals separately to the left and right hemispheres and observed the effects. The findings in Appendix D reflect real-world phenomena: Although the left and right hemispheres possess certain functional specializations, they also exhibit synergistic effects and typically collaborate to fulfill specific functions [15]. For example, during complex cognitive tasks, both hemispheres coordinate their efforts to achieve task completion. The experimental results indicate that similar synergistic effects emerge even when only the neurons on one side of the brain are stimulated, indirectly validating the model’s effectiveness. Moreover, the network maintains similar synergistic effects even in the face of large-scale localized attacks, indirectly demonstrating the network’s robust resilience. Finally, by analyzing the connections between different regions, it is found that the cause of these synergistic effects is not the connections between visual input and contralateral visual processing areas, but rather the extensive connections within the visual processing regions themselves. This provides a new perspective for understanding the brain’s synergistic effects. 

These findings has significant implications for artificial neural network research, suggesting that future AI designs may need to more closely mimic real brain network structures. Future research directions may include optimizing propagation rules and automatically adjusting link weights to achieve complete simulation of brain behavior. These advancements will pave the way for achieving genuine artificial intelligence while deepening our understanding of the nature of biological intelligence. 

## **4 Acknowledgement** 

We thank M.Murthy et al. for their invaluable help in sharing the Drosophila connectome data. This work was supported by the National Natural Science Foundation of China (72025405, 72088101, 72301285, 72001211), the National Social Science Foundation of China (22ZDA102), and the Natural Science Foundation of Hunan Province (2023JJ40685). The authors declare that they have no conflict of interest. 

6 

## **References** 

- [1] Talia N Lerner, Li Ye, and Karl Deisseroth. Communication in neural circuits: tools, opportunities, and challenges. _Cell_ , 164(6):1136–1150, 2016. 

- [2] Anthony Zador, Sean Escola, Blake Richards, Bence Olveczky, Yoshua Bengio, Kwabena Boahen, Matthew[¨] Botvinick, Dmitri Chklovskii, Anne Churchland, Claudia Clopath, et al. Catalyzing next-generation artificial intelligence through neuroai. _Nature communications_ , 14(1):1597, 2023. 

- [3] Andrea Avena-Koenigsberger, Bratislav Misic, and Olaf Sporns. Communication dynamics in complex brain networks. _Nature Reviews Neuroscience_ , 19(1):17–33, 2018. 

- [4] Petr Lansky and Susanne Ditlevsen. A review of the methods for signal estimation in stochastic diffusion leaky integrate-and-fire neuronal models. _Biological Cybernetics_ , 99(4):253–262, 2008. 

- [5] Alan L Hodgkin and Andrew F Huxley. A quantitative description of membrane current and its application to conduction and excitation in nerve. _The Journal of physiology_ , 117(4):500, 1952. 

- [6] Yi Zeng, Dongcheng Zhao, Feifei Zhao, Guobin Shen, Yiting Dong, Enmeng Lu, Qian Zhang, Yinqian Sun, Qian Liang, Yuxuan Zhao, et al. Braincog: A spiking neural network based, brain-inspired cognitive intelligence engine for brain-inspired ai and brain simulation. _Patterns_ , 4(8), 2023. 

- [7] Caio Seguin, Olaf Sporns, and Andrew Zalesky. Brain network communication: concepts, models and applications. _Nature Reviews Neuroscience_ , 24(9):557–574, 2023. 

- [8] Joe G Greener, Shaun M Kandathil, Lewis Moffat, and David T Jones. A guide to machine learning for biologists. _Nature reviews Molecular cell biology_ , 23(1):40–55, 2022. 

- [9] Jared Kaplan, Sam McCandlish, Tom Henighan, Tom B Brown, Benjamin Chess, Rewon Child, Scott Gray, Alec Radford, Jeffrey Wu, and Dario Amodei. Scaling laws for neural language models. _arXiv preprint arXiv:2001.08361_ , 2020. 

- [10] Nikos K Logothetis. What we can do and what we cannot do with fmri. _Nature_ , 453(7197):869–878, 2008. 

- [11] Michael Winding, Benjamin D Pedigo, Christopher L Barnes, Heather G Patsolic, Youngser Park, Tom Kazimiers, Akira Fushiki, Ingrid V Andrade, Avinash Khandelwal, Javier Valdes-Aleman, et al. The connectome of an insect brain. _Science_ , 379(6636):eadd9330, 2023. 

- [12] Sven Dorkenwald, Arie Matsliah, Amy R Sterling, Philipp Schlegel, Szi-Chieh Yu, Claire E McKellar, Albert Lin, Marta Costa, Katharina Eichler, Yijie Yin, et al. Neuronal wiring diagram of an adult brain. _bioRxiv_ . 

- [13] Dante R Chialvo. Critical brain networks. _Physica A: Statistical Mechanics and its Applications_ , 340(4):756–765, 2004. 

- [14] John H Holland. _Emergence: From chaos to order_ . OUP Oxford, 2000. 

- [15] Larry W Swanson. _Brain architecture: understanding the basic plan_ . Oxford University Press, USA, 2012. 

- [16] Philipp Schlegel, Yijie Yin, Alexander S Bates, Sven Dorkenwald, Katharina Eichler, Paul Brooks, Daniel S Han, Marina Gkantia, Marcia Dos Santos, Eva J Munnelly, et al. A consensus cell type atlas from multiple connectomes reveals principles of circuit stereotypy and variation. _Biorxiv: the Preprint Server for Biology_ , 2023. 

- [17] Michael Fauth, Florentin W¨org¨otter, and Christian Tetzlaff. The formation of multi-synaptic connections by the interaction of synaptic and structural plasticity and their functional consequences. _PLoS Computational Biology_ , 11(1):e1004031, 2015. 

- [18] M´arton P´osfai, Bal´azs Szegedy, Iva Baˇci´c, Luka Blagojevi´c, Mikl´os Ab´ert, J´anos Kert´esz, L´aszl´o Lov´asz, and Albert-L´aszl´o Barab´asi. Impact of physicality on network structure. _Nature Physics_ , pages 1–8, 2023. 

- [19] Albert Lin, Runzhe Yang, Sven Dorkenwald, Arie Matsliah, Amy R Sterling, Philipp Schlegel, Szi-chieh Yu, Claire E McKellar, Marta Costa, Katharina Eichler, et al. Network statistics of the whole-brain connectome of drosophila. _bioRxiv_ , 2023. 

- [20] Marcus Kaiser, Matthias Goerner, and Claus C Hilgetag. Criticality of spreading dynamics in hierarchical cluster networks without inhibition. _New Journal of Physics_ , 9(5):110, 2007. 

7 

- [21] Caio Seguin, Maciej Jedynak, Olivier David, Sina Mansour, Olaf Sporns, and Andrew Zalesky. Communication dynamics in the human connectome shape the cortex-wide propagation of direct electrical stimulation. _Neuron_ , 111(9):1391–1401, 2023. 

- [22] Mototaka Suzuki, Cyriel MA Pennartz, and Jaan Aru. How deep is the brain? the shallow brain hypothesis. _Nature Reviews Neuroscience_ , 24(12):778–791, 2023. 

- [23] Simon Peron and Fabrizio Gabbiani. Spike frequency adaptation mediates looming stimulus selectivity in a collision-detecting neuron. _Nature neuroscience_ , 12(3):318–326, 2009. 

8 

## **APPENDIX** 

## **A Data and Methods** 

## **A.1 Drosophila Connectome Data Set** 

We utilize the recently released largest Drosophila brain connectome [12], which provides a comprehensive mapping of the entire neural network within a female Drosophila brain. This data set includes over 120,000 neurons and 30,000,000 synapses, featuring detailed synaptic connections and high-precision 3D coordinates (accurate to the nanometer level) for both cell bodies and synapses. Additionally, it offers extensive labeling for various neuron types. For more detailed information, refer to [12,16]. 

In this section, neurons are represented as nodes and synapses as connections between them. Tab. 2 presents the basic properties of the data set. We combine multiple edges between two nodes to calculate network statistics. The average degree before and after combining multiple edges is 501.6 and 37.01, respectively, indicating the prevalence of multiple synapses between pairs of neurons. 

||Table 2:<br>Statistical Properties|of Drosophila Brain Connectcome Graph|of Drosophila Brain Connectcome Graph|
|---|---|---|---|
||Number of Nodes|Number of Edges|Average Degree|
||131459|32970606|37_._01|
|Average|Degree (before combination)|Clustering Coefcient|Eigenvector Centrality|
||501_._6|0_._1527|0_._0008817|
||Network Diameter|Average Shortest Path|Assortativity Coefcient|
||11|3_._9061|_−_0_._05868|



## **A.2 Model** 

In this section, we introduce the large scale network communication model which consumes less computational resource and can efficiently utilize the network structure. To solve the problem that the link weights between neurons can’t be measured, we propose two hypotheses to estimate the link weights. In addition, we replace the node model in the network communication model with an improved LIF neuron model for comparison. 

## **A.2.1 Symbol Systems** 

The original network representation of neural systems often uses nodes to represent neurons and edges to represent the links (chemical synapses, electrical synapses, etc.) between neurons [3]. However, this approach has several limitations: First, multiple synapses typically exist between two neurons [17], and these synapses are spatially and temporally asymmetric. For instance, two neurons, as illustrated in Fig. S1, can have multiple synapses with varying dynamic properties. Additionally, due to differing spatial locations, signal transmission delays and the positions of action on downstream neurons also vary. Merging these synapses into a single edge oversimplifies the complexity of neural communication. 

**==> picture [171 x 171] intentionally omitted <==**

Figure S1: An example of complex connection 

9 

**==> picture [199 x 107] intentionally omitted <==**

**==> picture [256 x 114] intentionally omitted <==**

**==> picture [315 x 11] intentionally omitted <==**

**----- Start of picture text -----**<br>
(a) original graph (b) dual graph<br>**----- End of picture text -----**<br>


Figure S2: An example of original graph and dual graph 

For this reason, we use the dual method [18] on Drosophila connectome data set to model the multi-link between neurons. 

In a dual graph, the nodes and edges of the original graph are interchanged, resulting in a new graph. In simple terms, a dual graph is obtained by replacing the nodes of the original graph with edges, and the edges with nodes. Fig. S2 is an example of an original graph and a dual graph. After being processed, the nodes in the dualed graph represent the synapses and links represent the cell body. Then we can use the communication model to describe the message propagation process. 

In order to standardize the symbol system, we use a edge (multi-edge, could include more than 2 nodes) to represent the neuronal cell body and use an node to represent a physical link between neurons (synapse). We regard the process of messages interactions as the nodes’ interactions via edges. 

Let _N_ = _{n_ 1 _, ..., ni, ...}_ represents the set of all nodes and _E_ = _{e_ 1 _, ..., ej...}_ represents the sets of all edges. An obvious relationship is formalized as the following manner. 

**==> picture [320 x 11] intentionally omitted <==**

Note that the union of each element in _N_ and _E_ is the whole graph. The graph _G_ ’s definition is given as follows. 

**==> picture [286 x 24] intentionally omitted <==**

Let the label of any neuron be _j_ . Because neural link is directed, let _ej_[+] ( _ej[−]_ ) represent the set of elements which output (input) the signals, note that _ej_ = _ej_[+] _∪ ej[−]_ . 

Each neuron and synapse has an activate state (state = 1) or resting state (state = 0). When a neuron is at the activate state, it fires to other neurons, otherwise it keeps rest. So set the statement of the element _i_ as _Xi_ . _Xi_ = 1 if the element _ni_ is active, otherwise _Xi_ = 0. Then let _Yj_ represent the statement of set _ej_ . _Yj_ = 1 if the set _ej_ is active, otherwise _Yj_ = 0. 

## **A.2.2 Large Scale Network Communication Model (LSNC)** 

By modeling the Drosophila connectome as graph, we introduce the large scale network communication model on this graph. The general transmission function is defined in the following manner, 

**==> picture [345 x 31] intentionally omitted <==**

where _ω_ ( _nk, ei, ej_ ) represents the link weight between set _i_ and set _j_ (specifically, two neurons) through element _nk_ . Here we consider that the link weight between two neurons is not only related to the neurons themselves, but also to the synapses between them. _σ_ ( _._ ) is the activate function. _βj_ is the normalization factor. 

In this paper we use threshold activation function and sigmoid function for comparison. 

The threshold activation function is a simple, binary decision function used in artificial neurons. It outputs a value of 1 if the input exceeds a certain threshold, and 0 otherwise. This function is also known as the Heaviside step function. 

**==> picture [301 x 31] intentionally omitted <==**

10 

The sigmoid activation function is a smooth, S-shaped function that maps input values to an output range between 0 and 1. It is commonly used in neural networks to introduce non-linearity and to model probabilitylike outputs in binary classification problems. The sigmoid function is defined as the logistic function. 

**==> picture [276 x 22] intentionally omitted <==**

The statement of an neuron will influence the statement of all output synapses. The equation between neuron _j_ and output synapse _i_ is as the following manner. 

**==> picture [290 x 13] intentionally omitted <==**

The link weights between neurons determine the extent of influence they have on each other. Larger link weights mean a tighter ”link” between two neurons. In everyday life, the brain continuously changes the link weights between neurons in response to inputs from the external world, allowing intelligence to emerge from the micro to the macro. Therefore, if researchers want to simulate the process of information propagation in the brain on large scale in a computer, determining the link weights between neurons is essential. However, existing experimental methods are not well-suited for directly measuring the weights between neurons in a whole brain, so adopting some alternative approach is necessary. Below, we introduce a hypothesis that use different methods to estimate the connection weights between neurons. 

As previously mentioned, there exists a large number of synapses between two neurons. However, in practical applications, it is difficult to set the parameters for these edges individually. Consequently, a simple assumption naturally arises: assuming that the source neuron has the same influence on the target neuron through every synapse. We propose an assumption that every synapse is equivalent, which is widely used in neuron graph statistics analysis [19]. That is to say, 

**==> picture [278 x 11] intentionally omitted <==**

Additionally, We denote the sum of all link weights between neurons _i_ and _j_ as _Wij_ : 

**==> picture [307 x 27] intentionally omitted <==**

And we define _βj_ as the maximum weight among all _Wij_ related to neuron _j_ . That is to say, 

**==> picture [310 x 14] intentionally omitted <==**

Where _Max_ ( _S_ ) represents the Maximal element in set _S_ . Then the normalized equation is as follows. 

**==> picture [345 x 31] intentionally omitted <==**

## **A.2.3 Neuron Dynamic Model** 

To better reflect real-world conditions and demonstrate that the superiority of this network architecture does not solely rely on the design of the activation function, we also employed a variant of the LIF model [4] as the basic neuron model. 

The membrane potential change of a neuron’s voltage can be described by the following differential equation. 

**==> picture [360 x 25] intentionally omitted <==**

Where _Vj_ represents the membrane potential of _j[th]_ neuron, _R_ represents the resistance constant and _Ij[syn]_ represents the total input current of neuron _j_ . _τ_ represents the time constant. 

The input current _Ij_[syn] can’t be calculated directly. To estimate the value of _I_[syn] , we make the following assumptions based on the following supposes: 

1. The magnitude of the current on the synapse should be proportional to the voltage difference between the connected neurons. 

2. The current on each synapse should be proportional to the connection weight between the neurons. 

3. A current can only be emitted if the output neuron is in an active state. 

Considering the supposes above, the equation of input current _Ij_[syn] is designed as follows: 

**==> picture [378 x 35] intentionally omitted <==**

11 

where _Vi − Vj_ represents the voltage difference between neuron _i_ and _j_ . _Yi_ represents the state of output neuron _i_ . _βj_ is defined according to equation (9). _α_ is the proportion const. 

According to the LIF model, when a neuron’s voltage reaches the threshold value, the neuron will fire and then quickly resets its voltage. Based on this, the mechanism for updating the neuron voltage is designed as follows. 

**==> picture [319 x 26] intentionally omitted <==**

where _Vth_ represents the fire voltage and _V_ rest represents the rest voltage, respectively. 

Other propagation mechanism is consistent with network model introduced in section B.2.2. 

## **A.3 Evaluation Criteria** 

In previous study, researchers used classic indicators such as signaling cost and activation time to evaluate the quality of the model [7] [20] [21]. However, these indicators can’t describe the model accords with the true communication process or not, even if the activation time is short and the signaling cost is minimum, etc. To better assess whether a model can reflect the real situation of brain communication, we use the percentage of activated neurons in regions that related to (should work under) a certain stimulus. To illustrate, if the brain gets a visual stimulus, the region related to vision should work while the region not related to vision should remain a resting state. Then we record the percentage of neurons activated. If regions related to the certain function have a significant higher activation percentage than the average activation percentage of the whole brain, we call it a quasi-real activation pattern. 

We define the consistency indicator _C_ in a area which has a certain function (vision, olfaction, etc) is defined in the following manner. 

**==> picture [271 x 12] intentionally omitted <==**

where _N[act]_ represents the number of neurons activated in this area at the final state, _N_ represent the number of neurons in this area and _N_ represent the total number of neurons. 

## **B Introduction of Related Neurons** 

_Optic neurons_ , also known as retinal ganglion cells, are the first neurons in the visual pathway. They receive signals from the photoreceptor cells in the retina and transmit this information via the optic nerve to the brain. These neurons play a crucial role in carrying visual stimuli from the eye to the brain, where further processing and interpretation of the visual information occur. 

_Visual projection neurons_ are a type of neuron found in the visual system that transmit visual information from one region of the brain to another. They play a crucial role in processing and relaying visual signals from the retina to various visual centers in the brain, including the thalamus, hypothalamus, and primary visual cortex (V1), among others. 

_Antennal Lobe Input Neurons_ (ALINs) are primarily olfactory sensory neurons (OSNs) that carry olfactory information from the sensory structures, such as the antennae and maxillary palps, directly to the antennal lobe. Each OSN expresses a specific odorant receptor and responds to particular chemical cues. The axons of these neurons synapse with projection neurons and local neurons within the glomeruli of the antennal lobe. 

_Antennal Lobe Projection Neurons_ (ALPNs) transmit the olfactory information in the antennal lobe. These neurons receive input from the olfactory sensory neurons within the glomeruli and project their axons to other brain areas, such as the mushroom body and the lateral horn, where further processing and integration of olfactory information occur. 

_Antennal Lobe Output Neurons_ (ALONs) refer to the projection neurons that serve as the primary output pathways of the antennal lobe, sending processed olfactory information to higher brain regions. 

_Antennal Lobe Local Neurons_ (ALLNs) are inter neurons that are confined to the antennal lobe. They typically have processes (dendrites and axons) that branch extensively within the antennal lobe and form connections with multiple glomeruli. These neurons play a critical role in modulating and refining the olfactory information by providing inhibitory or excitatory input to projection neurons and other local neurons, thus shaping the olfactory responses and contributing to odor discrimination and perception. 

Tab. 3 represents the numbers of specific neurons of each hemisphere in related areas. It presents that the number of neurons in specific areas of the Drosophila brain connectome is mirror-symmetrical. Additionally, visual neurons constitute the largest proportion among the connectome’s neurons (approximately one-twice). Neurons in the olfactory-related regions, though comprising a smaller proportion (for instance, the ALON region has only 8 neurons on each side), play a critical role in olfactory perception. 

For further information, please read [16]. 

12 

Table 3: Node numbers in related areas Drosophila Brain Connectcome Graph 

|total (left)|total (right)|optic (left)|optic (right)|
|---|---|---|---|
|60834|63144|36131|37524|
|visual projection (left)|visual projection (right)|ALIN (left)|ALIN (right)|
|3117|3117|12|12|
|ALLN (left)|ALLN (right)|ALON (left)|ALON (right)|
|196|194|8|8|
||ALPN (left)|ALPN (right)||
||310|314||



## **C Experimental Settings** 

The basic methodology of the experiment is as follows. We apply a continuous stimulus signal (binary 0-1 signal) to a subset of input neurons (i.e., visual or olfactory neurons) in the brain. We then compute the signal’s propagation process within the brain and record the responses of both intermediate and output neurons. We give 2 types of input neurons (visual, olfactory) stimulus and record the activation patterns of 6 type of neurons: optic (visual), visual ~~p~~ rojection (visual), ALLN (olfactory), ALIN (olfactory), ALPN (olfactory) and ALON (olfactory). When we give neuron a stimulus, we set the state of neuron as 1. The evaluation criterion involves calculating the ratio of neurons that should be activated to those that are actually activated in a specific area (see Equ. 14 in Appendix A). 

Given that the brain functions similarly to a shallow neural network [22], we document outcomes at an iteration step size of 5. Since the input is constant and no randomization parameters are introduced, the results of each experiment are consistent, eliminating the need for repetition. For detailed information on related neurons, please read Appendix B. 

In the linear threshold model, we set _σ_ 0 = 0 _._ 8. For the simulation of the LIF model, numerous hyperparameters are required. All the hyperparameters used are listed in the following table. Biological hyperparameters are set according to real biological experimental tests [23]. The current proportion constant is the optimal parameter obtained through equidistant search. 

Table 4: List of Hyperparameters 

|Hyperparameter|Description|Value|
|---|---|---|
|_τ_|Membrane time constant|15.0 ms|
|_V_rest|Resting membrane potential|-65 mV|
|_V_th|Spike threshold|-45 mV|
|_R_|Membrane resistance|0.5GΩ|
|_dt_|time step|0.55 ms|
|_α_|Current proportion const|0.03/0.045 (visual/olfactory)|



To demonstrate the importance of network structure, we add a comparative model that randomly reconnects networks. Specifically, we perform degree-preserving rewiring on a certain proportion of edges in the brain, which means perturbing the network structure while ensuring that the degree of each node remains unchanged. In Fig. 2 we set reconnect rate _p_ = 20%. For its sensitivity analysis, please read Appendix E. 

## **D Bilateral Response under Unilateral Stimulus** 

In real life, the left and right hemispheres cooperate to perform complex tasks. To examine whether network models can simulate this cooperation, we administered a unilateral stimulus to input neurons and monitored the varying activation ratios across both hemispheres. Specifically, we independently simulated visual input neurons in the left and right hemispheres and recorded the rate of activated neurons in each hemisphere over time. Second, we investigate whether local attack to one side of the network—analogous to real-world conditions such as tumors and other diseases—affects this bilateral response process, and how the extent of such damage influences the synergistic response. 

The specific methods of inducing attack are as follows: We first identify two symmetrical coordinates on both hemispheres of the brain. Using these coordinates as the center, we remove nodes within varying radii and subsequently record the response curves for each hemisphere-related region. 

Fig. S3 illustrates the specific length measurements of the Drosophila connectome and the regions examined in this study. The purple and blue cells represent neurons associated with visual processing. Spheres _S_ 1, _S_ 2, 

13 

_S_ 3, and _S_ 4 each represent four spherical regions subjected to localized attacks. Sphere _S_ 1 and _S_ 2 encompass approximately 2,000 neurons each, while sphere _S_ 3 and _S_ 4 each cover approximately 12,000 neurons. 

**==> picture [227 x 114] intentionally omitted <==**

**==> picture [228 x 114] intentionally omitted <==**

**==> picture [417 x 11] intentionally omitted <==**

**----- Start of picture text -----**<br>
(a) Geometric dimensions of Drosophila connectome (b) Locations of targeted regions<br>**----- End of picture text -----**<br>


Figure S3: Schematic diagram of the specific length measurements of the Drosophila connectome and the location of regions deleted. The units of center and r in labels are micrometers. 

Fig. S4 illustrates the curve depicting how the response ratio evolves with each time step. We use _Cavg_ to represent the average activated rate of areas related to vision. Notably, when stimulating one hemisphere alone, visual processing neurons in both hemispheres are activated (see curve regular left and right in Fig. S4(a) and (b)). 

Secondly, in the case of different regional node failures, even when roughly 12,000 nodes (approximately 1/10 of the total network nodes and 1/3 of the visually relevant neurons) were deleted, the network ultimately exhibited response characteristics similar to the original curve. This indicates that the network possesses strong robustness facing with local attacks. Additionally, for networks with failures on the input side, a delay in bilateral response curves was observed when the failure radius reached 90 _µm_ ( _S_ 4, left and right stimuli). This suggests that large-scale failures of visually relevant nodes primarily affect the rate at which the visual functional network reaches a steady state, rather than the number of nodes activated at steady state. 

Below, we further explain the reasons for the significant delay in responses to unilateral large-scale regional attacks on this side’s stimuli (e.g., in Fig. S4(a), where the local damaged area is the _S_ 2 region of the left hemisphere, and stimuli on the left side cause responses in both the left and right hemispheres (light purple and dark purple curves) to be delayed). Calculations show that there are 19,031 synapses from the left hemisphere’s visual input area to the left hemisphere’s visual signal processing area (optic, visual ~~p~~ rojection), while there are only 18 synapses from the left hemisphere’s visual input area to the right hemisphere’s visual signal processing area. Furthermore, there are 338,456 synapses from the left hemisphere’s visual processing area to the right hemisphere’s visual signal processing area. This implies that, primarily, the unilateral visual input area essentially does not interact with the contralateral visual signal processing area, and interactions occur indirectly through the ipsilateral visual processing area. Consequently, when the visual signal processing area of this side is damaged, the reduction in the number of neurons makes it challenging for the remaining neurons to reach an excitatory state, causing delays in the ipsilateral visual signal processing area. This delay, in turn, leads to delayed responses in the contralateral visual signal processing area. 

14 

**==> picture [256 x 205] intentionally omitted <==**

**==> picture [256 x 205] intentionally omitted <==**

**==> picture [322 x 11] intentionally omitted <==**

**----- Start of picture text -----**<br>
(a) Left stimulus (b) Right stimulus<br>**----- End of picture text -----**<br>


Figure S4: Experiment of activation rate under single stimulus. All responses on the left hemisphere are marked with light-colored lines, and all responses on the right hemisphere are marked with dark-colored lines. We set threshold _σ_ 0 = 0 _._ 95. 

## **E Impact of Perturbation Rate on Activation Areas** 

In this section, we discuss the impact of different reconnection rates on activation patterns using the degreepreserving reconnection method. 

The experiments presented in this section involve calculating patterns induced by two types of stimuli across three models under network perturbations of 1‰, 5‰, 1%, 3%, 5%, 10%, and 20% reconnect rates. Let _C_ be the average activation ratio of an area. We normalized each data point using the difference between the activation ratio of this area and the average activation ratio _C_[¯] of the entire brain, that is to say, ∆ _C_ = _C − C_[¯] . 

The experimental results are shown in Fig. S5, where 0 represents the original, unperturbed experimental results. At the 0 point, there is a significant difference in the relative activation ratios between visual and olfactory areas under specific stimuli. However, this significant activation pattern, discussed in the main text, disappears with a 1‰’s network perturbation, replaced by a roughly equal activation ratio across all regions. This indicates that even a 1‰’s change in network structure can lead to a rapid loss of network functionality specificity. Additionally, small-scale network perturbations (1‰-5%) have a lesser impact on olfactory stimuli compared to visual stimuli. This is because the number of neurons associated with olfactory functions is significantly fewer than those related to visual functions, making it less likely for small-scale network structure changes to affect these neurons, thereby leading to a smaller impact on functionality. 

Horizontal comparisons indicate that while there are no significant differences among different models in forming activation patterns, more complex neuron models better maintain their original activation patterns under network disturbances. This is because signals generated by complex neuron models have greater redundancy and functional diversity. For instance, the LIF (Leaky Integrate-and-Fire) model has a voltage decay mechanism, where the voltage gradually decays in the absence of a signal. Even if some input signals are erroneous, as long as the proportion of errors is not very large, the decay mechanism can filter out the impact of these erroneous signals. 

15 

**==> picture [156 x 137] intentionally omitted <==**

**==> picture [157 x 137] intentionally omitted <==**

**==> picture [157 x 137] intentionally omitted <==**

**==> picture [470 x 11] intentionally omitted <==**

**----- Start of picture text -----**<br>
(a) threshold model, visual stimulus (b) sigmoid model, visual stimulus (c) LIF model, visual stimulus<br>**----- End of picture text -----**<br>


**==> picture [156 x 137] intentionally omitted <==**

**==> picture [157 x 137] intentionally omitted <==**

**==> picture [157 x 137] intentionally omitted <==**

**==> picture [482 x 11] intentionally omitted <==**

**----- Start of picture text -----**<br>
(d) threshold model, olfactory stimulus (e) sigmoid model, olfactory stimulus (f) LIF model, olfactory stimulus<br>**----- End of picture text -----**<br>


Figure S5: Relationships of activation rate with reconnect rate. We conduct 5 repeated experiments and take the average and standard deviation. 

## **F Large Spatial Network Visualization** 

The visualization software of experiment observation on large spatial networks is important for researchers. However, there is still a lack of visualization system that can observe information propagation on large spatial networks in real-time, which poses difficulties in experiment. To observe directly the communication progress on this super large Drosophila connectome, we develop a large spatial network visualization software. This software will be made available to other researchers with the author’s permission. 

The drawing part mainly employs the Canvas provided by HTML5 and we use the Three.js based on WebGL technology to achieve spatial network visualization effects, while the user interface display is constructed by Vue.js, providing users with an intuitive and interactive interface to display and analyze data. 

## **F.1 Front End Technical Details** 

We use the Vue.js framework to build the user interface. Vue.js is a popular JavaScript framework that simplifies the development of web applications through componentization, enabling the creation of front-end interfaces with rich interactivity and good user experience. 

The rendering of three-dimensional complex networks relies heavily on the Three.js library. Three.js is a powerful JavaScript library for creating and displaying 3D graphics. It offers a rich set of 3D objects, materials, lights, and animations, allowing for the easy creation of high-quality 3D scenes and objects. 

To improve rendering performance, GPU acceleration technology is utilized. GPU acceleration takes advantage of the computational power of the Graphics Processing, significantly enhancing rendering speed and efficiency through parallel processing and stream processing modes. The GPU acceleration capabilities of Three.js, especially through the creation of point objects using Float32BufferAttribute, which contains their position information in three-dimensional space, greatly enhance the rendering speed and smoothness. 

## **F.2 Back End Technical Details** 

We use the Spring Boot framework, an open-source framework based on Java for quickly building independent, production-grade Spring applications. With Spring Boot, backend services can be rapidly set up to 

16 

provide RESTful API interfaces for frontend consumption. The backend also utilizes the PostgreSQL database to store network data. 

Besides, We use PostgreSQL, which is a powerful open-source relational database management system that offers a rich set of data types and robust querying capabilities. To store 3D network data, we leverage PostgreSQL’s JSONB type, which allows storing JSON-formatted data within PostgreSQL and provides a series of functions and operators for querying and manipulating this data. With the JSONB type, information about nodes and edges in the network can be stored, enabling fast querying and updating operations. 

## **F.3 Function Display** 

Fig. S6 is an example of the 3D visualization system. All nodes’ colors can be adjusted by visible selection 

**==> picture [156 x 35] intentionally omitted <==**

**==> picture [156 x 66] intentionally omitted <==**

**==> picture [157 x 35] intentionally omitted <==**

**==> picture [157 x 66] intentionally omitted <==**

**==> picture [157 x 35] intentionally omitted <==**

**==> picture [157 x 66] intentionally omitted <==**

## (a) Side view 1 

- (b) Side view 2 

- (c) Side view 3 

**==> picture [156 x 35] intentionally omitted <==**

**==> picture [156 x 66] intentionally omitted <==**

**==> picture [157 x 35] intentionally omitted <==**

**==> picture [157 x 66] intentionally omitted <==**

**==> picture [157 x 35] intentionally omitted <==**

**==> picture [157 x 66] intentionally omitted <==**

- (d) Top view 1 

- (e) Top view 2 

- (f) Top view 3 

**==> picture [156 x 35] intentionally omitted <==**

**==> picture [156 x 66] intentionally omitted <==**

**==> picture [157 x 35] intentionally omitted <==**

**==> picture [157 x 66] intentionally omitted <==**

**==> picture [157 x 35] intentionally omitted <==**

**==> picture [157 x 66] intentionally omitted <==**

**==> picture [70 x 11] intentionally omitted <==**

**----- Start of picture text -----**<br>
(g) Front view 1<br>**----- End of picture text -----**<br>


(h) Front view 2 

(i) Front view 3 

Figure S6: Visualization of spatial Drosophila brain network. 

or input RGB code (Fig. S7). 

Besides, from square to round, the shape of nodes can be adjusted even real neuron (Fig. S8). It also can present different single areas (Fig. S9). 

17 

**==> picture [426 x 169] intentionally omitted <==**

Figure S7: Display of color selection. 

**==> picture [426 x 201] intentionally omitted <==**

Figure S8: Display of nodes size adjusting. 

**==> picture [426 x 197] intentionally omitted <==**

Figure S9: Display of area selection. 

18 


Springer Nature 2021 L[A] TEX template 

# CORE-PERIPHERY PRINCIPLE GUIDED REDESIGN OF SELF-ATTENTION IN TRANSFORMERS 

Xiaowei Yu[1][†] , Lu Zhang[1][†] , Haixing Dai[2][†] , Yanjun Lyu[1] , Lin Zhao[2] , Zihao Wu[2] , David Liu[3] , Tianming Liu[2*] and Dajiang Zhu[1*] 

> 1Department of Computer Science and Engineering, University of Texas at Arlington, Arlington, 76010, Texas, USA. 

> 2School of Computing, University of Georgia, Athens, 30602, Georgia, USA. 

> 3Athens Academy, Athens, 30602, Georgia, USA. 

*Corresponding author(s). E-mail(s): tliu@cs.uga.edu; dajiang.zhu@uta.edu; 

> †These authors contributed equally to this work. 

## Abstract 

Designing more efficient, reliable, and explainable neural network architectures is critical to studies that are based on artificial intelligence (AI) techniques. Numerous efforts have been devoted to exploring the best structures, or structural signatures, of well-performing artificial neural networks (ANN). Previous studies, by post-hoc analysis, have found that the best-performing ANNs surprisingly resemble biological neural networks (BNN), which indicates that ANNs and BNNs may share some common principles to achieve optimal performance in either machine learning or cognitive/behavior tasks. Inspired by this phenomenon, rather than relying on post-hoc schemes, we proactively instill organizational principles of BNNs to guide the redesign of ANNs. We leverage the Core-Periphery (CP) organization, which is widely found in human brain networks, to guide the information communication mechanism in the self-attention of vision transformer (ViT) and name this novel framework as CP-ViT. In CP-ViT, the attention operation between nodes (image patches) is defined by a sparse graph with a CorePeriphery structure (CP graph), where the core nodes are redesigned 

1 

Springer Nature 2021 L[A] TEX template 

2 Article Title 

and reorganized to play an integrative role and serve as a center for other periphery nodes to exchange information. In addition, a novel patch redistribution strategy enables the core nodes to screen out taskirrelevant patches, allowing them to focus on patches that are most relevant to the task. We evaluated the proposed CP-ViT on multiple public datasets, including medical image datasets (INbreast) and natural image datasets (CIFAR-10, CIFAR-100, and TinyImageNet). Interestingly, by incorporating the BNN-derived principle (CP structure) into the redesign of ViT, our CP-ViT outperforms other state-of-theart ANNs. In general, our work advances the state of the art in three aspects: 1) This work provides novel insights for brain-inspired AI: we can utilize the principles found in BNNs to guide and improve our ANN architecture design; 2) We show that there exist sweet spots of CP graphs that lead to CP-ViTs with significantly improved performance; and 3) The core nodes in CP-ViT correspond to task-related meaningful and important image patches, which can significantly enhance the interpretability of the trained deep model. (Code is ready for release). 

Keywords: Self-Attention, Core-Periphery, Transformers 

## 1 Introduction 

Aided by the rapid advancement in hardware and massively available data, deep learning models have witnessed an explosion of various artificial neural networks (ANN) architectures[1–3], and made breakthroughs in many application fields due to their powerful automatic feature extraction capabilities. It is widely expected the architectures of ANN, as the core of current AI techniques, to be more efficient, reliable, explainable, and transformable, to adapt to various and complex problems in real applications. Essentially, various ANN architectures, represented via different neuron wiring patterns, correspond to different information exchange mechanisms, and therefore, have an inevitable effect on the latent feature representation and the downstream task performance. For example, multilayer perceptron (MLP) directly stacks multiple layers of neurons with paired-wise full connections between adjacent layers, whereas convolutional neural networks (CNN) focus on learning effective convolutional kernels that indicate specific wiring patterns among the neurons within the receptive field. Similarly, recurrent neural networks (RNN) adopt cyclic connections between nodes, allowing output to affect subsequent input to the same nodes[4]. This special neuron wiring pattern of building cycles between nodes also enables RNNs to model and infer temporal dynamic relationships[5] contained in sequential data. More recently, transformer has become another mainstream ANN architecture due to its outstanding self-attention mechanism that allows effective and efficient message exchanges among neurons, and produced promising results in the natural language processing[3, 6] and computer vision domains[7, 8]. In particular, 

Springer Nature 2021 L[A] TEX template 

Article Title 3 

many advancements in transformer architecture design, e.g., vision transformer (ViT)[7], have centered around more effective message exchange mechanisms among spatial tokens by designing different Token Mixers. For instance, the shifted window attention in Swin[8], the token-mixing MLP in Mixer[9], and the pooling in MetaFormer[10], among others, were all designed to improve the self-attention upon the original vanilla ViT[7], and thus enable more effective and efficient message exchanges among spatial patches/tokens. However, despite tremendous advancements in ANN architecture design in MLPs, CNNs, RNNs, and transformers, particularly for better message exchange mechanisms, there has been a fundamental lack of general principles that can inform and guide such ANN architecture design and redesign. 

To seek such guiding principles for ANN architecture design, more and more research studies started exploring the “structural signatures” of wellperforming ANNs. Hence, the deep learning community has witnessed a paradigm shift from optimal feature design to optimal ANN architecture design. In general, the major strategies for optimal ANN architecture design can be categorized into two basic streams based on how to search in the neural architecture space. The first strategy is to design neural architectures that achieve the best possible performance using given computing resources in an automated way with minimal human intervention. Neural architecture search (NAS)[11–13] is a major methodology in this category. NAS has a relatively low demand for the researchers’ prior knowledge and experience, making it easier to perform modifications to the neural architecture though it usually comes with a high computational cost. The second category of the strategy is to take the advantage of prior knowledge from specific domains, such as brain science, to guide ANN architecture design. For example, the authors in [14] designed a two-stream model for grounding language learning in vision based on the brain science principle that humans learn language by grounding concepts in perception and action, and encoding “grounded semantics” for cognition. It is worth noting that the above-mentioned two strategies should be viewed as complementary to each other rather than being in conflict, and their combination provides the researchers with an opportunity to explore and design well-performing neural architectures under different principles. For instance, recent studies, via qualitatively post-hoc analysis, have found that the bestperforming ANNs surprisingly resemble biological neural networks (BNN)[15], which indicates that ANNs and BNNs may share some common principles to achieve optimal performance in either machine learning or cognition/behavior tasks. 

Inspired by the above-mentioned prior outstanding studies, in this work, we aim to proactively instill the Core-Periphery (CP) organization to guide the redesign of ANNs by using ViT as a working example. It has been widely confirmed that the Core-Periphery organization universally exists in the functional networks of human brains and other mammals, effectively promoting the efficiency of information transmission and communication for integrative 

Springer Nature 2021 L[A] TEX template 

4 Article Title 

**==> picture [337 x 68] intentionally omitted <==**

**----- Start of picture text -----**<br>
Biological Neural Network Artificial Neural Network<br>Self-Attention<br>in ViTs<br>Core-Periphery Core-Periphery Complete<br>Brain Networks Graph Core-Periphery  Self-Attention  Regular Self-Attention  Graph<br>**----- End of picture text -----**<br>


Fig. 1 The Core-Periphery principle in brain networks inspires the design of ANNs. The Core-Periphery structure broadly exists in brain networks, with a dense “core” of nodes (pink) densely interconnected with each other and a sparse “periphery” of nodes (blue) sparsely connected to the core and among each other. Inspired by this principle of BNN, we aim to instill the Core-Periphery structure into the self-attention mechanism and propose a new CP-ViT model. 

processing[16, 17]. The concept of the Core-Periphery brain network is illustrated in Fig. 1. By using the Core-Periphery property as a guiding principle, we infused its effective and efficient information communication mechanism into the redesign of ViT. To this end, we quantified the Core-Periphery property of the human brain network, infused the Core-Periphery property into ViT, and proposed a novel CP-ViT architecture. Specifically, we update the complete graph of dense connections in the original vanilla ViT[7] with a sparse graph with Core-Periphery property (CP graph), where the core nodes are redesigned and reorganized to play an integrative role and serve as a center for other periphery nodes to exchange information. Moreover, in our design, a novel learning mechanism is used to endow the core nodes with the power to capture the task-related meaningful and important image patches. We evaluated the proposed CP-ViT on multiple public datasets, including a medical image dataset (INbreast) and natural image datasets (CIFAR-10, CIFAR100, TinyImageNet). The results indicate that the optimized CP-ViT in sweet spots[15] outperforms other ViTs. We summarize our contributions in three aspects: 1) This work provides novel insights for brain-inspired AI: we can utilize the principles found in BNNs to guide and improve our ANN architecture design; 2) We show that there exist sweet spots of CP graphs that lead to CP-ViTs with significantly improved performance and 3) The core nodes in CP-ViT correspond to task-related meaningful and important image patches, which can significantly enhance the interpretability of the trained deep model. 

## 2 Results 

## 2.1 Exploring Core-Periphery Graphs 

Core-Periphery property in brain networks. We quantitatively measured the Core-Periphery property of brain networks. Working memory network (BN-WM) and motor network (BN-M) are two typical functional networks that are widely existed in the human brain. In this work, we used task fMRI data of these two tasks in the Human Connectome Project[18] to generate functional brain networks. Using voxels as nodes and the correlations between 

Springer Nature 2021 L[A] TEX template 

Article Title 5 

**==> picture [335 x 270] intentionally omitted <==**

**----- Start of picture text -----**<br>
Brain Networks Core-Periphery Graphs (Nodes, Core Nodes) Complete Graph<br>Working Memory Motor  (50, 20) (150, 40) (190, 20) Nodes = Core Nodes Complete Graph<br>(Vanilla ViTs)<br>CP Graphs<br>(CP-ViTs)<br>(150, 40)<br>(50, 20) (190, 20)<br>(a) Brain Networks (b) Core-Periphery graphs (c) Complete graph Nodes (d) Searching Space<br>Graph<br>Core Nodes<br>Adjacency Matrix<br>**----- End of picture text -----**<br>


Fig. 2 (a) Two types of representative brain networks in motor and working memory tasks. (b) Three examples of CP graphs. (c) Complete graph. The first row in (a), (b), and (c) shows their wiring patterns, while the second row shows their corresponding adjacency matrices. Black color in adjacency matrices means connections between nodes, while white represents no edge. (d) Graph search space defined by the total nodes number and the core nodes number. The complete graphs are located at the diagonal highlighted by a red box and the CP graphs are located at the remaining parts. 

fMRI signals associated with each voxel as edges, we built two populationlevel functional networks and showed their connection patterns as well as the adjacency matrices in Fig. 2(a). To measure the Core-Periphery property of the two functional brain networks, we adopted independent probability[19] as the measurement. Independent probability is defined as the probability that there is an edge between any pairs of nodes in a given matrix. Thus, the independent probabilities of the core-core connections, core-periphery connections, and periphery-periphery connections can be represented as Icc, Icp and Ipp, respectively. If the given matrix or graph is organized in a Core-Periphery manner[20][21], the corresponding independent probabilities will have the following relations: Icc > Icp > Ipp. According to previous studies[22], the convex gyri and concave sulci areas, which are two basic anatomical structures of the cerebral cortex, play different functional roles: gyri are functional hubs for global information exchange while sulci are responsible for local information processing. Therefore, we divided the nodes (voxels) into two categories, gyri-nodes (nodes in gyri regions) and sulci-nodes (nodes in sulci regions), 

Springer Nature 2021 L[A] TEX template 

6 Article Title 

and examined if brain networks have CP structure: gyri-nodes act as core nodes and sulci-nodes act as periphery nodes. The core-periphery measures of brain networks are shown in the last two columns in Table 1. Rcc, Rpp and Rcp represent the normalized independent probabilities of core-core, coreperiphery, and periphery-periphery connections. The independent probabilities and normalized independent probabilities are formulated as: 

**==> picture [263 x 70] intentionally omitted <==**

Core-Periphery structure in artificial neural networks. We introduced the Core-Periphery organization into ANNs by CP graphs. There are two key factors that can affect the CP graph generation process. The first is the number of nodes, including the number of total nodes and the core nodes, which defines the search space. In this work, we set the maximum number of total nodes as 196, i.e., the number of patches for the vision transformer, then the number of core nodes can be any number between 0 and 196. Thus, the search space will include[�][196] i=1 �j0<j<=i(i + j) = 19208 types of CP graphs, where i and j represent the number of total nodes and the core nodes. The second is the wiring patterns of CP graphs: in this work, we used pcc, pcp, and ppp to represent the wiring probabilities between core-core nodes, core-periphery nodes, and periphery-periphery nodes, respectively. Fig.2 (b) and (c) present the wiring patterns and adjacency matrices of three examples of CP graphs and the complete graph. As shown in Fig. 2(b) and (c), CP graphs are densely connected for core nodes and sparsely connected for periphery nodes. The overall connection patterns of CP graphs are more sparse than the complete graph. The search space of CP graphs was shown in Fig. 2(d) where the complete graphs located at the diagonal were highlighted by a red box and three types of CP graphs corresponding to Fig. 2(b) were highlighted by pink circles. For each type of CP graph, we generated 5 samples with different wiring patterns and obtained 19208 * 5 CP graphs in total. Since the number of the generated CP graphs is huge (19208 * 5 in total), we sampled 190 types of CP graphs out of the total 19208 and finally obtained 190*5 candidates. For example, for a CP graph with 50 nodes, the number of core nodes is set to be [10, 20, 30, 40]. As a result, four different CP graphs, including [50, 10], [50, 20], [50, 30], and [50, 40], are obtained. For each of these four types of CP graphs, we generate 5 samples for further experiments. 

Similar to brain networks, we also used the normalized independent probability to measure the Core-Periphery property for the generated CP graphs. We calculated the normalized averaged independent probability over 190*5 CP graphs and showed the results in the first column of Table 1. From the table we can see that Rcc > Rcp > Rpp, which suggests that our generated CP 

Springer Nature 2021 L[A] TEX template 

Article Title 7 

Table 1 Evaluation of the Core-Periphery property in CP graphs, graphs generated by other graph generators, and brain networks 

|IP|CP Graphs|CE. Graphs|WS Graphs|ER Graphs|BN-M|BN-WM|
|---|---|---|---|---|---|---|
|Rcc|.59±.06|.33±.00|.40±.27|.36±.23|.55±.11|.61±.09|
|Rcp|.35±.13|.33±.00|.40±.28|.36±.24|.34±.07|.26±.10|
|Rpp|.07±.06|.33±.00|.20±.28|.28±.22|.15±.05|.14±.06|



H 

Table 2 Summary of datasets 

|able 2 Summary|of datasets|||||
|---|---|---|---|---|---|
|Dataset|Training|Validation|Class|Original Res.|Resized Res.|
|INbreast|6000|100|3|1024 * 1024 * 3|224 * 224 * 3|
|CIFAR-10|50000|10000|10|32 * 32 * 3|224 * 224 * 3|
|CIFAR-100|50000|10000|100|32 * 32 * 3|224 * 224 * 3|
|TinyImageNet|100K|10000|200|64 * 64 * 3|224 * 224 * 3|



graphs, as expected, display prominent Core-Periphery properties, while the graphs generated by the classic graph generators, such as (1) Complete graph (CE.) generator; (2) Watts-Strogatz (WS) generator; and (3) Erdos-Renyi (ER) generator don’t have the Core-Periphery property. 

## 2.2 Sweet Spots for CP-ViTs 

In this section, we evaluated the performance of the proposed CP-ViT. The CP-ViT was implemented based on the ViT-S/16 architecture[23] and evaluated on 4 different types of public datasets, the medical image dataset INbreast[24], the natural image dataset CIFAR-10[25], CIFAR-100[25] and TinyImageNet[26]. The summary of the datasets we used in this work is presented in Table 2. The parameters of CP-ViT were initialized and finetuned from ViT-S/16 trained on ImageNet[2]. We trained the CP-ViT for 100 epochs with batch size 64 for INBreast and 256 for CIFAR-10, CIFAR100 and TinyImageNet, and used AdamW optimizer and cosine learning rate schedule[27] with an initial learning rate of 0.0001 and minimum of 1e−6. All the experiments were conducted using NVIDIA Tesla V100 GPU. 

We explored the performance of different types of CP graphs in the search space (Fig. 2(a)) in terms of top 1 accuracy and connection ratio. The connection ratio (CR) quantitatively measures the computational costs of different self-attention operations, which is defined by (2): 

**==> picture [202 x 25] intentionally omitted <==**

where 1Mcp represents the number of 1s in the mask matrix of cp graphs - Mcp which is derived from the adjacency matrix of the CP graph, and ∥•∥1 is the number of elements in the mask matrix. In general, CR represents the ratio of actual self-attention operations to the potential maximum self-attention 

Springer Nature 2021 L[A] TEX template 

8 Article Title 

**==> picture [282 x 460] intentionally omitted <==**

**----- Start of picture text -----**<br>
(a) CP-ViT on INbreast<br>Sweet Spots: (Nodes, Core Nodes)<br>(30, 10) (50, 10) (90, 20)<br>(90, 70) (110, 100) (130, 80)<br>(130, 100) (150, 120)<br>(160, 140) (170, 150)<br>(170, 130)<br>(190, 180)<br>Top-1 Accuracy (%) Accuracy Degradation (%) Connectivity Ratio<br>(b) CP-ViT on CIFAR-10<br>Sweet Spots: (Nodes, Core Nodes)<br>(100, 90) (110, 100)<br>(120, 90) (120, 110)<br>(130, 110) (160, 150)<br>(180, 150)  (190, 170)<br>Top-1 Accuracy (%) Accuracy Degradation (%) Connectivity Ratio<br>(c) CP-ViT on CIFAR-100<br>Sweet Spots: (Nodes, Core Nodes)<br>(110, 90)<br>(110, 100)<br>(120, 100)<br>(130, 120)<br>(190, 180)<br>Top-1 Accuracy (%) Accuracy Degradation (%) Connectivity Ratio<br>(d) CP-ViT on TinyImageNet<br>Sweet Spots: (Nodes, Core Nodes)<br>(120, 110)<br>(130, 120)<br>(160, 130)<br>(160, 150)<br>(180, 170)<br>Top-1 Accuracy (%) Accuracy Degradation (%) Connectivity Ratio<br>**----- End of picture text -----**<br>


Fig. 3 Performance of CP-ViT measured using INbreast, CIFAR-10, CIFAR-100 and TinyImageNet datasets. Sub-figures on the left column under each datasets show the top 1 classification accuracy of the CP-ViTs and vanilla ViTs in the search space. A deeper color means higher top 1 accuracy. Sweet spots are marked by red crosses, in which CP-ViTs achieve better performance than vanilla ViT. Sub-figures on the middle column are the accuracy degradation of the CP-ViTs compared to vanilla ViTs. Sub-figures on the right column are the self-attention connection ratio of the CP-ViTs and vanilla ViT. Lighter color means a lower connection ratio. Sweet spots are marked by the blue crosses. 

Springer Nature 2021 L[A] TEX template 

Article Title 9 

Table 3 Comparison between the proposed CP-ViT in sweet spots with finetuned vanilla ViT-S [7]. * means vanilla ViT-S finetuned by ourselves. 

|Dataset|Model|CP Graph|CR (%)|Rcc,Rcp,Rpp|Top1 Acc.(%)|
|---|---|---|---|---|---|
||ViT-S(*)|(N, N)|100.00|0.33,0.33,0.33|89.91|
||CP-ViT|(30,10)|32.36|0.58,0.33,0.09|90.58|
||CP-ViT|(50,10)|29.20|0.53,0.34,0.12|90.01|
||CP-ViT|(90,20)|43.82|0.52,0.36,0.12|90.58|
||CP-ViT|(90,70)|84.50|0.54,0.40,0.06|90.01|
||CP-ViT|(100,90)|92.80|0.49,0.39,0.11|90.69|
|INbreast|CP-ViT|(130,80)|31.34|0.58,0.34,0.07|90.58|
||CP-ViT|(130,100)|82.94|0.57,0.36,0.07|90.69|
||CP-ViT|(150,120)|84.18|0.57,0.41,0.02|90.01|
||CP-ViT|(160,140)|87.77|0.55,0.41,0.03|90.58|
||CP-ViT|(170,130)|80.79|0.57,0.41,0.02|90.58|
||CP-ViT|(170,150)|87.65|0.56,0.41,0.03|90.12|
||CP-ViT|(190,180)|84.89|0.52,0.42,0.05|90.69|
||ViT-S(*)|(N, N)|100.00|0.33,0.33,0.33|98.50|
||CP-ViT|(100,90)|92.80|0.49,0.39,0.11|98.91|
||CP-ViT|(110,100)|94.49|0.53,0.42,0.05|98.91|
||CP-ViT|(120,90)|89.73|0.51,0.41,0.08|98.91|
|CIFAR-10|CP-ViT|(120,110)|94.70|0.49,0.38,0.12|98.97|
||CP-ViT|(130,110)|87.32|0.56,0.40,0.03|98.97|
||CP-ViT|(160,150)|90.47|0.54,0.39,0.06|98.91|
||CP-ViT|(180,150)|91.79|0.50,0.42,0.07|98.91|
||CP-ViT|(190,170)|92.59|0.53,0.43,0.03|98.94|
||ViT-S(*)|(N, N)|100.00|0.33,0.33,0.33|91.10|
||CP-ViT|(110,90)|88.96|0.59,0.37,0.04|91.32|
|CIFAR-100|CP-ViT|(110,100)|94.49|0.53,0.42,0.05|91.45|
||CP-ViT|(120,100)|92.40|0.50,0.41,0.09|91.15|
||CP-ViT|(130,120)|87.50|0.58,0.32,0.09|91.11|
||CP-ViT|(190,180)|94.89|0.52,0.42,0.05|91.12|
||ViT-S(*)|(N, N)|100.00|0.33,0.33,0.33|87.36|
||CP-ViT|(120,110)|94.71|0.49,0.39,0.12|87.51|
|TinyImageNet|CP-ViT|(130,120)|87.50|0.58,0.33,0.09|87.37|
||CP-ViT|(160,130)|90.02|0.54,0.44,0.02|87.40|
||CP-ViT|(160,150)|90.47|0.54,0.40,0.06|87.63|
||CP-ViT|(180,170)|95.84|0.50,0.43,0.07|87.84|



operations. Given a graph, the potential maximum self-attention operation is fixed. Less actual self-attention operation means less computational cost and hence it has a smaller CR value. 

For each specific combination of different numbers of nodes/core nodes in the search space, we trained the CP-ViT with 5 different CP graph samples and reported the average result in Fig. 3. The four results in Fig. 3(a-d) correspond to four different datasets. For the results on each dataset, we display three subfigures: the top 1 accuracy (left), the accuracy degradation (middle), and the connection ratio (right). We highlighted the sweet spots, which are corresponding to the CP graphs that lead to improved performance[15], with red crosses in Fig. 3. In the top-1 accuracy of Fig. 3, deeper color means better performance. The accuracy degradation subfigures show the accuracy variation compared to fully connected self-attention ViTs. Our CP-ViTs gain 

Springer Nature 2021 L[A] TEX template 

10 Article Title 

Table 4 Comparisons with state-of-the-art transformers and other architectures. 

|e 4 Comparisons with|state-of-the-a|rt transformer|s and other archit|ectures.|
|---|---|---|---|---|
|Model|CIFAR-10|CIFAR-100|TinyImageNet|INbreast|
|ResNet-18[1]|95.55|76.64|67.33|84.34|
|ResNet-18+Gaze[28]|−−|−−|−−|86.74|
|ViT-S-SAM[23]|98.20|87.60|87.50|90.20|
|ViT-S[23]|97.60|85.70|87.40|89.91|
|DeiT-S[29]|97.50|90.30|86.90|89.90|
|Mixer-S-SAM[23]|96.10|82.40|85.60|87.60|
|T2T-ViT-12[30]|98.53|89.63|86.20|88.40|
|AutoFormer-S[31]|98.50|90.60|87.60|90.10|
|CP-ViT-S(ours)|98.97|91.45|87.84|90.69|



a positive boost in sweep spots as it has higher accuracy than vanilla ViTs. At the same time, our CP-ViTs maintain competitive top-1 accuracy in most search space areas, as shown in the middle subfigures. The performance of CP-ViTs varies in the search space. This result indicates that different selfattention (wiring) patterns may have great influences on the performances of ViTs. Compared to vanilla ViTs with a fully-connected self-attention pattern, the proposed CP-ViT provides the potential for the model to only search for optimal self-attention patterns. The CRs of all the ViTs including vanilla ViTs and CP-ViTs were shown on the right. The CRs of the sweet spots were marked with a blue cross. Besides the improvement in classification accuracy (0.78% for INbreast, 0.47% for CIFAR-10, 0.35% for CIFAR-100, 0.48% for TinyImageNet), the proposed CP-ViT also leads to a great reduction in connection ratio due to less self-attention operations (-70.80% connections for INbreast, -12.68% connections for CIFAR-10, -12.50% connections for CIFAR-100, -12.50% connections for TinyImageNet). The model setting, top 1 accuracy, and CRs of different ViTs were reported in Table 3. For all the four datasets, our CP-ViT not only shows improved classification performance but also reduces connection ratio compared to vanilla ViTs. Interestingly, our results demonstrate that the “sweet spots” are corresponding to the wiring patterns (graphs) with CP structures, instead of fully connected self-attention. 

We also compared the proposed CP-ViT with the state-of-the-art methods in Table 4, including various convolutional networks and transformer architectures. Note that we applied the core-periphery principle to guide the design on small ViT, therefore, the counterparts we compared to in this work are also small-scale transformers and their variants. “−−” means there is no available reports or not applicable. As presented in the table, our method outperforms the CNNs, and a series of variants of transformers on these datasets, suggesting the superiority of the proposed CP-ViTs over the existing methods. 

## 2.3 Visualization of Important Patches 

Another advantage of CP-ViT is that it can potentially improve the interpretability of the deep-learning models via semi-intervention when linking the explainable concepts contained in the data to the instilled CP structures (section 3.2.3). In our CP-ViT the core nodes are expected to be associated 

Springer Nature 2021 L[A] TEX template 

Article Title 11 

with the important image patches relating to the classification tasks. To evaluate this, we show the patches that were redistributed to the core nodes when the model was well-trained in Fig. 4. For INBreast, we randomly selected the images of three subjects in each class and displayed the original images, the images overlaid with important patches, and the images overlaid with the expert’s eye gazes in three columns. As shown in the Fig. 4, the patches of the core nodes are well co-localized with the locations that were identified as diagnostic biomarkers of the disease in literature publications[32]. We also show the medical physicians’ eye gaze maps on these images, given that the eye gaze acquired by eye-tracking equipment is considered the ground truth for identifying important areas in the image. The important patches identified by our CP-ViT highly overlap with the eye gaze maps, demonstrating the correspondence between the core nodes and the task-related concepts, i.e., the 

Springer Nature 2021 L[A] TEX template 

12 Article Title 

**==> picture [327 x 404] intentionally omitted <==**

**----- Start of picture text -----**<br>
Core Patches Identified on INbreast. Overlapping rate (OR) is shown under each image.<br>Input Image Core Patches Eye Gaze Input Image Core Patches Eye Gaze Input Image Core Patches Eye Gaze<br>OR = 76.8%  OR = 82.7%  OR = 56.9%<br>OR = 88.8%  OR = 93.4%  OR = 57.1%<br>OR = 87.8%  OR = 85.7%  OR = 89.8%<br>Core Patches Identified on CIFAR-10.<br>Horse Bird Frog Cat<br>Truck Deer Car Dog<br>Core Patches Identified on CIFAR-100.<br>Castle Oak Tree Possum Crocodile<br>Boy Keyboard Television Lizard<br>Core Patches Identified on TinyImageNet.<br>Goldfish Bullfrog Face Audiotape<br>Tape Player Car Racing Coffee Cup Goat<br>Normal<br>Benign<br>Malignant<br>**----- End of picture text -----**<br>


Fig. 4 Visualization of important image patches that were distributed to the core nodes. For the INbreast dataset (the first block), images of three randomly selected subjects for each class were shown. For each subject, there are three images displayed in three columns. The left column is the original image, the middle column shows the important patches marked by red, and the right column is the eye gaze of medical physicians on the image. For the natural image datasets (the second block, CIFAR-10, CIFAR-100 and TinyImageNet), the important patches identified in eight randomly selected classes were displayed. The left column is the original image, and the right column shows the identified core patches marked in red. 

important image patches. For natural image datasets, we also visualized the patches assigned to the core nodes under the black dotted line in Fig. 4. It is clear that the objects in the patches of core nodes are semantically related to the class labels. 

Springer Nature 2021 L[A] TEX template 

Article Title 13 

**==> picture [259 x 485] intentionally omitted <==**

**----- Start of picture text -----**<br>
(a) CP-ViT on INbreast<br>Rcc Rcp Rpp<br>(b) CP-ViT on CIFAR-10<br>Rcc Rcp Rpp<br>(c) CP-ViT on CIFAR-100<br>Rcc Rcp Rpp<br>(d) CP-ViT on TinyImageNet<br>Rcc Rcp Rpp<br>(e) Brain Networks (Motor)<br>(f) Brain Networks (Working Memory)<br>Rcc Rcp Rpp<br>Top1 Acc.<br>Top1 Acc.<br>Top1 Acc.<br>Top1 Acc.<br>Density<br>Density<br>**----- End of picture text -----**<br>


Fig. 5 Visualization of Core-periphery measures versus the classification performance. The regression results of the normalized independent probability versus the classification accuracy for experiments on each dataset are presented in (a), (b), (c), and (d). The core-periphery measures for brain networks of motor and working memory are shown in (e) and (f). 

Springer Nature 2021 L[A] TEX template 

14 Article Title 

## 2.4 Fast Search for Sweet Spots 

Our proposed CP-ViT aims to achieve better performance more efficiently, by directly updating the initial dense wiring patterns with sparse CP graphs which are widely existing in BNN. Previous studies suggest that in ANN there exist sweet spots that correspond to some specific wiring patterns leading to significantly improved performance[15]. Therefore, it is interesting to investigate the relationship between sweet spots (the ANN structures with better performance) and the introduced CP structure. We conducted intensive experiments to illustrate how the accuracy changes under the CP measurements (in terms of normalized independent probability) and the results are summarized in Fig. 5. We found the normalized independent probabilities between core nodes - Rcc, core and periphery nodes - Rcp and periphery nodes - Rpp fall in different range: [0.45, 0.70] for Rcc, [0.25, 0.45] for Rcp, and [0.00, 0.15] for Rcc. Both Rcc and Rcp display obvious and consistent patterns in terms of the relationship between ANN performance (accuracy) and CP properties: there exists a certain range of CP structures with which the corresponding wiring patterns of ANN can achieve better performance. For example, when the normalized independent probabilities between core and periphery nodes (Rcp) fall within the range of [0.36, 0.42], our CP-ViT inclines to have the best accuracy on all four datasets. On the contrary, the normalized independent probabilities between periphery nodes (Rpp) show relatively less influence on the overall performance. These results suggest that the wiring patterns between core nodes and periphery nodes have more influence on the overall ANN performance than the wiring patterns between periphery nodes. For comparison, we also calculated the range of group-wise normalized independent probabilities in human functional brain networks when performing two different tasks - motor and working memory tasks. The results are shown in Fig. 5 (e-f). Interestingly, the distribution of Rcc, Rcp and Rcp shows obvious overlaps among different functional brain networks though the major range of CP metrics is different from ANN (our CP-ViT). In general, our CP-ViT can leverage the CP structure to learn the optimal combinations of total nodes and core nodes, and to quickly find the sweet spots in a more efficient way. 

## 3 Methods 

## 3.1 Related Work 

Core-periphery Structure The Core-Periphery structure is a fundamental network signature that is composed of two qualitatively distinct components: a dense “core” of nodes strongly interconnected with one another, allowing for integrative information processing to facilitate the rapid transmission of the message, and a sparse “periphery” of nodes sparsely connected to the core and among each other[33]. The Core-Periphery pattern has helped explain a broad range of phenomena in network-related domains, including online amplification[34], cognitive learning processes[16], technological infrastructure 

Springer Nature 2021 L[A] TEX template 

Article Title 15 

organization[35, 36], and critical disease-spreading conduits[37]. All these phenomena suggest that the Core-Periphery pattern may play a critical role to ensure the effectiveness and efficiency of information exchange within the network. In the literature, there are two widely-used approaches for generating graphs with Core-Periphery property (CP graphs): the classic two-block model of Borgatti and Everett (BE algorithm)[38] and the k-cores decomposition[33]. The former approach partitions a network into a binary hub-and-spoke layout, while the latter one divides it into a layered hierarchy. In this work, for simplicity, we adopted a two-block model to generate a CP graph which is used to guide the self-attention operations between patches (tokens) in ViT. In this way, the Core-Periphery property is infused into the ViT model. 

Methods for Designing More Efficient ViT Architecture ViT and its variants have achieved promising performances in various computer vision tasks, but their gigantic parameter counts, heavy run-time memory usage, and high computational cost become a major burden for the applications. Therefore, there is an urgent need to develop lightweight vision transformers with comparable performance and efficiency. For this purpose, several studies aimed to use network pruning, sparse training, and supernet-based NAS to slim vanilla ViT. From token level, Tang et al.[39] designed a patch slimming method to discard useless tokens. Evo-ViT[40] updated the selected informative and uninformative tokens with different computation paths. VTP[41] reduced embedding dimensionality by introducing control coefficients. From model architecture level, UP-ViTs[42] pruned the channels in ViTs in a unified manner, including residual connections in all the blocks, multi-head self-attention (MHSA)[3], feedforward neural layers (FFNs), normalization layers, and convolution layers in ViT variants. SViTE[43] dynamically extracted and trained sparse subnetworks instead of training the entire model. To further co-explore data and architecture sparsity, a learnable token selector was used to determine the most vital image patch embeddings in the current input sample. AutoFormer[31] and ViTAS[44] leveraged supernet-based NAS to optimize the ViT architecture. Despite the remarkable improvements achieved by the above methods, both token-sampling and data-driven strategies may highly depend on the data and tasks performed, impeding the vision transformers’ generalization capability. A more universal principle (e.g., derived from BNNs) that can guide a more efficient design of ANN’s architecture is much desired. In this work, we will leverage a widely existing Core-Periphery property in BNN to develop a more efficient CP-ViT. 

## 3.2 Core-Periphery Principle Guided Transformer 

The Core-Periphery principle can be applied to ViT and its variants via a unified framework that is illustrated in Fig. 6. The framework includes two main parts: Core-Periphery graph generation and Core-Periphery graph guided re-design of the self-attention mechanism. 

Springer Nature 2021 L[A] TEX template 

16 Article Title 

**==> picture [338 x 136] intentionally omitted <==**

**----- Start of picture text -----**<br>
(a) Core-Periphery Graph Generation (b) Re-Design of Self-Attention Mechanism (c) Core-Periphery Transformer<br>Core-Periphery Graph  (b1) Self-Attention Re-schedule<br>� � � � � � 122342564 7, 9, /, :;< = >6?2@A• 79 [B] � DC E:;< /<br>� �<br>� � � �<br>1  1  1  1 Nodes Update Rule<br>1  0  0  0<br>1  0  0  11  0  1  0 • !"# �$ %&(')(*-+.(')), /0(!) (b2) Patch Re-distribution<br>Distribute important patches to core nodes based on<br>Adjacency Matrix • ∈!"#$ℎ&'()(#) Task Activation Mapping<br>**----- End of picture text -----**<br>


Fig. 6 Core-Periphery Principle Guided Re-design of Self-Attention. The proposed CorePeriphery guided re-design framework for ViTs consists of two major components: the CorePeriphery graph generator and the re-design of the self-attention mechanism. The basic idea is that we mapped the ViT structure to graphs and proposed a new graph representation paradigm to represent the self-attention mechanism. Under this paradigm, the design of the self-attention mechanism can be turned into a task of designing desirable graphs. (a) The CP graph generator was proposed to generate graphs with Core-Periphery property in a wide range of search spaces. (b) The self-attention of the nodes is controlled by the generated CP graph and the patches are re-distributed to different nodes by a novel patch distribution method. (c) The new self-attention mechanism will upgrade the regular self-attention in vanilla ViT. The new ViT architecture is thus named as CP-ViT. 

## 3.2.1 Core-Periphery Graph Generation 

The self-attention of our proposed CP-ViT is controlled by Core-Periphery graphs (CP graphs). We proposed a CP graph generator to generate a wide spectrum of CP graphs in the graph space defined by the number of total nodes and the core nodes. Although several graph generators have been proposed in previous works, they were not designed for generating CP graphs. For example, Erdos-Renyi (ER) generator samples graphs with given node and edge numbers uniformly and randomly[45]; Watts-Strogatz (WS) generator generates graphs with small-world properties[46], and the complete graphs generator generates graphs where nodes are pair-wise densely connected with each other[47]. 

To generate graphs with CP property, we proposed a novel CP graph generator that is parameterized by a total node number n, a core node number m, and three wiring thresholds pcc, pcp, ppp which are the wiring probabilities between the core-core nodes, core-periphery nodes, and periphery-periphery nodes, respectively. Based on these measures, the CP graph generation process is as follows: we first defined the core nodes number m and the periphery nodes number n − m; Then, for each of the core-core node pairs, we used a random seed sampled from the continuous uniform distribution in [0, 1] to generate a wiring probability prs. If the wiring probability is greater than the threshold pcc, the two core nodes are connected. This wiring process is formulated as: 

**==> picture [229 x 31] intentionally omitted <==**

Springer Nature 2021 L[A] TEX template 

Article Title 17 

where A is the adjacency matrix of the generated graph, 1 means that there exists an edge between the nodes i and j, 0 means there is no edge between the nodes. The same procedure was applied to core-periphery and periphery-periphery node pairs with the corresponding thresholds pcp and ppp, respectively. In this way, by using different combinations of n, m, and wiring thresholds, we can generate a large number of candidate graphs in the graph space; finally, all the generated graphs were examined by the CP detection algorithm (BE algorithm)[38] and the graphs with CP property will be used in the further steps to guide the self-attention operation. 

## 3.2.2 Core-Periphery Guided Self-Attention 

To instill the CP principle into the self-attention mechanism in ViT, we redesigned the self-attention operations according to the generated CP graphs: the patches are replaced by the nodes, and the new self-attention relations are replaced by the edges in the CP graph. Thus, the self-attention in the vanilla ViT can be represented as a complete graph, and similarly, the CP principle can be effectively and conveniently infused into the ViT architecture by upgrading the complete graph with the generated CP graphs. CP graph can be represented as G = (V, E), with nodes set V and edges set E. The redesign of self-attention is formulated as: 

**==> picture [269 x 28] intentionally omitted <==**

where σ(·) is the activation function, which is usually the softmax function in ViTs, qi[(][r][)] is the query of patches in the i-th node in G, N (i) = {i∥i∨(i, j) ∈E} are the neighborhood nodes of node i, dk is the dimension of queries and keys, and Kj[(][r][)] and Vj[(][r][)] are the key and value of patches in node j. In vanilla ViT, one input image is divided into 196 patches, and each patch resolution is 16 by 16. In CP-ViT, each node corresponds to a single patch or multiple patches. We proposed the following patch assignment pipeline to map the original patches to the nodes: for a CP graph with n nodes, each node will be assigned to either ⌊196/n⌋ + 1 or ⌊196/n⌋ patches. For example, if we use a CP graph with 5 nodes, the 5 nodes will have 40, 39, 39, 39, and 39 patches, respectively; and if we use a CP graph with 196 nodes, each node will correspond to a single patch. Note that the patches are randomly assigned to the nodes at the beginning of the training process, and then they will be re-distributed iteratively after each training epoch based on a novel patch distribution method that will be elaborated in the next section. Based on the above discussion, the CP graph-guided self-attention conducted at the node level can be formulated as: 

**==> picture [284 x 25] intentionally omitted <==**

Springer Nature 2021 L[A] TEX template 

18 Article Title 

where the queries, keys, and values of all the patches are packed into the matrices Q, K, and V , respectively. Mcp is the mask matrix derived from the adjacency matrix A of the CP graph, and ⊙ is the dot product. The size of the mask matrix Mcp is 197 × 197 (196 patches plus 1 classification token), and it is a symmetric matrix. The derivation process of Mcp is as follows: for a CP graph with 5 nodes, the 5 nodes have 40, 39, 39, 39, and 39 patches, respectively. If the element (1, 2) in the corresponding adjacency A is 1, which means the node #1 is connecting to the node #2, and as a result, the 40 patches corresponding to the node #1 are connecting to the 39 patches associated with the node #2. Therefore, the elements at (1 : 40, 40 : 79) and (40 : 79, 1 : 40) in the mask matrix Mcp will be 1, where the (40 : 79, 1 : 40) means the elements from the 40th row to 79th row, and from the 1st column to the 40th column. The elements in the last row and column of Mcp are 1 because the classification token is connected to all the nodes, including both core and periphery nodes. Similar to the multi-head attention in transformers[3], our proposed CP multi-head attention is formulated as: 

**==> picture [294 x 28] intentionally omitted <==**

where the parameter matrices Wi[Q][,][W] i[ K][,][W] i[ V] and W[O] are the projections. Multi-head attention helps the model to jointly aggregate information from different representation subspaces at various positions. In this work, we apply the CP principle to each representation subspace. 

Algorithm 1 Patch Re-Distribution 

- Input: Likelihoods of an image belonging to a particular class (before activation layer) y, patch embeddings P[k] , k = 1, 2, ..., 196. 

- 1: Calculate the gradients of the likelihoods y with respect to patch embeddings P[k] , respectively. ∂y[[k]][[.]] 

   - ∂Pi[[k]][[.]] 

- 2: Obtain patch important weights αk, k = 1, 2, ..., 196 by average-pooling of gradients over the feature dimension, αk = Z1 �Zi=1 ∂P∂yi[k][,][where][Z][is][the] dimension of the patch embeddings. 

- 3: Sort the patch important weights αk in a descending manner, Sort(αk). 

- 4: Determine the number of patches assigned to core nodes, for simplicity, we call these patches as core patches. 

- 5: Match the core patches to core nodes in a way that the patches with higher importance weights are distributed to the core nodes with a higher degree. 

- 6: Re-organized the patches of the images according to the importance weights. 

Output: Patch re-organized images. 

Springer Nature 2021 L[A] TEX template 

Article Title 19 

**==> picture [335 x 227] intentionally omitted <==**

**----- Start of picture text -----**<br>
1 [st] Epoch  Initial Patch Distribution<br>… … … … … … … … … …<br>14<br>… … … … … … … … … …<br>class token<br>14<br>2 [nd] Epoch Patch Re-distribution<br>1.0<br>… … … … … … … … … …<br>… … … … … … … … … …<br>0.0<br>Normalized Gradient Bar<br>Patch Re-distribution<br>Last Epoch<br>… … … … … … … … … …<br>… … … … … … … … … …<br>…<br>**----- End of picture text -----**<br>


Fig. 7 Illustration of Patch Redistribution Process. The pink nodes are the core nodes, while the blue nodes are the periphery nodes. The initial patch distribution at the first epoch is the same as the vanilla ViTs. After each iteration during the training process, the gradients of patches discriminate from each other due to different contributions to the classification. The red the image patches are, the high gradient they are. Thus, the core patches that contribute most to the classification task are re-distributed to core nodes. 

## 3.2.3 Patch Redistribution 

The CP structure inclines to make the communication and message exchange at core nodes more intensive while less frequent among periphery nodes. This is based on the fact that the core nodes usually process the most important information in many biological networks[16]. To this end, we need to evaluate the importance of the patches and select the most important ones to assign to the core nodes, which is defined as task-related activation feature mapping. For a specific task of CP-ViT, in order to identify the important patches, we computed the gradients of the output y (before the activation function) with respect to patch features (after patch embedding) P[k] , i.e. ∂P∂y[k][ . These gradients] flowing back to the patch features are global-average-pooling over the feature dimensions to obtain the patch importance weights. The important weights are: 

**==> picture [206 x 30] intentionally omitted <==**

where Z is the dimension of the patch embedding features. After we have the weights of all the patches, the top K patches that have the highest weights are selected and re-distributed to the core nodes. Note that the patch distribution process is not random but distributed based on the nodes’ degree in 

Springer Nature 2021 L[A] TEX template 

20 Article Title 

a in a descending manner: the patches with higher importance weights are distributed to the core nodes with a higher degree. The algorithm for patch redistribution is detailed described in algorithm 1, and the corresponding patch redistribution process is illustrated in Fig. 7. As shown in Fig. 7, the image patches were randomly distributed at the first epoch but as the training process proceeded, patches with high gradients are identified as important patches and gradually redistributed to the core nodes. After certain iteration epochs, those patches that contribute the most to the classification result will be distributed to the core nodes. 

## 4 Conclusion 

In this work, we proactively instilled an organizational principle of BNN, that is, Core-Periphery property, to guide the design of ANN of ViT. For this, we provide a unified framework to introduce the core-periphery principle to guide the design of self-attention, the most prominent mechanism in transformers. Our extensive experiments suggest that there exist sweet spots of CP graphs that lead to CP-ViTs with significantly improved predictive performance. In general, our work advances the state of the art in three ways: 1) this work provides novel insights for brain-inspired AI by applying organizational principles of BNNs to ANN design; 2) the optimized CP-ViT can significantly improve its predictive performance while have the potential to reduce the unnecessary computational cost; and 3) the core nodes in CP-ViT are associated with task-related meaningful image patches, which can significantly enhance the interpretability of the trained deep model. 

Acknowledgments. This work was supported by the National Institute On Aging of the National Institutes of Health under Award Number R01AG075582 and the National Institute Of Neurological Disorders And Stroke of the National Institutes of Health under Award Number RF1NS128534. 

## References 

- [1] He, K., Zhang, X., Ren, S., Sun, J.: Deep residual learning for image recognition. cvpr. 2016 (2016) 

- [2] Krizhevsky, A., Sutskever, I., Hinton, G.E.: Imagenet classification with deep convolutional neural networks. Communications of the ACM 60(6), 84–90 (2017) 

- [3] Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A.N., Kaiser, �L., Polosukhin, I.: Attention is all you need. Advances in neural information processing systems 30 (2017) 

- [4] Sherstinsky, A.: Fundamentals of recurrent neural network (rnn) and long short-term memory (lstm) network. Physica D: Nonlinear Phenomena 404, 132306 (2020) 

Springer Nature 2021 L[A] TEX template 

Article Title 21 

- [5] Tealab, A.: Time series forecasting using artificial neural networks methodologies: A systematic review. Future Computing and Informatics Journal 3(2), 334–340 (2018) 

- [6] Devlin, J., Chang, M.-W., Lee, K., Toutanova, K.: Bert: Pre-training of deep bidirectional transformers for language understanding. arXiv preprint arXiv:1810.04805 (2018) 

- [7] Dosovitskiy, A., Beyer, L., Kolesnikov, A., Weissenborn, D., Zhai, X., Unterthiner, T., Dehghani, M., Minderer, M., Heigold, G., Gelly, S., et al.: An image is worth 16x16 words: Transformers for image recognition at scale. arXiv preprint arXiv:2010.11929 (2020) 

- [8] Liu, Z., Lin, Y., Cao, Y., Hu, H., Wei, Y., Zhang, Z., Lin, S., Guo, B.: Swin transformer: Hierarchical vision transformer using shifted windows. In: Proceedings of the IEEE/CVF International Conference on Computer Vision, pp. 10012–10022 (2021) 

- [9] Tolstikhin, I.O., Houlsby, N., Kolesnikov, A., Beyer, L., Zhai, X., Unterthiner, T., Yung, J., Steiner, A., Keysers, D., Uszkoreit, J., et al.: Mlp-mixer: An all-mlp architecture for vision. Advances in Neural Information Processing Systems 34, 24261–24272 (2021) 

- [10] Yu, W., Luo, M., Zhou, P., Si, C., Zhou, Y., Wang, X., Feng, J., Yan, S.: Metaformer is actually what you need for vision. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pp. 10819–10829 (2022) 

- [11] Zoph, B., Le, Q.V.: Neural architecture search with reinforcement learning. arXiv preprint arXiv:1611.01578 (2016) 

- [12] Ren, P., Xiao, Y., Chang, X., Huang, P.-Y., Li, Z., Chen, X., Wang, X.: A comprehensive survey of neural architecture search: Challenges and solutions. ACM Computing Surveys (CSUR) 54(4), 1–34 (2021) 

- [13] Elsken, T., Metzen, J.H., Hutter, F.: Neural architecture search: A survey. The Journal of Machine Learning Research 20(1), 1997–2017 (2019) 

- [14] Zhang, Y., Choi, M., Han, K., Liu, Z.: Explainable semantic space by grounding language to vision with cross-modal contrastive learning. Advances in Neural Information Processing Systems 34, 18513–18526 (2021) 

- [15] You, J., Leskovec, J., He, K., Xie, S.: Graph structure of neural networks. In: International Conference on Machine Learning, pp. 10881–10891 (2020). PMLR 

Springer Nature 2021 L[A] TEX template 

22 Article Title 

- [16] Bassett, D.S., Wymbs, N.F., Rombach, M.P., Porter, M.A., Mucha, P.J., Grafton, S.T.: Task-based core-periphery organization of human brain dynamics. PLoS computational biology 9(9), 1003171 (2013) 

- [17] Gu, S., Xia, C.H., Ciric, R., Moore, T.M., Gur, R.C., Gur, R.E., Satterthwaite, T.D., Bassett, D.S.: Unifying the notions of modularity and core–periphery structure in functional brain networks during youth. Cerebral Cortex 30(3), 1087–1102 (2020) 

- [18] Van Essen, D.C., Smith, S.M., Barch, D.M., Behrens, T.E., Yacoub, E., Ugurbil, K., Consortium, W.-M.H., et al.: The wu-minn human connectome project: an overview. Neuroimage 80, 62–79 (2013) 

- [19] Cucuringu, M., Rombach, P., Lee, S.H., Porter, M.A.: Detection of core– periphery structure in networks using spectral methods and geodesic paths. European Journal of Applied Mathematics 27(6), 846–887 (2016) 

- [20] Holme, P.: Core-periphery organization of complex networks. Physical Review E 72(4), 046111 (2005) 

- [21] Rombach, M.P., Porter, M.A., Fowler, J.H., Mucha, P.J.: Core-periphery structure in networks. SIAM Journal on Applied mathematics 74(1), 167– 190 (2014) 

- [22] Liu, H., Zhang, S., Jiang, X., Zhang, T., Huang, H., Ge, F., Zhao, L., Li, X., Hu, X., Han, J., et al.: The cerebral cortex is bisectionally segregated into two fundamentally different functional units of gyri and sulci. Cerebral Cortex 29(10), 4238–4252 (2019) 

- [23] Chen, X., Hsieh, C.-J., Gong, B.: When vision transformers outperform resnets without pre-training or strong data augmentations. arXiv preprint arXiv:2106.01548 (2021) 

- [24] Moreira, I.C., Amaral, I., Domingues, I., Cardoso, A., Cardoso, M.J., Cardoso, J.S.: Inbreast: toward a full-field digital mammographic database. Academic radiology 19(2), 236–248 (2012) 

- [25] Krizhevsky, A., Hinton, G., et al.: Learning multiple layers of features from tiny images (2009) 

- [26] Griffin, G., Holub, A., Perona, P.: Caltech-256 object category dataset (2007) 

- [27] Loshchilov, I., Hutter, F.: Sgdr: Stochastic gradient descent with warm restarts. arXiv preprint arXiv:1608.03983 (2016) 

- [28] Wang, S., Ouyang, X., Liu, T., Wang, Q., Shen, D.: Follow my eye: 

Springer Nature 2021 L[A] TEX template 

Article Title 23 

Using gaze to supervise computer-aided diagnosis. IEEE Transactions on Medical Imaging (2022) 

- [29] Touvron, H., Cord, M., Douze, M., Massa, F., Sablayrolles, A., J´egou, H.: Training data-efficient image transformers & distillation through attention. In: International Conference on Machine Learning, pp. 10347–10357 (2021). PMLR 

- [30] Wang, Y., Huang, R., Song, S., Huang, Z., Huang, G.: Not all images are worth 16x16 words: Dynamic transformers for efficient image recognition. Advances in Neural Information Processing Systems 34, 11960–11973 (2021) 

- [31] Chen, M., Peng, H., Fu, J., Ling, H.: Autoformer: Searching transformers for visual recognition. In: Proceedings of the IEEE/CVF International Conference on Computer Vision, pp. 12270–12280 (2021) 

- [32] Ibrokhimov, B., Kang, J.-Y.: Two-stage deep learning method for breast cancer detection using high-resolution mammogram images. Applied Sciences 12(9), 4616 (2022) 

- [33] Gallagher, R.J., Young, J.-G., Welles, B.F.: A clarified typology of coreperiphery structure in networks. Science advances 7(12), 9800 (2021) 

- [34] Barber´a, P., Wang, N., Bonneau, R., Jost, J.T., Nagler, J., Tucker, J., Gonz´alez-Bail´on, S.: The critical periphery in the growth of social protests. PloS one 10(11), 0143611 (2015) 

- [35] Alvarez-Hamelin, J.I., Dall’Asta, L., Barrat, A., Vespignani, A.: K- core decomposition of internet graphs: hierarchies, self-similarity and measurement biases. arXiv preprint cs/0511007 (2005) 

- [36] Carmi, S., Havlin, S., Kirkpatrick, S., Shavitt, Y., Shir, E.: A model of internet topology using k-shell decomposition. Proceedings of the National Academy of Sciences 104(27), 11150–11154 (2007) 

- [37] Kitsak, M., Gallos, L.K., Havlin, S., Liljeros, F., Muchnik, L., Stanley, H.E., Makse, H.A.: Identification of influential spreaders in complex networks. Nature physics 6(11), 888–893 (2010) 

- [38] Borgatti, S.P., Everett, M.G.: Models of core/periphery structures. Social networks 21(4), 375–395 (2000) 

- [39] Tang, Y., Han, K., Wang, Y., Xu, C., Guo, J., Xu, C., Tao, D.: Patch slimming for efficient vision transformers. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pp. 12165–12174 (2022) 

Springer Nature 2021 L[A] TEX template 

## 24 Article Title 

- [40] Xu, Y., Zhang, Z., Zhang, M., Sheng, K., Li, K., Dong, W., Zhang, L., Xu, C., Sun, X.: Evo-vit: Slow-fast token evolution for dynamic vision transformer. In: Proceedings of the AAAI Conference on Artificial Intelligence, vol. 36, pp. 2964–2972 (2022) 

- [41] Zhu, M., Tang, Y., Han, K.: Vision transformer pruning. arXiv preprint arXiv:2104.08500 (2021) 

- [42] Yu, H., Wu, J.: A unified pruning framework for vision transformers. arXiv preprint arXiv:2111.15127 (2021) 

- [43] Chen, T., Cheng, Y., Gan, Z., Yuan, L., Zhang, L., Wang, Z.: Chasing sparsity in vision transformers: An end-to-end exploration. Advances in Neural Information Processing Systems 34, 19974–19988 (2021) 

- [44] Su, X., You, S., Xie, J., Zheng, M., Wang, F., Qian, C., Zhang, C., Wang, X., Xu, C.: Vitas: Vision transformer architecture search. arXiv preprint arXiv:2106.13700 (2021) 

- [45] Erdos, P., R´enyi, A., et al.: On the evolution of random graphs. Publ. Math. Inst. Hung. Acad. Sci 5(1), 17–60 (1960) 

- [46] Watts, D.J., Strogatz, S.H.: Collective dynamics of ‘small-world’networks. nature 393(6684), 440–442 (1998) 

- [47] Walker, R.: Implementing discrete mathematics: combinatorics and graph theory with mathematica, steven skiena. pp 334. 1990. isbn 0-201-50943-1 (addison-wesley). The Mathematical Gazette 76(476), 286–288 (1992) 


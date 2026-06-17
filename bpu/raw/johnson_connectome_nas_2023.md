# EXPLOITING LARGE NEUROIMAGING DATASETS TO CREATE CONNECTOME-CONSTRAINED APPROACHES FOR MORE ROBUST, EFFICIENT, AND ADAPTABLE ARTIFICIAL INTELLIGENCE 

A PREPRINT 

**Erik C. Johnson, Brian S. Robinson, Gautam K. Vallabha, Justin Joyce, Jordan K. Matelsky, Raphael Norman-Tenazas, Isaac Western, Marisel Villafañe-Delgado, Martha Cervantes, Michael S. Robinette, Arun V. Reddy, Lindsey Kitchell, Patricia K. Rivlin, Elizabeth P. Reilly, Nathan Drenkow, Matthew J. Roos, I-Jeng Wang, Brock A. Wester, William R. Gray-Roncal, Joan A. Hoffmann** Research and Exploratory Development Department Johns Hopkins University Applied Physics Laboratory Laurel, MD 20723 `erik.c.johnson@jhuapl.edu` 

May 30, 2023 

## **ABSTRACT** 

Despite the progress in deep learning networks, efficient learning at the edge (enabling adaptable, low-complexity machine learning solutions) remains a critical need for defense and commercial applications. We have pursued multiple neuroscience-inspired AI efforts which may overcome these data inefficiencies, power inefficiencies, and lack of generalization. We envision a pipeline to utilize large neuroimaging datasets, including maps of the brain which capture neuron and synapse connectivity, to improve machine learning approaches. We have pursued different approaches within this pipeline structure, including data-driven discovery in biological networks, augmenting existing computational neuroscience models, investigating the biological structure which enables behaviors, and modifying existing machine learning architectures with insight from biological structure. First, as a demonstration of data-driven discovery, the team has developed a technique for discovery of repeated subcircuits, or motifs. These were incorporated into a neural architecture search approach to evolve network architectures. Second, we have conducted analysis of the heading direction circuit in the fruit fly, which performs fusion of visual and angular velocity features, to explore augmenting existing computational models with new insight. Our team discovered a novel pattern of connectivity, implemented a new model, and demonstrated sensor fusion on a robotic platform. Third, the team analyzed circuitry for memory formation in the fruit fly connectome, enabling the design of a novel generative replay approach. This replay approach resulted in an over 20% accuracy improvement in an incremental class learning scenario, and also demonstrated the ability to utilize large neuroscience datasets to analyze the neural connectivity underlying behavior. Finally, the team has begun analysis of connectivity in mammalian cortex to explore potential improvements to transformer networks. These constraints increased network robustness on the most challenging examples in the CIFAR-10-C computer vision robustness benchmark task, while reducing learnable attention parameters by over an order of magnitude. Taken together, these results demonstrate multiple potential approaches to utilize insight from neural systems for developing robust and efficient machine learning techniques. 

_**Keywords**_ Machine learning _·_ continual learning _·_ SWaP _·_ Computational Neuroscience _·_ Connectomics 

## **1 Introduction** 

Modern deep learning approaches have resulted in broad and profound improvements in perception, control, and decision making systems. Feedforward deep networks, including convolutional neural networks [27], have set state of 

Connectome-Constrained Approaches for Adaptable Artificial Intelligence 

A PREPRINT 

**==> picture [422 x 204] intentionally omitted <==**

Figure 1: Vision of the potential of neuroscience-inspired AI to improve capabilities of deployed, autonomous systems for multi-domain environments. Progress towards the ulimate goal of efficient learning a the edge requires both reducing the power and size envelope of current platforms for embedded machine learning, as well as increasing the capabilities of such systems. 

the art results in many domains. Deep reinforcement learning approaches have enabled human-like performance on many game tasks and new control policies for complex, high-dimensional spaces [25]. Recently, scaling transformer models has resulted in the creation of large language models and powerful, multi-task foundation models [7]. 

However, there are several key challenges facing modern machine learning and AI systems which limit their applicability to multi-domain operational contexts [50]. For autonomous agents to be effective in these contexts, they need to be able operate “in the wild” — in unstructured environments that can change often and in unexpected ways, for extended periods of time, and with reduced opportunities for human oversight and maintenance. This requires capabilities such as: 

- Adapting to domain shifts away from those experienced during training 

- Adapting to new information (new classes, new tasks) with minimal human oversight 

- Being robust to changes/degradation in sensing and actuation 

- Using energy efficiently across compute, memory, sensing, actuation, and communication 

- Degrading performance gracefully where needed (rather than catastrophic failure) 

Continual and lifelong learning remains a major challenge for deep reinforcement learning algorithms [25], as well as large language models which demonstrate impressive and flexible performance but lack mechanisms for efficient updates of networks weights [8]. The energy footprint required by modern machine learning approaches is particularly pertinent, given the increasingly high energy requirements of state of the art deep learning models [23, 45], which typically lead to increased size, weight, and thermal and RF emissions, and severely limit the mission durations of autonomous agents. 

While the above capabilities are challenging for current autonomy technologies, the nervous systems of many biological organisms can handle them, to varying degrees, in a remarkably resilient and efficient manner. We suggest that the design of real-world autonomous agents can greatly benefit from neuroscience, in particular from insights into the architecture, connectivity, and learning dynamics of biological neural systems. The behavioral, structural, and functional properties of biological neural networks are an “existence proof” for adaptable, robust, efficient systems 

There are many key areas where researchers have taken inspiration from biological systems – in particular the nervous system – in the design of novel types of artificial neural networks. The behavioral, structural and functional properties of biological neural networks are an “existence proof” for adaptable, robust, efficient systems [26]. Several remarkable properties of biological systems include their flexible and robust sensing and motor capabilities, the complex and highly recurrent connectivity of biological networks, learning principles (such as predictive coding, reinforcement 

2 

Connectome-Constrained Approaches for Adaptable Artificial Intelligence 

A PREPRINT 

learning, and self-supervised learning) which guide exploration and knowledge acquisition, and efficient mechanisms for representing and transforming information. 

While there may be some debate if the study of biological intelligence can impact the development of AI, the study of neuroscience principles has driven several foundational approaches to modern deep learning. Historically, the principles of neuroscience have directly inspired the perceptron, the first artificial neural network [40], and the convolutional neural network, a ubiquitous deep learning model [17]. Many concepts in reinforcement learning were developed from the modeling of biological learning and decision making [34]. Even the modern transformer architectures underlying large language models are loosely inspired by concepts of attention in cognitive neural systems [52]. While rapid progress in highly parallel computational systems, theoretical mathematical frameworks, and data availability were also necessary to enable the achievements of modern deep learning approaches, many of the key architectures and learning paradigms were derived from models of the nervous system created in the second half of the 20th century. Looking ahead, there is an opportunity to continue to leverage the growing body of data and modeling in modern neuroscience to continue to push the boundaries of AI systems. The ongoing goal of neuroscience-inspired algorithms research is to leverage lessons already implemented in nervous systems through natural selection and design novel network architectures, frameworks, and learning rules which can be tested and deployed to process real-world data. Given the emerging scale of neuroscience data and insight driven by large scientific endeavours such as the US BRAIN Initiative [30], research into neuroscience-inspired AI has an opportunity to lay the groundwork for increasingly capable and efficient AI solutions (see Fig. 1). These data include large-scale brain atlases, functional experiments, and neuron-synapse maps of the connectivity of the brain (connectomes). Due to this tremendous opportunity, the computational neuroscience and AI community has argued for sustained investment in neuroscience-inspired AI research as a critical path forward for AI systems [56]. 

In this paper we motivate ongoing research into neuroscience-inspired AI algorithms, and present several key examples of how large-scale neuroimaging datasets, such as those collected through the US BRAIN Initiative, can enable the development of new classes of artificial neural networks with compelling capabilities. We provide an overview of key information processing principles relevant to autonomous and low power systems which can be learned from computational neuroscience and augmented with insight from large neuroimaging datasets. Through several projects investigating nanoscale and macroscale connectomes to develop and improve recurrent neural networks, continual learning systems, and transformer networks. Given the potential impact to critical challenges facing AI systems, we argue that an exciting path forward for AI development is extracting computational insight from large neuroimaging datasets, despite the challenges and limitations, is an exciting path to improve the efficiency and capabilities of AI systems. 

## **2 Neuroscience-Inspired Approaches to AI** 

While a wide domain, we highlight several promising areas where neuroscience and large-scale neuroimaging datasets may give insight into developing new types of artificial neural networks. These approaches suggest alternative learning paradigms and architectures when compared to deep learning and deep reinforcements learning approaches, which are dominated by a few key architectures (including feedforward convolutional neural networks with rectified linear unit activation functions and transformer networks) and learning frameworks (such as backpropagation, deep Q-learning, and proximal policy optimization). Neuroscience inspired approaches may impact several key areas. 

Further opportunities are opening up in the last 20 years due to new techniques for brain imaging, recording, and analysis. In the US, the BRAIN Initiative has been a major driver of progress in data acquisition, data processing, and data sharing (see Fig. 2 for examples of the US BRAIN Informatics Program data archives, DANDI [42], NEMO [2], BIL [4], NEMAR [13], and BossDB [21], as well as key datasets in the connectomics space). The large-scale neural datasets span a huge range of modalities, including neurophysiology, genomics, transcriptomics, and functional and structural neuroimaging. Dataset sizes are reaching the petascale, and software tools for access and processing are progressing rapidly. Multi-modal datasets are even being co-registered to allow complex analysis and realize the next generation of brain atlases. These data will give unprecedented insight into the structural organization, functional mechanisms, and genetic processes which give rise to information processing and learning in biological neural networks. These datasets are being utilized in a range of different approaches, including regularization of existing network architectures with functional data [28], development of novel recurrent neural networks from whole-brain connectivity data [18], and derivation of novel continual learning approaches [26]. A unique opportunity enabled by these large datasets is the utilization of structural insight from large-scale neuron-synapse connectivity datasets in the design of novel types of neural networks. 

In particular, many of these aspects of biological agents have also been studied from the perspective of continual learning. This is a difficult challenge in machine learning [36] and has been the focus of the DARPA Lifelong Learning 

3 

Connectome-Constrained Approaches for Adaptable Artificial Intelligence 

A PREPRINT 

**==> picture [422 x 160] intentionally omitted <==**

Figure 2: Survey of large, emerging datasets from the US BRAIN Initiative. Panel a) Petabytes of multi-modal neuroscience data spanning whole brain imaging to gene expression data is being deposited and made publicly available for secondary analysis in the US BRAIN Initiative Informatics Program archives. Panel b) As an illustrative example, the size and variety of nanoscale connectomics datasets is growing rapidly, with larger volumes planned (adapted from [31]). Widths are scaled to be proportional to the number of unique synaptic targets in the dataset, and heights are scaled to be proportional to the number of unique synaptic sources in the dataset. Datasets include White et al. [53], Kasthuri et al. [24], Bock et al. [6], Takemura et al. [49], Helmsteadter et al. [20], MICrONS Pinky [14], Hemibrain [55], and MICrONS Minnie65 [44]. 

Machines program [3]. The goal of such work is to create learning algorithms which adapt to new experiences, are robust to domain shift, and exhibit forward and reverse transfer of performance on task sequences. In this context, many aspects of neuroscience are being used to develop new continual learning approaches. These include insect-inspired approaches to sensing and navigation for autonomous agents [12], the incorporation of neuromodulation mechanisms to allow for adaptation of network weights [10], experience replay approaches to enable continual learning and avoid catastrophic forgetting [51, 19], and approaches inspired by neurogenesis to progressively grow neural networks [15]. 

## **2.1 Challenges and Opportunities for Neuroscience Data Analysis** 

While large-scale neuroscience datasets represent a tremendous opportunity to extract, refine, and model the function of the nervous system to design novel types of neural networks, significant challenges remain. Despite decades of work, many fundamental questions in neuroscience remain unanswered, from mechanisms of neural development, the function of particular neural circuits, and basic anatomical details at the neuron-synapse level. Moreover, many neuroscience insights are extracted from relatively small numbers of individuals or samples, brain regions, and model organisms. Some of the challenges which face teams aiming to gain insight from the study of large-scale neuroscience datasets to design new machine learning approaches include: 

- The specialized software and analysis knowledge, noisy datasets, and scale of the data (both raw data, and the number of neurons and synapses) 

- Many fundamental properties are still currently unknown in biology, for instance only recently are brain atlases becoming available that answer basic anatomical questions at the neuron-synapse level (the number of synapses in an area, the number of connections between regions) 

- Ongoing computational and theoretical modeling approaches. While most computational models are known to be simplifications, there is ongoing experimentation to characterize the degree to which biological neural networks correspond to these models 

- Even in well-studied neural systems (for example the memory centers of insects) there are plethora of new connections and potentially neuron types being discovered from these novel, large datasets which have uncharacterized computational properties 

Despite these challenges, interdisciplinary teams at the intersection of computational science, machine learning, and neuroscience can make progress extracting novel insight into neural system structure and function for novel machine learning systems. 

4 

Connectome-Constrained Approaches for Adaptable Artificial Intelligence 

A PREPRINT 

**==> picture [422 x 124] intentionally omitted <==**

Figure 3: General approach for the exploitation of large neuroimaing and connectomics datasets, proceeding from structural analysis to characterizing function to computational modeling and benchmarking. With project-specific modifications, this general approach captures a pipeline for continued application of scientific discovery from large datasets to testable machine learning models. 

## **3 Approaches to Utilize Novel Network Structure and Function Derived from Large Connectivity Datasets** 

Researchers have turned to many aspects of biology and neuroscience for inspiration for machine learning systems. A unique opportunity, however, has emerged to exploit large scale connectivity datasets. Collected via Electron Microscopy (EM), these datasets contain unique structural information on neuron-synapse connectivity and detailed neuron morphology which cannot be determined through other means. The scale of these datasets is rapidly approaching petabyte size for a single volume, consisting of hundreds of thousands of neurons and millions of synapses (Fig. 2). The data encompass large portions of the brains of model systems such as the fruit fly brain [43], mouse cortex ( `https://www.microns-explorer.org/` ), and human cortex[46]. Our team has extensive experience with storage, proofreading, and analysis of such datasets [21, 54, 32]. Given the speed with which such datasets are being collected and publicly disseminated by the US BRAIN Initiative and other efforts, our team has sought multiple approaches which can utilize this large scale structural information (and co-registered information about neuron function and cell properties) to influence the design of more efficient or capable neural network architectures by incorporating principles of neural connectivity (reflected in the pipeline in Fig. 3). 

To demonstrate different ways the pipeline in Fig. 3 can be applied, we highlight several successful approaches to extracting insight from neuroscience datasets including data-driven discovery of biological network structure, augmenting existing computational neuroscience models with novel insights into biological connectivity, investigating the biological structure which enables behavioral observations, and augmenting existing deep learning architectures with insight from biological structure. These are applied to domains such as control policy networks, sensor fusion for state estimation, and perception tasks. These studies demonstrate the potential of computational analysis of large-scale neuroscience data to improve our detailed understanding of neural systems and generate new hypothesis or implement machine learning systems with compelling properties of adaptability or robustness. 

## **3.1 Data-driven Discovery: Biological Motifs for Novel Neural Architecture Search** 

Large connectomics datasets with neuron-synapse resolution represent a unique new opportunity to investigate a fundamental question – do biological neural networks contain stereotyped, repeated circuits of neurons with repeated function? The team has developed a technique for discovery of repeated subcircuits, or motifs, from neuron-synapse connectomes. This is a data-driven approach to the pipeline described in Fig. 3. Motif discovery in large biological graphs is difficult as it is bottlenecked by the enormous computational complexity of exhaustively searching for subgraph isomorphisms in large networks, which is a computationally complex problem and yet must be repeated many hundreds to thousands of times for motif variants. Successful deployment of motif search in a large connectome therefore requires a technological or engineering advance in order to reduce the computational costs, and a mathematical or algorithmic advance in order to enable statistical testing in a data-austere environment. To meet this challenge, we first developed _GrandIso_ , a subgraph search library written in Python that achieves multiple order-of-magnitude speedups over similar subgraph isomorphism algorithms through the use of a trivially-parallelizable task-queue [32]. We then developed a random graph modeling approach that combines traditional graph randomization techniques like X-swap (a form of the configuration graph randomization model) with a greedy motif significance test. This test progressively refines a search 

5 

Connectome-Constrained Approaches for Adaptable Artificial Intelligence 

A PREPRINT 

**==> picture [441 x 148] intentionally omitted <==**

**----- Start of picture text -----**<br>
Motif search (motifs-to-models) Node Input Node Output Node<br>Motif 0 Motif 1 Motif 2 Motif 3 Motif 4<br>Motif 5 Motif 6 Motif 7 Motif 8 Motif 9<br>CANDIDATE MOTIFS<br>Statistical significance test<br>on permuted host networks<br>Edge-direction permutation<br>assignments and counting<br>Statistical significance test<br>on permuted host networks<br>UNDIRECTED<br>SUBGRAPHS<br>SIGNIFICANT<br>SUBGRAPHS<br>DIRECTED<br>MOTIFS<br>ALL SUBGRAPHS<br>**----- End of picture text -----**<br>


Figure 4: A motif search pipeline, and a collection of motifs discovered in the central complex of _Drosophila melanogaster_ using DotMotif and _GrandIso_ [32]. The data-driven motif discovery pipeline narrows the search space from billions of candidate subgraphs to a manageable set of a few dozen statistically significant candidate motifs. This selection can be “steered” to select only motifs with desired properties — such as feed-forward or recurrent topology. 

space for biologically interesting motifs, starting with small, undirected motifs, and growing the motif to include more structure and more vertex- and edge-attribute constraints until a user-defined number of motifs have been isolated. 

In order to seed our neural architecture search with bio-inspired motifs, we extracted a library of feedforward subgraphs from the Hemibrain dataset [43], using DotMotif and _GrandIso_ to discover these graphs (Fig. 4). These were incorporated into a neural architecture search approach. These motifs can then be used in the evolution of novel policy networks for reinforcement learning tasks. Ongoing work is investigating the use of these motifs as building blocks to understand if there are advantages in improving search speed or policy network performance with these structures. 

## **3.2 Augmenting Computational Neuroscience: Newly Discovered Structural Connectivity for a Sensor Fusion Circuit** 

Another approach to utilizing insight from large-scale neuroscience datasets is refining and generalizing existing computational models neuroscience models with improved biological detail. This can also enable building larger and more complex circuits, and enable investigation into the level of biological detail required to develop useful models. As a preliminary feasibility demonstration of this approach, we conducted analysis of the heading direction circuit in the fruit fly utilizing a large neuron-synapse connectome of half of a fly brain (Hemibrain)[43]. This circuit performs fusion of visual and angular velocity features to maintain stable states, and has been modeled previously as a ring attractor circuit. Our team discovered a novel pattern of connectivity between the repeated wedge motifs which constitute this circuit [35]. This circuit maintains stable, dynamic patterns of activity which correspond to heading direction. This model was demonstrated for low complexity sensor fusion of visual landmark position and angular velocity measurements on a robotic platform [39]. While not yet as performant as traditional state estimation approaches, the approach taken here has given additional insight into new classes of connectivity in this circuit and a computational platform to explore the level of biological detail required to model this circuit for sensor fusion. 

## **3.3 Explore Structural Underpinnings of Biological Behavior: Continual Learning Inspired by the Fruit Fly** 

Biological organisms, including simple organisms such as the fruit fly, demonstrate the ability to do continual learning (which has been observed behaviorally). Novel datasets allow investigation of the circuitry underlying this capability, with the goal of identifying computational principles that can be extended beyond just the circuit being investigated to the design of novel machine learning approaches as well as analysis of further biological systems. Towards this end, our team has analyzed circuitry for sensory memory formation in the Hemibrain dataset, building on observations of feedback reward circuitry in the fruit fly [22] and prior modeling work on feedforward circuitry [47]. Utilizing novel feedback connectivity observed at the neuron-synapse level in the Hemibrain dataset, the team designed a novel generative replay approach utilizing feedback connections. This replay approach resulted in an over 20% accuracy improvement in an incremental task learning scenario with the CIFAR-100 dataset, approaching the performance of upper-bound baselines [38]. Further work is extending this approach with new learning rules and to new domains such as video processing. There are several broader implications of this work as well, as the generative replay architecture 

6 

Connectome-Constrained Approaches for Adaptable Artificial Intelligence 

A PREPRINT 

and sparse projection are both required to demonstrate this improvement. In machine learning models trained with backpropagation on the entire dataset, including these biologically-relevant mechanisms hurts performance. This suggests that more biological principles may be worth investigating again as the field explores efficient and adaptable solutions for deployed systems. 

## **3.4 Connecting Deep Learning and Biological Neural Networks: Robust Performance of Transformer Networks with Cortical Connectivity Constraints** 

Moving beyond insect systems, fundamental properties of mammalian cortical systems are being actively investigated with emerging structural and functional datasets poised to provide new insight. These insights could be used to explore architecture design choices and modifications to existing deep learning architectures. As a final example of the pipeline approach in Fig. 3, the team has begun analysis of connectivity in mammalian cortex to constrain design choices for transformer networks. These constraints increased network robustness on the most challenging examples in the CIFAR-10-C computer vision robustness benchmark task, while reducing learnable attention parameters by over an order of magnitude [37]. 

Drawing from different neuroimaging and connectomics datasets and species, these efforts represent the diverse efforts enabled by this pipeline vision for neuroscience-inspired AI (Fig. 3). Taken together, these results chart a new path for developing robust and efficient machine learning techniques for low resource sensing applications across a range of domains. Moreover, this approach can result in novel approaches for machine learning systems, but computational modeling can also generate new hypotheses for neuroscience experiments. Despite the challenges of working with large-scale neuroimaging data, there are many model systems, circuits, datasets, and approaches which can be taken to extract principles to design new types of machine learning networks. 

## **4 Discussion and Conclusions** 

The investments of the US BRAIN initiative [30], and other large-scale neuroinformatics initiatives, have greatly accelerated the rate of collection and size of neuroimaging datasets. This includes multiple modalities at different spatial scales encompassing structure and function. Focusing on neural connectivity, we’ve endeavoured to showcase the potential of these neural datasets to influence the design of novel types of, as well as improvements to existing, artificial neural networks. We have demonstrated several approaches to exploiting large-scale connectivity datasets, particularly emerging nanoscale connectivity datasets, to extract connectivity statistics, targeted queries of neuron type to neuron type connectivity, and data-driven discovery of repeated motif patterns. Critically, these approaches must be benchmarked within the context of domain relevant problems, such as state estimation or task incremental learning, to understand the potential impact in mission-relevant scenarios. 

While these data-driven approaches based on new neuroimaging datasets offer an exciting avenue to understand how structural properties of networks interact with the functional properties of neural networks, several key challenges exist when working with these data, particularly large-scale connectomics datasets [29]. While large datasets have been collected in several model organisms and brain areas, the number of large-scale mammalian datasets is particularly limited, and no whole-brain mammalian imaging has been conducted, though such efforts are underway. The key steps to segment neurons and identify synapses and other objects of interest have been largely automated, but deployment of these complex computer vision tools at scale is costly, and errors must still be extensively proofread by human neuroanatomy experts [33]. Novel derived annotations are therefore difficult to generate and dataset quality improves iteratively over releases. This requires noise-tolerant, statistical approaches to connectivity analysis. Continued research into tools to assist and automate user queries and discovery using such data is critical to realize their full potential, such as scalable pipelines for proofreading and quality assessment [54]. 

Despite these challenges, the increasing scale, number, and diversity of large neuroimaging datasets represents an exciting opportunity to extract principles of structure and function from biological neural networks to incorporate into next generation artificial neural networks. We have demonstrated several ways biological insight can be extracted from these large datasets to design new machine learning approaches or augment existing computational models, overcoming the challenges discussed in Section 2.1. Yet there are other key application spaces beyond developing novel machine learning methods. Simulations of networks at the neuron and synapse level, when combined with these datasets may enable new computational studies of neurodegenerative diseases such as alzheimers or the functional results of insults related to traumatic brain injury [5]. These may also impact our understanding of neurostimulation and recording technologies and the interaction of such systems with a brain as a network [16]. 

We see an ongoing opportunity to utilize increasingly automated analysis to extract insights from large neuroimaging datasets with a goal of developing new types of highly-recurrent networks with dynamic activations. These approaches 

7 

Connectome-Constrained Approaches for Adaptable Artificial Intelligence 

A PREPRINT 

may be of particular interest for emerging computing paradigms, such as neuromorphic processing [41] and biological computing [48]. These highly recurrent networks may give particularly notable gains in efficiency, while enabling learning on embedded devices [1, 11]. Continued fundamental algorithms research will complement these emerging platforms, and maximize the gains in performance within a given size, weight, and power envelope. From a scientific perspective, some of the most promising questions are the investigation of learning rules for neural circuits and characterizing the highly recurrent and heterogenous structures of the nervous system across species and developmental stages. While fundamental studies in these areas may be underway for years, there are more immediate application spaces in continual learning and domain adaptation for classification and signal processing applications given dynamic data streams. Existing neuromorphic platforms [1, 11] could be used for efficient implementations of algorithms to process audio, video, and radio frequency signals. 

Given the explosive growth and impact of deep learning approaches, there is a continued need to develop solutions with the flexibility, efficiency, and robustness of biological intelligence. Continued research into automated tools to analyze large-scale neuroimaging datasets for insight into structural and functional properties may continue to play a role in improving artificial neural networks. Continued investment, for example from the US BRAIN Initiative, is required to refine the automated tools and neuroimaging dataset collection at scale. Yet research programs focused on neuroscience-inspired AI have been more limited in scope, despite the large computational requirements of investigating novel, biologically inspired neural networks [9]. Given sustained investment, novel network architectures, learning rules, and principles can be translated to efficient neuromorphic platforms. These approaches could form the basis of novel learning systems and agents capable of robust operation in changing domains. 

## **ACKNOWLEDGMENTS** 

This work was funded by internal research and development funds from JHU/APL. We would like to thank Meshach Hopkins, Danilo Symonette, and Caitlyn Bishop for their contributions to our team demonstrations. We would also like to thank Nicole Brown, Kechen Zhang, and Grace Hwang for their contributions to our theoretical approaches. Finally, we would like to thank the creators and maintainers of the Howard Hughes Medical Institute Janelia Campus FlyEM team and IARPA MICrONS team for their datasets. We also thank Brain Observatory Storage Service and Database (BossDB, `https://bossdb.org/` , NIH NIMH R24MH114785) for storage of the MICrONS dataset and other datasets utilized in this work. 

## **References** 

- [1] F. Akopyan, J. Sawada, A. Cassidy, R. Alvarez-Icaza, J. Arthur, P. Merolla, N. Imam, Y. Nakamura, P. Datta, G.-J. Nam, et al. Truenorth: Design and tool flow of a 65 mw 1 million neuron programmable neurosynaptic chip. _IEEE transactions on computer-aided design of integrated circuits and systems_ , 34(10):1537–1557, 2015. 

- [2] S. A. Ament, R. S. Adkins, R. Carter, E. Chrysostomou, C. Colantuoni, J. Crabtree, H. H. Creasy, K. Degatano, V. Felix, P. Gandt, et al. The neuroscience multi-omic archive: A brain initiative resource for single-cell transcriptomic and epigenomic data from the mammalian brain. _Nucleic Acids Research_ , 51(D1):D1075–D1085, 2023. 

- [3] M. M. Baker, A. New, M. Aguilar-Simon, Z. Al-Halah, S. M. Arnold, E. Ben-Iwhiwhu, A. P. Brna, E. Brooks, R. C. Brown, Z. Daniels, A. Daram, F. Delattre, R. Dellana, E. Eaton, H. Fu, K. Grauman, J. Hostetler, S. Iqbal, D. Kent, N. Ketz, S. Kolouri, G. Konidaris, D. Kudithipudi, E. Learned-Miller, S. Lee, M. L. Littman, S. Madireddy, J. A. Mendez, E. Q. Nguyen, C. Piatko, P. K. Pilly, A. Raghavan, A. Rahman, S. K. Ramakrishnan, N. Ratzlaff, A. Soltoggio, P. Stone, I. Sur, Z. Tang, S. Tiwari, K. Vedder, F. Wang, Z. Xu, A. Yanguas-Gil, H. Yedidsion, S. Yu, and G. K. Vallabha. A domain-agnostic approach for characterization of lifelong learning systems. _Neural Networks_ , page S0893608023000072, Jan. 2023. 

- [4] K. Benninger, G. Hood, D. Simmel, L. Tuite, A. Wetzel, A. Ropelewski, S. Watkins, A. Watson, and M. Bruchez. Cyberinfrastructure of a multi-petabyte microscopy resource for neuroscience research. In _Practice and Experience in Advanced Research Computing_ , pages 1–7. 2020. 

- [5] G. N. Bischof, M. Ewers, N. Franzmeier, M. J. Grothe, M. Hoenig, E. Kocagoncu, J. Neitzel, J. B. Rowe, A. Strafella, A. Drzezga, et al. Connectomics and molecular imaging in neurodegeneration. _European journal of nuclear medicine and molecular imaging_ , 46:2819–2830, 2019. 

- [6] D. D. Bock, W.-C. A. Lee, A. M. Kerlin, M. L. Andermann, G. Hood, A. W. Wetzel, S. Yurgenson, E. R. Soucy, H. S. Kim, and R. C. Reid. Network anatomy and in vivo physiology of visual cortical neurons. _Nature_ , 471(7337):177–182, 2011. 

8 

Connectome-Constrained Approaches for Adaptable Artificial Intelligence 

A PREPRINT 

- [7] R. Bommasani, D. A. Hudson, E. Adeli, R. Altman, S. Arora, S. von Arx, M. S. Bernstein, J. Bohg, A. Bosselut, E. Brunskill, et al. On the opportunities and risks of foundation models. _arXiv preprint arXiv:2108.07258_ , 2021. 

- [8] S. Bubeck, V. Chandrasekaran, R. Eldan, J. Gehrke, E. Horvitz, E. Kamar, P. Lee, Y. T. Lee, Y. Li, S. Lundberg, et al. Sparks of artificial general intelligence: Early experiments with gpt-4. _arXiv preprint arXiv:2303.12712_ , 2023. 

- [9] G. Chen, F. Scherr, and W. Maass. A data-based large-scale model for primary visual cortex enables brain-like robust and versatile visual processing. _Science Advances_ , 8(44):eabq7592, 2022. 

- [10] A. Daram, A. Yanguas-Gil, and D. Kudithipudi. Exploring Neuromodulation for Dynamic Learning. _Frontiers in Neuroscience_ , 14:928, Sept. 2020. 

- [11] M. Davies, A. Wild, G. Orchard, Y. Sandamirskaya, G. A. F. Guerra, P. Joshi, P. Plank, and S. R. Risbud. Advancing neuromorphic computing with loihi: A survey of results and outlook. _Proceedings of the IEEE_ , 109(5):911–934, 2021. 

- [12] G. C. H. E. de Croon, J. J. G. Dupeyroux, S. B. Fuller, and J. A. R. Marshall. Insect-inspired AI for autonomous robots. _Science Robotics_ , 7(67):eabl6334, June 2022. 

- [13] A. Delorme, D. Truong, C. Youn, S. Sivagnanam, C. Stirm, K. Yoshimoto, R. A. Poldrack, A. Majumdar, and S. Makeig. NEMAR: an open access data, tools and compute resource operating on neuroelectromagnetic data. _Database_ , 2022, 2022. 

- [14] S. Dorkenwald, N. L. Turner, T. Macrina, K. Lee, R. Lu, J. Wu, A. L. Bodor, A. A. Bleckert, D. Brittain, N. Kemnitz, et al. Binary and analog variation of synapses between cortical pyramidal neurons. _Elife_ , 11:e76120, 2022. 

- [15] T. J. Draelos, N. E. Miner, C. C. Lamb, J. A. Cox, C. M. Vineyard, K. D. Carlson, W. M. Severa, C. D. James, and J. B. Aimone. Neurogenesis Deep Learning. _2017 International Joint Conference on Neural Networks (IJCNN)_ , pages 526–533, May 2017. arXiv: 1612.03770. 

- [16] F. D. V. Fallani and D. S. Bassett. Network neuroscience for optimizing brain–computer interfaces. _Physics of life reviews_ , 31:304–309, 2019. 

- [17] K. Fukushima. Neocognitron: A self-organizing neural network model for a mechanism of pattern recognition unaffected by shift in position. _Biological cybernetics_ , 36(4):193–202, 1980. 

- [18] A. Goulas, F. Damicelli, and C. C. Hilgetag. Bio-instantiated recurrent neural networks: Integrating neurobiologybased network topology in artificial networks. _Neural Networks_ , 142:608–618, 2021. 

- [19] T. L. Hayes, G. P. Krishnan, M. Bazhenov, H. T. Siegelmann, T. J. Sejnowski, and C. Kanan. Replay in Deep Learning: Current Approaches and Missing Biological Elements. _Neural Computation_ , pages 1–44, Aug. 2021. 

- [20] M. Helmstaedter, K. L. Briggman, S. C. Turaga, V. Jain, H. S. Seung, and W. Denk. Connectomic reconstruction of the inner plexiform layer in the mouse retina. _Nature_ , 500(7461):168–174, 2013. 

- [21] R. Hider Jr, D. Kleissas, T. Gion, D. Xenes, J. Matelsky, D. Pryor, L. Rodriguez, E. C. Johnson, W. Gray-Roncal, and B. Wester. The brain observatory storage service and database (bossdb): A cloud-native approach for petascale neuroscience discovery. _Frontiers in Neuroinformatics_ , 16, 2022. 

- [22] T. Ichinose, Y. Aso, N. Yamagata, A. Abe, G. M. Rubin, and H. Tanimoto. Reward signal in a recurrent circuit drives appetitive long-term memory formation. _Elife_ , 4:e10719, 2015. 

- [23] J. Kaplan, S. McCandlish, T. Henighan, T. B. Brown, B. Chess, R. Child, S. Gray, A. Radford, J. Wu, and D. Amodei. Scaling laws for neural language models. _arXiv preprint arXiv:2001.08361_ , 2020. 

- [24] N. Kasthuri, K. J. Hayworth, D. R. Berger, R. L. Schalek, J. A. Conchello, S. Knowles-Barley, D. Lee, A. VázquezReina, V. Kaynig, T. R. Jones, et al. Saturated reconstruction of a volume of neocortex. _Cell_ , 162(3):648–661, 2015. 

- [25] K. Khetarpal, M. Riemer, I. Rish, and D. Precup. Towards continual reinforcement learning: A review and perspectives. _Journal of Artificial Intelligence Research_ , 75:1401–1476, 2022. 

- [26] D. Kudithipudi, M. Aguilar-Simon, J. Babb, M. Bazhenov, D. Blackiston, J. Bongard, A. P. Brna, S. Chakravarthi Raja, N. Cheney, J. Clune, et al. Biological underpinnings for lifelong learning machines. _Nature Machine Intelligence_ , 4(3):196–210, 2022. 

- [27] Y. LeCun, Y. Bengio, and G. Hinton. Deep learning. _Nature_ , 521(7553):436–444, 2015. 

- [28] Z. Li, W. Brendel, E. Walker, E. Cobos, T. Muhammad, J. Reimer, M. Bethge, F. Sinz, Z. Pitkow, and A. Tolias. Learning from brains how to regularize machines. _Advances in neural information processing systems_ , 32, 2019. 

9 

Connectome-Constrained Approaches for Adaptable Artificial Intelligence 

A PREPRINT 

- [29] J. W. Lichtman, H. Pfister, and N. Shavit. The big data challenges of connectomics. _Nature neuroscience_ , 17(11):1448–1454, 2014. 

- [30] E. Litvina, A. Adams, A. Barth, M. Bruchez, J. Carson, J. E. Chung, K. B. Dupre, L. M. Frank, K. M. Gates, K. M. Harris, et al. BRAIN initiative: cutting-edge tools and resources for the community. _Journal of Neuroscience_ , 39(42):8275–8284, 2019. 

- [31] J. K. Matelsky, E. C. Johnson, B. Wester, and W. R. Gray-Roncal. Scalable graph analysis tools for the connectomics community. _bioRxiv_ , pages 2022–06, 2022. 

- [32] J. K. Matelsky, E. P. Reilly, E. C. Johnson, J. Stiso, D. S. Bassett, B. A. Wester, and W. Gray-Roncal. DotMotif: an open-source tool for connectome subgraph isomorphism search and graph queries. _Scientific Reports_ , 11(1), Jun 2021. 

- [33] A. Motta, M. Schurr, B. Staffler, and M. Helmstaedter. Big data in nanoscale connectomics, and the greed for training labels. _Current opinion in neurobiology_ , 55:180–187, 2019. 

- [34] E. O. Neftci and B. B. Averbeck. Reinforcement learning in artificial and biological systems. _Nature Machine Intelligence_ , 1(3):133–143, 2019. 

- [35] R. Norman-Tenazas, B. S. Robinson, J. Joyce, I. Western, E. C. Johnson, W. Gray-Roncal, and J. A. Hoffmann. Continuous state estimation with synapse-constrained connectivity. In _2022 International Joint Conference on Neural Networks (IJCNN)_ , pages 1–9. IEEE, 2022. 

- [36] G. I. Parisi, R. Kemker, J. L. Part, C. Kanan, and S. Wermter. Continual Lifelong Learning with Neural Networks: A Review. _Neural Networks_ , 113:54–71, May 2019. arXiv: 1802.07569. 

- [37] B. S. Robinson and N. Drenkow. Cortical transformers: Robustness and model compression with multi-scale connectivity properties of the neocortex. In _SVRHM 2022 Workshop@ NeurIPS_ . 

- [38] B. S. Robinson, J. Joyce, R. Norman-Tenazas, G. K. Vallabha, and E. C. Johnson. Informing generative replay for continual learning with long-term memory formation in the fruit fly. _bioRxiv_ , pages 2023–01, 2023. 

- [39] B. S. Robinson, R. Norman-Tenazas, M. Cervantes, D. Symonette, E. C. Johnson, J. Joyce, P. K. Rivlin, G. M. Hwang, K. Zhang, and W. Gray-Roncal. Online learning for orientation estimation during translation in an insect ring attractor network. _Scientific reports_ , 12(1):1–15, 2022. 

- [40] F. Rosenblatt. The perceptron: a probabilistic model for information storage and organization in the brain. _Psychological review_ , 65(6):386, 1958. 

- [41] K. Roy, A. Jaiswal, and P. Panda. Towards spike-based machine intelligence with neuromorphic computing. _Nature_ , 575(7784):607–617, 2019. 

- [42] O. Rübel, A. Tritt, R. Ly, B. K. Dichter, S. Ghosh, L. Niu, P. Baker, I. Soltesz, L. Ng, K. Svoboda, et al. The neurodata without borders ecosystem for neurophysiological data science. _Elife_ , 11:e78362, 2022. 

- [43] L. K. Scheffer, C. S. Xu, M. Januszewski, Z. Lu, S.-y. Takemura, K. J. Hayworth, G. B. Huang, K. Shinomiya, J. Maitlin-Shepard, S. Berg, et al. A connectome and analysis of the adult drosophila central brain. _Elife_ , 9:e57443, 2020. 

- [44] C. M. Schneider-Mizell, A. L. Bodor, F. Collman, D. Brittain, A. A. Bleckert, S. Dorkenwald, N. L. Turner, T. Macrina, K. Lee, R. Lu, et al. Chandelier cell anatomy and function reveal a variably distributed but common signal. _BioRxiv_ , pages 2020–03, 2020. 

- [45] J. Sevilla, L. Heim, A. Ho, T. Besiroglu, M. Hobbhahn, and P. Villalobos. Compute trends across three eras of machine learning. In _2022 International Joint Conference on Neural Networks (IJCNN)_ , pages 1–8. IEEE, 2022. 

- [46] A. Shapson-Coe, M. Januszewski, D. R. Berger, A. Pope, Y. Wu, T. Blakely, R. L. Schalek, P. H. Li, S. Wang, J. Maitin-Shepard, et al. A connectomic study of a petascale fragment of human cerebral cortex. _BioRxiv_ , pages 2021–05, 2021. 

- [47] Y. Shen, S. Dasgupta, and S. Navlakha. Algorithmic insights on continual learning from fruit flies. _arXiv preprint arXiv:2107.07617_ , 2021. 

- [48] L. Smirnova, B. S. Caffo, D. H. Gracias, Q. Huang, I. E. Morales Pantoja, B. Tang, D. J. Zack, C. A. Berlinicke, J. L. Boyd, T. D. Harris, et al. Organoid intelligence (oi): the new frontier in biocomputing and intelligence-in-a-dish. _Frontiers in Science_ , 1:1017235, 2023. 

- [49] S.-y. Takemura, A. Bharioke, Z. Lu, A. Nern, S. Vitaladevuni, P. K. Rivlin, W. T. Katz, D. J. Olbris, S. M. Plaza, P. Winston, et al. A visual motion detection circuit suggested by drosophila connectomics. _Nature_ , 500(7461):175–181, 2013. 

10 

Connectome-Constrained Approaches for Adaptable Artificial Intelligence 

A PREPRINT 

- [50] G. Vallabha and J. Markowitz. Lifelong learning for robust AI systems. In T. Pham, L. Solomon, and M. E. Hohil, editors, _Artificial Intelligence and Machine Learning for Multi-Domain Operations Applications IV_ , page 1, Orlando, United States, June 2022. SPIE. 

- [51] G. M. van de Ven, H. T. Siegelmann, and A. S. Tolias. Brain-inspired replay for continual learning with artificial neural networks. _Nature Communications_ , 11(1):4069, Dec. 2020. 

- [52] A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, and I. Polosukhin. Attention is all you need. _Advances in neural information processing systems_ , 30, 2017. 

- [53] J. G. White, E. Southgate, J. N. Thomson, S. Brenner, et al. The structure of the nervous system of the nematode caenorhabditis elegans. _Philos Trans R Soc Lond B Biol Sci_ , 314(1165):1–340, 1986. 

- [54] D. Xenes, L. M. Kitchell, P. K. Rivlin, R. Brodsky, H. Gooden, J. Joyce, D. Luna, R. Norman-Tenazas, D. Ramsden, K. Romero, et al. Neuvue: A framework and workflows for high-throughput electron microscopy connectomics proofreading. _bioRxiv_ , pages 2022–07, 2022. 

- [55] C. S. Xu, M. Januszewski, Z. Lu, S.-y. Takemura, K. J. Hayworth, G. Huang, K. Shinomiya, J. Maitin-Shepard, D. Ackerman, S. Berg, et al. A connectome of the adult drosophila central brain. _BioRxiv_ , pages 2020–01, 2020. 

- [56] A. Zador, B. Richards, B. Ölveczky, S. Escola, Y. Bengio, K. Boahen, M. Botvinick, D. Chklovskii, A. Churchland, C. Clopath, et al. Toward next-generation artificial intelligence: catalyzing the NeuroAI revolution. _arXiv preprint arXiv:2210.08340_ , 2022. 

11 


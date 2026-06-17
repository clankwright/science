# **Large Connectome Model: An fMRI Foundation Model of Brain Connectomes Empowered by Brain-Environment Interaction in Multitask Learning Landscape** 

**Ziquan Wei**[1] **, Tingting Dan**[2] **, Guorong Wu**[2,1*] 

1Department of Computer Science, 2Department of Psychiatry University of North Carolina at Chapel Hill Chapel Hill, NC 27599 USA 

ziquanw@ _{_ cs,email _}_ .unc.edu; _{_ Tingting ~~D~~ an,grwu _}_ @med.unc.edu 

## **Abstract** 

A reliable foundation model of functional neuroimages is critical to promote clinical applications where the performance of current AI models is significantly impeded by a limited sample size. To that end, tremendous efforts have been made to pretraining large models on extensive unlabeled fMRI data using scalable self-supervised learning. Since self-supervision is not necessarily aligned with the brain-to-outcome relationship, most foundation models are suboptimal to the downstream task, such as predicting disease outcomes. By capitalizing on rich environmental variables and demographic data along with an unprecedented amount of functional neuroimages, we form the brain modeling as a multitask learning and present a scalable model architecture for (i) multitask pretraining by tokenizing multiple brain-environment interactions (BEI) and (ii) semi-supervised finetuning by assigning pseudo-labels of pretrained BEI. We have evaluated our foundation model on a variety of applications, including sex prediction, human behavior recognition, and disease early diagnosis of Autism, Parkinson’s disease, Alzheimer’s disease, and Schizophrenia, where promising results indicate the great potential to facilitate current neuroimaging applications in clinical routines. 

## **1 Introduction** 

A scalable foundation model dedicated to brain activity is critical to discovering the enigma of human cognition and promoting clinical applications from large-scale neuroimaging data. The topic of the brain foundation model is under exploration since BrainLM (Ortega Caro et al. 2023) via masked autoencoder. Previous works formulate this problem by mimicking natural language or image foundation models as self-regression or masking strategies, that is learning the raw signal reconstruction, e.g., Masked Autoencoder (MAE) in (Ortega Caro et al. 2023), Joint-Embedding Predictive Architecture (JEPA) in (Dong et al. 2024), and other masking methods (Wen et al. 2023; Yang et al. 2024). However, as revealed by Meta-matching (He et al. 2022), the brain connectomes share similar features across arbitrary phenotypic traits (hereafter shortened to ‘phenotypes’) such as age and lifestyle. The multitask learning for phenotypic prediction can hence act as the foundation objective related to neuroscience interests. Furthermore, although existing brain foundation models 

*Corresponding author. Copyright © 2026, Association for the Advancement of Artificial Intelligence (www.aaai.org). All rights reserved. 

**==> picture [239 x 146] intentionally omitted <==**

**----- Start of picture text -----**<br>
(a)  (b)  FFN<br>MHCA MHCA<br>MHSA<br>Info. bottleneck BEI tokens<br>Share weights Vision …<br>Memory  Motor<br>(c)  (d)<br>Back- FFN<br>MLP<br>bone MHCA MHCA<br>Unseen MHSA<br>task<br>Unseen BEI concat<br>Seen BEIs<br>Health?<br>Share weights<br>**----- End of picture text -----**<br>


Figure 1: Learning strategies of previous brain foundation models and LCM. The pretraining in **(a)** previous brain foundation models is a reconstructive representation learning based on the information (info.) bottleneck, while **(b)** in LCM it is a multitask learning for multiple brain-environment interactions (BEI) token embeddings by a Transformer decoder, where MHSA is multi-head self-attention, MHCA is multihead cross-attention, and FFN is a feedforward network. The finetuning in **(c)** previous studies is training a relatively small head, e.g., a multilayer perceptron (MLP), for the downstream task. **(d)** LCM finetunes the BEI tokens along with new tokens representing the downstream task. 

(Ortega Caro et al. 2023; Dong et al. 2024) take the raw signal as input, the vast majority of related works (Cui et al. 2022; Said et al. 2023; Ding et al. 2024; Wei et al. 2024) suggest that brain connectomes as the input makes more accurate predictions for clinical applications. 

The self-regressive methodology, although it demonstrated excellent applications such as GPTs for natural language (Achiam et al. 2023), should not be the only choice for brain foundation models. As shown in Fig. 1a, the purpose of previous brain foundation models is the same as the image/language to reconstruct the raw signal from its masked version via a bottleneck or transformer encoder architecture. Unlike image/language that is not naturally labeled, brain fMRI has demographics and phenotypes, e.g., age, biological sex, cognitive state, etc, which are commonly recorded during data acquisition. However, the challenging heterogeneity in multi-phenotype learning risks the robustness of current brain foundation models due to the predictive head 

**==> picture [239 x 173] intentionally omitted <==**

**----- Start of picture text -----**<br>
LCM<br>MLP<br>**----- End of picture text -----**<br>


Figure 2: Scalability is demonstrated by model size vs. training loss, where the training is supervised by arbitrary nonbrain-imaging phenotypes as BEIs in our multitask learning. 

is relatively lightweight (Fig. 1c). According to the nature of fMRI, which always has non-imaging records, a scalable architecture of the brain foundation model is necessary to involve multitask learning from rich environmental information relevant to brain cognition. 

Demographics and phenotypes that generate a diverse range of brain-environment interactions (BEI) have been found inter-correlated to each other, given the brain connectomes (He et al. 2022). Even without finetuning, the classical regression model can outperform the trained version after a basic meta-matching between phenotypes. This motivates us to develop and release a brain foundation model powered by BEI multitask learning, as illustrated in Fig. 1b. Given that cognition relevant BEIs represent the brain function used for diagnosing and other downstream tasks, the downstream outcome can be decoded from the BEI token embeddings as shown in Fig. 1d, where the cross-attention is computed between brain connectome feature and the tokenized BEI. This utilizes the findings in (He et al. 2022) that seen and unseen cognition relevant phenotypes can be meta-matched. The self-attention in Fig. 1 communicates information learned from pretrained BEIs in downstream tasks, enhancing the generality and robustness of the model. 

To this end, this work presents three main contributions. (1) A new brain foundation model architecture is proposed to cooperate with multitask pretraining and semi-supervised finetuning on rich BEIs. (2) The _largest_ connectome model (LCM) for brain fMRI is designed and released along with the pretrained weights based on large scale data ( _n_ =10,036). (3) Experiments on 8 fMRI datasets evaluate the performance of LCM on sex prediction, human behavior recognition, and disease early diagnosis of Autism, Parkinson’s disease, Alzheimer’s disease, and Schizophrenia, in terms of scalability, pretraining, and finetuning. 

## **2 Preliminaries** 

The dynamic signal of brain functional MRI is a bloodoxygen dependent level (BOLD). BOLD signal, which is 

**==> picture [239 x 191] intentionally omitted <==**

**----- Start of picture text -----**<br>
Downstream Performance vs GPU hours<br>L CM-1175M<br>72.5<br>LCM-735M<br>70.0 LCM-147M<br>BrainMass-67M<br>67.5<br>65.0<br>62.5<br>BrainJEPA-307M<br>60.0<br>57.5<br>55.0 BrainLM (250EP)<br>BrainMass (200EP)<br>52.5 BrainJEPA (200EP) BrainLM-6 50M<br>0 0 0 1<br>3 × 10 4 × 10 6 × 10 10<br>Pre-training GPU hours<br>Classification Performance (F1)<br>**----- End of picture text -----**<br>


Figure 3: Our LCM surpasses other foundation models, demonstrating outstanding efficiency, on our biggest downstream application, ABIDE ( _n_ =1,025), as an example. Even the smallest LCM (147M), achieves comparable performance while being significantly efficient in both parameters and resource usage. 

influenced by a mixture of factors and distorted by nonneuronal fluctuations, has a relatively low signal-to-noise ratio (SNR) (Caballero-Gaudes and Reynolds 2017). Brain connectomes, on the other hand, increase the SNR in raw signals by representing brain activity via the Pearson correlation coefficient, which is also called functional connectivity (FC) and is defined as follows: 

**==> picture [204 x 26] intentionally omitted <==**

where **x** _∈_ R _[N][×][T]_ refers to the BOLD signal with _N_ and _T_ denoting the number of brain regions and time points, respectively. 

Various works have shown superior performance using FC compared to the raw BOLD signal for downstream applications. For example, benchmark papers (Cui et al. 2022; Said et al. 2023; Ding et al. 2024) evaluated the performance by using the BOLD or the correlation as the input, and the BOLD signal has consistently demonstrated lower accuracy. In addition, both static FC and dynamic FC (using the sliding window technique) outperform the BOLD signal (Wei et al. 2024). 

Therefore, we formulate the problem of the brain foundation model as a pretrained large model dedicated to the brain connectome and coined as the large connectome model (LCM). Inspired by (He et al. 2022), LCM is supervised by phenotypic labels, aka. BEI, via multitask learning, which mostly are categorical labels. However, even tremendous efforts have been made for brain connectome and graph classification or regression (Ying et al. 2021; Kan et al. 2022; Chen et al. 2023; Bedel et al. 2023; Wei et al. 2024), they, as the encoder, have a limited scalability (Wei et al. 2024). Plenty of theoretical (Keriven 2022) and experimental analysis (Rusch, Bronstein, and Mishra 2023) suggest that the reason for that includes over-smoothing and over-squashing. 

**Scalability analysis:** For brain foundation models, MLP is commonly used as the predictive head (Ortega Caro et al. 2023; Yang et al. 2024; Dong et al. 2024). However, as shown in Fig. 2 orange curves, MLP has an exploded training loss when scaling up the parameter amount, where the MLP model is constructed with ReLU activations and residual connections in-between blocks. In this case, we need to think out of the box about the predictive head that has unsatisfactory scalability for the multitask pretraining. 

Recently, (Paul et al. 2024) proposed a simple framework by replacing the MLP with the Transformer decoder as an interpretable predictive head showing similar or better performance for computer vision tasks. Based on this decoder classifier, our LCM is designed as a decoder-only architecture. In comparison, as shown in Fig. 2 blue curves, LCM shows a better scalability on seven different datasets, where training loss can be lower with more layers used in LCM. This enables LCM to learn from large-scale brain connectome data powered by BEI multitask learning. Consequently, the model efficiency surpasses previous foundation models, which are derived from vision-based encoders, as shown in Fig. 3. 

**Related works:** BrainLM (Ortega Caro et al. 2023), to our best knowledge, is the first brain foundation model by applying MAE on BOLD signals. It fills every bit of the fMRI time series can hinder the model’s ability to distinguish between noise and actual signals. However, research (Assran et al. 2023) has shown that masked pretraining in generative architectures like MAE often results in suboptimal performance in off-the-shelf evaluations (e.g., linear probing). BrainJEPA (Dong et al. 2024), similarly, framed a new architecture with a different masking strategy JEPA. It handles the suboptimal issues of BrainLM by following the idea of the I- JEPA (Assran et al. 2023). Although their results have shown better performance than linear probing, none of the explicit designs have been added for learning from inter-correlated phenotypes. BrainMass (Yang et al. 2024) used a matching objective between pseudo FC matrices by masking BOLD signals. Whilst, it overlooked the phenotypes and demographics that is always assigned with the functional neuroimaging data. To this end, we present a scalable large connectome model explicitly supervised by rich environmental variables and demographic data, along with an unprecedented amount of functional neuroimages. 

## **3 Methods** 

Given the FC matrix of fMRI data as defined by Eq. 1, LCM takes _FC_ as input and learns from the supervision of multiple non-imaging records of fMRI. 

## **Architecture** 

Inspired by the Transformer-based large models (Achiam et al. 2023) and (Paul et al. 2024), a decoder-only architecture as shown in Fig. 4 is employed in our LCM. The token vectors in Fig. 4 refer to _NBEI_ available BEIs in pretraining datasets, which are initialized randomly as the token embedding, denoted by **V** _∈_ R _[P][ ×][E]_ , where _P_ =[�] _[N] i[BEI]_ **N** _[class] i_ and **N** _[class] i_ is the class number of the _i[th]_ categorical BEI 

**==> picture [239 x 202] intentionally omitted <==**

**----- Start of picture text -----**<br>
Linear<br>c<br>MatmulMatmulMatmul SoftmaxSoftmaxSoftmax<br>MatmulMatmulMatmul<br>FC LinearLinearLinear LinearLinearLinear LinearLinearLinear<br>N<br>N<br>Linear<br>c<br>Legends MatmulMatmulMatmul SoftmaxSoftmaxSoftmax<br>c Concatenate MatmulMatmulMatmul<br>UnlearnableLearnable LinearLinearLinear LinearLinearLinear LinearLinearLinear<br>BEI token embeddings<br>MHCA<br>MHSA<br>**----- End of picture text -----**<br>


Figure 4: The architecture of one layer of the LCM. 

or 1 if the BEI is a continous value. Next, **V** is updated by self-attention as follows: 

**==> picture [225 x 19] intentionally omitted <==**

where _**α**_ **¯** _h,_ _**β**_ **[¯]** _h,_ **¯** _**γ** h ∈_ R _[E][×][D]_ are learnable parameters of selfattention linear layers shown in Fig. 4, _h_ is the head index, and _D_ is the hidden channel. 

Suppose **M** _∈_ R _[N][×][N]_ is FC matrix. Cross-attention between **V** and **M** is then defined as follows 

**==> picture [230 x 22] intentionally omitted <==**

where _**α**_ **ˆ** _h,_ **ˆ** _**γ** h ∈_ R _[N][×][D] ,_ _**β**_ **[ˆ]** _h ∈_ R _[E][×][D]_ are learnable parameters of cross-attention linear layers shown in Fig. 4, and _D_ is the hidden channel. Note that the bias in linear layers is omitted in this section for clarity. 

This design allows LCM to be easily stacked since each layer updates **V** without changing the tensor shape. 

## **Multitask Pretrain and Semi-supervised Finetune** 

Take categorical BEI as an example, the multitask pretraining is accomplished by 

**==> picture [199 x 30] intentionally omitted <==**

where _S_ 0 = 0 _, Si_ =[�] _[i] j[−]_ =0[1] **[N]** _[class] j_ if _i >_ 0 and _CELoss_ denotes cross-entropy loss. The Mean Squared Error (MSE Loss) is used for regressive BEI tokens. 

Finetuning objectives are the same as pretraining. Given unseen datasets that have _N_[ˆ] _BEI_ tasks as new BEIs with **ˆN** _[class]_ as the vector of class number for each BEI, the finetuning can be easily achieved by concatenating new tokens by updating **V** _←−_ [ **V** _,_ **V[ˆ]** ], **N** _[class] ←−_ [ **N** _[class] ,_ **N[ˆ]** _[class]_ ]. For pretrained tokens during finetuning, the pseudo-label is assigned 

**==> picture [404 x 178] intentionally omitted <==**

**----- Start of picture text -----**<br>
FC Linear Loss GT<br>l+1 [th ] layer<br>Cross-attention Share 1 [st]  epoch<br>weights<br>Self-attention<br>Stage 1:<br>Momentum<br>Linear Loss GT<br>l [th ] layer<br>m [th]  epoch<br>Cross-attention<br>Large  Stage 2:<br>Connectome  Self-attention Adaptive<br>Find the best<br>Model  training<br>prediction<br>(LCM)<br>BEI token embeddings Loss GT<br>**----- End of picture text -----**<br>


Figure 5: Pre-training and finetuning of LCM use a two-stage learning strategy: (1) Getting momentum by computing loss for all layers, and (2) adaptive training for the best layer. Note that ground truth (GT) could be a pseudo-label of the BEI, e.g., subjects are healthy by default in HCP datasets. 

to them with corresponding neuroimaging configurations, e.g., ‘resting-state’ for clinical applications. 

In case that BEIs differ on the complexity of feature representation, e.g., Parkinson’s disease at different stages of treatment might show different symptoms, we propose that LCM predicts each BEI at different layers of the model. As shown in Fig. 5, the BEI token embeddings from every LCM layer are stored at first. After the computation of LCM, token embeddings from all layers are input into a linear layer: R _[P][ ×][D] −→_ R _[P][ ×]_[1] to get various predictions from different layers of LCM. The best prediction, i.e., the layer that has the best predictive score, can be found given the ground truth (GT) during training. The best prediction is then used as the output to get the loss with GT. During testing, the output of the layer that has the highest score is the final output of LCM. 

The initialization of our learning strategy is important to have a proper starting point and a correct direction. To account for this, as shown in Fig. 5 left part, training the LCM has two stages for both pretraining and finetuning, (1) utilize the average prediction from all layers to update the LCM parameters in the first _m_ epochs, and (2) supervise only the best prediction in the rest of epochs. Namely, stage 1 produces a ‘momentum’ that can push the training of LCM to the correct direction, and hence LCM can achieve a diverse and correct feature representation for different phenotypes in the following stage. 

## **4 Experiments** 

We evaluate the proposed LCM on 8 datasets including HCP Aging (HCPA), HCP Young Adult (HCPYA), ADNI, PPMI, ABIDE, Taowu, Neurocon, and SZ. Two HCPs contain more than 10,000 scans of brain fMRI from about 1,800 subjects under various cognitive states, depending on resting or tasking. Six disease-related datasets contain about 1,500 subjects under the same resting state but various health status due to different brain-environment interactions. 

To comprehensively evaluate and showcase the performance of the proposed LCM, we conduct experiments on 

both randomly initialized and pretrained models across clinical applications, as well as tasks involving sex, and cognitive state recognition. The fewshot finetuning experiments are also conducted. Pretrained models are finetuned with different ratio of data in the same validation fold to demonstrate performance for real-world clinical applications. 

## **Datasets** 

We partition brain regions using the AAL atlas (TzourioMazoyer et al. 2002) through all experiments. The data preprocessing details can refer to the Supplementary and a benchmark paper (Xu et al. 2023). 

**The Lifespan Human Connectome Project Aging (HCPA)** dataset (Bookheimer et al. 2019) is instrumental in task recognition research, offering a comprehensive view of the aging process. It includes data from 717 subjects, encompassing fMRI records ( _n_ =4,863) with human behaviors associated with memory, sensory-motor and the resting state. In our experiments, these tasks are treated as a four-class classification. 

**The Human Connectome Project Young Adult (HCPYA)** dataset (Van Essen et al. 2013) has tackled key aspects of the neural pathways that underlie brain function and behavior via high-quality neuroimaging data in over 1100 healthy young adults. It includes data from seven human behaviors associated with various cognitive tasks, e.g., language and working memory. In our experiments, these tasks are treated as a seven-class classification. 

**Alzheimer’s Disease Neuroimaging Initiative (ADNI)** dataset (Weiner et al. 2015) serves as an invaluable resource, featuring a collection of pre-processed fMRI ( _n_ =138) and including clinical diagnostic labels. It encompasses a spectrum of cognitive states: Cognitive Normal (CN), Subjective Memory Complaints (SMC), Early-Stage Mild Cognitive Impairment (EMCI), Late-Stage Mild Cognitive Impairment (LMCI), and Alzheimer’s Disease (AD). Considering the class unbalance issue, we simplified these categories into two broad groups based on disease severity: we combined CN, 

Table 1: Finetune LCM with weights learned from various combination of BEIs. Diverse BEIs contribute differently to LCM pretraining, where checkmarks indicate which BEI ( 1 : cognitive state, 2 : Alzheimer’s, 3 : Parkinson’s, and 4 : Autism) are involved, _†_ denotes LCM is not pretrained, _‡_ denotes BrainLM is finetuned on the released model weights, **Bold** indicates the first ranking place, and underline indicates the second. 

||Pretrained on||Alzheimer’s|Alzheimer’s||Parkinson’s|Parkinson’s||Autism|Autism|
|---|---|---|---|---|---|---|---|---|---|---|
||1<br>2<br>3<br>4|Accuracy||F1 score|Accuracy||F1 score|Accuracy||F1 score|
||||||||||||
|BrainGNN<br>BolT<br>BNT<br>Graphormer<br>NAGphormer<br>NeuroPath<br>LCM_†_||83.48_±_6_._99 <br>82.89_±_8_._66 <br>83.56_±_7_._47 <br>82.81_±_7_._90 <br>80.59_±_6_._82 <br>82.07_±_6_._86 <br>85.04_±_9_._30||78.69_±_8_._25<br> 77.66_±_10_._03 <br> 78.31_±_12_._17 <br> 77.51_±_11_._46 <br> 76.07_±_9_._72<br> 74.12_±_9_._56<br> 79.58_±_13_._77|76.92_±_15_._60 <br> 73.30_±_20_._23 <br> 76.79_±_14_._59 <br> 65.89_±_14_._50 <br>72.16_±_18_._01 <br>69.79_±_17_._43 <br> 70.25_±_14_._36||75.24_±_16_._43 <br> 69.93_±_23_._98 <br> 71.99_±_17_._45 <br> 61.84_±_17_._07 <br> 67.84_±_19_._93 <br> 65.81_±_19_._77 <br> 66.10_±_16_._62|62.83_±_2_._77 <br> 68.09_±_3_._78 <br> 70.23_±_3_._69 <br> 57.66_±_2_._79 <br> 64.78_±_2_._47 <br> 65.71_±_5_._93 <br> 69.65_±_5_._10||61.73_±_3_._83<br> 68.01_±_3_._72<br> 69.98_±_3_._73<br> 57.00_±_2_._92<br> 64.60_±_2_._73<br> 64.64_±_7_._36<br> 69.58_±_5_._23|
||||||||||||
|BrainLM_‡_<br>✓<br>BrainLM<br>✓<br>✓<br>✓<br>✓<br>BrainMass-SVM ✓<br>✓<br>✓<br>✓<br>BrainMass-MLP ✓<br>✓<br>✓<br>✓<br>Brain-JEPA<br>✓<br>✓<br>✓<br>✓||83.30_±_4_._71 <br>82.56_±_4_._01 <br>82.96_±_5_._02 <br>82.96_±_5_._02 <br>86.02_±_3_._49||75.79_±_6_._63<br> 75.41_±_6_._21<br> 75.32_±_7_._06<br> 75.32_±_7_._06<br>80.20_±_4_._95|50.43_±_19_._59 <br>54.40_±_12_._37 <br>59.21_±_21_._68 <br>73.78_±_17_._95 <br>82.09_±_9_._58||45.83_±_23_._41 <br> 50.37_±_13_._25 <br> 51.25_±_25_._07 <br> 70.20_±_21_._02 <br>77.16_±_12_._34|53.25_±_4_._00 <br> 49.90_±_4_._86 <br> 64.49_±_1_._59 <br> 68.48_±_4_._50 <br> 63.84_±_0_._82||51.51_±_5_._67<br> 33.89_±_5_._18<br> 64.56_±_1_._62<br> 68.30_±_4_._70<br> 61.53_±_1_._35|
||||||||||||
|✓<br>✓<br>✓<br>✓<br>✓<br>✓<br>✓<br>✓<br>✓<br>✓<br>LCM<br>✓<br>✓<br>✓<br>✓||83.56_±_7_._92 <br>84.15_±_3_._50 <br>84.30_±_7_._40 <br>84.89_±_5_._53 <br>**86.30**_±_5_._80||80.53_±_9_._57<br> 81.00_±_5_._59<br> 82.52_±_8_._67<br> 83.48_±_7_._03<br> **85.33**_±_7_._35|**82.25**_±_14_._96 <br>73.98_±_14_._69 <br>79.00_±_14_._58 <br>74.63_±_16_._48 <br>81.30_±_14_._55||82.97_±_15_._21|69.71_±_0_._43 <br> 70.29_±_3_._26 <br> 69.51_±_3_._19 <br> 70.49_±_1_._76||69.68_±_0_._54<br> 71.22_±_2_._85|
||||||||78.74_±_12_._19 <br> 82.68_±_11_._30 <br> 77.17_±_14_._66 <br> **84.18**_±_11_._63||||
|||||||||||70.48_±_2_._03<br>70.82_±_1_._90<br> **72.50**_±_1_._91|
|||||||||**71.46**_±_2_._62|||



Table 2: Performance on sex prediction across 7 datasets, where **Bold** indicates the first ranking place, and underline indicates the second. 

|Sex_↑_|HCPA|HCPYA|ADNI|ABIDE|PPMI<br>Taowu|Neurocon|
|---|---|---|---|---|---|---|
|BrainLM<br>BrainMass-SVM <br>BrainMass-MLP <br>Brain-JEPA<br>LCM|40.68_±_4_._03 <br> 69.44_±_1_._69 <br> 69.93_±_1_._64|38.97_±_5_._40 <br> 68.12_±_3_._56 <br>68.54_±_3_._36|41.72_±_7_._19<br> 45.40_±_12_._88 <br>65.74_±_7_._66<br> 62.34_±_6_._51<br> **71.98**_±_6_._87|78.59_±_4_._98|42.03_±_9_._21<br>62.00_±_23_._53 <br> 48.83_±_6_._27<br>46.24_±_23_._96 <br> 67.73_±_12_._68<br>69.29_±_17_._74 <br> 48.46_±_7_._09<br>**92.48**_±_11_._16 <br> **77.97**_±_3_._76<br>90.67_±_11_._43|49.33_±_28_._08<br> 33.24_±_15_._34<br> 61.43_±_27_._90<br> 83.33_±_12_._43<br>**100.00**_±_0_._00|
|||||73.84_±_3_._49 <br>74.73_±_4_._20 <br>78.11_±_6_._41 <br>**87.34**_±_4_._48|||
||43.53_±_0_._65 <br>**73.94**_±_2_._45|43.63_±_3_._27 <br> **72.23**_±_1_._92|||||



SMC, and EMCI into ‘CN’ group, while LMCI and AD were grouped as the ‘AD’ group. 

**Parkinson’s Progression Markers Initiative (PPMI)** dataset (Xu et al. 2023) presents a substantial collection of data from 209 subjects. It encompasses states of mental health: normal control, scans without evidence of dopaminergic deficit (SWEDD), prodromal, and Parkinson’s disease (PD). In our experiments, the dataset is treated as a four-class classification. 

**Autism Brain Imaging Data Exchange (ABIDE)** dataset presents data from 1025 young adults. The initiative aggregated fMRI data collected from laboratories around the world to support the research on Autism Spectrum Disorder (ASD). Subjects are classified into typical controls and those suffering from ASD. The binary classification is set for this dataset in our experiments. 

**Taowu** and **Neurocon** (Xu et al. 2023) are two of the earliest image datasets released for Parkinson’s and contain 81 subjects. The binary classification is set for these datasets in our experiments. 

**Schizophrenia (SZ)** contains 189 subjects. There are 30 diseased and 159 healthy. The binary classification is set for the dataset. 

## **Implementation Details** 

Following previous works, our experiments are done with subject-level cross-validation (CV). The average score and the standard deviation are both listed. To make our results comparable with previous papers, HCPA, HCPYA, and ADNI use a 5-fold CV as same as (Dan et al. 2023; Wei et al. 2024), while others use 10-fold as same as (Xu et al. 2023). Since LCM is a foundation model, training data for pretraining and finetuning is always from the corresponding CV fold’s training set to prevent data leakage. Hyperparameters, e.g., learning rate and hidden channels, can be found in the Supplementary. SOTA brain-dedicated models, BrainGNN (Li et al. 2021), BNT (Kan et al. 2022), BolT (Bedel et al. 2023), and NeuroPath (Wei et al. 2024) are implemented as their original codes with default hyperparameters, where the structural connectome utilized by NeuroPath is replaced by FC in our work. Additionally, SOTA graph Transformers, Graphormer (Ying et al. 2021), and NAGphormer (Chen et al. 2023), are also compared. The released BrainLM (Ortega Caro et al. 2023), the one we trained from scratch, along with the original BrainMass-SVM (Yang et al. 2024), the modified BrainMassMLP, and Brain-JEPA (Dong et al. 2024), are both retrained and compared. Codes and model weights can be found in the Supplementary. 

Table 3: Model scalability demonstration via performance on phenotypic prediction. **Bold** indicates the first ranking place, and underline indicates the second. 

||HCPA<br>3-task|HCPYA<br>7-task|ADNI<br>Alzheimer’s|PPMI<br> Parkinson’s|ABIDE<br> Autism|Taowu<br>Parkinson’s|Neurocon<br> Parkinson’s|
|---|---|---|---|---|---|---|---|
|MLP-Small <br>MLP-Mid<br>MLP-Big|93.99_±_0_._35 <br>91.87_±_1_._09 <br>87.37_±_8_._25|88.67_±_2_._07 <br> 80.04_±_3_._40 <br> 76.43_±_1_._86|76.39_±_8_._90<br> 75.85_±_8_._07<br> 76.17_±_7_._36|61.45_±_11_._05|68.81_±_3_._04<br> 66.14_±_6_._56<br> 49.21_±_14_._90|61.00_±_28_._29 <br>50.67_±_29_._09 <br> 43.00_±_31_._84|65.87_±_31_._40<br> 62.48_±_29_._39<br> 59.54_±_30_._60|
|||||58.32_±_15_._46 <br>41.74_±_12_._82||||
|LCM-Small <br>LCM-Mid<br>LCM-Big|97.04_±_0_._40 <br>97.15_±_0_._25|94.63_±_0_._77 <br>94.84_±_0_._61|76.99_±_9_._91<br>77.96_±_13_._41|57.29_±_14_._52 <br>58.19_±_13_._35 <br> **61.61**_±_14_._69|68.34_±_3_._54<br> 69.39_±_5_._02<br> **69.58**_±_5_._23|74.57_±_27_._90 <br>78.33_±_20_._39|59.95_±_27_._60<br>69.21_±_28_._19<br> **71.87**_±_27_._42|
||**97.18**_±_0_._54|**95.02**_±_1_._00|**79.58**_±_13_._77|||**88.33**_±_22_._52||



Table 4: Fewshot finetuning (FT) performance comparison on a held-out disease. 

|Schizophrenia (SZ)|10% FT|50% FT|100% FT|
|---|---|---|---|
|BolT<br>NeuroPath<br>BrainMass-SVM<br>BrainMass-MLP<br>LCM<br>_p_-value|79.70_±_9_._76<br>78.60_±_9_._77<br>78.60_±_8_._74<br>78.89_±_10_._14|80.16_±_12_._68 <br>80.16_±_12_._68 <br>78.60_±_8_._74<br>80.95_±_11_._00|81.14_±_9_._75<br> 81.74_±_8_._90<br>78.60_±_8_._74<br>82.55_±_10_._95|
||**81.63**_±_8_._58<br>0.0267|**81.73**_±_11_._48 <br>0.0124|**83.61**_±_6_._01<br>0.0014|



## **Main Results: Finetuning Performance** 

**Disease diagnosis** As listed in Table 1, there are four additional versions of pretraining LCM, (i): without any diseases, (ii): no Alzheimer’s, (iii): no Parkinson’s, and (iv) no Autism, to compare with LCM pretraining with all data in the last row. SOTA models are also listed in the upper part of the Table for comparison. Note that, due to class unbalance, accuracy can have different ranks as F1 score, and F1 is the metric to conclude. 

Firstly, pretraining with more data leads to better performance, and hence, the complete version of LCM has the best accuracy and F1 score against others. LCM pretrained with one or more disease-related datasets can outperform the one pretrained with only HCPs ( 1 ) except for Parkinson’s, which is the only four-class classification task and has higher difficulty. 

Additionally, pretraining enhances the LCM performance even if the downstream tasks are unseen. After holding out all disease-related datasets (pretrained on 1 ), the F1 scores on all diseases are all better than the train-from-scratch LCM _†_ . Performance improvement is impressive in Parkinson’s, given a 16.87% increase in F1, while before pretraining LCM _†_ is about 11% lower than Brain-JEPA in F1. Compared to LCM _†_ , LCM is always better in F1. We can find this observation for cases of held-out Alzheimer’s (pretrained on 1 3 4 ), Parkinson’s (pretrained on 1 2 4 ), or Autism (pretrained on 1 2 3 ). 

Last but not least, finetuning the LCM on seen datasets is more stable than on unseen datasets. Take Alzheimer’s as an example, pretrained on 1 2 3 and 1 2 4 have 82.52% and 83.48% F1, respectively, while the best of unseen is 81%. Autism also shows better when pretrained on 1 3 4 than on 1 2 3 in F1 scores. Whilst Parkinson’s 

shows the opposite due to the difficult four-class classification. 

**Demographics** We test models to predict the sex on our seven datasets, respectively, as listed in Table 2, where sex is measured by F1 score. Clearly, LCM outperforms others on all datasets except for Taowu ( _n_ = 40), while other models are unable to hold the first/second place across all datasets. 

## **Main Results: Fewshot Finetuning** 

To further demonstrate the generalizability, we finetune and evaluate LCM on a new unseen dataset, SZ ( _n_ = 189) by F1 score as listed in Table 4, _p_ -value is from a paired t-test between scores of LCM and other SOTA models in the 5-fold cross-validation. As the experiments in BrainMass, different ratios of finetuning data, 10%, 50%, and 100%, were used in the evaluation. We can see the generalizability of LCM is significantly better ( _p <_ 0.05) than BrainMass. 

## **Main Results: Model Scalability** 

The comparison of classification performance measured by F1 score is listed in Table 3, where Small refers to 8-layer (100M-level), Mid is 20-layer (700M-level), and Big is 32layer (1.2B-level). In contrast, SOTA models in the middle rows have only 4M-level parameters. Note that although either width or depth can increase the model scale of MLP, we found that width is not as valuable as the depth of MLP, referring to the similar accuracy with different widths as shown in the Supplementary. Except for BrainLM and LCMBig which are single model pretrained with additional data and tested on each dataset, all models listed in Table 3 are trained from scratch for each dataset. 

Clearly, LCM holds the best/second performance given the best scalability, where the F1 score is always increased when the model size is enlarged, and it is finally significantly boosted by the pretraining. MLP is not scalable, agreeing with the exploded training loss as shown in Fig. 2. The best performance by MLP is consistently demonstrated by the small version, while larger MLPs have lower F1 scores. For example, MLP-Small ranks in the top 5 for PPMI and ABIDE, but MLP-Big drops to last place. More analysis of MLP scalability can be found in Supplementary. 

It is worth noting that LCM-Big got enhanced to the best performance with over 90% F1 on Taowu and Neurocon datasets by pretraining (see Table 1), while before that, LCMBig was out of the top three. LCM drops on HCPA and HCPYA after pretraining because their sample size is 10 

**==> picture [505 x 111] intentionally omitted <==**

Figure 6: The average cross-attention map of all test data at the readout layer of LCM on disease-related datasets. The node size indicates the relative attention weight. 

**==> picture [239 x 130] intentionally omitted <==**

Figure 7: The distribution of the index of the best-matched readout layer of LCM, where a dot in the box plot represents one sample point. 

times the rest of the datasets. However, the disease-related datasets that have small sample sizes consistently benefited from big data. 

## **Interpretation** 

**Adaptive training** We demonstrate the frequency of the bestmatched readout layer index across batches by box plot in Fig 7. We can see it has a diverse distribution for various disease diagnoses. Alzheimer’s, Control Normal (CN), and SWEDD tend to use shallow features at layers between 1 to 15 across batches since it is relatively easier to separate Alzheimer’s (dementia stage) and CN/SWEDD (with non-evident symptoms). In contrast, multi-level feature representations are required from various layers to effectively differentiate Autism, Parkinson’s, and Prodromal stages because of subtle variations in brain function. This distribution is collected from the last epoch of finetuning, indicating semi-supervised LCM did not converged to a fixed layer for different phenotypes. 

**Visualizations** The average cross-attention map of test data with the same label in ADNI, ABIDE, and PPMI datasets is shown in Fig. 6. The attention weights are extracted at the readout layer by the proposed adaptive training. We can observe that LCM is more attentive to the default mode network for Alzheimer’s and Autism than Parkinson’s, which aligns with current neuroscience knowledge (Padmanabhan et al. 2017; Zhang et al. 2023). It is clear that LCM is also attentive to the limbic network for ADNI and ABIDE, which is often damaged in Alzheimer’s disease (Hopper and Vogel 

1976) and Autism (Wong et al. 2020). For three classes of Parkinson’s, LCM is attentive to sensorimotor, visual, and frontoparietal networks that are involved in Parkinson’s disease by agreeing with (Schneider, Diamond, and Markham 1987; Cascone et al. 2021; Gottlich et al. 2013). These visu-¨ alizations can interpret the promising performance of LCM. 

## **Ablation studies** 

As introduced in Section 3, the learning strategy of LCM is designed with a momentum of full supervision (stage 1) on all decoder layers in a few beginning epochs, and then followed by an adaptive training (stage 2) on the best-matched layer. To show the effectiveness of the learning strategy design, we run finetuning experiments for the pretrained LCM with all three ablate version as listed in Table 5, where the model supervised at the last layer as the baseline represents the training of a generic Transformer decoder. Only stage 2 across the entire finetuning shows the necessity of the momentum of full supervision at stage 1, and only stage 1 shows the necessity of stage 2. 

Clearly, as listed in Table 5, our design of training LCM shows the best performance on disease-related datasets. Other versions of LCM finetuning are not as stable as the performance gained by our design. Although the only stage 2 version shows the second-best performance on Alzheimer’s, it has worse scores than the train-from-scratch LCM on Autism (see Table 1). As well as the only stage 1 version acts well on Parkinson’s but fails on Autism. This observation supports that different phenotypes perform great at different layers of LCM, and momentum by full supervision is required for training LCM on the correct direction. 

## **5 Conclusion** 

In conclusion, we proposed a large connectome model (LCM), which is the largest brain foundation model (1.2B) for clinical applications. Tremendous efforts have been made to pretrain large scalable models on extensive fMRI data using self-regressive learning. Even though every fMRI data has phenotypes or demographics recorded, none has explored a multitask methodology for the large brain foundation model. By capitalizing on rich environmental variables and demographic data along with an unprecedented amount of fMRI data, we present a scalable model architecture for more effective pretraining by multitask learning for brain-environment interactions (BEI). We design the LCM for scalability and 

Table 5: Ablation studies of LCM learning strategy, where average scores are listed. 

||Supervised at||Alzheimer’s|Alzheimer’s||Parkinson’s|Parkinson’s||Autism|Autism|
|---|---|---|---|---|---|---|---|---|---|---|
|Last Best All||Accuracy||F1 score|Accuracy||F1 score|Accuracy||F1 score|
||||||||||||
|Baseline<br>✓<br>Only stage 1<br>✓<br>Only stage 2<br>✓<br>Stage 1 & 2<br>✓<br>✓||83.22_±_5_._72 <br>79.19_±_6_._33 <br>84.15_±_3_._50||80.49_±_6_._69 <br> 80.49_±_6_._63 <br>83.78_±_6_._69|76.06_±_16_._02 <br> 80.40_±_11_._13||78.45_±_14_._31 <br>**84.74**_±_8_._35<br> 80.95_±_7_._68<br> 84.18_±_11_._63|69.35_±_3_._22||69.90_±_3_._34|
|||||||||65.24_±_2_._86 <br>66.80_±_2_._10 <br>**71.46**_±_2_._62||66.41_±_2_._25<br> 67.32_±_1_._76<br> **72.50**_±_1_._91|
||||||75.35_±_13_._80 <br> **81.30**_±_14_._55||||||
|||**86.30**_±_5_._80||**85.33**_±_7_._35|||||||



the robustness of finetuning with the consideration of the diverse complexity of feature representation for different BEIs. We have evaluated our foundation model on a variety of applications, including sex prediction, human behavior recognition, and disease early diagnosis of Autism, Parkinson’s disease, and Alzheimer’s disease, where promising results shown by the pretrained LCM indicate the great potential to facilitate brain connectome in clinical routines. The LCM finetuning on unseen datasets is also promoted by the pretraining with significant performance enhancement compared to train-from-scratch LCM. Given the impressive performance of our methods on 8 datasets, the decoder-only architecture learning from the multitask learning provides a new routine for training a brain foundation model. 

## **Acknowledgement** 

This work was supported by the National Institutes of Health (AG091653, AG068399, AG084375) and the Foundation of Hope. 

## **References** 

Achiam, J.; Adler, S.; Agarwal, S.; Ahmad, L.; Akkaya, I.; Aleman, F. L.; Almeida, D.; Altenschmidt, J.; Altman, S.; Anadkat, S.; et al. 2023. Gpt-4 technical report. _arXiv preprint arXiv:2303.08774_ . 

Assran, M.; Duval, Q.; Misra, I.; Bojanowski, P.; Vincent, P.; Rabbat, M.; LeCun, Y.; and Ballas, N. 2023. Self-supervised learning from images with a joint-embedding predictive architecture. In _Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition_ , 15619–15629. 

Bedel, H. A.; Sivgin, I.; Dalmaz, O.; Dar, S. U.; and C¸ ukur, T. 2023. BolT: Fused window transformers for fMRI time series analysis. _Medical Image Analysis_ , 88: 102841. Bookheimer, S. Y.; Salat, D. H.; Terpstra, M.; Ances, B. M.; Barch, D. M.; Buckner, R. L.; Burgess, G. C.; Curtiss, S. W.; Diaz-Santos, M.; Elam, J. S.; et al. 2019. The lifespan human connectome project in aging: an overview. _Neuroimage_ , 185: 335–348. 

Caballero-Gaudes, C.; and Reynolds, R. C. 2017. Methods for cleaning the BOLD fMRI signal. _Neuroimage_ , 154: 128– 149. 

Cascone, A. D.; Langella, S.; Sklerov, M.; and Dayan, E. 2021. Frontoparietal network resilience is associated with protection against cognitive decline in Parkinson’s disease. _Communications biology_ , 4(1): 1021. 

Chen, J.; Gao, K.; Li, G.; and He, K. 2023. NAGphormer: A Tokenized Graph Transformer for Node Classification in 

Large Graphs. In _Proceedings of the International Conference on Learning Representations_ . 

Cui, H.; Dai, W.; Zhu, Y.; Kan, X.; Gu, A. A. C.; Lukemire, J.; Zhan, L.; He, L.; Guo, Y.; and Yang, C. 2022. Braingb: a benchmark for brain network analysis with graph neural networks. _IEEE transactions on medical imaging_ , 42(2): 493–506. 

Dan, T.; Ding, J.; Wei, Z.; Kovalsky, S.; Kim, M.; Kim, W. H.; and Wu, G. 2023. Re-Think and Re-Design Graph Neural Networks in Spaces of Continuous Graph Diffusion Functionals. _Advances in Neural Information Processing Systems_ , 36: 59375–59387. 

Ding, J.; Dan, T.; Wei, Z.; Cho, H.; Laurienti, P. J.; Kim, W. H.; and Wu, G. 2024. Machine Learning on Dynamic Functional Connectivity: Promise, Pitfalls, and Interpretations. _arXiv preprint arXiv:2409.11377_ . 

Dong, Z.; Li, R.; Wu, Y.; Nguyen, T. T.; Chong, J. S. X.; Ji, F.; Tong, N. R. J.; Chen, C. L. H.; and Zhou, J. H. 2024. BrainJEPA: Brain Dynamics Foundation Model with Gradient Positioning and Spatiotemporal Masking. _arXiv preprint arXiv:2409.19407_ . 

Gottlich, M.; M¨ unte, T. F.; Heldmann, M.; Kasten, M.; Hage-¨ nah, J.; and Kramer, U. M. 2013.¨ Altered resting state brain networks in Parkinson’s disease. _PloS one_ , 8(10): e77336. 

He, T.; An, L.; Chen, P.; Chen, J.; Feng, J.; Bzdok, D.; Holmes, A. J.; Eickhoff, S. B.; and Yeo, B. T. 2022. Metamatching as a simple framework to translate phenotypic predictive models from big to small data. _Nature neuroscience_ , 25(6): 795–804. 

Hopper, M.; and Vogel, F. 1976. The limbic system in Alzheimer’s disease. A neuropathologic investigation. _The American journal of pathology_ , 85(1): 1. 

Jenkinson, M.; Beckmann, C. F.; Behrens, T. E.; Woolrich, M. W.; and Smith, S. M. 2012. Fsl. _Neuroimage_ , 62(2): 782–790. 

Kan, X.; Dai, W.; Cui, H.; Zhang, Z.; Guo, Y.; and Yang, C. 2022. Brain network transformer. _Advances in Neural Information Processing Systems_ , 35: 25586–25599. 

Keriven, N. 2022. Not too little, not too much: a theoretical analysis of graph (over) smoothing. _Advances in Neural Information Processing Systems_ , 35: 2268–2281. 

Li, X.; Zhou, Y.; Dvornek, N.; Zhang, M.; Gao, S.; Zhuang, J.; Scheinost, D.; Staib, L. H.; Ventola, P.; and Duncan, J. S. 2021. Braingnn: Interpretable brain graph neural network for fmri analysis. _Medical Image Analysis_ , 74: 102233. 

Ortega Caro, J.; Oliveira Fonseca, A. H.; Averill, C.; Rizvi, S. A.; Rosati, M.; Cross, J. L.; Mittal, P.; Zappala, E.; Levine, D.; Dhodapkar, R. M.; et al. 2023. BrainLM: A foundation model for brain activity recordings. _bioRxiv_ , 2023–09. 

Padmanabhan, A.; Lynch, C. J.; Schaer, M.; and Menon, V. 2017. The default mode network in autism. _Biological Psychiatry: Cognitive Neuroscience and Neuroimaging_ , 2(6): 476–486. 

Paul, D.; Chowdhury, A.; Xiong, X.; Chang, F.-J.; Carlyn, D. E.; Stevens, S.; Provost, K. L.; Karpatne, A.; Carstens, B.; Rubenstein, D.; Stewart, C.; Berger-Wolf, T.; Su, Y.; and Chao, W.-L. 2024. A Simple Interpretable Transformer for Fine-Grained Image Classification and Analysis. In _The Twelfth International Conference on Learning Representations_ . 

Rusch, T. K.; Bronstein, M. M.; and Mishra, S. 2023. A survey on oversmoothing in graph neural networks. _arXiv preprint arXiv:2303.10993_ . 

2023. Data-driven network neuroscience: On data collection and benchmark. _Advances in Neural Information Processing Systems_ , 36: 21841–21856. 

Yang, Y.; Ye, C.; Su, G.; Zhang, Z.; Chang, Z.; Chen, H.; Chan, P.; Yu, Y.; and Ma, T. 2024. BrainMass: Advancing Brain Network Analysis for Diagnosis with Large-scale Self-Supervised Learning. _IEEE Transactions on Medical Imaging_ . 

Ying, C.; Cai, T.; Luo, S.; Zheng, S.; Ke, G.; He, D.; Shen, Y.; and Liu, T.-Y. 2021. Do transformers really perform badly for graph representation? _Advances in neural information processing systems_ , 34: 28877–28888. 

Zhang, Z.; Chan, M. Y.; Han, L.; Carreno, C. A.; WinterNelson, E.; Wig, G. S.; (ADNI, A. D. N. I.; et al. 2023. Dissociable effects of Alzheimer’s disease-related cognitive dysfunction and aging on functional brain network segregation. _Journal of Neuroscience_ , 43(46): 7879–7892. 

Said, A.; Bayrak, R.; Derr, T.; Shabbir, M.; Moyer, D.; Chang, C.; and Koutsoukos, X. 2023. Neurograph: Benchmarks for graph machine learning in brain connectomics. _Advances in Neural Information Processing Systems_ , 36: 6509–6531. 

Schneider, J. S.; Diamond, S. G.; and Markham, C. H. 1987. Parkinson’s disease: sensory and motor problems in arms and hands. _Neurology_ , 37(6): 951–951. 

Tzourio-Mazoyer, N.; Landeau, B.; Papathanassiou, D.; Crivello, F.; Etard, O.; Delcroix, N.; Mazoyer, B.; and Joliot, M. 2002. Automated anatomical labeling of activations in SPM using a macroscopic anatomical parcellation of the MNI MRI single-subject brain. _Neuroimage_ , 15(1): 273–289. 

Van Essen, D. C.; Smith, S. M.; Barch, D. M.; Behrens, T. E.; Yacoub, E.; Ugurbil, K.; Consortium, W.-M. H.; et al. 2013. The WU-Minn human connectome project: an overview. _Neuroimage_ , 80: 62–79. 

Wei, Z.; Dan, T.; Ding, J.; and Wu, G. 2024. NeuroPath: A Neural Pathway Transformer for Joining the Dots of Human Connectomes. In _The Thirty-eighth Annual Conference on Neural Information Processing Systems_ . 

Weiner, M. W.; Veitch, D. P.; Aisen, P. S.; Beckett, L. A.; Cairns, N. J.; Cedarbaum, J.; Donohue, M. C.; Green, R. C.; Harvey, D.; Jack Jr, C. R.; et al. 2015. Impact of the Alzheimer’s disease neuroimaging initiative, 2004 to 2014. _Alzheimer’s & Dementia_ , 11(7): 865–884. 

Wen, G.; Cao, P.; Liu, L.; Yang, J.; Zhang, X.; Wang, F.; and Zaiane, O. R. 2023. Graph self-supervised learning with application to brain networks analysis. _IEEE Journal of Biomedical and Health Informatics_ , 27(8): 4154–4165. 

Wong, N. M.; Findon, J. L.; Wichers, R. H.; Giampietro, V.; Stoencheva, V.; Murphy, C. M.; Blainey, S.; Ecker, C.; Murphy, D. G.; McAlonan, G. M.; et al. 2020. Serotonin differentially modulates the temporal dynamics of the limbic response to facial emotions in male adults with and without autism spectrum disorder (ASD): a randomised placebocontrolled single-dose crossover trial. _Neuropsychopharmacology_ , 45(13): 2248–2256. 

Xu, J.; Yang, Y.; Huang, D.; Gururajapathy, S. S.; Ke, Y.; Qiao, M.; Wang, A.; Kumar, H.; McGeown, J.; and Kwon, E. 

**A Accessibility** 

Public data is accessible via internet (HCPA[1] , HCPYA[2] , ADNI[3] . PPMI, ABIDE, Taowu, and Neurocon can be found here[4] ). The licenses to obtain those data can also be accessed on the websites. The codes and data split settings can be acquired via this code repository[5] . The weights of LCM-Big can be found here[6] . Note that separate model weights were picked according to the best validation score on eight datasets, and the model weights used in the main text were picked by the HCPA score. 

## **B Data profiles** 

The data profiles of our seven datasets are listed in Table 6. 

Table 6: The profiles of datasets used in this work. 

||HCPA|HCPYA|ADNI|PPMI|ABIDE|Taowu|Neurocon|
|---|---|---|---|---|---|---|---|
|Subject #|713|248|138|209|1,025|40|41|
|FC #|4,863|3,293|138|209|1,025|40|41|
|Class #|4|7|2|4|2|2|2|
|Sex ratio (M:F)|0.79|0.84|0.89|1.55|5.68|1.35|0.86|
|Age range|[36, 100]|[22, 36]|[55, 89.6]|[38, 84]|[6, 58]|[57, 75]|[45, 86]|



## **C Data preprocessing** 

The neuroimage processing consists of the following major steps: (1) We segment the T1-weighted image into white matter, gray matter, and cerebral spinal fluid using FSL software (Jenkinson et al. 2012). (2) On top of the tissue segmentation in Fig. 8, we parcellate the cortical surface of fMRI into cortical regions according to the atlas as a regional signal of time-series in Fig. 8, where FC, in the end, is the Pearson correlation coefficient between regional time-series. 

## **D Differences with other brain foundation models** 

We propose to develop a foundation model of fMRI using scalable logistic regression. The promising performance by our LCM proves the effectiveness of this novel idea. In addition, our LCM is highly different from others as listed in Table 7. 

Table 7: Differences with other brain foundation models 

||BrainLM|BrainMass|BrainJEPA|LCM|
|---|---|---|---|---|
|Input|BOLD|FC|BOLD|FC|
|Model scale|650M|67M|307M|1.2B|
|Model architecture|ViT|Encoder-only|ViT|Decoder-only|
|Pretrain|BOLD recon|FC recon|Latent feature recon|Brain-env interaction|
|Downstream<br>Phenotypes|Age, PTSD,<br>Anxiety,<br>Neuroticism|-|Age, Sex,<br>Neuroticism,<br>Flanker, Amyloid|Sex, Tasking|
|Diseases|-|ASD, ADHD,<br>AD, PD, MDD|AD|ASD, AD, PD, SZ|



## **E Computational cost** 

Our two-stage method makes the internal evaluation a bit more complex than self-supervised methods. The reason is that we need to exclude the evaluation dataset from LCM pre-training to prevent data leakage. In contrast, self-supervised methods pre-train with all data, including the evaluation dataset. However, for evaluating external diseases, such as Schizophrenia (SZ) in 

> 1https://www.humanconnectome.org/ 

> 2https://www.humanconnectome.org/study/hcp-young-adult/overview 

> 3https://adni.loni.usc.edu/ 

> 4https://auckland.figshare.com/articles/dataset/NeurIPS ~~2~~ 022 ~~D~~ atasets/21397377 

> 5 https://github.com/Chrisa142857/brain ~~n~~ etwork ~~d~~ ecoder 

> 6https://shorturl.at/3rYjK 

the main text, the evaluation procedure of LCM is the same as self-supervised methods because they are absolutely unseen for either self- or semi-supervised methods. 

In terms of actual training time used for pre-training and fine-tuning, we list the time cost per sample in Table 8 along with parameter numbers. Self-supervised methods, BrainJEPA and BrainMass, build additional neural networks at fine-tuning leading to more time cost. In contrast, our LCM only fine-tunes additional tokens leading to less computational cost as pre-training. In total, our LCM requires the least computational cost with the most learnable parameters. 

Table 8: Time cost of brain foundation models 

||BrainLM|BrainJEPA|BrainMass|LCM|
|---|---|---|---|---|
|Pretrain time (ms)|22.32|4.82|3.75|13.09|
|Finetune time (ms)|6.68|28.13|37.08|12.04|
|Param. #|650M|307M|67M|1.2B|



## **F Computing environments and hyperparameters** 

The experiments are done on a Linux system with one NVIDIA RTX 6000 Ada. Batch size and learning rate are set as 128 and 1e-4, respectively. The maximum epoch is set as 200 and _m_ = 5. _D_ = _E_ = 2048. Training will be early stopped if accuracy keeps dropping in 50 epochs. SOTA models including BrainGNN, BolT, BNT, Graphormer, NAGphormer, NeuroPath, and the finetuning head of BrainLM are all using the same number of hidden channels, _D_ = 2048, to meet the same level of feature representation. BrainLM is pre-trained on our datasets with the default hyperparameters, where the time-series is cropped into 30 time points during the pre-training. 

## **G MLP scalability analysis** 

MLP as a universal predictive head is used in most related works for downstream applications. In this work, we test the scalability of MLP on the same experiments as we run for the LCM. Fig. 9 is the comparison between MLPs using 2048 hidden channels and 6177 hidden channels with different layer numbers. 

**==> picture [504 x 225] intentionally omitted <==**

**----- Start of picture text -----**<br>
Brain extraction, tissue segmentation, …, brain mask refinement,…<br>T1w MRI<br>FC matrix<br>fMRI Head-motion estimation, slice time correction, …, confounds estimation, …<br>**----- End of picture text -----**<br>


Figure 8: General workflows for processing T1-weighted image (T1w MRI) and functional MRI (fMRI). The output is shown at the right, including the brain network of FC. 

**==> picture [505 x 184] intentionally omitted <==**

Figure 9: The scalability of MLP on disease prediction using 2048 hidden channels (first row) and 6177 hidden channels (second row), where the y-axis is the F1 score. 


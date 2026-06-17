# AlphaFold 3 and the AlphaFold Server

## What it is

AlphaFold 3 (DeepMind, Isomorphic Labs; Nature, May 2024) is a diffusion-based successor to AlphaFold 2 that predicts joint structures of proteins, nucleic acids, ligands, ions, and post-translational modifications in a single model. The AlphaFold Server (alphafoldserver.com) is the free public web frontend for non-commercial users; it is the only practical access path for amateurs because AF3 model weights are restricted (only ~50 institutions have local-deployment access as of March 2026) and there is no public API.

## Specific unlocks

- Submit a wild-type and missense-mutant pair of a 400-residue transmembrane transporter (e.g., SLC6A1) and get back a per-residue confidence (pLDDT) plot and PAE matrix in roughly 30 seconds, then visually inspect the perturbed helix in PyMOL or ChimeraX.
- Predict a protein-ligand complex (e.g., a kinase + a candidate inhibitor SMILES) without running AutoDock or having an X-ray structure of the holoenzyme.
- Build a small protein-protein interaction model (e.g., antibody Fab + epitope) up to the 5000-token job cap; useful for rare-disease parents trying to understand whether a known therapeutic antibody might still bind a mutant epitope.
- Predict the structure of a covalent or glycosylated protein, including ions and cofactors, in one shot rather than stitching together AF2 + manual ligand docking.
- Inspect protein-DNA / protein-RNA complexes at quality competitive with cryo-EM-derived structures for many cases.

## Pre-AI baseline

Until 2018, predicting a novel protein fold required CASP-grade infrastructure and weeks of compute. AlphaFold 2 (2021) collapsed that to hours on a GPU. AlphaFold 3 collapsed protein-ligand and protein-nucleic-acid joint prediction (which previously required separate docking and modeling stages and a structural biology PhD) to a single web form. Predicting the effect of a missense variant on a transmembrane transporter previously meant: solve or homology-model the structure (months), molecular dynamics on a cluster (days), docking with AutoDock or Glide (days), and a structural biologist to interpret. None of which was accessible to a parent or a hobbyist.

## Hardware / cost

Free tier on alphafoldserver.com. Limits as of 2026: 20 predictions per day per Google account, 5000 tokens per job. No API. No commercial use (you must partner with Isomorphic Labs or Google for that). Local deployment requires institutional license; weights are not public.

## Maturity

Production for non-commercial single-shot use. Not for high-throughput screening (rate-limited). Confidence calibration is good for globular proteins and protein-protein interactions; weaker for highly flexible loops, intrinsically disordered regions, and ligands with no PDB neighbors. PAE / pLDDT must be read carefully: the model will hallucinate confident-looking but wrong structures for sequences far from training distribution.

## Realistic limits for amateurs

- A confident AF3 prediction is not a diagnosis. Pathogenic missense variants do not always produce visible structural perturbations.
- AF3 does not predict free energy of binding or conformational ensembles. A structure is not a function.
- The 5000-token cap excludes large multi-protein complexes (e.g., full ribosome, full spliceosome).
- Server queues can be hours during peak hours; treat it as batch, not interactive.

## Sources

- https://www.nature.com/articles/s41586-024-07487-w (Abramson et al., AlphaFold 3, Nature 2024)
- https://alphafoldserver.com/
- https://www.ebi.ac.uk/training/online/courses/alphafold/alphafold-3-and-alphafold-server/
- https://www.science.org/content/article/limits-access-deepmind-s-new-protein-program-trigger-backlash
- https://deepmind.google/technologies/alphafold/alphafold-server/

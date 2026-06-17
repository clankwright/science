# Reaction Prediction, Retrosynthesis, and Autonomous Chemistry Agents

## What it is

The set of tools that take a target small molecule (a SMILES string) and propose synthetic routes from commercially available starting materials. Named entries: IBM RXN for Chemistry (free for registered users), ASKCOS (MIT, fully open source), AiZynthFinder (AstraZeneca, open source MIT-licensed), LillyMol (Eli Lilly, open source). And the autonomous lab agent: Coscientist (Carnegie Mellon, Boiko et al., Nature 2023), a GPT-4-driven planner+searcher+executor+analyzer that ran palladium-catalyzed C-C bond reactions on a real cloud lab.

## Specific unlocks

- An organic chemistry hobbyist or chemistry teacher can input a target SMILES (e.g., a natural product, a small fragrance molecule) and get back a multi-step retrosynthesis with literature precedents, scoring, and atom-economy via IBM RXN's free tier.
- Use AiZynthFinder locally (Python, MIT license) for a fully reproducible and inspectable retrosynthesis tree without a Reaxys / SciFinder enterprise subscription (which costs $10-50K/year minimum).
- Use ASKCOS for forward reaction prediction (will A + B + conditions give C?) plus retrosynthesis, all under one MIT-licensed roof.
- Plug Wolfram Alpha or a chemistry-tuned LLM into the retrosynthesis loop for safety scoring (compatibility of intermediates, hazardous reagents, regulatory flags) before committing to a route.
- For a sufficiently funded amateur or maker-space, replicate a Coscientist-style autonomous planning loop: LLM proposes -> retrosynthesis tool plans -> Opentrons OT-2 executes a wet-lab step -> LLM reads the result -> proposes next step.

## Pre-AI baseline

Retrosynthesis pre-2017 was a chemistry PhD's craft. The first deep-learning retrosynthesis (Segler et al., Nature 2018) and IBM RXN (released ~2018-2019) opened it; the 2023-2025 wave added LLM front-ends, multi-step search refinements, and agent loops that close the design-make-test cycle. Pre-Reaxys-alternatives, you needed a university library subscription ($10-50K/yr) just to look up known reactions for a target.

## Hardware / cost

- IBM RXN: free for registered users, web app.
- AiZynthFinder: free, Python, runs on CPU. github.com/MolecularAI/aizynthfinder.
- ASKCOS: free, Python + Docker; needs a few cores and ~16 GB RAM for non-trivial trees.
- LillyMol: free, C++/Python.
- Coscientist: code is research-grade; reproducing requires GPT-4 API and access to a wet lab (or cloud lab; Emerald Cloud Lab pivoted away from individual access in 2024-2025).

## Maturity

- IBM RXN, AiZynthFinder, ASKCOS: production for retrosynthesis suggestion.
- Forward reaction prediction: production but not as reliable as retrosynthesis (which has more training data).
- Autonomous chemistry agents (Coscientist class): research; impressive demos in narrow domains, not deployable by an amateur as a turnkey system.

## Where it breaks and dual-use

- Retrosynthesis suggestions favor well-published reactions; novel chemistry is poorly supported.
- "Drawing the route" does not guarantee the route works; yields, side products, scale-up surprises remain wet-lab problems.
- Coscientist's authors explicitly demonstrated that the same agent can be prompted to propose syntheses of controlled drugs and chemical-weapons agents. Operator responsibility, not built-in chemistry filters, is the current control. Buying precursor chemicals is gated by DEA / national authorities; cloud labs and CROs implement KYC.
- ASKCOS has internal safety scoring; IBM RXN does not advertise one; AiZynthFinder is route-only.

## Sources

- https://www.nature.com/articles/s41586-023-06792-0 (Coscientist, Nature 2023)
- https://www.cmu.edu/news/stories/archives/2023/december/cmu-designed-artificially-intelligent-coscientist-automates-scientific-discovery
- https://www.chemistryworld.com/news/first-gpt-4-powered-ai-lab-assistant-independently-directs-key-organic-reactions/4018723.article
- https://link.springer.com/article/10.1186/s13321-020-00472-1 (AiZynthFinder, J Cheminformatics 2020)
- https://link.springer.com/article/10.1186/s13321-024-00860-x (AiZynthFinder 4.0)
- https://openreview.net/pdf?id=UBPZSdsztb (ASKCOS vs IBM RXN comparison)
- https://www.chemcopilot.com/blog/ai-retrosynthesis-tools-revolutionizing-organic-chemistry-and-drug-discovery
- https://www.sinodoschemistry.com/portfolio/344-retrosynthesis-tools-review

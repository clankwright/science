# Zoo.dev (Zookeeper / Text-to-CAD) and Onshape AI

## What it is

Two cloud-native parametric CAD vendors taking different bets on AI. Zoo.dev built a from-scratch ML-trained text-to-CAD model that emits real B-rep geometry with a feature tree (not just mesh). Onshape (PTC) bolted AI onto its existing browser-based parametric CAD as Adam (co-pilot) and AI Advisor (in-app assistant). Both produce models you can edit by dimension afterwards, not generative blobs.

## Specific unlocks

### Zoo.dev Zookeeper (Jan 2026, Design Studio v1.1)

- "Make a 3-spoke pulley with a 6mm shaft hole and a 24-tooth GT2 belt profile" produces a parametric solid with editable feature tree, not a mesh.
- Conversational iteration: "make the bore 8mm, add a setscrew M3 on the hub" and the model rebuilds with constraints intact.
- Generates parametric variants in parallel for comparison.
- Roadmap: image attachments in prompts (multimodal), STEP/STL reverse engineering to infer parametric intent, "fleets of agents" running on different components in parallel.
- Open-source CAD core (KCL kernel) means designs are reproducible and not locked to Zoo's cloud.

### Onshape AI Advisor + Adam (October 2025 - 2026)

- AI Advisor is embedded in the design environment with real-time guidance grounded in Onshape's training corpus. Ask "how do I create a sweep along this 3D path" and get the answer plus the click sequence.
- Adam co-pilot reorganizes feature trees, simplifies operations, and exposes key dimensions on existing models without breaking design intent. Useful for cleaning up imported STEP files.
- AI Quick Render: natural-language prompt to professional rendering.
- FeatureScript autocomplete (Onshape's parametric scripting language).
- Roadmap: AI-powered semantic search across part libraries, automated geometry creation, AI agents.

## Pre-AI baseline

Onshape and Zoo.dev's pre-AI flows still required full parametric CAD literacy: sketches, constraints, datum planes, feature ordering. A simple bracket might take a beginner 30 minutes. Zoo's text-to-CAD beta in 2024 sometimes returned models that wouldn't open or had broken topology. Zookeeper (2026) fixes the topology problem by generating real KCL feature scripts.

## Hardware / cost

- Onshape: free for hobbyists with public documents. Standard $1,500/yr, Professional $2,100/yr.
- Zoo.dev Design Studio: free tier with limited generations, paid plans $20+/mo.
- Browser-only, runs on a Chromebook.

## Maturity

- Onshape AI Advisor: production. Adam: production via App Store.
- Zoo Zookeeper: GA as of Jan 2026 in Design Studio. Multimodal and reverse-engineering features in development. Xometry's "We Tested 7 Text-to-CAD Tools" (2025/2026) ranks Zoo top of the parametric category but notes it still misses on complex assemblies.

## Sources

- https://zoo.dev/research/zookeeper
- https://zoo.dev/blog/introducing-text-to-cad
- https://text-to-cad.zoo.dev/
- https://3dprintingindustry.com/news/open-source-ai-text-to-cad-software-by-zoo-unlocks-accessible-3d-design-236964/
- https://www.onshape.com/en/features/ai-advisor
- https://www.onshape.com/en/blog/adam-ai-app-store-cad-co-pilot
- https://www.ptc.com/en/news/2025/ptc-announces-latest-onshape-ai-advisor-release
- https://xometry.pro/en-eu/articles/text-to-cad-tools-test/

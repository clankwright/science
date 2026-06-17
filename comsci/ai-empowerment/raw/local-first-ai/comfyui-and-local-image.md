# ComfyUI, A1111/Forge, and local image generation

## What it is
The local-image-generation stack. ComfyUI is a node-based GUI for chaining image, video, and audio diffusion workflows; AUTOMATIC1111 webui (now mostly superseded by Forge) is the older form-based UI. Models in scope: Stable Diffusion 1.5 / SDXL / SD 3.5, Flux.1 (dev / schnell / pro), HunyuanDiT, Wan 2.2 video, AnimateDiff, plus tens of thousands of community fine-tunes and LoRAs hosted on Civitai.

## Specific unlocks
- Generate adult, explicit, gore, political, copyrighted-character, or otherwise content-policy-blocked images on your own GPU with no third-party logging or refusal. Disable the safety checker in `Settings > Stable Diffusion`. None of this is possible on Midjourney, DALL-E, or Adobe Firefly.
- An RTX 4070 generates ~1,200 SDXL images per day for ~$0.50 of electricity. A user generating 5,000 images/month spends ~$2 in electricity locally vs $30-60 on Midjourney.
- Stack multiple LoRAs in one prompt: a style LoRA at 0.7 + a character LoRA at 0.6 + a pose LoRA at 0.4. Tune each independently. Civitai hosts hundreds of thousands.
- Build reproducible multi-step workflows in ComfyUI (text-to-image -> upscale -> inpaint -> face-fix -> SVD video) and share them as a single JSON file. Workflows survive model upgrades.
- Run Flux.1-dev locally on 12 GB VRAM with quantized variants (Flux GGUF, Flux NF4); 24 GB runs full-fat dev with multiple LoRAs.
- Train a personal LoRA (your face, your art style, your product) in 30-60 minutes on a 24 GB GPU with Kohya, fully local, no cloud upload of the training set.

## Professional artist adoption
Concept artists, archviz studios, indie game studios, and VFX houses have moved heavy use to local ComfyUI specifically because (a) cloud services refuse client-IP-sensitive material, (b) reproducibility of node graphs lets a senior artist hand a junior a workflow file, (c) hourly cloud costs at production volume exceed a one-time GPU. Civitai's "PH's Archviz x AI" workflow is a public example of a production architectural visualization pipeline.

## Pre-AI baseline
Concept art: 3-8 hours per finished frame at $50-150/hour artist rates. Pre-2022 there was no "describe an image and get one" path at all.

## Hardware / cost
- **6-8 GB VRAM:** SD 1.5 comfortably; SDXL with sequential CPU offload (slow); quantized Flux NF4.
- **12 GB VRAM (RTX 3060 12GB / 4070):** SDXL native, Flux dev quantized, comfortable LoRA stacking.
- **16 GB VRAM (RTX 4070 Ti Super, 4080):** Flux dev native, multiple LoRAs, ControlNet, IP-Adapter together.
- **24 GB VRAM (3090 / 4090):** Flux + multiple LoRAs + upscaler + face-fix in one workflow without offload; SDXL training; Wan 2.2 video.
- **32 GB VRAM (5090):** SD 3.5 Large + multi-LoRA + video extensions, multi-resolution batch generation.
Storage: budget 50-200 GB for a serious model collection (one Flux checkpoint is ~24 GB, SDXL ~7 GB, SD 1.5 ~4 GB, plus LoRAs at 50-300 MB each).

## Maturity
Production-grade for image generation with explicit human creative direction. ComfyUI is the de facto pipeline for "I will use this in commercial work" image generation.

Breaks / weak: text rendering inside images still trails Imagen 4 / GPT-Image-1; high-fidelity human anatomy (hands, complex poses) still requires inpainting passes; node graphs balloon in complexity quickly; ComfyUI extensions occasionally break across version upgrades.

## Sources
- https://comfyui-wiki.com/en/tutorial/advanced/stable-diffusion-3-5-comfyui-workflow
- https://github.com/comfyanonymous/ComfyUI_examples
- https://civitai.com/articles/22102/automatic1111-and-forge-image-generation
- https://offlinecreator.com/blog/best-local-stable-diffusion-setup-2026
- https://demensdeum.com/blog/2026/04/20/local-ai-image-generator/
- https://stable-diffusion-art.com/lora/
- https://zencreator.pro/ai-university/guides/stable-diffusion-nsfw-guide

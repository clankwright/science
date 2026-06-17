# Risks and realistic limits

## What it is
The honest counterweight to the local-first hype. Local AI is real and useful; it is also expensive in money and time, behind frontier closed models, and full of dual-use weirdness that the policy world is still negotiating.

## The hardware barrier is real
"You can run a frontier-class model on your hardware" hides a $4,000-$8,000 minimum entry ticket for the 70B tier:
- **M4 Max MacBook Pro 64 GB:** ~$3,500-$4,500 new. Runs Llama 3.3 70B Q4 at 8-15 tok/s.
- **DGX Spark:** $4,699 (2026 price after February increase from $3,999). 128 GB unified, 200B inference.
- **2x RTX 3090 used:** ~$1,500. Power-hungry, loud, requires PSU + case + motherboard work.
- **RTX 5090:** ~$2,000-$3,000. 32 GB. Just barely fits 70B Q4.
- **Mac Studio M3 Ultra 192 GB:** ~$8,000-$10,000.

For under $1,000 you get the 7-13B tier. That tier is good for autocomplete, basic chat, simple RAG, but it is not the experience of using Claude or ChatGPT.

## The frontier gap is real
NIST CAISI's May 2026 evaluation pegs DeepSeek V4 Pro (the best open-weight model) as roughly 8 months behind closed frontier. In practice this means:
- Long-horizon agentic coding (multi-hour Claude Code or Codex sessions) still goes off the rails on local 70B more often than on Sonnet 4.6 / Opus 4.7.
- Multi-step tool-use chains under failure recovery degrade faster locally.
- Frontier multimodal reasoning (Gemini 3, GPT-5.5 Vision) still beats open-weight VLMs on hard cases.
- The 8-month gap compresses for some tasks (math, coding short-form) and widens for others (novel scientific reasoning, true agentic loops).

If your use case requires the literal best, you are still on a closed API in 2026.

## Dual-use: the uncensored model question
Abliterated models (Dolphin, Hermes, abliterated Qwen / Gemma / Llama variants) have had their refusal directions surgically removed via orthogonalization. They will discuss synthesis of controlled substances, write CSAM-adjacent material, generate convincing scams, and produce targeted harassment text on request. There is no upstream content policy.

The realist position:
- The same uncensoring lets a novelist write a war-crime atrocity scene, a security researcher describe a malware family in detail, or a therapist roleplay a suicidal patient for crisis-line training. None of these are possible on cloud APIs in 2026.
- It also lets bad actors do the obvious bad things, with no rate limit or vendor logging.
- Watermarking, model-output detection, and deplatforming-of-checkpoints are the policy levers being negotiated; none of them work well in 2026.

## Maintenance burden
A local-AI rig is not zero-touch:
- New model architectures need llama.cpp / vLLM / MLX updates; sometimes weeks of lag.
- Quantization choices change as new methods (TurboQuant, IQ-quants, KV-cache quant) ship.
- Fine-tuning data, prompt formats, chat templates, and tool-call grammars vary per model.
- A vLLM / SGLang server needs CUDA driver maintenance, NCCL config, OOM tuning under load.
- Apple OS updates occasionally break MLX or llama.cpp Metal builds.
- Compared to "I have an OpenAI API key": orders of magnitude more ongoing effort.

For a single user this is enthusiast hobby work. For a team / org you need a part-time or full-time person on the stack.

## Other realistic limits
- **Context windows on consumer hardware:** the model card says 128K, but KV cache for 128K of an 8B model alone consumes 8-16 GB VRAM. Practical context on a 24 GB GPU is often 8-32K, not the headline number.
- **Throughput:** a single 4090 serves 1-3 users comfortably on a 30B model; "ChatGPT for the company" needs a real GPU box.
- **Vendor risk migration:** local frees you from OpenAI's TOS, but new dependencies appear (Apple OS, NVIDIA drivers, llama.cpp maintainer attention, model-license terms from Meta / Alibaba / DeepSeek).
- **Energy:** a 5090 draws 575 W under inference; running it 24/7 is ~$150-300/year of electricity at US rates. A Mac Studio idles at ~10 W and tops at ~200 W.
- **Model license drift:** Meta's Llama license has grown more restrictive each version; Mistral moved Medium to research-only license; only Qwen, Gemma, and DeepSeek currently ship truly permissive frontier weights.

## Where local-first genuinely wins
- Privacy-mandated workloads (medical, legal, source-protection journalism, classified) where cloud is forbidden.
- Cost at scale (>1M tokens/day sustained) where API costs exceed amortized hardware.
- Content-policy-constrained creative work (NSFW art, literary fiction with violence, security research).
- Offline / airgapped / hostile-regime environments.
- Latency-sensitive interactive work where round-trip to a cloud API hurts.

Outside those categories, in May 2026 closed APIs are still cheaper, faster, smarter, and easier.

## Sources
- https://vitalik.eth.limo/general/2026/04/02/secure_llms.html
- https://magazine.sebastianraschka.com/p/a-dream-of-spring-for-open-weight
- https://medium.com/@adnanmasood/uncensored-llms-and-jailbreaks-taxonomy-mechanisms-ecosystem-risks-and-open-questions-b9000148931e
- https://locallyuncensored.com/blog/abliterated-models-guide.html
- https://www.decodesfuture.com/articles/best-uncensored-local-llms-2026-privacy-policy-guide
- https://julsimon.medium.com/what-to-buy-for-local-llms-april-2026-a4946a381a6a
- https://kentino.com/blogs/news/building-your-own-ai-system-the-complete-2026-guide-to-consumer-gpu-hardware-for-local-llms
- https://www.sitepoint.com/local-llm-security-best-practices-2026/

# Laptop GPU Energy and Thermal Behavior

> **Summary:** Two 2026 measurement papers ground the practical-throughput numbers for laptop-class inference. **RTX 4050 sustains 131.7 tok/s at 34.1 W**; iPhone 16 Pro loses 44% of throughput within two inferences and stays degraded for 65% of test iterations; Hailo-10H NPU sustains 6.9 tok/s at <2 W with near-zero variance. Sustained-load characterization, not peak throughput, is the binding constraint for agentic loops.

**Sources:** [raw/laptop-energy-thermal-2026.md](../../raw/laptop-energy-thermal-2026.md)

---

## Why peak throughput lies

Most published model benchmarks report cold-start tok/s, the first 30 seconds of inference. Real agentic-coding sessions are 20-60 minute multi-turn loops with sustained generation. Mobile and laptop hardware throttles aggressively under sustained load; the numbers users actually see are 30-50% below peak.

The two key 2026 measurement papers fix this for the wiki's 4 GB-class target.

## Watt Counts (April 2026)

arXiv:2604.09048. 5,000+ experiments, 50 LLMs, 10 NVIDIA GPUs (16-141 GB memory, 70-600 W TDP). **Open access dataset**. The dataset is the contribution: solo dev can pull energy/throughput tuples for their exact GPU rather than estimating.

Limited coverage of laptop-class 4 GB GPUs (the dataset skews to data center). For laptop-specific numbers, see the next paper.

## LLM Inference at the Edge: Sustained Load (March 2026)

arXiv:2603.23640. The right paper for laptop-class deployment.

| Device | Sustained throughput | Power | Variance |
|---|---|---|---|
| **RTX 4050** | **131.7 tok/s** | 34.1 W | low |
| iPhone 16 Pro | drops 44% in 2 inferences | mobile | high (degraded 65% of iterations) |
| Hailo-10H NPU | 6.9 tok/s | <2 W | near-zero |

The RTX 4050 result is the wiki's hard anchor: 131.7 tok/s sustained at 34 W on a 4 GB-class laptop dGPU.

## What this means for deployment

| Device class | Sustained throughput model | Deployment recommendation |
|---|---|---|
| Laptop NVIDIA dGPU (RTX 4050) | 130 tok/s sustained | [llama.cpp](../runtimes/llama-cpp.md) + CUDA, full power |
| Snapdragon X Elite laptop | NPU-bound, ~30-50 tok/s | [llama.cpp](../runtimes/llama-cpp.md) Hexagon backend or [ExecuTorch](../runtimes/executorch.md) |
| Phone (iOS/Android) | Throttle-bound, peak then drop | accept that long sessions degrade; design around cold-start patterns |
| Dedicated NPU (Hailo) | Ultra-low-power | not for general agentic coding; for embedded inference |

## Why thermal matters for agentic coding specifically

Agentic-coding loops are not bursty. A typical Claude Code or aider session generates 30-100 tokens, waits for tool execution (1-30s), generates 30-100 tokens, etc. Mobile thermals cool slightly during the tool-execution wait, but discrete laptop GPUs maintain temperature.

The RTX 4050 hold-at-peak behavior makes laptop dGPU the strictly-better deployment option for agentic-coding loops compared to NPU-bound or phone-bound deployments, even at the same nominal tok/s. Variance kills agentic UX.

## Implications for runtime choice

[llama.cpp](../runtimes/llama-cpp.md)'s broad backend support (CUDA, ROCm, Vulkan, Metal, Hexagon, CPU) is the load-bearing reason it dominates: it lets you match the runtime to the hardware's sustained-throughput regime. [vLLM](../runtimes/vllm.md) is CUDA-first; [ExecuTorch](../runtimes/executorch.md) wins on mobile/NPU.

## See Also

- [Runtime Comparison](runtime-comparison.md)
- [Four-GB Budget Math](four-gb-budget-math.md)
- [llama.cpp](../runtimes/llama-cpp.md)
- [ExecuTorch](../runtimes/executorch.md)

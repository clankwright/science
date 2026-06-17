# Mellum2 (JetBrains code MoE)
Vendor: JetBrains | Date: 2026-06 (open-sourced 2026-06-02, Apache-2.0)
URL: https://arxiv.org/abs/2605.31268

- 12B total / 2.5B active (64 experts, 8 active); per-token compute of a 2.5B dense model; 128K context via layer-selective YaRN; ~10.6T pretrain tokens.
- EvalPlus 78.4% (after RL); LiveCodeBench v6 37.2% Instruct / 69.9% Thinking; MultiPL-E (7 langs) 67.1%.
- BFCL v3 66.3 / v4 44.2 (Instruct); BFCL v3 69.4 (Thinking) -- agentic tool-use signal.
- Throughput: 193 tok/s sync (~Qwen2.5-7B); 5,179 tok/s concurrent on one H100 (~21% above Qwen2.5-7B).
- Instruct + Thinking variants.

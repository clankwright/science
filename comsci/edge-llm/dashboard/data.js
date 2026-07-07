// Curated seed data for the edge-LLM benchmark dashboard.
// Hand-verified against sources in ../raw/, benchlm.ai, and vendor release posts.
// approx:true = release date estimated (post-knowledge-cutoff secondary sources).
// Scores are the commonly cited SWE-bench Verified numbers (vendor or benchlm);
// harness/scaffold varies by vendor, so treat cross-lab deltas <2pts as noise.
// scrape.py refreshes scores in live.js; this file only changes by hand.
window.DASH_SEED = {
  updated: "2026-07-07",
  groups: {
    anthropic:  { label: "Anthropic",           closed: true },
    openai:     { label: "OpenAI",              closed: true },
    google:     { label: "Google",              closed: true },
    xai:        { label: "xAI",                 closed: true },
    openLarge:  { label: "Open (>35B)",         closed: false },
    openSmall:  { label: "Open (≤35B, laptop-class)", closed: false }
  },
  // SWE-bench Verified (%).
  swe: [
    { name: "Claude 3.5 Sonnet",     group: "anthropic", date: "2024-10-22", score: 49.0 },
    { name: "Claude 3.7 Sonnet",     group: "anthropic", date: "2025-02-24", score: 62.3 },
    { name: "Claude 4 Sonnet",       group: "anthropic", date: "2025-05-22", score: 72.7 },
    { name: "Claude 4 Opus",         group: "anthropic", date: "2025-05-22", score: 72.5 },
    { name: "Claude 4.1 Opus",       group: "anthropic", date: "2025-08-05", score: 74.5 },
    { name: "Claude Sonnet 4.5",     group: "anthropic", date: "2025-09-29", score: 77.2 },
    { name: "Claude Haiku 4.5",      group: "anthropic", date: "2025-10-15", score: 73.3 },
    { name: "Claude Opus 4.5",       group: "anthropic", date: "2025-11-24", score: 80.9 },
    { name: "Claude Opus 4.6",       group: "anthropic", date: "2026-01-15", score: 80.8, approx: true },
    { name: "Claude Sonnet 4.6",     group: "anthropic", date: "2026-02-15", score: 79.6, approx: true },
    { name: "Claude Opus 4.7 (Adaptive)", group: "anthropic", date: "2026-03-15", score: 87.6, approx: true },
    { name: "Claude Opus 4.8",       group: "anthropic", date: "2026-05-15", score: 88.6, approx: true },
    { name: "Claude Sonnet 5",       group: "anthropic", date: "2026-06-30", score: 85.2 },
    { name: "Claude Fable 5",        group: "anthropic", date: "2026-07-01", score: 95.0, approx: true },
    { name: "Claude Mythos 5",       group: "anthropic", date: "2026-07-01", score: 95.5, approx: true },
    { name: "o3-mini",               group: "openai",    date: "2025-01-31", score: 49.3 },
    { name: "GPT-4.1",               group: "openai",    date: "2025-04-14", score: 54.6 },
    { name: "o3",                    group: "openai",    date: "2025-04-16", score: 69.1 },
    { name: "GPT-5",                 group: "openai",    date: "2025-08-07", score: 74.9 },
    { name: "GPT-5.1-Codex-Max",     group: "openai",    date: "2025-11-19", score: 77.9 },
    { name: "GPT-5.2",               group: "openai",    date: "2025-12-11", score: 80.0 },
    { name: "GPT-5.3 Codex",         group: "openai",    date: "2026-02-15", score: 85.0, approx: true },
    { name: "Gemini 2.5 Pro",        group: "google",    date: "2025-03-25", score: 63.8 },
    { name: "Gemini 3 Pro",          group: "google",    date: "2025-11-18", score: 76.2 },
    { name: "Grok Code Fast 1",      group: "xai",       date: "2025-08-26", score: 70.8 },
    { name: "Grok 4.20",             group: "xai",       date: "2026-04-15", score: 76.7, approx: true },
    { name: "DeepSeek V3",           group: "openLarge", date: "2024-12-26", score: 42.0 },
    { name: "DeepSeek R1",           group: "openLarge", date: "2025-01-20", score: 49.2 },
    { name: "DeepSeek R1-0528",      group: "openLarge", date: "2025-05-28", score: 57.6 },
    { name: "Kimi K2 Instruct",      group: "openLarge", date: "2025-07-11", score: 65.8 },
    { name: "Qwen3-Coder-480B-A35B", group: "openLarge", date: "2025-07-22", score: 69.6 },
    { name: "GLM-4.5",               group: "openLarge", date: "2025-07-28", score: 64.2 },
    { name: "DeepSeek V3.1",         group: "openLarge", date: "2025-08-21", score: 66.0 },
    { name: "DeepSeek V3.2-Exp",     group: "openLarge", date: "2025-09-29", score: 67.8 },
    { name: "GLM-4.6",               group: "openLarge", date: "2025-09-30", score: 68.0 },
    { name: "MiniMax M2",            group: "openLarge", date: "2025-10-27", score: 69.4 },
    { name: "Kimi K2 Thinking",      group: "openLarge", date: "2025-11-06", score: 71.3 },
    { name: "Kimi K2.5",             group: "openLarge", date: "2025-11-15", score: 76.8, approx: true },
    { name: "GLM-4.7",               group: "openLarge", date: "2025-12-15", score: 73.8, approx: true },
    { name: "Qwen3.5 397B",          group: "openLarge", date: "2026-02-15", score: 76.2 },
    { name: "Qwen3.5-122B-A10B",     group: "openLarge", date: "2026-02-24", score: 72.0 },
    { name: "GLM-5",                 group: "openLarge", date: "2026-04-15", score: 77.8, approx: true },
    { name: "DeepSeek V4 Flash",     group: "openLarge", date: "2026-05-15", score: 73.7, approx: true },
    { name: "DeepSeek V4 Pro (Max)", group: "openLarge", date: "2026-05-15", score: 80.6, approx: true },
    { name: "Qwen3.7 Max",           group: "openLarge", date: "2026-05-20", score: 80.4 },
    { name: "MiniMax M3",            group: "openLarge", date: "2026-06-01", score: 80.5, approx: true },
    { name: "Ornith-1.0-397B",       group: "openLarge", date: "2026-06-01", score: 82.4, approx: true },
    { name: "Kimi K2.6",             group: "openLarge", date: "2026-06-15", score: 80.2, approx: true },
    { name: "SWE-agent-LM-32B",      group: "openSmall", date: "2025-04-30", score: 40.2 },
    { name: "Devstral Small 24B",    group: "openSmall", date: "2025-05-21", score: 46.8 },
    { name: "Devstral Small 1.1",    group: "openSmall", date: "2025-07-10", score: 53.6 },
    { name: "Qwen3-Coder-30B-A3B",   group: "openSmall", date: "2025-07-31", score: 51.6 },
    { name: "KAT-Dev-32B",           group: "openSmall", date: "2025-10-01", score: 62.4, approx: true },
    { name: "Qwen3.5-27B",           group: "openSmall", date: "2026-02-24", score: 72.4 },
    { name: "Qwen3.5-35B-A3B",       group: "openSmall", date: "2026-02-24", score: 69.2 },
    { name: "SWE-TRACE Qwen3-4B",    group: "openSmall", date: "2026-04-15", score: 40.7 },
    { name: "SWE-HERO-7B",           group: "openSmall", date: "2026-04-15", score: 52.7 },
    { name: "SWE-HERO-32B",          group: "openSmall", date: "2026-04-15", score: 62.2 },
    { name: "SWE-TRACE 30B-A3B",     group: "openSmall", date: "2026-04-15", score: 71.2 },
    { name: "Qwen3.6-35B-A3B",       group: "openSmall", date: "2026-04-20", score: 73.4, approx: true },
    { name: "Qwen3.6-27B",           group: "openSmall", date: "2026-04-20", score: 77.2, approx: true },
    { name: "Ornith-1.0-9B",         group: "openSmall", date: "2026-05-15", score: 69.4, approx: true },
    { name: "Ornith-1.0-35B",        group: "openSmall", date: "2026-05-15", score: 75.6, approx: true }
  ],
  // BFCL v3 overall (%). Edge-class tool calling; GLM-4.5 is the large-model reference.
  bfcl: [
    { name: "GLM-4.5 (355B ref)",    group: "openLarge", date: "2025-07-28", score: 77.8 },
    { name: "Nemotron-3-Nano-4B",    group: "openSmall", date: "2026-03-15", score: 61.1 },
    { name: "LFM2.5-8B-A1B",         group: "openSmall", date: "2026-05-28", score: 64.8 },
    { name: "Mellum2 (12B-A2.5B)",   group: "openSmall", date: "2026-06-10", score: 66.3, approx: true },
    { name: "LFM2.5-230M",           group: "openSmall", date: "2026-06-25", score: 43.3 }
  ],
  // LiveCodeBench v6 (%). Small/edge models only.
  lcb: [
    { name: "Nemotron-3-Nano-4B",    group: "openSmall", date: "2026-03-15", score: 51.8 },
    { name: "Gemma 4 E4B",           group: "openSmall", date: "2026-04-02", score: 52.0 },
    { name: "Gemma 4 26B-A4B",       group: "openSmall", date: "2026-04-02", score: 77.1 },
    { name: "Gemma 4 31B",           group: "openLarge", date: "2026-04-02", score: 80.0 },
    { name: "Mellum2 (Thinking)",    group: "openSmall", date: "2026-06-10", score: 69.9, approx: true }
  ]
};

# OpenHands May 2026 update -- local LLM profiles, /model switching, sub-agent delegation
Vendor: OpenHands (All Hands AI) | Date: 2026-05
URL: https://www.openhands.dev/blog/openhands-product-update---may-2026

- Published May 20 2026; Local GUI adds saved reusable LLM profiles + /model command + inline profile switcher.
- Sub-agent delegation via TaskToolSet; inline critic/verification display (helps small-model reliability).
- Docs (May 21 2026) recommend Qwen3.6-35B-A3B as first local model; served via LM Studio/Ollama/vLLM/SGLang.
- For models lacking native function calling, serializes tools into a structured prompt and regex-parses responses (fallback tool-use path).
- LiteLLM 1.83.14, lxml 6.1.0 bumps.

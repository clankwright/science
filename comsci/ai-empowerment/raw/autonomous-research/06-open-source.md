# Open-source autonomous research agents

The open-source ecosystem covers most of what the commercial agents do, at the cost of self-hosting and bring-your-own-API-keys. As of May 2026 there are 10+ credible projects.

## GPT Researcher

- **Repo:** https://github.com/assafelovic/gpt-researcher
- **Site:** https://gptr.dev/
- **License:** Apache 2.0

Architecture: a "planner" agent generates research questions; "execution" agents gather information; a "publisher" stitches the report. Supports any LLM provider (OpenAI, Anthropic, Groq, Llama 3, HF) and any search API (Google, Bing, Tavily, DuckDuckGo).

- 2K+ word reports, breaks single-LLM context limits by chunking.
- Average run: ~2 minutes, ~$0.005 per task with cheap models.
- #1 on Carnegie Mellon's DeepResearchGym benchmark among open systems.
- Exports to PDF, Word, Markdown, JSON, CSV.

The most production-ready open option for general-purpose web research. Active community, regular releases.

## Stanford STORM

- **Repo:** https://github.com/stanford-oval/storm
- **Project:** https://storm-project.stanford.edu/research/storm/
- **Paper:** https://arxiv.org/pdf/2402.14207 (NAACL 2024)

Synthesis of Topic Outlines through Retrieval and Multi-perspective Question Asking. From Stanford's Open Virtual Assistant Lab. Generates Wikipedia-style long-form articles from scratch.

Two technical innovations:

1. **Perspective-guided question asking.** Surveys existing articles on similar topics to discover the diverse angles a topic should cover, then uses those perspectives to drive research questions.
2. **Simulated conversation.** Models a Wikipedia writer asking a topic expert (grounded in retrieved sources) follow-up questions.

In human evaluation by experienced Wikipedia editors, STORM articles were judged 25% more organized and 10% broader in coverage than baseline RAG. The strongest open option when the goal is a structured encyclopedia-style article rather than a punchy report.

## HuggingFace Open Deep Research

- **Repo:** https://github.com/huggingface/smolagents/tree/main/examples/open_deep_research
- **Blog:** https://huggingface.co/blog/open-deep-research

Built in 24 hours after OpenAI's Deep Research launch (Feb 2025) as a public reproduction. Uses the smolagents agent framework + o1 + open browsing tools.

- 55% on GAIA validation (vs OpenAI DR's 67%) — best open submission and best pass@1 on the leaderboard.
- Demonstrates the agentic-framework half of Deep Research is now commodified; the gap is mostly model-side post-training.

## Other notable open projects

- **Together AI Open Deep Research.** Together's hosted reference implementation.
- **Open Deep Search** (paper https://huggingface.co/papers/2503.20201). Reasoning-agent search democratization paper, March 2025.
- **Tongyi DeepResearch** (Alibaba). Open-source from the Tongyi team.
- **Karpathy's autoresearch.** AI agents running research on nanochat training — narrow but illustrative of the agent-as-experimentalist direction.

## What's missing in open source

- Polished UI / consumer onboarding. Most are CLI or notebook.
- Source ranking that matches Perplexity's quality.
- Private-data integration matching Claude's Workspace coverage.
- Long autonomous runs match OpenAI DR's depth — open agents tend to terminate earlier.

## Sources

- https://github.com/assafelovic/gpt-researcher
- https://github.com/stanford-oval/storm
- https://huggingface.co/blog/open-deep-research
- https://github.com/huggingface/smolagents/tree/main/examples/open_deep_research
- https://www.together.ai/blog/open-deep-research
- https://huggingface.co/papers/2503.20201
- https://tongyi-agent.github.io/blog/introducing-tongyi-deep-research/
- https://huggingface.co/posts/Kseniase/947704683052150

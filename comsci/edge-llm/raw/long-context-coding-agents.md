# Coding Agents are Effective Long-Context Processors

**Source:** arXiv:2603.20432 (https://arxiv.org/abs/2603.20432)
**Date:** March 2026
**Status:** late-2026 long-context paper

## Core claim

Off-the-shelf frontier coding agents, given filesystem tools, beat published long-context SOTA by 17.3% average across long-context reasoning, RAG, and open-domain QA over corpora up to 3T tokens. Externalize long-context processing from attention into explicit file-system manipulation by the agent.

## Implication

Small-model + competent harness + filesystem tools beats large-model + 1M-token attention. Validates the 4 GB-VRAM bet: a 3-7B coder with `read`, `grep`, `glob`, `sed` tools handles unbounded codebases without long-context attention.

## Related

- Recursive Language Models (RLM): treat input as external Python REPL environment.
- MiMo-V2.5-Pro sliding-window architecture: 6:1 ratio sliding/global, ~7x KV reduction.

## Relevance to 4 GB edge target

The most important paper for the wiki's stated mission. Argues the agentic-coding bet is structural, not just bandwidth-limited: the harness is the long-context system, not the model.

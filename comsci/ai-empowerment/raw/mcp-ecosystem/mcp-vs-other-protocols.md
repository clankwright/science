# MCP vs Other Protocols (Why MCP Won)

## What it is
A short history of why MCP beat ChatGPT plugins, OpenAI function calling, and LangChain's tool abstraction to become the cross-vendor standard between November 2024 and Q1 2026.

## The contenders

### ChatGPT plugins (2023, deprecated 2024)
OpenAI's first attempt. Each plugin: an OpenAPI spec hosted at a URL, a manifest file, ChatGPT-only consumption. Required OpenAI to approve each plugin. Stateless request-response only, no resources, no prompts, no two-way streaming. Killed quietly in mid-2024 because integrations did not scale: plugin authors had to maintain separate wrappers per AI vendor.

### OpenAI function calling (2023+)
A model capability, not a protocol. The developer writes JSON schemas in their own code; the model decides when to emit function-call arguments. Excellent within one application; provides nothing for *discovering* tools across applications. Function calling and MCP coexist: under the hood MCP servers' tools become function-call entries the model picks from.

### LangChain tools (2022+)
A developer-facing framework abstraction: a `Tool` class in Python or JS that wraps any callable. Excellent for building agents inside LangChain. Provides nothing for *agents in other frameworks* or for clients (like a chat app) to discover tools at runtime. LangChain shipped an MCP adapter in 2025: any MCP server can be loaded as a LangChain tool.

### MCP (2024+)
Model-facing standard. Servers describe their capabilities (tools, resources, prompts) in JSON-RPC. Any compliant client discovers them at runtime. Open source, vendor-neutral, governed by Linux Foundation since December 2025.

## Why MCP won

1. **Open + cross-vendor**: Plugins were ChatGPT-only; MCP runs in Claude, ChatGPT, Gemini, Cursor, Cline, Zed, JetBrains, VS Code, Copilot Studio.
2. **Right level of abstraction**: Function calling is per-app; LangChain is per-framework; MCP is at the model/client level where the value compounds.
3. **Three primitives, not just tools**: Resources (data) and Prompts (templates) are missing in plugins and function calling. Resources let an agent read a file or DB row as context without "calling a tool"; prompts let users invoke saved workflows.
4. **Two-way streaming + sampling**: MCP servers can call back into the client's model. Plugins were strict request-response.
5. **Excellent spec**: The MCP spec is detailed enough that independent implementations (Smithery, Composio, Glama) interoperate. ChatGPT plugin spec was thin.
6. **Anthropic open-sourced everything early**: SDKs in Python, TypeScript, Java, Go, C#, Kotlin, Swift, Rust by mid-2025. OpenAI's adoption in March 2025 sealed it.
7. **Network effects**: 97M monthly SDK downloads by March 2026 (vs 100K at launch). Past a certain registry size, no one builds a new tool integration in any other format.

## What MCP does not solve
- Agent-to-agent orchestration (Google's A2A protocol layered on top, December 2025).
- Long-running asynchronous workflows (added in November 2025 spec).
- Identity and fine-grained permissions across multiple servers (still uneven; OAuth 2.1 with PKCE required since November 2025 but adoption lags).
- Tool name collisions when many servers expose `search` or `list_items`.

## Specific unlocks
- "Pick my client by personal preference, not tool ecosystem" — the same MCP server you wrote for Claude works in ChatGPT and Cursor unchanged.
- "LangChain or LlamaIndex agents inherit MCP for free" — the adapters bridge the gap.
- "Function calling no longer locks you into one vendor's tool format" — MCP serves as the tool-discovery layer, function calling stays as the per-call mechanism.

## Sources
- https://www.latent.space/p/why-mcp-won
- https://thenewstack.io/why-the-model-context-protocol-won/
- https://huggingface.co/blog/Kseniase/mcp
- https://www.ikangai.com/model-context-protocol-comparison-mcp-vs-function-calling-plugins-apis/
- https://docs.gostoa.dev/blog/mcp-vs-openai-function-calling-vs-langchain
- https://www.merge.dev/blog/model-context-protocol-alternatives

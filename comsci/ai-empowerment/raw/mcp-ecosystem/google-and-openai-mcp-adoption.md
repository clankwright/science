# Google, OpenAI, and Microsoft MCP Adoption

## What it is
The story of how MCP went from Anthropic-only to industry-wide between March 2025 and April 2026. Once OpenAI signed on, MCP became the de-facto standard.

## Timeline of frontier-lab adoption
- **Mar 2025**: OpenAI adopts MCP across Agents SDK, Responses API, and ChatGPT desktop. Sam Altman's blog post is the moment "MCP won."
- **Apr 2025**: ChatGPT "Connectors" feature launches with MCP backing.
- **Sep 2025**: Microsoft ships MCP support in Copilot Studio and Azure AI Foundry preview.
- **Dec 2025**: Google launches fully managed remote MCP servers for Google Maps, BigQuery, Compute Engine, GKE. Cloud Run, Cloud Storage, AlloyDB, Cloud SQL, Spanner, Looker, Pub/Sub on roadmap. Anthropic donates MCP to Linux Foundation's Agentic AI Foundation alongside Block, OpenAI, AWS, Google, Microsoft.
- **Dec 17, 2025**: ChatGPT renames Connectors to "Apps." Apps SDK launches (MCP + UI extensions).
- **Mar 2026**: Google ADK (Agent Development Kit) hits stable v1.0 across Python, TypeScript, Go, Java, all with MCP support.
- **Apr 22, 2026**: Google Cloud Next: Vertex AI rebranded as Gemini Enterprise Agent Platform, MCP fully integrated, A2A (agent-to-agent) protocol layered on top of MCP.

## Specific unlocks
- "Same MCP server, every chat app" — a Notion or Postgres MCP server you wrote works identically in Claude, ChatGPT, Cursor, Cline, Windsurf, Zed, JetBrains AI, Vercel AI SDK, Gemini Enterprise.
- ChatGPT Apps go beyond plain MCP: a server can ship UI components (cards, forms, widgets) that render inside the ChatGPT message. The first cross-vendor "AI app store" pattern.
- Google's hosted remote MCP servers mean you can connect Claude or Cursor to BigQuery without running anything yourself: paste a URL, OAuth in, query.
- Microsoft's Foundry MCP Server lets Copilot Studio agents call Azure AI Foundry tools (deploy a model, run an eval) and vice versa.

## Pre-AI baseline
Pre-MCP, OpenAI's plugins (deprecated mid-2024) were ChatGPT-only. Google had nothing comparable. Microsoft Copilot used custom Skills/Power Platform connectors. Each was a walled garden. A "Gmail integration for ChatGPT" did not work in Claude. Now it does.

## Cost / access
- ChatGPT Apps: included in ChatGPT Plus/Business/Enterprise/Edu plans.
- Google managed MCP servers: standard GCP usage pricing for the underlying service (BigQuery query bytes, etc.).
- Microsoft Foundry MCP: included with Azure AI Foundry preview, free during preview.
- All clients (ChatGPT desktop, Claude Desktop, Cursor, etc.) have free tiers that connect to MCP servers.

## Maturity
Production-ready in OpenAI, Anthropic, Google, Microsoft. Cross-vendor compatibility is real but rough at edges: ChatGPT's Apps SDK extends MCP with UI primitives that other clients ignore; Google's A2A layer adds agent orchestration that Anthropic does not yet support. The protocol committee under Linux Foundation governance is the convergence point.

## Sources
- https://developers.openai.com/api/docs/mcp
- https://openai.com/index/introducing-apps-in-chatgpt/
- https://help.openai.com/en/articles/12584461-developer-mode-apps-and-full-mcp-connectors-in-chatgpt-beta
- https://cloud.google.com/blog/products/ai-machine-learning/the-new-gemini-enterprise-one-platform-for-agent-development
- https://devblogs.microsoft.com/foundry/announcing-foundry-mcp-server-preview-speeding-up-ai-dev-with-microsoft-foundry/
- https://nathanlasnoski.com/2025/09/08/azure-ai-foundry-and-copilot-studio-mcp-integration/

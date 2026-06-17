# Building Your Own MCP Server

## What it is
Wrapping any script, API, or local resource as an MCP server so any MCP-aware client (Claude Desktop, ChatGPT, Cursor) can use it. Official SDKs in Python, TypeScript, Java, Go, C#, Kotlin, Swift, Rust. The Python and TypeScript SDKs are the most polished; FastMCP (Python) is what most individuals use because it generates the MCP boilerplate from type hints.

## What "build" actually looks like (Python FastMCP)
```python
from fastmcp import FastMCP

mcp = FastMCP("my-server")

@mcp.tool()
def get_weather(city: str) -> str:
    """Return current temperature for the given city."""
    return f"It's 22C in {city}."

if __name__ == "__main__":
    mcp.run()  # stdio by default
```
Add this as a `command` entry in `claude_desktop_config.json`, restart Claude. The model now has a `get_weather` tool. Type hints become the JSON schema; the docstring becomes the tool description. Total code: 8 lines.

## TypeScript equivalent
`@modelcontextprotocol/sdk` plus Zod for validation. Slightly more verbose but same shape. Required `tsconfig`: `module: NodeNext`, `moduleResolution: NodeNext`.

## Specific unlocks
- "An afternoon to wrap my company's internal API" — generate Pydantic types from your OpenAPI spec, decorate each endpoint as a tool, ship.
- "Make my old Bash scripts agent-callable" — wrap each script in a `subprocess.run` tool. Now Claude can run them by name.
- "Expose a local Postgres view" — 20 lines to expose a parameterized read-only query as a tool with typed args.
- "Build it once, every team member uses it" — commit `.mcp.json` referencing your server; teammates pull the repo and Claude Code picks it up.
- "Convert any CLI to MCP in 30 minutes" — many users wrap `gh`, `aws`, `kubectl` as MCP servers so the agent doesn't have to fight the shell.

## Transports
- **stdio**: subprocess, default for local dev. Simplest. Used by every Anthropic reference server.
- **Streamable HTTP**: the production transport since the 2025-03-26 spec. Replaces SSE. Required for remote/hosted servers.
- **WebSocket**: less common, used by some real-time servers.

## Pre-AI baseline
Pre-MCP, "let an AI use my custom thing" required prompt engineering ("here's what my API does, please format calls like..."), JSON Schema embedded in your system prompt, and per-vendor tool wiring (LangChain Tool wrapper, OpenAI function schema, Anthropic tool spec, all slightly different). MCP collapses to one wrapper that works everywhere.

## Cost / access
Free. SDKs MIT-licensed. `pip install fastmcp` or `npm install @modelcontextprotocol/sdk`. Hosting a remote MCP server costs whatever your VPS costs (Smithery offers free hosting tier).

## Common pitfalls
- For Claude Desktop: the launched subprocess gets a minimal PATH; use absolute paths to interpreters.
- Tool descriptions matter: the model picks tools by name + description. "Bad" descriptions tank tool selection accuracy. The arXiv paper "MCP Tool Descriptions Are Smelly" quantified this.
- Long-running tools used to block; the November 2025 spec added async tasks for jobs >30s.
- Don't expose `eval` or shell-execution tools without explicit human-in-the-loop confirmation.

## Maturity
Production-grade SDKs. Python FastMCP is the most popular. Full debugging tooling (`mcp inspector`) exists for stepping through tool calls during development. An afternoon is realistic for a first useful server; a weekend for a production-quality one.

## Sources
- https://modelcontextprotocol.io/docs/develop/build-server
- https://github.com/modelcontextprotocol/typescript-sdk
- https://www.freecodecamp.org/news/how-to-build-a-custom-mcp-server-with-typescript-a-handbook-for-developers/
- https://hackteam.io/blog/build-your-first-mcp-server-with-typescript-in-under-10-minutes/
- https://particula.tech/blog/mcp-developer-guide
- https://developers.openai.com/apps-sdk/build/mcp-server

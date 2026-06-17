# Cursor / Claude Code in "Build a New App" Mode

**Date verified:** 2026-05-03

## Why these belong here

Cursor (Anysphere) and Claude Code (Anthropic) are primarily agentic-coding tools for existing developers working in existing codebases. But both are routinely used to start greenfield apps from scratch via prompt, and Karpathy's original "vibe coding" tweet specifically named **Cursor Composer w/ Sonnet** plus **SuperWhisper** as his setup.

The use case overlaps with Bolt / Lovable / v0 but the user profile is different: developer who skips setup vs. non-developer who skips code.

## How the workflow looks

A "structured vibe coding" workflow has emerged on dev.to / Lenny / blog posts:

1. **Vibe-PM phase.** Talk to the model; produce a PRD and a step-by-step plan as files in the repo.
2. **Scaffold phase.** Pick a full-stack starter (Wasp, Next.js + shadcn, Astro, Expo). Let the agent fill it in.
3. **Slice-by-slice implementation.** Feature-at-a-time, with the agent running tests and fixing breaks.
4. **Voice input** (Karpathy's setup): SuperWhisper -> Composer; spoken changes like "decrease padding" without touching the keyboard.

Reported result from multiple bloggers: complete web apps in a single afternoon, checking the agent's work every 30-60 seconds.

## Access & cost

- **Cursor:** $20/mo Pro, $40/mo Ultra (more requests), Business $40/user/mo. Free tier limited.
- **Claude Code:** $20/mo Pro, $100/mo Max, $200/mo Max (5x usage), or pay-as-you-go on the API. CLI; runs locally; uses your shell.

Cost tier: **low-to-mid** subscription; free tier exists for both.

## Maturity

**Production.** Cursor and Claude Code are used by paying engineering teams daily. For *greenfield* prompt-only build, they are slightly less polished than Bolt or Lovable (no built-in deploy target, no automatic DB provisioning) but the resulting code is more maintainable past the prototype stage.

## Distinctive trait

The model has direct access to your local machine, your shell, your real toolchain. No sandbox escape needed for native deps, system tools, embedded hardware. Greenfield builds in Cursor / Claude Code can include things Bolt cannot: a Tauri desktop app, an MCP server, a Raspberry Pi controller, a CLI tool.

## Target user

Developers, including senior engineers using AI to skip greenfield setup tedium. Also: technically-confident non-CS people (data analysts, scientists) who want full control of the resulting code.

## Sources

- https://x.com/karpathy/status/1886192184808149383
- https://dev.to/wasp/a-structured-workflow-for-vibe-coding-full-stack-apps-352l
- https://www.fourzerothree.in/p/cursor-setup-workflow
- https://medium.com/@brahimg/vibe-coding-in-action-building-an-ai-app-from-scratch-using-cursor-and-gemma-dff44cb999c4

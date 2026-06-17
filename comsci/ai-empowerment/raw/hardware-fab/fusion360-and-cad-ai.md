# Fusion 360 + Autodesk Assistant + Claude/Cursor scripting

## What it is

Autodesk Fusion 360 is the dominant cloud-connected mechanical CAD/CAM tool for hobbyists and small shops. Autodesk Assistant is its in-app AI agent. Combined with external MCP bridges (Claude Desktop, Cursor) that drive the Fusion Python API, the practical effect is: describe a part in English, get a parametric feature tree.

## Specific unlocks

- April 2026: Autodesk Assistant writes and executes Python scripts against the Fusion API in response to plain-language requests inside the workflow. "Make me a parametric phone stand for an iPhone 16 Pro Max with a 70 degree viewing angle" produces a model with editable dimensions.
- March 2026: Assistant extends to the Manufacturing workspace. Generate toolpaths, batch-rename operations, select tools, ask context-specific CAM questions. CNC setup that took an afternoon now takes a prompt.
- Generative design optimizer takes load conditions + manufacturing constraints (3D print, CNC, casting) and returns multiple weight-optimized topologies.
- Image generation in Assistant produces render-like visuals of the design directly.
- External: `fusion360-mcp-server` and `fusion360-claude-ultimate` projects expose 13+ Fusion tools (sketching, extrude, fillet, screenshot for visual verification) to Claude/Cursor over MCP. Claude can iterate on a design, take a screenshot, see it failed, fix.
- Nicolas Chourrout published "I Taught Claude to Design 3D-Printable Parts" (March 2026, Towards AI) walking through the workflow.

## Pre-AI baseline

Learning Fusion 360 to the point of building parametric assemblies took ~80-200 hours of YouTube tutorials. Python API scripting added another 40+ hours. Generative design existed but required setting up load cases, materials, and constraints by hand, often per-iteration.

## Hardware / cost

- Fusion 360 Personal: free for non-commercial.
- Commercial: $545/yr.
- Autodesk Assistant: bundled with Fusion 360 subscriptions.
- Claude Pro $20/mo or Claude Code subscription.
- Local hardware: any modern laptop. Fusion runs on macOS and Windows.

## Maturity

Production for Assistant inside Fusion. The MCP bridges are early/community and threading-fragile (Fusion's Python API is single-threaded; bridges marshal calls through Fusion's CustomEvent system). Expect occasional crashes when Claude generates API calls that don't exist or hit deprecated endpoints. Iteration loop works but isn't headless-CI grade.

## Sources

- https://www.autodesk.com/products/fusion-360/blog/april-2026-product-update-whats-new/
- https://www.autodesk.com/products/fusion-360/blog/march-2026-product-update-whats-new/
- https://www.autodesk.com/products/fusion-360/blog/autodesk-assistant-ai/
- https://github.com/Misterbra/fusion360-claude-ultimate
- https://github.com/ndoo/fusion360-mcp-bridge
- https://github.com/mycelia1/fusion360-mcp-server
- https://github.com/Joe-Spencer/fusion-mcp-server
- https://pub.towardsai.net/i-taught-claude-to-design-3d-printable-parts-heres-how-675f644af78a

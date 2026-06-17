# Aggregators, integrations, and the open MCP layer

## What it is

The most underappreciated unlock: by 2026 you don't need any specific vendor's coach because you can route your wearable, lab, and nutrition data into any LLM client via either an aggregator app or an open Model Context Protocol (MCP) server. This breaks the vendor lock-in that defined the 2010s health-data world.

## Specific unlocks

Bevel:
- Founded ~2023, $10M Series A from General Catalyst Oct 2025, >100k DAU, 8x growth in past year.
- Pulls Apple Health (Watch + iPhone), Dexcom, Libre CGMs, Garmin in development. Wearables + bloodwork + lifestyle log → personalized recs.
- Bevel Intelligence learns how the individual responds to stress/movement/nutrition over time.
- App Store positioning: "AI Health Companion" rather than fitness or sleep tracker.

Atria Institute:
- High-end concierge medical service (Soros-funded), in-house clinicians + AI-enhanced analytics + advanced imaging. The luxury end of the aggregator concept ($10k+/yr level), included here for category breadth.

Superpower (covered in blood-panels page):
- Acts as both a blood-panel service and an aggregator: bundles concierge doctor access with biomarkers and ingest of wearable streams.

Welltory, Athlytic, Sensai, Tonal Strength Score apps:
- Read-only aggregators on top of HealthKit/Health Connect that produce daily narrative summaries. Cheap, useful as second opinion to Whoop/Oura.

ChatGPT Health (OpenAI, 2025):
- Dedicated AI advisor that connects Apple Health, nutrition apps, and lab reports inside the ChatGPT app.

## The MCP unlock (the meta-pattern)

Model Context Protocol = standardization layer that lets any LLM access health data from any source through a uniform interface. Implications:

- Open Wearables (open-source, evolved from Apple Health MCP Server): self-hosted, unifies Apple Health + Garmin + Polar + Suunto + Whoop, exposes data to Claude/Cursor/any MCP client.
- Spike API: commercial MCP-style aggregator targeting developers.
- Migrating models is now a config change, not a re-architecture. If GPT-5 ships and Claude prices drop, your health-coach setup follows you.

This is the genuinely new pattern post-2024. Before MCP and before HealthKit reaching critical-mass third-party adoption, vendor-locked dashboards were the only way to consume your own data. Now a technically-comfortable user can:
1. Export Apple Health data (15 min).
2. Spin up Open Wearables MCP server locally.
3. Point Claude Desktop at it.
4. Have a longitudinal coach with no vendor in the loop, no subscription beyond the LLM.

## Pre-AI baseline

Per-vendor lock-in. Whoop data only useful inside Whoop app. Blood panel only useful in physician's hands. Aggregating your own data required scripting + manually managing CSV exports. The synthesis layer was a coach you paid by the hour or didn't have.

## Cost / access

Bevel free tier + paid (~$19/mo). ChatGPT Health bundled with ChatGPT Plus $20/mo. Open Wearables free (self-hosted). Atria $10-25k+/yr concierge.

## Maturity

Where it works: HealthKit/Health Connect as data backbone is mature and reliable. Bevel-style consumer aggregators are early but real (100k+ DAU is meaningful). MCP is genuinely working today for technical users.

Where it's questionable: Garmin and Whoop data export remain partially gated by their APIs (Whoop in particular has historically restricted bulk export). Aggregators that promise "all your data in one place" deliver "most of it" in practice.

Where it's marketing: the consumer-aggregator value proposition ("your health AI butler") oversells what's technically just better data piping plus a chat interface. The interesting unlock is that the tech now exists, not that any specific brand has won the category.

The 12-month-out question is whether one of the aggregators or one of the vendor coaches consolidates the category, or whether MCP keeps it fragmented and user-routable indefinitely. Fragmentation favors users.

## Sources

- [Bevel - The Connected Health Coach](https://www.bevel.health/)
- [Bevel raises $10M Series A from General Catalyst (TechCrunch Oct 2025)](https://techcrunch.com/2025/10/30/bevel-raises-10m-series-a-from-general-catalyst-for-its-ai-health-companion/)
- [The Atria Health Institute](https://www.atria.org/institute/)
- [Health Data AI Integration: ChatGPT Health & MCP Agents (Spike API)](https://www.spikeapi.com/blog/health-data-ai-integration-chatgpt-health)
- [Apple Health MCP Server / Open Wearables (themomentum.ai)](https://www.themomentum.ai/open-source/mcp-apple-health-server)
- [Why Health Apps Need Native Access to Wearable Data](https://www.themomentum.ai/blog/why-health-apps-need-native-access-to-wearable-data)
- [Apple HealthKit docs](https://developer.apple.com/documentation/healthkit)
- [The Illusion of Integration of Wearables Data (INNOVA People April 2026)](https://www.innovapeople.com/2026/04/27/the-illusion-of-integration-of-wearables-data/)

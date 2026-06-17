---
id: healthkit-mcp-pattern
title: "HealthKit + MCP Pattern"
kind: tool
vendor: pattern (Apple HealthKit, Google Health Connect, MCP servers, Claude/ChatGPT)
access: free (with LLM subscription)
maturity: beta
cost_tier: low ($20/mo for LLM)
year_first_public: 2025 (MCP standardization)
last_verified: 2026-05-04
---

# HealthKit + MCP Pattern

> **Summary:** The vendor-free meta-coach. Apple Health export (or Google Health Connect) plus an Open Wearables MCP server plus Claude Desktop or ChatGPT desktop is a longitudinal coach with no health-vendor in the loop and no subscription beyond the LLM. Almost no consumer marketing surfaces this; it is the most under-appreciated unlock in the category.

**Sources:** [[raw/wearable-coaching/ai-coach-aggregators-and-integration.md]]

## What it does

HealthKit (iOS) and Health Connect (Android) consolidate sensor data from any wearable that integrates: Whoop, Oura, Apple Watch, Garmin, Eight Sleep, Stelo, scales, sleep apps. Open-source MCP servers (Open Wearables and others) expose this data to Claude Desktop or ChatGPT desktop. Conversational queries run against the consolidated corpus.

## Access and cost

Free (HealthKit and Health Connect are free; community MCP servers are open source). LLM subscription ($20/mo for Claude or ChatGPT) is the only paid piece. No wearable-vendor coaching subscription required.

## Distinctive trait

Vendor-independence. Whoop Coach only sees Whoop data. Oura Advisor only sees Oura data. The HealthKit + MCP assembly sees everything. For users with multiple sensors, this is the only setup that does cross-source longitudinal analysis.

## Limits

- Setup is technical: MCP server installation, data permissions, prompt engineering.
- Community MCP servers vary in quality and update cadence.
- iOS export is awkward for continuous queries; works best for periodic snapshots.
- LLM context windows still limit how much longitudinal data can be in any one conversation.

## See also

- [Wearable longitudinal coaching](../capabilities/wearable-longitudinal-coaching.md)
- [Personal knowledge management](../capabilities/personal-knowledge-management.md): the conceptual cousin.
- [Claude Projects and Memory](claude-projects-and-memory.md): the persistence layer for an ongoing coach.

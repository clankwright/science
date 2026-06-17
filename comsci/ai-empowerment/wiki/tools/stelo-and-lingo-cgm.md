---
id: stelo-and-lingo-cgm
title: "Stelo and Lingo (OTC CGM)"
kind: tool
vendor: Dexcom (Stelo); Abbott (Lingo)
access: OTC purchase
maturity: production
cost_tier: $89-99/mo
year_first_public: 2024
last_verified: 2026-05-04
---

# Stelo and Lingo (OTC CGM)

> **Summary:** First over-the-counter continuous glucose monitors, both launched in 2024. Stelo (Dexcom) and Lingo (Abbott) made CGM a $89-99/mo Amazon purchase rather than a $200-400/mo Levels or Nutrisense subscription with prescription routing. n=1 metabolic experimentation became a $1k/year hobby instead of a research-lab capability.

**Sources:** [[raw/wearable-coaching/cgm-and-metabolic-coaching.md]]

## What it does

Adhesive sensor on the upper arm, replaced every 14-15 days. Continuous interstitial glucose readings to a phone app. Both apps include some AI overlay for trend interpretation and meal tagging.

## Access and cost

Stelo: ~$89/mo on subscription, $99 single sensor. Lingo: similar pricing. Available on Amazon and direct from manufacturer; no prescription required.

## Distinctive trait

Removed the prescription gatekeeping layer that kept Levels and Nutrisense expensive. For a non-diabetic curious about post-meal glucose response, fasting glucose stability, or the metabolic effect of a specific food, the cost-of-information collapsed. The vendor app is basic; the real workflow is exporting data to an LLM for analysis.

## Limits

- Interstitial glucose lags blood glucose by 5-15 minutes.
- Sensor calibration drift toward end of wear period; first-day data noisy.
- Vendor app AI is shallow; meaningful coaching requires data export.
- For non-diabetics, the clinical evidence that CGM-guided behavior changes hard endpoints is weak.
- Continuous use of a clinical device for non-clinical purposes raises a data-retention question; both vendors retain rights to use data for product improvement.

## See also

- [Wearable longitudinal coaching](../capabilities/wearable-longitudinal-coaching.md)
- [HealthKit + MCP pattern](healthkit-mcp-pattern.md): the data-export-to-LLM workflow.

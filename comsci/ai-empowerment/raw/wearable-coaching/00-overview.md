# Overview: wearable data + longitudinal AI coaching

## What's actually unlocked

The unlock is not the wearable. The unlock is a conversational interpretive layer on top of months or years of biometric data. Pre-2023, a Whoop strap or Oura ring produced graphs that 80% of buyers stopped opening within 6 months. A Function Health blood panel produced a 40-page PDF with 100+ markers that nobody read past page 3. The dashboard was the product, and dashboards do not change behavior.

Post-2023, an LLM with access to the same time series can answer "why did my HRV drop in March," "what behaviors correlate with my best recovery weeks," and "given my ApoB rose 18% in 8 months, what should I change." That is a different category of product. It is a synthesis layer the user could not previously buy without hiring a coach, a doctor, and a data analyst.

## The dashboard-to-coach delta

What changed:
- Conversation over time series. Whoop Coach (Sep 2023, GPT-4 fine-tuned), Oura Advisor (Labs 2024, GA Mar 2025), Bevel (2024 launch, $10M Series A Oct 2025), Superpower AI (2025), Function Health AI explainer.
- Memory across sessions. Oura Advisor's Memories store user context (injury, marathon training, pregnancy) so guidance compounds.
- Multi-source aggregation. Bevel pulls Apple Health + Dexcom CGM + Garmin into one chat. Open Wearables MCP server exposes Apple Health + Garmin + Polar + Suunto + Whoop to any LLM client.
- Natural-language nudges replacing badge gamification.

## The data integration story

The real story of 2024-2026 is that HealthKit and Health Connect became the lingua franca, then MCP started layering on top. ChatGPT Health connects Apple Health, nutrition apps, and lab reports. Open-source MCP servers (Apple Health MCP, Open Wearables) let users feed their full longitudinal corpus to Claude/GPT with no vendor in the middle. This is the meta-unlock: you no longer need any specific vendor's coach, because you can route any vendor's data to any model.

## Evidence for behavior change

Honest answer: weak. The 2024-2026 RCT literature on AI virtual assistants for physical activity (Springer 2025 systematic review, 2,849 studies screened) shows feasibility and engagement, mixed effects on hard endpoints. A 2024 RCT in older adults found no significant MVPA difference for AI chatbot vs. control. Most "X% of Oura Advisor users said it helped" numbers are self-report, not measured behavior change. The placebo of paying attention probably dominates.

## What's real vs. marketed

Real: Whoop Coach answering "should I push hard today" with reference to last 7 days of recovery. Oura Advisor's longitudinal sleep narrative. Function Health/Superpower making blood-panel data conversational. Eight Sleep Autopilot 4.0 closing the loop (sense → adjust thermal environment → re-sense).

Marketed: anything called "AI" that's actually rules-based personalization (most pre-2023 fitness apps relabeled). "AI doctor" claims by anyone non-FDA-cleared. Calorie estimation from photos of mixed dishes (still 30-40% error).

## Files in this directory

01 Whoop Coach. 02 Oura Advisor. 03 Apple Health/Quartz/Mulberry. 04 Garmin and fitness GPTs. 05 MacroFactor and nutrition. 06 Function Health and blood panels. 07 CGM and metabolic. 08 Sleep coaching and Eight Sleep. 09 Mental-health wearables. 10 Evidence for behavior change. 11 Aggregators and integration. 12 Risks and limits.

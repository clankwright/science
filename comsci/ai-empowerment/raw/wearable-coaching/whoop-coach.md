# Whoop Coach

## What it is

A conversational LLM layer inside the Whoop app that takes the strap's continuous HR, HRV, respiratory rate, skin temperature, and sleep-stage data and lets the user ask questions about it in natural language. Launched September 2023 powered by GPT-4 fine-tuned on anonymized Whoop member data and Whoop's proprietary sport-science algorithms. Whoop calls this "a search engine for your body."

## Specific unlocks

- "Should I do my heavy squat session today?" answered with reference to last night's recovery score, last 7 days of strain, and yesterday's sleep debt, in one sentence instead of three dashboards.
- Photo-prompted workout building (added 2026): screenshot an Instagram lift routine or a coach's PDF, Whoop parses exercises/sets/reps and schedules them in Strength Trainer, weighting volume against current Recovery.
- Behavior Trends (2026): journal entries (alcohol, late meal, melatonin, magnesium) get correlated against Recovery automatically once you have 5 yes/5 no datapoints in 90 days, giving you a personal n=1 study without setting one up.
- Strain target adjustment based on a goal stated in plain English ("I want to peak for a half marathon Oct 12") rather than a settings menu.
- Conversational sleep diagnosis pointing to specific HRV dips, respiratory-rate drift, or skin-temp anomalies on a given night.

## Pre-AI baseline

Either: a $200/hr human performance coach reading your Whoop dashboard for you weekly; or, more commonly, you stared at the recovery percentage, felt vaguely guilty when it was red, and ignored the rest of the data. The strap collected gigabytes nobody read.

## Cost / access

Whoop 5.0 hardware bundled with subscription. Whoop One $199/yr, Peak $239/yr, Life $359/yr (May 2026 tiers). Coach is included in all tiers. No upfront hardware cost - the strap is "free" with subscription, which is the durable Whoop pricing innovation.

## Maturity

Where it works: short-horizon training decisions ("today is a recovery day"), behavior-correlation surfacing, narrative explanation of a single bad night. Members consistently rate the conversational coach above generic fitness-literature recommendations because it cites their own data.

Where it's marketing: long-horizon periodization (Coach has no model of your race calendar unless you tell it explicitly, and even then it's not a real coach with a plan). "AI" claims about underlying recovery score - the score is a rules-based composite from before LLMs existed.

Where the sensor data is questionable: sleep-stage classification. 2025 polysomnography validation (six wrist wearables, 62 adults) gave Whoop 4.0 a Cohen's kappa of 0.37 for stage scoring. Wake/sleep discrimination is fine (>95% sensitivity). Stage breakdowns are fair-at-best. Coach narrating "you got 22 minutes of REM" is narrating a noisy estimate.

## Sources

- [Whoop x OpenAI case study (Whoop Coach launch)](https://openai.com/index/whoop/)
- [Whoop community: what LLM powers Coach](https://www.community.whoop.com/t/what-llm-are-you-using-to-power-the-in-app-coach/272)
- [Whoop sharpens Strength Trainer with AI workout building (Wareable)](https://www.wareable.com/fitness-trackers/whoop-coach-ai-strength-trainer-workout-builder-update)
- [2026 What's New at Whoop](https://www.whoop.com/us/en/thelocker/2026-whats-new/)
- [Whoop 5.0 review the5krunner Oct 2025](https://the5krunner.com/2025/10/31/2026-whoop-5-0-mg-review-discount-accuracy-strain-recovery-athletes/)
- [Whoop 4.0 PSG validation 2020](https://pubmed.ncbi.nlm.nih.gov/32713257/)
- [6-device wrist-wearable PSG validation 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12038347/)

# Medication reminders and management

## What it is

Networked dispensing hardware plus caregiver dashboards plus, increasingly, LLM-driven adherence interventions. Three layers:

1. **Hardware dispensers**: Hero (countertop, holds 90-day supply across 10 meds, single-button dispense), MedMinder Maya/Jon (locked compartments, automatic dispensing, cellular connection), Hero competitors like Livi, Tricella, Medipense RxPense (pharmacy-fill cartridges).
2. **Cellular pillbox + reminders**: simpler form factor, no auto-dispense, just lid-open detection.
3. **Pharmacy-side adherence packaging**: PillPack (Amazon), Medly, NowRx — pre-sorted blister packs by date/time, mailed monthly. The hardware substitute.

The AI layer (newer, 2024-2026): caregiver-facing LLM summaries of weekly adherence ("mom missed her 8pm metoprolol Tuesday and Thursday this week, both nights after she'd had a phone call with her sister"); contextual nudges ("you usually take your levothyroxine when you have your coffee; you haven't yet today"); integration with Sensi-style ambient monitoring; alerts that trigger only on patterns, not single misses.

## Specific unlocks

- Catch the moment an elder with mild cognitive decline starts double-dosing — Hero's interlock physically prevents dispense if a dose was already taken in the window. The pre-AI baseline was "find the empty pill bottle 5 days early and figure out what happened."
- Get a text "your dad missed his Eliquis last night, that's a stroke risk if it happens twice more this week, here's the prescriber's after-hours line" with the LLM summarizing the clinical stakes in plain English instead of a generic "missed dose" alert.
- Refill automation: Hero re-orders from the pharmacy when it sees the cartridge running low, no human action needed.
- Distinguish "she missed the dose because she was out at lunch" (benign) from "she missed three Sinemet doses and now she can't get up" (Parkinson's emergency) by combining dispenser logs with calendar and ambient signal.
- Cut family-group-chat overhead from "did anyone confirm grandma took her pills today?" to a single dashboard everyone can see.

## Pre-AI baseline

Required: a paid med tech visiting 1-4x/day ($25-30/visit), a family member living in the home, weekly pill-organizer manually filled by family or pharmacist, or — most commonly — nothing structured, leading to the documented baseline that **~50% of older adults are non-adherent to chronic medications**, costing the US health system ~$100-300B/year in avoidable hospitalizations (NEHI estimates).

For complex regimens (10+ daily meds, 6+ dosing times, anticoagulants), unaided adherence is essentially impossible past mild cognitive decline.

## Cost / access

- Hero: $44.99/month with 12-month commitment, or $29.99/month prepaid. AARP discount available. Hardware included in subscription.
- MedMinder: ~$50-65/month depending on plan.
- PillPack/Amazon Pharmacy: free (built into prescription cost), generally accepted by Medicare Part D.
- Most dispensers: not Medicare-reimbursed directly; some Medicare Advantage plans starting to cover.

## Maturity

Hardware: production, mature, several years of deployment. AI summarization layer: 2024-2026, still maturing. The genuinely interesting piece is the integration play — adherence data + ambient sensing + caregiver dashboard + pharmacy refill in one stack. No one has the full stack yet; Hero is closest on the consumer side, Sensi pushing into it from the monitoring side.

Caveat: dispensers help people who can press a button when reminded. They don't help people too cognitively impaired to recognize the alert as theirs. For that population, only a human (paid or family) supervising actual ingestion works.

## Sources
- https://herohealth.com/
- https://herohealth.com/caregivers/
- https://www.theseniorlist.com/medication/dispensers/hero/
- https://www.theseniorlist.com/medication/dispensers/
- https://herohealth.com/aarp/

# Sensi.AI and audio/radar passive elder monitoring

## What it is

Sensi.AI: a small audio-only sensor placed in the rooms of an older adult living at home or in assisted living. No camera, no wearable. The device runs continuous on-device classification of ambient sound and surfaces "care events" (a fall, a distressed cry, a coughing fit, prolonged silence in a room that's normally active, an aide arriving late, an aide spending too little time, a verbal altercation). Called the "24/7 Care Copilot." Now positioned as an "Agentic Operating System for Senior Care," with $98M total raised through a 2025 $45M Series C.

Adjacent: **Cherish Health (Serenity)** — radar instead of audio. mmWave sensor that does multi-room, multi-person fall detection and gait monitoring. $26M raised, no VC, unusual structure. **Samsung SmartThings Family Care** — the same passive-sensing pattern via existing smart-home gear plus AI inference, no new hardware. **MOTITech / Motiview** — Norway/UK, motion-activated reminiscence video for dementia (less ambient monitoring than therapeutic content).

The pattern: **stop asking the elder to wear or click anything**. Instrument the room.

## Specific unlocks

- Get a real-time alert when ambient audio in a parent's home indicates a fall or distress, no camera required.
- Catch a paid aide who is clocked in but actually sat in the kitchen scrolling for 4 hours instead of getting mom out of bed (the "shift fraud" use case Sensi explicitly markets to home-care agencies).
- Detect an emerging UTI from voice changes, atypical bathroom-trip frequency, and night-time vocalizing 48-72h before it would be obvious to a weekly visiting daughter (UTI is a top driver of dementia-symptom flares and ER visits).
- Detect the sound of a verbal threat or abuse from a paid caregiver. Sensi has flagged this as a real use; agencies use it as protection both for the elder and against false elder claims.
- Catch radar-detected gait deceleration (Cherish) weeks before a fall — the slowing pattern is well documented in the geriatrics literature, but no human visiting 1x/week sees it.
- Tell a remote daughter "your mom hasn't gotten out of bed by her usual 7am the last 3 days, here's audio of her calling out" without her needing a video camera that the mother would (rightly) refuse.

## Pre-AI baseline

Required: a paid aide on shift (and trust they're doing the job), an installed video camera (rejected by most elders for dignity reasons), or a wearable pendant the elder routinely takes off. The default was "check on mom by phone every couple days and hope." For institutional placement, was the only way to get continuous monitoring at all.

## Cost / access

Sensi: sold B2B to home care agencies, not direct-to-consumer. Pricing per senior household to the agency is in the ~$50-100/month range; agency may bundle into hourly rate. Cherish Serenity: targeting direct-to-consumer ~$30/month subscription. SmartThings Family Care: bundled into existing Samsung ecosystem, no extra cost. Most are not Medicare-reimbursed yet; Medicare Advantage plans starting to pilot.

## Maturity

Production. Sensi claims deployment with 80% of the largest US home-care networks. Cherish shipping 2025. Evidence base is mostly vendor-reported (claims of reduced 911 calls, faster fall response, agency revenue increases). Not yet RCT-grade. The audio-only privacy posture is the real product moat: families and elders who reject cameras will accept a microphone-only sensor, especially one that processes on-device.

## Sources
- https://www.sensi.ai/
- https://www.sensi.ai/blog/sensi-ai-raises-45m-series-c-extending-its-dominance-of-care-intelligence-in-vertical-ai/
- https://www.calcalistech.com/ctechnews/article/hyawomspex
- https://israel21c.org/an-ai-monitor-that-aims-to-take-care-of-our-elderly-relatives/
- https://www.baselinemag.com/news/cherish-health-raises-26m-for-elder-care-radar-tech/
- https://thenextweb.com/news/samsung-smartthings-family-care-elderly-monitoring-ambient-sensing
- https://itbusinesstoday.com/health-tech/ambient-diagnostics-in-2026-how-passive-sensors-are-reinventing-remote-patient-monitoring/

# Eye-Gaze, Head-Tracking, and Switch Control

## What it is

Hands-free input methods for users who cannot reliably use a keyboard / mouse / touchscreen because of severe motor impairment (ALS, late-stage MS, high-cervical SCI, severe CP, locked-in syndrome). Three input families:

1. **Eye-gaze** (Tobii Dynavox PCEye, EyeTech, Smart Eye, Apple's built-in Eye Tracking on iPadOS 18 / iOS 18+): infrared cameras detect pupil position, user dwells on a target to "click."
2. **Head-tracking / facial gestures** (Smyle Mouse, Glassouse, Apple Head Pointer): webcam tracks head pose; user nods or smiles to click.
3. **Switch control** (single-switch scanning, sip-and-puff, Apple Switch Control): a single physical input cycles through on-screen options; user activates it when the focus is on the desired target.

The 2024-2026 unhobbling: **LLM-driven prediction** dramatically reduces the number of input actions required to compose text or trigger commands.

## Specific unlocks

- **Apple built-in Eye Tracking** (iPadOS 18, 2024+): turns any front-facing-camera iPad/iPhone into an eye-gaze device. **No additional hardware.** Calibrates in seconds. Setup time was a major historical barrier; this collapses it.
- **SpeakFaster (Google + Team Gleason)**: ALS eye-gaze users hit 29-60% above predictive-keyboard text-entry rates by typing initials and letting an LLM expand to phrases (see aac-and-augmentative-communication.md).
- **Predictable + LLM word prediction** (Therapy Box / Tobii Dynavox): on-device LLM word/phrase suggestions tuned to the user's writing history and current conversational topic.
- **Smyle Mouse** (Perceptive Devices): webcam-based head-and-smile mouse for Windows. Click via smile, scroll via brow raise, drag via held smile. **Targets users who don't qualify for or can't afford a Tobii eye-gaze rig** (~$2-5k). 14-day free trial; ~$300 perpetual license. Partners with Tobii Dynavox to bring the same gestures to dedicated SGDs.
- **Switch-control prediction**: traditional row-column scanning for a 50-key keyboard requires up to ~12 switch hits per character; LLM-powered phrase prediction collapses many sentences to 2-5 switch hits if a candidate phrase is correctly proposed and surfaced near the top of the scan order.
- **Gaze-aware LLM context** (research, 2025-2026): the eye-gaze stream itself is fed to the LLM as context ("user is looking at the menu's appetizer section, has dwelled on the asparagus item for 2 sec") so the assistant can make better suggestions.
- **Apple Personal Voice + Live Speech**: combine voice-banking (Personal Voice) with eye-gaze typing (Live Speech) on the same iPad; type with your eyes, speak in your own banked voice. Free, on-device.

## Pre-AI baseline

- Dedicated eye-gaze hardware: $2-5k for a USB module; $10-15k for an integrated SGD. Funded once per 5 years by Medicare in the US after SLP evaluation, physician sign-off, multi-device trial, and a dense paperwork process that takes 3-9 months.
- Eye-gaze typing top speed: 8-12 wpm with frequency-based prediction. A long email took an hour. Conversation was painful; partners often spoke for the user.
- Switch-scanning users had it worse: 2-5 wpm with row-column scanning, no prediction.
- Head-tracking software: NaturalPoint TrackIR (gamer-focused), Camera Mouse (free, academic). Smyle Mouse since ~2018. Limited adoption because eye-gaze was funded and head-tracking wasn't.

## Cost / access

- **Apple Eye Tracking**: free, built into iPadOS 18+ / iOS 18+. Any iPad with TrueDepth or front camera that supports it.
- **Smyle Mouse**: ~$300 perpetual, 14-day free trial. Windows only.
- **Tobii Dynavox PCEye**: ~$2,000-3,000; commonly Medicare-funded.
- **Tobii Dynavox dedicated SGD (TD I-Series, etc.)**: $7,000-15,000; Medicare / insurance funded once per 5 years.
- **Predictable** (Therapy Box): ~$200 iPad app.
- **SpeakFaster**: research / pilot; not commercial yet.
- **Apple Personal Voice + Live Speech**: free.

## Maturity

**Mixed.** Eye-gaze hardware is mature production; LLM-prediction integration into mainstream AAC is in active rollout (2024-2026). Apple's eye-tracking is production but accuracy and fatigue compared to dedicated infrared rigs is still under evaluation by SLPs. SpeakFaster is research. Switch-control prediction is well-understood; commercial deployment of LLM-grade prediction is uneven across vendors.

A persistent issue: **Medicare's "one SGD per 5 years" rule** locks users into 2024-era devices through 2029, slowing AI adoption. Workaround: BYO iPad + free / cheap apps and skip the funded device entirely; cost-effective but no insurance support.

## Sources

- https://www.nature.com/articles/s41467-024-53873-3 (SpeakFaster, Nature Communications, 2024)
- https://research.google/blog/speakfaster-revolutionizing-communication-for-people-with-severe-motor-impairments/
- https://smylemouse.com/
- https://thinksmartbox.com/smyle-mouse/
- https://smylemouse.com/post/perceptive-devices-and-tobii-dynavox-partner-to-bring-smile-and-head-mouse-control-to-aac-and-eye-tracking-devices/
- https://us.tobiidynavox.com/
- https://eyegaze.com/funding/
- https://www.youralsguide.com/speech-generating-devices.html
- https://teamgleason.org/pals-resource/communication-devices/

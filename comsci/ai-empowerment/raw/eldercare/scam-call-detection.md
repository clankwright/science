# AI scam call detection for elders

## What it is

On-device LLM/ML analysis of an in-progress phone call that flags scam intent in real time. Two flagship implementations:

- **Google Pixel Scam Detection** (Pixel 9+): runs Gemini Nano locally on the device, listens to the live call, flashes a warning ("likely scam") on screen and plays an audio alert when it detects the linguistic patterns of social-engineering scams (urgency, payment instruction, impersonation of a bank or government agency, threats). On-device only, no audio leaves the phone. Rolling out to Samsung Galaxy S26 via Android CallCore in 2026 — first non-Pixel deployment.
- **Apple Call Screening / Live Voicemail** + iOS 18+ on-device intent: not as aggressive a "scam detection" feature as Google's. Heavier on call screening (force unknown numbers to leave a message Siri transcribes in real time). Gap that third-party apps (Guardianly, CallShield, Hiya, Truecaller) are filling.

## Specific unlocks

- Catch a romance scam targeting an 82-year-old before they wire $30k by AI intent detection on the call. The dollar figures here are not speculative — FTC/FBI: people 60+ lost $2.4 billion to fraud in 2024 (4x the 2020 figure); $352M of that specifically to AI-related scams.
- Catch an AI voice-clone "grandma it's me, I'm in jail, send bail money" call. Documented case (Sharon Brightwell, Florida, July 2025): wired $15,000 because she heard her "daughter's" cloned voice. Three seconds of training audio is enough for ~85% accurate clone. Pixel Scam Detection flags the linguistic pattern even when the voice is convincing.
- Block the "your Social Security number has been suspended" Spanish/English bilingual scam call before the elder picks up (Hiya/Truecaller crowd-sourced reputation databases + AI classification).
- Flag a fake Microsoft tech-support call that's trying to walk an elder through giving up remote desktop access — pattern detected in the verbal script regardless of caller ID spoofing.
- Real-time on-screen prompt during the call: "this caller is asking you to buy gift cards. This is almost always a scam. Hang up." For someone with mild cognitive impairment, that interruption can break the urgency frame the scammer is constructing.

## Pre-AI baseline

Required: the elder remembered to be skeptical, or had a tech-savvy adult child who set up call screening, or used a separate paid service like Nomorobo. Adult Protective Services typically only learn about the scam after the wire has already been sent. Bank teller intervention catches a fraction; FBI elder-fraud unit handles the post-mortem.

The voice-clone vector specifically defeated almost every pre-2024 defense (caller ID, "ask a verification question") because the elder *recognizes the voice*.

## Cost / access

Google Pixel Scam Detection: free, on-device, US English only as of early 2026. Requires Pixel 9 or later.
Apple: native screening features free with iOS; full third-party scam-call AI apps $3-15/month.
Hiya Premium: $4/month. Truecaller Premium: $3/month.
Nomorobo: $2/month per phone.

Big gap: most at-risk seniors are not on Pixel 9 phones. They're on iPhone SE, an old Galaxy, or a flip phone. Carrier-side scam blocking (T-Mobile Scam Shield, Verizon Call Filter) is the more accessible path but uses cruder reputation rules, not on-call AI.

## Maturity

Production for Pixel; rolling out to Samsung 2026. Apple lagging on the in-call AI piece. Third-party apps mature. The cat-and-mouse dynamic is real: scammers adapt scripts; on-device LLMs get updated. The voice-clone scam is the area where defense is meaningfully behind offense in 2026.

## Sources
- https://support.google.com/pixelphone/answer/16704479?hl=en
- https://security.googleblog.com/2025/03/new-ai-powered-scam-detection-features.html
- https://startupnews.fyi/2026/02/03/samsung-galaxy-s26-may-get-googles-ai-scam-call-detection-feature-heres-how/
- https://www.aarp.org/money/scams-fraud/fbi-ftc-report-2025-losses/
- https://www.americanbar.org/groups/senior_lawyers/resources/voice-of-experience/2025-september/ai-cloned-voice-scam/
- https://www.ncoa.org/article/what-are-ai-scams-a-guide-for-older-adults/
- https://www.scamwatchhq.com/the-200-million-deepfake-disaster-how-ai-voice-and-video-scams-are-fooling-even-cybersecurity-experts-in-2025/
- https://www.androidcentral.com/apps-software/pixel-phones-now-use-ai-to-detect-scam-calls-in-real-time

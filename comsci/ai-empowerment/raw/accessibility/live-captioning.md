# Live Captioning for Deaf / Hard-of-Hearing

## What it is

Real-time speech-to-text overlaid on the user's screen (phone, watch, glasses) for in-person conversations, calls, and any audio playing on the device. Distinct from media captioning (Netflix, YouTube) in that it captions the live world. Major implementations: **Apple Live Captions** (system-wide, on-device), **Google Live Transcribe** (Android, on-device), **Otter** (meeting bot), **Granola** (privacy-focused local processing).

## Specific unlocks

- **Apple Live Captions**, on-device: caption a face-to-face conversation in a coffee shop with no internet, no subscription, no app. Runs system-wide: works in FaceTime, Phone, in-person, any media playing in any app. Supported languages: English (US, UK, Canada, India, Australia, Singapore), Mandarin (Mainland), Cantonese (Mainland, HK), Spanish (US, Mexico, Spain), French (France, Canada), Japanese, German, Korean. Live Captions also appear on **Apple Watch** mirrored from the iPhone (added in watchOS 26 family), so a deaf user can keep the phone in pocket and read captions on the wrist.
- **Google Live Transcribe**, free Android, built with Gallaudet University: unlimited captioning, on-device, plus a **sound-event notifier** (visually flags doorbells, alarms, smoke detectors, knocks, baby crying). Supports 80+ languages.
- **Otter**: meeting-focused; auto-joins Zoom / Meet / Teams from the calendar as a bot, transcribes, summarizes, generates speaker labels. 300 free minutes/month; Pro $10-20/mo. Useful for deaf professionals who need accurate post-meeting transcripts as well as live captions.
- **Granola**: local-first processing, doesn't join meetings as a visible bot (records the device audio); used by deaf users and execs who want clean notes without making clients feel formally recorded.
- **Latency**: best on-device implementations show captions ~0.3-0.8 sec behind speech. Otter / cloud services: 1-3 sec. Apple's on-device pipeline has roughly the same accuracy as 2020-era cloud ASR but with no network round trip.
- **Live Translation** (Apple, iOS 26): translates the captions on the fly so a deaf user in Tokyo can read English in conversations conducted in Japanese, in Messages, FaceTime, and Phone calls.

## Pre-AI baseline

- **CART (Communication Access Realtime Translation)**: hire a stenographer, $60-150/hour, schedule in advance. Required for legal proceedings, conferences, court.
- **Captioned Telephone Service (CTS / CapTel)**: federally subsidized, but only for phone calls and English; latency ~5-10 sec because a human re-voices the speech to an ASR system.
- **Lipreading**: accurate ~30-45% in best conditions; useless in groups, on phone, with masks, in poor lighting.
- **Pre-2022 phone live captioning** (Live Caption on Pixel since 2019) worked but was Pixel-only. Apple shipped Live Captions in iOS 16 (2022); on-device performance only became reliably good with iOS 17-18.

## Cost / access

- Apple Live Captions: free, built into iOS / iPadOS / macOS / watchOS. No data sent to Apple's servers.
- Google Live Transcribe: free, Android, no subscription, no minute limit.
- Otter: 300 min/mo free, Pro $10-20/mo, Business $30/mo.
- Granola: ~$15-20/mo.

## Maturity

**Production.** This is one of the most-fully-baked accessibility AI categories. Caveats: on-device models are slightly less accurate than cloud, especially for unusual names, technical jargon, accented English. Apple's model cannot adapt to corrections mid-conversation (no personalization); cloud services like Otter learn vocabulary over time. Loud / multi-speaker / overlapping speech still degrades accuracy meaningfully.

## Sources

- https://support.apple.com/guide/iphone/get-live-captions-of-spoken-audio-iphe0990f7bb/ios
- https://www.apple.com/bw/newsroom/2025/05/apple-unveils-powerful-accessibility-features-coming-later-this-year/
- https://davidedmiston.com/post/2025/apple-live-captions/ (deaf user review, fall 2025)
- https://play.google.com/store/apps/details?id=com.google.audio.hearing.visualization.accessibility.scribe
- https://www.boia.org/blog/live-transcribe-gives-deaf-and-hard-of-hearing-individuals-instant-captions-with-speech-recognition-technology
- https://whyy.org/articles/hearing-loss-captions-accessibility-apps-otter/
- https://nagish.com/post/best-live-transcribe-app
- https://support.apple.com/en-us/123720 (Apple Live Translation)

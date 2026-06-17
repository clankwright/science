# Apple Health and the Quartz/Mulberry coach

## What it is

Apple Health is the iPhone/Apple Watch health-data backbone (HealthKit on iOS, the de facto standard for third-party app data exchange). For two years Apple was rumored to be building an AI coaching service on top of it: codenamed Mulberry internally, marketed as a premium tier called Health+ or Quartz. As of May 2026, that ambition is officially scaled back.

## Specific unlocks (status: partly happened, mostly didn't)

What actually shipped on Apple's stack 2024-2026:
- Apple Watch Series 10/11 + watchOS 12: nighttime breathing-disturbance detection (sleep apnea screening, FDA cleared late 2024), continuous afib monitoring, hypertension flagging from optical sensor patterns.
- HealthKit as the data substrate that every third-party LLM coach (Bevel, Whoop, Oura, Eight Sleep) reads from. The unlock is real but it's an integration unlock, not an Apple-coach unlock.

What didn't ship:
- Project Mulberry, the planned generative AI doctor with personalized recs, expert video, nutrition, exercise coaching. Wound down February 2026 after a leadership change in the health division. Eddy Cue reportedly told colleagues that Oura and Whoop already offered "more compelling and useful features" through their iPhone apps, and Mulberry was not good enough to ship.
- Quartz, the premium Health+ subscription, is still rumored for late 2026 but with much narrower scope: educational video content from clinicians, not a real chat coach.

## Pre-AI baseline

Apple Health as a passive data lake. You could see your steps and heart rate. There was no synthesis layer from Apple itself. Third parties filled the gap (and continue to).

## Cost / access

HealthKit is free. Hardware: Apple Watch SE $249 to Ultra 3 $799. No coach subscription exists from Apple as of May 2026.

## Maturity

The interesting story is the negative result. Apple, with all its data, all its silicon, and all its money, looked at the AI-coach category and decided it was a worse product than the small startups already in market. That is a strong signal about how hard the longitudinal-coach problem actually is, and how much the "win" comes from focused product work rather than data moat.

The other Apple-shaped unlock that did happen: HealthKit becoming the universal source of truth means a user can put their Apple Watch data into Bevel, Welltory, Athlytic, Sensai, ChatGPT Health, or a self-hosted Open Wearables MCP server. The competitive pressure on Apple is partly from this open ecosystem.

## Sources

- [Bloomberg: Apple scaling back AI health coach Feb 2026](https://www.bloomberg.com/news/articles/2026-02-05/apple-is-scaling-back-plans-for-new-ai-based-health-coach-service)
- [Wareable: Apple still planning Health+ AI coaching for 2026](https://www.wareable.com/apple/apple-quartz-health-plus-ai-coaching-service-2026-launch-rumor)
- [Healthcare Digital: Project Mulberry overview](https://www.healthcare.digital/single-post/project-mulberry-apple-s-secret-ai-powered-health-coach)
- [Livity: Apple shelved its AI health coach](https://livity-app.com/en/blog/apple-health-ai-coach-shelved)
- [iClarified: Apple to revamp Health app with AI doctor (Gurman)](https://www.iclarified.com/96870/apple-to-revamp-health-app-with-aipowered-doctor-gurman)
- [Apple Developer: HealthKit](https://developer.apple.com/documentation/healthkit)

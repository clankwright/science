# Dementia memory aids

## What it is

A small but real category of apps and devices targeting the specific cognitive deficits of mild-to-moderate dementia: face/name recall, prospective memory (remembering to do future things), autobiographical memory (recalling what happened today/yesterday), and orientation (what day, where am I).

Notable lines:

- **I-Remember** (Microsoft Garage, Azure Face): point phone camera at a person, app announces who they are and a short context line. User-trained.
- **MemoryBoard** and **RecallCue**: digital photo-frame-style displays with rotating "today is Tuesday, your daughter Sarah called at 11am, you have a doctor's appointment at 2pm with Dr. Patel" content. Updated remotely by family.
- **MindMate**: app suite with memory games, reminders, life-story building, exercise prompts. Marketed as "digital companion."
- **Memory Lane Games**: dementia-specific casual games designed for failure-tolerant interaction.
- **Tactus Spaced Retrieval Therapy**: app implementation of the well-validated spaced-retrieval clinical technique for cementing single facts in declarative memory.
- **SenseCam research lineage**: Microsoft Research's wearable lifelog camera (2004 onward). Took fisheye photos every ~30s and accelerometer-triggered. Reviewing the day's images strengthened autobiographical recall in patients with hippocampal amnesia (the famous "Mrs. B" case: ~80% recall of an event two weeks later vs near-zero unaided). Spawned downstream commercial products like Narrative Clip (defunct) and informs current LLM-summarized lifelog approaches.
- **RecallAI** and similar 2025-2026 LLM-based daily-narration apps: ingest calendar, photos, location history, smart-home events; generate a paragraph "today you went to the park with David at 10am, had lunch at the Italian place, watched the news, called Margaret." Reviewed nightly with a caregiver.

## Specific unlocks

- Point a phone at a familiar face and hear the name in your earbud before the conversation gets awkward. For someone with moderate Alzheimer's, this collapses the "who is this stranger smiling at me" panic.
- A bedside display that says "Today is Wednesday, May 6, 2026. You are at home. Sarah will visit at 2pm. You took your morning pills at 8am." Removes the disorienting first 10 minutes of every day.
- Daily lifelog review: an LLM-narrated paragraph of what happened today, generated from photos/calendar/location, read aloud at bedtime. SenseCam-style memory cementing without the awkward chest-camera.
- A spaced-retrieval app that re-asks "what is your son-in-law's name" at scientifically-spaced intervals (10s, 1min, 10min, 1hr, 1day) to keep a single load-bearing fact accessible. Works for early-stage decline; the technique is one of the few things with positive evidence in cognitive rehab.
- Failure-tolerant casual games that adjust difficulty to the user's level without ever showing a "you lost" screen. Engagement matters; humiliation kills engagement.

## Pre-AI baseline

Required: a "memory book" (printed photo album with names and relationships), a whiteboard schedule, a family member or aide narrating "this is your daughter Sarah, she's here to visit." For face recall, nothing scaled. The Penfield-style classical interventions remain useful but are labor-intensive 1-on-1 work.

## Cost / access

- I-Remember: free.
- MemoryBoard, RecallCue: $200-400 device + $10-20/month subscription.
- MindMate: freemium, premium ~$10/month.
- Most apps: $0-10/month. Medicare doesn't cover. Some Alzheimer's Association local chapters subsidize.

## Maturity

Mixed. The face-recognition piece is technically mature but ethically contested (the user is photographing every person they meet; consent of the person being photographed is murky; the app is essentially building a private surveillance database in a memory-impaired person's pocket). RecallCue/MemoryBoard-style displays are mature consumer products. Lifelog/LLM-narration is early.

Honest evidence read: for *mild* cognitive impairment, several of these tools demonstrably help with specific tasks. For *moderate-to-severe* dementia, the evidence is much weaker; the user often loses the ability to operate the tool itself, even one designed to be simple. The category over-promises a "stay independent longer" outcome that for severe disease isn't deliverable by any current technology.

## Sources
- https://news.microsoft.com/europe/features/i-remember-an-app-that-helps-people-with-alzheimers-recognize-faces-using-ai/
- https://memoryboard.com/blogs/news/memoryboard-vs-recallcue-which-is-better-for-dementia-care-in-2026
- https://tactustherapy.com/app/srt/
- https://www.memorylanegames.com/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10525938/
- https://www.microsoft.com/en-us/research/project/sensecam/alleviating-memory-loss/
- https://www.microsoft.com/en-us/research/blog/sensecam-documents-daily-life-for-patients-with-memory-loss/
- https://alzheimersweekly.com/sensecam-photos-ease-memory-loss/
- https://www.recreationaltherapy3.com/post/best-apps-for-dementia-patients-boosting-memory-connection-and-calm

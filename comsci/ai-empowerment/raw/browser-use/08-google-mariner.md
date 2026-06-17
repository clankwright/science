# Google Project Mariner

**Source date:** verified 2026-05-03
**URLs:**
- https://deepmind.google/models/project-mariner/
- https://deepmind.google/technologies/project-mariner/
- https://labs.google.com/mariner/landing
- https://en.wikipedia.org/wiki/Project_Mariner
- https://www.allaboutai.com/ai-agents/project-mariner/
- https://localaimaster.com/blog/google-project-mariner-web-agent-2025
- https://thenextweb.com/news/google-cloud-next-ai-agents-agentic-era

## What it is

Google DeepMind's research-prototype browser agent. Runs as a Chrome extension that the user can hand a task to; Gemini drives the browser tab the user is watching. Announced Dec 2024. Powered by a Gemini variant (originally Gemini 2.0; on Gemini 2.5 / 3 by 2026) trained for web navigation with a "Teach & Repeat" capability where the agent learns a workflow from one demonstration.

## Vendor / Access

- Vendor: Google DeepMind / Google Labs
- Access: Google AI Ultra subscribers in the US (originally); expanded to more regions and to the Gemini API and Vertex AI through 2025
- Public roadmap (per Google):
  - Q1 2026: Enterprise API with auth, RBAC, SOC 2
  - Q2 2026: Mariner Studio (visual workflow builder)
  - Q3 2026: cross-device sync (desktop ↔ Android)
  - Q4 2026: agent marketplace

## Cost

- Bundled with Google AI Ultra ($249/mo as of mid-2025; check current pricing)
- API pricing via Vertex AI usage; not separately disclosed for Mariner

## Maturity

- Preview to beta. Still labeled "research prototype" by DeepMind in May 2026.
- WebVoyager 83.5% (state of the art at announcement; surpassed since).
- Multi-task: handles up to 10 simultaneous browser tasks per user session.

## Distinctive trait

Teach-and-Repeat. User performs a workflow once; Mariner records it and can reproduce/generalize it later. This is the closest commercial agent to RPA's "record macro" workflow but with LLM generalization on top, so a recorded "fill this expense form" works on a slightly different form next time.

Tight Google ecosystem integration (Search, Gmail, Calendar, Docs, Drive) with first-party connector quality.

## Individual-empowerment angle

Bundled with the same Ultra subscription Google sells for video gen (Veo 3) and Deep Research, so an Ultra subscriber gets it "free" alongside other tools. Friction is the $249/mo price tag and US-first regional rollout. For non-Ultra users, no entry path. Less consumer-accessible than ChatGPT Agent ($20 Plus tier).

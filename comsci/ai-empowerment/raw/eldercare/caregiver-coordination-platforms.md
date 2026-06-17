# Caregiver coordination platforms

## What it is

Software that lets the people taking care of one elder (a sibling group, a paid aide rotation, a primary spouse plus distant children plus the pharmacy and the geriatrician) share a single source of truth: schedule, medication list, recent symptoms, doctor's notes, who's on duty when. Most have existed since the 2010s; the 2024-2026 layer is LLM summarization and triage.

Players:

- **CareZone**: free invite-only family network for shared task lists, medication tracking, contacts. Long-running, low-frills.
- **Cariloop**: employer-sponsored caregiver benefit. Pairs working caregivers with a human "Care Coach" plus a digital coordination platform. Used as a benefit by ~2 million working caregivers.
- **Caribou**: home care agency-side platform. Now deploying agentic AI to handle routine coordination tasks (rescheduling, outreach, paperwork) so coordinators can focus on relationships. Workforce retention angle.
- **Lotsa Helping Hands**: free, community-based, calendar focused.
- **Ianacare**: employer benefit, similar to Cariloop, plus a "care recipe" library.
- **Carely / Caringly / Caring Bridge**: family communication.
- **Wellthy**: concierge-style, paired human Care Concierge model with LLM-augmented intake/triage.

## Specific unlocks

- Replace a 17-person family group chat with a structured timeline. LLM summarizes "what changed for mom this week" into one paragraph for the sibling who only checks once a week.
- Auto-summarize a 45-minute geriatrician visit (recorded with consent) into the actionable items, plus a translated version for the Spanish-speaking aide and a more clinical version for the cardiologist's portal — all using whatever LLM the platform has wired up.
- Aged-care agency's coordination AI (Caribou) auto-handles "Maria called out sick, Alicia is available, send her the address, brief her on the client's allergies and dementia stage." Pre-AI this took the human coordinator 20 minutes per swap; agencies do dozens daily.
- Wellthy/Cariloop care coach + LLM intake: a working daughter texts "mom's hospice intake is tomorrow, what do I need to bring" at 11pm and gets a checklist within minutes, drafted by AI from the coach's prior knowledge of the case.
- Auto-detect concerning patterns from the unstructured weekly aide notes. "Five aide notes this month mention mom has been more confused after lunch" surfaces as a possible afternoon hypoglycemia pattern, suggested for the next doctor visit.

## Pre-AI baseline

Required: spreadsheets, group texts, paper notebooks left at the elder's house, weekly family conference calls. The coordination overhead is itself a major caregiver-burnout driver — caregivers report 8-15 hours/week on logistics alone. For employer-sponsored coordination, only existed at large companies with concierge HR benefits.

## Cost / access

- CareZone, Lotsa: free.
- Cariloop, Ianacare, Wellthy: employer-paid, free to user. Major US employers (Best Buy, Hilton, big consultancies) increasingly offer.
- Caribou: B2B to home care agencies.
- Direct-to-consumer concierge tier (Wellthy outside benefits): $200-500/month.

## Maturity

The platform layer is mature; the AI summarization layer is 2024-2026, still differentiating. The interesting move is the **employer-benefits market**: Cariloop and Ianacare have grown explosively because companies have figured out that caregiver burden is a top-3 cause of mid-career attrition for employees in their 40s-50s. AI summarization makes the human Care Coach 3-5x more productive, which is what makes the per-employee cost low enough to scale.

Caveat: free consumer products (CareZone, Lotsa) have stagnated; the AI improvements are mostly happening in the paid B2B channel. The 70% of US caregivers with no employer-sponsored benefit get the older, less-AI version.

## Sources
- https://www.neelacares.com/blog/family-caregiver-app-tools-examples-and-how-to-choose-the-right-one
- https://cariloop.com/
- https://cariloop.com/solutions/caregiver-support-platform
- https://caregiverdoc.com/cariloop/
- https://www.dmagazine.com/healthcare-business/2026/02/ca/
- https://www.ziprecruiter.com/co/Caribou/Jobs
- https://marketplace.personifyhealth.com/partners/cariloop

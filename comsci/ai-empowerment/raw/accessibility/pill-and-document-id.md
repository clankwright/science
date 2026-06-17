# Pill and Document Identification

## What it is

Multimodal LLMs as a general-purpose object / text identification tool, used by blind and low-vision users to handle the high-stakes "what is this medication / form / document" problems that previously required either a sighted human or a specialized scanner. Spans Be My AI / Seeing AI / GPT-4o for general use, plus emerging clinical tools like RxLens (multi-agent LLM for prescription scan-and-order) and clinical-decision-support deployments.

## Specific unlocks

- **Identify a pill from a phone photo** including imprint code, color, shape, scoring; cross-reference against the FDA's RxImage database. Useful when bottles get mixed up, pills are loose in a pill organizer, or after a hospital discharge with a pile of unlabeled samples. Be My AI / GPT-4o handles this conversationally; ask "is this the 20mg or the 40mg?"
- **Read your own pill bottle by phone camera, no human help, free** (Be My AI, Seeing AI). Reads brand name, generic name, dosage, frequency, prescribing physician, refill date, all warning labels including the small text on the auxiliary stickers.
- **Detect potentially dangerous combinations**: ask the AI to check whether a pile of pills has interactions or duplicates (two beta-blockers, two SSRIs). Useful for the elderly with multiple prescribers; not a substitute for pharmacist review but catches obvious problems.
- **RxLens** (NAACL 2025 industry track): multi-agent LLM-powered system that scans a prescription, parses it, and orders the medication; pilot deployments in India.
- **Read a stack of mail** (Be My AI / Aira): identify what's bills, what's junk, what needs urgent action. ADA-essential for blind adults living alone.
- **Read a doctor's letter** with structured Q&A: "summarize the diagnosis," "what tests are scheduled," "what should I do before the next appointment," "what does the abbreviation FNA mean here."
- **Read a tax form / court document / lease** with paragraph-level navigation; ask "where do I sign," "what is the cancellation clause."
- **Identify the contents of a fridge** for someone who lost central vision after a sighted lifetime; ask "what's the expiration date on the milk."
- **Voice-side LLMs for medication-management chat** (Frontiers in Medicine, 2025): patient-facing medication guidance and self-decision support; documented usability gains and risks.

## Pre-AI baseline

- **KNFB Reader** (since 2014, $99): OCR-only, document-focused; not conversational; couldn't answer questions about the text.
- **ScripTalk** (En-Vision America, since ~2007): RFID stickers on prescription bottles, requires the pharmacy to participate and the user to carry an RFID reader. Slowly adopted.
- **Talking pill bottles** with recorded labels: niche, expensive, only available from a few pharmacy chains.
- **Calling the pharmacy or asking a sighted friend / family member** to read for you.
- For document tasks: a sighted assistant. For sensitive documents (medical, financial), this required revealing private information to the helper.
- **Aira agent** ($29-129/mo) could read a document, but every use cost minutes; awkward for long forms.

## Cost / access

- **Be My AI**: free for blind users.
- **Seeing AI**: free.
- **GPT-4o vision via ChatGPT**: free tier with limits; Plus $20/mo for higher quotas.
- **Claude vision**: free tier; Pro $20/mo.
- **Aira**: 5 free min / 48 hr; subscription beyond.
- **ScripTalk**: free reader from En-Vision America; pharmacy participation varies.

## Maturity

**Production for OCR / pill-bottle reading; preview for clinical decision support.** Be My AI and Seeing AI are used daily by hundreds of thousands of blind users for exactly this purpose. The clinical-grade applications (medication reconciliation, deprescribing recommendations) are still in pilot and have well-documented hallucination failure modes that make them unsuitable for unsupervised use. Independent pharmacist or clinician review remains required for high-stakes decisions.

Failure modes users learn to navigate:
- LLMs sometimes confidently hallucinate pill identifications when the imprint is partly obscured. Verify by cross-checking with pharmacy labels.
- OCR fails on degraded photocopies and very small text.
- Drug-drug interaction checking is approximate; the LLM is not a pharmacist.

## Sources

- https://www.bemyeyes.com/news/introducing-be-my-ai-formerly-virtual-volunteer-for-people-who-are-blind-or-have-low-vision-powered-by-openais-gpt-4/
- https://www.microsoft.com/en-us/ai/seeing-ai
- https://aclanthology.org/2025.naacl-industry.63.pdf (RxLens, multi-agent LLM Rx scan-and-order)
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11385755/ (LLMs in medication review and reconciliation, proof-of-concept)
- https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2025.1527864/full (LLMs in patient-centered medication guidance)
- https://www.nature.com/articles/s41746-025-01565-7 (scoping review on generative AI mitigating medication-related harm)
- https://www.sciencedirect.com/science/article/pii/S001048252501488X (RAG-enhanced LLM medication-use instructions)
- https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2025.1514445/full (LLM management of complex medication regimens)

# K Health and consumer-facing medical AI

## K Health
- Vendor: K Health (NYC). AI-driven primary care with text-first telemedicine layer.
- Access: consumer app (iOS, Android, web). No insurance accepted; flat membership.
- Cost (2025): $49/mo (or $73/visit), +$12/mo for direct prescription delivery, $449/yr unlimited visits.
- Services: 24/7 primary care, urgent care, mental health, medical weight loss (GLP-1s). The AI symptom-checker is free; clinician chat/video is paywalled.
- Maturity: production. Peer-reviewed eval (Annals of Internal Medicine) found the AI's clinical decisions aligned with practicing physicians in 68% of simulated cases and were *more* accurate in 21%. The remaining 11% the doctor was more accurate.
- Distinctive trait: AI-then-human handoff. The AI does triage and history-taking; a licensed clinician makes the prescribing decision. Avoids UPL exposure by keeping the human in the loop for any consequential action.
- Nov 2025: announced expansion of primary-care access via AI + virtual care; positioning as a primary-care alternative for the uninsured/underinsured.

## Hippocratic AI
- Vendor: Hippocratic AI (Palo Alto). Builds non-diagnostic patient-facing AI agents for health systems and payers (B2B; not direct-to-consumer).
- Funding: Series C $126M (Nov 2025, $3.5B valuation), $404M total. 50+ health system / payer / pharma customers across 6 countries.
- Polaris 5.0 (Apr 2026): trained on >180M real patient interactions, validated by 7,000+ US-licensed clinicians; constellation architecture (~30 LLMs supervising the main model).
- Distinctive trait: explicit non-prescription, non-diagnostic guardrails by design. 115M+ clinical patient interactions reported with no safety issues — strong claim, hard to independently verify.
- Empowerment angle: most users won't choose Hippocratic; their *health system* will deploy it. So patients get post-discharge follow-up calls, medication adherence checks, etc. from an AI agent. Reduces the "I have a question between visits" gap that previously sent people to Google.

## Doximity GPT (DoxGPT)
- Vendor: Doximity. Free for verified physicians; HIPAA-compliant.
- Features: drafts prior auth letters, patient education, translation, drug monograph lookup (3,200+ monographs with dosing/interaction data). Saves "10+ hours/week" per Doximity marketing.
- Adoption: 300,000+ unique clinicians (Q3 of FY2026); 100+ health systems with enterprise access.
- PeerCheck: 10,000+ medical experts review AI-generated answers — a layer of human verification that's rare in the space.
- Empowerment angle (indirect): less time on paperwork = more clinical attention per patient.

## Glass Health
- Vendor: Glass Health.
- Product: clinician-facing CDSS (clinical decision support system). Three-tier differential diagnosis (Most Likely / Expanded / Can't Miss). Real-time refinement as the patient history unfolds. Also offers ambient scribing.
- Maturity: used at "leading health systems" (no public physician count comparable to OpenEvidence/Doximity). 2025 positioning is RAG + conversational search + ambient workflow integration.
- Distinctive trait: explicit "Can't Miss" diagnoses — the rare-but-fatal stuff a physician shouldn't anchor away from. Forces consideration of low-probability/high-stakes diagnoses, which is the opposite failure mode from anchoring bias.

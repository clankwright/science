# Ethics and Honest Limits

## What it is

The category-wide failure modes, demographic biases, dependence risks, and unresolved consent questions in accessibility AI as deployed in 2026. Compiled from peer-reviewed bias studies, deaf-community critiques, ALS-patient focus groups, and known incidents.

## Specific issues

### Face-recognition and skin-tone bias

- The MIT Media Lab "Gender Shades" line of work (Buolamwini, Gebru et al.) showed commercial face-recognition systems misclassify darker-skinned women at 34% vs 0.8% for lighter-skinned men. The same families of models power "describe the person in front of me" features in Be My AI, Seeing AI, and Aira's AI assist.
- 2025 surveys of demographic bias in face recognition (ACM Computing Surveys, arxiv reviews) find the gap has narrowed but not closed: error rates for African and Black users still 5-10x higher than for European / East Asian faces in production systems.
- A blind user relying on AI to identify their own family member or recognize friends at a meet-up is downstream of this bias.

### Dataset underrepresentation more broadly

- Image-captioning datasets (COCO, OpenImages) are skewed toward Western, English-speaking, middle-class household contexts. A blind user in Lagos asking Be My AI to describe their kitchen gets descriptions tuned to American kitchens.
- Sign-language datasets (RWTH-PHOENIX, How2Sign) cover ASL and DGS; BSL, JSL, ISL, BISINDO, and the long tail of national sign languages have orders of magnitude less data. Translation models do not exist for most.
- Voice-cloning models are trained primarily on English / Mandarin / European-language audio; preserving Tamil, Yoruba, Bengali speakers' voices for AAC is meaningfully harder.

### AAC voice quality concerns

- Banked or cloned voices are good in neutral narration; emotional expression (anger, sadness, sarcasm, laughter) remains poor outside of the latest STS systems.
- The "voice tax" problem: a non-speaking user with a high-quality voice gets perceived as more intelligent and is treated better. The opposite is also true. Devices that ship with a stock robotic voice are a social-status problem, not just an aesthetic one.
- Disabled users have reported being **dismissed or talked over more** when their AAC voice doesn't match their identity (gender, age, ethnicity, accent).

### Sign language and Deaf-community concerns

- The Deaf community has consistently pushed back on hearing-led "fix" projects that frame Deafness as a deficit and propose AI translation as a solution. Many Deaf people view ASL as a complete language and culture, not a disability marker.
- Sign-language translation systems built without Deaf consultation tend to produce "ASL-shaped English" and miss the language's actual structure (spatial grammar, role-shift, classifiers).
- Risk: hearing institutions deploy sub-par AI sign translation as a cheaper alternative to certified interpreters, degrading service quality.

### Cloud / internet dependence

- Be My AI, Aira AI features, ChatGPT-based tools, ElevenLabs voice generation: all require internet. Blind users in rural areas, on planes, in basements, or during outages lose access.
- Apple Live Captions, Google Live Transcribe, on-device Seeing AI channels are exceptions and increasingly load-bearing for offline reliability.
- A user with severe motor impairment whose only communication method is a cloud-LLM-driven AAC has a catastrophic failure mode if their internet drops.

### Privacy and surveillance

- Cameras pointed at everything you read, every face you see, every room you enter, with images uploaded to a frontier-model API. Be My AI processes images via OpenAI; aggregate logs exist somewhere.
- Voice cloning enables identity theft against the same disabled users whose voices were preserved. Banking and healthcare voice authentication is increasingly defeated by cloning.
- AAC and eye-gaze devices accumulate detailed records of every utterance composed; usually not encrypted at rest; subject to subpoena.

### Hallucination in safety-critical contexts

- Pill identification, medication-interaction checking, document interpretation: all categories where AI hallucinations carry real harm potential.
- Reported failure mode: GPT-4o confidently identifies a partly-obscured pill imprint as the wrong drug. User trusts; takes the wrong medication.
- Mitigations are user-level: cross-check, ask twice, verify with pharmacist for critical decisions. Vendors mostly add disclaimers rather than refuse the task.

### Dependence and de-skilling

- ADHD and dyslexia users report worsened functional capacity when AI tools become unavailable; some clinicians worry about over-reliance crowding out underlying skill development.
- Children using AAC with LLM phrase-suggestion may develop different language patterns than children who construct utterances symbol-by-symbol; the long-term language-development consequences are unstudied.
- Users of voice-cloned AAC sometimes report a loss of perceived agency: "my words sound like me, but I didn't choose all of them."

### Consent for voice restoration

- ElevenLabs / Bridging Voice protocols require patient consent before cloning. But cloning **a deceased relative's voice** for an AAC user (e.g., a child wanting to use a deceased parent's voice for memorial reasons) raises questions current frameworks don't fully cover.
- Consent for voice banking from a patient with cognitive decline (Huntington's, Alzheimer's-with-aphasia) is contested.

### Funding inequity

- AI accessibility tools are cheap individually; the people who need them most are often on Medicaid / fixed incomes / disability benefits and still struggle to pay $20/mo for ChatGPT Plus or $140/yr for Speechify.
- Insurance covers durable medical equipment (eye-gaze hardware) but not AI subscriptions, creating a perverse pricing incentive: the $12k device gets covered; the $20/mo software that makes it actually useful does not.

## Sources

- https://link.springer.com/article/10.1007/s43681-021-00108-6 (deep-learning face-recognition bias)
- https://mitsloan.mit.edu/ideas-made-to-matter/unmasking-bias-facial-recognition-algorithms (MIT Media Lab Gender Shades)
- https://arxiv.org/html/2502.02309v1 (review of demographic bias in face recognition, 2025)
- https://dl.acm.org/doi/10.1145/3705295 (racial bias in face recognition: ACM Computing Surveys)
- https://wordinblack.com/2025/04/racial-bias-in-ai-how-algorithms-are-failing-black-people/
- https://engineering.nyu.edu/news/nyu-tandon-researchers-mitigate-racial-bias-facial-recognition-technology-demographically
- https://dl.acm.org/doi/fullHtml/10.1145/3544548.3581560 ("The less I type, the better": AAC user research on LLMs)
- https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2025.1527864/full (LLM patient-facing risk analysis)
- https://justkeepstimming.com/2022/01/07/aac-reviews/ (autistic-adult AAC perspective)

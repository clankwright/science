# Ethics, Risks, and Failure Modes

## What it is

Almost every tool in this capability category has a stalker mirror. Reverse face search helps adoptees find birth parents and helps domestic abusers find ex-partners. Investigative genetic genealogy solves cold cases and identifies anonymous sperm donors who relied on contractual anonymity. OSINT platforms map fraud networks and pre-attack reconnaissance targets equally well. Handwritten document AI lets someone read grandmother's diary without consent. This page consolidates the failure modes so they don't have to be rehearsed in every other file.

## Specific risks

### Facial recognition misuse

- **Stalking and harassment.** PimEyes and FaceCheck.ID have been used to identify and dox sex workers, protesters, and individuals from social-media photos. PimEyes has faced criminal complaints in Germany and EU GDPR enforcement.
- **Doxxing of anonymous online identities.** A pseudonymous activist's profile photo can be face-searched to a real name in seconds.
- **State-actor risk.** Clearview AI's $51.75M class settlement (March 2025) addressed Illinois BIPA violations but left the underlying surveillance pattern intact. Trump administration ICE deployment of Clearview as of late 2025 illustrates how once-private datasets become state infrastructure.
- **AI-generated face contamination.** Reverse-search indexes increasingly contain AI-generated faces, producing confident false matches.

### False positives and confidence bias

- Geolocation models output bounded coordinates that look definitive; users act on them without confirmation.
- IGG cousin-match math has known failure modes around endogamy (Ashkenazi, French Canadian, Mennonite populations) and pedigree collapse.
- HTR transcripts and Akkadian translations can hallucinate plausible content on damaged inputs; downstream readers don't know which letters were guessed.
- Restored / colorized / animated photos invent detail (eye color, mustache hairs, motion patterns) that family historians experience as historical fact.

### Investigative genetic genealogy specifics

- **Fourth Amendment and consent erosion.** Police uploads to GEDmatch in 2018-2019 happened without warrants; the 2019 ToS change to require explicit opt-in was reversed and reimplemented under Verogen. State-by-state IGG laws (Maryland, Montana) impose new consent requirements.
- **Donor anonymity contracts.** Sperm and egg donors before ~2005 relied on guaranteed lifetime anonymity. IGG breaks that contract retroactively.
- **Distant-relative consent.** Identifying any one person via IGG requires that their 2nd-to-4th cousins have tested. Those cousins consented for themselves; they did not consent to identifying everyone they share a great-grandparent with.

### Document and FOIA mining

- **Bitmap-redaction leakage.** Lazy redactions sometimes preserve the underlying text layer; AI tools surface it readily.
- **Lossy summarization.** A reporter who reads only the LLM-generated summary of a document corpus may miss the load-bearing fact.

### Source protection in journalism

- **Cloud-uploaded audio is subpoenable.** Otter, Pinpoint, and similar tools place sensitive interview audio in third-party clouds. FPF guidance: use Whisper locally for high-risk material.
- **Cross-tool data leakage.** A reporter who uses ChatGPT to summarize a leaked document has now sent the document to OpenAI, regardless of opt-out flags.

### Old-photo restoration

- The deepfake-relative scam ("a video call from your grandson asking for bail money") draws on the same technology family historians use to animate ancestors.
- Synthetic memory: descendants experience Deep Nostalgia clips of a never-met grandparent as memories that aren't really theirs.

### General market risk

- Most tools in this category are operated by small companies that may fold, get acquired, or change pricing radically (Topaz subscription shift, GeoSpy public-access withdrawal). A workflow built on any one tool is fragile.

## Mitigations that work

- **Always cross-confirm.** Geolocation suggestion plus Street View confirmation; face-search match plus textual evidence; HTR transcript plus a visual spot-check on flagged-uncertain words; IGG candidate plus traditional document trail.
- **Local-first for sensitive material.** Whisper, eScriptorium / Kraken, GFPGAN local installs, FaceOnLive on-prem.
- **Document the chain of inference.** Especially for genealogy and IGG, where future relatives will rely on (or be misled by) the work.
- **Respect opt-outs.** PimEyes and most IGG databases offer opt-out. Investigators with any ethics floor should respect them even when the tooling makes them ignorable.

## What's still genuinely hard

- Verifying AI-generated audio and video at scale. The C2PA / content-credentials standard is partially deployed but not enforced.
- Distinguishing legitimate IGG use from harassment. The technology has no use-case gate.
- Re-establishing privacy for people whose face is already in the PimEyes / Clearview-style indexes. The data is out.

## Sources

- https://en.wikipedia.org/wiki/Clearview_AI
- https://www.regulatoryoversight.com/2025/04/51-75m-settlement-in-clearview-ai-biometric-privacy-litigation-illustrates-creative-resolution-for-startups-facing-parallel-litigation-and-enforcement-action/
- https://www.regulatoryoversight.com/2025/06/facial-recognition-and-legal-boundaries-the-clearview-ai-case-study/
- https://noyb.eu/en/criminal-complaint-against-facial-recognition-company-clearview-ai
- https://www.law.georgetown.edu/gender-journal/online/volume-xxi-online/the-end-of-anonymity-how-facial-recognition-technology-will-worsen-online-harassment/
- https://www.wbez.org/immigration/2025/11/02/ice-trump-facial-recognition-clearview-police-oversight
- https://en.wikipedia.org/wiki/Investigative_genetic_genealogy
- https://www.biometricupdate.com/202510/facial-recognition-turns-dating-apps-into-a-new-surveillance-front

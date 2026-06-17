# Voice Cloning: Ethics, Consent, Regulation

The unhobbling cuts both ways. Cheap zero-shot cloning is also cheap zero-shot fraud.

## Real-world harms (2023-2025)

- **Vishing / family emergency scams.** "Mom, I'm in jail / kidnapped / hurt — wire money." FBI / FTC issued repeated advisories 2023-2025. By 2025 these were a billion-dollar fraud category in the US alone.
- **Baltimore high school principal deepfake (2024).** Athletic director used voice cloning to fabricate a recording of his principal making racist statements. Principal was suspended before forensic analysis exposed the fake. Director arrested and charged. Canonical case study cited in policy debates.
- **Political deepfakes.** AI-generated Biden robocalls discouraged NH primary voters from voting (Jan 2024). Operator fined; FCC banned AI-voice robocalls under TCPA.
- **Celebrity voice misuse.** Scarlett Johansson vs OpenAI's "Sky" voice (May 2024) — OpenAI shipped a voice that allegedly sounded too similar to Johansson's after she declined to license her voice. Voice was withdrawn.
- **Music industry suits.** RIAA filed suit against Suno + Udio (June 2024) over training data. Vocal cloning of named artists is a flashpoint in those cases.

## US regulation (status May 2026)

### Federal: NO FAKES Act
- "Nurture Originals, Foster Art, and Keep Entertainment Safe Act."
- Bipartisan: Coons (D-DE), Blackburn (R-TN), Klobuchar (D-MN), Tillis (R-NC).
- Reintroduced **April 2025** after failing to advance in 2024 session.
- Creates a federal property right in voice + likeness; allows civil action against producers, hosts, distributors of unauthorized digital replicas.
- Includes DMCA-style notice-and-takedown.
- **Critics:** EFF, CDT, ALA, CCIA argue the takedown regime risks chilling protected speech (parody, criticism, journalism). Bill text revisions ongoing as of mid-2025.
- Status May 2026: still in committee, not yet enacted federally.

### State laws
- **Tennessee ELVIS Act** (Ensuring Likeness Voice and Image Security, 2024). First state law to extend right-of-publicity protections explicitly to AI-generated voice clones. Enacted in response to Nashville music industry lobbying.
- **California, New York** — pre-existing right-of-publicity statutes amended or interpreted to cover AI replicas.
- **Patchwork.** Most states still have no specific AI-voice statute; protections derive from general right-of-publicity case law.

### FCC
- AI-voice robocalls banned under TCPA (Feb 2024 ruling).

## EU regulation
- **EU AI Act** (in force August 2024, applying in stages). Requires labeling of AI-generated content including audio. "Deep fake" labeling obligations effective August 2026.
- GDPR: voice is biometric data when used for identification. Consent + data minimization apply.

## Vendor responses

- **ElevenLabs:** Voice cloning ToS prohibits cloning without consent. Watermarking on outputs (easily stripped). Pro/Business tiers require additional KYC.
- **OpenAI:** Does not offer voice cloning in the public API. Has a closed Voice Engine product gated to enterprise / approved use cases. ~9 preset voices only in the public Realtime API.
- **Suno:** Verification layer for voice cloning; voices private by default; explicit non-celebrity training intent stated.
- **Sesame:** Open weights — no vendor-side controls. Responsibility on the user.
- **HeyGen / Rask:** Require uploader to assert ownership / consent on the avatar / voice they're dubbing.

## Practical posture for an individual

1. **Get explicit consent** before cloning anyone else's voice. A signed release for any use beyond personal listening.
2. **Disclose synthetic provenance** in any public-facing use. The EU AI Act will make this legally required; do it now anyway.
3. **Don't use for impersonation** — even satire crosses a line if recipients can't tell it's fake.
4. **Self-defense:** If you have an aging parent, set a code-word for voice-call emergencies. Vishing scams can already replicate a loved one's voice from a 30-second TikTok clip.

## Detection / watermarking

- ElevenLabs and OpenAI watermark outputs but watermarks are not robust to re-recording, transcoding, or significant editing.
- Open-source detectors (e.g. Pindrop, Resemble Detect) exist but no detector is reliable enough to base accusations on.
- The detection arms race favors the generator side; expect this to remain unsolved.

## Sources
- https://www.coons.senate.gov/news/press-releases/senators-coons-blackburn-klobuchar-tillis-introduce-bill-to-protect-individuals-voices-and-likenesses-from-ai-generated-replicas/
- https://en.wikipedia.org/wiki/No_Fakes_Act
- https://www.theregreview.org/2025/08/18/rothman-reintroduced-no-fakes-act-still-needs-revision/
- https://law.temple.edu/10q/the-clone-wars-a-new-congress-reconsiders-the-no-fakes-act-to-combat-digital-deepfakes/
- https://holonlaw.com/entertainment-law/synthetic-media-voice-cloning-and-the-new-right-of-publicity-risk-map-for-2026/
- https://www.realitydefender.com/insights/the-state-of-deepfake-regulations-in-2025-what-businesses-need-to-know
- https://sites.law.duq.edu/juris/2025/11/25/the-law-speaks-up-ai-voice-cloning-and-consent/

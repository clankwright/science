# Regulatory and Funding Context

## What it is

The legal and reimbursement framework that determines whether a US or EU resident with a disability can actually obtain and use AI accessibility tools, who pays, and what employers / public agencies are required to provide. The 2024-2026 picture: the established laws (Section 508, ADA, Medicare SGD funding, EAA) cover AI tools to varying and not-yet-fully-tested degrees.

## Key frameworks

### US

- **ADA Title I (employment)**: employers with 15+ employees must provide reasonable accommodation. AI accessibility tools (Be My AI, Otter Pro for deaf employees, Speechify Premium for dyslexic employees, ChatGPT Plus as executive-function scaffold for ADHD employees) are increasingly framed as accommodations and paid for by the employer when requested formally.
- **ADA Title II (public services) and Title III (public accommodations)**: covers government services, businesses open to the public. Web-accessibility lawsuits (often citing WCAG 2.1 AA as the de facto standard) have surged; AI-driven inaccessibility (e.g. inaccessible chatbots, AI-generated alt text that is wrong) is a new front.
- **Section 508**: federal agencies must procure accessible IT. Includes AI procurement: vendors must demonstrate that their AI products work with screen readers, keyboard-only navigation, captions for deaf users, etc. The 2026 Interagency Accessibility Forum focuses heavily on AI procurement.
- **Medicare Speech-Generating Device (SGD) benefit (Part B)**: covers one SGD per beneficiary per 5 years after SLP evaluation, physician sign-off, and demonstration that lower-cost devices were tried and found inadequate. Covers eye-gaze-equipped SGDs ($7-15k devices) for ALS, locked-in syndrome, severe CP. Does **not** cover iPad + AAC app combinations as such; some workarounds via "dedicated SGD" framing.
- **Medicare denial trigger**: Medicare and most insurers deny SGD funding once the patient enters hospice or moves to a nursing home. Multiple ALS advocacy organizations have lobbied to change this; not changed as of May 2026.
- **State Medicaid waivers + ABLE Act + school-district AT funds + state vocational-rehabilitation agencies**: all alternate paths to fund AAC, eye-gaze, smart glasses, AI-tool subscriptions for individuals.
- **NPO funding pools**: Team Gleason (ALS, all assistive tech), MND Association (UK), ALS Society of Canada, and others backstop the gaps Medicare leaves.

### EU

- **European Accessibility Act (EAA)**: came into effect **June 28, 2025**. EU-wide accessibility requirements for products and services placed on the EU market: smartphones, ATMs, ticketing machines, e-commerce sites, banking services, e-books, audiovisual media, transport. Compliance standard: WCAG 2.1 AA. Penalties up to €1M.
- The EAA forces vendors to interoperate with assistive technologies, which indirectly mandates that AI accessibility tools (screen readers, captioning apps) can hook into products meaningfully.
- Mandatory disability and accessibility training for service providers.
- **Web Accessibility Directive** (2016/2102, public-sector sites): predates the EAA, still binding.

### UK / other

- **Equality Act 2010** (UK): broadly equivalent to ADA. Disability discrimination by employers and service providers prohibited.
- **Accessible Canada Act** (2019): federal; phased rollout through 2040. Provincial laws (AODA in Ontario, ACA in Manitoba) supplement.
- **Australia DDA + DSAPT**: similar.

## Specific unlocks tied to funding

- **ALS patient with bulbar onset can get a $12k Tobii Dynavox Indi 7 with eye-gaze through Medicare**, with an SLP evaluation paid by Medicare Part B, in 3-9 months from referral. This was true pre-AI; the AI overlay (LLM phrase prediction integrated into the device, banked / cloned voice) comes free with the modern hardware / firmware.
- **Federal employee with low vision can get Aira reimbursement, Be My Eyes Pro, Speechify Pro, JAWS, ZoomText** through the Computer/Electronic Accommodations Program (CAP), free to the employee, no proof-of-disability paperwork beyond the request.
- **University student with documented dyslexia or ADHD** typically gets Speechify Premium, Audible, sometimes ChatGPT Plus, paid by the university disability-services office under ADA accommodations.
- **EU consumer with low vision** as of June 2025 can demand that any e-commerce site, e-book reader, or banking app sold in the EU works with their screen reader; non-compliance has actual teeth.

## Limits

- **AI subscriptions are not durable medical equipment** under Medicare; cannot generally bill ChatGPT Plus or Speechify Premium to insurance.
- **The "one SGD per 5 years" rule** locks ALS patients into 2024-era hardware through 2029, slowing AI feature uptake.
- **Hospice and nursing-home cutoffs**: SGD funding stops, exactly when communication needs are most acute.
- **Section 508 procurement compliance is uneven**: federal agencies still buy AI tools that don't fully support screen readers; enforcement is slow.
- **EAA enforcement** is via member-state market-surveillance authorities; first enforcement actions are just beginning (late 2025-2026).
- **AI chatbots failing screen-reader users** is a new lawsuit category in 2025-2026; many vendors have not retrofitted accessibility into LLM UIs.

## Sources

- https://www.section508.gov/manage/laws-and-policies/
- https://www.ada.gov/resources/disability-rights-guide/
- https://www.rock.law/accessibility-laws-ai-interfaces-products-ada-section-508-wcag/
- https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en
- https://commission.europa.eu/news-and-media/news/eu-becomes-more-accessible-all-2025-07-31_en
- https://www.ampetronic.com/what-the-eu-accessibility-act-means-for-assistive-listening-in-2025/
- https://www.cast.org/resources/bridging-accessibility-gaps-the-european-accessibility-act-meets-ada-title-ii/
- http://www.aacfundinghelp.com/funding_programs/medicare.html
- https://aacinstitute.org/funding-2/
- https://teamgleason.org/pals-resource/communication-devices/
- https://www.youralsguide.com/speech-generating-devices.html
- https://eyegaze.com/funding/

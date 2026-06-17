---
id: opentrons
title: "OpenTrons"
kind: tool
vendor: OpenTrons Labworks
access: hardware purchase
maturity: production
cost_tier: $5k (OT-2) or $25k (Flex)
year_first_public: 2014; OT-2 2018; Flex 2023
last_verified: 2026-05-04
---

# OpenTrons

> **Summary:** Open-source liquid-handling robots at consumer prices. OT-2 ($5k) and Flex ($25k) accept Python protocols. LLM-generated protocols collapse the protocol-writing barrier; community labs (Genspace NYC, BioCurious Bay Area) provide membership access for $100-200/mo for users who can't justify owning one.

**Sources:** [[raw/amateur-science/opentrons-and-bench-automation.md]]

## What it does

Programmable pipetting robot for moving small liquid volumes between wells, tubes, and plates. Standard wet-lab work (PCR setup, dilution series, plate prep) becomes a Python script. Hardware modules add temperature control, magnetic separation, and centrifuge integration.

## Access and cost

OT-2 ~$5,000 plus reagents and consumables. Flex ~$25,000 with more capacity and gripper. Open-source software stack. Community-lab access for those without space or budget.

## Distinctive trait

LLM-generated Python protocols. A user with a JoVE-style published protocol asks Claude to translate it into OpenTrons API calls; the result runs reproducibly and is shareable as code. Pre-LLM, protocol-writing for the OT-2 was the actual bottleneck for non-programmer biologists; that bottleneck is largely gone.

## Limits

- Wet-lab safety, biosafety, and reagent handling are not solved by automation; user training is still required.
- LLM-generated protocols still hallucinate API calls; iteration with the OpenTrons simulator is essential.
- Sterile technique and reagent quality dominate experimental success more than pipetting precision.
- Community lab access has long waitlists in some cities.

## See also

- [Amateur scientific computing](../capabilities/amateur-scientific-computing.md)

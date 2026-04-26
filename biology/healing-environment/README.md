# Healing Environment — Knowledge Base

A markdown-source knowledge base on how built environments, therapeutic devices, and psychosocial factors measurably affect healing speed and health outcomes in rehabilitation settings.

**Design pattern:** minimal variant (see `CLAUDE.md` and the repo's `llm-wiki-howto.md`). Plain markdown + `sources.json` manifest. No scripts required.

**Current coverage:** 18 curated sources, 7 topics, 6 expanded paper pages.

**Evidence quality:** 3-pass verification. All sources have primary URLs (PubMed, DOI, NASA, journal). No commercial testimonials.

## Layout

```
biology/healing-environment/
├── CLAUDE.md             # LLM operational spec
├── README.md             # this file
├── sources.json          # 18-source manifest with URLs, licenses, topics
├── log.md                # append-only ingest log
└── wiki/
    ├── index.md          # catalog of all pages
    ├── papers/           # 6 expanded paper pages
    │   ├── ulrich-1984.md
    │   ├── kiecolt-glaser-1995.md
    │   ├── felitti-1998.md
    │   ├── nasa-pemf-2003.md
    │   ├── allen-cogfx-2016.md
    │   └── ekholm-blankets-2020.md
    └── topics/           # 7 topic synthesis pages
        ├── biophilic-design.md
        ├── stress-healing.md
        ├── photobiomodulation.md
        ├── pemf.md
        ├── circadian-lighting.md
        ├── acoustic-environment.md
        └── indoor-air-quality.md
```

## Key Findings

**Biophilic design:**
- Tree view vs brick wall: 8.5% shorter surgical recovery (Ulrich 1984, N=46, Science)
- 28-study meta-analysis confirms (Gaston 2025)
- Plants in hospital rooms: reduced BP, HR, pain, anxiety (Park & Mattson 2008, N=90 RCT)
- Forest bathing: cortisol -13-16% (Li 2009, 24-forest field experiments)

**Stress and healing:**
- Psychological stress slows wound healing 40% (Kiecolt-Glaser 1995, Lancet, N=13)
- Childhood trauma dose-response predicts all major causes of adult death (ACE Study, N=9,508)
- Psychological prehab → 1.62 days shorter hospital stay (20 RCTs, N=2,376)

**Therapeutic devices (verified regulatory status):**
- LLLT/Photobiomodulation: multiple Cochrane reviews, 22 FDA clearances (Erchonia), CE, mechanism established
- PEMF: FDA-cleared devices exist, NASA study is in vitro only (frequently overcited)
- 40Hz gamma: FDA Breakthrough Device, Phase III ongoing (Cognito Therapeutics)

**Environment:**
- Circadian lighting: 50% fewer falls (MDPI 2025)
- Hospital noise: exceeds WHO 45 dBA by >20 dB routinely (PMC 2020)
- Enhanced ventilation + low-VOC: 101% higher cognitive function (Harvard COGfx, N=24)

## What Belongs Here

Primary research on: biophilic design, healing architecture, photobiomodulation, PEMF, circadian lighting, acoustic environment, indoor air quality, psychoneuroimmunology, salutogenic design, and evidence for specific therapeutic modalities used in rehabilitation.

## What Does Not Belong Here

Business strategy, grant applications, product specifications, regulatory cost estimates, or commercial testimonials.

## Requirements

None. Plain markdown — read directly in any editor or on GitHub.

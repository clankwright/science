# Healing Environment — Wiki Schema

Domain: how built environments, therapeutic devices, and psychosocial factors measurably affect healing speed and health outcomes in rehabilitation settings.

## Structure

```
raw/              # Immutable source downloads (gitignored once large)
sources.json      # Canonical source manifest
wiki/
  index.md        # Catalog: every page with one-line summary
  papers/         # One page per primary source (filename = sources.json id)
  topics/         # One page per research topic
log.md            # Append-only operation log
```

## Page Types

**Paper page** (`wiki/papers/<id>.md`): one per entry in sources.json.
Required front matter:
```yaml
---
id: <sources.json id>
title: "<title>"
kind: paper
year: <int>
venue: "<journal>"
access: open | abstract-free | paywall
license: CC-BY | public-domain | paywall | unknown
topics:
  - <topic-slug>
---
```

**Topic page** (`wiki/topics/<slug>.md`): one per research topic.
Required front matter:
```yaml
---
id: <slug>
title: "<human title>"
kind: topic
topic: <slug>
---
```

## Wikilink Convention

Use relative markdown links: `[Ulrich 1984](../papers/ulrich-1984.md)`, `[biophilic design](../topics/biophilic-design.md)`.

## Evidence Tiers (use consistently in topic pages)

- **Tier 1**: RCT or meta-analysis. Lead with these. State n and effect size.
- **Tier 2**: systematic review, strong observational. State n and method.
- **Tier 3**: preliminary, institutional adoption, or mechanism-supported but not RCT-confirmed. Flag explicitly.
- **Do not include**: anecdotal, commercially self-reported, or unfounded claims.

## Ingest Workflow

1. Add entry to `sources.json`.
2. Download primary source to `raw/<id>.pdf` or `raw/<id>.md`.
3. Write `wiki/papers/<id>.md` — summary, key findings, wikilinks to topics.
4. Update each linked topic page to reference the new paper.
5. Update `wiki/index.md`.
6. Append to `log.md`: `YYYY-MM-DD INGEST: <id> — <one-line>`

## Query Workflow

1. Read `wiki/index.md` to find relevant pages.
2. Read topic pages for synthesis.
3. If analysis is valuable, file as new topic page or update existing.
4. Append to `log.md`: `YYYY-MM-DD QUERY: <question>`

## What Belongs Here

- Primary research: biophilic design, healing architecture, photobiomodulation, PEMF, circadian lighting, acoustic environment, indoor air quality, psychoneuroimmunology, salutogenic design.
- Device categories with regulatory status (CE/FDA/cleared/research-only).
- Key researchers and institutions.

## What Does Not Belong Here

- Business strategy, grant applications, product specs, consortium formation.
- Unverified claims without primary source URLs.
- Commercial testimonials.

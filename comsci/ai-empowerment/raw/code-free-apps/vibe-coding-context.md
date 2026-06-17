# Vibe Coding: The Cultural Moment

**Date verified:** 2026-05-03

## The tweet

**February 2, 2025.** Andrej Karpathy posts to X:

> "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists. It's possible because the LLMs (e.g. Cursor Composer w Sonnet) are getting too good. Also I just talk to Composer with SuperWhisper..."

The tweet describes:
- Talking to the model via voice (SuperWhisper -> Cursor Composer)
- Asking for trivial UI changes ("decrease the padding") without touching the code
- Accepting all diffs without reading them
- When errors happen: paste the error back and let the model fix it
- When it can't fix something: "ask for random changes until it goes away"

Karpathy explicitly framed it as **"not too bad for throwaway weekend projects, but still quite amusing."**

## The reception

- Tweet viewed **>4.5 million times.**
- Karpathy later (Feb 2026 retrospective) said it was "a shower of thoughts throwaway tweet."
- Term added to **Merriam-Webster** as a trending new noun within weeks.
- **Collins Dictionary 2025 Word of the Year.**
- Spawned a cottage industry of courses, blog posts, conferences, and "vibe-coding" branded products. Vibecoding.app, vibe-coding course on Coursera, dozens of Udemy courses, etc.

## The numbers (cumulative through 2026)

Order of magnitude proof that the workflow is real, not just a meme:

| Tool | Milestone | Date |
|---|---|---|
| Bolt.new | $4M ARR in 4 weeks | Nov 2024 |
| Bolt.new | $40M ARR in 5 months | Feb 2025 |
| Lovable | $100M ARR in 8 months (fastest ever) | July 2025 |
| Base44 | Sold to Wix for $80M cash, 6 months old, 1 employee | June 2025 |
| Lovable | $200M ARR | Nov 2025 |
| Lovable | $400M ARR | Feb 2026 |
| Replit | Agent 3 (200-min autonomy, self-healing) | Late 2025 |

Lovable's $400M ARR with 146 employees works out to ~$2.7M revenue per employee, roughly the highest figure ever recorded in SaaS.

## The criticism

### Andrew Ng's reality check

Ng publicly cautioned that "vibes" aren't a substitute for engineering judgement. The label trivialises the careful prompting and review that competent users actually do; non-developers who literally take the workflow at face value ship broken software.

### Security data

- **Lovable, May 2025:** 170 of 1645 sampled Lovable apps exposed personal data (~10%). Reported in mainstream press; Lovable patched but the pattern persists in newer apps.
- **Veracode, Oct 2025:** three-year longitudinal study of LLM code-gen. Functionality improved sharply; security stayed flat. Larger models did not generate more secure code. Reasoning models (OpenAI's) showed a small bump; others did not.
- **CodeRabbit, Dec 2025:** analysis of 470 OSS PRs. AI co-authored code: **1.7x more major issues**, **2.74x more security vulnerabilities**, **75% more misconfigurations**, elevated logic errors and incorrect dependencies.
- **Cloud Security Alliance, 2026:** "credential sprawl and SDLC debt" called out as the systemic risk.

### "Vibe coding hangover"

**September 2025**, Fast Company: senior engineers report "development hell" cleaning up vibe-coded codebases handed off by non-technical founders or junior devs. Pattern: works fine to the MVP, becomes unmaintainable past 2-5k lines, gets handed to an engineer who decides it's faster to rewrite.

### "Vibe Coding Kills Open Source" (Jan 2026)

Multi-university paper. Argument: vibe coders consume open-source libraries without engagement (no issues, no PRs, no donations) because they don't know what library they're using. Maintainer load increases (more bug reports of the form "your library doesn't work" with no reproducer); contribution goes down. Hidden externality.

### "Vibe coding is over" (Apr 2026)

PolyfdoR / Medium: argument that the easy MVP wins are done; what comes next (production hardening, security, scale) is "much harder" and requires real engineering. Whether or not one buys the framing, it's a representative pushback as of mid-2026.

## What it means for individual empowerment

The cultural moment is real and the empowerment is real **for the prototype-and-validate stage**: someone with no engineering background can ship a thing other people will use, get feedback, validate willingness-to-pay, in days instead of months. Base44 is the existence proof.

The empowerment **breaks down at production-grade software**. The honest framing for the wiki: vibe coding moves the constraint from "can I build it at all" to "can I make it secure, maintainable, and scale." For most individuals' use cases (internal tools, personal apps, MVPs), the new constraint is fine. For paid SaaS handling other people's data, it isn't, and the security data backs that up.

## Sources

- https://x.com/karpathy/status/1886192184808149383
- https://x.com/karpathy/status/2019137879310836075
- https://en.wikipedia.org/wiki/Vibe_coding
- https://www.coderabbit.ai/blog/a-semantic-history-how-the-term-vibe-coding-went-from-a-tweet-to-prod
- https://retool.com/blog/vibe-coding-risks
- https://checkmarx.com/blog/security-in-vibe-coding/
- https://medium.com/@ahmed.hafdi.contact/vibe-coding-is-over-what-comes-next-is-much-harder-9fe95b509850
- https://www.klover.ai/vibe-coding-karpathy-viral-term-ng-reality-check-klover-first-mover-advantage/

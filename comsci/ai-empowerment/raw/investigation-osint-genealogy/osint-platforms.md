# OSINT Platforms: Maltego, SpiderFoot, Lampyre

## What it is

End-to-end OSINT platforms that ingest a starting "selector" (an email, a domain, a phone number, a name, a username, a wallet address) and pivot through 100+ data sources to build a graph of related entities. Used by cybersecurity teams, fraud investigators, journalists, and (for Maltego specifically) the FBI, Interpol, and 60% of Dow 30 companies. The 2024-2026 shift is the addition of LLM-driven correlation and natural-language querying on top of the underlying transform / module library.

## Specific unlocks

- Map a romance scammer's infrastructure starting from a single Telegram username: pivot to the same alias on dating sites, find associated email addresses via breach databases (HaveIBeenPwned, DeHashed), find the wallet addresses they sent funds to, find other victims tagged in the same wallet's transaction history.
- Investigate a phishing campaign: feed a domain into SpiderFoot, get back the registrar history, the IPs it has resolved to, every other domain on the same nameserver, the SSL cert fingerprint and what other sites use it, breach mentions, and dark-web mentions. Hours, not weeks.
- Build a network graph of a target organization's external attack surface (subdomains, exposed services, employee email format, leaked credentials, third-party SaaS dependencies) entirely from public sources, then export to Neo4j or Maltego for visualization.
- Run continuous monitoring of a brand's name, key executives' faces, or product imagery across dark-web markets and Telegram channels via Maltego's third-party integrations (Social Links, Flashpoint, Cybersixgill).

## Tools that matter

- **Maltego.** Commercial; the de-facto OSINT graph tool. Community Edition is free with limited transforms; CaseFile and Pro tiers run $1K-10K+. Real-time AI-assisted monitoring features added in 2024-2025.
- **SpiderFoot.** Open-source CLI plus web UI; 200+ modules querying 100+ data sources. SpiderFoot HX is the hosted commercial variant. Free local install is the standard hobbyist starting point.
- **Lampyre.** Commercial OSINT platform widely cited in 2025-2026 best-of lists; AI-driven automation for routine pivot chains.
- **Recon-ng.** Open-source, modular, Python-based; favored by penetration testers who want CLI-only workflows.
- **GHunt.** Specialized OSINT tool for Google account enumeration; from a single Gmail address derives YouTube channels, public Drive files, Google Maps reviews, and approximate location pings.

## Pre-AI baseline

OSINT pivoting was a manual exercise in tab-juggling: open a domain in WHOIS, copy the registrar email into a breach database, copy the resulting handle into Twitter, copy a result into Facebook, and so on. Every analyst built their own ad-hoc workflow. Maltego (founded 2007) industrialized the transform pattern, but you still had to manually decide which pivot to run next. LLM-assisted querying lets the platform suggest the next pivot or run a dozen in parallel.

## Cost / access

- Maltego Community: free, 12 transforms.
- Maltego Pro: roughly $999/year per seat, plus per-transform fees for premium data integrations.
- SpiderFoot OSS: free.
- SpiderFoot HX: hosted plans from ~$50-200/month.
- Recon-ng, GHunt: free.
- Lampyre: subscription, approximately $200-400/month.

## Maturity

Production for cybersecurity and fraud investigation use cases. The bottleneck is no longer tooling; it is access to high-value third-party data feeds (breach databases, paid people-search aggregators, dark-web indexes), most of which are gated by jurisdiction and intended-use clauses. SpiderFoot and Recon-ng work fine for a hobbyist; Maltego Pro is what a paid investigator buys.

Where it breaks: data freshness varies wildly across modules; some integrations require specialty API keys with their own pricing.

## Risk shape

These platforms work just as well for stalking, harassment, and pre-attack reconnaissance as for legitimate investigation. Maltego and SpiderFoot impose no use-case gating beyond their commercial T&Cs. The legal layer (computer-fraud statutes, anti-stalking laws) is the only friction.

## Sources

- https://lampyre.io/blog/15-best-osint-tools-in-2025/
- https://www.toolkitly.com/compare-ai-tools/629-619/650/spiderfoot-vs-maltego
- https://www.webasha.com/blog/what-are-the-best-osint-tools-for-cybersecurity-and-investigations-in-2026
- https://www.wiz.io/academy/threat-intel/osint-tools
- https://sociallinks.io/products/sl-professional/maltego

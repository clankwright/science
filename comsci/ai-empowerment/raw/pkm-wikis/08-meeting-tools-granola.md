# Meeting Transcription Tools (PKM-Adjacent Ingest)

Granola, Otter, Fireflies, Fathom. Not PKM tools per se, but the dominant ingest pipeline for spoken knowledge work in 2026. Their output (structured meeting notes, action items, summaries) is increasingly fed into downstream PKM systems.

## Granola

**Vendor:** Granola Labs.
**Access:** Mac + Windows desktop apps.
**Cost:** Free (Basic, limited history); Individual $18/user/mo; Business $14/user/mo (better deal); Enterprise $35/user/mo.
**Maturity:** Production. Breakout adoption among founders / VCs / consultants in 2025-2026.
**Distinctive trait:** Captures audio directly from device output. No bot joins the call. No "recording in progress" announcement. User takes rough notes during the meeting; AI augments them into structured summaries after.

Why it won the founder/operator segment: the bot-free capture is socially frictionless (no "Granola has joined the meeting" awkwardness), the device-audio model works on any platform (Zoom, Meet, Teams, in-person, phone), and the "your rough notes + AI structure" output is more usable than raw transcripts.

## Otter.ai

**Vendor:** AISense.
**Access:** Web, mobile, desktop. Bot-based meeting joiner.
**Cost:** Free (limited mins); Pro $17/mo; Business $30/user/mo.
**Maturity:** Production since 2018; oldest player in the category.
**Distinctive trait:** Strongest live-transcription accuracy and speaker diarization. Otter Assistant joins meetings as a bot.

Now feels dated next to Granola for individual users; still strong for enterprise where bot-joining is policy-required.

## Fireflies.ai

**Vendor:** Fireflies.
**Access:** Bot-based.
**Cost:** Free (limited); Pro $18/user/mo; Business $29/user/mo.
**Maturity:** Production.
**Distinctive trait:** CRM and Slack integration depth. Sales-team focus. AI-generated meeting topics, action items, sentiment analysis pushed into Salesforce/HubSpot/Slack automatically.

## Fathom

**Vendor:** Fathom.
**Access:** Web, desktop. Bot-joiner.
**Cost:** Generous free tier (unlimited recordings on individual free plan); Premium $24/user/mo; Team $32/user/mo.
**Maturity:** Production.
**Distinctive trait:** Most generous free tier. Recording-call-summary model with timestamped action items.

## How they fit into PKM

The output from these tools is the highest-volume new content most knowledge workers generate. A 30-meeting week produces 25-50 pages of structured notes. Three integration patterns are common:

1. **Tool stays the wiki.** User searches inside Granola/Otter for past meeting context. Adequate for the past 3-6 months; collapses for longer histories.
2. **Export to Obsidian / Notion / markdown folder.** User pipes meeting summaries into a personal vault. Granola has direct integrations to Notion, Obsidian, Slack, Linear; Otter exports to Notion.
3. **Feed into NotebookLM or Claude Projects.** Drop a quarter of meeting summaries into a project, ask "what have I committed to" or "what blockers came up across all customer calls."

Pattern 3 is the 2026-native workflow.

## Honest limits

- **Speaker confusion** in multi-party calls remains imperfect; mis-attributed quotes happen.
- **Privacy and consent.** Bot-joiner tools (Otter, Fireflies, Fathom) require disclosure in many jurisdictions; Granola's bot-free model side-steps this awkwardly (the user is still recording the other party).
- **Cost compounds.** A 5-person team running Granola Business pays $70/mo; same team on Otter Business pays $150. The price floor for "everyone gets AI meeting notes" has fallen but is not zero.
- **Action-item extraction is mediocre.** Most tools produce too many or too few action items. Manual curation still needed for any team that takes follow-through seriously.

## Individual-empowerment angle

For solo founders, freelance consultants, and independent professionals, AI meeting notes did for spoken knowledge work what NotebookLM did for documents: collapsed the synthesis tax. A single operator now goes into back-to-back-to-back calls and ends the day with a clean structured log of what was said, what was decided, and what follow-up is owed, without staffing an EA. Granola is the standout for this user.

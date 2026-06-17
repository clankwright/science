# NotebookLM

**Vendor:** Google.
**Access:** Free at notebooklm.google.com with a Google account; Plus tier $20/mo.
**Cost tier:** Free / low.
**Maturity:** Production. GA late 2024 after long preview as Project Tailwind.
**Distinctive trait:** Source-grounded RAG over user-uploaded documents with refusal to answer outside the corpus. Audio Overviews feature popularized two-host podcast generation.

## What it does

User creates a "notebook" and uploads up to 50 sources on free, 300 on Plus. Sources can be PDFs, web URLs, Google Docs, plain text, YouTube transcripts, audio files. Gemini (currently 2.5/3.0 series, depending on tier) indexes them. The chat interface refuses to answer questions whose grounding isn't in the uploaded sources and cites the exact passage for every claim via inline "citation chips."

## 2026 features

- **Audio Overviews.** AI-generated podcast-style discussion between two synthetic hosts summarizing the corpus. Interactive Mode (added 2025) lets users interrupt with follow-up questions answered live by the hosts.
- **Mind Maps.** Interactive node-graph visualization of source-and-concept relationships. Plus tier.
- **Video Overviews.** Slide-deck-style video summaries.
- **Studio Panel.** Persistent storage of multiple Audio/Video/Mind Map/Report outputs per notebook.
- **Reports.** Long-form structured writeups synthesizing the corpus on a chosen prompt.
- **Custom instructions / Deep Research integration** with Gemini workflows.

## Pricing (May 2026)

- **Free:** 100 notebooks, 50 sources/notebook, 50 chat queries/day, 3 Audio Overviews/day.
- **Plus:** $20/mo. 500 notebooks, 300 sources/notebook, 500 chat queries/day, 20 Audio Overviews/day. Customizable AI response styles.
- **Workspace-bundled** for orgs on Gemini for Workspace plans.

## Honest limits

- **Hallucination rate ~13%** in independent testing (versus ~40% for general-purpose ChatGPT/Gemini over the same docs). Failure mode is interpretive overconfidence: turning attributed opinions into flat factual claims; adding unsupported characterizations.
- **Citation accuracy ~95%** in clinical evaluation. Misattribution of which source a claim came from is the residual failure.
- **Audio Overview truncation.** Very long source sets get truncated in the audio generation context window, producing "hallucinated summaries" of material the host pair never actually heard.
- **Source-cap pressure.** 300 sources is generous but not unlimited; serious researchers exceed it.
- **No real outbound API.** You can't programmatically query a notebook from your own apps; the value lives behind Google's UI.
- **Lock-in.** Notebooks are not exportable in a portable format. You can copy the synthesized text out, but the live grounding stays in Google's index.
- **No ingestion automation.** Sources must be manually uploaded; no folder-watch, no Drive auto-sync of a folder, no email-in.

## Individual-empowerment angle

For non-technical users, NotebookLM is the most direct path from "pile of PDFs" to "ask questions about the pile." It is the first product where "talk to your sources" actually works without lying. Use cases now common:

- Patients dropping in their full medical record + relevant literature, asking specific questions before appointments.
- Students dumping every assigned reading for a course and generating audio reviews for commutes.
- Lawyers loading discovery documents (within ethics rules) for case prep.
- Hobbyists indexing every paper or article they've collected on a niche topic.

The Audio Overview feature alone moved NotebookLM from "useful" to "viral" in late 2024, drawing tens of millions of users.

## Where it doesn't replace the Karpathy pattern

NotebookLM produces ephemeral synthesis on demand. The Karpathy pattern produces persistent synthesis as files. For a corpus you'll use once (study guide, case prep), NotebookLM wins on UX. For a living personal library you'll add to for years and want to own, the markdown-folder pattern wins on portability.

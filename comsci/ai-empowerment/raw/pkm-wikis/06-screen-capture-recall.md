# Screen / Browser / Audio Capture for Recall

The "capture everything passively, search later" category. Promising in concept, turbulent in product execution.

## Rewind.ai (RIP)

**Vendor:** Rewind AI (acquired by Meta Dec 2025).
**Status:** Capture features disabled Dec 19, 2025. App effectively dead for new users.
**What it did:** Always-on Mac screen + audio capture. Compressed, OCR'd, embedded everything locally. Searchable timeline. Asked "what did the doc say last Tuesday at 3pm" and got the screenshot back with extracted text.
**Why it mattered:** First product to make passive screen-capture-as-memory actually usable. Native macOS, on-device, ~$20/mo.
**Why it's gone:** Meta acquired the team for AR glasses work; consumer product was sunsetted within months.

## Microsoft Recall

**Vendor:** Microsoft (Windows 11, Copilot+ PCs only).
**Access:** Bundled with Copilot+ PCs; opt-in (after the May 2024 privacy backlash forced it from default-on).
**Cost:** Included with Windows 11 on supported hardware.
**Maturity:** GA in 2025 after redesign. Stable on Copilot+ PCs.
**Distinctive trait:** OS-level integration. On-device processing on the NPU; no cloud upload. Snapshots indexed by an on-device LLM and a vision-language model.

What it does: takes periodic screenshots, OCRs them, and lets you search by natural-language description ("the document about Q3 budget I had open last week"). Excludes private-browsing windows and DRM'd content by default; user can blacklist apps and sites.

Limits: requires Copilot+ PC hardware (Snapdragon X or recent Intel/AMD with NPU). Locked to Windows. Search is local-only; no API for third-party apps to query the index.

## Screenpipe

**Vendor:** Screenpipe (open source, MIT).
**Access:** Mac, Windows, Linux. Self-hosted.
**Cost:** $400 lifetime license (one-time); free for the open-source core.
**Maturity:** Production for individual use; rapidly evolving.
**Distinctive trait:** The Rewind successor that beat Rewind on functionality before Meta killed it. Screen + audio capture, transcription, fully local, developer API. Works cross-platform.

This is now the de facto open replacement for Rewind in 2026.

## Heyday (defunct)

Browser extension that resurfaced relevant past pages as you browsed. Acquired by Hubspot in 2022; consumer product wound down.

## Littlebird

**Vendor:** Littlebird (raised $11M March 2026).
**Access:** Early access.
**Cost:** TBD.
**Maturity:** Beta.
**Distinctive trait:** AI-assisted recall reading the user's screen contents continuously, similar pitch to Rewind/Recall but cross-platform and with explicit query-your-data positioning.

## Honest limits across the category

- **The privacy ceiling is real.** Even on-device, "everything you've ever seen" is a sensitive index. The 2024 Recall backlash showed users won't accept default-on capture without strong opt-in, exclusions, and visible controls.
- **Storage cost grows fast.** Multi-monitor 4K, 24/7, 1fps screenshots = hundreds of GB/month if not aggressively compressed. All current tools compress + dedupe; users still hit limits.
- **The "why didn't I take a note" question.** For most knowledge work, intentional capture (a note, a bookmark, a save-as) is higher signal than passive screen capture. The recall tools fill in for missed captures, not replace deliberate note-taking.
- **Acquisition risk.** Rewind's death is a category warning: the most polished consumer recall app on Mac was acqui-hired and killed in under 12 months. Open source (Screenpipe) is the resilience answer.

## Individual-empowerment angle

When the capture works and persists, this category answers a question PKM never could: "what was on my screen when I had the insight I'm trying to reconstruct." For researchers, journalists, and engineers who flip between dozens of sources, the recall index becomes a cross-app citation trail without any explicit note-taking discipline.

The 2026 reality is that this category is still in flux. The safe bet for individuals is Screenpipe (cross-platform, open source, you own the data) or Microsoft Recall if already on a Copilot+ PC.

# longevity-chat TODO (handoff doc)

> Cross-cycle state for the longevity-chat build. Every cycle reads this + `SPEC.md` end-to-end before picking work; updates both in the same commit as the code change.

## In flight

<!--
  One line per currently-running skill:
  - [<skill-name> @ <utc-iso>] <one-line>
  Empty when nothing is in progress.
-->

## Just shipped (last cycle)

<!--
  Newest first. Format:
  - <one-line summary> — by <skill> at <utc-iso>
  Correlate to commits via: git log --oneline --grep '<keyword>'
  Trim to last 10.
-->

- SPEC + TODO scaffolded for the 10-phase longevity-chat build (Gemini 2.5 Flash + agentic retrieval over the longevity wiki, deployed alongside csvagent on the existing VPS) — by claude (manual) at 2026-05-23

## Next up (queued for next cycle)

<!--
  Top item is the next cycle's work unless the user redirects.
  Format: - [<difficulty>] <one-line>. Reason: <spec id, supervisor verdict, user request>
  Ordered by impact + dependency, not by SPEC phase number.
-->

- [easy] Scaffold Phase 0.1-0.6: pyproject.toml, top-level layout mirroring csvagent, `.env.example`, `start_app.py`, `main.py` with `/health`, first pytest. Reason: SPEC Phase 0 — nothing else can land until the repo bootstraps.
- [medium] Phase 1 wiki tools: `load_index`, `search_wiki`, `read_page`, `follow_wikilinks` + tests against the real longevity wiki. Reason: SPEC 1.1-1.5 — Phase 2 agent loop blocks on these tools existing.
- [hard] Phase 2 agent loop: `ChatAgent.run` synchronous tool-use loop against Gemini 2.5 Flash with the longevity system-prompt preamble. Reason: SPEC 2.1-2.6 — core capability; everything user-facing depends on this working end-to-end.
- [hard] Phase 3 streaming chat endpoint: `POST /api/chat` SSE stream, async agent loop, `chat_sessions` + `chat_messages` persistence. Reason: SPEC 3.1-3.4 — the UI in Phase 4 wires directly to this.
- [medium] Phase 4 frontend SPA: `static/index.html` + `chat.js` + `style.css` + manual browser smoke. Reason: SPEC 4.1-4.5 — first user-visible surface.
- [medium] Phase 5 cost tracking + budget caps + IP rate limit. Reason: SPEC 5.1-5.5 — required before going public; abuse-prevention floor.
- [medium] Phase 6 wiki sync from github + TF-IDF rebuild on VPS. Reason: SPEC 6.1-6.4 — VPS needs the corpus; build artifacts are gitignored.
- [easy] Phase 7 logging + structured errors + admin-only recent-errors endpoint. Reason: SPEC 7.1-7.4 — operability floor for the launch window.
- [easy] Phase 8 pytest config + opt-in live test + `bin/test.sh`. Reason: SPEC 8.1-8.3 — gates the deploy script.
- [medium] Phase 9 deploy: systemd unit + nginx vhost + certbot + `bin/deploy.sh` + DNS + production smoke. Reason: SPEC 9.1-9.6 — first production traffic. Blocks on the `<chat-domain>` decision.
- [easy] Phase 10 launch: backup cron, robots.txt + sitemap, 2-week monitoring window. Reason: SPEC 10.1-10.4 — wraps the build.

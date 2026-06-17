# GitHub Copilot: Agent Mode and Coding Agent

**Compiled:** 2026-05-03

> Note: "Copilot Workspace" was the 2024 preview product. GitHub took the lessons from Workspace and rebuilt it as the **Copilot Coding Agent**, which is the live 2026 product.

## Vendor & Access

- **Vendor:** GitHub (Microsoft).
- **Access:** Subscription. Copilot Free, Pro ($10/mo), Pro+ ($39/mo), Business ($19/seat/mo), Enterprise ($39/seat/mo).
- **Coding Agent availability:** Pro+, Business, Enterprise (i.e., not the $10 Pro tier as of GA).

## Year First Public

- **February 2025:** Agent Mode (in-IDE autonomous mode) and Next Edit Suggestions announced.
- **May 13, 2025:** Coding Agent (asynchronous, sandboxed PR-opening agent) launched, formerly "Project Padawan."
- **September 2025:** Coding Agent reached general availability for all paid Copilot subscribers (Pro+, Business, Enterprise).
- **January 2026:** GitHub Copilot CLI shipped with enhanced agents and context management.
- **March 2026:** Agent Mode in both VS Code and JetBrains, with terminal command execution and self-healing.

## Maturity

Production. GitHub Copilot is the most-installed AI coding tool by a large margin (~tens of millions of installs); the Coding Agent is the newer asynchronous-PR product layered on top.

## Two Products in One Brand

1. **Agent Mode (in-IDE):** the autonomous version of the inline-editor experience. Iterates on its own output, recognizes and fixes errors, suggests terminal commands, analyzes runtime errors with self-healing. Comparable in shape to Cursor's agent mode and Cline.
2. **Coding Agent (asynchronous):** delegate a GitHub issue to Copilot; it opens a draft PR and works in the background in a sandbox. Comparable in shape to Devin. Handles feature implementation, bug fixes, technical debt, test coverage, documentation. Multi-model (Claude, GPT, Gemini selectable since 2025).

## Pricing Tier

Low. $10-39/mo for individuals; the Coding Agent is the upcharge over the original Copilot.

## Distinct Edge

- **GitHub-native.** The Coding Agent runs directly inside GitHub's PR / Actions / Issues stack. For repos already on GitHub (the vast majority of open source and a large share of private codebases), the integration is seamless: assign issue, get PR, review with the same UI you'd use for a human contributor.
- **Multi-model.** User can pick Claude, GPT, or Gemini per-task.
- **Highest distribution.** Most enterprises with Copilot already in production can enable the Coding Agent without procurement, which means it's how many engineers will first encounter agentic coding.

## Contrarian Notes

- Coding Agent quality lags Claude Code and Cursor on raw capability for novel work; its advantage is institutional access, not state-of-the-art performance.
- Adding the Coding Agent to Pro ($10) was promised but had not happened as of the GA announcement; current GA is Pro+ and up.

## Sources

- https://github.com/newsroom/press-releases/agent-mode
- https://github.com/newsroom/press-releases/coding-agent-for-github-copilot
- https://github.com/orgs/community/discussions/159068
- https://docs.github.com/en/copilot/get-started/features
- https://devops.com/github-copilot-evolves-agent-mode-and-multi-model-support-transform-devops-workflows-2/
- https://www.nxcode.io/resources/news/github-copilot-complete-guide-2026-features-pricing-agents
- https://github.blog/changelog/2026-01-14-github-copilot-cli-enhanced-agents-context-management-and-new-ways-to-install/

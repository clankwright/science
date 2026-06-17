# OpenAI Operator / ChatGPT Agent

**Source date:** verified 2026-05-03
**URLs:**
- https://openai.com/index/introducing-operator/
- https://openai.com/index/introducing-chatgpt-agent/
- https://en.wikipedia.org/wiki/OpenAI_Operator
- https://techcrunch.com/2025/01/23/openais-agent-tool-will-be-available-to-users-paying-200-per-month-for-pro/
- https://techcrunch.com/2025/07/17/openai-launches-a-general-purpose-agent-in-chatgpt/
- https://o-mega.ai/articles/chatgpt-operator-pricing-what-does-it-cost-you-2026
- https://chatgpt.com/pricing/

## What it is

OpenAI's consumer-facing browser agent. Two generations:

- **Operator** (Jan 23, 2025): standalone product at operator.chatgpt.com. Powered by a Computer-Using Agent (CUA) model derived from GPT-4o with vision-and-action training. Cloud-hosted browser; user watched it work in a side panel.
- **ChatGPT Agent** (Jul 17, 2025): replaced Operator. Folded into the main ChatGPT product as an "agent mode" dropdown. Combines browsing, code execution, file generation (slides, spreadsheets), and connector access (Gmail, Calendar, GitHub) in a single tool loop. Operator standalone site shut down Aug 31, 2025.

## Vendor / Access

- Vendor: OpenAI
- Access: ChatGPT Plus, Pro, Team, Business, Enterprise, Edu plans. Not in Free or Go ($8) tiers.
- Initial Operator was Pro-only ($200/mo) and US-only; ChatGPT Agent expanded availability.
- No general API for the agent loop itself. Underlying CUA capabilities exposed via the OpenAI Responses API with `computer-use-preview` model for developers.

## Cost

- Plus ($20/mo): 40 agent tasks per month
- Pro ($200/mo): 400 agent tasks per month
- API: usage-based on the computer-use-preview model

Per-task cost is bundled, but heavy users hit caps fast.

## Maturity

- Beta-flavored production. Reliable on shopping, restaurant booking, calendar admin, structured search.
- WebVoyager ~87% (per Browser Use comparison data); not the leader anymore.
- Still asks for human confirmation on payment, email send, and any irreversible action by default.

## Distinctive trait

Tightest consumer integration: lives inside the ChatGPT app most users already pay for. No separate signup, no API key, no Docker. Pairs with ChatGPT's connectors (Gmail, Drive, Calendar, GitHub) so the agent can read source documents and act on them in one session.

## Individual-empowerment angle

Lowest-friction entry point for non-developers. A Plus subscriber can hand the agent a goal in plain English from the same chat box they use for writing help. The hard cap (40 tasks/mo on Plus) makes it a "high-value tasks only" tool rather than a batch automation engine. For batch work, the open-source alternatives or Pro-tier are required.

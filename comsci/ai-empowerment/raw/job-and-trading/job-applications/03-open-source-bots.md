# Open-Source LinkedIn Easy Apply / Job Application Bots

**Source date:** verified 2026-05-03
**URLs:**
- https://github.com/nicolomantini/LinkedIn-Easy-Apply-Bot
- https://github.com/wodsuz/EasyApplyJobsBot
- https://github.com/NathanDuma/LinkedIn-Easy-Apply-Bot
- https://github.com/madingess/EasyApplyBot
- https://github.com/GodsScion/Auto_job_applier_linkedIn
- https://github.com/aminblm/linkedin-application-bot
- https://github.com/srikar-kodakandla/linkedin-easyapply-using-AI
- https://github.com/JorgeFrias/LinkedIn-GPT-EasyApplyBot
- https://github.com/MattRSnyder/LinkedInEasyApply
- https://github.com/topics/job-application-bot

## Pre-LLM generation (2018–2023)

The earlier generation (NathanDuma, madingess, nicolomantini, wodsuz, MattRSnyder) was Python + Selenium + hardcoded selectors against LinkedIn's Easy Apply. Pattern: search by keyword, iterate posting list, click Easy Apply, fill known fields from a YAML config, advance through multi-step modals, submit. Custom radio/dropdown questions were either a config map ("years of experience: 5") or an early NLP attempt.

Strengths: free, self-hosted, no cloud submission, full transparency.

Weaknesses, all consistently reported in repo issues:
- Breaks every 4–8 weeks when LinkedIn ships a UI change.
- LinkedIn account flagged or restricted within ~200–500 applications. Permanent ban risk.
- Custom screening questions are the wall; if no answer in config, it crashes or gives wrong answer.
- No real personalization. Same resume to every job.

## LLM generation (2023–2026)

GodsScion/Auto_job_applier_linkedIn, srikar-kodakandla/linkedin-easyapply-using-AI, JorgeFrias/LinkedIn-GPT-EasyApplyBot are the LLM-augmented descendants. Pattern shift:

- LLM (GPT-4 / Gemini / Claude) used for: open-ended question answering, resume-bullet rewriting per job, cover-letter generation, dropdown-option selection from natural-language description.
- Some use vision (GPT-4V / Claude Vision) to read the rendered form rather than rely on selectors. Reduces per-update breakage.
- Cost per application: $0.05–$0.40 in API calls depending on whether resume tailoring is included and whether vision is used per page.

GodsScion/Auto_job_applier_linkedIn (most-starred LLM-era repo, ~2.5K stars as of mid-2026) advertises 100+ jobs/hour and includes a resume-customization step. Quality of customization is uneven; reading the diff between submitted resumes shows the LLM mostly reorders bullets and swaps synonyms rather than producing genuinely tailored content.

## Browser-Use framework variants

Browser-Use (open-source agent framework, Python) is a popular base for custom build-your-own job appliers. The pattern is:

```python
agent = Agent(
    task="Apply to all senior backend Python roles in the Bay Area on LinkedIn,
          filling each form using my resume at /path/to/resume.pdf",
    llm=ChatAnthropic(model="claude-opus-4-7"),
)
agent.run()
```

This works for ~10–30 minutes before LinkedIn's bot detection (mouse-movement entropy scoring, request-pattern analysis) flags the session. Stealth-browser cloud services (Browser Use Cloud, Browserbase) extend the runtime but cost ~$0.50–$2 per agent-hour on top of the LLM.

## Why these stay marginal vs commercial tools

- **Setup cost.** Hours to install Python, Selenium, a browser driver, configure API keys, write a YAML profile. The audience that can do this is also the audience that gets diminishing returns from auto-application (mid-senior tech where personalization wins).
- **Ban risk borne by user.** Commercial tools either have agreements with platforms (rare) or use rotating residential proxies (common). Self-hosted bots use the user's home IP and LinkedIn cookie. Bans are routine.
- **Maintenance.** A Selenium bot is one Workday redesign away from being broken. The user has to read the issue tracker and pull updates.

## Where they remain useful

- **Researchers studying agent-vs-platform dynamics.** Open code is the only way to study what these systems actually do.
- **Power users who want full control.** Configure exact filters, exact questions, exact submission cadence. No vendor lock-in.
- **Cost-sensitive high-volume users.** $0.10/application in API calls beats Sonara's $80/month for users in non-US markets where commercial tools have no presence.
- **Education.** These repos are now the reference implementations for learning LLM-driven browser automation generally; the job-application use case is a stepping stone to agentic browser use overall.

## Convergence with the broader browser-use category

By 2026 the line between "job application bot" and "general-purpose browser-use agent applied to job applications" has blurred to the point where they are arguably the same product. The pattern that wins is:

1. A general-purpose browser-use framework (Browser Use, Stagehand, Skyvern) plus a vision-capable LLM (Claude Opus 4.7, GPT-4o, Gemini 2.5).
2. A job-specific configuration: candidate profile, target queries, optional resume-tailoring prompt.
3. Optional cloud execution layer for stealth (Browser Use Cloud, Browserbase).

The repos listed above are converging toward this stack. Older Selenium-based bots that hardcoded LinkedIn DOM are being archived; the maintained repos all use vision-LLM grounding now. The maintenance burden has dropped from "monthly when LinkedIn ships UI changes" to "rarely, when the LLM provider changes API."

## Cost comparison vs commercial

For a user who can run the open-source stack:
- API costs: $0.05–$0.40 per application using Claude/GPT-4 with vision; $0.01–$0.05 with Gemini Flash or self-hosted UI-TARS.
- Cloud-browser fees (if used): $0.50–$2 per agent-hour.
- Account-ban risk: borne by the user.
- Total: ~$10–$50/month for moderate usage at higher volume than Sonara's mid tier.

Versus commercial:
- Sonara: $80–$250/month.
- LazyApply: $99–$249 lifetime but lower quality.
- AutoApplier: $30–$100/month.

Open-source wins on cost per application by 3–10x. Loses on setup time (4–8 hours of initial work for a non-developer) and on ban-risk insulation. The economics favor open-source for high-volume users with developer skills, and commercial for everyone else.

## What the wiki should note

Open-source job-application bots are a specific case of the broader browser-use capability. The job-search use case was the most visible early adopter (high pain point, repetitive task, well-defined success metric) but has been largely overtaken commercially by the autofill / tracker pattern (Simplify) on one end and the autonomous agent pattern (AutoApplier, Sonara) on the other. The open-source repos remain relevant as reference implementations, educational tools, and the build-your-own substrate for users who want full control. They do not represent an unhobbling that wasn't already captured by the commercial tools; they represent the same unhobbling at lower price and higher friction.

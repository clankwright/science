# LLM + SymPy, Wolfram Alpha, MathPix: Symbolic and Numeric Math at the Amateur Level

## What it is

The combination of LLMs with deterministic symbolic / numeric backends. LLMs are unreliable arithmetic and algebra engines on their own; pairing them with SymPy (open-source CAS in Python), Wolfram Alpha / Wolfram Language (closed but accessible via free GPT plugin and a paid LLM API), and MathPix (image-to-LaTeX OCR) closes the gap. The amateur unlock is that an LLM can now read a photograph of a textbook page, transcribe the math, hand the symbolic problem to a CAS, get a verified answer back, and explain the steps.

## Specific unlocks

- Photograph a handwritten or printed math problem, MathPix-transcribe to LaTeX, hand to an LLM, have the LLM call SymPy or Wolfram for the actual computation, get a verified result with steps. Pre-2023 you typed everything by hand or got LLM hallucinations.
- Use the Wolfram GPT plugin (free in ChatGPT) to hand off symbolic integration, ODE solving, units, real-time data (astronomical positions, chemistry properties) without a Wolfram Mathematica license.
- Use the Wolfram Alpha LLM API (paid, modest cost) to give a self-hosted agent reliable computation; the API is "designed to be directly called by LLMs using simple, natural language queries" with structured responses.
- Run `sympy` locally inside a Claude or GPT tool-use loop to verify every algebraic step the LLM emits, catching the typical arithmetic/sign errors before they propagate.
- Tutor yourself through a graduate-level textbook (e.g., Strang's linear algebra, Spivak's calculus) with an LLM that you have explicitly instructed to verify every numeric claim with SymPy.

## Pre-AI baseline

Pre-2023 the choices were: (a) Wolfram Mathematica ($300+/yr personal license), (b) Wolfram Alpha web (one-shot, no plugin chain), (c) SymPy with a Python REPL (powerful but you write the code), (d) Maple / Maxima / Sage (steep learning curves). None of these read a photograph of a problem, none chained "interpret intent → set up problem → compute → explain". A high-schooler or amateur could compute, but only after correctly translating the problem into the CAS's syntax.

## Hardware / cost

- SymPy + LLM tool use: free + your LLM API tier.
- MathPix: free tier (~50 snips/month), paid above.
- Wolfram GPT plugin: free with ChatGPT Plus.
- Wolfram Alpha LLM API: usage-based, modest.
- Wolfram Notebook Assistant + LLM Kit: paid.

## Maturity

Production for problem-solving and verification. Less mature for deep proof work (use Lean instead). LLMs still hallucinate when the CAS returns nothing useful and they extrapolate; the safest pattern is "LLM proposes, CAS verifies, LLM explains the verified result."

## Where it breaks

- Multi-step word problems where the LLM mis-translates the setup; the CAS will then verify a wrong problem.
- Proofs by induction or by cases; a CAS can verify a single instance but not a universal claim. Use Lean.
- Numerical problems with conditioning issues (ill-posed inverse problems, near-singular matrices): the LLM rarely flags the conditioning.
- Domain-specific notation (physics shortcut conventions, signal-processing angular vs ordinary frequency): LLMs and CAS disagree on conventions, silently.

## Sources

- https://www.wolfram.com/resources/tools-for-AIs/
- https://gpt.wolfram.com/
- https://products.wolframalpha.com/llm-api/documentation
- https://writings.stephenwolfram.com/2023/03/chatgpt-gets-its-wolfram-superpowers/
- https://www.sympy.org/
- https://mathpix.com/
- https://www.arsturn.com/blog/solving-complex-math-with-ai-a-deep-dive-into-combining-a-local-llm-with-wolframalpha

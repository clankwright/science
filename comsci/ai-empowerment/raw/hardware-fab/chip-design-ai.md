# Chip design AI (Tiny Tapeout, OpenLane, LLM-generated Verilog)

## What it is

Tiny Tapeout is the platform that turned "make your own chip" from a $50,000+ MPW shuttle into a $200-€500 hobbyist exercise. It uses OpenLane (open-source ASIC flow) to convert synthesizable Verilog-2001 to GDSII files for fab. The AI layer in 2024-2026 is LLM-generated Verilog: ChatGPT, Claude, and Gemini are good enough at digital RTL that hobbyists who can't write Verilog can still tape out a chip.

## Specific unlocks

### LLM-generated Verilog and the "amateur silicon" frontier

- Chip-Chat (Blackley & Pearce, 2023): first LLM-architected, taped-out silicon. ChatGPT 4-authored 8-bit accumulator-based microprocessor on Tiny Tapeout 3.
- January 2026: a developer prompted Claude Opus 4.5 with an empty folder; Claude produced a verified Verilog implementation of a custom processor architecture *plus* matching firmware to run inference on a small language model. The processor was synthesizable via OpenLane (cpldcpu's "self-replication" demo).
- NYU research: benchmarks of LLMs across spec interpretation, design, bug detection, and repair on Verilog. Performance climbing each model generation.
- Practical use: hobbyist describes "I want a UART transmitter that takes a parallel byte and an enable signal" and Claude emits synthesizable Verilog that passes Tiny Tapeout's lint and OpenLane synthesis on first or second iteration.

### Tiny Tapeout shuttle economics (2026)

- TT shuttles continue. TTGF26a (Global Foundries 180nm) delivery Oct-Nov 2026. TTSKY26a (SkyWater 130nm) delivery Oct-Dec 2026.
- Pricing: 1x2 tile + 2 analog pins = €220. Digital-only single tile is cheaper.
- Analog pins: €40 each for first 2, €100 each beyond.
- SwissChips fully sponsors a TT shuttle for Swiss residents (zero cost including breakout board).
- TT09 closed Nov 2024, TT10 cancelled, TT11+ rolled into the TTGF/TTSKY rebrand.

### Concrete weird unlocks

- A high-school student designs and tapes out their own RISC-V subset processor for €220 using Claude to write the Verilog. Real silicon, real die photo, real working chip.
- Hobbyist with no HDL background gets a 4-bit RAM + ALU on real silicon. Verilog generated, simulated, lint-cleared, and submitted in a weekend.
- LLM debugs a synthesis failure by reading the OpenLane log, identifying a latch inferred from incomplete `if/else`, rewriting the always block.

## Pre-AI baseline

Verilog/SystemVerilog is a 100-300 hour skill. Synthesizable Verilog is a tighter subset that requires understanding what the synthesis tool can map to gates. ASIC tapeout was a graduate-level course or industry job. Hobbyist chip design simply did not exist before Tiny Tapeout (2022); LLM-authored hobbyist chip design did not exist before 2023.

## Hardware / cost

- Tiny Tapeout submission: €140-€220 typical for a small digital design.
- Breakout PCB for received chip: included in some shuttles, ~$30-$50 separate.
- OpenLane / Sky130 / GF180 PDKs: free, open-source.
- Simulation/synthesis: runs on a laptop or in CI (GitHub Actions templates exist).
- Claude Pro or ChatGPT Plus: $20/mo.
- Delivery time: ~10-12 months from submission to chip in hand.

## Maturity

- Tiny Tapeout shuttle process: production, dozens of shuttles delivered.
- LLM-generated Verilog: research-to-prototype. Works for small designs; complex designs still hit hallucinated module ports, latched signals, and synthesis-incompatible constructs. Frontier models (Opus 4.5+, GPT-5+) are markedly better than 2023 ChatGPT.
- LLM-driven OpenLane debugging: works in practice for synthesis errors, less reliable for STA / timing issues.

## Sources

- https://tinytapeout.com/
- https://tinytapeout.com/faq/
- https://tinytapeout.com/making_asics/
- https://01001000.xyz/2023-12-21-ChatGPT-AI-Silicon/
- https://cpldcpu.github.io/smollm.c/
- https://swisschips.ethz.ch/news-and-events/swisschips-news/2025/12/announcing-the-next-swisschips-supported-tinytapeout-shuttle-submit-your-design-today.html
- https://tinytapeout.github.io/tinytapeout-08/datasheet.pdf

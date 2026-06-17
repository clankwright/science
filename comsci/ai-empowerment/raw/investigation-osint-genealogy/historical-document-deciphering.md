# Ancient Scripts and Historical Document Deciphering

## What it is

AI applied to scripts that had at most a few hundred living readers each: Akkadian cuneiform, Linear B (Mycenaean Greek), Linear A (undeciphered), Demotic Egyptian, Old Aramaic, and the carbonized-by-Vesuvius Herculaneum scrolls. Three lines of work: (1) neural machine translation from transliterated forms (Akkademia, Akkadian-to-English), (2) deep neural networks for restoration and contextualization of damaged texts (DeepMind Ithaca and its 2026 successor Aeneas for ancient Greek inscriptions), and (3) computer vision plus ML to virtually unroll and read physically inaccessible documents (Vesuvius Challenge).

## Specific unlocks

- An interested amateur with no Akkadian training reads a 5,000-year-old administrative tablet (a beer-ration receipt, a divinatory liver omen, a royal decree) by uploading the cuneiform image to The Babylonian Engine and reading the English output.
- A Classics undergrad uses Aeneas (DeepMind, Feb 2026 in Nature) to restore missing letters in a fragmentary Greek inscription, attribute it geographically with 71% accuracy, and date it to within ~30 years; Ithaca raised historian-baseline accuracy from 25% to 72% when used as a partner tool.
- The Vesuvius Challenge has paid out $1.7M in prizes since 2023; in February 2024, Youssef Nader, Luke Farritor, and Julian Schilliger (a postdoc and two students) read the first complete passage of Greek text from a sealed Herculaneum scroll buried since AD 79. As of 2025, the project is racing toward reading entire scrolls.
- Korean Hanja-to-modern-Korean translation, gap-filling on Mycenaean Linear B fragments, and exploratory work on still-undeciphered Linear A all use the same tooling.
- Akkademia is open-sourced on GitHub; a hobbyist with a workstation can run the model locally on their own scans.

## Tools and projects

- **Akkademia / The Babylonian Engine.** Israeli team's neural machine translation for cuneiform Akkadian. PNAS Nexus paper, May 2023. BLEU4 of 36.52 (cuneiform to English) and 37.47 (transliterated to English). Open-sourced. Higher accuracy on formulaic texts (royal decrees, divinations); higher hallucination rate on poetic and literary texts.
- **DeepMind Ithaca.** Restoration / geographical attribution / dating for ancient Greek inscriptions. Original 2022 Nature paper. 62% restoration accuracy; 71% locational accuracy; ~30 year dating accuracy.
- **DeepMind Aeneas (Feb 2026).** Successor to Ithaca; published in Nature; adds contextualization (linking a fragment to related texts) and restorations of unknown length. Now powers Ithaca.
- **Vesuvius Challenge / Scroll Prize.** Multi-year competition with $1.7M in prizes paid; computer-vision pipeline for X-ray-tomography unrolling and ink detection on the carbonized Herculaneum scrolls.
- **EBL / Achemenet / Etana.** Specialty digital corpora for cuneiform that the AI tools depend on for training data.

## Pre-AI baseline

To read Akkadian: a PhD program plus 5-10 years of post-doctoral work, plus access to one of approximately 20 reading rooms worldwide. To read a Greek inscription with damage: the same career path plus serendipitous expertise in the right region's epigraphy. To read a Herculaneum scroll: fundamentally impossible without destroying the scroll until 2023; a few partial 18th-century readings of physically opened (and shattered) scrolls.

## Cost / access

- Akkademia, Babylonian Engine, Ithaca/Aeneas: free, web-accessible.
- Vesuvius Challenge: open competition with cash prizes; data is freely downloadable; competition entries are open-sourced as a condition of winning.
- DeepMind models (Ithaca, Aeneas): research code on GitHub.
- The training data corpora (EBL, Achemenet, etc.) are themselves the result of decades of academic labor; AI didn't replace that, it inverted who can use the result.

## Maturity

- Akkadian translation: research-to-beta. Useful for a first-pass read of formulaic texts; produces hallucinations on poetic material; should not be used as the sole basis for any scholarly claim.
- Greek inscription restoration: production for partner-mode use (historian + Ithaca/Aeneas).
- Vesuvius Challenge: actively progressing; complete-scroll reading is research stage but the directional progress since 2023 is striking.
- Linear A and other undeciphered scripts: research; no breakthrough reported.

Where it breaks: scribal idiosyncrasy, damaged or palimpsest media, and any text where the training corpus is too small to support generalization.

## Why it matters here

This category is unusual in the wiki because the practical-individual unlock is small in raw numbers but the cultural unlock is large. A motivated amateur can now engage with primary sources from Bronze Age Mesopotamia or Roman Italy, contribute to active academic projects (Vesuvius Challenge accepts solo prize entries), and check published translations against the underlying script. None of this was hobby-tier-accessible in 2022.

## Sources

- https://academic.oup.com/pnasnexus/article/2/5/pgad096/7147349
- https://www.timesofisrael.com/groundbreaking-ai-project-translates-5000-year-old-cuneiform-at-push-of-a-button/
- https://www.nature.com/articles/s41586-022-04448-z
- https://deepmind.google/blog/aeneas-transforms-how-historians-connect-the-past/
- https://github.com/google-deepmind/ithaca
- https://scrollprize.org/
- https://aihub.org/2024/09/12/the-vesuvius-challenge-is-using-ai-to-virtually-unroll-pompeiis-ancient-scrolls/

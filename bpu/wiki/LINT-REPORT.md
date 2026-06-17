# Wiki Lint Report

> Generated: 2026-04-14. Scope: 41 articles across concepts/ (7), entities/ (7), methods/ (27), plus index.md.

---

## 1. Broken Links

**PASS.** Zero broken relative markdown links found across all 41 articles and index.md. Every `](../path/file.md)` and `](file.md)` target resolves to an existing file.

Every relative link in every article was resolved against its parent directory and checked for file existence. No broken targets.

---

## 2. Orphaned Pages

**PASS.** Zero true orphans. All 41 articles receive at least one cross-reference from another article (excluding index.md and this report).

### Low-Connectivity Articles (1-2 inbound links)

| Article | Inbound count | Linking articles |
|---|---|---|
| `entities/joshua-vogelstein.md` | 1 | `entities/drosophila.md` |
| `methods/connectome-constrained-theory.md` | 1 | `methods/large-connectome-model.md` |
| `methods/large-connectome-model.md` | 1 | `concepts/connectome-inspired-architectures.md` |
| `methods/counter-current-learning.md` | 2 | `concepts/biologically-plausible-learning.md`, `methods/dendritic-anns.md` |

### Well-Connected Articles (top 5)

| Article | Inbound count |
|---|---|
| `methods/biological-processing-units.md` | 33 |
| `entities/drosophila.md` | 22 |
| `entities/c-elegans.md` | 20 |
| `concepts/connectome.md` | 20 |
| `methods/neural-circuit-policies.md` | 19 |

---

## 3. Index Completeness

**PASS.** All 41 article files have corresponding entries in index.md. All index links resolve to existing files.

| Category | Files on disk | Index entries | Match |
|---|---|---|---|
| concepts/ | 7 | 7 | OK |
| entities/ | 7 | 7 | OK |
| methods/ | 27 | 27 | OK |

No index entries point to non-existent files. No files are missing from the index.

---

## 4. Em Dashes

**PASS.** Zero em dash characters (U+2014) found across all 41 wiki articles and index.md.

---

## 5. Format Compliance

**PASS.** All 41 articles meet every format requirement.

| Requirement | Status |
|---|---|
| `# Title` on line 1 | 41/41 |
| `> **Summary:**` blockquote | 41/41 |
| `**Sources:**` line | 41/41 |
| `---` divider | 41/41 |
| At least one `## Section` heading | 41/41 |
| `## See Also` section | 41/41 |

---

## 6. Source Traceability

### Articles with `[[raw/...]]` references (29 articles)

All 29 articles using `[[raw/...]]` format point to existing files in `raw/`. 21 unique raw files are referenced:

`raw/amini_lfm2_2025.md`, `raw/beiran_theory_2024.md`, `raw/chavlis_dendrites_2025.md`, `raw/dhurandhar_neuroprune_2024.md`, `raw/flygm_jin_2026.md`, `raw/hasani_cfc_2021.md`, `raw/hasani_liquid_2020.md`, `raw/hasani_liquids4_2022.md`, `raw/johnson_connectome_nas_2023.md`, `raw/kao_countercurrent_2024.md`, `raw/lappalainen_connectome_2023.md`, `raw/lechner_ncp_2018.md`, `raw/lechner_ncp_natmi_2020.md`, `raw/roberts_dcn_2019.md`, `raw/suarez_conn2res_2024.md`, `raw/vogelstein_bpu_2025.md`, `raw/wang_loihi2_2025.md`, `raw/wei_large_connectome_model_2025.md`, `raw/yu_cpvit_2023.md`, `raw/zapbench_2025.md`, `raw/zhang_cannistraci_2025.md`

### Raw files not formally referenced via `[[raw/...]]` (3 files)

These raw files exist in `raw/` but no wiki article references them in the `**Sources:**` line using `[[raw/...]]` format:

| Raw file | Inline mentions |
|---|---|
| `raw/schmidgall_connectomes_ann_2022.md` | Cited inline in `concepts/connectome.md` (Schmidgall et al., 2022) |
| `raw/shang_network_structure_2024.md` | Cited inline in `concepts/connectome.md` (Shang et al., 2024) |
| `raw/zhu_brain_emulation_2025.md` | Cited inline in `concepts/whole-brain-emulation.md` and `concepts/neuromorphic-computing.md` (Zhu et al., 2025) |

All three are used as sources but via bibliographic citation rather than `[[raw/...]]` links in their Sources lines.

### Articles with informal citations only (12 articles)

These articles cite sources via author/venue/DOI rather than `[[raw/...]]` links:

| Article | Citation format |
|---|---|
| `concepts/effectome.md` | Pospisil et al., Nature 634:201-209, 2024 (DOI) |
| `concepts/neuromorphic-computing.md` | Wang et al., 2025; Zhu et al., arXiv; web research |
| `entities/flywire-consortium.md` | Dorkenwald et al., Nature 634:124-138, 2024; web research |
| `entities/liquid-ai.md` | general knowledge |
| `entities/microns.md` | Ding, Fahey et al., Nature 640:459-469, 2025; web research |
| `methods/braintrace-snn.md` | Wang et al., Nature Communications, Jan 2026 (DOI) |
| `methods/celegans-olfactory-circuit-ann.md` | Wang et al., Advanced Science, Feb 2025 (DOI) |
| `methods/connectome-reservoir-computing.md` | Leal-Taixe et al., Biomimetics 10(5):341, 2025 |
| `methods/drosophila-computational-brain.md` | Shiu et al., Nature 634, 2024 (DOI) |
| `methods/drosophila-vnc-connectome.md` | Azevedo et al., Nature, 2024 (DOI); Marin et al., eLife, 2024 |
| `methods/elegans-ai.md` | Bardozzo et al., Neurocomputing 584, 2024 (DOI) |
| `methods/nematode-connectome-neural-networks.md` | Su et al., Applied Soft Computing, 2023 (DOI) |

---

## 7. Missing Cross-References

Topics mentioned in body text but not linked to their wiki pages, or articles that should link to related pages based on content overlap.

### `connectome-constrained-theory.md` (1 inbound link)

Referenced conceptually but not linked in:
- `concepts/connectome.md` (discusses structure-dynamics relationship that this theory formalizes)
- `methods/connectome-constrained-dmn.md` (closely related theoretical framework)
- `methods/flygm-whole-brain-locomotion.md` (uses connectome-constrained architecture)
- `methods/biological-processing-units.md` (benefits from theoretical grounding)

### `joshua-vogelstein.md` (1 inbound link)

Mentioned by name but not linked in:
- `methods/biological-processing-units.md` (Vogelstein et al. cited as authors)
- `concepts/connectome.md` (BPU results attributed to Vogelstein)

### `large-connectome-model.md` (1 inbound link)

Could be cross-referenced from:
- `concepts/connectome.md` (discusses connectome representations for AI)
- `methods/connectome-reservoir-computing.md` (complementary approach)

### `drosophila-loihi2-neuromorphic.md` (missing from neuromorphic-computing.md)

`concepts/neuromorphic-computing.md` discusses the Loihi 2 deployment in detail but does not include `[Drosophila on Loihi 2](../methods/drosophila-loihi2-neuromorphic.md)` in its See Also section.

---

## Summary

| Category | Status | Issues |
|---|---|---|
| Broken links | **PASS** | 0 broken links |
| Orphaned pages | **PASS** | 0 true orphans; 3 articles with only 1 inbound link |
| Index completeness | **PASS** | All 41 articles indexed; all index links valid |
| Em dashes | **PASS** | 0 found |
| Format compliance | **PASS** | All 41 articles fully compliant |
| Source traceability | **WARN** | 12 articles use informal citations; 3 raw files not formally referenced |
| Missing cross-references | **INFO** | 3 low-connectivity articles; 1 missing See Also entry |

### Priority Fixes

1. **Improve cross-linking for low-connectivity articles.** `entities/joshua-vogelstein.md`, `methods/connectome-constrained-theory.md`, and `methods/large-connectome-model.md` each have only 1 inbound link from other articles. Adding See Also entries or inline references from related articles would improve discoverability.

2. **Add Loihi 2 link to neuromorphic-computing.md See Also.** The article discusses the Loihi 2 deployment in detail but lacks a direct link to `methods/drosophila-loihi2-neuromorphic.md`.

3. **Convert informal citations to `[[raw/...]]` format.** 12 articles use bibliographic citations instead of direct raw file links. For articles whose source papers have not been ingested to `raw/`, ingest the PDFs and update Sources lines.

4. **Add `[[raw/...]]` references for inline-cited raw files.** `concepts/connectome.md` cites Schmidgall et al. (2022) and Shang et al. (2024), and `concepts/whole-brain-emulation.md` / `concepts/neuromorphic-computing.md` cite Zhu et al. (2025). All three raw files exist but are not formally referenced via `[[raw/...]]` in any article's Sources line.

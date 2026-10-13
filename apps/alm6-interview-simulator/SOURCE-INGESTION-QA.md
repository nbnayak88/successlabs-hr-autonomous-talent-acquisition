# ALM6 Interview Simulator — Source Ingestion QA

**Date:** 2026-10-13  
**Application:** `apps/alm6-interview-simulator/index.html`  
**Source of truth:** `learning/interview-preparation/ALM6/scale-lab/`

## Checks completed

| Check | Result | Notes |
|---|---|---|
| Theme source files fetched | Pass | All 22 expected Markdown paths were retrievable through the repository connector. |
| Numbered question headings | Pass | 20 question headings detected in each of 22 files. |
| Total question positions | Pass | 440 headings detected across the source collection. |
| Legacy heading format | Pass | Verified `## Q01 — Title` and `## Q01. Title` patterns used in earlier themes. |
| Newer heading format | Pass | Verified `## 1. Title` pattern used in Themes 21–22 and supported by the parser. |
| Representative field extraction | Pass | Spot checks on Themes 01, 21, and 22 extracted the question, Situation, Task, Action, Result, product example, and SME probe. |
| Draft-score persistence fix | Pass by code inspection | Fixed `save()` so typing in a STAR field no longer clears previously selected rubric scores. Browser confirmation remains pending. |
| Automated QA harness | Added; execution pending | `tests/smoke.test.mjs` checks the 22 theme definitions, key UI controls, score persistence guard, and 20 unique numbered headings per source file (440 total). |
| All-scenario field extraction test | Added; execution pending | The test mirrors the app parser and asserts title, question, four STAR fields, product example, and SME probe for each of 440 scenarios. CI results have not yet been verified. |
| GitHub Pages workflow | Added; deployment unverified | `.github/workflows/alm6-simulator-pages.yml` packages the app subfolder and deploys it to GitHub Pages. A public URL is not confirmed until a successful deployment run is observed. |
| GitHub Actions workflow | Added; run status unverified | `.github/workflows/alm6-simulator-qa.yml` runs the Node.js smoke/source-ingestion test suite on relevant pushes and pull requests. |
| Source provenance | Pass | Each scenario retains its source path and stable theme/question identifier in the UI. |

## Parser compatibility

The source collection contains more than one Markdown layout. The application parser supports:
- Numbered headings such as `## 1. Title`
- ID-style headings such as `## Q01 — Title` and `## Q01. Title`
- Question content under a `### Interview Question` section or inline `**Question:**` label
- STAR fields in inline labelled form
- Product examples and SME probes in inline labels or named Markdown sections

## Remaining release checks

These are not represented as completed by this ingestion check:
- Confirm both GitHub Actions workflows complete successfully; run results have not been verified here
- Browser execution and interaction testing in desktop and mobile browsers
- Field-by-field comparison of all 440 parsed scenarios against their original Markdown
- Keyboard and screen-reader accessibility review
- Cross-browser local-storage and export testing
- Confirm GitHub Pages is enabled, the deployment succeeds, and the public URL passes a smoke test
- SME approval for source accuracy and interview suitability

## Release decision

**Status: Source-heading ingestion check passed; expanded parser tests and GitHub Pages deployment are committed but their run results are unverified; release validation remains in progress.**

The app is a static prototype. Its local scoring rubric is for learner reflection and is not a validated hiring assessment. Learners should follow the source links whenever parsed content appears incomplete and must not present illustrative examples as their own work.

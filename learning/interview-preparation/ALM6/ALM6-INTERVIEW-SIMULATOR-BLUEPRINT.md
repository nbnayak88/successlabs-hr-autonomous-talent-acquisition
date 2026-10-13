# ALM6 Interview Simulator Blueprint
## Applied SAP SuccessFactors Learning — 440-Scenario Interview Practice System

**Repository:** `successlabs-hr-autonomous-talent-acquisition`  
**Source collection:** `learning/interview-preparation/ALM6/scale-lab/`  
**Scenario bank:** 22 themes × 20 scenarios = 440 scenarios  
**Primary track:** Interview Preparation  
**Audience progression:** Learning Administrator / Analyst → Functional Consultant → Solution Architect → Learning Transformation Architect

## 1. Purpose

Create a repeatable, evidence-oriented practice experience that helps candidates explain how they diagnose learning problems, make architecture decisions, implement controls, validate outcomes, and communicate trade-offs. The simulator should assess reasoning and clarity, not memorisation of scripted answers.

## 2. Source-of-truth structure

Use the theme Markdown files as the authoritative source for questions, STAR model answers, product examples, and SME probes. Use the companion `ALM6-440-SCENARIO-MANIFEST.md` for stable scenario identifiers and theme mappings.

Theme file convention:
`learning/interview-preparation/ALM6/scale-lab/theme-{NN}-{slug}/00-theme-{NN}-20-questions.md`

Do not silently rewrite source answers when importing them into an application. If an answer is adapted for display, retain the source path and identify the adaptation.

## 3. Learner modes

1. **Practice by theme** — select one of the 22 themes and work through its 20 scenarios.
2. **Random challenge** — select scenarios from chosen themes without repeating a scenario within the same session.
3. **Mock interview** — present a configurable set of questions in sequence, with optional time limits and no model answer visible before the response.
4. **STAR builder** — guide the candidate through Situation, Task, Action, and Result, then ask for a concise integrated answer.
5. **SME probe round** — ask the follow-up probe after the initial answer to test depth, trade-offs, and evidence.
6. **Architecture progression** — focus on the transition from functional execution to solution design, integration, governance, transformation, and value.
7. **Review and retry** — revisit weak or skipped scenarios after feedback.

## 4. Scenario record schema

Recommended machine-readable record:

```json
{
  "scenario_id": "ALM6-T01-Q01",
  "product_code": "ALM6",
  "product_name": "Applied SAP SuccessFactors Learning",
  "theme_number": 1,
  "theme_slug": "domain-foundation",
  "theme_title": "Domain Foundation",
  "question_number": 1,
  "source_path": "learning/interview-preparation/ALM6/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
  "question": "Exact question text from the source theme file",
  "star": {
    "situation": "Source-derived Situation",
    "task": "Source-derived Task",
    "action": "Source-derived Action",
    "result": "Source-derived Result"
  },
  "product_example": "Source-derived SAP SuccessFactors Learning example",
  "sme_probe": "Source-derived SME Probe",
  "tags": [],
  "difficulty": "to_be_calibrated",
  "review_status": "source_verified"
}
```

The question, STAR fields, example, and probe must be extracted from the relevant source file. Do not populate missing source fields with invented claims. Keep the schema extensible and version it before changing required fields.

## 5. Answer capture and feedback

Capture the learner's answer as text or transcript, with explicit consent for any recording or transcription. Score against observable criteria, not similarity to the model wording.

### Suggested 0–4 rubric per dimension

- **0 — Missing:** no relevant evidence or answer does not address the question.
- **1 — Weak:** generic assertions; little ownership, context, or reasoning.
- **2 — Developing:** plausible approach but gaps in trade-offs, evidence, or controls.
- **3 — Strong:** clear, structured, context-specific reasoning with defensible decisions.
- **4 — Advanced:** integrates business, process, people, data, technology, integration, security, experience, and outcomes; anticipates failure modes and explains trade-offs.

### Core scoring dimensions

1. Business context and problem framing
2. Personal ownership and role clarity
3. Process diagnosis and stakeholder alignment
4. Technical and architecture reasoning
5. Data, integration, security, privacy, and controls (where relevant)
6. Validation, testing, and risk management
7. Measurable outcome and evidence quality
8. Communication, concision, and response structure

Use a dimension only when relevant to the scenario; do not penalise a candidate for omitting an irrelevant technical detail. SME-probe performance should be scored separately from the initial answer.

## 6. STAR quality checks

- **Situation:** establishes a credible context and the problem's significance.
- **Task:** states the candidate's responsibility and desired outcome.
- **Action:** explains personal decisions, analysis, collaboration, implementation, and controls—not just team activity.
- **Result:** states an evidenced outcome. If a metric is unavailable, use a verifiable qualitative result and explain how it was assessed.
- **Integrity:** never present illustrative model metrics or sample scenarios as the candidate's real achievements.
- **Product accuracy:** validate current platform capability, licensing, interfaces, and tenant configuration before asserting availability.

## 7. Adaptive scenario selection

Use a transparent rules-based approach before adding machine learning.

- Begin with the learner's chosen role level, target themes, and self-rated confidence.
- Prioritise unseen scenarios and dimensions with low rubric scores.
- Mix familiar and stretch questions; avoid repeatedly serving only the weakest category.
- Re-test weak areas with a different scenario from the same theme.
- Allow learners to override the recommendation and select any theme.
- Explain why a scenario was selected.
- Do not infer job suitability, promotion potential, or employee performance from practice scores.

## 8. Mastery and readiness

Suggested internal practice thresholds (configurable, not a certification or hiring standard):

- **Exposure:** at least one response attempted in a theme.
- **Practising:** at least 5 of 20 scenarios attempted in a theme.
- **Theme-ready:** at least 70% of scored dimensions are at level 3 or 4 across a minimum of 5 distinct scenarios, including one SME probe.
- **Review needed:** repeated gaps in ownership, evidence, risk reasoning, or outcome clarity.
- **Mock-interview ready:** performance is consistently strong across selected themes and role level, with no critical weakness in required topics.

Display the number of attempts and the evidence behind any readiness label. Make thresholds configurable and label them as coaching guidance, not a validated predictor of hiring success.

## 9. Learner journey

1. Choose target role and interview context.
2. Complete a short baseline across selected themes.
3. Practise one scenario using STAR.
4. Receive dimension-level feedback and one actionable improvement.
5. Answer the SME probe.
6. Retry or move to a related scenario.
7. Review theme-level strengths and gaps.
8. Run a mock interview.
9. Export a personal development plan with source links and next-practice recommendations.

## 10. Suggested application components

- **Scenario player:** question, timer, answer capture, source reference.
- **STAR coach:** four-part response builder and concise-answer view.
- **Feedback panel:** rubric scores, supporting evidence, strengths, and next steps.
- **Theme navigator:** 22 themes, 20 scenarios each, attempt status.
- **Mock interview setup:** role level, themes, scenario count, timing, SME-probe setting.
- **Readiness dashboard:** attempts, rubric trends, theme coverage, retry queue.
- **Source viewer:** open the exact Markdown file and preserve source provenance.
- **Export:** learner-owned practice report and development plan.

## 11. Data and privacy principles

- Store only the learner data needed for the stated practice purpose.
- Keep learner responses private by default; define access and retention explicitly.
- Obtain consent for audio recording, transcription, or external AI evaluation.
- Avoid sending confidential client or employer information into unapproved services.
- Provide deletion and export mechanisms where supported by the chosen implementation.
- Separate practice feedback from hiring decisions unless a separately governed assessment process is explicitly designed and validated.

## 12. Acceptance criteria

- All 22 source themes are discoverable.
- The manifest resolves 440 unique stable IDs to the correct source files and question numbers.
- Every displayed question retains its source reference.
- STAR fields, product example, and SME probe are shown when present in the source.
- Random and mock modes avoid accidental duplicate questions within a session.
- Feedback identifies evidence and improvement actions, not just a score.
- Readiness labels disclose their criteria and limitations.
- Source content can be refreshed without changing stable IDs unless scenario identity materially changes.
- Product claims and metrics are not invented during ingestion.
- Accessibility, keyboard use, mobile layout, and learner privacy are included in release testing.

## 13. Implementation sequence

1. Parse and validate the 22 Markdown source files.
2. Generate the 440-record manifest and check unique IDs.
3. Build a source-grounded scenario player.
4. Add STAR capture and rubric feedback.
5. Add theme practice, retries, and mock interview mode.
6. Add progress analytics and learner export.
7. Conduct SME review, accessibility testing, privacy review, and source-to-display reconciliation.

## 14. Success measures

Measure scenario coverage, completion of practice sessions, improvement in rubric dimensions over repeated attempts, SME-probe performance, learner confidence, and usefulness of the development plan. Treat these as learning-product measures; do not equate them automatically with interview success or hiring outcomes.

---
**Version:** 1.0  
**Status:** Blueprint for implementation; scenario source content remains authoritative.

# ATA2b Interview Simulator — Data Model, Scoring Rubric & Scenario Selection Matrix

## Purpose

Turn the ATA2b simulator blueprint into an implementation-ready assessment specification.

**Question bank:** 440 scenarios  
**Themes:** 22  
**Scenarios per theme:** 20  
**Primary product:** SAP SuccessFactors Onboarding  
**Learning loop:** Select → Think → Speak → Probe → Score → Reflect → Reattempt

---

# 1. Canonical Scenario Data Model

Each question is the smallest reusable learning object.

| Field | Type | Required | Purpose |
|---|---|---:|---|
| scenario_id | string | Yes | Stable ID: HR-ATA2B-B01-Q01 |
| academy | string | Yes | ATA2b |
| stream | string | Yes | Applied Onboarding |
| theme_id | integer | Yes | 01–22 |
| theme_name | string | Yes | Canonical 22-theme name |
| progression | enum | Yes | KNOW / DESIGN / DELIVER / SOLVE / INFLUENCE / TRANSFORM |
| question | text | Yes | Interview question |
| situation_reference | text | Yes | Expected context |
| task_reference | text | Yes | Expected ownership |
| action_reference | text | Yes | Model action logic |
| result_reference | text | Yes | Expected outcome |
| smart_probe | text | Yes | SME follow-up |
| product_example | text | Yes | SAP SuccessFactors Onboarding example |
| architecture_signal | array | Yes | Relevant architecture dimensions |
| business_outcome | array | Yes | Expected value dimensions |
| difficulty | enum | Yes | Practitioner / Consultant / Architect / Transformation Architect |
| probe_type | enum | Yes | Why / Alternative / Failure / Test / Security / Integration / Value / Scale / Global-Local / Automation |
| estimated_minutes | integer | Yes | Recommended response time |
| source_path | string | Yes | Owning GitHub theme file |
| active | boolean | Yes | Whether eligible for selection |

---

# 2. Candidate Attempt Data Model

An attempt is separate from the question bank.

| Field | Purpose |
|---|---|
| attempt_id | Unique attempt |
| candidate_id | Learner identity |
| scenario_id | Scenario attempted |
| attempt_number | Number of attempts for this scenario |
| response_star | Candidate's initial response |
| probe_response | Candidate's SME response |
| submitted_at | Timestamp |
| score_total | 0–100 |
| score_situation | 0–10 |
| score_task | 0–10 |
| score_action | 0–20 |
| score_result | 0–15 |
| score_architecture | 0–15 |
| score_product | 0–10 |
| score_business_value | 0–10 |
| score_sme_probe | 0–10 |
| feedback | Evidence-based feedback |
| strengths | Observed strengths |
| gaps | Observed gaps |
| reflection | Learner reflection |
| mastery_status | NEW / PRACTICED / DEVELOPING / MASTERED |
| next_action | Recommended learning action |

---

# 3. Capability Model

The 22 themes map directly to 22 assessable capabilities.

| Capability ID | Capability |
|---:|---|
| C01 | Domain |
| C02 | Product |
| C03 | Process |
| C04 | Data |
| C05 | Requirements |
| C06 | Solution Design |
| C07 | Configuration |
| C08 | Integration |
| C09 | Quality Assurance |
| C10 | Deployment |
| C11 | Migration |
| C12 | Operations |
| C13 | Troubleshooting |
| C14 | Problem Solving |
| C15 | Security |
| C16 | Optimization |
| C17 | Stakeholder Management |
| C18 | Communication |
| C19 | Leadership / Decision Making |
| C20 | Transformation |
| C21 | Innovation |
| C22 | Enterprise Architecture / Business Value |

A scenario can contribute to more than one capability.

Example:

**Integration scenario → Integration + Data + Security + Troubleshooting + Business Value**

---

# 4. Scenario Capability Weighting

Every scenario should carry a capability vector.

Example:

| Capability | Weight |
|---|---:|
| Integration | 0.40 |
| Data | 0.20 |
| Security | 0.15 |
| Troubleshooting | 0.15 |
| Business Value | 0.10 |
| **Total** | **1.00** |

This allows one scenario to strengthen multiple capability scores without pretending every question assesses every capability equally.

---

# 5. Scenario Selection Algorithm

The simulator should calculate a selection score for every eligible scenario.

Conceptually:

**Selection Score = Weakness × Theme Need × Difficulty Fit × Recency × Diversity × Randomness**

Recommended weighting:

| Factor | Weight |
|---|---:|
| Weakness relevance | 35% |
| Theme / progression need | 20% |
| Difficulty fit | 15% |
| Recency / repetition control | 10% |
| Diversity | 10% |
| Controlled randomness | 10% |
| **Total** | **100%** |

Do not expose the algorithm to the learner.

---

# 6. Selection Rules

## Rule 1 — Never immediately repeat

Do not select the same scenario in the immediately following attempt unless the learner explicitly chooses **Reattempt**.

## Rule 2 — Weakness first

Prioritize scenarios connected to capabilities scoring below 70.

## Rule 3 — Avoid over-training

If a capability is ≥90 and stable, reduce its selection probability unless the learner selects mastery review.

## Rule 4 — Preserve breadth

A weakness session should still contain at least one scenario from another relevant capability where practical.

## Rule 5 — Difficulty follows evidence

Do not advance difficulty solely because the learner completed a fixed number of questions.

## Rule 6 — Mastery requires repeated evidence

One high score does not permanently mark a scenario mastered.

---

# 7. Mastery State Machine

**NEW**

↓ first attempt

**PRACTICED**

↓ evidence of structured response

**DEVELOPING**

↓ score ≥80 + STAR + architecture/product/business evidence

**MASTERED**

A later reattempt must confirm retention.

If a later attempt falls below 70:

**MASTERED → DEVELOPING**

This makes mastery dynamic rather than permanent.

---

# 8. Scenario-Level Scoring Rubric

## Situation — 10 points

### 0–2
No meaningful context.

### 3–5
Basic context but missing business constraints.

### 6–8
Specific business/technical situation with useful scope.

### 9–10
Clear enterprise context, stakeholders, constraints and measurable stakes.

---

## Task — 10 points

### 0–2
No ownership.

### 3–5
Generic involvement.

### 6–8
Clear responsibility.

### 9–10
Clear decision authority, accountability and success criteria.

---

## Action — 20 points

### 0–5
Activity list without reasoning.

### 6–10
Reasonable execution steps.

### 11–15
Clear decisions, trade-offs and implementation reasoning.

### 16–20
Architect-level action showing business, process, data, technology, integration, security and stakeholder reasoning where relevant.

---

## Result — 15 points

### 0–3
No result.

### 4–7
Qualitative result.

### 8–11
Credible operational/business improvement.

### 12–15
Measured or strongly evidenced business outcome.

---

## Architecture Reasoning — 15 points

Assess whether the candidate can connect relevant architecture layers:

**Business → Process → Data → Application → Integration → Security → Experience → Technology → Operating Model → Outcome**

Do not award points for merely naming architecture terms.

---

## Product Knowledge — 10 points

Assess whether the candidate correctly reasons about:

**SAP SuccessFactors Onboarding**

and its relevant processes, configuration, data, permissions, integrations, experience and operational considerations.

---

## Business Value — 10 points

Assess:

- employee experience;
- cycle time;
- compliance;
- data quality;
- productivity;
- adoption;
- cost;
- risk;
- scalability;
- measurable transformation outcome.

---

## SME Probe — 10 points

### 0–2
Cannot defend the answer.

### 3–5
Partial defense.

### 6–8
Strong technical/business defense.

### 9–10
Deep reasoning with alternatives, trade-offs, risks and enterprise implications.

---

# 9. Score Interpretation

| Score | Readiness | Action |
|---:|---|---|
| 90–100 | Architect-level | Increase complexity |
| 80–89 | Strong | Maintain + broaden |
| 70–79 | Developing | Target weak dimensions |
| 60–69 | Borderline | Re-practice same capability |
| <60 | Rebuild | Return to concept + guided practice |

---

# 10. Theme-to-Progression Matrix

| Progression | Themes | Weight in Full Mock |
|---|---|---:|
| KNOW | 01–04 | 4 |
| DESIGN | 05–08 | 4 |
| DELIVER | 09–12 | 3 |
| SOLVE | 13–16 | 4 |
| INFLUENCE | 17–19 | 3 |
| TRANSFORM | 20–22 | 4 |
| **TOTAL** | **01–22** | **22** |

---

# 11. Full Mock Scenario Selection

For a 22-question mock:

### KNOW — 4

Select one from each:

- Domain Foundation
- Product / Technology
- Process / Business Context
- Data / Information Model

### DESIGN — 4

Select one from each:

- Requirement Analysis
- Solution Design
- Configuration / Development
- Integration & Architecture

### DELIVER — 3

Randomly select three across:

- Testing & QA
- Deployment & Release
- Migration & Cutover
- Operations & Support

### SOLVE — 4

Select one from each:

- Troubleshooting & RCA
- Scenario Problem Solving
- Risk / Controls / Security
- Performance / Optimization

### INFLUENCE — 3

Select one from:

- Stakeholder Management
- Communication & Consulting
- Presales / Leadership / Decision Making

### TRANSFORM — 4

Select one or more across:

- Transformation & Roadmap
- Innovation & Emerging Technology
- Enterprise Architecture & Business Value

with the fourth scenario selected adaptively from the learner's weakest transformation capability.

---

# 12. Theme Practice Matrix

When the learner selects a single theme:

**20 scenarios are available.**

Recommended sequence:

- Q01–Q05 → foundation
- Q06–Q10 → applied
- Q11–Q15 → complex
- Q16–Q20 → architect challenge

This is a logical difficulty progression only where the source scenario content supports it; otherwise preserve the scenario's assigned difficulty.

---

# 13. Weakness Recovery Matrix

| Weak Score | Recommended Behavior |
|---:|---|
| <60 | 70% weakest capability / 20% adjacent capability / 10% breadth |
| 60–69 | 60% weakest / 25% adjacent / 15% breadth |
| 70–79 | 45% weakest / 30% adjacent / 25% breadth |
| 80–89 | 30% weakest / 30% adjacent / 40% breadth |
| 90+ | Mastery maintenance + challenge |

---

# 14. Difficulty Advancement Gate

## Practitioner → Consultant

Require:

- average ≥75 across recent relevant scenarios;
- STAR structure demonstrated;
- basic product reasoning;
- no critical product misconception.

## Consultant → Architect

Require:

- average ≥80;
- architecture score ≥12/15;
- business-value score ≥8/10;
- successful SME probe.

## Architect → Transformation Architect

Require:

- average ≥85;
- transformation/enterprise architecture evidence;
- credible trade-off reasoning;
- measurable business outcomes;
- successful high-complexity SME probes.

---

# 15. Critical-Failure Override

A high total score must not hide a critical failure.

Flag the scenario as **Critical Review Required** when the candidate demonstrates, where relevant:

- serious security/privacy misunderstanding;
- unsafe data handling;
- materially incorrect product behavior;
- unsupported architectural assumption;
- no ownership in a leadership scenario;
- inability to explain a high-risk production decision.

The system should recommend remediation before advancing.

---

# 16. Feedback Generation Contract

Feedback must contain exactly four useful layers:

### 1. What You Did Well
Evidence from the response.

### 2. What Was Missing
Specific gap, not generic advice.

### 3. Architect Upgrade
One or two changes that would move the response to the next level.

### 4. Retry Challenge
Ask the candidate to answer again using the identified improvement.

Avoid generic feedback such as:

> “Improve your communication.”

Instead:

> “Your Action explained the configuration change but did not establish why the change was preferable to a process redesign. In the retry, state the decision criteria and the business trade-off.”

---

# 17. Assessment Report Data Contract

Every completed mock should produce:

**Candidate**
→ **Mock ID**
→ **Scenario list**
→ **Individual scores**
→ **Theme scores**
→ **Capability scores**
→ **Progression scores**
→ **Critical flags**
→ **Strengths**
→ **Gaps**
→ **Readiness**
→ **Recommended next 10 scenarios**
→ **Reflection**

---

# 18. Analytics

Track four longitudinal views.

## View A — Theme Mastery

22 themes × mastery percentage.

## View B — Capability Radar

22 capabilities × current score.

## View C — Progression

**KNOW → DESIGN → DELIVER → SOLVE → INFLUENCE → TRANSFORM**

## View D — Readiness Trend

Attempt 1 → Attempt 2 → Attempt 3 → ...

The important metric is not the number of questions completed.

It is:

**Demonstrated capability over repeated attempts.**

---

# 19. Example Adaptive Journey

Candidate completes a mock:

- Product = 91
- Process = 86
- Integration = 62
- Security = 58
- Stakeholder = 83
- Transformation = 88

Next session should not simply generate random questions.

It should prioritize:

1. Security-heavy onboarding scenario
2. Integration + security scenario
3. Integration troubleshooting
4. Security governance
5. Architecture trade-off involving integration/security

Then retest the same capabilities through different scenarios.

---

# 20. Implementation Sequence

### Phase 1 — Data

Create the canonical scenario schema.

### Phase 2 — Metadata

Tag all 440 scenarios with:

- capability;
- difficulty;
- probe type;
- architecture signal;
- business outcome;
- progression.

### Phase 3 — Scoring

Implement the 100-point rubric.

### Phase 4 — Selection

Implement adaptive scenario selection.

### Phase 5 — Mastery

Implement NEW → PRACTICED → DEVELOPING → MASTERED.

### Phase 6 — Mock

Implement the 22-question balanced mock.

### Phase 7 — Analytics

Implement theme, capability and readiness trends.

### Phase 8 — Reflection

Implement retry and metacognitive learning loop.

---

# 21. Definition of Done

The simulator data/assessment layer is implementation-ready when:

- all 440 scenarios have stable IDs;
- every scenario has capability metadata;
- every scenario has difficulty metadata;
- every scenario has probe metadata;
- every scenario has architecture signals;
- scoring totals exactly 100;
- selection can prioritize weaknesses;
- immediate duplicate selection is prevented;
- mastery can decay after weak reattempts;
- critical failures override superficial high scores;
- mock interviews preserve KNOW → DESIGN → DELIVER → SOLVE → INFLUENCE → TRANSFORM;
- feedback produces a retry action;
- analytics measure demonstrated capability rather than question volume.

---

# 22. Final Architecture

The simulator now has three clean layers:

**CONTENT**

440 scenario-based interview questions + STAR references

↓

**ASSESSMENT**

Response → SME Probe → Score → Feedback

↓

**ADAPTIVE LEARNING**

Weakness → Scenario Selection → Retry → Mastery → Readiness

The architectural principle is:

**Do not build a bigger question bank. Build a better learning loop.**

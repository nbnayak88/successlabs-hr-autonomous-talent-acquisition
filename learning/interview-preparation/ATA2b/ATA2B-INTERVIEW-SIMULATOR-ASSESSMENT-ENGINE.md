# ATA2b Interview Simulator & Assessment Engine

## Purpose

Convert the completed **440-scenario ATA2b interview bank** into a repeatable practice-to-mastery experience.

**Question bank:** 22 themes × 20 scenarios = 440  
**Product:** Applied Onboarding — SAP SuccessFactors Onboarding  
**Scope:** Enterprise onboarding transformation  
**Boundary:** ATA2a Recruiting / SmartRecruiters remains separate.

---

# 1. Core Learning Loop

The simulator follows:

**Select → Think → Speak → Probe → Score → Reflect → Reattempt**

The learner should not memorize model answers.

The simulator should force the learner to:

1. understand the business situation;
2. structure a STAR response;
3. explain the SAP SuccessFactors Onboarding decision;
4. defend architecture choices;
5. respond to an SME probe;
6. receive evidence-based feedback;
7. retry the weakest capability.

---

# 2. Scenario Selection

Each scenario has a stable identity:

**HR-ATA2B-B[THEME]-Q[01–20]**

Examples:

- HR-ATA2B-B01-Q01
- HR-ATA2B-B08-Q14
- HR-ATA2B-B22-Q20

The engine must select by:

- Theme
- Progression category
- Scenario ID
- Difficulty
- Attempt history
- Weak capability
- Random mode

## Modes

### Mode A — Theme Practice
Learner selects one of the 22 themes.

### Mode B — Random 20
Select 20 scenarios across the complete bank.

### Mode C — Architect Challenge
Prioritize Themes 19–22.

### Mode D — Weakness Recovery
Select scenarios associated with the learner's lowest scores.

### Mode E — Full Mock Interview
Select a balanced interview across:

**KNOW → DESIGN → DELIVER → SOLVE → INFLUENCE → TRANSFORM**

---

# 3. Scenario Delivery

For each selected scenario show only the interview question first.

Do **not** expose the STAR model answer before the learner responds.

After the response, reveal the SME Probe.

The learner must then answer the probe.

Only after the probe should the simulator provide the reference STAR answer.

This creates retrieval practice rather than passive reading.

---

# 4. Candidate Response Contract

Every response should be evaluated against:

### Situation
Did the candidate establish the business/technical context?

### Task
Did the candidate clearly identify their responsibility?

### Action
Did the candidate explain what they actually did?

### Result
Did the candidate provide a measurable or credible outcome?

### Architecture Signal
Did the candidate demonstrate architectural reasoning?

### Product Signal
Did the candidate correctly reason about SAP SuccessFactors Onboarding?

### Business Signal
Did the candidate connect the solution to business/employee outcomes?

### SME Depth
Did the candidate survive the follow-up probe?

---

# 5. Scoring Model

Score each scenario out of 100.

| Dimension | Weight |
|---|---:|
| Situation / Context | 10 |
| Task / Ownership | 10 |
| Action / Execution | 20 |
| Result / Outcome | 15 |
| Architecture Reasoning | 15 |
| Product Knowledge | 10 |
| Business Value | 10 |
| SME Probe | 10 |
| **Total** | **100** |

## Readiness Bands

| Score | Interpretation |
|---:|---|
| 90–100 | Architect-level |
| 80–89 | Strong interview readiness |
| 70–79 | Good, targeted improvement needed |
| 60–69 | Borderline |
| <60 | Rebuild required |

These are practice-readiness bands, not guarantees of interview success.

---

# 6. Architecture Evaluation

The engine should look for evidence across the relevant architecture dimensions:

**Business → Process → Data → Application → Integration → Security → Experience → Technology → Operating Model → Outcome**

Not every scenario requires every dimension.

The evaluator should reward relevance, not keyword density.

A candidate who says:

> “I would use integration because integration is important.”

should not receive a strong architecture score.

A stronger answer explains:

**source → target → business event → data contract → security → failure handling → monitoring → business outcome.**

---

# 7. STAR Quality Rubric

## Situation

**Weak:** Generic project description.

**Strong:** Specific enterprise context, business problem, scope and constraints.

## Task

**Weak:** “I was involved.”

**Strong:** Clearly identifies ownership and decision responsibility.

## Action

**Weak:** Lists activities.

**Strong:** Explains decisions, trade-offs, architecture, stakeholder actions and execution.

## Result

**Weak:** “The project was successful.”

**Strong:** Quantifies or credibly describes cycle time, adoption, quality, compliance, cost, experience or risk improvement.

---

# 8. SME Probe Engine

The SME Probe should test whether the candidate genuinely understands the answer.

Probe categories:

1. Why?
2. What alternative did you reject?
3. What could fail?
4. How would you test it?
5. How would you secure it?
6. How would you integrate it?
7. How would you measure value?
8. What would you do differently at enterprise scale?
9. What changes for global vs local deployment?
10. What would you automate?

The probe category should be linked to the scenario's architecture signal.

---

# 9. Adaptive Difficulty

Difficulty should increase based on demonstrated competence.

### Level 1 — Practitioner

Focus:

- domain
- process
- product
- configuration

### Level 2 — Consultant

Focus:

- requirements
- design
- integration
- testing
- troubleshooting

### Level 3 — Architect

Focus:

- enterprise trade-offs
- security
- operating model
- architecture governance
- business value

### Level 4 — Transformation Architect

Focus:

- roadmap
- AI
- automation
- global/local architecture
- investment
- enterprise value

The learner advances only when evidence supports progression.

---

# 10. Weakness Model

Maintain a capability score for:

- Domain
- Product
- Process
- Data
- Requirements
- Solution Design
- Configuration
- Integration
- QA
- Deployment
- Migration
- Operations
- Troubleshooting
- Problem Solving
- Security
- Optimization
- Stakeholder Management
- Communication
- Leadership
- Transformation
- Innovation
- Enterprise Architecture

After every scenario:

**Update capability score → identify weakest dimension → select next practice scenario.**

---

# 11. Interview Simulation Format

## Round 1 — Recruiter Screen

Focus:

- communication
- ownership
- business context
- concise STAR

## Round 2 — Functional Consultant

Focus:

- onboarding process
- configuration
- data
- troubleshooting

## Round 3 — Solution Architect

Focus:

- architecture
- integration
- security
- experience
- operating model

## Round 4 — Transformation Architect

Focus:

- roadmap
- modernization
- AI
- enterprise value
- executive decision-making

## Round 5 — Executive / Client Panel

Focus:

- business case
- investment
- risk
- trade-offs
- measurable value

---

# 12. Final Mock Interview Blueprint

A full mock should contain approximately:

| Category | Scenarios |
|---|---:|
| KNOW | 4 |
| DESIGN | 4 |
| DELIVER | 3 |
| SOLVE | 4 |
| INFLUENCE | 3 |
| TRANSFORM | 4 |
| **TOTAL** | **22** |

The exact scenarios should be selected dynamically from the 440-question bank.

---

# 13. Final Assessment Report

After a mock interview, generate:

## Overall Score

**XX / 100**

## Readiness

- Architect-level
- Strong readiness
- Targeted improvement
- Borderline
- Rebuild required

## Dimension Scores

| Capability | Score |
|---|---:|
| Business Context | XX |
| Product Knowledge | XX |
| Process Reasoning | XX |
| Data | XX |
| Solution Architecture | XX |
| Integration | XX |
| Security | XX |
| Experience | XX |
| Troubleshooting | XX |
| Stakeholder Influence | XX |
| Transformation | XX |
| Enterprise Value | XX |

## Top 5 Strengths

Evidence-based from actual responses.

## Top 5 Gaps

Evidence-based from actual responses.

## Recommended Next 10 Scenarios

Select from the 440 bank based on weaknesses.

---

# 14. Anti-Memorization Rule

The engine must not reward copying phrases from the reference answer.

Evaluation should prioritize:

**reasoning + evidence + decisions + outcomes**

rather than exact wording.

A candidate can receive a high score with an answer that differs substantially from the reference answer when the reasoning is sound.

---

# 15. Reflection Loop

After each scenario ask:

### 1. What did I know?

### 2. What did I miss?

### 3. What decision was hardest?

### 4. What would I change next time?

### 5. What architecture principle did I demonstrate?

This converts interview preparation into metacognitive learning.

---

# 16. Mastery Rule

A scenario is considered mastered only when the learner:

- scores ≥80;
- demonstrates STAR structure;
- demonstrates appropriate architecture reasoning;
- answers the SME probe;
- provides a credible business outcome;
- repeats successfully on a later attempt.

Therefore:

**Question viewed ≠ Question mastered**

**Question answered ≠ Question mastered**

**Question mastered = demonstrated reasoning under retrieval pressure**

---

# 17. Architecture Mastery Outcome

The simulator ultimately develops this response pattern:

**Business Context**
→ **Problem**
→ **Process Diagnosis**
→ **Data**
→ **Technology Decision**
→ **Architecture**
→ **Integration**
→ **Security**
→ **Experience**
→ **Implementation**
→ **Testing**
→ **Adoption**
→ **Business Result**
→ **Transformation Opportunity**

This is the intended ATA2b interview signature.

---

# 18. Future Implementation Contract

The simulator implementation should keep the question bank separate from the assessment engine.

### Question Bank

Contains:

- Scenario ID
- Theme
- Question
- STAR reference
- SME Probe
- Product example
- Architecture signal
- Business outcome

### Assessment Engine

Contains:

- Candidate
- Attempt
- Response
- Score
- Capability scores
- Feedback
- Reflection
- Mastery state

### Analytics

Contains:

- Theme mastery
- Capability mastery
- Attempt history
- Weakness trends
- Readiness trend
- Recommended next scenarios

This separation keeps the learning architecture reusable across ATA2a, AWF1 and the future HR academies.

---

# 19. Definition of Done

The simulator design is complete when it can:

- select any of the 440 scenarios;
- hide reference answers until response completion;
- run SME probes;
- score STAR;
- score architecture reasoning;
- score product reasoning;
- score business value;
- maintain capability-level weakness scores;
- adapt difficulty;
- generate mock interviews;
- produce a readiness report;
- recommend the next scenarios;
- track mastery over repeated attempts.

---

# 20. Design Principle

The objective is not to create another repository of interview questions.

The objective is to create a **learning system that converts 440 scenarios into demonstrated architectural capability.**

**Read → Recall → Respond → Defend → Reflect → Improve → Reattempt → Master**

# ATA2b — Applied Onboarding — SAP SuccessFactors Onboarding
# Theme 05 — Requirement Analysis

## 20 Scenario-Based Interview Questions & STAR Answers

**Stream:** ATA2b — Onboarding — SAP SuccessFactors Onboarding  
**Theme:** 05 — Requirement Analysis  
**Target:** 20 scenarios  
**Answer method:** STAR — Situation → Task → Action → Result  
**Product posture:** Onboarding-first and architecture-first. Recruiting remains ATA2a.

---

## HR-ATA2B-B05-Q01 — Business Requirement Discovery

### Interview Question
How would you discover requirements for an enterprise SAP SuccessFactors Onboarding transformation?

### STAR Answer
**Situation:** A client began the project with a list of requested screens, forms, and notifications.
**Task:** I needed to understand the underlying business outcomes before designing the solution.
**Action:** I interviewed HR, HR operations, managers, new hires, compliance, IT, payroll, and support teams and translated their pain points into business capabilities, process outcomes, and measurable requirements.
**Result:** The program moved from feature requests to outcome-driven requirements.

### SAP SuccessFactors Onboarding Example
I would structure discovery around the new-hire lifecycle: handoff, preboarding, data collection, documents, compliance, tasks, Day-1 readiness, integration, and productivity.

### SME Probe
What is the difference between a stated requirement and the underlying business need?

---

## HR-ATA2B-B05-Q02 — Current-State Requirement Baseline

### Interview Question
How would you establish a reliable current-state baseline before gathering future-state requirements?

### STAR Answer
**Situation:** Stakeholders described different versions of the existing onboarding process.
**Task:** I needed a single evidence-based baseline.
**Action:** I documented actual process flows, variants, roles, data, documents, systems, integrations, notifications, exceptions, cycle times, and pain points, validating the findings with process owners.
**Result:** Future-state requirements were grounded in actual business behavior.

### SAP SuccessFactors Onboarding Example
I would baseline the existing onboarding journey before deciding which capabilities should move into SuccessFactors Onboarding.

### SME Probe
How do you handle a gap between documented policy and actual practice?

---

## HR-ATA2B-B05-Q03 — Requirement Prioritization

### Interview Question
How would you prioritize conflicting onboarding requirements?

### STAR Answer
**Situation:** HR teams submitted more requirements than the implementation could safely deliver.
**Task:** I needed a transparent prioritization method.
**Action:** I ranked requirements by business value, legal/compliance necessity, employee impact, risk, dependency, effort, and strategic alignment.
**Result:** The team could distinguish must-have capabilities from preferences.

### SAP SuccessFactors Onboarding Example
Critical compliance, Day-1 readiness, data integrity, and core onboarding capabilities would generally outrank cosmetic or low-value customization.

### SME Probe
How would you handle an executive request that conflicts with the agreed priority model?

---

## HR-ATA2B-B05-Q04 — Functional vs Non-Functional Requirements

### Interview Question
What functional and non-functional requirements would you capture for Onboarding?

### STAR Answer
**Situation:** The requirements focused only on what the process should do.
**Task:** I needed to capture how well it must operate.
**Action:** I documented functional requirements for process, tasks, forms, documents, rules, notifications, and integrations, plus non-functional requirements for security, privacy, availability, performance, scalability, accessibility, auditability, and supportability.
**Result:** The target solution could be evaluated beyond feature completeness.

### SAP SuccessFactors Onboarding Example
A process may function correctly but still fail if it cannot meet security, volume, localization, or operational requirements.

### SME Probe
Which non-functional requirement is most likely to become an architecture constraint?

---

## HR-ATA2B-B05-Q05 — Requirement Traceability

### Interview Question
How would you maintain traceability from onboarding requirements to implementation and testing?

### STAR Answer
**Situation:** Requirements were documented separately from configuration and test cases.
**Task:** I needed end-to-end traceability.
**Action:** I assigned requirement IDs and linked each requirement to process design, solution decision, configuration/integration, test scenarios, acceptance criteria, and business owner.
**Result:** The team could prove coverage and identify gaps before release.

### SAP SuccessFactors Onboarding Example
A requirement for a country-specific compliance document should trace through process design, document/form configuration, security, testing, and acceptance.

### SME Probe
What is the risk of implementing requirements without traceability?

---

## HR-ATA2B-B05-Q06 — Stakeholder Conflict

### Interview Question
How would you handle HR, IT, and business stakeholders asking for different onboarding outcomes?

### STAR Answer
**Situation:** HR wanted more controls, IT wanted fewer integrations, and managers wanted a simpler process.
**Task:** I needed to resolve competing requirements.
**Action:** I separated business outcomes from proposed solutions, quantified impact and risk, mapped dependencies, and facilitated a decision using agreed architecture principles.
**Result:** Stakeholders aligned around the target outcome instead of defending individual preferences.

### SAP SuccessFactors Onboarding Example
The requirement baseline would distinguish mandatory business controls from implementation preferences.

### SME Probe
How do you prevent the loudest stakeholder from defining the solution?

---

## HR-ATA2B-B05-Q07 — Global vs Local Requirements

### Interview Question
How would you distinguish global requirements from local onboarding requirements?

### STAR Answer
**Situation:** Country teams submitted many requirements as “mandatory local needs.”
**Task:** I needed to separate genuine localization from preference.
**Action:** I classified each requirement as global, legal/regulatory, country-specific operational, business-unit specific, or preference and documented the evidence for variation.
**Result:** The global design retained a common core with controlled local exceptions.

### SAP SuccessFactors Onboarding Example
Country-specific forms, documents, language, and compliance requirements may be valid; duplicating the entire process usually is not.

### SME Probe
What evidence proves that a local requirement is genuinely mandatory?

---

## HR-ATA2B-B05-Q08 — New-Hire Experience Requirements

### Interview Question
How would you capture requirements for the new-hire experience?

### STAR Answer
**Situation:** Existing requirements described HR tasks but ignored the new hire's experience.
**Task:** I needed experience requirements to become explicit.
**Action:** I captured clarity, timing, mobile usability, accessibility, personalization, communication, task visibility, document completion, and support expectations.
**Result:** Experience became a measurable requirement set rather than a subjective aspiration.

### SAP SuccessFactors Onboarding Example
The SuccessFactors onboarding experience should make required actions understandable, timely, and appropriate to the new hire's context.

### SME Probe
How would you convert “make onboarding easier” into a testable requirement?

---

## HR-ATA2B-B05-Q09 — Manager Requirements

### Interview Question
How would you gather and prioritize hiring-manager requirements?

### STAR Answer
**Situation:** Managers complained that onboarding consumed too much administrative time.
**Task:** I needed to identify what managers actually needed.
**Action:** I mapped manager responsibilities, decision points, required approvals, task timing, information needs, notifications, and escalation expectations.
**Result:** Manager requirements became focused on outcomes rather than reducing every task indiscriminately.

### SAP SuccessFactors Onboarding Example
Manager tasks should be limited to activities where manager involvement provides genuine business value.

### SME Probe
How do you decide whether a manager should own a task or simply receive visibility?

---

## HR-ATA2B-B05-Q10 — Compliance Requirements

### Interview Question
How would you capture onboarding compliance requirements?

### STAR Answer
**Situation:** Compliance teams provided a long list of documents and approvals without process context.
**Task:** I needed requirements that could be implemented and tested.
**Action:** I captured jurisdiction, obligation, population, evidence, timing, responsible party, validation, retention, exception, and audit requirements.
**Result:** Compliance requirements became precise and traceable.

### SAP SuccessFactors Onboarding Example
Required forms, documents, acknowledgements, and validations should be tied to the appropriate worker population and jurisdiction.

### SME Probe
How do you distinguish a legal requirement from an internal control preference?

---

## HR-ATA2B-B05-Q11 — Data Requirements

### Interview Question
How would you identify data requirements for onboarding?

### STAR Answer
**Situation:** Teams requested many fields without knowing why they were needed.
**Task:** I needed to establish a disciplined data requirement set.
**Action:** For every data element, I captured definition, purpose, source, owner, timing, validation, sensitivity, downstream use, and retention.
**Result:** Data collection became purposeful and minimized unnecessary personal information.

### SAP SuccessFactors Onboarding Example
Only data required for onboarding, employment setup, compliance, or defined downstream processes should be captured.

### SME Probe
What question should you ask before adding any new field?

---

## HR-ATA2B-B05-Q12 — Integration Requirements

### Interview Question
How would you gather requirements for onboarding integrations?

### STAR Answer
**Situation:** Stakeholders described integrations only as “send the employee data to system X.”
**Task:** I needed implementation-ready integration requirements.
**Action:** I captured business event, source, target, data elements, timing, frequency, volume, transformation, security, error handling, reconciliation, monitoring, and ownership.
**Result:** Integration requirements became testable and architecturally actionable.

### SAP SuccessFactors Onboarding Example
Requirements could cover data exchange with Employee Central, identity, payroll, IT, document services, or other enterprise systems.

### SME Probe
Why is the business event more important than the interface itself?

---

## HR-ATA2B-B05-Q13 — Security and Privacy Requirements

### Interview Question
What security and privacy requirements would you capture for onboarding?

### STAR Answer
**Situation:** The project focused heavily on functionality while sensitive new-hire information was widely accessible.
**Task:** I needed security and privacy embedded from requirements onward.
**Action:** I captured data classification, least privilege, participant visibility, document access, auditability, privacy purpose, retention, integration security, and incident expectations.
**Result:** Security became a design constraint rather than a post-build review.

### SAP SuccessFactors Onboarding Example
Requirements should define who may view, edit, approve, download, or administer sensitive onboarding information.

### SME Probe
Which privacy requirement is easiest to overlook during onboarding design?

---

## HR-ATA2B-B05-Q14 — Exception Requirements

### Interview Question
How would you gather requirements for onboarding exceptions?

### STAR Answer
**Situation:** The happy path was documented well, but unusual hires repeatedly required manual intervention.
**Task:** I needed the exception model to be explicit.
**Action:** I identified likely exceptions across data, documents, compliance, participants, integrations, process timing, rehire, and cancellation, then defined detection, owner, recovery, escalation, and audit expectations.
**Result:** Exception handling became part of the solution rather than an operational surprise.

### SAP SuccessFactors Onboarding Example
The requirement set should cover missing data, failed integrations, rejected documents, participant changes, and other realistic onboarding exceptions.

### SME Probe
Which exception should become a formal requirement even if it happens rarely?

---

## HR-ATA2B-B05-Q15 — Acceptance Criteria

### Interview Question
How would you convert an onboarding requirement into strong acceptance criteria?

### STAR Answer
**Situation:** Requirements were written as broad statements such as “onboarding must be user friendly.”
**Task:** I needed objective acceptance.
**Action:** I converted the requirement into observable behavior, population, conditions, expected result, security expectations, timing, and measurable outcome.
**Result:** Business owners and testers could agree on what “done” meant.

### SAP SuccessFactors Onboarding Example
For a required document, acceptance criteria could specify who receives it, when it becomes available, what constitutes completion, and how exceptions are handled.

### SME Probe
What makes acceptance criteria testable?

---

## HR-ATA2B-B05-Q16 — MVP Scope

### Interview Question
How would you define an MVP for a global Onboarding implementation?

### STAR Answer
**Situation:** The program attempted to implement every country variation in the first release.
**Task:** I needed to create a viable first release.
**Action:** I prioritized the common core, critical compliance, essential integrations, core participant journeys, security, and measurable Day-1 outcomes while deferring lower-value enhancements.
**Result:** The organization could achieve value sooner without compromising essential controls.

### SAP SuccessFactors Onboarding Example
The MVP should establish a stable global onboarding foundation before adding advanced variants and optimization.

### SME Probe
What should never be deferred from an onboarding MVP?

---

## HR-ATA2B-B05-Q17 — Change Control

### Interview Question
How would you manage changing onboarding requirements during implementation?

### STAR Answer
**Situation:** Country teams continued submitting new requirements after design sign-off.
**Task:** I needed to remain responsive without destabilizing delivery.
**Action:** I classified changes by urgency, business value, compliance impact, architecture impact, effort, and release timing, then routed them through formal change control.
**Result:** Important changes were accommodated without uncontrolled scope growth.

### SAP SuccessFactors Onboarding Example
Changes affecting process variants, rules, integrations, security, or data should receive appropriate architecture and testing impact assessment.

### SME Probe
When should a change be rejected even if it is technically feasible?

---

## HR-ATA2B-B05-Q18 — Outcome-Based Requirements

### Interview Question
How would you rewrite feature requests as outcome-based requirements?

### STAR Answer
**Situation:** Stakeholders requested “more reminders” to improve task completion.
**Task:** I needed to identify the actual outcome.
**Action:** I reframed the requirement as increasing on-time completion while minimizing notification fatigue, then evaluated reminders, task design, ownership, and escalation as possible solutions.
**Result:** The team solved the business problem rather than prematurely selecting a feature.

### SAP SuccessFactors Onboarding Example
Instead of requiring a specific notification, the requirement can specify the desired completion behavior and service outcome.

### SME Probe
Why should requirements avoid prescribing technology too early?

---

## HR-ATA2B-B05-Q19 — Requirement Quality Review

### Interview Question
How would you determine whether an onboarding requirement is high quality?

### STAR Answer
**Situation:** The backlog contained ambiguous, duplicate, and conflicting requirements.
**Task:** I needed a quality gate before solution design.
**Action:** I reviewed each requirement for clarity, business value, uniqueness, feasibility, traceability, testability, ownership, priority, dependencies, and acceptance criteria.
**Result:** Poor requirements were corrected before they became configuration or integration defects.

### SAP SuccessFactors Onboarding Example
A requirement should be clear enough to trace into SuccessFactors configuration, integration, security, testing, and business acceptance.

### SME Probe
Which requirement quality attribute prevents the most downstream ambiguity?

---

## HR-ATA2B-B05-Q20 — Trusted Architect Requirement Analysis

### Interview Question
How would you demonstrate requirement-analysis maturity as an SAP SuccessFactors Onboarding architect?

### STAR Answer
**Situation:** A client expected an architect to translate broad business goals into a practical target solution.
**Task:** I needed to show that I could lead discovery rather than simply document requests.
**Action:** I moved through business outcome → current state → personas → process → data → controls → integration → experience → non-functional needs → priorities → acceptance criteria → architecture decisions.
**Result:** Requirements became a reliable foundation for solution design, implementation, testing, and business value realization.

### SAP SuccessFactors Onboarding Example
I would ensure every major requirement can be traced from the new-hire business outcome through SuccessFactors Onboarding design and ultimately to measurable acceptance.

### SME Probe
What separates an order-taker from an enterprise solution architect during requirements discovery?

---

# Theme 05 Completion Standard

A learner completes **ATA2b Theme 05 — Requirement Analysis** when they can:

- Discover business outcomes rather than simply collect feature requests.
- Establish an evidence-based current-state baseline.
- Define the recruiting-to-onboarding requirement boundary.
- Prioritize functional and non-functional requirements.
- Maintain traceability.
- Resolve stakeholder conflicts.
- Separate global, local, regulatory, and preference requirements.
- Capture experience, manager, compliance, data, integration, security, privacy, and exception requirements.
- Write testable acceptance criteria.
- Define a realistic MVP.
- Govern change requests.
- Convert feature requests into outcome-based requirements.
- Apply a requirement-quality gate.
- Demonstrate architect-level discovery and requirement leadership.

**Quality rule:** Every scenario demonstrates Situation → Task → Action → Result, contains a distinct requirement-analysis decision, uses SAP SuccessFactors Onboarding as the primary example, remains separate from ATA2a Recruiting, avoids duplication with later Onboarding themes, and ends with an SME Probe.

**Scenario IDs:** HR-ATA2B-B05-Q01 → HR-ATA2B-B05-Q20

**Target achieved:** 20 unique scenario-based interview questions + 20 STAR answers.

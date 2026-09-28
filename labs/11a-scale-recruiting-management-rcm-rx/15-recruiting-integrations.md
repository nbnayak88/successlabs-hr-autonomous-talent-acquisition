# SAP SuccessFactors Recruiting Management (RCM) — SCALE Interview Preparation

## Step 15 — Recruiting Integrations

**Objective:** Architect RCM integrations with Employee Central (EC), Employee Central Position Management, Onboarding, and external systems.

> **Interview mindset:** Do not describe integration as “connecting two systems.” Explain the business event, system of record, object lifecycle, data contract, mapping, security, error handling, reconciliation, operational ownership, and measurable outcome.

SAP documentation describes standard integration patterns in which Position Management can initiate job requisitions from the Position Org Chart, RCM can transmit an external candidate into Employee Central for employee creation, and RCM can pass recruiting data into Onboarding. SAP also documents business-rule-driven mapping for Position → RCM requisition creation. citeturn468516search0turn468516search1turn468516search2

---

## 1. Integration Architecture Lens

### The end-to-end recruiting ecosystem

```text
                 ┌─────────────────────────────┐
                 │ Employee Central Position   │
                 │ Management / Position Org   │
                 └──────────────┬──────────────┘
                                │
                     Position → Requisition
                                │
                                ▼
┌───────────────┐      ┌──────────────────────┐      ┌───────────────────┐
│ External       │ ───► │ Recruiting Management │ ───► │ Onboarding        │
│ Sources /      │      │ RCM                  │      │ ONB               │
│ Career Sites   │      │                      │      │                   │
└───────────────┘      └──────────┬───────────┘      └─────────┬─────────┘
                                   │                            │
                                   │ Hire / Pre-hire            │ New Hire Data
                                   ▼                            ▼
                           ┌──────────────────┐        ┌──────────────────┐
                           │ Employee Central │ ◄──────│ Manage Pending   │
                           │ Employee Record  │        │ Hires / EC       │
                           └──────────────────┘        └──────────────────┘

External ecosystem:
Payroll • IAM • Background Check • Assessment • HR Data Lake • ERP • iPaaS/API • Vendor Systems
```

### Core architectural questions

1. **What event starts the integration?**
2. **Which system is authoritative for each field?**
3. **What is the business object being transferred?**
4. **Is the interface synchronous, asynchronous, scheduled, or event-driven?**
5. **How is the record identified across systems?**
6. **What happens when mapping fails?**
7. **How is retry and idempotency handled?**
8. **How are security, privacy and least-privilege enforced?**
9. **Who owns operational support?**
10. **How do we reconcile source and target populations?**

---

# 2. Scenario-Based Interview Questions — 20 Deep Scenarios

## Scenario 1 — Position-to-Requisition Integration

**Question:** A customer wants hiring managers to create requisitions directly from Employee Central Position Org Chart. How would you architect the integration?

### STAR Answer

**Situation:** The organization maintained approved positions in EC Position Management but recruiters manually recreated position information in RCM, creating duplicate data entry and inconsistent organizational values.

**Task:** Design a controlled Position → RCM flow that preserves the position as the source of truth while allowing Recruiting to manage the recruiting lifecycle.

**Action:** I would first confirm the position lifecycle and identify the authoritative fields: position code, job classification, business unit, department, location, legal entity, manager, headcount and other approved attributes. I would enable the standard Position Management → Recruiting integration, configure the rule that determines the requisition template, and configure the mapping rule that populates requisition fields from the position. I would then define which fields remain recruiter-editable and which are inherited or controlled. I would test permissions, effective dating, duplicate requisition prevention, mapping exceptions and position-to-requisition reconciliation.

SAP documents this standard pattern, including creating a requisition from the Position Org Chart and using business rules for template derivation and field mapping. citeturn468516search2

**Result:** Hiring managers start with approved position data, recruiters spend less time re-keying information, and organizational data quality improves.

**Learning:** Integration succeeds when ownership is explicit: Position Management owns position truth; RCM owns recruiting execution.

**Evidence:** Field-mapping specification, RBP matrix, test script, reconciliation report and defect log.

**Follow-up:** Which fields should never be freely edited in RCM after being sourced from Position Management?

---

## Scenario 2 — Hire-to-EC Handoff

**Question:** How would you design the RCM → EC handoff for an external candidate who has accepted an offer?

### STAR Answer

**Situation:** The customer wanted to avoid manually recreating accepted-candidate information in Employee Central.

**Task:** Establish a reliable handoff from Recruiting to employee creation.

**Action:** I would model the candidate's transition from recruiting outcome to pre-hire/new-hire processing. I would define the mandatory EC hire fields, source each field, validate transformations, identify the external candidate with a stable business key, and define ownership of compensation, organization, employment and personal data. I would then test candidate-to-employee identity handling, Employee ID creation, duplicate prevention, error recovery and downstream synchronization.

SAP's current test script describes an RCM → EC flow in which an external candidate is staged as a prehire, hiring data can be reviewed in EC, and an Employee ID is added back to the candidate profile. citeturn468516search0

**Result:** Accepted candidates move into employee processing without uncontrolled manual re-entry.

**Learning:** The hiring handoff is a lifecycle transition, not merely a field-to-field interface.

**Evidence:** Integration contract, field mapping, test evidence, duplicate test and operational runbook.

**Follow-up:** What would you do if the candidate exists in EC already?

---

## Scenario 3 — RCM-to-Onboarding Integration

**Question:** A customer wants accepted candidates to start onboarding directly from Recruiting. What would you design?

### STAR Answer

**Situation:** Recruiters were sending new-hire information to HR operations manually after offer acceptance.

**Task:** Create a controlled RCM → Onboarding journey.

**Action:** I would define the recruiting status that qualifies a candidate for onboarding, identify the required candidate and employment data, establish field mappings, define who can initiate onboarding, and design exception handling for incomplete data. I would also confirm where the process hands off to Employee Central and how onboarding status is surfaced back to recruiting operations.

SAP documents a standard Recruiting → Onboarding pattern in which applicants can be moved to pre-hire status and onboarding can be initiated for one or multiple applicants from a requisition. citeturn468516search1

**Result:** Recruiting becomes the controlled trigger for onboarding, with less manual handoff.

**Learning:** The integration boundary must be based on lifecycle readiness, not simply “offer accepted.”

**Evidence:** Eligibility rule, mapping workbook, RBP design, test scenarios and monitoring dashboard.

---

## Scenario 4 — Position Data Is Inconsistent Across Systems

**Question:** Position data says “Finance,” while the requisition says “Corporate Finance.” What do you do?

### STAR Answer

**Situation:** Source and target values used different taxonomies.

**Task:** Preserve business meaning without introducing uncontrolled value translation.

**Action:** I would identify the system of record, compare the code sets, create an explicit crosswalk where required, and decide whether the target should inherit the source value or derive a recruiting-specific representation. I would not solve the issue by allowing recruiters to manually overwrite the integration every time. I would centralize the mapping logic and add validation for unmapped values.

**Result:** Mapping becomes deterministic and maintainable.

**Learning:** A stable code model is more important than a clever interface.

---

## Scenario 5 — Mapping a New Country

**Question:** The integration works in India and the US, but a rollout to Germany requires different legal entity, location and privacy fields. How do you respond?

### STAR Answer

**Situation:** The global model did not fully represent country-specific requirements.

**Task:** Extend the integration without breaking existing countries.

**Action:** I would separate global canonical attributes from localized attributes, classify mandatory country-specific fields, define conditional mapping rules, review privacy constraints, add localization-specific test data, and regression-test all existing countries.

**Result:** Germany is added as a governed variant instead of creating a forked integration.

**Learning:** Design the integration for controlled variation, not unlimited exceptions.

---

## Scenario 6 — Candidate Is Hired but Onboarding Does Not Start

**Question:** A recruiter sees the candidate as ready, but no onboarding process was initiated. How would you troubleshoot?

### STAR Answer

**Situation:** Recruiting showed the expected candidate outcome, but downstream onboarding did not begin.

**Task:** Determine whether the failure occurred in eligibility, trigger, mapping, permissions or downstream processing.

**Action:** I would trace the lifecycle event from candidate status to onboarding initiation. I would verify user permissions, required fields, trigger conditions, integration logs, target-system receipt and duplicate/idempotency controls. I would avoid manually restarting the candidate until the root cause is isolated.

**Result:** The defect is classified at the correct integration boundary and recovered without creating duplicate onboarding records.

**Learning:** Always troubleshoot by tracing the business event, not by starting with the interface technology.

---

## Scenario 7 — External Assessment System

**Question:** RCM must send candidates to an assessment vendor and receive results. Architect it.

### STAR Answer

**Situation:** The recruiting team needed standardized pre-employment assessments.

**Task:** Integrate outbound candidate selection with inbound assessment results.

**Action:** I would define the trigger, minimum candidate payload, consent requirements, external reference ID, assessment lifecycle statuses and result schema. I would make the integration asynchronous, use an external correlation ID, define retries and idempotency, and ensure that only authorized recruiting users can see sensitive results.

**Result:** Assessments become a governed extension of recruiting rather than an uncontrolled external process.

**Learning:** External integrations require lifecycle and privacy design equal to the interface design.

---

## Scenario 8 — Duplicate Candidate Created Across Systems

**Question:** The same person appears twice after an integration run. What is your approach?

### STAR Answer

**Situation:** Duplicate identities created reporting and hiring risks.

**Task:** Establish deterministic identity handling.

**Action:** I would identify the cross-system natural keys, candidate IDs and possible matching attributes. I would distinguish true duplicate identities from legitimate multiple applications. I would then implement duplicate detection at the correct boundary and define an exception workflow for uncertain matches.

**Result:** Duplicate records are reduced without blocking legitimate reapplications.

**Learning:** Candidate identity and application identity are separate concepts.

---

## Scenario 9 — Compensation Data Must Cross the Boundary

**Question:** How would you protect salary and compensation information in recruiting integrations?

### STAR Answer

**Situation:** Compensation fields were required for downstream processing but should not be broadly exposed.

**Task:** Minimize data exposure.

**Action:** I would classify compensation as sensitive, send only fields that are required for the business process, restrict access by role, avoid unnecessary duplication, secure transport, validate recipient authorization and test that sensitive fields are absent from logs, emails and monitoring payloads where inappropriate.

**Result:** The business gets the required information with reduced exposure.

**Learning:** Data minimization is an architecture principle, not an afterthought.

---

## Scenario 10 — Integration Failure and Retry

**Question:** The target system is unavailable for two hours. What should happen?

### STAR Answer

**Situation:** A downstream service outage delayed recruiting transactions.

**Task:** Prevent data loss and avoid duplicate transactions.

**Action:** I would use durable message/state handling where supported, classify retryable versus non-retryable failures, apply bounded retry with backoff, maintain correlation IDs and ensure idempotent processing. After recovery I would reconcile source and target counts.

**Result:** The outage becomes a recoverable operational event rather than a manual data-recreation exercise.

**Learning:** Reliability requires recovery design, not just successful-path testing.

---

## Scenario 11 — Recruiter Manually Changes an Integrated Field

**Question:** A recruiter changes a field that was originally supplied by Position Management. Should the value flow back?

### STAR Answer

**Situation:** Business users wanted flexibility, but bidirectional synchronization could create ownership conflicts.

**Task:** Prevent data ping-pong.

**Action:** I would classify the field as source-owned, target-owned or jointly governed. For Position-owned fields, RCM should consume the value rather than become an uncontrolled source. If a recruiting-specific override is genuinely needed, I would create an explicitly defined override attribute and governance rule instead of silently writing back to the source.

**Result:** Ownership remains clear and integration loops are avoided.

**Learning:** Never create bidirectional synchronization without an explicit conflict policy.

---

## Scenario 12 — Integration Security

**Question:** What security controls do you consider for RCM integrations?

### STAR Answer

**Situation:** Multiple HR systems exchanged personal and employment data.

**Task:** Protect sensitive recruiting information.

**Action:** I would apply least privilege, role-based authorization, secure credentials, controlled integration users, minimum necessary fields, transport protection, environment separation, auditability and monitoring. I would explicitly test unauthorized access scenarios.

**Result:** Data flows only to authorized destinations and business roles.

**Learning:** Security is part of the integration contract.

---

## Scenario 13 — Effective-Dated Position Changes

**Question:** A position changes next month but the recruiting process is already open. How do you handle the integration?

### STAR Answer

**Situation:** Effective-dated changes can alter organizational context after a requisition has been created.

**Task:** Prevent accidental retroactive changes to an active recruiting process.

**Action:** I would distinguish real-time source updates from recruiting snapshot data. I would define which changes should propagate automatically, which require recruiter review and which are locked once the requisition reaches a lifecycle milestone. I would use effective dates and reconciliation reporting to detect drift.

**Result:** Future organizational changes do not unpredictably rewrite active recruitment decisions.

**Learning:** Effective dating must be treated as a business rule, not merely a technical field.

---

## Scenario 14 — Middleware / iPaaS Architecture

**Question:** When would you introduce an integration platform instead of point-to-point connections?

### STAR Answer

**Situation:** The client expected RCM to integrate with EC, Onboarding, assessment, background-check and analytics platforms.

**Task:** Prevent a growing network of brittle point-to-point interfaces.

**Action:** I would evaluate integration volume, transformation complexity, monitoring requirements, reuse, security and operational ownership. Where the enterprise already has a standard integration platform, I would favor a governed API/event pattern and canonical mappings over custom one-off interfaces.

**Result:** Interfaces become reusable, observable and easier to govern.

**Learning:** The right integration architecture is driven by ecosystem complexity, not by a preference for a particular technology.

---

## Scenario 15 — Event-Driven vs Scheduled Integration

**Question:** A business asks for “real-time” integration. How do you decide whether it is truly required?

### STAR Answer

**Situation:** Stakeholders requested real-time synchronization for a process that might tolerate minutes of delay.

**Task:** Match architecture to business latency.

**Action:** I would define the required business SLA first. For hiring-critical events such as onboarding initiation, near-real-time may be justified; for reporting enrichment, scheduled synchronization may be adequate. I would compare latency, resilience, cost, monitoring and replay characteristics.

**Result:** The design meets the business SLA without overengineering.

**Learning:** “Real-time” is a requirement to quantify, not a solution.

---

## Scenario 16 — Reconciliation Framework

**Question:** How would you prove that Recruiting and Employee Central are in sync?

### STAR Answer

**Situation:** Individual interface logs showed success, but the business lacked confidence in population-level accuracy.

**Task:** Create business reconciliation.

**Action:** I would define control totals and key reconciliation states: requisitions created, candidates advanced to hireable state, hires handed to EC, successful employee creation, exceptions and duplicates. I would compare source and target populations using stable business identifiers and report unresolved variance.

**Result:** Operations can verify completeness independently of interface-level success.

**Learning:** Technical success does not prove business reconciliation.

---

## Scenario 17 — Data Model and Canonical Mapping

**Question:** How do you design a reusable data model for multiple external systems?

### STAR Answer

**Situation:** Each vendor expected different names and structures for the same recruiting concepts.

**Task:** Avoid building unique mapping logic for every connection.

**Action:** I would define canonical recruiting concepts such as Candidate, Application, Requisition, Position, Offer and Hire Event. I would then map source and target representations to the canonical model, documenting mandatory fields, code translations, lifecycle states and ownership.

**Result:** New integrations become incremental mapping exercises rather than complete redesigns.

**Learning:** Canonical modeling reduces semantic duplication.

---

## Scenario 18 — Production Cutover

**Question:** What would your integration cutover plan look like?

### STAR Answer

**Situation:** A new RCM integration was ready for production.

**Task:** Move without losing active candidate or requisition transactions.

**Action:** I would freeze or control source changes where appropriate, establish a migration and synchronization window, reconcile open transactions, execute smoke tests, verify security, confirm monitoring, define rollback criteria and establish hypercare ownership.

**Result:** The cutover is controlled and measurable.

**Learning:** Integration cutover is a business continuity exercise.

---

## Scenario 19 — Global Template with Local Exceptions

**Question:** A global RCM integration needs country-specific variations. How would you architect it?

### STAR Answer

**Situation:** Global recruiting processes were standardized, but local legal and organizational data requirements differed.

**Task:** Support local requirements without creating 30 unrelated interfaces.

**Action:** I would define a global integration contract, parameterize country-specific mappings and rules, maintain a controlled extension model and use a shared test matrix with country-specific scenarios.

**Result:** One governed architecture supports multiple country variants.

**Learning:** Standardization should create reusable guardrails, not eliminate legitimate local requirements.

---

## Scenario 20 — End-to-End Integration Failure

**Question:** A candidate is hired in RCM, Onboarding starts, but the final employee record is missing in EC. Walk through your answer.

### STAR Answer

**Situation:** The end-to-end hiring journey failed after the recruiting transaction had already succeeded.

**Task:** Identify the broken transition and restore the lifecycle without duplicates.

**Action:** I would trace the candidate/application ID, onboarding request ID and employee/pre-hire identifiers across each boundary. I would verify trigger eligibility, mandatory EC data, permissions, target response, duplicate detection and downstream processing. I would isolate the first failed transaction, correct the underlying cause, replay only the safe transaction and reconcile the final populations.

**Result:** The recovery is targeted and auditable rather than a manual reprocessing of the entire candidate.

**Learning:** The best integration troubleshooting method follows the business identity across the entire lifecycle.

---

# 3. Integration Data Contract

| Domain | Typical Source of Truth | RCM Role | Critical Control |
|---|---|---|---|
| Position | EC Position Management | Consume / create requisition context | Position ID + effective date |
| Requisition | RCM | Recruiting system of record | Requisition ID |
| Candidate | RCM / candidate ecosystem | Recruiting identity | Candidate ID |
| Application | RCM | Recruiting lifecycle | Application ID |
| Offer | RCM | Offer lifecycle | Offer/version ID |
| Employee | EC | Employee master | Person/Employee ID |
| Onboarding | ONB | New-hire execution | Onboarding request/status |
| External assessment | Vendor | Assessment evidence | External correlation ID |
| Background check | External vendor | Screening evidence | Screening reference |
| Analytics | Data platform | Consumption | Canonical identifiers |

**Design rule:** Never document only a “field mapping.” Document **object + identifier + owner + lifecycle + transformation + validation + error behavior**.

---

# 4. Integration Ownership Matrix

| Decision | Position Mgmt | RCM | Onboarding | EC | External System |
|---|---|---|---|---|---|
| Position attributes | **Own** | Consume | - | Govern | - |
| Requisition | Input | **Own** | - | - | - |
| Candidate recruiting record | - | **Own** | Consume relevant data | - | Source/consume as applicable |
| Offer | - | **Own** | Consume outcome | - | - |
| Employee master | - | Handoff | Consume/collect | **Own** | Consume as applicable |
| New-hire activities | - | Trigger | **Own** | Consume/finalize where applicable | - |
| Assessment result | - | Consume | Optional | - | **Own** |

> Ownership must be validated against the customer's configured operating model and current product capabilities.

---

# 5. Integration Pattern Matrix

| Pattern | Example | Primary Risk | Design Response |
|---|---|---|---|
| Position → RCM | Create requisition from position | Incorrect mapping | Rule + validation |
| RCM → ONB | Initiate onboarding | Incomplete hire data | Eligibility + mandatory field validation |
| RCM → EC | Create/process employee | Duplicate identity | Stable identifiers + reconciliation |
| RCM ↔ External Vendor | Assessment | Vendor outage | Retry + correlation ID |
| Scheduled extract | Analytics | Data latency | SLA + control totals |
| API/event | Hiring event | Duplicate/replay | Idempotency + observability |
| Batch reconciliation | Daily control | Undetected drift | Exception queue |

---

# 6. Failure-Handling Framework

For every integration, classify failures into:

### A. Validation failure
Example: required field missing.

**Response:** Reject before transmission where possible; return actionable error.

### B. Mapping failure
Example: new country code has no target mapping.

**Response:** Put transaction in exception state; do not silently default critical data.

### C. Authentication / authorization failure

**Response:** Stop processing safely; alert technical owner; protect credentials.

### D. Availability failure

**Response:** Retry according to policy; preserve transaction state.

### E. Duplicate / idempotency failure

**Response:** Detect using stable business keys and external correlation IDs.

### F. Business-rule failure

**Response:** Route to functional owner with business-readable diagnostic.

### G. Partial completion

**Response:** Reconcile all downstream states before replaying.

---

# 7. Integration Testing Strategy

## SIT

Validate:

- object creation
- mapping
- transformation
- status transitions
- authentication
- error paths
- retry behavior
- duplicate handling

## UAT

Validate:

- recruiter journey
- hiring-manager journey
- onboarding journey
- employee administration journey
- country/local variations
- business reporting

## Negative testing

Test:

- missing mandatory data
- invalid reference value
- invalid status
- duplicate candidate
- duplicate hire request
- unauthorized user
- unavailable target
- malformed payload
- partial downstream completion

## Regression testing

Every integration release should retest:

```text
POSITION → REQUISITION → APPLICATION → OFFER → PRE-HIRE
→ ONBOARDING → EMPLOYEE → RECONCILIATION
```

---

# 8. Security & Privacy Checklist

- Least-privilege integration users
- Role-based access for recruiting and HR actions
- Sensitive-field minimization
- Controlled credentials
- Secure transport
- Environment segregation
- Audit logging
- Candidate privacy/retention requirements
- No sensitive data in unsecured logs
- Explicit ownership of exception queues
- Access review after organizational changes
- Testing of unauthorized scenarios

---

# 9. Operational Dashboard

A production integration should expose at least:

| KPI | Purpose |
|---|---|
| Transactions processed | Throughput |
| Success rate | Reliability |
| Validation failure rate | Data quality |
| Mapping failure rate | Design quality |
| Retry rate | Resilience |
| Duplicate rate | Identity quality |
| Mean time to resolution | Operations |
| Unreconciled records | Business control |
| Aging exceptions | Operational risk |
| End-to-end hiring completion | Business outcome |

---

# 10. Common Architecture Mistakes

### Mistake 1 — Treating integration as field mapping

**Correction:** Model lifecycle, ownership and business event.

### Mistake 2 — Bidirectional sync everywhere

**Correction:** Define system of record for every attribute.

### Mistake 3 — No stable identifiers

**Correction:** Design correlation and reconciliation keys before interface build.

### Mistake 4 — Only testing the happy path

**Correction:** Test error, retry, duplicate, security and partial-completion paths.

### Mistake 5 — Overusing custom middleware

**Correction:** Start with standard SuccessFactors capabilities, then introduce additional integration architecture only where business or enterprise requirements justify it.

### Mistake 6 — No reconciliation

**Correction:** Build population-level controls, not only technical logs.

### Mistake 7 — Mixing global and local rules

**Correction:** Separate canonical design from controlled local variation.

---

# 11. SAP SME Signals to Listen For

A strong candidate should recognize that:

- Position Management can drive requisition creation from the Position Org Chart. citeturn468516search2
- Position → RCM can use business rules to derive the requisition template and map fields. citeturn468516search2
- RCM → EC can support the transition of an external candidate into employee processing and employee identification. citeturn468516search0
- RCM → Onboarding can pass recruiting data into onboarding and allow onboarding initiation from recruiting. citeturn468516search1
- Current SAP documentation should be checked before prescribing legacy Provisioning-based integration switches; SAP's current Position Management guidance says the integration is activated through Position Management Settings rather than the older Provisioning approach. citeturn468516search2
- Onboarding and EC share new-hire data concepts, and SAP cautions that position-related changes should be handled in Employee Central Position Management rather than introducing uncontrolled changes through onboarding. citeturn468516search6

---

# 12. Rapid-Fire Interview Answers

**Q1. What is your first integration question?**  
**A:** What business event are we automating, and which system owns the truth?

**Q2. What should every interface have?**  
**A:** Contract, identifiers, mapping, validation, security, error handling and reconciliation.

**Q3. How do you prevent integration loops?**  
**A:** Explicit ownership plus one-way or controlled synchronization by attribute.

**Q4. How do you handle duplicate hires?**  
**A:** Stable identifiers, idempotency and reconciliation before replay.

**Q5. Real-time or batch?**  
**A:** Choose based on business latency, resilience and operational requirements.

**Q6. What do you test first?**  
**A:** Business lifecycle plus negative and recovery paths.

**Q7. What is a canonical model?**  
**A:** A shared enterprise representation of business objects used to reduce repeated semantic mapping.

**Q8. What proves integration success?**  
**A:** End-to-end business completion and reconciliation, not just HTTP/API success.

**Q9. What is the biggest integration risk?**  
**A:** Ambiguous ownership of business data.

**Q10. What is your architecture principle?**  
**A:** Standard first, explicit ownership, secure by design, observable by default, recoverable by design.

---

# 13. Final Master Answer

> “When I architect SAP SuccessFactors Recruiting integrations, I start from the hiring journey rather than from the interface. I identify the business event, the system of record, the business object, the identifier and the lifecycle state. For Position Management, I typically use the position as the trusted source for approved organizational context and derive the recruiting requisition through controlled mapping. For the downstream hiring journey, I define the exact transition from candidate and offer outcome into pre-hire, Onboarding and Employee Central processing. I document every field with ownership, transformation, validation and security classification. I then design the integration pattern, idempotency, retry strategy, error queue and reconciliation controls. Finally, I validate the architecture through end-to-end, negative, security and recovery testing, followed by production monitoring with business KPIs. My goal is not simply to make systems exchange data; my goal is to create a trustworthy recruiting value stream from approved position to candidate to hire to employee.”

---

# 14. Master Integration Loop

**BUSINESS EVENT**  
↓  
**PROCESS**  
↓  
**SYSTEM OF RECORD**  
↓  
**BUSINESS OBJECT**  
↓  
**IDENTIFIER**  
↓  
**DATA CONTRACT**  
↓  
**MAPPING / TRANSFORMATION**  
↓  
**SECURITY**  
↓  
**TRIGGER / INTEGRATION PATTERN**  
↓  
**VALIDATION**  
↓  
**DELIVERY**  
↓  
**RETRY / ERROR HANDLING**  
↓  
**RECONCILIATION**  
↓  
**OBSERVABILITY**  
↓  
**BUSINESS OUTCOME**  
↓  
**MEASURE**  
↓  
**IMPROVE**

---

## Interviewer's 30-Second Architecture Summary

> **“I architect RCM integration as a controlled lifecycle across Position Management, Recruiting, Onboarding, Employee Central and external platforms. I establish ownership and identifiers first, use standard integrations wherever possible, define explicit mappings and security, design for failure and idempotency, and prove end-to-end completeness through reconciliation. The integration is successful only when the recruiting business process completes reliably, not merely when the interface reports success.”**

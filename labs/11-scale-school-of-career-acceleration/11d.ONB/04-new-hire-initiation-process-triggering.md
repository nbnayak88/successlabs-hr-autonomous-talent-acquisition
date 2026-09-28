# 04 — New Hire Initiation & Process Triggering

> **Interview Preparation | SAP SuccessFactors Onboarding | 11d.ONB**

## Objective

Master how to design, configure, troubleshoot, and govern the point at which a candidate becomes an Onboarding process participant.

The core mindset:

> **Onboarding initiation is not simply a button. It is a controlled business event that creates a downstream employee-lifecycle process.**

A strong consultant understands:

- who can initiate onboarding,
- from which source,
- under which eligibility conditions,
- what data must be passed,
- what event reason is required,
- which process type is triggered,
- how the language is determined,
- how duplicate or invalid initiation is prevented,
- how the process is monitored,
- and how failures are recovered.

---

# 1. Why Initiation Architecture Matters

The initiation event is the bridge between:

**Hiring Decision → Onboarding Process → Employee Lifecycle**

A simplified flow is:

**Candidate becomes hireable  
↓  
Eligibility evaluated  
↓  
Initiate Onboarding  
↓  
Candidate/New Hire data transferred  
↓  
Onboardee created  
↓  
Responsible participants assigned  
↓  
Tasks/forms/documents triggered  
↓  
New hire completes onboarding  
↓  
Employee Central conversion**

SAP's current learning content describes Onboarding as beginning with initiation and ending with conversion of the new hire into an internal employee. Initiation can occur from SAP SuccessFactors Recruiting, an external ATS, or Admin Center through Add New Hire to Onboarding. citeturn0search0turn0search1

---

# 2. Current SAP Initiation Models

SAP currently documents three major initiation entry points for external/new-hire onboarding:

## A. SAP SuccessFactors Recruiting

A recruiter selects a hireable candidate and chooses **Initiate Onboarding**.

## B. External ATS

An external recruiting platform can pass candidate data to SAP SuccessFactors Onboarding through the supported integration architecture.

## C. Manual Initiation

An authorized user can use **Add New Hire to Onboarding** from Admin Center.

Manual initiation can be useful when a hire does not originate from the normal recruiting process, including certain confidential or exceptional hiring scenarios. citeturn0search4turn0search5

For internal hires, SAP currently documents initiation through:

- an Employee Central transfer event,
- an internal candidate in Recruiting,
- or an internal candidate from an external ATS. citeturn0search8

---

# 3. Initiation Architecture

Use this mental model:

**SOURCE**

Recruiting / External ATS / EC / Admin

↓

**ELIGIBILITY**

Is this candidate allowed to enter Onboarding?

↓

**IDENTITY**

Who is the candidate/onboardee?

↓

**DATA**

What information must be transferred?

↓

**EVENT**

What event reason/process type applies?

↓

**INITIATION**

Create the onboarding process.

↓

**ORCHESTRATION**

Programs, tasks, forms, documents, notifications.

↓

**CONVERSION**

Move from external/onboarding participant to employee.

---

# 4. Recruiting → Onboarding Architecture

For SAP SuccessFactors Recruiting integration, SAP's current guidance identifies several prerequisites, including:

- enabling the Recruiting/Onboarding integration,
- adding the Onboarding feature permission to the job requisition template,
- configuring a hirable candidate status,
- identifying eligible job requisitions,
- mapping Recruiting data to Onboarding,
- assigning the appropriate initiation permission,
- and configuring the event reason passed to Onboarding. citeturn0search6

Architecture:

**Job Requisition  
↓  
Candidate Pipeline  
↓  
Hirable Status  
↓  
Initiate Onboarding  
↓  
Recruit-to-Hire Mapping  
↓  
Event Reason  
↓  
Onboarding Process  
↓  
Onboardee**

---

# 5. Automatic vs Manual Initiation

SAP supports automatic initiation from Recruiting through configuration and a business rule that determines onboarding initiation eligibility. Organizations can also use a combination of automatic and manual initiation depending on their business requirements. citeturn0search0

## Automatic initiation

Best considered when:

- the process is highly standardized,
- eligibility is deterministic,
- data quality is reliable,
- high hiring volume exists,
- manual intervention adds little value.

## Manual initiation

Useful when:

- hiring requires review,
- confidential hiring is involved,
- exceptions are common,
- the business wants an explicit control point,
- a candidate comes from outside the normal recruiting flow.

### Architecture principle

> **Automate deterministic decisions; preserve human control for exceptional decisions.**

---

# 6. Eligibility Architecture

Never define initiation simply as:

> "Candidate is hired."

Define explicit eligibility.

Possible dimensions:

- candidate status,
- job requisition,
- country,
- legal entity,
- employee type,
- hiring type,
- start date,
- business unit,
- internal/external candidate,
- required data completeness,
- event reason,
- onboarding applicability.

Use:

**Candidate + Requisition + Population + Business Rule → Eligible / Not Eligible**

SAP's Recruiting integration currently supports applying Onboarding to all job requisitions, limiting it through criteria, or using a business rule to define eligibility for onboarding initiation. citeturn0search6

---

# 7. Event Reason Architecture

The event reason is a critical part of the initiation chain.

Think of it as:

**Business Event → Event Reason → Employee Lifecycle Behavior**

Examples may include:

- New Hire,
- Internal Hire,
- Transfer,
- Rehire,
- other approved lifecycle events.

The exact event reasons must be aligned with the customer's Employee Central configuration.

SAP's current Recruiting integration guidance states that an event reason must be passed when initiating the onboarding process. If it is not sent, the process can fail and create a Business Process error; SAP documents mapping or rule-based approaches for supplying it. citeturn0search6

### SME signal

> **Do not treat event reason as a technical field. Treat it as a business-lifecycle control.**

---

# 8. Language / Locale Architecture

Language should be treated as an initiation-time design decision.

SAP's current guidance states that the new hire's language is set based on selections made when onboarding is initiated. If no locale/language is selected, the system uses the default local value configured in Provisioning/Company Settings. citeturn0search1

Therefore test:

- candidate language selected,
- no language selected,
- unsupported/incorrect language,
- multilingual process,
- documents,
- email,
- onboarding experience.

### Principle

> **Locale is part of the employee experience architecture, not merely a UI preference.**

---

# 9. Manual Initiation Architecture

Manual onboarding follows a controlled pattern:

**Authorized User  
↓  
Add New Hire to Onboarding  
↓  
Enter required information  
↓  
Validate information  
↓  
Initiate Onboarding  
↓  
Onboardee process created**

Manual initiation should be governed.

Define:

- who can use it,
- when it is allowed,
- required fields,
- duplicate checks,
- approval requirements,
- audit expectations,
- support process.

---

# 10. 20 Deep Scenario-Based Interview Questions

## Q1. What happens when onboarding is initiated?

### Strong answer

I would describe initiation as a lifecycle event rather than a screen action.

The source system identifies an eligible candidate, passes the required data and event context, and creates the onboarding process. The process then assigns participants and tasks, collects required information, processes documents/forms, and eventually supports conversion into the employee lifecycle.

The exact downstream behavior depends on the configured process, population, rules, programs and integrations.

### SME signal

> **Initiation is the beginning of orchestration, not the completion of integration.**

---

## Q2. A recruiter cannot see "Initiate Onboarding." How do you troubleshoot?

Use this sequence:

1. Is the candidate in an eligible status?
2. Is the job requisition configured for Onboarding?
3. Is the Onboarding feature permission configured?
4. Does the recruiter have the required initiation permission?
5. Is the requisition eligible under the configured criteria/business rule?
6. Is the candidate internal or external as expected?
7. Is the Recruiting → Onboarding integration enabled?
8. Is the candidate data complete?
9. Is there an event reason available?

SAP's current integration guidance specifically identifies job-requisition feature permission, hirable status, eligibility, mapping and initiation permissions as relevant configuration areas. citeturn0search6

---

## Q3. The business wants onboarding to start automatically for every hire. Would you configure that immediately?

### Strong answer

I would first determine whether "every hire" is actually deterministic.

I would evaluate:

- exceptions,
- confidential hires,
- countries,
- employee populations,
- internal hires,
- rehires,
- data completeness,
- event reasons,
- integration reliability,
- duplicate prevention.

If the organization has a reliable eligibility model, automatic initiation can reduce manual work.

If not, I would use a governed manual control or a hybrid model.

### Principle

> **Automation should follow process certainty.**

---

## Q4. How would you design a hybrid automatic/manual initiation model?

Example:

### Automatic

- standard external hires,
- approved job requisitions,
- complete candidate data,
- standard countries.

### Manual

- executives,
- confidential hires,
- exceptional worker types,
- incomplete data,
- special legal entities.

Architecture:

**Eligibility Rule**

→ Standard population → **Automatic**

→ Exception population → **Manual Review**

→ Approved exception → **Manual Initiation**

This keeps the standard path fast without eliminating human control where it matters.

---

## Q5. The candidate is marked hired but onboarding does not initiate. What do you investigate?

### Diagnostic tree

**1. Candidate status**
- Is the status actually configured as hirable?

**2. Job requisition**
- Is Onboarding enabled for the requisition?

**3. Eligibility**
- Does the business rule/criteria include the requisition?

**4. Permission**
- Does the user have initiation permission?

**5. Mapping**
- Are required fields mapped?

**6. Event reason**
- Is a valid event reason being passed?

**7. Integration**
- Is the Recruiting → Onboarding integration functioning?

**8. Existing process**
- Is an onboarding process already present?

**9. Error**
- Is there a process or business-process error?

### SME signal

Always distinguish:

**Visibility problem → Eligibility problem → Data problem → Integration problem → Process problem**

---

## Q6. What is the purpose of a hirable candidate status?

The hirable status acts as a business-process checkpoint indicating that the candidate is ready for the next hiring/onboarding stage.

It helps prevent onboarding from being initiated for candidates who have not reached the required business state.

### Design principle

> **System actions should follow controlled business states.**

---

## Q7. How would you prevent duplicate onboarding?

I would design controls at multiple layers:

### Candidate layer
Confirm unique candidate identity.

### Hiring layer
Confirm the candidate is in the correct hiring state.

### Process layer
Check whether an onboarding process already exists.

### Integration layer
Handle retries and duplicate messages safely.

### Operational layer
Provide a reconciliation report/dashboard.

### Support layer
Define the duplicate-resolution procedure.

The goal is:

**Exactly-once business outcome**, even where technical retries may occur.

---

## Q8. How would you troubleshoot a missing event reason?

First determine whether the event reason is:

- mapped from Recruiting,
- derived by a business rule,
- supplied through another approved mechanism,
- valid for the employee population,
- consistent with the intended lifecycle event.

SAP's current guidance says that event reason transmission is mandatory for onboarding initiation and that failure to provide it can cause a Business Process error. citeturn0search6

Then:

1. inspect source value,
2. inspect mapping/rule,
3. validate event reason,
4. correct configuration,
5. retry/restart according to the supported recovery procedure,
6. regression-test the initiation path.

---

## Q9. How would you design onboarding initiation for multiple countries?

Do not simply create a separate initiation mechanism per country.

Use:

**Global Initiation Framework**

with:

- global eligibility,
- country attributes,
- legal entity,
- employee type,
- localized business rules,
- country-specific programs.

Example:

**Candidate → Eligible? → Country/Legal Entity → Event Reason → Program → Onboarding**

This creates a common architecture with controlled localization.

---

## Q10. A company has 5,000 hires during an acquisition. How would you initiate onboarding at scale?

I would evaluate mass initiation capabilities rather than designing a manual click-by-click process.

SAP currently documents a **Mass Initiate Onboarding REST API** for onboarding multiple new hires and rehires on new employment, including scenarios such as acquisitions, mergers, rehires and restructuring. citeturn0search1

Architecture:

**Acquisition HR Data  
↓  
Validation/Staging  
↓  
Eligibility  
↓  
Mass Initiation API  
↓  
Onboarding  
↓  
Reconciliation  
↓  
Exception Queue**

Critical controls:

- data validation,
- duplicate detection,
- partial-failure handling,
- reconciliation,
- monitoring,
- retry,
- audit evidence.

---

## Q11. How would you design initiation from an external ATS?

SAP's current learning content describes an external ATS integration using middleware and a two-step pattern involving creation of an external user record through SAP SuccessFactors APIs and mapping employee information to that record. citeturn0search9

Architecture:

**External ATS  
↓  
Middleware  
↓  
SAP SuccessFactors API  
↓  
External User / Onboarding  
↓  
Data Mapping  
↓  
Onboarding Process  
↓  
Employee Central**

I would explicitly design:

- identity,
- authentication,
- payload,
- mapping,
- transformation,
- event reason,
- error handling,
- retry,
- reconciliation.

---

## Q12. What is different about internal hire initiation?

An internal hire is already an employee, so the data and lifecycle context are different.

SAP currently documents internal hire initiation through:

- Employee Central transfer events,
- Recruiting internal candidates,
- external ATS internal candidates. citeturn0search8

The architecture must protect existing employee master data while orchestrating the new-role onboarding experience.

### Key question

> **What genuinely needs to be collected again, and what already exists in Employee Central?**

---

## Q13. How would you handle a confidential executive hire?

A confidential executive hire may not follow the standard Recruiting process.

I would consider controlled manual initiation or another approved confidential process.

Controls should include:

- restricted population,
- restricted RBP,
- minimum necessary data visibility,
- controlled notification,
- document security,
- audit trail,
- explicit ownership.

SAP's current learning content identifies confidential executive hiring as one use case for manual onboarding initiation. citeturn0search4

---

## Q14. The onboarding process starts but the new hire receives the wrong language. What do you check?

Check:

1. language/locale at initiation,
2. candidate/recruiting language source,
3. default language configuration,
4. document language,
5. notification language,
6. onboarding content availability,
7. user preferences where relevant.

SAP states that the new hire's language is automatically set based on selections made during initiation, with the default value used when no language is selected. citeturn0search1

### Lesson

Language defects should be investigated at **initiation**, not only at the UI layer.

---

## Q15. The same candidate has been initiated twice. How do you respond?

### Immediate response

1. Stop additional downstream processing if required.
2. Identify both onboarding processes.
3. Determine which is authoritative.
4. Assess whether tasks/documents were generated.
5. Determine whether any employee conversion occurred.
6. Follow the supported cancellation/recovery process.
7. Reconcile downstream systems.
8. Document the root cause.

### Root-cause categories

- user duplication,
- integration retry,
- data mismatch,
- status transition issue,
- process restart,
- manual initiation after automatic initiation.

### Prevention

Add operational reconciliation and clear initiation ownership.

---

## Q16. A mass initiation API returns partial success. What is your approach?

Treat partial success as a normal enterprise integration condition.

Create:

**Input Batch → Accepted → Successful → Failed → Retryable → Non-Retryable**

For failures:

1. capture identifier,
2. capture error,
3. classify cause,
4. correct data/configuration,
5. retry only eligible records,
6. reconcile final state.

Never blindly replay the complete batch.

---

## Q17. How would you test initiation end to end?

### Positive

- eligible candidate,
- correct event reason,
- correct mapping,
- onboarding created,
- correct participants/tasks.

### Negative

- ineligible candidate,
- missing event reason,
- missing mandatory field,
- invalid mapping,
- duplicate initiation,
- unauthorized recruiter.

### Integration

- Recruiting → Onboarding,
- external ATS → Onboarding,
- Onboarding → EC.

### Experience

- correct language,
- correct notifications,
- correct program,
- correct task assignment.

### Operational

- monitoring,
- retry,
- reconciliation,
- error handling.

---

## Q18. How would you design monitoring for onboarding initiation?

Create an initiation dashboard:

| KPI | Purpose |
|---|---|
| Eligible hires | Demand |
| Initiated | Process throughput |
| Not initiated | Exception detection |
| Initiation failures | Technical/process health |
| Duplicate attempts | Control effectiveness |
| Missing event reason | Data quality |
| Mapping failures | Integration quality |
| Average initiation time | Operational performance |
| Manual initiation rate | Automation effectiveness |
| Reconciliation exceptions | Data integrity |

### Target operating model

**Detect → Triage → Correct → Retry → Reconcile → Prevent**

---

## Q19. The business asks for one business rule that controls all initiation logic. Would you do it?

Not automatically.

A single centralized rule can be useful, but I would assess:

- complexity,
- readability,
- testing,
- ownership,
- country variation,
- change frequency,
- performance,
- troubleshooting.

Prefer modular logic where business domains can evolve independently.

### Principle

> **Centralize governance; modularize logic.**

---

## Q20. "Design the complete Onboarding initiation architecture in five minutes."

### Master answer

> "I would begin by identifying every legitimate initiation source: SAP SuccessFactors Recruiting, an external ATS, Admin Center for controlled manual initiation, and Employee Central or Recruiting for internal hires.
>
> Next I would define eligibility using candidate status, requisition, employee population, country, legal entity, hiring type and data completeness. I would then establish the required data mapping and make the event reason an explicit lifecycle control.
>
> For standard, deterministic populations I would evaluate automatic initiation; for exceptional or confidential populations I would retain controlled manual initiation. For high-volume scenarios I would evaluate mass initiation capabilities with validation, partial-failure handling and reconciliation.
>
> I would design duplicate prevention, monitoring, retry and exception handling as part of the initiation architecture rather than adding them after go-live.
>
> Finally, I would test the complete chain from source candidate through initiation, participant/task assignment, language, data mapping, integration, errors, recovery and eventual Employee Central conversion.
>
> My goal is not simply to make Initiate Onboarding appear. My goal is to make onboarding initiation reliable, secure, observable, scalable and aligned to the employee lifecycle." 

---

# 11. Initiation Decision Matrix

| Scenario | Preferred initiation pattern | Key control |
|---|---|---|
| Standard Recruiting hire | Recruiting initiation | Eligibility + mapping |
| High-volume standard hiring | Automatic initiation | Business rule |
| Confidential executive | Controlled manual | Restricted access |
| External ATS | Integrated initiation | Middleware + mapping |
| Acquisition | Mass initiation | Validation + reconciliation |
| Internal transfer | EC event / internal candidate | Event reason |
| Exceptional hire | Manual/hybrid | Approval/control |
| Rehire | Rehire-specific process | Employment history |
| Invalid/incomplete candidate | Do not initiate | Data quality gate |

---

# 12. Initiation Readiness Checklist

## Recruiting

- [ ] Onboarding integration enabled
- [ ] Job requisition feature permission configured
- [ ] Hirable candidate status configured
- [ ] Eligible requisitions identified
- [ ] Initiation permission assigned
- [ ] Candidate mapping completed
- [ ] Event reason configured

## Eligibility

- [ ] Global eligibility defined
- [ ] Country rules defined
- [ ] Employee types defined
- [ ] Internal/external distinction defined
- [ ] Exception population defined
- [ ] Duplicate controls defined

## Data

- [ ] Mandatory fields identified
- [ ] Source-of-truth defined
- [ ] Data mapping tested
- [ ] Transformation rules tested
- [ ] Error handling defined

## Experience

- [ ] Language/locale tested
- [ ] Welcome notification tested
- [ ] Participant assignment tested
- [ ] Program selection tested
- [ ] Task assignment tested

## Operations

- [ ] Monitoring defined
- [ ] Reconciliation defined
- [ ] Retry procedure defined
- [ ] Duplicate resolution defined
- [ ] Support ownership defined

---

# 13. Troubleshooting Framework

When initiation fails, use:

## Layer 1 — USER

Does the initiator have the required permission?

↓

## Layer 2 — STATUS

Is the candidate in the correct business state?

↓

## Layer 3 — ELIGIBILITY

Does the requisition/candidate satisfy the onboarding eligibility rule?

↓

## Layer 4 — DATA

Are mandatory fields and mappings complete?

↓

## Layer 5 — EVENT

Is the correct event reason available?

↓

## Layer 6 — INTEGRATION

Did the source-to-Onboarding transaction complete?

↓

## Layer 7 — PROCESS

Was the onboarding process created and assigned correctly?

↓

## Layer 8 — EXPERIENCE

Did the correct language, notification and task experience appear?

↓

## Layer 9 — CONVERSION

Can the downstream employee conversion complete?

> **USER → STATUS → ELIGIBILITY → DATA → EVENT → INTEGRATION → PROCESS → EXPERIENCE → CONVERSION**

---

# 14. Common Anti-Patterns

## Anti-pattern 1 — "Hired means onboarding automatically works"

Hiring status alone does not guarantee complete eligibility, mapping, event and integration configuration.

**Fix:** Treat initiation as a governed chain.

## Anti-pattern 2 — Manual initiation everywhere

Creates unnecessary operational effort and inconsistent timing.

**Fix:** Automate deterministic populations.

## Anti-pattern 3 — Automatic initiation everywhere

Can amplify bad data and exceptions.

**Fix:** Use controlled eligibility and exception paths.

## Anti-pattern 4 — No event-reason governance

Creates lifecycle ambiguity and failures.

**Fix:** Define event reason as an explicit architecture artifact.

## Anti-pattern 5 — No duplicate control

Creates multiple processes for one hire.

**Fix:** Idempotency mindset + reconciliation.

## Anti-pattern 6 — No initiation monitoring

Problems are discovered only when HR reports them.

**Fix:** Operational dashboard and exception queue.

## Anti-pattern 7 — Testing only the button

The button working does not prove the process works.

**Fix:** Test source → event → data → process → task → conversion.

---

# 15. Architecture Decision Records

## ADR-001 — Automatic Initiation

**Decision:** Use automatic initiation only for populations with deterministic and validated eligibility.

**Reason:** Reduce manual effort without losing control.

---

## ADR-002 — Manual Exception Path

**Decision:** Maintain a controlled manual initiation path for confidential and exceptional hiring scenarios.

**Reason:** Preserve human control where standard automation does not apply.

---

## ADR-003 — Event Reason

**Decision:** Treat event reason as a mandatory lifecycle control and validate it before initiation.

**Reason:** Prevent downstream lifecycle ambiguity and process errors.

---

## ADR-004 — Mass Initiation

**Decision:** Use mass initiation capabilities for approved high-volume scenarios with pre-validation and reconciliation.

**Reason:** Improve scale without sacrificing data integrity.

---

## ADR-005 — Monitoring

**Decision:** Monitor initiation outcomes independently from general onboarding task monitoring.

**Reason:** Detect failures at the earliest possible point.

---

# 16. Quality Gates

## Gate 1 — Initiation Design Ready

- sources identified,
- populations identified,
- eligibility defined,
- event reasons mapped.

## Gate 2 — Configuration Ready

- permissions configured,
- requisitions configured,
- mapping configured,
- rules tested.

## Gate 3 — Integration Ready

- source-to-ONB interface tested,
- error handling tested,
- retry strategy tested.

## Gate 4 — UAT Ready

- positive scenarios passed,
- negative scenarios passed,
- duplicate scenario tested,
- language tested.

## Gate 5 — Production Ready

- monitoring active,
- reconciliation available,
- support trained,
- exception procedures approved.

---

# 17. Rapid-Fire Interview Answers

### Where can Onboarding be initiated?
Recruiting, external ATS, controlled manual initiation, and internal-hire flows.

### What controls eligibility?
Candidate/requisition attributes, business rules and configured criteria.

### What is the role of hirable status?
It represents the business state in which the candidate is eligible to move into the hiring/onboarding stage.

### What is the most important lifecycle field?
The event reason is a critical control for the intended employee event.

### Automatic or manual?
Use automation for deterministic standard flows and manual control for exceptions.

### How do you handle 5,000 hires?
Evaluate mass initiation with validation, partial-failure handling and reconciliation.

### How do you prevent duplicates?
Identity controls + process-state checks + reconciliation + safe retry design.

### What do you monitor?
Eligibility, initiation success/failure, event reason, mapping, duplicates and reconciliation.

### What is your troubleshooting order?
User → Status → Eligibility → Data → Event → Integration → Process → Experience → Conversion.

### What is your architecture principle?
**Initiation is an observable business event, not merely a UI action.**

---

# 18. Final Master Interview Answer

> **"I design Onboarding initiation as a controlled employee-lifecycle event. I first identify every valid source, including Recruiting, external ATS, controlled manual initiation and internal-hire events.
>
> Then I define eligibility using candidate status, requisition, country, legal entity, employee type, hiring type and data completeness. I establish the Recruiting-to-Onboarding mapping and treat the event reason as an explicit lifecycle control.
>
> For deterministic standard populations, I use automatic initiation where appropriate. For confidential and exceptional populations, I retain a controlled manual path. For high-volume scenarios, I evaluate mass initiation with validation, partial-failure handling and reconciliation.
>
> I design duplicate prevention, monitoring, retry and exception handling from the beginning. Testing covers positive, negative, security, mapping, language, duplicate, integration and conversion scenarios.
>
> My objective is to make onboarding initiation reliable, secure, scalable and observable from the moment a candidate becomes eligible through the eventual employee lifecycle transition."**

---

# 19. Master Initiation Loop

Use this mental model in interviews:

**1. IDENTIFY**  
Where does the hire originate?

↓

**2. QUALIFY**  
Is the hire eligible?

↓

**3. AUTHORIZE**  
Who can initiate?

↓

**4. MAP**  
What data must move?

↓

**5. CLASSIFY**  
What employee event is this?

↓

**6. INITIATE**  
Create the onboarding process.

↓

**7. ORCHESTRATE**  
Assign programs, participants and tasks.

↓

**8. OBSERVE**  
Monitor success, errors and exceptions.

↓

**9. RECOVER**  
Retry or resolve safely.

↓

**10. CONVERT**  
Complete the employee lifecycle transition.

> **IDENTIFY → QUALIFY → AUTHORIZE → MAP → CLASSIFY → INITIATE → ORCHESTRATE → OBSERVE → RECOVER → CONVERT**

---

# 20. SuccessLabs Mastery Lens

### KNOW
Understand every Onboarding initiation source and lifecycle event.

### DESIGN
Architect eligibility, event, data and initiation controls.

### DELIVER
Configure and operate initiation flows.

### SOLVE
Diagnose failed, duplicate and incomplete initiations.

### INFLUENCE
Design the automation-vs-control strategy with HR and business stakeholders.

### TRANSFORM
Turn hiring decisions into reliable, scalable employee experiences.

---

# 21. 22-Pahacha Coverage

This guide develops:

- Domain Foundation
- Product & Technology Knowledge
- Business Process & Operating Context
- Data & Information Model
- Requirement Analysis
- Solution Design Awareness
- Configuration / Development Awareness
- Architecture & Integration Awareness
- Implementation Awareness
- Migration & Data Readiness Awareness
- Testing & Quality Awareness
- Release, Adoption & Support Awareness
- Troubleshooting Mindset
- Incident & Defect Awareness
- Complex Scenario Thinking
- Optimization & Continuous Improvement
- Stakeholder Management
- Communication & Collaboration
- Advisory & Trusted SME
- Automation, AI & Intelligent Products
- Transformation & Business Value
- Strategic Mastery & Future Vision

---

## Certification / Interview Mastery Checklist

Before considering this topic mastered, you should be able to explain without notes:

- [ ] All major onboarding initiation sources
- [ ] Recruiting → Onboarding initiation
- [ ] External ATS initiation
- [ ] Manual Add New Hire initiation
- [ ] Internal hire initiation
- [ ] Automatic initiation
- [ ] Manual vs automatic decision criteria
- [ ] Candidate eligibility
- [ ] Hirable status
- [ ] Event reason
- [ ] Recruit-to-Hire mapping
- [ ] Language/locale handling
- [ ] Duplicate prevention
- [ ] Mass initiation
- [ ] Partial-failure handling
- [ ] Initiation monitoring
- [ ] Retry/recovery approach
- [ ] End-to-end initiation testing
- [ ] Production readiness controls
- [ ] How initiation connects to Employee Central conversion

---

## Closing Principle

> **The best onboarding initiation architecture makes the correct hiring decision flow into the correct onboarding process with the correct data, event, participants and controls — reliably, securely and at scale.**

That is the difference between **triggering a workflow** and **architecting the recruit-to-employee transition**.

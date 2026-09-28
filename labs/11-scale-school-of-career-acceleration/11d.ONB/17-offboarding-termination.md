# 17. Offboarding & Termination

## SAP SuccessFactors Onboarding — Scenario-Based Interview & Architecture Guide

> **Purpose:** Master Offboarding and Termination as an end-to-end employee-lifecycle architecture. The architect must connect Employee Central termination events, Offboarding initiation rules, termination data, employee/manager tasks, exit interviews, compliance, asset recovery, access deprovisioning, payroll/benefits, notifications, effective dating, reassignment/restart behavior, security, auditability, and process closure.

**SAP Academy alignment:** SAP SuccessFactors Onboarding Academy Unit 17 is **Offboarding and Terminating Employees** and contains five lessons. SAP's current implementation guidance requires Offboarding to be enabled, appropriate RBP assigned, and a business rule configured to determine whether Offboarding should start based on termination reason. citeturn0search0turn0search5turn0search8

---

# 1. What is Offboarding?

Offboarding is the structured process used to manage an employee's exit from the organization.

It should coordinate:

- Employee Central termination
- Termination reason
- Effective termination date
- Employee tasks
- Manager tasks
- HR / corporate representative tasks
- Exit interview
- Knowledge transfer
- Asset return
- Access deprovisioning
- Payroll and benefits notifications
- Compliance
- Documents and acknowledgements
- Reporting and audit
- Process closure

SAP's implementation documentation describes Offboarding as a process that can be initiated when an employee is terminated in Employee Central, subject to eligibility/configuration. The Offboarding implementation guide requires the feature to be enabled and a rule to determine whether the process should start. citeturn0search5turn0search8

**Architectural principle:**

> **Termination changes employment status; Offboarding orchestrates everything that must happen because of that change.**

---

# 2. Architecture View

```text
                 EMPLOYEE CENTRAL
                 Termination Event
                        |
                        v
              Termination Reason
                        |
                        v
             Offboarding Decision Rule
                        |
              +---------+---------+
              |                   |
            Eligible            Not Eligible
              |                   |
              v                   v
         OFFBOARDING          EC Termination
           PROCESS              Only
              |
      +-------+--------+----------------+
      |       |        |                |
      v       v        v                v
   Employee Manager   HR/CR          Compliance
   Tasks     Tasks    Tasks             |
      |       |        |                |
      +-------+--------+----------------+
                      |
          +-----------+-----------+
          |           |           |
       Assets      Access      Exit Interview
          |        Removal
          +-----------+-----------+
                      |
                      v
             Payroll / Benefits /
             Identity / IT / Other
                      |
                      v
                Process Closure
                      |
                      v
             Reporting & Audit
```

---

# 3. Core Offboarding Concepts

## 3.1 Termination as the trigger

Employee Central is generally the employment system where the termination event is recorded. Offboarding then evaluates whether the termination qualifies for an Offboarding process.

SAP documents a decision rule under **Initiate Offboarding Configuration**. The rule can evaluate termination reason or other Job Information / Employment Details fields. If the rule evaluates to true, Offboarding is initiated. citeturn0search8

## 3.2 Termination reason

Termination reason is not just reporting data. It can drive process eligibility and therefore determine which offboarding journey is appropriate.

## 3.3 Employee Central source of truth

Termination date, employee status, manager, organizational context, and other governed employee data should have explicit source-of-truth ownership.

## 3.4 Offboarding workflow

Offboarding coordinates actions that must occur before, on, or after the employee's final working date.

## 3.5 Process closure

A mature architecture defines when the process is complete and how incomplete/offline tasks are handled.

---

# 4. 20 Scenario-Based Interview Questions — STAR Answers

## Q1. An employee resigns in Employee Central. How would you initiate Offboarding?

**Situation:**  
An employee submits a resignation and HR records the termination in Employee Central.

**Task:**  
Trigger the appropriate Offboarding process without requiring HR to manually create another workflow.

**Action:**  
I would verify that Offboarding is enabled, the required RBP is configured, and an **Initiate Offboarding Configuration** business rule evaluates the employee's termination context. SAP documents that the rule can be based on one or multiple termination reasons or can be configured to always trigger Offboarding. citeturn0search8

**Result:**  
The eligible employee automatically enters the configured Offboarding journey.

**Architect signal:** Treat termination as the event and Offboarding as the orchestration layer.

---

## Q2. The business wants Offboarding only for voluntary resignations. How would you configure it?

**Situation:**  
The organization does not want the same process for every termination type.

**Task:**  
Route employees according to termination reason.

**Action:**  
I would create an Initiate Offboarding Configuration decision rule that evaluates the relevant termination reason values and returns true only for approved voluntary-resignation reasons. I would test every reason code, including null, involuntary, retirement, death, transfer, and other locally configured values.

SAP explicitly supports configuring Offboarding initiation based on single or multiple termination reasons. citeturn0search8

**Result:**  
Only the intended termination population receives the Offboarding process.

**Architect signal:** Business semantics should drive process routing.

---

## Q3. An employee is terminated involuntarily. How would the Offboarding experience differ?

**Situation:**  
A termination is initiated by the employer rather than the employee.

**Task:**  
Design a controlled process appropriate to the termination context.

**Action:**  
I would classify the termination reason and route it to the appropriate process variant or task set. I would minimize employee self-service where policy requires restricted disclosure, while ensuring manager, HR, security, payroll, asset, and compliance tasks execute according to policy. I would apply strict target populations and RBP.

**Result:**  
The organization executes the required controls without exposing inappropriate information to the departing employee.

**Architect signal:** Termination type is both a **business and security attribute**.

---

## Q4. An employee's termination date changes after Offboarding has started. What do you do?

**Situation:**  
The final working date is moved by two weeks.

**Task:**  
Keep tasks, notifications, and downstream actions aligned with the new date.

**Action:**  
I would identify all date-dependent steps and verify whether the Offboarding process supports automatic restart/reassignment or requires controlled correction. SAP's current implementation documentation states that relevant Employee Central changes can cause Offboarding steps to be reassigned or restarted based on where the employee is in the process. citeturn0search25 I would test task due dates, notifications, access deprovisioning, payroll, and asset-return dates.

**Result:**  
The Offboarding journey reflects the new termination timeline without creating duplicate processes.

**Architect signal:** Effective dating is a process-control dimension.

---

## Q5. The hiring manager changes while Offboarding is in progress. What should happen?

**Situation:**  
The employee's manager changes after some Offboarding tasks were assigned.

**Task:**  
Ensure responsibility transfers to the correct manager.

**Action:**  
I would validate the Employee Central manager change and the Offboarding synchronization behavior. SAP documents that when relevant manager data changes are published from Employee Central, Offboarding can update the activity and reassign or restart a step depending on process state; the employee and original/new managers can receive alerts. citeturn0search25

**Result:**  
The correct manager owns the relevant tasks and stakeholders are informed.

**Architect signal:** Participant changes must be treated as lifecycle events.

---

## Q6. How would you design an asset-return process?

**Situation:**  
Departing employees must return laptops, badges, phones, tools, or other company property.

**Task:**  
Make asset recovery traceable and time-bound.

**Action:**  
I would define asset categories, owners, due dates, condition/status, return method, exceptions, and evidence. I would assign tasks to the employee, manager, facilities, or IT as appropriate and integrate with the asset-management platform where required. I would avoid storing sensitive asset information in free-text fields.

**Result:**  
Every critical asset has an accountable owner and auditable return status.

**Architect signal:** Asset return is a **control process**, not merely a checklist item.

---

## Q7. How would you integrate Offboarding with identity and access management?

**Situation:**  
The employee's final day requires corporate access to be removed.

**Task:**  
Prevent orphaned access while avoiding premature deactivation.

**Action:**  
I would establish the termination date and deprovisioning trigger, integrate Employee Central/Offboarding with identity-management systems, and define exceptions for privileged or legally required access. I would test the sequence around the final working date and ensure emergency termination paths are separately governed.

**Result:**  
Access is removed according to policy and timing while exceptions remain controlled.

**Architect signal:** Identity deprovisioning must be **date-aware and risk-aware**.

---

## Q8. The employee should complete an exit interview. How would you design it?

**Situation:**  
HR wants structured exit feedback.

**Task:**  
Collect useful information while protecting confidentiality.

**Action:**  
I would define who can see the exit interview, what data is collected, whether participation is mandatory or optional, retention rules, and reporting aggregation. I would use role-based permissions and avoid exposing individual responses unnecessarily.

**Result:**  
HR gets actionable workforce insights while employee confidentiality is protected.

**Architect signal:** Exit data is both **experience data and sensitive HR data**.

---

## Q9. A terminated employee should not receive normal Home Page content after termination. What do you check?

**Situation:**  
The employee still sees normal employee experiences after termination.

**Task:**  
Ensure lifecycle-aware access and experience.

**Action:**  
I would check employee status, termination effective date, RBP, target populations, identity status, and Home Page content targeting. I would distinguish between required Offboarding access and ordinary employee access.

**Result:**  
The departing employee sees only the experience required for the transition.

**Architect signal:** Access should follow **lifecycle state**.

---

## Q10. Offboarding does not start after Employee Central termination. How do you troubleshoot?

**Situation:**  
HR terminates an employee, but no Offboarding process appears.

**Task:**  
Identify the break in the initiation chain.

**Action:**  
I would check:
1. Offboarding enabled.
2. Required RBP.
3. Termination event.
4. Termination reason.
5. Initiate Offboarding Configuration rule.
6. Rule effective date.
7. Rule conditions.
8. Employee eligibility.
9. Relevant Job Information/Employment Details values.
10. Process creation/logs.

SAP states that the Offboarding initiation rule determines whether the process is triggered when an employee is terminated. citeturn0search8

**Result:**  
The issue is isolated to enablement, permissions, termination data, rule logic, or process creation.

**Architect signal:** Trace **event → decision rule → process instance**.

---

## Q11. Offboarding starts for an employee who should not be eligible. What do you do?

**Situation:**  
A termination unexpectedly creates an Offboarding process.

**Task:**  
Prevent incorrect process initiation.

**Action:**  
I would inspect the decision rule, termination reason, effective date, and any other fields used by the rule. I would check whether a default/always-true condition or broad criteria accidentally includes the employee. I would correct the rule and test all termination populations.

**Result:**  
Only eligible employees enter Offboarding.

**Architect signal:** Negative testing is essential for decision rules.

---

## Q12. How would you handle knowledge transfer during Offboarding?

**Situation:**  
A senior employee is leaving and critical knowledge must be transferred.

**Task:**  
Create accountable, measurable knowledge-transfer activities.

**Action:**  
I would define deliverables such as system documentation, open-project inventory, stakeholder handover, runbooks, credentials/process ownership transfer through approved channels, and successor walkthroughs. I would assign tasks to employee, manager, or designated successor and track completion before the final date.

**Result:**  
Critical organizational knowledge is transferred instead of leaving as undocumented tribal knowledge.

**Architect signal:** Offboarding can protect **organizational continuity**, not just close employment.

---

## Q13. A termination is immediate. How would you design the Offboarding journey?

**Situation:**  
An employee is terminated immediately and should not retain normal access.

**Task:**  
Execute security-sensitive actions quickly while preserving required HR/legal processing.

**Action:**  
I would create a distinct emergency/involuntary termination path based on approved business policy. Identity deprovisioning, manager/HR notification, asset recovery, payroll, and legal/compliance actions would be prioritized according to policy. I would minimize employee self-service where inappropriate.

**Result:**  
Security controls execute rapidly while the termination remains auditable and compliant.

**Architect signal:** Emergency termination requires **priority orchestration**, not simply a shorter checklist.

---

## Q14. Payroll needs termination information immediately. How would you architect the integration?

**Situation:**  
Payroll must calculate final salary, leave, deductions, or benefits.

**Task:**  
Deliver authoritative termination data reliably.

**Action:**  
I would define Employee Central as the authoritative source for termination date/reason and integrate the required fields to payroll. I would define effective-date behavior, retry/reconciliation, error handling, and ownership. I would never allow Offboarding free-text data to become the payroll master.

**Result:**  
Payroll receives reliable termination data and exceptions are visible.

**Architect signal:** Integration must preserve **source-of-truth ownership**.

---

## Q15. A manager is reassigned during Offboarding and the old manager still receives tasks. What do you investigate?

**Situation:**  
A manager change occurred, but task ownership did not fully update.

**Task:**  
Identify whether the issue is data synchronization, task state, or participant resolution.

**Action:**  
I would compare Employee Central manager records before/after the effective date, Offboarding process state, task status, participant resolution, and any relevant synchronization/reassignment logic. SAP documents that relevant manager changes can result in Offboarding step reassignment or restart depending on process state. citeturn0search25

**Result:**  
The defect is isolated to synchronization or task-state behavior rather than blindly reassigning tasks.

**Architect signal:** Participant resolution must be analyzed together with process state.

---

## Q16. How would you design Offboarding for different countries?

**Situation:**  
Different countries have different notice, payroll, benefits, document, retention, and compliance requirements.

**Task:**  
Create one global architecture with controlled local variations.

**Action:**  
I would establish a global Offboarding core and classify local differences into:
- legal/compliance;
- payroll;
- benefits;
- asset management;
- documents;
- notifications;
- process sequence.

I would use configuration, task sets, process variants, and localized rules only where required. I would maintain a country-specific control matrix.

**Result:**  
Global governance is preserved while local obligations are satisfied.

**Architect signal:** Global process + local policy architecture.

---

## Q17. How would you test Offboarding end to end?

**Situation:**  
A global enterprise is preparing Offboarding for production.

**Task:**  
Prove termination lifecycle integrity.

**Action:**  
I would test:
- voluntary resignation;
- involuntary termination;
- retirement;
- different termination reasons;
- immediate termination;
- future-dated termination;
- termination-date change;
- manager change;
- employee tasks;
- manager tasks;
- HR tasks;
- exit interview;
- asset return;
- access deprovisioning;
- payroll;
- benefits;
- notifications;
- security;
- country variations;
- process closure;
- restart/reassignment;
- negative rule scenarios.

**Result:**  
The organization has evidence that termination is handled as an integrated enterprise lifecycle.

**Architect signal:** Test **employment event + process + downstream controls**.

---

## Q18. How would you monitor Offboarding operationally?

**Situation:**  
HR wants visibility into incomplete exit activities.

**Task:**  
Create actionable operational monitoring.

**Action:**  
I would monitor:
- Offboarding volume by termination reason;
- processes nearing final date;
- overdue employee tasks;
- overdue manager tasks;
- asset-return exceptions;
- access-deprovisioning failures;
- payroll integration failures;
- exit-interview completion;
- termination-date changes;
- reassignment/restart frequency;
- processes stuck in error;
- closure latency.

I would create dashboards and exception queues aligned with accountable owners.

**Result:**  
HR and IT can intervene before incomplete Offboarding creates security or operational risk.

**Architect signal:** Monitor the **risk-bearing steps**, not just process counts.

---

## Q19. An employee is terminated but the Offboarding process remains open for months. How would you solve it?

**Situation:**  
Historical Offboarding processes accumulate and create operational noise.

**Task:**  
Close eligible stale processes without destroying useful audit information.

**Action:**  
I would define closure criteria based on process type, completion state, final date, outstanding tasks, and exceptions. SAP provides a business-rule scenario to close and archive onboarding/offboarding processes and tasks based on days past the start date, and the rule can also set a cancellation event reason. citeturn0search14 I would establish an exception queue before automated closure.

**Result:**  
Stale processes are controlled while legitimate exceptions remain visible.

**Architect signal:** Archive lifecycle data; do not erase operational history.

---

## Q20. You are the Lead Onboarding Architect. Explain your complete Offboarding & Termination strategy.

**Situation:**  
A global enterprise needs a secure, compliant, employee-centered termination process across Employee Central, Offboarding, identity, payroll, IT, facilities, benefits, and reporting.

**Task:**  
Design a resilient termination architecture that closes employment correctly and protects the enterprise.

**Action:**
1. Define termination lifecycle states and termination-reason taxonomy.
2. Establish Employee Central as the authoritative employment event source.
3. Enable Offboarding and assign least-privilege RBP.
4. Configure an Initiate Offboarding decision rule based on approved termination reasons and/or other employment attributes. citeturn0search8
5. Design employee, manager, HR, IT, facilities, payroll, and compliance task ownership.
6. Model effective termination date explicitly.
7. Create differentiated paths for voluntary, involuntary, retirement, immediate, and country-specific scenarios where justified.
8. Integrate identity deprovisioning and asset recovery.
9. Integrate payroll and benefits using authoritative Employee Central data.
10. Protect sensitive exit-interview and termination information.
11. Support controlled reassignment/restart when relevant Employee Central data changes. citeturn0search25
12. Define process closure and stale-process archiving.
13. Monitor high-risk exceptions and overdue tasks.
14. Test positive and negative termination scenarios.
15. Govern local variations and release changes.

**Result:**  
The organization gets an Offboarding architecture that securely closes employment, protects data and access, transfers knowledge, reconciles downstream systems, and leaves an auditable lifecycle record.

**Architect signal:**

> **Terminate the employment. Protect the enterprise. Transfer the knowledge. Reconcile the ecosystem. Preserve the history.**

---

# 5. Offboarding Design Matrix

| Requirement | Preferred architecture |
|---|---|
| Employee resignation | EC termination + Offboarding rule |
| Involuntary termination | Controlled termination-specific journey |
| Retirement | Dedicated termination reason/process treatment |
| Immediate termination | Security-prioritized path |
| Future-dated termination | Effective-date orchestration |
| Manager change | Reassignment/restart based on process state |
| Asset recovery | Asset-return tasks/integration |
| Access removal | IAM/deprovisioning integration |
| Exit interview | Controlled sensitive-data task |
| Knowledge transfer | Employee/manager handover tasks |
| Payroll | EC authoritative termination data |
| Benefits | Downstream benefits integration |
| Country variation | Local rules/process configuration |
| Stale process | Closure/archive rule |
| Reporting | Termination + process + exception analytics |

---

# 6. Offboarding Troubleshooting Master Loop

**IDENTIFY EMPLOYEE → VALIDATE TERMINATION EVENT → CHECK TERMINATION REASON → CHECK INITIATION RULE → CHECK ELIGIBILITY → INSPECT PROCESS STATE → CHECK PARTICIPANTS → CHECK EFFECTIVE DATE → CHECK DOWNSTREAM INTEGRATIONS → RECONCILE → CLOSE/AUDIT**

### First questions in an incident

1. What termination event occurred?
2. What termination reason was selected?
3. Should Offboarding have started?
4. Which rule made the decision?
5. When is the effective termination date?
6. Which process steps are open?
7. Who owns each open task?
8. Has manager/organizational data changed?
9. Has access been deprovisioned?
10. Have payroll, benefits, facilities, and IT reconciled the termination?

---

# 7. Architecture Decision Records

### ADR-01 — Employee Central as employment source of truth
Termination master data originates in the governed employment system.

### ADR-02 — Decision-rule-driven initiation
Offboarding eligibility is explicit and testable.

### ADR-03 — Termination-reason taxonomy
Reason semantics drive appropriate process routing.

### ADR-04 — Lifecycle-aware security
Access follows employee termination state and policy.

### ADR-05 — Date-aware orchestration
Termination dates control time-sensitive tasks and integrations.

### ADR-06 — Localized compliance
Country-specific obligations are isolated without fragmenting the global architecture.

### ADR-07 — Controlled closure
Stale processes are archived through governed automation.

### ADR-08 — Audit preservation
Termination history and Offboarding process evidence remain traceable.

---

# 8. Quality Gates

- [ ] Offboarding enabled.
- [ ] Required RBP configured.
- [ ] Termination reason taxonomy approved.
- [ ] Initiate Offboarding rule configured.
- [ ] Rule effective dating tested.
- [ ] Voluntary termination tested.
- [ ] Involuntary termination tested.
- [ ] Retirement tested where applicable.
- [ ] Immediate termination tested.
- [ ] Future-dated termination tested.
- [ ] Termination-date change tested.
- [ ] Manager-change scenario tested.
- [ ] Employee tasks tested.
- [ ] Manager tasks tested.
- [ ] HR/CR tasks tested.
- [ ] Asset return tested.
- [ ] Identity deprovisioning tested.
- [ ] Payroll/benefits integration tested.
- [ ] Exit interview security tested.
- [ ] Process closure and archival tested.

---

# 9. Anti-Patterns

### ❌ Treating Offboarding as an email checklist
Misses system-driven controls and auditability.

### ❌ Triggering Offboarding for every termination
Creates unnecessary process volume.

### ❌ Ignoring termination reason
Loses business semantics and routing control.

### ❌ Allowing free-text termination data to drive payroll
Breaks source-of-truth architecture.

### ❌ Deprovisioning access without effective-date governance
Can create premature or delayed access removal.

### ❌ Giving departing employees excessive visibility
Creates privacy and security risk.

### ❌ Ignoring manager changes
Leaves tasks with incorrect owners.

### ❌ Building one identical process for every country
Fails local legal/operational requirements.

### ❌ Deleting historical Offboarding processes
Destroys auditability.

### ❌ Measuring only completion percentage
Misses security, payroll, asset, and compliance risk.

---

# 10. Rapid-Fire Interview Answers

**What initiates Offboarding?**  
Typically an Employee Central termination event evaluated by an Offboarding initiation business rule. citeturn0search8

**Can Offboarding be triggered for selected termination reasons?**  
Yes. SAP documents decision rules based on one or multiple termination reasons. citeturn0search8

**What must be enabled first?**  
Offboarding must be enabled and appropriate RBP assigned. citeturn0search5

**Why is termination reason important?**  
It can determine whether and how Offboarding is initiated.

**What happens if the manager changes during Offboarding?**  
Relevant Offboarding steps can be reassigned or restarted based on process state, according to current SAP documentation. citeturn0search25

**Should payroll get termination data from Offboarding free text?**  
No. Use authoritative Employee Central data.

**What is the biggest security risk?**  
Incorrect or delayed access deprovisioning.

**What is the biggest process risk?**  
Incomplete high-risk tasks remaining open after the termination date.

**How do you control stale processes?**  
Use governed closure/archive rules with exception handling. citeturn0search14

**What should you monitor?**  
Overdue tasks, access, assets, payroll, benefits, manager reassignment, errors, and closure latency.

**What is the core architecture principle?**  
Termination changes employment; Offboarding orchestrates the consequences.

---

# 11. Final Master Interview Answer

> "I design Offboarding as an enterprise termination-orchestration capability, not as a checklist. Employee Central remains the authoritative source for the employment termination event, termination date, reason, manager, and other governed employee data. Offboarding evaluates eligibility through an Initiate Offboarding decision rule and then orchestrates the required employee, manager, HR, IT, facilities, payroll, benefits, compliance, and knowledge-transfer activities.
>
> I start by defining a termination-reason taxonomy because voluntary resignation, involuntary termination, retirement, immediate termination, and country-specific scenarios can have different operational and security requirements. I then design effective-dated task and integration behavior around the final working date.
>
> From a security perspective, I integrate identity deprovisioning and apply least privilege. From a data perspective, I protect sensitive exit information and keep Employee Central as the source of truth. From an integration perspective, I reconcile payroll, benefits, assets, identity, facilities, and downstream systems.
>
> I also design for change: if relevant Employee Central data such as manager changes during Offboarding, the process can require reassignment or restart depending on its state. I establish monitoring for overdue tasks, access failures, asset exceptions, payroll failures, and stale processes. Finally, I use governed closure and archival rules to preserve auditability.
>
> My guiding principle is: **terminate the employment, protect the enterprise, transfer the knowledge, reconcile the ecosystem, and preserve the history.**"

---

# 12. SuccessLabs Mastery Lens

## KNOW
Understand Employee Central termination, Offboarding initiation, termination reasons, tasks, security, integrations, and closure.

## DESIGN
Design termination-state, task, participant, security, integration, and local-compliance architecture.

## DELIVER
Configure Offboarding, business rules, tasks, permissions, integrations, and closure.

## SOLVE
Diagnose missing initiation, incorrect routing, manager reassignment, access, payroll, asset, and closure issues.

## INFLUENCE
Align HR, managers, IT, security, payroll, facilities, compliance, and employees around a controlled exit.

## TRANSFORM
Turn termination into a secure, measurable, humane, and auditable enterprise lifecycle.

---

# 13. 22-Pahacha Coverage

| Pahacha | Offboarding & Termination mastery |
|---|---|
| 01 Domain Foundation | Employee exit lifecycle |
| 02 Product & Technology Knowledge | EC + Offboarding |
| 03 Business Process & Operating Context | Termination operating model |
| 04 Data & Information Model | Termination, manager, dates, reasons |
| 05 Requirement Analysis | Exit requirements |
| 06 Solution Design Awareness | Offboarding architecture |
| 07 Configuration / Development Awareness | Rules, tasks, permissions |
| 08 Architecture & Integration Awareness | EC/IAM/payroll/benefits/IT |
| 09 Implementation Awareness | End-to-end configuration |
| 10 Migration & Data Readiness | Historical termination/process data |
| 11 Testing & Quality Awareness | Termination scenario matrix |
| 12 Release, Adoption & Support | Operational exit support |
| 13 Troubleshooting Mindset | Event-to-process diagnosis |
| 14 Incident & Defect Awareness | Security/data/process failures |
| 15 Complex Scenario Thinking | Immediate vs future termination |
| 16 Optimization & Continuous Improvement | Closure and risk reduction |
| 17 Stakeholder Management | HR/manager/IT/payroll |
| 18 Communication & Collaboration | Exit experience |
| 19 Advisory & Trusted SME | Termination architecture |
| 20 Automation, AI & Intelligent Products | Automated deprovisioning/exception detection |
| 21 Transformation & Business Value | Enterprise risk reduction |
| 22 Strategic Mastery & Future Vision | Lifecycle governance |

---

# 14. SuccessLabs Architecture Streams

1. **Enterprise Architect** — termination lifecycle governance
2. **Business Architect** — exit operating model
3. **Integration Architect** — EC/IAM/payroll/benefits/IT
4. **Domain Architect** — employee lifecycle
5. **Cloud & Infrastructure Architect** — service/access continuity
6. **Application & Process Architect** — Offboarding orchestration
7. **AI Architect** — anomaly detection and risk prediction
8. **Security Architect** — access deprovisioning and sensitive data
9. **Industry Architect** — local employment requirements
10. **Data Architect** — termination and audit data
11. **UI/UX Architect** — employee/manager exit experience
12. **Technology Architect** — rules, events, APIs, integrations

---

# 15. Master Loop

**TERMINATE → CLASSIFY → DECIDE → ORCHESTRATE → ASSIGN → DEPROVISION → RECONCILE → MONITOR → CLOSE → AUDIT**

This is the core mental model for senior SAP SuccessFactors Offboarding & Termination interviews.

---

## SAP Source Alignment

- SAP SuccessFactors Onboarding Academy — **Unit 17: Offboarding and Terminating Employees**. citeturn0search0
- SAP Help — **Implementing Offboarding**, including enablement, RBP, and initiation-rule setup. citeturn0search5
- SAP Help — **Setting a Business Rule to Configure Offboarding Initiation**, including termination-reason-based decision logic. citeturn0search8
- SAP Help — **Offboarding 1.0 and Employee Central**, describing EC termination-driven Offboarding creation for eligible users. citeturn0search6
- SAP Implementation Guide 1H 2605 — Offboarding step updates/reassignment/restart when relevant Employee Central manager data changes. citeturn0search25
- SAP Help — **Setting up a Business Rule for Closing the Onboarding/Offboarding Processes**, including controlled closure/archive. citeturn0search14
- SAP Help — **Enhanced Offboarding Dashboard**, listed as a 1H 2026 enhancement. citeturn0search10

**Interview mantra:**

> **Terminate the employment. Protect the enterprise. Transfer the knowledge. Reconcile the ecosystem. Preserve the history.**

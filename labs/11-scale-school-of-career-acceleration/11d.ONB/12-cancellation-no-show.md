# 12. Cancellation & No-Show

## SAP SuccessFactors Onboarding — Scenario-Based Interview & Architecture Guide

> **Purpose:** Master cancellation and no-show as an end-to-end lifecycle, not merely a button or event reason. The architect must understand initiation, Employee Central event configuration, timing boundaries, user deactivation, process state, notifications, auditability, downstream impacts, and reconciliation.

**SAP alignment:** SAP SuccessFactors Onboarding Academy Unit 12 covers canceling onboarding processes and triggering No-Show events. SAP documents No-Show as an Employee Central capability used by Onboarding. An onboarding process can be canceled from the Onboarding Dashboard while onboarding tasks are incomplete; No-Show can also be triggered from Employee Central in supported timing windows. citeturn0search1turn0search2

---

## 1. Architecture View

Recruiting / Manual Initiation
→ Onboarding Process
→ Incomplete Onboarding
→ Cancel Onboarding / Report No-Show
→ Process Status = Cancelled
→ User Lifecycle
→ Notifications
→ Audit / Process Instance
→ Downstream Reconciliation

**Architect principle:** Cancellation is a lifecycle transition, not a deletion.

SAP's current test script documents Dashboard cancellation with a cancellation reason, comments, confirmation, notification, external-user deactivation, and a Cancelled process status in the documented No-Show scenario. citeturn0search0turn0search4

---

## 2. Critical SAP Facts

### No-Show configuration
SAP states that the No-Show feature in Employee Central must be configured for the Cancel Onboarding process to work, even where the customer does not have an Employee Central license. Configuration includes the event and employee-status picklists, a No-Show event reason, and appropriate permissions. citeturn0search1

### Timing
SAP documents that an Employee Central No-Show can cancel an incomplete onboarding process:
- after Manage Pending Hire and before the job start date; or
- within 30 days of the job start date. citeturn0search1turn0search3

### Dashboard cancellation
An authorized HR administrator can cancel an onboarding process from the Onboarding Dashboard before the employee is hired in Employee Central. citeturn0search0

### Audit data
The ONB2Process OData entity exposes cancellation reason, additional comments, and cancellation source. SAP documents cancellation sources including Dashboard/API cancellation and No-Show from Employee Central. citeturn0search7

---

# 3. 20 Scenario-Based Interview Questions — STAR Answers

## Q1. A candidate withdraws before joining. How would you cancel onboarding?

**Situation:** A candidate has completed part of onboarding but informs HR that they will not join.

**Task:** Stop the process cleanly, prevent unnecessary tasks and notifications, preserve audit information, and avoid creating an employee who never joined.

**Action:** I would validate that the process is still cancellable, identify the authorized HR administrator, open the new hire from the Onboarding Dashboard, select the cancellation action, choose the appropriate cancellation reason such as No Show where applicable, add meaningful comments, and confirm. I would then verify the process instance, status, user state, notifications, and downstream records. SAP documents this Dashboard cancellation pattern. citeturn0search0

**Result:** The onboarding lifecycle closes with an auditable reason and the organization avoids carrying an invalid onboarding process forward.

**Architect signal:** I treat cancellation as controlled lifecycle closure, not record deletion.

---

## Q2. The Cancel Onboarding action does not show No Show. What do you investigate?

**Situation:** HR can see the cancellation action, but the No Show reason is missing.

**Task:** Determine whether the issue is configuration, permissions, picklist setup, or process context.

**Action:** I would check Employee Central event and employee-status picklists, confirm the No Show value is active, verify the No Show event reason, validate the administrator's RBP permissions, and confirm the current process context supports cancellation. SAP specifically describes adding No Show to the event/employee-status picklists and assigning permissions to the role. citeturn0search1

**Result:** The defect is isolated to configuration or authorization rather than being incorrectly treated as an application defect.

**Architect signal:** Separate configuration availability from authorization availability.

---

## Q3. A manager says, “The employee didn't join, so I will simply delete the onboarding record.” What do you recommend?

**Situation:** A manager wants to remove a no-show candidate by deleting data.

**Task:** Protect auditability and lifecycle integrity.

**Action:** I would explain that cancellation should be represented through the supported lifecycle rather than destructive deletion. I would use the No Show/cancellation mechanism, preserve the process instance and cancellation reason, and validate user status and downstream records.

**Result:** The organization retains traceability while correctly ending the onboarding process.

**Architect signal:** Terminate state; do not destroy history.

---

## Q4. A No-Show event is configured, but triggering it does not cancel onboarding. How do you troubleshoot?

**Situation:** HR changes the employee to No Show in Employee Central, but Onboarding remains active.

**Task:** Find the break between EC event processing and ONB process cancellation.

**Action:** I would validate No Show event/status configuration, event reason, role permission, employee/process timing, task completion, lifecycle boundary, process instance state, relevant rules, and integrations. SAP notes that No-Show cancellation applies to incomplete onboarding processes and documents specific timing windows. citeturn0search1turn0search3

**Result:** I identify whether the failure is configuration, authorization, timing, or process-state related.

**Architect signal:** Troubleshoot the event-to-process state transition, not only the UI.

---

## Q5. The candidate is marked No Show before the start date. What should happen?

**Situation:** A future hire decides not to join before the start date.

**Task:** Prevent the person from becoming an active employee while closing onboarding correctly.

**Action:** I would use the supported No-Show process and validate the cancellation. SAP documents that when No Show is triggered before the hire date, the onboarding process is canceled and the external user is deactivated; the external user's data is retained for reporting in the documented scenario. citeturn0search24

**Result:** The onboarding lifecycle closes without leaving active external access.

**Architect signal:** Pre-hire No Show is both a process-state and identity-lifecycle event.

---

## Q6. A person is reported No Show after the hire date. How do you approach it?

**Situation:** An employee reaches the hire/start date but does not continue employment.

**Task:** Handle the no-show without creating inconsistent employee or payroll history.

**Action:** I would validate the documented timing window, employee status, Job Information, and whether the onboarding process is incomplete. SAP documents that Report Employee as No-Show is available before the hire date or within 30 days after the hire date. citeturn0search3 I would coordinate with payroll and downstream HR teams before corrective action.

**Result:** The no-show is represented consistently across Employee Central and Onboarding, with downstream impacts reconciled.

**Architect signal:** Post-hire No Show requires cross-module lifecycle governance.

---

## Q7. A No Show occurs, but the onboarding dashboard still shows the candidate. What do you check?

**Situation:** HR reports No Show, but the candidate remains visible.

**Task:** Determine whether cancellation completed or the dashboard is reflecting a stale/unfinished process.

**Action:** I would verify the ONB2Process instance using the person's identifier and check Process Status, Reason for Onboarding Cancellation, Event Reason for Onboarding Cancellation, Cancellation Source, timestamps, and outstanding tasks. SAP's verification script specifically recommends checking Cancelled status and No Show reason values. citeturn0search4turn0search7

**Result:** The team can distinguish a UI/search issue from an actual process-state failure.

**Architect signal:** Read the process instance, not just the dashboard.

---

## Q8. A no-show cancellation sends no email to the candidate or hiring manager. What is your approach?

**Situation:** The process is canceled but expected cancellation communications are missing.

**Task:** Determine whether lifecycle completion succeeded while notification processing failed.

**Action:** I would first confirm cancellation status. Then I would inspect email configuration, recipient resolution, triggers, language rules, templates, notification history, and email addresses. SAP's documented cancellation flow states that an appropriate email is sent to the new hire and hiring manager. citeturn0search0

**Result:** The cancellation state remains authoritative while the communication defect is corrected separately.

**Architect signal:** Do not roll back a successful lifecycle transition because a notification failed.

---

## Q9. A candidate has completed all onboarding tasks. Can you still use the same cancellation approach?

**Situation:** The onboarding process is effectively complete and the candidate is at or beyond the hiring boundary.

**Task:** Avoid applying a pre-hire cancellation pattern outside its valid lifecycle.

**Action:** I would inspect current process state, Manage Pending Hire status, hire date, employee status, and task completion. SAP states that EC No-Show cancellation applies to an incomplete onboarding process and documents timing boundaries. citeturn0search1 I would use the appropriate Employee Central employment lifecycle correction rather than assuming Cancel Onboarding is universally applicable.

**Result:** The correction is aligned with the actual lifecycle state.

**Architect signal:** State determines action.

---

## Q10. A customer wants automatic closure of stale onboarding processes. How would you design it?

**Situation:** Hundreds of onboarding processes remain open because candidates stopped responding.

**Task:** Automate controlled closure without canceling legitimate hires.

**Action:** I would define eligibility based on process type, age, start-date relationship, status, and exceptions. SAP provides an Onboarding business-rule scenario for configuring a period to close and archive onboarding/offboarding processes and tasks; the rule can also set an event reason for canceling onboarding. citeturn0search6 I would add approval, exception, monitoring, and audit controls.

**Result:** Stale processes are systematically closed while active or exceptional cases remain protected.

**Architect signal:** Automation requires guardrails, observability, and exception handling.

---

## Q11. How would you design cancellation reasons for a global organization?

**Situation:** Countries use different terminology for withdrawal, failed compliance, business decision, No Show, and duplicate onboarding.

**Task:** Create a controlled reason model supporting local operations and global analytics.

**Action:** I would establish a global semantic taxonomy and map local descriptions to stable categories. I would keep No Show distinct from voluntary withdrawal, employer cancellation, duplicate process, and technical cancellation. I would define ownership and reporting rules.

**Result:** Global analytics remain comparable while local HR teams retain operational detail.

**Architect signal:** Separate business semantics from display labels.

---

## Q12. A duplicate onboarding process exists for the same person. Should you cancel one as No Show?

**Situation:** Two onboarding processes exist for one intended hire because initiation was duplicated.

**Task:** Close the invalid process without corrupting the valid onboarding.

**Action:** I would compare candidate/person identifiers, employment details, start date, source system, initiation timestamp, and process status. I would classify the duplicate explicitly as a duplicate/technical cancellation rather than No Show if the person is actually joining. Then I would cancel only the invalid process and reconcile downstream records.

**Result:** One authoritative onboarding journey remains while the duplicate has a traceable closure reason.

**Architect signal:** Do not use No Show as a generic cancellation code.

---

## Q13. How would you secure cancellation capability?

**Situation:** Managers participate in onboarding but should not have broad cancellation authority.

**Task:** Implement least-privilege lifecycle control.

**Action:** I would separate permissions for viewing onboarding, performing operational tasks, reporting No Show, canceling onboarding, changing EC event reasons, and administering configuration. I would use RBP and target populations and execute positive and negative authorization tests.

**Result:** Managers can perform operational responsibilities without unrestricted lifecycle-control permissions.

**Architect signal:** Cancellation is a privileged lifecycle operation.

---

## Q14. What happens to the external user when onboarding is canceled before hire?

**Situation:** A candidate has external onboarding access and is canceled before the hire date.

**Task:** Ensure access is removed without destroying audit information.

**Action:** I would verify the cancellation state and external-user lifecycle. SAP documents that in the pre-hire No-Show scenario, the external user is deactivated while the process remains auditable. citeturn0search24 I would also verify that scheduled notifications or integrations cannot reactivate the user unintentionally.

**Result:** The candidate loses inappropriate access while historical information remains available for controlled reporting.

**Architect signal:** Identity deactivation is part of cancellation design.

---

## Q15. A cancellation happens through API rather than the dashboard. How do you audit it?

**Situation:** An integration invokes cancellation rather than an HR administrator using the UI.

**Task:** Maintain reliable auditability independent of the initiation channel.

**Action:** I would inspect cancellation reason, comments, and cancellation source in ONB2Process. SAP documents cancellationSource as identifying the source, including Dashboard/API and No-Show from Employee Central. citeturn0search7 I would also capture integration logs, timestamp, technical user, correlation ID, and upstream request ID.

**Result:** Auditors can distinguish what initiated the cancellation and why.

**Architect signal:** Channel-independent auditability is essential.

---

## Q16. A hiring manager wants to reverse a cancellation. What do you do?

**Situation:** An onboarding process was canceled, but the business now wants to proceed.

**Task:** Avoid manually manipulating a canceled process into an inconsistent state.

**Action:** I would determine whether reversal is supported in the current lifecycle. If not, I would follow the supported restart, re-initiation, or new onboarding path, preserving the original canceled instance for audit. I would check person identity, candidate status, employment records, rehire logic, and duplicate prevention first.

**Result:** The new journey is clean and auditable while the original cancellation remains historically accurate.

**Architect signal:** Never rewrite history to repair a business decision.

---

## Q17. How would you test Cancellation & No-Show before production?

**Situation:** A global customer is preparing for go-live.

**Task:** Prove cancellation across lifecycle, security, notifications, identity, and downstream systems.

**Action:** I would test Dashboard cancellation, EC No Show, before-start scenarios, supported post-start scenarios, different roles, countries, external-user deactivation, notification delivery, reason/status/source, API cancellation, duplicate scenarios, negative authorization, and downstream reconciliation. SAP's current test scripts provide explicit verification points for canceled status and No Show reason. citeturn0search4

**Result:** The customer has evidence that the lifecycle and its side effects are reliable rather than relying on a single happy path.

**Architect signal:** Test state transitions and side effects, not just UI clicks.

---

## Q18. Payroll reports an unexpected employee record after a no-show. How do you investigate?

**Situation:** Payroll sees an employee record although HR says the person was a no-show.

**Task:** Determine whether the lifecycle crossed the hire boundary and reconcile Employee Central with Onboarding.

**Action:** I would establish a timeline: onboarding initiation → data collection → MPH → hire date → No Show → cancellation. I would inspect employee status, Job Information, person/employment identifiers, payroll replication, and integration logs. SAP documents No Show as an EC capability and documents the lifecycle timing constraints. citeturn0search1turn0search25

**Result:** The team identifies whether the record is expected historical state, a valid no-show correction, or a downstream synchronization defect.

**Architect signal:** Timeline reconstruction is the fastest route to cross-system truth.

---

## Q19. How would you design monitoring for cancellation and no-show?

**Situation:** The customer has thousands of hires across countries and needs operational control.

**Task:** Detect failed, delayed, or suspicious cancellation patterns.

**Action:** I would monitor open onboarding processes past expected dates, cancellation volume by reason, No Show rate, cancellation latency, canceled processes with active users, No Show processes with incomplete downstream updates, notification failures, API failures, duplicate onboarding, and repeated cancellations/restarts. I would combine dashboard reporting, ONB2Process data, EC events, integration monitoring, and exception queues.

**Result:** Support teams can identify lifecycle anomalies before they become security, payroll, compliance, or reporting incidents.

**Architect signal:** Every lifecycle transition needs an observable control point.

---

## Q20. You are the Lead Onboarding Architect. Explain your complete Cancellation & No-Show strategy.

**Situation:** I am designing a global Onboarding solution where candidates can withdraw, employers can cancel hiring, or new hires can fail to report.

**Task:** Create a controlled, secure, auditable, integration-aware cancellation architecture.

**Action:**
1. Define lifecycle states and distinguish cancellation, No Show, duplicate, technical cancellation, and stale-process closure.
2. Configure EC No Show: event, status, event reason, and permissions. citeturn0search1
3. Model supported timing boundaries explicitly. citeturn0search1turn0search3
4. Apply least privilege and target populations.
5. Preserve audit history: reason, comments, source, timestamp, and process instance.
6. Control external/internal identity lifecycle.
7. Treat notifications as a separate observable side effect.
8. Reconcile Employee Central, Recruiting, payroll, identity, and integrations.
9. Use controlled closure rules for stale processes with exceptions. citeturn0search6
10. Monitor lifecycle anomalies and build exception queues.
11. Use supported restart or re-initiation patterns for recovery.
12. Govern globally while allowing controlled local variation.

**Result:** The organization gets a cancellation architecture that closes the correct lifecycle, protects identity, preserves auditability, and makes downstream reconciliation visible.

**Architect signal:** Cancel the process, preserve the history, secure the identity, reconcile the ecosystem, and make the transition observable.

---

# 4. Cancellation Design Matrix

| Scenario | Primary mechanism | Key control |
|---|---|---|
| Candidate withdraws before hire | Cancel Onboarding | Reason + comments |
| Candidate does not report | No Show | EC event/reason |
| No Show before start | EC No Show | Timing validation |
| No Show after start | EC No Show | Supported post-start window |
| Duplicate onboarding | Controlled cancellation | Do not classify as No Show |
| Stale onboarding | Closure rule/process | Exception controls |
| API cancellation | API/source | Correlation + audit |
| Security issue | RBP review | Least privilege |
| Notification failure | Email troubleshooting | Do not alter lifecycle state |
| User still active | Identity reconciliation | Deactivation check |

---

# 5. Troubleshooting Master Loop

**IDENTIFY → RECONSTRUCT TIMELINE → CLASSIFY SOURCE → VALIDATE TIMING → CHECK CONFIGURATION → CHECK SECURITY → INSPECT PROCESS STATE → SECURE IDENTITY → RECONCILE DOWNSTREAM → AUDIT → MONITOR**

Use this loop for production incidents.

---

# 6. Architecture Decision Records

### ADR-01 — No Show as a controlled lifecycle state
Use a defined No Show event/reason rather than free-text cancellation.

### ADR-02 — Preserve canceled process instances
Do not delete canceled onboarding history.

### ADR-03 — Separate No Show from generic cancellation
Reason taxonomy must preserve business semantics.

### ADR-04 — Least privilege
Cancellation permissions are separated from ordinary onboarding task permissions.

### ADR-05 — Identity deactivation
Cancellation must trigger or validate the appropriate identity lifecycle action.

### ADR-06 — Timing governance
No Show automation must respect documented lifecycle boundaries.

### ADR-07 — Observable cancellation
Process status, source, reason, timestamp, and downstream reconciliation must be monitorable.

### ADR-08 — Controlled stale-process closure
Automated closure requires explicit eligibility and exception criteria.

---

# 7. Quality Gates

- [ ] No Show event exists.
- [ ] No Show status is configured.
- [ ] No Show event reason exists.
- [ ] Required RBP permissions are assigned.
- [ ] Target populations are correct.
- [ ] Dashboard cancellation is tested.
- [ ] EC No Show is tested.
- [ ] Pre-start scenario is tested.
- [ ] Supported post-start scenario is tested.
- [ ] External-user deactivation is verified.
- [ ] Internal-user behavior is verified where applicable.
- [ ] Cancellation notifications are tested.
- [ ] Process status becomes Cancelled.
- [ ] Cancellation reason is correct.
- [ ] Cancellation source is auditable.
- [ ] API cancellation is tested if used.
- [ ] Payroll/downstream integrations are reconciled.
- [ ] Reporting reflects the correct lifecycle.
- [ ] Negative security tests pass.
- [ ] Recovery/re-initiation procedure is documented.

---

# 8. Anti-Patterns

### ❌ Treating cancellation as deletion
Destroys auditability and makes reconciliation difficult.

### ❌ Using No Show for every cancellation
Corrupts business semantics and analytics.

### ❌ Ignoring lifecycle timing
The same action is not valid at every process stage.

### ❌ Giving broad cancellation permission
Creates governance and security risk.

### ❌ Checking only the dashboard
The UI does not provide the complete system-of-record picture.

### ❌ Ignoring identity deactivation
A canceled candidate may retain inappropriate access.

### ❌ Ignoring downstream payroll
No-show corrections can have employee/payroll consequences.

### ❌ Automatically closing every stale process
Legitimate delayed hires may be incorrectly canceled.

### ❌ Reopening canceled records through unsupported manipulation
Creates inconsistent lifecycle states.

---

# 9. Rapid-Fire Interview Answers

**What is No Show?**  
An Employee Central lifecycle capability used to represent that a new hire did not report as expected and, in supported scenarios, cancel the related onboarding process.

**Where is No Show configured?**  
Employee Central event/status/reason configuration and permissions.

**Can you cancel onboarding from the Dashboard?**  
Yes, an authorized administrator can cancel an eligible onboarding process.

**Does cancellation mean deletion?**  
No. Preserve process history.

**What happens to process status?**  
For the documented No Show cancellation flow, it becomes Cancelled. citeturn0search4

**What is cancellationSource?**  
A field identifying where cancellation originated, such as Dashboard/API or EC No Show. citeturn0search7

**Can No Show cancel a completed onboarding?**  
The documented EC No Show flow applies to incomplete onboarding processes.

**What is the key timing concept?**  
After MPH/before start date, and within the documented 30-day post-start window for supported EC No Show cancellation. citeturn0search1turn0search3

**What should you verify after cancellation?**  
Process status, reason, source, user status, notifications, and downstream records.

**Should duplicate onboarding be classified as No Show?**  
No. Use a semantically correct cancellation classification.

**How do you troubleshoot a missing No Show reason?**  
Picklist → event reason → permissions → process context.

**What is the core architectural principle?**  
Terminate the lifecycle without destroying history.

---

# 10. Final Master Interview Answer

> "I design Cancellation & No-Show as a controlled lifecycle architecture across SAP SuccessFactors Onboarding and Employee Central. First, I distinguish business cancellation, No Show, duplicate, technical cancellation, and stale-process closure because each has different semantics. I configure the Employee Central No Show event, status, event reason, and permissions, and I explicitly model the supported timing boundaries. SAP documents No Show cancellation for incomplete onboarding processes in defined pre-start and post-start windows. 
>
> From a security perspective, cancellation is a privileged lifecycle operation, so I apply least privilege and validate target populations. From an identity perspective, I verify external or internal user deactivation as appropriate. From an audit perspective, I preserve the onboarding process and capture reason, comments, source, timestamp, and process status. From an integration perspective, I reconcile Employee Central, Recruiting, payroll, identity, notifications, and downstream interfaces.
>
> For operations, I monitor open stale processes, cancellation latency, No Show volume, active users on canceled processes, notification failures, and downstream reconciliation exceptions. For automation, I use controlled closure rules with safeguards rather than blindly canceling old processes. Finally, I design recovery through supported restart or re-initiation patterns rather than rewriting historical cancellation records.
>
> My guiding principle is: cancel the process, preserve the history, secure the identity, reconcile the ecosystem, and make the transition observable."

---

# 11. SuccessLabs Mastery Lens

## KNOW
Understand Onboarding, Employee Central events, No Show, process state, identity lifecycle, and cancellation semantics.

## DESIGN
Design cancellation states, reason taxonomy, RBP, timing, notifications, identity controls, and integration boundaries.

## DELIVER
Configure, test, deploy, and operationalize the cancellation lifecycle.

## SOLVE
Diagnose missing reasons, failed No Show events, stale processes, incorrect user status, and downstream inconsistencies.

## INFLUENCE
Explain lifecycle governance to HR, managers, security, payroll, integration, and compliance stakeholders.

## TRANSFORM
Turn cancellation from a reactive administrative task into an observable enterprise lifecycle-control capability.

---

# 12. 22-Pahacha Coverage

| Pahacha | Cancellation & No-Show mastery |
|---|---|
| 01 Domain Foundation | ONB + EC lifecycle |
| 02 Product & Technology Knowledge | Cancellation, No Show, ONB2Process |
| 03 Business Process & Operating Context | Candidate withdrawal / employer cancellation |
| 04 Data & Information Model | Person, process, event reason, user state |
| 05 Requirement Analysis | Cancellation policy |
| 06 Solution Design Awareness | Lifecycle architecture |
| 07 Configuration / Development Awareness | EC events, reasons, rules |
| 08 Architecture & Integration Awareness | EC / ONB / downstream systems |
| 09 Implementation Awareness | Configuration + deployment |
| 10 Migration & Data Readiness | Historical/open-process reconciliation |
| 11 Testing & Quality Awareness | Positive + negative lifecycle testing |
| 12 Release, Adoption & Support | HR operational procedures |
| 13 Troubleshooting Mindset | Timeline reconstruction |
| 14 Incident & Defect Awareness | State-transition failure analysis |
| 15 Complex Scenario Thinking | Pre/post-start No Show |
| 16 Optimization & Continuous Improvement | Stale-process automation |
| 17 Stakeholder Management | HR / manager / payroll / security |
| 18 Communication & Collaboration | Cancellation governance |
| 19 Advisory & Trusted SME | Global reason architecture |
| 20 Automation, AI & Intelligent Products | Controlled lifecycle automation |
| 21 Transformation & Business Value | Reduced operational risk |
| 22 Strategic Mastery & Future Vision | Lifecycle observability |

---

# 13. SuccessLabs Architecture Streams

1. **Enterprise Architect** — lifecycle governance
2. **Business Architect** — hiring/no-show operating model
3. **Integration Architect** — EC, Recruiting, payroll, identity
4. **Domain Architect** — HR lifecycle semantics
5. **Cloud & Infrastructure Architect** — platform reliability and observability
6. **Application & Process Architect** — ONB process-state design
7. **AI Architect** — anomaly detection for stale/no-show patterns
8. **Security Architect** — privileged cancellation and identity deactivation
9. **Industry Architect** — country/industry hiring requirements
10. **Data Architect** — process/event/reason/audit data
11. **UI/UX Architect** — safe cancellation experience and confirmation
12. **Technology Architect** — APIs, automation, monitoring, integration runtime

---

# 14. Master Loop

**IDENTIFY → CLASSIFY → VALIDATE TIMING → CHECK CONFIGURATION → CHECK SECURITY → INSPECT PROCESS STATE → SECURE IDENTITY → RECONCILE DOWNSTREAM → AUDIT → MONITOR**

This is the core mental model for senior SAP SuccessFactors Onboarding interviews.

---

## SAP Source Alignment

- SAP SuccessFactors Onboarding Academy — Unit 12, Canceling Onboarding Processes and Triggering No-Show Events. citeturn0search9turn0search1
- SAP Help Portal — Cancel Onboarding, 1H 2026 test script. citeturn0search0
- SAP Help Portal — Report Employee as No-Show. citeturn0search3
- SAP Help Portal — Verify Onboarding Process Cancellation. citeturn0search4
- SAP Help Portal — ONB2Process OData entity. citeturn0search7
- SAP Help Portal — Configure Period to Close and Archive Onboarding/Offboarding Processes and Tasks. citeturn0search6

**Interview mantra:**  
> **A mature architect does not merely know how to cancel onboarding. They know when cancellation is valid, what state must change, what identity must be secured, what history must remain, what downstream systems must reconcile, and how to prove that the lifecycle closed correctly.**

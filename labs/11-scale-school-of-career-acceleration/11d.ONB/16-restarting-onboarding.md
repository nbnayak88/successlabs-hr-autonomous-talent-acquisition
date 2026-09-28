# 16. Restarting Onboarding

## SAP SuccessFactors Onboarding — Scenario-Based Interview & Architecture Guide

> **Purpose:** Master Restarting Onboarding as a controlled lifecycle recovery capability. The architect must distinguish a full process restart from a targeted task restart, understand when restart is valid, how data changes trigger restart, how business rules automate it, how participants are notified, how integrations behave, and how to prevent restart loops or duplicate onboarding.

**SAP Academy alignment:** SAP Onboarding Academy Unit 16 is **Restarting Onboarding Processes**. SAP documents manual restart for incorrect data or unhandled errors, and automatic restart through business rules when configured process attributes such as Start Date or Hiring Manager change. citeturn0search1turn0search13

---

# 1. What is Restarting Onboarding?

Restarting Onboarding is a controlled way to re-run an onboarding process when important data changes or an error prevents the original process from completing correctly.

A restart is fundamentally different from creating a duplicate onboarding.

**Restart = recover and re-execute the existing business lifecycle.**

SAP's documented manual restart flow cancels the current onboarding process and initiates a new one; the process then continues from Review New Hire Data and subsequent steps. Appropriate notifications are sent and the dashboard identifies that the onboarding was restarted. citeturn0search7

---

# 2. Full Restart vs Targeted Restart

A senior architect must distinguish two concepts.

### Full Onboarding Restart

Used when the overall onboarding process must be re-executed because important data or process state has changed.

Typical causes:
- Incorrect new-hire data
- Unhandled process error
- Significant start-date change
- Significant hiring-manager change
- Recruiting data correction

SAP's manual restart documentation states that the current process is canceled and a new process is initiated. citeturn0search7

### Targeted Step Restart

Some newer SAP capabilities allow only a specific step to be restarted instead of repeating the entire onboarding journey.

For example, SAP's 1H 2026 enhancement allows the **Complete e-Signature** step to be restarted after new-hire data changes while preserving previously completed steps. SAP states that the restart is available for open onboarding processes, generates a new document version, and notifies affected participants. citeturn0search6turn0search9

**Architectural principle:**

> **Restart the smallest valid unit of work that restores data and process integrity.**

---

# 3. Restart Architecture

```text
             ACTIVE ONBOARDING
                    |
             Data / Event Change
                    |
        +-----------+-----------+
        |                       |
    Recoverable              Not Restartable
        |                       |
        v                       v
  Restart Decision         Correct Lifecycle
        |
   +----+------------------+
   |                       |
Full Process            Step Restart
   |                       |
   v                       v
Cancel Current         Re-execute Step
Process Instance       Preserve Prior Steps
   |                       |
   +-----------+-----------+
               |
               v
       Revalidate Data
               |
               v
        Resume Process
               |
               v
       Notify Participants
               |
               v
          Reconcile
```

---

# 4. When Should Restart Be Used?

Use restart when:

- A critical onboarding input changed.
- A process entered an error flow and the data issue has been corrected.
- A configured event requires re-execution.
- Start date changes affect task timing.
- Hiring manager changes affect assignment.
- Recruiting data updates require onboarding reprocessing.
- A targeted step must regenerate output from corrected data.

Do **not** use restart as a generic repair mechanism for every issue.

---

# 5. 20 Scenario-Based Interview Questions — STAR Answers

## Q1. A new hire's start date changes after onboarding was initiated. What would you do?

**Situation:**  
The employee's start date moves by two weeks after onboarding tasks have already been assigned.

**Task:**  
Ensure date-sensitive tasks and assignments reflect the new employment date without creating duplicate onboarding.

**Action:**  
I would determine whether the start-date change requires a full restart or can be handled through the configured automatic restart mechanism. SAP documents automatic restart based on changes to `targetDate` on ONB2Process and provides a business-rule pattern for detecting the change and triggering the restart event. citeturn0search13turn0search5 I would test task timing, notifications, integrations, and participant assignments after the restart.

**Result:**  
The onboarding journey aligns with the new start date while maintaining a controlled lifecycle.

**Architect signal:** Treat effective-date changes as lifecycle events.

---

## Q2. The hiring manager changes after onboarding has started. Can you automatically restart the process?

**Situation:**  
A new hire's hiring manager changes before joining.

**Task:**  
Ensure manager-owned activities are assigned to the correct person.

**Action:**  
I would evaluate whether the business requirement warrants automatic restart. SAP documents automatic restart rules based on the `manager` field in ONB2Process and also supports Recruiting-driven restart when configured. citeturn0search5turn0search13 I would make the rule narrowly scoped and test for restart loops.

**Result:**  
The onboarding process can re-align with the new manager without unnecessary manual intervention.

**Architect signal:** Automate only changes that materially affect process execution.

---

## Q3. A Recruiting field contains incorrect data and onboarding enters an error flow. How do you recover it?

**Situation:**  
Recruiting sends invalid or inconsistent data and onboarding fails validation.

**Task:**  
Correct the source data and safely resume onboarding.

**Action:**  
I would open the Onboarding Process Messages/error flow, identify the data discrepancy, correct it in Recruiting, and then choose Restart once all errors are resolved. SAP documents that failed onboarding can show Failed - Data Error, provide View Details, and allow Restart after correcting the source data. citeturn0search3

**Result:**  
The system revalidates the corrected data and resumes onboarding.

**Architect signal:** Fix the source before restarting the process.

---

## Q4. What happens during a manual full restart?

**Situation:**  
HR needs to restart an active onboarding process because the data set is materially incorrect.

**Task:**  
Explain the lifecycle consequences.

**Action:**  
I would validate eligibility, identify the authorized user, access the Onboarding Dashboard, select the new hire, choose Action → Restart Onboarding, acknowledge the confirmation, enter the restart reason, and confirm. SAP documents that the current process is canceled and a new onboarding process is initiated, with notifications sent to involved participants. citeturn0search7

**Result:**  
The onboarding process starts again with corrected data and a visible restart history.

**Architect signal:** Full restart is a controlled lifecycle transition, not a simple refresh.

---

## Q5. When can a manual full restart be performed?

**Situation:**  
An HR administrator asks whether any onboarding can be restarted.

**Task:**  
Explain the lifecycle boundary.

**Action:**  
I would verify that the onboarding is still in progress and the candidate has not yet been hired in the system. SAP's documented manual restart test script states that restart can occur between receiving onboarding-task notification and Hire Employee from Manage Pending Hires. citeturn0search7 I would always validate current-release behavior before applying the rule operationally.

**Result:**  
Restart is performed only within a supported lifecycle window.

**Architect signal:** Lifecycle state determines recovery options.

---

## Q6. A new hire's address changes. Should you restart the entire onboarding?

**Situation:**  
A candidate changes a personal-data field after starting onboarding.

**Task:**  
Decide whether a full restart is justified.

**Action:**  
I would assess the downstream dependencies of the changed field. If the change only affects a document, I would prefer a targeted document/e-signature restart where supported rather than re-running every task. SAP's 1H 2026 e-signature restart capability specifically avoids restarting the entire onboarding process when updated data only needs to be reflected in signed documents. citeturn0search6turn0search9

**Result:**  
The affected output is corrected without unnecessarily repeating completed onboarding work.

**Architect signal:** Restart scope should match data impact.

---

## Q7. An e-signature document contains outdated data. What is the modern approach?

**Situation:**  
New-hire data changes after a document was generated.

**Task:**  
Regenerate the document without forcing the candidate through every previous onboarding step.

**Action:**  
I would use the supported Complete e-Signature step restart where the process is open and the feature applies. SAP's 1H 2026 enhancement regenerates the document, preserves prior completed steps, records restart details, and creates a new document version while retaining previous versions. citeturn0search6turn0search9

**Result:**  
The new document reflects corrected data while prior onboarding progress remains intact.

**Architect signal:** Prefer targeted recovery when the platform supports it.

---

## Q8. A customer wants every data change to automatically restart onboarding. Would you recommend it?

**Situation:**  
The customer proposes a blanket automatic restart policy.

**Task:**  
Prevent unnecessary process churn.

**Action:**  
I would reject the blanket design and classify fields by impact:
- process-critical;
- assignment-critical;
- compliance-critical;
- document-critical;
- informational.

Only changes with meaningful process impact should trigger restart. I would build explicit rules and exception handling.

**Result:**  
The organization avoids repeated onboarding cycles caused by harmless data corrections.

**Architect signal:** **Not every data change is a lifecycle event.**

---

## Q9. How would you configure automatic restart for Start Date changes?

**Situation:**  
The customer wants date changes to automatically re-align onboarding.

**Task:**  
Create a reliable automation.

**Action:**  
I would configure a post-save business rule on the ONB2Process object. SAP documents using `targetDate` and the original target date to detect a change and then execute the **Trigger Event for Restarting Onboarding Process** action. citeturn0search13turn0search5 I would include null checks, process existence checks, and a difference comparison to avoid unnecessary triggers.

**Result:**  
Only genuine start-date changes trigger restart.

**Architect signal:** Build restart rules with explicit change detection.

---

## Q10. How would you configure automatic restart when the Hiring Manager changes?

**Situation:**  
Manager changes are common and manager-owned tasks must always be correct.

**Task:**  
Automate reprocessing without creating restart loops.

**Action:**  
I would configure the ONB2Process post-save rule to compare the original and current `manager` values and trigger restart only when the process exists and the manager genuinely changes. SAP documents `manager` as one of the fields used in automatic restart configuration. citeturn0search5

**Result:**  
Manager-dependent onboarding work is refreshed only when necessary.

**Architect signal:** Compare **old value vs new value**, not merely current value.

---

## Q11. Recruiting updates the Hiring Manager. What must be enabled for automatic restart?

**Situation:**  
The customer expects Recruiting changes to trigger onboarding restart.

**Task:**  
Ensure the integration and configuration support the desired behavior.

**Action:**  
I would enable **Allow Recruiting Updates** in Onboarding General Settings → Restart Settings where the supported scenario applies. SAP documents that Recruiting integration can automatically restart onboarding when specific new-hire data changes, including hiring manager, when this setting is enabled. citeturn0search13

**Result:**  
Recruiting-originated changes can be propagated into the onboarding lifecycle through the supported restart mechanism.

**Architect signal:** Integration-triggered automation needs explicit governance.

---

## Q12. A restart happens twice for one change. How do you troubleshoot?

**Situation:**  
A single manager change produces two restart events.

**Task:**  
Identify duplicate trigger sources.

**Action:**  
I would inspect all post-save rules on ONB2Process, Recruiting restart settings, integration events, event reasons, timestamps, and audit information. I would determine whether two independent automation paths are reacting to the same change. I would then consolidate or scope the rules.

**Result:**  
One business event produces one controlled restart.

**Architect signal:** Avoid **multiple automation owners for the same event**.

---

## Q13. A restart notification is not received. What do you check?

**Situation:**  
The process restarted, but participants were not informed.

**Task:**  
Separate process success from communication failure.

**Action:**  
I would confirm the restart actually occurred, then inspect restart email configuration, recipients, language, notification history, user email addresses, and template configuration. SAP documents appropriate email notifications for manual restart and a dedicated restart template for the 1H 2026 e-signature-step restart. citeturn0search7turn0search6

**Result:**  
The lifecycle state remains correct while notification configuration is corrected independently.

**Architect signal:** Communication is a side effect of restart, not the restart itself.

---

## Q14. What happens to previously completed onboarding tasks after a full restart?

**Situation:**  
HR fears that restarting will create inconsistent duplicate work.

**Task:**  
Explain the difference between full and targeted restart.

**Action:**  
For a documented full restart, SAP states that the current onboarding process is canceled and a new onboarding process is initiated, starting again from Review New Hire Data and subsequent steps. citeturn0search7 For targeted e-signature restart, SAP states that previously completed steps remain intact. citeturn0search6

**Result:**  
Stakeholders understand that restart behavior depends on the restart scope.

**Architect signal:** Always specify **which restart capability** is being discussed.

---

## Q15. How would you prevent accidental duplicate onboarding after restart?

**Situation:**  
Recruiters can initiate onboarding and HR can manually restart it.

**Task:**  
Prevent multiple active onboarding processes for the same candidate.

**Action:**  
I would establish clear initiation ownership, monitor active process instances, use the appropriate Recruiting re-onboarding controls, and validate candidate/process status before initiating another journey. SAP documents a re-onboarding blackout period in Onboarding Integration Setup; the default is 90 days and it prevents recruiters from accidentally restarting onboarding within the configured period. citeturn0search12

**Result:**  
Restart and re-initiation remain controlled rather than producing duplicate processes.

**Architect signal:** Restart governance must include **duplicate prevention**.

---

## Q16. A restart is triggered but the candidate's new data is still incorrect. What do you do?

**Situation:**  
The process restarted, but the corrected source data was not actually fixed.

**Task:**  
Prevent repeated restart cycles.

**Action:**  
I would stop repeated restarts, return to the authoritative source system, correct the underlying data, validate the field mapping, and restart only after the source is correct. I would inspect the process messages and data-validation errors before executing another restart.

**Result:**  
The root data issue is resolved rather than repeatedly recycling the workflow.

**Architect signal:** Restart is a recovery mechanism, not a substitute for data-quality management.

---

## Q17. How would you test an automatic restart design?

**Situation:**  
A customer wants production automation for Start Date and Manager changes.

**Task:**  
Prove that the automation is accurate and safe.

**Action:**  
I would test:
- start date changes;
- manager changes;
- unrelated field changes;
- null-to-value;
- value-to-null;
- repeated same-value saves;
- simultaneous changes;
- Recruiting-originated changes;
- manual changes;
- notification delivery;
- task reassignment;
- integration side effects;
- restart loops;
- duplicate prevention;
- security;
- audit trail.

SAP's automatic restart model explicitly compares original and current values before triggering the restart event. citeturn0search13

**Result:**  
The automation responds to genuine lifecycle changes while ignoring irrelevant saves.

**Architect signal:** Test **change detection**, not just the happy path.

---

## Q18. A restart occurs after a country/work-location change. What downstream risks do you consider?

**Situation:**  
A candidate's work location changes during onboarding.

**Task:**  
Ensure the restarted process aligns with new country/state requirements.

**Action:**  
I would reassess compliance, documents, notifications, data collection, tax/payroll implications, security, and integrations. SAP's older Onboarding 1.0 restart behavior provides an example of location-driven step restart for certain US states, illustrating why location changes can materially alter process behavior. citeturn0search2 For current ONB, I would validate the supported configuration and release-specific behavior rather than copying legacy behavior blindly.

**Result:**  
The restarted journey reflects the new jurisdictional requirements.

**Architect signal:** Location is a potential **process-routing attribute**, not merely an address field.

---

## Q19. How would you measure whether restarting is working well?

**Situation:**  
The organization experiences frequent restarts.

**Task:**  
Determine whether restart is solving problems or revealing upstream design defects.

**Action:**  
I would track:
- restart rate;
- restart reason;
- restart by source;
- restart by field changed;
- time from initiation to restart;
- repeated restart rate;
- restart-related task rework;
- data-error rate;
- restart completion time;
- notification failures;
- duplicate-process incidents.

I would use the data to identify upstream Recruiting, data-quality, process, or governance problems.

**Result:**  
Restart becomes a measurable operational control and a signal for continuous improvement.

**Architect signal:** A high restart rate may be a **symptom**, not a success metric.

---

## Q20. You are the Lead Onboarding Architect. Explain your complete Restarting Onboarding strategy.

**Situation:**  
A global enterprise needs resilient onboarding that can recover from data changes and process exceptions without creating duplicates or excessive rework.

**Task:**  
Design a controlled restart architecture.

**Action:**
1. Define when restart is valid.
2. Distinguish full process restart from targeted step restart.
3. Identify restart-triggering fields.
4. Establish source-of-truth ownership.
5. Configure manual restart permissions.
6. Configure ONB2Process post-save rules where automation is justified.
7. Compare original and current values to detect genuine changes.
8. Enable Recruiting updates only where required.
9. Prevent restart loops and duplicate onboarding.
10. Notify affected participants.
11. Preserve audit information and restart reasons.
12. Revalidate compliance, documents, tasks, and integrations.
13. Use targeted step restart where the platform supports it.
14. Test lifecycle boundaries and negative scenarios.
15. Monitor restart rate and root causes.
16. Use restart analytics to improve upstream data quality and process design.

**Result:**  
The enterprise gets a resilient onboarding lifecycle that can recover from meaningful changes without turning every correction into a full reimplementation of the employee journey.

**Architect signal:**

> **Restart only what changed, protect what is correct, preserve the audit trail, and eliminate the root cause.**

---

# 6. Restart Decision Matrix

| Scenario | Preferred response |
|---|---|
| Critical onboarding data incorrect | Full restart if eligible |
| Recruiting validation failure | Correct source → Restart |
| Start Date changed | Automatic/manual restart based on design |
| Hiring Manager changed | Automatic/manual restart where task ownership requires it |
| Address changed only | Assess downstream impact; avoid blanket full restart |
| Signed document has stale data | Targeted e-signature restart where supported |
| Process already hired | Validate alternative correction path |
| Duplicate initiation | Stop duplicate; reconcile process state |
| Notification failed | Fix notification independently |
| Same value saved again | Do not restart |
| Multiple restart triggers | Consolidate trigger ownership |
| Country/work-location changed | Reassess compliance/process impact |

---

# 7. Troubleshooting Master Loop

**IDENTIFY CHANGE → IDENTIFY SOURCE → CHECK PROCESS STATE → CHECK ELIGIBILITY → COMPARE OLD/NEW VALUE → CHECK TRIGGER RULES → DETERMINE RESTART SCOPE → EXECUTE → NOTIFY → RECONCILE → MONITOR**

### First questions in a restart incident

1. What changed?
2. Where did the change originate?
3. Is the process still open?
4. Is a full restart or step restart required?
5. Which rule triggered the restart?
6. Was the same event triggered elsewhere?
7. What was the original value?
8. What is the new value?
9. Were participants reassigned?
10. Did downstream systems receive duplicate events?

---

# 8. Architecture Decision Records

### ADR-01 — Restart scope
Use full restart only when the process requires re-execution; use targeted restart when supported.

### ADR-02 — Source-of-truth first
Correct the authoritative source before restarting.

### ADR-03 — Explicit trigger fields
Only business-critical changes should automatically trigger restart.

### ADR-04 — Old/new comparison
Automation must compare original and current values.

### ADR-05 — Single trigger ownership
Avoid multiple independent rules reacting to the same business event.

### ADR-06 — Duplicate prevention
Restart must not become an alternative path to duplicate onboarding.

### ADR-07 — Auditability
Record restart reason, actor, timestamp, and relevant source/change.

### ADR-08 — Continuous improvement
Analyze restart patterns to eliminate upstream causes.

---

# 9. Quality Gates

- [ ] Restart eligibility documented.
- [ ] Full vs targeted restart defined.
- [ ] Authorized restart roles defined.
- [ ] Restart-triggering fields identified.
- [ ] Source-of-truth ownership documented.
- [ ] Manual restart tested.
- [ ] Automatic restart tested.
- [ ] Old/new value comparison tested.
- [ ] Recruiting restart tested if applicable.
- [ ] Duplicate prevention tested.
- [ ] Restart-loop prevention tested.
- [ ] Notification behavior tested.
- [ ] Task reassignment tested.
- [ ] Compliance impact tested.
- [ ] Document impact tested.
- [ ] Integration impact tested.
- [ ] Audit trail tested.
- [ ] Negative scenarios tested.
- [ ] Restart KPIs defined.
- [ ] Recovery/runbook documented.

---

# 10. Anti-Patterns

### ❌ Restarting for every data change
Creates unnecessary process churn.

### ❌ Restarting before correcting the source
Guarantees repeated failures.

### ❌ Treating restart as duplicate onboarding
Creates inconsistent process instances.

### ❌ Ignoring restart eligibility
Can lead to unsupported lifecycle manipulation.

### ❌ Creating multiple restart rules for one field
Creates duplicate triggers and loops.

### ❌ Ignoring targeted restart capabilities
Causes unnecessary rework.

### ❌ Ignoring participant reassignment
Leaves tasks with the wrong owner.

### ❌ Ignoring downstream integrations
Can produce duplicate or conflicting transactions.

### ❌ Measuring only restart success
Does not reveal why restarts happen.

### ❌ Using restart to compensate for bad architecture
Moves the defect instead of solving it.

---

# 11. Rapid-Fire Interview Answers

**Why restart onboarding?**  
To recover from meaningful data changes or process errors while preserving a controlled lifecycle.

**What happens in a full manual restart?**  
The current process is canceled and a new onboarding process is initiated. citeturn0search7

**Where can restart be initiated manually?**  
From the Onboarding Dashboard for eligible in-progress processes. citeturn0search7

**What fields can drive automatic restart?**  
SAP documents Start Date (`targetDate`) and Hiring Manager (`manager`) as examples. citeturn0search13

**How is automatic restart configured?**  
A post-save business rule on ONB2Process can compare original/current values and trigger the restart event. citeturn0search13

**Can Recruiting changes trigger restart?**  
Yes, SAP documents the Allow Recruiting Updates setting for supported Recruiting-driven restart scenarios. citeturn0search13

**Does every restart repeat every step?**  
No. Targeted step restart capabilities can preserve previously completed steps.

**What is new in 1H 2026?**  
Complete e-Signature can be restarted independently for an open onboarding process. citeturn0search6turn0search9

**What is the biggest restart risk?**  
Restart loops and duplicate processes.

**What should be fixed before restart?**  
The authoritative source-data defect.

**What is the core principle?**  
Restart only what changed; protect what is correct.

---

# 12. Final Master Interview Answer

> "I design Restarting Onboarding as a controlled recovery architecture rather than a generic reset button. First, I distinguish a full process restart from a targeted step restart. A full restart is appropriate when a material data or lifecycle change requires the onboarding journey to be re-executed. A targeted restart is preferable when only one output, such as an e-signature document, needs regeneration.
>
> For full restart, I establish eligibility, source-of-truth ownership, authorized roles, restart reasons, and participant notification. For automation, I use ONB2Process post-save rules and compare original and current values so that only meaningful changes trigger restart. SAP documents Start Date and Hiring Manager as supported examples and also documents Recruiting-driven restart through Allow Recruiting Updates.
>
> I explicitly prevent restart loops by ensuring one event has one trigger owner. I also prevent duplicate onboarding through initiation governance and re-onboarding controls. After restart, I reconcile tasks, compliance, documents, notifications, Employee Central, integrations, and downstream systems.
>
> Finally, I measure restart frequency and reason patterns because a high restart rate often indicates upstream data-quality or process-design problems.
>
> My guiding principle is: **restart only what changed, protect what is correct, preserve the audit trail, and eliminate the root cause.**"

---

# 13. SuccessLabs Mastery Lens

## KNOW
Understand full restart, targeted restart, ONB2Process, error flow, trigger events, and restart eligibility.

## DESIGN
Design restart scope, trigger conditions, security, audit, notifications, and recovery paths.

## DELIVER
Configure manual and automatic restart capabilities and validate end-to-end behavior.

## SOLVE
Diagnose data errors, restart loops, duplicate triggers, participant issues, and downstream effects.

## INFLUENCE
Explain when restart is appropriate versus when the source data or process design must be fixed.

## TRANSFORM
Turn restart from reactive support activity into a governed resilience mechanism.

---

# 14. 22-Pahacha Coverage

| Pahacha | Restarting Onboarding mastery |
|---|---|
| 01 Domain Foundation | Onboarding lifecycle recovery |
| 02 Product & Technology Knowledge | Restart, ONB2Process, BPE |
| 03 Business Process & Operating Context | Data-change recovery |
| 04 Data & Information Model | Original/current process values |
| 05 Requirement Analysis | Restart criteria |
| 06 Solution Design Awareness | Full vs targeted recovery |
| 07 Configuration / Development Awareness | Post-save rules |
| 08 Architecture & Integration Awareness | Recruiting/EC/downstream impacts |
| 09 Implementation Awareness | Restart configuration |
| 10 Migration & Data Readiness | Data correction and revalidation |
| 11 Testing & Quality Awareness | Restart regression testing |
| 12 Release, Adoption & Support | 1H 2026 targeted restart |
| 13 Troubleshooting Mindset | Change-to-restart diagnosis |
| 14 Incident & Defect Awareness | Error-flow recovery |
| 15 Complex Scenario Thinking | Multiple simultaneous changes |
| 16 Optimization & Continuous Improvement | Restart analytics |
| 17 Stakeholder Management | HR/Recruiting/manager |
| 18 Communication & Collaboration | Restart notifications |
| 19 Advisory & Trusted SME | Restart-scope decisions |
| 20 Automation, AI & Intelligent Products | Event-driven restart |
| 21 Transformation & Business Value | Reduced rework |
| 22 Strategic Mastery & Future Vision | Resilient lifecycle architecture |

---

# 15. SuccessLabs Architecture Streams

1. **Enterprise Architect** — lifecycle resilience and governance
2. **Business Architect** — recovery operating model
3. **Integration Architect** — Recruiting/EC/event integration
4. **Domain Architect** — employee lifecycle state
5. **Cloud & Infrastructure Architect** — reliable event processing
6. **Application & Process Architect** — restart orchestration
7. **AI Architect** — anomaly detection and intelligent restart recommendations
8. **Security Architect** — restart authorization
9. **Industry Architect** — jurisdiction-sensitive restart impacts
10. **Data Architect** — old/new value and audit data
11. **UI/UX Architect** — restart confirmation and transparency
12. **Technology Architect** — business rules, events, APIs, integrations

---

# 16. Master Loop

**DETECT CHANGE → VALIDATE SOURCE → ASSESS IMPACT → CHOOSE SCOPE → CHECK ELIGIBILITY → TRIGGER → REVALIDATE → REASSIGN → NOTIFY → RECONCILE → LEARN**

This is the core mental model for senior SAP SuccessFactors Onboarding Restart interviews.

---

## SAP Source Alignment

- SAP SuccessFactors Onboarding Academy — **Restarting Onboarding Processes**, Unit 16. citeturn0search1turn0search0
- SAP Help — **Restart Onboarding Manually**, including eligibility, cancellation of current process, new process initiation, notifications, and restart history. citeturn0search7
- SAP Help — **Validating the Exception Data in the Onboarding Process**, including error flow, data correction, and Restart. citeturn0search3
- SAP Learning — **Triggering Onboarding Processes Automatically**, including Start Date/Hiring Manager changes and Recruiting Updates. citeturn0search13
- SAP Help — **Creating a Business Rule for Restarting the Onboarding Process**. citeturn0search5
- SAP Learning / SAP Release Information — **Restart e-Signature Step for Document Flows**, 1H 2026. citeturn0search6turn0search9
- SAP Help — **Selecting no Additional Limit for Initiating Onboarding**, including re-onboarding blackout period. citeturn0search12

**Interview mantra:**

> **Restart only what changed. Protect what is correct. Preserve the audit trail. Eliminate the root cause.**

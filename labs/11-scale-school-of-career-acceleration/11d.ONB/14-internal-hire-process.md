# 14. Internal Hire Process

## SAP SuccessFactors Onboarding — Scenario-Based Interview & Architecture Guide

> **Purpose:** Master the Internal Hire process as an end-to-end employee-mobility architecture. An Internal Hire is not simply a shortened external-hire process: the person already exists as an employee, so identity, employment history, effective dating, transfer events, Recruiting/Employee Central data alignment, manager changes, compensation changes, permissions, tasks, and downstream integrations must be designed together.

**SAP Academy alignment:** SAP SuccessFactors Onboarding Academy Unit 14 is **Using the Internal Hire Process**. SAP documents three initiation paths: Employee Central transfer events, Recruiting internal-hire candidates, and an external ATS. For Recruiting initiation, SAP requires field mapping, identification of internal hires, and a business rule; the existing user ID is used and employee data is validated against Employee Central. citeturn0search2turn0search6

---

# 1. What is the Internal Hire Process?

The Internal Hire process supports an employee moving into a new role within the organization when changes to job role, compensation, manager, or organizational context justify an onboarding/crossboarding experience.

SAP documents these initiation sources:

1. **Employee Central** — a transfer/job-change event triggers the process.
2. **SAP SuccessFactors Recruiting** — an internal candidate accepts an offer and onboarding is initiated.
3. **External ATS** — an internal candidate can be identified and passed into the internal-hire process. citeturn0search2turn0search14

The key architectural difference from an external hire is:

> **The person already exists. The architecture must preserve identity and employment history while preparing the employee for the new role.**

---

# 2. Architecture View

```text
             INTERNAL MOBILITY EVENT
                      |
          +-----------+------------+
          |                        |
     Employee Central         Recruiting / ATS
          |                        |
          +-----------+------------+
                      |
                      v
              Internal Hire
                 Routing
                      |
                      v
             Data Validation
                      |
                      v
             Review / Correction
                      |
          +-----------+------------+
          |                        |
    Hiring Manager             Employee
      Tasks                    Tasks
          |                        |
          +-----------+------------+
                      |
                      v
              Effective-Dated
               Job Change
                      |
                      v
             Employee Central
                      |
        +-------------+-------------+
        |             |             |
      Payroll       Identity      Integrations
        |             |             |
        +-------------+-------------+
                      |
                      v
              New Role / Team
```

**Architectural principle:**

> **Preserve the person identity; change the employment context.**

---

# 3. Core Internal-Hire Concepts

## 3.1 Existing employee identity

The employee already has an existing user identity. SAP states that when the internal-hire process is initiated, the system uses the existing user ID. citeturn0search2

## 3.2 Transfer event

From Employee Central, a job transfer event can trigger the onboarding process.

## 3.3 Internal candidate identification

When initiated from Recruiting, the candidate must be identified as an internal hire and the process must distinguish it from an external new hire.

## 3.4 Effective dating

The new job, manager, compensation, location, or organizational assignment may take effect on a future date.

## 3.5 Crossboarding experience

The employee can receive tasks such as:

- Prepare for Day 1
- Know Your Key People
- Welcome/guide content
- Meetings
- Recommended links
- Manager-assigned tasks

SAP's current test script shows internal hires accessing the Onboarding Journey and reviewing Prepare for Day 1, venue, key people, and other optional tasks. citeturn0search0

---

# 4. 20 Scenario-Based Interview Questions — STAR Answers

## Q1. What is the difference between an internal hire and an external new hire?

**Situation:**  
A customer wants one onboarding process for both external recruits and employees transferring internally.

**Task:**  
Explain the architectural difference.

**Action:**  
I would explain that an external hire generally requires creation/establishment of a new employee identity and employment context, whereas an internal hire already has an employee identity. The internal process therefore focuses on the new job, manager, organization, compensation, access, and readiness while preserving existing identity and history. SAP explicitly states that the existing user ID is used for internal hires. citeturn0search2

**Result:**  
The customer understands why internal mobility should not be modeled as a duplicate employee creation.

**Architect signal:** Preserve identity; change context.

---

## Q2. An employee transfers to another department through Employee Central. How would you trigger onboarding?

**Situation:**  
An employee changes department and manager and needs a structured transition experience.

**Task:**  
Initiate Internal Hire from Employee Central.

**Action:**  
I would configure the appropriate transfer/job-change event and event reason. The manager or authorized HR user updates the effective-dated Job Information from the employee profile or Change Job and Compensation Info action. SAP documents that a Job Change event with an appropriate Transfer event reason can trigger internal-hire onboarding. citeturn0search14

**Result:**  
The internal-hire process starts with the employee's existing identity and the new effective-dated employment context.

**Architect signal:** Event reason is part of process orchestration, not merely descriptive metadata.

---

## Q3. A Recruiting candidate is actually an existing employee. How do you ensure Recruiting initiates Internal Hire rather than external onboarding?

**Situation:**  
An internal employee applies for a new position through Recruiting.

**Task:**  
Ensure the correct onboarding process is initiated.

**Action:**  
I would define an explicit internal-hire identification mechanism in Recruiting, map required fields to Onboarding, and configure a business rule that evaluates the internal-hire conditions. SAP recommends identifying the internal hire and configuring a business rule to initiate the internal-hire process. citeturn0search2

**Result:**  
The candidate is routed to the internal-hire journey rather than being treated as a brand-new employee.

**Architect signal:** Identity classification must happen before process routing.

---

## Q4. An internal hire is initiated from Recruiting. What happens to the employee's user ID?

**Situation:**  
The business expects a new user ID because the employee is moving to a new role.

**Task:**  
Protect identity continuity.

**Action:**  
I would explain that SAP documents use of the existing user ID for an internal hire. The process validates the employee data associated with that identity against Employee Central. citeturn0search2

**Result:**  
The employee retains identity continuity while job and organizational attributes change.

**Architect signal:** User identity and employment assignment are different architectural concepts.

---

## Q5. Recruiting and Employee Central contain conflicting employee data. How would you handle it?

**Situation:**  
An internal candidate's Recruiting record contains a different manager or job value than Employee Central.

**Task:**  
Prevent incorrect transfer data from reaching the employee record.

**Action:**  
I would validate field mappings and source-of-truth ownership, compare Recruiting and Employee Central values, and route discrepancies through the Review New Hire Data process where applicable. SAP documents data validation and review/correction for internal-hire processing and the use of Employee Central permissions for editable entities. citeturn0search13

**Result:**  
The final employee record is based on governed source data rather than whichever system happened to send the last value.

**Architect signal:** Every field needs a **source of truth**.

---

## Q6. An internal hire needs a different onboarding experience from an external hire. How would you design it?

**Situation:**  
External hires need identity creation, personal data collection, compliance, and other new-employee steps; internal hires mainly need role transition and team readiness.

**Task:**  
Avoid unnecessary onboarding steps for internal employees.

**Action:**  
I would use an Internal Hire-specific process design where the lifecycle differs materially. I would retain common readiness steps but exclude external-only activities where they are not required. I would also use onboarding programs for task variations such as key people, meetings, Day 1 preparation, and equipment. SAP documents onboarding programs as configurable task sets based on business criteria. citeturn0search4

**Result:**  
Internal employees receive a relevant crossboarding experience instead of repeating external-hire administration.

**Architect signal:** Optimize for **role transition**, not data re-entry.

---

## Q7. The employee's manager changes on the effective date. How do you ensure task ownership is correct?

**Situation:**  
The internal hire moves to a new manager.

**Task:**  
Ensure the correct manager receives and completes onboarding tasks.

**Action:**  
I would validate effective-dated manager data, task assignment logic, responsible groups, and the timing of task generation. I would test before and after the effective date and confirm that notifications resolve to the intended manager.

**Result:**  
The incoming manager receives the correct preparation tasks without exposing tasks to the previous manager.

**Architect signal:** Task ownership must respect **effective-dated organizational context**.

---

## Q8. An internal hire needs new equipment. How would you handle it?

**Situation:**  
An employee transfers from an office role to a technical role and requires different equipment.

**Task:**  
Provide the equipment without treating the person as a brand-new employee.

**Action:**  
I would configure the appropriate onboarding program/task set based on role or location and include equipment-request activities. SAP lists Request Equipment for New Hires among configurable onboarding-program tasks and supports program selection based on business criteria. citeturn0search4

**Result:**  
The employee receives only the equipment needed for the new role.

**Architect signal:** Reuse the onboarding orchestration model while tailoring task relevance.

---

## Q9. An internal hire's compensation changes with the transfer. What must you consider?

**Situation:**  
The employee receives a new compensation plan with the new role.

**Task:**  
Ensure the effective-dated compensation change aligns with the internal-hire lifecycle.

**Action:**  
I would validate the effective date, event reason, compensation data, payroll impact, approval workflow, and downstream replication. I would ensure the onboarding process does not become a competing source of truth for compensation that belongs in Employee Central.

**Result:**  
The employee receives the correct compensation from the effective date and downstream payroll remains aligned.

**Architect signal:** Onboarding can orchestrate readiness; Employee Central remains authoritative for employee master data where configured.

---

## Q10. An internal hire should not receive external-user onboarding credentials. How do you design security?

**Situation:**  
The employee already has a corporate identity and should not be provisioned as a new external user.

**Task:**  
Prevent duplicate or inappropriate identity creation.

**Action:**  
I would verify that the internal-hire process uses the existing user identity, configure appropriate RBP, validate target populations, and test that external-user creation paths are not triggered. SAP explicitly states that the existing user ID is used for internal hires. citeturn0search2

**Result:**  
Identity continuity is preserved and duplicate access paths are avoided.

**Architect signal:** Identity lifecycle must be designed before workflow configuration.

---

## Q11. An internal hire is initiated from an external ATS. What architecture would you use?

**Situation:**  
The customer uses an external ATS but manages employee master data in Employee Central.

**Task:**  
Support internal mobility without losing identity continuity.

**Action:**  
I would establish the ATS-to-Onboarding mapping, identify the internal-hire indicator, validate the employee/user identifier, configure the routing logic, and reconcile incoming data against Employee Central. SAP documents external ATS initiation as one of the internal-hire initiation paths. citeturn0search2

**Result:**  
The ATS can initiate the appropriate journey while Employee Central remains the employee master context.

**Architect signal:** Integration should carry **intent and identity**, not just fields.

---

## Q12. An internal employee accepts an offer in Recruiting but the Initiate Onboarding option is unavailable. What do you investigate?

**Situation:**  
The recruiter cannot initiate the internal-hire process.

**Task:**  
Identify whether the issue is candidate status, hire type, mapping, permissions, or rule configuration.

**Action:**  
I would verify that the candidate is in the required offer/ready-to-hire state, that the candidate is identified as an internal hire, that required fields are mapped, that the internal-hire business rule is configured, and that the recruiter has the required permissions. SAP's current Recruiting test script uses an Offer Accepted candidate with Type of Hire = Inter Company Transfer before Initiate Onboarding is available. citeturn0search1

**Result:**  
The issue is isolated to eligibility/configuration/authorization rather than treated as a generic Recruiting defect.

**Architect signal:** Troubleshoot **eligibility before functionality**.

---

## Q13. A transfer is future-dated. When should the internal-hire journey start?

**Situation:**  
An employee accepts a role beginning next month.

**Task:**  
Align onboarding activities with the effective transfer date.

**Action:**  
I would distinguish process initiation from employment-effective date. I would configure and test which activities should occur before the transfer and which should become active on/after the effective date. SAP's EC-based process uses the selected date for the Job Information change as the start date of the internal hire in the new job. citeturn0search14

**Result:**  
Preparation can begin in advance while the employee's official job assignment changes on the governed effective date.

**Architect signal:** Separate **readiness timeline** from **employment-effective timeline**.

---

## Q14. The employee's new manager wants to assign Day 1 tasks. How does the internal hire experience work?

**Situation:**  
The employee is moving into a new team and needs role-specific preparation.

**Task:**  
Give the employee an actionable transition experience.

**Action:**  
I would configure manager-owned onboarding tasks and verify that the internal hire sees the resulting journey. SAP's current internal-hire test script shows the internal hire accessing the Your Onboarding Guide and reviewing Prepare for Day 1, venue, key people, and other optional tasks. citeturn0search0

**Result:**  
The employee knows where to go, whom to contact, and what to prepare before joining the new team.

**Architect signal:** Internal onboarding should be **experience-led**, not form-led.

---

## Q15. An internal hire has incorrect job data. How do you control correction?

**Situation:**  
The new role's department or manager is incorrect in the onboarding data.

**Task:**  
Correct the data without creating unauthorized master-data changes.

**Action:**  
I would determine the source of the incorrect value, validate the supported review/correction process, and ensure the HR administrator or manager has only the required RBP permissions. SAP documents that Review New Hire Data can be created for discrepancies and that manager editability depends on Employee Data and Employee Central effective-dated permissions. citeturn0search13

**Result:**  
The data is corrected through a controlled process with traceability and appropriate authorization.

**Architect signal:** Data correction requires both **source-of-truth governance and security**.

---

## Q16. An internal transfer should not repeat compliance forms already satisfied by the employee. What would you do?

**Situation:**  
The employee has already completed organization-specific compliance activities as an existing employee.

**Task:**  
Avoid unnecessary duplication while ensuring legally required new-role or country-specific compliance.

**Action:**  
I would perform a requirement-by-requirement analysis rather than simply disabling all compliance. I would distinguish employee-level obligations from role/location/employment-change obligations and configure the internal-hire journey accordingly. Any country-specific legal requirement remains mandatory.

**Result:**  
The employee avoids unnecessary duplicate activity while the organization retains required compliance controls.

**Architect signal:** Compliance should be driven by **obligation**, not by hire-type alone.

---

## Q17. How would you test an Internal Hire process end to end?

**Situation:**  
A multinational customer is preparing an internal-mobility rollout.

**Task:**  
Prove the process across initiation, data, experience, security, and downstream systems.

**Action:**  
I would test:
- EC transfer initiation;
- Recruiting internal-hire initiation;
- external ATS initiation if applicable;
- existing user ID;
- effective dating;
- manager change;
- compensation change;
- data validation;
- task assignment;
- Day 1 experience;
- RBP;
- notifications;
- compliance;
- documents;
- payroll;
- integrations;
- cancellation/restart;
- negative authorization;
- cross-country variations.

SAP provides separate internal-hire test scripts for EC and Recruiting initiation. citeturn0search0turn0search1

**Result:**  
The organization has evidence that internal mobility works as an integrated lifecycle rather than only as a workflow demo.

**Architect signal:** Test the **person + employment + experience** model together.

---

## Q18. An internal hire process fails after the employee's manager changes. How do you troubleshoot it?

**Situation:**  
The process started correctly but later tasks are assigned to the wrong person or stop progressing.

**Task:**  
Identify whether effective dating or participant resolution caused the defect.

**Action:**  
I would reconstruct the timeline, inspect the effective-dated manager record, task assignment rule, responsible group, notification recipient, and process instance. I would compare the manager before and after the transfer effective date and test the same scenario with a controlled future-dated change.

**Result:**  
The defect is isolated to effective dating, task routing, participant resolution, or configuration.

**Architect signal:** In HR workflows, **time is a data dimension**.

---

## Q19. How would you measure Internal Hire success?

**Situation:**  
Leadership wants to know whether the internal mobility process is actually improving employee transitions.

**Task:**  
Define measurable business and operational outcomes.

**Action:**  
I would track:
- transfer-to-readiness cycle time;
- task completion before effective date;
- data correction rate;
- manager task completion;
- employee task completion;
- first-day readiness;
- onboarding exceptions;
- access/equipment readiness;
- payroll/HR master-data defects;
- internal mobility volume;
- process abandonment;
- employee experience feedback.

**Result:**  
The organization can evaluate both operational efficiency and employee experience.

**Architect signal:** Measure **time-to-readiness**, not just task completion.

---

## Q20. You are the Lead Onboarding Architect. Explain your complete Internal Hire strategy.

**Situation:**  
A global enterprise wants a scalable internal-mobility experience across Employee Central, Recruiting, ATS, Onboarding, payroll, identity, and downstream systems.

**Task:**  
Design a secure, effective-dated, experience-led internal-hire architecture.

**Action:**
1. Establish the internal-hire definition and eligible populations.
2. Identify all initiation channels: EC, Recruiting, ATS. citeturn0search2
3. Preserve the existing employee/user identity.
4. Define Employee Central as the source of truth for governed employee master data.
5. Configure transfer/job-change event reasons.
6. Map Recruiting/ATS fields to the internal-hire model.
7. Build deterministic internal-hire identification and routing.
8. Model effective dates explicitly.
9. Design Review New Hire Data and correction controls.
10. Configure role-appropriate manager and employee tasks.
11. Use onboarding programs for experience-specific activities.
12. Apply least-privilege RBP.
13. Validate compensation, payroll, identity, compliance, and integration impacts.
14. Test all initiation channels and negative scenarios.
15. Monitor time-to-readiness, data defects, task completion, and downstream exceptions.
16. Govern changes through release, security, and process-architecture controls.

**Result:**  
The organization gets a coherent internal-mobility architecture that preserves employee identity, aligns the new employment context, prepares the employee for the new team, and keeps downstream systems synchronized.

**Architect signal:**
> **Preserve the person. Change the context. Prepare the experience. Protect the data. Reconcile the ecosystem.**

---

# 5. Internal Hire Design Matrix

| Requirement | Preferred architecture |
|---|---|
| Employee changes role in EC | Transfer/job-change event |
| Internal employee applies through Recruiting | Internal candidate identification + rule |
| Internal employee enters through ATS | ATS internal-hire mapping + routing |
| Existing identity | Reuse existing user ID |
| New job effective next month | Effective-dated Job Information |
| New manager | Effective-dated manager + task routing |
| New compensation | EC compensation / payroll governance |
| Day 1 preparation | Onboarding Program/tasks |
| New equipment | Equipment task |
| New team contacts | Key People task |
| Data discrepancy | Review/correction workflow |
| Country-specific requirement | Controlled local configuration |
| External-only activity | Exclude where not required |
| Duplicate identity risk | Validate existing user identity |
| Reporting | Internal mobility + readiness KPIs |

---

# 6. Internal Hire Troubleshooting Master Loop

**IDENTIFY PERSON → IDENTIFY INITIATION SOURCE → VALIDATE INTERNAL-HIRE CLASSIFICATION → CHECK USER ID → CHECK EFFECTIVE DATE → CHECK EVENT REASON → VALIDATE SOURCE DATA → CHECK RBP → CHECK TASK ROUTING → CHECK NOTIFICATIONS → RECONCILE EC/ONB → CHECK DOWNSTREAM SYSTEMS**

### First questions in an incident

1. Is the person already an employee?
2. Which system initiated the process?
3. Was the candidate classified as Internal Hire?
4. Which user ID was used?
5. What is the effective transfer date?
6. Which event reason triggered the process?
7. Which fields came from Recruiting/ATS?
8. Which system is authoritative for the disputed field?
9. Who should own the task?
10. What does the Employee Central record show before and after the effective date?

---

# 7. Architecture Decision Records

### ADR-01 — Preserve existing identity
Internal Hire must not create a duplicate employee identity.

### ADR-02 — Employee Central as master context
Employee master data must have explicit source-of-truth ownership.

### ADR-03 — Explicit internal-hire classification
Recruiting/ATS must identify internal candidates deterministically.

### ADR-04 — Effective-date governance
Role, manager, compensation, and organization changes must respect effective dating.

### ADR-05 — Experience-led internal onboarding
Internal hires should receive only relevant transition activities.

### ADR-06 — Separate process from master-data ownership
Onboarding orchestrates readiness; governed employee master data remains authoritative in its designated system.

### ADR-07 — Least privilege
Data correction and process administration require controlled permissions.

### ADR-08 — Channel-independent auditability
EC, Recruiting, and ATS initiation must produce traceable lifecycle records.

---

# 8. Quality Gates

- [ ] Internal-hire definition approved.
- [ ] Eligible populations documented.
- [ ] EC initiation tested.
- [ ] Recruiting initiation tested.
- [ ] ATS initiation tested if applicable.
- [ ] Internal candidate identification tested.
- [ ] Existing user ID verified.
- [ ] Event reason verified.
- [ ] Effective date tested.
- [ ] Manager change tested.
- [ ] Compensation change tested.
- [ ] Data mappings validated.
- [ ] Review/correction process tested.
- [ ] RBP validated.
- [ ] Task routing validated.
- [ ] Day 1 experience validated.
- [ ] Notifications validated.
- [ ] Compliance requirements assessed.
- [ ] Payroll/integration reconciliation completed.
- [ ] Duplicate identity prevention tested.
- [ ] Negative scenarios passed.

---

# 9. Anti-Patterns

### ❌ Treating Internal Hire as a new external employee
Creates unnecessary data and identity complexity.

### ❌ Creating a new user ID
Breaks identity continuity when the existing employee identity should be retained.

### ❌ Ignoring effective dating
Creates incorrect manager, compensation, or organizational state.

### ❌ Allowing Recruiting to overwrite authoritative EC data blindly
Creates master-data conflicts.

### ❌ Repeating all external-hire compliance
Creates poor employee experience and unnecessary work where not legally required.

### ❌ Giving managers broad EC permissions
Creates master-data security risk.

### ❌ Ignoring payroll impact
Compensation/job changes may have payroll consequences.

### ❌ Using one generic task set
Fails to reflect the employee's new role and team.

### ❌ Ignoring ATS identity matching
Creates duplicate or misclassified hires.

---

# 10. Rapid-Fire Interview Answers

**What is Internal Hire?**  
A structured onboarding/crossboarding process for an existing employee moving to a new role.

**What are the three initiation sources?**  
Employee Central, Recruiting, and an external ATS. citeturn0search2

**Does Internal Hire create a new user ID?**  
SAP documents use of the existing user ID. citeturn0search2

**What triggers it from EC?**  
A configured transfer/job-change event and appropriate event reason.

**What identifies an internal hire in Recruiting?**  
A configured internal-hire indicator/field and business-rule logic.

**Why is effective dating important?**  
The new role, manager, compensation, and organization may become valid on a future date.

**Can internal hires receive Day 1 tasks?**  
Yes. SAP documents Prepare for Day 1, venue, key people, and other optional internal-hire tasks. citeturn0search0

**Should all external-hire steps be repeated?**  
No. Design based on actual business, data, and compliance obligations.

**What is the biggest identity risk?**  
Creating or routing to a duplicate user identity.

**What is the biggest data risk?**  
Unclear source-of-truth ownership between Recruiting, ATS, Onboarding, and Employee Central.

**What is the key troubleshooting technique?**  
Reconstruct the person + employment + effective-date timeline.

**What is the architectural mantra?**  
Preserve the person; change the context.

---

# 11. Final Master Interview Answer

> "I design Internal Hire as an employee-mobility architecture rather than a reduced version of external onboarding. The employee already exists, so the first principle is to preserve the existing identity and change the employment context through effective-dated Employee Central data.
>
> I begin by identifying the initiation source: Employee Central transfer event, Recruiting internal candidate, or external ATS. For Recruiting and ATS scenarios, I make internal-hire classification deterministic and establish field mappings and source-of-truth ownership. SAP documents that the existing user ID is used for internal hires.
>
> I then design the transition experience around the new role: manager tasks, Day 1 preparation, key people, meetings, equipment, and relevant compliance or documentation. I avoid repeating external-hire activities unless they are genuinely required. Employee Central remains authoritative for governed employee master data, while Onboarding orchestrates the readiness experience.
>
> Because internal mobility is heavily effective-dated, I test manager, compensation, location, organization, and job changes across the effective-date boundary. I secure data correction and administration through least-privilege RBP, reconcile Recruiting/ATS with Employee Central, and validate payroll, identity, integrations, notifications, and reporting.
>
> Finally, I monitor transfer-to-readiness cycle time, data correction rate, task completion, first-day readiness, and downstream exceptions.
>
> My guiding principle is: **preserve the person, change the context, prepare the experience, protect the data, and reconcile the ecosystem.**"

---

# 12. SuccessLabs Mastery Lens

## KNOW
Understand internal mobility, EC transfer events, Recruiting/ATS initiation, identity continuity, effective dating, and crossboarding.

## DESIGN
Design person + employment + process + experience architecture.

## DELIVER
Configure initiation, mapping, rules, tasks, security, and downstream integrations.

## SOLVE
Diagnose identity, effective-date, routing, data, task, and integration defects.

## INFLUENCE
Explain internal mobility architecture to HR, Recruiting, managers, payroll, security, and IT.

## TRANSFORM
Turn employee movement into a predictable, experience-led internal mobility journey.

---

# 13. 22-Pahacha Coverage

| Pahacha | Internal Hire mastery |
|---|---|
| 01 Domain Foundation | Internal mobility lifecycle |
| 02 Product & Technology Knowledge | EC, Recruiting, ATS, ONB |
| 03 Business Process & Operating Context | Transfer/crossboarding |
| 04 Data & Information Model | Person, employment, user ID, effective dating |
| 05 Requirement Analysis | Internal mobility requirements |
| 06 Solution Design Awareness | Person + employment architecture |
| 07 Configuration / Development Awareness | Event reasons, rules, mappings |
| 08 Architecture & Integration Awareness | EC/Recruiting/ATS/ONB/payroll |
| 09 Implementation Awareness | End-to-end configuration |
| 10 Migration & Data Readiness | Existing employee data continuity |
| 11 Testing & Quality Awareness | Cross-channel lifecycle testing |
| 12 Release, Adoption & Support | Employee transition support |
| 13 Troubleshooting Mindset | Timeline reconstruction |
| 14 Incident & Defect Awareness | Identity/data/routing failures |
| 15 Complex Scenario Thinking | Effective-dated transfer |
| 16 Optimization & Continuous Improvement | Time-to-readiness |
| 17 Stakeholder Management | HR/manager/Recruiting/payroll |
| 18 Communication & Collaboration | New-team readiness |
| 19 Advisory & Trusted SME | Internal vs external architecture |
| 20 Automation, AI & Intelligent Products | Intelligent mobility routing |
| 21 Transformation & Business Value | Internal talent mobility |
| 22 Strategic Mastery & Future Vision | Workforce agility |

---

# 14. SuccessLabs Architecture Streams

1. **Enterprise Architect** — internal mobility operating model
2. **Business Architect** — workforce movement and crossboarding
3. **Integration Architect** — EC/Recruiting/ATS/payroll/identity
4. **Domain Architect** — employee lifecycle
5. **Cloud & Infrastructure Architect** — platform reliability
6. **Application & Process Architect** — internal-hire process
7. **AI Architect** — intelligent mobility matching and anomaly detection
8. **Security Architect** — identity continuity and least privilege
9. **Industry Architect** — country-specific employment rules
10. **Data Architect** — employee/job/effective-dated data
11. **UI/UX Architect** — employee transition experience
12. **Technology Architect** — events, rules, APIs, integrations

---

# 15. Master Loop

**CLASSIFY PERSON → IDENTIFY SOURCE → PRESERVE IDENTITY → DEFINE NEW CONTEXT → EFFECTIVE-DATE → VALIDATE DATA → ORCHESTRATE EXPERIENCE → SECURE → RECONCILE → MEASURE**

This is the core mental model for senior SAP SuccessFactors Onboarding Internal Hire interviews.

---

## SAP Source Alignment

- SAP SuccessFactors Onboarding Academy — **Using the Internal Hire Process**, Unit 14. citeturn0search2turn0search6
- SAP Learning — **Onboarding a New Hire**, including EC and Recruiting internal-hire initiation. citeturn0search14
- SAP Help — **Initiate Onboarding of Internal Hire from Recruiting**, current 1H 2026 test script. citeturn0search1
- SAP Help — **Complete Onboarding Tasks for Internal Hire**, current test script. citeturn0search0
- SAP Help — **Setting Up Onboarding Programs**. citeturn0search4
- SAP Help — **Reviewing New Hire Data for a Rehire**, for data-review and permission concepts relevant to controlled correction. citeturn0search13

**Interview mantra:**

> **Preserve the person. Change the context. Prepare the experience. Protect the data. Reconcile the ecosystem.**

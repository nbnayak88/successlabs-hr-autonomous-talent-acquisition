# SAP SuccessFactors Recruiting Management (RCM) — SCALE Interview Preparation

## Step 13 — Employee Referral Process

**Objective:** Design employee-referral configuration, referral ownership, eligibility, notifications, candidate handoff, tracking, attribution and recruiter operating controls so referrals are easy to submit, governed correctly and measurable through the full recruiting lifecycle.

## How to Think About Employee Referrals

An employee referral is not simply another application source.

Treat it as a **talent-source journey with an employee relationship attached**:

**REFERRER → REQUISITION → REFERRAL → CANDIDATE → APPLICATION → SCREENING → SELECTION → OFFER/HIRE → ATTRIBUTION → RECOGNITION/REWARD**

For every referral design, ask:

1. Who is eligible to refer?
2. Which requisitions are eligible for referral?
3. Who owns the referral before the candidate applies?
4. How is the referrer identified and preserved?
5. Can multiple employees refer the same person?
6. What happens when a referred candidate is already in the system?
7. What does the candidate see before applying?
8. Who owns the candidate after the referral becomes an application?
9. Which notifications go to the referrer, candidate and recruiter?
10. How is referral attribution preserved throughout the lifecycle?
11. How are referral outcomes measured?
12. What happens when the referral is withdrawn, rejected, hired or transferred?

SAP Recruiting supports employee referral scenarios in which employees can refer candidates to job requisitions, and referral status can be tracked before and after application. SAP guidance also documents referral ownership behavior and the **Forwarded** state for referred candidates who have not yet applied. Validate exact referral features and configured behavior against the current tenant and implementation scope. citeturn427065search0turn427065search9

## Referral Design Formula

**REFERRER → ELIGIBILITY → REQUISITION → REFERRAL → FORWARDED/APPLIED → OWNERSHIP → NOTIFICATION → PIPELINE → ATTRIBUTION → OUTCOME → MEASURE**

---

# 20 Detailed Scenario-Based Questions & STAR Answers

## Scenario 1 — Referral Ownership by Requisition and Recruiting Assignment

**Situation:** A referred candidate enters the system before a recruiter is assigned to the requisition.

**Questions**
1. Who owns the referral initially?
2. Should ownership follow the requisition or the recruiter?
3. What happens when recruiter ownership changes?
4. How would you preserve referral attribution?

### STAR Answer

**S:** A referral exists before a stable recruiter assignment.

**T:** Keep both recruiting ownership and employee-referral attribution clear.

**A:** I would separate **candidate/referral ownership** from **requisition recruiting ownership**, define the initial referral owner according to the operating model and ensure recruiter reassignment does not overwrite the original referrer.

**R:** The correct recruiter can manage the candidate while the employee referral remains attributable to the original employee.

**L:** Referral attribution and recruiting ownership are different dimensions.

**E:** Ownership matrix, referral-attribution test and reassignment scenario.

---

## Scenario 2 — Who Can Submit a Referral?

**Situation:** The organization wants referrals from active employees but wants to restrict certain populations from participating in the program.

**Questions**
1. How would you define referral eligibility?
2. Which employee attributes could determine eligibility?
3. How would you prevent unauthorized referral submission?
4. How would you handle an employee whose employment status changes?

### STAR Answer

**S:** The referral program has defined participant eligibility.

**T:** Ensure only eligible employees can use the program.

**A:** I would document eligibility policy, map it to supported access controls, test eligible/ineligible populations and define what happens when an employee moves to an ineligible status.

**R:** Referral participation follows the approved program policy.

**L:** Referral eligibility is a security and operating-model rule, not merely a UI preference.

**E:** Eligibility matrix and negative-access test pack.

---

## Scenario 3 — Referral to an Ineligible Requisition

**Situation:** An employee attempts to refer someone to a requisition that is closed or excluded from referrals.

**Questions**
1. How should the system behave?
2. Who decides referral eligibility?
3. How would you prevent stale or ineligible referral links?
4. How would you test the boundary?

### STAR Answer

**S:** A requisition is visible in some context but should not accept new referrals.

**T:** Prevent invalid referrals.

**A:** I would define referral-eligible requisition criteria and validate requisition state before accepting the referral. I would also test closed, paused, expired and otherwise excluded requisitions.

**R:** Referrals enter only valid recruiting processes.

**L:** Referral availability must follow requisition lifecycle.

**E:** Eligibility decision table and closed-requisition tests.

---

## Scenario 4 — Referred Candidate Is Already in the System

**Situation:** An employee refers someone who already has a candidate profile and previous application.

**Questions**
1. Should a new candidate profile be created?
2. How would you preserve referral attribution?
3. How should the existing recruiting history be handled?
4. What should the referrer be told?

### STAR Answer

**S:** The referred person already exists in Recruiting.

**T:** Avoid duplicate candidate identity while preserving the new referral event.

**A:** I would resolve the existing candidate identity, preserve the referral source as a new attribution/event where appropriate and keep prior application history intact. I would ensure the referrer receives only the information permitted by the referral process.

**R:** No duplicate candidate profile is created and the referral remains traceable.

**L:** Referral duplication and candidate-identity duplication are different problems.

**E:** Identity-match result, referral-attribution record and multi-application test.

---

## Scenario 5 — Multiple Employees Refer the Same Candidate

**Situation:** Three employees refer the same person to the same requisition.

**Questions**
1. Who receives referral attribution?
2. Can multiple referrals remain visible?
3. How would you prevent reward/recognition disputes?
4. How would you document the rule?

### STAR Answer

**S:** Multiple employees submit referrals for the same candidate.

**T:** Establish a deterministic referral-attribution policy.

**A:** I would define whether the program uses first-valid-referral, confirmed-primary-referrer or another approved policy, then preserve the referral history while identifying the authoritative attribution for downstream recognition or reward processes.

**R:** The organization avoids ambiguous ownership and disputes.

**L:** Referral attribution needs an explicit business rule before the first edge case occurs.

**E:** Multi-referrer decision matrix and attribution test.

---

## Scenario 6 — Referral Before Candidate Application

SAP documents a **Forwarded** referral state for a candidate who has been referred but has not yet applied, with referral ownership reflected in the referral process. citeturn427065search9

**Situation:** An employee refers a candidate, but the candidate has not completed an application.

**Questions**
1. How should the referral be tracked?
2. What should the recruiter see?
3. What should the employee see?
4. How would you distinguish referral from application?

### STAR Answer

**S:** A referral exists before a candidate application is submitted.

**T:** Preserve the referral journey without pretending an application exists.

**A:** I would track the referral in its supported pre-application state, such as Forwarded where applicable, keep referral ownership visible to authorized users and distinguish the referral record from the later application transaction.

**R:** Recruiters can follow up with referred candidates without corrupting application metrics.

**L:** Referral initiation and application submission are different funnel events.

**E:** Referral/application state model and pre-application test.

---

## Scenario 7 — Referral Notification to Employee

**Situation:** An employee wants confirmation that the referral was successfully submitted.

**Questions**
1. What notification should be sent?
2. What information can the employee receive?
3. How would you avoid exposing sensitive candidate details?
4. What happens if the referral is later rejected?

### STAR Answer

**S:** The organization wants to keep employees engaged in the referral program.

**T:** Provide useful status communication without exposing confidential recruiting information.

**A:** I would define the employee communication journey, limit details to permitted referral status information, and create explicit notification points for submission and approved status transitions.

**R:** Employees receive appropriate visibility while candidate privacy is protected.

**L:** Referral transparency should not become candidate-data exposure.

**E:** Employee-notification matrix and privacy tests.

---

## Scenario 8 — Candidate Referral Invitation

**Situation:** The employee refers a friend and the candidate receives an invitation to apply.

**Questions**
1. What should the candidate message contain?
2. How should the referral link be controlled?
3. How would you avoid duplicate application creation?
4. How would you measure referral-to-application conversion?

### STAR Answer

**S:** A referred candidate needs to move from referral to application.

**T:** Create a clear candidate journey and preserve referral attribution.

**A:** I would define the referral invitation content, candidate identifier/link behavior, application handoff and source attribution, then test complete and abandoned journeys.

**R:** More referred candidates can convert into traceable applications.

**L:** The handoff from referral to application is a key funnel boundary.

**E:** Referral-to-application funnel and attribution test.

---

## Scenario 9 — Referral Ownership Changes After Recruiter Assignment

**Situation:** A requisition moves from one recruiter to another after several employee referrals are already in progress.

**Questions**
1. Who should own the candidate now?
2. Should the original referrer change?
3. What notifications should be generated?
4. How would you preserve reporting?

### STAR Answer

**S:** Operational ownership changes while referral history remains active.

**T:** Transfer recruiting work without changing referral attribution.

**A:** I would update the recruiting owner according to the requisition/candidate operating model while keeping the original referrer immutable for attribution.

**R:** The new recruiter can act while referral reporting remains accurate.

**L:** Operational ownership is mutable; referral origin should be governed independently.

**E:** Ownership-transfer matrix and historical attribution report.

---

## Scenario 10 — Referral Status and Candidate Pipeline

**Situation:** Referral statuses and applicant statuses are confusing recruiters because they appear to represent the same journey.

**Questions**
1. What is the difference?
2. Which status should drive recruiting metrics?
3. How do referral states relate to application states?
4. How would you simplify the operating model?

### STAR Answer

**S:** Referral and application statuses are being mixed.

**T:** Separate sourcing journey from recruiting transaction.

**A:** I would model referral status as the employee-referral funnel and applicant status as the candidate application's recruiting lifecycle. Once an application exists, recruiting pipeline metrics should use the application grain.

**R:** Sourcing analytics and recruiting pipeline analytics become clearer.

**L:** Referral and application are different analytical layers.

**E:** Referral/application state map and KPI definitions.

---

## Scenario 11 — Referral Source Attribution

**Situation:** Talent acquisition leadership wants to know whether referrals produce better hiring outcomes than job boards or career-site applications.

**Questions**
1. How would you preserve source attribution?
2. At what grain should referral metrics be measured?
3. How would you avoid double-counting candidates?
4. Which outcomes matter?

### STAR Answer

**S:** Leadership wants to evaluate referral effectiveness.

**T:** Create reliable source analytics.

**A:** I would distinguish referral events, referred candidates and applications, preserve the referral source throughout the relevant lifecycle and report conversion, time-to-hire, offer acceptance and hire outcomes at clearly defined grains.

**R:** Leadership can compare referral performance consistently with other sources.

**L:** Source attribution must survive the full recruiting lifecycle.

**E:** Source-lineage model and referral KPI dashboard.

---

## Scenario 12 — Referral Candidate Withdraws

**Situation:** A referred candidate withdraws after Interview.

**Questions**
1. What happens to the referral record?
2. Should the referrer be notified?
3. How should the outcome be reported?
4. What candidate information can be shared?

### STAR Answer

**S:** The candidate exits the recruiting process after referral.

**T:** Close the application while preserving referral attribution and privacy.

**A:** I would record the candidate's application outcome, retain referral-source history and send only approved high-level referral status information to the employee.

**R:** Recruiting and referral analytics remain accurate without exposing confidential details.

**L:** Referral attribution survives the candidate outcome.

**E:** Withdrawal/referral closure scenario and privacy validation.

---

## Scenario 13 — Referral Candidate Gets Rejected

**Situation:** The referred candidate is not selected after screening.

**Questions**
1. Should the employee see the rejection reason?
2. What status should the referral show?
3. How would you keep the employee engaged without exposing confidential information?
4. What reporting should exist?

### STAR Answer

**S:** A referral ends unsuccessfully.

**T:** Close the referral responsibly and protect candidate confidentiality.

**A:** I would apply the supported referral outcome, separate internal disposition data from employee-facing communication and report referral conversion without exposing restricted decision detail.

**R:** The referral program remains transparent at the appropriate level.

**L:** Referral communication needs a privacy boundary.

**E:** Referral-outcome matrix and notification test.

---

## Scenario 14 — Referral Candidate Is Hired

**Situation:** A referred candidate is successfully hired.

**Questions**
1. How should the referral be closed?
2. What downstream tracking is required?
3. How should the employee reward/recognition process be triggered if applicable?
4. What data should be retained?

### STAR Answer

**S:** A referred candidate reaches hire.

**T:** Complete the referral lifecycle and trigger any downstream recognition/reward process.

**A:** I would preserve the referrer attribution, link the final application outcome to the referral, trigger downstream referral processing where supported and reconcile the hired population.

**R:** The referral can be measured from submission through hire.

**L:** Referral programs create value only when attribution survives the full lifecycle.

**E:** Referral-to-hire reconciliation and downstream handoff evidence.

---

## Scenario 15 — Employee Referral and Privacy

**Situation:** An employee refers a former colleague and asks the recruiter for updates throughout the hiring process.

**Questions**
1. What information can the employee receive?
2. What should remain confidential?
3. How would you design notifications?
4. What is the risk of over-sharing?

### STAR Answer

**S:** Referrers want visibility into their referral.

**T:** Balance employee engagement with candidate privacy.

**A:** I would define a minimal referral-status communication model, separating high-level referral progress from candidate-specific evaluation, compensation, interview feedback or disposition detail.

**R:** Referrers stay informed without becoming unauthorized recruiting users.

**L:** Being the referrer does not make an employee part of the candidate's recruiting team.

**E:** Privacy classification and employee-communication matrix.

---

## Scenario 16 — Referral Program for Internal Mobility

**Situation:** The organization wants employees to refer colleagues to internal opportunities.

**Questions**
1. How does internal referral differ from external referral?
2. What security considerations exist?
3. Should current manager visibility change?
4. How would you model the program?

### STAR Answer

**S:** The referral concept is being extended to internal talent movement.

**T:** Support internal mobility without exposing sensitive employee information.

**A:** I would establish a separate internal-referral policy, clearly define who can refer whom, preserve employee-data security and test visibility across employee, recruiter and manager roles.

**R:** Internal mobility can use referral mechanics without weakening HR privacy controls.

**L:** Internal referral is not simply external referral with a different button.

**E:** Internal-referral security model and role matrix.

---

## Scenario 17 — Referral Notification Failure

**Situation:** Employees receive inconsistent notifications after referrals are submitted.

**Questions**
1. How would you troubleshoot?
2. What event should drive the message?
3. How would you prevent duplicate messages?
4. What evidence proves recovery?

### STAR Answer

**S:** Referral submission succeeds but communication is unreliable.

**T:** Restore predictable referral correspondence.

**A:** I would trace referral event → notification trigger → referrer recipient → template → token resolution → delivery and compare successful and failed cases.

**R:** The communication problem is isolated and corrected.

**L:** Referral notification needs the same event-lineage discipline as candidate communication.

**E:** Notification trace and regression evidence.

---

## Scenario 18 — Referral Campaign and High Volume

**Situation:** The organization launches a referral campaign for 1,000 open positions.

**Questions**
1. How would you scale the program?
2. What referral rules should be standardized?
3. How would you monitor abuse or duplication?
4. What KPIs should leadership see?

### STAR Answer

**S:** Referral volume is expected to increase sharply.

**T:** Scale participation without losing attribution or data quality.

**A:** I would standardize eligibility, requisition availability, attribution, duplicate handling, notifications and campaign tracking; monitor referral volume, duplicate rates, referral-to-application conversion and downstream hire outcomes.

**R:** The campaign scales while referral data remains trustworthy.

**L:** High-volume referral programs need source governance and monitoring.

**E:** Campaign dashboard, duplicate report and referral funnel.

---

## Scenario 19 — Referral Attribution Conflict at Hire

**Situation:** The candidate was referred by Employee A, later contacted through another source, and eventually hired through a recruiter pipeline.

**Questions**
1. Which source should receive credit?
2. How would you resolve competing attribution?
3. What should the reporting model preserve?
4. How would you prevent disputes?

### STAR Answer

**S:** Multiple recruiting sources influence one candidate journey.

**T:** Preserve source history while applying the organization's attribution policy.

**A:** I would preserve all relevant source events but determine the primary referral attribution using the documented attribution rule, such as first-valid referral where that policy applies.

**R:** Source analytics remain auditable and disputes are reduced.

**L:** Attribution should be policy-driven, not decided after the hire.

**E:** Source-event history and attribution decision record.

---

## Scenario 20 — Enterprise Employee Referral Operating Model

**Situation:** A global organization has a large employee population, thousands of open roles and substantial referral volume.

**Questions**
1. How would you standardize the referral process?
2. What should be global?
3. What may vary locally?
4. How would you govern attribution?
5. Which KPIs indicate a healthy referral program?

### STAR Answer

**S:** Referral activity is becoming a strategic talent source.

**T:** Establish a scalable operating model with consistent governance.

**A:** I would standardize eligibility principles, referral states, ownership, attribution, notifications, privacy controls, recruiter handoff and KPI definitions while allowing controlled local program differences.

**R:** The organization can measure and improve referrals consistently across markets.

**L:** Referral is a sourcing operating model, not just a form.

**E:** Referral governance framework, attribution policy, program dashboard and quarterly review.

---

# Employee Referral Architecture View

## End-to-End Referral Journey

**EMPLOYEE**
→ Eligible Referrer

**REQUISITION**
→ Referral-eligible opportunity

**REFERRAL**
→ Candidate introduced

**FORWARDED**
→ Candidate has been referred but has not yet applied, where supported

**APPLICATION**
→ Candidate enters recruiting process

**PIPELINE**
→ Screening / Interview / Offer

**OUTCOME**
→ Rejected / Withdrawn / Hired

**ATTRIBUTION**
→ Referral remains connected to outcome

**DOWNSTREAM**
→ Recognition / Reward / Workforce analytics where applicable

The key principle:

> **Referral source is part of the candidate journey, but referral ownership is not the same as recruiting ownership.**

---

# Referral Data Model

| Data Category | Example | Grain | Key Design Question |
|---|---|---|---|
| Referrer | Employee ID | Referral | Who introduced the candidate? |
| Referral | Referral ID | Referral | What referral event occurred? |
| Requisition | Requisition ID | Referral/Application | Which job was referred? |
| Candidate | Candidate ID | Candidate | Who is the person? |
| Referral State | Forwarded / Applied | Referral | Where is the referral journey? |
| Application | Application ID | Application | Has a recruiting transaction started? |
| Attribution | Primary referrer/source | Referral/Application | Who receives source credit? |
| Ownership | Recruiter/team | Recruiting | Who operates the candidate process? |
| Notification | Event/template | Referral | Who gets informed? |
| Outcome | Hire/Reject/Withdraw | Application | What happened? |
| Reward/Recognition | Eligibility/result | Referral | Is a downstream program triggered? |
| Analytics | Conversion/time/hire | Derived | What business value did referrals create? |

---

# Referral Operating Model

## Step 1 — DISCOVER

Employee finds a referral-eligible requisition.

## Step 2 — REFER

Employee submits candidate information through the supported referral process.

## Step 3 — FORWARD

Candidate receives the referral invitation/handoff where applicable.

## Step 4 — APPLY

Candidate submits an application.

## Step 5 — HANDOFF

Recruiting team takes operational ownership.

## Step 6 — SELECT

Candidate progresses through screening/interviews.

## Step 7 — DECIDE

Candidate is hired, rejected or exits.

## Step 8 — ATTRIBUTE

Referral relationship is preserved.

## Step 9 — RECOGNIZE

Any eligible referral reward/recognition workflow proceeds.

## Step 10 — MEASURE

Referral performance is analyzed.

---

# Referral Eligibility Matrix

| Dimension | Example Question |
|---|---|
| Employee Status | Is the referrer eligible? |
| Requisition | Is this job referral-eligible? |
| Relationship | Is the candidate relationship permitted? |
| Conflict | Is there an employment/procurement conflict? |
| Geography | Are local program rules different? |
| Candidate State | Is the candidate already known/applied? |
| Attribution | Which referral gets credit? |
| Timing | Is the referral within the program window? |

Actual eligibility rules must follow the organization's approved referral policy and applicable local requirements.

---

# Referral Notification Matrix

| Event | Referrer | Candidate | Recruiter |
|---|---|---|---|
| Referral submitted | Confirmation | Invitation where applicable | Awareness |
| Candidate applies | High-level update where permitted | Application confirmation | Action |
| Screening | Limited status where permitted | Process communication | Action |
| Interview | Limited status | Interview communication | Action |
| Rejection | High-level outcome if permitted | Rejection communication | Close |
| Hire | Recognition/reward notification if applicable | Hiring communication | Close |
| Referral error | Correction request | As applicable | Resolution |

The exact communication set should follow privacy and referral-policy requirements.

---

# Referral KPI Framework

| KPI | Why It Matters |
|---|---|
| Referral Volume | Participation |
| Eligible Referral Rate | Program reach |
| Referral-to-Application Conversion | Candidate engagement |
| Referral-to-Screen Conversion | Quality of referred talent |
| Referral-to-Interview Conversion | Selection quality |
| Referral-to-Offer Conversion | Funnel effectiveness |
| Referral-to-Hire Conversion | Business outcome |
| Time-to-Application | Referral journey speed |
| Time-to-Hire | Recruiting efficiency |
| Duplicate Referral Rate | Data/process quality |
| Attribution Conflict Rate | Governance quality |
| Referral Share of Hires | Strategic source contribution |
| Referral Candidate Quality | Downstream value |
| Referral Program Engagement | Employee participation |

---

# Referral Testing Matrix

| Test Type | Scenario |
|---|---|
| Eligibility | Eligible employee submits referral |
| Negative | Ineligible employee attempts referral |
| Requisition | Closed job cannot accept referral |
| Existing Candidate | Referral matches existing profile |
| Duplicate | Multiple employees refer same candidate |
| Forwarded | Candidate is referred but has not applied |
| Apply | Referral converts to application |
| Ownership | Recruiter assignment changes |
| Notification | Referrer receives appropriate message |
| Privacy | Referrer cannot see restricted candidate data |
| Rejection | Referral closes correctly |
| Withdrawal | Candidate withdraws |
| Hire | Referral-to-hire attribution preserved |
| Bulk | Referral campaign |
| Attribution | Multiple sources |
| Regression | Referral configuration change |

---

# Common Employee Referral Anti-Patterns

### 1. Referral equals recruiter ownership
The employee who refers someone should not automatically gain recruiting access.

### 2. Referral equals candidate identity
A referral event should not create duplicate candidate identities.

### 3. No attribution policy
Competing referrals create disputes.

### 4. Referrer sees confidential recruiting information
Employee participation does not imply recruiter permissions.

### 5. Referral ends when candidate applies
The referral source needs to remain connected to the recruiting outcome where program policy requires.

### 6. No duplicate handling
The same candidate can be referred multiple times or already exist in Recruiting.

### 7. No separation of referral and application metrics
This distorts funnel reporting.

### 8. Global program with hidden local differences
Referral eligibility, privacy and reward processes may vary.

### 9. No recruiter handoff
Referrals can become orphaned before active recruiting begins.

### 10. Measure volume only
A large number of referrals does not automatically indicate sourcing value.

---

# Employee Referral Validation Checklist

Before go-live, verify:

- [ ] Referral eligibility rules are approved.
- [ ] Referral-eligible requisitions are defined.
- [ ] Referrer identity is captured.
- [ ] Referral ownership is defined.
- [ ] Recruiting ownership is separate from referral attribution.
- [ ] Existing candidate matching is tested.
- [ ] Duplicate-referral policy is documented.
- [ ] Pre-application/Forwarded state is validated where applicable. citeturn427065search9
- [ ] Referral-to-application handoff is tested.
- [ ] Referral source attribution persists through the lifecycle.
- [ ] Recruiter handoff is defined.
- [ ] Referrer notifications are approved.
- [ ] Candidate communications are approved.
- [ ] Privacy boundaries are tested.
- [ ] Rejection and withdrawal behavior is defined.
- [ ] Hire attribution is reconciled.
- [ ] Recognition/reward downstream process is defined where applicable.
- [ ] Referral campaign/bulk scenarios are tested.
- [ ] KPI definitions are approved.
- [ ] Attribution conflicts have a resolution policy.
- [ ] Reporting grain is documented.
- [ ] Post-go-live referral governance is assigned.

---

# Senior Consultant Rapid-Fire — STAR Mini-Answers

### 1. What is the difference between referral ownership and recruiter ownership?
**S:** An employee introduces a candidate, but a recruiter manages the hiring process.  
**T:** Preserve both relationships.  
**A:** Keep referral attribution with the employee and operational ownership with the recruiting team.  
**R:** Clear accountability.  
**L:** Source and operations are separate dimensions.  
**E:** Ownership matrix.

### 2. What is the Forwarded state?
**S:** A candidate has been referred but has not applied.  
**T:** Track the referral without inflating application counts.  
**A:** Use the supported pre-application referral state and distinguish it from an application.  
**R:** Accurate funnel.  
**L:** Referral and application are different events.  
**E:** Referral lifecycle test.

### 3. What if the candidate already exists?
**S:** Referral matches an existing candidate.  
**T:** Avoid duplicate identity.  
**A:** Match the candidate and preserve the referral event/attribution.  
**R:** Clean profile and accurate source.  
**L:** Identity resolution and attribution are separate.  
**E:** Duplicate test.

### 4. What if two employees refer the same candidate?
**S:** Multiple referrals exist.  
**T:** Determine source credit.  
**A:** Apply approved attribution policy and retain referral history.  
**R:** Fair, auditable attribution.  
**L:** Attribution needs governance.  
**E:** Conflict matrix.

### 5. Should employees see candidate status?
**S:** Referrers want updates.  
**T:** Preserve privacy.  
**A:** Provide only approved high-level referral status.  
**R:** Engagement without data exposure.  
**L:** Referrer does not equal recruiter.  
**E:** Communication matrix.

### 6. How do referrals affect recruiting analytics?
**S:** Leadership wants source comparison.  
**T:** Preserve source lineage.  
**A:** Track referral event → application → outcome.  
**R:** Referral performance is measurable.  
**L:** Attribution must survive the funnel.  
**E:** Source lineage report.

### 7. How do you handle referral rejection?
**S:** Candidate is not selected.  
**T:** Close referral appropriately.  
**A:** Keep the application outcome, preserve referral attribution and send limited referrer communication.  
**R:** Accurate closure.  
**L:** Candidate decision data remains private.  
**E:** Rejection test.

### 8. What happens when recruiter ownership changes?
**S:** Recruiter changes.  
**T:** Transfer work without changing attribution.  
**A:** Update operational owner, preserve original referrer.  
**R:** No attribution loss.  
**L:** Ownership can change; source should remain traceable.  
**E:** Transfer scenario.

### 9. What should trigger recognition/reward?
**S:** Referred candidate is hired.  
**T:** Trigger downstream program correctly.  
**A:** Define eligible outcome and handoff event.  
**R:** Accurate program processing.  
**L:** Reward logic needs explicit eligibility.  
**E:** Hire-to-reward reconciliation.

### 10. How do you scale referrals?
**S:** Referral volume increases.  
**T:** Preserve data quality and governance.  
**A:** Standardize eligibility, attribution, duplicate handling and reporting.  
**R:** Scalable program.  
**L:** Scale requires source governance.  
**E:** Referral campaign dashboard.

### 11. How do you handle an ineligible requisition?
**S:** Employee tries to refer to a closed job.  
**T:** Prevent invalid referral.  
**A:** Enforce referral-eligible requisition conditions.  
**R:** Clean referral pipeline.  
**L:** Referral availability follows job lifecycle.  
**E:** Eligibility test.

### 12. Why separate referral and application metrics?
**S:** Referral exists before application.  
**T:** Avoid false funnel counts.  
**A:** Measure both grains separately.  
**R:** Accurate sourcing analytics.  
**L:** Referral is a source event; application is a recruiting transaction.  
**E:** KPI model.

### 13. How do you prevent referral privacy breaches?
**S:** Referrer requests detailed candidate updates.  
**T:** Limit information exposure.  
**A:** Define approved high-level communications only.  
**R:** Candidate privacy protected.  
**L:** Participation does not grant recruiting access.  
**E:** Privacy test.

### 14. What is the biggest referral data risk?
**S:** Source attribution can be lost during recruiting.  
**T:** Preserve the referral relationship.  
**A:** Carry source/referral identity through application and outcome reporting.  
**R:** Reliable referral analytics.  
**L:** Attribution is a lifecycle concern.  
**E:** Source-lineage test.

### 15. How do you future-proof the referral program?
**S:** New countries and employee populations are added.  
**T:** Keep the referral model extensible.  
**A:** Govern the core referral model while allowing controlled regional rules and reward variations.  
**R:** Adaptable program architecture.  
**L:** Stable source semantics support expansion.  
**E:** Referral roadmap.

---

# Final RCM Employee Referral Process Master Answer

When asked:

**“How would you design the Employee Referral Process in SAP SuccessFactors Recruiting?”**

Answer:

> **“I treat employee referral as a sourcing journey connected to the recruiting lifecycle rather than as a simple application source. I first define who is eligible to refer and which requisitions participate, then design the referral object, ownership, pre-application state, candidate handoff and recruiter transition. I explicitly separate the employee's referral attribution from the recruiter's operational ownership and define how existing candidates, duplicate referrals and competing attribution are handled. I then design notifications for the referrer and candidate while protecting confidential recruiting information. Throughout the process I preserve referral attribution through application, screening, interview, offer and hire so leadership can measure referral-to-application, referral-to-hire and quality outcomes. Finally, I establish governance for eligibility, privacy, attribution, recognition/reward handoff, reporting and continuous improvement. My objective is a referral model that is easy for employees to use, secure for candidates, operationally clear for recruiters and measurable as a strategic talent source.”**

## Master Loop

**EMPLOYEE → ELIGIBILITY → REQUISITION → REFERRAL → FORWARDED/APPLIED → OWNERSHIP → NOTIFICATION → PIPELINE → ATTRIBUTION → OUTCOME → RECOGNITION → MEASURE → GOVERN → IMPROVE**

## Interview Signal

A strong RCM consultant does not answer only:

**“How do I configure employee referrals?”**

They answer:

**“Who can refer, which hiring opportunities accept referrals, how is the candidate handed to Recruiting, who owns the process, how is referral attribution preserved, what can the employee see, and how do we prove referrals create measurable hiring value?”**

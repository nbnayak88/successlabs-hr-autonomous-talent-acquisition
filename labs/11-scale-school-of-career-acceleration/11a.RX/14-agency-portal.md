# SAP SuccessFactors Recruiting Management (RCM) — SCALE Interview Preparation

## Step 14 — Agency Portal

**Objective:** Design agency access, job posting, candidate submission, ownership, permissions, privacy, duplicate handling and agency performance tracking while protecting recruiter control and candidate data.

## How to Think About the Agency Portal

An agency portal is not simply an external login.

Treat it as a **controlled partner ecosystem around Recruiting**:

**AGENCY → ACCESS → ELIGIBLE REQUISITION → JOB POSTING → CANDIDATE SUBMISSION → OWNERSHIP → REVIEW → PIPELINE → OUTCOME → ATTRIBUTION → PERFORMANCE → GOVERNANCE**

For every agency design, ask:

1. Which agencies are authorized?
2. Which agency users can access which requisitions?
3. Which jobs are eligible for agency submission?
4. What can agency users see and edit?
5. What candidate data can they submit?
6. How is agency ownership captured?
7. What happens when a candidate already exists?
8. What happens when multiple agencies submit the same candidate?
9. When does recruiter ownership begin?
10. What candidate information must remain private from agencies?
11. How are duplicate or unauthorized submissions prevented?
12. How is agency performance measured?
13. What happens when an agency user leaves or loses authorization?
14. How are agency relationships, permissions and submissions governed after go-live?

SAP Recruiting documentation includes agency-related capabilities for sharing job requisitions with agencies, agency access, candidate submission and recruiting process integration. Exact portal behavior, supported agency features and permissions should be validated against the current tenant and implementation scope.

## Agency Design Formula

**AGENCY → AUTHENTICATE → ELIGIBILITY → JOB ACCESS → SUBMIT → OWNERSHIP → REVIEW → SCREEN → SELECT → OUTCOME → ATTRIBUTION → MEASURE → GOVERN**

---

# 20 Detailed Scenario-Based Questions & STAR Answers

## Scenario 1 — Agency Submission to a Requisition

**Situation:** An approved requisition is opened to three preferred agencies.

**Questions**
1. How would you design agency access?
2. What information should agencies see?
3. Who owns the submitted candidate?
4. How would you prevent unauthorized job submission?

### STAR Answer

**S:** The company wants external agencies to source candidates for selected requisitions.

**T:** Enable agency participation without exposing the broader recruiting environment.

**A:** I would define agency eligibility, approved users, requisition-level visibility, submission permissions and candidate-data boundaries. I would ensure agencies see only the job information necessary to source and submit candidates.

**R:** Agencies can contribute candidates while internal recruiters retain control of the recruiting process.

**L:** Agency access should be scoped to the business relationship and specific recruiting need.

**E:** Agency role matrix, requisition-access matrix and negative-access tests.

---

## Scenario 2 — Agency-Eligible Requisition vs Internal-Only Requisition

**Situation:** Some requisitions may use agencies while others must remain internal or direct-sourcing only.

**Questions**
1. How would you identify agency-eligible requisitions?
2. Who should control the setting?
3. How would you prevent agencies from seeing restricted jobs?
4. How would you test changes from internal-only to agency-enabled?

### STAR Answer

**S:** Requisitions have different sourcing strategies.

**T:** Enforce agency eligibility consistently.

**A:** I would define an agency-eligibility attribute/process, document ownership and configure agency access around that control. I would test enabled, disabled, closed and changed-state scenarios.

**R:** Agencies access only approved requisitions.

**L:** Sourcing strategy is part of security and operating model.

**E:** Eligibility decision table and boundary tests.

---

## Scenario 3 — Agency User Authentication and Access

**Situation:** An agency has multiple recruiters who should have different levels of access.

**Questions**
1. How would you model agency users?
2. Should every agency recruiter see every agency requisition?
3. What happens when an agency user leaves?
4. How would you perform access reviews?

### STAR Answer

**S:** Agency staff have different responsibilities and employment states.

**T:** Maintain least-privilege external access.

**A:** I would define agency organization, user roles, scope of access and lifecycle events for onboarding, transfers and offboarding. I would establish periodic agency access certification.

**R:** External access remains aligned with the commercial relationship.

**L:** Agency identity lifecycle is part of Recruiting security.

**E:** Agency user catalogue, access matrix and quarterly access-review evidence.

---

## Scenario 4 — Candidate Submission Data Model

**Situation:** Agencies submit resumes, contact details, experience and screening information.

**Questions**
1. What data should agencies provide?
2. Which fields should be mandatory?
3. Which data should remain recruiter-controlled?
4. How would you validate submitted data?

### STAR Answer

**S:** Agency submissions vary in completeness and format.

**T:** Standardize candidate intake without forcing agencies to populate internal-only data.

**A:** I would classify fields into agency-supplied, system-derived and recruiter-managed data, define required submission attributes and validate formats, duplicates and requisition context.

**R:** Candidate intake becomes more consistent and easier to review.

**L:** External submission forms should capture what the partner can reasonably know; internal decision data should remain internal.

**E:** Submission data matrix and validation test pack.

---

## Scenario 5 — Candidate Already Exists

**Situation:** An agency submits a candidate who already has a profile and a previous application.

**Questions**
1. Should the agency create another candidate?
2. How would you preserve agency attribution?
3. Who should see previous applications?
4. What happens to duplicate submissions?

### STAR Answer

**S:** Agency submission matches an existing candidate.

**T:** Avoid duplicate identity while preserving source and history.

**A:** I would use approved candidate matching/duplicate controls, retain agency source attribution and keep prior application history subject to internal access permissions.

**R:** Candidate identity remains clean while agency contribution remains traceable.

**L:** Candidate identity, source attribution and recruiter ownership are separate concepts.

**E:** Duplicate-resolution record and agency-source reconciliation.

---

## Scenario 6 — Multiple Agencies Submit the Same Candidate

**Situation:** Two approved agencies submit the same candidate for the same requisition.

**Questions**
1. Who owns the candidate submission?
2. How would you determine attribution?
3. How would you resolve commercial disputes?
4. What should recruiters see?

### STAR Answer

**S:** Multiple agencies claim the same candidate.

**T:** Apply a deterministic attribution rule.

**A:** I would define the organization's candidate-submission ownership policy, such as first valid submission or another approved contractual rule, preserve both submission events and apply the primary attribution rule consistently.

**R:** Recruiters get one controlled candidate record and attribution disputes are reduced.

**L:** Ownership policy must exist before high-volume submissions create conflicts.

**E:** Duplicate-agency decision matrix and submission history.

---

## Scenario 7 — Agency Ownership vs Recruiter Ownership

**Situation:** Agencies should be able to track their submitted candidate, but internal recruiters need to own the hiring decision.

**Questions**
1. How would you separate ownership?
2. What can the agency see after submission?
3. What does recruiter ownership control?
4. How would you test the boundary?

### STAR Answer

**S:** External partners and internal recruiters both need visibility, but for different purposes.

**T:** Preserve internal decision authority while maintaining partner transparency.

**A:** I would define agency submission ownership as source/relationship information and recruiter ownership as operational control over the application pipeline. Agency users would not inherit internal recruiting authority.

**R:** Internal recruiters remain accountable for decisions while agencies can track permitted submission progress.

**L:** Partnership visibility is not equivalent to recruiting authority.

**E:** Ownership matrix and external/internal role tests.

---

## Scenario 8 — Agency Sees Too Much Candidate Data

**Situation:** Agency users can view candidate information that should remain internal.

**Questions**
1. What is the immediate action?
2. Which access layers would you inspect?
3. How would you assess impact?
4. How would you prevent recurrence?

### STAR Answer

**S:** External users have excessive candidate visibility.

**T:** Contain exposure and restore least privilege.

**A:** I would restrict the affected access path, identify exposed data, inspect agency role/permissions and target population, then correct the external access model and perform privacy regression.

**R:** Candidate information is limited to the intended agency-facing dataset.

**L:** External partner access requires stronger boundary testing than internal access.

**E:** Access incident record, exposure assessment and security regression.

---

## Scenario 9 — Agency Job Posting

**Situation:** Agencies should be able to see and work on selected jobs but must not change the approved requisition content.

**Questions**
1. How would you design posting access?
2. What fields should agencies see?
3. Can they alter job details?
4. How would you verify the boundary?

### STAR Answer

**S:** Agencies need job information to source candidates.

**T:** Provide sufficient context without allowing unauthorized changes to the approved hiring need.

**A:** I would define a read-only or appropriately restricted representation of the requisition, separate sourcing actions from requisition administration and test edit attempts.

**R:** Agencies can source accurately without changing internal recruiting configuration.

**L:** Agency sourcing access should not become requisition ownership.

**E:** Job visibility matrix and negative edit tests.

---

## Scenario 10 — Agency Candidate Submission to Wrong Requisition

**Situation:** An agency accidentally submits a candidate to the wrong requisition.

**Questions**
1. How should the error be corrected?
2. Should the candidate be duplicated?
3. How would you preserve history?
4. What preventive control would you introduce?

### STAR Answer

**S:** The candidate was submitted to an incorrect job.

**T:** Correct the recruiting transaction without corrupting candidate identity.

**A:** I would identify the supported correction or re-submission process, preserve the candidate record, close/withdraw the incorrect application as appropriate and document the source correction.

**R:** Candidate data remains intact and the correct application is established.

**L:** Correct the transaction, not the person.

**E:** Correction workflow and audit evidence.

---

## Scenario 11 — Agency Candidate Status Visibility

**Situation:** Agencies want to know whether their candidate is still under review, interviewed or rejected.

**Questions**
1. What status can they see?
2. What information should remain hidden?
3. How would you avoid exposing internal disposition reasons?
4. How would you design agency communication?

### STAR Answer

**S:** Agencies require enough feedback to manage their relationship with the client.

**T:** Provide useful status visibility without exposing confidential hiring decisions.

**A:** I would define an agency-facing status subset and separate it from detailed internal applicant statuses and disposition reasons.

**R:** Agencies receive actionable progress information without accessing internal evaluation details.

**L:** External status is a curated representation of internal state.

**E:** Agency-status mapping and privacy tests.

---

## Scenario 12 — Agency Candidate Withdrawal

**Situation:** The agency asks to withdraw a submitted candidate.

**Questions**
1. Who should control the withdrawal?
2. What happens to the application?
3. How should the recruiter be notified?
4. How do you preserve audit history?

### STAR Answer

**S:** The partner wants to withdraw a candidate from consideration.

**T:** Respect partner input while protecting internal recruiting records.

**A:** I would determine whether withdrawal is an agency-authorized action, require the correct permission, record the reason/source and ensure internal recruiting can see the event.

**R:** The candidate exits through a controlled path.

**L:** External users can initiate business events without owning the entire lifecycle.

**E:** Withdrawal permission matrix and audit evidence.

---

## Scenario 13 — Agency Submission Quality Is Poor

**Situation:** Many agency submissions are missing required information and contain low-quality resumes.

**Questions**
1. How would you diagnose the root cause?
2. What could be improved through configuration?
3. What belongs in the commercial/operating agreement?
4. How would you measure improvement?

### STAR Answer

**S:** Agency submissions create excessive recruiter rework.

**T:** Improve submission quality at the source.

**A:** I would analyze missing fields, duplicate rates, screening pass rate and recruiter correction effort, then improve submission requirements, validation and agency guidance while addressing partner performance through the operating model.

**R:** Recruiter effort declines and submission quality improves.

**L:** Portal configuration and partner management must work together.

**E:** Submission-quality dashboard and agency scorecard.

---

## Scenario 14 — Agency Access After Contract Ends

**Situation:** An agency contract expires but its users still have active access.

**Questions**
1. What should happen immediately?
2. How would you identify affected data?
3. How would you handle active candidates?
4. How would you prevent recurrence?

### STAR Answer

**S:** Commercial authorization ends while technical access remains active.

**T:** Remove external access without losing legitimate candidate history.

**A:** I would disable or revoke agency users according to the approved offboarding process, preserve candidate/application records and transfer operational ownership where required.

**R:** External access is removed while recruiting continuity is preserved.

**L:** Agency lifecycle must connect commercial governance to identity governance.

**E:** Offboarding record, access review and candidate-handover evidence.

---

## Scenario 15 — Agency Submission SLA

**Situation:** Contracted agencies must submit suitable candidates within agreed turnaround times, but performance is inconsistent.

**Questions**
1. What metrics would you track?
2. How would you distinguish agency delay from recruiter delay?
3. How would you create transparency?
4. What improvement actions would you take?

### STAR Answer

**S:** Agency performance varies materially.

**T:** Make partner performance measurable.

**A:** I would track submission response time, candidate quality, recruiter acceptance, interview conversion, offer conversion and hire outcomes, separating agency-controlled time from internal recruiting time.

**R:** Agency performance becomes objectively measurable.

**L:** Partner governance needs shared process metrics.

**E:** Agency SLA dashboard and performance scorecard.

---

## Scenario 16 — Agency and Internal Candidate Duplicate

**Situation:** An agency submits a candidate who also applied directly through the careers site.

**Questions**
1. Which source receives credit?
2. How would you preserve both source events?
3. What should the recruiter see?
4. How would you avoid duplicate candidate records?

### STAR Answer

**S:** One candidate enters through multiple sourcing channels.

**T:** Preserve source history while avoiding duplicate identity.

**A:** I would match the candidate profile, preserve both source events, apply the organization's attribution policy and keep one governed candidate/application model.

**R:** Source history is complete and candidate identity remains clean.

**L:** Multiple source events can lead to one person without creating multiple identities.

**E:** Source-event matrix and duplicate-resolution evidence.

---

## Scenario 17 — Agency Candidate Privacy and Documents

**Situation:** Agencies upload resumes and documents containing sensitive candidate information.

**Questions**
1. Who should access the documents?
2. What retention rules apply?
3. Can agencies download internal documents?
4. How would you test document privacy?

### STAR Answer

**S:** Agency-submitted documents contain sensitive candidate information.

**T:** Protect documents throughout the external-to-internal lifecycle.

**A:** I would classify documents, define upload/view/download permissions, apply retention/privacy policy and test agency and internal-user access separately.

**R:** Agencies can submit required documents without gaining inappropriate downstream access.

**L:** Candidate documents create a separate privacy surface from structured candidate fields.

**E:** Document-access matrix and negative tests.

---

## Scenario 18 — Agency Candidate Moves to Offer

**Situation:** An agency candidate reaches offer stage.

**Questions**
1. Should agency access continue?
2. What information should be visible?
3. How would you protect compensation data?
4. What handoff should occur?

### STAR Answer

**S:** An externally sourced candidate progresses into an internally controlled stage.

**T:** Reduce external access as decision sensitivity increases.

**A:** I would define lifecycle-based agency visibility, restrict compensation/approval information and transition operational ownership fully to internal Recruiting at the appropriate stage.

**R:** Agency involvement remains visible for attribution without exposing sensitive offer information.

**L:** External access should follow business need and reduce as decision sensitivity rises.

**E:** Lifecycle access matrix and offer-stage privacy tests.

---

## Scenario 19 — Agency Candidate Hired and Attribution

**Situation:** A candidate submitted by an agency is hired.

**Questions**
1. How would you preserve agency attribution?
2. What downstream data is needed?
3. How would you support agency performance reporting?
4. What happens if multiple agencies claimed the candidate?

### STAR Answer

**S:** The agency-sourced candidate reaches hire.

**T:** Preserve source attribution and complete downstream partner reporting.

**A:** I would retain the authoritative agency submission record, link it to the final application outcome and ensure the agreed attribution policy is applied where multiple submissions exist.

**R:** Agency ROI and sourcing performance can be measured reliably.

**L:** Source attribution should survive from submission through hire.

**E:** Agency-to-hire reconciliation and attribution record.

---

## Scenario 20 — Enterprise Agency Operating Model

**Situation:** A global enterprise works with hundreds of recruiting agencies across countries and business units.

**Questions**
1. How would you standardize agency access?
2. What should vary by country/contract?
3. How would you govern agency users?
4. How would you monitor quality, privacy and performance?
5. How would you continuously improve the ecosystem?

### STAR Answer

**S:** External recruiting partners are numerous and heterogeneous.

**T:** Create a scalable agency operating model without creating uncontrolled access or configuration complexity.

**A:** I would standardize agency onboarding, user roles, requisition eligibility, candidate submission data, privacy controls, ownership, attribution, notification and performance metrics while allowing controlled contractual/local variations.

**R:** Agencies integrate into Recruiting through consistent, measurable and secure controls.

**L:** Agency portals require product governance, identity governance and partner governance together.

**E:** Agency governance framework, access catalogue, performance dashboard and periodic partner review.

---

# Agency Portal Architecture View

## External-to-Internal Journey

**AGENCY**
→ Authenticate

**AUTHORIZATION**
→ Agency + User + Role + Contract Scope

**REQUISITION ACCESS**
→ Eligible Jobs Only

**JOB VIEW**
→ Controlled Requisition Data

**CANDIDATE SUBMISSION**
→ Candidate + Resume + Screening Data

**DUPLICATE CHECK**
→ Existing Candidate / Existing Application

**OWNERSHIP**
→ Agency Source + Internal Recruiter

**SCREENING**
→ Internal Recruiting Decision

**PIPELINE**
→ Interview / Offer / Outcome

**AGENCY VISIBILITY**
→ Approved External Status Only

**CLOSE**
→ Rejected / Withdrawn / Hired

**ATTRIBUTION**
→ Agency Source + Submission History

**MEASURE**
→ Quality / SLA / Conversion / Hire

---

# Agency Data Model

| Data Category | Example | Grain | Key Design Question |
|---|---|---|---|
| Agency | Agency ID | Agency | Which partner? |
| Agency User | External recruiter | Agency/User | Who is acting? |
| Contract Scope | Country/BU/service | Agency | Where is access valid? |
| Requisition | Requisition ID | Posting | Which jobs are available? |
| Submission | Submission ID | Agency Candidate | What did the agency submit? |
| Candidate | Candidate ID | Candidate | Who is the person? |
| Source | Agency attribution | Submission/Application | Who gets source credit? |
| Ownership | Recruiter / agency | Process | Who is accountable? |
| Documents | Resume | Candidate/Submission | Who can access? |
| Agency Status | Submitted/Under Review | Submission | What can partner see? |
| Applicant Status | Internal pipeline | Application | What is the recruiting state? |
| Outcome | Hire/Reject/Withdraw | Application | What happened? |
| Performance | SLA/quality/conversion | Derived | How is the partner measured? |

---

# Agency Access Control Model

**AGENCY**
→ Which organization?

**USER**
→ Which external person?

**ROLE**
→ What can the user do?

**CONTRACT/SCOPE**
→ Where can they operate?

**REQUISITION ELIGIBILITY**
→ Which jobs can they access?

**CANDIDATE DATA**
→ What can they see?

**ACTION**
→ View / Submit / Update / Withdraw where supported

**LIFECYCLE STATE**
→ Does access change as the candidate progresses?

**AUDIT**
→ What evidence remains?

---

# Agency Permission Matrix

| Action | Agency | Recruiter | Hiring Manager |
|---|---:|---:|---:|
| View assigned eligible jobs | ✓ | ✓ | ✓ |
| Submit candidate | ✓ | ✓ | Conditional |
| Edit requisition | No | ✓ | Controlled |
| View candidate submission | Own/assigned only | ✓ | Controlled |
| View internal disposition | No | ✓ | Controlled |
| Move applicant status | Normally no / governed | ✓ | Controlled |
| View compensation | Restricted | Controlled | Controlled |
| Approve offer | No | Controlled | Controlled |
| Withdraw own submission | Governed | ✓ | Controlled |
| View cross-agency candidate data | No | ✓ | Controlled |
| Export candidate data | Restricted/No | Controlled | Restricted |

The exact matrix must reflect the customer's configured agency capability, contracts and security policy.

---

# Agency Candidate Submission Lifecycle

**INVITED**
→ Agency has access

**VIEW**
→ Agency sees eligible requisition

**SUBMIT**
→ Candidate submitted

**VALIDATE**
→ Data/duplicate/eligibility checks

**RECEIVE**
→ Recruiting receives submission

**REVIEW**
→ Recruiter evaluates

**SCREEN**
→ Candidate enters internal pipeline

**SELECT**
→ Interview / Offer

**OUTCOME**
→ Hire / Reject / Withdraw

**ATTRIBUTE**
→ Agency source retained

**MEASURE**
→ Partner performance

---

# Agency Performance KPI Framework

| KPI | Why It Matters |
|---|---|
| Active Agencies | Ecosystem size |
| Active Agency Users | Partner participation |
| Submissions | Sourcing volume |
| Valid Submission Rate | Data quality |
| Duplicate Rate | Submission quality |
| Recruiter Acceptance Rate | Candidate relevance |
| Screening Conversion | Candidate quality |
| Interview Conversion | Selection quality |
| Offer Conversion | Funnel effectiveness |
| Hire Conversion | Business outcome |
| Time to Submit | SLA |
| Time to Recruiter Review | Internal responsiveness |
| Time to Hire | End-to-end efficiency |
| Attribution Conflict Rate | Governance |
| Privacy/Security Incidents | Risk |
| Agency ROI | Commercial effectiveness |

---

# Agency Testing Matrix

| Test Type | Scenario |
|---|---|
| Authentication | Valid agency user |
| Authorization | User accesses only contracted scope |
| Job Eligibility | Agency sees eligible requisition |
| Restricted Job | Agency cannot see internal-only job |
| Submission | Valid candidate submission |
| Duplicate | Existing candidate |
| Multiple Agency | Same candidate submitted twice |
| Ownership | Agency source + recruiter ownership |
| Privacy | Restricted internal data hidden |
| Document | Resume access |
| Status | Agency-facing status only |
| Withdrawal | Controlled agency withdrawal |
| Reassignment | Recruiter ownership changes |
| Contract End | Access removed |
| Offer | Sensitive data remains internal |
| Hire | Attribution preserved |
| Bulk | High-volume submissions |
| Integration | Submission data downstream |
| Regression | Permission/configuration changes |

---

# Common Agency Portal Anti-Patterns

### 1. Agency gets recruiter-level access
External access should be narrowly scoped.

### 2. Agency can see internal disposition details
Partner visibility should be curated.

### 3. Candidate identity is duplicated for every agency
Identity should remain controlled.

### 4. No competing-submission policy
Multiple agencies create ownership disputes.

### 5. No contract-to-access linkage
Expired commercial relationships leave active accounts.

### 6. Agency can edit approved requisitions
Sourcing access should not imply hiring-demand ownership.

### 7. Agency keeps offer-stage access
Sensitivity should increase controls as candidates progress.

### 8. Agency performance measured only by submissions
Volume is not quality.

### 9. No privacy monitoring
External partner access is a major data boundary.

### 10. No recruiter handoff
Submissions can remain operationally orphaned.

---

# Agency Portal Validation Checklist

Before go-live, verify:

- [ ] Agency eligibility rules are approved.
- [ ] Agency master/contract scope is documented.
- [ ] Agency user onboarding/offboarding exists.
- [ ] External roles and permissions are defined.
- [ ] Target populations/contract scopes are tested.
- [ ] Agency-eligible requisitions are controlled.
- [ ] Job visibility is limited.
- [ ] Submission data model is documented.
- [ ] Duplicate candidate handling is defined.
- [ ] Multiple-agency attribution policy exists.
- [ ] Recruiter ownership handoff is defined.
- [ ] Agency-facing status model is approved.
- [ ] Internal disposition data is protected.
- [ ] Candidate documents are protected.
- [ ] Offer-stage access is reduced appropriately.
- [ ] Contract-expiry access removal is tested.
- [ ] Submission withdrawal behavior is defined.
- [ ] Agency notifications are approved.
- [ ] Performance KPIs are defined.
- [ ] Integration/reconciliation is tested.
- [ ] Privacy/security testing is complete.
- [ ] Audit evidence is available.
- [ ] Periodic agency access certification is established.

---

# Senior Consultant Rapid-Fire — STAR Mini-Answers

### 1. What is the biggest agency portal principle?
**S:** Agencies need access without becoming internal recruiters.  
**T:** Preserve the boundary.  
**A:** Scope access by agency, user, contract, requisition and action.  
**R:** Secure external collaboration.  
**L:** Partner access is a separate trust zone.  
**E:** Agency access matrix.

### 2. How do you prevent agencies seeing every job?
**S:** Agencies support selected business areas.  
**T:** Limit visibility.  
**A:** Use eligibility/scope controls and test restricted jobs.  
**R:** Correct job visibility.  
**L:** Job eligibility is a security boundary.  
**E:** Visibility test.

### 3. Agency vs recruiter ownership?
**S:** Agency submits, recruiter hires.  
**T:** Separate source from operational responsibility.  
**A:** Track agency attribution and internal recruiter ownership independently.  
**R:** Clear accountability.  
**L:** Partner relationship is not recruiting authority.  
**E:** Ownership matrix.

### 4. What if an agency submits an existing candidate?
**S:** Candidate already exists.  
**T:** Avoid duplicate identity.  
**A:** Resolve identity, preserve agency source.  
**R:** Clean candidate model.  
**L:** Source and identity are separate.  
**E:** Duplicate test.

### 5. What if two agencies submit the same candidate?
**S:** Competing submissions occur.  
**T:** Apply attribution policy.  
**A:** Use documented rule and preserve submission history.  
**R:** Auditable attribution.  
**L:** Attribution policy must be explicit.  
**E:** Conflict matrix.

### 6. What should agency users see after submission?
**S:** Agency wants progress.  
**T:** Provide useful but safe visibility.  
**A:** Expose curated external statuses, not internal evaluation/disposition detail.  
**R:** Partner transparency without privacy leakage.  
**L:** External status is a controlled projection.  
**E:** Agency-status mapping.

### 7. What happens when contract ends?
**S:** Agency authorization expires.  
**T:** Remove access.  
**A:** Revoke users, preserve records and transfer active operational ownership.  
**R:** No orphaned external access.  
**L:** Partner lifecycle and identity lifecycle must connect.  
**E:** Offboarding evidence.

### 8. How do you secure candidate documents?
**S:** Agency uploads resumes.  
**T:** Prevent document leakage.  
**A:** Restrict document actions and test download/view boundaries.  
**R:** Appropriate document access.  
**L:** Documents need dedicated security controls.  
**E:** Document test.

### 9. How do you measure agency quality?
**S:** Submission volume varies.  
**T:** Measure business value.  
**A:** Track acceptance, screening, interview, offer and hire conversion plus SLA and duplicate rates.  
**R:** Evidence-based partner management.  
**L:** Quantity is not quality.  
**E:** Agency scorecard.

### 10. Should agency users see compensation?
**S:** Compensation is sensitive.  
**T:** Minimize exposure.  
**A:** Restrict it unless genuinely required for the agency process.  
**R:** Reduced risk.  
**L:** Need-to-know governs external data.  
**E:** Security test.

### 11. Can agencies edit requisitions?
**S:** Agencies need job information.  
**T:** Preserve approved hiring demand.  
**A:** Provide sourcing view, not uncontrolled requisition administration.  
**R:** Data integrity preserved.  
**L:** Sourcing access ≠ requisition ownership.  
**E:** Negative edit test.

### 12. How do you handle agency withdrawals?
**S:** Partner wants to withdraw candidate.  
**T:** Preserve internal control.  
**A:** Define authorized withdrawal behavior and audit it.  
**R:** Controlled candidate exit.  
**L:** External initiation needs internal governance.  
**E:** Withdrawal matrix.

### 13. How do you improve poor agency submissions?
**S:** Recruiters spend time correcting data.  
**T:** Improve source quality.  
**A:** Analyze error patterns, improve portal requirements and address partner performance.  
**R:** Less rework.  
**L:** Configuration and partner governance must work together.  
**E:** Submission-quality dashboard.

### 14. How do you handle an agency candidate reaching offer?
**S:** Sensitive process stage begins.  
**T:** Reduce external visibility.  
**A:** Retain attribution but restrict offer/compensation details and move operational control internal.  
**R:** Secure progression.  
**L:** Access should reduce as sensitivity rises.  
**E:** Lifecycle access matrix.

### 15. How do you future-proof agency integration?
**S:** More agencies and countries will be added.  
**T:** Avoid bespoke configuration for every partner.  
**A:** Standardize partner data model, access patterns, submission API/process boundaries and monitoring.  
**R:** Easier partner onboarding.  
**L:** Partner ecosystem needs reusable architecture.  
**E:** Agency onboarding blueprint.

---

# Final RCM Agency Portal Master Answer

When asked:

**“How would you design an Agency Portal for SAP SuccessFactors Recruiting?”**

Answer:

> **“I treat agency access as a separate partner trust zone around the Recruiting platform. I first define which agencies, users and requisitions are eligible, then design external roles, contracted scope, job visibility and candidate-submission permissions using least privilege. I separate agency source attribution from internal recruiter ownership, preserve candidate identity when agencies submit people who already exist in Recruiting, and establish a deterministic policy for competing agency submissions. I also define exactly what agencies can see after submission and progressively reduce sensitive visibility as a candidate moves toward offer and hire. From a process perspective, I design the complete agency journey from job access through submission, recruiter handoff, screening, outcome and attribution, with privacy and document controls built in. Finally, I measure submission quality, duplicate rate, recruiter acceptance, conversion, time-to-submit, hire outcomes, security incidents and agency ROI. My objective is to create a secure, scalable partner ecosystem where agencies can contribute efficiently without gaining access or authority beyond their contractual recruiting responsibility.”**

## Master Loop

**AGENCY → AUTHENTICATE → AUTHORIZATION → CONTRACT SCOPE → JOB ACCESS → SUBMIT → DUPLICATE CHECK → OWNERSHIP → SCREEN → PIPELINE → OUTCOME → ATTRIBUTION → MEASURE → GOVERN → IMPROVE**

## Interview Signal

A strong RCM consultant does not answer only:

**“How do I give an agency access?”**

They answer:

**“What is the agency allowed to see and do, for which jobs, for how long, how is candidate ownership and attribution handled, what privacy boundaries apply, and how do we prove the partner ecosystem is secure and delivering recruiting value?”**

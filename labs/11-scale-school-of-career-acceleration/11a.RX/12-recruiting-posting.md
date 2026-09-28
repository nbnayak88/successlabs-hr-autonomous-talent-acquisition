# SAP SuccessFactors Recruiting Management (RCM) — SCALE Interview Preparation

## Step 12 — Recruiting Posting & Job Advertising

**Objective:** Design posting profiles, permissions, job-board data, publishing rules, visibility, monitoring and advertising governance so approved requisitions reach the right talent channels accurately and measurably.

## How to Think About Recruiting Posting

Job advertising is not simply “publish the requisition.”

Treat it as a controlled distribution pipeline:

**APPROVED REQUISITION → POSTING PROFILE → CHANNEL/BOARD → JOB DATA MAPPING → ELIGIBILITY → PUBLISH → MONITOR → RECONCILE → CLOSE/REMOVE → MEASURE**

For every posting design, ask:

1. Is the requisition fully approved and publishable?
2. Which posting profile or channel strategy applies?
3. Which fields are sent to the external job board?
4. Who can publish, edit, unpublish or repost?
5. Which locations, countries and languages apply?
6. Are required job-board fields mapped correctly?
7. What happens when a board rejects the posting?
8. How are duplicates or stale advertisements detected?
9. How do we track visibility, traffic and application outcomes?
10. How do we prevent unapproved or unauthorized publication?

SAP's Recruiter Experience Academy includes job advertising as part of Recruiting configuration, following requisition preparation and approval. SAP's implementation guidance also emphasizes defining job-board configuration, advertising destinations and permissions as part of Recruiting implementation. citeturn427065search0turn427065search5

---

# 20 Detailed Scenario-Based Questions & STAR Answers

## Scenario 1 — Posting Failure

**Situation:** A fully approved requisition cannot be published to the selected job board.

**Questions**
1. What would you check first?
2. How would you distinguish requisition readiness from posting configuration?
3. What evidence would you collect?
4. How would you recover without bypassing approval?

### STAR Answer

**S:** The requisition is approved, but publication fails.

**T:** Restore publishing while preserving the approval and security controls.

**A:** I would verify requisition state, required posting data, posting permissions, posting profile, channel configuration, job-board requirements and integration/error messages. I would reproduce with a controlled requisition and compare a successful posting.

**R:** The failure is isolated to the correct layer and publication is restored without bypassing governance.

**L:** “Approved” does not automatically mean “publishable.”

**E:** Posting readiness checklist, error trace and successful republish evidence.

---

## Scenario 2 — Regional Posting Profile

**Situation:** India, Germany and the US require different posting channels, languages and local content.

**Questions**
1. How would you design posting profiles?
2. What should remain global?
3. What should vary by country?
4. How would you prevent profile sprawl?

### STAR Answer

**S:** Recruiting needs vary by country while the core requisition model is global.

**T:** Create controlled local advertising variation.

**A:** I would establish a common advertising model, then define country-specific channel, locale and legal/content requirements. I would reuse posting profiles where the business behavior is equivalent and govern exceptions explicitly.

**R:** Country-specific advertising works without creating unnecessary configuration duplication.

**L:** Localization should change distribution/content where required, not duplicate the entire recruiting process.

**E:** Posting-profile catalogue, country/channel matrix and governance rules.

---

## Scenario 3 — Incorrect Job-Board Fields

**Situation:** A published job shows the wrong location and employment type.

**Questions**
1. What would you inspect?
2. Where is the source of truth?
3. How do you validate mapping?
4. How would you prevent similar errors?

### STAR Answer

**S:** External job-board content differs from the approved requisition.

**T:** Restore content accuracy and identify the mapping defect.

**A:** I would trace requisition field → posting mapping → transformed payload → job-board field, verify controlled values and determine whether the problem is source data, transformation or board mapping.

**R:** Job advertisements accurately reflect approved requisition data.

**L:** Job-board quality depends on field lineage, not only posting configuration.

**E:** Field-mapping catalogue, payload comparison and regression test.

---

## Scenario 4 — Visibility Discrepancy

**Situation:** Recruiters see a job internally, but the public job page is not visible.

**Questions**
1. What could cause the discrepancy?
2. How would you diagnose it?
3. What is the difference between internal visibility and external publication?
4. How would you validate the fix?

### STAR Answer

**S:** Internal Recruiting status indicates the job is active, but candidates cannot see it.

**T:** Identify the external visibility boundary.

**A:** I would check posting status, channel/profile selection, publication completion, job-board response, effective dates and external visibility rules.

**R:** Internal and external states become aligned.

**L:** Internal system state and public distribution state are different controls.

**E:** Publication trace, external verification and visibility regression.

---

## Scenario 5 — Requisition Approved but Posting Permission Missing

**Situation:** The Hiring Manager can create and approve a requisition but cannot post it.

**Questions**
1. What permission layers would you inspect?
2. Should the Hiring Manager necessarily be able to publish?
3. How would you design least privilege?
4. How would you test the permission model?

### STAR Answer

**S:** Approval authority exists but posting authority does not.

**T:** Determine whether the role should publish or only approve.

**A:** I would separate approval responsibility from publication responsibility, inspect Recruiting/RBP permissions and confirm the operating model before changing access.

**R:** Publishing access matches business responsibility rather than being granted automatically.

**L:** Approval and publication are different controls.

**E:** Role matrix and positive/negative posting tests.

---

## Scenario 6 — Duplicate Job Advertisements

**Situation:** The same requisition appears twice on the same job board.

**Questions**
1. What could cause duplication?
2. How would you determine which posting is authoritative?
3. How would you remove the duplicate safely?
4. What controls would prevent recurrence?

### STAR Answer

**S:** One hiring need has multiple public advertisements.

**T:** Remove unintended duplication without disrupting the valid posting.

**A:** I would compare posting IDs, channels, creation/update times and source requisition, identify the authoritative posting, retire the duplicate and investigate repeat-publish behavior.

**R:** Candidate traffic is consolidated into the intended posting.

**L:** Duplicate management is both a publishing and monitoring concern.

**E:** Posting inventory, duplicate-resolution record and regression test.

---

## Scenario 7 — Stale Job Remains Online After Requisition Closure

**Situation:** A requisition is closed, but the external advertisement is still visible.

**Questions**
1. What should trigger unpublishing?
2. How would you diagnose the delay?
3. What candidate-impact risk exists?
4. How would you prevent recurrence?

### STAR Answer

**S:** Internal requisition state and external advertisement state are inconsistent.

**T:** Remove stale advertising promptly.

**A:** I would trace requisition closure → unpublish trigger/process → board response and verify whether the channel supports immediate removal or scheduled refresh.

**R:** Closed jobs are consistently removed or otherwise controlled.

**L:** Lifecycle closure must include external distribution consequences.

**E:** Closure/unpublish test and stale-posting monitor.

---

## Scenario 8 — Country Requires Different Job Boards

**Situation:** One country uses selected external boards while another uses a different channel mix.

**Questions**
1. How would you model channel selection?
2. What drives eligibility?
3. How would you avoid manual mistakes?
4. How would you test all country paths?

### STAR Answer

**S:** Advertising channels differ by country and business need.

**T:** Make channel selection repeatable and governed.

**A:** I would define country/channel eligibility, map it to posting profiles and permissions and test representative job families across each country.

**R:** Jobs are published to the intended channels consistently.

**L:** Channel eligibility is a business rule and governance decision.

**E:** Country/channel matrix and publication regression pack.

---

## Scenario 9 — Posting Profile Is Too Broad

**Situation:** Recruiters can publish to job boards that should be restricted to specialized hiring teams.

**Questions**
1. How would you contain the exposure?
2. What permissions should be reviewed?
3. How would you redesign the profile?
4. What regression tests are required?

### STAR Answer

**S:** A broad posting profile exposes channels beyond user responsibility.

**T:** Restore least-privilege publishing.

**A:** I would identify affected roles and channels, restrict the profile or permissions, review any existing unintended postings and retest authorized and unauthorized publishing paths.

**R:** Publishing access matches recruiting responsibility.

**L:** Posting profiles are also security boundaries.

**E:** Access review, corrected configuration and negative publication tests.

---

## Scenario 10 — Job Board Rejects the Posting

**Situation:** An external job board rejects a job because a mandatory field is missing or invalid.

**Questions**
1. How would you diagnose the rejection?
2. Where should validation occur?
3. How would you prevent repeated failed postings?
4. How would you monitor board-specific errors?

### STAR Answer

**S:** External channel validation rejects an otherwise approved requisition.

**T:** Prevent repeated publication failures.

**A:** I would capture the board's required-field/data rules, map them to requisition fields and introduce pre-publication validation where appropriate. I would catalogue board-specific failures and monitor error trends.

**R:** Fewer rejected postings and faster issue resolution.

**L:** External channel constraints should be incorporated into upstream design.

**E:** Board requirement matrix, pre-publish test and rejection dashboard.

---

## Scenario 11 — Job Posting Content Does Not Match Candidate Experience

**Situation:** The job board shows one description while the career site shows another version.

**Questions**
1. Which system is authoritative?
2. How would you trace the content?
3. What should happen when content changes?
4. How would you prevent stale copies?

### STAR Answer

**S:** Multiple publishing destinations show inconsistent content.

**T:** Establish content consistency and source-of-truth.

**A:** I would identify the authoritative source, map the distribution flow and determine whether each channel should receive the same content or an approved localized variant.

**R:** Candidate-facing job content is consistent with the intended source.

**L:** Multi-channel advertising needs explicit content governance.

**E:** Content lineage and channel comparison.

---

## Scenario 12 — Posting Language Incorrect

**Situation:** The job is published in English even though the target market requires another language.

**Questions**
1. What determines posting language?
2. How would you diagnose the problem?
3. How would you correct it?
4. What regression would you add?

### STAR Answer

**S:** Candidate-facing job content is localized incorrectly.

**T:** Publish the intended language and content.

**A:** I would inspect locale, posting profile, template/content mapping and board behavior, then correct the selection logic and test country/language combinations.

**R:** Candidates see the intended localized job advertisement.

**L:** Language is part of publishing correctness.

**E:** Locale/channel matrix and multilingual regression.

---

## Scenario 13 — Posting After Requisition Update

**Situation:** The salary range and location change after the job has already been posted.

**Questions**
1. Should the job automatically republish?
2. What approval impact does the change have?
3. How would you avoid publishing unapproved changes?
4. How would you test update behavior?

### STAR Answer

**S:** Material requisition data changes after publication.

**T:** Ensure public job content does not get ahead of approved business state.

**A:** I would classify the changed fields, determine whether the change requires reapproval and define whether posting is updated immediately or only after the revised state is approved.

**R:** Public advertising remains aligned with approved requisition data.

**L:** Publishing is a downstream representation of an approved business state.

**E:** Change-impact matrix and republish regression scenarios.

---

## Scenario 14 — Job-Board Monitoring

**Situation:** Recruiting Operations wants daily visibility into failed postings, stale jobs, missing channels and publication delays.

**Questions**
1. What should the monitoring dashboard contain?
2. What are leading indicators?
3. How would you assign ownership?
4. How would you prove improvement?

### STAR Answer

**S:** Publishing issues are discovered reactively.

**T:** Create proactive advertising operations.

**A:** I would track posting success/failure, time-to-publish, rejected jobs, stale postings, channel coverage and unresolved errors, with ownership assigned to recruiting operations or the appropriate support team.

**R:** Posting problems become visible before they affect large volumes of candidates.

**L:** Publishing needs operational observability just like any other enterprise integration.

**E:** Posting dashboard, SLA and issue-resolution trend.

---

## Scenario 15 — Mass Job Advertising

**Situation:** A company launches 500 requisitions for a new hiring campaign.

**Questions**
1. How would you govern bulk publication?
2. How would you validate templates and channels?
3. How would you protect against mass errors?
4. What reconciliation would you perform?

### STAR Answer

**S:** A large hiring campaign needs many jobs published quickly.

**T:** Scale publishing without scaling mistakes.

**A:** I would validate the requisition population, posting profile, channel eligibility, required fields and locale before the bulk action, run controlled sampling and reconcile published versus intended postings.

**R:** Campaign jobs are distributed rapidly with measurable accuracy.

**L:** Bulk publishing requires a pre-flight check and post-flight reconciliation.

**E:** Campaign manifest, sample verification and reconciliation report.

---

## Scenario 16 — Posting Permission Changes After Organizational Move

**Situation:** A recruiter moves from one region to another but retains access to old country posting profiles.

**Questions**
1. How would you diagnose?
2. What security boundary should change?
3. What happens to already-posted jobs?
4. How would you prevent recurrence?

### STAR Answer

**S:** User access no longer matches organizational responsibility.

**T:** Align publishing rights with the new role/population.

**A:** I would review RBP, Recruiting operator/profile access and target populations, remove outdated permissions and separately manage existing postings so business continuity is preserved.

**R:** Current publishing authority is correct without unnecessarily disrupting existing jobs.

**L:** Access governance and operational continuity must be handled together.

**E:** Access review and mover-process checklist.

---

## Scenario 17 — Job Board Integration Intermittently Fails

**Situation:** Some postings succeed while others fail or remain pending.

**Questions**
1. How would you isolate the failure?
2. What data would you compare?
3. What retry/reconciliation strategy is needed?
4. How would you distinguish board issue from Recruiting configuration?

### STAR Answer

**S:** Publication success is inconsistent.

**T:** Identify whether the issue is data, configuration, integration or external-channel availability.

**A:** I would compare successful and failed payloads, requisition attributes, posting profiles, timestamps and error responses, then establish retry and reconciliation behavior.

**R:** Failures are categorized and handled systematically.

**L:** Intermittent integrations require comparison-based diagnosis.

**E:** Failure taxonomy, payload comparison and retry tests.

---

## Scenario 18 — Job Advertisement Withdrawn by Accident

**Situation:** A recruiter accidentally unpublishes a high-priority vacancy.

**Questions**
1. How would you recover?
2. What permissions allowed the action?
3. How would you preserve audit evidence?
4. What preventive control would you introduce?

### STAR Answer

**S:** A live job was removed unintentionally.

**T:** Restore candidate visibility while preventing repeat incidents.

**A:** I would republish through the controlled process, confirm channel correctness and inspect who/what permissions allowed the action. I would then tighten access or add confirmation/governance where appropriate.

**R:** Vacancy visibility is restored and the control weakness is identified.

**L:** Publishing and unpublishing are both privileged operations.

**E:** Audit record, corrected access and republish verification.

---

## Scenario 19 — Posting Analytics Do Not Match Applications

**Situation:** A job receives high board views but almost no applications, while another channel produces fewer views but stronger conversion.

**Questions**
1. What metrics would you analyze?
2. How would you distinguish channel performance from job-content issues?
3. What actions would you take?
4. How would you measure the result?

### STAR Answer

**S:** Advertising performance differs significantly across channels.

**T:** Understand why and improve channel strategy.

**A:** I would compare views, click-through, application conversion, source quality, time-to-apply and downstream candidate quality by channel while controlling for job characteristics.

**R:** Channel decisions become evidence-based.

**L:** Reach is not the same as recruiting value.

**E:** Channel performance dashboard and before/after campaign analysis.

---

## Scenario 20 — Enterprise Posting & Advertising Operating Model

**Situation:** A global enterprise publishes thousands of jobs across countries, languages and channels.

**Questions**
1. How would you standardize the posting model?
2. What should be global?
3. What should vary locally?
4. What governance is required?
5. Which KPIs show healthy advertising?

### STAR Answer

**S:** High-volume global publishing creates configuration and operational complexity.

**T:** Create a scalable advertising operating model.

**A:** I would standardize the posting data model, publishing controls, channel governance, profile ownership, monitoring and KPI definitions while allowing controlled country/channel variation.

**R:** Jobs reach intended talent channels reliably and performance can be compared.

**L:** Advertising is a distribution architecture, not simply a recruiter action.

**E:** Posting-profile catalogue, channel governance model and advertising KPI dashboard.

---

# Recruiting Posting Architecture View

## End-to-End Distribution

**APPROVED REQUISITION**
→ Eligibility

**POSTING PROFILE**
→ Channel / Locale / Rules

**JOB DATA**
→ Title / Location / Description / Employment Type / Compensation / Other required data

**CHANNEL**
→ Career Site / Job Board / External Channel

**PUBLISH**
→ Submission

**MONITOR**
→ Accepted / Rejected / Pending / Failed

**CANDIDATE TRAFFIC**
→ Views / Clicks / Applications

**RECONCILE**
→ Intended vs actual publication

**CLOSE**
→ Remove/expire advertisement

**MEASURE**
→ Channel performance / application conversion / source quality

---

# Posting Profile Design Matrix

| Dimension | Design Question |
|---|---|
| Profile | Which advertising pattern? |
| Country | Where can it be used? |
| Language | Which locale? |
| Channel | Which boards/sites? |
| Eligibility | Which requisitions qualify? |
| Permission | Who can publish? |
| Content | Which job fields are sent? |
| Mapping | How do internal fields map externally? |
| Timing | When is it published/removed? |
| Governance | Who owns the profile? |
| Monitoring | What failures are tracked? |
| Analytics | How is source performance measured? |

---

# Job Advertising Data Model

### Core Requisition Data
- Requisition ID
- Job Title
- Job Family
- Job Level
- Location
- Country
- Legal Entity
- Employment Type
- Job Description
- Compensation where legally/operationally appropriate
- Recruiter / Hiring Manager
- Posting Eligibility
- Effective/closing dates

### Channel Data
- Posting Profile
- Channel/Board
- Locale
- External Job ID
- Publication Status
- Publication Timestamp
- Removal/Expiry Timestamp
- Failure/Error State

### Analytics Data
- Source
- Views
- Clicks
- Applications
- Conversion
- Candidate quality
- Hire outcome

---

# Posting Eligibility Decision Model

Before publishing, validate:

**APPROVAL COMPLETE?**
→ Yes

**REQUIRED JOB DATA COMPLETE?**
→ Yes

**POSTING PROFILE ELIGIBLE?**
→ Yes

**CHANNEL ELIGIBLE?**
→ Yes

**LOCALE CONTENT VALID?**
→ Yes

**USER AUTHORIZED?**
→ Yes

**THEN PUBLISH**

Otherwise:

**BLOCK → EXPLAIN → CORRECT → REVALIDATE**

---

# Job-Board Integration Failure Model

### Failure Type 1 — Data
Missing/invalid field.

### Failure Type 2 — Configuration
Wrong profile/channel/mapping.

### Failure Type 3 — Permission
User cannot publish/unpublish.

### Failure Type 4 — Integration
Payload/request failure.

### Failure Type 5 — External Channel
Job board unavailable/rejects submission.

### Failure Type 6 — Lifecycle
Requisition closed but posting remains active.

### Failure Type 7 — Duplicate
Same requisition published more than intended.

---

# Posting Monitoring KPI Framework

| KPI | Why It Matters |
|---|---|
| Publish Success Rate | Reliability |
| Publish Failure Rate | Error detection |
| Time-to-Publish | Candidate reach speed |
| Stale Posting Rate | Lifecycle hygiene |
| Duplicate Posting Rate | Distribution quality |
| Channel Coverage | Advertising completeness |
| Views | Reach |
| Clicks | Interest |
| Apply Conversion | Funnel effectiveness |
| Applications by Channel | Source performance |
| Quality by Channel | Recruiting value |
| Cost/Channel where available | Efficiency |
| Time-to-Removal | Lifecycle control |
| Unresolved Publishing Errors | Operational health |

---

# Posting Testing Matrix

| Test Type | Scenario |
|---|---|
| Approval | Unapproved requisition cannot publish |
| Happy Path | Approved requisition publishes |
| Permission | Unauthorized user cannot publish |
| Mapping | Correct fields reach board |
| Invalid Data | Board-required data missing |
| Locale | Correct language |
| Duplicate | Duplicate publication prevented |
| Update | Approved job update republishes correctly |
| Closure | Closed requisition removed |
| Channel | Country-specific board selection |
| Bulk | 500-job campaign |
| Failure | External board rejects |
| Retry | Failed publication retried safely |
| Unpublish | User can remove only authorized posting |
| Security | Regional user cannot post globally |
| Analytics | Source metrics reconcile |

---

# Common Recruiting Posting Anti-Patterns

### 1. Publish before approval
Creates governance risk.

### 2. Posting profile as a security shortcut
Broad profiles can expose publishing authority.

### 3. No source-of-truth mapping
Board data becomes inconsistent.

### 4. Manual country selection every time
Creates avoidable publishing errors.

### 5. No stale-posting monitoring
Closed jobs remain visible.

### 6. No duplicate detection
Candidates encounter duplicate vacancies.

### 7. Bulk publication without pre-flight validation
One error multiplies across hundreds of jobs.

### 8. Measure views only
High visibility does not necessarily translate to useful applications.

### 9. No channel-level quality measurement
The organization cannot learn where hiring value comes from.

### 10. Posting and requisition governance are disconnected
Public jobs drift away from approved recruiting decisions.

---

# Recruiting Posting Validation Checklist

Before go-live, verify:

- [ ] Posting profiles are catalogued.
- [ ] Profile owners are assigned.
- [ ] Country/channel eligibility is documented.
- [ ] Publishing permissions are mapped.
- [ ] Required job-board fields are identified.
- [ ] Source-of-truth mapping is documented.
- [ ] Locale/content variants are governed.
- [ ] Approval must precede publishing.
- [ ] Unauthorized users cannot publish.
- [ ] Duplicate postings are controlled.
- [ ] Requisition updates are handled correctly.
- [ ] Closed requisitions are unpublished/expired appropriately.
- [ ] Board rejection paths are tested.
- [ ] Retry/reconciliation behavior is defined.
- [ ] Bulk publication controls are tested.
- [ ] Monitoring dashboard is available.
- [ ] Channel/source analytics are defined.
- [ ] Stale posting detection exists.
- [ ] Unpublish permissions are governed.
- [ ] Audit evidence is available.
- [ ] Support ownership is assigned.
- [ ] Post-go-live governance is established.

---

# Senior Consultant Rapid-Fire — STAR Mini-Answers

### 1. What is a posting profile?
**S:** Different recruiting populations need different advertising patterns.  
**T:** Standardize publication behavior.  
**A:** Define reusable channel, locale, eligibility and permission patterns.  
**R:** Consistent job advertising.  
**L:** Profiles encode publishing policy.  
**E:** Posting-profile catalogue.

### 2. Approved vs published?
**S:** Requisition governance and external visibility are separate.  
**T:** Protect the distinction.  
**A:** Approval authorizes business state; publishing distributes that approved state.  
**R:** Better control.  
**L:** Approved does not automatically mean visible.  
**E:** Lifecycle test.

### 3. How do you troubleshoot a failed posting?
**S:** Publication fails.  
**T:** Find failure layer.  
**A:** Check requisition, profile, permissions, mapping, payload and board response.  
**R:** Root cause isolated.  
**L:** Diagnose from source to channel.  
**E:** Error trace.

### 4. How do you handle stale postings?
**S:** Closed requisition remains public.  
**T:** Remove stale exposure.  
**A:** Trace closure-to-unpublish behavior and add monitoring.  
**R:** Better lifecycle hygiene.  
**L:** Closure must propagate to channels.  
**E:** Stale-posting report.

### 5. Why is channel mapping important?
**S:** External board fields differ.  
**T:** Preserve data meaning.  
**A:** Map source fields and validate payloads.  
**R:** Accurate advertisements.  
**L:** Integration quality begins at mapping.  
**E:** Mapping workbook.

### 6. How do you manage country differences?
**S:** Channels vary by market.  
**T:** Preserve reuse.  
**A:** Global core + controlled local channel/profile variations.  
**R:** Scalable advertising.  
**L:** Local variation needs governance.  
**E:** Country/channel matrix.

### 7. How do you prevent unauthorized posting?
**S:** User has broad publishing access.  
**T:** Restore least privilege.  
**A:** Review RBP/operator/profile permissions and target population.  
**R:** Correct publishing scope.  
**L:** Publication is a privileged action.  
**E:** Security tests.

### 8. What should you monitor?
**S:** Publishing is operationally critical.  
**T:** Detect failures early.  
**A:** Track success/failure, latency, stale/duplicate jobs and channel coverage.  
**R:** Better operational visibility.  
**L:** Distribution needs observability.  
**E:** Posting dashboard.

### 9. How do you assess channel effectiveness?
**S:** Different boards produce different outcomes.  
**T:** Improve source strategy.  
**A:** Compare views, clicks, applications and downstream candidate quality.  
**R:** Better channel decisions.  
**L:** Reach is not the outcome.  
**E:** Channel-performance dashboard.

### 10. How do you handle a bulk posting campaign?
**S:** Hundreds of jobs require publication.  
**T:** Scale safely.  
**A:** Pre-flight validate population, channel/profile, data and locale; sample and reconcile.  
**R:** Faster controlled campaign.  
**L:** Bulk actions need stronger controls.  
**E:** Campaign manifest.

### 11. What if salary changes after publication?
**S:** Public content may become stale.  
**T:** Keep public data aligned with approved state.  
**A:** Determine whether change requires reapproval and controlled republish.  
**R:** Accurate candidate-facing job.  
**L:** Published data is a downstream representation.  
**E:** Republish test.

### 12. What if the job board rejects a field?
**S:** External validation fails.  
**T:** Correct systematically.  
**A:** Identify required board data, map to source field and add validation.  
**R:** Lower repeat failure.  
**L:** External rules should influence upstream design.  
**E:** Board requirement matrix.

### 13. How do you avoid profile sprawl?
**S:** More countries request variations.  
**T:** Preserve maintainability.  
**A:** Separate actual business/channel differences from preference.  
**R:** Fewer profiles.  
**L:** Not every variation deserves a new profile.  
**E:** Profile rationalization.

### 14. Why unpublish governance?
**S:** A live job can be removed accidentally.  
**T:** Protect candidate access.  
**A:** Restrict unpublish rights and audit changes.  
**R:** Controlled public visibility.  
**L:** Remove is as sensitive as publish.  
**E:** Unpublish security test.

### 15. How do you future-proof recruiting posting?
**S:** New boards and channels emerge.  
**T:** Keep distribution adaptable.  
**A:** Govern the internal data model, posting profiles, channel adapters and monitoring separately.  
**R:** Easier channel expansion.  
**L:** Distribution architecture should be loosely coupled to source data.  
**E:** Channel roadmap.

---

# Final RCM Recruiting Posting & Job Advertising Master Answer

When asked:

**“How would you design Recruiting Posting and Job Advertising in SAP SuccessFactors?”**

Answer:

> **“I start with the approved requisition and define the publishing eligibility conditions before designing the channel strategy. I establish posting profiles that capture country, language, channel, permission and business-rule differences while keeping the underlying job-data model standardized. For each destination I define field mappings and source-of-truth ownership so job-board content remains consistent with the approved requisition. I also separate approval authority from publishing authority and enforce least-privilege access for publishing and unpublishing. Before publication I validate required data, channel eligibility, locale and user authorization; after publication I monitor success, rejection, latency, stale postings, duplicate postings and channel performance. When a requisition changes or closes, I make sure the advertising lifecycle responds appropriately and does not remain out of sync. My objective is to create a scalable job-distribution architecture that publishes accurate jobs to the right channels, protects publishing governance and produces measurable insight into which channels generate useful recruiting outcomes.”**

## Master Loop

**APPROVED REQUISITION → ELIGIBILITY → POSTING PROFILE → JOB DATA → CHANNEL → PUBLISH → MONITOR → RECONCILE → UPDATE/UNPUBLISH → MEASURE → GOVERN → IMPROVE**

## Interview Signal

A strong RCM consultant does not answer only:

**“How do I post a job?”**

They answer:

**“Is the job authorized to be published, which channel should receive it, how do we guarantee the external data is correct, who is allowed to publish or remove it, how do we monitor failures, and what evidence tells us the channel actually improves recruiting outcomes?”**

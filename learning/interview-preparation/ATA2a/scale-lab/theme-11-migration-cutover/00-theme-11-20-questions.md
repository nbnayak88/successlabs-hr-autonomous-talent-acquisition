# ATA2a — Applied Recruiting — SmartRecruiters
# Theme 11 — Migration & Cutover

## 20 Scenario-Based Interview Questions & STAR Answers

**Stream:** ATA2a — Recruiting — SmartRecruiters  
**Theme:** 11 — Migration & Cutover  
**Target:** 20 scenarios  
**Answer method:** STAR — Situation → Task → Action → Result  
**Product posture:** Recruiting-first and architecture-first. SmartRecruiters is the primary recruiting platform focus. Onboarding remains ATA2b.

---

## HR-ATA2A-B11-Q01 — Migration Strategy

### Interview Question
How would you define a migration strategy for moving from a legacy ATS to SmartRecruiters?

### STAR Answer
**Situation:** The organization had years of recruiting data and active hiring in a legacy ATS.

**Task:** I needed to migrate to SmartRecruiters without disrupting recruiting operations.

**Action:** I classified data, processes, integrations, users, and active transactions; defined migration waves, scope, validation, cutover, coexistence, and rollback strategies.

**Result:** The migration became a controlled business transition rather than a technical data move.

### SmartRecruiters Example
The strategy would distinguish active recruiting transactions from historical data and define how each category transitions into SmartRecruiters.

### SME Probe
What is the first decision you make when planning an ATS migration?

---

## HR-ATA2A-B11-Q02 — Migration Scope

### Interview Question
How would you decide what recruiting data should be migrated?

### STAR Answer
**Situation:** Stakeholders wanted to migrate all legacy candidate and requisition records.

**Task:** I needed to establish a defensible scope.

**Action:** I classified data as operationally required, legally required, analytically valuable, archival, obsolete, or duplicative. I considered retention, privacy, cost, quality, and business use.

**Result:** Migration scope became purposeful rather than “move everything.”

### SmartRecruiters Example
Only approved candidate, application, requisition, and historical information should enter SmartRecruiters based on defined business and retention requirements.

### SME Probe
When is archival preferable to migration?

---

## HR-ATA2A-B11-Q03 — Legacy Data Profiling

### Interview Question
How would you assess the quality of legacy recruiting data before migration?

### STAR Answer
**Situation:** The legacy ATS contained inconsistent candidate, requisition, and status data.

**Task:** I needed to understand migration risk before mapping.

**Action:** I profiled completeness, uniqueness, validity, relationships, status values, identifiers, duplicates, historical timestamps, and sensitive attributes.

**Result:** Data remediation priorities became visible before migration execution.

### SmartRecruiters Example
Legacy recruiting data should be profiled before mapping it into SmartRecruiters structures and lifecycle states.

### SME Probe
Why should data profiling happen before transformation design?

---

## HR-ATA2A-B11-Q04 — Data Mapping

### Interview Question
How would you map legacy recruiting data to SmartRecruiters?

### STAR Answer
**Situation:** Legacy fields did not align directly with the target recruiting model.

**Task:** I needed accurate semantic transformation.

**Action:** I mapped business meaning, not just field names, and documented source, target, transformation, default, validation, ownership, and exception rules.

**Result:** Mapping became auditable and testable.

### SmartRecruiters Example
Legacy candidate, application, requisition, source, status, and user data should be mapped to supported SmartRecruiters concepts with explicit transformation rules.

### SME Probe
Why can a field-to-field mapping be semantically wrong?

---

## HR-ATA2A-B11-Q05 — Candidate Identity Migration

### Interview Question
How would you manage duplicate candidate identities during ATS migration?

### STAR Answer
**Situation:** The legacy system contained duplicate candidate profiles across business units and sourcing channels.

**Task:** I needed to avoid importing unnecessary duplicates into SmartRecruiters.

**Action:** I established matching criteria, confidence thresholds, survivorship rules, manual review, privacy constraints, and reconciliation controls.

**Result:** Candidate identity quality improved before migration.

### SmartRecruiters Example
Candidate deduplication should be completed according to approved identity rules before loading records into SmartRecruiters.

### SME Probe
What is the risk of aggressive deduplication?

---

## HR-ATA2A-B11-Q06 — Historical Status Mapping

### Interview Question
How would you migrate legacy candidate statuses into a different SmartRecruiters lifecycle?

### STAR Answer
**Situation:** The legacy ATS had dozens of status values while the target process used fewer meaningful states.

**Task:** I needed to preserve business meaning without recreating legacy complexity.

**Action:** I created a semantic status mapping, retained historical event information where required, defined unmappable conditions, and validated reporting implications.

**Result:** The target lifecycle remained simple while historical meaning was preserved appropriately.

### SmartRecruiters Example
Legacy screening, interview, rejection, withdrawal, offer, and hired states should map to approved SmartRecruiters lifecycle concepts without unnecessary status proliferation.

### SME Probe
When should historical status be preserved as an event rather than a current status?

---

## HR-ATA2A-B11-Q07 — Active Requisitions

### Interview Question
How would you migrate active requisitions during an ATS cutover?

### STAR Answer
**Situation:** Hundreds of requisitions were actively recruiting candidates during the planned migration.

**Task:** I needed to preserve recruiting continuity.

**Action:** I classified requisitions by stage and risk, defined migration rules, reconciled candidates and activities, coordinated freeze periods, and validated each migrated cohort.

**Result:** Active hiring continued with controlled disruption.

### SmartRecruiters Example
Active SmartRecruiters requisitions should be validated for job information, ownership, candidate relationships, workflow state, and critical dates after migration.

### SME Probe
Would you migrate every active requisition at exactly the same time?

---

## HR-ATA2A-B11-Q08 — Candidate in-Flight Migration

### Interview Question
How would you migrate candidates who are already partway through the recruiting process?

### STAR Answer
**Situation:** Candidates were at different stages when the legacy ATS needed to be retired.

**Task:** I needed to preserve their journey and decision history.

**Action:** I defined stage-specific migration rules, preserved essential history, reassigned ownership, communicated changes where needed, and validated next-step actions.

**Result:** Candidates could continue recruiting with minimal disruption.

### SmartRecruiters Example
Candidates at screening, interview, assessment, selection, or offer stages require different migration handling.

### SME Probe
Which in-flight candidate stage presents the greatest migration risk and why?

---

## HR-ATA2A-B11-Q09 — Migration Validation

### Interview Question
How would you validate migrated recruiting data?

### STAR Answer
**Situation:** A migration load completed successfully from a technical perspective.

**Task:** I needed to prove business correctness.

**Action:** I reconciled counts, key attributes, relationships, statuses, identifiers, timestamps, samples, and business scenarios against approved source baselines.

**Result:** Migration acceptance was based on evidence rather than load completion.

### SmartRecruiters Example
SmartRecruiters migration validation should cover candidate/application relationships, requisition ownership, status, source attribution, and active hiring data.

### SME Probe
What is the difference between technical load success and migration success?

---

## HR-ATA2A-B11-Q10 — Migration Rehearsal

### Interview Question
Why would you perform migration rehearsals before SmartRecruiters cutover?

### STAR Answer
**Situation:** The first migration attempt exposed unexpected transformation and timing issues.

**Task:** I needed to reduce cutover uncertainty.

**Action:** I executed trial migrations using production-like data volumes, measured duration, captured defects, refined mappings, and rehearsed validation and rollback.

**Result:** The final migration became faster and more predictable.

### SmartRecruiters Example
Migration rehearsals should include data extraction, transformation, loading, reconciliation, integrations, user validation, and cutover timing.

### SME Probe
What should you measure during a migration rehearsal?

---

## HR-ATA2A-B11-Q11 — Migration Cutover Window

### Interview Question
How would you determine the appropriate cutover window for a global recruiting migration?

### STAR Answer
**Situation:** Recruiting operated continuously across multiple time zones.

**Task:** I needed to minimize business disruption.

**Action:** I analyzed recruiting volume, business calendars, active hiring cycles, integration dependencies, support coverage, regional impact, and freeze requirements.

**Result:** The cutover window balanced technical feasibility with recruiting continuity.

### SmartRecruiters Example
The SmartRecruiters cutover should consider global recruiting activity, candidate communications, interviews, job publishing, and downstream hiring dependencies.

### SME Probe
Why might the technically quietest period not be the best business cutover window?

---

## HR-ATA2A-B11-Q12 — Coexistence Strategy

### Interview Question
How would you manage a period where the legacy ATS and SmartRecruiters coexist?

### STAR Answer
**Situation:** A phased migration required both platforms to operate temporarily.

**Task:** I needed to avoid duplicate recruiting transactions and unclear ownership.

**Action:** I defined system boundaries, new-requisition rules, candidate routing, data synchronization where necessary, reporting treatment, user access, and retirement criteria.

**Result:** Coexistence became controlled rather than confusing.

### SmartRecruiters Example
New recruiting activity should have an explicit system-of-record rule during coexistence.

### SME Probe
What is the biggest risk of ATS coexistence?

---

## HR-ATA2A-B11-Q13 — Integration Cutover

### Interview Question
How would you transition integrations from a legacy ATS to SmartRecruiters?

### STAR Answer
**Situation:** External systems depended on legacy ATS interfaces.

**Task:** I needed to move integration ownership without breaking business processes.

**Action:** I catalogued interfaces, mapped new contracts, aligned deployment windows, tested parallel or controlled switching, monitored transactions, and retired old interfaces systematically.

**Result:** Integration cutover occurred with controlled business risk.

### SmartRecruiters Example
Interfaces for sourcing, assessment, identity, analytics, HCM, and onboarding should be switched according to an agreed dependency sequence.

### SME Probe
Why should interface retirement be part of migration planning?

---

## HR-ATA2A-B11-Q14 — Security and Access Migration

### Interview Question
How would you migrate recruiting users and access to SmartRecruiters?

### STAR Answer
**Situation:** Legacy users had inconsistent roles and broad access.

**Task:** I needed secure target-state access.

**Action:** I mapped personas to target roles, validated business ownership, removed obsolete privileges, tested representative access, and established joiner/mover/leaver controls.

**Result:** Migration improved rather than reproduced legacy access risk.

### SmartRecruiters Example
Recruiter, hiring-manager, interviewer, HR, administrator, and integration access should be migrated based on target responsibilities rather than legacy role names.

### SME Probe
Why should you avoid one-to-one role migration?

---

## HR-ATA2A-B11-Q15 — Migration Reconciliation

### Interview Question
How would you reconcile source and target recruiting data after migration?

### STAR Answer
**Situation:** A migration completed but small discrepancies appeared between systems.

**Task:** I needed to distinguish acceptable transformation from true data loss.

**Action:** I reconciled record counts, business keys, relationships, statuses, critical fields, exception records, and transformation rules, then obtained business sign-off.

**Result:** Migration discrepancies became explainable and controlled.

### SmartRecruiters Example
Candidate/application and requisition relationships should be reconciled, not just total record counts.

### SME Probe
What reconciliation level is sufficient for a high-risk candidate-data migration?

---

## HR-ATA2A-B11-Q16 — Rollback Decision

### Interview Question
When would you abort or roll back an ATS migration?

### STAR Answer
**Situation:** Cutover validation revealed unexpected candidate-data integrity issues.

**Task:** I needed to protect recruiting continuity and data integrity.

**Action:** I compared findings against predefined rollback thresholds, assessed business impact, preserved evidence, communicated the decision, and activated the fallback plan.

**Result:** The organization avoided operating on unreliable recruiting data.

### SmartRecruiters Example
Critical candidate identity, active requisition, security, or hire-handoff failures should be evaluated against predefined migration stop criteria.

### SME Probe
Why must rollback criteria be defined before cutover?

---

## HR-ATA2A-B11-Q17 — Candidate Communication During Migration

### Interview Question
How would you manage candidate communication during an ATS migration?

### STAR Answer
**Situation:** Candidates might experience changed links, messages, or recruiter contacts during migration.

**Task:** I needed to protect candidate trust.

**Action:** I mapped candidate touchpoints, planned communications where necessary, validated links and templates, and provided support paths for interrupted journeys.

**Result:** Migration risk to candidate experience was reduced.

### SmartRecruiters Example
SmartRecruiters communications should be validated for active candidates, application links, recruiter contact, interview information, and offer-related journeys.

### SME Probe
Which candidate communications should be tested before cutover?

---

## HR-ATA2A-B11-Q18 — Legacy Decommissioning

### Interview Question
How would you decide when to decommission the legacy ATS?

### STAR Answer
**Situation:** The new platform was live but the legacy ATS still contained historical data and dependencies.

**Task:** I needed to retire the old platform safely.

**Action:** I verified migration acceptance, reporting needs, legal retention, audit access, integration retirement, user transition, archive strategy, and business sign-off.

**Result:** Legacy decommissioning became a controlled architectural milestone.

### SmartRecruiters Example
The legacy ATS should not be retired until active recruiting, historical access, reporting, integrations, retention, and support requirements are satisfied.

### SME Probe
Why is decommissioning part of migration architecture rather than an IT housekeeping task?

---

## HR-ATA2A-B11-Q19 — Cutover Command Center

### Interview Question
How would you run the command center during SmartRecruiters cutover?

### STAR Answer
**Situation:** The migration involved multiple technical and business teams.

**Task:** I needed coordinated decision-making during a time-critical window.

**Action:** I established workstreams, owners, checkpoints, status reporting, issue severity, escalation paths, go/no-go authority, evidence tracking, and communication cadence.

**Result:** Cutover decisions were faster and more controlled.

### SmartRecruiters Example
The command center should coordinate data migration, integrations, security, recruiting operations, business validation, communications, and support.

### SME Probe
What information must be visible to the cutover decision-maker at all times?

---

## HR-ATA2A-B11-Q20 — Migration as Transformation

### Interview Question
How would you ensure an ATS migration becomes a recruiting transformation rather than a data-copy exercise?

### STAR Answer
**Situation:** The program initially focused on moving legacy data and reproducing existing workflows.

**Task:** I needed to use migration as an opportunity to improve recruiting.

**Action:** I rationalized data, simplified lifecycle states, redesigned processes, removed obsolete integrations, improved candidate experience, strengthened governance, and established the target SmartRecruiters operating model.

**Result:** Migration delivered a cleaner recruiting foundation instead of transferring legacy complexity.

### SmartRecruiters Example
SmartRecruiters should receive the future-state recruiting model, not simply a copy of legacy ATS structures.

### SME Probe
What legacy artifact would you deliberately refuse to migrate?

---

# Theme 11 Completion Standard

A learner completes **ATA2a Theme 11 — Migration & Cutover** when they can:

- Define an ATS migration strategy and scope.
- Profile and cleanse legacy recruiting data.
- Design semantic data mappings.
- Manage candidate identity and historical status migration.
- Migrate active requisitions and in-flight candidates safely.
- Rehearse migration and validate business correctness.
- Plan global cutover windows and coexistence.
- Transition integrations and security access.
- Reconcile source and target data.
- Define objective rollback and stop criteria.
- Protect candidate communications and experience.
- Run a cutover command center.
- Decommission the legacy ATS safely.
- Use migration as a transformation opportunity rather than reproducing legacy complexity.

**Quality rule:** Every scenario must demonstrate Situation → Task → Action → Result, contain a distinct migration/cutover decision, use **SmartRecruiters** as the primary platform example, remain separate from onboarding, avoid duplication with Themes 01–10, and end with an SME Probe.

**Scenario IDs:** HR-ATA2A-B11-Q01 → HR-ATA2A-B11-Q20

**Target achieved:** 20 unique scenario-based interview questions + 20 STAR answers.

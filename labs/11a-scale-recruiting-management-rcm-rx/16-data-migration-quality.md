# SAP SuccessFactors Recruiting Management (RCM) — SCALE Interview Preparation

## Step 16 — Data Migration & Quality

**Objective:** Plan candidate, requisition and application migration while preserving business meaning, data integrity, privacy, lifecycle continuity and reporting usefulness.

> **Interview mindset:** Data migration is not “load old data into the new system.” It is the controlled transformation of business history into a new operating model. A strong architect proves what should migrate, what should not, how source data maps to the target model, how quality is measured, how privacy is protected, and how completeness is reconciled after cutover.

---

# 1. Migration Architecture Lens

## The migration value stream

```text
LEGACY RCM / ATS / HR SYSTEMS
          │
          ▼
   DISCOVER & PROFILE
          │
          ▼
   CLASSIFY & SCOPE
          │
          ▼
   CLEANSE / DEDUPE
          │
          ▼
   MAP TO TARGET MODEL
          │
          ▼
 TRANSFORM / VALIDATE
          │
          ▼
   MOCK MIGRATION
          │
          ▼
   RECONCILE & SIGN-OFF
          │
          ▼
        CUTOVER
          │
          ▼
   POST-CUTOVER QA
          │
          ▼
 REPORTING / OPERATIONS / AUDIT
```

## Core objects

- **Candidate**
- **Candidate Profile**
- **Job Requisition**
- **Candidate Application**
- **Application Status / Disposition**
- **Attachments / Documents**
- **Interview / Assessment evidence**
- **Offer information**
- **Agency / Referral attribution**
- **Source / Campaign attribution**
- **Historical and audit-related information**

## Five migration questions

1. **What business history must survive?**
2. **What is the target system's source of truth after cutover?**
3. **Which records are active, historical, duplicate or legally retainable?**
4. **How will every migrated population be reconciled?**
5. **What data should intentionally not be migrated?**

---

# 2. Migration Scope Matrix

| Object | Typical Migration Decision | Key Risk |
|---|---|---|
| Candidate profile | Migrate defined active/historical population | Duplicate identity |
| Candidate application | Migrate where lifecycle continuity matters | Broken status semantics |
| Requisition | Migrate active and selected historical requisitions | Invalid ownership/reference |
| Application status | Preserve only approved lifecycle meaning | Incorrect reporting |
| Disposition reason | Map to controlled target taxonomy | Historical meaning lost |
| Resume/documents | Migrate according to business/privacy need | Storage/privacy |
| Interview feedback | Selective migration | Sensitive historical data |
| Offer data | Usually controlled scope | Compensation exposure |
| Agency/referral attribution | Migrate where reporting/contractual value exists | Attribution loss |
| Source/campaign | Migrate where analytics needs it | Marketing taxonomy mismatch |
| Attachments | Selective | Size, format, privacy |
| Closed/obsolete records | Governance-based decision | Unnecessary legacy volume |

> **Design principle:** Do not migrate a field simply because the source contains it. Migrate it because the target operating model has a justified business, legal, reporting or audit need for it.

---

# 3. Scenario-Based Interview Questions — 20 Deep Scenarios

## Scenario 1 — Legacy Candidate Migration

**Question:** A customer is moving from a legacy ATS to RCM and wants to migrate 2 million candidate records. How do you approach the problem?

### STAR Answer

**Situation:** The legacy ATS contained a very large candidate population with mixed-quality active, inactive and historical data.

**Task:** Migrate the required population without flooding the new platform with obsolete or duplicate records.

**Action:** I would segment candidates by lifecycle and business value first: active applicants, talent-pool candidates, recent candidates, legally required history and records eligible for exclusion. I would profile the source, identify duplicates, define a target identity strategy, map source fields to the RCM model, cleanse invalid values, validate privacy requirements and perform multiple mock migrations. I would establish control totals by population and use reconciliation before cutover.

**Result:** Only justified records move, with a controlled and measurable migration.

**Learning:** Migration scope should be driven by business use and governance, not source-system volume.

**Evidence:** Migration scope matrix, data-profiling report, cleansing rules, mapping workbook and reconciliation report.

---

## Scenario 2 — Active Applications Must Continue After Cutover

**Question:** How do you migrate applications where candidates are already in interview or offer stages?

### STAR Answer

**Situation:** Active recruitment could not simply restart after go-live.

**Task:** Preserve enough application history and current state for recruiters to continue without losing context.

**Action:** I would classify active applications by lifecycle state, map legacy statuses to approved RCM statuses, preserve candidate-to-requisition relationships, validate recruiter ownership, migrate relevant interview/offer context and create explicit exceptions for states that do not have an exact target equivalent. I would conduct scenario-based UAT with real representative cases.

**Result:** Recruiters resume work from the correct business state instead of rebuilding the pipeline.

**Learning:** Status migration is semantic migration, not text translation.

---

## Scenario 3 — Duplicate Candidates

**Question:** The legacy system contains multiple profiles for the same person. What would you do?

### STAR Answer

**Situation:** Duplicates threatened identity quality and reporting.

**Task:** Reduce duplicates without accidentally merging distinct individuals.

**Action:** I would establish a matching hierarchy using available identifiers and high-confidence attributes. I would separate deterministic matches from ambiguous matches, route uncertain cases to a controlled review process, and define how applications from duplicate profiles are consolidated or retained. I would preserve legitimate multiple applications.

**Result:** Candidate identity becomes cleaner without damaging recruiting history.

**Learning:** Candidate identity and application multiplicity must be treated separately.

---

## Scenario 4 — Requisition Migration

**Question:** How would you migrate 100,000 legacy requisitions?

### STAR Answer

**Situation:** Historical requisitions contained inconsistent templates, organizations, locations and recruiters.

**Task:** Migrate only the requisitions required by the target operating model.

**Action:** I would classify requisitions as open, recently closed, archived or obsolete. I would define which fields are required for ongoing operations versus analytics/history, map organizations and locations to current target values, resolve inactive owners and validate downstream dependencies.

**Result:** Active requisitions become operationally usable while historical volume remains governed.

**Learning:** Requisition migration must account for both business history and current-state operating ownership.

---

## Scenario 5 — Status Mapping Across Different Lifecycle Models

**Question:** The source has 27 application statuses, but the target process uses 14. How do you map them?

### STAR Answer

**Situation:** Legacy status design had grown organically.

**Task:** Preserve business meaning without reproducing unnecessary complexity.

**Action:** I would create a semantic status crosswalk. Each source status would be categorized by business meaning, lifecycle stage, disposition meaning and candidate communication implications. Where several legacy statuses have the same target meaning, they can converge with historical lineage retained outside the operational lifecycle if needed.

**Result:** The target lifecycle remains manageable while historical meaning is preserved.

**Learning:** The target status model should represent the future operating model, not the accidental complexity of the past.

---

## Scenario 6 — Requisition-to-Application Relationship Breaks

**Question:** Applications are loaded but some no longer point to valid requisitions. What is your approach?

### STAR Answer

**Situation:** Referential integrity failed during migration.

**Task:** Prevent orphaned applications.

**Action:** I would validate the requisition key before application load, stage unresolved relationships separately, reconcile source-to-target identifiers and only load applications whose parent relationships are confirmed. I would not silently create placeholder requisitions unless the business explicitly approves that design.

**Result:** Referential integrity is preserved.

**Learning:** Parent-child dependencies must drive migration sequencing.

---

## Scenario 7 — Candidate Attachments and Resumes

**Question:** The source contains millions of resumes and documents. Should all be migrated?

### STAR Answer

**Situation:** Document volume was high and included potentially sensitive historical files.

**Task:** Balance operational value with privacy, storage and migration risk.

**Action:** I would classify documents by business need, retention requirements, current activity and sensitivity. I would migrate only justified artifacts, validate supported formats, establish secure transfer, verify document-to-candidate association and test download/access permissions after migration.

**Result:** Required evidence is preserved without indiscriminate historical copying.

**Learning:** Document migration requires a separate policy from structured-data migration.

---

## Scenario 8 — Bad Data Quality

**Question:** 18% of source locations are invalid or obsolete. What do you do?

### STAR Answer

**Situation:** Source reference data was inconsistent.

**Task:** Prevent low-quality values from contaminating the target.

**Action:** I would create a reference-data crosswalk, classify values into valid, transformable, obsolete and unresolved categories, set acceptance thresholds and establish exception ownership. Critical unresolved values would block migration rather than defaulting silently.

**Result:** The target receives controlled reference data.

**Learning:** Data quality must be measured before load, not discovered after go-live.

---

## Scenario 9 — Candidate Privacy and Retention

**Question:** The legacy system contains candidates who have exceeded local retention requirements. Do you migrate them?

### STAR Answer

**Situation:** Migration exposed historical personal data that may no longer be appropriate to retain.

**Task:** Prevent the migration from becoming a mechanism for carrying forward unnecessary personal data.

**Action:** I would work with legal/privacy owners to define retention categories, identify records eligible for deletion or exclusion, document the rule, apply it before migration and retain evidence of the decision. Country-specific requirements would be treated as controlled variants.

**Result:** Migration supports privacy governance instead of bypassing it.

**Learning:** Privacy scope is part of migration scope.

---

## Scenario 10 — Global Template and Local Country Differences

**Question:** One source system supports 30 countries, but the target has global and local fields. How do you design the migration?

### STAR Answer

**Situation:** Global data had different local requirements.

**Task:** Create a repeatable migration model without hard-coding 30 unrelated processes.

**Action:** I would establish a canonical global model plus country-specific mapping and validation rules. Country variants would include mandatory fields, legal requirements, reference-value mapping, privacy controls and exception handling.

**Result:** The migration remains globally governed with controlled local variation.

**Learning:** Global migration succeeds when local differences are modeled explicitly.

---

## Scenario 11 — Migrating Interview Feedback

**Question:** Should historical interview feedback be moved into RCM?

### STAR Answer

**Situation:** Interview feedback contained valuable history but could be sensitive.

**Task:** Decide whether the operational value justifies migration.

**Action:** I would classify feedback by age, hiring relevance, retention requirements, sensitivity and access model. If migrated, I would validate target visibility and permissions. If excluded from operational migration, I would preserve only what is justified through an approved archival strategy.

**Result:** The business avoids unnecessary exposure while preserving required history.

**Learning:** Historical value does not automatically justify operational migration.

---

## Scenario 12 — Failed Batch Load

**Question:** 60% of a migration batch loaded successfully and 40% failed. What next?

### STAR Answer

**Situation:** Partial migration created inconsistent populations.

**Task:** Recover without duplicating successful records.

**Action:** I would separate technical retryable errors from business/data errors, use source-to-target keys to identify successful records, correct failed records in the staging layer and replay only the unresolved population. I would then reconcile the complete batch.

**Result:** Recovery is controlled and idempotent.

**Learning:** A migration process must be restartable from checkpoints.

---

## Scenario 13 — Recruiter Ownership

**Question:** The source recruiter accounts do not exist in the target. How do you migrate ownership?

### STAR Answer

**Situation:** Legacy users had left the organization or were not represented in the new role model.

**Task:** Preserve accountability without assigning invalid owners.

**Action:** I would distinguish historical attribution from active operational ownership. Historical records could retain source attribution where appropriate, while active requisitions receive validated target owners based on the target operating model.

**Result:** Current work remains actionable and historical reporting remains interpretable.

**Learning:** Historical ownership and operational ownership are different concepts.

---

## Scenario 14 — Migration During Parallel Operations

**Question:** The legacy ATS remains active while the new RCM is being configured. How do you avoid losing transactions?

### STAR Answer

**Situation:** Source data continued changing during migration preparation.

**Task:** Maintain consistency between the source snapshot and target cutover.

**Action:** I would use staged extraction, repeatable transformation, delta identification and a controlled cutover window. The migration plan would distinguish full load from delta load and define what happens to records created or changed during the migration window.

**Result:** Cutover captures late changes without reloading the entire population.

**Learning:** Migration is a temporal problem as well as a data problem.

---

## Scenario 15 — Reporting Continuity

**Question:** Leadership wants year-over-year recruiting reports after migration. What do you do?

### STAR Answer

**Situation:** Historical data used old status, source, organization and recruiter taxonomies.

**Task:** Preserve analytical continuity.

**Action:** I would map historical values to a governed analytical model, retain lineage to legacy values where needed and validate KPI calculations before and after migration. I would explicitly identify metrics that cannot be compared directly because definitions changed.

**Result:** Reporting becomes transparent instead of creating false continuity.

**Learning:** Data continuity does not mean metric definitions are automatically continuous.

---

## Scenario 16 — Cutover Readiness

**Question:** What criteria must be met before migration cutover?

### STAR Answer

**Situation:** The implementation team wanted to proceed after a technically successful mock load.

**Task:** Establish business readiness, not just technical success.

**Action:** I would require signed-off mapping, quality thresholds, reconciliation results, security validation, representative business UAT, open-defect thresholds, rollback criteria, operational runbooks and ownership for post-go-live exceptions.

**Result:** Cutover is based on evidence.

**Learning:** “Load completed” is not a cutover criterion.

---

## Scenario 17 — Reconciliation

**Question:** How do you prove the migration is complete?

### STAR Answer

**Situation:** Technical logs showed successful loads, but business users still lacked confidence.

**Task:** Prove completeness and accuracy at business level.

**Action:** I would reconcile by object and lifecycle: candidates, requisitions, applications, active status, ownership, documents and selected reporting populations. I would use source-to-target control totals, key-based matching and exception reports.

**Result:** The migration has auditable evidence of completeness.

**Learning:** Reconciliation is the acceptance mechanism for migration.

---

## Scenario 18 — Quality Thresholds

**Question:** What data-quality thresholds would you define?

### STAR Answer

**Situation:** Different teams had different definitions of “clean data.”

**Task:** Create objective migration quality standards.

**Action:** I would define thresholds by dimension: completeness, validity, uniqueness, consistency, referential integrity and timeliness. Critical business objects could require near-zero unresolved errors, while non-critical historical attributes may have approved tolerances.

**Result:** Go/no-go decisions become evidence-based.

**Learning:** Data quality must be measurable.

---

## Scenario 19 — Rollback Plan

**Question:** What is your rollback strategy if production migration reveals severe data issues?

### STAR Answer

**Situation:** Post-cutover validation discovered unacceptable migration defects.

**Task:** Protect business continuity and avoid creating an even larger data problem.

**Action:** I would define rollback triggers before cutover, preserve source-system readiness as agreed, maintain migration manifests and checkpoint data, and establish a decision path for rollback versus controlled remediation. The chosen approach would depend on the cutover architecture and whether new production transactions already exist.

**Result:** Recovery decisions are made from predefined controls rather than panic.

**Learning:** Rollback must be designed before migration starts.

---

## Scenario 20 — End-to-End Migration Architecture

**Question:** Give me your complete migration strategy for Candidate + Requisition + Application data.

### STAR Answer

**Situation:** An enterprise is replacing its recruiting platform and needs both active recruiting continuity and selected historical preservation.

**Task:** Design the complete migration architecture.

**Action:** I would begin with business scope and retention rules, profile the source, classify populations, define the target data model, create source-to-target mappings, establish reference-data crosswalks, cleanse and deduplicate, sequence parent objects before child objects, run mock migrations, validate data quality, execute UAT, reconcile every migration wave, perform controlled cutover and run post-go-live hypercare. I would maintain migration manifests, issue logs, exception queues and sign-off evidence throughout.

**Result:** The organization moves into the target RCM model with traceable, controlled and measurable data continuity.

**Learning:** A strong migration strategy is a repeatable control system, not a one-time data load.

---

# 4. Migration Object Dependency Model

Use this load sequence unless the approved implementation design requires a different order:

```text
REFERENCE DATA
    ↓
RECRUITING USERS / OWNERSHIP
    ↓
REQUISITIONS
    ↓
CANDIDATE PROFILES
    ↓
APPLICATIONS
    ↓
STATUS / DISPOSITION CONTEXT
    ↓
DOCUMENTS / ATTACHMENTS
    ↓
INTERVIEW / ASSESSMENT HISTORY
    ↓
SELECTED OFFER / ATTRIBUTION DATA
    ↓
REPORTING / RECONCILIATION
```

**Rule:** Load parent/reference objects before dependent transactional objects.

---

# 5. Source-to-Target Mapping Framework

Every migrated field should be documented with:

| Attribute | Source | Target | Transformation | Required? | Quality Rule | Owner |
|---|---|---|---|---|---|---|
| Candidate ID | Legacy ATS | RCM candidate ID / external reference | Preserve/cross-reference | Yes | Unique | Data team |
| Email | Legacy ATS | Candidate contact | Normalize | Conditional | Valid format | HR |
| Country | Legacy ATS | RCM country | Code translation | Yes | Valid target value | HR/Data |
| Requisition ID | Legacy ATS | RCM requisition | Cross-reference | Yes | Parent exists | Recruiting |
| Application Status | Legacy ATS | RCM status | Semantic mapping | Yes | Approved crosswalk | Recruiting |
| Disposition | Legacy ATS | RCM disposition | Taxonomy mapping | Conditional | Controlled value | Recruiting |
| Recruiter | Legacy ATS | RCM owner | User mapping | Yes for active | Target user exists | HR |

> **Golden rule:** Never map by label alone. Map by **business meaning + code + lifecycle context**.

---

# 6. Data Quality Dimensions

## 1. Completeness

Are all required fields populated?

## 2. Validity

Does each value exist in the target domain?

## 3. Uniqueness

Is one person represented appropriately?

## 4. Consistency

Do related objects agree?

## 5. Referential Integrity

Does every application point to a valid requisition and candidate?

## 6. Accuracy

Does the migrated value represent the source business meaning?

## 7. Timeliness

Is the migrated snapshot current enough for cutover?

---

# 7. Quality Scorecard

A practical quality dashboard can use:

| Dimension | Example Measure | Migration Gate |
|---|---|---|
| Completeness | Required fields populated | Threshold by object |
| Validity | Valid target codes | Near-zero critical failures |
| Uniqueness | Duplicate candidates | Zero unresolved critical duplicates |
| Referential integrity | Valid parent references | 100% for active transactions |
| Mapping accuracy | Approved mappings | 100% critical mappings |
| Security | Unauthorized visibility defects | Zero critical defects |
| Reconciliation | Source-target control totals | Signed-off |
| Business usability | UAT scenarios passed | Agreed threshold |
| Exception aging | Open migration defects | Within exit criteria |

---

# 8. Migration Reconciliation Model

For each object define:

```text
SOURCE COUNT
      ↓
EXTRACT COUNT
      ↓
STAGED COUNT
      ↓
VALIDATED COUNT
      ↓
LOADED COUNT
      ↓
REJECTED COUNT
      ↓
REPROCESSED COUNT
      ↓
FINAL TARGET COUNT
```

Then reconcile:

```text
Source Population
      =
Successful Target Population
      +
Approved Exceptions
      +
Excluded Population
```

Each difference must have a documented reason.

---

# 9. Mock Migration Strategy

## Mock 1 — Technical Proof

Validate:

- Extract
- Transformation
- Load
- Basic referential integrity

## Mock 2 — Business Proof

Validate:

- Active requisitions
- Active applications
- Candidate profiles
- Ownership
- Status
- Reporting

## Mock 3 — Production Simulation

Validate:

- Full-volume execution
- Runtime
- Delta handling
- Reconciliation
- Security
- Cutover sequence
- Recovery

---

# 10. Migration Cutover Runbook

### T-30 days

- Freeze mapping design
- Finalize scope
- Resolve critical data defects
- Confirm privacy/retention rules

### T-14 days

- Final mock migration
- UAT sign-off
- Validate reconciliation reports
- Confirm operational owners

### T-7 days

- Confirm extract logic
- Validate migration scripts/processes
- Confirm cutover communications
- Confirm rollback criteria

### T-1 day

- Confirm source readiness
- Final delta preparation
- Freeze or controlled-change window

### Cutover

- Extract
- Transform
- Load
- Validate
- Reconcile
- Business sign-off

### T+1 to T+14

- Hypercare
- Exception resolution
- Reporting validation
- Defect trend monitoring

---

# 11. Migration Security & Privacy

- Minimum necessary data
- Approved retention scope
- Controlled staging area
- Encryption in transit and at rest where applicable
- Restricted migration access
- Sensitive-field classification
- Secure document handling
- Audit trail for migration actions
- No unmanaged extracts
- Controlled disposal of temporary files
- Country-specific privacy rules
- Post-migration access validation

---

# 12. Common Migration Anti-Patterns

### Anti-pattern 1 — “Migrate everything”

**Correction:** Migrate business value, not historical volume.

### Anti-pattern 2 — Loading before profiling

**Correction:** Profile first; cleanse and classify before transformation.

### Anti-pattern 3 — Status-by-label mapping

**Correction:** Map by semantic lifecycle meaning.

### Anti-pattern 4 — Ignoring duplicates

**Correction:** Resolve candidate identity before application migration.

### Anti-pattern 5 — No delta strategy

**Correction:** Design the migration window and late-change handling explicitly.

### Anti-pattern 6 — Technical-only reconciliation

**Correction:** Reconcile business populations and lifecycle states.

### Anti-pattern 7 — Migrating sensitive history by default

**Correction:** Apply privacy and retention decisions before scope lock.

### Anti-pattern 8 — Treating migration as an IT-only activity

**Correction:** Business owners must approve scope, meaning, exceptions and sign-off.

---

# 13. Migration Testing Matrix

| Test | Purpose |
|---|---|
| Unit transformation test | Validate individual mapping logic |
| Referential test | Validate parent-child relationships |
| Duplicate test | Validate identity rules |
| Volume test | Validate scale |
| Negative test | Validate rejection behavior |
| Security test | Validate access boundaries |
| UAT | Validate recruiter/business usability |
| Regression | Protect target process |
| Reconciliation | Prove completeness |
| Recovery test | Prove restartability |
| Cutover rehearsal | Validate end-to-end runbook |

---

# 14. SME Signals to Listen For

A strong RCM migration architect should naturally discuss:

- Candidate versus application identity
- Requisition/application parent-child relationships
- Status semantics and disposition taxonomy
- Reference-data crosswalks
- Active versus historical scope
- Duplicate management
- Privacy and retention
- Delta migration
- Data-quality thresholds
- Reconciliation
- Cutover and rollback
- Business sign-off
- Reporting continuity
- Operational ownership after go-live

---

# 15. Rapid-Fire Interview Answers

**Q1. What is your first migration question?**  
**A:** What business history must survive, and why?

**Q2. What should be profiled first?**  
**A:** Volume, quality, duplicates, lifecycle, references and sensitive data.

**Q3. What is the most important migration artifact?**  
**A:** The governed source-to-target mapping and scope decision set.

**Q4. How do you migrate statuses?**  
**A:** By business meaning and lifecycle semantics, not label matching.

**Q5. How do you handle duplicates?**  
**A:** Deterministic matching first; controlled review for ambiguous cases.

**Q6. How do you prove completeness?**  
**A:** Source-to-target reconciliation with documented exceptions.

**Q7. What is a delta load?**  
**A:** Migration of records changed or created after the main source snapshot.

**Q8. What should block cutover?**  
**A:** Unresolved critical data, security, referential-integrity or business-process defects.

**Q9. Should all historical data be migrated?**  
**A:** Only when there is an approved business, legal, reporting or audit reason.

**Q10. What makes a migration production-ready?**  
**A:** Repeatability, measurable quality, reconciliation, recovery and business sign-off.

---

# 16. Final Master Answer

> “When I plan SAP SuccessFactors Recruiting data migration, I start with business scope rather than extraction volume. I identify which candidates, requisitions and applications are operationally required and which historical data has a justified retention, reporting or audit purpose. I profile the source, classify data quality, resolve duplicates, define the target model and build a governed source-to-target mapping that preserves business meaning. I pay particular attention to parent-child dependencies between requisitions, candidates and applications, because referential integrity is essential to keeping recruiting history usable. I then run mock migrations, measure completeness, validity, uniqueness, consistency and referential integrity, and reconcile every migration wave against source control totals. Privacy, retention and access requirements are applied before cutover, not after. Finally, I execute a rehearsed cutover with delta handling, rollback criteria, business sign-off and post-go-live hypercare. My objective is not simply to move data; it is to create trusted recruiting history that can support operational continuity, analytics, compliance and future transformation.”

---

# 17. Master Migration Loop

**BUSINESS OUTCOME**  
↓  
**MIGRATION SCOPE**  
↓  
**RETENTION / PRIVACY**  
↓  
**SOURCE PROFILING**  
↓  
**DATA CLASSIFICATION**  
↓  
**TARGET MODEL**  
↓  
**IDENTITY & DUPLICATE STRATEGY**  
↓  
**REFERENCE-DATA CROSSWALK**  
↓  
**SOURCE → TARGET MAPPING**  
↓  
**CLEANSE / TRANSFORM**  
↓  
**VALIDATE**  
↓  
**MOCK MIGRATE**  
↓  
**RECONCILE**  
↓  
**UAT / SIGN-OFF**  
↓  
**CUTOVER / DELTA**  
↓  
**POST-CUTOVER QA**  
↓  
**MEASURE**  
↓  
**IMPROVE**

---

## Interviewer's 30-Second Migration Summary

> **“I treat RCM migration as a business-controlled data transformation. I define the right population, preserve candidate-requisition-application relationships, cleanse and deduplicate, map lifecycle meaning rather than labels, enforce privacy and retention, rehearse the migration, reconcile source to target, and cut over only with measurable evidence. The goal is trusted recruiting history and operational continuity—not simply a successful data load.”**

# ATA2b — Applied Onboarding — SAP SuccessFactors Onboarding
# Theme 11 — Migration & Cutover

## 20 Scenario-Based Interview Questions & STAR Answers

**Stream:** ATA2b — Onboarding — SAP SuccessFactors Onboarding  
**Theme:** 11 — Migration & Cutover  
**Target:** 20 scenarios  
**Answer method:** STAR — Situation → Task → Action → Result  
**Product posture:** Onboarding-first and architecture-first. Recruiting remains ATA2a.

---

## HR-ATA2B-B11-Q01 — Migration Strategy

### Interview Question
How would you define a migration strategy for an enterprise SAP SuccessFactors Onboarding implementation?

### STAR Answer
**Situation:** A global organization was moving from fragmented legacy onboarding processes to SuccessFactors Onboarding.
**Task:** I needed to determine what should migrate, transform, archive, or be retired.
**Action:** I classified data, documents, process configuration, historical records, integrations, and reference data according to business value, legal need, ownership, quality, and target-state requirements.
**Result:** Migration scope became controlled instead of becoming a wholesale copy of the legacy environment.

### SAP SuccessFactors Onboarding Example
I would migrate only information required for the approved target-state onboarding and historical obligations.

### SME Probe
Why should migration not be treated as “move everything”?

---

## HR-ATA2B-B11-Q02 — Data Migration Scope

### Interview Question
How would you determine which onboarding data should be migrated?

### STAR Answer
**Situation:** The legacy platform contained years of new-hire information with inconsistent quality.
**Task:** I needed a defensible migration scope.
**Action:** I assessed data purpose, retention obligations, worker lifecycle, downstream dependency, quality, sensitivity, and business usage.
**Result:** The migration contained only justified data and reduced unnecessary exposure.

### SAP SuccessFactors Onboarding Example
I would distinguish active onboarding records, required employee information, historical records, and information that should remain archived.

### SME Probe
What makes historical data a migration candidate rather than an archive candidate?

---

## HR-ATA2B-B11-Q03 — Data Profiling and Quality

### Interview Question
How would you assess legacy onboarding data before migration?

### STAR Answer
**Situation:** Source data contained missing, duplicate, and inconsistent values.
**Task:** I needed to understand migration risk before loading anything.
**Action:** I profiled completeness, uniqueness, validity, consistency, referential integrity, sensitive data, and business ownership, then defined cleansing rules.
**Result:** Data-quality risks became visible before cutover.

### SAP SuccessFactors Onboarding Example
Legacy new-hire records would be profiled against the target Onboarding and Employee Central information requirements.

### SME Probe
Who should approve data-cleansing rules?

---

## HR-ATA2B-B11-Q04 — Data Mapping

### Interview Question
How would you create a migration mapping between a legacy onboarding platform and SAP SuccessFactors Onboarding?

### STAR Answer
**Situation:** Source and target systems used different structures and terminology.
**Task:** I needed deterministic transformation.
**Action:** I mapped source attributes to target concepts, definitions, formats, ownership, validation, transformation rules, defaults, and exceptions.
**Result:** Migration became repeatable and testable.

### SAP SuccessFactors Onboarding Example
Mapping should distinguish onboarding data from fields that belong to the Employee Central employee master.

### SME Probe
What should happen when there is no valid target equivalent for a legacy field?

---

## HR-ATA2B-B11-Q05 — Historical Data Strategy

### Interview Question
How would you decide whether historical onboarding records should be migrated?

### STAR Answer
**Situation:** Business users wanted access to all historical onboarding records in the new platform.
**Task:** I needed to balance usability, cost, privacy, and retention.
**Action:** I evaluated legal retention, audit needs, business usage, data sensitivity, search requirements, and migration effort and compared migration with controlled archival.
**Result:** Historical information remained accessible where justified without overloading the target platform.

### SAP SuccessFactors Onboarding Example
Historical records not required for active processing may be retained through an approved archive strategy rather than migrated into operational onboarding.

### SME Probe
What is the danger of using the production system as a historical archive?

---

## HR-ATA2B-B11-Q06 — Document Migration

### Interview Question
How would you handle legacy onboarding documents during migration?

### STAR Answer
**Situation:** The legacy system contained large volumes of employee documents.
**Task:** I needed to migrate only valid and necessary documents.
**Action:** I classified documents by worker, type, legal retention, ownership, accessibility, security, quality, and target usage, then defined migration or archival treatment.
**Result:** Sensitive documents were handled deliberately rather than copied indiscriminately.

### SAP SuccessFactors Onboarding Example
Only documents with a justified target-state purpose should enter the new onboarding environment.

### SME Probe
How would you validate that a migrated document remains associated with the correct worker?

---

## HR-ATA2B-B11-Q07 — Migration Reconciliation

### Interview Question
How would you reconcile migrated onboarding data?

### STAR Answer
**Situation:** The initial migration appeared successful based on record counts alone.
**Task:** I needed confidence in business correctness.
**Action:** I reconciled counts, key identifiers, critical fields, document associations, status, exceptions, and representative records between source and target.
**Result:** Migration success became a business validation exercise rather than a technical load report.

### SAP SuccessFactors Onboarding Example
Reconciliation would verify that migrated records and required attributes align with the approved target-state model.

### SME Probe
Why is record-count reconciliation alone insufficient?

---

## HR-ATA2B-B11-Q08 — Mock Migration

### Interview Question
How would you use mock migrations before Onboarding cutover?

### STAR Answer
**Situation:** The team wanted to perform the migration only once during production cutover.
**Task:** I needed to reduce migration uncertainty.
**Action:** I executed multiple mock cycles, measuring extraction, transformation, loading, validation, reconciliation, defect correction, and elapsed time.
**Result:** Migration issues were resolved before production cutover and timing became predictable.

### SAP SuccessFactors Onboarding Example
Mock migration should use representative datasets and include downstream validation where migration affects Employee Central or enterprise processes.

### SME Probe
What makes a mock migration representative?

---

## HR-ATA2B-B11-Q09 — Cutover Strategy

### Interview Question
How would you choose between phased cutover and big-bang cutover for Onboarding?

### STAR Answer
**Situation:** The client wanted immediate global adoption but had significant country variation.
**Task:** I needed to select a safe transition approach.
**Action:** I compared population readiness, dependencies, data migration complexity, business criticality, support capacity, and rollback options.
**Result:** The cutover approach was selected based on risk rather than preference.

### SAP SuccessFactors Onboarding Example
A phased approach may be appropriate where countries or populations have materially different readiness.

### SME Probe
What condition would strongly favor phased cutover?

---

## HR-ATA2B-B11-Q10 — Cutover Runbook

### Interview Question
What should an Onboarding cutover runbook contain?

### STAR Answer
**Situation:** A previous deployment suffered from unclear ownership during cutover.
**Task:** I needed an executable operational plan.
**Action:** I documented activities, sequence, dependencies, owners, start/end criteria, validation, decision points, communication, contingency, and evidence requirements.
**Result:** Every participant understood what had to happen and when.

### SAP SuccessFactors Onboarding Example
The runbook should cover migration, configuration validation, integration activation, security, production smoke tests, business communications, and support handover.

### SME Probe
What makes a runbook executable rather than descriptive?

---

## HR-ATA2B-B11-Q11 — Freeze and Final Extraction

### Interview Question
How would you manage the final source-system freeze and extraction before Onboarding cutover?

### STAR Answer
**Situation:** New records continued to change while migration preparation was underway.
**Task:** I needed a controlled final data state.
**Action:** I established the freeze window, business exceptions, final extraction timing, validation, reconciliation, and ownership for changes occurring during the freeze.
**Result:** The production migration started from a controlled source baseline.

### SAP SuccessFactors Onboarding Example
The final extraction must align with the agreed cutover point and downstream processing dependencies.

### SME Probe
How do you handle a legally required change that occurs during the freeze?

---

## HR-ATA2B-B11-Q12 — Delta Migration

### Interview Question
How would you manage data created or changed after the initial migration?

### STAR Answer
**Situation:** A long cutover window meant that source data changed after the mock migration.
**Task:** I needed to avoid losing those changes.
**Action:** I designed a delta strategy using defined change criteria, timestamps or business keys where appropriate, duplicate protection, reconciliation, and final validation.
**Result:** The final target state reflected the approved cutover point.

### SAP SuccessFactors Onboarding Example
Delta processing should be designed carefully for active onboarding records and downstream employee lifecycle dependencies.

### SME Probe
What is the biggest risk in delta migration?

---

## HR-ATA2B-B11-Q13 — Data Privacy During Migration

### Interview Question
How would you protect sensitive onboarding data during migration?

### STAR Answer
**Situation:** Migration required extracting sensitive personal and employment information.
**Task:** I needed to minimize privacy and security exposure.
**Action:** I restricted access, minimized extracted data, secured transfer and storage, controlled temporary files, logged access, and defined disposal procedures.
**Result:** Migration was performed with controlled data exposure.

### SAP SuccessFactors Onboarding Example
Sensitive onboarding and document data should be handled according to approved enterprise privacy and security requirements.

### SME Probe
What temporary migration artifacts require the same security attention as production data?

---

## HR-ATA2B-B11-Q14 — Migration Defect Management

### Interview Question
How would you handle defects discovered during migration rehearsal?

### STAR Answer
**Situation:** Mock migration exposed invalid mappings and incomplete records.
**Task:** I needed to correct defects without weakening the migration baseline.
**Action:** I classified defects by source data, mapping, transformation, target configuration, or process issue, assigned ownership, corrected the root cause, and repeated migration validation.
**Result:** The final migration became repeatable and controlled.

### SAP SuccessFactors Onboarding Example
A mapping defect should be corrected at the transformation or mapping layer rather than manually fixing every target record.

### SME Probe
When is manual correction acceptable during migration?

---

## HR-ATA2B-B11-Q15 — Cutover Dependency Sequencing

### Interview Question
How would you sequence Onboarding cutover activities?

### STAR Answer
**Situation:** Multiple teams had dependent activities across data, configuration, integrations, and support.
**Task:** I needed a sequence that minimized risk.
**Action:** I mapped prerequisites and business dependencies, then sequenced freeze, migration, configuration validation, integration activation, security checks, smoke testing, business validation, and release decision points.
**Result:** Cutover dependencies became visible and execution became predictable.

### SAP SuccessFactors Onboarding Example
Integration activation should occur only when the required data and target configurations are ready.

### SME Probe
Which dependency would you validate before activating a critical integration?

---

## HR-ATA2B-B11-Q16 — Business Validation After Migration

### Interview Question
How would you prove that migrated onboarding data is usable by the business?

### STAR Answer
**Situation:** Technical reconciliation showed that records loaded successfully.
**Task:** I needed business confidence.
**Action:** HR and process owners validated representative records, documents, statuses, participant visibility, compliance information, and downstream outcomes.
**Result:** Migration received business acceptance based on usability, not just technical completion.

### SAP SuccessFactors Onboarding Example
Business validation should confirm that the migrated records support the intended onboarding process and operational responsibilities.

### SME Probe
Who should sign off on migrated business data?

---

## HR-ATA2B-B11-Q17 — Rollback and Contingency

### Interview Question
How would you prepare a contingency plan if Onboarding cutover fails?

### STAR Answer
**Situation:** A migration or integration defect could prevent safe production activation.
**Task:** I needed to protect active onboarding operations.
**Action:** I defined go/no-go thresholds, containment actions, source-system continuity where available, manual fallback, communication, recovery ownership, and decision authority.
**Result:** The organization had a controlled response rather than improvising during a failed cutover.

### SAP SuccessFactors Onboarding Example
Where technical rollback is limited, the contingency may involve preserving a safe operating state and controlling new-hire processing until recovery.

### SME Probe
Why should cutover contingency be designed around business continuity rather than only technical rollback?

---

## HR-ATA2B-B11-Q18 — Migration Rehearsal Metrics

### Interview Question
Which metrics would you use to assess migration readiness?

### STAR Answer
**Situation:** The project reported only the percentage of records loaded.
**Task:** I needed a broader readiness view.
**Action:** I tracked extraction completeness, transformation accuracy, load success, reconciliation variance, defect volume, critical-field accuracy, document validation, duration, and business acceptance.
**Result:** Migration readiness became measurable across quality and execution risk.

### SAP SuccessFactors Onboarding Example
Migration readiness should demonstrate that the target data is accurate, usable, secure, and available within the cutover window.

### SME Probe
Which migration metric would trigger a go/no-go discussion even if load success is high?

---

## HR-ATA2B-B11-Q19 — Post-Cutover Validation

### Interview Question
What would you validate immediately after Onboarding cutover?

### STAR Answer
**Situation:** A technically successful cutover could still contain business-impacting defects.
**Task:** I needed rapid confirmation of production readiness.
**Action:** I validated migrated records, new-hire initiation, forms, documents, tasks, permissions, integrations, notifications, monitoring, and critical business scenarios.
**Result:** Any cutover issue could be identified before broad operational impact.

### SAP SuccessFactors Onboarding Example
Post-cutover checks should cover the complete critical onboarding path and its enterprise dependencies.

### SME Probe
What is the difference between migration validation and post-cutover business validation?

---

## HR-ATA2B-B11-Q20 — Migration & Cutover Leadership

### Interview Question
How would you demonstrate architect-level leadership during Onboarding migration and cutover?

### STAR Answer
**Situation:** Migration was being treated as a technical data-load activity while business continuity depended on it.
**Task:** I needed to connect migration, cutover, architecture, and business readiness.
**Action:** I governed migration scope, data ownership, mapping, quality, privacy, reconciliation, rehearsal, sequencing, contingency, validation, and business acceptance as one transformation workstream.
**Result:** The organization transitioned to the target onboarding platform with controlled risk and measurable readiness.

### SAP SuccessFactors Onboarding Example
I would ensure the migration supports the target Onboarding architecture rather than reproducing legacy data and process complexity.

### SME Probe
What distinguishes a migration manager from an enterprise transformation architect?

---

# Theme 11 Completion Standard

A learner completes **ATA2b Theme 11 — Migration & Cutover** when they can:

- Define migration scope and strategy.
- Profile and cleanse legacy onboarding data.
- Create source-to-target mappings.
- Decide between migration and archival.
- Handle historical records and documents.
- Reconcile migrated data.
- Execute mock migrations.
- Choose appropriate cutover approaches.
- Build executable cutover runbooks.
- Manage freezes and delta migration.
- Protect sensitive data during migration.
- Govern migration defects.
- Sequence cutover dependencies.
- Obtain business validation and sign-off.
- Prepare contingency and continuity plans.
- Measure migration readiness.
- Lead post-cutover validation.
- Demonstrate architect-level migration leadership.

**Quality rule:** Every scenario demonstrates Situation → Task → Action → Result, contains a distinct migration/cutover decision, uses SAP SuccessFactors Onboarding as the primary example, remains separate from ATA2a Recruiting, avoids duplication with Themes 01–10 and later themes, and ends with an SME Probe.

**Scenario IDs:** HR-ATA2B-B11-Q01 → HR-ATA2B-B11-Q20

**Target achieved:** 20 unique scenario-based interview questions + 20 STAR answers.

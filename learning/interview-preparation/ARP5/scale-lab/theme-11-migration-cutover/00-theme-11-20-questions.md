# ARP5 — Theme 11: Migration & Cutover

## 20 Scenario-Based Interview Questions & STAR Answers

**Stream:** ARP5 — Applied SAP SuccessFactors Compensation & Variable Pay  
**Theme:** 11 — Migration & Cutover  
**Target:** 20 unique scenarios  
**Answer method:** STAR — Situation → Task → Action → Result  
**Product posture:** HCM-first, controlled migration, business-cycle safe

> **Boundary:** Theme 11 focuses on migrating compensation configuration and historical/planning information and executing the transition into production. It is distinct from Theme 10 Deployment & Release and Theme 12 Operations & Support.

### Migration & Cutover Spine

**Source Assessment → Mapping → Cleansing → Transformation → Reconciliation → Mock Migration → Cutover Plan → Production Load → Validation → Business Sign-Off**

---

## Q01 — Compensation Migration Strategy

### Interview Question
How would you develop a migration strategy for moving a legacy compensation process into SuccessFactors Compensation?

### STAR Answer
**Situation:** A global organization was moving from spreadsheet-based compensation planning to SuccessFactors.  
**Task:** I needed to define what should migrate, what should be transformed, and what could be archived.  
**Action:** I classified configuration, employee planning data, historical compensation information, reference data, and documents; assessed retention requirements; defined mapping, cleansing, reconciliation, mock migrations, and cutover controls.  
**Result:** The organization had a controlled migration scope rather than attempting to move every legacy artifact.

### SAP SuccessFactors Compensation & Variable Pay Example
Migration planning should distinguish Compensation templates and configuration from employee compensation history and cycle-specific planning data.

### SME Probe
What criteria determine whether historical compensation data should be migrated or archived?

---

## Q02 — Source-System Assessment

### Interview Question
What would you assess in a legacy compensation source before migration?

### STAR Answer
**Situation:** Compensation information existed across spreadsheets, legacy HR systems, and local databases.  
**Task:** I needed to determine migration feasibility and risk.  
**Action:** I assessed data ownership, structures, quality, completeness, duplicates, effective dates, formats, historical depth, business rules, and source-system dependencies.  
**Result:** The migration team understood source risks before building mappings.

### SAP SuccessFactors Compensation & Variable Pay Example
I would identify which employee and compensation attributes originate in Employee Central versus legacy compensation sources before loading planning data.

### SME Probe
Why should data profiling happen before mapping?

---

## Q03 — Migration Scope Definition

### Interview Question
How do you decide which compensation data belongs in the migration scope?

### STAR Answer
**Situation:** Stakeholders wanted all historical compensation records available in the new system.  
**Task:** I needed to balance business value, technical effort, retention, and risk.  
**Action:** I categorized data by operational need, regulatory or audit requirement, reporting value, historical relevance, and migration complexity.  
**Result:** The organization agreed on a justified migration scope and archive strategy.

### SAP SuccessFactors Compensation & Variable Pay Example
Current-cycle planning data may require operational migration, while older compensation history may be retained through approved reporting or archival mechanisms.

### SME Probe
Who should approve historical-data retention decisions?

---

## Q04 — Data Mapping

### Interview Question
How would you create a migration mapping for legacy compensation data?

### STAR Answer
**Situation:** Legacy compensation fields had inconsistent names and meanings.  
**Task:** I needed to create a reliable target mapping.  
**Action:** I documented source field, business definition, target field, transformation, default behavior, validation rule, ownership, and exception handling.  
**Result:** Mapping became a controlled business artifact rather than an informal spreadsheet.

### SAP SuccessFactors Compensation & Variable Pay Example
Map legacy salary, merit, adjustment, eligibility, incentive, currency, organizational, and effective-date information only where the target solution requires it.

### SME Probe
What makes a mapping semantically valid?

---

## Q05 — Data Cleansing

### Interview Question
What compensation data-quality issues would you expect during migration?

### STAR Answer
**Situation:** Legacy data contained duplicates, missing values, inconsistent currencies, and invalid organizational references.  
**Task:** I needed to make the data load-ready without changing business meaning incorrectly.  
**Action:** I profiled data, established cleansing rules, assigned business ownership for ambiguous records, corrected invalid values, and retained exception logs.  
**Result:** Migration inputs became more reliable and auditable.

### SAP SuccessFactors Compensation & Variable Pay Example
Employee identifiers, compensation amounts, currencies, effective dates, eligibility attributes, and organizational references should be validated before migration.

### SME Probe
Which data-cleansing decisions require business-owner approval?

---

## Q06 — Historical Compensation Data

### Interview Question
How would you migrate historical compensation information without polluting the new planning process?

### STAR Answer
**Situation:** The business wanted historical visibility but did not want legacy records to interfere with current planning.  
**Task:** I needed to separate historical information from active planning data.  
**Action:** I defined historical-retention requirements, target storage/use, reporting needs, effective dates, and whether the information should be operationally migrated or archived.  
**Result:** Historical visibility was preserved without compromising the current compensation design.

### SAP SuccessFactors Compensation & Variable Pay Example
Historical salary, merit, adjustment, and incentive information should be loaded only when the target model and business use case support it.

### SME Probe
What is the risk of migrating historical data simply because it exists?

---

## Q07 — Migrating Compensation Templates

### Interview Question
How would you approach migration of Compensation configuration between environments?

### STAR Answer
**Situation:** The project had completed configuration in a lower environment and needed to promote it to production.  
**Task:** I needed to preserve approved configuration without manual drift.  
**Action:** I identified configuration objects, dependencies, environment-specific values, migration sequence, validation checks, and post-migration reconciliation.  
**Result:** The production configuration matched the approved baseline.

### SAP SuccessFactors Compensation & Variable Pay Example
Templates, guidelines, budgets, permissions, workflow, and related Compensation configuration should be promoted using the organization's approved migration mechanism.

### SME Probe
How do you validate that migrated configuration is functionally equivalent?

---

## Q08 — Mock Migration

### Interview Question
Why is mock migration important for Compensation?

### STAR Answer
**Situation:** The production compensation cycle had a fixed launch window.  
**Task:** I needed to identify migration defects before the final cutover.  
**Action:** I executed mock migrations using representative data, measured load duration, reconciled counts and values, recorded errors, refined mappings, and repeated the exercise until stable.  
**Result:** Production cutover risk was materially reduced.

### SAP SuccessFactors Compensation & Variable Pay Example
Mock migration should exercise configuration, representative employee populations, compensation values, eligibility, and any required historical or planning data.

### SME Probe
What makes a mock migration realistic enough to trust?

---

## Q09 — Reconciliation After Migration

### Interview Question
How would you reconcile migrated compensation data?

### STAR Answer
**Situation:** The business needed assurance that legacy values were preserved correctly.  
**Task:** I needed objective reconciliation controls.  
**Action:** I compared record counts, employee populations, compensation totals, component values, currencies, effective dates, and exception records between source and target.  
**Result:** Migration completeness and accuracy became measurable.

### SAP SuccessFactors Compensation & Variable Pay Example
Reconcile salary, merit, adjustment, incentive, eligibility, and other approved migrated values using business-defined control totals.

### SME Probe
When is aggregate reconciliation insufficient?

---

## Q10 — Cutover Planning

### Interview Question
How would you build a cutover plan for an annual Compensation transformation?

### STAR Answer
**Situation:** The organization had a narrow window between final legacy planning and new-system launch.  
**Task:** I needed to coordinate technical and business activities within that window.  
**Action:** I sequenced source freeze, extraction, cleansing, transformation, load, validation, reconciliation, security activation, integration activation, smoke testing, and business approval.  
**Result:** Cutover activities had clear timing, owners, dependencies, and decision points.

### SAP SuccessFactors Compensation & Variable Pay Example
The cutover plan should protect the compensation-cycle timeline and align Employee Central data readiness with Compensation activation.

### SME Probe
What activity should never be left until the final hour of cutover?

---

## Q11 — Source Freeze

### Interview Question
Why is a source-data freeze important before compensation migration?

### STAR Answer
**Situation:** Legacy compensation data continued changing while extraction was underway.  
**Task:** I needed a stable source baseline.  
**Action:** I established a business-approved freeze window, identified permitted exceptions, captured late changes separately, and reconciled the final extract against the frozen baseline.  
**Result:** The migration source became controlled and repeatable.

### SAP SuccessFactors Compensation & Variable Pay Example
Freeze requirements should cover compensation planning data and any upstream employee attributes that affect the target cycle.

### SME Probe
How would you handle an urgent employee change during the freeze?

---

## Q12 — Cutover Reconciliation

### Interview Question
What reconciliation controls would you use during final Compensation cutover?

### STAR Answer
**Situation:** The final cutover involved multiple files and system dependencies.  
**Task:** I needed to confirm completeness before business activation.  
**Action:** I established control totals, population counts, amount totals, component totals, exception counts, and source-to-target comparisons at each major cutover stage.  
**Result:** The team could identify discrepancies before opening the cycle.

### SAP SuccessFactors Compensation & Variable Pay Example
Control totals can cover employee population, eligible population, salary basis, merit amounts, incentive amounts, and other approved planning values.

### SME Probe
What would you do if source and target totals differ by a small amount?

---

## Q13 — Cutover Failure

### Interview Question
The final migration reveals a material mismatch in compensation values. What would you do?

### STAR Answer
**Situation:** Reconciliation identified a significant difference shortly before production activation.  
**Task:** I needed to protect the business from incorrect compensation decisions.  
**Action:** I stopped progression, isolated the discrepancy, traced mapping and transformation logic, assessed affected populations, corrected the source or transformation, repeated validation, and obtained business approval before continuing.  
**Result:** Incorrect data was prevented from entering the live compensation cycle.

### SAP SuccessFactors Compensation & Variable Pay Example
A material difference in salary, merit, or incentive values should block activation until the cause and impact are understood.

### SME Probe
When is a mismatch a blocker rather than an exception?

---

## Q14 — Migrating Variable Pay Data

### Interview Question
What special considerations apply when migrating Variable Pay-related data?

### STAR Answer
**Situation:** The organization was moving incentive planning from a legacy process.  
**Task:** I needed to preserve the required inputs without importing obsolete calculation assumptions.  
**Action:** I separated employee targets, performance measures, historical payouts, calculation parameters, and current-cycle values, then mapped only approved target-state data.  
**Result:** Variable Pay started from clean and relevant inputs.

### SAP SuccessFactors Compensation & Variable Pay Example
Target opportunities and approved performance inputs should be migrated only according to the target Variable Pay plan design and effective cycle.

### SME Probe
Why should historical payout values not automatically become current calculation inputs?

---

## Q15 — Migration Security

### Interview Question
How would you protect sensitive compensation data during migration?

### STAR Answer
**Situation:** Migration files contained confidential salary and incentive information.  
**Task:** I needed to prevent unauthorized exposure.  
**Action:** I restricted access, minimized extracted fields, secured transfer and storage, controlled service identities, monitored access, and defined retention and deletion procedures.  
**Result:** Migration operated under the same confidentiality principles as the production solution.

### SAP SuccessFactors Compensation & Variable Pay Example
Migration datasets should contain only approved compensation information and be accessible only to authorized migration and business teams.

### SME Probe
What should happen to temporary migration files after successful cutover?

---

## Q16 — Business Validation After Migration

### Interview Question
How would you involve Compensation SMEs in migration validation?

### STAR Answer
**Situation:** Technical reconciliation showed that records loaded successfully, but business meaning still required validation.  
**Task:** I needed business confirmation of the migrated outcome.  
**Action:** I selected representative employee scenarios, reviewed compensation values, eligibility, effective dates, guidelines, budgets, and historical visibility with business SMEs, and recorded acceptance.  
**Result:** Migration was validated from both technical and business perspectives.

### SAP SuccessFactors Compensation & Variable Pay Example
Compensation specialists should validate representative merit, adjustment, incentive, and employee-population scenarios after migration.

### SME Probe
Why is technical reconciliation insufficient for business sign-off?

---

## Q17 — Parallel Run

### Interview Question
When would you consider running legacy and SuccessFactors compensation processes in parallel?

### STAR Answer
**Situation:** The organization had high financial and employee risk during the first compensation cycle.  
**Task:** I needed to determine whether parallel processing would materially reduce risk.  
**Action:** I assessed cycle complexity, financial exposure, reconciliation capability, duration, operational cost, and ability to compare outcomes.  
**Result:** Parallel execution was used only where its risk-reduction value justified the additional effort.

### SAP SuccessFactors Compensation & Variable Pay Example
A controlled parallel comparison may validate Compensation outcomes against the legacy calculation for a critical transition cycle.

### SME Probe
What makes a parallel run valuable rather than duplicative?

---

## Q18 — Cutover Go / No-Go

### Interview Question
What would determine your final migration cutover go/no-go decision?

### STAR Answer
**Situation:** The migration was technically complete but a few exceptions remained.  
**Task:** I needed to decide whether production activation was safe.  
**Action:** I assessed reconciliation, exception severity, affected population, business impact, security, integrations, test evidence, rollback options, and business acceptance.  
**Result:** The decision was made using explicit risk criteria rather than schedule pressure.

### SAP SuccessFactors Compensation & Variable Pay Example
Unresolved material differences in compensation values, eligibility, financial controls, or sensitive access should normally prevent cycle activation.

### SME Probe
Who should formally accept residual migration risk?

---

## Q19 — Cutover Support and Stabilization

### Interview Question
How would you support the business immediately after Compensation cutover?

### STAR Answer
**Situation:** The first live cycle generated questions about migrated values and process behavior.  
**Task:** I needed rapid stabilization without uncontrolled data changes.  
**Action:** I established hypercare, issue triage, reconciliation checks, migration exception handling, business support channels, and controlled correction procedures.  
**Result:** The organization transitioned from migration to normal operations with clear ownership.

### SAP SuccessFactors Compensation & Variable Pay Example
Support should cover eligibility, historical values, compensation recommendations, Variable Pay inputs, workflow, and integration outcomes related to migrated data.

### SME Probe
When should a post-cutover issue be treated as a migration defect versus an operational defect?

---

## Q20 — Migration Architecture Sign-Off

### Interview Question
As an architect, what must be true before you sign off Compensation migration and cutover?

### STAR Answer
**Situation:** Compensation migration affected sensitive employee data, financial outcomes, and a time-critical annual cycle.  
**Task:** I needed to establish complete migration readiness.  
**Action:** I verified scope, source assessment, mapping, cleansing, security, mock migration, reconciliation, cutover plan, source freeze, production load, validation, business sign-off, rollback, and hypercare.  
**Result:** The organization had a controlled transition with measurable evidence of completeness and correctness.

### SAP SuccessFactors Compensation & Variable Pay Example
The final sign-off should demonstrate that approved Compensation and Variable Pay data and configuration have transitioned correctly and that the business can safely operate the new cycle.

### SME Probe
What missing migration evidence would make you block production cutover?

---

## Completion Standard

- 20 unique ARP5 Theme 11 scenarios.
- Stable IDs: **HR-ARP5-B11-Q01 → HR-ARP5-B11-Q20**.
- Every scenario uses **Situation → Task → Action → Result**.
- Every scenario includes an SAP SuccessFactors Compensation & Variable Pay example.
- Every scenario includes an SME Probe.
- Focus remains on **Migration & Cutover**, not deployment execution or steady-state support.
- Coverage includes migration strategy, source assessment, scope, mapping, cleansing, history, configuration migration, mock migration, reconciliation, cutover, source freeze, failure handling, Variable Pay data, security, business validation, parallel run, go/no-go, stabilization, and sign-off.

**Cumulative ARP5 coverage:** 11/22 themes = **220/440 scenario positions**

**Next:** Theme 12 — Operations & Support

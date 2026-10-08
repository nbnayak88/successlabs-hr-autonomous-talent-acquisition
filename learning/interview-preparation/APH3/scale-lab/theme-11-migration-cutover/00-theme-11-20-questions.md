# APH3 — Theme 11: Migration & Cutover

## 20 Scenario-Based Interview Questions & STAR Answers

**Stream:** APH3 — Applied SAP SuccessFactors Performance & Goals  
**Theme:** 11 — Migration & Cutover  
**Target:** 20 unique scenarios  
**Answer method:** STAR — Situation → Task → Action → Result  
**Product posture:** HCM-first, SAP SuccessFactors Performance & Goals focused; architect-level migration and cutover thinking.

> **Boundary:** This theme focuses on migration strategy, legacy performance/goal data, data quality, mapping, mock migration, reconciliation, freeze, delta migration, cutover sequencing, validation, sign-off, recovery, and post-migration verification. Integration architecture belongs primarily to Theme 08; deployment and release governance belong primarily to Theme 10.

**Migration & cutover spine:**  
**Legacy Data → Scope → Profile → Cleanse → Map → Transform → Mock Migration → Reconcile → Freeze → Delta → Cutover → Validate → Sign-off → Recover → Verify**

---

## Q01 — How would you define the migration scope for a global Performance & Goals implementation?

### Interview Question
How would you decide which historical goals, performance forms, ratings, competencies, and feedback records should be migrated into SAP SuccessFactors Performance & Goals?

### STAR Answer
**Situation:** A global organization had several years of performance information across legacy HR systems, but the business had not agreed whether all history should move to SuccessFactors.

**Task:** I had to establish a defensible migration scope without creating unnecessary data volume or losing information needed for employees, managers, compliance, or talent decisions.

**Action:** I separated active-cycle data, operationally required history, legally or policy-required records, analytics-required history, and archival information. I assessed business value, data quality, privacy, retention requirements, technical feasibility, and user experience. I proposed migrating the minimum valuable history needed for operational continuity and retaining older records through an approved archive strategy.

**Result:** The program reduced migration complexity, preserved required evidence, and gave stakeholders a clear rationale for what would and would not be migrated.

### SAP SuccessFactors Performance & Goals Example
For SuccessFactors, I would explicitly classify historical Goal Plan and Performance Form data by business need rather than assuming every legacy field has a one-to-one destination.

### SME Probe
What criteria would make you retain historical performance data outside SuccessFactors rather than migrate it?

---

## Q02 — How would you assess the quality of legacy performance data before migration?

### Interview Question
A client says its legacy performance data is “mostly clean.” How would you validate that assumption?

### STAR Answer
**Situation:** A legacy performance repository contained employee goals, ratings, competencies, and review records accumulated over many years.

**Task:** I needed evidence that the data was migration-ready before committing to the cutover plan.

**Action:** I profiled completeness, uniqueness, validity, consistency, referential integrity, date ranges, employee identifiers, rating values, goal status, manager relationships, and obsolete records. I categorized defects into cleansing, transformation, exclusion, and business-decision buckets. I established measurable quality thresholds and assigned data owners.

**Result:** The team discovered hidden data-quality issues early and converted an ambiguous “mostly clean” assumption into measurable migration readiness.

### SAP SuccessFactors Performance & Goals Example
I would validate that legacy employee identifiers align with the SuccessFactors population and that legacy ratings, goal statuses, competencies, and form-cycle information can be represented correctly in the target model.

### SME Probe
Which data-quality metrics would you put on a migration readiness dashboard?

---

## Q03 — How would you map a legacy goal structure to SuccessFactors Goal Management?

### Interview Question
A legacy system has goal categories, objectives, weightings, statuses, and custom fields that do not exactly match the SuccessFactors Goal Plan. How would you approach the mapping?

### STAR Answer
**Situation:** The legacy goal model contained several custom structures that had evolved independently across business units.

**Task:** I needed a target-aligned mapping without recreating every legacy customization.

**Action:** I identified the business meaning of each legacy attribute, mapped equivalent concepts to the SuccessFactors target model, classified fields as required, optional, transformed, archived, or excluded, and documented exceptions. I validated mappings with HR process owners rather than allowing technical teams to infer business semantics.

**Result:** The migration mapping became business-owned, easier to test, and less dependent on legacy implementation details.

### SAP SuccessFactors Performance & Goals Example
I would map legacy goal fields to the approved SuccessFactors Goal Plan structure, including goal category, status, weights, dates, and relevant custom attributes where there is a justified business requirement.

### SME Probe
What would you do when a legacy field has no meaningful target equivalent?

---

## Q04 — How would you migrate historical performance ratings when rating scales have changed?

### Interview Question
The legacy system uses a five-point scale while the target design uses a different rating scale. How would you preserve historical meaning?

### STAR Answer
**Situation:** Historical performance ratings used a scale that differed from the approved target-state rating model.

**Task:** I needed to preserve the integrity and interpretability of historical ratings.

**Action:** I first determined whether the scales were semantically equivalent. If conversion was necessary, I obtained HR governance approval for an explicit mapping rule and preserved the original rating where required for auditability. I documented conversion logic and tested edge cases before migration.

**Result:** Historical performance evidence remained interpretable without silently changing employee history.

### SAP SuccessFactors Performance & Goals Example
I would avoid simply converting values numerically. I would validate the business meaning of the legacy rating scale against the SuccessFactors rating scale and preserve source evidence where appropriate.

### SME Probe
Why is a numerical conversion alone insufficient for performance ratings?

---

## Q05 — How would you handle employee and organizational dependencies before migrating performance data?

### Interview Question
What master-data dependencies must be ready before migrating Performance & Goals history?

### STAR Answer
**Situation:** Performance records were linked to employees, managers, organizations, job information, and performance-cycle structures.

**Task:** I had to ensure the target employee population could correctly own and display migrated records.

**Action:** I established dependency sequencing around employee identifiers, employment status, manager relationships, organizational structures, and relevant target configuration. I created validation rules to identify orphaned or ambiguous records before migration.

**Result:** The migration avoided records becoming detached from the correct employee or organizational context.

### SAP SuccessFactors Performance & Goals Example
I would verify that Employee Central foundation data and required target structures are established before loading Performance & Goals history.

### SME Probe
What is the risk of migrating performance data before validating employee identifiers?

---

## Q06 — How would you approach cleansing versus transformation decisions?

### Interview Question
How do you decide whether a legacy data defect should be corrected, transformed, excluded, or retained?

### STAR Answer
**Situation:** The legacy dataset contained inconsistent statuses, obsolete categories, incomplete descriptions, and duplicate records.

**Task:** I needed a controlled decision model rather than allowing migration developers to make ad hoc changes.

**Action:** I classified each issue according to business meaning, target compatibility, retention requirements, and risk. Business owners approved rules for cleansing and transformation. Every rule was documented and tested against representative records.

**Result:** Data changes became traceable and repeatable, reducing migration risk and preserving accountability.

### SAP SuccessFactors Performance & Goals Example
For Goal Plan and Performance Form data, I would distinguish technical normalization from changes that alter the meaning of an employee's historical performance record.

### SME Probe
When should a migration team refuse to “fix” a historical record?

---

## Q07 — How would you choose a migration approach for Performance & Goals data?

### Interview Question
How would you decide between standard migration capabilities, controlled file-based loads, transformation scripts, or other migration mechanisms?

### STAR Answer
**Situation:** The client had multiple legacy sources and varying levels of data complexity.

**Task:** I needed a migration approach that balanced repeatability, control, volume, auditability, and maintainability.

**Action:** I assessed target-supported capabilities, data volume, transformation complexity, security requirements, reconciliation needs, and repeatability. I selected the simplest supported mechanism that could satisfy the approved requirements and avoided custom tooling where standard capabilities were sufficient.

**Result:** The migration approach was easier to govern, test, repeat, and support.

### SAP SuccessFactors Performance & Goals Example
I would align the migration mechanism with supported SuccessFactors loading capabilities and the approved target data model rather than designing a custom migration framework first.

### SME Probe
What architectural principle guides your migration-tool selection?

---

## Q08 — What would you include in a mock migration?

### Interview Question
What makes a mock migration meaningful rather than just a technical dry run?

### STAR Answer
**Situation:** The project had a compressed cutover window and needed confidence before production migration.

**Task:** I had to prove that the end-to-end migration could produce business-correct results.

**Action:** I used representative data covering normal, high-volume, exceptional, global, incomplete, and historical cases. The mock migration included extraction, transformation, load, reconciliation, business validation, defect correction, and timing measurement. I captured lessons and converted them into cutover actions.

**Result:** The mock migration exposed both data defects and operational sequencing issues before production.

### SAP SuccessFactors Performance & Goals Example
I would test representative Goal Plans, Performance Forms, ratings, competencies, employee populations, and manager relationships in the target SuccessFactors environment.

### SME Probe
Why should a mock migration measure elapsed time as well as data correctness?

---

## Q09 — How would you reconcile migrated performance data?

### Interview Question
How would you prove that the migrated data is complete and accurate?

### STAR Answer
**Situation:** Stakeholders wanted assurance that thousands of historical performance records had not been lost or altered.

**Task:** I needed objective reconciliation evidence.

**Action:** I defined reconciliation at multiple levels: source-to-target record counts, employee counts, key field comparisons, status distributions, rating distributions, totals for measurable attributes, exception counts, and sampled record-level validation. Business owners reviewed material exceptions.

**Result:** Migration sign-off was based on evidence rather than confidence or visual inspection.

### SAP SuccessFactors Performance & Goals Example
For SuccessFactors, reconciliation could compare legacy versus target counts for employees, goals, forms, ratings, competencies, and relevant statuses, followed by sample-based business validation.

### SME Probe
What is the difference between technical reconciliation and business reconciliation?

---

## Q10 — How would you handle an active performance cycle during migration?

### Interview Question
The organization is midway through an annual performance cycle when the migration cutover approaches. What would you do?

### STAR Answer
**Situation:** Employees and managers were actively updating goals and performance information while the target platform was being prepared.

**Task:** I had to prevent loss or duplication of in-flight performance information.

**Action:** I established a cycle-specific strategy: identify active records, define a business freeze point, determine whether open records would migrate or be completed in the legacy system, capture the final state, and establish explicit ownership for exceptions. I avoided mixing partially completed source records with newly initiated target-state processes without governance approval.

**Result:** The organization achieved a controlled transition without compromising the active performance cycle.

### SAP SuccessFactors Performance & Goals Example
I would identify open Goal Plans and Performance Forms and define whether each cycle would be completed in the legacy platform, migrated at a controlled state, or restarted under an approved SuccessFactors process.

### SME Probe
What makes an active-cycle migration more risky than historical migration?

---

## Q11 — How would you design the migration freeze?

### Interview Question
What should a performance-data freeze mean operationally?

### STAR Answer
**Situation:** The final migration required a stable source dataset, but HR users continued to update goals and reviews.

**Task:** I needed a freeze that protected data integrity without unnecessarily stopping business activity.

**Action:** I defined the exact objects and user populations covered by the freeze, start and end times, communication plan, ownership, exception process, final extraction point, and validation checks. I coordinated the freeze with the business cycle and cutover plan.

**Result:** The source data became stable and auditable for final migration while stakeholders understood exactly what activity was restricted.

### SAP SuccessFactors Performance & Goals Example
The freeze would cover approved legacy performance objects and user actions necessary to prevent changes after the final extraction baseline.

### SME Probe
Why should a freeze be defined by business objects and actions rather than simply saying “system freeze”?

---

## Q12 — How would you handle delta migration after the mock or initial load?

### Interview Question
Why is delta migration important, and how would you control it?

### STAR Answer
**Situation:** A mock or early migration had already loaded a baseline, but business users continued changing source records before final cutover.

**Task:** I needed to migrate only legitimate changes without duplicating or overwriting valid target data.

**Action:** I established a clear baseline timestamp or extraction boundary, identified changed and newly created records, defined update rules, reconciled delta records separately, and tested repeatability before production. I ensured that delta logic respected the approved source-of-truth model.

**Result:** The final load captured legitimate changes while minimizing duplication and uncontrolled overwrites.

### SAP SuccessFactors Performance & Goals Example
For migrated Goal Plans and Performance Forms, I would define precisely which records changed after the baseline and how those changes should be represented in the target.

### SME Probe
What is the biggest risk when delta logic is not idempotent?

---

## Q13 — How would you manage privacy and security during performance-data migration?

### Interview Question
Performance records are sensitive employee information. How would you protect them during migration?

### STAR Answer
**Situation:** The migration involved sensitive ratings, feedback, goals, and performance evidence.

**Task:** I needed to maintain confidentiality and controlled access throughout extraction, transformation, transfer, loading, and validation.

**Action:** I applied least-privilege access, minimized copied data, protected migration files and temporary stores, controlled administrator access, defined retention and deletion rules for intermediate data, and included security validation in migration readiness.

**Result:** The migration process reduced exposure risk and provided evidence of controlled handling of sensitive HR data.

### SAP SuccessFactors Performance & Goals Example
I would validate target permissions and ensure migrated performance information is visible only to authorized employee, manager, HR, and other approved roles.

### SME Probe
Why can migration extracts be a greater security risk than the target system itself?

---

## Q14 — How would you sequence a global migration and cutover?

### Interview Question
A global organization has multiple regions, performance cycles, and data-quality conditions. How would you sequence the migration?

### STAR Answer
**Situation:** Regional differences made a single uncontrolled migration risky.

**Task:** I needed a sequence that reduced business and data risk while providing learning from early waves.

**Action:** I segmented populations using business readiness, data quality, complexity, regulatory considerations, cycle timing, and operational dependency. I used an early controlled wave to validate the migration model, incorporated lessons, then progressed through subsequent waves with explicit entry and exit criteria.

**Result:** Migration risk became manageable and lessons from earlier waves improved later cutovers.

### SAP SuccessFactors Performance & Goals Example
I would sequence SuccessFactors Performance & Goals migration by approved population and cycle readiness rather than simply by geography.

### SME Probe
What would make a region unsuitable for the first migration wave?

---

## Q15 — What would you do if the final migration reconciliation shows unexplained discrepancies?

### Interview Question
The final reconciliation shows that target record counts are lower than expected. Cutover is only hours away. How would you respond?

### STAR Answer
**Situation:** A material reconciliation variance appeared during final validation.

**Task:** I had to determine whether it was an expected transformation, a migration defect, a source-data issue, or a control failure.

**Action:** I stopped sign-off for the affected scope, classified the variance, traced representative records from source through transformation to target, assessed business impact, and involved the data owner and migration lead. I used predefined go/no-go thresholds rather than allowing schedule pressure to override evidence.

**Result:** The team either corrected the issue before proceeding or made an explicitly governed decision to defer the affected population.

### SAP SuccessFactors Performance & Goals Example
I would investigate missing Goal Plans, Performance Forms, ratings, or employee records through source-to-target traceability before approving the SuccessFactors cutover.

### SME Probe
Who should have authority to accept a material migration variance?

---

## Q16 — How would you design migration rollback or recovery?

### Interview Question
What does rollback mean for a Performance & Goals migration?

### STAR Answer
**Situation:** The program needed a recovery strategy in case production validation failed after migration.

**Task:** I needed to protect business continuity without assuming that every migrated record could simply be “undone.”

**Action:** I defined recovery decision points, preserved source-system availability or archive evidence as agreed, identified target-state cleanup or restoration mechanisms, established business-cycle continuity options, and documented ownership and timing. I distinguished rollback of configuration from rollback of employee data.

**Result:** The program had a realistic recovery strategy instead of an overly simplistic rollback statement.

### SAP SuccessFactors Performance & Goals Example
I would establish whether failed migration data can be safely removed or corrected in the target and ensure that the legacy source remains available according to the approved transition and retention strategy.

### SME Probe
Why is data rollback often harder than application rollback?

---

## Q17 — How would you decide whether to migrate old competencies and historical feedback?

### Interview Question
Would you automatically migrate all historical competencies and feedback into SuccessFactors?

### STAR Answer
**Situation:** The legacy system contained years of competency assessments and manager feedback with inconsistent structures.

**Task:** I needed to determine which information delivered meaningful business value.

**Action:** I evaluated usage, retention obligations, talent-process dependencies, data quality, employee experience, and target compatibility. I separated information required for active talent decisions from archival evidence and avoided migrating low-value historical content merely because it existed.

**Result:** The target system remained focused while required historical evidence was retained through an approved approach.

### SAP SuccessFactors Performance & Goals Example
I would migrate competencies and feedback only where their target-state purpose, structure, and business value are clear and approved.

### SME Probe
How can excessive historical migration damage the employee experience?

---

## Q18 — How would you validate performance data after cutover?

### Interview Question
What post-cutover checks would you perform before declaring migration complete?

### STAR Answer
**Situation:** The production migration had completed successfully from a technical perspective.

**Task:** I needed to prove that employees, managers, HR, and reporting users could actually use the migrated data correctly.

**Action:** I performed targeted employee-level validation, manager visibility checks, Goal Plan and Performance Form validation, rating and status checks, security validation, exception reconciliation, and business-owner sampling. I prioritized critical populations and high-risk scenarios.

**Result:** Technical completion was converted into business confidence and operational readiness.

### SAP SuccessFactors Performance & Goals Example
I would validate representative employee and manager journeys in SuccessFactors, including access to historical goals, forms, ratings, and relevant performance evidence.

### SME Probe
What is the difference between migration completion and migration acceptance?

---

## Q19 — How would you communicate migration readiness and go/no-go to executives?

### Interview Question
How would you explain whether the Performance & Goals migration is ready for cutover to an executive steering committee?

### STAR Answer
**Situation:** Executives needed a simple decision while the migration team had many technical details.

**Task:** I had to convert migration evidence into a clear go/no-go recommendation.

**Action:** I summarized scope, data-quality status, reconciliation results, unresolved defects, security readiness, freeze readiness, cutover timing, business validation, recovery options, and explicit threshold breaches. I separated facts, risks, mitigations, and decision requests.

**Result:** Executives could make an informed decision without needing to interpret migration-level technical detail.

### SAP SuccessFactors Performance & Goals Example
The readiness view would show whether the SuccessFactors Performance & Goals population, historical data, security, validation, and business sign-off met agreed entry criteria.

### SME Probe
What evidence would cause you to recommend “no-go” even when the project is behind schedule?

---

## Q20 — How would you measure the business value of a successful Performance & Goals migration?

### Interview Question
Beyond “the data moved,” how would you demonstrate that the migration created business value?

### STAR Answer
**Situation:** The program had successfully moved historical performance information, but stakeholders wanted evidence of transformation value.

**Task:** I needed to connect migration outcomes to employee, manager, HR, and business outcomes.

**Action:** I measured data completeness and accuracy first, then adoption, time spent retrieving historical performance information, manager usability, cycle continuity, reporting availability, reduction in manual reconciliation, and the ability to use a consistent performance process. I linked these measures to the target-state transformation objectives.

**Result:** Migration was positioned not as a technical data movement exercise but as an enabler of a more consistent, accessible, and governed performance-management capability.

### SAP SuccessFactors Performance & Goals Example
SuccessFactors can become the trusted performance experience when migrated data is accurate, accessible to authorized users, and aligned with the target performance process and analytics needs.

### SME Probe
What KPI would best prove that migration enabled transformation rather than merely data movement?

---

## Completion Standard

- 20 unique migration/cutover scenarios completed: **HR-APH3-B11-Q01 → HR-APH3-B11-Q20**
- Every scenario follows **STAR: Situation → Task → Action → Result**.
- Every scenario includes a **SAP SuccessFactors Performance & Goals example**.
- Every scenario includes an **SME Probe**.
- Theme remains focused on **migration, data quality, reconciliation, freeze, delta, cutover, recovery, and post-migration verification**.
- Integration architecture is not duplicated from Theme 08.
- Deployment/release governance is not duplicated from Theme 10.
- Questions emphasize architect-level judgment, business continuity, data integrity, security, and measurable business value.

**Cumulative APH3 coverage:** 11/22 themes = **220/440 scenario positions**

**Next:** Theme 12 — Operations & Support

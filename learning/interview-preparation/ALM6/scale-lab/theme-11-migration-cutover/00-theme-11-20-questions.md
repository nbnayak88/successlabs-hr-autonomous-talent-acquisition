# ALM6 — Theme 11: Migration & Cutover
## Applied SAP SuccessFactors Learning — Interview Preparation

**Theme:** Migration & Cutover  
**Scenario count:** 20  
**Response pattern:** Situation → Task → Action → Result (STAR)  
**Migration signal:** Demonstrate source profiling, mapping, cleansing, controlled loading, reconciliation, cutover planning, exception management, and business sign-off. Confirm the supported migration utilities and data objects for the current SAP SuccessFactors Learning landscape.

---

## Q01 — Define migration scope and strategy
**Question:** A global organization is replacing a legacy LMS with SAP SuccessFactors Learning. How would you establish the migration strategy?

**Situation:** Learning content, users, assignments, completion history, and compliance evidence reside across a legacy platform and spreadsheets.  
**Task:** Decide what must migrate, what should be archived, and what can be retired.  
**Action:** I would inventory data objects and volumes, identify legal and audit retention needs, assess data quality and business value, and classify each object as migrate, transform, archive, or retire. I would define acceptance criteria, owners, reconciliation rules, cutover dependencies, and the supported load approach for each object.  
**Result:** The team has a bounded migration scope with clear rationale and measurable acceptance criteria.  
**SAP SuccessFactors example:** A migration plan for learner accounts, learning history, item metadata, and compliance evidence, with separate treatment for obsolete content.  
**SME probe:** Which data would you refuse to migrate without a clear owner and retention decision?

## Q02 — Profile and assess legacy data quality
**Question:** The legacy LMS has inconsistent user identifiers, missing dates, and duplicate completions. What would you do before loading data?

**Situation:** Source extracts contain anomalies that could compromise learner history and compliance reporting.  
**Task:** Understand the quality issues and establish safe remediation rules.  
**Action:** I would profile completeness, uniqueness, validity, referential integrity, and duplication; quantify issues by source and population; and classify them by risk. I would agree remediation with data owners, define acceptable exceptions, and retain a baseline extract so that every correction is traceable.  
**Result:** Data defects are visible and prioritized before they become target-system problems.  
**SAP SuccessFactors example:** A data-quality report for missing learner IDs, invalid completion dates, and duplicate history records.  
**SME probe:** How would you decide whether to remediate a record, exclude it, or preserve it in an archive?

## Q03 — Map legacy learning objects to target structures
**Question:** The old LMS uses different object types and status values from SuccessFactors Learning. How would you create the mapping?

**Situation:** Source learning structures do not map one-to-one to target objects.  
**Task:** Translate source semantics into an approved target model without losing meaning.  
**Action:** I would document source and target definitions, identify one-to-many or many-to-one mappings, define transformation rules for status and dates, and get learning and compliance owners to approve ambiguous cases. I would test representative records and document unmapped values rather than assigning arbitrary defaults.  
**Result:** Mapping is explicit, reviewable, and aligned with business meaning.  
**SAP SuccessFactors example:** Mapping legacy course and completion statuses to the supported target learning structures and status semantics.  
**SME probe:** What would you do when two legacy statuses appear equivalent but have different audit meanings?

## Q04 — Reconcile learner identities
**Question:** Historical records refer to email addresses that have changed, while the target system uses a stable employee identifier. How would you match records?

**Situation:** Identity inconsistencies could attach learning history to the wrong person or leave it orphaned.  
**Task:** Establish reliable identity matching and manage uncertain records safely.  
**Action:** I would agree authoritative identifiers and approved cross-reference rules, match records using deterministic evidence first, and route ambiguous matches to a controlled exception queue. I would not rely on email alone where it can change or be reused. I would validate samples with HR owners and retain a record of match decisions.  
**Result:** History is associated with the correct learner wherever evidence supports it, while uncertain records remain visible for resolution.  
**SAP SuccessFactors example:** A governed crosswalk between legacy learner identifiers and current worker identifiers.  
**SME probe:** What evidence is sufficient to link a historical learner record to a rehired employee?

## Q05 — Migrate historical completion records
**Question:** Compliance owners require several years of completion history in the new LMS. How would you protect its integrity?

**Situation:** Historical completions are needed for audits, but legacy data includes different definitions of completion and evidence.  
**Task:** Preserve trustworthy history and avoid granting credit based on unsupported records.  
**Action:** I would define eligible history, required evidence, date and status rules, and treatment of missing or conflicting data. I would map records to valid target users and learning objects, test the supported load mechanism, reconcile counts and samples, and obtain sign-off from compliance owners. I would retain source extracts and migration logs according to policy.  
**Result:** The migrated history has an explainable lineage and known limitations.  
**SAP SuccessFactors example:** A controlled load of approved historical learning records with a reconciliation report by source status and target item.  
**SME probe:** Would you migrate a completion marked “passed” if the legacy source cannot establish what passing meant?

## Q06 — Decide what to do with legacy content
**Question:** The old LMS contains hundreds of courses, some obsolete and some still assigned. How would you decide what to migrate?

**Situation:** Migrating every content object would add cost and preserve outdated or unowned material.  
**Task:** Select content based on business need, validity, ownership, and technical compatibility.  
**Action:** I would classify content by active usage, compliance relevance, expiry, owner, language, format, accessibility, and licensing. I would validate package compatibility and tracking in the target, obtain content-owner approval, and define how obsolete content and its evidence will be retained or archived.  
**Result:** The target catalog is more purposeful and avoids carrying forward unnecessary technical and governance debt.  
**SAP SuccessFactors example:** Migration of approved current courses while archiving obsolete packages and preserving required historical evidence.  
**SME probe:** How would you treat an obsolete course that still has legally required completion history?

## Q07 — Plan mock migrations and rehearsals
**Question:** The first full migration is planned for the production weekend. What would you recommend?

**Situation:** No end-to-end rehearsal has demonstrated load duration, error rates, or reconciliation effort.  
**Task:** Reduce cutover uncertainty before production.  
**Action:** I would run one or more representative mock migrations using realistic data volumes, measure extraction, transformation, load, validation, and exception resolution, and update estimates and runbooks. I would test reruns and failure recovery, confirm data freeze assumptions, and define pass/fail criteria for the final rehearsal.  
**Result:** The cutover plan is based on observed performance and proven recovery steps rather than estimates alone.  
**SAP SuccessFactors example:** A mock migration of users and learning history followed by record-count and sample-level reconciliation.  
**SME probe:** What must a rehearsal prove beyond whether the load process finishes?

## Q08 — Design cutover and data freeze
**Question:** Learners continue completing courses while the legacy LMS is being migrated. How would you handle the final data window?

**Situation:** Source records can change between extraction and cutover, creating gaps or duplicates.  
**Task:** Define a controlled freeze or delta strategy that preserves recent activity.  
**Action:** I would agree the business cutover window, identify which source activities must pause, and decide whether a final delta extract is supported and appropriate. I would define timestamps, ownership, reconciliation, and handling for in-flight completions, then communicate learner and administrator actions. I would validate the final extract before target acceptance.  
**Result:** The migration accounts for activity during transition and makes the treatment of in-flight records explicit.  
**SAP SuccessFactors example:** A controlled final extract and reconciliation of completions recorded close to the agreed legacy cutover time.  
**SME probe:** How would you prove that no valid completion was lost between the initial extract and final cutover?

## Q09 — Manage migration exceptions
**Question:** Thousands of records fail target validation, and the go-live date is approaching. How would you manage the exceptions?

**Situation:** Failed records include both low-risk metadata issues and potentially critical compliance history.  
**Task:** Prioritize remediation and make the residual risk visible.  
**Action:** I would classify exceptions by business and compliance impact, identify root causes and affected populations, assign owners and due dates, and distinguish fix-and-reload from approved exclusion or archive. I would track counts and aging, test corrections, and prevent critical exceptions from being hidden inside an aggregate success rate.  
**Result:** The team focuses effort on the most consequential issues and retains an auditable disposition for every exception class.  
**SAP SuccessFactors example:** An exception register separating invalid historical completions from noncritical catalog metadata errors.  
**SME probe:** What exception category would block go-live even if the overall migration success percentage were high?

## Q10 — Reconcile source and target after load
**Question:** The migration job reports success, but target completion counts are lower than the source extract. What is your approach?

**Situation:** Technical completion did not prove business-data completeness.  
**Task:** Explain the variance and prove whether the target is acceptable.  
**Action:** I would compare counts by object type, status, date range, and population; inspect rejected and transformed records; sample source-to-target lineage; and classify differences as expected exclusions, duplicates, mapping issues, or lost records. I would correct and rerun the relevant scope where safe, then repeat reconciliation and obtain owner sign-off.  
**Result:** Migration acceptance is based on explained, evidenced variances rather than a successful job status.  
**SAP SuccessFactors example:** A source-to-target reconciliation for learner records and historical completions.  
**SME probe:** Why are matching aggregate counts not enough to prove that the correct records migrated?

## Q11 — Handle duplicates and reruns safely
**Question:** A migration load must be rerun after a transformation defect. How would you prevent duplicate learners or completions?

**Situation:** A partial load has already written some records to the target.  
**Task:** Correct the defect without compounding existing data.  
**Action:** I would determine the load's idempotency and duplicate-handling behavior, identify the records already processed, and use the supported correction or reload approach. I would test the rerun in a non-production environment, preserve run IDs and logs, and reconcile the final target against the approved dataset.  
**Result:** The team can recover from the failed run with controlled duplication risk and clear evidence.  
**SAP SuccessFactors example:** A tested rerun procedure for partially loaded historical records.  
**SME probe:** What evidence would you require before deleting or reloading any target records?

## Q12 — Validate dates, time zones, and validity periods
**Question:** Migrated credentials appear expired in one region but valid in another. How would you investigate?

**Situation:** Date interpretation or validity rules may differ between the legacy source and target.  
**Task:** Establish consistent policy-based treatment of dates and expiry.  
**Action:** I would compare source timestamps, time zones, effective dates, validity periods, and target calculations; verify whether the source stores date-only or timestamp values; and create boundary tests around expiry. I would agree the business interpretation with the policy owner and rerun affected transformations after approval.  
**Result:** Credential validity is consistent with the approved rule and differences can be explained.  
**SAP SuccessFactors example:** Tests for completion and expiry dates at time-zone boundaries and on the exact expiry date.  
**SME probe:** How would you handle a legacy timestamp that lacks a reliable time-zone indicator?

## Q13 — Migrate in phases or as a single cutover
**Question:** The organization has a very large global learner population. How would you choose phased migration versus a single cutover?

**Situation:** A single cutover may be operationally risky, but phased migration may introduce coexistence complexity.  
**Task:** Select a migration strategy based on dependencies, risk, and business readiness.  
**Action:** I would compare population and regional dependencies, data synchronization needs, learning continuity, compliance deadlines, support capacity, and rollback feasibility. I would model coexistence ownership and reconciliation if phasing, or prove cutover duration and recovery if using a single event. I would recommend the approach that best meets agreed risk and continuity criteria.  
**Result:** The strategy is based on explicit trade-offs rather than a default preference for one migration style.  
**SAP SuccessFactors example:** A regional wave migration with clear ownership for source and target learning records during each wave.  
**SME probe:** What hidden complexity does phased migration introduce when learners collaborate across regions?

## Q14 — Preserve audit evidence and data lineage
**Question:** An auditor challenges a completion record that was migrated from the legacy LMS. How would you support the investigation?

**Situation:** The target record is present, but the auditor needs to know where it came from and how it was transformed.  
**Task:** Reconstruct the record's lineage and explain the migration decision.  
**Action:** I would retain the source record reference, extract timestamp, mapping and transformation version, load run ID, validation result, exception disposition, and approval where applicable. I would compare the source and target values, explain any approved transformation, and avoid claiming evidence that was not retained.  
**Result:** The organization can support a defensible audit trail for migrated learning history.  
**SAP SuccessFactors example:** A lineage record linking a target completion to its legacy source and migration reconciliation evidence.  
**SME probe:** What would you tell the auditor if the source system no longer contains the supporting assessment evidence?

## Q15 — Manage cutover communications and learner continuity
**Question:** Learners need to complete mandatory training during the migration window. How would you reduce disruption?

**Situation:** The transition could interrupt access, create duplicate assignments, or leave learners uncertain about where to complete training.  
**Task:** Protect compliance deadlines and give users clear instructions.  
**Action:** I would identify critical learning windows, agree any blackout period with business owners, communicate access and completion rules, provide support contacts, and define how in-flight completions will be handled. I would verify the target catalog and assignment state before opening access and publish clear guidance on the source-versus-target boundary.  
**Result:** Learners have a clear path during transition and business owners understand any temporary constraints.  
**SAP SuccessFactors example:** A migration communication plan that explains when learners should use the legacy LMS versus the new Learning environment.  
**SME probe:** How would you handle a completion made in the legacy system after the final extract?

## Q16 — Establish a go/no-go decision for migration
**Question:** Most records migrated successfully, but critical compliance completions remain unmatched. Would you proceed?

**Situation:** The overall migration rate looks high, but a small set of records may carry significant regulatory risk.  
**Task:** Make a decision based on risk and acceptance criteria rather than aggregate percentages.  
**Action:** I would assess the unmatched records, their affected populations and obligations, available source evidence, remediation feasibility, and safe alternatives such as controlled access to an archive. I would compare findings with pre-agreed acceptance criteria and recommend no-go if critical evidence is not trustworthy or continuity cannot be maintained. I would record the authorized decision and residual risk.  
**Result:** The cutover decision protects the control objective and is traceable.  
**SAP SuccessFactors example:** A migration gate requiring all high-risk compliance-history variances to be resolved or formally accepted through an approved control.  
**SME probe:** How would you respond if leadership proposes accepting the risk without the compliance owner's approval?

## Q17 — Plan recovery and fallback
**Question:** The target system is not usable after cutover, and the organization is considering returning to the legacy LMS. How would you plan recovery?

**Situation:** Production users cannot reliably access the new learning service after migration.  
**Task:** Restore learning continuity without losing records created during the transition.  
**Action:** I would follow the approved recovery decision tree, assess the failure scope, determine whether to repair forward or return to the legacy service, and clarify which system is authoritative during recovery. I would preserve all target-side activity, define how records created after cutover will be reconciled, communicate the decision, and verify the restored service before reopening business.  
**Result:** Recovery protects learner continuity and preserves a traceable record of activity across the transition.  
**SAP SuccessFactors example:** A tested fallback plan that addresses post-cutover completions and the system of record during service restoration.  
**SME probe:** Why is switching users back to the legacy URL not a complete rollback plan?

## Q18 — Control migration access and privacy
**Question:** Migration files contain employee identifiers and learning histories. How would you protect them throughout the process?

**Situation:** Data extracts and staging files create privacy and security exposure outside the target application.  
**Task:** Limit access and retention while enabling authorized migration work.  
**Action:** I would classify the data, restrict access by role, use approved secure transfer and storage, minimize fields, protect logs and evidence, define retention and disposal, and review access throughout the migration. I would verify that test data is masked or otherwise approved and that production data is not copied into uncontrolled locations.  
**Result:** Migration can proceed with documented controls over sensitive data and temporary files.  
**SAP SuccessFactors example:** Controlled staging and disposal of learner-history extracts used for migration and reconciliation.  
**SME probe:** How would you prove temporary migration files were removed according to policy?

## Q19 — Transition migration ownership to operations
**Question:** The implementation partner finishes migration, but support teams do not understand the mapping or exception decisions. What would you do?

**Situation:** The project team holds critical migration knowledge that operations needs to maintain the data.  
**Task:** Transfer knowledge and establish ownership for future corrections and audits.  
**Action:** I would deliver mapping specifications, reconciliation reports, known limitations, exception dispositions, runbooks, access details, support contacts, and data-owner approvals. I would walk through sample records and recovery scenarios, verify operational readiness, and define who handles future corrections and audit requests.  
**Result:** Operations can support the migrated learning records without depending on undocumented project knowledge.  
**SAP SuccessFactors example:** A handover pack for historical completion data, mapping rules, and unresolved approved exceptions.  
**SME probe:** How would you prove the receiving team can independently investigate a disputed migrated record?

## Q20 — Lead migration and cutover governance
**Question:** You are the Learning architect responsible for a global LMS migration. How would you lead the final cutover review?

**Situation:** Business, data, technical, compliance, and operations stakeholders need a single view of migration readiness.  
**Task:** Present an evidence-based decision and manage residual risk.  
**Action:** I would review scope completion, source quality, mapping approvals, rehearsal results, load and reconciliation evidence, high-risk exceptions, cutover sequencing, integration readiness, learner communications, support and recovery plans, and sign-offs. I would state the remaining risks, owners, options, and consequences, then record the authorized go/no-go decision.  
**Result:** The organization enters cutover with shared understanding of readiness, data integrity, and continuity controls.  
**SAP SuccessFactors example:** A cutover board pack for user provisioning, historical learning records, content, interfaces, and compliance reporting.  
**SME probe:** Which single unresolved issue would most strongly change your recommendation, and why?

---

## Theme 11 — Candidate self-review

Before considering this theme complete, ensure you can:
- Explain why each data object should migrate, archive, transform, or retire.
- Describe source profiling, mapping, identity resolution, exception handling, and reconciliation.
- Plan mock migrations, cutover windows, delta handling, and recovery.
- Protect sensitive data and preserve source-to-target lineage.
- Apply risk-based acceptance criteria and obtain explicit business sign-off.
- Separate measured migration results from assumptions or illustrative targets.

**Interview answer quality bar:** Prove the target data is trustworthy, explain every material variance, protect continuity, and show how the cutover can be recovered safely.

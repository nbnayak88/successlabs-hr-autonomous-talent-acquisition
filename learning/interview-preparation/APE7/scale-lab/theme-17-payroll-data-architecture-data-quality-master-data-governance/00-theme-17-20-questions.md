# APE7 — Theme 17: Payroll Data Architecture, Data Quality & Master Data Governance

**Purpose:** Practise architectural decisions for payroll data ownership, quality, lineage, effective dating, migration, privacy, and operational controls.

**Practice guidance:** These STAR answers are illustrative models, not claims about personal experience. Adapt them to verifiable evidence. Confirm behaviour against the actual SAP product, release, country localisation, and deployment model.

## Q01 — How do you establish payroll data ownership?
### Interview Question
HR, time, and payroll teams disagree about which system owns an employee's bank details and pay-relevant attributes. How do you resolve this?
### STAR Answer
- **Situation:** Multiple systems maintained overlapping employee data, creating conflicting values.
- **Task:** Establish authoritative ownership and accountable change processes.
- **Action:** Map each critical data domain and attribute to an approved system of record, owner, steward, update path, validation rule, and consumer. Document exceptions and prevent uncontrolled bidirectional writes.
- **Result:** Ownership becomes explicit and conflicts can be resolved through a governed process.
### SAP Payroll Example
Create an ownership matrix for employee identity, organisational assignment, recurring pay components, time results, payroll results, and finance postings across the actual landscape.
### SME Probe
How would you govern an attribute that is authored in one system but legally validated in another?

## Q02 — How do you assess payroll data quality before a payroll run?
### Interview Question
A payroll rehearsal reveals missing bank details, invalid cost centres, and inconsistent work schedules. What do you do?
### STAR Answer
- **Situation:** Input defects were discovered late in the payroll cycle.
- **Task:** Detect and prioritise defects before they affect calculation or payment.
- **Action:** Define critical data rules, run pre-payroll profiling, classify severity, assign remediation owners, and measure completeness, validity, consistency, uniqueness, and timeliness. Re-run controls after corrections and retain evidence.
- **Result:** Readiness is based on measured data quality rather than informal assurances.
### SAP Payroll Example
Use supported validation and reporting capabilities in the actual HR/payroll landscape, supplemented by approved data-quality checks where needed.
### SME Probe
Which defects should block payroll, and who approves an exception?

## Q03 — How do you model effective-dated employee data?
### Interview Question
A salary change is entered late with a retroactive effective date. How do you ensure the correct payroll treatment?
### STAR Answer
- **Situation:** A late update affected a period already calculated.
- **Task:** Preserve business-effective history and determine the correct recalculation process.
- **Action:** Validate effective dates, record history, correction authority, retroactive triggers, and downstream propagation. Assess impacted periods and employees, execute controlled recalculation where required, and reconcile differences.
- **Result:** Corrections follow traceable business rules rather than overwriting historical truth.
### SAP Payroll Example
Validate the actual product's effective-dating and retroactive accounting behaviour for the relevant country and configuration.
### SME Probe
How do you distinguish an effective-dated correction from a current-state overwrite?

## Q04 — How do you handle duplicate employee or assignment records?
### Interview Question
Two records appear to represent the same person, but one has payroll history. How do you proceed?
### STAR Answer
- **Situation:** Duplicate identity or assignment records risked duplicate payment or incorrect reporting.
- **Task:** Resolve identity safely without losing employment or payroll history.
- **Action:** Use governed matching rules, verify authoritative identifiers and employment relationships, assess downstream references, and obtain data-owner approval. Correct through supported procedures, then validate payroll, benefits, time, and reporting impacts.
- **Result:** Duplicate handling preserves auditability and avoids destructive merges based on name matching alone.
### SAP Payroll Example
Assess the actual employee/person model and supported correction process; coordinate with payroll and master-data owners.
### SME Probe
Why is a matching name and date of birth insufficient evidence for an automated merge?

## Q05 — How do you design source-to-target data mapping?
### Interview Question
A payroll migration maps legacy pay codes to new wage types, but several codes have ambiguous meanings. What is your approach?
### STAR Answer
- **Situation:** Legacy codes had inconsistent usage and incomplete definitions.
- **Task:** Produce a traceable mapping that preserves business and statutory meaning.
- **Action:** Profile actual usage, consult payroll SMEs, document source semantics, target values, transformation rules, effective dates, exceptions, and approval evidence. Test representative and boundary cases and reconcile totals by meaningful categories.
- **Result:** Mapping decisions are explainable and validated rather than based on label similarity.
### SAP Payroll Example
Validate wage type and pay component mappings against the configured target and country-specific payroll design.
### SME Probe
How would you handle a legacy code that combines two concepts represented separately in the target?

## Q06 — How do you maintain data lineage for payroll results?
### Interview Question
An auditor asks how a net-pay amount was derived from source data. What evidence should be available?
### STAR Answer
- **Situation:** Teams could see the result but could not trace all upstream inputs and transformations.
- **Task:** Make the result explainable and reproducible within authorised access.
- **Action:** Document source records, effective dates, transformations, configuration references, run identifiers, corrections, and downstream handoffs. Retain approved logs and reconciliation evidence while minimising sensitive payload exposure.
- **Result:** Investigators can trace the processing chain without relying on undocumented tribal knowledge.
### SAP Payroll Example
Combine available payroll result detail, input records, configuration/change evidence, and integration logs appropriate to the deployed system.
### SME Probe
How do you preserve useful lineage when the source data is later corrected?

## Q07 — How do you govern changes to payroll master data?
### Interview Question
A business user requests a bulk update to recurring payments shortly before payroll cut-off. How do you evaluate it?
### STAR Answer
- **Situation:** A high-volume change request arrived close to a controlled processing window.
- **Task:** Determine whether it is authorised, accurate, and safe to apply.
- **Action:** Verify ownership and approvals, validate population and values, assess effective dates and payroll impact, test a representative sample, define rollback or correction steps, and require pre/post counts and reconciliation. Apply the change through approved mechanisms.
- **Result:** Bulk changes become controlled, evidenced, and recoverable.
### SAP Payroll Example
Use supported mass-maintenance or interface methods and the client's approval controls; avoid direct database manipulation.
### SME Probe
What evidence proves the requested population matches the population actually updated?

## Q08 — How do you protect payroll data across environments?
### Interview Question
Developers need realistic data to test payroll calculations, but production contains sensitive personal information. What do you recommend?
### STAR Answer
- **Situation:** Testing required realistic edge cases while production data was restricted.
- **Task:** Enable meaningful testing with proportionate privacy controls.
- **Action:** Prefer synthetic data or approved masking, minimise copied fields, restrict access, govern refreshes and retention, and validate that masking preserves relationships and test conditions. Prevent uncontrolled exports and include privacy checks in environment procedures.
- **Result:** Test coverage improves without unnecessary exposure of identifiable payroll data.
### SAP Payroll Example
Review the actual environment-copy, masking, and access-control capabilities; document residual re-identification risks.
### SME Probe
Why can masking names alone fail to anonymise payroll data?

## Q09 — How do you define data-quality ownership and metrics?
### Interview Question
Data quality has become everyone's responsibility, which means no one fixes recurring defects. How do you change the model?
### STAR Answer
- **Situation:** Repeated defects crossed functional boundaries and lacked accountable owners.
- **Task:** Establish measurable ownership for critical payroll data.
- **Action:** Assign business owners and stewards, define rule-level accountability, set thresholds and service targets, publish defect trends, and track remediation age and recurrence. Escalate unresolved high-risk defects through governance.
- **Result:** Quality work has named accountability and measurable improvement.
### SAP Payroll Example
Use a data-quality scorecard aligned to payroll input readiness and actual operational controls.
### SME Probe
How do you prevent a high overall quality score from hiding a small number of critical defects?

## Q10 — How do you reconcile migrated payroll data?
### Interview Question
A migration shows equal record counts, but the first parallel payroll produces material differences. What next?
### STAR Answer
- **Situation:** Count-based validation passed despite calculation differences.
- **Task:** Establish whether the migrated data preserves payroll-relevant meaning.
- **Action:** Compare balances, pay components, recurring and one-time payments, deductions, tax/social insurance attributes, time inputs, and effective-dated records. Segment variances, identify mapping or configuration causes, correct them, and rerun controlled comparisons.
- **Result:** Migration assurance reflects business meaning and payroll outcomes, not record counts alone.
### SAP Payroll Example
Define country- and population-specific comparison rules for the actual legacy and target payroll systems.
### SME Probe
Which totals are useful for reconciliation but insufficient as proof of correctness?

## Q11 — How do you manage reference and code-list data?
### Interview Question
Cost centres, legal entities, pay groups, and time codes use inconsistent values across systems. How do you govern them?
### STAR Answer
- **Situation:** Reference-data drift caused rejected records and incorrect routing.
- **Task:** Establish consistent definitions and controlled distribution.
- **Action:** Identify authoritative owners, define valid values and effective dates, govern additions and retirement, map codes across systems, and validate consumers before deployment. Monitor rejected and unmapped values.
- **Result:** Reference data changes are coordinated and traceable across payroll dependencies.
### SAP Payroll Example
Map the relevant organisational and payroll configuration values across actual systems, respecting product-specific ownership.
### SME Probe
What should happen when a valid new cost centre is not yet known to a downstream consumer?

## Q12 — How do you handle late or corrected time data?
### Interview Question
Approved overtime arrives after payroll inputs have been extracted. What controls do you apply?
### STAR Answer
- **Situation:** A late time correction could change gross pay and downstream costs.
- **Task:** Decide whether to include, defer, or process the correction through an approved retroactive route.
- **Action:** Assess cut-off policy, approval status, effective date, payroll impact, interface state, and statutory or contractual obligations. Apply the authorised route, preserve the original and corrected values, and reconcile the outcome.
- **Result:** Late changes are handled consistently with an auditable decision.
### SAP Payroll Example
Confirm the actual time-to-payroll integration and retroactive processing behaviour for the relevant release and country.
### SME Probe
How do you avoid processing the same corrected time result twice?

## Q13 — How do you manage data retention and deletion?
### Interview Question
A request is received to delete an employee record, but payroll and statutory retention obligations may apply. What do you do?
### STAR Answer
- **Situation:** A deletion request intersected with legal, audit, and operational retention requirements.
- **Task:** Apply an approved retention decision without destroying required evidence.
- **Action:** Involve privacy, legal, records, and payroll owners; identify applicable retention and legal-hold rules; distinguish deletion, restriction, and anonymisation; and execute through supported processes with evidence. Validate downstream copies and backups against policy.
- **Result:** The request is handled through a documented legal and data-governance process.
### SAP Payroll Example
Confirm jurisdictional requirements and actual product capabilities; do not assume one global deletion rule applies everywhere.
### SME Probe
How should derived records, interfaces, and retained backups be considered in the decision?

## Q14 — How do you design data-quality controls for integrations?
### Interview Question
A technically valid payload contains an invalid payroll area or incompatible pay frequency. How should validation be layered?
### STAR Answer
- **Situation:** Schema validation passed but business-invalid values reached the payroll process.
- **Task:** Detect defects at the earliest appropriate point without relying on a single control.
- **Action:** Layer structural validation, reference-data checks, business-rule validation, target acceptance, and post-processing reconciliation. Return actionable errors, assign remediation ownership, and prevent silent discard.
- **Result:** Invalid data is detected with clear diagnostics and controlled recovery.
### SAP Payroll Example
Separate middleware-level contract validation from payroll-specific business validation supported by the target system.
### SME Probe
Which validations belong at the source, integration layer, and target—and why?

## Q15 — How do you prevent stale data overwriting newer payroll data?
### Interview Question
A delayed integration message overwrites a more recent employee change. What architecture controls help?
### STAR Answer
- **Situation:** Asynchronous delivery and retries caused an older value to arrive after a newer update.
- **Task:** Prevent stale updates from replacing authoritative current state.
- **Action:** Define source ownership, version or sequence metadata where supported, effective-date rules, conflict handling, and stale-message detection. Test delayed, duplicated, and out-of-order messages; reconcile the final target state.
- **Result:** Updates follow defined authority and ordering rules rather than arrival order alone.
### SAP Payroll Example
Verify actual interface support for versions, effective dating, and conflict detection before implementing a control.
### SME Probe
What should happen when two valid updates share the same timestamp but disagree?

## Q16 — How do you manage data quality during payroll cutover?
### Interview Question
Cutover reconciliation reveals a small set of unresolved employee and payroll balance differences. Leadership asks whether to proceed.
### STAR Answer
- **Situation:** Residual data defects remained close to the planned cutover.
- **Task:** Present a defensible go/no-go recommendation with explicit risk ownership.
- **Action:** Classify variances by financial, statutory, employee-impact, and operational severity; identify affected populations; quantify exposure; define containment and remediation; and obtain documented acceptance from authorised owners. Block cutover for unresolved critical criteria.
- **Result:** The decision is based on evidence, thresholds, and accountable risk acceptance.
### SAP Payroll Example
Use signed reconciliation packs and approved cutover gates for the actual migration programme.
### SME Probe
How do you distinguish a tolerable variance from an unknown exposure?

## Q17 — How do you govern cross-country payroll data?
### Interview Question
A global template is being introduced across countries with different payroll and privacy requirements. How do you preserve consistency without flattening local needs?
### STAR Answer
- **Situation:** A global data model conflicted with local statutory and operational requirements.
- **Task:** Establish reusable global standards with governed local extensions.
- **Action:** Separate global canonical attributes from country-specific fields and rules, document lawful purpose and access, validate local requirements with experts, and manage exceptions through architecture governance. Test country-specific scenarios and data transfers.
- **Result:** Common data definitions coexist with justified localisation and controlled exceptions.
### SAP Payroll Example
Validate country availability, localisation scope, and statutory requirements for each actual payroll solution.
### SME Probe
How do you stop local extensions from becoming ungoverned duplicates of global attributes?

## Q18 — How do you assess data lineage and impact before a change?
### Interview Question
A source field is being retired, but its downstream payroll usage is not fully documented. What do you require before approving the change?
### STAR Answer
- **Situation:** The field had unknown dependencies across reports and interfaces.
- **Task:** Avoid breaking payroll processing or audit evidence.
- **Action:** Trace consumers through interface catalogues, mappings, reports, and operational owners; validate lineage with runtime evidence; assess impact and alternatives; and require regression tests and a rollback plan. Record residual uncertainty explicitly.
- **Result:** Change approval is based on documented impact rather than assumptions about unused fields.
### SAP Payroll Example
Combine available metadata and integration inventory with targeted runtime checks in the actual environment.
### SME Probe
What do you do when the catalogue and observed production behaviour disagree?

## Q19 — How do you use analytics to improve payroll data quality?
### Interview Question
Defects repeatedly cluster around a few employee populations and input types. How would you use analytics to reduce recurrence?
### STAR Answer
- **Situation:** Teams were correcting defects transaction by transaction without understanding common causes.
- **Task:** Identify systemic patterns and prioritise prevention.
- **Action:** Analyse defect category, source, population, timing, owner, and downstream impact using appropriately protected data. Validate hypotheses with process experts, prioritise high-impact root causes, introduce preventive controls, and measure recurrence over subsequent cycles.
- **Result:** Remediation shifts from repeated manual correction to measurable prevention.
### SAP Payroll Example
Use approved operational extracts and analytics for defect trends, ensuring access and aggregation meet privacy requirements.
### SME Probe
How do you distinguish correlation from a root cause that warrants a control change?

## Q20 — How do you govern payroll data architecture as systems evolve?
### Interview Question
A new payroll provider and analytics platform are being introduced. How do you ensure the data model remains coherent?
### STAR Answer
- **Situation:** New consumers introduced duplicate definitions and unclear data movement.
- **Task:** Preserve semantic consistency, privacy, and control across the evolving landscape.
- **Action:** Maintain a data-domain model, system-of-record matrix, lineage, data classifications, contracts, retention rules, quality controls, and architecture decisions. Review new flows for necessity, minimisation, ownership, reconciliation, and lifecycle; retire obsolete copies through controlled procedures.
- **Result:** Payroll data remains governed as a business asset rather than a collection of point-to-point extracts.
### SAP Payroll Example
Review the end-to-end landscape across HR, payroll, time, finance, payment providers, reporting, and archive services.
### SME Probe
Which architecture artefacts are mandatory before onboarding a new downstream consumer?

## Theme 17 Completion Check
- 20 scenario-based interview questions
- STAR model answer for every question
- SAP payroll example and SME probe for every question
- Explicit focus on ownership, effective dating, quality, lineage, privacy, and reconciliation
- Product, release, and country-specific behaviour must be validated before implementation

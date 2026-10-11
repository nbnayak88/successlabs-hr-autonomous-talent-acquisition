# ALM6 — Theme 04: Data & Information Model
## Applied SAP SuccessFactors Learning
### 20 Scenario-Based Interview Questions with STAR Answers

**Theme objective:** Demonstrate how learning data is structured, governed, migrated, integrated, secured, and converted into trustworthy evidence of capability, compliance, and business outcomes.

**Answer pattern:** Situation → Task → Action → Result → SAP product example → SME Probe. Treat metrics as illustrative unless tied to a verified project.

---

## Q01 — Establishing a Learning Data Model
**Question:** A global organisation has inconsistent definitions of learning items, curricula, programs, offerings, and completions across regions. How would you establish a consistent information model?

**Situation:** Regional teams use similar labels for different learning objects, making reports difficult to compare.  
**Task:** Define shared semantics without erasing legitimate local variation.  
**Action:** Inventory objects and attributes; distinguish catalog metadata, assignment rules, delivery events, learner records, completion evidence, and reporting dimensions. Agree canonical definitions, ownership, identifiers, allowed values, and regional extensions. Validate the model with HR, compliance, learning operations, and analytics stakeholders.  
**Result:** The organisation gains a documented source of meaning, improved cross-region reporting, and clearer change ownership.  
**SAP example:** Map SuccessFactors Learning items, curricula, programs, users, assignments, and completion records to a governed data dictionary; confirm exact object behaviour against the tenant and release.  
**SME Probe:** Which attributes are globally standardised, and which require controlled local extensions?

## Q02 — Data Ownership and Stewardship
**Question:** Learning operations, HRIS, and compliance each claim ownership of learner and completion data. How do you resolve accountability?

**Situation:** Conflicting updates and unclear accountability delay audit responses.  
**Task:** Establish decision rights for critical learning data.  
**Action:** Classify data domains; name accountable owners and operational stewards; define who creates, approves, corrects, and consumes each field; document escalation and evidence-retention rules. Separate system administration from business ownership.  
**Result:** Corrections become traceable, disputes are resolved faster, and audit requests have an accountable owner.  
**SAP example:** Define ownership for user attributes sourced from Employee Central versus learning-specific assignments and completion evidence in SuccessFactors Learning.  
**SME Probe:** Who authorises a correction to a completion record after an audit has started?

## Q03 — Learner Identity and Unique Keys
**Question:** A company merger creates duplicate learner records because legacy employee IDs overlap. What is your data strategy?

**Situation:** Duplicate identities split learning histories and create unreliable compliance reporting.  
**Task:** Resolve identity while preserving traceability to source systems.  
**Action:** Profile duplicates; establish a survivorship and cross-reference strategy; use a stable enterprise identity where available; define matching rules for rehires, contingent workers, and acquired employees; test assignments, history, permissions, and downstream reporting before merging or deactivating records.  
**Result:** Learner history is associated with the correct person and duplicates are handled through governed rules.  
**SAP example:** Reconcile user IDs and external identifiers during SuccessFactors Learning migration and Employee Central integration; verify supported merge and history-handling capabilities in the target tenant.  
**SME Probe:** How would you handle two people with the same name and overlapping employment dates?

## Q04 — Course Catalog Metadata Quality
**Question:** Employees cannot find relevant courses because titles, topics, languages, and audience metadata are inconsistent. How would you improve catalog data?

**Situation:** Search results are noisy and duplicate offerings confuse learners.  
**Task:** Improve findability without disrupting active assignments.  
**Action:** Profile missing and inconsistent metadata; define naming conventions, subject taxonomy, language and delivery attributes, ownership, review dates, and duplicate detection. Pilot revised metadata with representative learner groups and monitor search success and enrolment.  
**Result:** Catalog content becomes easier to discover and maintain, with fewer misleading duplicates.  
**SAP example:** Govern item descriptions, subject areas, delivery methods, and other available catalog attributes in SuccessFactors Learning.  
**SME Probe:** How do you improve search relevance without changing the identity of an item already referenced by assignments?

## Q05 — Assignment Data and Eligibility
**Question:** Compliance courses are assigned to the wrong population after a reorganisation. How do you diagnose the data problem?

**Situation:** Employees receive irrelevant courses while some in-scope roles are missed.  
**Task:** Correct eligibility logic and prove coverage.  
**Action:** Trace assignment criteria to authoritative organisational attributes; compare effective dates, job/position, location, legal entity, worker type, and exceptions; identify stale or unmapped values; test rules against a representative population; reconcile expected versus actual assignments before release.  
**Result:** Assignment coverage improves and exceptions are visible rather than hidden in manual workarounds.  
**SAP example:** Review SuccessFactors Learning assignment profiles and relevant user attributes, using the configuration supported in the organisation’s tenant.  
**SME Probe:** How would you prove that every in-scope worker was assigned the mandatory course?

## Q06 — Completion Evidence and Data Lineage
**Question:** An auditor challenges a report showing that a worker completed mandatory training. What evidence and lineage do you inspect?

**Situation:** The report contains a completion date, but the audit team cannot trace the underlying evidence.  
**Task:** Establish a defensible path from source event to reported status.  
**Action:** Trace learner identity, assigned requirement, item/version, delivery or assessment event, completion status, timestamps, source and any approved correction. Check time-zone handling, status mapping, retention, and report logic. Preserve evidence and document limitations rather than assuming the report is correct.  
**Result:** The audit response explains how the status was produced and what evidence supports it.  
**SAP example:** Reconcile SuccessFactors Learning completion history and available audit/reporting records with the report extraction and transformation logic.  
**SME Probe:** What would you do if the completion status exists but the expected assessment evidence is missing?

## Q07 — Learning History Migration
**Question:** During a legacy LMS migration, the business wants all historical completions transferred, including records with inconsistent statuses. How would you approach it?

**Situation:** Legacy records contain different status codes, dates, course identifiers, and evidence levels.  
**Task:** Migrate useful history without falsely representing unsupported equivalence.  
**Action:** Profile and classify source records; map statuses and identifiers; agree retention and cut-off rules; separate verified completions from incomplete or ambiguous evidence; run trial loads; reconcile counts and samples; obtain business and compliance sign-off. Keep source extracts and mapping decisions for traceability.  
**Result:** The target contains explainable history, and uncertain records are managed transparently rather than silently converted into completions.  
**SAP example:** Prepare a controlled history migration into SuccessFactors Learning using supported import mechanisms and validated mappings.  
**SME Probe:** Would you convert an ambiguous legacy status to “completed”? Explain the decision criteria.

## Q08 — Data Quality Controls
**Question:** Monthly learning reports show missing learner IDs, invalid dates, and contradictory completion states. What controls would you implement?

**Situation:** Manual reconciliation consumes analyst time and weakens confidence in metrics.  
**Task:** Detect and prevent recurring data defects.  
**Action:** Define critical data elements and quality dimensions—completeness, validity, consistency, uniqueness, timeliness, and referential integrity. Implement pre-load and post-load checks, exception queues, owners, thresholds, trend reporting, and root-cause remediation. Distinguish source defects from transformation and reporting defects.  
**Result:** Defects are detected earlier and remediation becomes measurable and repeatable.  
**SAP example:** Validate SuccessFactors Learning user, item, assignment, and completion extracts with agreed data-quality rules before publishing analytics.  
**SME Probe:** Which data-quality rule would you make a release blocker, and why?

## Q09 — Effective Dating and Organisational Changes
**Question:** A learner changes department midway through a compliance cycle, and reports disagree about which requirements applied. How do you handle time-dependent data?

**Situation:** Current organisational attributes do not necessarily represent the employee’s context at the time of assignment.  
**Task:** Establish reproducible rules for historical and current obligations.  
**Action:** Define the business meaning of effective dates, assignment dates, due dates, completion dates, and reporting cut-offs. Validate source-system effective dating; specify reassignment and exemption rules; test transfers, rehires, and backdated changes. Preserve snapshots or event history where required and supported.  
**Result:** Reports can explain the requirement and organisational context at the relevant point in time.  
**SAP example:** Align Employee Central effective-dated employment changes with the learning assignment and compliance-reporting rules.  
**SME Probe:** How do you distinguish a late-arriving source update from a genuine historical change?

## Q10 — Learning Data and Analytics Definitions
**Question:** HR reports a 92% completion rate while compliance reports 86%. How would you reconcile the difference?

**Situation:** Leaders are debating the numbers instead of acting on risk.  
**Task:** Create a shared, reproducible metric definition.  
**Action:** Compare population, denominator, time window, assignment scope, completion statuses, exemptions, duplicate handling, and refresh time. Trace each report to source fields and transformations; agree a metric contract and version it. Publish reconciliation and known exclusions before choosing the authoritative view.  
**Result:** Stakeholders understand why the figures differ and can use a consistent measure for decisions.  
**SAP example:** Compare SuccessFactors Learning reports with downstream People Analytics or warehouse logic, checking the exact extraction and semantic definitions.  
**SME Probe:** Is “completion rate” based on assigned learners, eligible learners, or all active workers—and why?

## Q11 — Integration Data Contracts
**Question:** A downstream data warehouse breaks after a learning report changes its field names and status values. What would you do?

**Situation:** An undocumented report change causes analytics failures.  
**Task:** Stabilise the data interface and prevent repeat incidents.  
**Action:** Identify the changed fields and consumers; define a versioned data contract covering schema, meanings, nullability, identifiers, status mappings, refresh cadence, and error handling. Add backward-compatibility checks, consumer notification, contract tests, and a deprecation window.  
**Result:** Consumers can detect incompatible changes before production impact and integrations have clear ownership.  
**SAP example:** Govern extracts or supported APIs from SuccessFactors Learning into an enterprise data platform; verify endpoint and field availability for the tenant.  
**SME Probe:** What is your approach when a breaking change is unavoidable but a consumer cannot migrate immediately?

## Q12 — Privacy and Data Minimisation
**Question:** A learning analytics team requests detailed employee attributes and assessment data “just in case” they are useful. How do you assess the request?

**Situation:** The requested dataset includes personal data beyond the stated analytical purpose.  
**Task:** Enable valid analysis while limiting privacy and security exposure.  
**Action:** Clarify the use case and decisions; map each attribute to a necessary purpose; assess sensitivity, access, retention, legal and policy requirements; aggregate or pseudonymise where appropriate; document approvals and review access periodically. Involve privacy and security specialists for high-risk use cases.  
**Result:** Analytics receives the minimum useful dataset with documented controls and purpose.  
**SAP example:** Apply role-based access and approved extraction rules to SuccessFactors Learning data; align with enterprise privacy and retention policies.  
**SME Probe:** When is pseudonymisation insufficient to protect employee privacy?

## Q13 — Retention, Archiving, and Deletion
**Question:** A region requests deletion of old learning records, while the compliance team needs evidence for a regulatory retention period. How do you decide?

**Situation:** Privacy requests and audit obligations appear to conflict.  
**Task:** Implement a lawful, consistent lifecycle for learning records.  
**Action:** Classify records and purposes; confirm jurisdictional and contractual requirements with legal/privacy owners; define retention triggers, legal holds, archive accessibility, deletion approval, and evidence of disposal. Test the end-to-end process and avoid ad hoc deletion from operational records.  
**Result:** Records are retained only as required and disposed of through a controlled, auditable process.  
**SAP example:** Document the lifecycle of SuccessFactors Learning history and associated exports or archives, confirming platform capabilities and organisational policy.  
**SME Probe:** Who approves a deletion when a legal hold and a privacy request overlap?

## Q14 — External Content and Completion Mapping
**Question:** Completions from an external content provider do not reconcile with the LMS, especially when learners retake courses. How do you investigate?

**Situation:** Provider activity, learner identity, course identifiers, and completion statuses differ between systems.  
**Task:** Establish reliable mapping and reconciliation.  
**Action:** Trace the exchange protocol and identifiers; inspect item mappings, attempt rules, completion thresholds, timestamps, duplicate events, and error logs. Agree which system is authoritative for each attribute and define retry/idempotency handling where supported. Reprocess a controlled sample and reconcile results.  
**Result:** Valid completions are recorded consistently and duplicate or rejected events can be explained.  
**SAP example:** Investigate the configured content-provider integration with SuccessFactors Learning, verifying supported standards and tenant-specific setup.  
**SME Probe:** How would you prevent a retried completion message from creating duplicate history?

## Q15 — Data Model for Skills and Capabilities
**Question:** Leadership wants to infer workforce capability from course completions. What data-model risks must be addressed?

**Situation:** Executives treat course completion as proof of proficiency, even when no assessment exists.  
**Task:** Design a responsible evidence model for capability insights.  
**Action:** Distinguish learning participation, completion, assessment performance, validated skill, role requirement, and demonstrated workplace application. Define provenance, confidence, assessment method, recency, and ownership. Avoid automatically equating completion with competence; pilot the model with subject-matter experts.  
**Result:** Capability reporting communicates what the evidence supports and where additional validation is needed.  
**SAP example:** Combine SuccessFactors Learning history with governed skills or talent data only through defined mappings and access controls.  
**SME Probe:** What evidence threshold would justify labelling a skill “validated”?

## Q16 — Localization and Multilingual Data
**Question:** Global learning reports treat translated versions of the same course as different courses, inflating counts. How would you model them?

**Situation:** Localized offerings have different titles and identifiers but share a common learning objective.  
**Task:** Preserve language-specific delivery while supporting enterprise-level analysis.  
**Action:** Define a canonical learning concept and map localized items or versions to it where the product and governance model permit. Retain language, region, version, and delivery attributes; specify equivalence rules; test roll-up logic and ensure local compliance distinctions remain visible.  
**Result:** Global analysis becomes comparable without hiding meaningful regional differences.  
**SAP example:** Govern localized SuccessFactors Learning catalog metadata and map related items in a controlled reporting layer.  
**SME Probe:** When should localized courses not be rolled up as equivalent?

## Q17 — Data Reconciliation and Migration Sign-off
**Question:** A migration trial shows the same number of source and target rows, but business users find missing learning history. What checks do you perform?

**Situation:** A row-count match conceals incorrect or incomplete mappings.  
**Task:** Demonstrate business-level migration completeness and correctness.  
**Action:** Reconcile counts by learner, item, status, time period, and record type; compare key-field distributions; test samples and edge cases; check rejected records, duplicates, orphan references, and transformed statuses. Record tolerances, exceptions, owners, and sign-off evidence.  
**Result:** Migration approval is based on meaningful reconciliation rather than total counts alone.  
**SAP example:** Reconcile source LMS extracts to SuccessFactors Learning target reports and validated import logs.  
**SME Probe:** Which reconciliation dimensions are mandatory for compliance-critical learning history?

## Q18 — Reporting Grain and Double Counting
**Question:** A dashboard double-counts learners because it joins assignment, item, and completion datasets at different levels of detail. How do you fix it?

**Situation:** A many-to-many join inflates course and learner totals.  
**Task:** Correct the semantic model while preserving the needed analytical questions.  
**Action:** Identify the grain of each dataset; document primary keys and relationship cardinality; build a star or equivalent semantic model with appropriate dimensions and facts; aggregate before joining where necessary; test totals against a trusted baseline and include regression tests.  
**Result:** Measures become reproducible and dashboards no longer misstate population or completion counts.  
**SAP example:** Model learning assignments and completions separately in a warehouse sourced from SuccessFactors Learning, using validated keys and business definitions.  
**SME Probe:** How would you prove a join is causing duplication rather than a source-system defect?

## Q19 — Data Incident Root-Cause Analysis
**Question:** A report suddenly shows a sharp drop in compliance completion after a system update. How do you determine whether it is a real business issue or a data defect?

**Situation:** Leaders are preparing to escalate a possible compliance failure.  
**Task:** Establish the cause quickly without suppressing a genuine risk.  
**Action:** Compare source-system status, assignment volumes, extract timestamps, schema and mapping changes, failed jobs, filters, and report refresh history. Segment the change by population and item; preserve evidence; publish a provisional assessment with confidence and impact. Escalate the actual compliance risk while fixing the data path.  
**Result:** Decision-makers receive a timely, evidence-based diagnosis and both technical and business risks are managed.  
**SAP example:** Trace SuccessFactors Learning records through extraction, transformation, and dashboard layers after a release or configuration change.  
**SME Probe:** What do you communicate if the cause remains uncertain at the reporting deadline?

## Q20 — Enterprise Learning Information Architecture
**Question:** You are asked to design the learning information architecture for a multinational organisation with multiple HR systems, LMS history, skills data, and regulatory reporting. What is your approach?

**Situation:** Data is distributed across regional platforms and the enterprise lacks a trusted view of learning and capability.  
**Task:** Design a governed architecture that supports operational learning, compliance evidence, analytics, and future skills use cases.  
**Action:** Define business concepts and data domains; assign authoritative sources and owners; map identities and identifiers; establish integration contracts, data quality, privacy, retention, lineage, and metric definitions; separate operational transactions from analytical models; design migration and coexistence controls; validate with representative compliance and capability scenarios.  
**Result:** The organisation gains an incremental, governed path to trusted learning insights without assuming every system must be replaced.  
**SAP example:** Position SuccessFactors Learning within the HR ecosystem, integrating Employee Central and approved analytics/data platforms through supported interfaces and documented contracts.  
**SME Probe:** Which architecture decisions must be resolved before selecting a warehouse or reporting tool?

---

## Theme 04 — Completion Checklist
- [ ] 20 scenario-based interview questions
- [ ] STAR structure in every answer
- [ ] SAP SuccessFactors Learning example in every answer
- [ ] SME probe in every answer
- [ ] Data ownership, quality, identity, migration, privacy, integration, analytics, and enterprise architecture covered

**Candidate reflection:** Choose one scenario and explain how you would prove the integrity, meaning, and lineage of the learning data—not merely describe a system feature.

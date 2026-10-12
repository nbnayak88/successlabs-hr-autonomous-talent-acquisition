# ALM6 — Theme 08: Integration & Architecture
## Applied SAP SuccessFactors Learning — Interview Preparation

**Theme:** Integration & Architecture  
**Scenario count:** 20  
**Response pattern:** Situation → Task → Action → Result (STAR)  
**Architecture signal:** Explain systems of record, data ownership, identity, interfaces, failure handling, security, observability, and business reconciliation. Validate technical details against the customer's current SAP landscape and enabled capabilities.

---

## Q01 — Integrate employee data for learning assignments
**Question:** New hires appear in HR but are missing from the learning platform. How would you investigate the integration architecture?

**Situation:** New employees were created in the HR system but did not consistently appear as learners in SAP SuccessFactors Learning.  
**Task:** Trace the worker-data flow and restore timely, accurate learner provisioning.  
**Action:** I would map the system of record for worker identity and employment attributes, inspect the integration schedule and monitoring, compare a missing worker's source record with the target learner record, and check mapping, filtering, effective dates, and error handling. I would correct the root cause, replay safely where supported, and reconcile source and target counts.  
**Result:** Learner provisioning becomes predictable and assignment rules can use reliable worker attributes.  
**SAP SuccessFactors example:** Employee Central worker data feeding the learning environment through the configured integration pattern.  
**SME probe:** How would you distinguish a source-data issue from a mapping or interface failure?

## Q02 — Establish learner identity and account matching
**Question:** A worker has duplicate or mismatched accounts after a rehire. How would you resolve it across HR and learning systems?

**Situation:** A returning employee's identity did not align across source HR records and the learning account, fragmenting learning history.  
**Task:** Establish the correct identity relationship without losing audit evidence.  
**Action:** I would confirm authoritative identifiers and rehire policy, trace identity mapping through each interface, inspect duplicate handling and effective-dated records, and involve HR data owners before merging or correcting anything. I would test the approved correction, verify history and assignments, and document the reconciliation.  
**Result:** The learner's identity and history are more consistent, with a traceable resolution.  
**SAP SuccessFactors example:** Identity matching between Employee Central worker data and the Learning user record according to the configured integration design.  
**SME probe:** Which identifier is authoritative, and what safeguards prevent merging two different people?

## Q03 — Design an integration boundary with Employee Central
**Question:** HR wants Learning to consume job, location, and manager attributes. How would you define the interface boundary?

**Situation:** Learning assignment logic depended on HR attributes, but ownership and update responsibilities were unclear.  
**Task:** Define a stable, governed data contract between HR and Learning.  
**Action:** I would specify required attributes, authoritative source, identifiers, effective-date behavior, update frequency, validation rules, privacy classification, and error ownership. I would avoid duplicating business logic in both systems, document mapping and versioning, and test hires, transfers, manager changes, and terminations.  
**Result:** Both systems have clearer responsibilities and changes are easier to test and support.  
**SAP SuccessFactors example:** A documented worker-data contract for fields used by learning assignment profiles.  
**SME probe:** How would you handle a field that exists in HR but is not available through the selected integration path?

## Q04 — Choose an integration pattern
**Question:** A stakeholder proposes a custom point-to-point interface for every learning-related system. What architecture would you recommend?

**Situation:** Multiple one-off interfaces increased support effort and created inconsistent transformation logic.  
**Task:** Select an integration approach that fits the data, latency, governance, and operational needs.  
**Action:** I would inventory source and target systems, assess supported standard integrations, batch versus event-driven needs, volume, latency, security, error handling, and ownership. I would prefer a supported standard pattern where it meets requirements and consider SAP Integration Suite or another approved middleware approach only where orchestration, transformation, or cross-system controls justify it.  
**Result:** The architecture reduces avoidable duplication and makes monitoring and change management more coherent.  
**SAP SuccessFactors example:** Reuse a supported HR-to-Learning integration where appropriate; use middleware for justified cross-system orchestration.  
**SME probe:** What non-functional requirement would make a batch interface unacceptable?

## Q05 — Integrate learning content providers
**Question:** The organization uses an external content provider and wants learners to launch content from Learning. How would you design the connection?

**Situation:** The content provider and learning platform had different launch, identity, and completion-tracking responsibilities.  
**Task:** Ensure secure launch and clear ownership of learner progress and completion evidence.  
**Action:** I would document the provider's supported protocol and content package, authentication requirements, learner identifier matching, launch parameters, completion signals, error behavior, and vendor support boundaries. I would test launch and tracking with representative users and confirm how failures are monitored and escalated.  
**Result:** Learners receive a more seamless experience and the organization knows where to investigate launch versus tracking failures.  
**SAP SuccessFactors example:** A supported third-party content delivery pattern validated for authentication and completion tracking.  
**SME probe:** What is your diagnostic sequence when launch succeeds but the completion status does not return?

## Q06 — Integrate identity and single sign-on
**Question:** Employees can access the HR suite but receive an authentication error when opening Learning. How would you diagnose it?

**Situation:** The learner experience was interrupted at the identity boundary between applications.  
**Task:** Restore authorized access without weakening security controls.  
**Action:** I would trace the sign-in path, verify identity provider configuration, application assignment, user identifiers, session and redirect behavior, and relevant logs with the identity team. I would compare successful and failing personas, check recent certificate or configuration changes where applicable, and retest with least-privilege accounts.  
**Result:** The fault is isolated to identity, authorization, or application routing rather than being misdiagnosed as a learning-content issue.  
**SAP SuccessFactors example:** SSO access to Learning through the enterprise's configured identity services and application assignments.  
**SME probe:** How do you distinguish authentication failure from authorization failure?

## Q07 — Manage data transformation and code mapping
**Question:** HR uses one set of job or location codes, while learning rules expect different values. How would you design the mapping?

**Situation:** Valid source records were not triggering the intended learning assignments because code values were inconsistent.  
**Task:** Implement governed transformations without hiding source-data quality problems.  
**Action:** I would define the authoritative code set, document mapping ownership and effective dates, identify unknown and retired values, and decide whether transformation belongs in the source, integration layer, or target configuration. I would test all valid mappings plus unmapped values and provide exception reporting rather than silently defaulting important attributes.  
**Result:** Assignment behavior becomes explainable, and data-quality gaps are visible to the responsible owners.  
**SAP SuccessFactors example:** Mapping approved worker attributes into the values used by learning assignment rules.  
**SME probe:** When should an unmapped value stop processing instead of receiving a default?

## Q08 — Design integration failure handling and replay
**Question:** A nightly worker feed fails halfway through processing. How would you recover without creating duplicates?

**Situation:** Partial processing left uncertainty about which learner records were updated.  
**Task:** Restore processing safely and prove the target state is correct.  
**Action:** I would inspect run identifiers, logs, rejected records, and the interface's transaction or idempotency behavior. I would determine whether replay is supported and at what granularity, correct the root cause, replay only the safe scope, and reconcile counts and sample records. I would record the incident and add a preventive alert or validation if needed.  
**Result:** Recovery is controlled, duplicate risk is reduced, and the organization has evidence of successful reconciliation.  
**SAP SuccessFactors example:** A failed scheduled HR-to-Learning integration with a documented retry and reconciliation procedure.  
**SME probe:** What evidence would you require before replaying a partially completed batch?

## Q09 — Protect personal data in integration
**Question:** A proposed learning interface includes employee details that Learning does not need. What would you do?

**Situation:** An interface specification included more personal data than the learning process required.  
**Task:** Minimize data exposure while preserving business functionality.  
**Action:** I would map each field to a defined learning purpose, classify the data, remove unnecessary fields, confirm access and retention requirements, and review the design with privacy and security stakeholders. I would test that the reduced payload still supports identity, assignment, reporting, and audit needs, and document any approved exception.  
**Result:** The integration follows data-minimization principles and reduces privacy and security exposure.  
**SAP SuccessFactors example:** Limit the worker feed to approved attributes needed for learner provisioning and learning rules.  
**SME probe:** How would you prove that a field is necessary rather than merely convenient?

## Q10 — Define ownership for learning completion data
**Question:** A manager claims HR should own every learning completion field because the learner is an employee. How would you clarify ownership?

**Situation:** Teams disagreed about which application should author and correct learning completion status.  
**Task:** Establish data ownership and prevent competing updates.  
**Action:** I would classify worker identity and employment attributes separately from learning assignment, participation, assessment, and completion evidence. I would assign each data object an authoritative owner, define permitted consumers and correction processes, and document which system publishes or receives each status. I would test correction and reconciliation paths.  
**Result:** Data ownership becomes explicit and conflicting updates are reduced.  
**SAP SuccessFactors example:** Employee Central owns approved worker attributes while Learning manages learning-specific records, subject to the agreed enterprise design.  
**SME probe:** If HR needs a completion status for a downstream process, does that make HR the system of record for the completion event?

## Q11 — Integrate learning outcomes with analytics
**Question:** Leaders want to compare training completion with operational performance. How would you design the data flow responsibly?

**Situation:** Business leaders wanted a combined view of learning activity and operational outcomes, but the datasets used different identifiers and definitions.  
**Task:** Create a reliable analytical flow without overstating causation or exposing unnecessary personal data.  
**Action:** I would define the decision and metrics first, align identifiers and time windows, document data lineage and refresh cadence, validate completeness, and apply access controls and aggregation where appropriate. I would separate correlation from causation and identify which measures require additional business context.  
**Result:** Leaders receive a more trustworthy analytical view with known limitations and appropriate privacy controls.  
**SAP SuccessFactors example:** Governed learning completion data combined with approved business measures in the organization's analytics environment.  
**SME probe:** How would you prevent an apparent relationship between training and performance from being presented as proven causation?

## Q12 — Integrate assignments with changing worker status
**Question:** A worker transfers to another region and their old compliance assignment remains active. How would you handle the lifecycle?

**Situation:** Changes in worker status or organization were not consistently reflected in learning requirements.  
**Task:** Define how transfers, leaves, terminations, and rehires affect assignments and historical records.  
**Action:** I would agree lifecycle rules with HR and compliance, inspect effective dates and source events, map each event to the intended assignment behavior, and test transitions using representative cases. I would preserve historical completions and avoid deleting records merely to clear an assignment.  
**Result:** Learning requirements reflect approved lifecycle policies while historical evidence remains available.  
**SAP SuccessFactors example:** Effective-dated worker changes driving reassessment of assignment criteria through the configured integration design.  
**SME probe:** How would you distinguish a stale assignment from a valid historical requirement?

## Q13 — Establish integration observability
**Question:** Learning assignments are delayed, but there is no clear dashboard showing where the delay occurs. What would you implement?

**Situation:** Support teams discovered integration delays only after learners missed deadlines.  
**Task:** Make the integration observable across source, middleware, target, and business outcomes.  
**Action:** I would define operational indicators such as last successful run, processing duration, record counts, rejected records, age of pending changes, and reconciliation variance. I would assign thresholds and owners, link alerts to run IDs and logs, and create a runbook with escalation and recovery steps.  
**Result:** Teams can identify and respond to delays earlier and measure whether service levels are met.  
**SAP SuccessFactors example:** Monitoring for the worker-to-Learning feed and the resulting learner provisioning and assignment outcomes.  
**SME probe:** Which indicator would reveal a technically successful run that nevertheless failed to update the intended learners?

## Q14 — Design interface versioning and change control
**Question:** HR plans to rename a field and change its allowed values. How would you avoid breaking learning assignments?

**Situation:** An upstream schema change could invalidate mapping and assignment criteria.  
**Task:** Introduce the change with controlled compatibility and testing.  
**Action:** I would document the consumer impact, agree a version and effective date, identify mappings and rules that depend on the field, and establish backward-compatibility or coordinated deployment where supported. I would test representative values, unknown values, and rollback or recovery steps, then communicate readiness to both support teams.  
**Result:** The interface evolves with reduced risk of silent assignment failures.  
**SAP SuccessFactors example:** A governed change to an HR attribute used by learning assignment logic.  
**SME probe:** What would you do if the source change cannot be delayed but the target cannot be updated at the same time?

## Q15 — Reconcile records across systems
**Question:** HR reports 12,000 active workers, while Learning shows 11,700 learner accounts. How would you determine whether this is an error?

**Situation:** Headline record counts differed, but the systems did not necessarily use the same inclusion rules.  
**Task:** Explain the variance and identify actionable exceptions.  
**Action:** I would align population definitions, effective dates, worker types, exclusions, duplicate handling, and inactive status rules. I would compare counts by region and worker category, inspect a sample of unmatched identities, classify each variance, and agree remediation with the data owners.  
**Result:** The organization understands the difference between a legitimate population variance and an integration defect.  
**SAP SuccessFactors example:** Reconciliation between the agreed eligible-worker population in Employee Central and provisioned Learning users.  
**SME probe:** Why is matching total counts insufficient to prove integration completeness?

## Q16 — Support downstream compliance or credential systems
**Question:** A compliance application needs proof that a worker completed a required course. How would you architect the exchange?

**Situation:** A downstream control depended on learning completion evidence but the definition and timing of a valid completion were unclear.  
**Task:** Publish only approved, trustworthy completion data with a clear contract.  
**Action:** I would define the completion event, required identifiers, validity and renewal rules, consumer use, delivery timing, security, and correction semantics. I would choose a supported interface pattern, include failure monitoring and reconciliation, and test complete, failed, expired, corrected, and duplicate-event cases.  
**Result:** The consumer can rely on an explicit contract rather than inferring compliance from an ambiguous status.  
**SAP SuccessFactors example:** A governed exchange of learning completion evidence to a downstream compliance or credential system.  
**SME probe:** How should the downstream system react when a previously reported completion is corrected?

## Q17 — Secure integration credentials and permissions
**Question:** An integration runs under a broadly privileged technical account. What changes would you recommend?

**Situation:** The interface could access more data and operations than its business purpose required.  
**Task:** Reduce the integration's security exposure without interrupting service.  
**Action:** I would inventory its actual operations and data access, define least-privilege permissions, confirm credential storage and rotation practices, remove interactive access where inappropriate, and review logging for sensitive payloads. I would test the revised permissions in a controlled environment and document ownership and emergency recovery.  
**Result:** The integration operates with clearer accountability and a smaller security blast radius.  
**SAP SuccessFactors example:** A dedicated integration identity scoped to the required learning and worker-data operations, aligned with the tenant's supported security model.  
**SME probe:** How would you rotate a credential safely when the interface has no redundant runtime?

## Q18 — Handle duplicate and out-of-order events
**Question:** A worker transfer event arrives twice, and an older event arrives after the newer one. How would you protect the target state?

**Situation:** Repeated or delayed events could overwrite current learner attributes with stale values.  
**Task:** Ensure updates respect identity and temporal order.  
**Action:** I would inspect available event IDs, effective dates, timestamps, and ordering guarantees. I would define idempotency and stale-update handling at the appropriate integration layer, test duplicate and out-of-order cases, and reconcile the target against the authoritative source. I would avoid assuming the interface guarantees ordering unless documented.  
**Result:** The integration becomes more resilient to replay and delayed delivery.  
**SAP SuccessFactors example:** A worker-attribute update flow with documented duplicate detection and effective-date handling.  
**SME probe:** Which source field should determine recency when event arrival time differs from business-effective time?

## Q19 — Plan integration testing across architecture layers
**Question:** Unit tests pass, but learners still fail to receive correct assignments in production-like testing. How would you structure the test approach?

**Situation:** Component tests did not cover the full journey from HR change through learner provisioning to assignment and reporting.  
**Task:** Validate the end-to-end business outcome across systems and failure paths.  
**Action:** I would build a traceable test matrix covering source data, mapping, identity, target provisioning, assignment rules, permissions, completion, analytics, and error recovery. I would include positive, negative, boundary, volume, and regression tests, assign evidence owners, and reconcile the final target state.  
**Result:** Testing proves the business journey rather than only the technical success of individual components.  
**SAP SuccessFactors example:** A transfer scenario traced from Employee Central through Learning user updates and revised assignment outcomes.  
**SME probe:** What evidence would prove the integration works beyond a successful HTTP response or job status?

## Q20 — Present the target integration architecture
**Question:** You are asked to design a connected learning ecosystem spanning HR, Learning, external content, identity, analytics, and compliance. How would you explain your architecture?

**Situation:** Multiple systems supported different parts of the learning lifecycle, with unclear data ownership and fragmented monitoring.  
**Task:** Produce an architecture that is secure, supportable, and aligned to business outcomes.  
**Action:** I would start with business capabilities and data ownership, define systems of record and interfaces, reuse supported standard integrations, introduce middleware only where justified, and establish identity, privacy, error handling, observability, reconciliation, and change governance. I would map critical journeys and failure modes, then phase implementation by value and risk.  
**Result:** Stakeholders receive a target design with explicit boundaries, operational controls, and measurable outcomes such as timely provisioning, reliable assignments, and auditable completion.  
**SAP SuccessFactors example:** An architecture view showing Employee Central, SuccessFactors Learning, identity services, approved content providers, integration services, analytics, and compliance consumers with labeled data flows.  
**SME probe:** Which architectural decision would you validate first, and what evidence would cause you to change it?

---

## Theme 08 — Candidate self-review

Before considering this theme complete, ensure you can:
- Identify the system of record and owner for every exchanged data object.
- Explain the integration pattern, data contract, identity model, and security boundary.
- Describe retry, idempotency, reconciliation, monitoring, and recovery.
- Trace a real business journey end to end rather than stopping at interface success.
- Separate product-supported capabilities from tenant-specific configuration and middleware design.
- Quantify outcomes only when supported by project evidence.

**Interview answer quality bar:** Explain the business flow, architecture choice, data ownership, failure modes, security controls, operational evidence, and measurable outcome.

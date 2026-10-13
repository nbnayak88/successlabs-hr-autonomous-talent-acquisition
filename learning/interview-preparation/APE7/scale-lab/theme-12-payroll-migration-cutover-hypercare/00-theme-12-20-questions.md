# APE7 — Theme 12: Payroll Migration, Cutover & Hypercare

**Purpose:** Practise planning and governing payroll migration, cut-over, reconciliation, go/no-go decisions, contingency, and stabilisation after launch.

**Practice guidance:** These are illustrative model answers, not claims about personal experience. Adapt them to evidence you can substantiate. Validate the actual SAP product, release, payroll localisation, migration tooling, hosting model, and approved programme runbooks before applying a recommendation.

## Q01 — How do you build a payroll migration strategy?

### Interview Question
A company is replacing its legacy payroll platform. How do you structure the migration strategy?

### STAR Answer
- **Situation:** The programme needed to move payroll processing while protecting employee pay, statutory obligations, and business continuity.
- **Task:** Define a migration approach that addresses data, process, technology, controls, and operational readiness.
- **Action:** Inventory payroll populations, historical data, rules, interfaces, outputs, reporting, and downstream consumers. Assess target-state fit and country-specific constraints; define migration waves, ownership, validation, reconciliation, cut-over, contingency, and acceptance criteria. Test the approach with representative scenarios before committing to the final plan.
- **Result:** The programme has a traceable migration path and explicit criteria for proving readiness and completeness.

### SAP Payroll Example
Map the legacy payroll, HR master data, time, finance posting, payment, and statutory reporting dependencies to the actual target SAP landscape.

### SME Probe
Which data and process decisions must be settled before a credible cut-over plan can be baselined?

## Q02 — How do you decide what historical payroll data to migrate?

### Interview Question
Stakeholders ask to migrate every historical payroll record into the new system. How do you assess the request?

### STAR Answer
- **Situation:** Broad historical migration increased complexity, effort, and privacy exposure.
- **Task:** Determine the historical data required for legal, operational, employee-service, audit, and reporting purposes.
- **Action:** Classify data by purpose, retention requirement, access need, volume, quality, and target-system capability. Agree with payroll, legal, finance, records management, and privacy owners which data is migrated, archived, transformed, or retained in a controlled legacy repository. Document ownership and retrieval procedures.
- **Result:** Historical data scope is justified and governed rather than migrated indiscriminately.

### SAP Payroll Example
Confirm which historical balances, results, and employee records are required by the target payroll solution and localisation; do not assume all legacy result history is directly migratable.

### SME Probe
How do you support employee inquiries for periods retained outside the target payroll platform?

## Q03 — How do you profile and cleanse payroll migration data?

### Interview Question
The source contains inconsistent employee identifiers, missing bank details, and conflicting effective dates. What is your approach?

### STAR Answer
- **Situation:** Source data quality issues threatened migration completeness and payroll processing.
- **Task:** Establish data fitness and resolve material defects before cut-over.
- **Action:** Profile the source, define validation rules and critical fields, quantify defects by type and population, assign data owners, and resolve exceptions at the source where possible. Re-run profiling after correction, document approved transformations, and prevent silent defaulting of sensitive or financially material values.
- **Result:** Data quality is measured, ownership is clear, and unresolved exceptions are visible to decision-makers.

### SAP Payroll Example
Validate employee identifiers, organisational assignments, pay components, bank/payment attributes, tax data, and effective-dated records according to the target country's requirements.

### SME Probe
Which defects should block migration, and which can be accepted only with an approved workaround?

## Q04 — How do you validate migration mappings and transformations?

### Interview Question
A legacy earning code maps to a target payroll component. How do you prove the mapping is correct?

### STAR Answer
- **Situation:** Source codes and target configuration did not have a simple one-to-one relationship.
- **Task:** Ensure each transformation preserves the intended business and payroll meaning.
- **Action:** Maintain a mapping catalogue with source meaning, target representation, transformation logic, effective dates, exclusions, owner, and approval. Test normal, boundary, retroactive, and exceptional cases; reconcile record counts and financial totals; and obtain payroll SME sign-off for ambiguous mappings.
- **Result:** Mapping decisions are explainable and verified through business outcomes rather than field-level similarity alone.

### SAP Payroll Example
Map legacy earning/deduction codes and related attributes to the target design only after validating the actual target configuration and country rules.

### SME Probe
What evidence is required when several legacy codes map to a single target component?

## Q05 — How do you plan migration rehearsals?

### Interview Question
The first migration rehearsal finished late and revealed manual steps. How do you prepare the next rehearsal?

### STAR Answer
- **Situation:** The initial rehearsal exposed timing uncertainty, unclear ownership, and repeatable manual tasks.
- **Task:** Make the next rehearsal representative, measurable, and closer to production execution.
- **Action:** Record actual durations, defects, dependencies, resource needs, and decision delays. Update scripts and runbooks, assign a named owner and evidence for every step, automate deterministic checks where safe, and rehearse exception handling and rollback decisions. Compare outcomes against agreed success criteria.
- **Result:** Rehearsals become measurable improvement cycles and provide more reliable cut-over estimates.

### SAP Payroll Example
Rehearse extraction, transformation, load, validation, reconciliation, access readiness, interface switching, and payroll-cycle execution in a representative non-production environment.

### SME Probe
Why is a technically successful rehearsal insufficient if it used unrealistic data volumes or omitted business approvals?

## Q06 — How do you define cut-over entry and exit criteria?

### Interview Question
What must be true before the programme starts payroll cut-over, and what proves it is complete?

### STAR Answer
- **Situation:** Teams had different interpretations of when cut-over could begin and when the new service was ready.
- **Task:** Establish measurable gates and accountable sign-offs.
- **Action:** Define entry criteria for data freeze, approvals, backups, access, dependencies, resource availability, and tested runbooks. Define exit criteria for migration completeness, reconciliations, critical interfaces, payroll validation, payment readiness, unresolved defects, and business acceptance. Assign owners and evidence for each gate.
- **Result:** Cut-over decisions are based on agreed evidence rather than informal confidence.

### SAP Payroll Example
Tailor gates to the target payroll architecture, migration mechanism, country-specific processing calendar, and downstream payment and finance dependencies.

### SME Probe
Who can authorise proceeding when one criterion is not met, and how is that exception governed?

## Q07 — How do you govern the cut-over command centre?

### Interview Question
During cut-over, multiple workstreams report conflicting status. How do you maintain control?

### STAR Answer
- **Situation:** Data, application, integration, security, finance, and business activities ran in parallel with interdependent milestones.
- **Task:** Establish one trusted operational picture and timely decision-making.
- **Action:** Set a command structure with a cut-over lead, workstream owners, a master timeline, dependency tracking, decision log, issue escalation, and regular status cadence. Require evidence-based completion updates, record deviations, and make go/no-go decisions through the agreed authority.
- **Result:** Teams coordinate from a single status baseline and blockers are escalated before they silently delay dependent tasks.

### SAP Payroll Example
Track migration loads, access provisioning, interface endpoints, payroll readiness, finance reconciliation, and payment handoff as connected milestones.

### SME Probe
How do you handle a workstream that declares completion without producing the agreed evidence?

## Q08 — How do you reconcile migrated payroll data?

### Interview Question
The target has loaded all expected records, but aggregate payroll balances do not match the source. What do you do?

### STAR Answer
- **Situation:** Technical load counts passed while financial reconciliation identified unexplained differences.
- **Task:** Establish completeness and correctness before accepting the migrated state.
- **Action:** Reconcile by agreed dimensions such as employee population, period, component, currency, and organisational grouping. Separate conversion defects, scope differences, rounding, timing, and legitimate design changes. Trace variances to source records and transformation rules, correct and rerun controlled loads, and document accepted differences with approval.
- **Result:** Migration acceptance is based on explained and approved balances, not only successful record loading.

### SAP Payroll Example
Reconcile relevant payroll balances and results to the target design, plus finance and payment control totals where applicable.

### SME Probe
How do you ensure that offsetting errors do not make an aggregate total appear correct?

## Q09 — How do you manage payroll parallel-run differences?

### Interview Question
Parallel payroll produces differences for several employee groups just before the planned go-live. How do you decide whether to proceed?

### STAR Answer
- **Situation:** Target and legacy results diverged and the deadline limited remediation time.
- **Task:** Classify differences and determine whether the target is ready for production.
- **Action:** Compare aligned inputs and processing assumptions, group variances by cause and risk, identify affected population and statutory/financial impact, and agree acceptable tolerances before reviewing results. Resolve critical defects, rerun affected scenarios, and escalate any residual risk to authorised business owners.
- **Result:** The go-live decision rests on explainable variances and explicit risk acceptance rather than a single match percentage.

### SAP Payroll Example
Compare the same payroll population and period with aligned effective dates, country parameters, and agreed treatment of legacy-specific behaviour.

### SME Probe
Why should tolerance thresholds be defined before results are known?

## Q10 — How do you handle a cut-over delay?

### Interview Question
A critical migration step is running longer than planned and threatens the payroll calendar. What actions do you take?

### STAR Answer
- **Situation:** Actual execution exceeded the plan and downstream tasks were at risk.
- **Task:** Protect the payroll deadline while preserving safe processing and control requirements.
- **Action:** Confirm the actual state and remaining duration, identify the critical-path impact, check whether safe parallel tasks can continue, and evaluate approved recovery options. Communicate a time-stamped forecast, define the latest decision point, and escalate options such as controlled extension, pause, or contingency through the authorised governance process.
- **Result:** The programme makes a timely decision using verified status and business consequences.

### SAP Payroll Example
Assess the specific migration step, dependent interfaces, payroll calendar, and recovery options in the approved runbook; do not skip validation to recover time.

### SME Probe
How do you avoid optimistic time estimates becoming the basis for repeated unsafe decisions?

## Q11 — How do you plan rollback or contingency?

### Interview Question
The target payroll service fails a critical acceptance check after cut-over has begun. How do you determine whether to roll back?

### STAR Answer
- **Situation:** A critical failure raised doubt about the target's ability to process payroll safely.
- **Task:** Execute the approved contingency decision before the recovery window closes.
- **Action:** Define objective rollback triggers in advance, confirm the state of data changes and interfaces, assess whether the legacy service remains viable, and verify the approved rollback sequence and decision authority. Preserve evidence, prevent conflicting processing, reconcile transactions during the transition, and communicate the chosen path.
- **Result:** Contingency is controlled and avoids simultaneous or inconsistent payroll processing across systems.

### SAP Payroll Example
Validate the actual feasibility of returning to legacy processing, including data changes, interface switching, payroll results, payment files, and finance postings.

### SME Probe
What if the legacy platform can be restarted but its data is no longer aligned with changes made during cut-over?

## Q12 — How do you manage payroll cut-over data freeze?

### Interview Question
HR continues to update employee records during migration. How do you prevent missing or conflicting changes?

### STAR Answer
- **Situation:** Business-as-usual changes continued while source data was being extracted and loaded.
- **Task:** Maintain a consistent source-to-target state through the migration window.
- **Action:** Define the freeze scope and timing, communicate responsibilities, record authorised exceptions, and choose an approved approach for late changes such as delta extraction or controlled manual processing. Reconcile changes between the baseline extract and final target, and verify effective dates before payroll begins.
- **Result:** Late changes are controlled and traceable instead of being lost or applied inconsistently.

### SAP Payroll Example
Agree how late master-data, time, bank, and payroll-relevant changes are captured and reconciled across the actual source and target systems.

### SME Probe
How would you prove the final delta contains every authorised change made after the baseline extract?

## Q13 — How do you coordinate integrations during cut-over?

### Interview Question
Several interfaces must switch from legacy payroll to the target system. How do you avoid routing errors and duplicate messages?

### STAR Answer
- **Situation:** Multiple consumers and producers depended on payroll data and needed coordinated endpoint or routing changes.
- **Task:** Switch integration paths safely and prove message completeness.
- **Action:** Inventory interfaces, endpoints, schedules, credentials, dependencies, and owners. Sequence the switch, validate connectivity and routing, pause or buffer messages where designed, use controlled replay, and reconcile message counts and business keys. Keep a documented fallback path and monitor the first live exchanges.
- **Result:** Interface transition is controlled with evidence of correct routing and data completeness.

### SAP Payroll Example
Coordinate HR, time, finance, payment, reporting, and vendor connections according to the deployed middleware and interface architecture.

### SME Probe
What prevents a queued message from being processed by both the legacy and target payroll systems?

## Q14 — How do you protect employee payments during cut-over?

### Interview Question
How do you ensure no employee is paid twice or omitted when the payroll platform changes?

### STAR Answer
- **Situation:** The migration introduced risk at the boundary between calculation, payment generation, and bank transmission.
- **Task:** Preserve payment completeness, authorisation, and uniqueness.
- **Action:** Establish a payment-state inventory, reconcile approved payroll totals and employee populations, confirm whether any legacy files were generated or transmitted, and define which system owns each payment. Use independent release controls, verify bank acknowledgements, and prohibit duplicate release until receipt state is known.
- **Result:** Payment ownership and transmission state are explicit throughout cut-over.

### SAP Payroll Example
Reconcile payroll results, payment files, approvals, transmission acknowledgements, and bank outcomes across the actual payment chain.

### SME Probe
How do you handle an ambiguous transmission state when the cut-over decision deadline is approaching?

## Q15 — How do you structure hypercare?

### Interview Question
The new payroll service is live. What operating model do you establish for the first payroll cycles?

### STAR Answer
- **Situation:** The team needed heightened support while users adapted and latent defects could surface.
- **Task:** Stabilise the service and resolve issues without losing normal operational controls.
- **Action:** Define hypercare duration and exit criteria, daily checkpoints, named functional and technical owners, severity rules, business communications, payroll-cycle milestones, and escalation to vendors. Track incidents, workarounds, reconciliations, and recurring patterns; transition knowledge and open actions into steady-state support.
- **Result:** Stabilisation is measured and managed, with a controlled path to normal operations.

### SAP Payroll Example
Cover master data, time interfaces, payroll calculation, posting, payment, reporting, access, and employee-support issues during the first agreed cycles.

### SME Probe
What evidence demonstrates that hypercare can end safely rather than simply reaching its planned end date?

## Q16 — How do you manage defects discovered during hypercare?

### Interview Question
A defect affects a subset of employee payroll results after go-live. How do you balance urgent correction with change control?

### STAR Answer
- **Situation:** A live defect required timely resolution but an untested fix could create wider payroll impact.
- **Task:** Correct the issue through controlled incident, testing, approval, and deployment procedures.
- **Action:** Assess affected employees and payroll stages, contain further impact, reproduce the issue safely, identify root cause, and test the fix plus relevant regression scenarios. Obtain required approvals, deploy through the controlled release path, validate affected results and downstream effects, and communicate the resolution.
- **Result:** The defect is resolved with evidence while limiting the risk of introducing a second production issue.

### SAP Payroll Example
Use the actual production support and change-management process, protecting employee data and validating any recalculation or correction before downstream release.

### SME Probe
When is a workaround acceptable, and what controls and expiry criteria must accompany it?

## Q17 — How do you prepare support teams for handover?

### Interview Question
The implementation team is leaving, but operations does not yet understand the new payroll dependencies. What do you do?

### STAR Answer
- **Situation:** Project knowledge remained with implementation specialists and operational ownership was incomplete.
- **Task:** Transfer the capability to operate, troubleshoot, and recover the service.
- **Action:** Complete service maps, support contacts, runbooks, known-error records, access, monitoring, recovery procedures, vendor escalation, and open-risk inventory. Conduct walkthroughs and practical simulations, verify that operations can execute critical tasks, and obtain formal acceptance of remaining actions.
- **Result:** Support ownership is evidenced by demonstrated capability, not merely document delivery.

### SAP Payroll Example
Ensure operations can trace a payroll issue across the actual SAP application, middleware, finance, payment, and hosting boundaries.

### SME Probe
How would you test operational readiness if the key implementation expert is unavailable?

## Q18 — How do you measure hypercare success?

### Interview Question
Leadership asks whether the new payroll service is stable. What measures do you present?

### STAR Answer
- **Situation:** Stakeholders wanted an objective view of stability rather than anecdotal reports.
- **Task:** Define measures linked to payroll outcomes and support readiness.
- **Action:** Track payroll deadline attainment, calculation and reconciliation exceptions, incident severity and recurrence, interface completeness, payment issues, manual workarounds, support response, and unresolved high-risk defects. Compare with agreed baselines and thresholds across representative cycles and report residual risk.
- **Result:** Stability is evaluated using business outcomes and trend evidence.

### SAP Payroll Example
Measure the relevant country payroll cycles and downstream handoffs separately where their calendars and risks differ.

### SME Probe
Why might a low incident count be misleading during the first payroll cycles?

## Q19 — How do you govern cut-over decisions under executive pressure?

### Interview Question
Executives insist on go-live despite an unresolved material reconciliation difference. How do you respond?

### STAR Answer
- **Situation:** Schedule pressure conflicted with evidence that a critical acceptance condition remained open.
- **Task:** Give a clear recommendation and ensure any decision follows authorised risk governance.
- **Action:** Quantify the variance, affected population, potential financial/compliance impact, uncertainty, and mitigation options. Present the evidence and recommendation to the designated decision authority, document the decision and risk owner, and do not misrepresent a failed criterion as passed.
- **Result:** Leadership receives an honest risk assessment and the decision remains traceable and accountable.

### SAP Payroll Example
Escalate unexplained payroll balance or payment discrepancies through the approved programme governance and payroll-control process.

### SME Probe
How do you distinguish a professional recommendation not to proceed from the authority to make the final go/no-go decision?

## Q20 — How do you turn migration lessons into a reusable playbook?

### Interview Question
The first country migration is complete. How do you use its lessons to improve the next country or wave?

### STAR Answer
- **Situation:** The first wave revealed reusable lessons alongside country-specific requirements.
- **Task:** Improve repeatability without assuming every country has identical payroll rules.
- **Action:** Review timings, data defects, mapping issues, test gaps, cut-over deviations, incidents, and stakeholder decisions. Separate reusable standards from localisation-specific choices, update templates and checklists, assign improvement owners, and validate changes in the next rehearsal. Preserve traceability to country-specific requirements.
- **Result:** Later waves benefit from proven improvements while retaining local compliance and payroll accuracy.

### SAP Payroll Example
Reuse common migration governance and evidence templates while independently validating each country's statutory, data, interface, and payroll-processing requirements.

### SME Probe
How do you stop a template that worked in one country from becoming an untested assumption in another?

---

## Theme 12 Completion Check
- 20 scenario-based interview questions
- STAR model answer for each scenario
- SAP payroll example for each scenario
- SME probe for deeper discussion
- Cut-over, rollback, payment, and migration decisions must follow approved runbooks and be validated for the actual product, country, and operating model

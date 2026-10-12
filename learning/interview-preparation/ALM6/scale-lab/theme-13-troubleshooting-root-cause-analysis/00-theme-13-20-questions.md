# ALM6 — Theme 13: Troubleshooting & Root Cause Analysis
## Applied SAP SuccessFactors Learning | Interview Preparation

**Theme outcome:** Diagnose Learning incidents systematically, distinguish symptoms from root causes, validate hypotheses with evidence, restore service safely, and prevent recurrence.

**Answer discipline:** Use the STAR structure, state what evidence you examined, separate confirmed facts from hypotheses, and quantify the result without inventing metrics. Examples are illustrative and should be adapted to the candidate's real experience.

---

## 01. Learner cannot launch an assigned course

**Question:** A learner reports that an assigned e-learning course will not launch, while colleagues can open it. How would you diagnose the issue?

**Situation:** A learner cannot launch an assigned course in SAP SuccessFactors Learning, but the course is available to other users.
**Task:** Restore access while determining whether the fault is user-specific, assignment-related, content-related, or browser-related.
**Action:**
- Reproduce the issue using the learner's role and capture the exact error, timestamp, course ID, and launch method.
- Compare the learner's assignment, registration, item status, and access permissions with a working peer.
- Test supported browser settings and pop-up/content-launch behavior; inspect content package and launch configuration only if evidence points there.
- Change one variable at a time and record the result; escalate with evidence if the fault is in the content package or platform.
**Result:** The diagnosis isolates the failing layer, the learner regains access, and the support record includes a verified cause and preventive action.
**SAP SuccessFactors example:** Compare the affected user's Learning assignment and item launch behavior with a working learner before republishing a SCORM package.
**SME probe:** What evidence would justify changing the content package rather than troubleshooting the learner's browser or permissions?

## 02. Completion status does not update

**Question:** A learner completed a SCORM course, but SAP SuccessFactors Learning still shows it as incomplete. How do you find the cause?

**Situation:** The learner reached the end of the course, yet the LMS transcript has no completed status.
**Task:** Identify where completion tracking failed without manually marking the course complete before validating the record.
**Action:**
- Capture the item, content object, learner, attempt, launch time, and expected completion criteria.
- Review the content package's completion and success status rules and determine whether the learner completed the required assessment.
- Reproduce with a test account and inspect the SCORM tracking behavior, suspend/resume data, and LMS attempt record where available.
- Determine whether the issue is package logic, an interrupted session, or an LMS recording problem; apply a controlled fix and retest completion end to end.
**Result:** Completion is recorded through the intended mechanism, the affected records are reconciled under approved procedures, and regression tests cover the same tracking condition.
**SAP SuccessFactors example:** Validate whether a SCORM package sends the expected completion status and score to Learning rather than relying on a learner's statement that the final screen appeared.
**SME probe:** How would you correct an affected transcript while preserving auditability and avoiding an unsupported manual completion?

## 03. Course assignment is missing for a subset of employees

**Question:** A mandatory course was assigned to a population, but a subset of eligible employees did not receive it. What is your diagnostic approach?

**Situation:** Most employees received a required assignment, but an identifiable group did not.
**Task:** Establish whether the population definition, assignment rules, user data, or assignment job caused the gap.
**Action:**
- Define the expected population and compare it with the actual assigned population using stable employee identifiers.
- Check assignment profiles, curricula, item availability, effective dates, job/location/org attributes, and exclusion criteria.
- Compare affected and unaffected users to identify the attribute or rule that differs.
- Review job execution history and input data timing; correct the underlying rule or source data, rerun through controlled procedures, and reconcile counts.
**Result:** The missing population is identified, assignments are created through the correct rule, and a repeatable reconciliation prevents silent omissions.
**SAP SuccessFactors example:** Test whether an assignment profile uses the intended job code and organizational attributes and whether the latest user data was available when the assignment process ran.
**SME probe:** How would you prove that the corrected assignment logic does not create duplicate or unintended assignments?

## 04. Assignment count suddenly drops after a data load

**Question:** Following a user-data import, the number of Learning assignments falls sharply. How would you investigate?

**Situation:** A routine import is followed by an unexpected decline in assigned learners.
**Task:** Determine whether the import changed user attributes, user status, or assignment eligibility and prevent further impact.
**Action:**
- Pause or contain additional loads if the risk of expanding the issue is material and governance permits.
- Compare pre- and post-load counts by status, organization, location, job, and other assignment-driving fields.
- Review the import file, rejected rows, mapping, effective dating, and changes to active/inactive or eligibility attributes.
- Reconcile source-to-target records, restore corrected data through an approved process, then rerun assignment logic and validate sample users plus aggregate counts.
**Result:** The triggering data change is identified, the population is restored accurately, and a pre/post-load control is introduced.
**SAP SuccessFactors example:** Compare the user data file and import results with the attributes used by Learning assignment profiles before assuming the LMS assignment engine failed.
**SME probe:** Which checks would you automate in a reconciliation report to detect this regression before business users report it?

## 05. A scheduled assignment process appears not to have run

**Question:** A scheduled process is expected to assign compliance learning overnight, but no new assignments appear. What do you do?

**Situation:** The expected assignment population is absent after the scheduled processing window.
**Task:** Establish whether the process did not execute, executed with errors, or completed without matching eligible users.
**Action:**
- Confirm the schedule, time zone, expected run window, and whether the job was enabled.
- Inspect available execution history, status, error details, and the last successful run.
- Validate the input population and rule criteria independently to distinguish an execution failure from zero eligible matches.
- Resolve the identified cause, rerun only under approved controls, and verify both assignment records and duplicate-prevention behavior.
**Result:** The failure mode is established, the missed assignments are recovered safely, and monitoring alerts on missing or abnormal runs.
**SAP SuccessFactors example:** Use the available Learning administration/job history and assignment-rule evidence to distinguish a failed scheduled run from a successful run with no matching population.
**SME probe:** What evidence is required before rerunning a process that may have partially completed?

## 06. Only one browser or device experiences the problem

**Question:** A Learning course works on one browser but fails on another. How do you avoid an unnecessary platform change?

**Situation:** The issue is reproducible only in a specific browser/device combination.
**Task:** Isolate client-side compatibility from content, authentication, and LMS configuration issues.
**Action:**
- Record browser/version, operating system, device, network, error, and launch path.
- Reproduce with a clean session and supported browser settings, changing one factor at a time.
- Compare authentication redirects, pop-up handling, cookies, third-party content restrictions, and console/network evidence where available and permitted.
- Verify the same course and account on a supported baseline; escalate browser-specific evidence to the relevant support owner and document a safe workaround.
**Result:** The fault is assigned to the correct support boundary and users receive a tested workaround while a durable fix is evaluated.
**SAP SuccessFactors example:** Test the same Learning item with the same learner account across supported browsers before changing the SCORM content object.
**SME probe:** How do you distinguish a browser compatibility defect from a cross-domain authentication or content-hosting issue?

## 07. Assessment score is not retained

**Question:** Learners pass an online assessment, but their score is missing or incorrect in Learning. How would you troubleshoot it?

**Situation:** The course displays a passing score, but the LMS transcript shows no score or a conflicting result.
**Task:** Identify whether scoring logic, content tracking, completion criteria, or record processing is responsible.
**Action:**
- Capture the learner's attempt, expected score, actual transcript values, and the precise pass/completion rules.
- Check the assessment's scoring configuration and the content package's score/status reporting behavior.
- Reproduce with known answers and compare the displayed score with the values sent to the LMS.
- Validate thresholds, rounding, retry behavior, and whether completion and success statuses are being mapped correctly; regression-test pass, fail, retry, and resume paths.
**Result:** Score and completion behavior align with the defined policy, and tests cover boundary scores and repeat attempts.
**SAP SuccessFactors example:** Test the configured passing threshold and the SCORM package's reported score/status against the Learning item completion criteria.
**SME probe:** What would you do if the learner-facing score is correct but the transcript score is wrong?

## 08. Learning history appears duplicated

**Question:** A learner's transcript shows duplicate completion records after an integration or migration. How do you determine the source and correct the data?

**Situation:** Duplicate history records create confusion for the learner and may distort compliance reporting.
**Task:** Determine whether duplicates came from repeated source events, a replayed interface, a migration load, or legitimate separate attempts.
**Action:**
- Preserve the affected records and compare user, item, completion date, source, attempt, and external reference identifiers.
- Trace the data lineage through the source event, interface/import logs, and target transcript.
- Establish the business rule for distinguishing a retry or separate completion from a true duplicate.
- Correct only through an approved data remediation process, reconcile source and target counts, and add idempotency or duplicate-detection controls where applicable.
**Result:** Genuine duplicates are resolved without deleting valid history, and repeat processing no longer creates the same defect.
**SAP SuccessFactors example:** Trace a duplicated completion to the originating HR/LMS feed or migration batch before editing the learner transcript.
**SME probe:** How would you design a duplicate-detection key without incorrectly merging two valid completions of the same item?

## 09. Learning integration fails intermittently

**Question:** An upstream system intermittently fails to send learner or learning data to SAP SuccessFactors Learning. How do you isolate the fault?

**Situation:** Some interface runs succeed while others fail or arrive late.
**Task:** Identify whether the cause is source data, authentication, mapping, transport, throttling, or target validation.
**Action:**
- Build a timeline with correlation/reference IDs, run status, affected records, and timestamps.
- Compare successful and failed payloads and identify whether failures cluster by record type, volume, field, or time.
- Inspect available middleware/interface monitoring, authentication status, response codes, schema/mapping changes, and target validation messages.
- Retry only after confirming idempotency and correcting the cause; reconcile source, in-flight, failed, and target records.
**Result:** The failing layer is identified, data loss is ruled out through reconciliation, and monitoring captures the intermittent pattern.
**SAP SuccessFactors example:** For an SAP Integration Suite or Integration Center feed, compare message-level failures and target validation errors rather than treating every failure as a Learning defect.
**SME probe:** How do you safely replay failed messages when the target may already have processed some records?

## 10. A content package works in test but fails in production

**Question:** A course passes testing but fails after production deployment. How do you perform root-cause analysis?

**Situation:** The same course package behaves differently across environments.
**Task:** Find the configuration or artifact difference and restore service without introducing an untested change.
**Action:**
- Compare package versions, content object settings, item settings, launch URLs, hosting permissions, and relevant environment configuration.
- Verify that the deployed artifact matches the approved release and that dependencies were migrated consistently.
- Reproduce using a controlled test learner and collect the exact production failure.
- Roll back or apply a reviewed correction according to release controls, then rerun launch, completion, score, and resume tests.
**Result:** The environment-specific difference is corrected and a deployment comparison checklist is added to release validation.
**SAP SuccessFactors example:** Compare the production content object and package version with the tested version, including any environment-specific content-hosting URL.
**SME probe:** What would convince you that the root cause is configuration drift rather than an untested defect in the package?

## 11. Notifications are not sent to expected learners

**Question:** Mandatory training reminders are not reaching some learners. How would you diagnose the problem?

**Situation:** A reminder campaign appears successful, but a subset of recipients report no notification.
**Task:** Distinguish eligibility, trigger, address, delivery, and recipient-side issues.
**Action:**
- Define the expected recipient set and compare it with the actual notification/audit evidence available.
- Check notification triggers, timing, template conditions, user email/contact data, language settings, and relevant assignment status.
- Determine whether the message was not generated, rejected by the delivery service, or delivered but filtered downstream.
- Correct the responsible layer, test representative users, and reconcile the recipient list without sending uncontrolled duplicate reminders.
**Result:** The missing-recipient cause is confirmed, affected learners receive the appropriate communication, and monitoring distinguishes generation from delivery.
**SAP SuccessFactors example:** Verify Learning notification conditions and user contact data before escalating to email infrastructure.
**SME probe:** What evidence differentiates “notification not triggered” from “notification sent but not delivered”?

## 12. Compliance report conflicts with learner transcripts

**Question:** A compliance dashboard reports employees as overdue even though some have completed the course. How do you identify the cause?

**Situation:** The compliance report and individual Learning transcripts disagree.
**Task:** Determine whether the discrepancy is caused by reporting logic, data freshness, filters, completion rules, or identity matching.
**Action:**
- Select representative matching and mismatching learners and compare transcript-level evidence with report output.
- Check report refresh time, date/time zone logic, item/curriculum mapping, status definitions, effective dates, and population filters.
- Trace the reporting dataset and transformations back to the authoritative Learning record.
- Correct the logic or refresh process only after reproducing the discrepancy; reconcile the complete population and obtain compliance-owner sign-off.
**Result:** The report and source records agree under documented business rules, and a reconciliation control detects future divergence.
**SAP SuccessFactors example:** Compare the Learning transcript status and completion date with the fields and filters used in the compliance report or People Analytics dataset.
**SME probe:** If the transcript is correct but the dashboard is stale, how would you communicate the risk and define the temporary reporting control?

## 13. A content update causes completion failures

**Question:** After updating a course, new learners cannot complete it, while learners who started earlier may still succeed. How do you investigate?

**Situation:** Completion failures begin after a content version change.
**Task:** Determine whether the new package, tracking rules, or in-progress attempts created the regression.
**Action:**
- Establish the deployment time and compare affected attempts by content version and launch date.
- Review package manifest, completion criteria, identifiers, assessment logic, and suspend/resume behavior.
- Test fresh launches and in-progress attempts separately using controlled accounts.
- If the release is implicated, use the approved rollback or correction path; preserve valid historical evidence and retest new and continuing attempts.
**Result:** The regression is tied to a specific change, learners have a supported recovery path, and content-version compatibility becomes a release gate.
**SAP SuccessFactors example:** Compare SCORM package versions and completion-status behavior for a new attempt versus an attempt launched before the package update.
**SME probe:** How would you protect in-progress learner state when rolling back a content package?

## 14. Users are unexpectedly locked out of Learning

**Question:** A group of employees can no longer access Learning after an identity or access change. How do you locate the root cause?

**Situation:** Access failures start after a change to authentication, user status, or role provisioning.
**Task:** Restore authorized access while preserving least privilege and security controls.
**Action:**
- Determine the affected cohort, start time, authentication error, and whether the issue affects login, application launch, or a specific Learning function.
- Compare identity-provider logs, account status, provisioning changes, role/permission assignments, and successful control accounts.
- Correlate the onset with the recent change and test the suspected cause in a controlled way.
- Restore the minimum required access or roll back the faulty change through change control; validate access and authorization separately.
**Result:** Authorized users regain access, the access-control boundary remains intact, and identity-change validation is strengthened.
**SAP SuccessFactors example:** Correlate Learning access symptoms with Identity Authentication/SSO and user-provisioning evidence rather than granting broad administrator permissions.
**SME probe:** Why must successful authentication and correct application authorization be tested as separate conditions?

## 15. Search cannot find an active course

**Question:** An active Learning item is visible through a direct link but does not appear in learner search. What do you check?

**Situation:** The item exists and is reachable directly, but intended learners cannot find it through normal discovery.
**Task:** Identify whether indexing, catalog assignment, availability, language, security, or search filters explain the difference.
**Action:**
- Reproduce using a learner account and capture the exact search terms, filters, locale, and expected catalog.
- Check item status, catalog association, audience visibility, effective dates, language/title metadata, and learner permissions.
- Compare direct-link behavior with search results and test a known visible item to isolate the issue.
- Correct metadata, catalog or visibility configuration based on evidence and validate discovery for each intended audience.
**Result:** Learners can find the item through the supported discovery path, and catalog publishing checks cover search visibility.
**SAP SuccessFactors example:** Validate the item's catalog assignment and learner visibility before assuming the search service is defective.
**SME probe:** What evidence would distinguish a search-index delay from an item visibility or catalog configuration problem?

## 16. Performance degrades during a large learning campaign

**Question:** Learners report slow page loads and course launches during a mandatory campaign. How do you identify the bottleneck?

**Situation:** Response times worsen when many users access Learning around the same time.
**Task:** Locate the bottleneck and reduce learner impact without prematurely blaming the LMS.
**Action:**
- Establish a baseline and measure where latency occurs: login, Learning landing page, search, item launch, content host, or assessment.
- Correlate latency with user volume, geography, network, content size, browser, and external dependencies.
- Compare affected and unaffected paths and review platform/service health information available to the team.
- Apply a controlled mitigation, such as communication, staged access, or content optimization where evidence supports it; monitor before and after.
**Result:** The dominant bottleneck is identified, learner impact is mitigated, and future campaigns use a measured capacity and readiness plan.
**SAP SuccessFactors example:** Separate slow LMS navigation from a slow externally hosted SCORM package before proposing a platform-wide change.
**SME probe:** Which metrics and comparisons would you use to establish that the mitigation improved the learner experience rather than merely shifting the bottleneck?

## 17. An administrator's configuration change creates unexpected behavior

**Question:** A Learning configuration change causes assignments or visibility to behave differently. How do you investigate without losing evidence?

**Situation:** An issue begins shortly after an administrator changes a rule or item setting.
**Task:** Confirm causality and restore the intended behavior safely.
**Action:**
- Preserve the change details, timestamp, affected records, expected behavior, and observed behavior.
- Compare the current configuration with the last known good state and review the change request or audit evidence available.
- Reproduce the behavior in a controlled test where possible; identify direct and downstream effects.
- Roll back or correct the specific setting through change control, validate impacted populations, and document preventive review or approval controls.
**Result:** The configuration defect is corrected with traceable evidence and future changes require impact assessment and regression checks.
**SAP SuccessFactors example:** Compare the prior and current assignment profile or item availability settings and validate the result with a small, representative learner cohort.
**SME probe:** How would you handle the case where the change is correlated with the incident but there is not yet enough evidence to prove causation?

## 18. A vendor says the LMS is at fault, while the LMS team blames the content

**Question:** Two support teams disagree about ownership of a failed learning launch. How do you move from opinion to evidence?

**Situation:** The content provider and platform team each believe the other component is responsible.
**Task:** Coordinate a cross-boundary diagnosis and establish a reproducible fault location.
**Action:**
- Define the end-to-end transaction and create a shared timeline with learner, item, content version, request, response, and correlation details.
- Agree on a controlled reproduction and collect evidence at each boundary: LMS launch, redirect/authentication, content host, and tracking callback.
- Compare a known-good package or route where appropriate and change one variable at a time.
- Record confirmed facts separately from hypotheses, assign an owner to the failing boundary, and agree on retest evidence before closure.
**Result:** Ownership is based on reproducible evidence, the incident progresses without circular escalation, and a shared troubleshooting runbook is produced.
**SAP SuccessFactors example:** Trace the launch request and return/tracking behavior across SuccessFactors Learning and the external content provider rather than relying on either team's initial assumption.
**SME probe:** What do you do if logs from one side are unavailable and the incident is affecting a critical compliance deadline?

## 19. A recurring incident returns after a temporary fix

**Question:** The same Learning incident has been closed several times, but it keeps recurring. How do you move from workaround to problem management?

**Situation:** Support repeatedly restores service, yet the same symptom returns.
**Task:** Establish the systemic cause and implement a sustainable corrective action.
**Action:**
- Review incident history for common timing, users, content versions, integrations, and prior workarounds.
- Form explicit hypotheses and rank them by evidence, impact, and ease of validation.
- Test the leading hypothesis against both affected and unaffected cases; use causal analysis rather than stopping at the first contributing factor.
- Create a problem record with root cause, corrective and preventive actions, owner, due date, risk, and verification criteria.
- Monitor recurrence over an agreed observation window and confirm that the control addresses the causal mechanism.
**Result:** The permanent fix is verified against recurrence criteria, the workaround is retired when safe, and knowledge is shared with the service team.
**SAP SuccessFactors example:** Investigate repeated completion failures by comparing content versions, attempt states, and interface events instead of manually correcting every transcript.
**SME probe:** How do you demonstrate that a proposed root cause is causal rather than merely correlated with the recurring incident?

## 20. Prioritizing diagnosis during a major Learning incident

**Question:** A production issue affects mandatory training close to a regulatory deadline. Evidence is incomplete and leadership demands an immediate fix. How do you respond?

**Situation:** A high-impact incident threatens compliance completion, but the cause is not yet confirmed.
**Task:** Balance speed, learner impact, evidence quality, and change risk while communicating clearly to leadership.
**Action:**
- Establish incident command, impact scope, affected populations, business deadline, and a clear communication cadence.
- Separate immediate containment from permanent correction; identify reversible mitigations with low blast radius.
- Maintain a hypothesis/evidence log, assign parallel diagnostic workstreams, and define explicit decision gates for risky changes.
- Explain confirmed facts, unknowns, options, risks, and recommendation; require appropriate approval for production changes and validate outcomes after each action.
- Reconcile affected learner records and compliance reporting after restoration, then conduct a blameless review with owners and dates for preventive actions.
**Result:** The response reduces learner and compliance impact while keeping decisions auditable; the permanent fix is based on verified evidence rather than pressure alone.
**SAP SuccessFactors example:** For a mandatory Learning completion incident, communicate the verified transcript population, affected scope, temporary controls, and recovery plan before making bulk data changes.
**SME probe:** How would you distinguish a recommendation made under incomplete evidence from a formally documented architectural or operational risk warning?

---

## Candidate self-review: diagnostic quality bar

Before finalizing each answer, verify that it:
- Separates the observed symptom from the suspected cause.
- Names the evidence used and explains how it discriminates between hypotheses.
- Identifies the correct boundary: learner/client, content, LMS configuration, identity, integration, data, reporting, or operations.
- Changes one variable at a time where feasible and uses a controlled reproduction.
- Includes safe containment, data integrity, auditability, and regression testing.
- Defines an observable result and a control to prevent recurrence.
- Avoids invented metrics and distinguishes personal experience from an illustrative scenario.

**Theme 13 completion criterion:** The candidate can explain not only what they would check, but why each check narrows the fault domain, what evidence would confirm or reject a hypothesis, and how they would prevent recurrence.

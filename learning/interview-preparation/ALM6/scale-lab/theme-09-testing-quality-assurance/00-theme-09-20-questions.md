# ALM6 — Theme 09: Testing & Quality Assurance
## Applied SAP SuccessFactors Learning — Interview Preparation

**Theme:** Testing & Quality Assurance  
**Scenario count:** 20  
**Response pattern:** Situation → Task → Action → Result (STAR)  
**Quality signal:** Connect every test to a business requirement, risk, expected outcome, evidence, and release decision. Validate product behavior in the customer's configured tenant and release.

---

## Q01 — Build a risk-based test strategy
**Question:** A global organization is rolling out mandatory learning to 20 countries. How would you design the test strategy?

**Situation:** The rollout spans different learner populations, languages, compliance rules, and integration dependencies.  
**Task:** Ensure the solution is fit for purpose without treating every test case as equally risky.  
**Action:** I would map business requirements to risks and controls, define scope across configuration, integration, security, content, reporting, localization, and user experience, and prioritize high-impact journeys such as assignment, completion, renewal, and audit evidence. I would set entry/exit criteria, test data needs, owners, defect severity, and release gates.  
**Result:** The program has a traceable, risk-based test approach that focuses effort on critical learning outcomes.  
**SAP SuccessFactors example:** A test strategy for Learning assignments, completion evidence, and compliance reporting across representative countries.  
**SME probe:** Which risks would block go-live even if most test cases pass?

## Q02 — Trace requirements to test evidence
**Question:** An auditor asks how you know every mandatory learning requirement was tested. What would you show?

**Situation:** Requirements were documented, but the test pack did not clearly demonstrate coverage.  
**Task:** Prove traceability from approved requirement through test execution and release decision.  
**Action:** I would maintain a requirement-to-test traceability matrix linking requirement IDs to scenarios, expected results, execution evidence, defects, retests, and sign-off. I would identify uncovered or changed requirements and agree remediation before release.  
**Result:** Stakeholders can see what was tested, what failed, what was accepted, and why the release was approved.  
**SAP SuccessFactors example:** Traceability from a compliance assignment rule to positive/negative tests and the resulting learner and report evidence.  
**SME probe:** How do you demonstrate coverage when one test validates multiple requirements?

## Q03 — Validate assignment profile behavior
**Question:** Some eligible employees receive training, while others with the same role do not. How would you test the assignment logic?

**Situation:** Assignment outcomes differed across apparently similar users.  
**Task:** Verify the rule, source attributes, and edge cases.  
**Action:** I would define representative personas and a decision table covering required attributes, missing values, multiple criteria, effective dates, transfers, and excluded populations. I would compare source data with expected assignments, execute positive and negative tests, and record the evidence for each rule branch.  
**Result:** Assignment behavior becomes predictable and gaps can be traced to data, configuration, or integration.  
**SAP SuccessFactors example:** A decision-table test for assignment profiles driven by approved worker attributes.  
**SME probe:** Why is testing only one eligible user insufficient?

## Q04 — Test the end-to-end learning lifecycle
**Question:** Individual components pass testing, but a learner cannot complete the full journey. What would you do?

**Situation:** Component-level success did not prove that the complete learner journey worked.  
**Task:** Validate the lifecycle from provisioning through assignment, launch, completion, and reporting.  
**Action:** I would map the journey and dependencies, create an end-to-end scenario using a realistic learner, verify each transition and status, and capture evidence at source and target boundaries. I would include failure paths such as inaccessible content, failed assessment, and delayed data updates.  
**Result:** The team can identify the failing boundary and prove the full business outcome rather than relying on isolated component tests.  
**SAP SuccessFactors example:** An end-to-end new-hire scenario from worker provisioning to a visible, reportable course completion.  
**SME probe:** Which checkpoints would you use to isolate a failure quickly?

## Q05 — Test online content completion tracking
**Question:** A learner finishes a SCORM course, but Learning still shows it as in progress. How would you test the defect?

**Situation:** Course launch worked, but completion status was inconsistent.  
**Task:** Determine whether the defect comes from the package, browser, tracking protocol, or learning-item settings.  
**Action:** I would reproduce with a controlled learner, inspect package tracking and completion signals, verify item completion criteria, test the supported browser matrix, and compare package behavior in a known-good scenario. I would preserve logs and package versions and retest after the appropriate correction.  
**Result:** The team can identify the responsible component and validate that completion is reliably recorded.  
**SAP SuccessFactors example:** Regression tests for launch, suspend/resume, completion, and success signals in a SCORM-based course.  
**SME probe:** What evidence separates a package defect from a configuration defect?

## Q06 — Test assessment thresholds and retakes
**Question:** Learners who score below the passing threshold are incorrectly marked complete. What test cases would you run?

**Situation:** Assessment status did not consistently match the approved passing policy.  
**Task:** Verify boundary values and the relationship between assessment success and course completion.  
**Action:** I would test scores below, at, and above the threshold; maximum attempts; retakes; interrupted sessions; and status synchronization. I would validate expected outcomes against the policy and check whether reporting uses completion, success, or another defined status.  
**Result:** Assessment outcomes become consistent with the approved rule and are supported by repeatable evidence.  
**SAP SuccessFactors example:** Boundary-value tests around the configured passing score and attempt policy.  
**SME probe:** Why should the exact-threshold case be tested separately from a clearly passing score?

## Q07 — Validate security and role-based access
**Question:** A regional administrator can view learners outside their permitted population. How would you test the security model?

**Situation:** An access-control gap could expose personal learning records across regions.  
**Task:** Confirm least-privilege behavior for administrative and learner roles.  
**Action:** I would build a role-permission matrix and test allowed and denied actions across regions, user populations, reports, direct links, and administrative functions. I would use controlled accounts, capture evidence without unnecessary personal data, and verify the fix with regression tests.  
**Result:** Access boundaries are demonstrated rather than assumed, and the exposure is addressed before release.  
**SAP SuccessFactors example:** Negative tests proving a regional administrator cannot access another region's restricted learner records.  
**SME probe:** Why must direct-link and report access be tested in addition to menu visibility?

## Q08 — Test HR-to-Learning integration
**Question:** An integration job reports success, but some new hires are missing from Learning. How would you test the flow?

**Situation:** A technically successful job did not result in complete learner provisioning.  
**Task:** Verify data completeness and the business result across source, interface, and target.  
**Action:** I would create controlled source records covering valid, missing, and boundary attributes; verify mapping and filtering; inspect rejected records and logs; and reconcile expected versus actual target users. I would also test retry, duplicate handling, and assignment outcomes after provisioning.  
**Result:** The test proves whether the interface produces the intended learners, not merely whether a job completes.  
**SAP SuccessFactors example:** Integration tests for hire, rehire, transfer, and invalid worker-data scenarios.  
**SME probe:** Which reconciliation evidence would you require before declaring the interface healthy?

## Q09 — Validate migration of historical learning records
**Question:** After legacy LMS migration, completion totals differ from the approved source extract. How would you handle this?

**Situation:** The migration output did not reconcile with the agreed source population.  
**Task:** Establish whether differences are valid exclusions, transformation errors, or lost records.  
**Action:** I would freeze the baseline extract and mapping rules, compare counts by record type and population, sample matched and unmatched records, review rejected rows and duplicate logic, and trace each variance to a documented disposition. I would rerun only after correcting the cause and repeat reconciliation.  
**Result:** The team can demonstrate completeness and explain all material migration differences.  
**SAP SuccessFactors example:** Reconciliation of legacy completions, dates, learner identifiers, and item mappings after migration.  
**SME probe:** How would you distinguish an approved exclusion from a missing record?

## Q10 — Test multilingual and localized experiences
**Question:** A course passes testing in English but fails for learners in another language. How would you structure localization QA?

**Situation:** Language-specific content and metadata were not consistently validated.  
**Task:** Verify each supported locale without changing the governed learning outcome.  
**Action:** I would define locale coverage, review translated titles and instructions, test character rendering and content launch, validate assessment language and tracking, and involve regional reviewers for meaning and regulatory context. I would retest shared configuration and preserve a record of locale-specific exceptions.  
**Result:** The learner experience is validated across approved locales while completion criteria remain consistent where policy requires it.  
**SAP SuccessFactors example:** Locale-based tests for catalog metadata, course content, assessment, and completion tracking.  
**SME probe:** Which tests require a native-language reviewer rather than a technical tester alone?

## Q11 — Conduct regression testing after configuration changes
**Question:** A minor item configuration change unexpectedly breaks a previously working learning path. How would you prevent recurrence?

**Situation:** A configuration change affected behavior beyond the immediate requirement.  
**Task:** Detect unintended impacts before production release.  
**Action:** I would identify impacted objects and dependencies, maintain a regression suite for critical journeys, test prerequisite, assignment, launch, completion, reporting, and access behavior, and compare results with a known baseline. I would require peer review and update regression coverage when the root cause reveals a missing test.  
**Result:** Changes are released with evidence that critical existing behavior remains intact.  
**SAP SuccessFactors example:** Regression testing after changing a learning item, curriculum, assignment profile, or completion criterion.  
**SME probe:** How do you select regression tests when the configuration dependency graph is incomplete?

## Q12 — Manage defects by severity and business risk
**Question:** Go-live is near, and the team has open defects. How would you advise the release authority?

**Situation:** The defect list included issues of different impact, likelihood, and workaround quality.  
**Task:** Make a transparent, risk-based release recommendation.  
**Action:** I would classify defects by business impact, compliance and security exposure, affected population, reproducibility, workaround, and recovery risk. I would distinguish blockers from accepted lower-risk issues, assign owners and target dates, document residual risk, and present evidence to the authorized decision-maker rather than silently downgrading severity.  
**Result:** The release decision is informed, accountable, and traceable.  
**SAP SuccessFactors example:** A defect affecting mandatory training completion evidence should be evaluated differently from a cosmetic catalog issue.  
**SME probe:** What would make you recommend no-go even under executive pressure?

## Q13 — Validate reports and audit evidence
**Question:** A compliance report shows 98% completion, but the underlying learner records suggest a different result. How would you test the report?

**Situation:** Leaders were relying on a metric that did not reconcile with the operational records.  
**Task:** Verify definitions, filters, access, refresh timing, and calculation logic.  
**Action:** I would define the denominator and numerator, check population filters and date logic, test time-zone and status handling, validate refresh behavior, and reconcile a known sample back to individual records. I would test role-based report visibility and document any limitations in the metric.  
**Result:** The report becomes reproducible and its meaning is clear to decision-makers and auditors.  
**SAP SuccessFactors example:** Reconciliation of assigned, completed, overdue, and expired learning counts against controlled learner records.  
**SME probe:** How could a correct query still produce a misleading completion percentage?

## Q14 — Test performance and volume
**Question:** Learning pages become slow during a company-wide compliance campaign. How would you investigate performance?

**Situation:** A peak in learner activity affected access to training and threatened deadline completion.  
**Task:** Establish reproducible performance evidence and identify the responsible layer.  
**Action:** I would baseline response times and error rates, define realistic concurrent-user and workload profiles, test critical journeys, correlate timing with content provider, network, browser, and platform observations, and check whether content or integration patterns amplify load. I would coordinate with the relevant service owners and retest under comparable conditions.  
**Result:** Performance decisions are based on measured bottlenecks rather than assumptions, and remediation can be validated.  
**SAP SuccessFactors example:** Load and response-time tests for catalog search, course launch, and completion during a peak assignment period.  
**SME probe:** Which performance measures would you use beyond average response time?

## Q15 — Test accessibility and usability
**Question:** Some learners using assistive technology cannot complete mandatory online training. How would you address it in QA?

**Situation:** A required course was not usable by part of the intended learner population.  
**Task:** Validate accessibility and task completion, not merely visual appearance.  
**Action:** I would define applicable accessibility criteria, test keyboard navigation, focus order, screen-reader labels, captions, contrast, zoom, and assessment controls, and involve users or specialists where appropriate. I would distinguish platform-level issues from content-package issues, log reproducible defects, and retest with representative assistive technologies.  
**Result:** Accessibility defects are identified and addressed with evidence of improved task completion.  
**SAP SuccessFactors example:** Accessibility testing of the learner journey and embedded course content.  
**SME probe:** Why is checking the learning platform's main page insufficient to establish course accessibility?

## Q16 — Test renewal and expiry logic
**Question:** Learners with current credentials are incorrectly marked overdue for retraining. What would you test?

**Situation:** Renewal rules and existing evidence were producing incorrect compliance status.  
**Task:** Verify date logic, equivalency, expiry, and assignment behavior.  
**Action:** I would build boundary cases for current, near-expiry, expired, missing-date, and externally evidenced credentials; validate date calculations and time-zone assumptions; and test how completion and equivalency affect renewal assignment. I would reconcile outcomes with the policy owner's approved examples.  
**Result:** Renewal decisions match the defined policy and false overdue alerts are reduced.  
**SAP SuccessFactors example:** Boundary tests for annual retraining and approved external credential evidence.  
**SME probe:** How would you test a credential that expires on the same date the renewal rule runs?

## Q17 — Validate negative and exception paths
**Question:** The happy path passes, but invalid worker data and failed content launches have never been tested. What would you add?

**Situation:** The test suite proved only ideal behavior and left operational failure modes unknown.  
**Task:** Demonstrate that invalid conditions fail safely and can be recovered.  
**Action:** I would identify likely failures and controls, then test missing mandatory attributes, invalid identifiers, denied access, unavailable content, failed assessments, duplicate messages, and retry behavior. I would verify error messages, logs, ownership, recovery steps, and absence of misleading completion records.  
**Result:** The solution has defined behavior for failures, not just successful execution.  
**SAP SuccessFactors example:** Negative tests for incomplete employee data, inaccessible content, and failed completion tracking.  
**SME probe:** Which negative test would you prioritize if the test window were sharply reduced?

## Q18 — Run user acceptance testing with business owners
**Question:** Business users approve the screens but later reject the solution because the process does not fit their work. How would you improve UAT?

**Situation:** UAT focused on appearance and navigation instead of real operational tasks and outcomes.  
**Task:** Ensure business owners validate that the solution meets the intended requirements.  
**Action:** I would build role-based scenarios from real work, provide representative data, define acceptance criteria before execution, train participants on evidence capture, and facilitate defect triage. I would record business sign-off against agreed outcomes and distinguish defects from new scope requests.  
**Result:** Acceptance reflects operational readiness and business fit, not just superficial approval.  
**SAP SuccessFactors example:** HR, compliance, managers, and learners execute their actual learning-related tasks during UAT.  
**SME probe:** How would you handle a UAT request that contradicts an approved compliance policy?

## Q19 — Validate release and cutover readiness
**Question:** All critical tests pass, but integration monitoring and support ownership are not ready. Would you approve release?

**Situation:** Functional readiness was ahead of operational readiness.  
**Task:** Assess whether the service can be launched and supported safely.  
**Action:** I would use explicit entry and exit criteria covering test completion, critical defects, data reconciliation, security approval, support runbooks, monitoring, escalation contacts, rollback or recovery, and business sign-off. I would document any residual risk and require the authorized owner to make a traceable decision.  
**Result:** Release readiness includes the ability to operate and recover the solution, not only functional correctness.  
**SAP SuccessFactors example:** A go-live checklist for Learning configuration, integrations, learner support, and compliance reporting.  
**SME probe:** Which operational gap would be an absolute release blocker for a compliance-critical learning service?

## Q20 — Build a quality assurance operating model
**Question:** You are asked to establish QA for a multi-country SuccessFactors Learning transformation. What would your model include?

**Situation:** Testing was fragmented across implementation teams, content owners, integration teams, and regional business stakeholders.  
**Task:** Create repeatable quality controls from requirement definition through hypercare.  
**Action:** I would define risk-based test governance, roles and environments, traceability, test data controls, automation candidates, defect workflow, evidence standards, integration reconciliation, security and accessibility testing, release gates, and post-go-live monitoring. I would track meaningful measures such as critical-path coverage, defect leakage, unresolved high-risk defects, and business acceptance—not just raw test counts.  
**Result:** QA becomes a continuous assurance capability that protects learning outcomes, compliance evidence, and learner experience.  
**SAP SuccessFactors example:** A Learning QA model spanning assignment, content, assessment, integrations, reporting, migration, and operational readiness.  
**SME probe:** Which quality metric would you use to reveal a false sense of readiness?

---

## Theme 09 — Candidate self-review

Before considering this theme complete, ensure you can:
- Tie every test to a requirement, risk, expected outcome, and evidence.
- Explain positive, negative, boundary, integration, regression, security, accessibility, and performance testing.
- Reconcile system and report results instead of trusting status messages alone.
- State clear defect severity, entry/exit criteria, and release recommendations.
- Distinguish verified project outcomes from illustrative examples.

**Interview answer quality bar:** Show what could fail, how you would detect it, the evidence you would collect, the risk decision you would make, and how you would prove the fix.

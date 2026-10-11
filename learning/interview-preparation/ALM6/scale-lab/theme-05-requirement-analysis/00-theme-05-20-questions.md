# ALM6 — Theme 05: Requirement Analysis
## Applied SAP SuccessFactors Learning | 20 Scenario-Based Interview Questions

**Theme:** Requirement Analysis  
**Academy:** ALM6 — Applied SAP SuccessFactors Learning  
**Scenario range:** ALM6-T05-Q01–Q20  
**Response format:** Situation → Task → Action → Result → SME Probe

> Interview principle: clarify the business outcome before translating a request into a learning-platform feature. Validate stakeholders, learner populations, policy constraints, data, integrations, acceptance criteria, and measurable outcomes before recommending a solution.

---

## Q01. Stakeholders ask for a new learning feature without a clear business problem

**Question:** The HR Director requests a new learning portal feature, but cannot explain what business problem it should solve. How would you proceed?

**Situation:** A global organization requests a feature because employees say the current learning experience is difficult to navigate.  
**Task:** Establish the underlying need before committing to a product or configuration change.  
**Action:** I would interview the sponsor, learners, learning administrators, and business managers; observe the current journey; review support tickets and usage data; and define the target outcome. I would document the problem statement, affected personas, current-state evidence, constraints, and measurable success criteria. Only then would I assess whether configuration, content organization, communication, or a product change is appropriate.  
**Result:** The team gets a validated problem statement and avoids building a feature that does not address the root cause. Success could be measured through task-completion rate, search success, reduced support contacts, and learner satisfaction.  
**SAP SuccessFactors Learning example:** Analyze the learner experience and catalog navigation before changing the learning home page or catalog structure.  
**SME Probe:** What evidence would convince you that the problem is navigation rather than content relevance or assignment policy?

## Q02. Conflicting requirements from Compliance and Learning & Development

**Question:** Compliance wants mandatory training completed quickly, while L&D wants learners to have more flexibility. How do you resolve the conflict?

**Situation:** Compliance requires completion by a fixed deadline; L&D wants flexible learning paths and self-directed development.  
**Task:** Reconcile mandatory controls with learner experience without weakening policy.  
**Action:** I would separate non-negotiable regulatory requirements from experience preferences, confirm deadlines and evidence requirements with Compliance, and map the learner groups and exceptions. I would propose a governed mandatory assignment process alongside optional development pathways, with clear ownership, escalation, and reporting. I would document the trade-off and obtain sign-off from accountable stakeholders.  
**Result:** Mandatory learning remains auditable while development learning can remain flexible. Acceptance criteria would include correct assignment, completion evidence, exception handling, and a usable learner journey.  
**SAP SuccessFactors Learning example:** Distinguish required assignments and due dates from optional catalog offerings and development recommendations.  
**SME Probe:** What would you do if a senior business leader asks for an exception to a legally required course?

## Q03. Requirements are vague and cannot be tested

**Question:** A stakeholder says, “Make learning easier and improve adoption.” How would you convert this into testable requirements?

**Situation:** The request is aspirational and does not define observable behavior or success.  
**Task:** Translate it into specific, verifiable requirements.  
**Action:** I would ask which learner group, task, current pain point, and business outcome matter most. I would baseline current performance and rewrite the request as measurable acceptance criteria—for example, a defined learner persona can locate and launch an assigned course within an agreed time, and the assignment appears correctly in the learner's view. I would confirm the target, measurement method, test data, and approver.  
**Result:** The team can design, test, and measure the change rather than relying on subjective approval.  
**SAP SuccessFactors Learning example:** Validate catalog search, course launch, assignment visibility, and completion recording against agreed learner scenarios.  
**SME Probe:** How would you set a realistic target when no reliable baseline exists?

## Q04. Requirements from global and local business units differ

**Question:** Global HR wants one learning process, but local business units have different legal and operational needs. What is your approach?

**Situation:** Multiple regions request different assignment rules, languages, and reporting.  
**Task:** Identify a sustainable global standard while preserving justified local variation.  
**Action:** I would classify requirements into global mandatory standards, legally required localization, and optional local preferences. I would compare process, language, content, role, and reporting needs; validate country-specific obligations with local subject-matter experts; and maintain a decision log. I would design the common model first and allow variation only where evidence or policy requires it.  
**Result:** The organization avoids unnecessary fragmentation while supporting legitimate regional needs.  
**SAP SuccessFactors Learning example:** Define common learning governance and reporting, then validate localized content, curricula, and assignment rules for each region.  
**SME Probe:** How would you challenge a local requirement that appears to be preference rather than legal necessity?

## Q05. Identify personas and learner groups

**Question:** How do you discover the learner personas and populations that a new learning solution must support?

**Situation:** The organization includes employees, managers, contractors, field workers, and external learners.  
**Task:** Ensure requirements reflect real differences in access, responsibilities, and learning needs.  
**Action:** I would map each population by role, location, employment relationship, device access, language, learning purpose, and access constraints. I would validate persona journeys with representative users and identify how each group is sourced, authenticated, assigned learning, and reported. I would avoid treating job title alone as a sufficient segmentation rule.  
**Result:** Requirements cover the actual population and reduce the risk of inaccessible or incorrectly assigned learning.  
**SAP SuccessFactors Learning example:** Validate user groups, assignment targeting, access roles, and learner experience for office staff, shift workers, and contractors.  
**SME Probe:** What would you do when contractor identity or employment data is incomplete?

## Q06. Determine the minimum viable scope

**Question:** A sponsor wants a large learning transformation delivered in one release. How would you define an achievable first release?

**Situation:** The backlog contains catalog redesign, new integrations, analytics, mobile experience improvements, and automated assignments.  
**Task:** Prioritize scope that delivers meaningful value without creating avoidable delivery risk.  
**Action:** I would rank requirements by business value, compliance criticality, learner impact, dependency, effort, and risk. I would identify the minimum capabilities needed for safe operation, separate later enhancements, and validate sequencing with stakeholders. I would define release-level acceptance criteria and explicit exclusions so that scope decisions remain transparent.  
**Result:** The first release delivers a coherent outcome with controlled risk, and later releases have a justified roadmap.  
**SAP SuccessFactors Learning example:** Prioritize reliable user provisioning, required assignments, completion records, and essential reports before advanced experience enhancements.  
**SME Probe:** Which requirements can never be deferred, even when the project is behind schedule?

## Q07. Capture requirements for compliance training

**Question:** A regulated business needs reliable evidence that mandatory learning was assigned and completed. What requirements would you capture?

**Situation:** Audit findings reveal gaps between policy-defined training and the evidence available to demonstrate completion.  
**Task:** Define a traceable compliance-learning process.  
**Action:** I would confirm the governing policy, population, assignment trigger, deadline, retraining frequency, acceptable completion evidence, exceptions, escalation, retention, and reporting audience. I would map each control to a system behavior and test case. Compliance and audit owners would approve the evidence model and exception process.  
**Result:** Assignment, completion, exception, and reporting behavior become testable and auditable.  
**SAP SuccessFactors Learning example:** Validate required learning assignments, due dates, completion status, history, and compliance reports against the approved policy.  
**SME Probe:** How would you handle a course whose content changes but whose previous completion must remain historically valid?

## Q08. Requirements for assignment automation

**Question:** The business wants employees to be automatically assigned learning based on job, location, or organizational change. How do you analyze this request?

**Situation:** Administrators manually assign courses and sometimes miss new hires or transferred employees.  
**Task:** Define reliable, explainable assignment rules and exception handling.  
**Action:** I would identify authoritative data sources, triggering events, population criteria, rule precedence, effective dates, exclusions, reassignment behavior, and exception ownership. I would create decision tables for representative cases, including transfers, leave, termination, and conflicting attributes. I would confirm how rule changes are governed and tested.  
**Result:** Automated assignments become consistent and testable, with fewer missed learners and fewer inappropriate assignments.  
**SAP SuccessFactors Learning example:** Evaluate assignment profiles and the user attributes or organizational data used to target learning, then test changes in a controlled environment.  
**SME Probe:** What safeguards would you use to prevent a faulty rule from assigning thousands of unnecessary courses?

## Q09. Define learning completion and equivalency requirements

**Question:** Stakeholders disagree about what counts as completing a learning requirement. How would you resolve it?

**Situation:** Some learners complete equivalent external training, while others complete an internal course or instructor-led session.  
**Task:** Establish clear completion and equivalency rules.  
**Action:** I would identify the policy owner and define acceptable evidence, approval authority, equivalency criteria, validity period, expiration, and audit trail. I would distinguish course launch from completion, and completion from competency attainment. I would document edge cases and test each accepted pathway.  
**Result:** Completion status is consistent, defensible, and aligned with the business policy.  
**SAP SuccessFactors Learning example:** Validate completion recording and any approved equivalency or external-completion process before granting credit.  
**SME Probe:** How do you prevent equivalency from becoming an uncontrolled shortcut around mandatory training?

## Q10. Elicit requirements for instructor-led training

**Question:** The business runs classroom and virtual sessions and wants them represented in the learning platform. What do you need to discover?

**Situation:** Training coordinators use spreadsheets to manage sessions, attendance, cancellations, and completion.  
**Task:** Define an end-to-end process that reflects the operating model.  
**Action:** I would map session creation, offering dates, instructors, facilities or virtual links, capacity, enrollment, waitlists, attendance, cancellation, no-show handling, completion, and notifications. I would identify who owns each action and which cases require approval or manual intervention. I would include learner and administrator acceptance tests.  
**Result:** Requirements cover the whole session lifecycle, not just course listing, and reduce spreadsheet dependency.  
**SAP SuccessFactors Learning example:** Validate instructor-led offerings, enrollment rules, attendance capture, and completion recording in the configured learning process.  
**SME Probe:** How would you handle a learner who attended only part of a session?

## Q11. Analyze integration requirements with HR systems

**Question:** Learning assignments depend on employee and organizational data from an HR system. How would you define the integration requirements?

**Situation:** New hires, transfers, and terminations are not consistently reflected in the learning platform.  
**Task:** Establish clear source-of-truth and synchronization requirements.  
**Action:** I would identify each data element, its authoritative source, update frequency, effective-date behavior, transformation rules, error handling, reconciliation, and support owner. I would define scenarios for hires, rehires, transfers, manager changes, and termination. I would confirm privacy and least-privilege requirements with the security team.  
**Result:** Integration requirements are traceable to business events and include operational controls, not just field mapping.  
**SAP SuccessFactors Learning example:** Assess the relevant Employee Central-to-Learning integration pattern and validate user-data synchronization and exception monitoring for the landscape.  
**SME Probe:** What would you do if HR data is updated successfully but the learning assignment is still missing?

## Q12. Define reporting and analytics requirements

**Question:** Executives ask for a “learning effectiveness dashboard.” How do you determine what it must show?

**Situation:** Existing reports show course completions but do not help leaders evaluate capability or business impact.  
**Task:** Define decision-oriented reporting requirements.  
**Action:** I would ask what decisions the dashboard must support and identify audiences, metrics, definitions, filters, refresh frequency, data lineage, access rules, and drill-down needs. I would distinguish activity measures—such as enrollments and completions—from outcome measures such as skill application or reduced operational error. I would validate metric definitions with data owners.  
**Result:** The dashboard supports specific decisions and avoids presenting completion volume as proof of learning effectiveness.  
**SAP SuccessFactors Learning example:** Define completion, overdue, participation, and learning-history measures, then identify which additional outcome data must come from outside Learning.  
**SME Probe:** How would you demonstrate business impact when the learning platform alone cannot establish causality?

## Q13. Capture accessibility and inclusion requirements

**Question:** Employees report that some learning content is difficult to use with assistive technology or on mobile devices. How would you address this?

**Situation:** The learner population has different accessibility needs, devices, bandwidth, and working environments.  
**Task:** Translate inclusion goals into explicit requirements and validation activities.  
**Action:** I would identify applicable accessibility standards and organizational policies, representative users and assistive technologies, content-format constraints, captions and transcripts, keyboard navigation, contrast, mobile usability, and low-bandwidth needs. I would involve accessibility specialists and learners in validation and define how defects are prioritized and remediated.  
**Result:** Accessibility becomes a testable design requirement rather than a late-stage checklist.  
**SAP SuccessFactors Learning example:** Test the complete learner journey—including catalog, launch, content interaction, and completion—across supported devices and assistive technologies.  
**SME Probe:** How would you prioritize an accessibility defect in mandatory training close to a compliance deadline?

## Q14. Handle security and privacy requirements

**Question:** A learning report contains individual completion and performance-related information. What security requirements would you capture?

**Situation:** Managers request broad access to learner records for workforce planning.  
**Task:** Enable legitimate decisions while protecting sensitive information.  
**Action:** I would classify the data, define legitimate purpose, roles, row-level or population boundaries where applicable, retention, export controls, audit logging, and approval for exceptional access. I would map each role to required actions and data visibility, then validate the design with privacy and security owners.  
**Result:** Access is tied to business need and can be tested and audited.  
**SAP SuccessFactors Learning example:** Validate administrator and manager permissions and the scope of reports and exports using representative user roles.  
**SME Probe:** What would you do if the business insists on a report that exposes more personal data than its stated purpose requires?

## Q15. Define non-functional requirements

**Question:** Functional requirements are documented, but the team has not defined performance, availability, usability, or support expectations. What do you do?

**Situation:** A global rollout is expected to serve many users across regions and time zones.  
**Task:** Establish non-functional requirements that can be validated.  
**Action:** I would identify expected user volumes, peak periods, supported devices and browsers, response-time expectations, availability and support windows, localization, accessibility, monitoring, recovery, and data protection constraints. I would assign measurable targets to each requirement and confirm which are controlled by the platform, integrations, network, or content provider.  
**Result:** The design and test strategy address operational quality as well as functional behavior.  
**SAP SuccessFactors Learning example:** Validate supported access paths, integration processing expectations, and service dependencies against documented platform and organizational commitments.  
**SME Probe:** How do you avoid promising a response time that depends on a third-party content provider?

## Q16. Resolve conflicting stakeholder priorities

**Question:** HR Operations, IT, Compliance, and business managers each label their requirements as critical. How do you prioritize them objectively?

**Situation:** Competing priorities threaten scope, timeline, and stakeholder confidence.  
**Task:** Establish a transparent prioritization and decision process.  
**Action:** I would agree on criteria such as legal necessity, risk reduction, learner impact, business value, dependency, and effort. I would score requirements with stakeholders, identify mandatory controls separately, record assumptions and disagreements, and escalate unresolved trade-offs to the named decision owner. I would keep the rationale visible in the requirements log.  
**Result:** Decisions are explainable, and delivery teams can focus on the highest-value, highest-risk requirements.  
**SAP SuccessFactors Learning example:** Prioritize assignment accuracy and compliance evidence over cosmetic changes when those controls are required for safe operation.  
**SME Probe:** What would you do if the executive sponsor rejects the agreed prioritization model?

## Q17. Manage changing requirements during delivery

**Question:** Midway through configuration, the business changes its learning policy. How would you control the impact?

**Situation:** A new policy affects assignment rules, due dates, reports, and testing already in progress.  
**Task:** Assess and govern the change without losing traceability.  
**Action:** I would record the change request, reason, effective date, policy authority, and urgency. I would conduct impact analysis across process, configuration, data, integration, security, test cases, training, reporting, and deployment. I would estimate cost and schedule impact, obtain approval, update traceability, and plan regression testing.  
**Result:** The change is implemented deliberately, with clear ownership and evidence that affected requirements were revalidated.  
**SAP SuccessFactors Learning example:** Assess how a revised retraining interval affects assignments, due dates, existing completions, reports, and regression tests.  
**SME Probe:** How would you handle a policy change that is legally effective before the next planned release?

## Q18. Build requirements traceability and acceptance criteria

**Question:** How do you ensure every approved requirement is designed, configured, and tested?

**Situation:** During UAT, stakeholders discover that several requirements have no corresponding test cases.  
**Task:** Establish end-to-end traceability and clear acceptance.  
**Action:** I would maintain unique requirement IDs linking the business objective to process design, configuration or integration decisions, test scenarios, test evidence, defects, and sign-off. I would define positive, negative, boundary, role-based, and exception cases. I would review coverage with business owners before UAT and control changes to approved requirements.  
**Result:** The team can demonstrate what was requested, how it was implemented, how it was tested, and who accepted it.  
**SAP SuccessFactors Learning example:** Trace a mandatory-assignment requirement through rule design, test learners, expected status, completion evidence, and the final report.  
**SME Probe:** What would you do if a requirement passes testing but the business owner says the outcome is still wrong?

## Q19. Facilitate a requirements workshop with difficult stakeholders

**Question:** A requirements workshop is dominated by senior voices, while administrators and learners remain silent. How would you ensure complete input?

**Situation:** Decisions are being made from assumptions, and the people who perform daily tasks are underrepresented.  
**Task:** Facilitate a balanced, evidence-based discovery process.  
**Action:** I would circulate a clear agenda and pre-read, establish decision roles, use journey maps and process walkthroughs, and invite each persona to describe real examples. I would use silent idea generation or structured round-robin input where appropriate, distinguish facts from assumptions, and record open questions, decisions, owners, and due dates. I would validate the outputs after the workshop.  
**Result:** Requirements reflect operational reality and stakeholders understand how decisions were reached.  
**SAP SuccessFactors Learning example:** Walk through how a learner finds an assigned course and how an administrator resolves an assignment exception, using real but appropriately protected examples.  
**SME Probe:** How do you prevent workshop consensus from being mistaken for proof that a requirement is correct?

## Q20. Turn requirements into an architecture recommendation

**Question:** After discovery, the sponsor asks you to recommend a learning solution. How do you demonstrate that the recommendation follows from the requirements?

**Situation:** The organization is considering configuration changes, new integrations, content-provider connections, and broader platform enhancements.  
**Task:** Produce a defensible recommendation that balances business value, architecture, risk, and maintainability.  
**Action:** I would consolidate validated requirements, distinguish mandatory from optional needs, document assumptions and constraints, and compare solution options against agreed criteria. I would assess process fit, data ownership, integration boundaries, identity and access, accessibility, reporting, supportability, cost, and delivery risk. I would present trade-offs, unresolved decisions, a phased roadmap, measurable acceptance criteria, and the rationale for the preferred option.  
**Result:** Leadership can make an informed decision, and delivery teams receive a traceable path from business need to solution design.  
**SAP SuccessFactors Learning example:** Compare configuration-first, integration, and process-change options for automated learning assignment before recommending a target design.  
**SME Probe:** Which evidence would make you revise your preferred architecture after approval?

---

## Theme 05 Completion Checklist

- [ ] Can distinguish a business problem from a requested feature.
- [ ] Can convert vague statements into measurable acceptance criteria.
- [ ] Can elicit global, local, compliance, accessibility, privacy, and operational requirements.
- [ ] Can prioritize scope and govern changes transparently.
- [ ] Can trace requirements through design, configuration, testing, and sign-off.
- [ ] Can justify an architecture recommendation with evidence and explicit trade-offs.

**Reflection prompt:** Think of a learning-system request you have received. What was the stated solution, what was the underlying problem, and what evidence would you gather before recommending a change?

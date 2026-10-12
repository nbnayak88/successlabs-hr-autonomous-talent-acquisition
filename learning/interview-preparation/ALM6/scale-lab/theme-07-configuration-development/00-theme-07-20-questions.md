# ALM6 — Theme 07: Configuration / Development
## Applied SAP SuccessFactors Learning — Interview Preparation

**Theme:** Configuration / Development  
**Scenario count:** 20  
**Response pattern:** Situation → Task → Action → Result (STAR)  
**Required interview signal:** Translate a learning requirement into a governed, testable configuration decision rather than assuming that every gap needs custom development.

> Product note: Validate configuration options and terminology against the customer's current SAP SuccessFactors Learning release and enabled features. Avoid promising unsupported standard functionality.

---

## Q01 — Configure a learning item for a regulated course
**Question:** A global manufacturer must assign safety training and retain auditable completion evidence. How would you configure the learning item?

**Situation:** Safety training was tracked through spreadsheets, creating inconsistent assignments and weak audit evidence.  
**Task:** Configure a governed learning item with clear completion criteria and traceability.  
**Action:** I would confirm the control objective, audience, item type, delivery method, completion rules, retraining interval, ownership, and evidence requirements. I would configure the item and its metadata in the learning environment, test assignment and completion end to end, and confirm that reporting exposes the required evidence.  
**Result:** The organization gains a repeatable assignment and completion process with evidence that can be retrieved for audits.  
**SAP SuccessFactors Learning example:** A safety course item with defined completion requirements and a controlled review cycle.  
**SME probe:** Which configuration settings establish completion, and how would you prove the audit report reflects the intended rule?

## Q02 — Decide between an item, curriculum, and program
**Question:** A business asks for a single learning path containing several courses, an optional module, and a final assessment. How do you model it?

**Situation:** The request was described as one course, but the learning journey had multiple components and sequencing needs.  
**Task:** Select the appropriate learning structures without making administration unnecessarily complex.  
**Action:** I would map mandatory and optional components, prerequisites, sequence, equivalencies, and completion logic. I would use individual items for discrete learning, a curriculum where a structured set of requirements fits, and a program where the required journey and sequencing capabilities align with the business need. I would validate the chosen structure against current product capabilities.  
**Result:** Learners see a coherent path and administrators can manage completion consistently.  
**SAP SuccessFactors Learning example:** A role-based onboarding journey organized around discrete learning items and an appropriate parent learning structure.  
**SME probe:** What specific requirement would make you choose a program rather than a curriculum?

## Q03 — Configure prerequisites and sequencing
**Question:** Learners are enrolling in advanced training before completing the required foundation course. What would you do?

**Situation:** Advanced training was being attempted before learners had the expected foundational knowledge.  
**Task:** Enforce the prerequisite while avoiding unnecessary blocks for valid exceptions.  
**Action:** I would verify the prerequisite policy, determine whether completion or another approved condition satisfies it, configure the relationship using supported standard capabilities, and test both eligible and ineligible learner paths. I would define an exception process with an accountable approver and audit trail.  
**Result:** Learning progression becomes more reliable, and approved exceptions remain controlled.  
**SAP SuccessFactors Learning example:** A foundation item required before an advanced technical item.  
**SME probe:** How would you test prerequisite behavior for a learner with an equivalent prior course?

## Q04 — Automate assignments by learner population
**Question:** A company wants different compliance learning assigned to plant workers, contractors, and corporate employees. How would you configure it?

**Situation:** Manual assignment lists became stale as people changed jobs or locations.  
**Task:** Establish rules that assign the right learning to the right population.  
**Action:** I would define population attributes and ownership with HR and compliance, confirm source-data quality, map the rules to supported assignment mechanisms such as assignment profiles, configure the criteria and learning objects, and test positive, negative, transfer, and termination cases. I would monitor exceptions and avoid broad criteria that over-assign users.  
**Result:** Assignments become more consistent and less dependent on manual administration.  
**SAP SuccessFactors Learning example:** Assignment profiles aligned to job, location, or other approved worker attributes available in the tenant.  
**SME probe:** How do you prevent an incorrect or missing HR attribute from assigning the wrong training?

## Q05 — Manage retraining and renewal rules
**Question:** A certification must be renewed every year, but some learners have a valid external credential. How would you design the configuration?

**Situation:** The organization needs recurring compliance while recognizing valid evidence from approved external sources.  
**Task:** Configure renewal and equivalency handling without losing historical traceability.  
**Action:** I would confirm the policy, renewal window, accepted evidence, equivalency rules, and exception authority. I would configure the supported retraining and assignment behavior, define how external evidence is reviewed and recorded, and test expired, current, and near-expiry cases. I would preserve prior completion history and validate reminders and reporting.  
**Result:** Renewal is managed consistently while legitimate external evidence can be handled through controlled governance.  
**SAP SuccessFactors Learning example:** A recurring compliance item with a defined renewal cycle and an approved process for external credentials.  
**SME probe:** How would you distinguish an equivalency decision from simply marking a course complete?

## Q06 — Configure instructor-led training
**Question:** Employees must register for classroom sessions with limited seats, instructors, and locations. What configuration decisions matter?

**Situation:** Training coordinators were managing capacity and attendance in separate spreadsheets.  
**Task:** Configure a maintainable instructor-led learning process.  
**Action:** I would confirm the item and delivery model, session scheduling requirements, capacity, waitlist policy if supported, instructor and location data, registration windows, cancellation rules, attendance capture, and completion criteria. I would test registration, capacity limits, cancellations, attendance, and post-session completion with representative users.  
**Result:** Session administration becomes more consistent and learner status is visible in the learning record.  
**SAP SuccessFactors Learning example:** An instructor-led item with scheduled offerings and controlled attendance capture.  
**SME probe:** What would you check if a learner registers successfully but does not receive the expected completion status?

## Q07 — Configure online content and completion tracking
**Question:** An e-learning package launches but completion is not recorded reliably. How would you investigate and configure it?

**Situation:** Learners reported finishing content, while administrators saw incomplete records.  
**Task:** Identify whether the problem lies in content packaging, tracking settings, browser behavior, or completion rules.  
**Action:** I would reproduce the issue with a test learner, verify the content package and supported tracking standard, inspect launch and completion behavior, check item-level completion criteria and relevant configuration, and test across supported browsers. I would involve the content provider when the package fails to send valid completion data.  
**Result:** Completion status reflects the content's actual tracking signals more reliably, and the root cause is documented.  
**SAP SuccessFactors Learning example:** A SCORM-based course whose completion and success signals must align with item settings and package behavior.  
**SME probe:** How would you separate a content-package defect from a learning-item configuration defect?

## Q08 — Configure assessment and passing criteria
**Question:** A course requires a passing score and limited retakes. How would you translate the policy into a testable setup?

**Situation:** Learners could finish the course without consistent evidence that they met the knowledge standard.  
**Task:** Implement assessment rules and ensure the completion outcome follows the approved policy.  
**Action:** I would confirm passing threshold, attempt limits, feedback policy, retake behavior, and the relationship between assessment success and course completion. I would configure only supported options, test boundary scores and exhausted attempts, and document how an administrator handles a legitimate exception.  
**Result:** The learning record gives a consistent signal of whether the learner met the defined standard.  
**SAP SuccessFactors Learning example:** A knowledge-check course with an explicit passing criterion and a governed retake process.  
**SME probe:** What test cases prove that a failed assessment cannot be mistaken for successful completion?

## Q09 — Configure equivalencies without weakening compliance
**Question:** Two courses cover similar content, and the business wants either one to satisfy the same requirement. What would you assess?

**Situation:** Duplicate learning requirements frustrated learners, but compliance owners were concerned about inconsistent evidence.  
**Task:** Determine whether equivalency is valid and configure it safely.  
**Action:** I would compare learning objectives, duration, assessment, validity period, target population, and regulatory acceptance. I would obtain content-owner and compliance approval, configure the supported equivalency relationship, test assignment and completion behavior, and document exclusions and review dates.  
**Result:** Redundant learning can be reduced without treating superficially similar content as interchangeable.  
**SAP SuccessFactors Learning example:** Two approved courses recognized as equivalent for a defined policy requirement.  
**SME probe:** What evidence would you require before approving equivalency for a regulated course?

## Q10 — Configure notifications and reminders
**Question:** Learners miss deadlines because reminders are unclear or arrive too late. How would you improve notification configuration?

**Situation:** Completion rates were low and users said they did not know the deadline or next action.  
**Task:** Improve timely communication without overwhelming learners.  
**Action:** I would map the learner lifecycle and notification triggers, confirm recipients, timing, language, links, and escalation rules, then configure supported notifications. I would test assignment, due-date, reminder, and completion messages with different user roles and time zones, and measure delivery and action rates.  
**Result:** Messages become more actionable and less noisy, with clearer ownership of overdue learning.  
**SAP SuccessFactors Learning example:** Assignment and due-date reminders aligned with the organization's approved communication policy.  
**SME probe:** How would you troubleshoot a notification that is configured but not received by one learner group?

## Q11 — Configure security roles and administrator permissions
**Question:** Regional learning administrators should manage their own audience but must not change global compliance settings. How would you design access?

**Situation:** Broad administrative permissions created the risk of accidental cross-region changes.  
**Task:** Apply least privilege while allowing local operations to continue.  
**Action:** I would map tasks to roles, identify which objects and populations each role must access, use supported role and domain restrictions, separate high-impact global configuration from local administration, and test both allowed and denied actions. I would arrange periodic access reviews and retain approval evidence.  
**Result:** Administrators can perform their responsibilities with reduced risk of unauthorized or accidental changes.  
**SAP SuccessFactors Learning example:** Region-scoped administration with centrally controlled global learning policies, subject to the tenant's available security model.  
**SME probe:** How would you demonstrate that a regional administrator cannot modify a global compliance item?

## Q12 — Configure reports and learning data fields
**Question:** Compliance leaders need a report showing assigned, completed, overdue, and expiring learning by region. How would you approach the requirement?

**Situation:** Leaders received inconsistent spreadsheets with different definitions of completion and overdue status.  
**Task:** Define reliable reporting requirements and configure or deliver a suitable report.  
**Action:** I would define each metric, data grain, time zone, population, date logic, and required filters. I would identify the supported report source and fields, validate security and access, reconcile a sample against learner records, and document refresh timing and limitations. If a metric is not available from the selected source, I would identify a governed alternative rather than inventing a field.  
**Result:** Leaders receive consistent evidence that can support compliance follow-up and operational decisions.  
**SAP SuccessFactors Learning example:** A role-secured learning compliance report reconciled against known learner records.  
**SME probe:** How would you validate the overdue count when a course has a due date but no completion date?

## Q13 — Configure external content-provider integration
**Question:** The business wants to launch third-party learning content from the learning platform. What configuration and validation steps would you take?

**Situation:** The organization wants a unified learner experience but must preserve tracking and access controls.  
**Task:** Confirm the supported integration pattern and prove that launch, identity, and completion work end to end.  
**Action:** I would document the provider's delivery and tracking model, authentication and launch requirements, content ownership, learner identity matching, completion data flow, and support boundaries. I would validate the supported connector or package approach, configure a pilot, test success and failure paths, and define monitoring and vendor escalation.  
**Result:** Learners can access approved external content through a controlled journey, with clear expectations for tracking and support.  
**SAP SuccessFactors Learning example:** A third-party course integrated through a supported content delivery method and tested for launch and completion tracking.  
**SME probe:** What would you do if launch works but completion data never returns?

## Q14 — Configure multilingual learning experiences
**Question:** A global course needs localized titles, instructions, and content, but compliance outcomes must remain consistent. How would you configure it?

**Situation:** Regional teams used informal translations and inconsistent versions of mandatory learning.  
**Task:** Support local-language delivery while maintaining controlled content and completion standards.  
**Action:** I would distinguish platform metadata from the actual content package, identify required languages and owners, define translation review and versioning, configure available locale-specific values, and validate learner experience and tracking in each language. I would retain a single governed policy for completion and clarify how local regulatory variations are approved.  
**Result:** Learners receive an appropriate localized experience while the organization retains consistent governance and comparable completion evidence.  
**SAP SuccessFactors Learning example:** A common learning item with approved localized metadata and validated language-specific content packages where supported.  
**SME probe:** How would you prevent a translation update from silently changing the meaning of a regulated assessment?

## Q15 — Configure catalog visibility and learner access
**Question:** A course should be visible only to eligible employees, while some learning remains discoverable by everyone. How would you meet this requirement?

**Situation:** Learners either could not find relevant content or could see offerings they were not authorized to take.  
**Task:** Balance discoverability, eligibility, and access control.  
**Action:** I would distinguish catalog visibility from assignment and enrollment eligibility, clarify the policy for each audience, configure supported catalog and security rules, and test searches and direct links as different user personas. I would also verify whether a hidden item can still be assigned through an approved administrative process.  
**Result:** Learners see relevant opportunities and restricted offerings remain governed according to policy.  
**SAP SuccessFactors Learning example:** Separate rules for general catalog discovery and restricted role-specific learning.  
**SME probe:** Why is hiding an item from the catalog not necessarily sufficient to enforce access control?

## Q16 — Configure data migration and historical learning records
**Question:** During migration, the business wants to load historical completions from a legacy LMS. What controls would you put in place?

**Situation:** Historical training evidence was spread across legacy records with inconsistent identifiers and status definitions.  
**Task:** Load usable history without falsely granting credit or damaging auditability.  
**Action:** I would profile and map source records, agree on the definition of valid completion, map learners and learning items, define treatment of missing dates and expired credentials, and reconcile counts and samples. I would test the migration in a controlled environment, record rejected rows and decisions, and obtain business sign-off before production loading.  
**Result:** Historical records become more trustworthy and migration exceptions are transparent.  
**SAP SuccessFactors Learning example:** A controlled migration of legacy completions using approved mapping and reconciliation rules.  
**SME probe:** How would you handle a legacy record marked complete when the source has no completion date or learner identifier?

## Q17 — Configure changes across test and production environments
**Question:** A configuration works in a test tenant but fails after deployment. How would you prevent recurrence?

**Situation:** Manually repeated settings caused drift between environments.  
**Task:** Establish controlled promotion and post-deployment verification.  
**Action:** I would identify which settings and objects are transportable versus requiring manual recreation, maintain a configuration inventory, document dependencies and environment-specific values, peer-review changes, and run a regression checklist after deployment. I would verify permissions, integrations, content references, and notifications with representative test accounts.  
**Result:** Releases become more repeatable, and environment drift is detected before it affects learners.  
**SAP SuccessFactors Learning example:** A release checklist that records configuration changes, dependencies, manual steps, and post-deployment tests.  
**SME probe:** Which learning configuration objects require special handling rather than assuming a universal transport mechanism?

## Q18 — Extend standard behavior versus use custom development
**Question:** A stakeholder requests a custom workflow for an exception that occurs only a few times per year. How would you decide whether to build it?

**Situation:** A low-volume edge case was driving a proposal for additional technology and long-term support.  
**Task:** Find the simplest governed solution that meets the control objective.  
**Action:** I would clarify the underlying business outcome, assess standard configuration and process alternatives, estimate volume and risk, examine audit and user-experience needs, and evaluate lifecycle cost and upgrade impact. If a manual exception process is sufficient, I would document controls and ownership; if a gap remains, I would validate supported extension options and obtain architecture approval.  
**Result:** The solution avoids unnecessary customization while preserving a path for justified requirements.  
**SAP SuccessFactors Learning example:** A controlled exception queue may be preferable to custom code for a rare administrative scenario, depending on the requirement and available standard capabilities.  
**SME probe:** What evidence would justify moving from a manual control to a custom extension?

## Q19 — Troubleshoot conflicting configuration rules
**Question:** Some learners are assigned the same course twice, while others are not assigned it at all. How would you diagnose the configuration?

**Situation:** Overlapping assignment logic produced inconsistent results across learner groups.  
**Task:** Find the rule interaction and correct it without disrupting valid assignments.  
**Action:** I would compare affected and unaffected learner records, inspect source attributes and assignment criteria, identify overlapping or mutually exclusive rules, review item status and equivalency behavior, and reproduce the result with controlled test users. I would change one variable at a time, retest boundary cases, and document the cause and preventive control.  
**Result:** Assignment behavior becomes explainable, and future rule changes can be tested against a known regression set.  
**SAP SuccessFactors Learning example:** Assignment profile criteria that overlap or depend on incomplete worker attributes.  
**SME probe:** How would you prove that the fix resolves both duplicate assignments and missing assignments?

## Q20 — Govern configuration changes and demonstrate business value
**Question:** A learning administrator wants to change a mandatory course's passing criteria immediately before an audit. How would you respond?

**Situation:** A high-impact configuration change was requested under time pressure, with possible compliance and reporting consequences.  
**Task:** Protect the control objective while helping the business resolve its urgent need.  
**Action:** I would assess the audit requirement and impact, identify the authorized policy owner, document the risk of changing criteria, and use the formal change and approval process. If a change is approved, I would test existing and new learner records, evaluate reporting implications, communicate the effective date, and preserve the change evidence. I would measure success through accurate completion, exception rates, and audit readiness—not simply the speed of configuration.  
**Result:** Decisions remain traceable, the learning control is protected, and the organization can demonstrate why the configuration changed.  
**SAP SuccessFactors Learning example:** A controlled change request for a mandatory course's assessment threshold, with approval, regression testing, and audit evidence.  
**SME probe:** How would you distinguish an urgent business request from an authorized change to a compliance control?

---

## Theme 07 — Candidate self-review

Before considering this theme complete, ensure you can:
- Explain the business requirement behind each configuration decision.
- Identify when standard configuration is sufficient and when a genuine product gap remains.
- Describe positive, negative, boundary, security, and regression tests.
- State what is standard product behavior versus tenant-specific configuration or an integration dependency.
- Quantify the result without inventing metrics.
- Answer each SME probe with evidence from a real project or a clearly labeled hypothetical example.

**Interview answer quality bar:** A strong answer explains the requirement, the configuration choice, the validation evidence, the risk control, and the measurable business outcome.

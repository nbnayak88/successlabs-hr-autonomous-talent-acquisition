# SAP SuccessFactors Recruiting Management (RCM) — SCALE Interview Preparation

## Step 06 — Business Rules & Derivations

**Objective:** Design, assign, test and govern Recruiting business rules for defaults, validations, alerts, derivations, dynamic behavior and lifecycle automation without creating hidden logic or unmaintainable rule chains.

## Why Business Rules Matter in RCM

A business rule should translate a **clear business policy into deterministic system behavior**.

**BUSINESS POLICY → CONDITION → ACTION → TRIGGER → DATA IMPACT → USER IMPACT → DOWNSTREAM IMPACT → TEST → GOVERN**

SAP documentation confirms that Recruiting business rules can be used with **job requisition, candidate profile, job application and job offer templates**. Rules are assigned through **Manage Rules in Recruiting** and can be associated with field-change events or template-level triggers; the sequence of assigned rules can also be changed. citeturn608747search25turn608747search0

For Job Applications, current SAP guidance lists Save and multiple offer-related rule scenarios. citeturn608747search0

The redesigned Applicant Management tool currently supports OnChange rules for status changes, including alerts and validations. SAP also notes that applicant status movement is controlled through the Move action in the redesigned experience, so legacy designs that depend on an OnChange rule to update applicant status must be validated against the current behavior. citeturn608747search1turn608747search3

## Rule Design Thinking

For every rule, answer:

1. What business policy is being enforced?
2. What is the base object?
3. What event triggers the rule?
4. What are the exact conditions?
5. What action does the rule perform?
6. Is the action a default, validation, message, derivation or state control?
7. What happens when data is missing or null?
8. What other rules run before or after it?
9. Can the rule overwrite user-entered data?
10. What downstream integrations or reports depend on the result?
11. How is the rule tested positively, negatively and at the boundary?
12. Who owns the rule after go-live?

---

# 20 Detailed Scenario-Based Questions & STAR Answers

## Scenario 1 — Country-Specific Validation

**Situation:** A global organization requires Legal Entity for every requisition, but valid values depend on Country.

**Questions**
1. How would you design the rule?
2. What should happen if Country is blank?
3. How would you prevent invalid combinations?
4. How would you test all country branches?

### STAR Answer

**S:** Requisition validation depends on country-specific organizational data.

**T:** Ensure the requisition cannot progress with an invalid country/legal-entity combination.

**A:** I would identify the authoritative Country and Legal Entity fields, define valid combinations, determine the appropriate trigger, add null handling and configure the rule to validate rather than silently overwrite user data. I would then test valid, invalid, blank and changed-country scenarios.

**R:** Recruiters receive immediate, actionable validation and invalid organizational combinations are reduced.

**L:** A validation rule should enforce a business boundary, not merely check that a field is populated.

**E:** Decision table, rule specification and positive/negative test evidence.

---

## Scenario 2 — Default Organizational Data

**Situation:** When a recruiter selects a Business Unit, the system should default an appropriate Cost Center and Legal Entity where the mapping is deterministic.

**Questions**
1. When should a rule default data?
2. When should it not default?
3. How do you prevent overwriting user-entered values?
4. How do you test defaulting?

### STAR Answer

**S:** Recruiters repeatedly enter organizational values that can be deterministically derived.

**T:** Reduce repetitive work without creating silent data corruption.

**A:** I would confirm the source-of-truth relationship, default only when the source value is present and the target is blank or intentionally derived, and validate the rule against exceptions. I would test initial entry, changes to the source, user overrides and incomplete input.

**R:** Faster requisition creation with more consistent data.

**L:** Automation should reduce effort without taking control away from the user where a legitimate exception exists.

**E:** Defaulting matrix and override test scenarios.

---

## Scenario 3 — Rule Does Not Fire

**Situation:** A rule works in one scenario but not when users update the field through another journey.

**Questions**
1. What do you check first?
2. How do you determine whether the trigger is wrong?
3. What evidence should you collect?
4. How would you avoid fixing the wrong layer?

### STAR Answer

**S:** Users report inconsistent rule execution.

**T:** Isolate whether the defect is assignment, trigger, condition, data or journey related.

**A:** I would verify the rule definition, base object, assignment in Manage Rules in Recruiting, supported event, rule sequence and test data. I would reproduce with a controlled account and establish whether the triggering event actually occurs in that journey.

**R:** The team fixes the true execution boundary instead of rewriting correct logic.

**L:** A correct rule assigned to the wrong trigger is still a production defect.

**E:** Reproduction steps, rule-assignment evidence and execution comparison.

---

## Scenario 4 — OnSave vs Field Change

**Situation:** A customer wants a validation to occur immediately when a recruiter changes a field rather than only when the transaction is saved.

**Questions**
1. How would you choose between field-change and save-level logic?
2. What are the user-experience implications?
3. When is immediate validation preferable?
4. How would you test both behaviors?

### STAR Answer

**S:** Business wants immediate feedback.

**T:** Select the correct execution model.

**A:** I would determine whether the business needs instant field-level feedback or transaction-level validation. For a dependency that should be obvious immediately, field-change logic may provide better guidance; for a cross-field consistency check, save-level validation may be more appropriate.

**R:** The rule executes at the point where it creates the most useful control.

**L:** Trigger selection is part of process and UX design, not only technical configuration.

**E:** Trigger decision matrix and user-journey test results.

---

## Scenario 5 — Multiple Rules on the Same Template

**Situation:** Five rules are assigned to a requisition template: defaults, validation, alert, derived value and approval preparation.

**Questions**
1. How would you control execution order?
2. Which rules should happen first?
3. What conflicts can arise?
4. How would you test sequence?

### STAR Answer

**S:** Multiple rules affect the same transaction.

**T:** Make execution deterministic and explainable.

**A:** I would document each rule's purpose, inputs and outputs, then sequence rules so prerequisite defaults/derivations occur before dependent validations or actions where appropriate. SAP allows assigned rule order to be changed in Manage Rules in Recruiting. citeturn608747search0

**R:** The rule chain produces predictable results.

**L:** Rule ordering is part of solution design when rules share data dependencies.

**E:** Rule dependency diagram and sequence test pack.

---

## Scenario 6 — Rule Overwrites User Input

**Situation:** A defaulting rule repeatedly resets a recruiter-entered value.

**Questions**
1. Why is this dangerous?
2. How would you redesign the rule?
3. How do you distinguish a default from a hard derivation?
4. How would you test an override?

### STAR Answer

**S:** Automated defaulting interferes with valid user decisions.

**T:** Preserve business flexibility while retaining useful automation.

**A:** I would clarify whether the field is truly derived or merely defaulted. If it is a default, populate it only when business rules allow; if it is authoritative, document the governance and make the constraint clear to users.

**R:** Legitimate overrides remain possible where intended, while true derivations stay controlled.

**L:** Default and derive are not interchangeable concepts.

**E:** Default-vs-derive decision record and override tests.

---

## Scenario 7 — Null / Blank Handling

**Situation:** A rule assumes Country is populated but recruiters can initially create incomplete drafts.

**Questions**
1. What should happen when Country is null?
2. How can null handling prevent false alerts?
3. What boundary tests are required?

### STAR Answer

**S:** Incomplete transactions are valid before final submission.

**T:** Prevent rules from producing misleading or cascading behavior.

**A:** I would explicitly design null/blank paths, determine which conditions should defer evaluation and ensure the rule does not attempt invalid derivation from missing data.

**R:** Draft transactions remain usable and final validation still protects data quality.

**L:** Null can be a legitimate business state during some lifecycle phases.

**E:** Null-handling decision table and boundary tests.

---

## Scenario 8 — Cross-Field Derivation

**Situation:** Hiring Type, Country and Employment Type together determine a downstream Classification value.

**Questions**
1. How would you model the logic?
2. How would you avoid a huge nested rule?
3. How would you test combinations?
4. What happens when one driver changes?

### STAR Answer

**S:** A derived value depends on multiple attributes.

**T:** Create deterministic derivation with maintainable logic.

**A:** I would create a decision table, identify authoritative driver fields, define valid combinations and keep the rule logic modular where possible. I would test each meaningful combination and re-evaluate the derived value when a driver changes.

**R:** Classification becomes consistent and auditable.

**L:** Complex derivation starts with a decision model, not with code-like nesting.

**E:** Decision table, rule design and combination test matrix.

---

## Scenario 9 — Alert vs Hard Validation

**Situation:** A recruiter enters a compensation range that is outside the typical range but may be legitimate.

**Questions**
1. Should this be an error or warning?
2. What determines the decision?
3. How would you design exception handling?

### STAR Answer

**S:** A value is unusual but not automatically invalid.

**T:** Alert the user without blocking legitimate business cases.

**A:** I would classify the rule as hard validation only if the value violates mandatory policy. Otherwise I would use a warning/alert and route exceptions to the responsible owner.

**R:** The system controls risk without creating unnecessary blockers.

**L:** Not every anomaly is an error.

**E:** Policy classification and exception test evidence.

---

## Scenario 10 — Application Status Change Validation

**Situation:** The customer wants status movement to trigger validation that mandatory interview information is complete.

**Questions**
1. Where should the validation occur?
2. What changed with the redesigned Applicant Management experience?
3. How would you test status movement?
4. What legacy assumptions should you challenge?

### STAR Answer

**S:** Status progression must be controlled by business prerequisites.

**T:** Prevent incomplete candidates from progressing.

**A:** I would confirm the exact Applicant Management experience and supported rule trigger first. SAP states that the redesigned Applicant Management tool supports OnChange rules for status fields, including alerts, validations and mandatory-field checks. SAP also notes that applicant status movement is controlled through the Move action and that existing legacy OnChange rules intended to update applicant status are ignored for that use case. citeturn608747search1turn608747search3 I would therefore design validation around the supported current status-change path rather than blindly reusing a legacy status-update pattern.

**R:** Status progression is controlled without relying on obsolete execution assumptions.

**L:** RCM rule design must account for the exact Applicant Management experience in use.

**E:** Status-transition matrix, supported-trigger confirmation and regression evidence.

---

## Scenario 11 — Branching Application Questions

**Situation:** A candidate should only see a follow-up question about sponsorship if they answer that they require it.

**Questions**
1. How would you design the branching?
2. What happens if the first answer changes?
3. How would you test candidate-visible behavior?
4. What value does dynamic questioning provide?

### STAR Answer

**S:** The application contains follow-up questions relevant only to some candidates.

**T:** Make the experience adaptive without losing required information.

**A:** I would define the controlling response, map the conditional follow-up and validate every branch, including changing the controlling answer. SAP's Recruiter Experience Academy describes branching questions and business rules for dynamic application flows in the Reimagined Candidate Experience. citeturn608747search11

**R:** Candidates see fewer irrelevant questions while recruiters still collect necessary information.

**L:** Good rule design can improve both data quality and candidate experience.

**E:** Branching decision table and candidate UX test pack.

---

## Scenario 12 — Alert Without Blocking Submission

**Situation:** A recruiter enters a requisition with an unusually high number of openings.

**Questions**
1. How would you decide between alert and validation?
2. What message should the user receive?
3. How would you avoid alert fatigue?
4. How would you measure usefulness?

### STAR Answer

**S:** The transaction is unusual but potentially valid.

**T:** Create risk awareness without blocking legitimate work.

**A:** I would define the threshold and business reason, use an actionable message, avoid repeating the same warning unnecessarily and monitor whether users act on the alert.

**R:** The rule improves decision quality without becoming background noise.

**L:** An alert has value only when it can change behavior.

**E:** Alert definition, UX test and effectiveness metric.

---

## Scenario 13 — Rule Depends on External Data

**Situation:** A recruiting rule needs Legal Entity data supplied by an upstream system.

**Questions**
1. Should the rule run if external data is missing?
2. How would you handle integration latency?
3. What is the fallback?
4. How would you test synchronization failure?

### STAR Answer

**S:** Rule behavior depends on data from another system.

**T:** Avoid treating missing data as a valid business state.

**A:** I would define source-of-truth ownership, expected timing, null/error behavior and fallback handling. Where the data is mandatory for a decision, the process must distinguish “data unavailable” from “data is valid but disqualifying.”

**R:** Integration failures become visible instead of silently creating incorrect decisions.

**L:** Business rules should not hide upstream data-quality problems.

**E:** Dependency matrix, failure-path tests and reconciliation evidence.

---

## Scenario 14 — Rule Conflict With Manual Approval

**Situation:** A rule automatically derives an approval-related attribute, but the business also wants an approver to review exceptions.

**Questions**
1. What should be automatic?
2. What should remain human judgment?
3. How would you avoid contradictory logic?
4. How would you document the design?

### STAR Answer

**S:** Automation and human approval overlap.

**T:** Keep deterministic logic automated while preserving governed human decisions.

**A:** I would automate objective derivations, expose the derived result to the approver and define explicit exception behavior. I would avoid a rule that silently reverses a deliberate human decision.

**R:** Routine cases are accelerated while exceptions remain governed.

**L:** Automate certainty; govern judgment.

**E:** Rule/approval interaction matrix.

---

## Scenario 15 — Rule Complexity and Maintainability

**Situation:** A requisition has many rules and users report slow or unpredictable behavior.

**Questions**
1. How would you diagnose complexity?
2. Which rules would you review first?
3. How would you simplify?
4. How would you prove simplification is safe?

### STAR Answer

**S:** Multiple rules execute on the same business object.

**T:** Improve maintainability and predictable behavior.

**A:** I would inventory rules, dependencies, duplicate logic, unnecessary triggers and overlapping conditions. I would consolidate where semantics are truly identical, remove unused logic and test critical paths after simplification.

**R:** The rule estate becomes easier to understand and support.

**L:** Business rules form an architecture; uncontrolled accumulation becomes technical debt.

**E:** Rule inventory, dependency graph and regression results.

---

## Scenario 16 — Rule Works in Test but Fails in Production

**Situation:** A derivation works in test but behaves differently in production.

**Questions**
1. What would you compare?
2. What environment differences matter?
3. How would you isolate data from configuration differences?
4. What evidence is required?

### STAR Answer

**S:** Environment-specific behavior is observed.

**T:** Identify the difference without guessing.

**A:** I would compare rule definition, assignment, template version, effective dates, permissions, reference data and representative transaction data.

**R:** The defect is linked to a concrete configuration or data difference.

**L:** A rule is not fully tested until its assignment and runtime context are tested.

**E:** Environment comparison matrix and reproduction evidence.

---

## Scenario 17 — Local Rule Change Breaks Another Country

**Situation:** A country-specific validation causes recruiters in another country to lose the ability to submit requisitions.

**Questions**
1. What likely happened?
2. How would you contain the impact?
3. How would you diagnose the scope?
4. How would you prevent recurrence?

### STAR Answer

**S:** A local rule change causes unexpected global impact.

**T:** Restore unaffected processing while preserving the local control.

**A:** I would identify the shared dependency, contain the faulty scope, compare country paths and correct the condition. Then I would add cross-country regression scenarios.

**R:** The local requirement remains supported without breaking shared behavior.

**L:** Shared templates require regression whenever rule logic changes.

**E:** RCA and global regression matrix.

---

## Scenario 18 — Rule Documentation Is Missing

**Situation:** The system has 40 rules but no one knows why many were created.

**Questions**
1. What would you do?
2. What should a rule catalogue contain?
3. How do you identify obsolete rules?
4. How would you establish ownership?

### STAR Answer

**S:** Rule logic exists without documented business rationale.

**T:** Recover maintainability and governance.

**A:** I would inventory rules and capture ID, owner, base object, trigger, purpose, conditions, actions, dependencies, affected templates, business criticality and test evidence. I would identify orphaned or duplicate rules and validate whether they are still needed.

**R:** The rule estate becomes understandable and supportable.

**L:** Undocumented automation becomes hidden architecture debt.

**E:** Rule catalogue, owner matrix and decommissioning decisions.

---

## Scenario 19 — Rule Compensates for Poor Data Quality

**Situation:** Users enter inconsistent values and administrators keep expanding rules to compensate.

**Questions**
1. Should the rule keep growing?
2. What is the root problem?
3. How would you separate data-quality remediation from automation?
4. What metrics would you monitor?

### STAR Answer

**S:** Rules are increasingly compensating for inconsistent reference data.

**T:** Stop encoding data-quality exceptions into increasingly complex logic.

**A:** I would identify the root source, assign data-quality ownership, clean reference values where appropriate and simplify rules so they enforce policy rather than conceal upstream defects.

**R:** The solution becomes simpler and data quality improves at source.

**L:** Automation should not become a substitute for fixing bad master data.

**E:** Data-quality trend, rule complexity inventory and remediation plan.

---

## Scenario 20 — Enterprise Rule Governance

**Situation:** A global recruiting platform has hundreds of rules across requisitions, candidates, applications and offers.

**Questions**
1. How would you govern them at scale?
2. What standards would you establish?
3. How would you manage changes?
4. What KPIs indicate healthy rule architecture?

### STAR Answer

**S:** Business rules have become a critical part of the recruiting platform.

**T:** Establish sustainable rule architecture.

**A:** I would introduce naming standards, ownership, purpose classification, trigger conventions, dependency documentation, sequence governance, version/change control, regression requirements and periodic rule rationalization.

**R:** Rules remain explainable, testable and maintainable as the platform grows.

**L:** Business-rule governance is a product capability, not an admin afterthought.

**E:** Rule catalogue, governance policy, dependency graph and rule-health dashboard.

---

# Business Rule Architecture View

## Rule Lifecycle

**POLICY**
→ Define the business requirement

**MODEL**
→ Identify base object and inputs

**TRIGGER**
→ Choose supported execution point

**LOGIC**
→ Define conditions

**ACTION**
→ Default / Validate / Alert / Derive / Control

**ASSIGN**
→ Link rule to the appropriate template/event

**SEQUENCE**
→ Resolve dependencies and ordering

**TEST**
→ Positive / Negative / Boundary / Security / Exception

**RELEASE**
→ Change governance

**MONITOR**
→ Defects / overrides / user feedback / data quality

**RATIONALIZE**
→ Retire obsolete logic

---

# Business Rule Classification Matrix

| Rule Type | Purpose | Typical Question |
|---|---|---|
| Default | Reduce repetitive entry | Can the value be safely inferred? |
| Validation | Block invalid state | Is the value prohibited? |
| Alert | Inform user of risk | Is it unusual but potentially valid? |
| Derivation | Determine value from inputs | Is there a deterministic business rule? |
| Branching | Control dynamic experience | Should another field/question appear? |
| Status Control | Govern lifecycle action | Are prerequisites satisfied? |
| Approval Preparation | Support workflow | What business attributes determine routing? |
| Offer/Hire Control | Protect downstream process | Is required data complete before next step? |
| Integration Guard | Protect interface quality | Is required source data available? |
| Compliance Control | Enforce policy | Is this legally/policy constrained? |

---

# Rule Design Decision Tree

### Question 1 — Can the user enter any valid value?
**Yes:** Do not over-automate.  
**No:** Continue to rule logic.

### Question 2 — Is there exactly one valid derived value?
**Yes:** Consider derivation/defaulting.  
**No:** Continue.

### Question 3 — Is the value invalid under policy?
**Yes:** Use validation/control.  
**No:** Continue.

### Question 4 — Is the value unusual but allowed?
**Yes:** Consider alert/warning.  
**No:** Continue.

### Question 5 — Does the rule need another field's value?
**Yes:** Design an explicit dependency and null path.

### Question 6 — Does it affect workflow or status?
**Yes:** Validate the exact Applicant Management experience and supported trigger before implementation. Current redesigned Applicant Management behavior must not be assumed to match legacy status-update patterns. citeturn608747search1turn608747search3

---

# Rule Governance Standards

## Naming Standard

Use a predictable convention such as:

**RCM_<OBJECT>_<PURPOSE>_<TRIGGER>_<SCOPE>**

Examples:

- `RCM_REQ_DEFAULT_LEGALENTITY_ONCHANGE_GLOBAL`
- `RCM_REQ_VALIDATE_COMPENSATION_ONSAVE_US`
- `RCM_APP_VALIDATE_WORKAUTH_STATUSCHANGE_GLOBAL`
- `RCM_APP_ALERT_MISSING_INTERVIEW_DATA_ONCHANGE_GLOBAL`

The exact convention should be agreed with the customer's configuration governance team.

## Rule Catalogue

Every production rule should document:

- Rule ID
- Business purpose
- Owner
- Base object
- Trigger
- Template
- Conditions
- Actions
- Inputs
- Outputs
- Dependencies
- Execution sequence
- Affected countries/populations
- Security considerations
- Integration impacts
- Test cases
- Effective date
- Change history
- Retirement criteria

SAP's Manage Rules in Recruiting experience supports assigning field-change and template-level rules to supported Recruiting templates/events and controlling their execution sequence. citeturn608747search0

---

# Business Rule Testing Matrix

| Test Type | Example |
|---|---|
| Positive | Valid Country + valid Legal Entity |
| Negative | Country + invalid Legal Entity |
| Null | Country blank |
| Boundary | Minimum/maximum permitted compensation |
| Change | Driver field changed after default |
| Override | User changes a defaulted value |
| Sequence | Rule B consumes Rule A result |
| Security | User without permission triggers action |
| Lifecycle | Draft vs submitted vs approved |
| Exception | Approved business exception |
| Integration | Upstream value unavailable |
| Regression | Unrelated country/process still works |
| Performance | High-volume transaction |
| Candidate UX | Conditional question behavior |

---

# Common Business Rule Anti-Patterns

### Anti-Pattern 1 — “Put it in a rule”
Not every problem is a business-rule problem. Fix process, data or configuration at the correct layer.

### Anti-Pattern 2 — Hidden overwrites
A rule silently replacing user-entered information creates trust and audit problems.

### Anti-Pattern 3 — Mega-rule
One enormous rule containing unrelated countries, objects and policies becomes difficult to test and support.

### Anti-Pattern 4 — Rule stacking without sequencing
Multiple rules can produce unpredictable behavior when dependencies are undocumented.

### Anti-Pattern 5 — No null path
Blank data is often a legitimate lifecycle state. Treating it as an error everywhere creates false failures.

### Anti-Pattern 6 — Legacy trigger assumptions
Do not copy a status-rule design from a legacy Applicant Management experience without validating current trigger behavior. citeturn608747search1turn608747search3

### Anti-Pattern 7 — Rules compensating for bad master data
Fix the source problem where possible instead of increasing automation complexity.

### Anti-Pattern 8 — No retirement mechanism
A rule without an owner and retirement criteria becomes permanent technical debt.

---

# Business Rule Validation Checklist

Before promoting a rule, verify:

- [ ] Business policy is explicitly documented.
- [ ] Base object is correct.
- [ ] Trigger is supported for the relevant Recruiting experience.
- [ ] Conditions are deterministic.
- [ ] Null/blank handling is defined.
- [ ] Action type is appropriate.
- [ ] Default vs derivation vs validation is clear.
- [ ] User override behavior is intentional.
- [ ] Rule sequence/dependencies are documented.
- [ ] Scope/country applicability is explicit.
- [ ] Security implications are assessed.
- [ ] Integration dependencies are documented.
- [ ] Positive tests pass.
- [ ] Negative tests pass.
- [ ] Boundary tests pass.
- [ ] Exception tests pass.
- [ ] Regression tests pass.
- [ ] Candidate/user experience is validated.
- [ ] Owner is assigned.
- [ ] Change history is captured.
- [ ] Monitoring/metrics are defined.
- [ ] Retirement criteria exist.

---

# Senior Consultant Rapid-Fire — STAR Mini-Answers

### 1. Default or derive?
**S:** A value can be inferred from another attribute.  
**T:** Decide how authoritative the automation should be.  
**A:** Default when user choice remains valid; derive when the business relationship is authoritative.  
**R:** Correct automation boundary.  
**L:** Automation strength should match policy strength.  
**E:** Decision record.

### 2. Validation or alert?
**S:** A value may be wrong or simply unusual.  
**T:** Avoid unnecessary blocking.  
**A:** Validate mandatory policy violations; alert anomalies that can be legitimate.  
**R:** Better user experience with appropriate control.  
**L:** Not every anomaly is invalid.  
**E:** Rule classification.

### 3. Why document rule order?
**S:** Multiple rules act on related values.  
**T:** Make results predictable.  
**A:** Document dependencies and execution sequence.  
**R:** Fewer hidden interactions.  
**L:** Rule ordering is architecture.  
**E:** Dependency graph.

### 4. What is the first debugging step?
**S:** Rule does not behave as expected.  
**T:** Avoid random edits.  
**A:** Reproduce the exact transaction and confirm object, assignment and trigger.  
**R:** Root cause becomes narrower.  
**L:** Diagnose execution context before rewriting logic.  
**E:** Reproduction record.

### 5. Why test null values?
**S:** Draft records can be incomplete.  
**T:** Avoid false rule execution.  
**A:** Define explicit null paths.  
**R:** Cleaner lifecycle behavior.  
**L:** Null can be a valid state.  
**E:** Boundary test.

### 6. Why are rules not just configuration?
**S:** Rules encode policy.  
**T:** Govern business decisions.  
**A:** Treat rules as controlled enterprise logic with ownership and lifecycle.  
**R:** Better maintainability.  
**L:** Automation is part of architecture.  
**E:** Rule catalogue.

### 7. How do you avoid mega-rules?
**S:** Rule estate is growing.  
**T:** Keep logic understandable.  
**A:** Separate policies by business purpose and scope; reuse where semantics are genuinely shared.  
**R:** Smaller, testable rule units.  
**L:** Modularity reduces risk.  
**E:** Rule decomposition.

### 8. What if a rule depends on integration data?
**S:** Required data is external.  
**T:** Avoid incorrect decisions.  
**A:** Define source-of-truth, timing, null/error states and fallback.  
**R:** Transparent dependency behavior.  
**L:** Integration readiness is rule readiness.  
**E:** Dependency tests.

### 9. What if a rule works in test but not production?
**S:** Environment behavior differs.  
**T:** Find the contextual difference.  
**A:** Compare rule, assignment, template, permissions, reference data and transaction data.  
**R:** Evidence-based correction.  
**L:** Runtime context matters.  
**E:** Environment comparison.

### 10. How do you govern rules after go-live?
**S:** Rules accumulate over time.  
**T:** Keep them maintainable.  
**A:** Track owner, purpose, usage, defects and change history; conduct periodic rationalization.  
**R:** Lower rule debt.  
**L:** Governance is continuous.  
**E:** Rule-health review.

---

# Final RCM Business Rules & Derivations Master Answer

When asked:

**“How would you design and manage business rules in SAP SuccessFactors Recruiting?”**

Answer:

> **“I start with the business policy rather than with the rule builder. I identify the object, source data, trigger, condition and intended action, then decide whether the requirement is actually a default, validation, alert, derivation, branching behavior or lifecycle control. I explicitly define null handling, user override behavior, scope, dependencies and rule sequence, because multiple rules can interact. I validate the exact Recruiting experience and supported trigger before implementing status-related logic, especially where redesigned Applicant Management differs from legacy behavior. I then test positive, negative, boundary, exception, security, integration and regression scenarios and document the rule, owner and evidence. After go-live I monitor rule defects, overrides, data quality and user feedback and regularly rationalize obsolete logic. My objective is not to create more automation; it is to create deterministic, explainable and maintainable business behavior that improves recruiting without hiding the underlying process or data problems.”**

## Master Loop

**BUSINESS POLICY → DATA → OBJECT → TRIGGER → CONDITION → ACTION → SEQUENCE → ASSIGN → TEST → RELEASE → MONITOR → GOVERN → RATIONALIZE**

## Interview Signal

A strong RCM consultant does not answer only:

**“How do I create a business rule?”**

They answer:

**“What business policy are we encoding, when should it execute, what data does it depend on, what must happen when it fails, and how do we prove the automation is correct and maintainable?”**

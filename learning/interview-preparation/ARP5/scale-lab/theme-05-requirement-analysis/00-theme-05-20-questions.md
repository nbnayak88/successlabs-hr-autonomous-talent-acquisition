# ARP5 — Theme 05: Requirement Analysis

## 20 Scenario-Based Interview Questions & STAR Answers

**Stream:** ARP5 — Applied SAP SuccessFactors Compensation & Variable Pay  
**Theme:** 05 — Requirement Analysis  
**Target:** 20 unique scenarios  
**Answer method:** STAR — Situation → Task → Action → Result  
**Product posture:** HCM-first, requirement-led, fit-to-standard, architecture-aware

> **Boundary:** Theme 05 focuses on discovering, clarifying, prioritizing, validating, and tracing compensation requirements. It is intentionally distinct from Theme 04 Data & Information Model and Theme 06 Solution Design.

### Requirement Analysis Spine

**Business Objective → Stakeholder Need → Current-State Process → Pain Point → Requirement → Business Rule → Priority → Acceptance Criteria → Traceability → Sign-off**

---

## Q01 — Discovering the Real Compensation Requirement

### Interview Question
A client says, “We need a better compensation system.” How would you analyze the actual requirement?

### STAR Answer
**Situation:** The business described a technology need without defining the underlying compensation problem.  
**Task:** I needed to convert the broad request into measurable business requirements.  
**Action:** I interviewed HR, compensation, managers, payroll, finance, and employees; mapped the current cycle; identified pain points such as spreadsheet dependency, delayed approvals, and weak budget visibility; then translated them into outcome-based requirements.  
**Result:** The project moved from a vague technology request to a prioritized compensation transformation backlog.

### SAP SuccessFactors Compensation & Variable Pay Example
For SuccessFactors Compensation, I would assess requirements around worksheets, guidelines, budgets, eligibility, approvals, statements, and employee data before discussing configuration.

### SME Probe
How do you distinguish a stated requirement from the underlying business need?

---

## Q02 — Compensation Policy vs System Requirement

### Interview Question
A compensation leader gives you a policy document and asks you to configure it exactly as written. What do you do first?

### STAR Answer
**Situation:** Policy language often contains business intent but not implementable system requirements.  
**Task:** I needed to separate policy intent from system behavior.  
**Action:** I decomposed each policy statement into actors, conditions, calculations, approvals, exceptions, and expected outcomes, then validated ambiguous rules with the compensation owner.  
**Result:** The team received testable requirements instead of directly translating policy prose into configuration.

### SAP SuccessFactors Compensation & Variable Pay Example
A statement such as “high performers should receive differentiated merit” would be converted into explicit eligibility, guideline, range, and approval requirements.

### SME Probe
What would you do if the policy itself contains contradictory rules?

---

## Q03 — Stakeholder Requirement Discovery

### Interview Question
How would you gather requirements when HR, Finance, managers, and employees have conflicting expectations?

### STAR Answer
**Situation:** Each stakeholder viewed compensation success differently.  
**Task:** I needed to create a common requirement baseline.  
**Action:** I captured each stakeholder's objectives, pain points, constraints, and success measures; grouped them into business, process, employee, control, and technology requirements; then facilitated prioritization.  
**Result:** Conflicts became explicit trade-offs rather than hidden assumptions.

### SAP SuccessFactors Compensation & Variable Pay Example
HR may prioritize manager usability, Finance budget control, and employees transparent statements. I would capture all three and define acceptance criteria for each.

### SME Probe
Who has final authority when stakeholders disagree?

---

## Q04 — Current-State Process Analysis

### Interview Question
How do you analyze the current compensation process before defining future requirements?

### STAR Answer
**Situation:** The organization relied on spreadsheets and manual approvals.  
**Task:** I needed to understand where the process actually failed.  
**Action:** I mapped the process from eligibility through planning, manager review, approval, and employee communication, documenting handoffs, manual activities, exceptions, controls, and cycle-time measures.  
**Result:** Requirements were linked to specific process gaps instead of being based on assumptions.

### SAP SuccessFactors Compensation & Variable Pay Example
I would identify where employee data enters the Compensation process, where managers make recommendations, where budgets are checked, and where final statements are generated.

### SME Probe
Which current-state artifacts do you insist on seeing?

---

## Q05 — Global vs Local Compensation Requirements

### Interview Question
A global organization wants one compensation process, but countries have different statutory and business practices. How do you analyze the requirements?

### STAR Answer
**Situation:** Global standardization conflicted with legitimate local requirements.  
**Task:** I needed to identify what should be globally common and what must remain local.  
**Action:** I categorized requirements into global policy, regional variation, country-specific constraints, and optional local practices. I challenged differences that were preference rather than necessity.  
**Result:** The program established a global core with controlled local variation.

### SAP SuccessFactors Compensation & Variable Pay Example
I would assess currency, eligibility populations, local compensation practices, approval structures, and statement requirements while preserving a common Compensation framework where possible.

### SME Probe
How do you prevent localization from becoming uncontrolled customization?

---

## Q06 — Merit Planning Requirements

### Interview Question
A client wants a new merit planning process. What requirements would you clarify?

### STAR Answer
**Situation:** The client requested merit planning without defining the decision model.  
**Task:** I needed to establish the complete business requirement.  
**Action:** I clarified eligibility, planning period, merit budget, guidelines, manager recommendations, exceptions, approvals, calibration, effective dates, and employee communication.  
**Result:** The merit requirement became complete enough to support configuration, testing, and business sign-off.

### SAP SuccessFactors Compensation & Variable Pay Example
For Compensation, I would trace requirements through employee eligibility, worksheets, guidelines, budgets, manager recommendations, approval workflow, and statements.

### SME Probe
What requirement is most commonly missed in merit planning?

---

## Q07 — Variable Pay Requirements

### Interview Question
How would you analyze requirements for a variable-pay program?

### STAR Answer
**Situation:** A business wanted to replace a manual annual bonus calculation.  
**Task:** I needed to understand the incentive logic before selecting a solution approach.  
**Action:** I documented plan eligibility, target opportunity, performance measures, thresholds, weights, calculations, caps, floors, proration, exceptions, approvals, and payment outputs.  
**Result:** The variable-pay requirement became measurable and testable.

### SAP SuccessFactors Compensation & Variable Pay Example
I would distinguish employee target data, business performance measures, individual measures, calculation rules, and final payout requirements in Variable Pay.

### SME Probe
How would you handle a bonus rule that cannot be expressed clearly by the business owner?

---

## Q08 — Eligibility Requirement Analysis

### Interview Question
Managers disagree about who should be eligible for a compensation cycle. How do you resolve the requirement?

### STAR Answer
**Situation:** Eligibility was being interpreted differently by business units.  
**Task:** I needed to establish an authoritative eligibility rule.  
**Action:** I identified population attributes, effective dates, employment status, organizational criteria, hire-date rules, and exception conditions; then obtained formal policy-owner approval.  
**Result:** Eligibility became a documented business rule with traceable acceptance criteria.

### SAP SuccessFactors Compensation & Variable Pay Example
I would validate employee status, job, organization, compensation data, effective dates, and other eligibility inputs available to the Compensation process.

### SME Probe
How do you distinguish an eligibility rule from a data-quality problem?

---

## Q09 — Budget Requirement Analysis

### Interview Question
Finance says compensation must remain within budget, while managers want flexibility. How do you define the requirement?

### STAR Answer
**Situation:** Budget control and manager flexibility were competing objectives.  
**Task:** I needed to establish the control requirement without eliminating legitimate exceptions.  
**Action:** I clarified budget ownership, allocation levels, thresholds, tolerance, exception approval, visibility, and audit requirements.  
**Result:** The requirement supported controlled flexibility with explicit governance.

### SAP SuccessFactors Compensation & Variable Pay Example
I would define how budgets are represented, allocated, consumed, monitored, and escalated within Compensation.

### SME Probe
What is the difference between a budget requirement and a budget-reporting requirement?

---

## Q10 — Guideline Requirement Analysis

### Interview Question
The compensation team asks for “smart guidelines.” What questions would you ask?

### STAR Answer
**Situation:** “Smart guidelines” was too vague to configure or test.  
**Task:** I needed to discover the intended decision logic.  
**Action:** I asked which employee attributes should influence recommendations, what ranges should apply, what exceptions are permitted, and how managers should be guided.  
**Result:** The vague requirement became explicit recommendation and governance rules.

### SAP SuccessFactors Compensation & Variable Pay Example
I would analyze how guidelines should use factors such as performance, compa-ratio, range position, job level, or other approved business inputs.

### SME Probe
How do you prevent guidelines from becoming an opaque algorithm?

---

## Q11 — Exception Requirement Analysis

### Interview Question
A compensation cycle has many exceptions. How do you determine which should become formal requirements?

### STAR Answer
**Situation:** Managers were requesting exceptions throughout the planning cycle.  
**Task:** I needed to separate valid business exceptions from uncontrolled preference.  
**Action:** I categorized exceptions by frequency, business justification, policy impact, risk, and approval authority. Repeated legitimate exceptions were converted into formal rules; rare cases were governed through controlled exception handling.  
**Result:** The process became more predictable without eliminating necessary flexibility.

### SAP SuccessFactors Compensation & Variable Pay Example
Examples include recent hires, promotions, leave, transfers, and special retention adjustments.

### SME Probe
When should an exception become a standard requirement?

---

## Q12 — Pay Equity Requirement

### Interview Question
A client says, “We need pay equity.” How do you turn that into requirements?

### STAR Answer
**Situation:** Pay equity was stated as a strategic goal but had no measurable definition.  
**Task:** I needed to identify the required business controls and analysis.  
**Action:** I clarified comparison populations, relevant compensation components, permitted explanatory factors, review thresholds, reporting needs, remediation workflow, and governance.  
**Result:** Pay equity became a measurable requirement rather than a generic aspiration.

### SAP SuccessFactors Compensation & Variable Pay Example
I would connect compensation planning data with approved employee and organizational attributes needed for equity analysis and management review.

### SME Probe
What should never be inferred from a pay-equity analysis without business validation?

---

## Q13 — Employee Communication Requirements

### Interview Question
The business focuses heavily on compensation calculations but has not defined employee communication requirements. How would you handle it?

### STAR Answer
**Situation:** The project treated communication as an afterthought.  
**Task:** I needed to capture the employee-facing requirements before solution design.  
**Action:** I clarified what employees need to see, when they receive it, which compensation components are displayed, what explanations are required, and what access controls apply.  
**Result:** Employee communication became part of the end-to-end compensation requirement rather than a post-implementation activity.

### SAP SuccessFactors Compensation & Variable Pay Example
I would analyze compensation statement content, visibility, terminology, currency, effective dates, and employee access requirements.

### SME Probe
How can poor communication undermine an otherwise correct compensation solution?

---

## Q14 — Approval and Governance Requirements

### Interview Question
How do you analyze approval requirements for compensation planning?

### STAR Answer
**Situation:** The client had multiple approval layers but no consistent governance model.  
**Task:** I needed to identify who approves what and under which conditions.  
**Action:** I documented decision rights, approval thresholds, exception paths, escalation rules, segregation-of-duties expectations, and audit requirements.  
**Result:** Approval requirements became explicit and traceable.

### SAP SuccessFactors Compensation & Variable Pay Example
I would identify approval requirements around manager recommendations, HR review, compensation leadership, finance controls, and exception decisions.

### SME Probe
How do you prevent approval workflows from becoming unnecessarily complex?

---

## Q15 — Analytics and Reporting Requirements

### Interview Question
What questions do you ask when a compensation stakeholder says, “We need better reporting”?

### STAR Answer
**Situation:** Reporting was requested without defined decisions or measures.  
**Task:** I needed to identify the decisions the reports should support.  
**Action:** I asked what users need to monitor, compare, investigate, approve, or predict; then defined measures, dimensions, frequency, audience, security, and acceptance criteria.  
**Result:** Reports became decision-support requirements instead of lists of fields.

### SAP SuccessFactors Compensation & Variable Pay Example
Requirements may include budget consumption, recommendation distribution, guideline adherence, exceptions, compensation outcomes, and cycle progress.

### SME Probe
What makes an analytics requirement actionable?

---

## Q16 — Requirement Prioritization

### Interview Question
You have 100 compensation requirements and only enough capacity to deliver 60. How do you prioritize them?

### STAR Answer
**Situation:** Stakeholders considered almost every requirement critical.  
**Task:** I needed an objective prioritization mechanism.  
**Action:** I assessed business value, compliance/control impact, employee impact, risk, dependency, implementation complexity, and time sensitivity. I classified requirements as mandatory, high-value, or deferred.  
**Result:** The program obtained an agreed delivery sequence instead of stakeholder-driven scope expansion.

### SAP SuccessFactors Compensation & Variable Pay Example
Core eligibility, budget control, calculation correctness, approvals, and auditability would normally take precedence over cosmetic enhancements.

### SME Probe
How do you defend a prioritization decision to an executive sponsor?

---

## Q17 — Acceptance Criteria for Compensation Requirements

### Interview Question
How do you convert a compensation requirement into acceptance criteria?

### STAR Answer
**Situation:** Requirements were documented as statements such as “managers should receive appropriate guidelines.”  
**Task:** I needed to make them objectively testable.  
**Action:** I defined the trigger, input conditions, expected behavior, boundary cases, exception behavior, and measurable expected result.  
**Result:** Business and QA teams could validate the requirement consistently.

### SAP SuccessFactors Compensation & Variable Pay Example
For a guideline requirement, acceptance criteria could specify eligible population, input conditions, expected recommendation range, exception behavior, and approval outcome.

### SME Probe
What makes an acceptance criterion ambiguous?

---

## Q18 — Requirement Traceability

### Interview Question
How would you maintain traceability from compensation strategy to implementation and testing?

### STAR Answer
**Situation:** Previous projects had requirements, configuration, and test cases maintained separately.  
**Task:** I needed to create a traceable chain.  
**Action:** I assigned unique requirement IDs and linked each requirement to its business objective, process rule, solution component, configuration decision, test case, defect, and sign-off.  
**Result:** The team could demonstrate why each solution element existed and whether each requirement was validated.

### SAP SuccessFactors Compensation & Variable Pay Example
A merit requirement could trace from compensation philosophy to eligibility, guideline, budget, worksheet behavior, approval, test scenario, and final business acceptance.

### SME Probe
What do you do when a configuration item has no traceable business requirement?

---

## Q19 — Fit-to-Standard vs Custom Requirement

### Interview Question
A business stakeholder requests a highly customized compensation behavior because “that is how we have always done it.” How do you analyze it?

### STAR Answer
**Situation:** A legacy practice was presented as a mandatory requirement.  
**Task:** I needed to determine whether it represented genuine business value.  
**Action:** I asked why the behavior exists, what outcome it supports, what risk exists if changed, and whether the standard product can meet the objective. I compared standard capability, process redesign, configuration, integration, and customization options.  
**Result:** The decision became value-led rather than preference-led.

### SAP SuccessFactors Compensation & Variable Pay Example
I would challenge spreadsheet-based legacy practices when standard Compensation capabilities can satisfy the business outcome with better control and maintainability.

### SME Probe
What evidence would justify customization?

---

## Q20 — Architect-Level Requirement Sign-Off

### Interview Question
As a transformation architect, how do you know that compensation requirements are ready for solution design?

### STAR Answer
**Situation:** Teams often moved into configuration while requirements were still ambiguous.  
**Task:** I needed to establish a readiness gate.  
**Action:** I verified that each requirement had an owner, business objective, process context, rule, priority, acceptance criteria, dependency, security/control consideration, traceability, and sign-off. I also checked that unresolved assumptions were explicitly recorded.  
**Result:** Solution design started from an agreed requirement baseline, reducing rework and scope ambiguity.

### SAP SuccessFactors Compensation & Variable Pay Example
Before designing the Compensation architecture, I would ensure requirements for eligibility, planning, guidelines, budgets, merit, variable pay, approvals, statements, integrations, controls, and reporting are sufficiently defined.

### SME Probe
What requirement gaps would make you refuse to proceed to solution design?

---

## Completion Standard

- 20 unique ARP5 Theme 05 scenarios.
- Stable IDs: **HR-ARP5-B05-Q01 → HR-ARP5-B05-Q20**.
- Every scenario uses **Situation → Task → Action → Result**.
- Every scenario includes an SAP SuccessFactors Compensation & Variable Pay example.
- Every scenario includes an SME Probe.
- Focus remains on **Requirement Analysis**, not data modeling or detailed solution design.
- Scenarios cover discovery, stakeholder alignment, process analysis, global/local variation, eligibility, merit, variable pay, budgets, guidelines, exceptions, pay equity, communication, governance, analytics, prioritization, acceptance criteria, traceability, fit-to-standard, and sign-off.
- Requirements are treated as business capabilities and measurable outcomes, not merely configuration requests.

**Cumulative ARP5 coverage:** 5/22 themes = **100/440 scenario positions**

**Next:** Theme 06 — Solution Design

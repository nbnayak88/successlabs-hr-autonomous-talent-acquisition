# ARP5 — Theme 04: Data & Information Model

## 20 Scenario-Based Interview Questions & STAR Answers

**Stream:** ARP5 — Applied SAP SuccessFactors Compensation & Variable Pay  
**Theme:** 04 — Data & Information Model  
**Target:** 20 unique scenarios  
**Answer method:** STAR — Situation → Task → Action → Result  
**Product posture:** HCM-first, SAP SuccessFactors Compensation & Variable Pay focused; data meaning, ownership, quality, effective dating, calculation inputs, and business semantics before technical movement.

> **Boundary:** This theme focuses on what compensation data means, where it comes from, who owns it, how it is structured, how time and history affect it, and how data quality influences compensation decisions. Integration mechanics belong to Theme 08; migration belongs to Theme 11; security controls belong to Theme 15.

**Data & information spine:**  
**Employee → Employment → Organization → Job → Compensation Basis → Eligibility → Performance Signal → Guideline → Budget → Recommendation → Approval → Compensation Outcome → Workforce Insight**

---

## Q01 — What are the core data domains in compensation?

### Interview Question
What data would you consider essential to an enterprise compensation process?

### STAR Answer
**Situation:** A compensation implementation started with a template design before the required data was clearly understood.

**Task:** I needed to establish the information foundation.

**Action:** I identified employee identity, employment status, organizational assignment, job information, current compensation, eligibility attributes, performance inputs, compensation guidelines, budgets, recommendations, approvals, and final outcomes.

**Result:** The team gained a clear information model before designing the solution.

### SAP SuccessFactors Compensation & Variable Pay Example
Employee Central provides foundational workforce and compensation information, while Compensation adds planning-specific structures such as eligibility, guidelines, budgets, recommendations, and outcomes.

### SME Probe
Which data should be considered authoritative for current employee compensation?

---

## Q02 — How would you determine data ownership?

### Interview Question
Who should own compensation-related data?

### STAR Answer
**Situation:** HR, Finance, and managers each believed they owned parts of the compensation data.

**Task:** I needed to establish clear accountability.

**Action:** I classified each data element by business ownership, system of record, stewardship responsibility, and usage. HR owned policy and workforce information where appropriate, Finance owned budget information, and managers owned their business recommendations within governance.

**Result:** Data disputes and uncontrolled changes were reduced.

### SAP SuccessFactors Compensation & Variable Pay Example
Employee Central can be the authoritative source for employee and organizational information, while compensation planning maintains cycle-specific planning data.

### SME Probe
What is the difference between data ownership and system-of-record responsibility?

---

## Q03 — Why is effective dating important in compensation?

### Interview Question
Why can't a compensation process simply use the employee's current data?

### STAR Answer
**Situation:** Employees changed jobs, managers, organizations, and compensation during the planning period.

**Task:** I needed the cycle to use the correct point-in-time information.

**Action:** I analyzed effective dates for employment, organization, job, compensation, eligibility, and cycle events.

**Result:** Planning decisions reflected the intended business snapshot instead of accidentally using future or stale data.

### SAP SuccessFactors Compensation & Variable Pay Example
Effective-dated Employee Central records can determine the compensation and organizational context relevant to a planning cycle.

### SME Probe
How would you investigate a compensation recommendation that appears correct today but was wrong at cycle launch?

---

## Q04 — How would you model employee compensation history?

### Interview Question
Why is historical compensation data important?

### STAR Answer
**Situation:** HR needed to understand an employee's current recommendation in the context of prior pay changes.

**Task:** I needed to preserve meaningful compensation history.

**Action:** I considered effective dates, prior salary changes, promotions, adjustments, bonuses, and other relevant reward events and separated historical evidence from current planning values.

**Result:** Managers and HR could make decisions with better context.

### SAP SuccessFactors Compensation & Variable Pay Example
Employee Central compensation history can provide context for current Compensation planning and analysis.

### SME Probe
Why should historical data not simply be overwritten by the latest compensation value?

---

## Q05 — How would you define compensation eligibility data?

### Interview Question
What data attributes might determine compensation eligibility?

### STAR Answer
**Situation:** The annual cycle included multiple employee populations.

**Task:** I needed to identify the attributes that determine participation.

**Action:** I assessed employment status, hire date, termination date, job, location, organization, compensation program, employee class, effective dates, and approved policy rules.

**Result:** Eligibility became traceable to defined business data rather than manual lists.

### SAP SuccessFactors Compensation & Variable Pay Example
Compensation eligibility can use Employee Central attributes and cycle-specific rules.

### SME Probe
How would you prevent an eligibility rule from becoming dependent on an unreliable field?

---

## Q06 — How would you handle data-quality problems before compensation planning?

### Interview Question
What would you do if employee data contains missing or inconsistent values before a compensation cycle?

### STAR Answer
**Situation:** Missing manager, organization, job, or compensation information threatened cycle readiness.

**Task:** I needed to prevent bad data from producing bad compensation decisions.

**Action:** I profiled the population, classified defects, identified the owning team, established remediation deadlines, and introduced reconciliation before cycle launch.

**Result:** The compensation population became more reliable and downstream rework decreased.

### SAP SuccessFactors Compensation & Variable Pay Example
Pre-cycle validation should confirm that Employee Central data required by Compensation is complete and consistent.

### SME Probe
Which data defects should block a compensation cycle rather than be fixed during planning?

---

## Q07 — How would you model organizational hierarchy for compensation?

### Interview Question
Why is organizational structure important to compensation planning?

### STAR Answer
**Situation:** Budgets and approvals needed to roll up through organizational leadership.

**Task:** I needed to ensure the organizational model supported planning and governance.

**Action:** I mapped company, business unit, department, manager hierarchy, cost center, geography, and other relevant structures and validated which hierarchy drove budgets and approvals.

**Result:** Compensation planning aligned with the organization's decision structure.

### SAP SuccessFactors Compensation & Variable Pay Example
Employee Central organizational and manager data can support compensation planning populations, budget structures, and workflow.

### SME Probe
What happens when the HR hierarchy and Finance budget hierarchy do not match?

---

## Q08 — How would you define the relationship between employee data and compensation data?

### Interview Question
How would you explain the difference between employee master data and compensation planning data?

### STAR Answer
**Situation:** Project teams were mixing workforce information with cycle-specific planning information.

**Task:** I needed to establish clear data boundaries.

**Action:** I separated foundational employee attributes from planning-cycle values such as recommendations, guidelines, budgets, and approvals.

**Result:** Data ownership and lifecycle became easier to understand.

### SAP SuccessFactors Compensation & Variable Pay Example
Employee Central may provide employee, job, organization, and existing compensation information, while Compensation maintains planning-cycle information.

### SME Probe
Why does separating master data from transactional planning data matter?

---

## Q09 — How would you treat performance information as a compensation input?

### Interview Question
What should an architect consider when performance data influences compensation?

### STAR Answer
**Situation:** Managers expected performance ratings to influence merit recommendations.

**Task:** I needed to ensure the correct performance information was used.

**Action:** I identified the authoritative performance result, rating status, effective cycle, calibration state, and timing, then defined how it should influence compensation without confusing the source data with the compensation decision.

**Result:** Compensation planning used controlled performance evidence.

### SAP SuccessFactors Compensation & Variable Pay Example
Approved Performance & Goals outcomes may be used as inputs to compensation guidelines or recommendations according to policy.

### SME Probe
What should happen if the performance rating changes after compensation planning begins?

---

## Q10 — How would you model compensation guidelines as information?

### Interview Question
What data is represented by a compensation guideline?

### STAR Answer
**Situation:** Managers saw guideline percentages but did not understand what drove them.

**Task:** I needed to make the guideline information model explicit.

**Action:** I identified the factors, ranges, recommendation outputs, population context, and business rules behind the guideline.

**Result:** Guidelines became explainable decision-support information rather than unexplained system values.

### SAP SuccessFactors Compensation & Variable Pay Example
Guideline matrices can translate defined compensation factors into recommended ranges or values for planning.

### SME Probe
How would you validate that a guideline is using the intended employee attributes?

---

## Q11 — How would you model compensation budget data?

### Interview Question
What should a compensation budget represent?

### STAR Answer
**Situation:** Different teams used the word “budget” to mean different things.

**Task:** I needed to establish a consistent definition.

**Action:** I distinguished allocated budget, available budget, proposed amount, approved amount, utilized amount, and remaining amount.

**Result:** Managers and Finance could discuss budget status using consistent semantics.

### SAP SuccessFactors Compensation & Variable Pay Example
Compensation planning can display and calculate budget-related values at appropriate organizational levels.

### SME Probe
Why is “budget” not a single data field?

---

## Q12 — How would you reconcile current salary and planned salary?

### Interview Question
How would you distinguish an employee's current compensation from a proposed compensation outcome?

### STAR Answer
**Situation:** Managers confused current salary with planned salary during the annual cycle.

**Task:** I needed to establish clear data semantics.

**Action:** I separated current/base compensation, proposed increase, proposed new compensation, one-time award, and approved final outcome.

**Result:** The planning process became easier to understand and reconcile.

### SAP SuccessFactors Compensation & Variable Pay Example
Compensation planning can display current compensation and proposed changes while the approved result remains distinct from the recommendation.

### SME Probe
Why should proposed compensation never overwrite the source current-compensation value during planning?

---

## Q13 — How would you handle currency data?

### Interview Question
What data considerations arise when employees are compensated in multiple currencies?

### STAR Answer
**Situation:** A global compensation cycle required both local and management-level views.

**Task:** I needed to ensure amounts were comparable without losing local meaning.

**Action:** I defined local currency, planning/reporting currency, exchange-rate assumptions, effective dates, rounding, and budget semantics.

**Result:** Compensation values could be interpreted consistently across countries.

### SAP SuccessFactors Compensation & Variable Pay Example
Global compensation planning needs explicit treatment of employee currency, budget currency, display currency, and any required conversion logic.

### SME Probe
Why should exchange-rate assumptions be treated as controlled business data?

---

## Q14 — How would you model variable-pay target information?

### Interview Question
What information is needed to calculate an employee's target variable pay?

### STAR Answer
**Situation:** Bonus calculations differed across employee populations.

**Task:** I needed to identify the information required for consistent target determination.

**Action:** I examined eligibility, target percentage or amount, salary basis, plan assignment, employment dates, organizational context, and policy rules.

**Result:** Target incentive information became traceable and calculable.

### SAP SuccessFactors Compensation & Variable Pay Example
Variable Pay plans can use employee and plan information to determine target incentive opportunities before applying performance and business results.

### SME Probe
What is the difference between target incentive and actual payout?

---

## Q15 — How would you handle data reconciliation before final compensation approval?

### Interview Question
What would you reconcile before compensation results are finalized?

### STAR Answer
**Situation:** The organization was ready to approve the cycle but had unresolved differences between planning and HR data.

**Task:** I needed to establish final data confidence.

**Action:** I reconciled employee populations, current compensation, recommendations, budgets, approvals, exceptions, currencies, and final outcomes against authoritative sources.

**Result:** Leadership could approve the cycle with stronger evidence.

### SAP SuccessFactors Compensation & Variable Pay Example
Final compensation outputs should be reconciled against Employee Central and approved planning values before downstream execution.

### SME Probe
What reconciliation would you consider a hard gate before finalization?

---

## Q16 — How would you handle duplicate or stale employee records?

### Interview Question
The compensation population contains duplicate or outdated employee information. What would you do?

### STAR Answer
**Situation:** Duplicate or stale data could cause employees to appear incorrectly in the planning population.

**Task:** I needed to prevent duplicate compensation decisions.

**Action:** I identified the authoritative employee identifier, effective-dated record, employment status, organizational assignment, and duplicate-handling rules, then routed data remediation to the owner.

**Result:** The planning population became trustworthy.

### SAP SuccessFactors Compensation & Variable Pay Example
Employee Central should provide a reliable workforce population for compensation planning, with effective-dated records interpreted correctly.

### SME Probe
How would you distinguish a duplicate employee from a legitimate concurrent employment scenario?

---

## Q17 — How would you define compensation data lineage?

### Interview Question
Why is data lineage important in compensation?

### STAR Answer
**Situation:** A senior leader challenged a compensation recommendation and asked where the value originated.

**Task:** I needed to make the calculation explainable.

**Action:** I traced the value from employee source data through eligibility, guideline inputs, budget, calculation, manager recommendation, approval, and final outcome.

**Result:** The organization could explain the decision and identify the responsible data source.

### SAP SuccessFactors Compensation & Variable Pay Example
A compensation recommendation should be traceable from relevant Employee Central and planning inputs through the configured calculation and approval process.

### SME Probe
What would you include in a compensation data lineage document?

---

## Q18 — How would you distinguish data quality from business-rule quality?

### Interview Question
A compensation result is wrong. How would you determine whether the problem is bad data or a bad business rule?

### STAR Answer
**Situation:** The calculated result differed from the expected business outcome.

**Task:** I needed to isolate the root cause.

**Action:** I validated source values first, then eligibility, guideline inputs, formulas, policy assumptions, and expected output. I compared actual and expected results at each stage.

**Result:** The issue could be classified accurately as data, rule, configuration, or policy rather than being fixed blindly.

### SAP SuccessFactors Compensation & Variable Pay Example
I would validate Employee Central inputs, compensation planning values, guideline factors, calculation logic, and policy expectations.

### SME Probe
Why should source-data validation precede calculation-rule changes?

---

## Q19 — How would you design a compensation information model for analytics?

### Interview Question
What compensation information would leadership need for meaningful analytics?

### STAR Answer
**Situation:** Leadership wanted to understand compensation outcomes but could see only aggregate totals.

**Task:** I needed to identify analytical dimensions and measures.

**Action:** I organized information by employee population, organization, job, geography, performance, current compensation, planned change, budget, outcome, and relevant equity indicators while respecting data governance.

**Result:** Leadership could analyze not only how much was spent but how compensation decisions were distributed and aligned to strategy.

### SAP SuccessFactors Compensation & Variable Pay Example
Compensation planning data can provide analytical signals around budgets, recommendations, increases, awards, and organizational populations.

### SME Probe
What is the difference between operational compensation data and compensation insight?

---

## Q20 — How would you demonstrate strong compensation data architecture knowledge?

### Interview Question
What distinguishes a compensation architect from someone who simply understands compensation fields?

### STAR Answer
**Situation:** A global organization wants trustworthy compensation decisions across multiple cycles and employee populations.

**Task:** I need to demonstrate that I understand information as an architectural asset.

**Action:** I define the data domains, ownership, system of record, effective dating, eligibility attributes, performance inputs, guideline factors, budget semantics, planning values, approval state, final outcomes, lineage, quality controls, and analytical meaning.

**Result:** Compensation decisions become explainable, consistent, auditable, and usable for strategic workforce insight.

### SAP SuccessFactors Compensation & Variable Pay Example
My information chain is:
**Employee → Employment → Organization → Job → Compensation Basis → Eligibility → Performance Signal → Guideline → Budget → Recommendation → Approval → Compensation Outcome → Workforce Insight.**

### SME Probe
What single data-quality problem could create the largest compensation risk, and how would you detect it before the cycle begins?

---

## Completion Standard

- 20 unique data/information scenarios completed: **HR-ARP5-B04-Q01 → HR-ARP5-B04-Q20**
- Every scenario follows **STAR: Situation → Task → Action → Result**.
- Every scenario includes a **SAP SuccessFactors Compensation & Variable Pay example**.
- Every scenario includes an **SME Probe**.
- Theme focuses on **data domains, ownership, effective dating, eligibility, organizational data, compensation history, performance inputs, guidelines, budgets, calculations, reconciliation, lineage, data quality, and analytics**.
- Theme remains distinct from integration mechanics, migration, and security controls.
- Answers demonstrate **data semantics and business meaning before technical implementation**.

**Cumulative ARP5 coverage:** 4/22 themes = **80/440 scenario positions**

**Next:** Theme 05 — Requirement Analysis

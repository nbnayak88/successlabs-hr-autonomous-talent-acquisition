# APH3 — Theme 04: Data & Information Model

## 20 Scenario-Based Interview Questions & STAR Answers

**Stream:** APH3 — Applied SAP SuccessFactors Performance & Goals  
**Theme:** 04 — Data & Information Model  
**Target:** 20 unique scenarios  
**Answer method:** STAR — Situation → Task → Action → Result  
**Product posture:** HCM-first, data-aware, architecture-led

> **Boundary:** APH3 owns performance and goal information. Employee Central remains the employee/organizational foundation; AGL4 owns succession/development information; ARP5 owns compensation information.

## Information Spine

**Employee → Organization → Goal → Competency → Feedback → Performance Evidence → Rating → Review → Calibration Signal → Business Insight**

---

## Q01 — Performance Information Model

### Interview Question
How would you model the core information required for an enterprise Performance & Goals solution?

### STAR Answer
**Situation:** The client treated performance information as disconnected form fields.

**Task:** I needed to establish a coherent information model.

**Action:** I separated foundation data, goal data, competency data, feedback/evidence, ratings, workflow state and analytical outputs, then mapped relationships and ownership between them.

**Result:** The solution had a clearer information architecture and fewer ambiguous data responsibilities.

### SAP SuccessFactors Performance & Goals Example
Model Employee Central foundation information separately from Goal Management and Performance Management information.

### SME Probe
Which information should be treated as master data versus performance-cycle data?

---

## Q02 — Employee and Organizational Context

### Interview Question
A performance form shows the wrong manager for an employee. How would you investigate the data flow?

### STAR Answer
**Situation:** The performance process displayed an incorrect reporting relationship.

**Task:** I needed to determine whether the defect originated in performance configuration or foundation data.

**Action:** I validated the employee's organizational and manager relationship in Employee Central, checked effective dates and then verified how the performance process consumed that information.

**Result:** The root cause was isolated without unnecessarily changing the performance configuration.

### SAP SuccessFactors Performance & Goals Example
Treat Employee Central as the authoritative source for employee and organizational context.

### SME Probe
Why should you avoid correcting foundation-data problems inside the performance application?

---

## Q03 — Goal Data Structure

### Interview Question
What information would you expect to capture for an employee goal?

### STAR Answer
**Situation:** Goals were being stored as unstructured descriptions.

**Task:** I needed to make goals measurable and analytically useful.

**Action:** I defined goal identity, description, owner, category, measure, target, weight, timeframe, status, alignment and evidence requirements.

**Result:** Goals became usable for both performance conversations and meaningful analysis.

### SAP SuccessFactors Performance & Goals Example
Use structured Goal Management fields and attributes rather than relying only on free-text goal descriptions.

### SME Probe
Which goal attributes are essential for meaningful enterprise reporting?

---

## Q04 — Goal Alignment Relationships

### Interview Question
Leadership wants to trace an individual goal back to a strategic objective. What information relationship would you design?

### STAR Answer
**Situation:** Individual goals existed but their strategic lineage was unclear.

**Task:** I needed to make goal alignment traceable.

**Action:** I established relationships between organizational, team and individual goals and defined ownership and governance for those relationships.

**Result:** Leaders could better understand how individual commitments connected to strategic priorities.

### SAP SuccessFactors Performance & Goals Example
Use Goal Management cascading/alignment capabilities to establish goal relationships.

### SME Probe
How would you distinguish goal alignment from simply copying a goal?

---

## Q05 — Competency Information

### Interview Question
How would you structure competency information so that performance assessments are consistent?

### STAR Answer
**Situation:** Managers interpreted competencies differently across the organization.

**Task:** I needed a common competency information model.

**Action:** I established competency identifiers, definitions, behavioral expectations and rating guidance, and linked relevant competencies to appropriate performance processes.

**Result:** Competency assessments became more consistent and reusable.

### SAP SuccessFactors Performance & Goals Example
Use competency libraries and structured competency sections in Performance Management.

### SME Probe
What makes a competency definition analytically useful?

---

## Q06 — Rating Information

### Interview Question
What data elements should be considered when designing a performance rating model?

### STAR Answer
**Situation:** Ratings were stored as labels without consistent semantic meaning.

**Task:** I needed to establish a reliable rating model.

**Action:** I defined rating identifiers, labels, descriptions, scale order and business meaning, then aligned them with goal and competency assessments.

**Result:** Ratings became more consistent for users and more reliable for analytics.

### SAP SuccessFactors Performance & Goals Example
Use standardized rating scales within performance forms.

### SME Probe
Why is a rating label such as “Exceeds” insufficient without a defined semantic model?

---

## Q07 — Performance Evidence

### Interview Question
How would you model evidence used to support a performance rating?

### STAR Answer
**Situation:** Final ratings often relied on undocumented manager judgment.

**Task:** I needed to strengthen evidence quality.

**Action:** I defined evidence sources such as goal outcomes, feedback, comments and documented examples, while distinguishing evidence from the final rating decision.

**Result:** Performance conversations became more evidence-based and auditable.

### SAP SuccessFactors Performance & Goals Example
Use comments, feedback and goal/performance information to support formal review decisions.

### SME Probe
How would you prevent evidence volume from becoming a proxy for performance quality?

---

## Q08 — Performance Form Data Lifecycle

### Interview Question
How would you distinguish performance-form data from the underlying employee master data?

### STAR Answer
**Situation:** The client wanted to duplicate employee information inside performance forms.

**Task:** I needed to prevent unnecessary data duplication.

**Action:** I identified authoritative sources, treated employee and organizational attributes as foundation information and retained only performance-specific information within the performance process.

**Result:** Data ownership became clearer and synchronization risk was reduced.

### SAP SuccessFactors Performance & Goals Example
Use Employee Central as the foundation and Performance & Goals for performance-specific information.

### SME Probe
What risks arise when master data is duplicated in performance records?

---

## Q09 — Effective-Dated Data

### Interview Question
An employee changes manager during a performance cycle. How should effective dating influence your analysis?

### STAR Answer
**Situation:** A manager change created confusion about responsibility for the performance review.

**Task:** I needed to understand which organizational relationship applied at each point in the cycle.

**Action:** I reviewed effective-dated employee and organizational information, established the business rule for ownership and validated the performance workflow against that rule.

**Result:** The organization could handle manager changes more consistently.

### SAP SuccessFactors Performance & Goals Example
Validate effective-dated Employee Central relationships when diagnosing performance-process behavior.

### SME Probe
Why is “current manager” not always sufficient for historical performance analysis?

---

## Q10 — Data Ownership

### Interview Question
Who should own employee, goal, rating and compensation information in a connected SuccessFactors landscape?

### STAR Answer
**Situation:** Multiple HR teams were maintaining overlapping information.

**Task:** I needed to establish clear information ownership.

**Action:** I assigned Employee Central ownership to employee/organizational foundation data, APH3 to performance and goal information, and ARP5 to compensation information, with governed handoffs between domains.

**Result:** Duplicate ownership decreased and integration requirements became clearer.

### SAP SuccessFactors Performance & Goals Example
Define information ownership before designing integrations between SuccessFactors modules.

### SME Probe
Why is data ownership an architecture decision rather than merely an administration task?

---

## Q11 — Data Quality Controls

### Interview Question
How would you establish data-quality controls before opening a performance cycle?

### STAR Answer
**Situation:** Incomplete employee and goal information was causing downstream process problems.

**Task:** I needed to prevent poor data from entering the cycle.

**Action:** I defined pre-cycle validation checks for eligibility, employee relationships, goals, weights, competencies and required configuration, with clear remediation ownership.

**Result:** The cycle started with fewer avoidable data defects.

### SAP SuccessFactors Performance & Goals Example
Use reporting and validation activities to identify incomplete Goal and Performance Management information before critical milestones.

### SME Probe
Which data-quality checks should be automated first?

---

## Q12 — Performance Data and Analytics

### Interview Question
HR wants to analyze rating trends across business units. What information-model considerations matter?

### STAR Answer
**Situation:** Ratings existed, but organizational context was inconsistent.

**Task:** I needed to enable meaningful comparative analysis.

**Action:** I aligned rating information with organizational dimensions, employee populations, performance-cycle periods and relevant goal/competency context while respecting access controls.

**Result:** HR could analyze patterns with appropriate business context instead of comparing isolated ratings.

### SAP SuccessFactors Performance & Goals Example
Combine Performance & Goals information with relevant organizational dimensions in reporting/People Analytics where appropriate.

### SME Probe
Why can a rating distribution be misleading without organizational context?

---

## Q13 — Historical Performance Data

### Interview Question
The organization wants five years of performance history available for analytics. How would you approach the information architecture?

### STAR Answer
**Situation:** Historical performance information existed across multiple legacy and SuccessFactors structures.

**Task:** I needed to preserve useful history while maintaining a manageable analytical model.

**Action:** I classified historical records by business value, defined retention and access requirements, mapped legacy attributes to a common analytical vocabulary and avoided altering historical facts merely to fit the current process.

**Result:** Historical insight could be retained without compromising the integrity of prior performance records.

### SAP SuccessFactors Performance & Goals Example
Use appropriate reporting and historical-data approaches while preserving the semantics of completed performance records.

### SME Probe
When should historical data be transformed, and when should it remain in its original semantic form?

---

## Q14 — Goal Weight Information

### Interview Question
How would you represent goal weighting so that the final performance assessment remains explainable?

### STAR Answer
**Situation:** Managers questioned how individual goals influenced overall performance.

**Task:** I needed transparent weighting information.

**Action:** I defined goal weights, validation rules, effective-cycle context and calculation expectations, and ensured managers understood how weighting affected the assessment.

**Result:** Performance outcomes became easier to explain and challenge constructively.

### SAP SuccessFactors Performance & Goals Example
Use configured goal weights within Goal/Performance Management processes where applicable.

### SME Probe
What data-quality rule would you apply to goal weights?

---

## Q15 — Feedback Information

### Interview Question
The organization wants continuous feedback to contribute to performance conversations. How would you model feedback without treating every comment as a formal rating?

### STAR Answer
**Situation:** Feedback was being mixed directly with formal performance ratings.

**Task:** I needed to preserve the distinction between evidence and assessment.

**Action:** I modeled feedback as performance evidence with its own source, context and timing, while keeping the formal rating as a governed assessment decision.

**Result:** Managers could use continuous feedback without turning every comment into an automatic rating.

### SAP SuccessFactors Performance & Goals Example
Use Continuous Performance Management feedback and formal Performance Management ratings as related but distinct information.

### SME Probe
Why should feedback not automatically change a formal rating?

---

## Q16 — Data Security and Performance Information

### Interview Question
Performance information is highly sensitive. What information-model considerations would you include in the security architecture?

### STAR Answer
**Situation:** The organization needed to protect ratings, comments and feedback from inappropriate access.

**Task:** I needed to align information sensitivity with access design.

**Action:** I classified performance information by sensitivity, mapped access to legitimate roles, minimized broad visibility and tested positive and negative access scenarios.

**Result:** Sensitive performance information was better protected while required business access remained available.

### SAP SuccessFactors Performance & Goals Example
Apply Role-Based Permissions and appropriate form/feedback access controls.

### SME Probe
Which performance data would you consider most sensitive and why?

---

## Q17 — Data Lineage

### Interview Question
An executive challenges a performance dashboard value. How would you establish where the number came from?

### STAR Answer
**Situation:** A reported performance metric was questioned by leadership.

**Task:** I needed to establish confidence in the metric.

**Action:** I traced the metric from dashboard definition to analytical dataset, source attributes, performance records and underlying employee/organizational context, documenting transformation rules.

**Result:** The metric could be explained and validated rather than treated as a black box.

### SAP SuccessFactors Performance & Goals Example
Document lineage from Performance & Goals source information through reporting and analytics.

### SME Probe
What is the difference between data lineage and data ownership?

---

## Q18 — Data Reconciliation

### Interview Question
Performance reports show a different employee population from HR reports. How would you reconcile them?

### STAR Answer
**Situation:** HR and performance reports contained different employee counts.

**Task:** I needed to determine whether the difference was expected or a data defect.

**Action:** I compared population definitions, effective dates, eligibility rules, organizational filters and permissions before comparing record counts.

**Result:** The discrepancy could be explained through business rules rather than assumed to be a system error.

### SAP SuccessFactors Performance & Goals Example
Reconcile Performance & Goals populations against Employee Central using shared employee and organizational definitions.

### SME Probe
Why should population definition be validated before record-level reconciliation?

---

## Q19 — Data Model for Goal Changes

### Interview Question
An employee changes a goal midway through the cycle. What information should be preserved?

### STAR Answer
**Situation:** Business priorities changed and an approved goal needed modification.

**Task:** I needed to preserve both current relevance and historical accountability.

**Action:** I retained the original context, captured the revised goal, timing, rationale and ownership, and ensured the performance process could distinguish the historical and current state.

**Result:** The final assessment remained explainable and the employee was not judged without context.

### SAP SuccessFactors Performance & Goals Example
Use governed Goal Management change practices and preserve appropriate performance-cycle evidence.

### SME Probe
What is the difference between overwriting a goal and managing a goal's lifecycle?

---

## Q20 — Enterprise Performance Information Architecture

### Interview Question
You are designing the enterprise information architecture for Performance & Goals. What principles would guide you?

### STAR Answer
**Situation:** Performance information was fragmented across employee records, spreadsheets, forms and analytics.

**Task:** I needed to create an enterprise-grade information architecture.

**Action:** I established authoritative sources, clear ownership, common definitions, lifecycle and effective-dating rules, data-quality controls, security classification, lineage and analytical semantics. I kept performance information connected to Employee Central and adjacent HCM domains without duplicating ownership.

**Result:** Performance data became a governed enterprise asset capable of supporting employee conversations, management decisions, analytics and transformation.

### SAP SuccessFactors Performance & Goals Example
Architect APH3 information around Employee Central foundation data, Goal Management, Performance Management, Continuous Performance and governed analytics.

### SME Probe
What would make you reject an apparently functional performance data model?

---

# Completion Standard

- **20/20 unique scenarios**
- **20/20 STAR answers**
- **20/20 SAP SuccessFactors Performance & Goals examples**
- **20/20 SME probes**
- Stable IDs: **HR-APH3-B04-Q01 → HR-APH3-B04-Q20**
- Data/information focus kept distinct from Domain Foundation, Product/Technology and Process/Business Context
- Boundaries maintained against AWF1, AGL4 and ARP5

**Cumulative APH3 interview coverage: 4/22 themes = 80/440 scenarios.**

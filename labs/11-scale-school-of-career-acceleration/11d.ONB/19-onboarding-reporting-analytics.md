# 19. Onboarding Reporting & Analytics

## SAP SuccessFactors Onboarding — Scenario-Based Interview & Architecture Guide

> **Purpose:** Master Onboarding reporting as an **analytics architecture**, not merely a report-building exercise. The senior architect must connect process telemetry, onboarding data, Recruiting, Employee Central, task execution, compliance, experience, integrations, security, operational exceptions, and business outcomes.

**Current SAP alignment:** SAP's current Onboarding documentation states that Onboarding data can be reported through **Stories in People Analytics**, while legacy reporting tools such as Table, Canvas, Dashboards, and Tiles don't have access to the Onboarding data schema. SAP also documents Onboarding cross-domain reporting for combining Onboarding with Recruiting, Employee Profile, and other employee-based domains. citeturn0search14turn0search5

---

# 1. Reporting Is an Architecture Capability

A report answers:

> **What happened?**

Analytics should answer:

> **Why did it happen, where is the risk, what should we do, and what outcome did it create?**

For Onboarding, reporting should connect:

- Candidate
- New hire
- Onboarding process
- Process status
- Tasks
- Participants
- Start date
- Manager
- Location
- Legal entity
- Compliance
- Documents
- eSignature
- Rehire
- Internal hire
- Cancellation/no-show
- Integration
- Employee Central
- Time-to-productivity
- Experience
- Exceptions

The architectural model is:

```text
                    BUSINESS QUESTION
                           |
                           v
                    KPI DEFINITION
                           |
                           v
                    DATA DOMAIN
                           |
                           v
                    DATA MODEL
                           |
                           v
                    STORY / ANALYSIS
                           |
                           v
                    INSIGHT / EXCEPTION
                           |
                           v
                    BUSINESS ACTION
                           |
                           v
                    OUTCOME MEASUREMENT
```

---

# 2. Current SAP Reporting Architecture

## 2.1 People Analytics Stories

For current Onboarding reporting, SAP documents **Stories in People Analytics** as the reporting path for Onboarding data. Legacy Table, Canvas, Dashboards, and Tiles don't have access to the Onboarding data schema. citeturn0search14

## 2.2 Cross-Domain Reporting

SAP supports **Onboarding Cross Domain Reports**, allowing Onboarding fields to be combined with Recruiting, Employee Profile, and other employee-based domains through Ad Hoc reporting. citeturn0search5

Architecturally:

```text
ONBOARDING
    |
    +---- Recruiting
    |
    +---- Employee Profile
    |
    +---- Employee-based domains
    |
    v
CROSS-DOMAIN ANALYSIS
```

## 2.3 Integration Center reporting/extraction

Integration Center can also be used to export Onboarding process data for downstream systems. SAP documents an Integration Center report using the **ONB2Process** entity, including process status, process ID, user ID, person GUID, and person ID external. citeturn0search12

This is important:

> **Reporting and operational extraction are related but are not the same architecture.**

Use analytics for insight; use integration extraction when another system needs data.

---

# 3. Reporting Architecture

```text
                    ONBOARDING EVENTS
                           |
              +------------+-------------+
              |                          |
         Transactional               Process Data
           Context                    ONB2Process
              |                          |
              +------------+-------------+
                           |
                    DATA MODEL
                           |
       +-------------------+-------------------+
       |                   |                   |
       v                   v                   v
  People Analytics     Cross Domain       Integration
     Stories            Reporting         Extraction
       |                   |                   |
       +-------------------+-------------------+
                           |
                           v
                     KPI / ANALYSIS
                           |
            +--------------+--------------+
            |              |              |
          Process        Risk          Experience
            |              |              |
            +--------------+--------------+
                           |
                           v
                    BUSINESS ACTION
```

---

# 4. Core Onboarding KPI Framework

## Process KPIs

- Onboarding initiation volume
- Completion rate
- Average completion time
- Median completion time
- Overdue task rate
- Process aging
- Restart rate
- Cancellation rate
- No-show rate

## Hiring KPIs

- Recruiting → Onboarding conversion
- Onboarding → EC hire conversion
- Start-date readiness
- New-hire completion before Day 1
- Internal-hire completion
- Rehire completion

## Compliance KPIs

- Compliance completion rate
- Missing-form rate
- Late compliance rate
- Compliance exception rate
- Form correction/restart volume

## Experience KPIs

- New-hire task completion
- Hiring-manager task completion
- Buddy engagement
- First-Day readiness
- Exit/feedback participation where applicable

## Integration KPIs

- Integration success rate
- Error rate
- Retry rate
- Duplicate rate
- Reconciliation exceptions
- Time-to-resolution

## Operational KPIs

- Processes approaching start date
- Processes stuck in error
- Overdue tasks by owner
- Manager bottlenecks
- HR workload
- Country bottlenecks

---

# 5. 20 Scenario-Based Interview Questions — STAR Answers

## Q1. HR asks for a dashboard showing all incomplete onboarding processes. How would you design it?

**Situation:**  
HR has hundreds of active onboarding processes and cannot identify which ones need intervention.

**Task:**  
Create actionable visibility into incomplete onboarding.

**Action:**  
I would define "incomplete" precisely before building the report: active process, not completed/cancelled, with outstanding task or process state. I would use current Onboarding reporting capabilities in People Analytics and expose process status, new hire, manager, start date, location, aging, and overdue task indicators. SAP documents Onboarding reporting through Stories in People Analytics. citeturn0search14

**Result:**  
HR receives an exception-oriented view instead of a simple list.

**Architect signal:** A dashboard should drive **action**, not merely display records.

---

## Q2. Business wants to know why onboarding completion is slow in one country. How would you analyze it?

**Situation:**  
Global onboarding completion is acceptable, but one country has materially longer cycle times.

**Task:**  
Identify the root cause rather than simply reporting the average.

**Action:**  
I would segment completion time by country, process variant, task, responsible group, manager, compliance requirement, integration dependency, and start-date window. I would then identify the highest-aging task and determine whether the bottleneck is process design, data, compliance, participant behavior, or integration.

**Result:**  
The organization gets a root-cause view and can redesign the bottleneck.

**Architect signal:** **Segment before concluding.**

---

## Q3. How would you build a Recruiting → Onboarding conversion report?

**Situation:**  
Recruiting leadership wants to understand how many candidates progress into Onboarding.

**Task:**  
Connect recruiting and onboarding lifecycle data.

**Action:**  
I would define the population and lifecycle states first, then use cross-domain reporting where appropriate. SAP documents Onboarding cross-domain reporting that can combine Onboarding with Recruiting and employee-based domains. citeturn0search5

I would define metrics such as eligible candidates, initiated onboarding, cancelled onboarding, pending hire, and hired in Employee Central.

**Result:**  
Recruiting can see where candidates are lost or delayed between selection and employment.

**Architect signal:** Define the **funnel semantics** before calculating percentages.

---

## Q4. A report shows 98% onboarding completion, but HR says many new hires still arrive unprepared. What do you investigate?

**Situation:**  
The headline KPI looks strong but business experience is poor.

**Task:**  
Determine whether the KPI is measuring the wrong outcome.

**Action:**  
I would distinguish process completion from Day-1 readiness. I would analyze task completion before start date, mandatory document completion, equipment readiness, access provisioning, manager preparation, and unresolved exceptions.

**Result:**  
The organization stops treating process completion as equivalent to successful onboarding.

**Architect signal:** **Outcome KPI > activity KPI.**

---

## Q5. How would you design an Onboarding aging report?

**Situation:**  
HR wants to identify processes that are becoming risky.

**Task:**  
Make aging actionable.

**Action:**  
I would calculate aging using the appropriate lifecycle timestamp and classify processes into risk bands based on start date, due date, process state, and outstanding tasks. I would distinguish normal aging from exception aging.

**Result:**  
HR can prioritize processes that threaten Day-1 readiness.

**Architect signal:** Aging must be measured against **business deadlines**, not just calendar days.

---

## Q6. A manager has a high number of overdue onboarding tasks. How would you analyze it?

**Situation:**  
Managers in one business unit consistently have overdue tasks.

**Task:**  
Determine whether this is a manager behavior issue or a process-design issue.

**Action:**  
I would compare overdue rates by manager, task type, task duration, organizational unit, new-hire volume, reminders, task complexity, and process variant. I would also inspect whether managers received the required notifications.

**Result:**  
The organization can distinguish workload, usability, communication, and accountability problems.

**Architect signal:** Never attribute a KPI to user behavior before checking **process design and system signals**.

---

## Q7. How would you report compliance completion?

**Situation:**  
Compliance leadership needs visibility into missing or late forms.

**Task:**  
Create a secure compliance analytics model.

**Action:**  
I would report at the minimum-necessary level: completion status, aging, country, legal entity, form category, exception type, and responsible group. I would restrict sensitive personal/legal data through role-based access and avoid exposing document contents in broad operational dashboards.

**Result:**  
Compliance gets actionable control visibility without unnecessarily exposing sensitive data.

**Architect signal:** Compliance analytics requires **data minimization**.

---

## Q8. HR wants to identify onboarding processes likely to miss the employee's start date. What would you do?

**Situation:**  
Some onboarding processes are technically active but operationally at risk.

**Task:**  
Build an early-warning model.

**Action:**  
I would combine:
- days until start date;
- incomplete mandatory tasks;
- overdue tasks;
- compliance status;
- integration failures;
- manager completion;
- employee completion;
- process aging;
- restart history.

I would classify risk based on business rules rather than using a single arbitrary threshold.

**Result:**  
HR can intervene before Day 1 instead of reacting after failure.

**Architect signal:** Move from **descriptive to predictive/leading indicators**.

---

## Q9. An executive wants a global onboarding dashboard. What dimensions would you include?

**Situation:**  
Leadership needs a global view without drowning in operational detail.

**Task:**  
Design an executive-level analytics layer.

**Action:**  
I would include:
- onboarding volume;
- completion rate;
- median completion time;
- Day-1 readiness;
- cancellation/no-show rate;
- compliance exceptions;
- integration failures;
- country/business-unit variance;
- trend over time.

I would allow drill-down to country, business unit, process variant, and exception category.

**Result:**  
Executives see strategic trends while operational teams can drill into root causes.

**Architect signal:** **Progressive disclosure** — summary first, diagnosis second.

---

## Q10. How would you reconcile an Onboarding report with Employee Central employee counts?

**Situation:**  
Onboarding reports 1,000 completed processes but EC shows only 980 employees.

**Task:**  
Identify the 20-record discrepancy.

**Action:**  
I would define the population and time window, then reconcile using stable identifiers such as person ID/user ID where appropriate. I would classify differences into cancellation, failure, duplicate, rehire, internal hire, pending hire, or timing mismatch.

**Result:**  
The organization gets a controlled reconciliation rather than assuming either report is wrong.

**Architect signal:** Analytics needs **reconciliation rules and population definitions**.

---

## Q11. A country reports unusually high onboarding cancellations. How would you investigate?

**Situation:**  
Cancellation rate is materially higher in one country.

**Task:**  
Determine whether the cause is candidate behavior, process design, or data quality.

**Action:**  
I would segment cancellations by termination/cancellation reason, recruiter, hiring source, job family, location, process variant, start-date lead time, and integration status. I would compare trends and inspect the highest-contributing categories.

**Result:**  
The team can focus improvement on the actual cancellation drivers.

**Architect signal:** Use **Pareto-style segmentation**, not anecdotal explanations.

---

## Q12. How would you report onboarding integration failures?

**Situation:**  
IT wants to know which onboarding integrations are creating operational risk.

**Task:**  
Connect process analytics with integration telemetry.

**Action:**  
I would define integration success, error, retry, and reconciliation measures. I would use business keys and correlation IDs to connect the onboarding process to integration execution. For downstream extraction, SAP documents Integration Center use with the ONB2Process entity and fields such as process status and process ID. citeturn0search12

**Result:**  
IT can see both the technical failure and the affected onboarding business population.

**Architect signal:** **Technical telemetry must connect to business context.**

---

## Q13. The report contains duplicate new hires. How would you troubleshoot the analytics layer?

**Situation:**  
A Story or cross-domain report counts one new hire multiple times.

**Task:**  
Identify whether duplication is caused by the data model, joins, or process history.

**Action:**  
I would inspect the report grain first. A process can have multiple tasks, events, or related records, so joining at the wrong grain multiplies rows. I would define the intended grain—candidate, person, onboarding process, task, or event—and use appropriate aggregation/distinct business keys.

**Result:**  
The KPI becomes mathematically valid.

**Architect signal:** **Every metric needs an explicit grain.**

---

## Q14. How would you design a task-level analytics model?

**Situation:**  
HR wants to know which onboarding tasks cause delays.

**Task:**  
Measure task performance without confusing task volume with task risk.

**Action:**  
I would report task type, owner type, responsible group, process variant, due date, completion date, aging, overdue status, and start-date proximity. I would calculate median and percentile completion time where appropriate and compare task performance across populations.

**Result:**  
The organization can identify structural task bottlenecks.

**Architect signal:** Measure **task latency + business impact**, not only task counts.

---

## Q15. How would you secure an Onboarding analytics solution?

**Situation:**  
The data includes sensitive personal and employment information.

**Task:**  
Make analytics useful without exposing confidential data.

**Action:**  
I would apply least privilege, role-based access, appropriate target populations, domain-level restrictions, data minimization, and separation between operational and executive views. I would test both positive and negative access scenarios.

**Result:**  
Users see only the information necessary for their responsibilities.

**Architect signal:** Analytics security is part of the **data architecture**.

---

## Q16. How would you design analytics for internal hires and rehires?

**Situation:**  
The enterprise wants to compare external hires, internal hires, and rehires.

**Task:**  
Create comparable but semantically correct populations.

**Action:**  
I would define process-origin and employment-event dimensions before reporting. I would separate:
- external new hire;
- internal hire;
- rehire with new employment;
- rehire with old employment.

I would avoid treating all processes as identical because their identity and lifecycle semantics differ.

**Result:**  
Leadership gets meaningful comparisons without misleading aggregation.

**Architect signal:** **Business semantics precede visualization.**

---

## Q17. How would you create an analytics model for onboarding experience?

**Situation:**  
The organization wants to measure whether new hires experience a smooth onboarding journey.

**Task:**  
Translate experience into measurable indicators.

**Action:**  
I would combine:
- task completion before Day 1;
- number of overdue tasks;
- number of restarts;
- time to complete critical steps;
- access/equipment readiness;
- manager readiness;
- buddy participation;
- employee feedback where available.

I would clearly separate direct experience measures from operational proxies.

**Result:**  
The organization gets a more balanced view of onboarding quality.

**Architect signal:** **Don't confuse a proxy with the experience itself.**

---

## Q18. A report is slow and users complain about performance. How would you approach it?

**Situation:**  
A cross-domain report has become difficult to run at scale.

**Task:**  
Improve performance without sacrificing business accuracy.

**Action:**  
I would inspect:
- report grain;
- unnecessary domains;
- joins;
- filters;
- date ranges;
- calculated fields;
- aggregation;
- population size;
- scheduling requirements.

I would separate operational dashboards from heavy analytical workloads and use downstream extraction where a system-to-system data requirement exists.

**Result:**  
The reporting architecture becomes fit for scale rather than simply optimized through trial and error.

**Architect signal:** **Performance is an architecture property.**

---

## Q19. How would you establish an Onboarding analytics governance model?

**Situation:**  
Different HR teams publish conflicting "completion rate" numbers.

**Task:**  
Create a single trusted analytics language.

**Action:**  
I would establish a KPI dictionary containing:
- metric name;
- business definition;
- population;
- grain;
- numerator;
- denominator;
- time window;
- source;
- owner;
- refresh frequency;
- security classification.

I would establish change governance for definitions and report logic.

**Result:**  
HR, IT, and executives use consistent measures.

**Architect signal:** **One KPI definition, one owner, one semantic contract.**

---

## Q20. You are the Lead Onboarding Analytics Architect. Explain your complete reporting strategy.

**Situation:**  
A global enterprise wants executive, operational, compliance, integration, and experience analytics for Onboarding.

**Task:**  
Design an analytics ecosystem that turns process data into business decisions.

**Action:**

1. Define business questions before reports.
2. Establish KPI definitions and population semantics.
3. Identify the correct reporting grain.
4. Establish Onboarding as a governed analytical domain.
5. Use People Analytics Stories for current Onboarding analytics. SAP documents Stories as the supported reporting approach for Onboarding data. citeturn0search14
6. Use cross-domain reporting where Recruiting, Employee Profile, or other employee domains must be analyzed together. citeturn0search5
7. Use Integration Center for controlled downstream extraction where another system requires Onboarding data. SAP documents ONB2Process-based extraction for such scenarios. citeturn0search12
8. Separate executive, operational, compliance, and technical views.
9. Define process, task, compliance, integration, and experience KPIs.
10. Build drill-down from enterprise trend to individual exception where security permits.
11. Apply role-based access and data minimization.
12. Establish reconciliation with Recruiting and Employee Central.
13. Monitor data quality and refresh reliability.
14. Introduce leading indicators for start-date risk.
15. Establish governance for metric definitions.
16. Validate performance at enterprise scale.
17. Establish report ownership and lifecycle.
18. Measure whether insights produce corrective action and improved outcomes.

**Result:**  
The enterprise gets a trusted Onboarding analytics ecosystem that explains performance, identifies risk early, protects sensitive data, and converts insights into measurable process improvement.

**Architect signal:**

> **Measure the journey. Expose the risk. Explain the cause. Trigger the action. Prove the outcome.**

---

# 6. KPI Design Matrix

| KPI | Definition concept | Primary audience | Action |
|---|---|---|---|
| Completion Rate | Completed / eligible processes | Executive / HR | Monitor |
| Median Completion Time | Median process duration | HR Ops | Optimize |
| Overdue Task Rate | Overdue / active tasks | HR / Managers | Intervene |
| Day-1 Readiness | Critical prerequisites complete before start | HR / Manager | Escalate |
| Cancellation Rate | Cancelled / initiated population | Recruiting / HR | Diagnose |
| No-Show Rate | No-show / applicable population | HR | Investigate |
| Compliance Exception Rate | Exceptions / applicable hires | Compliance | Remediate |
| Integration Error Rate | Failed integrations / executions | IT | Resolve |
| Restart Rate | Restarted / active or eligible processes | HR/IT | Diagnose |
| Reconciliation Gap | Source vs target population difference | Architecture | Reconcile |
| Manager Overdue Rate | Overdue manager tasks / manager tasks | HR | Coach/process-fix |
| Process Aging | Current age vs lifecycle expectation | HR Ops | Prioritize |

---

# 7. Analytics Layers

## Layer 1 — Descriptive

**What happened?**

- volume
- completion
- cancellations
- task status

## Layer 2 — Diagnostic

**Why did it happen?**

- country
- manager
- task
- process variant
- integration
- compliance

## Layer 3 — Predictive

**What is likely to happen?**

- start-date risk
- overdue risk
- integration failure risk
- compliance delay risk

## Layer 4 — Prescriptive

**What should we do?**

- escalate manager
- correct data
- resolve integration
- restart/reassign
- prioritize compliance

## Layer 5 — Transformative

**What should we redesign?**

- process
- operating model
- task ownership
- integration architecture
- employee experience

---

# 8. Analytics Troubleshooting Master Loop

**QUESTION → POPULATION → GRAIN → SOURCE → JOIN → FILTER → CALCULATION → SECURITY → REFRESH → RECONCILIATION → ACTION**

### First questions

1. What business question is being answered?
2. What population is included?
3. What is the grain?
4. Which system owns the data?
5. Are joins multiplying records?
6. Are filters correct?
7. Is the denominator correct?
8. Is effective dating handled correctly?
9. Is security filtering the population?
10. Is the data current?
11. Does it reconcile with EC/Recruiting?
12. Does the insight lead to an action?

---

# 9. Data Quality Controls

### Completeness
Are mandatory analytical fields populated?

### Accuracy
Does the report reflect the source transaction?

### Consistency
Are the same definitions used across reports?

### Timeliness
Is the refresh frequency appropriate?

### Uniqueness
Are processes/people duplicated?

### Validity
Are codes and status values valid?

### Reconciliation
Do related domains agree?

### Security
Can the user see only permitted data?

---

# 10. Architecture Decision Records

### ADR-01 — Reporting Platform
Use the current SAP-supported reporting architecture for Onboarding data.

### ADR-02 — KPI Semantics
Every KPI has an explicit population, grain, numerator, denominator, and time window.

### ADR-03 — Cross-Domain Analytics
Use cross-domain reporting where the business question genuinely spans Recruiting, Onboarding, and employee data.

### ADR-04 — Operational Extraction
Use Integration Center or an approved integration architecture when another system needs Onboarding data.

### ADR-05 — Security
Analytics must enforce least privilege and data minimization.

### ADR-06 — Reconciliation
Critical metrics must be reconcilable to authoritative operational sources.

### ADR-07 — Performance
Heavy analytical workloads must not degrade operational processes.

### ADR-08 — Governance
KPI definitions, report ownership, refresh expectations, and lifecycle are governed artifacts.

---

# 11. Quality Gates

- [ ] Business question documented.
- [ ] Population documented.
- [ ] Grain documented.
- [ ] KPI definition approved.
- [ ] Source of truth documented.
- [ ] Cross-domain joins validated.
- [ ] Duplicate analysis completed.
- [ ] Effective dating tested.
- [ ] Security tested.
- [ ] Negative access tests completed.
- [ ] Reconciliation completed.
- [ ] Refresh frequency defined.
- [ ] Performance tested.
- [ ] Executive view separated from operational view.
- [ ] Compliance data minimized.
- [ ] Integration metrics correlated to business processes.
- [ ] Exception drill-down available.
- [ ] Report owner assigned.
- [ ] KPI owner assigned.
- [ ] Change governance established.

---

# 12. Anti-Patterns

### ❌ Dashboard first, question later
Creates attractive but useless reporting.

### ❌ KPI without a definition
Different teams calculate different numbers.

### ❌ Ignoring grain
Produces duplicate counts.

### ❌ Completion rate as the only KPI
Hides Day-1 readiness and risk.

### ❌ Exposing sensitive onboarding data broadly
Creates privacy and security risk.

### ❌ Mixing operational extraction with analytics
Creates the wrong architecture for the requirement.

### ❌ No reconciliation
Allows silent data divergence.

### ❌ No drill-down
Shows a problem without enabling diagnosis.

### ❌ No action owner
Creates passive analytics.

### ❌ Optimizing visuals instead of semantics
A beautiful wrong KPI is still wrong.

---

# 13. Rapid-Fire Interview Answers

**What is the current reporting path for Onboarding data?**  
Stories in People Analytics. citeturn0search14

**Can legacy Table/Canvas/Dashboards/Tiles report directly on current Onboarding data?**  
SAP's current documentation says those legacy tools don't have access to the Onboarding data schema. citeturn0search14

**Can Onboarding be reported with Recruiting?**  
Yes, SAP documents Onboarding cross-domain reporting. citeturn0search5

**What is ONB2Process useful for?**  
It can be used as an Integration Center reporting/extraction entity for Onboarding process data. citeturn0search12

**Most important reporting concept?**  
Define the grain before calculating the KPI.

**Completion rate tells you?**  
Whether a defined population completed a defined process—not whether onboarding was successful.

**Best leading indicator?**  
Start-date risk based on incomplete critical work and time remaining.

**Why reconcile?**  
To prove analytical results agree with authoritative operational data.

**Why cross-domain reporting?**  
To answer lifecycle questions that span Recruiting, Onboarding, and employee data.

**What makes analytics architecture mature?**  
It turns data into decisions and decisions into measurable outcomes.

---

# 14. Final Master Interview Answer

> "I design Onboarding reporting as an analytics architecture rather than a collection of dashboards. I begin with the business question, define the population and grain, identify the source of truth, and only then select the reporting mechanism.
>
> For current SAP SuccessFactors Onboarding, I use People Analytics Stories for Onboarding analytics because SAP documents Stories as the supported reporting approach for the Onboarding data schema. Where the business question spans Recruiting, Onboarding, Employee Profile, or other employee domains, I use the appropriate cross-domain reporting capability.
>
> I separate descriptive, diagnostic, predictive, and prescriptive analytics. Descriptive reporting tells us how many processes completed. Diagnostic analytics tells us which country, manager, task, compliance step, or integration is creating delay. Leading indicators identify processes likely to miss Day 1. Prescriptive analytics creates an action queue.
>
> I define every KPI with a population, grain, numerator, denominator, time window, owner, source, and refresh expectation. I pay particular attention to effective dating and duplicate records because Onboarding contains processes, tasks, events, and related employee information that can easily multiply records in a report.
>
> I also distinguish analytics from downstream data extraction. If another application needs Onboarding data, I use the appropriate integration architecture rather than treating a dashboard as an interface.
>
> Security is part of the design. Compliance and personal data require least privilege and data minimization. Finally, every important metric must reconcile to authoritative operational data and lead to a clear business action.
>
> My guiding principle is: **measure the journey, expose the risk, explain the cause, trigger the action, and prove the outcome.**"

---

# 15. SuccessLabs Mastery Lens

## KNOW
Understand Onboarding process data, People Analytics, cross-domain reporting, KPI semantics, and data governance.

## DESIGN
Design analytical domains, KPI models, security, drill-down, reconciliation, and performance architecture.

## DELIVER
Build Stories, cross-domain reports, operational extracts, KPI views, and exception dashboards.

## SOLVE
Diagnose incorrect counts, slow reports, missing records, security filtering, duplicate joins, and reconciliation gaps.

## INFLUENCE
Align HR, Recruiting, Compliance, IT, managers, and executives around one analytical language.

## TRANSFORM
Convert onboarding telemetry into predictive, prescriptive, and continuously improving employee-lifecycle intelligence.

---

# 16. 22-Pahacha Coverage

| Pahacha | Reporting & Analytics mastery |
|---|---|
| 01 Domain Foundation | Onboarding lifecycle analytics |
| 02 Product & Technology Knowledge | People Analytics + Onboarding |
| 03 Business Process & Operating Context | Hiring-to-Day-1 measurement |
| 04 Data & Information Model | Analytical data model |
| 05 Requirement Analysis | Business questions & KPI requirements |
| 06 Solution Design Awareness | Reporting architecture |
| 07 Configuration / Development Awareness | Stories, filters, calculated measures |
| 08 Architecture & Integration Awareness | Cross-domain + extraction |
| 09 Implementation Awareness | Report delivery |
| 10 Migration & Data Readiness | Historical/transition data |
| 11 Testing & Quality Awareness | KPI validation |
| 12 Release, Adoption & Support | Analytics operations |
| 13 Troubleshooting Mindset | Data lineage diagnosis |
| 14 Incident & Defect Awareness | Incorrect/late analytics |
| 15 Complex Scenario Thinking | Grain, joins, effective dating |
| 16 Optimization & Continuous Improvement | Leading indicators |
| 17 Stakeholder Management | Executive/HR/IT alignment |
| 18 Communication & Collaboration | KPI semantic contract |
| 19 Advisory & Trusted SME | Analytics architecture |
| 20 Automation, AI & Intelligent Products | Predictive/prescriptive insights |
| 21 Transformation & Business Value | Better Day-1 readiness |
| 22 Strategic Mastery & Future Vision | Workforce lifecycle intelligence |

---

# 17. SuccessLabs Architecture Streams

1. **Enterprise Architect** — analytics governance
2. **Business Architect** — business KPI and operating model
3. **Integration Architect** — operational extraction and telemetry
4. **Domain Architect** — employee lifecycle analytics
5. **Cloud & Infrastructure Architect** — scalable analytics platform
6. **Application & Process Architect** — process-performance analytics
7. **AI Architect** — predictive/prescriptive onboarding risk
8. **Security Architect** — analytical data protection
9. **Industry Architect** — country-specific workforce metrics
10. **Data Architect** — semantic model, lineage, grain
11. **UI/UX Architect** — executive and operational analytics experience
12. **Technology Architect** — reporting platform and integration technology

---

# 18. Master Analytics Loop

**ASK → DEFINE → MODEL → MEASURE → SEGMENT → EXPLAIN → PREDICT → ACT → RECONCILE → IMPROVE**

This is the core mental model for senior SAP SuccessFactors Onboarding Reporting & Analytics interviews.

---

## SAP Source Alignment

- SAP SuccessFactors Onboarding implementation documentation — current reporting limitation and People Analytics Stories approach. citeturn0search14
- SAP Help — **How to Create an Onboarding Cross Domain Report**, including Onboarding + Recruiting + Employee Profile/employee domains. citeturn0search5
- SAP Help — **Setting Up Integration Center Report for Learning Integration**, documenting ONB2Process extraction fields and filtering. citeturn0search12
- SAP Help — **Integration of SmartRecruiters with Onboarding for Internal Hires**, including reporting through Stories, Integration Center, and OData APIs using the Process Trigger object. citeturn0search2
- SAP Best Practices 1H 2026 — current Onboarding Dashboard enhancements. citeturn0search0
- SAP SuccessFactors Reporting and Analytics Directory 1H 2026 — current analytics/reporting reference. citeturn0search13

**Interview mantra:**

> **Measure the journey. Expose the risk. Explain the cause. Trigger the action. Prove the outcome.**

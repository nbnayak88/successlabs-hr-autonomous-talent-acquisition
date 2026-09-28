# SAP SuccessFactors Recruiting Management (RCM) — SCALE Interview Preparation

## Step 17 — Recruiting Reporting & Analytics

**Objective:** Design pipeline, requisition, source, referral, time-to-fill and broader recruiting reporting and analytics that turn RCM data into trustworthy hiring decisions.

> **Interview mindset:** Reporting is not simply “build a report.” Start with the decision the business needs to make, define the metric mathematically, identify the authoritative source fields, establish time and population logic, enforce security, validate data quality, and make the result actionable.

---

# 1. Recruiting Analytics Architecture Lens

```text
                         BUSINESS QUESTIONS
                                │
        ┌───────────────────────┼────────────────────────┐
        ▼                       ▼                        ▼
   EXECUTIVE VIEW         RECRUITER VIEW          HIRING MANAGER
        │                       │                        │
        └───────────────────────┼────────────────────────┘
                                ▼
                     METRIC / KPI DEFINITIONS
                                │
                                ▼
                   REPORTING DATA MODEL / CUBE
                                │
          ┌─────────────────────┼─────────────────────┐
          ▼                     ▼                     ▼
     REQUISITION            CANDIDATE             APPLICATION
          │                     │                     │
          ├──────────────┬──────┴───────┬────────────┤
          ▼              ▼              ▼            ▼
       SOURCE         REFERRAL       STATUS       OFFER/HIRE
          │              │              │            │
          └──────────────┴──────┬───────┴────────────┘
                                ▼
                         KPI CALCULATION
                                │
                                ▼
                     DASHBOARD / REPORT / ALERT
                                │
                                ▼
                      DECISION / ACTION / ROI
```

## Core architecture questions

1. What decision should the report enable?
2. What exactly is the KPI definition?
3. What is the grain: requisition, application, candidate, event or hire?
4. What is the authoritative source for every field?
5. What population and date logic apply?
6. How are statuses and dispositions treated?
7. What access restrictions apply?
8. How is the metric validated against source transactions?
9. How are historical changes handled?
10. What action should a user take from the insight?

---

# 2. Core Recruiting Analytics Domains

| Domain | Typical Questions |
|---|---|
| Requisition | How many open, aging or stalled requisitions exist? |
| Pipeline | How many candidates are at each stage? Where is the bottleneck? |
| Source | Which sources produce applicants, interviews, hires and quality outcomes? |
| Referral | Which referral channels contribute to successful hires? |
| Time-to-Fill | How long does it take from defined start event to accepted/filled outcome? |
| Time-in-Stage | Where are candidates waiting too long? |
| Conversion | What percentage progresses between lifecycle stages? |
| Offer | Offer acceptance, decline, aging and approval cycle |
| Recruiter | Workload, throughput, aging, SLA and outcome patterns |
| Hiring Manager | Approval/interview delays, requisition aging, feedback latency |
| Diversity / Inclusion | Where allowed and appropriately governed, monitor process outcomes by approved demographic dimensions |
| Candidate Experience | Application completion, withdrawal and process friction |
| Agency | Submissions, quality, conversion and hire contribution |
| Interview | Interview volume, completion and feedback turnaround |
| Quality of Hire | Where downstream employee data exists and methodology is approved |
| Cost / ROI | Source and campaign efficiency |
| Forecasting | Expected hiring volume, pipeline sufficiency and capacity |

---

# 3. Scenario-Based Interview Questions — 20 Deep Scenarios

## Scenario 1 — Executive Pipeline Dashboard

**Question:** The CHRO wants a dashboard showing the entire recruiting pipeline. How would you design it?

### STAR Answer

**Situation:** Leadership had multiple reports but no consistent view of recruiting flow.

**Task:** Create a single decision-oriented pipeline view.

**Action:** I would first define the reporting grain and lifecycle stages. I would distinguish requisition-level, application-level and candidate-level metrics. Then I would create stage counts, stage conversion, aging, open requisitions, pending approvals, interview backlog, offer pipeline and hires. I would document inclusion/exclusion rules and validate the counts against controlled sample populations.

**Result:** Leaders can see where hiring demand and pipeline constraints exist.

**Learning:** A dashboard becomes useful when every metric has a defined business meaning and action.

**Evidence:** KPI dictionary, data model, reconciliation workbook and signed dashboard acceptance criteria.

---

## Scenario 2 — Time-to-Fill Definition

**Question:** The business says “time-to-fill” differently in every country. What do you do?

### STAR Answer

**Situation:** One team measured from requisition creation; another measured from approval; another from job posting.

**Task:** Establish a governed enterprise metric.

**Action:** I would define the start event, end event, treatment of pauses, canceled requisitions, evergreen requisitions, internal moves and reopened requisitions. I would document the formula and maintain local variants only where a legitimate business or regulatory distinction exists.

**Result:** Time-to-fill becomes comparable where definitions truly align.

**Learning:** A KPI is a business contract, not just a calculated field.

---

## Scenario 3 — Source Effectiveness

**Question:** Marketing says Job Board A is the best source because it creates the most applicants. Recruiting says Source B is better because it produces more hires. How do you resolve the conflict?

### STAR Answer

**Situation:** Teams optimized different funnel points.

**Task:** Build a source-performance framework.

**Action:** I would compare volume, qualified applicants, interview conversion, offer conversion, hire conversion, time-to-fill and cost where cost data is available. I would distinguish source attribution from campaign attribution and make the denominator explicit.

**Result:** Stakeholders see source performance across the full funnel instead of optimizing one stage.

**Learning:** High volume does not automatically mean high recruiting value.

---

## Scenario 4 — Referral Analytics

**Question:** How would you design employee referral reporting?

### STAR Answer

**Situation:** Referral activity was high, but leadership could not see its contribution to hiring outcomes.

**Task:** Measure referral funnel effectiveness and attribution.

**Action:** I would report referrals received, unique referred candidates, referred applications, interview progression, offers, hires, time-to-hire and referral-to-hire conversion. I would also define ownership and attribution rules for candidates who were already known or who applied through multiple channels.

**Result:** Referral performance is visible from entry through outcome.

**Learning:** Referral reporting requires attribution logic, not just a count of referrals.

---

## Scenario 5 — Requisition Aging Dashboard

**Question:** Recruiters need a dashboard of requisitions that are stuck.

### STAR Answer

**Situation:** Aging requisitions were reviewed manually.

**Task:** Surface actionable bottlenecks.

**Action:** I would define age from an approved start event, segment by status, priority, business unit, recruiter and hiring manager, and flag thresholds. I would distinguish recruiting delay from approval, interview or hiring-manager delay.

**Result:** Users can act on the reason for aging instead of just seeing a large number.

**Learning:** The best analytics explains where action is required.

---

## Scenario 6 — Report Shows Different Numbers for Different Users

**Question:** Two recruiters run the same report and receive different counts. What is your troubleshooting path?

### STAR Answer

**Situation:** Security-filtered reporting produced different populations.

**Task:** Determine whether the difference is expected or a reporting defect.

**Action:** I would compare role permissions, target populations, filters, effective dates, report-specific criteria and whether both users are seeing the same operational population. I would validate with an admin/test user and controlled sample records.

**Result:** We distinguish security behavior from data/reporting defects.

**Learning:** Different report counts are not automatically a data-quality issue; visibility must be analyzed first.

---

## Scenario 7 — Recruiting V2 / Modern Reporting Security

**Question:** How would you handle reporting access when modern Recruiting reporting capabilities use role-based visibility?

### STAR Answer

**Situation:** Business users needed analytics without exposing candidates or requisitions outside their population.

**Task:** Design reporting access without weakening operational security.

**Action:** I would review the current tenant's supported reporting model and permissions, establish least-privilege roles, separate executive aggregate access from recruiter operational access and test both positive and negative visibility scenarios.

SAP documentation indicates that reporting access can be constrained by permissions, so analytics design must be treated as part of the RBP/security model rather than as a separate concern. citeturn500100search0turn500100search1

**Result:** Users can access the analytics required for their role without broad candidate visibility.

**Learning:** Reporting authorization is part of enterprise data governance.

---

## Scenario 8 — Funnel Conversion Falls Between Stages

**Question:** Applications are high but interview conversion has dropped sharply. How do you investigate?

### STAR Answer

**Situation:** Top-of-funnel volume remained strong while downstream conversion declined.

**Task:** Find the process bottleneck.

**Action:** I would segment by requisition, source, country, job family, recruiter and time period. I would check status definitions, knockout questions, screening criteria and candidate mix. I would distinguish a real process change from a reporting-definition change.

**Result:** The business can identify whether the issue is sourcing quality, screening design, process friction or data logic.

**Learning:** Funnel analytics needs segmentation, not just aggregate percentages.

---

## Scenario 9 — Offer Acceptance Analytics

**Question:** Offer acceptance is declining. What metrics do you inspect?

### STAR Answer

**Situation:** Leaders saw a decline in accepted offers.

**Task:** Determine where the offer journey changed.

**Action:** I would inspect offer volume, approval time, time-to-offer, decline rate, compensation/role segment where appropriately governed, geography, source, recruiter, hiring manager, offer template and time period. I would also check whether decline reasons are consistently captured.

**Result:** Analysis moves from “acceptance is down” to measurable contributing dimensions.

**Learning:** Diagnostic analytics connects an outcome to controllable drivers.

---

## Scenario 10 — Time-in-Stage

**Question:** How would you report candidate time spent in each recruiting stage?

### STAR Answer

**Situation:** Overall time-to-fill was high, but the business did not know where candidates were waiting.

**Task:** Expose stage-level latency.

**Action:** I would model lifecycle transitions and timestamps, define when a stage begins and ends, handle backward movement carefully, exclude or separately report terminal stages, and calculate median and percentile measures in addition to averages.

**Result:** The team sees actual process bottlenecks.

**Learning:** Median and percentile measures often reveal skew hidden by averages.

---

## Scenario 11 — Requisition Funnel vs Candidate Funnel

**Question:** Why should you not mix requisition-level and application-level metrics?

### STAR Answer

**Situation:** A dashboard showed requisitions, candidates and applications in the same denominator.

**Task:** Correct the analytical grain.

**Action:** I would define each metric at its natural grain. Requisition metrics describe hiring demand; application metrics describe candidate progression; candidate metrics describe unique people. I would provide separate cards or visual layers and only combine them through clearly defined relationships.

**Result:** Users stop interpreting one application as one unique candidate.

**Learning:** Grain errors are one of the most common causes of misleading recruiting analytics.

---

## Scenario 12 — Candidate Experience Analytics

**Question:** How would you identify candidate experience friction using RCM data?

### STAR Answer

**Situation:** Candidate feedback suggested delays and process complexity.

**Task:** Turn the recruiting process into measurable experience signals.

**Action:** I would measure application abandonment, time to first contact, time in each stage, interview scheduling delay, feedback delay, candidate withdrawals, repeated status changes and notification failures. I would segment by channel, role family and geography.

**Result:** Experience friction becomes observable.

**Learning:** Candidate experience can be analyzed as journey telemetry.

---

## Scenario 13 — Recruiter Productivity

**Question:** How would you measure recruiter performance without encouraging unhealthy behavior?

### STAR Answer

**Situation:** Leadership wanted to rank recruiters by number of hires.

**Task:** Build a balanced operational view.

**Action:** I would avoid a single productivity metric and use workload, requisition complexity, aging, throughput, stage conversion, SLA adherence, hiring outcomes and data quality. I would use the dashboard primarily for capacity and process improvement rather than simplistic ranking.

**Result:** The analytics reflects both work complexity and business outcomes.

**Learning:** Metrics shape behavior; choose them carefully.

---

## Scenario 14 — Hiring Manager Bottleneck

**Question:** Hiring managers complain that recruiting is slow, while recruiters say managers delay interviews and feedback. How do you make this measurable?

### STAR Answer

**Situation:** Responsibility for delay was disputed.

**Task:** Replace opinion with stage-level evidence.

**Action:** I would measure requisition approval time, interview scheduling time, feedback turnaround, pending manager actions, offer approval time and time between recruiter and manager handoffs. I would maintain a common timestamp model.

**Result:** Both teams can see where delay occurs.

**Learning:** Shared metrics reduce argument when event definitions are trusted.

---

## Scenario 15 — Forecasting Hiring Demand

**Question:** How would you use RCM analytics to forecast whether pipeline is sufficient for upcoming hiring demand?

### STAR Answer

**Situation:** Leadership had quarterly hiring targets but did not know whether the pipeline could support them.

**Task:** Connect demand to pipeline capacity.

**Action:** I would combine approved/open requisitions, target hires, current application funnel, stage conversion rates, historical time-to-fill and expected capacity. I would build scenario ranges rather than a single deterministic forecast.

**Result:** Recruiting leaders can identify pipeline gaps earlier.

**Learning:** Forecasting is only as useful as the assumptions behind it.

---

## Scenario 16 — Source Attribution Conflict

**Question:** A candidate first entered through an agency but later applied directly. Which source gets the hire?

### STAR Answer

**Situation:** Multiple channels claimed the same candidate.

**Task:** Establish a defensible attribution model.

**Action:** I would define first-touch, last-touch and primary-source rules, distinguish referral and agency attribution from applicant source where appropriate, and document precedence for multi-touch journeys.

**Result:** Reporting becomes consistent and disputes become manageable.

**Learning:** Attribution is a business rule, not an accidental report field.

---

## Scenario 17 — Historical Reporting Changes

**Question:** The organization changes its recruiting lifecycle. How do you prevent historical dashboards from changing meaning unexpectedly?

### STAR Answer

**Situation:** A new status model replaced an older recruiting process.

**Task:** Preserve historical analytical integrity.

**Action:** I would version metric definitions, record effective dates, maintain mapping logic between old and new lifecycle models and avoid silently applying new definitions to historical transactions unless explicitly intended.

**Result:** Historical trends remain interpretable.

**Learning:** Analytics needs semantic versioning.

---

## Scenario 18 — Data Quality Problem in Analytics

**Question:** Source and referral dashboards show inconsistent totals. What do you investigate?

### STAR Answer

**Situation:** Different reports counted the same candidates differently.

**Task:** Identify the analytical root cause.

**Action:** I would compare report grain, joins, filters, null handling, source attribution rules, duplicate applications and security scope. I would validate the results with a controlled sample and trace each KPI back to source fields.

**Result:** The organization gets one trusted metric definition.

**Learning:** Analytics defects frequently originate in data-model assumptions rather than visualization.

---

## Scenario 19 — Executive Dashboard Design

**Question:** What should a CHRO see versus a recruiter?

### STAR Answer

**Situation:** The same dashboard was used by executives and operational teams.

**Task:** Design role-specific analytical experiences.

**Action:** For executives, I would emphasize hiring demand, funnel health, time-to-fill, offer acceptance, workforce segment trends and source effectiveness. For recruiters, I would emphasize actionable requisitions, pipeline aging, next actions, stage bottlenecks and SLA. For hiring managers, I would emphasize pending decisions, candidate progression and time-sensitive actions.

**Result:** Analytics becomes aligned to decisions rather than overloaded with metrics.

**Learning:** Dashboard design should follow the user's decision horizon.

---

## Scenario 20 — End-to-End Recruiting Analytics Model

**Question:** Design your complete RCM analytics strategy.

### STAR Answer

**Situation:** An enterprise wants a single recruiting analytics framework spanning demand, pipeline, sourcing, referrals, offers, hiring and operations.

**Task:** Establish a scalable analytical operating model.

**Action:** I would start with a KPI catalog and semantic model. I would define grain, source-of-truth, timestamps, lifecycle rules, attribution, security and historical versioning. Then I would build domain dashboards for requisitions, pipeline, sourcing, referrals, interviews, offers, recruiter operations and executive outcomes. I would reconcile the dashboards against source transactions, establish data-quality controls and publish a governance model for metric changes.

**Result:** Recruiting leaders receive consistent, decision-oriented intelligence across the hiring value stream.

**Learning:** The architecture of analytics is the architecture of business meaning.

---

# 4. KPI Dictionary

## Pipeline

**Pipeline Volume**

```
Count of applications or candidates meeting the defined pipeline population criteria
```

**Stage Conversion Rate**

```
records entering next stage ÷ records entering prior stage × 100
```

**Offer Conversion**

```
offers accepted ÷ offers issued × 100
```

**Hire Conversion**

```
hires ÷ defined upstream population × 100
```

---

## Requisition

**Open Requisitions**

```
Count of requisitions satisfying the approved open-status population
```

**Requisition Aging**

```
current analysis date − governed requisition start date
```

**Aging by Threshold**

Examples:

- 0–30 days
- 31–60 days
- 61–90 days
- 90+ days

> Thresholds should be adapted to the recruiting operating model.

---

## Time-to-Fill

A governed definition should specify:

```
START EVENT → PAUSE RULES → END EVENT
```

Possible events include:

- requisition approved
- requisition posted
- candidate selected
- offer accepted
- position filled

Do not mix definitions in one KPI.

---

## Time-to-Hire

Define separately from time-to-fill if the organization distinguishes the candidate journey from the requisition journey.

For example:

```
candidate enters governed hiring process
            →
candidate accepts offer
```

The exact business definition must be documented before implementation.

---

# 5. Analytics Grain Model

| Grain | Example Metric | Common Risk |
|---|---|---|
| Candidate | Unique candidates | Duplicate identities |
| Application | Stage conversion | One candidate may have multiple applications |
| Requisition | Open requisitions | One requisition may contain many applications |
| Event | Status transition | Repeated transitions |
| Offer | Acceptance rate | Multiple offer versions |
| Hire | Hire conversion | Linking hire back to recruiting source |
| Interview | Feedback turnaround | Multiple interviews per application |

**Golden rule:**

> **Never calculate a KPI until its grain is explicitly defined.**

---

# 6. Analytics Data Model

```text
DIMENSION TABLES
──────────────────────────────
Date
Candidate
Job
Location
Organization
Recruiter
Hiring Manager
Source
Referral
Agency
Country
Job Family
──────────────────────────────
             │
             ▼
FACTS / EVENTS
──────────────────────────────
Requisition
Application
Status Transition
Interview
Assessment
Offer
Hire Event
──────────────────────────────
             │
             ▼
        KPI SEMANTICS
             │
             ▼
       REPORT / DASHBOARD
```

---

# 7. Source & Attribution Model

A robust analytics model should distinguish:

- Candidate source
- Application source
- First-touch source
- Last-touch source
- Referral source
- Agency source
- Campaign/source code
- Posting channel

Do not collapse these into a single “source” field without an explicit business definition.

---

# 8. Reporting Security Model

Analytics should inherit or deliberately govern:

- Candidate visibility
- Requisition visibility
- Recruiter target populations
- Hiring-manager access
- Sensitive compensation information
- Personal data
- Country-specific visibility
- Executive aggregate views

### Security test cases

1. Recruiter sees only authorized recruiting populations.
2. Hiring manager sees authorized requisitions/candidates.
3. Executive sees approved aggregate metrics.
4. Sensitive candidate fields remain restricted.
5. Cross-country visibility follows approved rules.
6. Unauthorized users cannot bypass security through reports.

---

# 9. Data Quality Framework for Analytics

Before publishing a KPI, validate:

| Dimension | Example |
|---|---|
| Completeness | Missing source or status |
| Validity | Invalid status code |
| Consistency | Requisition says filled while application is still active |
| Uniqueness | Duplicate candidate identities |
| Referential integrity | Application without requisition |
| Timeliness | Delayed data refresh |
| Semantic accuracy | Incorrect status meaning |
| Security | Unauthorized visibility |

---

# 10. Reporting Validation Strategy

## Reconcile from the transaction level

For every major KPI:

```KPI
↓
Report filter
↓
Source fields
↓
Business rules
↓
Sample records
↓
Expected result
```

### Validation methods

- Known-record validation
- Boundary-date testing
- Null-value testing
- Duplicate testing
- Security testing
- Cross-report reconciliation
- Historical-period comparison
- Volume testing

---

# 11. Dashboard Design Patterns

## Executive Dashboard

**Decision horizon:** strategic

Recommended areas:

- Hiring demand
- Open requisitions
- Pipeline health
- Time-to-fill trend
- Offer acceptance
- Source effectiveness
- Regional/business-unit trends
- Forecast vs target

## Recruiting Operations Dashboard

**Decision horizon:** daily/weekly

Recommended areas:

- Aging requisitions
- Candidate stage aging
- Pending actions
- Interview backlog
- Offer aging
- Recruiter workload
- SLA breaches

## Hiring Manager Dashboard

**Decision horizon:** immediate hiring actions

Recommended areas:

- Pending approvals
- Candidates awaiting feedback
- Upcoming interviews
- Requisition progress
- Offer decisions

---

# 12. Advanced Analytics Opportunities

Once the foundation is trusted, extend into:

### Funnel analytics

Where candidates drop out.

### Bottleneck analytics

Where elapsed time accumulates.

### Cohort analytics

Compare candidates/requisitions by month, quarter, source or job family.

### Capacity analytics

Recruiter workload versus active requisition demand.

### Predictive analytics

Where appropriate, estimate pipeline sufficiency, expected time-to-fill or likely process delays using governed data science methods.

### Prescriptive analytics

Recommend next actions such as escalating stalled approvals or reallocating recruiting capacity based on approved business rules.

> Advanced analytics should come after metric definitions and data quality are stable.

---

# 13. Common Reporting Anti-Patterns

### Anti-pattern 1 — “One dashboard for everyone”

**Correction:** Design around decision roles.

### Anti-pattern 2 — KPI without definition

**Correction:** Publish a KPI dictionary.

### Anti-pattern 3 — Mixing grains

**Correction:** Separate candidate, application, requisition and event-level measures.

### Anti-pattern 4 — Counting records without attribution rules

**Correction:** Establish source/referral/agency attribution logic.

### Anti-pattern 5 — Average-only time metrics

**Correction:** Use median and percentiles where useful.

### Anti-pattern 6 — Ignoring security

**Correction:** Treat reporting access as part of the RBP/data-governance design.

### Anti-pattern 7 — Changing a formula silently

**Correction:** Version metric definitions and effective dates.

### Anti-pattern 8 — Dashboard without action

**Correction:** Tie every KPI to a decision or operational response.

### Anti-pattern 9 — Treating technical refresh success as business data quality

**Correction:** Reconcile business counts and sample transactions.

### Anti-pattern 10 — Jumping to AI before trusted data

**Correction:** Stabilize semantics, lineage and quality first.

---

# 14. Reporting Governance Model

## KPI Owner

Owns the business meaning.

## Data Owner

Owns source-data quality.

## Report Owner

Owns implementation and usability.

## Security Owner

Owns visibility and access controls.

## Analytics Product Owner

Owns backlog, adoption and evolution.

## Change Control

Every material metric change should document:

- Old definition
- New definition
- Reason
- Effective date
- Impacted reports
- Historical treatment
- Business approval

---

# 15. Analytics Operating KPIs

Measure the reporting service itself:

| KPI | Purpose |
|---|---|
| Dashboard adoption | Usage |
| Data refresh success | Reliability |
| Data freshness | Timeliness |
| Reconciliation defect rate | Trust |
| Report defect rate | Quality |
| KPI definition disputes | Semantic governance |
| Unauthorized-access incidents | Security |
| Time to resolve analytics defects | Operations |
| User satisfaction | Experience |

---

# 16. SME Signals to Listen For

A strong RCM reporting architect should naturally discuss:

- Candidate versus application versus requisition grain
- Pipeline conversion
- Requisition aging
- Source and referral attribution
- Time-to-fill versus time-to-hire
- Time-in-stage
- Offer acceptance
- Recruiter and hiring-manager operational analytics
- Candidate experience signals
- KPI definitions and semantic governance
- RBP/security
- Data reconciliation
- Historical definition/version control
- Executive versus operational dashboards
- Data quality before advanced analytics

SAP's recruiting documentation includes standard reporting concepts such as pipeline, requisition, source and time-to-fill reporting; current tenant capabilities and report types should be validated before designing a production reporting catalogue. citeturn500100search2

---

# 17. Rapid-Fire Interview Answers

**Q1. What is the first question before building a report?**  
**A:** What decision should this report improve?

**Q2. What is the most common analytics mistake?**  
**A:** Mixing data grain.

**Q3. Time-to-fill starts when?**  
**A:** Only after the organization explicitly defines the start event.

**Q4. Why is source attribution difficult?**  
**A:** Candidates can interact with multiple recruiting channels.

**Q5. What is a KPI dictionary?**  
**A:** A governed catalogue defining formula, grain, population, source and owner.

**Q6. Why do two reports show different counts?**  
**A:** Grain, filters, security, joins, date logic or metric definitions may differ.

**Q7. What is time-in-stage?**  
**A:** Elapsed time between governed lifecycle transitions.

**Q8. Average or median for time-to-fill?**  
**A:** Use the measure appropriate to the distribution; median and percentiles can expose skew better than average alone.

**Q9. When should AI enter recruiting analytics?**  
**A:** After semantics, lineage, security and data quality are trusted.

**Q10. What proves a dashboard is trusted?**  
**A:** Reconciled metrics, documented definitions, validated access and consistent results.

---

# 18. Final Master Answer

> “When I design SAP SuccessFactors Recruiting analytics, I start with decisions, not charts. I define the business question, KPI formula, grain, population, time logic and source of truth before selecting a reporting mechanism. I separate requisition, candidate, application, event and offer analytics so that denominators remain meaningful. For pipeline reporting, I measure stage volume, conversion and aging. For requisition reporting, I track demand, status and time-to-fill. For source and referral analytics, I define attribution rules and follow the funnel through to interview, offer and hire outcomes. For time metrics, I explicitly define start and end events and distinguish time-to-fill from time-to-hire and time-in-stage. I then apply security, validate the metrics against transaction-level evidence, reconcile reports, govern definition changes and design role-specific experiences for executives, recruiters and hiring managers. My goal is not to produce more dashboards; it is to create trusted recruiting intelligence that helps people decide what to do next.”

---

# 19. Master Analytics Loop

**BUSINESS DECISION**  
↓  
**QUESTION**  
↓  
**KPI DEFINITION**  
↓  
**GRAIN**  
↓  
**POPULATION**  
↓  
**TIME / EVENT LOGIC**  
↓  
**SOURCE OF TRUTH**  
↓  
**DATA MODEL**  
↓  
**ATTRIBUTION RULES**  
↓  
**SECURITY**  
↓  
**CALCULATION**  
↓  
**VALIDATION**  
↓  
**RECONCILIATION**  
↓  
**DASHBOARD / REPORT**  
↓  
**ACTION**  
↓  
**MEASURE**  
↓  
**IMPROVE**

---

## Interviewer's 30-Second Analytics Summary

> **“I treat recruiting reporting as a governed analytics product. I define the decision, metric, grain, population and source first; separate candidate, application and requisition measures; establish attribution and time-event rules; apply security; reconcile metrics to source transactions; and create role-specific dashboards tied to action. The outcome is not a collection of charts—it is a trusted recruiting decision system.”**

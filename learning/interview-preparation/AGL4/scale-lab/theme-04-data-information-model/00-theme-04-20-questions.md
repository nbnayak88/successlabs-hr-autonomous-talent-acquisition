# AGL4 — Applied SAP SuccessFactors Succession & Development
# Theme 04 — Data & Information Model

## 20 Scenario-Based Interview Questions & STAR Answers

**Stream:** AGL4 — Applied SAP SuccessFactors Succession & Development  
**Theme:** 04 — Data & Information Model  
**Target:** 20 unique scenario-based interview questions  
**Answer method:** STAR — Situation → Task → Action → Result  
**Product posture:** Data-first, governance-led, architecture-aware.

---

## HR-AGL4-B04-Q01 — Defining the Succession Data Model

### Interview Question
You are asked to design the data model for enterprise succession planning. What core information would you identify?

### STAR Answer
**Situation:** The client maintained succession information across spreadsheets, HR systems, and local talent files.

**Task:** I needed to establish a coherent enterprise information model.

**Action:** I identified critical positions, incumbents, successors, readiness, talent profiles, potential, talent pools, development objectives, career aspirations, role requirements, and succession risk as core concepts. I then separated these from supporting employee and organizational master data.

**Result:** The organization gained a clear information foundation for succession planning and analytics.

### SAP SuccessFactors Succession & Development Example
I would use Succession & Development for succession-specific talent information while consuming authoritative employee and organizational information from the appropriate HR source.

### SME Probe
Which succession objects should not become duplicate employee master data?

---

## HR-AGL4-B04-Q02 — Position versus Person

### Interview Question
Why is it important to distinguish a critical position from the employee currently occupying it?

### STAR Answer
**Situation:** Succession plans were becoming invalid whenever incumbents changed.

**Task:** I needed to create an enduring representation of the business requirement.

**Action:** I modeled the position as the enduring succession object and treated the incumbent as a changing relationship. Successor candidates and readiness were evaluated against the position's requirements.

**Result:** Succession plans remained relevant through employee movement and organizational change.

### SAP SuccessFactors Succession & Development Example
Position-based succession planning can represent the enduring business role separately from its current incumbent.

### SME Probe
What happens to succession data if the incumbent leaves but the critical position remains?

---

## HR-AGL4-B04-Q03 — Role Requirements

### Interview Question
A successor is rated highly but lacks capabilities required for the target role. How would the data model expose this gap?

### STAR Answer
**Situation:** Talent decisions were based primarily on general employee assessments.

**Task:** I needed to compare successor capability with the requirements of the target position.

**Action:** I defined role requirements as explicit information and compared them with relevant talent attributes, experience, competencies, skills, and development gaps.

**Result:** Readiness became role-specific rather than a generic assessment of the employee.

### SAP SuccessFactors Succession & Development Example
Position and role information can be used alongside talent profile and development information to assess successor suitability.

### SME Probe
Why should readiness always be interpreted against a specific target role?

---

## HR-AGL4-B04-Q04 — Talent Profile Data

### Interview Question
What information should a talent profile provide for succession decisions?

### STAR Answer
**Situation:** Managers had incomplete views of potential successors.

**Task:** I needed to define the minimum useful talent profile.

**Action:** I identified relevant employment information, competencies, skills, experience, potential indicators, career aspirations, development information, and other governed talent attributes. I mapped each attribute to an authoritative source.

**Result:** Talent reviewers received a consistent and decision-relevant profile.

### SAP SuccessFactors Succession & Development Example
The SuccessFactors talent profile can consolidate relevant employee and talent information for succession and development decisions.

### SME Probe
Which attributes should be mandatory for a succession review?

---

## HR-AGL4-B04-Q05 — Potential versus Performance Data

### Interview Question
How would you model performance and potential so they are not treated as the same data concept?

### STAR Answer
**Situation:** The client was using performance scores as a proxy for future potential.

**Task:** I needed to preserve the semantic distinction between current contribution and future capability.

**Action:** I modeled performance-related information and potential assessment as distinct concepts, defined their ownership and assessment processes, and allowed talent review to consider both.

**Result:** Talent decisions became more nuanced and aligned to the intended business meaning of each measure.

### SAP SuccessFactors Succession & Development Example
Succession and talent review can consume performance-related information while maintaining separate talent and potential assessments.

### SME Probe
What business decision is each data concept designed to support?

---

## HR-AGL4-B04-Q06 — Successor Readiness Data

### Interview Question
How would you structure readiness information so executives can compare succession coverage?

### STAR Answer
**Situation:** Managers used readiness labels inconsistently.

**Task:** I needed to make readiness comparable and actionable.

**Action:** I defined standardized readiness values, their business meaning, assessment ownership, effective date, and relationship to the target position. I also defined evidence and review cadence.

**Result:** Readiness became a governed data signal that could support enterprise succession-risk analysis.

### SAP SuccessFactors Succession & Development Example
Successor readiness can be captured against succession relationships and used to understand critical-role coverage.

### SME Probe
What metadata would you retain alongside a readiness assessment?

---

## HR-AGL4-B04-Q07 — Talent Pool Membership

### Interview Question
How would you model talent-pool membership without creating duplicate employee records?

### STAR Answer
**Situation:** HR wanted separate lists for leadership, high-potential, and scarce-skill talent.

**Task:** I needed to represent group membership without duplicating the employee master.

**Action:** I treated the employee as the underlying person and talent-pool membership as a governed relationship with purpose, criteria, ownership, and effective dates.

**Result:** Multiple talent views could be created without creating multiple employee identities.

### SAP SuccessFactors Succession & Development Example
Talent pools can organize employees for defined succession and development purposes while retaining a common employee identity.

### SME Probe
What should happen to a talent-pool membership when its business purpose expires?

---

## HR-AGL4-B04-Q08 — Development Gap Data

### Interview Question
A successor has a readiness gap. What information must be captured to make the gap actionable?

### STAR Answer
**Situation:** Talent reviews identified gaps but managers could not track closure.

**Task:** I needed to turn a gap into measurable development information.

**Action:** I captured the target capability, current state, development objective, action, owner, target date, progress, evidence, and relationship to the succession requirement.

**Result:** Development activity became traceable to the readiness gap.

### SAP SuccessFactors Succession & Development Example
Development planning can capture objectives and activities associated with career and succession development needs.

### SME Probe
How would you distinguish a development activity from evidence of readiness?

---

## HR-AGL4-B04-Q09 — Career Aspiration Data

### Interview Question
Why should career aspirations be treated as distinct from succession nomination?

### STAR Answer
**Situation:** Managers assumed that nominated successors automatically wanted the target role.

**Task:** I needed to preserve the employee's career perspective.

**Action:** I modeled career aspiration separately from manager nomination and successor status. I used the two data points together during talent discussions.

**Result:** Succession decisions became more employee-aware and reduced the risk of developing people for unwanted roles.

### SAP SuccessFactors Succession & Development Example
Career development information can complement succession data by exposing employee aspirations and development direction.

### SME Probe
Who owns career aspiration data, and how often should it be refreshed?

---

## HR-AGL4-B04-Q10 — Talent Review Data

### Interview Question
A global talent review needs comparable information across business units. What data governance would you establish?

### STAR Answer
**Situation:** Each business unit used different definitions and rating practices.

**Task:** I needed to establish comparable information without destroying legitimate business context.

**Action:** I defined common data definitions, rating semantics, ownership, effective dates, mandatory attributes, and calibration practices. I also documented controlled local variations.

**Result:** Enterprise talent reviews could compare information more reliably.

### SAP SuccessFactors Succession & Development Example
Talent-review information can be structured around common talent dimensions and governed assessment practices.

### SME Probe
What makes a talent attribute enterprise-standard rather than locally defined?

---

## HR-AGL4-B04-Q11 — Data Ownership

### Interview Question
Who should own employee, position, succession, performance, and learning data in an integrated HR landscape?

### STAR Answer
**Situation:** Multiple systems were storing overlapping HR information.

**Task:** I needed to establish authoritative ownership.

**Action:** I created a data ownership matrix: Employee Central for relevant employee and organizational master data; Succession for succession relationships and talent-specific planning; Performance for performance processes; Learning for learning execution; and integration services for controlled data movement.

**Result:** Duplicate ownership was reduced and integration responsibilities became clearer.

### SAP SuccessFactors Succession & Development Example
Succession should consume authoritative workforce data rather than becoming the master for every HR object.

### SME Probe
What is the difference between data ownership and data access?

---

## HR-AGL4-B04-Q12 — Effective Dating and Historical Talent Information

### Interview Question
A successor's readiness changes over time. Why is historical context important?

### STAR Answer
**Situation:** Executives wanted to understand why a critical role moved from high risk to low risk.

**Task:** I needed to preserve meaningful talent history.

**Action:** I considered effective dates, assessment dates, status changes, development milestones, and review events so that current data could be interpreted in context.

**Result:** Leaders could understand progression rather than seeing only the latest snapshot.

### SAP SuccessFactors Succession & Development Example
Talent and succession information should be managed with appropriate temporal context where historical changes affect business interpretation.

### SME Probe
Which historical talent information is valuable enough to retain?

---

## HR-AGL4-B04-Q13 — Data Quality

### Interview Question
A succession dashboard shows many critical positions without successors, but HR believes the data is wrong. What would you do?

### STAR Answer
**Situation:** Executive reporting conflicted with HR's operational understanding.

**Task:** I needed to determine whether the problem was business reality or data quality.

**Action:** I traced the metric to source records, checked critical-position definitions, successor relationships, readiness values, effective dates, and synchronization processes. I corrected root data issues rather than manipulating the dashboard.

**Result:** Reporting became trustworthy and the actual succession gaps became visible.

### SAP SuccessFactors Succession & Development Example
Succession analytics should be based on validated critical-position, successor, and readiness information.

### SME Probe
Which data-quality dimension would you investigate first?

---

## HR-AGL4-B04-Q14 — Sensitive Talent Data

### Interview Question
How would you classify and protect succession data from an information-architecture perspective?

### STAR Answer
**Situation:** Talent data included sensitive assessments and confidential succession discussions.

**Task:** I needed to ensure confidentiality without preventing legitimate talent decisions.

**Action:** I classified sensitive attributes, identified authorized personas, applied least-privilege access, and defined appropriate governance for reporting and exports.

**Result:** Sensitive talent information was protected according to business need and risk.

### SAP SuccessFactors Succession & Development Example
Role-based permissions and governed access should protect sensitive succession and talent information.

### SME Probe
Which succession attributes would you treat as highly confidential?

---

## HR-AGL4-B04-Q15 — Integration Data Contract

### Interview Question
Employee Central changes are not consistently reflected in succession. How would you define the data contract?

### STAR Answer
**Situation:** Organizational changes were creating stale succession information.

**Task:** I needed to establish a reliable integration contract.

**Action:** I defined source ownership, required attributes, identifiers, transformation rules, update frequency, error handling, and reconciliation. I also established what Succession should never overwrite from the authoritative source.

**Result:** Employee and organizational changes flowed more predictably into succession.

### SAP SuccessFactors Succession & Development Example
Integration between Employee Central and Succession should use clearly defined ownership and data mappings for relevant employee and organizational information.

### SME Probe
What identifier strategy would you use to maintain reliable cross-system relationships?

---

## HR-AGL4-B04-Q16 — Analytics Information Model

### Interview Question
Executives want to measure succession depth across critical roles. What information model would support the metric?

### STAR Answer
**Situation:** The organization could list successors but could not consistently measure successor depth.

**Task:** I needed to define the information required for the metric.

**Action:** I connected critical position, successor relationship, readiness level, active status, and effective date. I then defined rules for counting valid successors and excluded stale or invalid relationships.

**Result:** Succession-depth reporting became consistent and explainable.

### SAP SuccessFactors Succession & Development Example
Succession relationships and readiness data can support analytics on successor coverage and depth.

### SME Probe
Would two long-term successors equal two ready-now successors for risk reporting?

---

## HR-AGL4-B04-Q17 — Data Lineage

### Interview Question
An executive challenges a talent-risk metric. How would you explain where the number came from?

### STAR Answer
**Situation:** A succession-risk dashboard was questioned because leaders could not trace the calculation.

**Task:** I needed to establish transparent data lineage.

**Action:** I documented the metric definition, source objects, transformation rules, filters, effective-date logic, calculation, and reporting layer. I traced the result back to source records.

**Result:** The metric became auditable and trusted.

### SAP SuccessFactors Succession & Development Example
Succession analytics should have clear lineage from critical positions and successor information through reporting calculations.

### SME Probe
Why is lineage especially important for talent-risk reporting?

---

## HR-AGL4-B04-Q18 — Duplicate Talent Data

### Interview Question
The same employee appears differently across talent systems. How would you solve the issue?

### STAR Answer
**Situation:** Employee records had inconsistent identifiers and attributes across systems.

**Task:** I needed to establish a reliable identity and data-matching approach.

**Action:** I identified the authoritative employee identifier, compared source attributes, defined matching and reconciliation rules, and removed unnecessary local copies.

**Result:** Talent information could be connected to one consistent employee identity.

### SAP SuccessFactors Succession & Development Example
Succession should use a consistent employee identity aligned with the enterprise HR master rather than creating duplicate identities.

### SME Probe
What should happen when two systems disagree about a non-key employee attribute?

---

## HR-AGL4-B04-Q19 — Data Retention and Lifecycle

### Interview Question
How would you determine how long succession information should remain available?

### STAR Answer
**Situation:** The client retained all historical talent information indefinitely.

**Task:** I needed to establish a defensible data lifecycle.

**Action:** I classified data by business purpose, sensitivity, legal requirements, operational need, and historical value. I defined retention, archival, review, and deletion rules with HR, privacy, legal, and security stakeholders.

**Result:** The organization reduced unnecessary exposure while retaining information needed for legitimate business purposes.

### SAP SuccessFactors Succession & Development Example
Succession data lifecycle should align with organizational retention policies and applicable privacy and governance requirements.

### SME Probe
How would you balance historical talent analytics with data minimization?

---

## HR-AGL4-B04-Q20 — Enterprise Succession Information Architecture

### Interview Question
How would you explain the complete information architecture of Succession & Development to an enterprise architecture review board?

### STAR Answer
**Situation:** The enterprise wanted Succession & Development integrated into a broader HR information architecture.

**Task:** I needed to show how succession information connects to workforce data without creating uncontrolled duplication.

**Action:** I modeled the flow as: workforce and organizational master data → role requirements → talent profile → potential and assessment → successor relationship → readiness → development gap → development action → career mobility → succession risk → analytics and business decisions. I assigned ownership, lineage, security, and integration boundaries to each major information domain.

**Result:** The architecture board could see Succession & Development as an integrated talent-information capability rather than an isolated application.

### SAP SuccessFactors Succession & Development Example
The target information architecture connects Employee Central, Succession & Development, Performance, Learning, Analytics, and integration services through clear data ownership and governed information flows.

### SME Probe
What is the single most important principle when designing the succession information architecture?

---

# Theme 04 Completion Standard

- **20 / 20 unique scenario-based interview questions completed**
- Every question follows **Situation → Task → Action → Result**
- Every answer includes a **SAP SuccessFactors Succession & Development Example**
- Every scenario includes an **SME Probe**
- Coverage includes information model, positions, talent profiles, readiness, talent pools, development, career, ownership, lineage, quality, security, integration, analytics, retention, and enterprise information architecture
- Boundary maintained with **AWF1 Employee Central, APH3 Performance & Goals, ALM6 Learning, ARP5 Compensation, ATA2a Recruiting, and ATA2b Onboarding**
- Stable IDs: **HR-AGL4-B04-Q01 → HR-AGL4-B04-Q20**
- No duplicate scenario intent within Theme 04
- Theme target achieved: **20 / 20**

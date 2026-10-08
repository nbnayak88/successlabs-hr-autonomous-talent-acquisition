# APH3 — Theme 08: Integration & Architecture

## 20 Scenario-Based Interview Questions & STAR Answers

**Stream:** APH3 — Applied SAP SuccessFactors Performance & Goals  
**Theme:** 08 — Integration & Architecture  
**Target:** 20 unique scenarios  
**Answer method:** STAR — Situation → Task → Action → Result  
**Product posture:** HCM-first, architecture-led, integration-aware

> **Boundary:** APH3 owns Performance & Goals integration requirements and architecture decisions. Employee Central remains the employee/organizational foundation; AGL4 owns Succession & Development; ARP5 owns Compensation & Variable Pay. Detailed interface implementation belongs to the integration delivery team.

## Integration & Architecture Spine

**Business Capability → Process Boundary → System of Record → Data Contract → Integration Pattern → Security → Orchestration → Error Handling → Monitoring → Business Outcome**

---

## Q01 — Defining the Integration Landscape

### Interview Question
How would you define the integration landscape for a global Performance & Goals solution?

### STAR Answer
**Situation:** The client had SuccessFactors modules, HR systems and reporting platforms but no clear integration architecture.

**Task:** I needed to establish how Performance & Goals would exchange information with the wider HR ecosystem.

**Action:** I identified business capabilities, systems of record, data consumers, ownership, timing requirements and security constraints before selecting integration patterns.

**Result:** The team had a clear integration landscape instead of point-to-point assumptions.

### SAP SuccessFactors Performance & Goals Example
Position Employee Central as a foundational source for employee and organizational context while Performance & Goals produces performance-related information for approved downstream consumers.

### SME Probe
What should be decided before choosing an integration technology?

---

## Q02 — System of Record

### Interview Question
How would you determine the system of record for employee, organizational and performance information?

### STAR Answer
**Situation:** Different systems contained overlapping employee and performance data.

**Task:** I needed to eliminate ambiguity about authoritative data ownership.

**Action:** I mapped each information object to its business owner, lifecycle, authoritative source and downstream consumers, then documented ownership and synchronization responsibilities.

**Result:** Data ownership became explicit and duplicate master-data decisions were reduced.

### SAP SuccessFactors Performance & Goals Example
Treat Employee Central as the foundational employee/organizational source while keeping Performance & Goals authoritative for its own performance-process outputs.

### SME Probe
Why is system-of-record clarity critical before integration design?

---

## Q03 — Employee Central Dependency

### Interview Question
How would you design the dependency between Employee Central and Performance & Goals?

### STAR Answer
**Situation:** Performance processes depended on employee and organizational changes maintained in Employee Central.

**Task:** I needed to ensure Performance & Goals received reliable context without creating duplicate employee master data.

**Action:** I identified required employee, manager and organizational attributes, defined source ownership and designed the synchronization boundary.

**Result:** Performance processes could operate on trusted organizational context with clear data ownership.

### SAP SuccessFactors Performance & Goals Example
Use Employee Central as the foundational employee and organizational context for Performance & Goals.

### SME Probe
What could go wrong if employee data is maintained independently in Performance & Goals?

---

## Q04 — Performance Data as a Downstream Signal

### Interview Question
How would you design the flow of approved performance outcomes to downstream talent processes?

### STAR Answer
**Situation:** The organization wanted performance results to inform broader talent decisions.

**Task:** I needed to design the handoff without transferring unnecessary data.

**Action:** I identified the approved performance signals, consumers, timing, ownership and security requirements, then defined a controlled data contract.

**Result:** Downstream processes received relevant performance information without creating uncontrolled data duplication.

### SAP SuccessFactors Performance & Goals Example
Design approved performance evidence or ratings as inputs to AGL4 Succession & Development where business governance permits.

### SME Probe
Which performance data should not automatically be exposed to downstream talent processes?

---

## Q05 — Integration with Compensation

### Interview Question
How would you architect the relationship between Performance & Goals and Compensation?

### STAR Answer
**Situation:** The business wanted performance outcomes to influence compensation decisions.

**Task:** I needed to establish an integration boundary while keeping ownership clear.

**Action:** I defined Performance & Goals as the source of approved performance outcomes and Compensation as the owner of reward calculations and decisions. I then defined the minimum required data exchange.

**Result:** The two capabilities were connected without merging their responsibilities.

### SAP SuccessFactors Performance & Goals Example
APH3 provides approved performance information; ARP5 consumes appropriate inputs for compensation processes.

### SME Probe
Why should compensation logic not be embedded into Performance & Goals?

---

## Q06 — Choosing an Integration Pattern

### Interview Question
How would you select an appropriate integration pattern for Performance & Goals data?

### STAR Answer
**Situation:** The project considered batch, event-driven and API-based options.

**Task:** I needed to choose a pattern based on business need rather than technology preference.

**Action:** I assessed data criticality, frequency, latency, volume, dependency, error handling, security and operational support requirements.

**Result:** Each interface was aligned to its actual business need.

### SAP SuccessFactors Performance & Goals Example
Use the appropriate SAP integration capability and supported interface pattern based on whether the use case requires scheduled, near-real-time or controlled data exchange.

### SME Probe
When is near-real-time integration unnecessary?

---

## Q07 — Designing the Data Contract

### Interview Question
What would you include in a data contract for a Performance & Goals integration?

### STAR Answer
**Situation:** Different teams interpreted the same performance data differently.

**Task:** I needed to create a shared integration definition.

**Action:** I documented source and target ownership, data elements, identifiers, format, semantics, mandatory fields, frequency, security, error behavior and version expectations.

**Result:** The integration became predictable and easier to test and govern.

### SAP SuccessFactors Performance & Goals Example
Define clear semantics for employee identifiers, organizational context, goals, ratings or approved performance outputs where required.

### SME Probe
Why are business definitions as important as technical field mappings?

---

## Q08 — Integration Security

### Interview Question
How would you protect sensitive performance information in integrations?

### STAR Answer
**Situation:** Performance information was classified as sensitive HR data.

**Task:** I needed to ensure integrations followed least-privilege and data-protection principles.

**Action:** I minimized exchanged data, defined authorized consumers, protected credentials and interfaces, applied appropriate access controls and included security validation in the integration design.

**Result:** The integration exposed only the information required for the approved business purpose.

### SAP SuccessFactors Performance & Goals Example
Apply security and authorization controls to integrations involving sensitive Performance & Goals information.

### SME Probe
What is the strongest argument for minimizing data in an interface?

---

## Q09 — Error Handling Architecture

### Interview Question
What would your error-handling design look like for a critical Performance & Goals integration?

### STAR Answer
**Situation:** Failed synchronization could affect performance-cycle operations.

**Task:** I needed to prevent silent integration failures.

**Action:** I defined validation, retry behavior, exception capture, ownership, alerting, reconciliation and escalation paths before implementation.

**Result:** Failures became detectable and recoverable rather than invisible operational risks.

### SAP SuccessFactors Performance & Goals Example
Design reconciliation for employee-context or approved performance-data exchanges and define ownership for failed records.

### SME Probe
When should an integration retry automatically versus require human intervention?

---

## Q10 — Integration Monitoring

### Interview Question
How would you design monitoring for Performance & Goals integrations?

### STAR Answer
**Situation:** The client could not easily tell whether scheduled HR interfaces had completed successfully.

**Task:** I needed to make integration health visible to operations.

**Action:** I defined business and technical monitoring indicators, including execution status, record counts, failures, latency, reconciliation and escalation thresholds.

**Result:** Operations could identify integration issues before they materially affected business processes.

### SAP SuccessFactors Performance & Goals Example
Monitor relevant SuccessFactors integration flows and reconcile expected versus processed records.

### SME Probe
What business KPI would indicate that an integration is unhealthy even if the technical job says “successful”?

---

## Q11 — Handling Organizational Changes

### Interview Question
How would you architect integration behavior when employees change manager, department or organizational assignment during a performance cycle?

### STAR Answer
**Situation:** Organizational changes could affect performance ownership and visibility.

**Task:** I needed to preserve process integrity when foundational employee data changed.

**Action:** I identified effective-dated organizational data, ownership rules and timing dependencies, then designed synchronization and exception handling around those changes.

**Result:** Performance processes remained aligned with current organizational context while preserving appropriate historical information.

### SAP SuccessFactors Performance & Goals Example
Use Employee Central organizational and manager information as the foundational context for Performance & Goals.

### SME Probe
Why does effective dating matter in HR integrations?

---

## Q12 — Integration with Analytics

### Interview Question
How would you design the integration between Performance & Goals and an enterprise analytics environment?

### STAR Answer
**Situation:** Leaders wanted performance insights across business units.

**Task:** I needed to make performance data analytically useful without compromising privacy.

**Action:** I defined the analytical data set, ownership, transformations, security, refresh frequency and required measures, then aligned the design with the enterprise data architecture.

**Result:** Analytics consumers received governed performance information suitable for decision-making.

### SAP SuccessFactors Performance & Goals Example
Expose approved performance information to authorized analytics consumers using governed data flows.

### SME Probe
What is the difference between operational reporting and enterprise analytics integration?

---

## Q13 — Global Integration Architecture

### Interview Question
How would you design Performance & Goals integrations for a global enterprise with regional variations?

### STAR Answer
**Situation:** Regional processes had different calendars and local requirements.

**Task:** I needed to avoid building separate integration architectures for every region.

**Action:** I established a common global data contract and integration pattern, isolating justified regional variations through controlled mappings or configuration.

**Result:** The enterprise achieved reusable integration architecture with governed localization.

### SAP SuccessFactors Performance & Goals Example
Standardize employee and performance integration patterns while allowing justified regional data differences.

### SME Probe
How would you detect regional exceptions becoming architectural fragmentation?

---

## Q14 — Avoiding Point-to-Point Sprawl

### Interview Question
How would you prevent integration sprawl as more HR consumers request Performance & Goals data?

### STAR Answer
**Situation:** Multiple consumers proposed direct interfaces to Performance & Goals.

**Task:** I needed to protect the enterprise integration architecture.

**Action:** I applied API-led and reusable integration principles, clarified data ownership, assessed shared services and avoided creating duplicate interfaces for the same business information.

**Result:** The integration landscape remained scalable and easier to govern.

### SAP SuccessFactors Performance & Goals Example
Use the enterprise integration layer where appropriate instead of creating uncontrolled direct connections from Performance & Goals to every consumer.

### SME Probe
When can point-to-point integration still be justified?

---

## Q15 — Integration Performance and Volume

### Interview Question
How would you design for high-volume performance-data processing?

### STAR Answer
**Situation:** A large enterprise had hundreds of thousands of employees and significant performance-cycle activity.

**Task:** I needed to ensure integrations could operate reliably at scale.

**Action:** I assessed data volumes, processing windows, payload size, frequency, concurrency, batching and downstream capacity, then designed appropriate processing and monitoring patterns.

**Result:** The architecture supported scale without creating avoidable performance bottlenecks.

### SAP SuccessFactors Performance & Goals Example
Design performance-data exchanges around enterprise volume, processing windows and operational constraints.

### SME Probe
Which volume assumptions should be validated before selecting an integration pattern?

---

## Q16 — Integration during a Performance Cycle

### Interview Question
How would you handle integration changes while a performance cycle is already in progress?

### STAR Answer
**Situation:** A foundational HR data change was required during an active review cycle.

**Task:** I needed to protect cycle integrity while allowing necessary business changes.

**Action:** I assessed dependencies, effective dates, in-flight transactions, downstream impacts and rollback options, then coordinated the change through controlled release governance.

**Result:** The organization could make necessary changes without unexpectedly disrupting active reviews.

### SAP SuccessFactors Performance & Goals Example
Evaluate Employee Central changes and their impact on active Performance Management processes before release.

### SME Probe
What would make you defer an otherwise valid integration change?

---

## Q17 — Reconciliation Architecture

### Interview Question
How would you prove that an integration between Performance & Goals and another HR system is complete and accurate?

### STAR Answer
**Situation:** Previous interfaces reported technical success but business users still found missing records.

**Task:** I needed to introduce business reconciliation.

**Action:** I defined expected record counts, control totals, exception categories, source-to-target checks and ownership for reconciliation failures.

**Result:** Integration success could be demonstrated from both technical and business perspectives.

### SAP SuccessFactors Performance & Goals Example
Reconcile expected employee or approved performance records between SuccessFactors and authorized downstream consumers.

### SME Probe
Why is “job completed successfully” insufficient evidence of integration correctness?

---

## Q18 — Architecture for Change

### Interview Question
How would you design Performance & Goals integrations so that future HR applications can be added without major redesign?

### STAR Answer
**Situation:** The organization expected its HR technology ecosystem to expand.

**Task:** I needed to avoid an architecture that depended on today's applications only.

**Action:** I designed around stable business capabilities, clear ownership, reusable data contracts, decoupled integration patterns and governed APIs or services where appropriate.

**Result:** New consumers could be added with less disruption to the core Performance & Goals solution.

### SAP SuccessFactors Performance & Goals Example
Separate Performance & Goals business ownership from consumer-specific integration implementation.

### SME Probe
What makes an integration architecture future-ready rather than merely flexible?

---

## Q19 — End-to-End HR Architecture

### Interview Question
How would you explain the position of Performance & Goals within the wider HR enterprise architecture?

### STAR Answer
**Situation:** Stakeholders viewed Performance & Goals as an isolated HR application.

**Task:** I needed to show its role in the enterprise HR ecosystem.

**Action:** I mapped strategy, workforce processes, Employee Central foundation, Performance & Goals, talent, compensation, analytics, integration, security and employee experience as connected capabilities with distinct ownership.

**Result:** Leadership could understand Performance & Goals as part of an integrated HR architecture rather than a standalone product.

### SAP SuccessFactors Performance & Goals Example
Position APH3 between foundational employee context and downstream talent, reward and insight capabilities while preserving clear boundaries.

### SME Probe
What architectural principle prevents integration from becoming the architecture itself?

---

## Q20 — Architecting Integration for Business Value

### Interview Question
How would you ensure Performance & Goals integration creates business value rather than simply moving data between systems?

### STAR Answer
**Situation:** The program had many proposed interfaces but limited evidence of business benefit.

**Task:** I needed to prioritize integration based on outcomes.

**Action:** I linked each interface to a business capability, decision, employee experience improvement, control or operational outcome. I challenged interfaces with no clear consumer or measurable value.

**Result:** The integration roadmap became smaller, more purposeful and easier to govern.

### SAP SuccessFactors Performance & Goals Example
Prioritize integrations that improve goal alignment, performance-cycle continuity, talent decisions, reward processes, analytics or employee experience.

### SME Probe
When would you recommend not integrating two systems even when technically possible?

---

## Completion Standard

Theme 08 is complete when all 20 scenarios are:
- Unique within APH3 and across the established interview-preparation pattern.
- Answered in full STAR format.
- Grounded in SAP SuccessFactors Performance & Goals.
- Explicit about system-of-record, data contracts, integration patterns, security and monitoring.
- Clear about boundaries with Employee Central, AGL4 and ARP5.
- Focused on architecture and business value rather than interface trivia.
- Supported by an SME probe.

**Cumulative APH3 coverage:** 8/22 themes = **160/440 scenario positions**

**Next:** Theme 09 — Testing & Quality Assurance

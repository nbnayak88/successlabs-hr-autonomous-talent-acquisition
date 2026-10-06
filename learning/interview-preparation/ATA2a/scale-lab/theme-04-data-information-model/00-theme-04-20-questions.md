# ATA2a — Applied Recruiting — SmartRecruiters
# Theme 04 — Data & Information Model

## 20 Scenario-Based Interview Questions & STAR Answers

**Stream:** ATA2a — Recruiting — SmartRecruiters  
**Theme:** 04 — Data & Information Model  
**Target:** 20 scenarios  
**Answer method:** STAR — Situation → Task → Action → Result  
**Product posture:** Recruiting-first and architecture-first. SmartRecruiters is the primary recruiting platform focus. Onboarding remains ATA2b.

---

## HR-ATA2A-B04-Q01 — Recruiting Information Model

### Interview Question
How would you design the core information model for an enterprise recruiting ecosystem?

### STAR Answer
**Situation:** Recruiting data had evolved independently across ATS, job boards, spreadsheets, and HR systems.

**Task:** I needed a coherent model that supported the recruit-to-select lifecycle.

**Action:** I identified core concepts including candidate/person, application, requisition, job, organization, recruiter, hiring manager, assessment, interview, offer, source, status, and hiring event. I defined relationships, ownership, lifecycle, and identifiers.

**Result:** Recruiting data became consistent and reusable across processes and integrations.

### SmartRecruiters Example
SmartRecruiters would manage recruiting-domain information while enterprise HCM remains authoritative for employee information after hire.

### SME Probe
Which recruiting object should have its own lifecycle rather than being embedded in another object?

---

## HR-ATA2A-B04-Q02 — Candidate vs Application Data

### Interview Question
Why should candidate and application data be modeled separately?

### STAR Answer
**Situation:** Candidates applying to multiple jobs were represented as unrelated records.

**Task:** I needed to preserve candidate history while retaining job-specific application context.

**Action:** I separated candidate identity/profile from application-specific status, requisition, assessment, interview, evaluation, and decision information.

**Result:** Candidate experience, analytics, duplicate management, and integration quality improved.

### SmartRecruiters Example
The SmartRecruiters information model should distinguish a reusable candidate relationship from individual job applications.

### SME Probe
What problems occur when application and candidate concepts are collapsed?

---

## HR-ATA2A-B04-Q03 — Requisition Data Model

### Interview Question
What information should be associated with a recruiting requisition?

### STAR Answer
**Situation:** Requisitions contained inconsistent free-text information.

**Task:** I needed reliable data for approvals, sourcing, reporting, and downstream processes.

**Action:** I structured requisition information around job/role, organization, location, hiring manager, recruiter, employment type, hiring reason, priority, budget context, approvals, target dates, status, and sourcing strategy.

**Result:** Requisition data became more complete and analytically useful.

### SmartRecruiters Example
SmartRecruiters requisition structures should use governed fields and reference data wherever possible instead of uncontrolled free text.

### SME Probe
Which requisition attributes should be inherited rather than manually entered?

---

## HR-ATA2A-B04-Q04 — Job and Position Concepts

### Interview Question
How would you distinguish job, position, and requisition in recruiting architecture?

### STAR Answer
**Situation:** The organization used the three terms interchangeably.

**Task:** I needed to establish clear semantic boundaries.

**Action:** I defined the job as the type of work, the position as an organizational workforce slot where applicable, and the requisition as the recruiting request to fill a need.

**Result:** Integration and reporting became more consistent.

### SmartRecruiters Example
SmartRecruiters may consume governed job and organizational information to create recruiting requisitions, while the enterprise workforce system retains authoritative employee/position structures where applicable.

### SME Probe
Can a requisition exist without a formal position?

---

## HR-ATA2A-B04-Q05 — Reference Data

### Interview Question
Which recruiting data should be governed as enterprise reference data?

### STAR Answer
**Situation:** Recruiting reports used inconsistent values for locations, job families, employment types, and organizational units.

**Task:** I needed consistent semantics across systems.

**Action:** I identified shared reference domains and defined ownership, codes, valid values, effective dates, and synchronization rules.

**Result:** Reporting and integration consistency improved.

### SmartRecruiters Example
SmartRecruiters should consume governed values for organizational and job-related reference data rather than creating uncontrolled local taxonomies.

### SME Probe
Why is reference-data governance critical to recruiting analytics?

---

## HR-ATA2A-B04-Q06 — Data Ownership

### Interview Question
How would you assign data ownership across SmartRecruiters and enterprise HR systems?

### STAR Answer
**Situation:** Multiple applications claimed ownership of similar workforce and recruiting data.

**Task:** I needed clear authoritative sources.

**Action:** I assigned ownership by business object and lifecycle stage, documented stewardship responsibilities, and defined synchronization and reconciliation rules.

**Result:** Conflicting records and unclear accountability decreased.

### SmartRecruiters Example
SmartRecruiters can own recruiting transaction data while the HCM becomes authoritative for employee master data after hire.

### SME Probe
What is the difference between data ownership and data stewardship?

---

## HR-ATA2A-B04-Q07 — Candidate Identity and Duplicate Records

### Interview Question
How would you manage duplicate candidate identities?

### STAR Answer
**Situation:** The same person appeared multiple times due to different email addresses, applications, or sourcing channels.

**Task:** I needed to improve identity consistency without incorrectly merging people.

**Action:** I defined matching attributes, confidence thresholds, survivorship rules, manual review, privacy constraints, and auditability.

**Result:** Duplicate candidates decreased while false merges were controlled.

### SmartRecruiters Example
Candidate matching should use governed identity rules and appropriate review mechanisms rather than blindly merging records.

### SME Probe
Why is false merging more dangerous than allowing some duplicates?

---

## HR-ATA2A-B04-Q08 — Effective Dating

### Interview Question
Where does time or effective dating matter in recruiting data?

### STAR Answer
**Situation:** Historical requisition and organizational reporting changed when current values replaced previous values.

**Task:** I needed accurate historical analysis.

**Action:** I identified time-sensitive attributes such as organizational assignment, recruiter ownership, requisition status, target dates, and job information, then defined effective dates and event timestamps.

**Result:** Historical recruiting analytics became more reliable.

### SmartRecruiters Example
Recruiting events and status history should retain appropriate timestamps so funnel and cycle-time analysis reflects what actually happened.

### SME Probe
What is the difference between an effective date and an event timestamp?

---

## HR-ATA2A-B04-Q09 — Candidate Consent and Privacy Data

### Interview Question
How would you model candidate privacy and consent information?

### STAR Answer
**Situation:** Candidate data was retained across recruiting channels without consistent visibility into purpose or consent.

**Task:** I needed privacy controls embedded in the information model.

**Action:** I linked data purpose, consent where applicable, retention, jurisdiction, access, communication preferences, and deletion requirements to candidate records.

**Result:** Privacy became a data lifecycle concern rather than a separate compliance activity.

### SmartRecruiters Example
Candidate information in SmartRecruiters should be governed according to applicable privacy requirements and enterprise retention policies.

### SME Probe
Why should consent be modeled as data rather than treated only as a document?

---

## HR-ATA2A-B04-Q10 — Data Quality

### Interview Question
How would you establish data-quality controls for recruiting?

### STAR Answer
**Situation:** Incomplete and inconsistent candidate and requisition data reduced reporting accuracy.

**Task:** I needed to improve quality at the point of capture.

**Action:** I defined completeness, validity, uniqueness, consistency, timeliness, and integrity rules. I placed validation as close as possible to data creation and established ownership for exceptions.

**Result:** Recruiting data quality improved and downstream rework decreased.

### SmartRecruiters Example
SmartRecruiters forms, workflows, and integrations should enforce appropriate mandatory and validation rules for critical recruiting information.

### SME Probe
Which data-quality dimension is most important for candidate identity?

---

## HR-ATA2A-B04-Q11 — Data Lifecycle

### Interview Question
How would you design the lifecycle of recruiting data?

### STAR Answer
**Situation:** Candidate records remained indefinitely in multiple systems.

**Task:** I needed a governed lifecycle from creation through archival or deletion.

**Action:** I mapped creation, active recruiting, withdrawal/rejection, hire handoff, retention, archival, deletion, legal hold, and audit requirements.

**Result:** Data retention became intentional and risk-controlled.

### SmartRecruiters Example
SmartRecruiters candidate and application data should follow defined retention and deletion policies appropriate to jurisdiction and business purpose.

### SME Probe
Why should data retention be designed before go-live?

---

## HR-ATA2A-B04-Q12 — Integration Data Contract

### Interview Question
What makes a good recruiting integration data contract?

### STAR Answer
**Situation:** Integrations failed because systems interpreted recruiting fields differently.

**Task:** I needed stable semantic contracts.

**Action:** I defined field meaning, ownership, format, mandatory status, validation, identifiers, effective timing, error behavior, versioning, and change ownership.

**Result:** Integration defects and ambiguity decreased.

### SmartRecruiters Example
Interfaces between SmartRecruiters and enterprise systems should use explicit contracts for requisition, organization, candidate, hiring, and status information.

### SME Probe
Why should business semantics be defined before technical mapping?

---

## HR-ATA2A-B04-Q13 — Recruiting Event Model

### Interview Question
How would you model recruiting events for analytics and integration?

### STAR Answer
**Situation:** The organization could see current status but not the sequence of recruiting events.

**Task:** I needed historical process visibility.

**Action:** I modeled events such as application, screening, interview, assessment, decision, offer, acceptance, withdrawal, and rejection with timestamps, actors, source, and context.

**Result:** The organization gained stronger funnel analytics and process traceability.

### SmartRecruiters Example
SmartRecruiters recruiting activity can be interpreted as a sequence of business events for operational and enterprise analytics where supported.

### SME Probe
Why is event history often more valuable than current status alone?

---

## HR-ATA2A-B04-Q14 — Candidate Source Data

### Interview Question
How would you structure candidate-source information?

### STAR Answer
**Situation:** Recruiting teams could not reliably determine which sourcing channels generated effective candidates.

**Task:** I needed trustworthy source attribution.

**Action:** I defined source taxonomy, source hierarchy, campaign identifiers, attribution rules, and treatment of multiple sourcing touches.

**Result:** Source effectiveness became measurable.

### SmartRecruiters Example
SmartRecruiters sourcing data should distinguish source, campaign, referral, job board, agency, and other approved channels according to an enterprise taxonomy.

### SME Probe
How would you handle a candidate who interacts with multiple sources before applying?

---

## HR-ATA2A-B04-Q15 — Candidate Assessment Data

### Interview Question
How would you integrate assessment information into the recruiting data model?

### STAR Answer
**Situation:** Assessment results were stored separately and recruiters lacked consistent context.

**Task:** I needed controlled linkage between candidates, applications, assessments, and decisions.

**Action:** I defined assessment type, provider, result, timestamp, application relationship, access, retention, and decision usage while avoiding unnecessary replication of sensitive data.

**Result:** Assessment information became usable while remaining governed.

### SmartRecruiters Example
Assessment providers can integrate with SmartRecruiters through governed interfaces, with only required results and metadata exchanged.

### SME Probe
Should the ATS store the complete assessment report?

---

## HR-ATA2A-B04-Q16 — Offer and Hiring Data Handoff

### Interview Question
What recruiting data must be transferred when a candidate becomes a hire?

### STAR Answer
**Situation:** Hiring handoffs required manual re-entry into downstream HR systems.

**Task:** I needed a reliable transition from recruiting to the employee lifecycle.

**Action:** I defined the minimum authoritative hire payload, identifiers, employment details, organizational information, effective dates, and validation/reconciliation rules.

**Result:** The hire handoff became faster and less error-prone.

### SmartRecruiters Example
SmartRecruiters should transfer governed hiring information to the designated downstream HCM/onboarding process without becoming the long-term employee master.

### SME Probe
Which recruiting data should not automatically become employee master data?

---

## HR-ATA2A-B04-Q17 — Data Security Classification

### Interview Question
How would you classify recruiting data for security and access purposes?

### STAR Answer
**Situation:** All recruiting data was treated with the same access level.

**Task:** I needed risk-appropriate controls.

**Action:** I classified data by sensitivity and business impact, including public job content, internal requisition information, candidate personal data, assessment information, compensation/offer data, and restricted decision information.

**Result:** Access controls became aligned to actual data risk.

### SmartRecruiters Example
SmartRecruiters roles and integrations should expose candidate and recruiting information according to data classification and legitimate business need.

### SME Probe
Why should assessment data often receive stronger controls than job-posting data?

---

## HR-ATA2A-B04-Q18 — Analytics Information Model

### Interview Question
How would you ensure recruiting analytics use consistent business definitions?

### STAR Answer
**Situation:** Different reports calculated time-to-hire and source conversion differently.

**Task:** I needed one trusted analytical vocabulary.

**Action:** I defined metrics, dimensions, calculation rules, event boundaries, ownership, and data lineage in a governed semantic model.

**Result:** Recruiting leaders received consistent information for decision-making.

### SmartRecruiters Example
Operational SmartRecruiters measures should be aligned with enterprise definitions before being combined with broader workforce analytics.

### SME Probe
Why can two technically correct reports produce different time-to-hire values?

---

## HR-ATA2A-B04-Q19 — Data Migration

### Interview Question
How would you decide which legacy recruiting data should migrate into SmartRecruiters?

### STAR Answer
**Situation:** A recruiting transformation contained years of historical candidate and application data.

**Task:** I needed to balance business value, privacy, technical effort, and risk.

**Action:** I classified data into active, operationally required, legally required, analytically valuable, archival, and obsolete categories. I defined mapping, cleansing, reconciliation, retention, and validation rules.

**Result:** Migration scope became purposeful rather than “move everything.”

### SmartRecruiters Example
Only approved candidate and recruiting history should be migrated into SmartRecruiters based on business, privacy, retention, and operational requirements.

### SME Probe
When is retaining legacy recruiting data outside the new ATS preferable to migration?

---

## HR-ATA2A-B04-Q20 — Trusted Recruiting Data Foundation

### Interview Question
How would you establish recruiting data as a trusted enterprise asset?

### STAR Answer
**Situation:** Recruiting data was fragmented and could not reliably support workforce decisions.

**Task:** I needed to create a trusted information foundation.

**Action:** I established canonical concepts, ownership, identifiers, quality controls, lifecycle policies, privacy, security, integration contracts, event history, and governed analytics.

**Result:** Recruiting data became reliable enough to support process optimization, workforce insight, automation, and responsible AI.

### SmartRecruiters Example
SmartRecruiters can serve as the recruiting transaction source while governed enterprise integration connects recruiting information with HCM, onboarding, analytics, identity, and other capabilities.

### SME Probe
What is the difference between a system of record and a trusted source of insight?

---

# Theme 04 Completion Standard

A learner completes **ATA2a Theme 04 — Data & Information Model** when they can:

- Model candidate, application, requisition, job, position, assessment, interview, offer, and hiring concepts.
- Distinguish candidate data from employee master data.
- Establish data ownership and stewardship.
- Govern reference data, identifiers, duplicates, and effective history.
- Design candidate privacy, retention, security, and lifecycle controls.
- Create reliable integration data contracts and recruiting event models.
- Establish source attribution and assessment-data governance.
- Design the recruiting-to-hire data handoff.
- Define consistent analytical semantics and lineage.
- Make evidence-based recruiting data migration decisions.
- Establish a trusted recruiting information foundation for analytics, automation, and AI.

**Quality rule:** Every scenario must demonstrate Situation → Task → Action → Result, contain a distinct recruiting data/information decision, use **SmartRecruiters** as the primary platform example, remain separate from onboarding, and end with an SME Probe.

**Scenario IDs:** HR-ATA2A-B04-Q01 → HR-ATA2A-B04-Q20

**Target achieved:** 20 unique scenario-based interview questions + 20 STAR answers.

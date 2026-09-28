# SAP SuccessFactors Recruiting Management (RCM) — SCALE Interview Preparation

## Step 03 — Job Requisition Data Model

**Objective:** Design requisition templates, fields, roles, questions, competencies and dependencies as a coherent recruiting data model that supports business process, governance, analytics, security and downstream integrations.

## How to Think About the Job Requisition Data Model

A strong RCM consultant does not treat a requisition as “a form with fields.” Treat it as a **business contract for a hiring need**.

**BUSINESS NEED → JOB REQUISITION → TEMPLATE → FIELDS → DEFAULTS/DEPENDENCIES → QUESTIONS → COMPETENCIES → APPROVALS → SECURITY → ADVERTISING → CANDIDATE EXPERIENCE → DATA/REPORTING → INTEGRATION**

For every design decision, ask:

1. What business decision does this data support?
2. Who owns the data?
3. What is the source of truth?
4. Is the field required, conditional or informational?
5. Does it belong on the requisition, candidate profile or application?
6. Who can view/edit it?
7. Does it drive workflow, routing, screening, reporting or integration?
8. What happens when the value is missing or incorrect?
9. How will the design scale across countries, job families and templates?
10. What evidence proves the model works?

> **Source alignment:** SAP SuccessFactors Recruiting implementation content covers requisition templates, required fields, applicant/candidate data, questions, competencies, approvals and related recruiting configuration. Use SAP's current implementation and requisition guidance as the product reference point when validating exact field behavior and configuration options.

---

# 20 Detailed Scenario-Based Questions & STAR Answers

## Scenario 1 — Multiple Requisition Templates

**Situation:** A global enterprise has 35 requisition templates covering countries, job families and business units. Several templates contain nearly identical fields.

**Questions**
1. How would you decide whether 35 templates are justified?
2. What should become a common template pattern?
3. When would you create a separate template?
4. How would you prevent template proliferation?
5. What impact does template design have on reporting and maintenance?

### STAR Answer — Q1: Are 35 templates justified?

**S — Situation:** The customer has 35 templates with significant overlap.

**T — Task:** Determine the minimum maintainable template estate without losing business or regulatory capability.

**A — Action:** I would inventory every template, compare fields, sections, permissions, approval behavior, questions, competencies and downstream dependencies. I would classify differences as regulatory, process-critical, country-specific, job-family specific or user preference. I would then build a common-core model and retain separate templates only where the data model or process genuinely differs.

**R — Result:** The organization gets a controlled template architecture instead of reproducing legacy fragmentation.

**L — Learning:** A template should represent a meaningful business pattern, not every historical variation.

**E — Evidence:** Template inventory, variation matrix, rationalization decision log and approved target-state template catalogue.

---

## Scenario 2 — Required vs Optional Fields

**Situation:** Business stakeholders want most requisition fields marked mandatory “to improve data quality.”

**Questions**
1. How would you decide which fields should be required?
2. What happens when too many fields become mandatory?
3. How would you distinguish operationally necessary data from reporting convenience?
4. How would you test incomplete and exceptional requisitions?

### STAR Answer

**S:** Stakeholders equate more mandatory fields with better data quality.

**T:** Create high-quality data capture without making requisition creation unnecessarily difficult.

**A:** I would classify fields by business necessity, approval dependency, compliance, reporting and downstream integration. Mandatory status would be reserved for data required to complete the process or satisfy a defined control. Reporting-only fields would be handled through appropriate defaults, controlled lists or later enrichment where possible. I would test minimum viable requisition, incomplete requisition and exception paths.

**R:** Data quality improves while user friction remains controlled.

**L:** Required does not automatically mean valuable.

**E:** Field classification matrix, completion-rate analysis and negative test cases.

---

## Scenario 3 — Conditional / Dependent Fields

**Situation:** A company wants Compensation Grade, Pay Range and Legal Entity to behave differently based on Country and Employment Type.

**Questions**
1. How would you design dependencies?
2. What is the source field for the dependency?
3. How would you prevent contradictory combinations?
4. How would you test every important branch?
5. What happens when the source value changes after dependent data has been entered?

### STAR Answer

**S:** Requisition data has dependencies between country, employment type and compensation attributes.

**T:** Ensure the data model produces valid combinations.

**A:** I would define the dependency matrix first, identify controlling fields, permitted combinations and ownership, then configure the supported dependency behavior. I would explicitly test initial selection, change-after-entry, invalid combinations, mandatory behavior and downstream reporting/integration.

**R:** Recruiters can create valid requisitions with fewer data-quality exceptions.

**L:** A dependency is a business rule and must be documented independently of the UI.

**E:** Dependency matrix, test decision table and invalid-combination results.

---

## Scenario 4 — Global Picklists vs Free Text

**Situation:** Recruiters currently enter Location, Job Family and Business Unit as free text, producing inconsistent values.

**Questions**
1. Which attributes should use controlled values?
2. When is free text appropriate?
3. How would you manage value changes over time?
4. What effect does this have on analytics and integrations?

### STAR Answer

**S:** Free-text fields produce inconsistent values.

**T:** Establish consistent data semantics.

**A:** I would identify fields used for routing, reporting, integration and policy decisions and prioritize controlled values for those attributes. I would define ownership and lifecycle for value sets, avoid duplicate synonyms and establish governance for additions/retirements.

**R:** Reporting and integrations receive consistent business values.

**L:** A field is only useful when its values have shared meaning.

**E:** Data dictionary, controlled-value catalogue and reporting reconciliation.

---

## Scenario 5 — Role Ownership for Requisition Fields

**Situation:** Hiring Managers create requisitions, recruiters refine them, HR owns certain policy fields and Finance owns compensation data.

**Questions**
1. How would you design field-level responsibilities?
2. What should a Hiring Manager be able to edit?
3. What should be controlled after approval?
4. How would you test unauthorized edits?

### STAR Answer

**S:** Multiple roles contribute to the same requisition.

**T:** Define clear ownership without blocking legitimate work.

**A:** I would build a role × field × action matrix covering create, view, edit, approve and post behavior. I would identify data owners and lock or restrict sensitive/approved values as appropriate.

**R:** Users can perform their responsibilities without uncontrolled data changes.

**L:** Data ownership must be explicit in the requisition model.

**E:** Role/field matrix, security test cases and approved ownership model.

---

## Scenario 6 — Requisition Fields and Approval Routing

**Situation:** Country, Job Level and Cost Center should determine different approval paths.

**Questions**
1. How would you design the dependency between data and workflow?
2. Which fields should drive approval?
3. What happens if the driver value changes after routing?
4. How would you test routing accuracy?

### STAR Answer

**S:** Business rules depend on requisition attributes.

**T:** Make approval behavior deterministic and auditable.

**A:** I would identify the authoritative driver fields, document valid combinations and map each to an approved workflow path. I would test initial routing, edited driver values, resubmission, rejected approvals and delegation scenarios.

**R:** The approval process responds predictably to business context.

**L:** Workflow should be driven by governed business data, not hidden assumptions.

**E:** Approval decision table, route-map design and transition test evidence.

---

## Scenario 7 — Job Description vs Structured Requisition Data

**Situation:** Recruiters want to store responsibilities, skills, location, compensation and job description entirely inside rich text.

**Questions**
1. What should be structured?
2. What should remain descriptive text?
3. Why does the distinction matter?
4. How would you prevent reporting from depending on text parsing?

### STAR Answer

**S:** Important hiring information is being stored as narrative text.

**T:** Protect data usability and analytics.

**A:** I would separate structured attributes used for routing, filtering, reporting, screening and integration from narrative content intended for human consumption. Job description text would remain descriptive, while key business dimensions would be captured in governed fields.

**R:** The requisition supports both human readability and machine-consumable data.

**L:** Good data modeling separates semantics from presentation.

**E:** Requisition data model and field classification catalogue.

---

## Scenario 8 — Requisition Questions for Screening

**Situation:** A technical role requires certification, years of experience and willingness to travel.

**Questions**
1. Which requirements should be modeled as requisition questions?
2. Which could become knockout questions?
3. What risks arise from poorly designed questions?
4. How would you validate question wording?
5. How would you measure screening quality?

### STAR Answer

**S:** The business wants early screening of clearly unsuitable applicants.

**T:** Create screening questions that are relevant, defensible and aligned to the role.

**A:** I would classify each criterion as essential, preferred or informational; define clear answer options; evaluate whether an answer can legitimately be used as a knockout criterion; and validate wording with recruiting and business stakeholders.

**R:** Screening becomes more structured while reducing false exclusions caused by ambiguous questions.

**L:** A screening question is a decision rule, not merely a data-collection field.

**E:** Question catalogue, decision rules, business sign-off and screening-quality metrics.

---

## Scenario 9 — Competencies and Skills Model

**Situation:** Different teams use overlapping names for the same competency, such as “Stakeholder Management,” “Stakeholder Engagement” and “Business Partnering.”

**Questions**
1. How would you normalize competencies?
2. How should competencies relate to requisition templates?
3. How would you handle job-family-specific competencies?
4. What does good governance look like?

### STAR Answer

**S:** Competencies are inconsistently defined across job families.

**T:** Establish a reusable competency model.

**A:** I would create a canonical competency catalogue, define semantic ownership, map job families to core and optional competencies, retire duplicates and align requisition templates to the governed taxonomy.

**R:** Recruiters and hiring managers use a consistent skills language.

**L:** Reusable taxonomies reduce both configuration complexity and ambiguity in hiring.

**E:** Competency catalogue, mapping matrix and governance process.

---

## Scenario 10 — Duplicate Source of Truth

**Situation:** The same Job Family value exists in the requisition, a custom field, an integration payload and a reporting spreadsheet.

**Questions**
1. How would you identify the authoritative source?
2. How would you remove duplicate data ownership?
3. How would this affect integrations?
4. How would you migrate existing data?

### STAR Answer

**S:** Multiple systems and fields represent the same business concept.

**T:** Establish one governed source of truth.

**A:** I would trace where the attribute originates, who owns it, where it is transformed and where it is consumed. I would designate an authoritative source, eliminate unnecessary duplicate entry, update integrations and reporting, and reconcile historical values.

**R:** Data ownership becomes explicit and duplicate-maintenance effort declines.

**L:** Data modeling is as much about ownership as field definition.

**E:** Data lineage, source-of-truth decision and reconciliation report.

---

## Scenario 11 — Requisition Data Model for Multiple Countries

**Situation:** The enterprise operates across 22 countries with different currencies, locations, legal entities and approval structures.

**Questions**
1. Which attributes should be globally standardized?
2. Which require localization?
3. How would you avoid country-specific copies of every field?
4. How would you test country combinations?

### STAR Answer

**S:** Country context changes some requisition attributes while much of the hiring model is common.

**T:** Design for global reuse with controlled localization.

**A:** I would separate universal business concepts from local value sets and rules. Country, legal entity, currency and language would be modeled as governed dimensions, while country-specific behavior would be explicitly mapped through dependencies and workflow logic.

**R:** One conceptual data model supports multiple countries without unnecessary duplication.

**L:** Localization should change values/rules where required, not reinvent the conceptual model.

**E:** Global/local data dictionary and country decision matrix.

---

## Scenario 12 — Job Requisition Reporting Requirements

**Situation:** Leadership wants dashboards for open requisitions by country, function, recruiter, age, priority, compensation and hiring stage.

**Questions**
1. What data must be structured at requisition level?
2. Which metrics belong at candidate/application level instead?
3. How would you avoid metric ambiguity?
4. What would you baseline before go-live?

### STAR Answer

**S:** Leadership needs operational and strategic recruiting insights.

**T:** Ensure the requisition model can support reliable reporting.

**A:** I would define each KPI and its grain first, then map metrics to requisition, candidate/application or event-level data. I would identify mandatory dimensions, calculation rules, owners and refresh needs.

**R:** Dashboards use consistent business definitions rather than ad hoc spreadsheet logic.

**L:** Reporting requirements must be designed with the data model, not after implementation.

**E:** KPI dictionary, metric-to-data mapping and reporting validation pack.

---

## Scenario 13 — Integration Requires Specific Requisition Fields

**Situation:** Downstream systems require Job Code, Cost Center, Legal Entity, Location and Hiring Type.

**Questions**
1. How would you identify integration-critical fields?
2. What happens when those fields are missing?
3. How would you prevent downstream failures?
4. How would you validate the end-to-end dependency?

### STAR Answer

**S:** Downstream integration depends on requisition attributes.

**T:** Ensure the requisition model reliably supplies required integration data.

**A:** I would document source ownership, mandatory conditions, transformation rules, interface mappings and error handling. I would test valid and invalid payloads and establish reconciliation.

**R:** Integration failures caused by incomplete requisition data are reduced.

**L:** Integration requirements are part of data-model design, not a later technical concern.

**E:** Field-to-interface mapping, validation rules and end-to-end test evidence.

---

## Scenario 14 — Requisition Clone / Copy Behavior

**Situation:** Recruiters frequently clone requisitions for similar openings.

**Questions**
1. Which fields should be copied?
2. Which values should be re-entered or recalculated?
3. How could copied data create risk?
4. What controls would you design?

### STAR Answer

**S:** Cloning saves time but can carry outdated or incorrect values.

**T:** Preserve productivity without propagating stale data.

**A:** I would classify fields as safe-to-copy, conditionally copyable or mandatory to refresh. I would pay particular attention to approvals, compensation, locations, dates, recruiters and country-specific attributes.

**R:** Cloning becomes faster without becoming a source of data-quality defects.

**L:** Reuse must preserve semantics, not just speed.

**E:** Clone-field policy and positive/negative clone tests.

---

## Scenario 15 — Requisition Data Changes After Approval

**Situation:** After approval, a recruiter changes Job Level, Location and Compensation Range.

**Questions**
1. Which changes should trigger re-approval?
2. How would you identify impact?
3. What should remain locked?
4. How would you test this?

### STAR Answer

**S:** Material requisition data changes after approval.

**T:** Preserve approval integrity.

**A:** I would classify fields by approval significance and define which changes invalidate prior approval. Changes to material business drivers would trigger the governed re-approval path where applicable; non-material administrative changes would follow a controlled edit path.

**R:** The organization avoids situations where a materially changed requisition is treated as previously approved.

**L:** Approval is a statement about a specific business state.

**E:** Field-change impact matrix and re-approval test scenarios.

---

## Scenario 16 — Sensitive Compensation Data in the Requisition

**Situation:** Compensation Range and Budget are stored on the requisition, but not every recruiter or Hiring Manager should see the same details.

**Questions**
1. How would you model access?
2. What is the risk of hiding data only through process?
3. How would you test security?
4. What audit evidence would you retain?

### STAR Answer

**S:** Sensitive compensation data has multiple consumers with different visibility requirements.

**T:** Ensure least-privilege access while preserving recruiting operations.

**A:** I would identify data ownership, authorized roles, required views and edit actions, then validate access using controlled positive and negative tests. Sensitive attributes would be handled through the appropriate security model rather than relying on user behavior.

**R:** Authorized users can complete their work while unauthorized visibility is reduced.

**L:** Sensitive data needs technical control, not informal trust.

**E:** Security matrix, negative test evidence and remediation record.

---

## Scenario 17 — Too Many Custom Requisition Fields

**Situation:** The customer has added 90 custom fields over several years.

**Questions**
1. How would you rationalize them?
2. Which fields should be retired?
3. How would you manage historical reporting impact?
4. What governance would prevent re-expansion?

### STAR Answer

**S:** The requisition model has become overloaded with custom fields.

**T:** Simplify the model without losing essential business information.

**A:** I would inventory field usage, business purpose, consumers, integrations, reports and data quality. I would classify fields as retain, consolidate, replace, archive or retire, then validate historical reporting and downstream effects.

**R:** The data model becomes easier to maintain and use.

**L:** Every field should justify its lifecycle cost.

**E:** Field rationalization catalogue, usage analysis and governance policy.

---

## Scenario 18 — Job Family and Template Dependencies

**Situation:** The organization wants different default questions and competencies based on Job Family.

**Questions**
1. How would you model the relationship?
2. What should be inherited versus manually selected?
3. How would you handle exceptions?
4. How would you test defaults?

### STAR Answer

**S:** Job Family determines much of the standard screening model.

**T:** Make requisition creation consistent without eliminating legitimate exceptions.

**A:** I would define the canonical Job Family taxonomy, map default questions/competencies to each family and document controlled override rules. I would test defaulting, override, copy/clone behavior and downstream reporting.

**R:** Recruiters start from a consistent baseline while controlled exceptions remain possible.

**L:** Good defaults reduce effort while governance preserves flexibility.

**E:** Job-family mapping, default matrix and exception test pack.

---

## Scenario 19 — Requisition Data Quality Is Poor in Production

**Situation:** Three months after go-live, analytics show inconsistent Job Levels, locations and priorities.

**Questions**
1. How would you diagnose the root cause?
2. Is this a training issue, configuration issue or data-governance issue?
3. What immediate actions would you take?
4. How would you prevent recurrence?

### STAR Answer

**S:** Production data quality is deteriorating.

**T:** Identify the root cause and restore consistent data.

**A:** I would analyze error patterns by field, user, template and country; observe how values are entered; check controlled values and defaults; review whether the data model is overly ambiguous; and introduce remediation plus governance.

**R:** Data quality improves through targeted structural changes rather than generic retraining alone.

**L:** Persistent data-quality defects often reveal a model-design problem.

**E:** Data-quality dashboard, RCA and corrective-action plan.

---

## Scenario 20 — Future-Proof Requisition Data Model

**Situation:** The enterprise expects new countries, AI-based screening, new job families and additional downstream systems over the next three years.

**Questions**
1. How would you design today for future change?
2. What principles would guide extensibility?
3. How would you avoid speculative over-modeling?
4. What governance would protect the model?

### STAR Answer

**S:** The recruiting ecosystem is expected to evolve significantly.

**T:** Create an extensible data model without creating unnecessary complexity today.

**A:** I would establish stable business concepts, controlled value sets, explicit ownership, semantic definitions, integration boundaries and extension governance. I would avoid creating fields “just in case”; future needs should be assessed through architecture review and evidence.

**R:** The model remains adaptable without becoming bloated.

**L:** Future-proofing is about clean boundaries and governance, not predicting every future requirement.

**E:** Data architecture principles, extension policy and target-state roadmap.

---

# Job Requisition Data Model — Architecture View

## Core Object Relationships

Think about the requisition as the center of a connected business model:

**Job Requisition**
→ Template  
→ Job / Position Context  
→ Hiring Manager  
→ Recruiter / Recruiting Team  
→ Organization / Legal Entity  
→ Location  
→ Job Family / Job Level  
→ Compensation / Budget  
→ Questions  
→ Competencies / Skills  
→ Approval / Route Map  
→ Advertising  
→ Candidate Applications  
→ Reporting / Analytics  
→ Downstream Integrations

The architectural question is not only **“What fields exist?”**

It is:

**“What business meaning does each attribute carry, who owns it, what depends on it, and what breaks when it is wrong?”**

---

# Data Classification Matrix

| Data Category | Typical Purpose | Main Owner | Design Question |
|---|---|---|---|
| Requisition Identity | Identify hiring request | Recruiting/HR | What makes the requisition unique? |
| Organization | Company/Business Unit/Legal Entity | HR/Enterprise | Is there one authoritative source? |
| Job Structure | Job Family/Level/Code | HR/Job Architecture | Are values standardized? |
| Hiring Context | Reason, Type, Priority | Recruiting/Business | Does it drive routing or reporting? |
| Location | Hiring geography | HR/Business | Controlled value or free text? |
| Compensation | Budget/Range/Currency | Finance/Compensation | Who can see/edit it? |
| Approvals | Governance state | Business/HR | Which fields drive approval? |
| Screening | Questions/Knockouts | Recruiting/Business | Which criteria are essential? |
| Competencies | Skills/capabilities | Talent/Business | Is there a governed taxonomy? |
| Advertising | Posting channels/visibility | Recruiting | What must be true before publication? |
| Audit | Created/updated/approved state | Platform/Governance | What evidence is required? |
| Integration | Downstream identifiers/data | IT/Data | What is the source of truth? |

---

# Data Modeling Rules for Senior Interviews

### Rule 1 — Model business meaning, not screens
A field exists because the business needs the concept, not because a screen has space for it.

### Rule 2 — One concept, one source of truth
Do not create multiple fields that represent the same business meaning.

### Rule 3 — Structured data for decisions
Attributes used for routing, reporting, filtering, policy or integration should be modeled consistently.

### Rule 4 — Narrative for human context
Use descriptive text for explanation; do not force critical business dimensions into narrative text.

### Rule 5 — Every dependency must be explicit
Country → Legal Entity → Currency → Compensation is a dependency chain, not four unrelated fields.

### Rule 6 — Security follows business responsibility
Who owns a field should influence who can view and edit it.

### Rule 7 — Approval depends on business state
A material data change can invalidate an earlier approval decision.

### Rule 8 — Defaults are not truth
Defaults accelerate entry; they should not replace validation or ownership.

### Rule 9 — Design for analytics from day one
A KPI cannot be reliable when its underlying data definitions are ambiguous.

### Rule 10 — Extend deliberately
New fields, templates and exceptions need architectural governance.

---

# Senior Consultant Rapid-Fire — STAR Mini-Answers

### 1. Why not put everything in the requisition?
**S:** Different information belongs to different business objects.  
**T:** Preserve semantic clarity.  
**A:** Separate requisition-level hiring need from candidate/application data and enterprise master data.  
**R:** Cleaner ownership and lifecycle.  
**L:** Object boundaries reduce data confusion.  
**E:** Object ownership matrix.

### 2. Why use controlled values?
**S:** Free text creates inconsistent values.  
**T:** Improve semantic consistency.  
**A:** Use governed values for routing, reporting and integrations.  
**R:** Better data quality.  
**L:** Consistency enables reuse.  
**E:** Value-set catalogue.

### 3. What makes a good requisition template?
**S:** Users need repeatable creation.  
**T:** Reduce effort while preserving control.  
**A:** Provide common data structure, validated defaults, governed dependencies, appropriate questions and approval integration.  
**R:** Faster, more consistent requisition creation.  
**L:** Good templates encode reusable business knowledge.  
**E:** Template design and usage metrics.

### 4. What is the risk of too many mandatory fields?
**S:** Users are forced to complete low-value data.  
**T:** Preserve efficiency.  
**A:** Reassess purpose and downstream use.  
**R:** Essential data remains mandatory while unnecessary friction falls.  
**L:** Data quality is not maximized by volume of required inputs.  
**E:** Completion/error analysis.

### 5. What is the risk of too many templates?
**S:** Configuration fragments.  
**T:** Keep maintenance manageable.  
**A:** Consolidate common patterns and govern exceptions.  
**R:** Smaller template estate.  
**L:** Complexity compounds over time.  
**E:** Template inventory.

### 6. How do questions affect the data model?
**S:** Screening requirements need structured answers.  
**T:** Support consistent evaluation.  
**A:** Define question purpose, answer model, ownership and disposition behavior.  
**R:** Better candidate screening.  
**L:** Questions are part of decision design.  
**E:** Question catalogue and screening analysis.

### 7. What is a knockout question?
**S:** An essential criterion must be screened early.  
**T:** Identify clearly unsuitable candidates consistently.  
**A:** Define objective criteria and validate the business rationale and test outcomes.  
**R:** More structured screening.  
**L:** Knockout logic should be precise and governed.  
**E:** Approved decision rule and test evidence.

### 8. How do competencies differ from questions?
**S:** Both influence selection but serve different purposes.  
**T:** Preserve semantic clarity.  
**A:** Use competencies to describe required capability; use questions for explicit screening/evidence collection.  
**R:** Cleaner recruiting design.  
**L:** Related data elements need distinct meanings.  
**E:** Data dictionary.

### 9. When should a field be conditional?
**S:** Not every requisition needs the same data.  
**T:** Capture relevant information without burdening users.  
**A:** Define the controlling business context and valid branches.  
**R:** Context-sensitive data capture.  
**L:** Conditionality reflects business rules.  
**E:** Dependency matrix.

### 10. What should drive approval?
**S:** Approvals differ by business context.  
**T:** Route correctly.  
**A:** Use governed business attributes such as country, legal entity, job level or compensation context where appropriate.  
**R:** Predictable approvals.  
**L:** Workflow should reflect decision rights.  
**E:** Approval decision table.

### 11. How do you test a data model?
**S:** Fields and dependencies must behave consistently.  
**T:** Prove validity.  
**A:** Test create, edit, copy, submit, approve, reject, resubmit, security, dependency changes, invalid combinations and downstream effects.  
**R:** Model is validated across lifecycle states.  
**L:** Data models must be tested dynamically, not only field-by-field.  
**E:** End-to-end test pack.

### 12. What causes data-model defects?
**S:** Incorrect or ambiguous data enters production.  
**T:** Identify root cause.  
**A:** Investigate definition, default, dependency, ownership, permission, source system or user behavior.  
**R:** Root cause is addressed at the correct layer.  
**L:** Data defects are symptoms of multiple possible design failures.  
**E:** RCA.

### 13. What is source-of-truth analysis?
**S:** Several systems hold the same concept.  
**T:** Establish authoritative ownership.  
**A:** Trace origin, transformation and consumption.  
**R:** Clear ownership and integration behavior.  
**L:** Data lineage is architectural control.  
**E:** Lineage diagram.

### 14. Why does data modeling matter for integrations?
**S:** Interfaces depend on consistent semantics.  
**T:** Prevent payload ambiguity.  
**A:** Define field meaning, format, ownership, timing and error behavior.  
**R:** More reliable interfaces.  
**L:** Integration quality starts upstream.  
**E:** Interface mapping.

### 15. How do you future-proof the model?
**S:** Recruiting requirements evolve.  
**T:** Keep the core stable.  
**A:** Use clear semantics, controlled extensions and governance.  
**R:** Adaptability without uncontrolled growth.  
**L:** Flexibility comes from boundaries.  
**E:** Extension policy.

---

# Data Model Validation Checklist

Before approving the Job Requisition Data Model, verify:

- [ ] Each field has a defined business purpose.
- [ ] Each field has an accountable owner.
- [ ] Source of truth is documented.
- [ ] Structured versus narrative data is intentional.
- [ ] Required/optional logic is justified.
- [ ] Dependencies are documented.
- [ ] Controlled values are governed.
- [ ] Questions have defined business purpose.
- [ ] Knockout logic is explicitly governed where used.
- [ ] Competencies use a reusable taxonomy.
- [ ] Role/view/edit ownership is defined.
- [ ] Approval-driving fields are identified.
- [ ] Post-approval change behavior is defined.
- [ ] Reporting metrics have clear data grain.
- [ ] Integration-critical fields are mapped.
- [ ] Clone/copy behavior is tested.
- [ ] Country/local variations are controlled.
- [ ] Negative and exception scenarios are tested.
- [ ] Security regression is complete.
- [ ] Data-quality monitoring exists.
- [ ] Change governance is established.

---

# Final RCM Job Requisition Data Model Master Answer

When asked:

**“How would you design a Job Requisition Data Model in SAP SuccessFactors Recruiting?”**

Answer:

> **“I start by defining the business meaning of the requisition rather than starting with fields. I model the requisition as the governed representation of a hiring need and then define its relationships to job structure, organization, location, compensation, approvals, questions, competencies, advertising and downstream processes. For every attribute I establish purpose, ownership, source of truth, security, dependency, reporting impact and integration impact. I use structured data for decisions, routing and analytics, and narrative fields for human context. I avoid unnecessary template and field proliferation, use controlled value sets where consistency matters, and explicitly model conditional dependencies and approval-driving attributes. I then validate create, edit, submit, approve, reject, copy, security, integration and exception scenarios. My goal is a requisition model that is easy for recruiters to use, reliable for analytics, secure by design, integration-ready and maintainable as the enterprise evolves.”**

## Master Loop

**BUSINESS NEED → REQUISITION → TEMPLATE → FIELDS → OWNERSHIP → DEPENDENCIES → QUESTIONS → COMPETENCIES → APPROVALS → SECURITY → ADVERTISING → DATA QUALITY → REPORTING → INTEGRATION → TEST → GOVERN → IMPROVE**

## Interview Signal

A strong RCM consultant does not answer only:

**“Which fields should I configure?”**

They answer:

**“What business concept does each field represent, who owns it, what decisions depend on it, how is it secured, and what happens when the data changes?”**

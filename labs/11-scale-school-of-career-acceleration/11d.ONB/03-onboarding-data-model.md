# 03 — Onboarding Data Model

> **Interview Preparation | SAP SuccessFactors Onboarding | 11d.ONB**

## Objective

Master how to architect and configure the SAP SuccessFactors Onboarding data model so that the right information is:

- collected from the right person,
- at the right stage,
- with the right validation,
- visible to the right audience,
- stored in the right system,
- protected by the right security,
- and available to downstream processes.

The core mindset:

> **Do not ask only "What fields do we need?" Ask "Who owns the data, where does it originate, when is it collected, who can see it, and where does it become authoritative?"**

---

# 1. Why the Onboarding Data Model Matters

Onboarding sits between recruiting and the employee lifecycle.

A simplified data journey is:

**Candidate / Recruiter  
↓  
Recruiting Data  
↓  
Onboarding New Hire  
↓  
Review New Hire Data  
↓  
Personal Data Collection  
↓  
Additional Onboarding Data  
↓  
Employee Central Employee Record  
↓  
Payroll / Learning / Identity / Other Systems**

A weak data model creates:

- duplicate data collection,
- inconsistent employee records,
- integration failures,
- security exposure,
- poor user experience,
- difficult reporting,
- country-specific configuration sprawl.

A strong data model creates:

- clear data ownership,
- minimum necessary collection,
- reusable master data,
- controlled visibility,
- reliable integrations,
- maintainable configuration.

---

# 2. Current SAP Configuration Model

The current SAP SuccessFactors Onboarding Academy includes a dedicated unit for defining the Onboarding Data Model. SAP's current learning content explains that HRIS fields used in the Review New Hire Data and Personal Data Collection steps can be configured in two principal ways:

1. Create an **Onboardee person type** under an applicable Employee Central HRIS element and select the fields needed for onboarding.
2. For HRIS elements that don't support person types, enable or disable the **whole HRIS element** for Onboarding.

SAP also notes that a new hire or internal hire is referred to as an **onboardee**. 

Source: SAP Learning — Configuring the Onboarding Data Model:
https://learning.sap.com/courses/sap-successfactors-onboarding-academy/selecting-sap-successfactors-employee-central-hris-elements-and-fields_db0f97c1-9d4c-407d-bdae-3cbe1799c319

---

# 3. The Data Architecture Question

For every field, answer:

**WHAT?**  
What information is required?

**WHY?**  
What business or legal process needs it?

**WHO?**  
Who owns it?

**WHERE?**  
Where does it originate?

**WHEN?**  
At what lifecycle stage is it collected?

**HOW?**  
How is it validated?

**WHO CAN SEE IT?**  
What is the security boundary?

**WHERE DOES IT GO?**  
What is the authoritative destination?

This creates a **Data Decision Record** rather than a simple field list.

---

# 4. Data Ownership Model

Use:

**Source → Collection → Validation → Storage → Consumption**

Example:

| Data | Source | Collection | Validation | Authoritative destination | Consumers |
|---|---|---|---|---|---|
| First Name | Recruiting | Review New Hire Data | Format/business rule | EC | Payroll, ID |
| Date of Birth | New Hire | Personal Data | Date validation | EC | Payroll |
| Bank Details | New Hire | Personal Data | Account validation | EC/Payroll process | Payroll |
| Manager | Recruiting/EC | Review Data | Manager relationship | EC | Workflow |
| Country | Recruiting | Review Data | Legal entity rule | EC | Compliance |
| Shoe Size | New Hire | Additional data | Picklist | HRIS/custom field | HR |
| Compliance data | New Hire | Compliance form | Form validation | Compliance/EC as designed | Payroll |

The exact source and destination must be validated against the customer's architecture.

---

# 5. The Onboardee Person Type

## What is it?

The **Onboardee** person type allows the implementation team to select the HRIS fields needed specifically for onboarding from an applicable Employee Central HRIS element.

This is important because Employee Central may contain many employee-profile fields, while a new hire should not necessarily complete all of them during onboarding.

SAP's current example shows that fields such as Date of Birth and Country of Birth can be made mandatory for the Onboardee person type while remaining non-mandatory in the corresponding Employee Central configuration.

The change is scoped to the Onboardee configuration used for onboarding data collection; it does not simply make the same field mandatory for the permanent employee configuration.

---

# 6. Whole-HRIS-Element Configuration

Some Employee Central HRIS elements do not support creation of a person type.

For these elements, the implementation can use the element-level **Enabled For Onboarding** capability.

The design implication is important:

> **Field-level control where supported; element-level control where required.**

Do not assume every HRIS element can be configured identically.

---

# 7. Data Classification

Every onboarding field should be classified.

## A. Master Data

Examples:

- name,
- date of birth,
- nationality,
- address,
- employment information.

## B. Transactional Data

Examples:

- onboarding status,
- process dates,
- task completion,
- document status.

## C. Compliance Data

Examples:

- statutory information,
- work authorization,
- tax-related information,
- country-specific forms.

## D. Organizational Data

Examples:

- company,
- department,
- business unit,
- location,
- manager,
- position.

## E. Sensitive Personal Data

Examples may include:

- identity documents,
- bank-related information,
- personal contact information,
- sensitive demographic information.

These require appropriate privacy, security and retention controls.

## F. Experience Data

Examples:

- dietary preferences,
- equipment requirements,
- accessibility needs,
- welcome preferences,
- onboarding-specific employee experience information.

---

# 8. Data Lifecycle

Use:

**Create → Collect → Validate → Approve → Store → Replicate → Consume → Retain → Archive/Delete**

For every important data element ask:

- When is it created?
- Who can modify it?
- What validates it?
- When does it become authoritative?
- Which downstream systems receive it?
- How is correction handled?
- How long should it be retained?
- What happens when the employee is terminated?

This turns field configuration into lifecycle architecture.

---

# 9. 20 Deep Scenario-Based Interview Questions

## Q1. Why is the Onboarding Data Model important?

### Strong answer

The Onboarding Data Model determines which employee-related information is exposed and collected during onboarding and how that information aligns with the Employee Central employee model.

I would treat it as a data architecture exercise rather than a field-selection exercise.

My sequence would be:

**Business requirement → data ownership → source → field → collection stage → validation → security → destination → downstream consumers**

The objective is to collect the minimum necessary information while maintaining data integrity.

### SME signal

> **Good onboarding data architecture prevents duplicate truth.**

---

## Q2. What is an Onboardee person type?

### Strong answer

An Onboardee person type is a specialized configuration of an applicable Employee Central HRIS element that allows the implementation to identify the fields needed specifically during onboarding.

This is useful because the employee profile can contain many fields that should not necessarily be collected from a new hire during the onboarding journey.

SAP's current guidance describes this as one of the two ways to identify and configure HRIS fields for onboarding data collection.

---

## Q3. What happens if an HRIS element does not support an Onboardee person type?

### Answer

I would check whether the element supports element-level onboarding enablement.

Where person types are unavailable, the whole HRIS element may be enabled or disabled for onboarding.

This changes the granularity of the design:

**Person Type → field-level selection**

versus

**Whole HRIS Element → element-level selection**

Therefore I would confirm the technical behavior before promising field-level control to the business.

---

## Q4. The business wants 200 Employee Central fields visible during onboarding. How do you respond?

### Situation

HR believes that every employee field should be collected before Day One.

### Action

I would challenge the requirement through data lifecycle analysis.

For every field:

1. Why is it required?
2. Who needs it?
3. Is it needed before employment starts?
4. Can it be sourced from Recruiting?
5. Can it be derived?
6. Can it be collected later?
7. Is it legally required?
8. Is it sensitive?
9. Which system owns it?

Then classify fields into:

**Must collect now / source automatically / collect later / do not collect**

### Result

The onboarding experience becomes simpler and the organization reduces unnecessary data exposure.

---

## Q5. A field is mandatory in Employee Central but should not be mandatory during onboarding. Is that possible?

### Strong answer

The consultant must distinguish between the Employee Central configuration and the Onboardee configuration.

Where the field is configured through an Onboardee person type, its onboarding-specific properties can differ from the parent HRIS element.

SAP's current learning example explicitly demonstrates changing mandatory behavior for the Onboardee configuration without changing the corresponding Employee Central behavior.

### SME signal

> **Onboarding data collection rules are not automatically identical to permanent employee-data rules.**

---

## Q6. A field does not exist in Employee Central but the business wants it during onboarding. What do you do?

### Answer

First determine whether the field is truly employee master data.

If the requirement belongs in the employee record, create the appropriate custom HRIS field in Employee Central and then expose it through the relevant Onboardee configuration where supported.

SAP's current learning content states that if an HRIS field does not exist in Employee Central, it must be created before it can be used for Onboarding data collection.

If the information is onboarding-specific and should not become permanent employee master data, I would evaluate an appropriate MDF/custom onboarding design instead.

---

## Q7. What is the difference between HRIS fields and custom MDF objects?

### Answer

I would decide based on **data ownership and lifecycle**.

### HRIS field

Use when the information belongs to the Employee Central employee record.

### MDF/custom object

Consider when the information represents a separate business object or onboarding-specific structure that should not simply become an employee master-data field.

Example:

**Employee's permanent dietary preference** may belong in an employee-related data structure.

**Temporary onboarding checklist metadata** may be better represented through an appropriate onboarding/custom task structure.

### Principle

> **Do not use custom MDF merely because the standard HRIS model feels inconvenient.**

---

## Q8. The business wants new hires to see selected MDF data during Personal Data Collection. How do you approach it?

SAP provides an **External User Visibility** tool that can enable MDF objects and associated data for visibility to new hires during Personal Data Collection.

The implementation approach is:

1. identify the MDF objects,
2. validate that they should be visible,
3. confirm the data is appropriate for external/new-hire visibility,
4. grant the required permission,
5. select the objects,
6. execute the visibility configuration/job as applicable,
7. test visibility using a real onboarding persona.

SAP's current guidance notes that custom MDF objects used with hire templates must be non-effective-dated.

---

## Q9. How would you design data visibility?

Create a visibility matrix:

| Data category | New Hire | Manager | HR | Recruiter | Payroll | Support |
|---|---:|---:|---:|---:|---:|---:|
| Name | Yes | Yes | Yes | Yes | Yes | Controlled |
| Personal address | Yes | Limited | Yes | Limited | Yes | Controlled |
| Bank data | Yes | No | Controlled | No | Yes | Restricted |
| Compliance data | Relevant | No/Limited | Yes | Limited | Relevant | Controlled |
| Compensation | Limited | Role-dependent | Yes | Role-dependent | Yes | Restricted |
| Onboarding tasks | Yes | Assigned tasks | Yes | Status | Limited | Controlled |

The exact matrix must be designed against the customer's RBP model and privacy requirements.

---

## Q10. How do you handle sensitive personal data?

### Strong answer

I use a **data minimization + least privilege + purpose limitation** model.

For each sensitive field:

1. establish business/legal purpose,
2. identify authoritative source,
3. minimize collection,
4. restrict visibility,
5. define modification rights,
6. define retention,
7. define downstream consumers,
8. test unauthorized access,
9. document the control.

The objective is not merely to make the field technically secure.

It is to ensure the organization has a defensible data lifecycle.

---

## Q11. How would you design country-specific data requirements?

Use:

**Global Data Model + Country Extension**

Example:

### Global

- name,
- date of birth,
- address,
- employment data,
- manager,
- organizational assignment.

### Country-specific

- statutory information,
- local tax information,
- work authorization,
- local compliance forms,
- country-specific identifiers.

Do not duplicate the entire data model per country.

### Design rule

> **Localize only the data that is genuinely local.**

---

## Q12. How would you map Recruiting data to Onboarding data?

Create a field-level mapping:

| Recruiting field | Onboarding field | Transformation | Mandatory | Validation |
|---|---|---|---|---|
| Candidate First Name | First Name | Direct | Yes | Text |
| Candidate Email | Email | Direct | Yes | Email |
| Job Requisition | Position/Job | Mapping | Yes | Reference |
| Hiring Manager | Manager | User mapping | Yes | User |
| Start Date | Start Date | Direct/date | Yes | Date |
| Country | Country | Code mapping | Yes | Country |
| Candidate ID | External ID | Direct | Yes | Unique |

Then test:

**source value → payload → onboarding value → EC value**

Do not validate only the final screen.

---

## Q13. How do you prevent duplicate data collection?

Use a **Source-of-Truth Matrix**.

For every field identify:

- source system,
- source owner,
- collection point,
- authoritative system,
- downstream consumers.

Then apply:

### Rule 1
If the value already exists in Recruiting and is trusted, do not ask the new hire to re-enter it unless correction is intentionally required.

### Rule 2
If the value is generated from organizational structures, derive it rather than collecting it manually.

### Rule 3
If the field is legally required from the new hire, collect it at the appropriate stage.

### Rule 4
If the field is needed only after employment begins, consider collecting it later.

---

## Q14. A business rule derives a value, but the user manually changes it. What should you consider?

I would determine:

1. Is the value derived or user-owned?
2. Is manual override allowed?
3. Who can override it?
4. What is the source of truth?
5. What happens on reprocessing?
6. Will downstream systems receive the derived or overridden value?
7. How will the override be audited?

The important distinction is:

**Calculated field ≠ necessarily immutable field.**

The business must explicitly define override behavior.

---

## Q15. How would you test an Onboarding data model?

### Positive tests

- correct field visible,
- correct value populated,
- mandatory field enforced,
- valid value saved,
- correct destination updated.

### Negative tests

- invalid value,
- missing mandatory value,
- unauthorized access,
- invalid reference,
- incorrect country,
- incorrect employee population.

### Integration tests

- Recruiting → ONB,
- ONB → EC,
- ONB → downstream systems.

### Regression tests

Verify that changing onboarding-specific configuration has not unintentionally changed the permanent EC employee configuration.

---

## Q16. How would you test a custom HRIS field?

Use this sequence:

**Create → Configure → Expose → Collect → Validate → Persist → Convert → Replicate → Report**

Test:

1. field exists in parent HRIS element,
2. field is correctly configured,
3. field is included in Onboardee configuration,
4. field visibility is correct,
5. mandatory behavior is correct,
6. value can be entered,
7. value persists,
8. value appears after conversion where intended,
9. integrations receive the correct value,
10. reporting can access it if required.

---

## Q17. What happens if the business changes a field after UAT?

Do not simply change it in production.

Use:

**Change Request → Impact Assessment → Design Review → Configuration → Unit Test → Regression → UAT/Approval → Deployment**

Impact analysis should consider:

- business rules,
- programs,
- integrations,
- reports,
- RBP,
- forms,
- downstream payroll,
- existing onboarding cases,
- data migration,
- support documentation.

---

## Q18. How do you design the data model for future growth?

Use these principles:

### 1. Reuse
Use common fields and objects wherever possible.

### 2. Extensibility
Design controlled extension points.

### 3. Decoupling
Avoid unnecessary dependencies between unrelated data structures.

### 4. Standard-first
Prefer standard SAP capabilities before custom structures.

### 5. Governance
Every custom field/object should have an owner and purpose.

### 6. Lifecycle awareness
Define what happens to the data through hire, employment and termination.

### 7. Integration readiness
Define identifiers and mappings early.

---

## Q19. The customer wants to collect dietary requirements, equipment needs and accessibility preferences during onboarding. How do you architect this?

First classify each requirement.

### Dietary requirement
Could be a persistent employee preference or a temporary onboarding need.

### Equipment requirement
May be an onboarding task/workflow requirement rather than master data.

### Accessibility preference
May require sensitive-data handling and specific privacy controls.

Then ask:

**Is this employee master data, onboarding transaction data, a task input, or an external-service request?**

Only after that decision would I choose HRIS, MDF, task, integration or another appropriate mechanism.

### SME signal

> **Choose the data structure from the lifecycle of the data, not from the convenience of the configuration screen.**

---

## Q20. An interviewer asks: "Design the complete Onboarding data architecture in five minutes."

### Master answer

> "I would start with the employee lifecycle and establish the source of truth for each data domain. I would classify data into recruiting, employee master, organizational, compliance, onboarding-specific, transactional and sensitive data.
>
> Then I would map each data element as Source → Collection → Validation → Storage → Consumption, while defining ownership, visibility and lifecycle.
>
> For Employee Central-backed data, I would use the appropriate Onboardee person type where supported and use element-level onboarding enablement where person types are unavailable. I would create custom HRIS fields only when the information genuinely belongs in the employee record, and evaluate MDF or onboarding-specific structures when it does not.
>
> I would design a global data model with controlled country extensions, avoid duplicate data collection, and establish a source-of-truth matrix for every critical field.
>
> Finally, I would validate the model through functional, security, negative, integration, conversion and reporting tests, ensuring that onboarding configuration supports the broader Employee Central and downstream ecosystem." 

---

# 10. Data Model Design Matrix

| Dimension | Design Question |
|---|---|
| Business purpose | Why is the field needed? |
| Data owner | Who owns the definition? |
| Source | Where does it originate? |
| Collection | Who provides it? |
| Timing | At what stage? |
| Mandatory | Is it required? |
| Validation | What rules apply? |
| Visibility | Who can see it? |
| Editability | Who can change it? |
| Destination | Where is it authoritative? |
| Integration | Who consumes it? |
| Reporting | Is it reportable? |
| Retention | How long is it retained? |
| Privacy | What controls apply? |
| Country | Is it global or local? |
| Lifecycle | What happens after hire/termination? |

---

# 11. Source-of-Truth Matrix

Create this before configuration.

| Domain | Source of Truth | Onboarding Role | Downstream |
|---|---|---|---|
| Candidate identity | Recruiting | Initial source | EC |
| Personal profile | EC/Onboarding | Collect/validate | Payroll, ID |
| Organization | EC | Reference/derive | All HR systems |
| Position | EC/Recruiting | Reference | EC |
| Manager | EC/Recruiting | Reference | Workflow |
| Compliance | Onboarding/compliance process | Collect | EC/Payroll where designed |
| Compensation | EC | Reference/collect as designed | Payroll |
| Bank data | Approved HR/payroll process | Collect | Payroll |
| Onboarding tasks | Onboarding | Transaction | HR operations |
| Custom onboarding data | Defined owner | Collect | Relevant consumer |

---

# 12. Data Quality Rules

A mature data model should enforce:

### Completeness
Required data exists.

### Accuracy
Data reflects the correct employee.

### Consistency
Values use consistent codes and structures.

### Validity
Values conform to expected formats.

### Uniqueness
Identifiers are not duplicated.

### Timeliness
Data is available when downstream processes need it.

### Integrity
Relationships such as employee-manager-position remain valid.

---

# 13. Data Validation Strategy

Use four levels:

## Level 1 — Field Validation
Format, type, length, mandatory.

## Level 2 — Business Validation
Country, employee type, legal entity, business rules.

## Level 3 — Cross-Object Validation
Position ↔ job ↔ department ↔ manager ↔ legal entity.

## Level 4 — Cross-System Validation
Recruiting ↔ Onboarding ↔ Employee Central ↔ downstream systems.

---

# 14. Data Security Architecture

Use:

**Data Classification → RBP → Population → Field/Object Visibility → Audit → Monitoring**

Test at least:

- new hire,
- hiring manager,
- HR administrator,
- recruiter,
- payroll user,
- support user,
- unauthorized employee.

A successful data-model test is not merely:

> "The field appears."

It is:

> **"The correct field appears to the correct persona for the correct population under the correct business condition."**

---

# 15. Data Model Anti-Patterns

## Anti-pattern 1 — Field hoarding

Adding every available field to onboarding.

**Fix:** Apply purpose and timing tests.

## Anti-pattern 2 — Duplicate truth

Collecting the same value in Recruiting and Onboarding independently.

**Fix:** Source-of-truth mapping.

## Anti-pattern 3 — Custom field first

Creating custom fields before checking standard capabilities.

**Fix:** Standard-first architecture.

## Anti-pattern 4 — Sensitive data without classification

Treating all HR data as equally visible.

**Fix:** Data classification + least privilege.

## Anti-pattern 5 — Country copies

Creating separate global data models for every country.

**Fix:** Global core + controlled extensions.

## Anti-pattern 6 — No lifecycle definition

Never deciding what happens to onboarding-only data after hire.

**Fix:** Define create → use → convert → retain → archive/delete.

---

# 16. Architecture Decision Records

## ADR-001 — Onboardee Field Scope

**Decision:** Use the Onboardee person type to select the required HRIS fields where supported.

**Reason:** Separate onboarding data collection needs from the complete employee-profile model.

**Trade-off:** Requires disciplined field governance.

---

## ADR-002 — Custom HRIS Field

**Decision:** Create a custom HRIS field only when the information belongs in the employee record.

**Reason:** Prevent unnecessary customization.

**Alternative:** Use an appropriate MDF/onboarding structure when the information has a different lifecycle.

---

## ADR-003 — Global vs Country Data

**Decision:** Maintain a global core data model with controlled country-specific extensions.

**Reason:** Reduce duplication and support global governance.

---

## ADR-004 — Data Visibility

**Decision:** Apply least-privilege access to sensitive data and validate it through persona-based testing.

**Reason:** Protect personal information while preserving operational access.

---

# 17. Implementation Checklist

### Discovery

- [ ] Data domains identified
- [ ] Business owners identified
- [ ] Source systems identified
- [ ] Country variations identified
- [ ] Sensitive data identified

### Design

- [ ] Source-of-truth matrix completed
- [ ] Data dictionary completed
- [ ] Onboardee fields identified
- [ ] Whole-element requirements identified
- [ ] Custom field requirements justified
- [ ] MDF requirements assessed
- [ ] Visibility matrix completed
- [ ] Retention requirements documented

### Configuration

- [ ] Parent HRIS fields available
- [ ] Onboardee person types configured where supported
- [ ] Whole HRIS elements enabled only where required
- [ ] Custom HRIS fields configured
- [ ] Visibility configured
- [ ] Permissions configured

### Validation

- [ ] Field tests completed
- [ ] Mandatory tests completed
- [ ] Negative tests completed
- [ ] Security tests completed
- [ ] Integration tests completed
- [ ] Conversion tests completed
- [ ] Reporting tests completed
- [ ] Regression completed

---

# 18. Rapid-Fire Interview Answers

### What is the Onboardee person type?
A specialized EC HRIS configuration used to identify fields needed during onboarding.

### Why use it?
To avoid exposing the entire employee data model during onboarding.

### What if person types are unavailable?
Evaluate element-level Enablement for Onboarding.

### Where should a permanent employee attribute live?
Normally in the appropriate employee master-data structure.

### Where should temporary onboarding information live?
In an appropriate onboarding/task/custom structure based on its lifecycle.

### How do you avoid duplicate data?
Define a source-of-truth matrix.

### How do you handle country-specific data?
Global core + controlled local extensions.

### What is your security principle?
Least privilege and purpose-based visibility.

### What is your testing principle?
Validate data across the entire lifecycle, not only on the screen.

### What is your architecture principle?
**One business meaning → one governed data definition.**

---

# 19. Final Master Interview Answer

> **"I approach the SAP SuccessFactors Onboarding Data Model as an enterprise data architecture problem. I first identify the business purpose, source, owner, collection stage, validation, visibility, authoritative destination and downstream consumers for each important data element.
>
> For Employee Central-backed data, I use the appropriate Onboardee person type where supported so that onboarding collects only the relevant fields. Where an HRIS element does not support person types, I evaluate the element-level onboarding enablement.
>
> I use custom HRIS fields only when the information genuinely belongs in the employee record. If the data has a different lifecycle, I evaluate an appropriate MDF or onboarding-specific structure instead.
>
> I then establish a global data model with controlled country extensions, create a source-of-truth matrix, define sensitive-data controls, and prevent duplicate collection wherever possible.
>
> Finally, I validate the model across field, business, security, integration, conversion and reporting scenarios. My objective is not simply to make the fields appear in Onboarding; it is to create a reliable, secure and maintainable employee data lifecycle from candidate through employee and into downstream enterprise processes."**

---

# 20. Master Data Architecture Loop

Use this mental model in interviews:

**1. IDENTIFY**  
What data does the business need?

↓

**2. CLASSIFY**  
Master, transactional, compliance, sensitive or onboarding-specific?

↓

**3. SOURCE**  
Where should the value originate?

↓

**4. COLLECT**  
Who provides it and at what stage?

↓

**5. VALIDATE**  
What business and technical rules apply?

↓

**6. PROTECT**  
Who can see and edit it?

↓

**7. AUTHORITATE**  
Which system becomes the source of truth?

↓

**8. INTEGRATE**  
Which systems consume it?

↓

**9. GOVERN**  
How is it retained, changed and audited?

↓

**10. OPTIMIZE**  
Can the data collection experience be simplified?

> **IDENTIFY → CLASSIFY → SOURCE → COLLECT → VALIDATE → PROTECT → AUTHORITATE → INTEGRATE → GOVERN → OPTIMIZE**

---

# 21. SuccessLabs Mastery Lens

### KNOW
Understand Employee Central HRIS elements, Onboardee person types, MDF and onboarding data structures.

### DESIGN
Design data ownership, visibility, lifecycle and source-of-truth architecture.

### DELIVER
Configure the required fields and objects.

### SOLVE
Troubleshoot missing, incorrect, duplicated or unauthorized data.

### INFLUENCE
Lead data workshops and challenge unnecessary collection.

### TRANSFORM
Create an employee data experience that is simpler, safer and more reusable.

---

# 22. 22-Pahacha Coverage

This guide develops:

- Domain Foundation
- Product & Technology Knowledge
- Business Process & Operating Context
- Data & Information Model
- Requirement Analysis
- Solution Design Awareness
- Configuration / Development Awareness
- Architecture & Integration Awareness
- Implementation Awareness
- Migration & Data Readiness Awareness
- Testing & Quality Awareness
- Release, Adoption & Support Awareness
- Troubleshooting Mindset
- Incident & Defect Awareness
- Complex Scenario Thinking
- Optimization & Continuous Improvement
- Stakeholder Management
- Communication & Collaboration
- Advisory & Trusted SME
- Automation, AI & Intelligent Products
- Transformation & Business Value
- Strategic Mastery & Future Vision

---

## Certification / Interview Mastery Checklist

Before considering this topic mastered, you should be able to explain without notes:

- [ ] What the Onboarding Data Model is
- [ ] What an Onboardee person type does
- [ ] When to use whole-HRIS-element onboarding enablement
- [ ] How Onboarding data relates to Employee Central
- [ ] How to design a source-of-truth matrix
- [ ] How to classify onboarding data
- [ ] How to decide between HRIS and MDF
- [ ] How to design custom fields
- [ ] How to manage data visibility
- [ ] How to protect sensitive information
- [ ] How to handle country-specific requirements
- [ ] How to prevent duplicate data collection
- [ ] How to map Recruiting → Onboarding → EC
- [ ] How to test the data model
- [ ] How to manage data-model changes
- [ ] How to design for scalability
- [ ] How to explain the complete data architecture in an interview

---

## Closing Principle

> **The best Onboarding data model is not the one that collects the most information. It is the one that collects the right information, from the right source, at the right time, with the right visibility, and carries it reliably through the employee lifecycle.**

That is the difference between **configuring fields** and **architecting employee data**.

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

# 9. 20 Deep Scenario-Based Interview Questions — STAR Method

> **Interview formula:** Answer every scenario using **Situation → Task → Action → Result**.  
> Add an **SME Signal** to demonstrate architecture maturity, governance thinking and trusted-advisor behavior.

---

## Q1. Why is the Onboarding Data Model important?

### Situation
A customer views the Onboarding Data Model mainly as a list of fields that need to appear on the onboarding screens.

### Task
I need to establish the data model as an enterprise lifecycle architecture and ensure every important data element has a clear purpose, owner and destination.

### Action
I would map each critical data element through:

**Business requirement → data ownership → source → field → collection stage → validation → security → destination → downstream consumers**

I would also identify whether the value already exists in Recruiting or Employee Central and determine whether it should be transferred, derived, collected, or intentionally deferred.

### Result
The organization avoids duplicate data collection, improves data quality and creates a maintainable link between Recruiting, Onboarding, Employee Central and downstream systems.

### SME Signal
> **Good onboarding data architecture prevents duplicate truth and unnecessary data exposure.**

---

## Q2. What is an Onboardee person type?

### Situation
The implementation team needs only a subset of Employee Central fields during onboarding, while the employee model contains many more fields.

### Task
Identify a mechanism that allows onboarding to use the required HRIS fields without treating the entire employee model as an onboarding data-entry form.

### Action
I would use the **Onboardee person type** on supported Employee Central HRIS elements to identify and configure the fields needed specifically for onboarding.

I would explain that this is an onboarding-specific configuration layer rather than a request to redesign the entire Employee Central employee record.

### Result
The onboarding journey can collect the appropriate subset of employee information while keeping the permanent employee-data model governed separately.

### SME Signal
> **The onboarding data-entry experience should be purpose-built, not a mirror of every employee field.**

---

## Q3. What happens if an HRIS element does not support an Onboardee person type?

### Situation
A business requirement requires an HRIS element during onboarding, but the element does not expose the same person-type configuration pattern as another HRIS element.

### Task
Determine the correct supported configuration approach without promising field-level behavior the platform does not provide.

### Action
I would first confirm whether the HRIS element supports element-level onboarding enablement.

Where person types are unavailable, I would evaluate the whole-HRIS-element **Enabled For Onboarding** configuration and document the granularity difference:

**Person Type → field-level selection**

versus

**Whole HRIS Element → element-level selection**

### Result
The project uses a technically supported configuration model and sets accurate expectations with the business.

### SME Signal
> **Architecture quality includes knowing where the platform's configuration granularity changes.**

---

## Q4. The business wants 200 Employee Central fields visible during onboarding. How do you respond?

### Situation
HR believes every employee field should be collected before Day One.

### Task
Reduce unnecessary collection while still satisfying genuine business, legal and operational requirements.

### Action
I would challenge each field using:

1. Why is it required?
2. Who needs it?
3. Is it needed before employment starts?
4. Can it be sourced from Recruiting?
5. Can it be derived?
6. Can it be collected later?
7. Is it legally required?
8. Is it sensitive?
9. Which system owns it?

Then classify the fields into:

**Must collect now / source automatically / collect later / do not collect**

### Result
The customer gets a simpler onboarding experience, lower data exposure and a more maintainable model without losing required information.

### SME Signal
> **The best data model is not the largest one; it is the smallest model that reliably satisfies the business.**

---

## Q5. A field is mandatory in Employee Central but should not be mandatory during onboarding. Is that possible?

### Situation
The permanent Employee Central process treats a field as mandatory, but onboarding should allow the value to be captured later.

### Task
Separate onboarding-specific collection behavior from the permanent employee-data configuration.

### Action
Where the field is configured through an applicable Onboardee person type, I would configure its onboarding-specific behavior independently and validate the resulting collection experience.

SAP's current learning example demonstrates that mandatory behavior for the Onboardee configuration can differ from the corresponding Employee Central behavior.

I would test both paths:

**Onboarding behavior**

and

**post-conversion Employee Central behavior**

### Result
The customer can preserve the permanent HRIS requirement while designing an onboarding experience that collects the information at the appropriate lifecycle stage.

### SME Signal
> **Onboarding data collection rules are not automatically identical to permanent employee-data rules.**

---

## Q6. A field does not exist in Employee Central but the business wants it during onboarding. What do you do?

### Situation
The business wants a new onboarding field, but no corresponding Employee Central field exists.

### Task
Determine whether the value belongs in the employee master-data model or has a different lifecycle.

### Action
I would first establish the business meaning and lifecycle.

If the value is genuine employee master data, I would create the appropriate custom HRIS field in Employee Central and then expose it through the relevant onboarding configuration where supported.

If the value is onboarding-specific and should not become permanent employee master data, I would evaluate an appropriate MDF/custom onboarding design instead.

I would also define:

**owner → visibility → retention → conversion behavior → downstream consumer**

### Result
The solution stores the data in the right architectural layer instead of creating a permanent HRIS field merely because the onboarding screen needs somewhere to put the value.

### SME Signal
> **Choose the data structure from lifecycle and ownership, not from screen convenience.**

---

## Q7. What is the difference between HRIS fields and custom MDF objects?

### Situation
The project team is considering custom MDF for multiple new requirements because it appears flexible.

### Task
Choose the right data structure based on the business meaning and lifecycle of the data.

### Action
I would use an **HRIS field** when the information belongs to the employee master-data model.

I would evaluate **MDF/custom objects** when the information represents a separate business object or onboarding-specific structure with its own relationships, lifecycle or governance.

I would apply:

**business meaning → ownership → lifecycle → consumers → security → structure**

before selecting the technology.

### Result
The solution avoids converting every new business requirement into a permanent employee field and preserves a cleaner enterprise data architecture.

### SME Signal
> **Do not use custom MDF merely because the standard HRIS model feels inconvenient.**

---

## Q8. The business wants new hires to see selected MDF data during Personal Data Collection. How do you approach it?

### Situation
The business wants certain custom MDF information available to new hires during Personal Data Collection, but the data is not automatically part of the standard new-hire view.

### Task
Provide only the intended data while preserving the external-user security boundary.

### Action
I would:

1. identify the MDF objects,
2. confirm the business purpose,
3. classify the data,
4. verify that external/new-hire visibility is appropriate,
5. configure the relevant **External User Visibility** capability,
6. grant only required permission,
7. execute the required visibility configuration/job where applicable,
8. test with a controlled new-hire persona,
9. perform a negative test against unrelated MDF data.

SAP's current guidance notes External User Visibility for enabling MDF objects/data to new hires during Personal Data Collection and notes constraints around MDF objects used with hire templates.

### Result
The required custom data becomes available to the new hire without turning the entire MDF model into an external-user data surface.

### SME Signal
> **External visibility is a deliberate security boundary, not simply a UI configuration.**

---

## Q9. How would you design data visibility?

### Situation
Several personas need access to onboarding data, but they should not all see the same fields.

### Task
Create a security-aware data visibility model.

### Action
I would build a matrix covering:

| Data category | New Hire | Manager | HR | Recruiter | Payroll | Support |
|---|---:|---:|---:|---:|---:|---:|
| Name | Yes | Yes | Yes | Yes | Yes | Controlled |
| Personal address | Yes | Limited | Yes | Limited | Yes | Controlled |
| Bank data | Yes | No | Controlled | No | Yes | Restricted |
| Compliance data | Relevant | No/Limited | Yes | Limited | Relevant | Controlled |
| Compensation | Limited | Role-dependent | Yes | Role-dependent | Yes | Restricted |
| Onboarding tasks | Yes | Assigned tasks | Yes | Status | Limited | Controlled |

I would then map the matrix into RBP, target populations and object/data permissions and test both authorized and unauthorized access.

### Result
Each persona gets the minimum data required for its responsibility, with sensitive information protected.

### SME Signal
> **Visibility is part of data architecture, not a post-configuration security patch.**

---

## Q10. How do you handle sensitive personal data?

### Situation
Onboarding collects identity, banking, contact, compliance and potentially other sensitive personal information.

### Task
Protect the information while preserving the legitimate business process.

### Action
I would apply:

**Purpose → Minimize → Classify → Authorize → Collect → Retain → Audit**

For each sensitive field I would:

1. establish business/legal purpose,
2. identify the authoritative source,
3. minimize collection,
4. restrict visibility,
5. define modification rights,
6. define retention,
7. define downstream consumers,
8. test unauthorized access,
9. document the control.

### Result
The organization gets a defensible data lifecycle instead of simply placing security permissions around a large data collection.

### SME Signal
> **Sensitive-data architecture is about purpose and lifecycle, not only permissions.**

---

## Q11. How would you design country-specific data requirements?

### Situation
A global implementation has common employee data plus different statutory or local requirements in each country.

### Task
Support local requirements without cloning the entire data model per country.

### Action
I would establish:

**Global Data Model + Country Extension**

Global data could include:

- name,
- date of birth,
- address,
- employment data,
- manager,
- organizational assignment.

Country-specific extensions could include:

- statutory information,
- local tax information,
- work authorization,
- country-specific identifiers,
- local compliance data.

I would require a documented reason for each local extension and identify its owner and lifecycle.

### Result
The organization gets one governed global model with controlled localization instead of multiple country-specific data silos.

### SME Signal
> **Localize data only where the business, legal or operating model genuinely requires it.**

---

## Q12. How would you map Recruiting data to Onboarding data?

### Situation
Recruiting already contains much of the candidate information and the business wants to avoid asking the candidate to enter the same information again.

### Task
Create a trusted, traceable field mapping from Recruiting through Onboarding into Employee Central.

### Action
I would create a field-level mapping:

| Recruiting field | Onboarding field | Transformation | Mandatory | Validation |
|---|---|---|---|---|
| Candidate First Name | First Name | Direct | Yes | Text |
| Candidate Email | Email | Direct | Yes | Email |
| Job Requisition | Position/Job | Mapping | Yes | Reference |
| Hiring Manager | Manager | User mapping | Yes | User |
| Start Date | Start Date | Direct/date | Yes | Date |
| Country | Country | Code mapping | Yes | Country |
| Candidate ID | External ID | Direct | Yes | Unique |

Then test the chain:

**source value → payload → onboarding value → EC value → downstream consumer**

I would validate both correct and incorrect mappings.

### Result
Candidate data is reused reliably, duplicate entry is reduced and downstream employee records remain consistent.

### SME Signal
> **Mapping is not complete until the value is validated end to end.**

---

## Q13. How do you prevent duplicate data collection?

### Situation
Recruiting, Onboarding and Employee Central each contain similar fields and process owners want to collect the same information independently.

### Task
Establish a single governed ownership model.

### Action
I would create a **Source-of-Truth Matrix** for every critical field.

Then apply:

### Rule 1
If the value already exists in Recruiting and is trusted, do not ask the new hire to re-enter it unless correction is intentionally required.

### Rule 2
If the value is generated from organizational structures, derive it rather than collecting it manually.

### Rule 3
If the field is legally required from the new hire, collect it at the appropriate stage.

### Rule 4
If the field is needed only after employment begins, consider collecting it later.

I would also define who is allowed to correct each value and where that correction becomes authoritative.

### Result
The organization reduces duplicate entry, conflicting values and unnecessary onboarding effort.

### SME Signal
> **One business meaning should have one governed source of truth.**

---

## Q14. A business rule derives a value, but the user manually changes it. What should you consider?

### Situation
A value is derived by a business rule, but users can manually override it during onboarding.

### Task
Determine whether the override is legitimate and prevent the data from becoming ambiguous.

### Action
I would determine:

1. Is the value derived or user-owned?
2. Is manual override allowed?
3. Who can override it?
4. What is the source of truth?
5. What happens on reprocessing?
6. Will downstream systems receive the derived or overridden value?
7. How will the override be audited?

I would explicitly document the precedence model:

**Derived value → allowed override → final authoritative value**

### Result
The team knows when a manual override is legitimate, what happens during reprocessing and which value is ultimately sent downstream.

### SME Signal
> **Calculated does not automatically mean immutable; override behavior must be designed.**

---

## Q15. How would you test an Onboarding data model?

### Situation
The team has confirmed that fields display correctly but has not tested downstream conversion, security or invalid data.

### Task
Prove the data model works across the full lifecycle, including failures.

### Action
I would test four dimensions.

### Positive
- correct field visible,
- correct value populated,
- mandatory field enforced,
- valid value saved,
- correct destination updated.

### Negative
- invalid value,
- missing mandatory value,
- unauthorized access,
- invalid reference,
- incorrect country,
- incorrect employee population.

### Integration
- Recruiting → ONB,
- ONB → EC,
- ONB → downstream systems.

### Regression
Verify that onboarding-specific configuration changes have not unintentionally changed permanent Employee Central behavior.

### Result
The test evidence proves not only that the field appears, but that the value is correct, secure, persistent and consumable downstream.

### SME Signal
> **A data-model test validates lifecycle integrity, not screen appearance.**

---

## Q16. How would you test a custom HRIS field?

### Situation
A new custom Employee Central field is needed for onboarding and downstream processes.

### Task
Ensure it works from creation through reporting and integration.

### Action
I would use:

**Create → Configure → Expose → Collect → Validate → Persist → Convert → Replicate → Report**

I would verify:

1. field exists in parent HRIS element,
2. field configuration is correct,
3. field is included in Onboardee configuration where supported,
4. visibility is correct,
5. mandatory behavior is correct,
6. value can be entered,
7. value persists,
8. value appears after conversion where intended,
9. integrations receive the correct value,
10. reporting can access it if required.

### Result
The field behaves consistently across onboarding, Employee Central and downstream consumers.

### SME Signal
> **A field is not implementation-complete until its lifecycle is proven.**

---

## Q17. What happens if the business changes a field after UAT?

### Situation
A business owner requests a new field, changes mandatory behavior or modifies an existing value after UAT sign-off.

### Task
Control the change without destabilizing the tested solution.

### Action
I would follow:

**Change Request → Impact Assessment → Design Review → Configuration → Unit Test → Regression → UAT/Approval → Deployment**

Impact analysis would consider:

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

For high-impact changes I would require explicit release governance rather than implementing directly in production.

### Result
Changes are traceable and the project avoids introducing an untested dependency into the production employee lifecycle.

### SME Signal
> **Every field change is potentially a process, security, integration and reporting change.**

---

## Q18. How do you design the data model for future growth?

### Situation
The customer expects new countries, new employee types and new downstream integrations over the next few years.

### Task
Create an extensible model without overengineering it.

### Action
I would apply:

### 1. Reuse
Use common fields and objects wherever possible.

### 2. Extensibility
Design controlled extension points.

### 3. Decoupling
Avoid unnecessary dependencies between unrelated structures.

### 4. Standard-first
Prefer standard SAP capabilities before custom structures.

### 5. Governance
Every custom field/object has an owner and purpose.

### 6. Lifecycle awareness
Define what happens through hire, employment and termination.

### 7. Integration readiness
Define identifiers and mappings early.

I would also maintain a data-domain catalogue so new requirements can be assessed against existing structures before creating new ones.

### Result
The solution can absorb growth without multiplying duplicate fields, objects and integration mappings.

### SME Signal
> **Scalability comes from governed reuse and clear data boundaries, not from creating more objects.**

---

## Q19. The customer wants to collect dietary requirements, equipment needs and accessibility preferences during onboarding. How do you architect this?

### Situation
The business wants three categories of information during onboarding but is unsure whether they should become employee fields, MDF objects or task inputs.

### Task
Choose the correct architectural mechanism for each requirement.

### Action
I would first classify each item by lifecycle.

### Dietary requirement
Could be a persistent employee preference or a temporary onboarding need.

### Equipment requirement
May be an onboarding task/workflow input and may drive equipment fulfillment rather than belong to the permanent employee master.

### Accessibility preference
May require sensitive-data handling and purpose-specific visibility.

I would then ask:

**Is this employee master data, onboarding transaction data, a task input, or an external-service request?**

Only after answering that would I choose HRIS, MDF, task, integration or another mechanism.

### Result
Each data element is placed in the structure that matches its business lifecycle, security requirement and downstream purpose.

### SME Signal
> **Choose the data structure from the lifecycle of the data, not from the convenience of the configuration screen.**

---

## Q20. An interviewer asks: "Design the complete Onboarding data architecture in five minutes."

### Situation
The interviewer wants to assess whether I can connect individual field configuration decisions into an end-to-end enterprise architecture.

### Task
Explain a coherent data architecture covering source, ownership, collection, validation, security, authority and downstream consumption.

### Action
I would answer:

> "I would start with the employee lifecycle and establish the source of truth for each data domain. I would classify data into recruiting, employee master, organizational, compliance, onboarding-specific, transactional and sensitive data.
>
> Then I would map each critical data element as **Source → Collection → Validation → Storage → Consumption**, while defining ownership, visibility, editability, retention and lifecycle.
>
> For Employee Central-backed data, I would use the appropriate **Onboardee person type** where supported and use element-level onboarding enablement where person types are unavailable. I would create custom HRIS fields only when the information genuinely belongs in the employee record, and evaluate MDF or onboarding-specific structures when it has a different lifecycle.
>
> I would design a global data model with controlled country extensions, establish a source-of-truth matrix for critical fields, minimize duplicate collection and define clear security boundaries for sensitive information.
>
> Finally, I would validate the model through functional, negative, security, integration, conversion and reporting tests. My goal is not simply to make fields appear in Onboarding; it is to create a reliable, secure and maintainable employee data lifecycle from candidate through employee and into downstream enterprise processes."

### Result
The answer demonstrates both configuration knowledge and enterprise architecture thinking, showing that every field decision is connected to lifecycle, security, integration and business value.

### SME Signal
> **The interview answer should sound like a data-architecture decision framework, not a list of configuration screens.**

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

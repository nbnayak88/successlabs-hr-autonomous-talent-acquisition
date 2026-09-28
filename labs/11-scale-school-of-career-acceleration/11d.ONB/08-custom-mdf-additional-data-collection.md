# 08. Custom MDF & Additional Data Collection

> **SAP SuccessFactors Onboarding Interview Mastery Guide**
>
> **Lab:** 11 — Scale School of Career Acceleration  
> **Track:** Interview Preparation  
> **Domain:** SAP SuccessFactors Onboarding  
> **Mastery model:** KNOW → DESIGN → DELIVER → SOLVE → INFLUENCE → TRANSFORM

## 1. Objective

Master how to design, configure, secure, test, troubleshoot, and govern **Custom MDF Objects and Additional Onboarding Data Collection** in SAP SuccessFactors Onboarding.

This guide is intentionally interview-oriented. The objective is not merely to know where to click, but to explain **why the data belongs in Additional Data Collection, how it should be modeled, who should see it, how it is selected, how it is secured, and how it should behave across a global implementation**.

SAP describes Additional Onboarding Data Collection as the mechanism for collecting onboarding-specific information that is important to the hiring process but is generally not intended to become part of the permanent employee record. Examples include uniform requirements, transport options, parking, benefits-related choices, and other company-specific information. The experience is powered by custom MDF objects and their configuration UIs. citeturn0search0turn0search3

---

# 2. Architecture at a Glance

```
Business Requirement
       ↓
Data Ownership Decision
       ↓
HRIS Field vs Custom MDF Decision
       ↓
Custom MDF Object
       ↓
Fields / Picklists / Attachments
       ↓
cust_userConfig Association
       ↓
Configuration UI
       ↓
Data Collection Configuration
       ↓
Business Rule Selection
       ↓
New Hire Experience
       ↓
Permissions + External User Visibility
       ↓
Validation / Testing / Audit
       ↓
Operational Governance
```

### Core design principle

> **Do not create an MDF object because the UI can collect the data. Create it because the business has a clear data ownership, lifecycle, security, and usage requirement.**

---

# 3. HRIS Field vs Custom MDF Object

| Requirement | Preferred design |
|---|---|
| Permanent employee master data | HRIS / employee record field |
| Data needed for employment lifecycle | HRIS field where appropriate |
| Onboarding-only operational information | Custom MDF |
| Temporary onboarding preference | Custom MDF |
| Uniform size / transport / parking preference | Custom MDF |
| Onboarding-specific attachment | Custom MDF attachment field |
| Country-specific onboarding collection | Custom MDF + configuration selection |
| Data needed by downstream payroll/core HR | Assess permanent HRIS ownership first |
| Sensitive data | Minimize collection; apply explicit security and privacy controls |

SAP specifically distinguishes custom HRIS fields used for permanent employee records from custom MDF objects used for additional onboarding-specific information. citeturn0search0turn0search8

---

# 4. Core Configuration Architecture

A typical Additional Data Collection design contains:

1. **Custom MDF Object**
2. **Fields**
3. **Picklists / Generic Objects where required**
4. **cust_userConfig association**
5. **Configuration UI**
6. **Onboarding Data Collection Configuration**
7. **Business Rules**
8. **RBP / MDF permissions**
9. **External User Visibility where applicable**
10. **Testing, audit and governance**

SAP documentation describes the configuration flow as creating the data collection object, creating its UI, mapping the object to the onboarding data collection configuration, and adding configuration UI items to the relevant configuration instance. citeturn0search9turn0search10

For a custom onboarding data collection object, SAP documentation currently specifies an object code beginning with `cust_`, non-effective dating for the data collection object, Editable API Visibility, and the `cust_userConfig` field associated with the onboarding data collection user configuration. citeturn0search10

---

# 5. Default vs Customized Data Collection Configuration

### Default configuration

Use when essentially the same additional data is required for all relevant new hires.

Example:

```
All New Hires
   ├── Parking
   ├── Transport
   └── Uniform
```

SAP documents the default configuration approach for collecting similar data for all new hires. citeturn0search6turn0search9

### Customized configuration

Use when the required data differs by factors such as:

- Job Code
- Location
- Business Unit
- Country
- Workforce population
- Employment context

Example:

```
HR Analyst
   ├── Work Schedule
   ├── Parking
   └── Dress Code

Field Technician
   ├── Uniform
   ├── Equipment
   └── Vehicle Requirement
```

SAP documents customized data collection configurations for differentiated new-hire populations and gives job code as an example of a rule-selection criterion. citeturn0search6turn0search7

---

# 6. Business Rule Architecture

Important standard rules include:

- `ONB2_CustomDataCollectionCheck`
- `ONB2_DataCollectionConfigSelect`

The first determines whether the Additional Data Collection step is included; the second determines which Custom MDF Objects / data collection configuration should be displayed. SAP currently documents these predefined rules as part of the Onboarding configuration. citeturn0search1turn0search6

### Decision pattern

```
Is Additional Data Collection required?
          ↓
       YES / NO
          ↓
Which configuration applies?
          ↓
Job / Location / Population logic
          ↓
Select configuration
          ↓
Render configured MDF panels
```

---

# 7. STAR Interview Method

For every scenario below:

- **S — Situation:** business context and problem
- **T — Task:** your responsibility
- **A — Action:** architecture/configuration/troubleshooting actions
- **R — Result:** measurable or observable outcome

The strongest interview answers should demonstrate **architecture before configuration**.

---

# 8. 20 Deep Scenario-Based Interview Questions & STAR Answers

## Q1. Why would you use a Custom MDF Object instead of adding another HRIS field?

### S — Situation
A global organization wanted to collect parking preference, uniform size, and transport requirements during onboarding. The team initially proposed adding all fields to the employee profile.

### T — Task
I had to determine the correct data model and avoid polluting the permanent employee record.

### A — Action
I first identified the data owner, lifecycle, downstream consumers, retention requirement, and whether the data represented permanent employee master data. Because these requirements were onboarding-specific and did not necessarily belong in the permanent employee record, I modeled them as Custom MDF Objects under Additional Data Collection. I then created focused objects, configuration UIs, permissions, and selection rules.

### R — Result
The onboarding experience captured the required information without unnecessarily expanding the permanent employee master-data model. The design also made the data easier to govern as onboarding-specific information.

**Architect signal:** Never decide MDF vs HRIS based only on screen requirements; decide based on lifecycle and ownership.

---

## Q2. A business asks for 25 new custom fields in Additional Data Collection. How do you respond?

### S
A country HR team requested 25 fields for a new-hire questionnaire.

### T
I needed to prevent a poor user experience and uncontrolled custom-object growth.

### A
I classified every field into:
1. permanent employee data,
2. onboarding-only operational data,
3. calculated/derived data,
4. duplicate data,
5. data that should not be collected.

I challenged fields already available elsewhere and grouped genuinely related requirements into logical MDF objects. I then designed panels around the new-hire journey rather than around the HR team's spreadsheet.

### R
The final design collected only necessary data, reduced duplication, and produced a simpler onboarding experience.

**Architect signal:** Data minimization is part of solution architecture.

---

## Q3. How would you design a Custom MDF Object for uniform requirements?

### S
A company wanted to collect shirt size, shirt color, and jacket size before Day 1.

### T
I had to design a maintainable data collection model.

### A
I created a dedicated custom MDF object for uniform information. I used controlled picklists for standardized values, added the onboarding user configuration association, created the configuration UI, and exposed the object through the relevant data collection configuration. I also designed RBP and external-user visibility carefully.

SAP uses a similar company-shirt example in its current administration learning content. citeturn0search0

### R
The company obtained structured uniform data rather than free-text responses, enabling reliable downstream operational fulfillment.

---

## Q4. How would you make different MDF panels appear for different job codes?

### S
HR wanted different onboarding questions for HR Analysts and Field Technicians.

### T
I had to create differentiated experiences without creating separate onboarding processes.

### A
I created the required MDF entities and configuration UIs, grouped them into appropriate data collection configurations, and used the data collection configuration selection rule to select the appropriate configuration based on Job Code.

For example:

```
HR Analyst → Work Schedule + Parking + Dress Code
Field Technician → Uniform + Equipment + Vehicle
```

SAP documents `SAP_ONB2_DataCollectionConfigSelect` as the mechanism for selecting a particular data collection configuration based on conditions such as Job Code. citeturn0search7

### R
One scalable onboarding process supported multiple role-specific experiences without duplicating the entire process.

---

## Q5. The Custom MDF Object exists, but the new hire cannot see it. How do you troubleshoot?

### S
The configuration team confirmed that the object and UI were created, but the new hire did not see the panel.

### T
I had to isolate whether the defect was object configuration, UI mapping, rule selection, or security.

### A
I used a layered troubleshooting sequence:

1. Confirm the Additional Data Collection step is enabled.
2. Validate `ONB2_CustomDataCollectionCheck`.
3. Validate `ONB2_DataCollectionConfigSelect`.
4. Confirm the correct configuration instance.
5. Confirm the object is included in the configuration UI.
6. Verify `cust_userConfig`.
7. Check external-user visibility where relevant.
8. Verify RBP/MDF permissions.
9. Reproduce using a controlled test hire.

### R
The issue was isolated systematically instead of changing multiple configurations at random.

---

## Q6. What is the purpose of the `cust_userConfig` field?

### S
A developer created an MDF object with the business fields but the object was not appearing correctly in Additional Data Collection.

### T
I needed to validate the association between the custom object and Onboarding's data collection configuration.

### A
I checked whether the object contained the required `cust_userConfig` field and whether it was configured as the appropriate Generic Object association to the onboarding data collection user configuration. I then validated the configuration UI and data collection mapping.

SAP explicitly documents `cust_userConfig` as the field used to associate the custom object with Onboarding data collection configuration. citeturn0search0turn0search10

### R
The object could participate correctly in the Onboarding data collection architecture.

---

## Q7. How would you design a country-specific Additional Data Collection experience?

### S
A multinational organization wanted different onboarding questions in India, Germany, and the US.

### T
I needed to avoid creating three separate onboarding processes.

### A
I designed a common global data model where possible, then created country-specific MDF entities or configurations only where requirements genuinely differed. I used rule-driven configuration selection based on approved business criteria and kept common fields reusable.

I also separated:
- global data,
- country-specific data,
- regulated data,
- local operational preferences.

### R
The solution preserved a global process while allowing controlled localization.

**Architect signal:** Local variation should be configuration-driven, not process-duplication-driven.

---

## Q8. How would you handle a sensitive field such as dietary or accessibility information?

### S
A business wanted to collect a sensitive personal requirement during onboarding.

### T
I had to balance employee experience with privacy and security.

### A
I challenged whether the data was necessary, defined the legitimate business purpose, identified the minimum required granularity, restricted visibility through RBP, minimized downstream propagation, and documented retention and ownership. I also ensured the field was not exposed broadly simply because it existed in an MDF object.

### R
The organization collected only what was justified and reduced unnecessary exposure of sensitive information.

**Architect signal:** “Can we collect it?” is not the same as “Should we collect it?”

---

## Q9. How would you add an attachment to an MDF-based data collection requirement?

### S
A business wanted new hires to submit an onboarding-specific document along with a data collection form.

### T
I had to design a secure document collection experience.

### A
I evaluated whether the document should be part of Document Flow or whether an attachment field on the custom MDF object was appropriate. For an onboarding-specific supporting attachment, I configured an attachment-capable MDF field, UI, permissions, and visibility. I also considered document access, retention, auditability, and downstream use.

SAP documents that an Attachment field can be added to a custom MDF object for Additional Data Collection and that such documents can be accessed through Document Management Service or the Onboarding Dashboard. citeturn0search0

### R
The document was captured in the correct business context without mixing unrelated document processes.

---

## Q10. What would you do if the business wants the MDF data to become permanent employee data?

### S
An onboarding team initially created a custom MDF object for a preference, but later decided the information should remain part of the employee record.

### T
I had to prevent an architectural mismatch.

### A
I revisited the source-of-truth decision. I assessed whether the data belongs to the worker's permanent lifecycle, whether downstream HR processes consume it, and whether it needs effective dating and employee-record semantics. If yes, I moved the authoritative representation to the appropriate HRIS model and treated onboarding as the collection point rather than the system of record.

### R
The onboarding solution remained aligned with the enterprise master-data architecture.

---

## Q11. A Custom MDF panel appears for the wrong employee population. What do you investigate?

### S
Field Technicians were receiving HR Analyst-specific onboarding questions.

### T
I needed to identify whether the problem was data, rule logic, or configuration selection.

### A
I inspected:
1. the employee's Job Code and other rule inputs,
2. the data collection selection rule,
3. the rule execution result,
4. configuration instance,
5. configuration UI items,
6. effective configuration state,
7. test-user population.

I avoided changing the MDF object itself until the selection logic was proven incorrect.

### R
The defect was isolated to configuration-selection logic, reducing regression risk.

---

## Q12. How do you decide between one large MDF object and several smaller objects?

### S
A solution team proposed one object containing 40 fields covering parking, equipment, transport, uniform, and benefits.

### T
I had to create a maintainable model.

### A
I grouped fields according to business domain, lifecycle, ownership, security, UI experience, and reuse. I created separate objects where the data had distinct ownership or lifecycle and kept related fields together where they naturally formed one business entity.

### R
The design became easier to secure, test, reuse, and evolve.

**Design rule:**

```
Different lifecycle + different ownership + different security
                    ↓
             Consider separation
```

---

## Q13. How would you test Custom MDF data collection before production?

### S
A global onboarding implementation had 15 MDF objects and multiple rule-driven configurations.

### T
I needed to prove both functional correctness and population-specific behavior.

### A
I built a test matrix covering:

| Dimension | Test |
|---|---|
| Global | Common configuration |
| Country | Local configuration |
| Job Code | Role-specific configuration |
| New Hire | External-user visibility |
| Recruiter | Permission boundary |
| Hiring Manager | Task/visibility boundary |
| Admin | Full configuration access |
| Missing input | Rule fallback |
| Invalid input | Validation behavior |
| Attachment | Upload/download/security |
| Regression | Existing population unchanged |

I tested both positive and negative paths.

### R
The implementation entered UAT with traceable coverage rather than relying on a single happy-path hire.

---

## Q14. What if Additional Data Collection is not appearing at all?

### S
A new hire completed Personal Data Collection but never received the Additional Data Collection task.

### T
I had to determine whether this was intended rule behavior or configuration failure.

### A
I first checked `ONB2_CustomDataCollectionCheck`. If it evaluated false, the step would be skipped. If true, I checked `ONB2_DataCollectionConfigSelect`, the selected configuration, and the configured panels. I then validated the employee population and relevant onboarding data.

SAP states that the Custom Data Collection Check rule determines whether the Additional Data Collection step runs; when false, the step is skipped. citeturn0search7

### R
The team could distinguish a deliberate rule outcome from a technical defect.

---

## Q15. How would you prevent uncontrolled MDF proliferation?

### S
During a global rollout, every country requested separate custom objects for similar questions.

### T
I needed to establish governance without blocking legitimate local requirements.

### A
I introduced an MDF design authority and required each proposed object to document:
- business purpose,
- owner,
- source of truth,
- lifecycle,
- security classification,
- reuse assessment,
- country/global scope,
- downstream dependency,
- retention requirement.

I also created naming standards and reusable data patterns.

### R
The program reduced duplicate objects and made future enhancements easier to govern.

---

## Q16. How would you design permissions for a Custom MDF Object?

### S
A custom object needed to be completed by a new hire but administered by the onboarding team.

### T
I had to separate configuration authority from transactional data access.

### A
I designed separate personas for:
- configuration administrator,
- onboarding administrator,
- new hire/external user,
- HR operational user,
- support user.

I applied least privilege and tested read, edit, create, delete, and administrative permissions separately. I also considered whether the object contained sensitive information.

### R
The object was usable by the required population without giving broad administrative access.

SAP's current guidance requires Metadata Framework permissions for creating/configuring these objects and also documents permissions for external visibility where applicable. citeturn0search10turn0search8

---

## Q17. What happens if the same custom data is needed in multiple onboarding populations?

### S
Parking information was required globally, while transport information was required only in selected countries.

### T
I had to maximize reuse while preserving local variation.

### A
I modeled the common entity once where the data semantics were genuinely identical. I then used configuration selection to control which population saw it. I avoided cloning the same MDF object for every country.

### R
The architecture achieved reuse while keeping the new-hire experience contextual.

---

## Q18. How would you troubleshoot data that was entered but is not visible later?

### S
A new hire submitted an additional data field, but an HR user could not find the information later.

### T
I had to determine whether the issue was expected product behavior or missing security/mapping.

### A
I first clarified the expected lifecycle. Additional Data Collection data is onboarding-specific and does not automatically appear in People Profile. citeturn0search7

I then checked:
- object storage,
- object permissions,
- UI,
- data collection configuration,
- external visibility,
- whether the data had a downstream mapping requirement.

### R
The team avoided treating an expected product behavior as a defect and clarified the correct retrieval/reporting path.

---

## Q19. How would you handle a requirement for dynamic questions?

### S
HR wanted follow-up questions to appear based on an earlier answer.

### T
I had to determine whether the requirement should be implemented in the MDF model, UI, business rules, or another process component.

### A
I first separated:
- field-level validation,
- population selection,
- conditional panel selection,
- dynamic task/process behavior.

I used business rules where they were appropriate for selecting content/configuration, while avoiding excessive logic inside the data model. I kept the MDF object focused on the business entity and the rule focused on decision logic.

### R
The design remained understandable and supportable rather than embedding every business condition into one object.

---

## Q20. You are the lead architect asked to redesign a poorly implemented Additional Data Collection solution. What is your approach?

### S
The customer had dozens of custom objects, duplicated fields, inconsistent naming, broad permissions, and country-specific forks.

### T
I had to stabilize the solution while preserving business continuity.

### A
I would execute a six-stage remediation:

1. **Discover** — inventory all objects, fields, UIs, rules, populations and consumers.
2. **Classify** — identify permanent HR data vs onboarding-only data.
3. **Rationalize** — remove duplicates and consolidate overlapping objects.
4. **Architect** — establish global/local configuration patterns and ownership.
5. **Secure** — redesign RBP, visibility and sensitive-data access.
6. **Govern** — introduce standards, ADRs, test packs and change governance.

I would migrate incrementally rather than redesign everything during one production cutover.

### R
The customer gets a governed data-collection architecture rather than simply another round of configuration fixes.

**Executive-level answer:**

> “I would treat Custom MDF as an enterprise data-model decision, not a UI customization exercise.”

---

# 9. Scenario Design Matrix

| Scenario | Primary decision |
|---|---|
| Permanent employee attribute | HRIS field |
| Temporary onboarding requirement | Custom MDF |
| Same questions for all | Default configuration |
| Different questions by job/location | Customized configuration |
| Sensitive information | Minimize + restrict |
| Supporting document | MDF attachment or Document Flow decision |
| Multiple countries | Global object + controlled configuration |
| Duplicate custom fields | Rationalize |
| Wrong population | Rule/configuration diagnosis |
| Object not visible | Object → UI → config → rule → security |
| Data not visible after onboarding | Validate lifecycle expectation |
| Excessive objects | Governance and rationalization |

---

# 10. Troubleshooting Master Loop

Use this sequence in interviews:

```
1. Is the requirement valid?
        ↓
2. Is the data model correct?
        ↓
3. Does the MDF object exist and contain required fields?
        ↓
4. Is cust_userConfig correct?
        ↓
5. Does the Configuration UI exist?
        ↓
6. Is the UI included in the data collection configuration?
        ↓
7. Does CustomDataCollectionCheck evaluate TRUE?
        ↓
8. Does DataCollectionConfigSelect choose the right configuration?
        ↓
9. Does the user have the required permissions?
        ↓
10. Is External User Visibility configured where required?
        ↓
11. Test with a controlled hire
        ↓
12. Review rule execution / audit evidence
```

---

# 11. Architecture Decision Records

For every significant Custom MDF design, document:

### ADR-01 — Data Ownership
Why is this data onboarding-specific rather than permanent HR data?

### ADR-02 — Object Boundary
Why are these fields together in one MDF object?

### ADR-03 — Global vs Local
Why is this object/configuration global or country-specific?

### ADR-04 — Selection Logic
Why is this population receiving this configuration?

### ADR-05 — Security
Who can create, read, update, or administer the data?

### ADR-06 — Retention
How long does the organization need the information?

### ADR-07 — Downstream Use
Is the data consumed by HR, payroll, IT, facilities, analytics, or integrations?

### ADR-08 — Privacy
Why is the data necessary and how is exposure minimized?

---

# 12. Quality Gates

Before production:

- [ ] Every field has a documented business purpose.
- [ ] HRIS vs MDF decision is documented.
- [ ] Object naming convention is followed.
- [ ] Effective dating is deliberately chosen.
- [ ] `cust_userConfig` is correctly configured.
- [ ] Configuration UI is created.
- [ ] Data collection configuration is mapped.
- [ ] Business rules are tested.
- [ ] Global/local selection is tested.
- [ ] RBP is least-privilege.
- [ ] External-user visibility is validated.
- [ ] Sensitive data has explicit protection.
- [ ] Attachment behavior is tested where applicable.
- [ ] Negative security tests are complete.
- [ ] Regression testing is complete.
- [ ] Ownership is documented.
- [ ] Support team has troubleshooting steps.
- [ ] Production rollback/change plan exists.

---

# 13. Anti-Patterns

### ❌ MDF as a dumping ground
“Put it in MDF because it is easy.”

### ❌ Permanent employee data hidden in onboarding-only objects
This creates source-of-truth ambiguity.

### ❌ One mega-object
40–50 unrelated fields become difficult to secure and maintain.

### ❌ Country cloning
Creating identical objects for every country increases technical debt.

### ❌ Rule spaghetti
Too many overlapping conditions make population selection unpredictable.

### ❌ Broad permissions
New-hire data should not automatically become visible to every HR administrator.

### ❌ Free text for controlled values
Use picklists or structured objects when the business needs standardized values.

### ❌ Ignoring lifecycle
If data is needed after onboarding, explicitly design its permanent ownership.

### ❌ Testing only the happy path
Rule-driven configuration requires positive and negative population testing.

---

# 14. Rapid-Fire Interview Answers

**What is Additional Data Collection?**  
A mechanism to collect onboarding-specific information through Custom MDF Objects.

**What is MDF?**  
Metadata Framework, used to model configurable business objects in SAP SuccessFactors.

**Why Custom MDF?**  
To collect structured onboarding-specific data that does not necessarily belong in the permanent employee record.

**What controls whether Additional Data Collection runs?**  
`ONB2_CustomDataCollectionCheck`.

**What controls which data collection configuration is selected?**  
`ONB2_DataCollectionConfigSelect`.

**What is `cust_userConfig`?**  
The association used to connect the custom data collection object with Onboarding's data collection configuration.

**Default configuration?**  
Common collection design for the relevant new-hire population.

**Customized configuration?**  
Different entities/panels selected for different populations.

**Typical selection criteria?**  
Job Code, location, and other approved business attributes.

**Can attachments be collected?**  
Yes, an Attachment field can be added to an MDF custom object for appropriate onboarding use cases. citeturn0search0

**Does Additional Data Collection automatically populate People Profile?**  
No. SAP documents that the collected data does not automatically appear in People Profile. citeturn0search7

**Key security principle?**  
Least privilege.

**Key architecture principle?**  
Model the data according to ownership and lifecycle, not simply according to the screen.

---

# 15. Final Master Interview Answer

> “When I design Custom MDF and Additional Data Collection in SAP SuccessFactors Onboarding, I start with the data ownership and lifecycle rather than immediately creating fields.
>
> First, I determine whether the information is permanent employee master data or onboarding-specific information. If it belongs to the permanent employee record, I evaluate the appropriate HRIS model. If it is specific to the onboarding experience, I consider a Custom MDF Object.
>
> Then I define the object boundary, fields, picklists, security classification and downstream consumers. I configure the object with the required Onboarding association, create the Configuration UI, and map the object into the appropriate data collection configuration.
>
> Next, I design the population-selection logic. If the same information is required broadly, I can use the default configuration. If different populations require different information, I use customized data collection configurations and business rules to select the correct experience.
>
> Security is designed at the same time. I separate configuration administrators from operational users and new hires, apply least privilege, and validate external-user visibility and sensitive-data access.
>
> Finally, I test the complete chain — data model, UI, configuration, business rules, population selection, permissions, user experience, and downstream behavior. I document the architecture decisions and establish governance so that every new custom field has a clear business purpose and owner.
>
> My principle is simple: **Custom MDF should solve a defined data-ownership problem, not become a dumping ground for onboarding requirements.**”

---

# 16. SuccessLabs Mastery Mapping

### KNOW
Understand:
- MDF
- Custom Object
- Configuration UI
- Data Collection Configuration
- Business Rules
- RBP
- External User Visibility

### DESIGN
Architect:
- Data ownership
- Object boundaries
- Global/local model
- Population selection
- Security model

### DELIVER
Configure:
- Object
- Fields
- Picklists
- `cust_userConfig`
- UI
- Configuration
- Rules
- Permissions

### SOLVE
Troubleshoot:
- Missing panel
- Wrong population
- Rule failure
- Permission failure
- Visibility issue
- Data-lifecycle misunderstanding

### INFLUENCE
Advise:
- HR
- HRIT
- Security
- Data owners
- Integration teams
- Global/local process owners

### TRANSFORM
Move the customer from:

```
Spreadsheet Questions
       ↓
Random Custom Fields
       ↓
Duplicate MDF Objects
       ↓
Unclear Security
       ↓
Rule Complexity
       ↓
Governed Onboarding Data Architecture
```

---

# 17. 22-Pahacha Coverage

| Pahacha | Custom MDF mastery |
|---|---|
| 01 Domain Foundation | Onboarding data architecture |
| 02 Product & Technology Knowledge | MDF, UI, rules |
| 03 Business Process Context | New-hire data collection |
| 04 Data & Information Model | Object/field design |
| 05 Requirement Analysis | Data requirement classification |
| 06 Solution Design | MDF architecture |
| 07 Configuration Awareness | Object/UI/rule configuration |
| 08 Architecture & Integration | Source-of-truth and downstream design |
| 09 Implementation | Configuration and deployment |
| 10 Migration & Data Readiness | Legacy/custom data assessment |
| 11 Testing & Quality | Scenario and security testing |
| 12 Release, Adoption & Support | User readiness |
| 13 Troubleshooting Mindset | Layered diagnosis |
| 14 Incident & Defect Awareness | Visibility/rule defects |
| 15 Complex Scenario Thinking | Population-specific collection |
| 16 Optimization | Rationalization |
| 17 Stakeholder Management | HR/business/security alignment |
| 18 Communication | Explain technical design simply |
| 19 Advisory & Trusted SME | Data architecture guidance |
| 20 Automation, AI & Intelligent Products | Intelligent data selection |
| 21 Transformation & Business Value | Better onboarding experience |
| 22 Strategic Mastery | Governed global architecture |

---

# 18. Certification / Interview Checklist

Before claiming mastery, you should be able to explain without notes:

- [ ] When to use HRIS vs MDF
- [ ] What Additional Data Collection solves
- [ ] Custom MDF object architecture
- [ ] `cust_userConfig`
- [ ] Configuration UI
- [ ] Data Collection Configuration
- [ ] Default vs customized configuration
- [ ] `ONB2_CustomDataCollectionCheck`
- [ ] `ONB2_DataCollectionConfigSelect`
- [ ] Job-code-driven collection
- [ ] Location-driven collection
- [ ] RBP design
- [ ] External User Visibility
- [ ] Attachment handling
- [ ] Sensitive-data architecture
- [ ] Global/local design
- [ ] Testing strategy
- [ ] Troubleshooting methodology
- [ ] MDF governance
- [ ] Source-of-truth decision

---

## The Architect's Mental Model

> **Requirement → Ownership → Data Model → MDF → UI → Configuration → Rule → Population → Security → Experience → Validation → Governance**

If you can explain that chain clearly — and defend every design decision — you are no longer answering an MDF configuration question. You are demonstrating **Onboarding Solution Architecture mastery**.

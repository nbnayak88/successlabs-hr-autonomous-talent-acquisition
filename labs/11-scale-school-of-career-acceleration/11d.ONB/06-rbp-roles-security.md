# 06 — RBP, Roles & Security

> **Interview Preparation | SAP SuccessFactors Onboarding | 11d.ONB**

## Objective

Master how to design, configure, test, troubleshoot, and govern **Role-Based Permissions (RBP)** for SAP SuccessFactors Onboarding.

The core mindset:

> **Security is not a permission checklist. It is the architecture that determines who can see, create, change, complete, administer, and troubleshoot each part of the onboarding lifecycle.**

A strong consultant can translate:

**Business responsibility → Persona → Role → Permission → Target Population → Data Scope → Task Scope → Security Test**

The current SAP SuccessFactors Onboarding Academy contains a dedicated unit on assigning RBP in Onboarding, and SAP's current administration learning separately covers task permissions for hiring managers, recruiters and other participants. citeturn0search0turn0search1

---

# 1. Why Security Architecture Matters in Onboarding

Onboarding involves multiple personas:

- new hires,
- hiring managers,
- recruiters,
- HR representatives,
- HR administrators,
- IT,
- Payroll,
- Compliance,
- Facilities,
- Security,
- Onboarding administrators,
- support teams,
- integration/service users.

They should not all have the same access.

The security architecture must answer:

1. **Who is the user?**
2. **What is their business responsibility?**
3. **What information do they need?**
4. **What actions do they need?**
5. **For which population?**
6. **For how long?**
7. **What must they explicitly not access?**

---

# 2. RBP Architecture

Use this model:

**Persona**

↓

**Permission Role**

↓

**Permission Categories**

↓

**Role Assignment**

↓

**Target Population**

↓

**Data / Object / Task Scope**

↓

**User Experience**

↓

**Audit & Governance**

Example:

**Hiring Manager**

→ **ONB Hiring Manager Role**

→ Employee Data + Onboarding Objects + Onboarding Permissions

→ Managers

→ Their applicable onboarding population

→ Complete assigned tasks / view permitted data

→ Security test

---

# 3. Current SAP Permission Categories

SAP's current Onboarding administration guidance identifies several important permission categories for participants, including:

- **Employee Data**
- **Onboarding or Offboarding Object Permissions**
- **Compliance Object Permissions**
- **Onboarding or Offboarding Permissions**
- relevant **Manage Onboarding or Offboarding** permissions for specific administrative actions. citeturn0search1

For consultants and administrators, SAP additionally documents administrator-level capabilities such as:

- Employee Central API,
- Manage Hires,
- Configure Document Management,
- Configure DocuSign eSignature,
- Metadata Framework,
- Onboarding/Offboarding Admin Object Permissions,
- Email Framework,
- Manage Business Process Engine,
- Manage Onboarding/Offboarding. citeturn0search5

The exact permissions must always be aligned to the current product release and customer design.

---

# 4. Security Layers

Do not think of RBP as one layer.

Use:

## Layer 1 — Authentication

**Who is the user?**

## Layer 2 — Role

**What can this persona do?**

## Layer 3 — Target Population

**Whose data can they access?**

## Layer 4 — Data Scope

**Which employee fields/objects can they see or edit?**

## Layer 5 — Task Scope

**Which onboarding actions can they perform?**

## Layer 6 — Process Scope

**Which onboarding/offboarding operations can they initiate, cancel, restart or administer?**

## Layer 7 — Integration Scope

**What can service/integration users execute?**

## Layer 8 — Audit

**Can we prove who had access and what governance controls exist?**

---

# 5. Persona-Based Security Model

A useful baseline is:

| Persona | Typical access |
|---|---|
| New Hire | Own onboarding data/tasks |
| Hiring Manager | Assigned manager tasks + permitted employee data |
| Recruiter | Recruiting/onboarding transition + permitted candidate/new-hire data |
| HR Representative | Operational onboarding data/tasks |
| Onboarding Admin | Configuration and operational administration |
| IT | IT-related tasks/data |
| Payroll | Payroll-relevant data/tasks |
| Compliance | Compliance forms/data |
| Support | Controlled troubleshooting access |
| BPE Service User | Technical process execution |
| Integration User | Required API/integration operations |

This is a **design starting point**, not a universal permission template.

---

# 6. New Hire Security

New hires are external onboarding users during the onboarding journey.

The security model should be intentionally narrow.

Typical principles:

- access only their own onboarding experience,
- view only relevant personal information,
- complete their assigned tasks,
- access their permitted documents/forms,
- avoid access to unrelated employees,
- avoid administrative functions.

When Onboarding is enabled, SAP currently creates an **OnboardingExternalUser** role that can be assigned to new hires. SAP also creates default onboarding groups and roles including **OnboardingBpeAdmin** and **OnboardingBPEServiceUser**. citeturn0search3

---

# 7. Hiring Manager Security

The hiring manager needs enough access to perform manager-owned onboarding work without receiving unrestricted HR access.

SAP's current task-permission guidance shows that hiring-manager permissions can include employee data access plus Onboarding object permissions such as Buddy Task, Checklist Task, Document Data, Document Flow, Document Template, Equipment Task and Equipment Type, depending on the implementation. citeturn0search1

Design:

**Hiring Manager**

→ Manager-based target population

→ Required employee data

→ Manager task permissions

→ Assigned onboarding scope

---

# 8. Responsible Groups and Security

Responsible Groups solve an operational ownership problem.

RBP solves an access-control problem.

They are related but not identical.

### Responsible Group

**Who is responsible for completing the task?**

### RBP

**What can the user actually see or do?**

Example:

**IT Equipment Task**

→ Responsible Group = IT Provisioning

→ RBP = IT users can view/edit relevant equipment task objects

A Responsible Group without the required permission can create a task that the user cannot complete.

---

# 9. Target Population Architecture

Target population is one of the most important RBP concepts.

It answers:

> **Whose data does this role apply to?**

Examples:

- self,
- direct reports,
- all employees,
- specific dynamic group,
- external onboarding users,
- defined employee population.

A manager may have a permission role but still be unable to access the intended onboarding data if the target population is incorrectly defined.

### Principle

> **Role defines capability; target population defines reach.**

---

# 10. Employee Data Permissions

Employee Data permissions determine which employee information a persona can access.

Design them using:

**Field → Purpose → Persona → View/Edit → Population**

Example:

| Data | New Hire | Manager | HR | IT | Payroll |
|---|---:|---:|---:|---:|---:|
| First Name | View/Edit own | View | View/Edit | Limited | View |
| Location | View/Edit own | View | View/Edit | Relevant | View |
| Bank Data | Own/controlled | No | Controlled | No | Required |
| Compensation | Own/controlled | Role-dependent | Controlled | No | Required |
| Compliance | Relevant | Limited | Yes | No | Relevant |

The exact matrix must follow the customer's security and privacy model.

---

# 11. Object Permissions

Onboarding uses MDF-based objects for various capabilities.

Object permissions can control access to items such as:

- onboarding tasks,
- equipment,
- documents,
- process-related objects,
- compliance objects,
- other onboarding-specific data.

SAP's current administrator guidance separates Onboarding/Offboarding Object Permissions from Compliance Object Permissions and other Onboarding/Offboarding permissions. citeturn0search1turn0search5

### Security principle

> **Do not grant Select All simply because it makes configuration easier.**

Grant the minimum capability required by the persona.

---

# 12. Compliance Security

Compliance information can be sensitive.

Design:

**Compliance Data Classification**

↓

**Authorized Persona**

↓

**View/Edit Requirement**

↓

**Population**

↓

**Retention/Audit**

SAP's current task-permission guidance notes that Compliance Object Permissions provide access to compliance forms and recommends appropriate edit access for participants involved in completing compliance forms. citeturn0search1

The implementation should validate each compliance permission against the actual country/process requirements.

---

# 13. Administrator vs Participant

This distinction is critical.

## Participant

Needs to perform assigned onboarding work.

## Administrator

Needs to configure/manage the onboarding solution.

Do not automatically give every participant administrator permissions.

For example:

**Hiring Manager**

needs to complete manager tasks.

**Onboarding Administrator**

may need to configure processes, manage onboarding content, troubleshoot and administer the solution.

SAP's current consultant/administrator guidance explicitly distinguishes participant permissions from administrator permissions. citeturn0search5

---

# 14. BPE Service User Security

The Business Process Engine needs a technical identity.

SAP currently documents the **OnboardingBpeAdmin** role and **OnboardingBPEServiceUser** group as part of the Onboarding activation setup. The service user executes Business Process Engine tasks required by the onboarding process. citeturn0search3turn0search5

Security principle:

> **A service account should have technical capability, not human administrative privilege.**

Separate:

- human administrator,
- functional participant,
- technical service identity.

---

# 15. Proxy Access

Proxy can be useful for controlled troubleshooting and delegation.

SAP's current Onboarding guidance notes that proxy users may require specific permissions for areas such as Employee Central, People Profile, Goal Management and Home Page, depending on the onboarding activities being performed. citeturn0search1turn0search5

Proxy design should answer:

- who may proxy,
- whom they may proxy,
- what permissions are inherited,
- why the proxy is needed,
- how it is audited,
- when it expires.

---

# 16. 20 Deep Scenario-Based Interview Questions

## Q1. How would you design RBP for SAP SuccessFactors Onboarding?

### Strong answer

I start with personas rather than permissions.

First identify:

- new hire,
- hiring manager,
- recruiter,
- HR,
- IT,
- Payroll,
- Compliance,
- Onboarding Admin,
- Support,
- service/integration users.

Then for each persona define:

**Business responsibility → capability → data → population → task → permission → negative access**

Finally I test both:

**What they can do**

and

**What they must not be able to do.**

### SME signal

> **Security design starts with operating-model accountability, not the permission catalogue.**

---

## Q2. A hiring manager can see the task but cannot complete it. What do you check?

Use this diagnostic chain:

**Task exists?**

↓

**Correct owner?**

↓

**Responsible Group?**

↓

**Task permission?**

↓

**Object permission?**

↓

**Employee Data permission?**

↓

**Target population?**

↓

**Role assignment?**

↓

**Process state?**

SAP's current guidance identifies task permissions, Employee Data, Onboarding/Offboarding object permissions and target-population role assignments as relevant security controls. citeturn0search1

---

## Q3. A manager can see another employee's onboarding data. How do you troubleshoot?

This is a potential **target-population/security-boundary defect**.

Check:

1. assigned role,
2. role assignment,
3. target population,
4. manager relationship,
5. dynamic group membership,
6. Employee Data permissions,
7. object permissions,
8. external onboarding population,
9. data-blocking configuration where applicable.

Then reproduce using:

- manager A,
- employee A,
- employee B,
- manager B.

### Principle

> **Never validate security with only one user.**

---

## Q4. How would you design a least-privilege Hiring Manager role?

Start with the manager's actual tasks.

Example:

### Required
- view relevant employee data,
- complete assigned tasks,
- view relevant documents,
- manage buddy/equipment tasks if assigned.

### Not required
- global employee export,
- system configuration,
- all compliance administration,
- all onboarding objects,
- BPE administration.

Then define target population around the manager's legitimate workforce scope.

---

## Q5. Why shouldn't you simply give Hiring Managers all Onboarding permissions?

Because functional convenience can create excessive access.

It can expose:

- unrelated employee data,
- documents,
- compliance information,
- administrative objects,
- configuration capabilities.

Security should follow:

**Need → Permission → Population**

not:

**Role → Select All**

---

## Q6. How would you secure a Payroll role?

Start with payroll responsibilities.

Possible requirements:

- relevant employee employment data,
- payroll-related onboarding information,
- applicable compliance information,
- task completion,
- integration/reconciliation access if required.

Do not automatically grant:

- manager tasks,
- Recruiting access,
- all documents,
- all onboarding configuration,
- unrelated employee data.

### Principle

> **Functional responsibility determines access scope.**

---

## Q7. How would you secure an IT onboarding role?

Typical needs may include:

- equipment tasks,
- relevant employee identity/location/job information,
- equipment objects,
- access provisioning tasks,
- controlled population.

Avoid exposing:

- compensation,
- bank information,
- unrelated compliance data,
- broad HR administration.

This is a classic **purpose-based access** design.

---

## Q8. What is the difference between Employee Data permission and Onboarding Object permission?

### Employee Data

Controls access to employee information/fields.

### Onboarding Object Permission

Controls access to onboarding-related objects/features represented in the permission model.

Example:

**Employee Data → Location**

versus

**Onboarding Object → Equipment Task**

Both may be required for a task to work correctly.

### SME signal

> **A task can fail because the user can access the task object but not the data the task requires.**

---

## Q9. How do Responsible Groups and RBP work together?

Responsible Group determines **operational ownership**.

RBP determines **security capability**.

Example:

**Laptop Task**

→ Responsible Group = IT

→ IT users need RBP permission for Equipment Task

→ Employee Data permissions expose only necessary employee attributes.

If any layer is missing, the process can fail operationally.

---

## Q10. How would you design new-hire permissions?

Use the narrowest possible scope:

**External Onboarding User**

→ own onboarding process

→ own permitted data

→ own tasks/forms/documents

→ no unrelated employee population

SAP's current activation guidance documents the default OnboardingExternalUser role for new hires. citeturn0search3

---

## Q11. A new hire can see data belonging to another new hire. What do you investigate?

Priority:

1. external onboarding role assignment,
2. target population,
3. external onboarding user population,
4. Employee Data permissions,
5. object permissions,
6. dynamic group configuration,
7. custom MDF visibility,
8. External User Visibility configuration.

Then test with two independent new-hire accounts.

### Severity

Treat cross-user personal-data exposure as a serious security defect.

---

## Q12. How would you design administrator security?

Separate administrator personas.

### Configuration Administrator

Needs:

- configuration,
- data model,
- business rules,
- object permissions,
- process configuration.

### Operations Administrator

Needs:

- dashboards,
- process monitoring,
- cancellation/restart,
- operational management.

### Support Administrator

Needs:

- troubleshooting,
- controlled diagnostic access.

Avoid one universal super-role unless there is a justified governance reason.

---

## Q13. How would you test RBP before production?

Create a **Security Test Matrix**.

| Persona | Allowed action | Forbidden action | Expected |
|---|---|---|---|
| New Hire | Edit own data | View another hire | Pass |
| Manager | Complete assigned task | View unrelated employee | Pass |
| Recruiter | Initiate eligible hire | Initiate unauthorized population | Pass |
| IT | Complete equipment task | View bank data | Pass |
| Payroll | Access payroll-relevant data | Modify onboarding configuration | Pass |
| Admin | Configure ONB | — | Pass |

Security testing must prove both positive and negative outcomes.

---

## Q14. What is the difference between role assignment and target population?

### Role assignment

Defines **who receives the role**.

### Target population

Defines **whose data the role can act upon/access**.

Example:

A manager can receive a Hiring Manager role.

The target population can then be their relevant direct reports.

This distinction is fundamental.

---

## Q15. How would you troubleshoot an administrator who cannot see an Onboarding feature?

Check:

1. permission role,
2. administrator permission category,
3. object permission,
4. feature-specific permission,
5. target population,
6. module activation,
7. configuration dependency,
8. session/login refresh.

SAP's current administrator guidance documents multiple administrator permission categories for Onboarding and notes that permission changes may require the user to log out and back in to become effective. citeturn0search5

---

## Q16. How would you secure BPE service users?

Use:

- dedicated technical identity,
- minimum required permissions,
- no unnecessary human-user permissions,
- controlled assignment,
- credential governance,
- monitoring,
- periodic review.

The BPE service account exists to execute process-engine tasks, not to act as an HR administrator.

---

## Q17. A consultant asks you to grant Select All to finish configuration faster. What do you do?

I would separate:

### Implementation convenience

from

### Production security.

A temporary implementation role may be broader under controlled governance, but the production operating model should be redesigned around least privilege.

Before handover:

- remove unnecessary permissions,
- validate administrator roles,
- test participant roles,
- document exceptions.

### Principle

> **Build broad enough to configure; operate only as broadly as necessary.**

---

## Q18. How would you design security for a global organization?

Use:

**Global Role Template**

+

**Population-specific Role Assignments**

+

**Country/local permissions only where justified**

Example:

**Global Hiring Manager Role**

→ Manager target population

→ Country-specific compliance access only where required.

This avoids creating completely separate security architectures for every country.

---

## Q19. How would you govern RBP changes after go-live?

Use:

**Request → Impact Assessment → Approval → Change → Test → Deploy → Audit**

Track:

- requester,
- reason,
- permission changed,
- role,
- population,
- risk,
- approver,
- test evidence,
- deployment date,
- rollback plan.

High-impact security changes should receive stronger review.

---

## Q20. "Design the complete Onboarding security architecture in five minutes."

### Master answer

> "I would begin with the onboarding operating model and define personas such as new hire, hiring manager, recruiter, HR, IT, Payroll, Compliance, administrator, support and technical service users.
>
> For each persona I would map business responsibility to required capabilities, then define Employee Data permissions, Onboarding Object permissions, Compliance permissions, task permissions and administrative permissions.
>
> I would separately define role assignment and target population. This is important because the role determines capability while the target population determines whose data that capability can reach.
>
> I would use Responsible Groups for operational ownership and RBP for security enforcement. For new hires I would maintain a narrow external-user security boundary. For administrators and service users I would separate configuration and technical capabilities from normal participant access.
>
> Testing would cover positive and negative scenarios, including cross-employee visibility, unauthorized actions, task completion, sensitive data, population boundaries and administrative functions.
>
> Finally, I would establish governance for security changes, periodic access review and audit evidence. My objective is least privilege with enough operational access to complete the onboarding lifecycle reliably." 

---

# 17. Security Design Matrix

| Dimension | Question |
|---|---|
| Persona | Who is the user? |
| Responsibility | What business work do they perform? |
| Capability | What action is required? |
| Data | What information is needed? |
| Object | Which ONB object is required? |
| Population | Whose data can they access? |
| Task | Which tasks can they complete? |
| Editability | View or Edit? |
| Sensitivity | Is the data sensitive? |
| Duration | How long is access needed? |
| Delegation | Can they proxy? |
| Audit | How is access governed? |
| Negative scope | What must they not access? |

---

# 18. Security Test Matrix

## New Hire

- [ ] Can access own onboarding
- [ ] Can complete own tasks
- [ ] Can view permitted documents
- [ ] Cannot view another new hire
- [ ] Cannot administer onboarding

## Hiring Manager

- [ ] Can see assigned onboarding tasks
- [ ] Can complete permitted tasks
- [ ] Can access permitted employee fields
- [ ] Cannot access unrelated sensitive data
- [ ] Cannot administer configuration

## Recruiter

- [ ] Can initiate eligible hires
- [ ] Can access required recruiting/onboarding data
- [ ] Cannot access unnecessary payroll data
- [ ] Cannot administer unrelated ONB configuration

## IT

- [ ] Can complete IT tasks
- [ ] Can access required employee attributes
- [ ] Cannot access sensitive HR/payroll data unnecessarily

## Payroll

- [ ] Can access payroll-relevant data
- [ ] Can complete required payroll tasks
- [ ] Cannot administer ONB configuration unless explicitly required

## Administrator

- [ ] Can perform approved admin functions
- [ ] Can monitor processes
- [ ] Can perform approved recovery operations
- [ ] Access is separated by admin responsibility where appropriate

---

# 19. Security Troubleshooting Loop

When access is wrong, use:

**1. IDENTIFY USER**  
Who is experiencing the problem?

↓

**2. IDENTIFY ROLE**  
Which permission roles are assigned?

↓

**3. IDENTIFY ASSIGNMENT**  
How is the role assigned?

↓

**4. IDENTIFY POPULATION**  
What target population applies?

↓

**5. IDENTIFY PERMISSION**  
Which exact permission is missing/excessive?

↓

**6. IDENTIFY OBJECT**  
Which ONB object is involved?

↓

**7. IDENTIFY DATA**  
Which employee field is involved?

↓

**8. REPRODUCE**  
Can the issue be reproduced with controlled test users?

↓

**9. CORRECT**  
Apply the minimum required permission.

↓

**10. REGRESS**  
Confirm the fix did not expand access elsewhere.

> **USER → ROLE → ASSIGNMENT → POPULATION → PERMISSION → OBJECT → DATA → REPRODUCE → CORRECT → REGRESS**

---

# 20. Common Security Anti-Patterns

## Anti-pattern 1 — Select All

**Problem:** Excessive access.

**Fix:** Permission-by-purpose.

## Anti-pattern 2 — One Universal ONB Role

**Problem:** Every persona receives administrator-level capabilities.

**Fix:** Persona-specific roles.

## Anti-pattern 3 — Ignoring Target Population

**Problem:** Users get the right permission over the wrong population.

**Fix:** Test role + population together.

## Anti-pattern 4 — Securing tasks but not data

**Problem:** User can execute a task but sees more employee data than intended.

**Fix:** Separate task and data authorization.

## Anti-pattern 5 — Securing data but not tasks

**Problem:** User can see information but cannot perform required process steps.

**Fix:** Validate object/task permissions.

## Anti-pattern 6 — No negative testing

**Problem:** Over-permission defects reach production.

**Fix:** Test prohibited access deliberately.

## Anti-pattern 7 — Treating service accounts like people

**Problem:** Technical identities accumulate excessive human permissions.

**Fix:** Dedicated service-user security model.

## Anti-pattern 8 — No RBP change governance

**Problem:** Permissions drift over time.

**Fix:** Controlled security-change lifecycle.

---

# 21. Architecture Decision Records

## ADR-001 — Persona-Based Roles

**Decision:** Design roles around business personas and responsibilities.

**Reason:** Improve maintainability and least privilege.

---

## ADR-002 — Role vs Population

**Decision:** Treat capability and population as separate security dimensions.

**Reason:** A correct permission over the wrong population is still a security defect.

---

## ADR-003 — Responsible Group vs RBP

**Decision:** Use Responsible Groups for task ownership and RBP for authorization.

**Reason:** Separate operational workflow from access control.

---

## ADR-004 — Administrator Separation

**Decision:** Separate configuration, operations and support administrator capabilities where practical.

**Reason:** Reduce unnecessary administrative exposure.

---

## ADR-005 — Service Identity

**Decision:** Use dedicated technical identities for BPE/integration functions.

**Reason:** Avoid mixing machine access with human administrative access.

---

## ADR-006 — Negative Security Testing

**Decision:** Make forbidden-access scenarios mandatory in UAT/security testing.

**Reason:** Security is proven by both allowed and denied outcomes.

---

# 22. Quality Gates

## Gate 1 — Security Design Ready

- personas defined,
- responsibilities mapped,
- sensitive data identified,
- target populations defined.

## Gate 2 — Role Design Ready

- permission roles designed,
- task permissions mapped,
- object permissions mapped,
- employee data permissions mapped.

## Gate 3 — Configuration Ready

- roles created,
- assignments created,
- populations validated,
- service identities configured.

## Gate 4 — Security Test Ready

- test users available,
- positive scenarios available,
- negative scenarios available,
- sensitive-data scenarios available.

## Gate 5 — Production Ready

- critical security defects closed,
- least-privilege review completed,
- administrator roles reviewed,
- service accounts reviewed,
- security handover completed.

---

# 23. Rapid-Fire Interview Answers

### What is RBP?
The role-based authorization framework controlling access according to roles and populations.

### What is a permission role?
A defined set of capabilities assigned to users through role assignments.

### What is target population?
The population of employees/users over which the role's permissions apply.

### What is Employee Data permission?
Access to employee information/fields.

### What is an Onboarding Object Permission?
Access to relevant onboarding/offboarding objects.

### What is a Responsible Group?
An operational group responsible for completing assigned tasks.

### Does Responsible Group equal RBP?
No. Responsible Group determines ownership; RBP determines authorization.

### What is least privilege?
Grant only the access necessary for the business responsibility.

### How do you test security?
Positive + negative + cross-population + sensitive-data testing.

### What is your core principle?
**Right person + right capability + right population + minimum necessary data.**

---

# 24. Final Master Interview Answer

> **"I design SAP SuccessFactors Onboarding security from the operating model outward. I first identify personas such as new hires, hiring managers, recruiters, HR, IT, Payroll, Compliance, administrators, support users and technical service users.
>
> For each persona, I map business responsibility to the exact capabilities required. I then design Employee Data permissions, Onboarding Object permissions, Compliance permissions, task permissions and administrative permissions.
>
> I keep role assignment and target population as separate design dimensions. The role determines what a user can do, while the target population determines whose data the user can act upon. This is critical for manager-based and HR operational access.
>
> I use Responsible Groups for operational ownership and RBP for authorization. I keep new-hire access tightly restricted to the external onboarding population and separate participant, administrator and technical service-user security.
>
> Security testing covers both positive and negative scenarios, including unauthorized employee visibility, sensitive data, task execution, population boundaries and administrative capabilities.
>
> Finally, I establish governance for security changes, access reviews and audit evidence. My objective is not simply to make users able to perform tasks; it is to create a secure, least-privilege onboarding operating model that remains maintainable as the organization grows."**

---

# 25. Master Security Architecture Loop

Use this mental model in interviews:

**1. IDENTIFY**  
Who is the user?

↓

**2. UNDERSTAND**  
What business responsibility do they have?

↓

**3. DEFINE**  
What capability do they require?

↓

**4. SCOPE**  
Whose data can they access?

↓

**5. PROTECT**  
Which fields/objects require restriction?

↓

**6. AUTHORIZE**  
Which permissions are required?

↓

**7. ASSIGN**  
How is the role assigned?

↓

**8. TEST**  
Can they do what they should and not what they shouldn't?

↓

**9. GOVERN**  
How are changes reviewed?

↓

**10. AUDIT**  
Can the organization demonstrate appropriate access?

> **IDENTIFY → UNDERSTAND → DEFINE → SCOPE → PROTECT → AUTHORIZE → ASSIGN → TEST → GOVERN → AUDIT**

---

# 26. SuccessLabs Mastery Lens

### KNOW
Understand RBP, permission roles, target populations, object permissions and task permissions.

### DESIGN
Architect persona-based least-privilege security.

### DELIVER
Configure roles, assignments, populations and permissions.

### SOLVE
Troubleshoot missing or excessive access.

### INFLUENCE
Translate business accountability into security architecture.

### TRANSFORM
Create a secure employee experience without unnecessary access friction.

---

# 27. 22-Pahacha Coverage

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

- [ ] What RBP is
- [ ] How RBP applies to Onboarding
- [ ] Permission roles
- [ ] Role assignments
- [ ] Target populations
- [ ] Employee Data permissions
- [ ] Onboarding Object permissions
- [ ] Compliance permissions
- [ ] Task permissions
- [ ] Hiring Manager security
- [ ] Recruiter security
- [ ] New Hire security
- [ ] IT/Payroll/Compliance security
- [ ] Responsible Groups vs RBP
- [ ] Administrator security
- [ ] BPE service-user security
- [ ] Proxy considerations
- [ ] Least-privilege architecture
- [ ] Positive and negative security testing
- [ ] RBP governance and audit
- [ ] How to troubleshoot over-permission and under-permission defects
- [ ] How to explain the complete Onboarding security architecture in an interview

---

## Closing Principle

> **The best Onboarding security architecture does not merely prevent unauthorized access. It enables every participant to perform exactly the work they are accountable for, with exactly the information they need, over exactly the population they are responsible for.**

That is the difference between **assigning permissions** and **architecting secure employee experiences**.

# APH3 — Theme 15: Risk, Controls & Security

## 20 Scenario-Based Interview Questions & STAR Answers

**Stream:** APH3 — Applied SAP SuccessFactors Performance & Goals  
**Theme:** 15 — Risk, Controls & Security  
**Target:** 20 unique scenarios  
**Answer method:** STAR — Situation → Task → Action → Result  
**Product posture:** HCM-first, SAP SuccessFactors Performance & Goals focused; risk-based security, controls, privacy, and governance.

> **Boundary:** This theme focuses on protecting sensitive performance information, access control, segregation of duties, privacy, auditability, control design, risk assessment, governance, and security-by-design. Troubleshooting belongs to Theme 13; general operations belongs to Theme 12.

**Risk & security spine:**  
**Risk → Control Objective → Threat → Control → Access → Evidence → Monitor → Test → Escalate → Improve**

---

## Q01 — How would you design security for sensitive Performance & Goals data?

### Interview Question
How would you protect employee goals, ratings, feedback, and performance forms in SuccessFactors?

### STAR Answer
**Situation:** Performance information was considered highly sensitive and required controlled visibility.

**Task:** I needed to ensure employees, managers, HR, and administrators could access only information appropriate to their roles.

**Action:** I translated business responsibilities into access requirements, applied least-privilege principles, defined role-based access, reviewed target populations, established approval and periodic review controls, and included security validation in the solution lifecycle.

**Result:** Performance information was protected through a structured security model rather than ad hoc permissions.

### SAP SuccessFactors Performance & Goals Example
I would use Role-Based Permissions and carefully defined target populations to control access to Goal Plans and Performance Forms.

### SME Probe
Why is target population as important as role assignment in HR security?

---

## Q02 — How would you apply least privilege to Performance & Goals?

### Interview Question
A support team asks for broad administrator access because Performance & Goals issues are difficult to resolve. How would you respond?

### STAR Answer
**Situation:** Support wanted broad privileges to accelerate incident resolution.

**Task:** I needed to enable effective support without exposing sensitive employee data.

**Action:** I separated diagnostic responsibilities from unrestricted administrative access, created role-specific permissions, used controlled escalation, and required elevated access only for approved activities.

**Result:** Support could perform necessary work while reducing unnecessary exposure to sensitive performance information.

### SAP SuccessFactors Performance & Goals Example
I would distinguish business support, HR administration, configuration, and security administration permissions instead of giving all teams full access.

### SME Probe
What risk does excessive administrator access create beyond confidentiality?

---

## Q03 — How would you design segregation of duties?

### Interview Question
A single administrator can configure performance rules, approve changes, and validate production results. Is that acceptable?

### STAR Answer
**Situation:** One individual had multiple powerful responsibilities across the Performance & Goals lifecycle.

**Task:** I needed to identify segregation-of-duties risk and design appropriate controls.

**Action:** I separated configuration, approval, deployment, security administration, and independent validation responsibilities where practical. Where team size made full separation difficult, I introduced compensating controls such as approvals, audit evidence, and independent review.

**Result:** The organization reduced the risk of unauthorized or unreviewed changes.

### SAP SuccessFactors Performance & Goals Example
Configuration changes to Goal Plans, Performance Forms, permissions, and business rules would follow controlled approval and validation responsibilities.

### SME Probe
What are compensating controls when complete segregation is impractical?

---

## Q04 — How would you handle an executive requesting exceptional access?

### Interview Question
An executive asks for unrestricted visibility into employee performance data. What would you do?

### STAR Answer
**Situation:** A senior stakeholder requested broad access outside the normal role model.

**Task:** I needed to respect the business need while protecting employee privacy and governance.

**Action:** I clarified the specific information required and the business purpose, assessed whether existing authorized access could satisfy it, and proposed the narrowest approved access mechanism. I escalated exceptional access through the appropriate governance process.

**Result:** The stakeholder received the required information without creating an uncontrolled access precedent.

### SAP SuccessFactors Performance & Goals Example
I would assess whether reporting, target populations, or an approved HR role can provide the required information without granting unrestricted access to all performance records.

### SME Probe
Why should seniority not automatically determine data access?

---

## Q05 — How would you manage privacy in performance-data reporting?

### Interview Question
Leadership wants a detailed performance dashboard containing employee-level ratings. How would you assess the request?

### STAR Answer
**Situation:** Leadership wanted detailed analytics for performance decisions.

**Task:** I needed to balance analytical value with employee privacy and legitimate business need.

**Action:** I assessed purpose, population, sensitivity, access, retention, aggregation options, and minimum necessary data. I proposed aggregated or role-restricted reporting where individual-level data was not essential.

**Result:** Leadership gained useful insight while reducing unnecessary exposure of sensitive employee information.

### SAP SuccessFactors Performance & Goals Example
I would distinguish enterprise-level performance trends from employee-level performance records and restrict individual data to authorized roles.

### SME Probe
What does data minimization mean in an HR analytics context?

---

## Q06 — How would you design an audit trail for performance-process changes?

### Interview Question
How would you ensure that important changes to Performance & Goals configuration and access can be traced?

### STAR Answer
**Situation:** HR needed evidence of who changed sensitive performance configuration and permissions.

**Task:** I needed to establish auditability for material administrative actions.

**Action:** I identified critical configuration and access events, assigned ownership, defined review requirements, and ensured audit evidence was retained according to governance and retention requirements.

**Result:** The organization could investigate material changes and demonstrate control effectiveness.

### SAP SuccessFactors Performance & Goals Example
I would ensure appropriate audit and change records exist for significant Goal Plan, Performance Form, permission, and business-rule changes.

### SME Probe
Which changes should receive stronger audit attention than routine support activity?

---

## Q07 — How would you assess security risk before a major performance-cycle launch?

### Interview Question
What security checks would you perform before opening a global performance cycle?

### STAR Answer
**Situation:** A major annual performance cycle was about to open to thousands of employees and managers.

**Task:** I needed to ensure sensitive performance data would be accessed correctly from day one.

**Action:** I validated role assignments, target populations, manager relationships, sensitive-data permissions, representative employee scenarios, privileged access, and known exceptions. I required evidence before business sign-off.

**Result:** The cycle opened with greater confidence that users could see what they should—and not see what they should not.

### SAP SuccessFactors Performance & Goals Example
I would test employee, manager, HR, and support personas across representative populations and Performance Forms.

### SME Probe
Why should security testing include both positive and negative access tests?

---

## Q08 — How would you test that an employee cannot see another employee's performance data?

### Interview Question
What would a negative security test look like for Performance & Goals?

### STAR Answer
**Situation:** The organization needed assurance that sensitive performance records were isolated correctly.

**Task:** I needed to prove unauthorized access was prevented.

**Action:** I created test cases across employee, manager, HR, administrator, and cross-population scenarios. I validated both expected access and explicit denial cases and recorded evidence.

**Result:** Security validation demonstrated not only who could access data, but also who was prevented from accessing it.

### SAP SuccessFactors Performance & Goals Example
I would test cross-manager, cross-business-unit, and unrelated-employee access to Goal Plans and Performance Forms.

### SME Probe
Why are negative security tests essential?

---

## Q09 — How would you manage privileged access?

### Interview Question
How would you govern highly privileged SuccessFactors administrators supporting Performance & Goals?

### STAR Answer
**Situation:** A small group of administrators had broad access required for platform management.

**Task:** I needed to minimize the risk associated with privileged accounts.

**Action:** I established named accounts, controlled privileged-role assignment, approval requirements, periodic reviews, activity monitoring, and removal of unnecessary privileges. I discouraged shared administrative identities.

**Result:** Privileged access became accountable and reviewable.

### SAP SuccessFactors Performance & Goals Example
Highly privileged configuration or security access would be restricted to authorized administrators and periodically reviewed.

### SME Probe
Why are shared administrator accounts particularly problematic?

---

## Q10 — How would you handle a security exception requested for urgent business reasons?

### Interview Question
A business leader needs temporary access to performance data immediately. How would you handle it?

### STAR Answer
**Situation:** A time-sensitive business decision required access outside the standard model.

**Task:** I needed to support the decision without permanently weakening controls.

**Action:** I assessed the exact data required, purpose, duration, approval authority, and risk. If approved, I used the narrowest temporary mechanism available and defined expiry and evidence requirements.

**Result:** The business need was met while keeping the exception controlled and time-bound.

### SAP SuccessFactors Performance & Goals Example
Temporary access would be limited to the required population or information and removed after the approved business need ended.

### SME Probe
What makes a security exception acceptable?

---

## Q11 — How would you identify the highest-risk Performance & Goals controls?

### Interview Question
You cannot test every control equally. How would you prioritize?

### STAR Answer
**Situation:** The program had limited security-testing capacity.

**Task:** I needed to focus effort on the controls with the greatest business and privacy risk.

**Action:** I assessed sensitivity, likelihood, business impact, population size, privileged access, regulatory relevance, and history of incidents. I prioritized controls protecting sensitive data and critical business decisions.

**Result:** Limited testing resources were concentrated on the highest-risk areas.

### SAP SuccessFactors Performance & Goals Example
High-priority controls would include performance-data visibility, privileged access, target populations, role assignments, and material configuration changes.

### SME Probe
What makes a control high risk rather than merely important?

---

## Q12 — How would you handle a suspected privacy breach involving performance data?

### Interview Question
A support analyst accidentally accesses performance information outside their normal population. What would you do?

### STAR Answer
**Situation:** A potential unauthorized-access event was identified.

**Task:** I needed to contain the exposure, preserve evidence, and follow the organization's incident and privacy procedures.

**Action:** I stopped further access where appropriate, documented what was accessed, by whom, when, and why, escalated according to security and privacy governance, and avoided independent deletion or alteration of evidence.

**Result:** The organization could assess the event and take appropriate containment and remediation actions.

### SAP SuccessFactors Performance & Goals Example
The incident would be evaluated against the user's permissions, target population, accessed performance objects, and audit evidence.

### SME Probe
Why is evidence preservation important during a suspected privacy incident?

---

## Q13 — How would you secure performance data used outside SuccessFactors?

### Interview Question
Performance data is exported for analytics and reporting. What controls would you consider?

### STAR Answer
**Situation:** Sensitive performance information needed to be consumed outside the core application.

**Task:** I needed to prevent the data export from becoming an uncontrolled privacy risk.

**Action:** I assessed purpose, minimum data required, destination, access, encryption, retention, ownership, and deletion requirements. I preferred controlled interfaces and minimized local copies.

**Result:** Analytics requirements were supported with lower exposure risk.

### SAP SuccessFactors Performance & Goals Example
I would ensure downstream consumption of performance data follows approved security and privacy architecture and exposes only the required information.

### SME Probe
Why can a secure source system still have an insecure data ecosystem?

---

## Q14 — How would you design controls for configuration changes?

### Interview Question
How would you prevent an unauthorized change to a Performance Form or rating configuration?

### STAR Answer
**Situation:** Performance configuration directly affected employee outcomes.

**Task:** I needed controls that prevented unauthorized or untested changes.

**Action:** I established change authorization, documented requirements, controlled configuration access, independent validation, testing evidence, approval, and auditability. High-impact changes received stronger governance.

**Result:** Configuration changes became controlled and traceable.

### SAP SuccessFactors Performance & Goals Example
Changes to rating scales, Goal Plans, Performance Forms, route maps, and business rules would require documented approval and validation.

### SME Probe
Why are configuration changes a business-control concern rather than just a technical concern?

---

## Q15 — How would you handle a conflict between usability and security?

### Interview Question
Users complain that security restrictions make the performance process difficult to use. How would you respond?

### STAR Answer
**Situation:** Strong access controls were creating legitimate user friction.

**Task:** I needed to preserve security while improving the experience.

**Action:** I identified the exact friction point, validated whether the control was necessary, and explored more precise permissions, target populations, process redesign, or better guidance. I avoided weakening controls simply to improve convenience.

**Result:** The experience improved while the underlying security objective remained intact.

### SAP SuccessFactors Performance & Goals Example
I would refine role and target-population design rather than granting broad performance-data visibility.

### SME Probe
What does “secure by design” mean for user experience?

---

## Q16 — How would you prepare for an internal or external audit?

### Interview Question
An audit is scheduled for the Performance & Goals application. How would you prepare?

### STAR Answer
**Situation:** Auditors requested evidence of access, change, privacy, and operational controls.

**Task:** I needed to demonstrate that controls were designed, operated, and evidenced consistently.

**Action:** I mapped requested controls to owners and evidence, reviewed access and privileged roles, validated change records, checked exception handling, and identified gaps before the audit.

**Result:** The organization entered the audit with evidence-backed control ownership rather than assembling documentation reactively.

### SAP SuccessFactors Performance & Goals Example
Evidence could include role reviews, target-population design, change approvals, configuration records, security testing, and audit information.

### SME Probe
What is the difference between having a control and proving that it operated?

---

## Q17 — How would you manage access reviews for Performance & Goals?

### Interview Question
How often should access be reviewed, and what would you look for?

### STAR Answer
**Situation:** Performance access changed as employees moved roles, managers changed, and HR responsibilities evolved.

**Task:** I needed to reduce accumulation of inappropriate access.

**Action:** I established periodic access reviews based on risk, validated privileged and sensitive roles, checked leavers and movers, reviewed exceptional access, and assigned accountable owners for approval.

**Result:** Access remained aligned with current responsibilities rather than historical assignments.

### SAP SuccessFactors Performance & Goals Example
I would review RBP roles, target populations, privileged access, and access associated with HR and manager responsibilities.

### SME Probe
Why are joiner-mover-leaver controls important for performance data?

---

## Q18 — How would you build security into a new Performance & Goals architecture?

### Interview Question
What does “security by design” mean when designing a new SuccessFactors performance solution?

### STAR Answer
**Situation:** A new global Performance & Goals solution was being designed.

**Task:** I needed to ensure security was an architectural property rather than a final testing activity.

**Action:** I incorporated data classification, access personas, target populations, least privilege, segregation of duties, privacy, auditability, privileged access, and security testing into requirements and solution design.

**Result:** Security decisions were made early, reducing late-stage redesign and operational risk.

### SAP SuccessFactors Performance & Goals Example
Security architecture would be defined alongside Goal Plan and Performance Form design, not after configuration was completed.

### SME Probe
Why is adding security at the end of implementation usually more expensive?

---

## Q19 — How would you respond if a control negatively affects business speed?

### Interview Question
A control requires multiple approvals and slows urgent HR decisions. How would you improve it without simply removing the control?

### STAR Answer
**Situation:** Governance controls were causing unacceptable delays for legitimate business requests.

**Task:** I needed to preserve the control objective while reducing unnecessary process friction.

**Action:** I examined the risk the control was intended to mitigate, differentiated high-risk from low-risk changes, introduced risk-based approval paths, and automated or simplified evidence collection where appropriate.

**Result:** The organization maintained control effectiveness while improving business responsiveness.

### SAP SuccessFactors Performance & Goals Example
Routine low-risk changes could follow a lighter approved path while high-impact rating, permission, or form changes retained stronger controls.

### SME Probe
Why should controls be designed around risk rather than bureaucracy?

---

## Q20 — How would you demonstrate that security and controls enable HR transformation?

### Interview Question
How would you explain the business value of security architecture for Performance & Goals to a non-technical executive?

### STAR Answer
**Situation:** Leadership viewed security primarily as a compliance obligation.

**Task:** I needed to connect security and controls to trust, business continuity, employee confidence, and decision quality.

**Action:** I linked access governance, privacy, auditability, and control effectiveness to protection of employee trust, reliable performance decisions, reduced operational risk, and sustainable HR transformation.

**Result:** Security became understood as an enabler of trusted digital HR rather than simply a technical constraint.

### SAP SuccessFactors Performance & Goals Example
Strong security and controls allow employees and managers to use Goal Plans, feedback, and Performance Forms with confidence that sensitive information is appropriately protected.

### SME Probe
What is the business consequence of losing trust in performance-data confidentiality?

---

## Completion Standard

- 20 unique risk, controls, and security scenarios completed: **HR-APH3-B15-Q01 → HR-APH3-B15-Q20**
- Every scenario follows **STAR: Situation → Task → Action → Result**.
- Every scenario includes a **SAP SuccessFactors Performance & Goals example**.
- Every scenario includes an **SME Probe**.
- Theme remains focused on **risk, access, privacy, segregation of duties, auditability, controls, security testing, governance, and security-by-design**.
- Troubleshooting/RCA is not duplicated from Theme 13.
- Operations/service management is not duplicated from Theme 12.
- Questions demonstrate security as an **architectural and business-trust concern**, not merely a configuration task.

**Cumulative APH3 coverage:** 15/22 themes = **300/440 scenario positions**

**Next:** Theme 16 — Performance & Optimization

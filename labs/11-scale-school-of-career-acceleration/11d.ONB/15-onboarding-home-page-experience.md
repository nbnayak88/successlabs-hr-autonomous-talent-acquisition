# 15. Onboarding Home Page & Experience

## SAP SuccessFactors Onboarding — Scenario-Based Interview & Architecture Guide

> **Purpose:** Master the Onboarding Home Page as an experience and orchestration layer—not simply a collection of cards. The architect must understand the new-hire journey, participant experience, cards, tasks, navigation, role-based visibility, latest versus legacy home page behavior, guided experiences, notifications, Work Zone, accessibility, personalization, security, and measurable experience outcomes.

**Current SAP alignment:** SAP's latest Home Page experience is now automatically enabled in the 1H 2026 release. SAP has also introduced/expanded Onboarding-specific cards and task access, including Employment Profile Selection, employer compliance tasks, buddy nudges, Review Growth Portfolio for internal hires, and a dedicated Onboarding Task Management page. citeturn0search0turn0search1

---

# 1. What does "Onboarding Home Page & Experience" mean?

The Onboarding Home Page is the user's experience layer for discovering and completing relevant onboarding activities.

It connects:

- New Hire
- Hiring Manager
- HR / Onboarding Administrator
- Buddy
- Compliance participants
- Other task owners

with:

- Onboarding tasks
- Checklist
- Guide
- Compliance
- Employment Profile Selection
- New Hire Details
- Notifications
- Quick Links
- Guided Experience
- Task Management

The architecture should answer five questions:

1. **What does this user need to know?**
2. **What does this user need to do?**
3. **When does the user need to do it?**
4. **Why is the task relevant?**
5. **Where should the user go next?**

---

# 2. Experience Architecture

```text
                         ONBOARDING EXPERIENCE
                                  |
             +--------------------+--------------------+
             |                    |                    |
          NEW HIRE           HIRING MANAGER        HR / ADMIN
             |                    |                    |
             v                    v                    v
       Home Page Cards       Manager Tasks       Dashboard / Tasks
             |                    |                    |
       Guide / Checklist     Buddy / Welcome     Compliance
             |                    |                    |
             +--------------------+--------------------+
                                  |
                                  v
                       ONBOARDING PROCESS ENGINE
                                  |
             +--------------------+--------------------+
             |                    |                    |
             v                    v                    v
       Employee Central      Identity / RBP       Integrations
             |                    |                    |
             +--------------------+--------------------+
                                  |
                                  v
                         MEASURABLE EXPERIENCE
```

**Architectural principle:**

> **The Home Page is the front door; the onboarding process is the engine behind it.**

A beautiful card with a broken process is still a failed experience.

---

# 3. Current SAP Experience Capabilities

## 3.1 Latest Home Page

SAP's 1H 2026 information states that the latest Home Page is automatically enabled. citeturn0search0

## 3.2 Employment Profile Selection

SAP introduced an **Employment Profile Selection** card category containing tasks such as:

- Pre-Onboarding Rehire Verification
- Onboarding Rehire Verification
- Legal Entity Transfer or Internal Hire

This card appears in the Needs Attention section of the latest Home Page. citeturn0search1

## 3.3 Task Management

SAP's 1H 2026 enhancements introduced an Onboarding-specific Task Management page accessible from the Onboarding Dashboard. Administrators can also create a custom quick link to it on the latest Home Page; SAP notes that external users should not be included in the target group for that quick link. citeturn0search0

## 3.4 Buddy Experience

SAP introduced a featured Home Page card for buddies. It appears around the new hire's start date or when relevant onboarding tasks are completed, and nudges the buddy to welcome the new hire. The cards remain available for up to 30 days after the start date. citeturn0search0

## 3.5 Internal-Hire Growth Experience

For internal hires, SAP added the Review Growth Portfolio task. It can appear in the employee's Your Onboarding Tasks card and navigate to Growth Portfolio capabilities for upcoming-role readiness, skills, goals, and learning resources. citeturn0search0

## 3.6 Compliance Experience

Employer compliance tasks can be accessed from a Compliance task card on the Home Page, with separate views for form-filling and signature activities. citeturn0search0

## 3.7 Work Zone Guided Experience

SAP SuccessFactors Work Zone can provide an Onboarding Guided Experience with three configurable phases:

1. Before Your First Day
2. Your First Day
3. Your First Three Months

SAP states that Guided Experience can connect onboarding with Learning, Goals, Mentoring, Qualtrics, and other capabilities. citeturn0search2

---

# 4. 20 Scenario-Based Interview Questions — STAR Answers

## Q1. A customer says, "The Home Page looks nice, but employees still don't know what to do." How would you solve it?

**Situation:**  
The organization has configured Home Page cards, but new hires report confusion about next actions.

**Task:**  
Turn the Home Page into an actionable onboarding experience.

**Action:**  
I would map the employee journey by phase: before Day 1, Day 1, and early tenure. I would classify information into **Know, Do, Decide, and Explore**. I would prioritize actionable tasks, make due dates visible, reduce duplicate links, and ensure each card leads to a clear next step. I would also validate the underlying task configuration rather than treating the issue as purely UX.

**Result:**  
The Home Page becomes a guided entry point instead of a collection of disconnected cards.

**Architect signal:** Experience architecture begins with the user's decision journey.

---

## Q2. How would you design the Home Page for a new hire?

**Situation:**  
A global organization wants a consistent new-hire experience.

**Task:**  
Design a simple, role-relevant experience.

**Action:**  
I would organize the experience around:
- urgent actions;
- onboarding checklist;
- onboarding guide;
- compliance;
- key people;
- Day 1 preparation;
- recommended links;
- notifications;
- support/help.

I would ensure the new hire sees only relevant content based on role, population, lifecycle, and permissions.

SAP's Best Practices show new hires using the Home Page to access onboarding tasks after receiving access information. citeturn0search3turn0search8

**Result:**  
The employee has a clear path from "I have joined" to "I know what I need to do next."

**Architect signal:** Minimize cognitive load.

---

## Q3. The hiring manager sees too many onboarding cards. What would you do?

**Situation:**  
Managers receive many tasks and notifications and cannot identify priorities.

**Task:**  
Reduce cognitive overload without removing required controls.

**Action:**  
I would inventory every manager-facing card and classify it as mandatory, time-sensitive, informational, or optional. I would consolidate redundant activities, use task ownership correctly, and move detailed administrative work to the appropriate Task Management experience where appropriate. SAP's current Task Management page provides centralized access to onboarding tasks. citeturn0search0

**Result:**  
Managers see a prioritized action set rather than an undifferentiated task backlog.

**Architect signal:** UX simplification must preserve process completeness.

---

## Q4. How would you design the Home Page differently for an internal hire?

**Situation:**  
An existing employee is moving to a new role.

**Task:**  
Avoid showing external-hire activities that are irrelevant.

**Action:**  
I would design the experience around role transition: new team, manager, key people, Day 1, equipment, goals, skills, and development. SAP's 1H 2026 enhancement allows a Review Growth Portfolio task for internal hires and surfaces it through the internal hire's Home Page experience. citeturn0search0

**Result:**  
The internal hire receives a relevant crossboarding experience instead of repeating external-hire administration.

**Architect signal:** Personalize by lifecycle, not just by user type.

---

## Q5. A buddy is assigned but never contacts the new hire. How can the Home Page help?

**Situation:**  
Buddy participation is inconsistent.

**Task:**  
Create a timely behavioral nudge.

**Action:**  
I would verify buddy assignment, start-date data, latest Home Page enablement, and the buddy card configuration. SAP documents a featured buddy Home Page card that appears around the new hire's start date and reminds the buddy to welcome and support the new hire; the cards can remain available for up to 30 days after the start date. citeturn0search0

**Result:**  
The Home Page becomes a behavioral trigger for human connection, not just task management.

**Architect signal:** Good UX can orchestrate human behavior.

---

## Q6. How would you design Home Page content for different countries?

**Situation:**  
Countries have different compliance, documents, languages, and onboarding practices.

**Task:**  
Provide localization without fragmenting the global experience.

**Action:**  
I would maintain a global information architecture and localize only relevant content. I would use country/region-specific compliance and process configuration, language-aware notifications, and controlled target groups for local quick links/cards. I would avoid creating completely different Home Pages unless the actual lifecycle requires it.

**Result:**  
Employees experience a familiar global structure with locally relevant content.

**Architect signal:** Global consistency + local relevance.

---

## Q7. A compliance task is buried and employers miss deadlines. How would you improve the experience?

**Situation:**  
Employer compliance tasks are completed late.

**Task:**  
Make compliance visible and actionable.

**Action:**  
I would validate task assignment, due dates, RBP, target population, and Home Page card visibility. SAP's current Home Page experience provides an employer Compliance card with access to form-filling and signature tasks, including separate views. citeturn0search0

**Result:**  
Compliance participants have a clear operational entry point and better task visibility.

**Architect signal:** Critical controls need high discoverability.

---

## Q8. A user cannot see an Onboarding card that another user can see. How do you troubleshoot?

**Situation:**  
Two users report different Home Page experiences.

**Task:**  
Identify whether the difference is intentional or defective.

**Action:**  
I would check:
1. User role.
2. Target population.
3. Employee/new-hire status.
4. Task assignment.
5. RBP.
6. Home Page configuration.
7. Card category.
8. Lifecycle stage.
9. Country/locale.
10. Latest versus legacy Home Page behavior.

**Result:**  
I can distinguish role-based personalization from an actual configuration defect.

**Architect signal:** Visibility is a function of **identity + role + lifecycle + configuration**.

---

## Q9. The customer wants a custom quick link to Onboarding Task Management. What would you check?

**Situation:**  
HR wants faster access to onboarding tasks.

**Task:**  
Add a useful navigation shortcut without exposing administrative functionality incorrectly.

**Action:**  
I would create the quick link with the appropriate target group and verify navigation and authorization. SAP states that the Task Management page can be added as a custom quick link on the latest Home Page, and specifically notes that external users should not be included in the target group. citeturn0search0

**Result:**  
Authorized internal users gain faster access without exposing the administrative task-management page to external users.

**Architect signal:** Navigation is also a security boundary.

---

## Q10. A new hire receives a welcome email but cannot access the Home Page. What do you investigate?

**Situation:**  
The access email was delivered but the new hire cannot enter the onboarding experience.

**Task:**  
Restore access without changing unrelated process configuration.

**Action:**  
I would validate account provisioning, temporary credentials, password reset, user status, authentication configuration, target application URL, RBP, and onboarding process status. SAP Best Practices document that the new hire receives login information and must reset the password before accessing the Onboarding Home Page. citeturn0search8

**Result:**  
The defect is isolated to identity/authentication/access rather than the Home Page content itself.

**Architect signal:** Separate **experience availability** from **identity availability**.

---

## Q11. The customer wants an onboarding experience beyond the standard Home Page. What would you propose?

**Situation:**  
The customer wants a phased, guided employee journey.

**Task:**  
Determine whether standard Home Page capabilities are sufficient.

**Action:**  
I would evaluate SAP SuccessFactors Work Zone and Onboarding Guided Experience. SAP documents three configurable phases—Before Your First Day, Your First Day, and Your First Three Months—and integrations with Learning, Goals, Mentoring, Qualtrics, and other capabilities. citeturn0search2

**Result:**  
The organization gets a longer-lived guided journey when the requirement extends beyond task cards.

**Architect signal:** Choose the experience platform based on journey scope.

---

## Q12. How would you prevent the Home Page from becoming a "card cemetery"?

**Situation:**  
Over time, the organization adds more cards, quick links, and announcements.

**Task:**  
Maintain usability as the platform grows.

**Action:**  
I would establish Home Page governance:
- card ownership;
- purpose;
- target population;
- lifecycle;
- priority;
- usage metrics;
- review date;
- retirement criteria.

I would remove redundant content and prioritize actions over static information.

**Result:**  
The Home Page remains useful rather than becoming an accumulation of historical configuration.

**Architect signal:** Every experience component needs a lifecycle.

---

## Q13. A manager wants to see every task for every new hire on one screen. How would you approach it?

**Situation:**  
A hiring manager supports many new hires and needs consolidated visibility.

**Task:**  
Provide operational visibility without exposing inappropriate data.

**Action:**  
I would evaluate the Onboarding Dashboard and current Task Management capability rather than trying to force every operational requirement into Home Page cards. SAP's 1H 2026 Task Management page centralizes onboarding-specific tasks and provides search/filter access. citeturn0search0

**Result:**  
The manager gets operational task visibility while the Home Page remains focused on personalized actions.

**Architect signal:** Use the right UI for the right job.

---

## Q14. How would you design accessibility for the onboarding experience?

**Situation:**  
The customer has a diverse workforce and accessibility obligations.

**Task:**  
Ensure the experience is usable by employees with different abilities and devices.

**Action:**  
I would validate keyboard navigation, readable hierarchy, labels, focus order, responsive behavior, contrast, screen-reader compatibility, error messaging, and avoidance of unnecessary interaction complexity. I would test real journeys rather than only static pages.

**Result:**  
The onboarding experience is more inclusive and less dependent on a single interaction method.

**Architect signal:** Accessibility is a design requirement, not a final QA checkbox.

---

## Q15. A new hire has 25 tasks. How would you reduce cognitive load without removing tasks?

**Situation:**  
The process is operationally correct but overwhelming.

**Task:**  
Make the same process feel manageable.

**Action:**  
I would group tasks into meaningful phases, expose the next best action, distinguish mandatory from optional activities, use due dates, reduce duplicate notifications, and provide contextual guidance. I would also assess whether some tasks can be consolidated or auto-completed.

**Result:**  
The process remains complete while the employee experiences a manageable sequence of decisions.

**Architect signal:** Optimize **cognitive flow**, not just task count.

---

## Q16. A task is completed but the Home Page still displays it. How do you troubleshoot?

**Situation:**  
A user sees stale task information.

**Task:**  
Determine whether the issue is process state, caching, notification state, or UI refresh.

**Action:**  
I would verify the underlying task/process status, participant assignment, timestamps, process instance, and task-management record. I would compare the Home Page with the Onboarding Dashboard/Task Management view and validate whether the task is genuinely incomplete or simply not refreshed.

**Result:**  
The root cause is isolated without changing business rules unnecessarily.

**Architect signal:** Always compare the **experience layer with the process-of-record layer**.

---

## Q17. How would you measure whether the Home Page experience is successful?

**Situation:**  
Leadership wants evidence that the redesigned experience actually improves onboarding.

**Task:**  
Define measurable experience outcomes.

**Action:**  
I would track:
- time to first onboarding action;
- task completion rate;
- overdue-task rate;
- time-to-readiness;
- Home Page/card engagement;
- drop-off rate;
- help/support requests;
- notification-to-action conversion;
- compliance completion;
- Day 1 readiness;
- internal-hire readiness;
- employee experience feedback.

SAP's Onboarding Insights also provides visibility into onboardings, drop-offs, risks, offboarding metrics, demographic comparisons, and process bottlenecks. citeturn0search0

**Result:**  
The organization can connect UX changes to operational and business outcomes.

**Architect signal:** Experience must be measurable.

---

## Q18. The customer wants Home Page onboarding notifications in Microsoft Teams. Is that possible?

**Situation:**  
Employees spend much of their working day in Microsoft Teams.

**Task:**  
Extend onboarding visibility without requiring constant navigation to SuccessFactors.

**Action:**  
I would evaluate the SAP SuccessFactors app for Microsoft Teams and the supported Onboarding notification cards. SAP's 1H 2026 documentation states that four Onboarding notification cards can be delivered in Teams, including Welcome Aboard, Your Onboarding Checklist, Your Onboarding Guide, and Compliance, subject to the documented prerequisites. citeturn0search0

**Result:**  
Relevant onboarding notifications reach users in their collaboration environment.

**Architect signal:** Meet users where work happens while preserving system-of-record ownership.

---

## Q19. A global customer wants one Home Page architecture but multiple employee journeys. How would you design it?

**Situation:**  
External hires, internal hires, executives, remote workers, and country-specific populations need different experiences.

**Task:**  
Avoid building multiple disconnected Home Page designs.

**Action:**  
I would create a common experience architecture with population-aware cards, tasks, target groups, process variants, programs, and localized content. I would keep the information hierarchy consistent while allowing the underlying onboarding process and task set to vary.

**Result:**  
Users experience a coherent global product while receiving relevant content.

**Architect signal:** Personalization should happen through **controlled composition**, not fragmentation.

---

## Q20. You are the Lead Onboarding Experience Architect. Explain your complete strategy.

**Situation:**  
A global enterprise wants a modern, personalized, measurable onboarding experience across new hires, managers, buddies, HR, compliance, internal hires, and digital workplace channels.

**Task:**  
Design the experience layer so that it simplifies the underlying process instead of hiding its complexity.

**Action:**
1. Map the complete employee journey before designing cards.
2. Define personas: new hire, manager, buddy, HR, compliance participant, administrator.
3. Identify each persona's critical decisions and actions.
4. Use the Home Page as the front door.
5. Prioritize action-oriented cards and reduce information overload.
6. Use checklist and guide experiences for structured journeys.
7. Use target groups and RBP for personalized visibility.
8. Use process variants and onboarding programs behind the experience where journey differences are real.
9. Use Task Management for operational administration rather than overloading Home Page cards.
10. Use Work Zone Guided Experience where the journey extends into the first three months.
11. Use Teams integration where collaboration-channel delivery adds value.
12. Localize content without fragmenting the global information architecture.
13. Design accessibility and mobile/responsive behavior into the journey.
14. Instrument experience KPIs.
15. Continuously remove stale, redundant, and low-value content.

**Result:**  
The enterprise gets an onboarding experience that is simple for users while remaining sophisticated underneath—personalized, secure, measurable, and connected to the complete HR lifecycle.

**Architect signal:**

> **Make the complex system feel simple without making the architecture simplistic.**

---

# 5. Experience Design Matrix

| Experience requirement | Preferred capability |
|---|---|
| New-hire next actions | Home Page cards |
| Structured employee journey | Checklist / Guide |
| Operational task management | Task Management |
| Manager onboarding work | Manager tasks / Dashboard |
| Compliance work | Compliance card |
| Internal-hire transition | Internal-hire tasks / Growth Portfolio |
| Buddy engagement | Buddy Home Page card |
| Long-form journey | Work Zone Guided Experience |
| Collaboration-channel notification | Microsoft Teams |
| Country-specific content | Target groups / localization |
| Security-sensitive content | RBP + target population |
| Process-flow difference | Process Variant Manager |
| Task-set difference | Onboarding Program |
| Analytics | Onboarding Insights / reporting |

---

# 6. Experience Troubleshooting Master Loop

**IDENTIFY PERSONA → IDENTIFY LIFECYCLE → CHECK TASK ASSIGNMENT → CHECK RBP → CHECK TARGET GROUP → CHECK CARD CONFIGURATION → CHECK PROCESS STATE → CHECK NAVIGATION → CHECK NOTIFICATION → CHECK DATA/LOCALE → RECONCILE EXPERIENCE WITH PROCESS**

### First questions in an incident

1. Who is the user?
2. What lifecycle stage are they in?
3. What task should they see?
4. Was the task actually assigned?
5. Is the user authorized to see it?
6. Is the target group correct?
7. Is the latest Home Page active?
8. Is the card configured for this population?
9. Does the underlying process instance show the expected state?
10. Is the issue UI visibility or process execution?

---

# 7. Architecture Decision Records

### ADR-01 — Home Page as experience layer
Do not make the Home Page the system of record.

### ADR-02 — Action over information
Prioritize tasks and decisions over static content.

### ADR-03 — Persona-based experience
Design separately for new hire, manager, buddy, HR, and compliance users.

### ADR-04 — Controlled personalization
Use target groups, RBP, programs, and process configuration rather than uncontrolled duplication.

### ADR-05 — Operational task separation
Use Task Management/Dashboard for administration rather than overloading the Home Page.

### ADR-06 — Global information architecture
Keep global navigation consistent while localizing content.

### ADR-07 — Experience observability
Measure user behavior and process outcomes together.

### ADR-08 — Experience lifecycle governance
Every card, link, notification, and content component needs an owner and review date.

---

# 8. Quality Gates

- [ ] Personas defined.
- [ ] Employee journey mapped.
- [ ] Critical actions identified.
- [ ] Card architecture documented.
- [ ] Target populations defined.
- [ ] RBP validated.
- [ ] Latest Home Page behavior validated.
- [ ] Checklist/Guide tested.
- [ ] Task Management tested where used.
- [ ] Compliance card tested.
- [ ] Internal-hire experience tested.
- [ ] Buddy experience tested.
- [ ] Notifications tested.
- [ ] Localization tested.
- [ ] Accessibility tested.
- [ ] Mobile/responsive behavior tested.
- [ ] Work Zone tested if used.
- [ ] Teams integration tested if used.
- [ ] Underlying process states reconciled.
- [ ] Experience KPIs defined.

---

# 9. Anti-Patterns

### ❌ Designing cards before mapping the journey
Creates fragmented UX.

### ❌ Treating the Home Page as the process engine
The process engine and experience layer have different responsibilities.

### ❌ Showing every possible task
Creates cognitive overload.

### ❌ Giving all users the same content
Ignores persona and lifecycle context.

### ❌ Using cards to compensate for broken processes
A UI cannot repair a failed backend lifecycle.

### ❌ Ignoring RBP
Creates visibility and privacy defects.

### ❌ Creating a different Home Page for every country
Creates unnecessary experience fragmentation.

### ❌ Keeping obsolete cards forever
Creates experience debt.

### ❌ Measuring clicks only
Clicks do not prove onboarding success.

### ❌ Ignoring accessibility
Creates exclusion and usability barriers.

---

# 10. Rapid-Fire Interview Answers

**What is the Home Page's role?**  
The experience entry point for relevant onboarding actions and information.

**Is the Home Page the process engine?**  
No. It is the experience layer over the onboarding process.

**What is the latest Home Page status in 1H 2026?**  
SAP states the latest Home Page is automatically enabled. citeturn0search0

**What is Employment Profile Selection?**  
A card category containing tasks such as rehire verification and Legal Entity Transfer/Internal Hire. citeturn0search1

**Can Task Management be accessed from the Home Page?**  
Yes, SAP documents a custom quick link to the Onboarding Task Management page; external users should not be included in its target group. citeturn0search0

**Can buddies receive Home Page prompts?**  
Yes. SAP documents a buddy onboarding card in the latest Home Page experience. citeturn0search0

**Can employer compliance tasks appear on the Home Page?**  
Yes, through the Compliance task card. citeturn0search0

**Can internal hires receive growth-related onboarding tasks?**  
Yes. Review Growth Portfolio is supported for internal hires in 1H 2026. citeturn0search0

**Can Onboarding integrate with Work Zone?**  
Yes. SAP documents the Onboarding Guided Experience with three configurable phases. citeturn0search2

**Can Onboarding notifications appear in Teams?**  
Yes, SAP documents four supported Onboarding notification cards in Microsoft Teams. citeturn0search0

**What is the biggest Home Page governance risk?**  
Experience clutter and configuration sprawl.

**What is the core UX principle?**  
Make the next best action obvious.

---

# 11. Final Master Interview Answer

> "I design the Onboarding Home Page as the experience layer over the onboarding process, not as the process engine itself. I start with personas and the employee journey: new hire, hiring manager, buddy, HR, compliance participant, and administrator. For each persona, I identify the critical actions, information, decisions, and timing.
>
> I then use the Home Page as the front door and organize the experience around actionable cards, checklist, guide, compliance, task management, and relevant navigation. I use target groups and RBP to personalize visibility and protect sensitive information. I use Process Variant Manager and Onboarding Programs behind the experience when the underlying journey or task set genuinely differs.
>
> For longer journeys, I evaluate Work Zone Guided Experience, which can organize onboarding into Before Your First Day, Your First Day, and Your First Three Months. For collaboration-heavy environments, I evaluate supported Microsoft Teams notification cards.
>
> I also treat the Home Page as a governed product. Every card, quick link, notification, and content component has an owner, purpose, target population, KPI, and retirement criteria. I measure time to first action, overdue tasks, time-to-readiness, completion, drop-offs, compliance completion, and employee experience.
>
> My guiding principle is: **make the complex system feel simple without making the architecture simplistic.**"

---

# 12. SuccessLabs Mastery Lens

## KNOW
Understand Home Page, cards, checklist, guide, task management, personas, target groups, Work Zone, and Teams.

## DESIGN
Design experience architecture around user intent, lifecycle, and cognitive flow.

## DELIVER
Configure cards, tasks, quick links, target groups, notifications, and guided experiences.

## SOLVE
Diagnose visibility, assignment, RBP, navigation, process-state, and notification issues.

## INFLUENCE
Align HR, UX, IT, security, managers, buddies, and employees around experience outcomes.

## TRANSFORM
Turn onboarding from a task-completion exercise into a guided employee experience.

---

# 13. 22-Pahacha Coverage

| Pahacha | Home Page & Experience mastery |
|---|---|
| 01 Domain Foundation | Onboarding experience lifecycle |
| 02 Product & Technology Knowledge | Home Page, cards, Task Management |
| 03 Business Process & Operating Context | Persona journeys |
| 04 Data & Information Model | User, task, lifecycle, target-group data |
| 05 Requirement Analysis | Experience requirements |
| 06 Solution Design Awareness | Experience architecture |
| 07 Configuration / Development Awareness | Cards, quick links, programs |
| 08 Architecture & Integration Awareness | Work Zone, Teams, process engine |
| 09 Implementation Awareness | Experience configuration |
| 10 Migration & Data Readiness | Legacy-to-latest experience considerations |
| 11 Testing & Quality Awareness | Persona-based UX testing |
| 12 Release, Adoption & Support | Home Page release governance |
| 13 Troubleshooting Mindset | Experience-to-process diagnosis |
| 14 Incident & Defect Awareness | Visibility and task defects |
| 15 Complex Scenario Thinking | Multi-persona experiences |
| 16 Optimization & Continuous Improvement | Card/task rationalization |
| 17 Stakeholder Management | HR/manager/buddy/employee |
| 18 Communication & Collaboration | Human-centered onboarding |
| 19 Advisory & Trusted SME | Experience architecture decisions |
| 20 Automation, AI & Intelligent Products | Next-best-action opportunities |
| 21 Transformation & Business Value | Time-to-readiness and experience |
| 22 Strategic Mastery & Future Vision | Experience-led employee lifecycle |

---

# 14. SuccessLabs Architecture Streams

1. **Enterprise Architect** — enterprise experience governance
2. **Business Architect** — employee onboarding operating model
3. **Integration Architect** — Work Zone, Teams, EC, process engine
4. **Domain Architect** — employee lifecycle experience
5. **Cloud & Infrastructure Architect** — scalable digital experience
6. **Application & Process Architect** — task/process orchestration
7. **AI Architect** — intelligent recommendations and next-best action
8. **Security Architect** — RBP, target population, privacy
9. **Industry Architect** — localized employee experience
10. **Data Architect** — task, persona, engagement, KPI data
11. **UI/UX Architect** — cognitive flow and accessibility
12. **Technology Architect** — cards, navigation, integrations, runtime

---

# 15. Master Loop

**MAP JOURNEY → DEFINE PERSONAS → IDENTIFY ACTIONS → COMPOSE EXPERIENCE → PERSONALIZE → SECURE → CONNECT → TEST → MEASURE → EVOLVE**

This is the core mental model for senior SAP SuccessFactors Onboarding Home Page and Experience interviews.

---

## SAP Source Alignment

- SAP Learning — **Reviewing SAP SuccessFactors Onboarding 1H 2026 Enhancements**, including latest Home Page, Task Management, buddy card, internal-hire Growth Portfolio, compliance Home Page access, and Teams notifications. citeturn0search0
- SAP Help — **New Employment Profile Selection Card on the Latest Home Page**. citeturn0search1
- SAP Learning — **Integrating SAP SuccessFactors Onboarding and SAP SuccessFactors Work Zone**, including Onboarding Guided Experience. citeturn0search2
- SAP Best Practices — **Manage Onboarding Initiated from Recruiting Test Script**, Home Page and new-hire experience. citeturn0search3
- SAP Best Practices — **Manage Onboarding Initiated Manually Test Script**, access information and Home Page entry. citeturn0search8

**Interview mantra:**

> **Make the complex system feel simple without making the architecture simplistic.**

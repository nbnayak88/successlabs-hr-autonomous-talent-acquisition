# Scenario Category 01 — Complex Candidate Experience Requirement & Solution Design

## Target Role
**SAP SuccessFactors Recruiting: Candidate Experience / Recruiting Marketing (RMK) Consultant**

## Objective
Evaluate the ability to translate complex employer-branding and candidate-experience requirements into a scalable Candidate Experience solution.

The interviewer is looking for:
- Requirement discovery
- Candidate journey understanding
- Career Site Builder solution design
- Recruiting integration awareness
- Standard-versus-extension decision making
- Localization and accessibility
- Security, privacy and governance
- Analytics and source tracking
- Testing, migration and production readiness
- Stakeholder management
- SME-level recommendation

> **Interview principle:** Do not answer only with configuration steps. Explain the business outcome, candidate journey, design choices, dependencies, trade-offs, validation and measurable result.

## 1. Global Career-Site Requirement
**Question:** A global organization wants one career experience for 20 countries, while each country needs different content, legal language, branding and job-search behavior. How would you approach it?

**STAR Answer:** First map the candidate journey and classify requirements into global standards versus legitimate local variation. Assess Career Site Builder structure, pages, components, translations, locales, branding, job-search experience, candidate actions, privacy content, accessibility and Recruiting dependencies. Create reusable global patterns and isolate only genuine local differences. Define governance, testing and analytics standards before build.

**Probes:** What should be global? How do you avoid 20 independent implementations? How do you test translated content? How does source tracking work across countries?

## 2. Standard Functionality vs Customization
**Question:** Marketing requests a highly customized career page because the standard design does not look like a competitor's site. How do you decide?

Clarify the desired candidate outcome, separate mandatory needs from visual preferences, assess standard CSB capabilities first, and evaluate any extension against maintainability, accessibility, performance, security and future release impact.

## 3. Candidate Journey Mapping
**Question:** A candidate discovers a job through social media, searches for another role, subscribes to alerts and later returns to apply. How would you design the journey?

Map discovery → landing → search → job detail → subscription → candidate data capture → return → application handoff. Identify data, tracking and integration requirements at each stage.

## 4. Accessibility and Localization
Assess impact on content, navigation, labels, forms, media, translations and testing. Establish accessibility/localization acceptance criteria before broad rollout and test representative locales and assistive-technology scenarios.

## 5. Analytics Requirement
Leadership wants to know which sources generate qualified candidates and hires. Integrate source tracking, campaign/tagging, funnel definitions and analytics into the original design rather than adding analytics afterward.

## 6. Cross-System Dependency
Trace job data from Recruiting into candidate presentation, including mapping, indexing, localization, detail-page behavior, application handoff, source tracking and analytics.

## 7. Conflicting Stakeholders
Marketing wants visual richness, Recruiting wants fast search, Legal wants disclosures, Accessibility wants simpler components. Separate non-negotiables from preferences, define decision criteria, present options and document the decision.

## 8. Production Readiness
Visual correctness alone is insufficient. Validate functionality, links, search, job data, forms, subscriptions, localization, mobile behavior, accessibility, permissions, domain/SSL, source tracking, analytics, integrations, negative scenarios and migration readiness.

## 9. Defect Root Cause
Jobs are visible in search but details are wrong. Compare failing and successful jobs and trace source data → mapping → indexing → page component → localization until the first divergence is identified.

## 10. SME vs Configurator
A Candidate Experience SME understands the end-to-end candidate journey, integration boundaries, analytics, governance and trade-offs, not merely where to click.

## Rapid-Fire
1. What is Candidate Experience?
2. How does it relate to legacy RMK terminology?
3. What is Career Site Builder?
4. What makes a career site maintainable?
5. Why is analytics part of solution design?
6. Why is accessibility a design concern?
7. What makes customization justified?
8. What proves production readiness?

## Master Framework
**DISCOVER → MAP JOURNEY → SEPARATE GLOBAL/LOCAL → DESIGN → INTEGRATE → MEASURE → TEST → MIGRATE → LAUNCH → OPTIMIZE**

# AGL4 — Theme 11: Migration & Cutover
## 20 Scenario-Based Interview Questions & STAR Answers

**Stream:** AGL4 — Applied SAP SuccessFactors Succession & Development  
**Theme:** 11 — Migration & Cutover  
**Answer method:** STAR — Situation → Task → Action → Result  
**Stable IDs:** HR-AGL4-B11-Q01 → HR-AGL4-B11-Q20

---

### HR-AGL4-B11-Q01 — Migration Strategy

**Interview Question:** How would you define a migration strategy for Succession & Development?

**STAR Answer**

**Situation:** A global organization was moving from fragmented legacy talent-management processes to SAP SuccessFactors Succession & Development.

**Task:** I needed to define what data should migrate, how it would be validated, and when it should become operational.

**Action:** I classified data into mandatory, valuable and obsolete categories; mapped legacy structures to the target model; defined transformation rules, ownership, reconciliation and migration cycles; and aligned migration with deployment waves.

**Result:** The program avoided migrating unnecessary legacy complexity and entered the target platform with a controlled talent-data baseline.

**SAP SuccessFactors Succession & Development Example:** I would explicitly assess positions, talent profiles, successor relationships, readiness, talent pools and development information before migration.

**SME Probe:** What determines whether legacy data should be migrated or archived?

---

### HR-AGL4-B11-Q02 — Data Mapping

**Interview Question:** How would you create a migration mapping for legacy succession data?

**STAR Answer**

**Situation:** Legacy succession records used different definitions for roles, readiness and talent categories.

**Task:** I had to create a reliable source-to-target mapping.

**Action:** I established source fields, target fields, transformation rules, allowed values, default behavior, data owner and validation rule for each data element. Ambiguous mappings were resolved with business owners before migration.

**Result:** The mapping became a controlled specification rather than a spreadsheet of assumptions.

**SAP SuccessFactors Succession & Development Example:** Legacy readiness categories were mapped to approved SuccessFactors readiness values with explicit business validation.

**SME Probe:** How do you handle a source value that has no valid target equivalent?

---

### HR-AGL4-B11-Q03 — Data Cleansing

**Interview Question:** How would you handle poor-quality legacy talent data before migration?

**STAR Answer**

**Situation:** Legacy data contained duplicates, inactive records, missing values and inconsistent organizational relationships.

**Task:** I needed to prevent poor-quality data from contaminating the new solution.

**Action:** I profiled the data, classified defects, assigned data owners, established cleansing rules and measured quality before every migration cycle.

**Result:** Migration quality improved and business users trusted the target talent information more quickly.

**SAP SuccessFactors Succession & Development Example:** I would cleanse duplicate talent profiles, invalid successor relationships, obsolete talent-pool membership and inconsistent position relationships.

**SME Probe:** Who owns data quality during migration: IT or the business?

---

### HR-AGL4-B11-Q04 — Migration Mock Run

**Interview Question:** Why are mock migrations important for Succession & Development?

**STAR Answer**

**Situation:** The first migration attempt exposed transformation and reconciliation problems too late in the project.

**Task:** I needed to create early evidence that the production migration was executable.

**Action:** I introduced multiple mock cycles using progressively cleaner datasets, measured duration and error rates, reconciled source-to-target totals and captured lessons after each cycle.

**Result:** The final cutover became predictable and measurable.

**SAP SuccessFactors Succession & Development Example:** Mock cycles validated talent profiles, successors, readiness data, talent pools and development records before production migration.

**SME Probe:** What makes a mock migration successful?

---

### HR-AGL4-B11-Q05 — Migration Scope

**Interview Question:** How would you decide what succession data belongs in the migration scope?

**STAR Answer**

**Situation:** Stakeholders wanted to migrate nearly all historical talent information.

**Task:** I needed to protect the target solution from unnecessary legacy complexity.

**Action:** I evaluated each data category against business value, legal/retention needs, operational usefulness, data quality and target-model compatibility. Historical information without business value was archived rather than migrated.

**Result:** Migration scope became smaller, cleaner and easier to validate.

**SAP SuccessFactors Succession & Development Example:** Current successor relationships and relevant talent information were prioritized over obsolete historical records.

**SME Probe:** How would you defend excluding a dataset requested by a senior stakeholder?

---

### HR-AGL4-B11-Q06 — Position and Organizational Data

**Interview Question:** How would you migrate succession data when position structures have changed?

**STAR Answer**

**Situation:** The legacy organization used a different position hierarchy from the target design.

**Task:** I needed to preserve meaningful succession relationships without reproducing obsolete structures.

**Action:** I mapped legacy positions to the approved target organization, resolved one-to-many and many-to-one relationships with business owners, and validated critical-role mappings before loading successor data.

**Result:** Succession relationships were aligned with the future-state organization.

**SAP SuccessFactors Succession & Development Example:** Position-based succession was migrated only after target positions and organizational relationships were validated.

**SME Probe:** What happens when a legacy critical position no longer exists?

---

### HR-AGL4-B11-Q07 — Successor Migration

**Interview Question:** How would you validate migrated successor relationships?

**STAR Answer**

**Situation:** Legacy successor nominations were being moved into the new succession model.

**Task:** I needed to ensure every migrated relationship remained valid and authorized.

**Action:** I reconciled source and target counts, validated successor-to-position relationships, checked inactive employees, tested permissions and obtained business-owner confirmation for critical positions.

**Result:** Critical succession plans were migrated with traceable evidence.

**SAP SuccessFactors Succession & Development Example:** Successors were validated against active employees, target positions and approved readiness information.

**SME Probe:** What would you do with a successor who has left the organization?

---

### HR-AGL4-B11-Q08 — Readiness Migration

**Interview Question:** How would you migrate readiness ratings when the legacy and target models differ?

**STAR Answer**

**Situation:** The legacy system used five readiness categories while the target design used a different approved scale.

**Task:** I needed to preserve business meaning rather than simply convert labels.

**Action:** I worked with talent leaders to define semantic mappings, documented exceptions and validated migrated samples against expected business interpretation.

**Result:** Readiness data remained meaningful after migration.

**SAP SuccessFactors Succession & Development Example:** Legacy readiness categories were mapped to SuccessFactors readiness values through an approved business mapping.

**SME Probe:** Why is semantic mapping more important than numeric conversion?

---

### HR-AGL4-B11-Q09 — Talent Pool Migration

**Interview Question:** How would you migrate talent-pool membership?

**STAR Answer**

**Situation:** The organization had hundreds of legacy talent pools with inconsistent definitions.

**Task:** I needed to migrate useful pools without reproducing unnecessary complexity.

**Action:** I rationalized pool definitions, identified duplicates, confirmed ownership, mapped members and validated sensitive-access rules before loading.

**Result:** The target solution had a smaller and more governed talent-pool structure.

**SAP SuccessFactors Succession & Development Example:** Talent pools were migrated only where there was a defined business purpose, owner and authorized membership model.

**SME Probe:** When should a talent pool be redesigned instead of migrated?

---

### HR-AGL4-B11-Q10 — Development Data Migration

**Interview Question:** How would you migrate development-plan information into the target solution?

**STAR Answer**

**Situation:** Legacy development plans contained activities with inconsistent status and ownership.

**Task:** I needed to preserve useful development commitments without importing obsolete plans.

**Action:** I classified active versus historical activities, mapped target development structures, validated ownership and dates, and obtained business approval for records requiring transformation.

**Result:** Employees retained relevant development information while obsolete activity was excluded or archived.

**SAP SuccessFactors Succession & Development Example:** Active development goals and activities were mapped into the approved SuccessFactors development structure.

**SME Probe:** What evidence would justify excluding an old development plan?

---

### HR-AGL4-B11-Q11 — Migration Reconciliation

**Interview Question:** How would you prove that a migration was complete and accurate?

**STAR Answer**

**Situation:** Business leaders needed confidence that critical succession information had not been lost.

**Task:** I needed objective reconciliation evidence.

**Action:** I reconciled record counts, key identifiers, relationships, critical positions, exception totals and business samples. I investigated variances rather than accepting aggregate counts alone.

**Result:** Migration sign-off was based on measurable evidence.

**SAP SuccessFactors Succession & Development Example:** I would reconcile critical positions, successors, readiness values, talent-pool membership and development records.

**SME Probe:** Why can record-count reconciliation alone be misleading?

---

### HR-AGL4-B11-Q12 — Migration Error Handling

**Interview Question:** How would you handle rejected records during migration?

**STAR Answer**

**Situation:** A migration load rejected records because of invalid references and missing mandatory data.

**Task:** I needed to correct errors without compromising the migration baseline.

**Action:** I classified errors by root cause, assigned ownership, corrected source data or transformation rules, reprocessed only affected records and reconciled the results.

**Result:** Migration defects became measurable remediation work instead of manual troubleshooting.

**SAP SuccessFactors Succession & Development Example:** Invalid successor references or missing target position relationships would be isolated, corrected and revalidated before acceptance.

**SME Probe:** When would you stop reprocessing and revisit the mapping design?

---

### HR-AGL4-B11-Q13 — Cutover Freeze

**Interview Question:** How would you manage a data freeze before Succession & Development cutover?

**STAR Answer**

**Situation:** Talent data continued changing while the final migration dataset was being prepared.

**Task:** I needed to prevent source changes from creating reconciliation gaps.

**Action:** I defined the freeze scope, communicated timing, identified emergency-change procedures, captured the final extraction timestamp and performed delta reconciliation between the mock and final loads.

**Result:** The final target dataset aligned with the agreed cutover point.

**SAP SuccessFactors Succession & Development Example:** Changes to successors, readiness, talent pools and development records during the freeze were governed through an exception process.

**SME Probe:** What happens if the business cannot accept a complete data freeze?

---

### HR-AGL4-B11-Q14 — Cutover Sequencing

**Interview Question:** How would you sequence migration activities during cutover?

**STAR Answer**

**Situation:** Several data objects had dependencies on each other.

**Task:** I needed to prevent invalid references during the final load.

**Action:** I sequenced foundational organizational data first, followed by talent-profile information and dependent succession/development relationships. I inserted validation checkpoints between stages.

**Result:** The migration minimized dependency failures and simplified troubleshooting.

**SAP SuccessFactors Succession & Development Example:** Target positions and employee relationships were validated before successor, readiness, talent-pool and development records dependent on them.

**SME Probe:** How do you determine migration object dependency order?

---

### HR-AGL4-B11-Q15 — Cutover Go/No-Go

**Interview Question:** What would make you recommend a no-go during Succession & Development migration cutover?

**STAR Answer**

**Situation:** The final migration was complete, but some critical records had unresolved errors.

**Task:** I had to protect business continuity and data integrity.

**Action:** I compared results with predefined thresholds covering critical positions, successor relationships, security, data quality, integration readiness and reconciliation. I recommended no-go when unresolved issues could materially affect business decisions or confidentiality.

**Result:** The go-live decision remained risk-based rather than schedule-driven.

**SAP SuccessFactors Succession & Development Example:** Unresolved corruption of critical succession relationships or unauthorized talent-data access would block cutover.

**SME Probe:** Who should have authority to override a no-go recommendation?

---

### HR-AGL4-B11-Q16 — Delta Migration

**Interview Question:** How would you handle changes occurring between the mock migration and production cutover?

**STAR Answer**

**Situation:** New hires, organizational changes and succession updates occurred after the final mock cycle.

**Task:** I needed to migrate only the legitimate changes without duplicating data.

**Action:** I defined delta extraction criteria, tracked changed records, reconciled deltas against the mock baseline and validated the combined production dataset.

**Result:** The final migration captured current-state changes while preserving the tested baseline.

**SAP SuccessFactors Succession & Development Example:** Changed positions, successor nominations and talent attributes were included through controlled delta processing.

**SME Probe:** What is the risk of using an uncontrolled full reload at cutover?

---

### HR-AGL4-B11-Q17 — Business Validation

**Interview Question:** How would you involve business users in migration validation?

**STAR Answer**

**Situation:** Technical reconciliation passed, but HR leaders needed to confirm that migrated talent information made business sense.

**Task:** I needed business validation without turning UAT into unrestricted data checking.

**Action:** I selected representative critical roles, regions and personas and created targeted validation scripts. Business owners verified succession relationships, readiness, talent pools and development information.

**Result:** Business sign-off focused on meaningful outcomes rather than raw technical records.

**SAP SuccessFactors Succession & Development Example:** Talent leaders validated a sample of critical positions and successor plans against authoritative legacy records.

**SME Probe:** How would you choose a representative validation sample?

---

### HR-AGL4-B11-Q18 — Migration Security

**Interview Question:** How would you protect sensitive talent data during migration?

**STAR Answer**

**Situation:** Migration involved confidential potential, readiness and succession information.

**Task:** I needed to protect data throughout extraction, transformation, transfer, loading and validation.

**Action:** I restricted access, minimized extracted data, used approved transfer mechanisms, controlled working files, logged migration activity and validated target permissions.

**Result:** Migration preserved confidentiality as well as data accuracy.

**SAP SuccessFactors Succession & Development Example:** Access to talent and succession data was restricted to authorized migration and HR roles, with post-load RBP validation.

**SME Probe:** Why is migration security part of architecture rather than only operations?

---

### HR-AGL4-B11-Q19 — Migration Rollback

**Interview Question:** How would you recover if the production migration produced unacceptable results?

**STAR Answer**

**Situation:** Post-load reconciliation revealed a serious issue affecting critical succession records.

**Task:** I needed to restore a trusted state and protect business decisions.

**Action:** I activated the predefined migration recovery plan, stopped downstream use where necessary, isolated affected records, restored or corrected data through the approved procedure and repeated reconciliation before reopening the process.

**Result:** The organization avoided making succession decisions from an unreliable dataset.

**SAP SuccessFactors Succession & Development Example:** If critical successor relationships were corrupted, access and business use would be controlled while the approved recovery and reconciliation process was executed.

**SME Probe:** What should be tested before relying on a migration rollback plan?

---

### HR-AGL4-B11-Q20 — Migration-to-Transformation

**Interview Question:** How would you ensure migration becomes a transformation opportunity rather than a copy of the legacy system?

**STAR Answer**

**Situation:** Stakeholders initially expected the new platform to reproduce every legacy succession feature.

**Task:** I needed to use migration as an opportunity to simplify the operating model.

**Action:** I challenged unnecessary legacy fields, redundant talent pools, obsolete workflows and low-value historical data. I aligned migration with the target operating model, governance, data architecture and future talent strategy.

**Result:** The organization migrated a cleaner talent foundation instead of recreating legacy complexity.

**SAP SuccessFactors Succession & Development Example:** The target model prioritized governed critical positions, meaningful talent profiles, successor readiness, development actions and workforce capability.

**SME Probe:** How do you recognize that a migration program has become a “lift-and-shift” instead of transformation?

---

## Completion Standard

- 20 / 20 unique scenarios
- 20 / 20 STAR answers
- 20 / 20 SME probes
- Stable IDs HR-AGL4-B11-Q01 → HR-AGL4-B11-Q20
- Coverage: migration strategy, mapping, cleansing, mock migration, scope, organizational data, successors, readiness, talent pools, development data, reconciliation, errors, freeze, sequencing, go/no-go, delta migration, business validation, security, rollback and transformation.
- Boundary: Succession & Development; no duplication of Employee Central, Recruiting, Onboarding, Performance & Goals, Learning or Compensation ownership.
- Progression: KNOW → DESIGN → DELIVER → SOLVE → INFLUENCE → TRANSFORM.

**Theme 11 complete: 20 / 20 scenarios.**  
**Cumulative AGL4 coverage: 11 / 22 themes = 220 / 440 scenarios.**

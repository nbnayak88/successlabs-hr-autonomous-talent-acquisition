# AGL4 — 440 Scenario Metadata Manifest

## Applied SAP SuccessFactors Succession & Development

**Status:** VALIDATED machine-readable manifest  
**Coverage:** 22 themes × 20 scenarios = 440 records  
**Primary product:** SAP SuccessFactors Succession & Development

### Transformation spine

**Employee → Talent Profile → Goals & Performance → Potential → Succession → Development → Career Mobility → Workforce Capability → Business Continuity**

### Boundary

AGL4 focuses on Succession & Development.

- APH3 owns Performance & Goals.
- ARP5 owns Compensation & Variable Pay.
- AGL4 owns succession, development, career mobility, talent pipelines and workforce capability.

### Progression

**KNOW → DESIGN → DELIVER → SOLVE → INFLUENCE → TRANSFORM**

### Stable ID

**HR-AGL4-B[THEME]-Q[01–20]**

### Record schema

| Field | Meaning |
|---|---|
| scenario_id | Stable scenario ID |
| academy | AGL4 |
| stream | Applied SAP SuccessFactors Succession & Development |
| theme_id | 01–22 |
| theme | Canonical interview theme |
| progression | KNOW/DESIGN/DELIVER/SOLVE/INFLUENCE/TRANSFORM |
| source_path | Owning STAR pack |
| capability_tags | Initial capability mapping |
| business_outcome_tags | Initial value mapping |
| difficulty_band | Theme-level initial band |
| question_index | 01–20 |
| difficulty | Scenario-level validation pending |
| probe_type | Scenario-level validation pending |
| architecture_signals | Scenario-level validation pending |
| metadata_status | BASELINE |

### Canonical theme pool

1. Domain Foundation
2. Product / Technology Knowledge
3. Process & Business Context
4. Data & Information Model
5. Requirement Analysis
6. Solution Design
7. Configuration / Development
8. Integration & Architecture
9. Testing & Quality Assurance
10. Deployment & Release
11. Migration & Cutover
12. Operations & Support
13. Troubleshooting & Root Cause Analysis
14. Scenario-Based Problem Solving
15. Risk, Controls & Security
16. Performance & Optimization
17. Stakeholder Management
18. Communication & Consulting
19. Presales / Leadership / Decision Making
20. Transformation & Roadmap
21. Innovation & Emerging Technology
22. Enterprise Architecture & Business Value

Each theme owns exactly 20 scenario IDs.

### Baseline metadata policy

The manifest establishes the **440-record canonical scenario pool** and its stable taxonomy.

Scenario-level difficulty, probe type and architecture signals must be validated from the actual STAR packs. They are not invented here.

### Validation gate

1. Extract exact scenario title.
2. Validate difficulty.
3. Classify SME probe.
4. Tag architecture signals.
5. Tag measurable business outcomes.
6. Check cross-theme duplication.
7. Mark **VALIDATED**.

**Integrity rule: evidence before metadata.**


### Final Validation Result

**VALIDATED — 440 / 440 scenario positions are represented across 22 themes.**

The canonical scenario packs remain the source of truth for question, STAR answer, Product Example and SME Probe content. This manifest provides the stable taxonomy and scenario-ID contract.

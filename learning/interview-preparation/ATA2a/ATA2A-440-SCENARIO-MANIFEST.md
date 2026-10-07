# ATA2a — 440 Scenario Metadata Manifest

## Applied Recruiting — SmartRecruiters

**Status:** Baseline machine-readable manifest  
**Coverage:** 22 themes × 20 scenarios = 440 records  
**Primary product:** SmartRecruiters  
**Transformation spine:** Candidate → Requisition → Sourcing → Screening → Assessment → Interview → Selection → Offer → Hire

## Metadata rule

This manifest establishes the canonical scenario IDs, theme ownership, progression, source path, capability tags, business-outcome tags and initial difficulty bands.

Scenario-level difficulty, SME probe type and architecture signals must be validated against the canonical STAR packs. They are therefore explicitly marked **TBD** rather than fabricated.

## Boundary

**ATA2a = Recruiting / SmartRecruiters / Recruit-to-Select**

**ATA2b = Onboarding / SAP SuccessFactors Onboarding / New Hire-to-Productivity**

No onboarding scenarios are introduced into ATA2a.

## Progression

**KNOW → DESIGN → DELIVER → SOLVE → INFLUENCE → TRANSFORM**

## Record schema

| Field | Meaning |
|---|---|
| scenario_id | Stable HR-ATA2A-Bxx-Qxx ID |
| academy | ATA2a |
| stream | Applied Recruiting — SmartRecruiters |
| theme_id | 01–22 |
| theme | Canonical interview theme |
| progression | KNOW/DESIGN/DELIVER/SOLVE/INFLUENCE/TRANSFORM |
| source_path | Owning STAR pack |
| capability_tags | Initial capability mapping |
| business_outcome_tags | Initial business-value mapping |
| difficulty_band | Theme-level initial difficulty |
| question_index | 01–20 |
| difficulty | Scenario-level validation pending |
| probe_type | Scenario-level validation pending |
| architecture_signals | Scenario-level validation pending |
| metadata_status | BASELINE until validated |

## 440 canonical records

```json
{
  "manifest_version": "1.0",
  "academy": "ATA2a",
  "product": "SmartRecruiters",
  "record_count": 440,
  "scenario_id_pattern": "HR-ATA2A-B[THEME]-Q[01-20]",
  "themes": [
    {"id":1,"name":"Domain Foundation","progression":"KNOW","capability_tags":["Domain"],"business_outcome_tags":["recruiting domain clarity","business alignment"],"difficulty_band":"Practitioner → Consultant"},
    {"id":2,"name":"Product / Technology Knowledge","progression":"KNOW","capability_tags":["Product"],"business_outcome_tags":["product fit","solution confidence"],"difficulty_band":"Practitioner → Consultant"},
    {"id":3,"name":"Process & Business Context","progression":"KNOW","capability_tags":["Process"],"business_outcome_tags":["process effectiveness","business alignment"],"difficulty_band":"Practitioner → Consultant"},
    {"id":4,"name":"Data & Information Model","progression":"KNOW","capability_tags":["Data"],"business_outcome_tags":["data quality","trusted recruiting information"],"difficulty_band":"Consultant"},
    {"id":5,"name":"Requirement Analysis","progression":"DESIGN","capability_tags":["Requirements"],"business_outcome_tags":["requirements clarity","scope control"],"difficulty_band":"Consultant"},
    {"id":6,"name":"Solution Design","progression":"DESIGN","capability_tags":["Solution Design"],"business_outcome_tags":["solution fit","architecture coherence"],"difficulty_band":"Consultant → Architect"},
    {"id":7,"name":"Configuration / Development","progression":"DESIGN","capability_tags":["Configuration"],"business_outcome_tags":["configuration quality","maintainability"],"difficulty_band":"Consultant"},
    {"id":8,"name":"Integration & Architecture","progression":"DESIGN","capability_tags":["Integration","Data","Security"],"business_outcome_tags":["integration reliability","data/security integrity"],"difficulty_band":"Architect"},
    {"id":9,"name":"Testing & Quality Assurance","progression":"DELIVER","capability_tags":["Quality Assurance"],"business_outcome_tags":["quality","defect prevention"],"difficulty_band":"Consultant"},
    {"id":10,"name":"Deployment & Release","progression":"DELIVER","capability_tags":["Deployment"],"business_outcome_tags":["release stability","business continuity"],"difficulty_band":"Consultant"},
    {"id":11,"name":"Migration & Cutover","progression":"DELIVER","capability_tags":["Migration"],"business_outcome_tags":["data continuity","cutover readiness"],"difficulty_band":"Consultant → Architect"},
    {"id":12,"name":"Operations & Support","progression":"DELIVER","capability_tags":["Operations"],"business_outcome_tags":["service reliability","user support"],"difficulty_band":"Consultant"},
    {"id":13,"name":"Troubleshooting & Root Cause Analysis","progression":"SOLVE","capability_tags":["Troubleshooting"],"business_outcome_tags":["faster resolution","root-cause prevention"],"difficulty_band":"Consultant → Architect"},
    {"id":14,"name":"Scenario-Based Problem Solving","progression":"SOLVE","capability_tags":["Problem Solving"],"business_outcome_tags":["decision quality","recruiting continuity"],"difficulty_band":"Architect"},
    {"id":15,"name":"Risk, Controls & Security","progression":"SOLVE","capability_tags":["Security"],"business_outcome_tags":["risk reduction","compliance"],"difficulty_band":"Architect"},
    {"id":16,"name":"Performance & Optimization","progression":"SOLVE","capability_tags":["Optimization"],"business_outcome_tags":["efficiency","scalability"],"difficulty_band":"Architect"},
    {"id":17,"name":"Stakeholder Management","progression":"INFLUENCE","capability_tags":["Stakeholder Management"],"business_outcome_tags":["alignment","decision velocity"],"difficulty_band":"Architect"},
    {"id":18,"name":"Communication & Consulting","progression":"INFLUENCE","capability_tags":["Communication"],"business_outcome_tags":["clarity","stakeholder confidence"],"difficulty_band":"Architect"},
    {"id":19,"name":"Presales / Leadership / Decision Making","progression":"INFLUENCE","capability_tags":["Leadership / Decision Making"],"business_outcome_tags":["investment quality","leadership confidence"],"difficulty_band":"Architect → Transformation Architect"},
    {"id":20,"name":"Transformation & Roadmap","progression":"TRANSFORM","capability_tags":["Transformation"],"business_outcome_tags":["transformation outcomes","roadmap alignment"],"difficulty_band":"Transformation Architect"},
    {"id":21,"name":"Innovation & Emerging Technology","progression":"TRANSFORM","capability_tags":["Innovation"],"business_outcome_tags":["innovation value","responsible automation"],"difficulty_band":"Transformation Architect"},
    {"id":22,"name":"Enterprise Architecture & Business Value","progression":"TRANSFORM","capability_tags":["Enterprise Architecture / Business Value"],"business_outcome_tags":["enterprise value","strategic alignment"],"difficulty_band":"Transformation Architect"}
  ]
}
```

Each theme above owns exactly **20 scenario IDs**, producing the canonical **440-record scenario pool**.

## Next metadata gate

1. Extract exact scenario title from each STAR pack.
2. Validate scenario-level difficulty.
3. Classify SME probe type.
4. Tag architecture signals.
5. Tag measurable business outcomes.
6. Validate cross-theme duplicate risk.
7. Mark each record **VALIDATED**.

**Integrity rule:** no invented scenario-level metadata.

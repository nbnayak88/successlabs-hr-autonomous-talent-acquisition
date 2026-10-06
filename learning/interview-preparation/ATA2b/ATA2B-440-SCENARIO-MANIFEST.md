# ATA2b — 440 Scenario Metadata Manifest

**Status:** Baseline machine-readable manifest  
**Coverage:** 22 themes × 20 scenarios = 440 records  
**Primary product:** SAP SuccessFactors Onboarding  
**Boundary:** ATA2a Recruiting / SmartRecruiters remains separate.

## Important metadata rule

This manifest establishes the **canonical scenario IDs, theme ownership, progression, source path, capability tags, business-outcome tags and initial difficulty band**.

It intentionally does **not fabricate scenario-level difficulty, probe type or architecture signals** where those attributes require reading and validating the individual STAR pack. Those fields are marked **TBD** and are the next tagging pass.

## Progression

**KNOW → DESIGN → DELIVER → SOLVE → INFLUENCE → TRANSFORM**

## Record schema

| Field | Meaning |
|---|---|
| scenario_id | Stable ID |
| academy | ATA2b |
| stream | Applied Onboarding |
| theme_id | 01–22 |
| theme | Canonical interview theme |
| progression | Learning progression |
| source_path | Owning STAR pack |
| capability_tags | Primary capability mapping |
| business_outcome_tags | Initial value mapping |
| difficulty_band | Theme-level initial difficulty |
| question_index | 01–20 |
| difficulty | Scenario-level validation pending |
| probe_type | Scenario-level validation pending |
| architecture_signals | Scenario-level validation pending |
| metadata_status | BASELINE until validated |

## 440 records

```json
{
  "manifest_version": "1.0",
  "academy": "ATA2b",
  "record_count": 440,
  "scenarios": [
    {
      "scenario_id": "HR-ATA2B-B01-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B01-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 1,
      "theme": "Domain Foundation",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-01-domain-foundation/00-theme-01-20-questions.md",
      "capability_tags": [
        "Domain"
      ],
      "business_outcome_tags": [
        "domain clarity",
        "process understanding"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B02-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 2,
      "theme": "Product / Technology Knowledge",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-02-product-technology-knowledge/00-theme-02-20-questions.md",
      "capability_tags": [
        "Product"
      ],
      "business_outcome_tags": [
        "product fit",
        "solution confidence"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B03-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 3,
      "theme": "Process & Business Context",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-03-process-business-context/00-theme-03-20-questions.md",
      "capability_tags": [
        "Process"
      ],
      "business_outcome_tags": [
        "process effectiveness",
        "business alignment"
      ],
      "difficulty_band": "Practitioner → Consultant",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B04-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 4,
      "theme": "Data & Information Model",
      "progression": "KNOW",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-04-data-information-model/00-theme-04-20-questions.md",
      "capability_tags": [
        "Data"
      ],
      "business_outcome_tags": [
        "data quality",
        "trusted information"
      ],
      "difficulty_band": "Consultant",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B05-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 5,
      "theme": "Requirement Analysis",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-05-requirement-analysis/00-theme-05-20-questions.md",
      "capability_tags": [
        "Requirements"
      ],
      "business_outcome_tags": [
        "requirements clarity",
        "scope control"
      ],
      "difficulty_band": "Consultant",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B06-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 6,
      "theme": "Solution Design",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-06-solution-design/00-theme-06-20-questions.md",
      "capability_tags": [
        "Solution Design"
      ],
      "business_outcome_tags": [
        "solution fit",
        "architecture coherence"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B07-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 7,
      "theme": "Configuration / Development",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-07-configuration-development/00-theme-07-20-questions.md",
      "capability_tags": [
        "Configuration"
      ],
      "business_outcome_tags": [
        "configuration quality",
        "maintainability"
      ],
      "difficulty_band": "Consultant",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B08-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 8,
      "theme": "Integration & Architecture",
      "progression": "DESIGN",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-08-integration-architecture/00-theme-08-20-questions.md",
      "capability_tags": [
        "Integration",
        "Data",
        "Security"
      ],
      "business_outcome_tags": [
        "integration reliability",
        "data/security integrity"
      ],
      "difficulty_band": "Architect",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B09-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 9,
      "theme": "Testing & Quality Assurance",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-09-testing-quality-assurance/00-theme-09-20-questions.md",
      "capability_tags": [
        "Quality Assurance"
      ],
      "business_outcome_tags": [
        "quality",
        "defect prevention"
      ],
      "difficulty_band": "Consultant",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B10-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 10,
      "theme": "Deployment & Release",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-10-deployment-release/00-theme-10-20-questions.md",
      "capability_tags": [
        "Deployment"
      ],
      "business_outcome_tags": [
        "release stability",
        "business continuity"
      ],
      "difficulty_band": "Consultant",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B11-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 11,
      "theme": "Migration & Cutover",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-11-migration-cutover/00-theme-11-20-questions.md",
      "capability_tags": [
        "Migration"
      ],
      "business_outcome_tags": [
        "data continuity",
        "cutover readiness"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B12-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 12,
      "theme": "Operations & Support",
      "progression": "DELIVER",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-12-operations-support/00-theme-12-20-questions.md",
      "capability_tags": [
        "Operations"
      ],
      "business_outcome_tags": [
        "service reliability",
        "user support"
      ],
      "difficulty_band": "Consultant",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B13-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 13,
      "theme": "Troubleshooting & Root Cause Analysis",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-13-troubleshooting-root-cause-analysis/00-theme-13-20-questions.md",
      "capability_tags": [
        "Troubleshooting"
      ],
      "business_outcome_tags": [
        "faster resolution",
        "root-cause prevention"
      ],
      "difficulty_band": "Consultant → Architect",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B14-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 14,
      "theme": "Scenario-Based Problem Solving",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-14-scenario-based-problem-solving/00-theme-14-20-questions.md",
      "capability_tags": [
        "Problem Solving"
      ],
      "business_outcome_tags": [
        "decision quality",
        "business continuity"
      ],
      "difficulty_band": "Architect",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B15-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 15,
      "theme": "Risk, Controls & Security",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-15-risk-controls-security/00-theme-15-20-questions.md",
      "capability_tags": [
        "Security"
      ],
      "business_outcome_tags": [
        "risk reduction",
        "compliance"
      ],
      "difficulty_band": "Architect",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B16-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 16,
      "theme": "Performance & Optimization",
      "progression": "SOLVE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-16-performance-optimization/00-theme-16-20-questions.md",
      "capability_tags": [
        "Optimization"
      ],
      "business_outcome_tags": [
        "efficiency",
        "scalability"
      ],
      "difficulty_band": "Architect",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B17-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 17,
      "theme": "Stakeholder Management",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-17-stakeholder-management/00-theme-17-20-questions.md",
      "capability_tags": [
        "Stakeholder Management"
      ],
      "business_outcome_tags": [
        "alignment",
        "decision velocity"
      ],
      "difficulty_band": "Architect",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B18-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 18,
      "theme": "Communication & Consulting",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-18-communication-consulting/00-theme-18-20-questions.md",
      "capability_tags": [
        "Communication"
      ],
      "business_outcome_tags": [
        "clarity",
        "stakeholder confidence"
      ],
      "difficulty_band": "Architect",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B19-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 19,
      "theme": "Presales / Leadership / Decision Making",
      "progression": "INFLUENCE",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-19-presales-leadership-decision-making/00-theme-19-20-questions.md",
      "capability_tags": [
        "Leadership / Decision Making"
      ],
      "business_outcome_tags": [
        "investment quality",
        "leadership confidence"
      ],
      "difficulty_band": "Architect → Transformation Architect",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B20-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 20,
      "theme": "Transformation & Roadmap",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-20-transformation-roadmap/00-theme-20-20-questions.md",
      "capability_tags": [
        "Transformation"
      ],
      "business_outcome_tags": [
        "transformation outcomes",
        "roadmap alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B21-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 21,
      "theme": "Innovation & Emerging Technology",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-21-innovation-emerging-technology/00-theme-21-20-questions.md",
      "capability_tags": [
        "Innovation"
      ],
      "business_outcome_tags": [
        "innovation value",
        "responsible automation"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q01",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 1,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q02",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 2,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q03",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 3,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q04",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 4,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q05",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 5,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q06",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 6,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q07",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 7,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q08",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 8,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q09",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 9,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q10",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 10,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q11",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 11,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q12",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 12,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q13",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 13,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q14",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 14,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q15",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 15,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q16",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 16,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q17",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 17,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q18",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 18,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q19",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 19,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    },
    {
      "scenario_id": "HR-ATA2B-B22-Q20",
      "academy": "ATA2b",
      "stream": "Applied Onboarding — SAP SuccessFactors Onboarding",
      "theme_id": 22,
      "theme": "Enterprise Architecture & Business Value",
      "progression": "TRANSFORM",
      "source_path": "learning/interview-preparation/ATA2b/scale-lab/theme-22-enterprise-architecture-business-value/00-theme-22-20-questions.md",
      "capability_tags": [
        "Enterprise Architecture / Business Value"
      ],
      "business_outcome_tags": [
        "enterprise value",
        "strategic alignment"
      ],
      "difficulty_band": "Transformation Architect",
      "question_index": 20,
      "difficulty": "TBD — scenario-level validation required",
      "probe_type": "TBD — scenario-level validation required",
      "architecture_signals": "TBD — refine from scenario content",
      "metadata_status": "BASELINE"
    }
  ]
}
```

## Next metadata gate

The baseline is ready for a **scenario-level tagging pass**:

1. Extract the exact scenario title.
2. Classify Practitioner / Consultant / Architect / Transformation Architect.
3. Classify SME probe type.
4. Tag relevant architecture dimensions.
5. Tag measurable business outcomes.
6. Validate cross-theme duplicate risk.
7. Mark each record **VALIDATED**.

**Rule:** metadata must be evidence-based from the canonical STAR pack; no invented scenario attributes.

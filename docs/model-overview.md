# Model Overview

## Objective

The purpose of this model is to make clinical reasoning computable without reducing it to a single score or an unstructured narrative.

In a rehabilitation context, patient understanding usually depends on multiple layers:

- what condition is being managed
- what impairments are present
- how those impairments affect function
- how function affects participation in life roles
- what risks might alter the plan
- whether the patient is improving, stable, or worsening over time

The patient state system keeps those layers visible.

## Why Notes Alone Are Not Enough

Traditional notes are useful for humans, but weak as system inputs.

Common problems:

- important reasoning is buried in prose
- state changes are hard to compare across visits
- provenance is unclear
- AI systems must infer structure from text every time
- downstream decision support becomes brittle

Structured state does not eliminate narrative. It gives narrative a stable backbone.

## State Dimensions

### Condition

The working clinical frame. This does not need to be a formal diagnosis. It is the best current explanation of what problem is being managed.

### Impairment

Symptoms, signs, physical findings, test results, and measurable deficits.

### Function

What the person can or cannot do at the activity level.

### Participation

How the current state affects work, sport, family roles, school, or other meaningful life contexts.

### Risk

Signals that may require caution, escalation, referral, or changes to intensity and follow-up.

### Trajectory

The direction of change over time, expected pace, and current response to care.

## Update Model

A useful patient state system should support incremental change.

Examples:

- impairment improves while participation remains limited
- pain decreases but fear avoidance stays high
- function improves even when imaging findings do not change
- risk increases because of a new red flag even though prior trajectory was positive

For that reason, state should be updateable by axis and not only as one monolithic blob.

## Provenance

Each observation or conclusion should be traceable to a source such as:

- patient report
- physical examination
- questionnaire
- sensor or motion data
- clinician assessment

This matters because systems should distinguish between measured data, inferred conclusions, and patient-reported experience.

## Intended Role In A Larger System

This repository is intentionally narrow.

It does not try to describe:

- authentication
- storage design
- billing
- organization models
- production APIs

Instead, it focuses on one layer that can later feed:

- documentation generation
- AI context assembly
- treatment-planning support
- longitudinal progress tracking
- clinical decision review

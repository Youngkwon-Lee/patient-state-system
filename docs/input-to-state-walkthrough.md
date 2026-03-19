# Input To State Walkthrough

This document shows the intended reading path for the repository:

1. raw input data
2. assembled patient state
3. downstream decision context

The goal is to make the reasoning path legible.

## Files To Open In Order

1. [`examples/intake-input.example.json`](../examples/intake-input.example.json)
2. [`examples/patient-state.example.json`](../examples/patient-state.example.json)
3. [`examples/decision-context.example.json`](../examples/decision-context.example.json)

## Step 1: Raw Inputs

The intake example intentionally starts with mixed source data instead of a polished state object.

It includes:

- patient-reported symptoms and activity limits
- a short questionnaire signal
- physical exam findings
- clinician interpretation notes

This reflects the real problem: the system does not begin with a perfect summary. It begins with fragments.

## Step 2: Assemble State Axes

The state layer organizes those fragments into explicit axes.

### Condition

Built from the clinician's current working frame plus consistency checks against the rest of the data.

In the example:

- the patient reports low back pain with bending and lifting
- the physical exam does not show an immediate red flag pattern
- the clinician frames the case as a mechanical low back pain presentation

That becomes the condition summary in the patient state example.

### Impairment

Built from symptoms, exam findings, and measurements.

In the example:

- pain score contributes to symptom intensity
- reduced trunk endurance contributes to measurable deficit
- pain with flexion supports the movement-related impairment picture

### Function

Built from activity-level limitations rather than symptoms alone.

In the example:

- difficulty lifting from floor level becomes more important than the pain sentence by itself

### Participation

Built from role impact.

In the example:

- warehouse duties are modified, which indicates life and work participation consequences

### Risk

Built from caution signals, barriers, and delayed-recovery factors.

In the example:

- no immediate medical red flag is carried forward
- fear of bending is carried forward as a moderate delayed-recovery risk signal

### Trajectory

Built from change over time, not just the current snapshot.

In the example:

- pain has improved over two weeks
- activity limitation still remains
- the system therefore marks trajectory as improving, but not resolved

## Step 3: Build A Decision Context

The decision context is not the same thing as the state.

State answers:

- what is true right now
- what changed
- what is risky

Decision context answers:

- what needs attention next
- what constraints or guardrails should shape planning
- what follow-up questions or reassessment targets matter most

In the example decision context:

- the primary frame is recovery-limiting low back pain with lifting intolerance
- the main planning focus is functional loading tolerance and fear-related behavior
- the system flags that there is no current red flag pattern
- the system suggests that the next review should check lifting tolerance, fear behavior, and symptom trend

## What The System Is "Thinking"

At a high level, the reasoning pattern is:

1. collect source observations
2. separate observations by meaning, not only by source
3. synthesize each axis independently
4. look for cross-axis tension
5. surface a decision-ready summary

Cross-axis tension is especially important.

Examples:

- impairment improves while participation is still restricted
- pain decreases but fear avoidance remains high
- trajectory looks positive but a new risk signal appears

Those tensions often matter more than any single datapoint.

## What This Walkthrough Does Not Claim

- it does not provide medical advice
- it does not replace clinician judgment
- it does not define the only correct mapping
- it does not describe production inference code

It is a public reasoning example designed to make the model understandable.

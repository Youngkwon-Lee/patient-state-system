import type { SourceType } from './patient-state';

export interface DecisionContextSummary {
  condition: string;
  keyImpairment: string;
  keyFunctionalLimit: string;
  keyParticipationLimit: string;
  keyRisk: string;
  trajectory: string;
}

export interface DecisionContext {
  patientId: string;
  generatedFromStateAt: string;
  primaryFrame: string;
  stateSummary: DecisionContextSummary;
  focusAreas: string[];
  planningGuardrails: string[];
  missingOrNextQuestions: string[];
  reviewTargets: string[];
  sourcePriority: SourceType[];
  notes?: string;
}

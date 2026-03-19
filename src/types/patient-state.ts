export type ConfidenceLevel = 'low' | 'medium' | 'high';

export type Trend = 'improving' | 'stable' | 'worsening' | 'unknown';

export type SourceType =
  | 'patient_report'
  | 'physical_exam'
  | 'questionnaire'
  | 'sensor'
  | 'clinician_assessment';

export type CareSetting = 'outpatient' | 'inpatient' | 'home' | 'telehealth';

export type AxisKey =
  | 'condition'
  | 'impairment'
  | 'function'
  | 'participation'
  | 'risk'
  | 'trajectory';

export interface ClinicalCode {
  system: string;
  code: string;
  display: string;
}

export interface StateObservation {
  code: ClinicalCode;
  value?: string | number | boolean;
  unit?: string;
  note?: string;
  sourceType: SourceType;
  observedAt: string;
  confidence: ConfidenceLevel;
}

export interface StateAxis {
  summary: string;
  trend: Trend;
  observations: StateObservation[];
}

export interface RiskSignal {
  name: string;
  severity: 'low' | 'moderate' | 'high';
  rationale: string;
}

export interface TrajectorySnapshot {
  phase: 'initial' | 'acute' | 'subacute' | 'recovery' | 'maintenance';
  responseToCare: Trend;
  expectedNextReviewDays?: number;
}

export interface PatientState {
  patientId: string;
  careContext: {
    setting: CareSetting;
    primaryConcern: string;
  };
  axes: Record<AxisKey, StateAxis>;
  riskSignals: RiskSignal[];
  trajectory: TrajectorySnapshot;
  lastUpdatedAt: string;
  provenance: SourceType[];
}

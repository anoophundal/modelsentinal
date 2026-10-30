/** Domain model. Mirror these in the FastAPI response schemas (Pydantic) so the UI never changes shape. */

export type IncidentStatus = "open" | "investigating" | "complete";

export interface Incident {
  id: string;
  type: string;
  status: IncidentStatus;
  statusLabel: string;
}

export interface MetricComparison {
  key: string;
  label: string;
  reference: number;
  incident: number;
  /** Backend (or fixture) marks metrics that materially degraded. */
  flagged?: boolean;
}
export interface PerformanceMetrics {
  metrics: MetricComparison[];
}

export interface FeatureDrift {
  feature: string;
  score: number;
  drifted: boolean;
}
export interface DriftEvidence {
  featureCount: number;
  threshold: number;
  features: FeatureDrift[];
}

export type HypothesisStatus = "strongly_supported" | "supported" | "insufficient_evidence" | "rejected";
export interface Hypothesis {
  id: string;
  title: string;
  status: HypothesisStatus;
  evidence: string[];
}

export type StepStatus = "complete" | "active" | "pending";
export interface InvestigationStep {
  id: string;
  label: string;
  status: StepStatus;
}

export interface AgentActivityItem {
  id: string;
  agent: string;
  message: string;
  status: StepStatus;
}

export interface InvestigationReport {
  rootCause: string;
  confidence: "Strong" | "Moderate" | "Weak";
  /** Observed facts only. */
  evidence: string[];
  /** Short statement of what the evidence implies. */
  conclusion: string;
}

export interface Investigation {
  incident: Incident;
  performance: PerformanceMetrics;
  drift: DriftEvidence;
  hypotheses: Hypothesis[];
  steps: InvestigationStep[];
  agentActivity: AgentActivityItem[];
  report: InvestigationReport;
}

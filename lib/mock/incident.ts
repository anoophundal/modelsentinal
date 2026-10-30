import type { Investigation } from "@/lib/types";

/** Fixture for bank_marketing_drift_001. Replace via lib/api.ts when the FastAPI service is live. */
export const mockInvestigation: Investigation = {
  incident: {
    id: "bank_marketing_drift_001",
    type: "Data Distribution Shift",
    status: "complete",
    statusLabel: "Investigation Complete",
  },
  performance: {
    metrics: [
      { key: "accuracy", label: "Accuracy", reference: 0.9097, incident: 0.9081 },
      { key: "precision", label: "Precision", reference: 0.6535, incident: 0.6536 },
      { key: "recall", label: "Recall", reference: 0.4849, incident: 0.4565, flagged: true },
      { key: "f1", label: "F1", reference: 0.5567, incident: 0.5376, flagged: true },
      { key: "roc_auc", label: "ROC-AUC", reference: 0.9349, incident: 0.9294 },
    ],
  },
  drift: {
    featureCount: 16,
    threshold: 0.1,
    features: [
      { feature: "age", score: 0.7559, drifted: true },
      { feature: "campaign", score: 0.6508, drifted: true },
      { feature: "balance", score: 0.238, drifted: true },
    ],
  },
  hypotheses: [
    { id: "h1", title: "Data Drift", status: "strongly_supported", evidence: ["age drift", "balance drift", "campaign drift"] },
    { id: "h2", title: "Model Regression", status: "insufficient_evidence", evidence: [] },
    { id: "h3", title: "Pipeline Issue", status: "insufficient_evidence", evidence: [] },
  ],
  steps: [
    { id: "s1", label: "Incident detected", status: "complete" },
    { id: "s2", label: "Evidence collected", status: "complete" },
    { id: "s3", label: "Hypotheses generated", status: "complete" },
    { id: "s4", label: "Diagnostics executed", status: "complete" },
    { id: "s5", label: "Hypotheses challenged", status: "complete" },
    { id: "s6", label: "Verification", status: "complete" },
    { id: "s7", label: "Root-cause report", status: "complete" },
  ],
  agentActivity: [
    { id: "a1", agent: "Evidence collector", message: "Performance metrics loaded", status: "complete" },
    { id: "a2", agent: "Drift analyzer", message: "3 features show distribution shift", status: "complete" },
    { id: "a3", agent: "Hypothesis engine", message: "3 competing hypotheses generated", status: "complete" },
    { id: "a4", agent: "Challenge engine", message: "Alternative explanations evaluated", status: "complete" },
    { id: "a5", agent: "Verification", message: "Evidence consistency check completed", status: "complete" },
  ],
  report: {
    rootCause: "Data distribution shift",
    confidence: "Strong",
    evidence: [
      "F1 decreased by 0.0191",
      "Recall decreased by 0.0284",
      "3 of 16 features showed statistically detected drift",
    ],
    conclusion:
      "The degradation in F1 and recall is best explained by a shift in the input data distribution. Model regression and pipeline issues were evaluated and had insufficient evidence.",
  },
};

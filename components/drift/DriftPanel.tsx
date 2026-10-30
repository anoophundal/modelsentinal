import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DriftChart } from "./DriftChart";
import type { DriftEvidence } from "@/lib/types";

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="text-xs text-muted">{label}</div>
      <div className="mt-0.5 font-mono text-lg text-zinc-50">{value}</div>
    </div>
  );
}

export function DriftPanel({ drift }: { drift: DriftEvidence }) {
  const drifted = drift.features.filter((f) => f.drifted).length;
  return (
    <Card className="animate-rise" style={{ animationDelay: "80ms" }}>
      <CardHeader>
        <div>
          <CardTitle>Data drift</CardTitle>
          <CardDescription>Features exceeding the drift threshold</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-3 grid grid-cols-3 gap-4">
          <Stat label="Features monitored" value={drift.featureCount} />
          <Stat label="Drifted" value={drifted} />
          <Stat label="Threshold" value={drift.threshold} />
        </div>
        <DriftChart evidence={drift} />
        <p className="mt-2 text-xs text-faint">
          {drift.featureCount - drifted} remaining features are below threshold; their scores are not part of this fixture.
        </p>
      </CardContent>
    </Card>
  );
}

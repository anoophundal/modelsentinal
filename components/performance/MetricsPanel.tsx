import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, fmt, signed } from "@/lib/utils";
import type { MetricComparison, PerformanceMetrics } from "@/lib/types";

function MetricRow({ m }: { m: MetricComparison }) {
  const delta = m.incident - m.reference;
  return (
    <li className={cn("rounded-md px-3 py-3", m.flagged ? "border border-warn/25 bg-warn/[0.04]" : "border border-transparent")}>
      <div className="flex items-baseline justify-between">
        <span className={cn("text-[13px]", m.flagged ? "font-medium text-zinc-50" : "text-zinc-300")}>{m.label}</span>
        <span className={cn("font-mono text-xs", m.flagged ? "text-warn" : "text-muted")}>{signed(delta)}</span>
      </div>
      <div className="mt-2.5 space-y-1.5">
        {[
          { name: "Reference", v: m.reference, color: "bg-zinc-600" },
          { name: "Incident", v: m.incident, color: m.flagged ? "bg-warn" : "bg-accent/70" },
        ].map((r) => (
          <div key={r.name} className="grid grid-cols-[64px_1fr_52px] items-center gap-3">
            <span className="text-[11px] text-faint">{r.name}</span>
            <div className="h-1.5 overflow-hidden rounded-full bg-raised" role="presentation">
              <div className={cn("h-full rounded-full", r.color)} style={{ width: `${r.v * 100}%` }} />
            </div>
            <span className="text-right font-mono text-xs text-zinc-300">{fmt(r.v)}</span>
          </div>
        ))}
      </div>
    </li>
  );
}

export function MetricsPanel({ performance }: { performance: PerformanceMetrics }) {
  return (
    <Card className="animate-rise">
      <CardHeader>
        <div>
          <CardTitle>Model performance</CardTitle>
          <CardDescription>Reference window vs. incident window</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-3">
        <ul className="space-y-1">{performance.metrics.map((m) => <MetricRow key={m.key} m={m} />)}</ul>
      </CardContent>
    </Card>
  );
}

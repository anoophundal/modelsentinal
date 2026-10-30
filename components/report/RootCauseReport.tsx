import { Eye, Gavel } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { InvestigationReport } from "@/lib/types";

const confTone = { Strong: "ok", Moderate: "warn", Weak: "bad" } as const;

export function RootCauseReport({ report }: { report: InvestigationReport }) {
  return (
    <Card className="animate-rise" style={{ animationDelay: "240ms" }}>
      <CardHeader>
        <div>
          <CardTitle>Root-cause report</CardTitle>
          <CardDescription>Observed evidence is kept separate from the conclusion drawn from it</CardDescription>
        </div>
      </CardHeader>
      <div className="grid md:grid-cols-[1fr_1.15fr]">
        <div className="border-b border-line p-5 md:border-b-0 md:border-r">
          <div className="flex items-center gap-2 text-xs text-muted"><Eye className="h-3.5 w-3.5" aria-hidden />Supporting evidence · observed</div>
          <ul className="mt-3 space-y-2">
            {report.evidence.map((e) => (
              <li key={e} className="rounded border border-line bg-raised px-3 py-2 font-mono text-[12.5px] text-zinc-200">{e}</li>
            ))}
          </ul>
        </div>
        <div className="bg-accent/[0.03] p-5">
          <div className="flex items-center gap-2 text-xs text-accent"><Gavel className="h-3.5 w-3.5" aria-hidden />Conclusion · inferred from evidence</div>
          <div className="mt-3 text-lg font-medium text-zinc-50">{report.rootCause}</div>
          <div className="mt-2 flex items-center gap-2 text-xs text-muted">Confidence <Badge tone={confTone[report.confidence]}>{report.confidence}</Badge></div>
          <p className="mt-4 max-w-prose text-[13px] leading-6 text-zinc-300">{report.conclusion}</p>
        </div>
      </div>
    </Card>
  );
}

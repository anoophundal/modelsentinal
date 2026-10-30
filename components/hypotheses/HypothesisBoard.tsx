import { CheckCircle2, CircleDashed } from "lucide-react";
import { Badge, type BadgeTone } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Hypothesis, HypothesisStatus } from "@/lib/types";

const STATUS: Record<HypothesisStatus, { label: string; tone: BadgeTone }> = {
  strongly_supported: { label: "Strongly supported", tone: "ok" },
  supported: { label: "Supported", tone: "accent" },
  insufficient_evidence: { label: "Insufficient evidence", tone: "quiet" },
  rejected: { label: "Rejected", tone: "bad" },
};

const isSupported = (h: Hypothesis) => h.status === "strongly_supported" || h.status === "supported";

function HypothesisCard({ h }: { h: Hypothesis }) {
  const s = STATUS[h.status];
  const supported = isSupported(h);
  return (
    <li className={cn("relative rounded-md border p-4", supported ? "border-ok/25 bg-ok/[0.03]" : "border-dashed border-line")}>
      <span className={cn("absolute inset-y-3 left-0 w-0.5 rounded-full", supported ? "bg-ok" : "bg-line")} aria-hidden />
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          {supported ? <CheckCircle2 className="h-4 w-4 text-ok" aria-hidden /> : <CircleDashed className="h-4 w-4 text-faint" aria-hidden />}
          <h3 className={cn("text-sm font-medium", supported ? "text-zinc-50" : "text-zinc-300")}>{h.title}</h3>
        </div>
        <Badge tone={s.tone}>{s.label}</Badge>
      </div>
      <div className="mt-3 pl-[26px]">
        {h.evidence.length > 0 ? (
          <>
            <div className="mb-1.5 text-xs text-muted">Linked evidence</div>
            <ul className="flex flex-wrap gap-1.5">
              {h.evidence.map((e) => (
                <li key={e} className="rounded border border-line bg-raised px-2 py-0.5 font-mono text-[11px] text-zinc-300">{e}</li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-xs text-faint">No supporting evidence linked.</p>
        )}
      </div>
    </li>
  );
}

export function HypothesisBoard({ hypotheses }: { hypotheses: Hypothesis[] }) {
  const supported = hypotheses.filter(isSupported).length;
  return (
    <Card className="animate-rise" style={{ animationDelay: "160ms" }}>
      <CardHeader>
        <div>
          <CardTitle>Hypothesis investigation</CardTitle>
          <CardDescription>{hypotheses.length} competing explanations tested against collected evidence</CardDescription>
        </div>
        <Badge tone="neutral">{supported} of {hypotheses.length} supported</Badge>
      </CardHeader>
      <CardContent>
        <ol className="space-y-3">{hypotheses.map((h) => <HypothesisCard key={h.id} h={h} />)}</ol>
      </CardContent>
    </Card>
  );
}

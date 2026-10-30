import { Check, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { InvestigationStep } from "@/lib/types";

export function Timeline({ steps }: { steps: InvestigationStep[] }) {
  return (
    <Card>
      <CardHeader><CardTitle>Investigation timeline</CardTitle></CardHeader>
      <CardContent>
        <ol>
          {steps.map((s, i) => (
            <li key={s.id} className="relative flex gap-3 pb-4 last:pb-0">
              {i < steps.length - 1 && (
                <span className={cn("absolute left-[9px] top-5 h-[calc(100%-12px)] w-px", s.status === "complete" ? "bg-ok/30" : "bg-line")} aria-hidden />
              )}
              <span className={cn("z-10 grid h-[19px] w-[19px] shrink-0 place-items-center rounded-full border bg-panel",
                s.status === "complete" ? "border-ok/40 text-ok" : s.status === "active" ? "border-accent/50 text-accent" : "border-line text-faint")}>
                {s.status === "complete" ? <Check className="h-3 w-3" aria-hidden /> : s.status === "active" ? <Loader2 className="h-3 w-3 animate-spin" aria-hidden /> : null}
              </span>
              <span className={cn("text-[13px] leading-[19px]", s.status === "pending" ? "text-faint" : "text-zinc-200")}>{s.label}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

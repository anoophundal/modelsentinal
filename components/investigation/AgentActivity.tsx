import { Check, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AgentActivityItem } from "@/lib/types";

export function AgentActivity({ items, complete }: { items: AgentActivityItem[]; complete: boolean }) {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Agent activity</CardTitle>
          <p className="mt-0.5 font-mono text-xs text-muted">ModelSentinel · {complete ? "Investigation finished" : "Investigating incident…"}</p>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3.5">
          {items.map((a) => (
            <li key={a.id}>
              <div className="text-xs text-muted">{a.agent}</div>
              <div className="mt-0.5 flex items-start gap-2 font-mono text-[12.5px] text-zinc-200">
                {a.status === "complete" ? <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ok" aria-hidden /> : <Loader2 className="mt-0.5 h-3.5 w-3.5 shrink-0 animate-spin text-accent" aria-hidden />}
                {a.message}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

import { Badge } from "@/components/ui/badge";
import type { Incident } from "@/lib/types";

const tone = { open: "bad", investigating: "warn", complete: "ok" } as const;

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="min-w-0">
      <dt className="text-xs text-muted">{label}</dt>
      <dd className="mt-1 truncate text-sm text-zinc-100">{children}</dd>
    </div>
  );
}

export function IncidentSummary({ incident }: { incident: Incident }) {
  return (
    <dl className="grid grid-cols-1 gap-x-10 gap-y-4 rounded-lg border border-line bg-panel px-5 py-4 sm:grid-cols-3">
      <Item label="Incident ID"><span className="font-mono text-[13px]">{incident.id}</span></Item>
      <Item label="Incident type">{incident.type}</Item>
      <Item label="Status"><Badge tone={tone[incident.status]}>{incident.statusLabel}</Badge></Item>
    </dl>
  );
}

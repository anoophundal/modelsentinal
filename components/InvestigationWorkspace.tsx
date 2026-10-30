import { Header } from "@/components/layout/Header";
import { IncidentSummary } from "@/components/incident/IncidentSummary";
import { MetricsPanel } from "@/components/performance/MetricsPanel";
import { DriftPanel } from "@/components/drift/DriftPanel";
import { HypothesisBoard } from "@/components/hypotheses/HypothesisBoard";
import { RootCauseReport } from "@/components/report/RootCauseReport";
import { Timeline } from "@/components/investigation/Timeline";
import { AgentActivity } from "@/components/investigation/AgentActivity";
import type { Investigation } from "@/lib/types";

export function InvestigationWorkspace({ data }: { data: Investigation }) {
  return (
    <div className="min-h-screen">
      <Header active />
      <main className="mx-auto max-w-[1400px] space-y-5 px-5 py-6 lg:px-8">
        <IncidentSummary incident={data.incident} />
        <div className="grid items-start gap-5 xl:grid-cols-[1fr_300px]">
          <div className="min-w-0 space-y-5">
            <div className="grid gap-5 lg:grid-cols-2">
              <MetricsPanel performance={data.performance} />
              <DriftPanel drift={data.drift} />
            </div>
            <HypothesisBoard hypotheses={data.hypotheses} />
            <RootCauseReport report={data.report} />
          </div>
          <aside className="space-y-5 xl:sticky xl:top-6">
            <Timeline steps={data.steps} />
            <AgentActivity items={data.agentActivity} complete={data.incident.status === "complete"} />
          </aside>
        </div>
      </main>
    </div>
  );
}

import { getInvestigation } from "@/lib/api";
import { InvestigationWorkspace } from "@/components/InvestigationWorkspace";

export default async function Page() {
  const data = await getInvestigation("bank_marketing_drift_001");
  return <InvestigationWorkspace data={data} />;
}

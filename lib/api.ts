import type { Investigation } from "@/lib/types";
import { mockInvestigation } from "@/lib/mock/incident";

/**
 * Single data-access seam for the UI.
 * Set NEXT_PUBLIC_API_BASE_URL (e.g. http://localhost:8000) to switch from fixtures to the FastAPI service.
 * Expected endpoint: GET {BASE}/incidents/{id}/investigation -> Investigation
 */
const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getInvestigation(incidentId: string): Promise<Investigation> {
  if (!BASE) return mockInvestigation;
  const res = await fetch(`${BASE}/incidents/${encodeURIComponent(incidentId)}/investigation`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load investigation ${incidentId}: ${res.status}`);
  return (await res.json()) as Investigation;
}

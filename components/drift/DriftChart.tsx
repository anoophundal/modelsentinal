"use client";

import { Bar, BarChart, Cell, LabelList, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { DriftEvidence } from "@/lib/types";

export function DriftChart({ evidence }: { evidence: DriftEvidence }) {
  const data = [...evidence.features].sort((a, b) => b.score - a.score);
  return (
    <div className="h-[200px] w-full" role="img" aria-label="Drift score per drifted feature against threshold">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 18, right: 52, bottom: 0, left: 4 }} barSize={16}>
          <XAxis type="number" domain={[0, 1]} ticks={[0, 0.25, 0.5, 0.75, 1]} tick={{ fill: "#5b616b", fontSize: 11 }} axisLine={{ stroke: "#1d2128" }} tickLine={false} />
          <YAxis type="category" dataKey="feature" width={72} tick={{ fill: "#d4d4d8", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            cursor={{ fill: "rgba(255,255,255,0.03)" }}
            contentStyle={{ background: "#12151a", border: "1px solid #1d2128", borderRadius: 6, fontSize: 12 }}
            formatter={(v: unknown) => [Number(v).toFixed(4), "Drift score"]}
          />
          <ReferenceLine x={evidence.threshold} stroke="#8a919c" strokeDasharray="3 3" label={{ value: `threshold ${evidence.threshold}`, position: "top", fill: "#8a919c", fontSize: 11 }} />
          <Bar dataKey="score" radius={[0, 3, 3, 0]}>
            {data.map((d) => <Cell key={d.feature} fill={d.drifted ? "#f2a65a" : "#3f434b"} />)}
            <LabelList dataKey="score" position="right" formatter={(v: unknown) => Number(v).toFixed(4)} fill="#d4d4d8" fontSize={11} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

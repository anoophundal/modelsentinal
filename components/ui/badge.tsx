import * as React from "react";
import { cn } from "@/lib/utils";

const tones = {
  neutral: "border-line bg-raised text-zinc-300",
  accent: "border-accent/30 bg-accent/10 text-accent",
  ok: "border-ok/30 bg-ok/10 text-ok",
  warn: "border-warn/30 bg-warn/10 text-warn",
  bad: "border-bad/30 bg-bad/10 text-bad",
  quiet: "border-dashed border-line bg-transparent text-muted",
} as const;
export type BadgeTone = keyof typeof tones;

export function Badge({ tone = "neutral", className, ...p }: React.HTMLAttributes<HTMLSpanElement> & { tone?: BadgeTone }) {
  return (
    <span
      className={cn("inline-flex items-center gap-1.5 rounded border px-2 py-0.5 text-[11px] font-medium leading-5", tones[tone], className)}
      {...p}
    />
  );
}

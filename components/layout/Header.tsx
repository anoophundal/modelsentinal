import { ShieldCheck } from "lucide-react";

export function Header({ active }: { active: boolean }) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <div className="flex items-center gap-3.5">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-line bg-raised text-accent">
            <ShieldCheck className="h-[18px] w-[18px]" aria-hidden />
          </span>
          <div>
            <h1 className="text-[15px] font-semibold tracking-[0.18em] text-zinc-50">MODEL SENTINEL</h1>
            <p className="text-xs text-muted">AI that investigates why your models fail — not just that they failed.</p>
          </div>
        </div>
        {active && (
          <div className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-panel px-3 py-1.5 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 animate-beat rounded-full bg-ok" aria-hidden />
            Investigation Active
          </div>
        )}
      </div>
    </header>
  );
}

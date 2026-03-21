import { Button } from "@/components/ui/Button";

export function DashboardHeader() {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Operations Snapshot</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Live support triage dashboard</h3>
        <p className="mt-2 text-sm text-slate-300">High-visibility overview of incoming tickets, priority distribution, and recent routing activity.</p>
      </div>
      <Button href="/submit">New Request</Button>
    </div>
  );
}

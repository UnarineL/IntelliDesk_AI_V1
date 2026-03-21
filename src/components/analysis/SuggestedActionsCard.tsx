import { Card } from "@/components/ui/Card";

export function SuggestedActionsCard({ actions }: { actions: string[] }) {
  return (
    <Card className="rounded-[2rem] p-6 md:p-8">
      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Recommended Actions</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">Operational next steps</h3>
      <div className="mt-5 space-y-3">
        {actions.map((action, index) => (
          <div key={action} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-semibold text-cyan-200">{index + 1}</div>
            <p className="text-sm leading-7 text-slate-300">{action}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

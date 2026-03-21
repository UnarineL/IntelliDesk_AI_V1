import { Card } from "@/components/ui/Card";

export function OriginalRequestCard({ message }: { message: string }) {
  return (
    <Card className="rounded-[2rem] p-6 md:p-8">
      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Original Input</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">Raw request</h3>
      <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/60 p-5 text-sm leading-8 text-slate-300">{message}</div>
    </Card>
  );
}

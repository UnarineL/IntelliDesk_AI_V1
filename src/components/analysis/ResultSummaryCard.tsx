import { Card } from "@/components/ui/Card";

export function ResultSummaryCard({ summary }: { summary: string }) {
  return (
    <Card className="rounded-[2rem] p-6 md:p-8">
      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Summary</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">Structured issue overview</h3>
      <p className="mt-4 text-sm leading-8 text-slate-300 md:text-base">{summary}</p>
    </Card>
  );
}

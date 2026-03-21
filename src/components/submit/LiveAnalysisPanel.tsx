import { Loader } from "@/components/ui/Loader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { sampleAnalysisSteps, tickets } from "@/lib/mock-data";
import { priorityClasses } from "@/lib/helpers";

const result = tickets[0].analysis;

export function LiveAnalysisPanel() {
  return (
    <Card className="rounded-[2rem] p-6 md:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Live Analysis Surface</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">AI processing preview</h3>
        </div>
        <Badge className="border-cyan-400/25 bg-cyan-400/10 text-cyan-200">Confidence {Math.round(result.confidence * 100)}%</Badge>
      </div>
      <div className="space-y-5">
        <Loader label="Analyzing support context" />
        <div className="grid gap-3 sm:grid-cols-2">
          {sampleAnalysisSteps.map((step) => (
            <div key={step} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">{step}</div>
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">Detected category</p>
            <p className="mt-2 text-lg font-semibold text-white">{result.category}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">Priority</p>
            <div className="mt-2"><Badge className={priorityClasses(result.priority)}>{result.priority}</Badge></div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 lg:col-span-2">
            <p className="text-sm text-slate-400">Summary</p>
            <p className="mt-2 text-sm leading-7 text-slate-200">{result.summary}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

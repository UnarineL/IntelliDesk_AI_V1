import { ShieldAlert } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AnalysisResult } from "@/lib/types";
import { PriorityBadge } from "@/components/analysis/PriorityBadge";
import { ConfidenceMeter } from "@/components/analysis/ConfidenceMeter";

export function IntelligenceGrid({ analysis }: { analysis: AnalysisResult }) {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <Card className="rounded-3xl p-5"><p className="text-sm text-slate-400">Category</p><p className="mt-2 text-lg font-semibold">{analysis.category}</p></Card>
      <Card className="rounded-3xl p-5"><p className="text-sm text-slate-400">Priority</p><div className="mt-2"><PriorityBadge priority={analysis.priority} /></div></Card>
      <Card className="rounded-3xl p-5"><p className="text-sm text-slate-400">Routed team</p><p className="mt-2 text-lg font-semibold">{analysis.routedTeam}</p></Card>
      <Card className="rounded-3xl p-5">
        <p className="text-sm text-slate-400">Security flag</p>
        <div className="mt-2 flex items-center gap-2 text-sm text-slate-200">
          <ShieldAlert className={`h-4 w-4 ${analysis.securityFlag ? 'text-rose-300' : 'text-emerald-300'}`} />
          <Badge className={analysis.securityFlag ? "border-rose-400/25 bg-rose-500/10 text-rose-300" : "border-emerald-400/25 bg-emerald-500/10 text-emerald-300"}>{analysis.securityFlag ? "Security-sensitive" : "No security flag"}</Badge>
        </div>
      </Card>
      <Card className="rounded-3xl p-5 xl:col-span-2">
        <p className="text-sm text-slate-400">Impacted services</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {analysis.impactedServices.map((service) => (
            <Badge key={service} className="border-cyan-400/25 bg-cyan-400/10 text-cyan-200">{service}</Badge>
          ))}
        </div>
        <div className="mt-6"><ConfidenceMeter confidence={analysis.confidence} /></div>
      </Card>
    </div>
  );
}

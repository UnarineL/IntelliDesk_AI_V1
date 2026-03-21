import { RequestForm } from "@/components/submit/RequestForm";
import { Card } from "@/components/ui/Card";

export function InputPanel() {
  return (
    <Card className="rounded-[2rem] p-6 md:p-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Request Intake</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Submit support request</h3>
        <p className="mt-2 text-sm leading-7 text-slate-300">This V1 screen simulates how users would enter raw issues before the AI triage engine transforms them into structured operational output.</p>
      </div>
      <RequestForm />
    </Card>
  );
}

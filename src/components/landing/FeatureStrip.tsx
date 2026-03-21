import { Brain, ShieldCheck, Split, Zap } from "lucide-react";
import { Card } from "@/components/ui/Card";

const features = [
  { title: "Issue Classification", copy: "Maps unstructured input into operational categories with controlled outputs.", icon: Brain },
  { title: "Priority Scoring", copy: "Identifies urgency and business impact before a human touches the request.", icon: Zap },
  { title: "Smart Routing", copy: "Suggests the correct support lane for faster triage and cleaner workflows.", icon: Split },
  { title: "Security Awareness", copy: "Flags suspicious or risky requests for security-sensitive escalation paths.", icon: ShieldCheck },
];

export function FeatureStrip() {
  return (
    <section id="features" className="mx-auto grid max-w-7xl gap-5 px-6 pb-16 md:grid-cols-2 xl:grid-cols-4">
      {features.map(({ title, copy, icon: Icon }) => (
        <Card key={title} className="rounded-3xl p-6">
          <div className="mb-5 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-3 text-cyan-200">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{copy}</p>
        </Card>
      ))}
    </section>
  );
}

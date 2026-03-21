import { tickets } from "@/lib/mock-data";
import { priorityClasses } from "@/lib/helpers";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function SystemPreview() {
  return (
    <section id="preview" className="mx-auto max-w-7xl px-6 pb-20">
      <div className="grid gap-8 xl:grid-cols-[1fr,1.2fr] xl:items-start">
        <SectionTitle
          eyebrow="Preview"
          title="Built to feel like a live enterprise control room"
          subtitle="The V1 frontend is designed to showcase the entire operational flow before backend wiring: request intake, AI analysis, routing, and ticket visibility."
        />
        <div className="panel-strong rounded-[2rem] p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">Dashboard Snapshot</p>
              <h3 className="mt-2 text-xl font-semibold">Recent ticket intelligence</h3>
            </div>
            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Live preview</div>
          </div>
          <div className="space-y-3">
            {tickets.slice(0, 3).map((ticket) => (
              <div key={ticket.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-white">{ticket.id}</p>
                    <p className="mt-1 text-sm text-slate-300">{ticket.summary}</p>
                  </div>
                  <Badge className={priorityClasses(ticket.priority)}>{ticket.priority}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

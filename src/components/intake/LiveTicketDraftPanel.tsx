import { TicketDraft } from "@/lib/intake-types";

interface LiveTicketDraftPanelProps {
  draft: TicketDraft | null;
  stage: string;
}

export default function LiveTicketDraftPanel({ draft, stage }: LiveTicketDraftPanelProps) {
  const priorityClasses: Record<string, string> = {
    Low: "bg-white/10 text-white/80",
    Medium: "bg-blue-500/20 text-blue-200",
    High: "bg-orange-500/20 text-orange-200",
    Critical: "bg-red-500/20 text-red-200",
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white">Live Ticket Draft</h2>
        <p className="text-sm text-white/60">Draft updates as the intake conversation becomes more specific.</p>
      </div>

      {!draft ? (
        <div className="rounded-2xl border border-dashed border-white/10 bg-black/20 p-6 text-sm text-white/45">
          {stage === "idle" ? "Start the conversation to begin building the ticket draft." : "Awaiting enough detail to build the draft."}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">Summary</div>
            <div className="text-white/90">{draft.summary}</div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <InfoCard label="Category" value={draft.category} />
            <InfoCard label="Priority" value={<span className={`inline-flex rounded-full px-3 py-1 text-sm ${priorityClasses[draft.priority]}`}>{draft.priority}</span>} />
            <InfoCard label="Routed Team" value={draft.routedTeam} />
            <InfoCard label="Security Flag" value={draft.securityFlag ? "True" : "False"} />
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">Impacted Services</div>
            <div className="flex flex-wrap gap-2">
              {draft.impactedServices.length ? draft.impactedServices.map((item) => (
                <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">{item}</span>
              )) : <span className="text-white/45">Pending</span>}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">Recommended Actions</div>
            <ul className="space-y-2 text-sm text-white/85">
              {draft.recommendedActions.map((action) => (
                <li key={action} className="flex gap-2"><span className="text-cyan-300">•</span><span>{action}</span></li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">Draft Response</div>
            <div className="text-sm text-white/85">{draft.draftResponse}</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">Confidence</div>
            <div className="text-white/90">{Math.round(draft.confidence * 100)}%</div>
          </div>
        </div>
      )}
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">{label}</div>
      <div className="text-white/90">{value}</div>
    </div>
  );
}

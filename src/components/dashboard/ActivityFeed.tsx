import { activityFeed } from "@/lib/mock-data";
import { formatRelativeish } from "@/lib/helpers";

export function ActivityFeed() {
  return (
    <div className="panel rounded-[2rem] p-6">
      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Live Activity</p>
      <h3 className="mt-3 text-xl font-semibold text-white">Recent system actions</h3>
      <div className="mt-5 space-y-4">
        {activityFeed.map((item) => (
          <div key={`${item.ticketId}-${item.createdAt}`} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <span className="status-dot mt-2 bg-cyan-300" />
            <div>
              <p className="text-sm font-medium text-white">{item.ticketId}</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">{item.actionDetails}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-500">{formatRelativeish(item.createdAt)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

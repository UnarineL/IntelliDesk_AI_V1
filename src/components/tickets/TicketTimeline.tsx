import { TicketActivity } from "@/lib/types";
import { formatRelativeish } from "@/lib/helpers";

export function TicketTimeline({ items, title = "Activity log" }: { items: TicketActivity[]; title?: string }) {
  return (
    <div className="panel rounded-[2rem] p-6 md:p-8">
      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Timeline</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
      <div className="mt-6 space-y-5">
        {items.map((item) => (
          <div key={`${item.ticketId}-${item.actionType}-${item.createdAt}`} className="flex gap-4">
            <div className="mt-1 flex flex-col items-center">
              <span className="status-dot bg-cyan-300" />
              <span className="mt-2 h-full w-px bg-white/10" />
            </div>
            <div className="pb-5">
              <p className="text-sm font-medium capitalize text-white">{item.actionType.replaceAll("_", " ")}</p>
              <p className="mt-1 text-sm leading-7 text-slate-300">{item.actionDetails}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-500">{formatRelativeish(item.createdAt)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

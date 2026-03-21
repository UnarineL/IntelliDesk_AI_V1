import { Badge } from "@/components/ui/Badge";
import { Ticket } from "@/lib/types";
import { priorityClasses, statusClasses } from "@/lib/helpers";

export function TicketDetailHeader({ ticket }: { ticket: Ticket }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Ticket Detail</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">{ticket.id}</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{ticket.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className={priorityClasses(ticket.priority)}>{ticket.priority}</Badge>
          <Badge className={statusClasses(ticket.status)}>{ticket.status}</Badge>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Ticket } from "@/lib/types";
import { formatRelativeish, priorityClasses, statusClasses } from "@/lib/helpers";

export function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <Link href={`/tickets/${ticket.id}`} className="panel block rounded-[2rem] p-6 transition hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-white/[0.06]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-cyan-200">{ticket.id}</p>
          <h3 className="mt-3 text-xl font-semibold text-white">{ticket.category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className={priorityClasses(ticket.priority)}>{ticket.priority}</Badge>
          <Badge className={statusClasses(ticket.status)}>{ticket.status}</Badge>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{ticket.summary}</p>
      <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
        <span>{ticket.routedTeam}</span>
        <span>{formatRelativeish(ticket.createdAt)}</span>
      </div>
    </Link>
  );
}

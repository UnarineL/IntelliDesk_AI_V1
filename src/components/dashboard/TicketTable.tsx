import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { formatRelativeish, priorityClasses, statusClasses } from "@/lib/helpers";
import { tickets } from "@/lib/mock-data";

export function TicketTable() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-white/10 bg-slate-950/40 text-slate-400">
            <tr>
              {['ID', 'Summary', 'Category', 'Priority', 'Status', 'Team', 'Created'].map((head) => (
                <th key={head} className="px-5 py-4 font-medium">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="border-b border-white/5 transition hover:bg-white/[0.03]">
                <td className="px-5 py-4"><Link href={`/tickets/${ticket.id}`} className="font-medium text-cyan-200 hover:text-white">{ticket.id}</Link></td>
                <td className="px-5 py-4 text-slate-300">{ticket.summary}</td>
                <td className="px-5 py-4 text-slate-300">{ticket.category}</td>
                <td className="px-5 py-4"><Badge className={priorityClasses(ticket.priority)}>{ticket.priority}</Badge></td>
                <td className="px-5 py-4"><Badge className={statusClasses(ticket.status)}>{ticket.status}</Badge></td>
                <td className="px-5 py-4 text-slate-300">{ticket.routedTeam}</td>
                <td className="px-5 py-4 text-slate-400">{formatRelativeish(ticket.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

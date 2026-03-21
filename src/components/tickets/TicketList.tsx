import { tickets } from "@/lib/mock-data";
import { TicketCard } from "@/components/tickets/TicketCard";

export function TicketList() {
  return <div className="grid gap-4 xl:grid-cols-2">{tickets.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)}</div>;
}

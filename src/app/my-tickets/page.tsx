"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { MyTicketCard } from "@/components/portal/MyTicketCard";
import { useAuth } from "@/lib/auth";
import { tickets } from "@/lib/mock-data";

export default function MyTicketsPage() {
  const { currentUser } = useAuth();
  const myTickets = tickets.filter((ticket) => ticket.ownerId === currentUser.id);

  return (
    <PageContainer>
      <div className="grid gap-4 lg:grid-cols-[18rem,1fr]">
        <Sidebar />
        <div>
          <Topbar title="My requests" subtitle="Private ticket view for the current end user. Only personal requests and public updates appear here." />
          <div className="mb-6 rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-300">Signed in as <span className="font-medium text-white">{currentUser.name}</span>.</p>
            <p className="mt-2 text-sm text-slate-400">{myTickets.length} ticket(s) linked to this account.</p>
          </div>
          <div className="grid gap-4 xl:grid-cols-2">
            {myTickets.map((ticket) => <MyTicketCard key={ticket.id} ticket={ticket} />)}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

import { Sidebar } from "@/components/layout/Sidebar";
import { PageContainer } from "@/components/layout/PageContainer";
import { Topbar } from "@/components/layout/Topbar";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { TicketList } from "@/components/tickets/TicketList";

export default function TicketsPage() {
  return (
    <PageContainer>
      <div className="grid gap-4 lg:grid-cols-[18rem,1fr]">
        <Sidebar />
        <div>
          <Topbar title="Ticket inventory" subtitle="Browse the curated V1 ticket set across categories, priorities, and workflow states." />
          <FilterBar />
          <TicketList />
        </div>
      </div>
    </PageContainer>
  );
}

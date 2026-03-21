import { Sidebar } from "@/components/layout/Sidebar";
import { PageContainer } from "@/components/layout/PageContainer";
import { Topbar } from "@/components/layout/Topbar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { TicketTable } from "@/components/dashboard/TicketTable";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";

export default function DashboardPage() {
  return (
    <PageContainer>
      <div className="grid gap-4 lg:grid-cols-[18rem,1fr]">
        <Sidebar />
        <div>
          <Topbar title="Support operations dashboard" subtitle="Centralized triage visibility with ticket intelligence and live activity monitoring." />
          <DashboardHeader />
          <StatsCards />
          <div className="mt-6"><FilterBar /></div>
          <div className="grid gap-6 xl:grid-cols-[1.45fr,0.75fr]">
            <TicketTable />
            <ActivityFeed />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

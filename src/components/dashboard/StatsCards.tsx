import { AlertOctagon, Layers3, Siren, Ticket } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { dashboardStats } from "@/lib/mock-data";

const stats = [
  { label: "Total Tickets", value: dashboardStats.totalTickets, icon: Ticket },
  { label: "High Priority", value: dashboardStats.highPriority, icon: Layers3 },
  { label: "Critical Issues", value: dashboardStats.criticalIssues, icon: Siren },
  { label: "Active Requests", value: dashboardStats.activeRequests, icon: AlertOctagon },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map(({ label, value, icon: Icon }) => (
        <Card key={label} className="rounded-3xl p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-4 text-4xl font-semibold text-white">{value}</p>
            </div>
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200"><Icon className="h-5 w-5" /></div>
          </div>
        </Card>
      ))}
    </div>
  );
}

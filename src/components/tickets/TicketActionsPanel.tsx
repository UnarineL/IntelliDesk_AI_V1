"use client";

import { Button } from "@/components/ui/Button";
import { useAuth } from "@/lib/auth";

export function TicketActionsPanel() {
  const { currentUser } = useAuth();
  const isSupport = currentUser.role !== "end_user";

  return (
    <div className="panel rounded-[2rem] p-6 md:p-8">
      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Actions</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">Workflow controls</h3>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <Button variant="secondary" className="w-full">Mark In Progress</Button>
        <Button variant="secondary" className="w-full">Escalate</Button>
        <Button variant="secondary" className="w-full">Resolve</Button>
        {isSupport ? <Button variant="ghost" className="w-full rounded-2xl border border-white/10">Add Internal Note</Button> : null}
      </div>
      {!isSupport ? <p className="mt-4 text-sm text-slate-400">Workflow controls are reserved for support and admin roles.</p> : null}
    </div>
  );
}

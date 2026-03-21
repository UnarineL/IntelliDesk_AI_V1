"use client";

import { Bell, Search } from "lucide-react";
import { useAuth } from "@/lib/auth";

export function Topbar({ title, subtitle }: { title: string; subtitle: string }) {
  const { currentUser } = useAuth();
  const roleLabel = currentUser.role === "end_user" ? "End User" : currentUser.role === "support" ? "Support Agent" : "Admin";

  return (
    <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl xl:flex-row xl:items-center xl:justify-between">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">Control Surface</p>
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200">{roleLabel}</span>
        </div>
        <h2 className="mt-2 text-3xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-sm text-slate-300">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
          <Search className="h-4 w-4 text-cyan-300" />
          {currentUser.role === "end_user" ? "Search my tickets" : "Search requests, IDs, teams"}
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-cyan-200">
          <Bell className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

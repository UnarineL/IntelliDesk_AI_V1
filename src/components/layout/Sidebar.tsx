"use client";

import Link from "next/link";
import { Activity, LayoutDashboard, ListChecks, LogIn, Send, Shield, UserRound } from "lucide-react";
import { useAuth } from "@/lib/auth";

const endUserItems = [
  { href: "/submit", label: "New Request", icon: Send },
  { href: "/my-tickets", label: "My Tickets", icon: ListChecks },
  { href: "/login", label: "Account", icon: UserRound },
];

const supportItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/submit", label: "Guided Intake", icon: Send },
  { href: "/tickets", label: "Ticket Queue", icon: ListChecks },
  { href: "/tickets/TICK-1001", label: "Ticket Detail", icon: Activity },
  { href: "/login", label: "Switch Role", icon: LogIn },
];

export function Sidebar() {
  const { currentUser } = useAuth();
  const items = currentUser.role === "end_user" ? endUserItems : supportItems;
  const isSupportView = currentUser.role !== "end_user";

  return (
    <aside className="panel-strong sticky top-4 hidden h-[calc(100vh-2rem)] w-72 flex-col justify-between rounded-3xl p-5 lg:flex">
      <div className="space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">SupportOps AI</p>
          <h1 className="mt-3 text-2xl font-semibold">{isSupportView ? "Support Console" : "User Portal"}</h1>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {isSupportView
              ? "Operational triage interface with AI analysis, team routing, and full queue visibility."
              : "Private request portal for guided ticket creation, updates, and support communication."}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
          <p className="font-medium">{currentUser.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cyan-300/75">{currentUser.role.replace("_", " ")}</p>
          {currentUser.team ? <p className="mt-2 text-slate-400">{currentUser.team}</p> : null}
        </div>
        <nav className="space-y-2">
          {items.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className="flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-sm text-slate-300 transition hover:border-white/10 hover:bg-white/5 hover:text-white">
              <Icon className="h-4 w-4 text-cyan-300" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4 text-sm text-cyan-100">
        <div className="flex items-center gap-2"><Shield className="h-4 w-4" /><p className="font-medium">Visibility model</p></div>
        <p className="mt-2 text-slate-300">
          {isSupportView
            ? "Support roles can review the broader queue, AI guidance, and internal notes."
            : "End users can only view their own requests and public support messages."}
        </p>
      </div>
    </aside>
  );
}

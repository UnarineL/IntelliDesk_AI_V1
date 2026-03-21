"use client";

import { useAuth } from "@/lib/auth";
import { UserRole } from "@/lib/types";
import { Button } from "@/components/ui/Button";

const roles: { role: UserRole; label: string; description: string; href: string }[] = [
  { role: "end_user", label: "End User", description: "Create requests, track your own tickets, and reply to support teams.", href: "/my-tickets" },
  { role: "support", label: "Support Agent", description: "Review queues, use AI analysis, reply to users, and add internal notes.", href: "/dashboard" },
  { role: "admin", label: "Admin", description: "See the full operational view, audit activity, and manage the wider system.", href: "/dashboard" },
];

export default function LoginPage() {
  const { currentUser, setRole } = useAuth();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Access model</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Choose a role preview</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
          This V1 frontend uses a mock role switch so you can preview the end-user portal, support console, and admin visibility model before backend authentication is added.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {roles.map((item) => {
            const active = currentUser.role === item.role;
            return (
              <div key={item.role} className={`rounded-[1.75rem] border p-6 ${active ? "border-cyan-400/25 bg-cyan-400/10" : "border-white/10 bg-slate-950/50"}`}>
                <p className="text-sm font-medium text-cyan-200">{item.label}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                <div className="mt-6 flex gap-3">
                  <button onClick={() => setRole(item.role)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">Use role</button>
                  <Button href={item.href} variant="secondary">Open view</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

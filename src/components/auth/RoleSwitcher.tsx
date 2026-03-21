"use client";

import { useAuth } from "@/lib/auth";
import { UserRole } from "@/lib/types";

const roles: { role: UserRole; label: string }[] = [
  { role: "end_user", label: "User" },
  { role: "support", label: "Support" },
  { role: "admin", label: "Admin" },
];

export function RoleSwitcher() {
  const { currentUser, setRole } = useAuth();

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-2xl border border-white/10 bg-slate-950/80 p-3 shadow-2xl backdrop-blur-xl">
      <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-300/70">Mock Role</p>
      <div className="mt-3 flex gap-2">
        {roles.map(({ role, label }) => {
          const active = currentUser.role === role;
          return (
            <button
              key={role}
              onClick={() => setRole(role)}
              className={`rounded-xl border px-3 py-2 text-xs transition ${
                active
                  ? "border-cyan-400/30 bg-cyan-400/20 text-cyan-100"
                  : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

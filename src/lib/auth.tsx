"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { AppUser, UserRole } from "@/lib/types";
import { users } from "@/lib/mock-data";

interface AuthContextValue {
  currentUser: AppUser;
  setRole: (role: UserRole) => void;
}

const fallbackUser = users.find((user) => user.role === "end_user")!;
const AuthContext = createContext<AuthContextValue>({
  currentUser: fallbackUser,
  setRole: () => undefined,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<UserRole>("end_user");

  useEffect(() => {
    const saved = window.localStorage.getItem("supportops-role") as UserRole | null;
    if (saved === "end_user" || saved === "support" || saved === "admin") {
      setRoleState(saved);
    }
  }, []);

  const setRole = (nextRole: UserRole) => {
    setRoleState(nextRole);
    window.localStorage.setItem("supportops-role", nextRole);
  };

  const currentUser = useMemo(() => users.find((user) => user.role === role) ?? fallbackUser, [role]);

  return <AuthContext.Provider value={{ currentUser, setRole }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

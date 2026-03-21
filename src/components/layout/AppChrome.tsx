"use client";

import { AuthProvider } from "@/lib/auth";
import { RoleSwitcher } from "@/components/auth/RoleSwitcher";

export function AppChrome({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      {children}
      <RoleSwitcher />
    </AuthProvider>
  );
}

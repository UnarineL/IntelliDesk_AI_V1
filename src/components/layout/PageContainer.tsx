import { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">{children}</div>;
}

import { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`panel rounded-3xl ${className}`}>{children}</div>;
}

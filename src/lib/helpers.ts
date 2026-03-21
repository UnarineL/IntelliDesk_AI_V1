import { PriorityLevel } from "@/lib/types";

export function priorityClasses(priority: PriorityLevel): string {
  switch (priority) {
    case "Critical":
      return "bg-rose-500/15 text-rose-300 border-rose-400/25";
    case "High":
      return "bg-orange-500/15 text-orange-300 border-orange-400/25";
    case "Medium":
      return "bg-cyan-500/15 text-cyan-300 border-cyan-400/25";
    default:
      return "bg-slate-500/15 text-slate-300 border-slate-400/25";
  }
}

export function statusClasses(status: string): string {
  switch (status) {
    case "Resolved":
      return "bg-emerald-500/15 text-emerald-300 border-emerald-400/25";
    case "In Progress":
      return "bg-amber-500/15 text-amber-300 border-amber-400/25";
    case "Analyzed":
      return "bg-violet-500/15 text-violet-300 border-violet-400/25";
    default:
      return "bg-slate-500/15 text-slate-300 border-slate-400/25";
  }
}

export function formatRelativeish(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-ZA", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

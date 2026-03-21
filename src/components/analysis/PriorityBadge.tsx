import { Badge } from "@/components/ui/Badge";
import { priorityClasses } from "@/lib/helpers";
import { PriorityLevel } from "@/lib/types";

export function PriorityBadge({ priority }: { priority: PriorityLevel }) {
  return <Badge className={priorityClasses(priority)}>{priority}</Badge>;
}

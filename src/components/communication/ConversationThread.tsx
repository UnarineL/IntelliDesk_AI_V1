import { TicketMessage, UserRole } from "@/lib/types";
import { formatRelativeish } from "@/lib/helpers";

interface ConversationThreadProps {
  messages: TicketMessage[];
  viewerRole: UserRole;
}

export function ConversationThread({ messages, viewerRole }: ConversationThreadProps) {
  const visibleMessages = messages.filter((message) => viewerRole !== "end_user" || message.visibility !== "internal");

  return (
    <div className="panel rounded-[2rem] p-6 md:p-8">
      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Conversation</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">Ticket thread</h3>
      <div className="mt-6 space-y-4">
        {visibleMessages.map((message) => (
          <div key={message.id} className={`rounded-3xl border p-4 ${bubbleClasses(message.visibility, message.senderRole)}`}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-white">{message.senderName}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-slate-400">
                  {message.visibility === "internal" ? "Internal note" : message.visibility === "system" ? "System event" : "Public reply"}
                </p>
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{formatRelativeish(message.createdAt)}</p>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-200">{message.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function bubbleClasses(visibility: string, senderRole: string) {
  if (visibility === "internal") return "border-amber-400/20 bg-amber-500/10";
  if (visibility === "system") return "border-white/10 bg-white/5";
  if (senderRole === "user") return "border-cyan-400/20 bg-cyan-500/10";
  return "border-blue-400/20 bg-blue-500/10";
}

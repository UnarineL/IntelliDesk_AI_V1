"use client";

import { notFound, useParams } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";
import { PageContainer } from "@/components/layout/PageContainer";
import { Topbar } from "@/components/layout/Topbar";
import { tickets, ticketActivities, ticketMessages } from "@/lib/mock-data";
import { TicketDetailHeader } from "@/components/tickets/TicketDetailHeader";
import { OriginalRequestCard } from "@/components/tickets/OriginalRequestCard";
import { AIAnalysisCard } from "@/components/tickets/AIAnalysisCard";
import { SuggestedActionsCard } from "@/components/analysis/SuggestedActionsCard";
import { DraftResponseCard } from "@/components/analysis/DraftResponseCard";
import { TicketTimeline } from "@/components/tickets/TicketTimeline";
import { TicketActionsPanel } from "@/components/tickets/TicketActionsPanel";
import { ConversationThread } from "@/components/communication/ConversationThread";
import { ReplyComposer } from "@/components/communication/ReplyComposer";
import { useAuth } from "@/lib/auth";

export default function TicketDetailPage() {
  const params = useParams<{ id: string }>();
  const { currentUser } = useAuth();
  const ticket = tickets.find((item) => item.id === params.id);
  if (!ticket) return notFound();
  const messages = ticketMessages.filter((message) => message.ticketId === ticket.id);
  const timeline = ticketActivities.filter((item) => item.ticketId === ticket.id);

  return (
    <PageContainer>
      <div className="grid gap-4 lg:grid-cols-[18rem,1fr]">
        <Sidebar />
        <div>
          <Topbar title={`Ticket ${ticket.id}`} subtitle="Support-side ticket intelligence view with raw request, AI analysis, message thread, and workflow controls." />
          <TicketDetailHeader ticket={ticket} />
          <div className="mt-6 grid gap-6 xl:grid-cols-2">
            <OriginalRequestCard message={ticket.originalMessage} />
            <AIAnalysisCard analysis={ticket.analysis} />
          </div>
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
            <ConversationThread messages={messages} viewerRole={currentUser.role} />
            <TicketTimeline items={timeline} title="Full activity log" />
          </div>
          <div className="mt-6 grid gap-6 xl:grid-cols-2">
            <SuggestedActionsCard actions={ticket.analysis.recommendedActions} />
            <DraftResponseCard response={ticket.analysis.draftResponse} />
          </div>
          <div className="mt-6 grid gap-6 xl:grid-cols-2">
            <ReplyComposer />
            <TicketActionsPanel />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

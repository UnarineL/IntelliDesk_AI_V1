"use client";

import { notFound, useParams } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";
import { PageContainer } from "@/components/layout/PageContainer";
import { Topbar } from "@/components/layout/Topbar";
import { tickets, ticketActivities, ticketMessages } from "@/lib/mock-data";
import { TicketDetailHeader } from "@/components/tickets/TicketDetailHeader";
import { ConversationThread } from "@/components/communication/ConversationThread";
import { ReplyComposer } from "@/components/communication/ReplyComposer";
import { TicketTimeline } from "@/components/tickets/TicketTimeline";
import { useAuth } from "@/lib/auth";

export default function MyTicketDetailPage() {
  const { currentUser } = useAuth();
  const params = useParams<{ id: string }>();
  const ticket = tickets.find((item) => item.id === params.id && item.ownerId === currentUser.id);
  if (!ticket) return notFound();

  const messages = ticketMessages.filter((message) => message.ticketId === ticket.id);
  const timeline = ticketActivities.filter((item) => item.ticketId === ticket.id && item.visibility !== "internal");

  return (
    <PageContainer>
      <div className="grid gap-4 lg:grid-cols-[18rem,1fr]">
        <Sidebar />
        <div>
          <Topbar title={`My ticket ${ticket.id}`} subtitle="Track status, read support replies, and send updates on your own request." />
          <TicketDetailHeader ticket={ticket} />
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
            <ConversationThread messages={messages} viewerRole={currentUser.role} />
            <TicketTimeline items={timeline} title="Visible timeline" />
          </div>
          <div className="mt-6"><ReplyComposer /></div>
        </div>
      </div>
    </PageContainer>
  );
}

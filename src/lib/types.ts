export type PriorityLevel = "Low" | "Medium" | "High" | "Critical";
export type TicketStatus = "New" | "Analyzed" | "In Progress" | "Resolved";
export type UserRole = "end_user" | "support" | "admin";
export type MessageVisibility = "public" | "internal" | "system";

export interface AnalysisResult {
  summary: string;
  category: string;
  priority: PriorityLevel;
  routedTeam: string;
  impactedServices: string[];
  securityFlag: boolean;
  confidence: number;
  recommendedActions: string[];
  draftResponse: string;
}

export interface AppUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  team?: string;
}

export interface TicketMessage {
  id: string;
  ticketId: string;
  senderId: string;
  senderName: string;
  senderRole: "user" | "support" | "admin" | "system";
  visibility: MessageVisibility;
  body: string;
  createdAt: string;
}

export interface TicketActivity {
  ticketId: string;
  actionType: string;
  actionDetails: string;
  createdAt: string;
  visibility?: "public" | "internal";
}

export interface Ticket {
  id: string;
  ownerId: string;
  ownerName: string;
  originalMessage: string;
  summary: string;
  category: string;
  priority: PriorityLevel;
  routedTeam: string;
  status: TicketStatus;
  securityFlag: boolean;
  createdAt: string;
  analysis: AnalysisResult;
}

export interface ActivityItem {
  ticketId: string;
  actionType: string;
  actionDetails: string;
  createdAt: string;
}

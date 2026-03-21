export type IntakeRole = "user" | "assistant";

export type IntakeStage = "idle" | "clarifying" | "ready_to_analyze" | "analyzed";

export interface IntakeMessage {
  id: string;
  role: IntakeRole;
  text: string;
  timestamp: string;
}

export interface TicketDraft {
  summary: string;
  category: string;
  priority: "Low" | "Medium" | "High" | "Critical";
  routedTeam: string;
  impactedServices: string[];
  securityFlag: boolean;
  confidence: number;
  recommendedActions: string[];
  draftResponse: string;
}

export interface IntakeState {
  stage: IntakeStage;
  messages: IntakeMessage[];
  clarificationCount: number;
  collectedUserInputs: string[];
  draft: TicketDraft | null;
}

"use client";

import { useMemo, useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { PageContainer } from "@/components/layout/PageContainer";
import { Topbar } from "@/components/layout/Topbar";
import ChatIntakePanel from "@/components/intake/ChatIntakePanel";
import LiveTicketDraftPanel from "@/components/intake/LiveTicketDraftPanel";
import IntakeActionBar from "@/components/intake/IntakeActionBar";
import { buildDraft, createMessage, needsClarification } from "@/lib/intake-mock";
import { IntakeState } from "@/lib/intake-types";
import { useAuth } from "@/lib/auth";

const initialAssistantMessage = createMessage(
  "assistant",
  "Describe your issue in your own words. I’ll ask for clarification only if something important is missing."
);

export default function SubmitPage() {
  const { currentUser } = useAuth();
  const [state, setState] = useState<IntakeState>({
    stage: "idle",
    messages: [initialAssistantMessage],
    clarificationCount: 0,
    collectedUserInputs: [],
    draft: null,
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const canSubmit = useMemo(() => !!state.draft, [state.draft]);

  const handleSend = (text: string) => {
    const userMessage = createMessage("user", text);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      collectedUserInputs: [...prev.collectedUserInputs, text],
    }));

    setIsAnalyzing(true);
    setTimeout(() => {
      setState((prev) => {
        const updatedInputs = [...prev.collectedUserInputs, text];
        const clarification = needsClarification(updatedInputs);

        if (clarification.shouldAsk && prev.clarificationCount < 2) {
          const assistantQuestion = createMessage("assistant", clarification.questions.join(" "));
          return {
            ...prev,
            stage: "clarifying",
            clarificationCount: prev.clarificationCount + 1,
            messages: [...prev.messages, assistantQuestion],
            collectedUserInputs: updatedInputs,
            draft: prev.draft,
          };
        }

        const draft = buildDraft(updatedInputs);
        const assistantReady = createMessage(
          "assistant",
          "I now have enough detail. I’ve prepared a structured ticket draft for review."
        );

        return {
          ...prev,
          stage: "analyzed",
          messages: [...prev.messages, assistantReady],
          collectedUserInputs: updatedInputs,
          draft,
        };
      });
      setIsAnalyzing(false);
    }, 850);
  };

  return (
    <PageContainer>
      <div className="grid gap-4 lg:grid-cols-[18rem,1fr]">
        <Sidebar />
        <div>
          <Topbar
            title={currentUser.role === "end_user" ? "Create a guided support request" : "Clarification-first support intake"}
            subtitle="Users can describe issues naturally. The assistant asks only what is needed, then builds a structured ticket draft."
          />
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <ChatIntakePanel messages={state.messages} isAnalyzing={isAnalyzing} onSend={handleSend} />
            <div>
              <LiveTicketDraftPanel draft={state.draft} stage={state.stage} />
              <IntakeActionBar canSubmit={canSubmit} />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

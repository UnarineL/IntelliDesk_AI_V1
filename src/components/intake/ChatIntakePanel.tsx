"use client";

import { FormEvent, useState } from "react";
import { IntakeMessage } from "@/lib/intake-types";

interface ChatIntakePanelProps {
  messages: IntakeMessage[];
  isAnalyzing?: boolean;
  onSend: (text: string) => void;
}

export default function ChatIntakePanel({ messages, isAnalyzing = false, onSend }: ChatIntakePanelProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;
    onSend(text);
    setValue("");
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white">Guided Intake</h2>
        <p className="text-sm text-white/60">Describe the issue naturally. The assistant will ask for clarification only if needed.</p>
      </div>

      <div className="h-[430px] space-y-3 overflow-y-auto rounded-2xl border border-white/10 bg-black/20 p-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[85%] rounded-2xl border px-4 py-3 text-sm ${
              msg.role === "user"
                ? "ml-auto border-cyan-400/20 bg-cyan-500/20 text-cyan-100"
                : "border-white/10 bg-white/8 text-white/90"
            }`}
          >
            <div className="mb-1 text-[11px] uppercase tracking-[0.18em] text-white/40">{msg.role === "user" ? "You" : "SupportOps AI"}</div>
            <div>{msg.text}</div>
          </div>
        ))}

        {isAnalyzing ? (
          <div className="max-w-[85%] rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/90">
            <div className="mb-1 text-[11px] uppercase tracking-[0.18em] text-white/40">SupportOps AI</div>
            <div className="animate-pulse">Analyzing and preparing next step...</div>
          </div>
        ) : null}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-3">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type your issue or answer the clarification..."
          className="flex-1 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40"
        />
        <button type="submit" className="rounded-2xl bg-cyan-400/90 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">
          Send
        </button>
      </form>
    </div>
  );
}

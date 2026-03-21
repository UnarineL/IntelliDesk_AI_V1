"use client";

import { useMemo, useState } from "react";
import { AnalyzeButton } from "@/components/submit/AnalyzeButton";
import { tickets } from "@/lib/mock-data";

export function RequestForm() {
  const [message, setMessage] = useState(tickets[0].originalMessage);
  const words = useMemo(() => message.trim().split(/\s+/).filter(Boolean).length, [message]);

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-medium text-white">Describe the issue</p>
        <p className="mt-1 text-sm text-slate-400">Use realistic text so the analysis panel can preview the intelligence flow.</p>
      </div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="min-h-[300px] w-full rounded-3xl border border-white/10 bg-slate-950/60 p-5 text-sm leading-7 text-slate-200 outline-none transition focus:border-cyan-400/40 focus:shadow-glow"
      />
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm text-slate-400">{words} words • mock analysis mode</div>
        <AnalyzeButton />
      </div>
    </div>
  );
}

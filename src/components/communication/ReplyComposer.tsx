"use client";

import { useAuth } from "@/lib/auth";

export function ReplyComposer() {
  const { currentUser } = useAuth();
  const isSupport = currentUser.role !== "end_user";

  return (
    <div className="panel rounded-[2rem] p-6 md:p-8">
      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Respond</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{isSupport ? "Reply or note" : "Send update"}</h3>
      {isSupport ? (
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-cyan-100">Public Reply</span>
          <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-amber-100">Internal Note</span>
        </div>
      ) : null}
      <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/60 p-4">
        <textarea
          placeholder={isSupport ? "Type a public reply or internal note..." : "Type your response to the support team..."}
          className="h-28 w-full resize-none bg-transparent text-sm leading-7 text-slate-200 outline-none placeholder:text-slate-500"
        />
      </div>
      <div className="mt-4 flex gap-3">
        <button className="rounded-2xl bg-cyan-400/90 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">Send message</button>
        {isSupport ? <button className="rounded-2xl border border-white/10 px-5 py-3 font-medium text-white/80 transition hover:bg-white/5">Save internal note</button> : null}
      </div>
    </div>
  );
}

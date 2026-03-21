interface IntakeActionBarProps {
  canSubmit: boolean;
}

export default function IntakeActionBar({ canSubmit }: IntakeActionBarProps) {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      <button
        disabled={!canSubmit}
        className={`rounded-2xl px-5 py-3 font-medium transition ${
          canSubmit ? "bg-cyan-400/90 text-slate-950 hover:bg-cyan-300" : "cursor-not-allowed bg-white/10 text-white/35"
        }`}
      >
        Submit Ticket
      </button>

      <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85 transition hover:bg-white/10">
        Reset Intake
      </button>
    </div>
  );
}

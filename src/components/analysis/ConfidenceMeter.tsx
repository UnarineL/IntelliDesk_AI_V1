export function ConfidenceMeter({ confidence }: { confidence: number }) {
  const pct = Math.round(confidence * 100);
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
        <span>Confidence</span>
        <span>{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10">
        <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-accent to-violet-400" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

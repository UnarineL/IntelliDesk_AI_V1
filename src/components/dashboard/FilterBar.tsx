export function FilterBar() {
  return (
    <div className="mb-6 grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 md:grid-cols-2 xl:grid-cols-4">
      {['Search tickets', 'Filter by priority', 'Filter by category', 'Filter by team'].map((label) => (
        <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-400">{label}</div>
      ))}
    </div>
  );
}

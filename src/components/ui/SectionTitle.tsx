export function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">{subtitle}</p>
    </div>
  );
}

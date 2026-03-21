export function Loader({ label = "Processing" }: { label?: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-4 text-sm text-cyan-200">
      <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent animate-scan" />
      <div className="relative flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
          <span className="h-2 w-2 rounded-full bg-violet-300 animate-pulse [animation-delay:200ms]" />
          <span className="h-2 w-2 rounded-full bg-sky-300 animate-pulse [animation-delay:400ms]" />
        </div>
        <span>{label}</span>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">SupportOps AI</p>
          <p className="text-sm text-slate-300">Intelligent Support Triage</p>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#features" className="hover:text-white">Capabilities</a>
          <a href="#preview" className="hover:text-white">Preview</a>
          <Button href="/login" variant="secondary">Enter System</Button>
        </nav>
      </div>
    </header>
  );
}

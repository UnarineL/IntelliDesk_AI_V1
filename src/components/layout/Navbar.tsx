import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">SupportOps AI</p>
          <p className="text-sm text-slate-300">Intelligent Support Triage</p>
        </div>

        <nav className="hidden items-center gap-3 text-sm text-slate-300 lg:flex">
          <a href="#features" className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-white">
            Capabilities
          </a>
          <a href="#preview" className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-white">
            Preview
          </a>

          <Button href="/submit" variant="ghost">
            Submit Request
          </Button>
          <Button href="/my-tickets" variant="ghost">
            My Tickets
          </Button>
          <Button href="/dashboard" variant="ghost">
            Dashboard
          </Button>
          <Button href="/login" variant="secondary">
            Login / Switch Role
          </Button>
        </nav>
      </div>
    </header>
  );
}

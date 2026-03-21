import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute left-1/4 top-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-1/4 top-32 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-5xl space-y-8">
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200">
            AI-Powered Service Desk Triage
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">
              Intelligent support workflows with a{" "}
              <span className="text-gradient">futuristic operations interface</span>
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              SupportOps AI transforms messy user issues into structured service tickets with guided clarification,
              priority scoring, role-based visibility, routing, and threaded support communication.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href="/submit">Submit Request</Button>
            <Button href="/my-tickets" variant="secondary">
              Open User Portal
            </Button>
            <Button href="/dashboard" variant="secondary">
              Open Support Console
            </Button>
            <Button href="/login" variant="ghost">
              Role Preview / Login
            </Button>
          </div>

          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            <a
              href="/submit"
              className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/20 hover:bg-white/10"
            >
              <p className="text-sm font-medium text-white">Guided Intake</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Start with natural language. The AI asks clarifying questions before drafting the ticket.
              </p>
            </a>

            <a
              href="/my-tickets"
              className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/20 hover:bg-white/10"
            >
              <p className="text-sm font-medium text-white">User Portal</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                End users can track only their own requests, status updates, and public support replies.
              </p>
            </a>

            <a
              href="/dashboard"
              className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/20 hover:bg-white/10"
            >
              <p className="text-sm font-medium text-white">Support Console</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Support teams get queue visibility, AI analysis, timelines, and internal note workflows.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute left-1/4 top-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-1/4 top-32 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200">
            AI-Powered Service Desk Triage
          </div>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">
              Intelligent support workflows with a <span className="text-gradient">futuristic operations interface</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              SupportOps AI transforms messy user issues into structured service tickets with smart classification, priority scoring, routing, and response drafting.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/dashboard">View Dashboard</Button>
            <Button href="/submit" variant="secondary">Submit Request Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

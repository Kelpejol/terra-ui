import { BookOpen, Zap, Database, Shield, Users, LineChart } from "lucide-react"

export function SolutionSection() {
  const solutions = [
    {
      icon: BookOpen,
      title: "Universal Registry",
      description:
        "Canonical manifest format for every capability. Inputs, outputs, examples — machine-readable and discoverable.",
    },
    {
      icon: Zap,
      title: "Adaptive Orchestration",
      description:
        "Runtime decisions, not static pipelines. Terra dynamically chooses actions based on state and policies.",
    },
    {
      icon: Database,
      title: "Durable State & Traceability",
      description: "Append-only execution trace. Every decision, retry, and approval logged for deterministic replay.",
    },
    {
      icon: Shield,
      title: "Operational Safety",
      description: "Declarative policies enforced automatically. Rate limits, approvals, sensitive data handling.",
    },
    {
      icon: Users,
      title: "Human-in-the-Loop",
      description: "Runs pause for approval, accept corrections, and log all interventions.",
    },
    {
      icon: LineChart,
      title: "Full Observability",
      description: "Structured traces, timelines, and payload snapshots. End-to-end visibility.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Terra Fixes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A unified system for registering capabilities, running workflows, and managing every execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

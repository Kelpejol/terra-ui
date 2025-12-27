import { AlertTriangle, Code2, Database, Gauge, Eye, Plug, Shield } from "lucide-react"

export function ProblemSection() {
const problems = [
  {
    icon: AlertTriangle,
    title: "No Orchestration Layer",
    description: "Agents operate independently. Coordinating multi-step workflows requires custom code. No standardized way to route between agents at runtime.",
  },
  {
    icon: Code2,
    title: "Hard-Coded Logic",
    description: "Agent selection and routing live in application code. Every workflow change means redeployment. Can't adapt based on runtime conditions or policies.",
  },
  {
    icon: Shield,
    title: "No Policy Enforcement",
    description: "Can't enforce approval gates, rate limits, or compliance rules across agent invocations. Each agent handles constraints differently—or not at all.",
  },
    {
      icon: Database,
      title: "Lost state & context",
      description: "Intermediate results and decision history are scattered, making debugging impossible.",
    },
    {
      icon: Gauge,
      title: "Operational complexity",
      description: "Retries, backoffs, fallbacks, and recovery are implemented inconsistently.",
    },
    {
      icon: Eye,
      title: "No unified control",
      description: "Operators lack a single place to inspect, pause, modify, or replay workflows.",
    },
    {
      icon: Plug,
      title: "Integration friction",
      description: "Combining internal and third-party tools is time-consuming and fragile.",
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Production Agent Systems Need Coordination Infrastructure</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Current tooling leaves teams with fragmented systems, no unified control and breaks at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center mb-4">
                  <problem.icon className="w-5 h-5 text-destructive/80" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

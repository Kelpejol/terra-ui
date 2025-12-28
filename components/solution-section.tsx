import { BookOpen, Zap, Database, Shield, Users, LineChart } from "lucide-react"

export function SolutionSection() {
const solutions = [
  {
    icon: BookOpen,
    title: "Agent Registry",
    description: "Declare agent capabilities in YAML manifests. Consonant discovers what each agent can do without code changes.",
  },
  {
    icon: Zap,
    title: "Adaptive Routing",
    description: "Runtime agent selection based on goal, current state, and registered capabilities. No hardcoded workflows.",
  },
  {
    icon: Shield,
    title: "Policy Engine",
    description: "Declarative constraints enforced before invocation. Approval gates, rate limits, RBAC. Built on OPA.",
  },
  {
    icon: Database,
    title: "Durable Execution",
    description: "Append-only event log. Complete execution trace. Deterministic replay for debugging and compliance.",
  },
  {
    icon: LineChart,
    title: "Operational Controls",
    description: "Pause workflows. Approve sensitive actions. Replay runs. Export audit logs. Unified dashboard.",
  },
]

  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How Consonant Works</h2>
<p className="text-muted-foreground max-w-2xl mx-auto">
  Infrastructure-grade orchestration with operational controls production systems require.
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

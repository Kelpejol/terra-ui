import { Brain, RotateCcw, LayoutDashboard, Shield } from "lucide-react"

export function DeepFeatures() {
  const features = [
  {
    icon: Brain,
    title: "Runtime Orchestration",
    description: "Terra makes routing decisions at execution time based on agent capabilities and current workflow state. Add new agents without changing orchestration code.",
    details: ["Goal-to-capability matching", "State-aware routing", "Dynamic agent selection"],
  },
  {
    icon: Shield,
    title: "Policy-as-Code",
    description: "Declarative constraints enforced before every invocation. Approval workflows, rate limits, team-based access control. Built on OPA for standard policy evaluation.",
    details: ["YAML policy definitions", "Pre-invocation checks", "Compliance audit trails"],
  },
  {
    icon: LayoutDashboard,
    title: "Operational Controls",
    description: "Pause workflows for review. Approve sensitive actions. Replay executions deterministically for debugging. The control plane operators need.",
    details: ["Pause/resume execution", "Approval gates", "Deterministic replay"],
  },
]

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Infrastructure Primitives</h2>
<p className="text-muted-foreground max-w-2xl mx-auto">
  Production-grade orchestration with operational controls.
</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{feature.description}</p>

                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

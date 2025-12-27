import { Brain, RotateCcw, LayoutDashboard } from "lucide-react"

export function DeepFeatures() {
  const features = [
    {
      icon: Brain,
      title: "Decoupled Decision Engine",
      description:
        "Evaluates state, manifests, and policies to choose the next action. No hardcoded flows — pure adaptive orchestration.",
      details: ["State-aware action selection", "Policy-driven boundaries", "Runtime capability discovery"],
    },
    {
      icon: RotateCcw,
      title: "Durable Execution & Recovery",
      description:
        "Retries, backoff, fallback, streaming — orchestrated, not manual. Every failure mode handled systematically.",
      details: ["Automatic retry with exponential backoff", "Fallback tool chains", "Streaming support built-in"],
    },
    {
      icon: LayoutDashboard,
      title: "Unified Dashboard",
      description:
        "Pause, resume, mutate, approve, replay — all in one place. Complete operational control over every run.",
      details: ["Real-time run monitoring", "In-flight state mutation", "Deterministic replay"],
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Deep Technical Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Infrastructure-grade reliability with operator-friendly controls.
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

                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>

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

import { Search, Clock, FileSearch, CheckSquare, Settings, RotateCcw } from "lucide-react"

export function DashboardPreviews() {
  const panels = [
    { icon: Search, title: "Run Explorer", description: "Filter, search, and browse all executions" },
    { icon: Clock, title: "Timeline View", description: "Chronological view of every step" },
    { icon: FileSearch, title: "Step Inspector", description: "Deep-dive into any action" },
    { icon: CheckSquare, title: "Approval Panel", description: "Review and approve pending actions" },
    { icon: Settings, title: "Policy Manager", description: "Configure and enforce policies" },
    { icon: RotateCcw, title: "Replay Mode", description: "Deterministic run reproduction" },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dashboard Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete operational control from a unified interface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {panels.map((panel, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <panel.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{panel.title}</h3>
                  <p className="text-sm text-muted-foreground">{panel.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

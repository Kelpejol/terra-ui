import { Play, Brain, Shield, Cog, Database, ArrowRight, CheckCircle2, FileText } from "lucide-react"

export function RunLifecycle() {
  const steps = [
    { icon: Play, label: "Initialization", description: "Run created, ID assigned" },
    { icon: Brain, label: "Decision Step", description: "Select next action" },
    { icon: Shield, label: "Policy Check", description: "Validate against rules" },
    { icon: Cog, label: "Execution", description: "Invoke tool/agent" },
    { icon: Database, label: "State Append", description: "Persist to trace" },
    { icon: ArrowRight, label: "Continuation", description: "Loop or terminate" },
    { icon: CheckCircle2, label: "Completion", description: "Final state reached" },
    { icon: FileText, label: "Audit Export", description: "Full trace available" },
  ]

  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Run Lifecycle</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every execution follows a deterministic, observable lifecycle.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border hidden lg:block" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center mb-3 relative z-10">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-medium text-foreground mb-1">{step.label}</div>
                <div className="text-xs text-muted-foreground">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function MetricsStrip() {
  const metrics = [
    { value: "10,000+", label: "Tools Registered" },
    { value: "100%", label: "Deterministic Replays" },
    { value: "Built-in", label: "Approval-Gated Runs" },
    { value: "99.99%", label: "Recovery Success Rate" },
  ]

  return (
    <section className="py-12 border-y border-border/50 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1 font-mono">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

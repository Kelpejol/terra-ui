"use client"

export function MetricsStrip() {
  const metrics = [
    { 
      value: "40%", 
      label: "Cost Reduction",
      subtext: "Right-sized resources vs over-provisioning" 
    },
    { 
      value: "75%", 
      label: "Risk Reduction",
      subtext: "Update one agent without touching others" 
    },
    { 
      value: "90%", 
      label: "Scaling Efficiency",
      subtext: "Scale only what needs to scale" 
    },
    { 
      value: "99.9%", 
      label: "System Uptime",
      subtext: "Failures isolated—one agent down doesn't kill the system" 
    },
  ]

  return (
    <section className="py-20 border-y border-border/50 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group p-4 rounded-xl hover:bg-card/50 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">
                {metric.value}
              </div>
              <div className="text-lg font-medium text-foreground mb-2">{metric.label}</div>
              <div className="text-sm text-muted-foreground leading-snug max-w-[200px] mx-auto">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


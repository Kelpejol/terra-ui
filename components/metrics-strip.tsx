"use client"

export function MetricsStrip() {
  const metrics = [
    {
      value: "40%",
      label: "Cost Reduction",
      context: {
        before: "$2,920/mo (monolithic)",
        after: "$1,250/mo (right-sized)",
        saved: "$20k/yr saved"
      }
    },
    {
      value: "75%",
      label: "Less Risk",
      context: {
        before: "208 hrs/yr fragile",
        after: "35 hrs/yr risk",
        saved: "Ship 3x faster"
      }
    },
    {
      value: "90%",
      label: "Scaling Efficiency",
      context: {
        before: "Scale ALL agents",
        after: "Scale per agent",
        saved: "$150k/yr peak savings"
      }
    },
    {
      value: "99.9%",
      label: "System Uptime",
      context: {
        before: "18 days downtime",
        after: "0 day downtime",
        saved: "$2.75M revenue protected"
      }
    }
  ]

  return (
    <section className="py-20 border-y border-border bg-background/50 backdrop-blur-sm">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/50 mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                {metric.label}
              </div>
              
              <div className="text-xs text-left bg-muted/30 rounded-lg p-3 space-y-1.5 opacity-80 group-hover:opacity-100 transition-opacity border border-border/50">
                <div className="flex justify-between">
                    <span className="text-red-400">Before:</span>
                    <span className="text-muted-foreground">{metric.context.before}</span>
                </div>
                 <div className="flex justify-between">
                    <span className="text-primary">After:</span>
                    <span className="text-foreground">{metric.context.after}</span>
                </div>
                <div className="pt-1.5 mt-1.5 border-t border-border/50 font-bold text-center text-primary">
                    {metric.context.saved}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

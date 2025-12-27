export function ArchitectureDiagram() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">System Architecture</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A multi-layer control plane that decouples orchestration from execution.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Top Layer - Control Plane */}
          <div className="p-6 rounded-xl border border-primary/50 bg-primary/5 mb-4">
            <div className="text-center text-sm font-medium text-primary mb-4">TERRA CONTROL PLANE</div>
            <div className="grid grid-cols-4 gap-4">
              {["Decision Engine", "Policy Engine", "State Store", "Observability"].map((item) => (
                <div key={item} className="text-center p-3 rounded-lg bg-card border border-border">
                  <span className="text-xs text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connection Lines */}
          <div className="flex justify-center py-2">
            <div className="w-px h-8 bg-border" />
          </div>

          {/* Middle Layer - Adapters */}
          <div className="p-6 rounded-xl border border-border bg-card/50 mb-4">
            <div className="text-center text-sm font-medium text-muted-foreground mb-4">TOOL & AGENT ADAPTERS</div>
            <div className="grid grid-cols-5 gap-3">
              {["Internal APIs", "External Services", "AI Agents", "Databases", "Third-party"].map((item) => (
                <div key={item} className="text-center p-2 rounded-lg bg-secondary/50 border border-border">
                  <span className="text-xs text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connection Lines */}
          <div className="flex justify-center py-2">
            <div className="w-px h-8 bg-border" />
          </div>

          {/* Bottom Layer - Execution */}
          <div className="p-6 rounded-xl border border-border bg-secondary/20">
            <div className="text-center text-sm font-medium text-muted-foreground mb-4">EXECUTION LAYER</div>
            <div className="grid grid-cols-3 gap-4">
              {["Run Engine", "Durable Store", "Audit Log"].map((item) => (
                <div key={item} className="text-center p-3 rounded-lg bg-card border border-border">
                  <span className="text-xs text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Side Panels */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 -translate-x-full hidden xl:block">
            <div className="p-4 rounded-lg border border-border bg-card/50">
              <div className="text-xs text-primary font-medium mb-2">Human Approval</div>
              <div className="text-xs text-muted-foreground">Review · Approve · Intervene</div>
            </div>
          </div>

          <div className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full hidden xl:block">
            <div className="p-4 rounded-lg border border-border bg-card/50">
              <div className="text-xs text-primary font-medium mb-2">Operator Controls</div>
              <div className="text-xs text-muted-foreground">Pause · Resume · Mutate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

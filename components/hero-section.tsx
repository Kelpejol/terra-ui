import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Now in Public Beta
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
          Adaptive Control Plane for <span className="text-primary">Multi-Agent Systems.</span> 
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
          Terra orchestrates, composes agents across frameworks—LangChain, AutoGen, custom tools—with runtime goal-based routing through a universal manifest
          system — delivering adaptive workflows, durable run state, policy enforcement, full observability, and
          complete operational control. 
        </p>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base">
            Join Waitlist
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          
        </div>
        <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
  <span>Self-hosted or cloud</span>
  <span>•</span>
  <span>Built on Kagent</span>
</div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary/5">
            <div className="h-8 bg-secondary/50 border-b border-border flex items-center gap-2 px-4">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-chart-4/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="text-xs text-muted-foreground ml-4 font-mono">terra-dashboard</span>
            </div>
            <div className="p-6 h-80 bg-gradient-to-br from-card to-secondary/20 flex items-center justify-center">
              <div className="text-muted-foreground/50 text-sm">Coming Here soon!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

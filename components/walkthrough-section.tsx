"use client"

import { Play, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react"

export function WalkthroughSection() {
  return (
    <section className="py-24 px-6 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                    <Play className="w-3 h-3 fill-current" />
                    DEVELOPER STORY
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                    When your agents meet <br />
                    <span className="text-primary">real production traffic</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    What happens when your retrieval agent slows down but your planner doesn’t?
                    <br />
                    In a monolith, the slow agent <strong>drags the entire cluster to zero.</strong>
                </p>
                <div className="flex gap-8 mt-8">
                    <div>
                         <div className="text-3xl font-bold text-foreground">Isolated</div>
                         <div className="text-sm text-muted-foreground">Failure Domains</div>
                    </div>
                    <div className="h-12 w-px bg-border" />
                    <div>
                         <div className="text-3xl font-bold text-primary">Granular</div>
                         <div className="text-sm text-muted-foreground">Auto-scaling</div>
                    </div>
                </div>
            </div>

            {/* Timeline Visual */}
            <div className="flex-1 w-full bg-background rounded-2xl border border-border/50 shadow-2xl p-8 relative overflow-hidden">
                <div className="space-y-8 relative z-10">
                    
                    {/* Event 1 */}
                    <div className="flex gap-4">
                        <div className="w-12 text-right font-mono text-sm text-muted-foreground pt-1">0ms</div>
                        <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
                            <div className="w-px h-full bg-border absolute left-1.5 top-3" />
                        </div>
                        <div className="pb-4">
                            <div className="font-bold">Traffic Surge</div>
                            <div className="text-sm text-muted-foreground">Incoming RAG requests spike by 500%.</div>
                        </div>
                    </div>

                     {/* Event 2 */}
                    <div className="flex gap-4">
                        <div className="w-12 text-right font-mono text-sm text-muted-foreground pt-1">2s</div>
                        <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-orange-500" />
                            <div className="w-px h-full bg-border absolute left-1.5 top-3" />
                        </div>
                        <div className="pb-4">
                            <div className="font-bold text-orange-400">Agent Stalling</div>
                            <div className="text-sm text-muted-foreground"><code className="bg-muted px-1 rounded">retrieval-agent</code> slows to 8s latency.</div>
                        </div>
                    </div>

                    {/* Event 3 */}
                    <div className="flex gap-4">
                        <div className="w-12 text-right font-mono text-sm text-muted-foreground pt-1">5s</div>
                        <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-primary" />
                            <div className="w-px h-full bg-border absolute left-1.5 top-3" />
                        </div>
                        <div className="pb-4">
                            <div className="font-bold">Independent Scaling</div>
                            <div className="text-sm text-muted-foreground">Consonant scales <code className="bg-muted px-1 rounded">retrieval</code> x10. <code className="bg-muted px-1 rounded">planner</code> stays idle.</div>
                        </div>
                    </div>

                    {/* Event 4 */}
                    <div className="flex gap-4">
                        <div className="w-12 text-right font-mono text-sm text-muted-foreground pt-1">12s</div>
                        <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div>
                            <div className="font-bold text-green-500">System Stabilized</div>
                            <div className="text-sm text-muted-foreground">Planner performance remains 100% unaffected.</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

       

      </div>
    </section>
  )
}

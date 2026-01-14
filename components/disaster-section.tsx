"use client"

import { Clock, AlertOctagon, TrendingDown, Frown, DollarSign } from "lucide-react"

export function DisasterSection() {
  return (
    <section className="py-24 px-6 bg-red-950/20 border-y border-red-900/20 relative overflow-hidden">
        {/* Background Alert Accents */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-red-600/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-orange-600/5 rounded-full blur-[100px]" />
        </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-mono">
                WHAT BREAKS WHEN YOU SHIP MULTI-AGENT SYSTEMS
            </h2>
            <p className="text-xl text-red-400 font-medium">
                Infrastructure failure is the #1 killer of agent reliability.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Engineering Failure Flow */}
            <div className="relative border-l-2 border-red-900/50 pl-8 space-y-12 py-4">
                {/* Latency Spike */}
                <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-red-900 border-2 border-red-500 z-10" />
                    <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-red-400 font-mono font-bold">0ms</span>
                        <h3 className="font-bold text-lg">Minor Latency Spike</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">A vector database or external tool slows down by 200ms.</p>
                </div>

                {/* Retry Loop */}
                <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-red-900 border-2 border-red-500 z-10" />
                    <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-red-400 font-mono font-bold">5s</span>
                        <h3 className="font-bold text-lg">Unbounded Retry Loop</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">Agent A enters a loop, recursively calling tools while consuming 90% CPU.</p>
                </div>

                {/* Blast Radius */}
                <div className="relative">
                    <div className="absolute -left-[45px] top-0 w-7 h-7 rounded-full bg-red-600 animate-pulse z-10 flex items-center justify-center">
                        <AlertOctagon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-red-500 font-mono font-bold">12s</span>
                        <h3 className="font-bold text-xl text-red-500">Shared process OOMs</h3>
                    </div>
                    <div className="space-y-3 mt-4 bg-red-950/30 p-4 rounded-lg border border-red-900/50">
                        <div className="flex items-center gap-3 text-red-300">
                             <TrendingDown className="w-4 h-4" />
                             <span>Agent A OOMs → <span className="font-bold text-red-500">ALL AGENTS DIE</span></span>
                        </div>
                        <div className="flex items-center gap-3 text-red-300">
                             <TrendingDown className="w-4 h-4" />
                             <span>Retry loops <span className="font-bold text-red-500">AMPLIFY FAILURES</span></span>
                        </div>
                        <div className="flex items-center gap-3 text-red-300">
                             <TrendingDown className="w-4 h-4" />
                             <span>Tool dependency <span className="font-bold text-red-500">STALLS ENTIRE SYSTEM</span></span>
                        </div>
                        <div className="h-px bg-red-800/50 my-2" />
                        <div className="font-bold text-red-500 text-lg uppercase tracking-wider">
                            💥 PRODUCTION DEPLOYMENT FROZEN
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT: The Metrics */}
            <div className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <AlertOctagon className="w-6 h-6 text-red-500" />
                    The Engineering Impact
                </h3>
                
                <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                        <span className="text-muted-foreground">Blast Radius</span>
                        <span className="font-mono font-bold text-xl text-red-500">100% Shared Fate</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                        <span className="text-muted-foreground">Resource Coupling</span>
                        <span className="font-mono font-bold text-xl text-red-400">Waste Math</span>
                        <span className="text-xs text-muted-foreground">(scale all or none)</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-red-500/20">
                        <span className="text-muted-foreground">Cost Explosion</span>
                        <div className="text-right">
                             <span className="font-mono font-bold text-xl text-red-500">Recursive Tool Call Burn</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                        <span className="text-muted-foreground">Iteration Speed</span>
                        <span className="font-bold text-red-400">Locked to Monolith</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                         <span className="text-muted-foreground">Hallucination Detection</span>
                         <span className="font-bold text-red-400">Impossible (No isolation)</span>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center">
                    <p className="text-lg font-medium italic mb-2">
                        "Your agents are one memory leak away from a total system outage."
                    </p>
                    <p className="text-muted-foreground">
                        Stop deploying agents as scripts. <br/>
                        Start deploying them as <span className="text-foreground font-bold">isolated, managed services</span>.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

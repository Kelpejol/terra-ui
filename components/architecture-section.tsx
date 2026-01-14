"use client"

import { Activity, Shield, Brain, Layers, Database, HardDrive, Terminal, AlertOctagon, DollarSign } from "lucide-react"

export function ArchitectureSection() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                The Complete Architecture
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-muted-foreground">
                  Most teams run all agents in one process, container, or job. 
                  Consonant turns each agent into an <span className="text-foreground font-semibold">independent service</span> with clear boundaries.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                  <Database className="w-3.5 h-3.5" /> Any Framework
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                  <Activity className="w-3.5 h-3.5" /> Independent Scaling
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                  <AlertOctagon className="w-3.5 h-3.5" /> Failure Isolation
                </span>
              </div>
            </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
            {/* 1. USER */}
            <div className="flex flex-col items-center mb-8 relative z-10">
                <div className="bg-card border border-border rounded-xl p-4 shadow-sm w-64 text-center">
                    <div className="font-bold mb-1">1. USER</div>
                    <div className="text-sm text-muted-foreground bg-muted/50 rounded px-2 py-1">
                        "Database slow, fix it"
                    </div>
                </div>
                <div className="h-8 w-px bg-border my-2" />
                <div className="w-2 h-2 rounded-full bg-border" />
            </div>

            {/* 2. CONSONANT CORE */}
            <div className="relative z-10 bg-card border border-primary/20 shadow-2xl shadow-primary/5 rounded-2xl p-8 mb-8">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-4 text-sm font-bold text-primary border border-primary/20 rounded-full">
                    2. CONSONANT CONTROL PLANE
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-muted/30 rounded-lg p-4 border border-border/50 text-center group hover:border-primary/50 transition-colors">
                        <Brain className="w-8 h-8 text-purple-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="font-bold text-foreground">Intelligence</div>
                        <div className="text-xs text-muted-foreground mt-1">Routes to right agent</div>
                    </div>
                    
                    <div className="bg-muted/30 rounded-lg p-4 border border-border/50 text-center group hover:border-primary/50 transition-colors">
                        <Shield className="w-8 h-8 text-green-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="font-bold text-foreground">Policy Engine</div>
                        <div className="text-xs text-muted-foreground mt-1">Checks permissions</div>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-4 border border-border/50 text-center group hover:border-primary/50 transition-colors">
                        <Activity className="w-8 h-8 text-blue-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <div className="font-bold text-foreground">Observability</div>
                        <div className="text-xs text-muted-foreground mt-1">Traces everything</div>
                    </div>
                </div>
            </div>

            {/* Connecting Line */}
            <div className="flex flex-col items-center mb-8 relative z-10">
                 <div className="h-8 w-px bg-border" />
                 <div className="w-2 h-2 rounded-full bg-border" />
            </div>

            {/* 3. RELAYER */}
            <div className="flex justify-center mb-8 relative z-10">
                 <div className="bg-card border border-border rounded-xl px-12 py-3 shadow-sm text-center">
                    <div className="font-bold">3. RELAYER</div>
                </div>
            </div>

            {/* Connecting Line */}
            <div className="flex flex-col items-center mb-8 relative z-10">
                 <div className="h-8 w-px bg-border" />
                 <div className="w-2 h-2 rounded-full bg-border" />
            </div>

            {/* 4. KAGENT LAYER */}
            <div className="bg-muted/10 border border-border border-dashed rounded-3xl p-8 relative z-10 text-center">
                <div className="font-bold text-muted-foreground mb-6 tracking-widest text-xs">
                    4. AGENT RUNTIME (ANY FRAMEWORK) - Independent scaling & failure domains
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <div className="bg-card border border-border rounded-lg p-4 flex flex-col items-center gap-2">
                        <Database className="w-6 h-6 text-foreground" />
                        <div className="font-mono text-xs font-bold">DB Agent</div>
                     </div>
                     <div className="bg-card border border-border rounded-lg p-4 flex flex-col items-center gap-2">
                        <Layers className="w-6 h-6 text-foreground" />
                        <div className="font-mono text-xs font-bold">K8s Agent</div>
                     </div>
                     <div className="bg-card border border-border rounded-lg p-4 flex flex-col items-center gap-2">
                        <DollarSign className="w-6 h-6 text-foreground" />
                        <div className="font-mono text-xs font-bold">Cost Agent</div>
                     </div>
                     <div className="bg-card border border-border rounded-lg p-4 flex flex-col items-center gap-2">
                        <Shield className="w-6 h-6 text-foreground" />
                        <div className="font-mono text-xs font-bold">Sec Agent</div>
                     </div>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                    Each runs in a separate container • Independent scaling • Fault isolated
                </div>
            </div>

            {/* Connecting Lines for Diagram */}
            <div className="absolute inset-0 pointer-events-none flex justify-center">
                <div className="w-[1px] bg-border h-full opacity-20" />
            </div>
        </div>

        {/* Callouts */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
             <div className="flex gap-4">
                <div className="mt-1">
                    <Brain className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                    <h4 className="font-bold mb-1">Intelligence</h4>
                    <p className="text-sm text-muted-foreground">LLM decides which agent to use based on the user request and agent capabilities description.</p>
                </div>
             </div>
             <div className="flex gap-4">
                <div className="mt-1">
                    <Shield className="w-5 h-5 text-green-500" />
                </div>
                 <div>
                    <h4 className="font-bold mb-1">Policy Engine</h4>
                    <p className="text-sm text-muted-foreground">OPA enforces governance (SOC2-ready). No action is taken without a policy check pass.</p>
                </div>
             </div>
             <div className="flex gap-4">
                <div className="mt-1">
                    <Activity className="w-5 h-5 text-blue-500" />
                </div>
                 <div>
                    <h4 className="font-bold mb-1">Observability</h4>
                    <p className="text-sm text-muted-foreground">Complete audit trail. Every input, output, and tool call is traced and recorded.</p>
                </div>
             </div>
        </div>
      </div>
    </section>
  )
}


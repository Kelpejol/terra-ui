"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "./doc-components"
import { AlertTriangle, Cpu, Shield, Clock, Lock, Zap, Gauge, Package } from "lucide-react"

export default function DocsIntroduction() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="The Production Problem"
        description="Most agent systems are one memory leak away from a total business outage. This is why multi-agent monoliths fail, and why you need agent-native infrastructure."
        label="Introduction"
      />

      <div className="prose prose-invert max-w-none">
        <Callout type="danger" title="The 2 AM Disaster">
          <p>
            Imagine it's 2 AM. Your fraud detection agent has a memory leak. It consumes all available RAM and crashes. 
            Because you packaged all your agents into one container, <strong>every other agent crashes too.</strong> 
            Your customer refund agent, your inventory agent, and your order processor are all dead. 
            <strong>Your entire business is offline because of one bug in one agent.</strong>
          </p>
        </Callout>

        <h2>The Monolithic Trap</h2>
        <p>
          Frameworks like LangGraph, CrewAI, and AutoGen make it easy to build. But the industry standard deployment pattern—packaging everything into a single Docker container—is a scaling dead end. 
        </p>
        <p>
          When you move from "it works on my laptop" to 100+ production agents, you hit **The Six Production Disasters**:
        </p>

        <div className="grid md:grid-cols-2 gap-4 not-prose my-8">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5 hover:border-destructive/40 transition-colors">
            <h4 className="font-bold text-destructive flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4" /> 1. Blast Radius
            </h4>
            <p className="text-sm text-foreground/80">
              One agent crashes → 100% outage. Healthy agents are killed by the shared process space. 
              <strong>Result: 18 days of downtime per year.</strong>
            </p>
          </div>
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5 hover:border-destructive/40 transition-colors">
            <h4 className="font-bold text-destructive flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4" /> 2. Resource Coupling
            </h4>
            <p className="text-sm text-foreground/80">
              Provisioning for the hungriest agent wastes millions. 
              <strong>Result: 56% of compute budget burned on idle RAM.</strong>
            </p>
          </div>
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5 hover:border-destructive/40 transition-colors">
            <h4 className="font-bold text-destructive flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4" /> 3. Deployment Freeze
            </h4>
            <p className="text-sm text-foreground/80">
               Fix a 10-line bug in one agent? Rebuild and redeploy the entire monolith. 
               <strong>Result: 208 hours per year of system fragility.</strong>
            </p>
          </div>
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5 hover:border-destructive/40 transition-colors">
            <h4 className="font-bold text-destructive flex items-center gap-2 mb-2">
              <Gauge className="w-4 h-4" /> 4. Scaling Catastrophe
            </h4>
            <p className="text-sm text-foreground/80">
              Scaling your email agent? You're forced to scale your heavy ML researcher too. 
              <strong>Result: 9x resource bloat during traffic spikes.</strong>
            </p>
          </div>
           <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5 hover:border-destructive/40 transition-colors">
            <h4 className="font-bold text-destructive flex items-center gap-2 mb-2">
              <Package className="w-4 h-4" /> 5. Dependency Hell
            </h4>
            <p className="text-sm text-foreground/80">
              Locked into one Python version and one framework forever. 
              <strong>Result: Cannot adopt new tools without a total rewrite.</strong>
            </p>
          </div>
           <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5 hover:border-destructive/40 transition-colors">
            <h4 className="font-bold text-destructive flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4" /> 6. Noisy Neighbors
            </h4>
            <p className="text-sm text-foreground/80">
              One greedy agent eats 100% CPU, starving the critical router. 
              <strong>Result: Unpredictable latency and random timeouts.</strong>
            </p>
          </div>
        </div>

        <h2>The Consonant Solution: Agent Isolation</h2>
        <p>
          Consonant is Kubernetes for AI agents. We provide a distributed runtime where <strong>each agent runs in its own isolated container</strong>. 
        </p>
        <p>
          Instead of a monolithic mistake, you get a robust, self-healing system where agents scale, crash, and deploy independently.
        </p>

        <div className="my-10 rounded-2xl overflow-hidden border border-border bg-card/30">
          <div className="bg-muted/50 p-4 border-b border-border flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Architectural Transformation</span>
          </div>
          <div className="p-8 flex flex-col md:flex-row gap-12 items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-44 h-28 border-2 border-dashed border-destructive/40 rounded-xl flex flex-wrap gap-2 p-3 justify-center items-center bg-destructive/5 relative shadow-inner">
                <span className="absolute -top-3 bg-background px-2 text-[10px] text-destructive font-black tracking-tighter uppercase">Monolith (Fragmented)</span>
                <div className="w-8 h-8 rounded bg-muted/50 border border-border flex items-center justify-center text-[10px] font-bold">A</div>
                <div className="w-8 h-8 rounded bg-muted/50 border border-border flex items-center justify-center text-[10px] font-bold">B</div>
                <div className="w-8 h-8 rounded bg-muted/50 border border-border flex items-center justify-center text-[10px] font-bold">C</div>
                <div className="w-full text-center text-[9px] text-destructive/60 font-medium">Shared Fate</div>
              </div>
              <span className="text-xs font-bold text-destructive/80">18 Days Downtime/yr</span>
            </div>

            <div className="text-4xl text-muted-foreground/30 font-light flex items-center">→</div>

            <div className="flex flex-col items-center gap-4">
               <div className="flex gap-3">
                 <div className="w-14 h-28 border-2 border-primary/40 rounded-xl flex flex-col items-center justify-between p-2 bg-primary/5 shadow-lg shadow-primary/5">
                   <div className="w-8 h-8 rounded bg-primary/20 border border-primary/40 flex items-center justify-center text-xs font-bold">A</div>
                   <span className="text-[9px] text-primary font-bold">POD</span>
                 </div>
                 <div className="w-14 h-28 border-2 border-primary/40 rounded-xl flex flex-col items-center justify-between p-2 bg-primary/5 shadow-lg shadow-primary/5">
                   <div className="w-8 h-8 rounded bg-primary/20 border border-primary/40 flex items-center justify-center text-xs font-bold">B</div>
                   <span className="text-[9px] text-primary font-bold">POD</span>
                 </div>
                 <div className="w-14 h-28 border-2 border-primary/40 rounded-xl flex flex-col items-center justify-between p-2 bg-primary/5 shadow-lg shadow-primary/5">
                   <div className="w-8 h-8 rounded bg-primary/20 border border-primary/40 flex items-center justify-center text-xs font-bold">C</div>
                   <span className="text-[9px] text-primary font-bold">POD</span>
                 </div>
               </div>
               <span className="text-xs font-bold text-primary">7 Days Downtime/yr</span>
            </div>
          </div>
        </div>

        <h3>The Core Pillars</h3>
        <ul>
            <li><strong>KAgent Runtime:</strong> Isolated agent execution in Kubernetes. Zero blast radius.</li>
            <li><strong>Control Plane:</strong> Intelligent routing, policy enforcement (OPA), and state management.</li>
            <li><strong>Observability:</strong> Complete distributed traces across every agent interaction.</li>
        </ul>

        <h2>Ship Confidently</h2>
        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-8">
          <NextStepCard 
            href="/docs/architecture"
            title="Explore Architecture"
            description="How Consonant sits between your intelligence and your infrastructure."
          />
          <NextStepCard 
            href="/docs/quickstart"
            title="Start in 5 Minutes"
            description="Deploy your first isolated agent using our CLI."
          />
        </div>
      </div>
    </div>
  )
}


"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../doc-components"
import { Layers, Server, Activity, ShieldCheck, Zap } from "lucide-react"

export default function ArchitecturePage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Architecture Overview"
        description="Consonant is an abstraction layer that sits between your intelligence and your infrastructure."
        label="Architecture"
      />

      <div className="prose prose-invert max-w-none">
        
        <h2>The 4-Layer Stack</h2>
        <p>
          Consonant transforms raw compute and models into a robust, self-healing agent ecosystem. We do this by separating the concerns of <strong>Orchestration</strong>, <strong>Security</strong>, and <strong>Execution</strong> into four distinct layers.
        </p>

        <div className="space-y-8 not-prose my-12">
            
            {/* Layer 1: The User Layer */}
            <div className="flex gap-6 items-start p-6 rounded-xl border border-border bg-card/30">
               <div className="mt-1">
                 <div className="w-10 h-10 rounded bg-secondary border border-border flex items-center justify-center text-foreground">
                    <Activity className="w-6 h-6" />
                 </div>
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">1. The Interface Layer</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Users submit <strong>Goals</strong> (e.g., "Analyze this 10-K report") via CLI, API, or UI. This layer abstracts away the complexity of which agent does what.
                  </p>
               </div>
            </div>

            {/* Layer 2: Consonant Core */}
            <div className="flex gap-6 items-start p-6 rounded-xl border border-primary/20 bg-primary/5">
               <div className="mt-1">
                 <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-primary-foreground">
                    <Zap className="w-6 h-6" />
                 </div>
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">2. Consonant Core (The Brain)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Control Plane receives goals, breaks them into plans, and enforces enterprise-grade <strong>Policies</strong>. It handles routing and ensures no agent executes an unauthorized action.
                  </p>
               </div>
            </div>

            {/* Layer 3: Relayer */}
            <div className="flex gap-6 items-start p-6 rounded-xl border border-border bg-card/30">
               <div className="mt-1">
                 <div className="w-10 h-10 rounded bg-secondary border border-border flex items-center justify-center text-foreground">
                    <ShieldCheck className="w-6 h-6" />
                 </div>
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">3. The Relayer (Intelligence)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A zero-trust networking layer that coordinates communication between agents. It ensures that data flows only where it is allowed and provides 100% observability into every interaction.
                  </p>
               </div>
            </div>

            {/* Layer 4: KAgent */}
            <div className="flex gap-6 items-start p-6 rounded-xl border border-border bg-card/30">
               <div className="mt-1">
                 <div className="w-10 h-10 rounded bg-secondary border border-border flex items-center justify-center text-foreground">
                    <Server className="w-6 h-6" />
                 </div>
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">4. KAgent (Execution)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The atomic unit of compute. Every agent runs in an isolated Pod with dedicated resources. One KAgent crashes? The rest of the cluster never feels it.
                  </p>
               </div>
            </div>
        </div>

        <h2>Zero Blast Radius Architecture</h2>
        <p>
            Traditional agent systems are "Shared Fate" systems. Consonant is a "Discrete Fate" system. By utilizing Kubernetes native isolation, we provide:
        </p>

        <div className="grid md:grid-cols-3 gap-4 not-prose my-10">
            <div className="p-4 rounded-lg border border-border bg-card/50">
                <div className="font-bold text-sm mb-1 uppercase tracking-wider text-primary">Isolation</div>
                <p className="text-xs text-muted-foreground">Each agent has its own CPU/RAM/Image.</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card/50">
                <div className="font-bold text-sm mb-1 uppercase tracking-wider text-primary">Governance</div>
                <p className="text-xs text-muted-foreground">Rego-based policies check every goal.</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card/50">
                <div className="font-bold text-sm mb-1 uppercase tracking-wider text-primary">Visibility</div>
                <p className="text-xs text-muted-foreground">O11y is baked into the runtime sidecar.</p>
            </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/architecture/kagent"
            title="Deep Dive: KAgent"
            description="How we turn any container into a managed agent."
          />
          <NextStepCard 
            href="/docs/architecture/control-plane"
            title="Deep Dive: Control Plane"
            description="The intelligence behind the orchestration."
          />
        </div>
      </div>
    </div>
  )
}

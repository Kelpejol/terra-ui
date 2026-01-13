"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../doc-components"
import { Layers, Server, Activity } from "lucide-react"

export default function ArchitecturePage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Architecture Overview"
        description="A technical deep-dive into how Consonant orchestrates distributed agents."
        label="Architecture"
      />

      <div className="prose prose-invert max-w-none">
        
        <h2>High-Level Design</h2>
        <p>
          Consonant follows a <strong>Micro-Agent Architecture</strong>. 
          Unlike traditional microservices where services are static and dumb, 
          Micro-Agents are autonomous but loosely coupled.
        </p>
        <p>
            The system is composed of three distinct layers:
        </p>

        <div className="space-y-8 not-prose my-12">
            
            {/* Layer 1 */}
            <div className="flex gap-6 items-start">
               <div className="mt-1">
                 <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-primary-foreground">
                    <Layers className="w-6 h-6" />
                 </div>
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">1. The KAgent Runtime</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This is the data plane. It's a specialized Kubernetes Custom Resource Definition (CRD) that wraps 
                    your agent code (Python/Node/Go) with a sidecar proxy. The sidecar handles mTLS networking, 
                    tracing, and policy enforcement *before* traffic hits your code.
                  </p>
               </div>
            </div>

            {/* Layer 2 */}
            <div className="flex gap-6 items-start">
               <div className="mt-1">
                 <div className="w-10 h-10 rounded bg-secondary border border-border flex items-center justify-center text-foreground">
                    <Server className="w-6 h-6" />
                 </div>
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">2. The Control Plane</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The brain of the system. It receives high-level Goals from users ("Process refund"), 
                    breaks them down into executable Plans, and routes steps to the appropriate KAgents. 
                    It maintains the Global State of the conversation/workflow.
                  </p>
               </div>
            </div>

            {/* Layer 3 */}
            <div className="flex gap-6 items-start">
               <div className="mt-1">
                 <div className="w-10 h-10 rounded bg-secondary border border-border flex items-center justify-center text-foreground">
                    <Activity className="w-6 h-6" />
                 </div>
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">3. Observability Layer</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Consonant automatically collects logs, metrics, and traces from all agents and the control plane.
                    It stitches them together into coherent "Session Traces" so you can debug complex interactions.
                  </p>
               </div>
            </div>
        </div>

        <h2>Component Diagram</h2>
        
        <div className="p-8 border border-border rounded-xl bg-card/50 my-8 flex justify-center">
            {/* A simple CSS representation of the architecture */}
            <div className="relative w-full max-w-lg aspect-video border-2 border-dashed border-border rounded-xl p-4 flex flex-col justify-between">
                <span className="absolute top-2 left-4 text-xs font-mono text-muted-foreground">KUBERNETES CLUSTER</span>
                
                {/* Control Plane Box */}
                <div className="w-full h-1/3 border border-primary/50 bg-primary/5 rounded-lg flex items-center justify-center mb-4 relative">
                   <span className="text-sm font-bold text-foreground">Control Plane</span>
                   <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-border"></div>
                </div>

                {/* Agents Layer */}
                <div className="flex justify-around items-end h-1/2">
                    <div className="w-24 h-24 border border-border bg-secondary/20 rounded-lg flex flex-col items-center justify-center p-2">
                        <span className="text-xs font-mono mb-1">KAgent</span>
                        <div className="w-full h-full bg-card border border-border rounded flex items-center justify-center text-xs">Pod A</div>
                    </div>
                    <div className="w-24 h-24 border border-border bg-secondary/20 rounded-lg flex flex-col items-center justify-center p-2">
                         <span className="text-xs font-mono mb-1">KAgent</span>
                        <div className="w-full h-full bg-card border border-border rounded flex items-center justify-center text-xs">Pod B</div>
                    </div>
                     <div className="w-24 h-24 border border-border bg-secondary/20 rounded-lg flex flex-col items-center justify-center p-2">
                         <span className="text-xs font-mono mb-1">KAgent</span>
                        <div className="w-full h-full bg-card border border-border rounded flex items-center justify-center text-xs">Pod C</div>
                    </div>
                </div>
            </div>
        </div>

        <h3>Key Properties</h3>
        <ul>
            <li><strong>Decoupled:</strong> Agents don't know about each other seamlessly. They communicate via the Control Plane.</li>
            <li><strong>Polyglot:</strong> Agent A can be Python, Agent B can be Node.js.</li>
            <li><strong>Event-Driven:</strong> Communication is asynchronous by default.</li>
        </ul>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/architecture/kagent"
            title="Deep Dive: KAgent"
            description="Learn how the agent runtime works."
          />
          <NextStepCard 
            href="/docs/architecture/control-plane"
            title="Deep Dive: Control Plane"
            description="Understand routing and state management."
          />
        </div>
      </div>
    </div>
  )
}

"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../../doc-components"
import { Cpu, Network, Eye } from "lucide-react"

export default function SolutionPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="How Consonant Solves This"
        description="We replace the monolithic container with a distributed agent runtime composed of three pillars: Independence, Coordination, and Visibility."
        label="Introduction"
      />

      <div className="prose prose-invert max-w-none">
        
        <h2>The Three Pillars of Consonant</h2>
        <p>
          To solve the seven production disasters, Consonant fundamentally changes the architecture of multi-agent systems.
          We provide three core capabilities that work together to create a robust production environment.
        </p>

        <div className="grid gap-6 not-prose my-10">
          <div className="flex gap-4 p-6 rounded-xl border border-border bg-card/50">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
               <Cpu className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">1. Independent Agent Runtime (KAgent)</h3>
              <p className="text-muted-foreground mb-4">
                We wrap each agent in a specialized Kubernetes Runtime (KAgent). This gives each agent its own 
                IP address, its own resource quota, and its own scaling policy.
              </p>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"/> Solves Blast Radius (Failures are isolated)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"/> Solves Cost Waste (Right-sized resources)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"/> Solves Deployment Risk (Independent updates)</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 p-6 rounded-xl border border-border bg-card/50">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
               <Network className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">2. Automatic Coordination (Control Plane)</h3>
              <p className="text-muted-foreground mb-4">
                Once agents are distributed, they need to talk. Consonant's control plane handles all communication,
                routing requests based on high-level goals and enforcing policies before any action is taken.
              </p>
             <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"/> Dynamic Request Routing</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"/> Policy Enforcement (OPA)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"/> Automatic Retries & Circuit Breaking</li>
              </ul>
            </div>
          </div>

           <div className="flex gap-4 p-6 rounded-xl border border-border bg-card/50">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
               <Eye className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">3. Complete Visibility (Observability)</h3>
              <p className="text-muted-foreground mb-4">
                Debugging distributed systems is hard. Consonant instruments everything automatically. 
                Get full distributed traces, inputs/outputs for every step, and cost tracking per agent.
              </p>
               <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"/> Distributed Tracing (OpenTelemetry)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"/> Step-by-step Replay</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"/> Cost Attribution</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>How it comes together</h2>
        <p>
          You define your agents in a manifest, and Consonant handles the rest.
        </p>

        <CodeBlock
          language="yaml"
          code={`apiVersion: consonant/v1
kind: Project
metadata:
  name: market-research
spec:
  agents:
    - name: researcher
      image: agents/researcher:v1
      resources: { cpu: "2", memory: "4Gi" }
    - name: writer
      image: agents/writer:v1
      resources: { cpu: "0.5", memory: "1Gi" }
  
  policies:
    - name: budget-limit
      rule: "cost < $10"
`}
        />

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/architecture"
            title="Consonant Architecture"
            description="See the detailed technical design."
          />
          <NextStepCard 
            href="/docs/quickstart"
            title="Start Building"
            description="Install Consonant and run your first agent."
          />
        </div>
      </div>
    </div>
  )
}

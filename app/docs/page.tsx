"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "./doc-components"
import { AlertTriangle, Cpu, Shield, Clock, Lock } from "lucide-react"

export default function DocsIntroduction() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="The Production Problem"
        description="Why packaging multiple AI agents into a single container is a recipe for disaster, and how Consonant fixes it."
        label="Introduction"
      />

      <div className="prose prose-invert max-w-none">
        <h2>The State of Multi-Agent Systems</h2>
        <p>
          Most developers start building multi-agent systems using frameworks like LangGraph, CrewAI, or AutoGen. 
          It's easy to get started: you write a Python script, define a few agents (Researcher, Writer, Reviewer), 
          and string them together in a graph.
        </p>
        <p>
          It works perfectly on your laptop. Then you deploy it to production.
        </p>

        <Callout type="danger" title="The Monolithic Trap">
          <p>
            The industry standard deployment pattern is the <strong>Monolithic Container</strong>: 
            packaging all your agent code, dependencies, and orchestration logic into a single Docker image.
          </p>
        </Callout>

        <h3>Why Monoliths Fail at Scale</h3>
        <p>
          When you have 3+ agents running in a single container, you hit five unavoidable production disasters:
        </p>

        <div className="grid md:grid-cols-2 gap-4 not-prose my-8">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <h4 className="font-bold text-destructive flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4" /> 1. Blast Radius
            </h4>
            <p className="text-sm text-foreground/80">
              One agent has a memory leak? The entire container crashes. Your healthy agents go down with it. 
              <strong>100% outage from a single failure.</strong>
            </p>
          </div>
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <h4 className="font-bold text-destructive flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4" /> 2. Cost Waste
            </h4>
            <p className="text-sm text-foreground/80">
              Agent A needs GPU. Agent B needs 0.1 CPU. You have to provision instances that handle BOTH. 
              <strong>40%+ of your compute is wasted</strong> on over-provisioning.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <h4 className="font-bold text-destructive flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4" /> 3. Deployment Risk
            </h4>
            <p className="text-sm text-foreground/80">
               Fix a typo in Agent A? You must rebuild and redeploy the entire system. 
               <strong>Every deploy risks bringing down the whole platform.</strong>
            </p>
          </div>
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
             <h4 className="font-bold text-destructive flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4" /> 4. Framework Lock-in
            </h4>
            <p className="text-sm text-foreground/80">
              Started with LangGraph? You can't use a CrewAI agent now. 
              <strong>You are locked into one framework</strong> for the lifecycle of the application.
            </p>
          </div>
        </div>

        <h2>The Consonant Solution: Independence</h2>
        <p>
          Consonant rejects the monolith. Instead of bundling agents, we <strong>separate them</strong>.
        </p>
        <p>
          Consonant provides a distributed runtime (KAgent) where each agent runs in its own isolated environment (Kubernetes Pod). 
          They scale independently, crash independently, and are deployed independently.
        </p>

        <div className="my-8 rounded-xl overflow-hidden border border-border">
          <div className="bg-secondary/50 p-4 border-b border-border flex items-center justify-between">
            <span className="font-mono text-sm">architecture_comparison.svg</span>
          </div>
          <div className="p-8 bg-card/50 flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Simple CSS diagram for documentation */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-48 h-32 border-2 border-dashed border-destructive rounded-lg flex flex-wrap gap-2 p-2 justify-center items-center bg-destructive/5 relative">
                <span className="absolute -top-3 bg-background px-2 text-xs text-destructive font-bold">MONOLITH</span>
                <div className="w-8 h-8 rounded bg-muted border border-border flex items-center justify-center text-xs">A</div>
                <div className="w-8 h-8 rounded bg-muted border border-border flex items-center justify-center text-xs">B</div>
                <div className="w-8 h-8 rounded bg-muted border border-border flex items-center justify-center text-xs">C</div>
                <div className="w-full text-center text-[10px] text-destructive mt-1">Shared Failure Domain</div>
              </div>
            </div>

            <div className="text-muted-foreground">→</div>

            <div className="flex flex-col items-center gap-2">
               <div className="flex gap-4">
                 <div className="w-16 h-28 border-2 border-primary rounded-lg flex flex-col items-center justify-between p-2 bg-primary/5 relative">
                   <div className="w-8 h-8 rounded bg-primary/20 border border-primary flex items-center justify-center text-xs">A</div>
                   <span className="text-[10px] text-primary">2 CPU</span>
                 </div>
                 <div className="w-16 h-28 border-2 border-primary rounded-lg flex flex-col items-center justify-between p-2 bg-primary/5 relative">
                   <div className="w-8 h-8 rounded bg-primary/20 border border-primary flex items-center justify-center text-xs">B</div>
                   <span className="text-[10px] text-primary">0.1 CPU</span>
                 </div>
                 <div className="w-16 h-28 border-2 border-primary rounded-lg flex flex-col items-center justify-between p-2 bg-primary/5 relative">
                   <div className="w-8 h-8 rounded bg-primary/20 border border-primary flex items-center justify-center text-xs">C</div>
                   <span className="text-[10px] text-primary">GPU</span>
                 </div>
               </div>
               <span className="text-xs text-primary font-bold">INDEPENDENT RUNTIMES</span>
            </div>
          </div>
        </div>

        <h3>How It Works</h3>
        <p>
          1. <strong>You define agents</strong> in simple YAML manifests.
          <br/>
          2. <strong>Consonant deploys them</strong> as individual services.
          <br/>
          3. <strong>The Control Plane</strong> coordinates them automatically for you.
        </p>

        <CodeBlock 
          language="yaml" 
          code={`# Create an agent that scales independently
apiVersion: consonant/v1
kind: Agent
metadata:
  name: researcher
spec:
  image: my-company/researcher:v1.2
  resources:
    cpu: "2"
    memory: "4Gi"
  scaling:
    minReplicas: 1
    maxReplicas: 10`} 
        />

        <h2>Ready to fix your production?</h2>
        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-8">
          <NextStepCard 
            href="/docs/introduction/solution"
            title="How Consonant Solves This"
            description="Deep dive into KAgent, Control Plane, and Observability."
          />
          <NextStepCard 
            href="/docs/quickstart"
            title="Quickstart Guide"
            description="Deploy your first two agents in 5 minutes."
          />
        </div>
      </div>
    </div>
  )
}

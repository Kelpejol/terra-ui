"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../../doc-components"
import { AlertTriangle, Cpu, Gauge, Zap } from "lucide-react"

export default function MonolithicProblemPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="The Monolithic Problem"
        description="A technical analysis of why shared containers are fundamentally unsuited for multi-agent systems."
        label="Architecture"
      />

      <div className="prose prose-invert max-w-none">
        <h2>The Single Process Illusion</h2>
        <p>
            When you package `agent_a.py`, `agent_b.py`, and `orchestrator.py` into a single Dockerfile, you aren't just deploying code; you are creating a **Shared Fate Domain**. 
        </p>
        <p>
            In this model, the boundaries between agents are purely logical (functions or classes). In production, these boundaries dissolve under pressure.
        </p>

        <h3>1. Blast Radius: 100% Shared Failure</h3>
        <p>
            In a Linux container, all processes share the same userspace and memory pool. If your Fraud Detection agent triggers a memory leak while processing a massive dataset, the Linux kernel doesn't just kill that agent. 
        </p>
        <p>
            The **OOM (Out-of-Memory) Killer** terminates the entire pod.
        </p>
        
        <CodeBlock language="python" code={`# The Monolithic Death Spiral
def fraud_agent():
    # A bug causing 100MB/min leak
    data.append(process_heavy_ml_inference()) 

# This healthy agent dies too
def refund_agent():
    # Perfectly fine code, but killed by OOM killer 
    # because it shared a pod with the fraud_agent.
    process_customer_refund()`} />

        <h3>2. Resource Coupling: The Cost of Waste</h3>
        <p>
            Agents have wildly different resource profiles. A Researcher might need 4 CPUs and a GPU, while a Router needs 0.1 CPU. 
        </p>
        <p>
            In a monolith, you must provision the pod for the **sum of all worst cases**. If you have 5 agents, you are likely over-provisioning by 400%.
        </p>

        <div className="bg-secondary/20 rounded-xl p-6 my-8 border border-border">
            <h4 className="font-bold flex items-center gap-2 mb-4">
                <Cpu className="w-5 h-5 text-primary" /> The Waste Math
            </h4>
            <ul className="space-y-3 m-0 list-none">
                <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Monolithic Provisioning (100 agents):</span>
                    <span className="font-mono text-destructive">$292,000/yr</span>
                </li>
                <li className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Consonant Isolated Provisioning:</span>
                    <span className="font-mono text-primary">$125,000/yr</span>
                </li>
                <li className="flex justify-between font-bold border-t border-border pt-3">
                    <span>Direct Savings:</span>
                    <span className="text-primary">$167,000/yr / environment</span>
                </li>
            </ul>
        </div>

        <h3>3. Deployment Risk: Fixed One, Broke All</h3>
        <p>
            Fixing a typo in your Refund Agent shouldn't require restarting your Fraud Detection models. 
        </p>
        <p>
            In a monolith, every deployment is a "Full System Restart." This introduces 12 minutes of fragility per deploy. If you deploy 20 times a week, that is **4 hours of high-risk exposure every single week.**
        </p>

        <Callout type="warning" title="Noisy Neighbors">
            <p>
                Agents compete for the same CPU cycles. One greedy agent performing local embedding generation will starve the critical response agent, leading to random timeouts that are impossible to debug in logs.
            </p>
        </Callout>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/architecture"
            title="Next: The Isolated Solution"
            description="How Consonant solves this via KAgent and the Control Plane."
          />
        </div>
      </div>
    </div>
  )
}

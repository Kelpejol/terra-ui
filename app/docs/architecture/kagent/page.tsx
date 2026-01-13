"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../../doc-components"
import { Shield, Activity, Cpu, Box } from "lucide-react"

export default function KAgentPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="KAgent Runtime"
        description="The atomic unit of isolation that turns any agent into a managed, production-ready service."
        label="Architecture"
      />

      <div className="prose prose-invert max-w-none">
        <h2>What is a KAgent?</h2>
        <p>
            The KAgent (Kubernetes Agent) is Consonant's answer to the monolithic blast radius. It is a specialized Kubernetes Pod that provides a **Hard Security Boundary** and **Resource Guarantee** for every agent in your fleet.
        </p>
        
        <p>Each KAgent consists of two tightly coupled components:</p>

        <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
            <div className="p-6 rounded-xl border border-border bg-card/30">
                <div className="w-10 h-10 rounded bg-secondary border border-border flex items-center justify-center mb-4">
                    <Box className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground">1. The Agent Container</h4>
                <p className="text-sm text-muted-foreground">Your business logic. Runs any language (Python, Node, Go) and any framework (LangGraph, CrewAI). No library changes required.</p>
            </div>
            <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                <div className="w-10 h-10 rounded bg-primary flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-foreground">2. The Consonant Sidecar</h4>
                <p className="text-sm text-muted-foreground">A high-performance Rust proxy that handles identity, encryption, and telemetry. It protects your code from the outside world.</p>
            </div>
        </div>

        <CodeBlock language="text" code={`+-------------------------------------------+
| Pod: payment-processor-v2-abcde           |
|                                           |
|  +-------------------+   +-------------+  |
|  | Your Agent Logic  |   | Consonant   |  |
|  | (LangGraph/Py)    |<->| Sidecar     |<---> TLS Networking
|  | [Isolated Mem/CPU]|   | (Memory-Safe|  |    (mTLS)
|  +-------------------+   +-------------+  |
|                                           |
+-------------------------------------------+`} />

        <h3>The Three Direct Benefits</h3>
        
        <h4>1. Resource Guardrails</h4>
        <p>
            You define the exact CPU and RAM your agent needs. Kubernetes enforces these limits at the KAgent level. If Agent A starts leaking memory, it is terminated and restarted by the Control Plane without ever affecting Agent B.
        </p>

        <h4>2. Zero-Trust Networking (mTLS)</h4>
        <p>
            The sidecar automatically manages short-lived certificates. Agents cannot talk to each other directly; they must authenticate via the sidecar. This prevents a compromised agent from scanning your internal network.
        </p>

        <h4>3. Built-in Observability</h4>
        <p>
            Every request, every DB call, and every LLM interaction passing through the sidecar is automatically recorded as an OpenTelemetry span. You get 100% visibility without adding a single line of SDK code.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/architecture/control-plane"
            title="Next: The Control Plane"
            description="How KAgents are orchestrated."
          />
        </div>
      </div>
    </div>
  )
}

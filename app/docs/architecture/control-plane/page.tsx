"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../../doc-components"
import { Brain, Gavel, Cog, ListChecks } from "lucide-react"

export default function ControlPlanePage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="The Control Plane"
        description="The distributed brain that manages goal decomposition, agent routing, and policy enforcement."
        label="Architecture"
      />

      <div className="prose prose-invert max-w-none">
        <h2>The Central Nervous System</h2>
        <p>
            The Control Plane is a high-availability suite of services running in the `consonant-system` namespace. It ensures that your high-level business goals are executed safely and efficiently across your KAgent fleet.
        </p>

        <div className="space-y-6 not-prose my-10">
            {/* Manager */}
            <div className="p-6 rounded-xl border border-border bg-card/30 flex gap-5">
                <div className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
                    <Cog className="w-6 h-6 text-foreground" />
                </div>
                <div>
                    <h4 className="font-bold text-foreground mb-1">1. The Manager (API Server)</h4>
                    <p className="text-sm text-muted-foreground">The system's source of truth. It manages the agent registry, deployment states, and user sessions. It exposes the REST/gRPC interfaces for the CLI and UI.</p>
                </div>
            </div>

            {/* Planner */}
            <div className="p-6 rounded-xl border border-border bg-card/30 flex gap-5">
                <div className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
                    <Brain className="w-6 h-6 text-foreground" />
                </div>
                <div>
                    <h4 className="font-bold text-foreground mb-1">2. The Planner</h4>
                    <p className="text-sm text-muted-foreground">Compiles fuzzy "Goals" into deterministic execution graphs. It selects the best-fit agents based on capabilities, current load, and resource proximity.</p>
                </div>
            </div>

            {/* Policy Engine */}
            <div className="p-6 rounded-xl border border-primary/20 bg-primary/5 flex gap-5">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Gavel className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                    <h4 className="font-bold text-foreground mb-1">3. The Policy Engine (OPA)</h4>
                    <p className="text-sm text-muted-foreground">The governance layer. Every single plan step is checked against Open Policy Agent (Rego) rules before execution. This ensures compliance is built-in, not bolted-on.</p>
                </div>
            </div>
        </div>

        <h3>Goal Decomposition</h3>
        <p>
            When you submit a goal, the Planner doesn't just "pick an agent." It creates a <strong>Conditional DAG (Directed Acyclic Graph)</strong>. This allows the system to handle contingencies—if Agent A fails or returns an unexpected result, the Control Plane can dynamically reroute the task to a fallback agent.
        </p>

        <div className="p-6 rounded-xl border border-border bg-secondary/20 font-mono text-xs my-8">
            <div className="text-primary mb-2">// Plan: "Process High-Risk Refund"</div>
            <div className="flex items-start gap-2">
                <div className="text-muted-foreground">1.</div>
                <div>[AuditAgent] Check Transaction History <span className="text-green-500">→ OK</span></div>
            </div>
            <div className="flex items-start gap-2">
                <div className="text-muted-foreground">2.</div>
                <div>[Gatekeeper] Check Policy: "Refund Max $1k" <span className="text-green-500">→ PASSED</span></div>
            </div>
            <div className="flex items-start gap-2">
                <div className="text-muted-foreground">3.</div>
                <div>[StripeAgent] Execute Refund <span className="text-yellow-500">→ IN_PROGRESS</span></div>
            </div>
        </div>

        <h3>Global State Management</h3>
        <p>
            The Control Plane maintains a "Common Operating Picture." It stores the conversation history, intermediate tool results, and agent memory in a persistent store. This means if a pod restarts mid-execution, the Control Plane can resume exactly where it left off.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/architecture/observability"
            title="Next: Observability"
            description="How we track every decision."
          />
        </div>
      </div>
    </div>
  )
}

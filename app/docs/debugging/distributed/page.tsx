"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../../doc-components"
import { Search, ListFilter, Activity, Microscope } from "lucide-react"

export default function DebuggingPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Debugging Distributed Agents"
        description="Pinpoint why an autonomous system failed without searching through 50 different log streams."
        label="Debugging"
      />

      <div className="prose prose-invert max-w-none">
        
        <h2>The Observability Gap</h2>
        <p>
            When an agent-driven workflow fails in production, the "State" is scattered across multiple pods. Attaching a debugger to a single container is useless because the failure likely originated three steps ago in a different service.
        </p>

        <h3>The Trace ID: Your Unified Lever</h3>
        <p>
            Every user interaction starts with a <strong>Trace ID</strong>. This ID is cryptographically propagated by the Consonant Relayer across every agent call, tool execution, and database query.
        </p>
        
        <div className="bg-secondary/20 rounded-xl p-6 my-8 border border-border">
            <h4 className="font-bold flex items-center gap-2 mb-4">
                <Search className="w-5 h-5 text-primary" /> Multi-Pod Log Tailing
            </h4>
            <CodeBlock code="cons logs --trace-id d8f2-44a1-8e9c" />
            <p className="text-xs text-muted-foreground mt-4">This command automatically aggregates logs from all agents that participated in session <code>d8f2-44a1-8e9c</code>, sorted chronologically.</p>
        </div>

        <h3>Waterfall Debugging</h3>
        <p>
            The <code>cons trace</code> command reconstructs the execution timeline. It allows you to see exactly where "Latent Hallucinations" or "Component Timeouts" occurred.
        </p>

        <CodeBlock code={`cons trace d8f2-44a1-8e9c
[0ms]     SYSTEM: Goal Received
[120ms]   PLANNER: Plan generated (Step 1: Auditor, Step 2: Coder)
[150ms]   AGENT:auditor -> REQUEST: Check security of main.py
[1200ms]  AGENT:auditor <- RESPONSE: "File is safe" (tokens: 502)
[1250ms]  AGENT:coder   -> REQUEST: Refactor main.py
[15000ms] AGENT:coder   <- ERROR: Context window exceeded`} />

        <Callout type="warning" title="Hallucination Detection">
            <p>
                Consonant's sidecar uses small, specialized "Verifier" models to check agent outputs in real-time. If an output violates a predefined schema or policy, it is marked as a "Trace Fault," alerting you before the invalid data reaches your core systems.
            </p>
        </Callout>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/debugging/tools"
            title="Debugging Tools"
            description="Explore the full suite of CLI tools for agent introspection."
          />
        </div>
      </div>
    </div>
  )
}

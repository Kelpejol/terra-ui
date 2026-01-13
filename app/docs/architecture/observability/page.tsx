"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function ObservabilityPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Observability Layer"
        description="Full visibility into non-deterministic agent workflows."
        label="Architecture"
      />

      <div className="prose prose-invert max-w-none">
        <h2>The Observability Challenge</h2>
        <p>
            In traditional software, stack traces tell you everything. 
            In AI agents, "Stack Traces" are distributed across 10 machines and involve probabilistic LLM outputs.
        </p>

        <h3>Automatic Instrumentation</h3>
        <p>
            Consonant uses OpenTelemetry (OTEL) to instrument the runtime. 
            We capture:
        </p>
        <ul>
            <li><strong>RPC Calls:</strong> Latency and success/fail of Agent-to-Agent calls.</li>
            <li><strong>LLM Invocations:</strong> Tokens used, prompt inputs, and model outputs.</li>
            <li><strong>Tool Execution:</strong> Arguments passed to tools and their raw return values.</li>
        </ul>

        <h3>The Timeline View</h3>
        <p>
            The Consonant Dashboard reconstructs these scattered spans into a linear Timeline View.
        </p>
        
        <div className="bg-card/50 p-4 rounded-xl border border-border font-mono text-sm mb-6">
            <div className="text-muted-foreground">[10:00:01] <span className="text-primary">PLANNER</span> Started. Goal: "Fix bug #123"</div>
            <div className="text-muted-foreground pl-4">└─ Output: Plan generated (3 steps)</div>
            <div className="text-muted-foreground">[10:00:05] <span className="text-blue-400">AGENT:repo-reader</span> Read file `src/main.py`</div>
            <div className="text-muted-foreground pl-4">└─ Output: File content (2kb)</div>
            <div className="text-muted-foreground">[10:00:07] <span className="text-yellow-400">AGENT:coder</span> Generating patch...</div>
            <div className="text-muted-foreground pl-4 text-red-400">└─ Error: Context window exceeded</div>
        </div>

        <p>
            This allows you to pinpoint exactly <em>where</em> the logic broke down. Was it a bad planner decision? 
            A hallucinating agent? Or a tool failure?
        </p>
      </div>
    </div>
  )
}

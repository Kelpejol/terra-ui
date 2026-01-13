"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function DebuggingPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Debugging Distributed Agents"
        description="Finding the needle in the haystack when the haystack is 50 different micro-agents."
        label="Debugging"
      />

      <div className="prose prose-invert max-w-none">
        
        <h2>The 'It Works on My Machine' Problem</h2>
        <p>
            Locally, you can attach a debugger. In production, your agent flow is executing across 5 different pods on 3 different nodes.
        </p>

        <h3>Trace IDs</h3>
        <p>
            Every user request is assigned a `TraceID`. This ID is propagated to every agent call, every log line, and every database query.
        </p>
        
        <CodeBlock code={`# Get the logs for a specific run, across ALL agents
cons logs --trace-id 8f2a1b9e`} />

        <h3>Visualizing the Flow</h3>
        <p>
            The `cons trace` command gives you a waterfall view of execution.
        </p>

        <CodeBlock code={`cons trace 8f2a1b9e
[0ms]   Manager received goal
[50ms]  Planner started
[1500ms] Planner -> Call Agent "Researcher"
[1550ms]    Researcher -> Call tool "GoogleSearch"
[2100ms]    Researcher <- Tool result (400 Bad Request)
[2150ms] Researcher -> Retrying...`} />

        <Callout type="info" title="Context Propagation">
            <p>
                KAgents automatically extract the TraceID from incoming HTTP headers and inject it into outgoing calls. 
                Your code doesn't need to change.
            </p>
        </Callout>

      </div>
    </div>
  )
}

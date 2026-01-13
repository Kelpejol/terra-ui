"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function StatePage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="State Management"
        description="How to keep memory when processes are ephemeral."
        label="Coordination"
      />

      <div className="prose prose-invert max-w-none">
        
        <h2>The State Problem</h2>
        <p>
            When an agent crashes, its memory (RAM) is gone. If you were storing conversation history in a Python list, it's lost forever.
        </p>

        <h3>Persistent Context</h3>
        <p>
            Consonant maintains the <strong>Workflow State</strong> in the Control Plane (backed by Etcd/Postgres).
            When the Control Plane calls an Agent, it passes the relevant <strong>Context</strong> (conversation history, previous tool outputs) as input.
        </p>

        <CodeBlock language="json" code={`// Input passed to Agent
{
  "goal": "Summarize this",
  "context": {
    "file_content": "...",
    "previous_summary": "..."
  },
  "state_id": "run_123"
}`} />

        <p>
            The Agent performs its task and returns the <strong>State Update</strong>. It does *not* persist state locally.
        </p>

         <CodeBlock language="json" code={`// Output from Agent
{
  "result": "Here is the summary...",
  "state_update": {
    "summary_completed": true
  }
}`} />

        <Callout type="success" title="Stateless Agents = Scalable Agents">
            <p>
                Because Agents store no local state, we can run 100 replicas of "Researcher". 
                Any request can go to any replica. If a replica dies mid-request, we just retry on another one.
            </p>
        </Callout>

      </div>
    </div>
  )
}

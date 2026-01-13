"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function ControlPlanePage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="The Control Plane"
        description="The brain of the system: Goals, Plans, and Policies."
        label="Architecture"
      />

      <div className="prose prose-invert max-w-none">
        <h2>Architecture</h2>
        <p>
            The Control Plane is a set of high-availability services running in the `consonant-system` namespace.
        </p>

        <h3>1. The Manager (API Server)</h3>
        <p>
            The entry point for all operations. It exposes a REST/gRPC API for the CLI and UI. 
            It persists state to an embedded Etcd or external Postgres database.
        </p>

        <h3>2. The Planner</h3>
        <p>
            When a user submits a Goal, the Planner wakes up. 
            It uses a swappable LLM backend (Gemini 1.5, GPT-4, Claude 3.5) to compile the Goal into a DAG Plan.
        </p>
        <p>
            It queries the <strong>Service Registry</strong> to find which Agents have the Capabilities required by the Plan.
        </p>

        <h3>3. The Policy Engine (OPA)</h3>
        <p>
            Before *any* plan step is executed, the Policy Engine evaluates it against active Rego policies.
        </p>
        <CodeBlock language="javascript" code={`// Example: Check if the plan is allowed to run
input: {
  agent: "payment-processor",
  action: "refund",
  amount: 500
}

// Policy result:
allow: false
reason: "Refunds over $100 require human approval"`} />

      </div>
    </div>
  )
}

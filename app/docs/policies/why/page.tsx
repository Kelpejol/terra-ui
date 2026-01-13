"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function WhyPoliciesPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Why Policies?"
        description="Preventing $1M mistakes with Policy as Code."
        label="Policies"
      />

      <div className="prose prose-invert max-w-none">
        
        <h2>The Autonomy Risk</h2>
        <p>
            The promise of agents is autonomy. The risk is also autonomy.
            If you give an agent access to your database and your email, you need to be SURE it doesn't delete the DB and email your boss about it.
        </p>

        <h3>Guardrails, not Prompts</h3>
        <p>
            Most frameworks rely on System Prompts for safety ("Please do not delete data"). 
            <strong>LLMs ignore prompts.</strong>
        </p>
        <p>
            Consonant uses <strong>External Guardrails</strong>. The policy engine sits *outside* the agent. 
            Even if the agent *wants* to delete the database, the Control Plane blocks the API call.
        </p>

        <h3>Open Policy Agent (OPA)</h3>
        <p>
            We use OPA and Rego to define policies. These are deterministic rules that evaluate inputs and outputs.
        </p>

        <CodeBlock language="rego" code={`# Allow only if user is admin
default allow = false

allow {
    input.user.role == "admin"
}

# Block PII in output
deny[msg] {
    regex.match("([0-9]{3})-[0-9]{2}-[0-9]{4}", input.agent_output)
    msg := "Output contains social security number"
}`} />

      </div>
    </div>
  )
}

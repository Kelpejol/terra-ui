"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../../doc-components"
import { ShieldAlert, Gavel, Lock, ShieldCheck } from "lucide-react"

export default function WhyPoliciesPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Why Policies?"
        description="Autonomy without governance is a liability. Consonant provides the external guardrails needed for enterprise agents."
        label="Policies"
      />

      <div className="prose prose-invert max-w-none">
        
        <h2>The Prompt Injection Illusion</h2>
        <p>
            Most agent frameworks rely on "System Prompts" for safety (e.g., <em>"Please do not share PII"</em>). This is fundamentally insecure. Prompt injection can bypass these instructions, and LLMs are notorious for "forgetting" constraints under high context loads.
        </p>
        
        <div className="my-8 p-6 rounded-xl border border-destructive/20 bg-destructive/5 flex gap-4">
            <ShieldAlert className="w-10 h-10 text-destructive shrink-0 mt-1" />
            <div>
                <h4 className="font-bold text-destructive mb-1 m-0">DO NOT RELY ON PROMPTS</h4>
                <p className="text-sm m-0">LLMs are non-deterministic. If your security relies on an agent "choosing" to follow a rule, you have no security.</p>
            </div>
        </div>

        <h2>External Guardrails: Out-of-Band Enforcement</h2>
        <p>
            Consonant uses <strong>External Policies</strong>. The governance layer sits *outside* the agent's context window. Even if an agent is successfully "jailbroken" or hallucinates a dangerous action, the Control Plane blocks the API call before it ever reaches your infra.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
            <div className="p-6 rounded-xl border border-border bg-card/30">
                <div className="w-10 h-10 rounded bg-secondary border border-border flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground">Zero-Trust Actions</h4>
                <p className="text-sm text-muted-foreground">Every sensitive tool (DB writes, Email sends, Payments) must be white-listed in a central policy file.</p>
            </div>
            <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                <div className="w-10 h-10 rounded bg-primary flex items-center justify-center mb-4">
                    <Gavel className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-foreground">Policy as Code (OPA)</h4>
                <p className="text-sm text-muted-foreground">We use Open Policy Agent (Rego) to define deterministic, audit-ready rules for every agent interaction.</p>
            </div>
        </div>

        <h3>Example: The $10,000 Safety Net</h3>
        <p>
            Imagine a "Customer Success" agent with access to a refund tool. You can define a policy that allows it to process refunds up to $50 automatically, but requires human approval for anything higher.
        </p>

        <CodeBlock language="rego" code={`# Refund Approval Policy
default allow = false

# Allow agent to refund if amount is < $50
allow {
    input.action == "process_refund"
    input.amount < 50
}

# Require human sigh-off if amount >= $50
deny[msg] {
    input.action == "process_refund"
    input.amount >= 50
    not input.metadata.human_approval_id
    msg := "Refunds over $50 require a human_approval_id"
}`} />

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/policies/examples"
            title="Policy Examples"
            description="See real-world policies for PII, security, and cost control."
          />
        </div>
      </div>
    </div>
  )
}

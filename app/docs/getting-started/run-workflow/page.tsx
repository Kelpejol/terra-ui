"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../../doc-components"
import { Play, Activity, ListChecks } from "lucide-react"

export default function RunWorkflowPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Running Your First Goal"
        description="Shift from task-based scripts to autonomous, goal-driven orchestration."
        label="Getting Started"
      />

      <div className="prose prose-invert max-w-none">
        
        <h2>Goals vs. Tasks</h2>
        <p>
            In traditional automation, you write a script that says <em>"Do A, then B, then C."</em> In Consonant, you submit a <strong>Goal</strong>: <em>"Acknowledge this refund request and verify it against our policy."</em>
        </p>
        <p>
            The Consonant Planner then looks at all registered agents, identifies the best fits, and executes the necessary steps across the distributed cluster.
        </p>

        <h2>Executing via CLI</h2>
        <p>
            The <code>cons run</code> command is your primary interface for triggering complex agent interactions. The <code>--goal</code> flag sends your request directly to the Planner.
        </p>

        <CodeBlock language="bash" code={`cons run --goal "Analyze the last 5 transactions for user @paul and flag anything over $500 for secondary review." --stream`} />

        <h3>The Execution Lifecycle</h3>
        <p>
            When you run a goal, you are watching a distributed system in action. The <code>--stream</code> flag shows you the live routing decisions:
        </p>

        <div className="bg-card/50 p-6 rounded-xl border border-border font-mono text-xs mb-8">
            <div className="text-primary mb-3">// SESSION: f8e9-22c1 (Goal-Driven)</div>
            <div className="flex gap-4">
                <span className="text-muted-foreground w-12 shrink-0">00:01s</span>
                <span className="text-primary font-bold">PLANNER</span>
                <span className="text-foreground">Decomposing goal into 2 steps </span>
            </div>
            <div className="flex gap-4">
                <span className="text-muted-foreground w-12 shrink-0">00:03s</span>
                <span className="text-cyan-400 font-bold">ROUTING</span>
                <span className="text-foreground">Sending Context to [Gatekeeper] agent...</span>
            </div>
            <div className="flex gap-4">
                <span className="text-muted-foreground w-12 shrink-0">00:07s</span>
                <span className="text-amber-400 font-bold">ROUTING</span>
                <span className="text-foreground">Gatekeeper result: "Authorized". Sending to [TransactionAuditor]...</span>
            </div>
            <div className="flex gap-4 mt-2 pt-2 border-t border-border/50">
                <span className="text-muted-foreground w-12 shrink-0">00:12s</span>
                <span className="text-green-500 font-bold">FINISH</span>
                <span className="text-foreground font-bold">Result: 2 transactions flagged. View trace at /sessions/f8e9-22c1</span>
            </div>
        </div>

        <Callout type="info" title="The Power of Async">
            <p>
                For long-running goals (e.g., "Research this 50-page PDF"), use the <code>--async</code> flag. Consonant will return a Run ID immediately, allowing you to check status or tail logs later.
            </p>
        </Callout>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/coordination/why"
            title="How Agents Coordinate"
            description="Deep dive into state sharing and failure handling."
          />
          <NextStepCard 
            href="/docs/policies/why"
            title="Policy Enforcement"
            description="Learn how to restrict what agents can actually do."
          />
        </div>
      </div>
    </div>
  )
}

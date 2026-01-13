"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../../doc-components"
import { GitBranch, ShieldCheck, Zap } from "lucide-react"

export default function ProductionPatternsPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Deployment Patterns"
        description="Ship updates to non-deterministic systems with zero downtime and binary safety."
        label="Production"
      />

      <div className="prose prose-invert max-w-none">
        <h2>The Danger of Global Restarts</h2>
        <p>
            In a monolithic agent system, every update is a "Global Restart" that risks 100% outage. In Consonant, we treat agent updates as <strong>Isolated Transitions</strong>. We provide native support for several advanced deployment patterns designed specifically for the unpredictability of LLMs.
        </p>

        <h3>1. Blue/Green Runtimes</h3>
        <p>
            Deploy a completely new version of your "Researcher" agent (v2) alongside the current stable version (v1). The Consonant Control Plane will keep the mTLS session alive while shifting traffic seamlessly between pods. 
        </p>

        <h3>2. Canary Deployments</h3>
        <p>
            Route a small percentage of "Goals" to the new agent version. Consonant automatically measures the <strong>Success Rate</strong> and <strong>Latency</strong> of the Canary. If the new agent starts hallucinating or crashing, the Control Plane automatically rolls back the traffic to the stable version.
        </p>
        
        <CodeBlock language="yaml" code={`# Canary Deployment Manifest
apiVersion: consonant/v1
kind: Rollout
metadata:
  name: smart-analyst-rollout
spec:
  agent: smart-analyst
  strategy:
    canary:
      weight: 10 # Start with 10% traffic
      interval: 5m
      maxSurge: 1`} />

        <h3>3. Shadow Mode (Dark Launch)</h3>
        <p>
            The most powerful tool for mission-critical agents. Consonant sends the exact same <strong>Goal and Context</strong> to both the stable and the shadow agent. The shadow agent's output is discarded, but its performance and results are logged and compared for accuracy in the dashboard.
        </p>

        <Callout type="info" title="A/B Testing Agents">
            <p>
                You can use Shadow Mode to compare different models (e.g., GPT-4 vs Claude 3.5) on the same real-world production traffic without the user ever seeing a difference.
            </p>
        </Callout>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/production/ha"
            title="High Availability"
            description="Ensure 99.9% uptime for your agent fleet."
          />
        </div>
      </div>
    </div>
  )
}

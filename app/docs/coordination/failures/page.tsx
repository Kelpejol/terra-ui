"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function FailuresPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Handling Failures"
        description="Building resilience into non-deterministic systems."
        label="Coordination"
      />

      <div className="prose prose-invert max-w-none">
        
        <h2>The Reliability Gap</h2>
        <p>
            LLMs are probabilistic. They fail. Tools fail. APIs rate-limit.
            If you don't handle these failures, your workflow success rate will be near zero.
        </p>

        <h3>Retry Policies</h3>
        <p>
            You can define retry policies at the Agent level or the Workflow level.
        </p>
        
        <CodeBlock language="yaml" code={`# In your Project manifest
policies:
  - name: exponential-backoff
    spec:
       maxRetries: 3
       backoff: 
         initial: 1s
         multiplier: 2`} />

        <p>
            The Control Plane automatically wraps agent invocations. If an agent returns a 500 or a specific error code, 
            Consonant sleeps and retries based on the policy. The Agent developer doesn't need to write retry loops.
        </p>

        <h3>Circuit Breakers</h3>
        <p>
            If `agent-search` starts failing 100% of requests (e.g. Google API is down), Consonant can "trip the breaker".
            This stops flooding the failing service and can trigger a fallback path in the Plan (e.g. "Use Bing Search agent instead").
        </p>

      </div>
    </div>
  )
}

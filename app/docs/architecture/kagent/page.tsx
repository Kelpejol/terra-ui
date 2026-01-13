"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function KAgentPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="KAgent Runtime"
        description="The sidecar pattern that turns any container into a managed Agent."
        label="Architecture"
      />

      <div className="prose prose-invert max-w-none">
        <h2>What is a KAgent?</h2>
        <p>
            The KAgent (Kubernetes Agent) is the fundamental runtime unit of Consonant. 
            Technically, it is a Pod that contains two containers:
        </p>
        <ol>
            <li><strong>User Container:</strong> Your code (Python/Node/etc).</li>
            <li><strong>Consonant Sidecar:</strong> A high-performance Rust proxy.</li>
        </ol>

        <CodeBlock language="text" code={`+-----------------------------------+
| Pod: researcher-v1-abcde          |
|                                   |
|  +--------------+  +-----------+  |
|  | Your Agent   |  | Sidecar   |  |
|  | (Python)     |<->(Rust)     |<---> Network (mTLS)
|  +--------------+  +-----------+  |
|                                   |
+-----------------------------------+`} />

        <h3>Responsibilities of the Sidecar</h3>
        
        <h4>1. Lifecycle Management</h4>
        <p>
            The sidecar ensures your agent process is healthy. It handles graceful shutdowns 
            and restarts if your code hangs or crashes.
        </p>

        <h4>2. Network Identity (mTLS)</h4>
        <p>
            In a distributed system, you can't trust IP addresses. The sidecar issues and rotates 
            mTLS certificates automatically. When "Editor" calls "Writer", they mutually authenticate cryptographically.
        </p>

        <h4>3. Observability Injection</h4>
        <p>
            The sidecar automatically captures `stdout`/`stderr` and intercepts HTTP/gRPC traffic 
            entering and leaving your agent. It generates OpenTelemetry spans without you adding a single line of code.
        </p>
      </div>
    </div>
  )
}

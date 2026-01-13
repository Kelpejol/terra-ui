"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function AgentManifestPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="The Agent Manifest"
        description="Defining your agents as declarative Kubernetes resources."
        label="Agent Development"
      />

      <div className="prose prose-invert max-w-none">
        <h2>The Anatomy of an Agent</h2>
        <p>
            An Agent in Consonant is defined by a Custom Resource Definition (CRD). 
            This file tells the Control Plane how to deploy, scale, and route traffic to your agent.
        </p>

        <CodeBlock language="yaml" code={`apiVersion: consonant/v1
kind: Agent
metadata:
  name: pdf-processor
  namespace: my-project
spec:
  # 1. Implementation
  image: my-registry/pdf-agent:v2.1
  command: ["python", "-m", "agent"]
  
  # 2. Resources (The "Independent Runtime" part)
  resources:
    requests:
      cpu: "1"
      memory: "2Gi"
    limits:
      cpu: "4"
      memory: "8Gi"

  # 3. Scaling Policy
  scaling:
    minReplicas: 0    # Scale to zero when idle!
    maxReplicas: 20
    targetConcurrency: 5

  # 4. Capabilities (For the Planner)
  capabilities:
    - name: extract_text_from_pdf
      description: "Extracts raw text from a PDF document URL"
      arguments:
        url: "The URL of the PDF"
`} />

        <h3>Key Fields</h3>
        
        <h4><code>image</code></h4>
        <p>
            The Docker image containing your agent code. This is completely standard—you can use any base image (Python, Node, Go, Rust).
        </p>

        <h4><code>resources</code></h4>
        <p>
            Standard Kubernetes resource requests/limits. This is where you solve the <strong>Cost Waste</strong> disaster. 
            Give heavy agents GPUs and light agents millicores.
        </p>

        <h4><code>scaling</code></h4>
        <p>
            Consonant supports KEDA-style scaling out of the box. 
            <code>minReplicas: 0</code> allows for Serverless-style scale-to-zero to save money.
        </p>

        <h4><code>capabilities</code></h4>
        <p>
            This metadata is indexed by the Control Plane's semantic router. 
            When a user goal says "Read this contract", the planner looks for agents with "read_pdf" or "extract_text" capabilities.
        </p>

      </div>
    </div>
  )
}

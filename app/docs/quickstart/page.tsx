"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../doc-components"

export default function QuickstartPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Quickstart Guide"
        description="Go from zero to a production-grade multi-agent system in less than 5 minutes."
        label="Getting Started"
      />

      <div className="prose prose-invert max-w-none">
        
        <h2>Prerequisites</h2>
        <ul>
          <li>Docker Desktop or automatic Kubernetes cluster (Kind/Minikube)</li>
          <li>Helm 3+</li>
          <li>kubectl</li>
        </ul>

        <h2>1. Install the CLI</h2>
        <p>
          The Consonant CLI (`cons`) is your main interface for managing agents and workflows.
        </p>
        <CodeBlock language="bash" code={`# Install via Homebrew
brew install consonant-ai/tap/consonant

# Verify installation
cons version`} />

        <h2>2. Initialize the Control Plane</h2>
        <p>
          This command spins up the Consonant control plane in your current Kubernetes context. 
          It installs the Manager, the Ingress Controller, and the Observability stack.
        </p>
        <CodeBlock language="bash" code={`cons init --local`} />
        
        <Callout type="info" title="Local Mode">
          The <code>--local</code> flag optimizes resource usage for laptop development. 
          For production clusters, omit this flag.
        </Callout>

        <h2>3. Create a Project</h2>
        <p>
          Generate a new project with sample agents.
        </p>
        <CodeBlock language="bash" code={`cons create my-first-project
cd my-first-project`} />
        
        <p>This creates a directory structure with:</p>
        <ul>
            <li><code>consonant.yaml</code>: The project manifest</li>
            <li><code>agents/</code>: Directory for your agent code</li>
            <li><code>policies/</code>: OPA policies</li>
        </ul>

        <h2>4. Deploy Agents</h2>
        <p>
          Deploy the agents defined in your project to the cluster.
        </p>
        <CodeBlock language="bash" code={`cons deploy`} />
        
        <p>
            You should see pods spinning up:
        </p>
        <CodeBlock language="bash" code={`kubectl get pods -n consonant-agents`} />

        <h2>5. Run Your First Goal</h2>
        <p>
          Submit a goal to the control plane. The planner will automatically route it to the appropriate agent.
        </p>
        <CodeBlock language="bash" code={`cons run --goal "Research the history of the diode" --stream`} />

        <p>
            You'll see a real-time stream of the execution plan and the agent's output.
        </p>

        <h2>Next Steps</h2>
        <p>
            Now that you have a running system, try these next steps:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-8">
          <NextStepCard 
            href="/docs/introduction/concepts"
            title="Core Concepts"
            description="Understand Projects, Agents, and Goals."
          />
          <NextStepCard 
            href="/docs/agent-development/manifest"
            title="Create Custom Agents"
            description="Learn how to package your own code as a KAgent."
          />
        </div>
      </div>
    </div>
  )
}

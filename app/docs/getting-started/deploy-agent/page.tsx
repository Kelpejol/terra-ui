"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../../doc-components"
import { Rocket, FileCode, CheckCircle2 } from "lucide-react"

export default function DeployAgentPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Deploying Your First Agent"
        description="Transform a simple Python script into a production-grade KAgent in minutes."
        label="Getting Started"
      />

      <div className="prose prose-invert max-w-none">
        
        <h2>The Agent-Native Edge</h2>
        <p>
            In Consonant, an "Agent" is more than just a model call. It is a <strong>Managed Service</strong>. When you deploy an agent, Consonant automatically handles:
        </p>
        <ul>
            <li><strong>Health Monitoring:</strong> Restarts your agent if it hangs or loops.</li>
            <li><strong>Resource Capping:</strong> Ensures a runaway agent doesn't kill your cluster.</li>
            <li><strong>Identity:</strong> Assigns an mTLS certificate for secure communication.</li>
        </ul>

        <h2>Step 1: Write Your Logic</h2>
        <p>
            You can use any framework (LangGraph, CrewAI, AutoGen) or just raw Python. The only requirement is to wrap your agent in the Consonant library to expose its "Tools" to the Control Plane.
        </p>
        
        <CodeBlock language="python" code={`# agent.py
from consonant.agent import Agent

# Define your agent's identity
agent = Agent(name="market-analyzer")

@agent.tool
def get_stock_price(symbol: str) -> float:
    """Returns the current mock price of a stock"""
    return 150.0 # Your real logic here

if __name__ == "__main__":
    # This starts the agent execution loop inside the container
    agent.run()`} />

        <h2>Step 2: The Agent Manifest</h2>
        <p>
            This is the most important part. The manifest defines the **Production Envelope** for your agent.
        </p>

        <CodeBlock language="yaml" code={`# consonant.yaml
apiVersion: consonant/v1
kind: Agent
metadata:
  name: market-analyzer
spec:
  image: harbor.internal/agents/analyzer:v1.0.2
  resources:
    cpu: "250m"      # Hard CPU limit
    memory: "512Mi"  # Hard RAM limit
  scaling:
    minReplicas: 1
    maxReplicas: 5   # Automatic horizontal scaling`} />

        <h2>Step 3: Apply & Scale</h2>
        <p>
            Unlike a manual Docker run, <code>cons apply</code> registers your agent with the Control Plane's Service Registry, making it immediately available for any complex "Goal" workflows.
        </p>
        <CodeBlock code={`# Push your image to your registry
docker build -t harbor.internal/agents/analyzer:v1.0.2 .
docker push harbor.internal/agents/analyzer:v1.0.2

# Deploy to the cluster
cons apply -f consonant.yaml`} />

        <div className="flex items-center gap-4 p-4 rounded-lg bg-green-500/5 border border-green-500/20 my-6">
            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
            <p className="text-sm m-0"><strong>Success:</strong> Agent registered. It is now isolated and managed.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/getting-started/run-workflow"
            title="Run Your First Goal"
            description="See the Control Plane orchestrate your new agent."
          />
        </div>
      </div>
    </div>
  )
}

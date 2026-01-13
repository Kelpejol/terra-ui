"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function DeployAgentPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Deploying Your First Agent"
        description="Walkthrough: Building and deploying a simple 'Echo' agent."
        label="Getting Started"
      />

      <div className="prose prose-invert max-w-none">
        
        <h2>1. The Agent Code</h2>
        <p>
            Let's create a simple Python agent that echoes back what you say, but in reverse.
        </p>
        
        <CodeBlock language="python" code={`# agent.py
from consonant.agent import Agent

agent = Agent(name="inverter")

@agent.tool
def invert_string(text: str) -> str:
    """Reverses the input string"""
    return text[::-1]

if __name__ == "__main__":
    agent.run()`} />

        <h2>2. Values File</h2>
        <p>
            Create a `consonant.yaml` to define how it runs.
        </p>

        <CodeBlock language="yaml" code={`apiVersion: consonant/v1
kind: Agent
metadata:
  name: inverter
spec:
  image: my-repo/inverter:latest
  resources:
    cpu: "0.1"
  scaling:
    minReplicas: 1`} />

        <h2>3. Deployment</h2>
        <p>
            Use the CLI to deploy.
        </p>
        <CodeBlock code={`# Build the image (standard docker build)
docker build -t my-repo/inverter:latest .
docker push my-repo/inverter:latest

# Deploy to Consonant
cons apply -f consonant.yaml`} />

        <h2>4. Verification</h2>
        <p>
             Check if it's running.
        </p>
        <CodeBlock code={`cons get agents
NAME       STATUS    REPLICAS
inverter   Running   1/1`} />

      </div>
    </div>
  )
}

"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function RoutingPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Request Routing"
        description="How the Control Plane finds the right agent for the job."
        label="Coordination"
      />

      <div className="prose prose-invert max-w-none">
        
        <h2>Service Discovery</h2>
        <p>
            In a monolithic app, function calls are fast and local. In a distributed agent system, 
            calling another agent involves network hops.
        </p>

        <h3>Semantic Addressing</h3>
        <p>
            Consonant allows you to address agents by their <strong>Capabilities</strong>, not just their names.
        </p>
        
        <CodeBlock code={`# Instead of this:
http.post("http://agent-b:8080/do-work")

# Consonant allows this (conceptually):
planner.delegate(goal="Analyze this image", context=image_data)`} />

        <p>
            The Control Plane looks up the Capability Registry: "Who can analyze images?"
            It might find `agent-vision-v1` and `agent-gpt4-vision`. 
            Based on the policy (e.g. "Lowest Cost"), it routes the request to the appropriate agent.
        </p>

        <h3>Load Balancing</h3>
        <p>
            If `agent-vision-v1` is scaled to 5 replicas, Consonant uses standard Kubernetes Service load balancing 
            (Round Robin or IP Hash) to distribute traffic.
        </p>

      </div>
    </div>
  )
}

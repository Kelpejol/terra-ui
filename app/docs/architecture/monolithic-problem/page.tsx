"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../../doc-components"

export default function MonolithicProblemPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="The Monolithic Problem"
        description="A technical analysis of why shared containers are fundamentally unsuited for multi-agent systems."
        label="Architecture"
      />

      <div className="prose prose-invert max-w-none">
        <h2>The Single Container Fallacy</h2>
        <p>
            When teams start building agents, they often treat the "Agent System" as a single application. 
            They package `agent_a.py`, `agent_b.py`, and `orchestrator.py` into one `Dockerfile`.
        </p>
        <p>
            This works for stateless web servers. It is catastrophic for stateful, resource-intensive agents.
        </p>

        <h3>1. Shared Failure Domains</h3>
        <p>
            In a Linux container, all processes share the same userspace. If Agent A triggers a segmentation fault 
            in a shared C library (common in AI with `numpy`, `torch`, etc.), it can bring down the parent process 
            or corrupt memory for Agent B.
        </p>
        <CodeBlock language="python" code={`# If this crashes in the monolith...
def agent_a_task():
    import ctypes
    ctypes.string_at(0) # Segfault!

# ...Agent B never gets to run this
def agent_b_task():
    save_data_to_db() 
`} />

        <h3>2. Dependency Hell</h3>
        <p>
            Agent A needs `pydantic==1.10`. Agent B needs `pydantic==2.0`.
            In a monolith, you are stuck. You have to fork libraries or rewrite code just to make them coexist.
            With Independent Runtimes, Agent A and B have completely separate `requirements.txt` and Docker images.
        </p>

        <h3>3. The "Noisy Neighbor" Problem</h3>
        <p>
            LLM inference and data processing are bursty. If Agent A suddenly consumes 100% CPU to parse a PDF, 
            Agent B (which might be handling a user request) gets throttled.
            Kubernetes resource limits work at the *Pod* level, not the *Process* level (unless you get very fancy with cgroups).
            By splitting agents into Pods, you get native K8s resource isolation.
        </p>

        <Callout type="info" title="The Microservices Parallel">
            <p>
                We learned this lesson in 2014 with Microservices. We are relearning it now with Agents. 
                Agents are just stateful, autonomous microservices. They should be deployed like them.
            </p>
        </Callout>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/architecture/kagent"
            title="Solution: KAgent Runtime"
            description="How we isolate agents."
          />
        </div>
      </div>
    </div>
  )
}

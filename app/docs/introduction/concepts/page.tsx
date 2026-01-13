"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function ConceptsPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Core Concepts"
        description="The fundamental building blocks of the Consonant platform."
        label="Introduction"
      />

      <div className="prose prose-invert max-w-none">
        
        <h2>The Hierarchy</h2>
        <p>
            Consonant organizes work into a clear hierarchy to manage complexity.
        </p>
        
        <div className="my-8 p-6 bg-card/50 border border-border rounded-xl font-mono text-sm leading-8">
            <div>Project</div>
            <div className="pl-4">└── Agents (The Workers)</div>
            <div className="pl-4">└── Resources (Tools/DBs)</div>
            <div className="pl-4">└── Policies (The Rules)</div>
            <div className="pl-4">└── Goals (The Work)</div>
            <div className="pl-8">└── Plan</div>
            <div className="pl-12">└── Tasks</div>
        </div>

        <h3>1. Project</h3>
        <p>
            A namespace for a related set of agents and policies. Usually maps to a team or a specific application.
        </p>

        <h3>2. Agent</h3>
        <p>
            An autonomous unit of execution. An agent has:
        </p>
        <ul>
            <li><strong>Identity:</strong> A unique name and address.</li>
            <li><strong>Runtime:</strong> A Docker image and resource configuration.</li>
            <li><strong>Capabilities:</strong> What it can do (described in natural language for the planner).</li>
        </ul>

        <h3>3. Goal</h3>
        <p>
            A high-level objective submitted by a user or another system. Goals are what you want to achieve, not how to achieve it.
        </p>
        <p><em>Example: "Refund all users who complained about downtime in the last 24h"</em></p>

        <h3>4. Plan & Tasks</h3>
        <p>
            When a Goal is received, the Control Plane generates a <strong>Plan</strong>. A Plan consists of a DAG (Directed Acyclic Graph) of <strong>Tasks</strong>.
            Each Task is assigned to a specific Agent.
        </p>

        <Callout type="info" title="Dynamic Planning">
            <p>
                Unlike rigid workflows, Plans in Consonant are dynamic. If a Task fails, the Control Plane can modify the remaining Plan 
                to attempt recovery or try a different strategy.
            </p>
        </Callout>

      </div>
    </div>
  )
}

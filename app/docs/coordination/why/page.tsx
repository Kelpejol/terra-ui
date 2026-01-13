"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../../doc-components"
import { Share2, GitBranch, ShieldCheck } from "lucide-react"

export default function CoordinationWhyPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="The Coordination Challenge"
        description="Scaling from 3 agents to 300 requires moving from chaotic choreography to deterministic orchestration."
        label="Coordination"
      />

      <div className="prose prose-invert max-w-none">
        <h2>The Choreography Trap</h2>
        <p>
            When teams start, they build agents that talk directly to each other. Agent A calls Agent B's URL. This is <strong>Choreography</strong>. It works perfectly on a whiteboard.
        </p>
        <p>
            In production, choreography is a death sentence for reliability:
        </p>
        <ul>
            <li><strong>Circular Loops:</strong> Agent A calls B, B calls C, C calls A. The system burns CPU until it OOMs.</li>
            <li><strong>State Fragmentation:</strong> Every agent has its own "memory," but no one knows the global state of the goal.</li>
            <li><strong>Impossible Debugging:</strong> When the final output is wrong, you have to search logs across five different services to find the source.</li>
        </ul>

        <div className="my-10 p-6 rounded-xl border border-destructive/20 bg-destructive/5">
            <h4 className="font-bold text-destructive mb-2 flex items-center gap-2">
                <Share2 className="w-4 h-4" /> The "Mesh" Mess
            </h4>
            <p className="text-sm m-0">In a choreographed mesh, the number of potential failure points grows exponentially with every agent added (O(n²)).</p>
        </div>

        <h2>The Solution: Centralized Orchestration</h2>
        <p>
            Consonant treats agents like <strong>Distributed Functions</strong>. The Control Plane acts as the "Brain" that manages the call stack.
        </p>

        <div className="grid md:grid-cols-3 gap-4 not-prose my-10">
            <div className="p-4 rounded-lg border border-border bg-card/30">
                <div className="font-bold text-xs uppercase tracking-widest text-primary mb-2">Deterministic</div>
                <p className="text-xs text-muted-foreground">The Control Plane ensures Agent B only runs *after* Agent A succeeds.</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card/30">
                <div className="font-bold text-xs uppercase tracking-widest text-primary mb-2">Stateless Agents</div>
                <p className="text-xs text-muted-foreground">Agents don't need to store state; the Control Plane manages the conversation buffer.</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card/30">
                <div className="font-bold text-xs uppercase tracking-widest text-primary mb-2">Dynamic Routing</div>
                <p className="text-xs text-muted-foreground">If Agent B is slow, the Control Plane can instantly route to an idle instance.</p>
            </div>
        </div>

        <h3>State Synchronization</h3>
        <p>
            Consonant's <strong>Relayer</strong> component automatically injects the necessary context into every agent call. When the "Writer" agent wakes up, it already has the "Researcher's" findings in its input buffer—no manual database fetches required.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/coordination/routing"
            title="Request Routing"
            description="How we move data between agents with zero latency."
          />
        </div>
      </div>
    </div>
  )
}

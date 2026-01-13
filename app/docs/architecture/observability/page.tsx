"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../../doc-components"
import { Eye, Activity, Search, History } from "lucide-react"

export default function ObservabilityPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Observability Layer"
        description="Consonant turns scattered agent interactions into a coherent, debuggable narrative."
        label="Architecture"
      />

      <div className="prose prose-invert max-w-none">
        <h2>The Debugging Nightmare</h2>
        <p>
            In traditional systems, you have stack traces. In multi-agent systems, you have non-deterministic, distributed failure modes. One agent's hallucination can cascade through five other agents, leaving you with a pile of logs that make no sense.
        </p>

        <Callout type="info" title="Zero-Code Instrumentation">
            <p>
                Consonant's sidecar proxy automatically intercepts all agent traffic. You get full traces, token usage, and latency metrics without adding a single line of SDK code to your agent's source.
            </p>
        </Callout>

        <h3>Automatic Session Reconstruction</h3>
        <p>
            Consonant uses <strong>Global Trace IDs</strong> to stitch together every decision. When you open a session in the dashboard, we reconstruct the "Decision Tree" in real-time.
        </p>

        <div className="space-y-4 not-prose my-10">
            <div className="p-5 rounded-xl border border-border bg-card/30">
                <div className="flex items-center gap-3 mb-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-foreground">OTEL Spans</h4>
                </div>
                <p className="text-sm text-muted-foreground">Every HTTP/gRPC request, LLM call, and tool execution is recorded as an OpenTelemetry span. We track <strong>tokens, latency, and temperature</strong> per call.</p>
            </div>
            <div className="p-5 rounded-xl border border-border bg-card/30">
                <div className="flex items-center gap-3 mb-3">
                    <Search className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-foreground">Distributed Context</h4>
                </div>
                <p className="text-sm text-muted-foreground">Trace IDs are propagated across the network. If the "Writer Agent" fails, you can see the exact "Researcher Agent" output that caused the failure.</p>
            </div>
        </div>

        <h3>The Linear Narrative View</h3>
        <p>
            Our dashboard transforms thousands of raw spans into a readable timeline. You can "scrub" through the time-to-first-token and see exactly when each agent joined the conversation.
        </p>
        
        <div className="bg-secondary/20 p-6 rounded-xl border border-border font-mono text-xs mb-8">
            <div className="text-muted-foreground border-b border-border/50 pb-2 mb-3">SESSION: d8f2-44a1-8e9c</div>
            <div className="flex gap-4">
                <span className="text-muted-foreground w-12 shrink-0">00:01s</span>
                <span className="text-primary font-bold">PLANNER</span>
                <span className="text-foreground">Created Task: Search SEC Filings</span>
            </div>
            <div className="flex gap-4">
                <span className="text-muted-foreground w-12 shrink-0">00:04s</span>
                <span className="text-blue-400 font-bold">AGENT:searcher</span>
                <span className="text-foreground">Calling Tool: GoogleSearch(query="AAPL 10-K")</span>
            </div>
            <div className="flex gap-4">
                <span className="text-muted-foreground w-12 shrink-0">00:12s</span>
                <span className="text-amber-400 font-bold">AGENT:analyst</span>
                <span className="text-foreground">Evaluating risk factors... <span className="text-muted-foreground">(2,402 tokens)</span></span>
            </div>
            <div className="flex gap-4 mt-2 pt-2 border-t border-border/50">
                <span className="text-muted-foreground w-12 shrink-0">00:15s</span>
                <span className="text-destructive font-bold">ERROR</span>
                <span className="text-destructive">Hallucination Detected: Invalid date format in 10-K</span>
            </div>
        </div>

        <h3>Impact Measurement</h3>
        <p>
            Beyond debugging, Consonant measures the **Cost of Intelligence**. You can see exactly how much each business process (e.g., "Customer Onboarding") costs in LLM spend, API calls, and compute seconds.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/getting-started/installation"
            title="Get Started"
            description="Install the Control Plane and see the dashboard in action."
          />
        </div>
      </div>
    </div>
  )
}

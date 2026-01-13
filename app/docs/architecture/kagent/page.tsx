"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../../doc-components"
import { Shield, Activity, Cpu, Box, AlertTriangle } from "lucide-react"

export default function KAgentPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="KAgent Runtime"
        description="Stop one crashed agent from killing your entire system. KAgent isolates each agent in its own pod with enforced resource limits and network boundaries."
        label="Architecture"
      />

      <div className="prose prose-invert max-w-none">
        
        {/* PROBLEM SECTION */}
        <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5 my-8 not-prose">
          <div className="flex items-start gap-3 mb-3">
            <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
            <div>
              <h3 className="font-bold text-foreground text-lg m-0">The 2 AM Disaster</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-0">
                Your fraud detection agent leaked memory. After 6 hours, it consumed all 16GB RAM. 
                Kubernetes killed the pod. Your refund agent, inventory agent, and order agent crashed too.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-red-500/20">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-red-500">100%</div>
                <div className="text-xs text-muted-foreground">Blast radius</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-500">45 min</div>
                <div className="text-xs text-muted-foreground">Downtime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-500">$18K</div>
                <div className="text-xs text-muted-foreground">Revenue lost</div>
              </div>
            </div>
          </div>
        </div>

        <h2>What is KAgent?</h2>
        
        <p>
          The KAgent (Kubernetes Agent) is Consonant's answer to the monolithic blast radius. It helps deploy agent as k8s CRDs treating agent as native K8s primitives
          </p>

        {/* BEFORE/AFTER COMPARISON */}
        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="p-6 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="text-sm font-mono text-red-500 mb-2">WITHOUT KAGENT</div>
            <div className="text-sm text-muted-foreground space-y-2">
              <div>One pod = All 5 agents</div>
              <div>Fraud agent crashes → Pod dies</div>
              <div className="pt-2 border-t border-red-500/20">
                <div className="font-semibold text-foreground">Result: ALL agents offline</div>
                <div className="text-red-500">Blast radius: 100%</div>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
            <div className="text-sm font-mono text-primary mb-2">WITH KAGENT</div>
            <div className="text-sm text-muted-foreground space-y-2">
              <div>5 pods = 5 agents (1 per pod)</div>
              <div>Fraud agent crashes → Only its pod dies</div>
              <div className="pt-2 border-t border-primary/20">
                <div className="font-semibold text-foreground">Result: Other 4 agents unaffected</div>
                <div className="text-primary">Blast radius: 20%</div>
              </div>
            </div>
          </div>
        </div>

        <h3>How It Works: Two Components Per Agent</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="p-6 rounded-xl border border-border bg-card/30">
            <div className="w-10 h-10 rounded bg-secondary border border-border flex items-center justify-center mb-4">
              <Box className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-3">1. The Agent Container</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Your existing agent code runs unmodified. Python + LangGraph? Works. 
              Node + custom framework? Works. Zero refactoring.
            </p>
            <div className="text-sm text-muted-foreground">
              <div className="font-semibold text-foreground mb-2">Resource limits enforced:</div>
              <div className="font-mono text-xs">memory: &quot;2Gi&quot; → Max 2GB RAM</div>
              <div className="font-mono text-xs">cpu: &quot;1&quot; → Max 1 CPU core</div>
              <div className="mt-2 text-xs">
                If this agent exceeds limits, only THIS agent restarts.
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
            <div className="w-10 h-10 rounded bg-primary flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <h4 className="font-bold text-foreground mb-3">2. The Consonant Sidecar</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Automatic security and observability. Zero SDK code required.
            </p>
            <div className="text-sm space-y-2">
              <div className="flex items-start gap-2">
                <div className="text-primary mt-0.5">•</div>
                <div className="text-muted-foreground">mTLS authentication (agents can&apos;t talk directly)</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-primary mt-0.5">•</div>
                <div className="text-muted-foreground">Memory-safe networking (Rust, not Node)</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="text-primary mt-0.5">•</div>
                <div className="text-muted-foreground">Automatic trace capture (every request logged)</div>
              </div>
            </div>
          </div>
        </div>

        <h3>The Pod Architecture</h3>
        
        <Callout type="info">
          <strong>Why the sidecar?</strong> Traditional approach: Agents talk directly. 
          Problem: Compromised agent can scan your network. KAgent approach: All communication 
          through sidecar. Result: Zero-trust networking.
        </Callout>

        <CodeBlock 
          language="text" 
          code={`+-------------------------------------------+
| Pod: payment-processor-v2-abcde           |
|                                           |
|  +-------------------+   +-------------+  |
|  | Your Agent Logic  |   | Consonant   |  |
|  | (LangGraph/Py)    |<->| Sidecar     |<---> TLS Networking
|  | [Isolated Mem/CPU]|   | (Memory-Safe|  |    (mTLS)
|  +-------------------+   +-------------+  |
|                                           |
+-------------------------------------------+`} 
        />

        <h2>The Three Direct Benefits</h2>
        
        <div className="space-y-8 my-8">
          {/* BENEFIT 1 */}
          <div className="p-6 rounded-xl border border-border bg-card/30">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" />
              1. Resource Guardrails: Prevent Cascading Failures
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4 not-prose">
              <div className="text-sm">
                <div className="font-semibold text-red-500 mb-2">❌ Without KAgent:</div>
                <ul className="text-muted-foreground space-y-1 text-xs">
                  <li>• Linux OOM killer activates</li>
                  <li>• Kubernetes terminates ENTIRE pod</li>
                  <li>• All 5 agents crash together</li>
                  <li>• Blast radius: 100%</li>
                </ul>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-primary mb-2">✅ With KAgent:</div>
                <ul className="text-muted-foreground space-y-1 text-xs">
                  <li>• Kubernetes terminates ONLY fraud agent pod</li>
                  <li>• Other 4 agents keep running</li>
                  <li>• Blast radius: 20%</li>
                  <li>• Recovery: 30 seconds (not 5 minutes)</li>
                </ul>
              </div>
            </div>

            <CodeBlock language="yaml" code={`spec:
  resources:
    memory: "2Gi"  # This agent gets 2GB max
    cpu: "1"       # 1 CPU core dedicated
    
# Kubernetes enforces this.
# One agent can't starve others.`} />
          </div>

          {/* BENEFIT 2 */}
          <div className="p-6 rounded-xl border border-border bg-card/30">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              2. Zero-Trust Networking: Contain Compromised Agents
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4 not-prose">
              <div className="text-sm">
                <div className="font-semibold text-red-500 mb-2">❌ Without KAgent:</div>
                <ul className="text-muted-foreground space-y-1 text-xs">
                  <li>• Attacker scans internal network</li>
                  <li>• Finds database at 10.0.1.5:5432</li>
                  <li>• Exfiltrates customer data</li>
                  <li>• Incident: Critical</li>
                </ul>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-primary mb-2">✅ With KAgent:</div>
                <ul className="text-muted-foreground space-y-1 text-xs">
                  <li>• Agent tries to connect to 10.0.1.5</li>
                  <li>• Sidecar blocks: &quot;No certificate&quot;</li>
                  <li>• Can only talk to allowed services</li>
                  <li>• Blast radius contained</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              The sidecar manages short-lived certificates (rotated every 15 minutes). 
              Agents must authenticate for EVERY connection. Compromised agent can&apos;t move laterally.
            </p>
          </div>

          {/* BENEFIT 3 */}
          <div className="p-6 rounded-xl border border-border bg-card/30">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              3. Built-in Observability: Debug in Minutes, Not Hours
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4 not-prose">
              <div className="text-sm">
                <div className="font-semibold text-red-500 mb-2">❌ Without KAgent:</div>
                <ul className="text-muted-foreground space-y-1 text-xs">
                  <li>• SSH into 5 different pods</li>
                  <li>• Grep through logs</li>
                  <li>• Correlate timestamps manually</li>
                  <li>• Time to root cause: 2 hours</li>
                </ul>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-primary mb-2">✅ With KAgent:</div>
                <ul className="text-muted-foreground space-y-1 text-xs">
                  <li>• Search for workflow ID</li>
                  <li>• See complete trace instantly</li>
                  <li>• Identify failure point</li>
                  <li>• Time to root cause: 3 minutes</li>
                </ul>
              </div>
            </div>

            <CodeBlock language="text" code={`Complete trace for workflow wf_abc123:
├─ fraud-agent: SUCCESS (0.8s)
├─ refund-agent: FAILED (1.2s)
│  └─ Payment API: 504 Timeout
└─ retry: SUCCESS (0.9s)

Root cause: Payment gateway timeout
No SDK. No instrumentation code.
Just complete visibility.`} />
          </div>
        </div>

        <Callout type="success">
          <strong>The Result:</strong> Deploy agents confidently. Each agent is isolated, 
          secure, and observable by default. One failure doesn&apos;t cascade to others.
        </Callout>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/architecture/control-plane"
            title="Next: The Control Plane"
            description="How KAgents are orchestrated and governed"
          />
        </div>
      </div>
    </div>
  )
}
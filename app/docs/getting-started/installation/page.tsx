"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../../doc-components"
import { Terminal, Lightbulb, CheckCircle2 } from "lucide-react"

export default function InstallationPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Installation"
        description="Get the world's first agent-native runtime running in under 2 minutes."
        label="Getting Started"
      />

      <div className="prose prose-invert max-w-none">
        
        <Callout type="info" title="Why Consonant?">
            <p>
                Unlike local Python scripts, Consonant gives your agents a production-grade home. You get auto-scaling, distributed tracing, and hard resource isolation from the very first command.
            </p>
        </Callout>

        <h2>Step 1: Install the CLI</h2>
        <p>The `cons` CLI is your gateway to the agent cluster. It handles everything from deployment to log tailing and policy management.</p>
        
        <CodeBlock code="curl -sL https://get.consonant.ai/install | bash" />

        <h2>Step 2: Initialize Your Cluster</h2>
        
        <p>
            Consonant runs wherever Kubernetes runs. For your first time, we recommend a local developer setup (Kind, Minikube, or Docker Desktop).
        </p>

        <div className="bg-secondary/20 rounded-xl p-6 my-8 border border-border">
            <h4 className="font-bold flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-primary" /> Local Quickstart
            </h4>
            <CodeBlock code="cons init --local" />
            <p className="text-xs text-muted-foreground mt-4">This single command installs the Manager, Planner, and Observability stack into the <code>consonant-system</code> namespace.</p>
        </div>

        <h3>Production Installation</h3>
        <p>
            For EKS, GKE, or AKS clusters, use our official Helm chart for fine-grained control over resource limits and ingress.
        </p>
        <CodeBlock language="bash" code={`helm repo add consonant https://charts.consonant.ai
helm repo update
helm install consonant consonant/control-plane \\
  --namespace consonant-system \\
  --create-namespace`} />

        <h2>Step 3: Verify & Access</h2>
        <p>Ensure your control plane is healthy before deploying your first agent.</p>
        <CodeBlock code="cons status" />

        <div className="flex items-center gap-4 p-4 rounded-lg bg-green-500/5 border border-green-500/20 my-6">
            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
            <p className="text-sm m-0"><strong>Success:</strong> Your local cluster is ready. Consonant is now watching for agent manifests.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/getting-started/deploy-agent"
            title="Deploy Your First Agent"
            description="Turn a simple Python script into a managed KAgent."
          />
        </div>
      </div>
    </div>
  )
}

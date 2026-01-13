"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function InstallationPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Installation"
        description="Get Consonant running on your local machine or production cluster."
        label="Getting Started"
      />

      <div className="prose prose-invert max-w-none">
        
        <h2>System Requirements</h2>
        <ul>
            <li><strong>Kubernetes Cluster:</strong> Version 1.25+</li>
            <li><strong>Helm:</strong> Version 3+</li>
            <li><strong>Resources:</strong> Minimum 4GB RAM, 2 CPUs (for local dev)</li>
        </ul>

        <h2>1. Install the CLI</h2>
        <p>The CLI is your primary tool for interacting with Consonant.</p>
        
        <h3>macOS / Linux (scale)</h3>
        <CodeBlock code="curl -sL https://get.consonant.ai/install | bash" />

        <h3>Manual Binary Install</h3>
        <p>Download the latest release from our GitHub releases page and add it to your PATH.</p>

        <h2>2. Install the Control Plane</h2>
        
        <h3>Local Development (Kind/Minikube/Docker Desktop)</h3>
        <p>
            For local development, use the `--local` flag. This configures the control plane to use 
            lighter resource requests and exposes the API via NodePorts/LoadBalancer for localhost access.
        </p>
        <CodeBlock code="cons init --local" />

        <h3>Production (EKS / GKE / AKS)</h3>
        <p>
            For production, we recommend using Helm directly for more control over values.
        </p>
        <CodeBlock code={`helm repo add consonant https://charts.consonant.ai
helm repo update
helm install consonant consonant/control-plane --namespace consonant-system --create-namespace`} />

        <Callout type="warning" title="Production Security">
            <p>
                In production, ensure you configure TLS and proper ingress classes. 
                See the <a href="/docs/production/security">Security Guide</a> for details.
            </p>
        </Callout>

        <h2>3. Verify Installation</h2>
        <CodeBlock code="cons status" />
        <p>You should see all components (Manager, Ingress, Observability) in <code>Running</code> state.</p>

      </div>
    </div>
  )
}

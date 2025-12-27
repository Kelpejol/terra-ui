export function CodeDemo() {
  const manifestCode = `# terra-manifest.yml
version: 1
tool:
  id: refund_issuer
  inputs:
    - charge_id: string
    - amount: number
  outputs:
    - refund_id: string
  retries:
    max_attempts: 3
    backoff: exponential`

  const runCode = `# terra-run.yml
goal: "Investigate double charge and refund"
policies:
  approvals:
    refund_over_50: required
  rate_limits:
    refund_issuer: 10/minute`

  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Configuration as Code</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Define tools and workflows in simple, declarative YAML. No complex SDKs required.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="h-10 bg-secondary/50 border-b border-border flex items-center px-4">
                <span className="text-xs text-muted-foreground font-mono">terra-manifest.yml</span>
              </div>
              <pre className="p-6 text-sm font-mono text-foreground overflow-x-auto">
                <code>{manifestCode}</code>
              </pre>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <span className="text-primary font-medium">Tool Manifest</span> — Define inputs, outputs, and operational
              constraints for any tool.
            </p>
          </div>

          <div>
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="h-10 bg-secondary/50 border-b border-border flex items-center px-4">
                <span className="text-xs text-muted-foreground font-mono">terra-run.yml</span>
              </div>
              <pre className="p-6 text-sm font-mono text-foreground overflow-x-auto">
                <code>{runCode}</code>
              </pre>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <span className="text-primary font-medium">Run Configuration</span> — Specify goals, policies, and
              approval gates declaratively.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

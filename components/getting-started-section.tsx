"use client"

import { useState } from "react"
import { Terminal, Copy, Check, Play, Download, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function GettingStartedSection() {
  const [copied, setCopied] = useState<number | null>(null)
  
  const steps = [
    {
      title: "1. Install Consonant",
      description: "Install the CLI and control plane in one command.",
      code: `# Install CLI
curl -sL https://get.consonant.dev | bash

# Initialize Control Plane (in your K8s cluster)
consonant install control-plane --namespace consonant-system`,
    },
    {
      title: "2. Define Your Agent",
      description: "Create a manifest with resource limits and capabilities.",
      code: `# agent.yaml
apiVersion: consonant.dev/v1
kind: Agent
metadata:
  name: researcher
spec:
  image: agents/researcher:latest
  resources:
    cpu: "2"
    memory: "4Gi"
  scaling:
    minReplicas: 1
    maxReplicas: 10`,
    },
    {
      title: "3. Run & Orchestrate",
      description: "Deploy and let the control plane manage the lifecycle.",
      code: `# Deploy the agent
consonant apply -f agent.yaml

# Run a task
consonant run "Research competitors for 'AI Orchestration'"`,
    },
  ]

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopied(index)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6">
            <Terminal className="w-3.5 h-3.5" />
            DEVELOPER FIRST
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Start Building in Minutes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Consonant is a single binary that works with your existing Kubernetes cluster.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Steps Column */}
            <div className="space-y-8">
                {steps.map((step, index) => (
                    <div key={index} className="group flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                {index + 1}
                            </div>
                            {index !== steps.length - 1 && (
                                <div className="w-px h-full bg-border my-2 group-hover:bg-primary/50 transition-colors" />
                            )}
                        </div>
                        <div className="pb-8">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                            <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                            
                            {/* Mobile Code Block (visible only on small screens if needed, but we keep the main one on the right) */}
                            <div className="lg:hidden bg-muted/50 rounded-lg border border-border p-4 font-mono text-xs overflow-x-auto">
                                <pre>{step.code}</pre>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base">
                        <Download className="mr-2 w-4 h-4" />
                        Download CLI
                    </Button>
                    <Link href="/docs/quickstart">
                        <Button variant="outline" size="lg" className="h-12 text-base w-full sm:w-auto">
                            Read the Docs
                            <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Code Visualization Column */}
            <div className="hidden lg:block sticky top-24">
                <div className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden relative">
                    <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="text-xs font-mono text-muted-foreground">terminal</div>
                    </div>
                    
                    <div className="p-0">
                         {steps.map((step, index) => (
                            <div key={index} className="border-b border-border/50 last:border-0">
                                <div className="bg-muted/10 px-4 py-2 flex justify-between items-center group">
                                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Step {index + 1}</span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-6 w-6 text-muted-foreground hover:text-foreground"
                                        onClick={() => copyToClipboard(step.code, index)}
                                    >
                                        {copied === index ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                    </Button>
                                </div>
                                <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed text-foreground/90">
                                    <code>{step.code}</code>
                                </pre>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

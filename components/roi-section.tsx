"use client"

import { TrendingUp, Clock, ShieldCheck, ArrowUpRight } from "lucide-react"

export function ROISection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                The Impact of Agent Isolation
            </h2>
             <p className="text-muted-foreground max-w-2xl mx-auto text-lg/relaxed">
                Whether you're writing the code or managing the cluster, Consonant changes the math of production AI.
            </p>
        </div>

        {/* Engineer ROI */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8 text-primary font-mono text-sm tracking-widest uppercase font-bold">
            <span className="w-8 h-[1px] bg-primary" /> Engineer ROI
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors">
                  <div className="font-bold text-foreground mb-2">Debug independently</div>
                  <p className="text-sm text-muted-foreground">Trace one agent's tool calls without 100k lines of unrelated logs.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors">
                  <div className="font-bold text-foreground mb-2">Restart one, not all</div>
                  <p className="text-sm text-muted-foreground">Fix a bug in the "Auditor" agent without killing "The Planner".</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors">
                  <div className="font-bold text-foreground mb-2">Scale only what's slow</div>
                  <p className="text-sm text-muted-foreground">Add 50 nodes to Retrieval while keeping your Controller tiny.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-colors">
                  <div className="font-bold text-foreground mb-2">Faster Iteration</div>
                  <p className="text-sm text-muted-foreground">Script-to-Prod in minutes. No deployment fear.</p>
              </div>
          </div>
        </div>

        {/* Platform ROI */}
        <div>
          <div className="flex items-center gap-2 mb-8 text-muted-foreground font-mono text-sm tracking-widest uppercase font-bold">
            <span className="w-8 h-[1px] bg-border" /> Platform ROI
          </div>
          <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card/30 opacity-75 hover:opacity-100 transition-opacity">
                  <TrendingUp className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                  <div>
                      <div className="font-bold text-foreground">Infrastructure Savings</div>
                      <p className="text-sm text-muted-foreground">Save up to 40% on compute by right-sizing agent pods and avoiding monolithic over-provisioning.</p>
                  </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card/30 opacity-75 hover:opacity-100 transition-opacity">
                  <ShieldCheck className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
                  <div>
                      <div className="font-bold text-foreground">Compliance & Governance</div>
                      <p className="text-sm text-muted-foreground">Out-of-band OPA enforcement ensures all agent actions are logged and stay within SOC2/HIPAA guardrails.</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

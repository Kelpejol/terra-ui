"use client"

import { AlertTriangle, Code2, Database, Gauge, Lock, Zap, Package, Cpu } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Blast Radius Disaster",
      metric: "100%",
      metricLabel: "OUTAGE",
      headline: "One agent crashes, everything dies.",
      description: "Your researcher agent has a memory leak. After 2 hours, it crashes. Because all agents share a container, the entire container restarts. Your writer, reviewer, and editor agents—completely healthy—all go down.",
      impact: "Customer workflows interrupted. SLA violations. Angry on-call engineers at 3 AM."
    },
    {
      icon: Database,
      title: "Cost Waste Disaster",
      metric: "40%",
      metricLabel: "WASTED",
      headline: "Over-provisioning burns money.",
      description: "Your researcher needs 2 CPUs. Your editor needs 0.1 CPUs. But they share a container, so you provision 4 CPUs for everything. At scale (10 replicas), that's 20 CPUs wasted.",
      impact: "You're burning 40% of your compute budget on idle resources."
    },
    {
      icon: Code2,
      title: "Deployment Risk Disaster",
      metric: "HIGH",
      metricLabel: "RISK",
      headline: "Every deploy is a full redeploy.",
      description: "You fixed a typo in your writer agent (10 lines). To deploy: Rebuild entire container. Redeploy everything. All agents restart and lose in-flight work. If the writer has a bug, the researcher goes down too.",
      impact: "A 10-line change has a 100% blast radius. You can't deploy confidently."
    },
    {
      icon: Gauge,
      title: "Scaling Hell Disaster",
      metric: "90%",
      metricLabel: "IDLE",
      headline: "You scale everything or nothing.",
      description: "Your researcher gets 500 requests/hour. Your editor gets 50. But scaling means 5x both. You're running 4 editor replicas that sit idle while you pay for them.",
      impact: "90% of your scaled replicas are burning resources for no reason."
    },
    {
      icon: Package,
      title: "Dependency Hell Disaster",
      metric: "CONFLICT",
      metricLabel: "HELL",
      headline: "Python versions at war.",
      description: "Agent A needs `numpy==1.22`. Agent B needs `numpy==1.26`. You can't run them in the same container. You're forced to downgrade one or create complex virtual environments that break in production.",
      impact: "You can't use the best tools for each job because of library conflicts."
    },
    {
      icon: Cpu,
      title: "Noisy Neighbor Disaster",
      metric: "STARVED",
      metricLabel: "LATENCY",
      headline: "One agent hogs the CPU.",
      description: "Your heavy 'Reasoning Agent' spikes to 100% CPU. The OS scheduler starves your low-latency 'Router Agent'. API requests time out because the router can't get CPU cycles.",
      impact: "Unrelated agents fail because one neighbor is greedy."
    },
    {
      icon: Lock,
      title: "Framework Prison Disaster",
      metric: "LOCK-IN",
      metricLabel: "FOREVER",
      headline: "Locked to one framework forever.",
      description: "Started with LangGraph? Now you can't use a new CrewAI agent or a vendor's AutoGen agent because they don't fit in your monolith. Your architectural choice locks you in.",
      impact: "You can't adopt better tools as the ecosystem evolves."
    }
  ]

  return (
    <section className="py-24 px-6 relative bg-background/50">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-destructive/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-destructive/30 bg-destructive/5 text-destructive text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            THE REALITY OF PRODUCTION
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Seven Production Disasters
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg/relaxed">
            If you bundle your agents into a single container, you are building a system guaranteed to fail.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full p-6 rounded-xl border border-border/50 bg-card hover:border-destructive/50 transition-all duration-300 hover:shadow-lg hover:shadow-destructive/5"
            >
              {/* Icon and Metric */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xl font-bold text-destructive tabular-nums">{problem.metric}</span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{problem.metricLabel}</span>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-destructive transition-colors">
                {problem.title}
              </h3>
              <p className="font-medium text-foreground mb-3">
                {problem.headline}
              </p>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {problem.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-border/50">
                <p className="text-xs font-medium text-destructive flex gap-2">
                  <span className="shrink-0">⚠️</span>
                  {problem.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Statement */}
        <div className="mt-16 text-center animate-fade-in-up delay-300">
          <p className="text-xl md:text-2xl font-medium text-foreground">
            If you have 3+ agents in production, you've hit at least five of these.
            <br />
            <span className="text-primary font-bold mt-2 inline-block">Consonant solves all seven.</span>
          </p>
        </div>
      </div>
    </section>
  )
}


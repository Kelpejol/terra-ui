"use client"

import { AlertTriangle, Code2, Database, Gauge, Lock, Zap, Package, Cpu, ArrowRight, Check } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Agent blast radius",
      scenario: "One agent crashes → All 5 agents restart.",
      damageLines: [
        "18 days downtime/year",
        "100% system outage",
        "$2.75M revenue lost"
      ],
      solutionLines: [
        "20% degradation",
        "0 day downtime",
        "$2.75M saved"
      ]
    },
    {
      icon: Database,
      title: "Shared memory death",
      scenario: "One greedy agent eats 100% RAM, starving the router process.",
      damageLines: [
        "40% compute wasted",
        "$20k/year overspend",
        "Idle resources billing"
      ],
      solutionLines: [
        "Right-sized pods",
        "Auto-scaling 0-100",
        "Pay for usage only"
      ]
    },
    {
      icon: Code2,
      title: "Coupled deployments",
      scenario: "Typos in one agent break the entire monolith.",
      damageLines: [
        "Fear of Friday deploys",
        "208 hours frozen/yr",
        "Rollbacks take hours"
      ],
      solutionLines: [
        "Isolated rollouts",
        "Canary deployments",
        "2 min recovery"
      ]
    },
    {
      icon: Zap,
      title: "Unbounded retries",
      scenario: "Retry loops in one agent amplify failures across the cluster.",
      damageLines: [
        "9x resource bloat",
        "Saturated DB connections",
        "Capped throughput"
      ],
      solutionLines: [
        "Policy-based retries",
        "Circuit breaking",
        "Uncapped growth"
      ]
    },
    {
      icon: Package,
      title: "Dependency Prison",
      scenario: "Python version conflicts & locked into one framework forever.",
      damageLines: [
        "Can't use best tools",
        "Venv nightmares",
        "Rewrite to switch tools"
      ],
      solutionLines: [
        "Any language/lib",
        "Mix LangGraph/CrewAI",
        "Container isolation"
      ]
    },
    {
      icon: Cpu,
      title: "Resource Monopoly",
      scenario: "Scaling your email agent? You must scale your light heavy researcher too.",
      damageLines: [
        "Unpredictable latency",
        "Random timeouts",
        "Hard to debug"
      ],
      solutionLines: [
        "Strict CPU limits",
        "Guaranteed QoS",
        "Predictable perf"
      ]
    }
  ]

  return (
    <section className="py-24 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Production Disasters
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg/relaxed">
            Multi-agent systems inevitably hit these walls when running in a single process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col h-full rounded-xl border border-border bg-card overflow-hidden hover:border-destructive/50 transition-colors"
            >
              {/* Header */}
              <div className="p-6 border-b border-border/50">
                <div className="flex items-center gap-3 mb-4">
                    <problem.icon className="w-5 h-5 text-destructive" />
                    <h3 className="font-bold text-sm tracking-wider text-destructive uppercase">
                        {problem.title}
                    </h3>
                </div>
                <p className="font-medium text-lg leading-snug mb-3">
                    {problem.scenario}
                </p>
                <div className="text-[10px] text-muted-foreground italic">
                    Common in LangGraph / CrewAI / custom agent stacks
                </div>
              </div>

              {/* Damage Block */}
              <div className="p-6 bg-destructive/5 border-b border-border/50">
                <div className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wider">
                    📊 The Damage
                </div>
                <ul className="space-y-2">
                    {problem.damageLines.map((line, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
                            {line}
                        </li>
                    ))}
                </ul>
              </div>

              {/* Solution Block */}
              <div className="p-6 bg-primary/5 mt-auto">
                <div className="text-xs font-bold text-primary mb-3 uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-3 h-3" />
                    Consonant Solution
                </div>
                <ul className="space-y-2">
                    {problem.solutionLines.map((line, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground font-medium">
                            <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                            {line}
                        </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

         <div className="mt-16 text-center animate-fade-in-up delay-300">
          <p className="text-xl md:text-2xl font-medium text-foreground">
            If you have 3+ agents in production, you've hit at least five of these.
            <br />
            <span className="text-primary font-bold mt-2 inline-block">Consonant solves all.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

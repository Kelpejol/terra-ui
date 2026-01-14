"use client"

import { Server, ShieldAlert, Rocket } from "lucide-react"

export function PersonasSection() {
  const personas = [
    {
      icon: Rocket,
      title: "AI Engineers",
      needs: [
        "Building multi-agent systems with LangGraph, CrewAI, or custom frameworks.",
        "Hitting scaling, latency, or reliability bottlenecks.",
        "Tired of managing shared failure domains."
      ],
      quote: "Build reliable agents, not fragile scripts."
    },
    {
      icon: Server,
      title: "Startup ML Teams",
      needs: [
        "You’ve outgrown notebooks and local demos.",
        "Fragmented codebases are slowing your iteration speed.",
        "Need a production-grade infrastructure layer today."
      ],
      quote: "Scale beyond the POC phase in minutes."
    },
    {
      icon: ShieldAlert,
      title: "Platform / Infra Teams",
      needs: [
        "You need governance, safety, and isolation at scale.",
        "Require SOC2-ready audit trails for every agent action.",
        "Need to manage multi-tenant agent fleets."
      ],
      quote: "Provide a safe, isolated runtime for your AI teams."
    }
  ]

  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Who This Is For
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {personas.map((p, i) => (
                <div key={i} className="bg-card border border-border p-8 rounded-2xl flex flex-col hover:border-primary/50 transition-colors">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                        <p.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                    <ul className="space-y-3 mb-8 flex-1">
                        {p.needs.map((need, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="bg-primary/20 w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" />
                                {need}
                            </li>
                        ))}
                    </ul>
                    <div className="pt-6 border-t border-border/50">
                        <p className="font-medium italic text-foreground">"{p.quote}"</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

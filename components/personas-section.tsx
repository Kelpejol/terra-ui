import { Users, Code2, Building2 } from "lucide-react"

export function PersonasSection() {
  const personas = [
    {
      icon: Users,
      title: "Operators",
      description: "Monitor, approve, and intervene in real-time.",
      features: ["Approval workflows", "Pause/resume controls", "Deterministic replay"],
    },
    {
      icon: Code2,
      title: "Engineers",
      description: "Define manifests, policies, and fallbacks.",
      features: ["YAML-based configuration", "Policy-as-code", "Retry & fallback chains"],
    },
    {
      icon: Building2,
      title: "Teams",
      description: "Compose workflows and maintain governance.",
      features: ["Cross-team composability", "Audit trail export", "Compliance controls"],
    },
  ]

  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built for Every Role</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you operate, build, or govern — Consonant has you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className="p-8 rounded-2xl border border-border bg-card">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <persona.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{persona.title}</h3>
              <p className="text-muted-foreground mb-6">{persona.description}</p>
              <ul className="space-y-3">
                {persona.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

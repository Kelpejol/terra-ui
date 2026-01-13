"use client"

import { Check, X, Minus } from "lucide-react"

export function ComparisonSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Compare Approaches
          </h2>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b border-border">
                        <th className="py-4 px-6 text-left font-medium text-muted-foreground">Feature</th>
                        <th className="py-4 px-6 text-left font-medium text-muted-foreground">Monolithic</th>
                        <th className="py-4 px-6 text-left font-medium text-muted-foreground">DIY K8s</th>
                        <th className="py-4 px-6 text-left font-bold text-primary bg-primary/5 rounded-t-lg">Consonant</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                    <tr>
                        <td className="py-4 px-6 font-medium">Blast Radius</td>
                        <td className="py-4 px-6 text-red-400">100% (All crash)</td>
                        <td className="py-4 px-6">Manual setup</td>
                        <td className="py-4 px-6 bg-primary/5 font-bold text-green-500">&lt;20% (Isolated)</td>
                    </tr>
                    <tr>
                        <td className="py-4 px-6 font-medium">Deploy Time</td>
                        <td className="py-4 px-6 text-red-400">Hours</td>
                        <td className="py-4 px-6">30 min</td>
                        <td className="py-4 px-6 bg-primary/5 font-bold text-green-500">1 min</td>
                    </tr>
                    <tr>
                         <td className="py-4 px-6 font-medium">Governance</td>
                        <td className="py-4 px-6 text-muted-foreground">None</td>
                        <td className="py-4 px-6">Custom build</td>
                        <td className="py-4 px-6 bg-primary/5 font-bold text-primary">Built-in (OPA)</td>
                    </tr>
                    <tr>
                         <td className="py-4 px-6 font-medium">Observability</td>
                        <td className="py-4 px-6 text-muted-foreground">Logs only</td>
                        <td className="py-4 px-6">Custom</td>
                        <td className="py-4 px-6 bg-primary/5 font-bold text-primary">Complete Traces</td>
                    </tr>
                     <tr>
                         <td className="py-4 px-6 font-medium">Time to Prod</td>
                        <td className="py-4 px-6">Months</td>
                        <td className="py-4 px-6">Months</td>
                        <td className="py-4 px-6 bg-primary/5 font-bold text-green-500">One day</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </section>
  )
}

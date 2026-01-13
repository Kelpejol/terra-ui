"use client"

import { useState } from "react"
import { BookOpen, Zap, Database, Shield, LineChart, ChevronRight, Check, Cpu, LayoutGrid, Search } from "lucide-react"

export function SolutionSection() {
  const [activeTab, setActiveTab] = useState(0)
  
  const solutions = [
    {
      icon: LayoutGrid,
      title: "Independent Agent Runtime",
      shortDesc: "Solves Blast Radius + Cost + Scale",
      description: "Each agent runs in its own Kubernetes pod with exactly the resources it needs. When one crashes, others keep running. When you update one, others stay live. When demand spikes for one, only that agent scales.",
      features: [
        "40% cost reduction (right-sized resources)",
        "75% deployment risk reduction (isolated updates)",
        "90% scaling efficiency gain",
        "99.9% uptime (failures don't cascade)",
      ],
      code: `# Each agent is independent - No global restart
apiVersion: consonant/v1
kind: Agent
metadata:
  name: researcher
spec:
  image: my-researcher:v1
  resources:
    cpu: "2"    # Heavy compute
    memory: "4Gi"
  replicas:
    min: 2
    max: 10     # Scales independently`,
    },
    {
      icon: Cpu,
      title: "Automatic Coordination",
      shortDesc: "How agents work together",
      description: "When agents are independent, they need coordination. Consonant's control plane routes requests between agents based on goals, handles retries when agents fail, and enforces policies before risky operations.",
      features: [
        "Dynamic routing based on user goals",
        "Automatic retries for transient failures",
        "Policy enforcement (OPA) for safety",
        "Audit logs for every decision",
      ],
      code: `# Run a goal that requires multiple agents
consonant run --goal "Refund customer #12345"

# Consonant Control Plane:
# 1. Routes to 'customer-db' (get order)
# 2. Routes to 'refund-processor' (logic)
# 3. Checks policy (Amount > $100?)
# 4. Executes refund if approved`,
    },
    {
      icon: Search,
      title: "Complete Visibility",
      shortDesc: "Debug distributed agents",
      description: "When agents are separated, failures become harder to debug. Consonant instruments every operation—every agent call, every database query, every LLM invocation—and gives you a timeline of exactly what happened.",
      features: [
        "Debug failures in minutes, not hours",
        "Replay workflows relative to state",
        "Export audit trails (SOC2, HIPAA)",
        "Trace full execution path",
      ],
      code: `# Visualization of the execution trace
TRACE_ID: 8f2a1b9e

[00:00] GOAL_SUBMITTED: "Refund #12345"
[00:01] PLANNER: Selected agents [db, refund]
[00:02] CALL: customer-db agent
        └─ INPUT: { order_id: "12345" }
        └─ OUTPUT: { amount: 150.00 }
[00:03] POLICY_CHECK: "refund_limit"
        └─ RESULT: APPROVED (Manager override)
[00:04] CALL: refund-processor agent
        └─ RESULT: SUCCESS`,
    },
  ]

  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-background via-primary/[0.02] to-background relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6">
            <Cpu className="w-4 h-4" />
            THE ARCHITECTURE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            How Consonant Solves This
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We replace the monolithic container with a distributed agent runtime.
          </p>
        </div>

        {/* Before/After Code Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 relative z-10">
          {/* Left: Without Consonant */}
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 overflow-hidden flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-3 border-b border-destructive/20 bg-destructive/10">
               <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive" />
                <span className="text-xs font-mono text-destructive font-bold">THE PROBLEM (Monolith)</span>
               </div>
            </div>
            <div className="p-5 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto flex-grow bg-card/20">
              <div className="text-muted-foreground"># Dockerfile: The "Easy" Way</div>
              <div className="text-purple-400 mt-2">FROM</div>
              <div className="text-foreground inline"> python:3.11</div>
              
              <div className="text-purple-400 mt-2">COPY</div>
              <div className="text-foreground inline"> researcher.py writer.py editor.py .</div>
              
              <div className="text-purple-400 mt-2">CMD</div>
              <div className="text-yellow-300 inline"> ["python", "run_all_agents.py"]</div>
              
              <div className="mt-6 pt-4 border-t border-destructive/20 text-destructive/90 space-y-2">
                 <p># ❌ All agents restart together</p>
                 <p># ❌ Over-provisioned (4 CPUs for all)</p>
                 <p># ❌ Update one = Redeploy all</p>
              </div>
            </div>
          </div>

          {/* Right: With Consonant */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 overflow-hidden shadow-lg shadow-primary/5 flex flex-col h-full">
             <div className="flex items-center justify-between px-4 py-3 border-b border-primary/20 bg-primary/10">
               <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="text-xs font-mono text-primary font-bold">THE SOLUTION (Consonant)</span>
               </div>
            </div>
            <div className="p-5 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto flex-grow bg-card/20">
              <div className="text-muted-foreground"># agent-manifest.yaml: Calculated Independence</div>
              
              <div className="text-foreground mt-2"><span className="text-blue-400">kind:</span> Agent</div>
              <div className="text-foreground"><span className="text-blue-400">name:</span> researcher</div>
              <div className="text-foreground"><span className="text-blue-400">spec:</span></div>
              <div className="text-foreground pl-4">image: my-researcher:v1</div>
              <div className="text-foreground pl-4">replicas: <span className="text-yellow-300">2-10</span></div>
              <div className="text-foreground pl-4">cpu: <span className="text-yellow-300">"2.0"</span></div>
              
              <div className="border-t border-dashed border-border/40 my-3"></div>

              <div className="text-foreground"><span className="text-blue-400">kind:</span> Agent</div>
              <div className="text-foreground"><span className="text-blue-400">name:</span> writer</div>
              <div className="text-foreground pl-4">cpu: <span className="text-yellow-300">"0.25"</span> <span className="text-muted-foreground"># Tiny!</span></div>

              <div className="mt-4 pt-4 border-t border-primary/20 text-primary/90 space-y-2">
                 <p># ✅ Restart/Update independently</p>
                 <p># ✅ Right-sized (Save 40%)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs + Content */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Tab Navigation */}
          <div className="lg:col-span-2 space-y-3">
            {solutions.map((solution, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${
                  activeTab === index
                    ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/5"
                    : "border-border bg-card/30 hover:border-primary/30 hover:bg-primary/[0.02]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    activeTab === index 
                      ? "bg-primary/20 border border-primary/40" 
                      : "bg-secondary/50 border border-border group-hover:border-primary/30"
                  }`}>
                    <solution.icon className={`w-5 h-5 transition-colors ${
                      activeTab === index ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-semibold transition-colors ${
                        activeTab === index ? "text-primary" : "text-foreground"
                      }`}>
                        {solution.title}
                      </h3>
                      <ChevronRight className={`w-4 h-4 transition-all ${
                        activeTab === index 
                          ? "text-primary translate-x-0.5" 
                          : "text-muted-foreground opacity-0 group-hover:opacity-100"
                      }`} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{solution.shortDesc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden h-full flex flex-col">
              {/* Description */}
              <div className="p-6 border-b border-border">
                <h3 className="text-xl font-bold mb-4">{solutions[activeTab].title}</h3>
                <p className="text-foreground leading-relaxed mb-6">
                  {solutions[activeTab].description}
                </p>
                
                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {solutions[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Code Block */}
              <div className="bg-secondary/30 flex-grow">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-chart-4/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                  <span className="text-xs text-muted-foreground ml-2 font-mono">example</span>
                </div>
                <pre className="p-5 overflow-x-auto">
                  <code className="text-sm font-mono text-foreground/90 leading-relaxed whitespace-pre">
                    {solutions[activeTab].code}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


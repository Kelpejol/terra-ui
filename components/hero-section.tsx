"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, AlertTriangle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Now in Beta
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-center mb-6 max-w-4xl animate-fade-in-up delay-100">
          <span className="block">Think kubernetes but for your </span>
          <span className="block text-primary mt-2"> multi agents systems.</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mb-10 leading-relaxed animate-fade-in-up delay-200">
          Deploying all your agents in one container wastes 
          <span className="text-foreground font-semibold"> 40% of your compute</span>, 
          creates <span className="text-foreground font-semibold">100% blast radius</span> on every deploy, 
          and forces you to scale everything together. 
          Consonant runs each agent independently—they scale separately, fail separately, and deploy separately.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base font-semibold glow-border group w-full sm:w-auto">
            <a href="#how-it-works" className="flex items-center gap-2">
              See How It Works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-base font-medium border-border hover:bg-secondary w-full sm:w-auto">
            <a href="/docs" className="flex items-center gap-2">
              Read Docs
            </a>
          </Button>
          <a 
            href="https://github.com/consonant-ai/consonant" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-4 sm:mt-0 sm:ml-4"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">Star on GitHub</span>
          </a>
        </div>
        
        {/* Before/After Diagram */}
        <div className="w-full max-w-6xl animate-fade-in-up delay-400">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            
            {/* BEFORE */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-destructive/20 to-orange-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative flex flex-col h-full bg-card border border-destructive/20 rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-destructive flex items-center gap-2">
                     🚫 BEFORE CONSONANT
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">Monolithic Container</span>
                </div>
                
                {/* Visual Representation */}
                <div className="bg-secondary/30 rounded-lg p-6 mb-6 border border-border/50 border-dashed">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-full max-w-xs bg-muted border border-border rounded-md p-4 flex flex-wrap gap-2 justify-center relative overflow-hidden">
                      {/* Crashing effect overlay */}
                      <div className="absolute inset-0 bg-destructive/10 z-10 flex items-center justify-center">
                        <span className="text-destructive font-bold text-xl rotate-12 uppercase border-2 border-destructive px-2 py-1 bg-background/80">System Failure</span>
                      </div>
                      
                      <div className="w-10 h-10 rounded bg-chart-1/20 border border-chart-1/50 flex items-center justify-center text-xs">Ag A</div>
                      <div className="w-10 h-10 rounded bg-destructive/20 border border-destructive animate-pulse flex items-center justify-center text-xs font-bold text-destructive">Ag B</div>
                      <div className="w-10 h-10 rounded bg-chart-3/20 border border-chart-3/50 flex items-center justify-center text-xs">Ag C</div>
                      <div className="w-10 h-10 rounded bg-chart-4/20 border border-chart-4/50 flex items-center justify-center text-xs">Ag D</div>
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">One Container • Shared Resources</div>
                  </div>
                </div>
                
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">❌</span>
                    <span>One agent crashes → <strong className="text-destructive">All agents die (100% Outage)</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">❌</span>
                    <span>Resources <strong className="text-destructive">wasted</strong> (provisioned for peak of ALL agents)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">❌</span>
                    <span>Update one agent → <strong className="text-destructive">Redeploy everything</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* AFTER */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative flex flex-col h-full bg-card border border-primary/20 rounded-xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                     ✅ AFTER CONSONANT
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">Independent Agents</span>
                </div>
                
                {/* Visual Representation */}
                <div className="bg-secondary/30 rounded-lg p-6 mb-6 border border-border/50 border-dashed">
                  <div className="flex flex-wrap items-end justify-center gap-4">
                    {/* Agent A */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-16 bg-chart-1/10 border border-chart-1/50 rounded-md flex flex-col items-center justify-center p-1">
                        <span className="text-[10px] text-muted-foreground">Ag A</span>
                        <div className="w-full h-1 bg-chart-1/50 mt-auto rounded-full"></div>
                      </div>
                      <span className="text-[10px] font-mono whitespace-nowrap text-muted-foreground">2 CPU</span>
                    </div>

                    {/* Agent B (Failed but isolated) */}
                    <div className="flex flex-col items-center gap-2 relative">
                      <div className="absolute -top-6 -right-2 bg-destructive text-destructive-foreground text-[10px] px-1 rounded animate-bounce">Restarting</div>
                      <div className="w-12 h-12 bg-gray-800/50 border border-muted rounded-md flex flex-col items-center justify-center p-1 opacity-50">
                        <span className="text-[10px] text-muted-foreground">Ag B</span>
                        <span className="text-xs">💀</span>
                      </div>
                      <span className="text-[10px] font-mono whitespace-nowrap text-muted-foreground">0.2 CPU</span>
                    </div>

                    {/* Agent C (Scaled) */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex -space-x-8">
                        <div className="w-12 h-16 bg-chart-3/10 border border-chart-3/50 rounded-md z-0 scale-90 origin-bottom-right"></div>
                        <div className="w-12 h-16 bg-chart-3/10 border border-chart-3/50 rounded-md z-10 flex flex-col items-center justify-center p-1">
                          <span className="text-[10px] text-muted-foreground">Ag C</span>
                          <div className="w-full h-1 bg-chart-3/50 mt-auto rounded-full"></div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono whitespace-nowrap text-muted-foreground">Scaled x5</span>
                    </div>

                    {/* Agent D */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-8 bg-chart-4/10 border border-chart-4/50 rounded-md flex flex-col items-center justify-center p-1">
                         <span className="text-[10px] text-muted-foreground">Ag D</span>
                      </div>
                      <span className="text-[10px] font-mono whitespace-nowrap text-muted-foreground">0.1 CPU</span>
                    </div>

                  </div>
                </div>

                <ul className="space-y-3 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✅</span>
                    <span>Failures <strong>isolated</strong> (One crashes, others stay up)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✅</span>
                    <span>Resources <strong>right-sized</strong> (Save 40% on compute)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✅</span>
                    <span><strong>Independent deploys</strong> (Update Agent A in seconds)</span>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  )
}


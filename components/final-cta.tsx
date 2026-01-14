"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Cloud, LineChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function FinalCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Started
          </h2>
         
        </div>

        {/* 3 User Paths */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          {/* Path 1: Try Locally */}
          <div className="relative group rounded-xl border border-border bg-card/50 p-8 hover:border-primary/40 transition-colors flex flex-col h-full">
            <div className="relative flex-grow">
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                   <Terminal className="w-6 h-6" />
                 </div>
                 <h3 className="font-bold text-xl">Try Locally</h3>
               </div>
               
               <p className="text-sm text-muted-foreground mb-4">Run the full platform on your laptop in 5 minutes.</p>

               <div className="bg-secondary/50 rounded-lg p-4 font-mono text-xs text-foreground/80 mb-6 overflow-x-auto border border-border leading-relaxed">
                 <div><span className="text-muted-foreground"># Install</span></div>
                 <div className="mb-2">helm install consonant ./chart</div>
                 
                 <div><span className="text-muted-foreground"># Deploy</span></div>
                 <div className="mb-2">kubectl apply -f my-agents/</div>
                 
                 <div><span className="text-muted-foreground"># Run</span></div>
                 <div className="text-primary">consonant run --goal "test"</div>
               </div>
            </div>
            
            <Button variant="outline" className="w-full justify-between mt-auto border-primary/20 hover:bg-primary/5 hover:text-primary" asChild>
              <Link href="/docs/quickstart">
                Quickstart Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Path 2: Deploy to Production */}
          <div className="relative group rounded-xl border border-border bg-card/50 p-8 hover:border-primary/40 transition-colors flex flex-col h-full">
            <div className="relative flex-grow">
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                   <Cloud className="w-6 h-6" />
                 </div>
                 <h3 className="font-bold text-xl">Deploy to Production</h3>
               </div>
               
               <p className="text-sm text-muted-foreground mb-6">Ready for real traffic? Use our production-grade features.</p>

               <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Multi-cluster support</li>
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Policy enforcement (OPA)</li>
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Complete observability</li>
               </ul>
            </div>
               
            <Button variant="outline" className="w-full justify-between mt-auto" asChild>
              <Link href="/docs/architecture">
                Architecture Docs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Path 3: See the ROI */}
          <div className="relative group rounded-xl border border-border bg-card/50 p-8 hover:border-primary/40 transition-colors flex flex-col h-full">
            <div className="relative flex-grow">
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                   <LineChart className="w-6 h-6" />
                 </div>
                 <h3 className="font-bold text-xl">See the ROI</h3>
               </div>
               
               <p className="text-sm text-muted-foreground mb-6">Why enterprises switch to independent agent runtimes.</p>

               <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" /><strong className="text-foreground">40%</strong> infrastructure savings</li>
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Compliance-ready (SOC2/HIPAA)</li>
                 <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Zero vendor lock-in</li>
               </ul>
            </div>
               
            <Button variant="default" className="w-full justify-between mt-auto bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="https://forms.gle/zdJF2e2pDhcN7aLX7" target="_blank" rel="noopener noreferrer">
                Schedule Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        {/* Branding Badge */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card/50 opacity-80 backdrop-blur-sm">
             <span className="text-[10px] uppercase tracking-tighter text-muted-foreground">Built on</span>
             <Image 
                src="/kagent-logo.png" 
                alt="KAgent Logo" 
                width={90} 
                height={30} 
               
              />
              <span className="text-[10px] whitespace-nowrap text-muted-foreground/80 font-mono">solo.io kagent</span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center gap-8 text-sm text-muted-foreground border-t border-border/50 pt-8">
           <a href="https://github.com/consonantlabs" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
           <Link href="/docs" className="hover:text-foreground transition-colors">Documentation</Link>
           <a href="mailto:team@consonant.ai" className="hover:text-foreground transition-colors">Contact Sales</a>
        </div>
      </div>
    </section>
  )
}


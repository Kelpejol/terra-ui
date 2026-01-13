import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { MetricsStrip } from "@/components/metrics-strip"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <GridBackground />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <MetricsStrip />
      <FinalCTA />
      <Footer />
    </main>
  )
}

function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(oklch(0.75_0.15_195_/_0.03)_1px,transparent_1px),linear-gradient(90deg,oklch(0.75_0.15_195_/_0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-flow" />
      
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-[100px]" />
    </div>
  )
}


import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { DisasterSection } from "@/components/disaster-section"
import { ProblemSection } from "@/components/problem-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { WalkthroughSection } from "@/components/walkthrough-section"
import { ROISection } from "@/components/roi-section"
import { MetricsStrip } from "@/components/metrics-strip"
import { PersonasSection } from "@/components/personas-section"
import { ComparisonSection } from "@/components/comparison-section"
import { GettingStartedSection } from "@/components/getting-started-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <GridBackground />
      <Navbar />
      <HeroSection />
      <DisasterSection />
      <ProblemSection />
      <ArchitectureSection />
      <WalkthroughSection />
      <ROISection />
      <MetricsStrip />
      <PersonasSection />
      <ComparisonSection />
      <GettingStartedSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}

function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(oklch(0.75_0.15_195_/_0.03)_1px,transparent_1px),linear-gradient(90deg,oklch(0.75_0.15_195_/_0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-flow" />
      
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-[100px]" />
    </div>
  )
}

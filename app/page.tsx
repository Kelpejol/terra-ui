import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MetricsStrip } from "@/components/metrics-strip"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { DeepFeatures } from "@/components/deep-features"
import { CodeDemo } from "@/components/code-demo"
import { ArchitectureDiagram } from "@/components/architecture-diagram"
import { RunLifecycle } from "@/components/run-lifecycle"
import { DashboardPreviews } from "@/components/dashboard-previews"
import { PersonasSection } from "@/components/personas-section"
import { InstallSection } from "@/components/install-section"
import { PricingSection } from "@/components/pricing-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <GridBackground />
      <Navbar />
      <HeroSection />
      <MetricsStrip />
      <ProblemSection />
      <SolutionSection />
      <DeepFeatures />
      <CodeDemo />
      <ArchitectureDiagram />
      <RunLifecycle />
      <DashboardPreviews />
      <PersonasSection />
      <InstallSection />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}

function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-flow" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-[100px]" />
    </div>
  )
}

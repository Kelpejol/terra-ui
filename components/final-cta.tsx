import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
  Production orchestration for <span className="text-primary">agent systems</span>
</h2>
<p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
  Adaptive routing. Policy enforcement. Operational controls. Built for production.
</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8">
            <a href="https://forms.gle/zdJF2e2pDhcN7aLX7" target="_blank" rel="noopener noreferrer">
    Join Waitlist
  </a>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 border-border hover:bg-secondary bg-transparent">
            <FileText className="mr-2 w-4 h-4" />
            Read Docs
          </Button>
        </div>
      </div>
    </section>
  )
}

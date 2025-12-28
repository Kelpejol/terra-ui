"use client"

import { Button } from "@/components/ui/button"
import { Copy, Download } from "lucide-react"

export function InstallSection() {
  const installCommands = `consonant install control-plane
consonant run start --manifest manifest.yml`

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommands)
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Install Consonant Control Plane</h2>
        <p className="text-muted-foreground mb-8">Get started in minutes with a single command.</p>

        <div className="relative rounded-xl border border-border bg-card overflow-hidden mb-8">
          <div className="h-10 bg-secondary/50 border-b border-border flex items-center justify-between px-4">
            <span className="text-xs text-muted-foreground font-mono">terminal</span>
            <button onClick={handleCopy} className="text-muted-foreground hover:text-foreground transition-colors">
              <Copy className="w-4 h-4" />
            </button>
          </div>
          <pre className="p-6 text-left text-sm font-mono text-primary overflow-x-auto">
            <code>{installCommands}</code>
          </pre>
        </div>

        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Download className="mr-2 w-4 h-4" />
          Download Consonant Engine
        </Button>
      </div>
    </section>
  )
}

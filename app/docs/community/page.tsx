import { DocHeader, NextStepCard } from "../doc-components"
import { Github, MessageSquare, Heart } from "lucide-react"

export default function CommunityPage() {
  return (
    <div>
      <DocHeader 
        title="Community"
        description="Connect with other developers building orchestrations with Consonant."
        label="RESOURCES"
      />

      <div className="prose prose-invert max-w-none text-muted-foreground">
        <p>
          Consonant is open source. We believe in building in public and supporting our community.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
           <a 
             href="https://github.com/consonantlabs" 
             target="_blank" 
             rel="noopener noreferrer"
             className="p-6 rounded-xl border border-border bg-card/30 hover:border-primary/30 hover:bg-primary/5 transition-all text-center group"
           >
             <div className="w-12 h-12 rounded-full bg-secondary text-foreground mx-auto flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
               <Github className="w-6 h-6" />
             </div>
             <h3 className="text-lg font-semibold text-foreground mb-2">GitHub</h3>
             <p className="text-sm">Report bugs, request features, and contribute code.</p>
           </a>

           <a 
             href="https://discord.gg/consonant" 
             target="_blank" 
             rel="noopener noreferrer"
             className="p-6 rounded-xl border border-border bg-card/30 hover:border-primary/30 hover:bg-primary/5 transition-all text-center group"
           >
             <div className="w-12 h-12 rounded-full bg-secondary text-foreground mx-auto flex items-center justify-center mb-4 group-hover:bg-[#5865F2] group-hover:text-white transition-colors">
               <MessageSquare className="w-6 h-6" />
             </div>
             <h3 className="text-lg font-semibold text-foreground mb-2">Discord</h3>
             <p className="text-sm">Chat with the team and other users in real-time.</p>
           </a>
        </div>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Contributing</h2>
        <p>
          We welcome contributions! Please read our <a href="#" className="underline hover:text-primary">Contribution Guide</a> before submitting a PR.
        </p>

      </div>
    </div>
  )
}

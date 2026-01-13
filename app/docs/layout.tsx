"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { ChevronRight, Menu, Search, Home as HomeIcon } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const docsConfig = {
  nav: [
    {
      title: "Introduction",
      items: [
        { title: "The Production Problem", href: "/docs" },
        { title: "How Consonant Solves This", href: "/docs/introduction/solution" },
        { title: "Quickstart", href: "/docs/quickstart" },
        { title: "Core Concepts", href: "/docs/introduction/concepts" },
      ],
    },
    {
      title: "Architecture",
      items: [
        { title: "The Monolithic Problem", href: "/docs/architecture/monolithic-problem" },
        { title: "Consonant Architecture", href: "/docs/architecture" }, // Maps to /docs/architecture/page.tsx
        { title: "Observability Layer", href: "/docs/architecture/observability" },     
      ],
    },
    {
      title: "Getting Started",
      items: [
        { title: "Installation", href: "/docs/getting-started/installation" },
        { title: "Deploying First Agent", href: "/docs/getting-started/deploy-agent" },
        { title: "Running Workflow", href: "/docs/getting-started/run-workflow" },
      ],
    },
    {
      title: "Agent Development",
      items: [
        { title: "Agent Manifest", href: "/docs/agent-development/manifest" },
        { title: "Resource Sizing", href: "/docs/agent-development/sizing" },
        { title: "Scaling Config", href: "/docs/agent-development/scaling" },
        { title: "Health Checks", href: "/docs/agent-development/health" },
        { title: "Instrumentation", href: "/docs/agent-development/instrumentation" },
        { title: "Testing Strategies", href: "/docs/agent-development/testing" },
      ],
    },
    {
      title: "Coordination",
      items: [
        { title: "Why Coordination?", href: "/docs/coordination/why" },
        { title: "Request Routing", href: "/docs/coordination/routing" },
        { title: "Handling Failures", href: "/docs/coordination/failures" },
        { title: "State Management", href: "/docs/coordination/state" },
      ],
    },
    {
      title: "Policies",
      items: [
        { title: "Why Policies?", href: "/docs/policies/why" },
        { title: "Policy Examples", href: "/docs/policies/examples" },
        { title: "Policy Deployment", href: "/docs/policies/deployment" },
      ],
    },
    {
      title: "Debugging",
      items: [
        { title: "Debugging Distributed Agents", href: "/docs/debugging/distributed" },
        { title: "Tools & Traces", href: "/docs/debugging/tools" },
        { title: "Common Scenarios", href: "/docs/debugging/scenarios" },
      ],
    },
    {
      title: "Production",
      items: [
        { title: "Deployment Patterns", href: "/docs/production/patterns" },
        { title: "High Availability", href: "/docs/production/ha" },
        { title: "Scaling & Security", href: "/docs/production/scaling-security" },
      ],
    },
    {
      title: "Reference",
      items: [
        { title: "API Reference", href: "/docs/api" },
        { title: "CLI Reference", href: "/docs/cli" },
      ],
    },
  ],
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Mobile Nav Header (only visible on small screens) */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
        <div className="flex h-14 items-center px-4">
          <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 w-[300px]">
               <div className="px-4 py-4 h-full flex flex-col">
                 <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-6 text-foreground" onClick={() => setIsMobileNavOpen(false)}>
                    <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs">C</div>
                    Consonant
                 </Link>
                 <ScrollArea className="flex-1 pr-4">
                    <DocsSidebarNav items={docsConfig.nav} setOpen={setIsMobileNavOpen} />
                 </ScrollArea>
               </div>
            </SheetContent>
          </Sheet>
          <div className="flex-1 font-semibold text-sm">Documentation</div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
        
        {/* Desktop Sidebar */}
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block border-r border-border/40">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <div className="mb-4 px-2">
               <div className="relative">
                 <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                 <input 
                   placeholder="Search..." 
                   className="w-full rounded-md border border-input bg-secondary/20 px-8 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                 />
                 <div className="absolute right-2 top-2.5 text-[10px] text-muted-foreground border border-border rounded px-1.5 bg-background">⌘K</div>
               </div>
            </div>
            <DocsSidebarNav items={docsConfig.nav} />
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_200px]">
          <div className="mx-auto w-full min-w-0 max-w-3xl">
            {/* Breadcrumb placeholder - simplified for now */}
            <div className="mb-6 flex items-center text-sm text-muted-foreground">
               <Link href="/" className="hover:text-foreground transition-colors"><HomeIcon className="w-4 h-4" /></Link>
               <ChevronRight className="w-4 h-4 mx-1" />
               <span className="font-medium text-foreground">Docs</span>
            </div>
            
            {children}
            
            {/* Page Footer Navigation placeholder */}
            <div className="mt-16 flex justify-between border-t border-border pt-8">
               {/* This helps navigation flow - could be automated later */}
            </div>
          </div>
          
          {/* Right Sidebar (TOC) */}
          <div className="hidden text-sm xl:block">
            <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] pt-10">
              <ScrollArea className="h-full pb-10">
                 <div className="space-y-2 border-l border-border pl-4">
                   <p className="font-medium text-foreground">On This Page</p>
                   <ul className="m-0 list-none space-y-2">
                     <li>
                       <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">The Problem</a>
                     </li>
                     <li>
                       <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">The Solution</a>
                     </li>
                     <li>
                       <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Implementation</a>
                     </li>
                   </ul>
                 </div>
              </ScrollArea>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

interface DocsSidebarNavProps {
  items: {
    title: string
    items: {
      title: string
      href: string
      items?: any[]
    }[]
  }[]
  setOpen?: (open: boolean) => void
}

function DocsSidebarNav({ items, setOpen }: DocsSidebarNavProps) {
  const pathname = usePathname()

  return (
    <div className="w-full pb-8">
      {items.map((item, index) => (
        <div key={index} className="pb-4">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold text-foreground">
            {item.title}
          </h4>
          {item.items?.length && (
            <div className="grid grid-flow-row auto-rows-max text-sm gap-0.5">
              {item.items.map((navItem, index) => (
                <Link
                  key={index}
                  href={navItem.href}
                  className={`group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 hover:bg-muted hover:text-foreground transition-colors ${
                     pathname === navItem.href 
                       ? "font-medium text-primary bg-primary/10" 
                       : "text-muted-foreground"
                  }`}
                  onClick={() => setOpen?.(false)}
                >
                  {navItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}


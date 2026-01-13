"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/consonant-logo.png" 
            alt="Consonant Logo" 
            width={120} 
            height={42} 
            className="h-10 w-auto" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink href="/docs">Documentation</NavLink>
          <NavLink href="/docs/architecture">Architecture</NavLink>
          <NavLink href="/docs/quickstart">Quickstart</NavLink>
          <NavLink href="https://github.com/consonantlabs" external>
            <Github className="w-4 h-4" />
            GitHub
          </NavLink>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
            <a href="https://forms.gle/zdJF2e2pDhcN7aLX7" target="_blank" rel="noopener noreferrer">
              Request Demo
            </a>
          </Button>
          <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
            <Link href="/docs" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-3">
            <MobileNavLink href="/docs" onClick={() => setMobileMenuOpen(false)}>
              <FileText className="w-4 h-4" />
              Documentation
            </MobileNavLink>
            <MobileNavLink href="/docs/architecture" onClick={() => setMobileMenuOpen(false)}>
              Architecture
            </MobileNavLink>
            <MobileNavLink href="/docs/quickstart" onClick={() => setMobileMenuOpen(false)}>
              Quickstart
            </MobileNavLink>
            <MobileNavLink href="https://github.com/consonantlabs" external onClick={() => setMobileMenuOpen(false)}>
              <Github className="w-4 h-4" />
              GitHub
            </MobileNavLink>
            
            <div className="pt-3 border-t border-border space-y-2">
              <Button variant="outline" size="sm" asChild className="w-full justify-center">
                <a href="https://forms.gle/zdJF2e2pDhcN7aLX7" target="_blank" rel="noopener noreferrer">
                  Request Demo
                </a>
              </Button>
              <Button size="sm" asChild className="w-full justify-center bg-primary text-primary-foreground">
                <Link href="/docs">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ 
  href, 
  children, 
  external 
}: { 
  href: string
  children: React.ReactNode
  external?: boolean 
}) {
  const Component = external ? 'a' : Link
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {}
  
  return (
    <Component
      href={href}
      className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
      {...externalProps}
    >
      {children}
    </Component>
  )
}

function MobileNavLink({ 
  href, 
  children, 
  external,
  onClick 
}: { 
  href: string
  children: React.ReactNode
  external?: boolean
  onClick?: () => void 
}) {
  const Component = external ? 'a' : Link
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {}
  
  return (
    <Component
      href={href}
      className="flex items-center gap-2 px-3 py-2.5 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
      onClick={onClick}
      {...externalProps}
    >
      {children}
    </Component>
  )
}

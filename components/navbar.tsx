"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary/20 border border-primary/40 flex items-center justify-center">
              <span className="text-primary font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-semibold tracking-tight text-foreground">TERRA</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="#" hasDropdown>
              Product
            </NavLink>
            <NavLink href="#">Platform</NavLink>
            <NavLink href="#">Docs</NavLink>
            <NavLink href="#">Pricing</NavLink>
            <NavLink href="#" hasDropdown>
              Company
            </NavLink>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Log In
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Start Free
          </Button>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-4">
            <a href="#" className="block text-foreground py-2">
              Product
            </a>
            <a href="#" className="block text-foreground py-2">
              Platform
            </a>
            <a href="#" className="block text-foreground py-2">
              Docs
            </a>
            <a href="#" className="block text-foreground py-2">
              Pricing
            </a>
            <a href="#" className="block text-foreground py-2">
              Company
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full bg-transparent">
                Log In
              </Button>
              <Button className="w-full bg-primary text-primary-foreground">Start Free</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children, hasDropdown }: { href: string; children: React.ReactNode; hasDropdown?: boolean }) {
  return (
    <a
      href={href}
      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
      {hasDropdown && <ChevronDown className="w-3 h-3" />}
    </a>
  )
}

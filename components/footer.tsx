"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image 
                src="/consonant-logo.png" 
                alt="Consonant Logo" 
                width={100} 
                height={42} 
                className="h-10 w-auto" 
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Consonant is not an agent framework. It’s the infrastructure that runs agent systems reliably in production.
            </p>
            <div className="flex items-center gap-3">
              <SocialLink href="https://github.com/consonantlabs" icon={<Github className="w-4 h-4" />} />
              <SocialLink href="#" icon={<Twitter className="w-4 h-4" />} />
              <SocialLink href="#" icon={<Linkedin className="w-4 h-4" />} />
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <FooterLink href="/docs">Documentation</FooterLink>
              <FooterLink href="/docs/quickstart">Quickstart</FooterLink>
              <FooterLink href="/docs/architecture">Architecture</FooterLink>
              <FooterLink href="https://github.com/consonantlabs" external>GitHub</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <FooterLink href="/docs/guides/agent-development">Agent Development</FooterLink>
              <FooterLink href="/docs/guides/policy-enforcement">Policy Enforcement</FooterLink>
              <FooterLink href="/docs/api">API Reference</FooterLink>
              <FooterLink href="/docs/guides/observability">Observability</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <FooterLink href="https://forms.gle/zdJF2e2pDhcN7aLX7" external>Request Demo</FooterLink>
              <FooterLink href="mailto:hello@consonant.dev">Contact</FooterLink>
              <FooterLink href="/privacy">Privacy</FooterLink>
              <FooterLink href="/terms">Terms</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Consonant. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-[14px] uppercase tracking-tighter">Built on</span>
              <Image 
                src="/kagent-logo.png" 
                alt="KAgent Logo" 
                width={80} 
                height={30} 
               
              />
              <span className="text-[14px] whitespace-nowrap text-muted-foreground/80">solo.io kagent (CNCF)</span>
            </div>
            <span>Built with ❤️ for AI engineers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ 
  href, 
  children, 
  external 
}: { 
  href: string
  children: React.ReactNode
  external?: boolean 
}) {
  if (external) {
    return (
      <li>
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {children}
        </a>
      </li>
    )
  }
  
  return (
    <li>
      <Link href={href} className="text-muted-foreground hover:text-primary transition-colors">
        {children}
      </Link>
    </li>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-lg border border-border bg-secondary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
    >
      {icon}
    </a>
  )
}

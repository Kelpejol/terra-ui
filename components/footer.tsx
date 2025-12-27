export function Footer() {
  const columns = [
    {
      title: "Product",
      links: ["Registry", "Orchestration", "State", "Dashboard", "Policies"],
    },
    {
      title: "Developers",
      links: ["Documentation", "SDKs", "CLI Reference", "Examples", "API"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Security", "Status"],
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses"],
    },
  ]

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary/20 border border-primary/40 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">T</span>
              </div>
              <span className="text-lg font-semibold text-foreground">TERRA</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
  Orchestration infrastructure for agent workflows.
</p>
          </div>

          {columns.map((column, index) => (
            <div key={index}>
              <h4 className="font-medium text-foreground mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Terra. Built on Kagent (CNCF Sandbox Project). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

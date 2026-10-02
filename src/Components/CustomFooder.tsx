import { Link } from "react-router"
import { siteConfig } from "@/data/site"

export function Footer() {
  return (
    <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          Built by{" "}
          <Link to="/Home" className="text-foreground font-medium hover:text-accent transition-colors">
            {siteConfig.name}
          </Link>
        </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}

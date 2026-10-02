import { Link } from "react-router"
import { siteConfig } from "@/data/site"
import { useI18n } from "@/i18n"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          {t.footer.builtBy}{" "}
          <Link to="/Home" className="text-foreground font-medium hover:text-accent transition-colors">
            {siteConfig.name}
          </Link>
        </p>
        <p>
          © {new Date().getFullYear()} {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}

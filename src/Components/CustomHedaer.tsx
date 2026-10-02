import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import { siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "/Home" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/Home#skills" },
  { label: "Journey", href: "/Home#journey" },
  { label: "Contact", href: "/Home#contact" },
]

function isHashLink(href: string) {
  return href.includes("#")
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isScrolled ? "glass border-b border-border/60 py-3" : "py-4 sm:py-5"
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4"
          aria-label="Primary"
        >
          <Link
            to="/Home"
            className="text-lg sm:text-xl font-bold tracking-tight min-h-11 inline-flex items-center"
          >
            {siteConfig.shortName}
            <span className="text-accent">.</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active =
                item.href === "/projects"
                  ? location.pathname.startsWith("/projects")
                  : item.href === "/Home"
                    ? location.pathname === "/Home" && !location.hash
                    : false
              const className = cn(
                "px-3 py-2 rounded-full text-sm font-medium transition-colors min-h-11 inline-flex items-center",
                active
                  ? "text-foreground bg-white/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )
              return isHashLink(item.href) ? (
                <a key={item.label} href={item.href} className={className}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.href} className={className}>
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Home#contact"
              className="hidden sm:inline-flex items-center gap-2 min-h-11 px-4 rounded-full text-sm font-semibold text-white btn-gradient"
            >
              Contact me
              <ArrowRight className="w-4 h-4" aria-hidden />
            </a>
            <button
              type="button"
              className="lg:hidden min-h-11 min-w-11 inline-flex items-center justify-center rounded-xl glass"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden pt-24"
          >
            <div className="flex flex-col gap-2 px-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  {isHashLink(item.href) ? (
                    <a
                      href={item.href}
                      className="block w-full text-xl font-medium min-h-12 px-4 py-3 rounded-xl hover:bg-white/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="block w-full text-xl font-medium min-h-12 px-4 py-3 rounded-xl hover:bg-white/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <a
                href="/Home#contact"
                className="mt-4 inline-flex items-center justify-center gap-2 min-h-12 rounded-full font-semibold text-white btn-gradient"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact me
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

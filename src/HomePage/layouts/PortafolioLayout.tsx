import { Link, Outlet, useLocation } from "react-router"

/** Lightweight chrome for nested demo routes when reused. */
export const PortafolioLayout = () => {
  const url = useLocation()
  const showBackHome = url.pathname !== "/Home"

  return (
    <div className="min-h-[100svh] overflow-x-hidden">
      {showBackHome && (
        <nav className="px-4 sm:px-6 py-3 border-b border-border/40">
          <Link
            to="/Home"
            className="inline-flex items-center min-h-11 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Home
          </Link>
        </nav>
      )}
      <Outlet />
    </div>
  )
}

import { lazy, Suspense } from "react"
import { BrowserRouter, Link, Navigate, Route, Routes, Outlet } from "react-router"
import { I18nProvider, useI18n } from "@/i18n"

import { HomePage } from "@/HomePage/Me"
import { Page404 } from "@/HomePage/Pages/Page404"

const ScrambleWords = lazy(() => import("@/HomePage/Pages/ScrabbleGame"))
const GiftApp = lazy(() =>
  import("@/HomePage/Pages/gifts/GiftsApp").then((m) => ({ default: m.GiftApp }))
)
const ProjectsPage = lazy(() =>
  import("@/HomePage/Pages/ProjectsPage").then((m) => ({ default: m.ProjectsPage }))
)
const ProjectDetailPage = lazy(() =>
  import("@/HomePage/Pages/ProjectDetailPage").then((m) => ({ default: m.ProjectDetailPage }))
)

function RouteFallback() {
  const { t } = useI18n()
  return (
    <div
      className="min-h-[50vh] flex items-center justify-center text-muted-foreground text-sm"
      role="status"
      aria-live="polite"
    >
      {t.common.loading}
    </div>
  )
}

function DemoLayout() {
  const { t } = useI18n()
  return (
    <div className="min-h-[100svh] overflow-x-hidden">
      <nav className="px-4 sm:px-6 py-3 border-b border-border/40">
        <Link
          to="/Home"
          className="inline-flex items-center min-h-11 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {t.common.backHome}
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export const AppRouter = () => {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Navigate to="/Home" replace />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />

            <Route element={<DemoLayout />}>
              <Route path="/ScrambleGame" element={<ScrambleWords />} />
              <Route path="/giftsApp" element={<GiftApp />} />
            </Route>

            <Route path="/404" element={<Page404 />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </I18nProvider>
  )
}

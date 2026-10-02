import { useMemo, useState } from "react"
import { Link } from "react-router"
import { Search } from "lucide-react"
import { DocumentMeta } from "@/Components/seo/DocumentMeta"
import { Navbar } from "@/Components/CustomHedaer"
import { Footer } from "@/Components/CustomFooder"
import { SectionHeading } from "@/Components/ui/section-heading"
import { ProjectCard } from "@/HomePage/Components/project-card"
import {
  filterProjects,
  projectCategories,
  techFilters,
} from "@/data/projects"
import { useI18n } from "@/i18n"
import { cn } from "@/lib/utils"

const PAGE_SIZE = 6

export function ProjectsPage() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("all")
  const [techId, setTechId] = useState("all")
  const [visible, setVisible] = useState(PAGE_SIZE)
  const { t } = useI18n()

  const filtered = useMemo(
    () => filterProjects({ query, category, techId }),
    [query, category, techId]
  )

  const shown = filtered.slice(0, visible)
  const canLoadMore = visible < filtered.length

  return (
    <>
      <DocumentMeta
        title={t.meta.projectsTitle}
        description={t.meta.projectsDescription}
        path="/projects"
      />
      <Navbar />
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title={t.projects.allTitle}
            description={t.projects.allDescription}
          />

          <div className="mb-8 space-y-4">
            <label className="relative block max-w-xl">
              <span className="sr-only">{t.projects.searchLabel}</span>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setVisible(PAGE_SIZE)
                }}
                placeholder={t.projects.searchPlaceholder}
                className="w-full min-h-12 rounded-full bg-secondary/80 border border-border pl-11 pr-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </label>

            <div className="flex flex-wrap gap-2" role="group" aria-label={t.projects.categoryFilters}>
              {projectCategories.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setCategory(item.id)
                    setVisible(PAGE_SIZE)
                  }}
                  className={cn(
                    "min-h-11 px-4 rounded-full text-sm font-medium transition-colors",
                    category === item.id
                      ? "bg-accent text-accent-foreground"
                      : "glass text-muted-foreground hover:text-foreground"
                  )}
                >
                  {t.projects.categories[item.id] ?? item.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2" role="group" aria-label={t.projects.techFilters}>
              {techFilters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setTechId(item.id)
                    setVisible(PAGE_SIZE)
                  }}
                  className={cn(
                    "min-h-10 px-3 rounded-full text-xs font-medium transition-colors",
                    techId === item.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.id === "all" ? t.projects.categories.all : item.label}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            {t.projects.showing} {shown.length} {t.projects.of} {filtered.length}{" "}
            {t.projects.projectsWord}
          </p>

          {shown.length === 0 ? (
            <div className="glow-card rounded-2xl p-10 text-center text-muted-foreground">
              {t.projects.empty}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {shown.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} compact />
              ))}
            </div>
          )}

          {canLoadMore && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="min-h-12 px-6 rounded-full glass font-semibold hover:bg-white/10"
              >
                {t.projects.loadMore}
              </button>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link to="/Home" className="text-sm text-muted-foreground hover:text-foreground">
              {t.projects.backHome}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

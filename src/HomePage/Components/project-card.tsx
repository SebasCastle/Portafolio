import { useEffect, useId, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Link } from "react-router"
import { isExternalHref, type Project } from "@/data/projects"
import { interpolate, useI18n } from "@/i18n"
import { cn } from "@/lib/utils"

const actionClass =
  "min-h-11 px-4 py-2.5 rounded-full text-sm font-medium inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

interface ProjectCardProps {
  project: Project
  index?: number
  /** denser card for grids */
  compact?: boolean
}

export function ProjectCard({ project, index = 0, compact = false }: ProjectCardProps) {
  const [pinned, setPinned] = useState(false)
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLElement>(null)
  const panelId = useId()
  const reduceMotion = useReducedMotion()
  const { t } = useI18n()
  const showLinks = pinned || hovered
  const primaryDemo = project.demos[0]
  const categoryLabel =
    t.projects.categories[project.category] ?? project.category.replace("-", " ")

  useEffect(() => {
    if (!pinned) return
    const onPointerDown = (event: PointerEvent) => {
      if (!cardRef.current?.contains(event.target as Node)) setPinned(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPinned(false)
    }
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [pinned])

  return (
    <motion.article
      ref={cardRef}
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.05 }}
      className="h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setPinned(true)}
      onBlurCapture={(event) => {
        const next = event.relatedTarget as Node | null
        if (!cardRef.current?.contains(next)) setPinned(false)
      }}
    >
      <div
        className={cn(
          "glow-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300",
          showLinks && "border-accent/40"
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden flex items-center justify-center",
            compact ? "h-40 sm:h-48" : "h-48 sm:h-56"
          )}
        >
          {project.image ? (
            <img
              src={project.image}
              alt=""
              aria-hidden
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-transform duration-500",
                showLinks && "scale-105"
              )}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <>
              <div className={cn("absolute inset-0 bg-gradient-to-br", project.gradient)} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.18),transparent_55%)]" />
              <span
                className={cn(
                  "relative text-5xl sm:text-6xl transition-transform duration-500",
                  showLinks && "scale-110"
                )}
                aria-hidden
              >
                {project.icon}
              </span>
            </>
          )}

          <button
            type="button"
            className={cn(
              "absolute inset-0 z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
              showLinks ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
            tabIndex={showLinks ? -1 : 0}
            aria-expanded={showLinks}
            aria-controls={panelId}
            onClick={() => setPinned(true)}
          >
            <span className="sr-only">
              {interpolate(t.projects.showLinks, { title: project.title })}
            </span>
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-xs font-medium sm:hidden pointer-events-none">
              {t.projects.tapForLinks}
            </span>
          </button>

          <div
            id={panelId}
            role="group"
            aria-label={`${project.title} project links`}
            aria-hidden={!showLinks}
            className={cn(
              "absolute inset-0 z-30 bg-background/75 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300",
              showLinks ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            onClick={() => setPinned(false)}
          >
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-2 w-[min(100%,18rem)] px-3">
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(actionClass, "bg-primary text-primary-foreground hover:bg-primary/90")}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" aria-hidden />
                  {t.projects.code}
                </a>
              )}
              {project.demos.length === 0 ? (
                <span className={cn(actionClass, "glass text-muted-foreground")}>
                  {t.projects.justCode}
                </span>
              ) : (
                project.demos.map((demo) =>
                  isExternalHref(demo.href) ? (
                    <a
                      key={demo.href}
                      href={demo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(actionClass, "glass hover:bg-white/10")}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden />
                      {demo.label}
                    </a>
                  ) : (
                    <Link
                      key={demo.href}
                      to={demo.href}
                      className={cn(actionClass, "glass hover:bg-white/10")}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden />
                      {demo.label}
                    </Link>
                  )
                )
              )}
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {categoryLabel}
            </span>
            <Link
              to={`/projects/${project.slug}`}
              className="text-muted-foreground hover:text-foreground transition-colors min-h-9 min-w-9 inline-flex items-center justify-center rounded-full"
              aria-label={`Open ${project.title} details`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <h3 className="text-xl font-semibold mb-2 tracking-tight">{project.title}</h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 flex-1">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {primaryDemo &&
              (isExternalHref(primaryDemo.href) ? (
                <a
                  href={primaryDemo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(actionClass, "bg-accent text-accent-foreground hover:bg-accent/90")}
                >
                  {t.projects.liveDemo}
                </a>
              ) : (
                <Link
                  to={primaryDemo.href}
                  className={cn(actionClass, "bg-accent text-accent-foreground hover:bg-accent/90")}
                >
                  {t.projects.liveDemo}
                </Link>
              ))}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(actionClass, "glass hover:bg-white/10")}
              >
                {t.projects.code}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

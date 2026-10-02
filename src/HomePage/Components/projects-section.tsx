"use client"

import { useEffect, useId, useRef, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Link } from "react-router"

const filters = [
  { id: "all", label: "All" },
  { id: "react", label: "React" },
  { id: "nestjs", label: "NestJS" },
  { id: "sql", label: "SQL" },
  { id: "excel-vba", label: "Excel VBA" },
  { id: "wordpress", label: "WordPress" },
  { id: "Tailwind", label: "Tailwind" },
]

const projects = [
  {
    id: 1,
    title: "React",
    url: "https://github.com/SebasCastle/React-Practicas/tree/ba18c88b17d3fcb6d5174b0548e0e41ce66cc1cf/04-hooks-app/src",
    page: ["/ScrambleGame", "/giftsApp"],
    description: "Mini game made with React, where you have to guess the word.",
    technologies: ["React", "Tailwind"],
    techIds: ["react", "Tailwind"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: "⚛️",
  },
  {
    id: 2,
    title: "DevTree",
    url: "https://github.com/SebasCastle/React-Practicas/tree/ba18c88b17d3fcb6d5174b0548e0e41ce66cc1cf/04-hooks-app/src",
    description:
      "Get all your social media links in one place. Try it — User: sebastian@gmail.com, pass: Sebastian2005. (Consider it is on a free server with limited resources.)",
    page: ["https://devtree-uag.netlify.app/Home"],
    technologies: ["React", "Tailwind", "API", "Express", "more..."],
    techIds: ["react", "nestjs", "sql"],
    gradient: "from-green-500/20 to-blue-500/20",
    icon: "🛜",
  },
  {
    id: 3,
    title: "VBA Excel",
    url: "https://github.com/SebasCastle",
    description: "Quote automation, creation of logs using forms and VBA macros.",
    page: [] as string[],
    technologies: ["Excel", "VBA"],
    techIds: ["python", "sql", "excel-vba"],
    gradient: "from-green-500/20 to-emerald-500/20",
    icon: "📈",
  },
  {
    id: 4,
    title: "WordPress Business Website",
    url: "https://github.com/SebasCastle",
    description:
      "Custom business website with responsive modern design, optimized for performance and SEO.",
    technologies: ["WordPress", "Tailwind", "BreakDance", "Elementor"],
    page: ["https://lovemark.agency", "https://lifsa.mx"],
    techIds: ["wordpress", "Tailwind"],
    gradient: "from-orange-500/20 to-amber-500/20",
    icon: "🌐",
  },
  {
    id: 5,
    title: "Nest JS",
    url: "https://github.com/SebasCastle/nest",
    description: "Just small back-end projects with Nest.js.",
    technologies: ["Nest", "zod"],
    page: [] as string[],
    techIds: ["nestjs"],
    gradient: "from-green-500/20 to-blue-500/20",
    icon: "💻",
  },
  {
    id: 6,
    title: "More projects soon...",
    url: "https://github.com/SebasCastle",
    description: "AI, MCP, Cloud, and more.",
    technologies: ["AWS", "Google Cloud", "GPT", "Linux", "more..."],
    page: ["https://lovemark.agency", "https://lifsa.mx"],
    techIds: ["API", "Cloud"],
    gradient: "from-green-500/20 to-blue-500/20",
    icon: "🔜",
  },
]

type Project = (typeof projects)[number]

function formatPageLabel(link: string) {
  if (link.startsWith("/")) return link.replace(/^\//, "") || "Demo"
  return link.replace(/^https?:\/\//, "").replace(/\/$/, "")
}

function isExternalPage(link: string) {
  return /^https?:\/\//.test(link)
}

const linkClassName =
  "min-h-11 min-w-11 px-4 py-2.5 rounded-full text-sm font-medium inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-[min(100%,22rem)] px-3">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkClassName} bg-primary text-primary-foreground hover:bg-primary/90`}
      >
        <Github className="w-4 h-4 shrink-0" aria-hidden />
        Code
      </a>

      {project.page.length === 0 ? (
        <span className={`${linkClassName} glass text-muted-foreground`}>Just Code</span>
      ) : (
        project.page.map((link) =>
          isExternalPage(link) ? (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClassName} glass hover:bg-white/20 max-w-full`}
            >
              <ExternalLink className="w-4 h-4 shrink-0" aria-hidden />
              <span className="truncate">{formatPageLabel(link)}</span>
            </a>
          ) : (
            <Link
              key={link}
              to={link}
              className={`${linkClassName} glass hover:bg-white/20`}
            >
              <ExternalLink className="w-4 h-4 shrink-0" aria-hidden />
              {formatPageLabel(link)}
            </Link>
          )
        )
      )}
    </div>
  )
}

function ProjectCard({
  project,
  index,
  reduceMotion,
}: {
  project: Project
  index: number
  reduceMotion: boolean | null
}) {
  const [open, setOpen] = useState(false)
  const cardRef = useRef<HTMLElement>(null)
  const panelId = useId()

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!cardRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <motion.article
      ref={cardRef}
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.05 }}
      className="group relative"
    >
      <div
        className={`glass rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 h-full flex flex-col hover:border-accent/30 group-focus-within:border-accent/30 ${
          open ? "border-accent/30" : ""
        }`}
      >
        <div
          data-open={open ? "true" : "false"}
          className={`relative h-48 sm:h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden z-10`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <span
            className={`text-6xl sm:text-8xl relative transition-transform duration-500 group-hover:scale-110 group-focus-within:scale-110 ${
              open ? "scale-110" : ""
            }`}
            aria-hidden
          >
            {project.icon}
          </span>

          {/*
            Touch: first tap reveals links (no navigation).
            Fine pointer: hover CSS reveals; this control stays out of the way.
            Keyboard: control remains focusable to open the panel.
          */}
          <button
            type="button"
            className={`absolute inset-0 z-20 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset ${
              open
                ? "opacity-0 pointer-events-none"
                : "opacity-100 [@media(hover:hover)_and_(pointer:fine)]:opacity-0 [@media(hover:hover)_and_(pointer:fine)]:pointer-events-none"
            }`}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Show links for {project.title}</span>
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-foreground/90 whitespace-nowrap pointer-events-none [@media(hover:hover)_and_(pointer:fine)]:hidden">
              Tap for links
            </span>
          </button>

          <div
            id={panelId}
            role="group"
            aria-label={`${project.title} project links`}
            data-open={open ? "true" : "false"}
            onClick={(event) => {
              if (event.target === event.currentTarget) setOpen(false)
            }}
            className="absolute inset-0 z-30 bg-background/70 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto"
          >
            <ProjectLinks project={project} />
          </div>
        </div>

        <div className="p-5 sm:p-8 flex flex-col flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-accent group-focus-within:text-accent">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const reduceMotion = useReducedMotion()

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.techIds.includes(activeFilter))

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Selected Work</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, automation,
            and data visualization.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`min-h-11 px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground hover:bg-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground text-lg py-16"
          >
            No projects found with this technology.
          </motion.p>
        )}
      </div>
    </section>
  )
}

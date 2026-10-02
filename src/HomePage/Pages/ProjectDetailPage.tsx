import { Link, Navigate, useParams } from "react-router"
import { ArrowLeft, CheckCircle2, ExternalLink, Github } from "lucide-react"
import { DocumentMeta } from "@/Components/seo/DocumentMeta"
import { Navbar } from "@/Components/CustomHedaer"
import { Footer } from "@/Components/CustomFooder"
import { getProjectBySlug, isExternalHref } from "@/data/projects"

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const primaryDemo = project.demos[0]

  return (
    <>
      <DocumentMeta
        title={project.title}
        description={project.summary}
        path={`/projects/${project.slug}`}
        type="article"
      />
      <Navbar />
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
        <article className="max-w-5xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground min-h-11"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>

          <header className="mt-6 mb-8 sm:mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-accent text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                {project.category.replace("-", " ")}
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {project.summary}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {primaryDemo &&
                (isExternalHref(primaryDemo.href) ? (
                  <a
                    href={primaryDemo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-12 px-5 rounded-full bg-accent text-accent-foreground font-semibold inline-flex items-center gap-2"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    to={primaryDemo.href}
                    className="min-h-12 px-5 rounded-full bg-accent text-accent-foreground font-semibold inline-flex items-center gap-2"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                ))}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-12 px-5 rounded-full glass font-semibold inline-flex items-center gap-2"
                >
                  View Code
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </header>

          <div
            className={`relative overflow-hidden rounded-3xl border border-border/70 mb-10 min-h-56 sm:min-h-80 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            ) : (
              <span className="text-7xl sm:text-8xl" aria-hidden>
                {project.icon}
              </span>
            )}
          </div>

          {project.demos.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 mb-10">
              {project.demos.map((demo) =>
                isExternalHref(demo.href) ? (
                  <a
                    key={demo.href}
                    href={demo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 glow-card rounded-xl px-4 py-3 text-sm font-medium min-h-11 inline-flex items-center"
                  >
                    {demo.label}
                  </a>
                ) : (
                  <Link
                    key={demo.href}
                    to={demo.href}
                    className="shrink-0 glow-card rounded-xl px-4 py-3 text-sm font-medium min-h-11 inline-flex items-center"
                  >
                    {demo.label}
                  </Link>
                )
              )}
            </div>
          )}

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.overview ?? project.description}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="glow-card rounded-xl px-4 py-3 text-sm font-medium min-h-11 flex items-center"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          {project.features && project.features.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.architecture && project.architecture.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.architecture.map((layer) => (
                  <div key={layer.label} className="glow-card rounded-2xl p-5">
                    <h3 className="font-semibold mb-3 text-accent">{layer.label}</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {layer.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </>
  )
}

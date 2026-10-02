import { Link } from "react-router"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/Components/ui/section-heading"
import { ProjectCard } from "@/HomePage/Components/project-card"
import { getFeaturedProjects } from "@/data/projects"
import { useI18n } from "@/i18n"

export function ProjectsSection() {
  const featured = getFeaturedProjects(4)
  const { t } = useI18n()

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-10 sm:mt-12 flex justify-center">
          <Link
            to="/projects"
            className="min-h-12 px-6 inline-flex items-center justify-center gap-2 rounded-full glass font-semibold hover:bg-white/10 transition-colors"
          >
            {t.projects.viewAll}
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}

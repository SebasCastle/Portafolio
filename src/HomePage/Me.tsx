import { lazy, Suspense } from "react"
import { DocumentMeta } from "@/Components/seo/DocumentMeta"
import { Footer } from "@/Components/CustomFooder"
import { Navbar } from "@/Components/CustomHedaer"
import { HeroSection } from "./Components/hero-section"
import { StatsSection } from "./Components/stats-section"
import { ProjectsSection } from "./Components/projects-section"

const SkillsSection = lazy(() =>
  import("./Components/skills-section").then((m) => ({ default: m.SkillsSection }))
)
const ExperienceSection = lazy(() =>
  import("./Components/experience-section").then((m) => ({ default: m.ExperienceSection }))
)
const ContactSection = lazy(() =>
  import("./Components/contact-section").then((m) => ({ default: m.ContactSection }))
)

function SectionFallback() {
  return <div className="min-h-[10rem]" aria-hidden />
}

export const HomePage = () => {
  return (
    <>
      <DocumentMeta path="/Home" />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ProjectsSection />
        <Suspense fallback={<SectionFallback />}>
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

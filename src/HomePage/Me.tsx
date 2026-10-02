import { lazy, Suspense } from "react";
import { Footer } from "../Components/CustomFooder";
import { Navbar } from "../Components/CustomHedaer";
import { HeroSection } from "./Components/hero-section";

const ProjectsSection = lazy(() =>
  import("./Components/projects-section").then((m) => ({ default: m.ProjectsSection }))
);
const SkillsSection = lazy(() =>
  import("./Components/skills-section").then((m) => ({ default: m.SkillsSection }))
);
const ExperienceSection = lazy(() =>
  import("./Components/experience-section").then((m) => ({ default: m.ExperienceSection }))
);
const AboutSection = lazy(() =>
  import("./Components/about-section").then((m) => ({ default: m.AboutSection }))
);
const ContactSection = lazy(() =>
  import("./Components/contact-section").then((m) => ({ default: m.ContactSection }))
);

function SectionFallback() {
  return <div className="min-h-[12rem]" aria-hidden />;
}

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </Suspense>
      <Footer />
    </>
  );
};

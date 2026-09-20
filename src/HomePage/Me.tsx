import { Footer } from "../Components/CustomFooder";
import { Navbar } from "../Components/CustomHedaer";
import { AboutSection } from "./Components/about-section";
import { ContactSection } from "./Components/contact-section";
import { ExperienceSection } from "./Components/experience-section";
import { HeroSection } from "./Components/hero-section";
import { ProjectsSection } from "./Components/projects-section";
import { SkillsSection } from "./Components/skills-section";

export const HomePage = () => {
  return (
    <>
    <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
};

import AboutSection from "./src/components/sections/AboutSection";
import ArticlesSection from "./src/components/sections/ArticlesSection";
import CertificationsSection from "./src/components/sections/CertificationsSection";
import ContactSection from "./src/components/sections/ContactSection";
import EducationSection from "./src/components/sections/EducationSection";
import ExperienceSection from "./src/components/sections/ExperienceSection";
import HeroSection from "./src/components/sections/HeroSection";
import ProjectsSection from "./src/components/sections/ProjectsSection";
import SkillsSection from "./src/components/sections/SkillsSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <ArticlesSection />
      <ContactSection />
    </main>
  );
}

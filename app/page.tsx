import HeroSection from "./src/components/sections/HeroSection";
import ProjectsSection from "./src/components/sections/ProjectsSection";
import SkillsSection from "./src/components/sections/SkillsSection";
import ArticlesSection from "./src/components/sections/ArticlesSection";
import ContactSection from "./src/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ArticlesSection />
      <ContactSection />
    </main>
  );
}

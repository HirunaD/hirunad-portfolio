import HeroSection from "./src/components/sections/HeroSection";
import ProjectsSection from "./src/components/sections/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}

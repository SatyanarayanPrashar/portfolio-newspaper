
import Experience from "./_components/experience";
import HeroComponent from "./_components/hero";
import ProjectSection from "./_components/project";

export default function Home() {
  

  return (
    <div className="h-full flex flex-col items-center mx-[5vw] text-amber-950">
      <HeroComponent />
      <ProjectSection />
      <Experience />
    </div>
  );
}

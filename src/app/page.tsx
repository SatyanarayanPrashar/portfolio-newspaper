
import Experience from "./_components/experience";
import HeroComponent from "./_components/hero";
import ProjectSection from "./_components/project";
import TechContantSection from "./_components/techcontact";

export default function Home() {

  return (
    <div className="h-full flex flex-col items-center mx-[5vw] text-amber-950">
      <HeroComponent />
      <ProjectSection />
      <Experience />
      <TechContantSection classname="flex md:hidden w-full justify-center items-center" gridclass="grid-cols-12 text-[5vw]"/>
    </div>
  );
}

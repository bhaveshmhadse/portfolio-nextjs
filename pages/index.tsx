import type { NextPage } from "next";
import { useEffect } from "react";

import HeroSection from "../components/Hero/HeroSection";
// import LayoutFlow from "../components/Journey/Flow";
import Journey from "../components/Journey/JourneySection";
import ProjectsSection from "../components/Projects/ProjectsSection";
import SkillsSection from "../components/Skills/SkillsSection";

const Home: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full bg-zinc-800 text-white '>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <Journey />
      <div className='w-full h-screen'></div>
    </div>
  );
};

export default Home;

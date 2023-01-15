import type { NextPage } from "next";
import { useEffect } from "react";
import CertificatesSection from "../components/Certificates/CertificatesSection";
import Footer from "../components/Footer/Footer";

import HeroSection from "../components/Hero/HeroSection";
// import LayoutFlow from "../components/Journey/Flow";
import Journey from "../components/Journey/JourneySection";
import ProjectsSection from "../components/Projects/ProjectsSection";
import SkillsSection from "../components/Skills/SkillsSection";

const Home: NextPage = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full h-auto bg-zinc-800 text-white '>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <Journey />
      <CertificatesSection />
      <Footer />
    </div>
  );
};

export default Home;

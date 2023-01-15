import Footer from "../../components/Footer/Footer";
import DecorativeLineSeperator from "../../components/Global/DecorativeLineSeperator";
import Navbar from "../../components/Hero/Navbar";
import ProjectsSection from "../../components/Projects/ProjectsSection";

const ProjectPage = () => {
  return (
    <div className='flex w-full h-auto bg-zinc-800'>
      <Navbar key={Math.random().toString()} />
      <div className='w-full h-auto my-20'>
        <ProjectsSection />
        <DecorativeLineSeperator />
        <Footer />
      </div>
    </div>
  );
};

export default ProjectPage;

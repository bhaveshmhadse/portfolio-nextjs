import Navbar from "../../components/Hero/Navbar";
import ProjectsSection from "../../components/Projects/ProjectsSection";

const ProjectPage = () => {
  return (
    <div className='flex w-full h-auto bg-zinc-800'>
      <Navbar />
      <div className='flex w-full h-auto py-24'>
        <ProjectsSection />
      </div>
    </div>
  );
};

export default ProjectPage;

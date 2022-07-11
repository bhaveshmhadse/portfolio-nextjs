import { useEffect, useState } from "react";

import DecorativeLineSeperator from "../Global/DecorativeLineSeperator";

import ProjectCard from "./ProjectCard";
import SectionHeader from "../Global/SectionHeader";

import { projectsArray } from "./ProjectsData";

const ProjectsSection = () => {
  let [doFlip, setdoFlip] = useState(true);
  let [projects, setprojects] = useState(projectsArray);

  const handleWidth = () => {
    window.innerWidth < 600 ? setdoFlip(false) : setdoFlip(true);
  };

  useEffect(() => {
    handleWidth();
  }, []);

  return (
    <div className='flex w-full h-auto py-24'>
      <div className='h-auto w-full'>
        <SectionHeader title='Projects' />

        <div className='w-full h-auto m-o '>
          {projects.map((eachProject, index) => (
            <ProjectCard liveDemoUrl={eachProject.liveDemoUrl} githubUrl={eachProject.githubUrl} heading={eachProject.heading} description={eachProject.description} imageUrl={eachProject.imageUrl} key={Math.random().toString()} index={doFlip ? index : 2} />
          ))}
        </div>

        <DecorativeLineSeperator />
      </div>
    </div>
  );
};

export default ProjectsSection;

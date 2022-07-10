import { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";

import DecorativeLineSeperator from "../Global/DecorativeLineSeperator";
import SectionHeader from "../Global/SectionHeader";

import { projectsArray } from "./ProjectsData";

const ProjectsSection = () => {
  let [projects, setprojects] = useState(projectsArray);

  let [doFlip, setdoFlip] = useState(true);

  const handleWidth = () => {
    window.innerWidth < 600 ? setdoFlip(false) : setdoFlip(true);
  };

  useEffect(() => {
    handleWidth();
  }, []);

  return (
    <div className='h-auto   items-center justify-center'>
      <SectionHeader title='Projects' />
      {projects.map((eachProject, index) => (
        <ProjectCard liveDemoUrl={eachProject.liveDemoUrl} githubUrl={eachProject.githubUrl} heading={eachProject.heading} description={eachProject.description} imageUrl={eachProject.imageUrl} key={Math.random().toString()} index={doFlip ? index : 2} />
      ))}

      <DecorativeLineSeperator />
    </div>
  );
};

export default ProjectsSection;

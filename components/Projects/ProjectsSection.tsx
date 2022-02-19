import { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";

import DecorativeLineSeperator from "../Global/DecorativeLineSeperator";
import SectionHeader from "../Global/SectionHeader";

const ProjectsSection = () => {
  let [projects, setprojects] = useState([1, 2, 3, 4, 5, 6]);

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
            <ProjectCard key={eachProject} index={doFlip ? index : 2} />
          ))}
 
      <DecorativeLineSeperator />
    </div>
  );
};

export default ProjectsSection;

import Link from "next/link";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { techStackHash } from "./ProjectsData";
import { globalSkillsHash } from "../Skills/Languages";

import { isEven } from "../../controllers/helperFuntions";

const ProjectCard = ({ index, heading, description, imageUrl, liveDemoUrl, githubUrl }: any) => {
  let [orientation, setorientation] = useState<any[]>([<ProjectImage alignImageToLeft={index % 2 != 0} imageUrl={imageUrl} key={Math.random().toString()} />, <ProjectInfo addPaddingToLeft={index % 2 != 0} liveDemoUrl={liveDemoUrl} githubUrl={githubUrl} description={description} heading={heading} key={Math.random().toString()} />]);

  const changeOrientation = () => (isEven(index) ? setorientation([<ProjectImage alignImageToLeft={index % 2 != 0} imageUrl={imageUrl} key={Math.random().toString()} />, <ProjectInfo addPaddingToLeft={index % 2 != 0} liveDemoUrl={liveDemoUrl} githubUrl={githubUrl} description={description} heading={heading} key={Math.random().toString()} />]) : setorientation([<ProjectInfo addPaddingToLeft={index % 2 != 0} liveDemoUrl={liveDemoUrl} githubUrl={githubUrl} description={description} heading={heading} key={Math.random().toString()} />, <ProjectImage alignImageToLeft={index % 2 != 0} imageUrl={imageUrl} key={Math.random().toString()} />]));

  const handleOrientation = () => {
    window.innerWidth > 600 ? changeOrientation() : "";
  };

  useEffect(() => {
    handleOrientation();

    return () => handleOrientation();
  }, []);

  return (
    <div className='flex m-0 h-auto w-full items-center justify-center'>
      <div className='h-auto w-full lg:w-5/6 '>
        <div className='my-20 h-auto lg:my-10 mx-4 block lg:flex '>{orientation.map(eachObj => eachObj)}</div>
      </div>
    </div>
  );
};

const ProjectImage = ({ imageUrl, alignImageToLeft }: { imageUrl: string; alignImageToLeft: any }) => {
  return (
    <div className={`w-full p-0 lg:p-4 flex items-center  my-10 ${alignImageToLeft ? "lg:justify-start" : "lg:justify-end"} justify-center`}>
      <div className='justify-start items-start h-auto w-full flex'>
        <Link key={Math.random().toString()} href={`${imageUrl.split(".jpg").join("/")}`}>
          <img className='hover:scale-110 hover:rounded-lg  duration-300 hover:drop-shadow-2xl lg:p-2 rounded-2xl drop-shadow-lg w-full smooth-image' src={`${imageUrl}`} />
        </Link>
      </div>
    </div>
  );
};

const ProjectInfo = ({ heading, description, liveDemoUrl, githubUrl, addPaddingToLeft }) => {
  return (
    <div key={Math.random().toString()} className={`w-full  py-2 ${addPaddingToLeft ? "pl-4" : "px-0"}  flex items-center justify-center `}>
      <div className=' w-full'>
        <h1 className='text-5xl mb-5 green-text font-extrabold uppercase'> {heading} </h1>
        <p className='mb-4 text-justify lg:pr-4 font-bold text-gray-400 leading-loose paragraph'> {description} </p>
        <div className='flex w-full '>
          <AnimatePresence key={Math.random().toString()}>
            <Link key={Math.random().toString()} href={liveDemoUrl}>
              <motion.button className={"uppercase animate-bounce float-left px-6 mr-4 py-2 font-black rounded-lg bg-rose-400 text-zinc-800 text-sm hover:bg-rose-400/90"}>Demo</motion.button>
            </Link>
          </AnimatePresence>

          <Link key={Math.random().toString()} href={githubUrl}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='uppercase whitespace-nowrap float-left px-6 mr-4 py-2 font-semibold rounded-lg bg-zinc-700/30 text-rose-400   text-sm  hover:bg-zinc-700/20'>
              Source Code
            </motion.button>
          </Link>
        </div>
        <TechStack projectName={heading} />
      </div>
    </div>
  );
};

const TechStack = ({ projectName }) => {
  let [techStackArray, settechStackArray] = useState(techStackHash[projectName]);

  return (
    <div className=' mt-4 flex items-center justify-start'>
      {techStackArray.map(eachObj => (
        <Link key={Math.random().toString()} href={`projects/${projectName}`}>
          <div key={Math.random().toString()} className='cursor-pointer w-8 h-8 mx-2'>
            {globalSkillsHash[eachObj]}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCard;

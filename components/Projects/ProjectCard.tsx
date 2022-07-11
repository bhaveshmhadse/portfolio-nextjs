import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { isEven } from "../../controllers/helperFuntions";

import { globalSkillsHash } from "../Skills/Languages";

const ProjectCard = ({ index, heading, description, imageUrl, liveDemoUrl, githubUrl }: any) => {
  let [orientation, setorientation] = useState<any[]>([<ProjectImage alignImageToLeft={index % 2 == 0} imageUrl={imageUrl} key={Math.random().toString()} />, <ProjectInfo individualProjectUrl={imageUrl} liveDemoUrl={liveDemoUrl} githubUrl={githubUrl} description={description} heading={heading} key={Math.random().toString()} />]);

  const changeOrientation = () => (isEven(index) ? setorientation([<ProjectImage alignImageToLeft={index % 2 == 0} imageUrl={imageUrl} key={Math.random().toString()} />, <ProjectInfo individualProjectUrl={imageUrl} liveDemoUrl={liveDemoUrl} githubUrl={githubUrl} description={description} heading={heading} key={Math.random().toString()} />]) : setorientation([<ProjectInfo individualProjectUrl={imageUrl} liveDemoUrl={liveDemoUrl} githubUrl={githubUrl} description={description} heading={heading} key={Math.random().toString()} />, <ProjectImage alignImageToLeft={index % 2 == 0} imageUrl={imageUrl} key={Math.random().toString()} />]));

  const handleOrientation = () => {
    window.innerWidth > 600 ? changeOrientation() : "";
  };

  useEffect(() => {
    handleOrientation();

    return () => handleOrientation();
  }, []);

  return (
    <div className='flex items-center justify-center'>
      <div className='h-auto lg:w-3/4 '>
        <div className=' my-20 lg:my-10 mx-4 block lg:flex '>{orientation.map(eachObj => eachObj)}</div>
      </div>
    </div>
  );
};

const ProjectImage = ({ imageUrl, alignImageToLeft }: { imageUrl: string; alignImageToLeft: any }) => {
  useEffect(() => {
    console.log("imageUrl is:", imageUrl);
  }, []);

  return (
    <div className={`w-full lg:p-4 flex  items-center  my-10 ${alignImageToLeft ? "lg:justify-start" : "lg:justify-end"} justify-center`}>
      <div className='  justify-start items-start h-auto lg:w-full w-11/12  flex'>
        <Link href={`${imageUrl.split(".jpg").join("/")}`}>
          <img className='hover:scale-110 hover:rounded-lg  duration-300 hover:drop-shadow-2xl lg:p-2 rounded-2xl drop-shadow-lg w-full smooth-image' src={`${imageUrl}`} />
        </Link>
      </div>
    </div>
  );
};

const ProjectInfo = ({ heading, description, liveDemoUrl, githubUrl, individualProjectUrl }) => {
  return (
    <div className='w-full  p-4 flex items-center justify-center '>
      <div className=' w-full'>
        <h1 className='text-5xl mb-5 green-text font-extrabold uppercase'> {heading} </h1>
        <p className='mb-4 text-justify lg:pr-4 font-bold text-gray-400 leading-loose paragraph'> {description} </p>
        <div className='flex w-full '>
          <AnimatePresence>
            <Link href={liveDemoUrl}>
              <motion.button className={"uppercase animate-bounce float-left px-6 mr-4 py-2 font-black rounded-lg bg-rose-400 text-zinc-800 text-sm hover:bg-rose-400/90"}>Demo</motion.button>
            </Link>
          </AnimatePresence>

          <Link href={githubUrl}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='uppercase whitespace-nowrap float-left px-6 mr-4 py-2 font-semibold rounded-lg bg-zinc-700/30 text-rose-400   text-sm  hover:bg-zinc-700/20'>
              Source Code
            </motion.button>
          </Link>

          <Link href={`${individualProjectUrl.split(".jpg").join("/")}`}>
            <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='uppercase whitespace-nowrap ml-auto lg:pr-6 py-2 font-semibold rounded-lg text-rose-400  text-sm  '>
              Tech Stack
            </motion.p>
          </Link>
        </div>
        <div className=' mt-4 flex items-center justify-start'>
          {["nextjs", "tailwindcss", "linux", "docker"].map(eachObj => (
            <div key={Math.random().toString()} className='w-8 h-8 mx-2'>
              {globalSkillsHash[eachObj]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

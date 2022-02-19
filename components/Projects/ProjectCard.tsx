import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import { isEven } from "../../controllers/helperFuntions";

const ProjectCard = ({ index }: { index: number }) => {
  let [orientation, setorientation] = useState<any[]>([<ProjectImage key={Math.random().toString()} />, <ProjectInfo key={Math.random().toString()} />]);

  const changeOrientation = () => (isEven(index) ? setorientation([<ProjectImage key={Math.random().toString()} />, <ProjectInfo key={Math.random().toString()} />]) : setorientation([<ProjectInfo key={Math.random().toString()} />, <ProjectImage key={Math.random().toString()} />]));

  const handleOrientation = () => {
    window.innerWidth > 600 ? changeOrientation() : "";
  };

  useLayoutEffect(() => {
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

const ProjectImage = () => {
  return (
    <div className='w-full lg:p-4 flex text-center items-center justify-center my-10'>
      <div className=' justify-center items-center h-auto w-full lg:w-1/2  flex'>
        <img className='  lg:p-2  -rotate-90 rounded-lg-full drop-shadow-lg' src='bhaveshProfile.jpg' />
      </div>
    </div>
  );
};

const ProjectInfo = () => {
  let [show, setshow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setshow(true);
    }, 1000);
  }, []);

  return (
    <div className='w-full p-4 flex items-center justify-center '>
      <div className=' w-full'>
        <h1 className='text-4xl  mb-5 green-text font-extrabold'>Project Name</h1>
        <p className='mb-4 text-justify lg:pr-4 font-bold text-gray-500 leading-loose paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit justo ut sapien interdum, eu tristique purus blandit. Suspendisse potenti. In imperdiet auctor tincidunt. Aliquam ac tellus tempus, tempor lorem non, feugiat libero. Vestibulum eget libero hendrerit, pulvinar lacus et,
          placerat arcu. Nam vel eros vitae arcu dapibus consectetur. Sed vitae leo et elit tempus imperdiet vitae id nulla. Etiam eu eros interdum, porttitor lacus non, cursus leo.
        </p>
        <div className='flex w-full '>
          <AnimatePresence>
            <motion.button animate={{ x: 0, y: [-50, 10, 0, -10], opacity: 1 }} transition={{ ease: "easeInOut" }} initial={{ opacity: 0.5 }} className={`${show ? " animate-bounce " : " "} float-left px-6 mr-4 py-2 font-black rounded-lg bg-rose-400 text-gray-900 text-sm hover:bg-rose-400/90`}>
              Demo
            </motion.button>
          </AnimatePresence>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='float-left px-6 mr-4 py-2 font-semibold rounded-lg bg-zinc-700/30 text-rose-400   text-sm  hover:bg-zinc-700/20'>
            Source Code
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

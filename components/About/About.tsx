import { AnimatePresence, motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <div className='bg-zinc-800 h-screen flex items-center justify-center'>
        <motion.div className='flex   w-full mx-2 h-screen lg:h-auto lg:-translate-y-10 z-10'>
          <div className=' justify-start items-center h-auto w-1/3 hidden lg:flex'>
            <AnimatePresence>
              {" "}
              <motion.img animate={{ x: 0, y: [-200, 0], rotate: -90 }} initial={false} className='-rotate-90  p-2   rounded-full drop-shadow-lg' src='bhaveshProfile.jpg' />
            </AnimatePresence>
          </div>

          <div className='flex w-full  items-center px-2 '>
            <div className='block  w-full font-bold h-auto '>
              <AnimatePresence>
                <motion.h1 animate={{ x: 0, y: [-100, 0], opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.5 }} className=' lg:text-5xl   text-6xl  leading-snug -translate-y-10 lg:translate-y-0 text-white'>
                  I am Bhavesh Mhadse, <span className='green-text'>a Developer</span>
                </motion.h1>
                <motion.button animate={{ x: 0, y: [100, 0], opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 1 }} className='mt-6 lg:text-3xl text-5xl w-full lg:w-1/4 py-2 font-bold green rounded-lg lg:px-6 lg:py-2 text-black'>
                  Projects
                </motion.button>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

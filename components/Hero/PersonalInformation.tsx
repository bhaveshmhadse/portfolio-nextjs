import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import DecorativeLineSeperator from "../Global/DecorativeLineSeperator";

const PersonalInformation = () => {
  let [animate, setanimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setanimate(true);
    }, 2000);
  }, []);

  return (
    <div>
      <div className=' h-screen flex items-center justify-center'>
        <motion.div className=' flex lg:w-5/6  mx-2 h-screen lg:h-auto lg:-translate-y-10 z-10'>
          <div className=' justify-start items-center h-auto w-1/3 hidden  lg:flex'>
            <AnimatePresence>{animate && <motion.img whileTap={{ scale: 0.9 }} animate={{ x: [-100, 0], y: 0, rotate: -90, opacity: 1 }} initial={{ opacity: 0 }} className='-rotate-90  p-2   rounded-full drop-shadow-lg' src='bhaveshProfile.jpg' />}</AnimatePresence>
          </div>

          <div className='flex w-full   items-center px-2 '>
            <div className='block  w-full font-bold h-auto '>
              {animate && (
                <AnimatePresence>
                  <motion.h1 key={Math.random().toString()} animate={{ x: 0, y: [-100, 0], opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.5 }} className='   text-6xl  leading-snug -translate-y-10 lg:translate-y-0 font-black text-justify'>
                    Hello, I am Bhavesh, <span className='green-text'>a Developer.</span>
                  </motion.h1>
                  <motion.button animate={{ x: 0, y: [100, 0], opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 1 }} className='mt-6 text-zinc-800 lg:text-3xl text-5xl w-full lg:w-1/4 py-2  green rounded-lg lg:px-6 lg:py-2 font-black '>
                    <a href='/resume/Bhavesh Mhadse Resume.pdf' target='_blank' rel='noreferrer' download>
                      Resume
                    </a>
                  </motion.button>
                </AnimatePresence>
              )}
            </div>
          </div>
        </motion.div>
      </div>
      <div className='-translate-y-20'>
        <DecorativeLineSeperator />
      </div>
    </div>
  );
};

export default PersonalInformation;

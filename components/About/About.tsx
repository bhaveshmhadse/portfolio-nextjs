import { AnimatePresence, motion } from "framer-motion";
import Footer from "../Footer/Footer";
import DecorativeLineSeperator from "../Global/DecorativeLineSeperator";

const About = () => {
  return (
    <div>

    <div className='bg-zinc-800 flex w-full items-center justify-center h-full py-24'>
      <motion.div key={Math.random().toString()} className=' bg-red-00 w-11/12 h-auto flex flex-col lg:flex-row'>
        <AboutImage />
        <AboutInfo />
      </motion.div>
    </div>
    <DecorativeLineSeperator/>
    <Footer/>
    </div>
  );
};

const AboutImage = () => {
  return (
    <motion.div key={Math.random().toString()} className='w-full p-2 lg:bg-zinc-900/40 rounded-l-2xl h-auto flex justify-center items-center lg:flex'>
      <AnimatePresence key={Math.random().toString()}>
        <motion.img key={Math.random().toString()} animate={{ x: 0, y: [10, 0] }} initial={false} className='z-20 rounded-full  w-4/6' src='profile/bhaveshmhadse.jpg' />
        <hr className='h-24 lg:hidden border-2 border-l-2 border-zinc-700 z-10 rotate'></hr>
        <span key={Math.random().toString()} className='lg:hidden absolute z-30 text-zinc-500 font-extrabold translate-x-40 translate-y-12'>
          2001
        </span>
      </AnimatePresence>
    </motion.div>
  );
};

const AboutInfo = () => {
  return (
    <div className='w-full items-center justify-center h-auto flex pt-6 pb-12 lg:flex  rounded-r-lg lg:bg-transparent mt-6'>
      <div className='w-full lg:w-11/12 font-bold h-auto '>
        <AnimatePresence>
          <motion.h1 animate={{ x: 0, y: [-100, 0], opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.5 }} className=' lg:text-lg text-base lg:leading-relaxed md:leading-loose leading-normal text-justify text-gray-400 '>
            Bhavesh is an enthusiast Full stack developer who loves to build Scalable and Fast Web Applications. Born and brought up in Thane, Maharashtra (India) he aims to write clean and robust code. Armed with a constant desire to figure out why and how things work the way they do, Bhavesh started learning how to code at the age of 18 and immediately fell in love with it. In his previous role at BITGLAZE he was a Frontend Web Developer intern.He workend on developing Interactive dashboard for clients to view their data in efficient way. Apart from solving coding and algorithmic problems, he also enjoys reading books and doing workout. He strives for constant learning about new technologies and their uses and applications in real world.
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default About;

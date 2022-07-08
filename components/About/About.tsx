import { AnimatePresence, motion } from "framer-motion";

const About = () => {
  return (
    <div className='bg-zinc-800 flex w-full items-center justify-center h-full py-24'>
      <motion.div className=' bg-red-00 w-11/12 h-auto flex flex-col lg:flex-row'>
        <motion.div className='w-full p-2 lg:bg-zinc-900/40 rounded-l-lg h-auto flex justify-center items-center lg:flex'>
          <AnimatePresence>
            <motion.img animate={{ x: 0, y: [10, 0], rotate: -90 }} initial={false} className='z-20 -rotate-90 rounded-full  w-4/6' src='bhaveshProfile.jpg' />
            <hr className='h-24 border-2 border-l-2 border-zinc-700 z-10 rotate'></hr>
            <span className='absolute z-30 text-zinc-500 font-extrabold translate-x-36 translate-y-10'>2001</span>
          </AnimatePresence>
        </motion.div>
        <div className='w-full items-center justify-center bg-rd-800 h-auto flex pt-6 pb-12 lg:flex bg-zinc-800 rounded-r-lg lg:bg-transparent bg-zinc-900/40 mt-6'>
          <div className='w-11/12 font-bold h-auto '>
            <AnimatePresence>
              <motion.h1 animate={{ x: 0, y: [-100, 0], opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.5 }} className=' lg:text-lg text-base lg:leading-relaxed  leading-normal text-justify text-gray-500'>
                Bhavesh is an enthusiast Full stack developer who loves to build Scalable and Fast Web Applications. Born and brought up in Thane, Maharashtra (India) he aims to write clean and robust code. Armed with a constant desire to figure out why and how things work the way they do, Bhavesh started learning how to code at the age of 18 and immediately fell in love with it. In his previous role at BITGLAZE he was a Frontend Web Developer intern.He workend on developing Interactive dashboard for clients to view their data in efficient way. Apart from solving coding and algorithmic problems, he also enjoys reading books and doing workout. He strives for constant learning about new technologies and their uses and applications in real world.
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

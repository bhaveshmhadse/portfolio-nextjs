import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { isEven } from "../../controllers/helperFuntions";

const Skill = ({ title, index }: any) => {
  let [show, setshow] = useState(false);

  const handleSkills = () => {
    setshow(true);
    setTimeout(() => {}, index);
  };

  useEffect(() => {
    setTimeout(() => {
      handleSkills();
    }, Number(100 * index));
  }, []);

  return (
    <div className=' grid '>
      <AnimatePresence>
        {show && (
          <motion.div className=' p-4 w-full  text-center flex items-center justify-center '>
            <motion.img animate={{ x: 0, y: 0, scale: [0.5, 2, 1] }} transition={{ duration: 1, ease: "easeInOut" }} style={{ imageRendering: "pixelated" }} className='lg:w-1/6 w-1/2 ' src={`${title}.png`} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {show && (
          <motion.div animate={{ x: 0, y: [200, 0], opacity: 1 }} transition={{ delay: 1 }} initial={{ opacity: 0 }} className='w-full  p-4 '>
            <motion.h1 whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.8 }} className='select-none text-gray-400 uppercase font-bold paragraph'>
              {title}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skill;

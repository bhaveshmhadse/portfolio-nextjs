import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Skills } from "../../controllers/getSkills";
import SkillsContainer from "./SkillsContainer";

const SkillSet = () => {
  let [selectedSkill, setselectedSkill] = useState("Languages");

  return (
    <div className='w-full block text-center  h-auto'>
      <div className='flex w-full items-center justify-center text-center   '>
        <div className='lg:w-1/2 lg:p-2 px-8 text-center flex w-full justify-center '>
          <motion.button className={`lg:text-xl text-sm rounded lg:px-6 px-4 py-4  font-bold gr duration-500 ease-in-out ${selectedSkill == "Languages" ? " green-border green-text" : " text-gray-600"} border-4 border-transparent transition-all ease-in-out duration-300 paragraph`} onClick={() => setselectedSkill("Languages")}>
            Languages
          </motion.button>
          <motion.button className={`lg:text-xl text-sm rounded lg:px-6 px-4 py-4  font-bold gr duration-500 ease-in-out ${selectedSkill == "Frameworks" ? " green-border green-text" : " text-gray-600"} border-4 border-transparent transition-all ease-in-out duration-300 paragraph`} onClick={() => setselectedSkill("Frameworks")}>
            Frameworks
          </motion.button>
          <motion.button className={`lg:text-xl text-sm rounded lg:px-6 px-4 py-4  font-bold gr duration-500 ease-in-out ${selectedSkill == "Databases" ? " green-border green-text" : " text-gray-600"} border-4 border-transparent transition-all ease-in-out duration-300 paragraph`} onClick={() => setselectedSkill("Databases")}>
            Databases
          </motion.button>
        </div>
      </div>
      <SkillsContainer arrayOfSkills={Skills[selectedSkill.toLocaleLowerCase()]} />
    </div>
  );
};

export default SkillSet;
